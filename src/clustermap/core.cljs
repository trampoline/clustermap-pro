(ns clustermap.core
  (:require-macros [hiccups.core :as hiccups]
                   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [om.core :as om :include-macros true]
   [devtools.core :as devtools]
   [clustermap.util :as util :refer [inspect]]
   [clustermap.api :as api]
   [clustermap.app :as app]
   [clustermap.filters :as filters]
   [clustermap.formats.time :as time]
   [clustermap.formats.number :as num :refer [div! *! -! +!]]
   [clustermap.formats.money :as money]
   [clustermap.formats.regions :as regions]
   [clustermap.formats.sic07 :as sic07]
   [clustermap.components.map :as map]
   [clustermap.components.filter :as filter]
   [clustermap.components.search :as search]
   [clustermap.components.select-chooser :as select-chooser]
   [clustermap.components.checkbox-boolean :as checkbox-boolean]
   [clustermap.components.color-scale :as color-scale]
   [clustermap.components.map-report :as map-report]
   [clustermap.components.table :as table]
   [clustermap.components.ranges-table :as ranges-table]
   [clustermap.components.ranges-chart :as ranges-chart]
   [clustermap.components.timeline-chart :as timeline-chart]
   [clustermap.components.tag-histogram :as tag-histogram]
   [clustermap.components.geo-sponsors :as geo-sponsors]
   [clustermap.components.filter-component-description :as filter-component-description]
   [clustermap.components.filter-description :as filter-description]
   [clustermap.components.text :as text]
   [clustermap.components.company-info :as company-info]
   [clustermap.components.nav-button :as nav-button]
   [clustermap.components.action-button :as action-button]
   [clustermap.components.action-link :as action-link]
   [clustermap.components.chart-helpers :as chart-helpers]
   [clustermap.boundarylines :as bl]
   [cljs.core.async :refer [chan <! put! sliding-buffer >!]]
   [schema.core :as s :refer-macros [defschema]]))

;; assume we are in dev-mode if there is repl support
(def ^:private dev-mode (some-> js/window .-config .-repl))

;; the IApp object
(def ^:private app-instance (atom nil))

(defn get-app-state-atom
  []
  (-> app-instance
      deref
      clustermap.app/get-state))

(def max-lag-months 22)

;; tests that latest and previous accounts are not too old
(def current-filter {:nested {:path "?accounts"
                              :filter {:bool {:must [{:term {"rank" 1}}
                                                     {:range {"accounts_date" {:gte (time/format-date (time/months-ago max-lag-months))}}}]}}}})

;; scaleup query : is this a scaleup considering accounts of rank n
;; (1 = latest, 2 = previous, 3 = 2 years prior etc)
(defn scaleup-rank-filter
  [n]
  {:bool {:must [{:nested {:path "?accounts"
                           :filter {:bool {:must [{:term {"rank" n}}
                                                  {:range {"accounts_date" {:gte (time/format-date (time/months-ago (+ max-lag-months (* 12 (dec n)))))}}}
                                                  {:range {"turnover_delta_norm" {:gte 0.2}}}]}}}}
                 {:nested {:path "?accounts"
                           :filter {:bool {:must [{:term {"rank" (inc n)}}
                                                  {:range {"accounts_date" {:gte (time/format-date (time/months-ago (+ max-lag-months (* 12 n))))}}}
                                                  {:range {"turnover_delta_norm" {:gte 0.2}}}
                                                  {:range {"employee_count" {:gte 10}}}
                                                  {:range {"turnover" {:gte 1000000}}}]}}}}]}})
;; is this currently a scale-up
(def scaleup-filter
  (scaleup-rank-filter 1))

;; was this a scaleup a year previously
(def previous-scaleup-filter
  (scaleup-rank-filter 2))

(defn boundaryline-filter
  [boundaryline-id]
  (when boundaryline-id
    {:nested {:path "?boundarylines"
              :filter {:term {"boundaryline_id" boundaryline-id}}}}))

(defn make-boundaryline-selection
  [boundaryline-id]
  (let [app-state (app/get-state @app-instance)
        ch (when boundaryline-id
             (bl/get-or-fetch-boundaryline app-state :boundarylines boundaryline-id))]
    (go
      (let [bl (when ch (<! ch))]
        (.log js/console bl)
        (let [bl-filter (when boundaryline-id (boundaryline-filter boundaryline-id))
              bl-name (when boundaryline-id (aget bl "compact_name"))

              updated-filters (filters/update-filter-component (get-in @app-state [:dynamic-filter-spec])
                                                               :boundaryline
                                                               bl-filter
                                                               bl-name
                                                               boundaryline-id)]
          (.log js/console (clj->js updated-filters))

          (swap! app-state
                 assoc-in
                 [:dynamic-filter-spec]
                 updated-filters))))))

(defn make-company-selection
  [natural-id]
  (let [state-atom (get-app-state-atom)
        components (get-in @state-atom [:selection-filter-spec :components])
        components (assoc-in components [:natural-id] {:term {"?natural_id" natural-id}})
        base-filters (get-in @state-atom [:selection-filter-spec :base-filters])
        composed (filters/compose-filters components base-filters)]
    (swap! state-atom update-in [:selection-filter-spec] merge {:components components :composed composed})))

(defn company-link-render-fn
  [name record]
  [:a {:href "#"
       :target "_blank"
       :onClick (fn [e]
                  (.preventDefault e)
                  (make-company-selection (:?natural_id record))
                  (app/navigate @app-instance "company"))}
   name])

(defn sign-icon
  [n]
  (cond
    (> n 0) [:i.icon-positive]
    (< n 0)  [:i.icon-negative]
    :else nil))


(def initial-state
  {:boundarylines {
                   :collections {
                                 "uk_boroughs" {:index nil
                                                :rtree nil
                                                :boundarylines {}}
                                 "uk_wards" {:index nil
                                             :rtree nil
                                             :boundarylines {}}
                                 "uk_regions" {:index nil
                                               :rtree nil
                                               :boundarylines {}}}
                   :boundarylines {}}

   :dynamic-filter-spec {:id :coll

                         ;; dynamic components
                         :components {}

                         ;; {:boundaryline nil,
                         ;;              :sector {:bool
                         ;;                       {:should
                         ;;                        [{:nested
                         ;;                          {:path "?tags",
                         ;;                           :filter {:bool
                         ;;                                    {:must [{:term {"type" "broad_12_sectors"}}
                         ;;                                            {:term {"tag" "knowledge_intensive_professional_services"}}]}}}}]}}}

                         ;; dynamic component descriptions
                         :component-descrs {} ;;{:sector "Sector: Knowledge Intensive Professional Services"}

                         ;; dynamic component url descriptions
                         :url-components {} ;;{:sector "knowledge_intensive_professional_services"}

                         ;; filters to compose with components
                         :base-filters {:all nil}

                         ;; horrible to be setting a default filter like this TODO
                         ;; make filter spec simple (in terms of filter-component/keys),
                         ;; and convert to ES filters later
                         :composed {}
                         ;; {:all
                         ;;            {:bool
                         ;;             {:must
                         ;;              [{:bool
                         ;;                {:should
                         ;;                 [{:nested
                         ;;                   {:path "?tags",
                         ;;                    :filter
                         ;;                    {:bool
                         ;;                     {:must [{:term {"type" "broad_12_sectors"}}
                         ;;                             {:term {"tag" "knowledge_intensive_professional_services"}}]}}}}]}}]}}}

                         ;; specifications for dynamic components
                         :component-specs [

                                           {:id :age
                                            :type :checkboxes
                                            :label "Age"
                                            :visible true
                                            :options [;; {:value "any" :filter nil :label "Any" :omit-description true}
                                                      {:value "new" :label "< 5 years" :filter {:range {"!formation_date" {:gte "2009-01-01"}}}}
                                                      {:value "old" :label ">= 5 years" :filter {:range {"!formation_date" {:lt "2009-01-01"}}}}]}

                                           {:id :reg-year
                                            :type :checkboxes
                                            :label "Reg. Year"
                                            :visible true
                                            :controls true
                                            :options [;; {:id "any" :filter nil :label "Any"}
                                                      {:value "2010" :label "2010" :filter {:range {"!formation_date" {:gte "2010-01-01" :lt "2011-01-01"}}}}
                                                      {:value "2011" :label "2011" :filter {:range {"!formation_date" {:gte "2011-01-01" :lt "2012-01-01"}}}}
                                                      {:value "2012" :label "2012" :filter {:range {"!formation_date" {:gte "2012-01-01" :lt "2013-01-01"}}}}
                                                      {:value "2013" :label "2013" :filter {:range {"!formation_date" {:gte "2013-01-01" :lt "2014-01-01"}}}}
                                                      ]}

                                           {:id :latest-turnover
                                            :type :checkboxes
                                            :label "Turnover"
                                            :visible true
                                            :controls true
                                            :options [;; {:value "any" :label "Any" :filter nil}
                                                      {:value "min" :label "< £1m" :filter {:range {"!latest_turnover" {:lt 1000000}}}}
                                                      {:value "low" :label "£1m - £5m" :filter {:range {"!latest_turnover" {:gte 1000000 :lt 5000000}}}}
                                                      {:value "lowmid" :label "£5m - £20m" :filter {:range {"!latest_turnover" {:gte 5000000 :lt 20000000}}}}
                                                      {:value "highmid" :label "£20m - £100m" :filter {:range {"!latest_turnover" {:gte 20000000 :lt 100000000}}}}
                                                      {:value "high" :label "> £100m" :filter {:range {"!latest_turnover" {:gte 100000000}}}}
                                                      ]}


                                           {:id :highgrowth
                                            :type :checkboxes
                                            :label "High growth"
                                            :visible true
                                            :options [{:value "latest" :label "High growth companies" :filter scaleup-filter}
                                                      ]}

                                           {:id :sector
                                            :type :checkboxes
                                            :label "Sector"
                                            :visible true
                                            :sorted true
                                            :controls true
                                            :options [;; {:value "any" :label "Any" :filter nil :omit-description true}
                                                      #_{:value "any" :label "Has SIC"
                                                         :filter {:range {"!sic07" {:gte ""}}}}
                                                      {:value "sectionA" :label "Agriculture, forestry & fishing"
                                                       :filter {:range {"!sic07" {:gte "01110" :lt "05101"}}}}
                                                      {:value "sectionB" :label "Mining & quarrying"
                                                       :filter {:range {"!sic07" {:gte "05101" :lt "10110"}}}}
                                                      {:value "sectionC" :label "Manufacturing"
                                                       :filter {:range {"!sic07" {:gte "10110" :lt "35110"}}}}
                                                      {:value "sectionD" :label "Electricity, gas & air conditioning"
                                                       :filter {:range {"!sic07" {:gte "35110" :lt "36000"}}}}
                                                      {:value "sectionE" :label "Water, sewage & waste"
                                                       :filter {:range {"!sic07" {:gte "36000" :lt "41100"}}}}
                                                      {:value "sectionF" :label "Construction"
                                                       :filter {:range {"!sic07" {:gte "41100" :lt "45111"}}}}
                                                      {:value "sectionG" :label "Wholesale, retail & automative repair	"
                                                       :filter {:range {"!sic07" {:gte "45111" :lt "49100"}}}}
                                                      {:value "sectionH" :label "Transportation and storage"
                                                       :filter {:range {"!sic07" {:gte "49100" :lt "55100"}}}}
                                                      {:value "sectionI" :label "Accommodation, food & drink"
                                                       :filter {:range {"!sic07" {:gte "55100" :lt "58110"}}}}
                                                      #_{:value "sectionJ" :label "Information and communication"
                                                         :filter {:range {"!sic07" {:gte "58110" :lt "64110"}}}}
                                                      {:value "sectionJ1" :label "Publishing & Broadcasting"
                                                       :filter {:range {"!sic07" {:gte "58110" :lt "61100"}}}}
                                                      {:value "sectionJ2" :label "Telecommunications"
                                                       :filter {:range {"!sic07" {:gte "61100" :lt "62000"}}}}
                                                      {:value "sectionJ3" :label "IT: Software development"
                                                       :filter {:range {"!sic07" {:gte "62000" :lt "63120"}}}}
                                                      {:value "sectionJ4" :label "IT: Web & information services"
                                                       :filter {:range {"!sic07" {:gte "63120" :lt "64000"}}}}
                                                      {:value "sectionK" :label "Financial & insurance"
                                                       :filter {:range {"!sic07" {:gte "64110" :lt "68100" }}}}
                                                      {:value "sectionL" :label "Real estate"
                                                       :filter {:range {"!sic07" {:gte "68100" :lt "69101"}}}}
                                                      {:value "sectionM" :label "Scientific & technical services"
                                                       :filter {:range {"!sic07" {:gte "69101" :lt "77110"}}}}
                                                      {:value "sectionN" :label "Administrative & support services"
                                                       :filter {:range {"!sic07" {:gte "77110" :lt "84110"}}}}
                                                      {:value "sectionO" :label "Government & defence"
                                                       :filter {:range {"!sic07" {:gte "84110" :lt "85100"}}}}
                                                      {:value "sectionP" :label "Education"
                                                       :filter {:range {"!sic07" {:gte "85100" :lt "86101"}}}}
                                                      {:value "sectionQ" :label "Health & social work"
                                                       :filter {:range {"!sic07" {:gte "86101" :lt "90010"}}}}
                                                      {:value "sectionR" :label "Arts & entertainment"
                                                       :filter {:range {"!sic07" {:gte "90010" :lt "94110"}}}}
                                                      {:value "sectionS" :label "Other services"
                                                       :filter {:range {"!sic07" {:gte "94110" :lt "97000"}}}}
                                                      {:value "sectionT" :label "Household activities"
                                                       :filter {:range {"!sic07" {:gte "97000" :lt "99000" }}}}
                                                      {:value "sectionU" :label "International organisations"
                                                       :filter {:range {"!sic07" {:gte "99000"}}}}
                                                      ]}

                                           ]

                         ;; base-filters AND combined with dynamic components
                         }

   :dynamic-filter-description-components [:boundaryline :age :total-funding :sector :ds :hub :latest-turnover :highgrowth]

   :selection-filter-spec {:id :selection-filter
                           :components {:natural_id nil}
                           :base-filters {:all nil}
                           :composed {}}

   :company-search {:controls {:search-fn api/company-search
                               :render-fn (fn [r] [[:div (:name r)]])
                               :col-headers nil ;; ["Name"]
                               :click-fn (fn [r]
                                           (make-company-selection (:natural_id r))
                                           (app/navigate @app-instance "company"))
                               }
                    :query nil
                    :results nil}

   :company-name {:path [:name]}

   :company-info {:controls {:index "companies"
                             :index-type "company"
                             :sort-spec nil
                             :size 1
                             :title-field :name
                             :fields [{:key :formation_date
                                       :label "Formation date"
                                       :render-fn #(time/format-date %)}
                                      {:key :web_url
                                       :label "Web"
                                       :render-fn (fn [w] [:a {:href w :target "_blank"} w])}
                                      {:key :funding_rounds
                                       :label "Funding"
                                       :render-fn (fn [frs] (for [fr (sort-by :raised_date frs)]
                                                              [:div
                                                               [:div
                                                                (time/format-date (:raised_date fr))
                                                                " : "
                                                                (num/mixed (:raised_amount_usd fr) {:curr "£"})]
                                                               [:div (str/join ", " (for [inv (:investments fr)] (:investor_name inv)))]]))
                                       }
                                      {:key :directorships
                                       :label "Directors"
                                       :render-fn (fn [ds] (for [d ds] [:div (:name d)]))}]}
                  :record nil}

   :map {:type :geoport
         :datasource "companies"
         ;; :boundaryline-collections [[0 "nuts_0"] [4 "nuts_1"] [6 "nuts_2"] [7 "nuts_3"] [8 "uk_boroughs"] [10 "uk_wards"]]
         ;; :boundaryline-collections [[0 "nuts_2"] [8 "nuts_3"] [9 "uk_boroughs"] [11 "uk_wards"]]
         ;; :boundaryline-collections [[0 "nuts_2"] [8 "nuts_3"] [9 "nutsish_4"] [11 "nutsish_5"]]
         ;; :boundaryline-collections [[0 "uk_boroughs"] [10 "uk_wards"]]
         :boundaryline-collections [[0 "uk_counties"][7 "uk_boroughs"][12 "uk_wards"]]
         :controls {:initial-bounds  [[51.23956626148356 -0.59600830078125][51.767839887322154 0.37078857421875]]
                    :map-options {:zoomControl true
                                  :dragging true
                                  :touchZoom true
                                  :scrollWheelZoom false
                                  :doubleClickZoom true
                                  :boxZoom true}

                    :location {:cluster false
                               :location-attr "!location"
                               :attrs ["?natural_id" "!name" "!location" "!latest_employee_count" "!latest_turnover" "!total_funding"]
                               :sort-spec [{"!latest_turnover" "desc"}{"!latest_employment" "desc"}]
                               :marker-opts {:display-turnover true
                                             :display-employee-count false
                                             :display-principal-name false}

                               :marker-render-fn (fn [location-sites location-spec]
                                                   (let [display-turnover (get-in location-spec [:marker-opts :display-turnover])
                                                         display-employee-count (get-in location-spec [:marker-opts :display-employee-count])
                                                         display-principal-name (get-in location-spec [:marker-opts :display-principal-name])]
                                                     (hiccups/html
                                                      [:div
                                                       (when (> (count location-sites) 1)
                                                         [:div [:p (num/compact (count location-sites))]])
                                                       [:div.marker-info
                                                        (when display-principal-name
                                                          [:div.name
                                                           [:p
                                                            (-> location-sites first :name)]])
                                                        (when display-turnover
                                                          [:div.minichart
                                                           [:div.minibar.metric-1
                                                            {:style (str "width: "
                                                                         (num/table-percent-scale
                                                                          [0 1000000 10000000]
                                                                          (->> location-sites (map :latest_turnover) (reduce +)))
                                                                         "%")}]])
                                                        (when display-employee-count
                                                          [:div.minichart
                                                           [:div.minibar.metric-2
                                                            {:style (str "width: "
                                                                         (num/table-percent-scale
                                                                          [0 5 100]
                                                                          (->> location-sites (map :latest_employee_count) (reduce +)))
                                                                         "%")}]])]])))
                               :item-render-fn (fn [i]
                                                 [:div.item
                                                  [:div.name (get i :name)]
                                                  [:div.metrics
                                                   [:div.metric.metric-1
                                                    [:span.name "Tur"] [:span.value (num/compact (:latest_turnover i))]]
                                                   [:div.metric.metric-2
                                                    [:span.name "Emp"] [:span.value (num/compact (:latest_employee_count i))]]]])
                               :item-click-fn (fn [r e]
                                                (make-company-selection (:natural_id r))
                                                (app/navigate @app-instance "company")
                                                (.log js/console (clj->js ["CLICK" r e])))}

                    :zoom nil
                    :bounds nil
                    :show-points true
                    :boundaryline-collection nil
                    :boundaryline-agg {:type :stats
                                       :index "companies"
                                       :index-type "company"
                                       :key "boundaryline_id"
                                       :variable "!latest_employee_count"
                                       ;; :scale-attr "population"
                                       }
                    :colorchooser {:scheme [:RdPu :6]
                                   :scale :auto
                                   :variable :sum}

                    :boundaryline-fill-opacity 0.4

                    :geohash-aggs {:query {:index-name "companies"
                                           :index-type "company"
                                           :geo-point-field "!location"}
                                   :show-at-zoom-fn (fn [z] (>= z 9))
                                   :precision-fn (fn [z] (- (/ z 2) 0.5))
                                   :colorchooser-factory-fn (fn [geohash-aggs]
                                                              (let [chooser-fn (num/table-chooser-fn
                                                                                [0.7 0.9]
                                                                                (map :geohash-grid_doc_count geohash-aggs))]
                                                                (fn [geohash-agg]
                                                                  (chooser-fn (:geohash-grid_doc_count geohash-agg)))))
                                   :icon-render-fn (fn [geohash-agg]
                                                     [:p (num/compact (:geohash-grid_doc_count geohash-agg))])
                                   :geohash-agg-data nil}

                    :geotag-aggs {:query {:index-name "companies"
                                          :index-type "company"
                                          :nested-path "?tags"
                                          :nested-attr "tag"
                                          :nested-filter {:term {:type "uk_regions"}}
                                          :stats-attr "?count"}
                                  :tag-type "uk_regions"
                                  :show-at-zoom-fn (fn [z] (< z 9))
                                  :colorchooser-factory-fn (fn [geotag-aggs]
                                                             (let [chooser-fn (num/table-chooser-fn
                                                                               [0.7 0.9]
                                                                               (map :nested_attr_doc_count geotag-aggs))]
                                                               (fn [geotag-agg]
                                                                 (chooser-fn (:nested_attr_doc_count geotag-agg)))))

                                  :icon-render-fn (fn [tag stats]
                                                    [:p (num/compact (:nested_attr_doc_count stats))])
                                  :click-fn (fn [geotag geotag-agg e]
                                              ;; (.log js/console (clj->js [(:description geotag) geotag geotag-agg e]))

                                              (let [boundaryline-id (:tag geotag)
                                                    ch (bl/get-or-fetch-boundaryline (get-app-state-atom) :boundarylines boundaryline-id)]
                                                (go
                                                  (let [bl (<! ch)
                                                        envelope (aget bl "envelope")
                                                        bounds (js->clj (map/postgis-envelope->latlngbounds envelope))]
                                                    (when bounds
                                                      (swap! (app/get-state @app-instance) assoc-in [:map :controls :bounds] bounds)

                                                      (make-boundaryline-selection boundaryline-id))))))

                                  :geotag-data nil
                                  :geotag-agg-data nil}

                    }
         :data nil}

   :headline-stats {:controls {:title nil
                               :fill-report-button []
                               :summary-stats {:index "companies"
                                               :index-type "company"
                                               :variables [{:key :?counter
                                                            :metric :viewfilter_doc_count
                                                            :label "Companies"
                                                            :render-fn (fn [v] (num/mixed v))}
                                                           {:key :!latest_turnover
                                                            :metric :sum
                                                            :label (fn [] [:p "Total latest turnover\u00A0" [:small "(UK-wide)"]])
                                                            :render-fn (fn [v] (num/mixed v {:curr "£"}))}
                                                           {:key :!latest_turnover_delta
                                                            :belongs-to :!latest_turnover
                                                            :metric :sum
                                                            :label "Turnover change"
                                                            :value-fn (fn [btv v] (* 100 (/ v btv)))
                                                            :render-fn (fn [v] [:div.stat-change
                                                                                (sign-icon v)
                                                                                (num/mixed v)
                                                                                "% y-o-y"])}
                                                           {:key :!latest_employee_count
                                                            :metric :sum
                                                            :label (fn [] [:p "Total latest employees\u00A0" [:small "(UK-wide)"]])
                                                            :render-fn (fn [v] (num/mixed v))}
                                                           {:key :!latest_employee_count_delta
                                                            :belongs-to :!latest_employee_count
                                                            :metric :sum
                                                            :label "Employment change"
                                                            :value-fn (fn [btv v] (* 100 (/ v btv)))
                                                            :render-fn (fn [v] [:div.stat-change
                                                                                (sign-icon v)
                                                                                (num/mixed v)
                                                                                "% y-o-y"])}
                                                           ]}}
                    :summary-stats nil
                    }

   :table  {:type :table
            :controls {:index "companies"
                       :index-type "company"
                       :sort-spec {:!latest_turnover {:order "desc"}}
                       :from 0
                       :size 50
                       :columns [
                                 {:key :!name :sortable true :label "Name" :render-fn company-link-render-fn}
                                 {:key :!formation_date :sortable true :label "Formation date" :render-fn #(time/format-date %)}
                                 ;; {:key :!latest_accounts_date :label "Filing date" :render-fn #(time/format-date %)}
                                 {:key :!latest_turnover
                                  :sortable true
                                  :label (fn [] [:div "Latest turnover\u0020" [:small "(UK-wide)"]])
                                  :right-align true
                                  :render-fn #(num/mixed %)}
                                 {:key :!latest_turnover_delta
                                  :sortable true
                                  :label "Turn. change y-o-y"
                                  :right-align true
                                  :render-fn (fn [v r]
                                               (let [pv (-! (:!latest_turnover r) v)
                                                     v (*! 100 (div! v pv))]
                                                 (when v
                                                   [:span
                                                    (num/mixed v) "%"
                                                    (sign-icon v)])))}
                                 {:key :!latest_employee_count
                                  :sortable true
                                  :label (fn [] [:div "Latest employees\u0020" [:small "(UK-wide)"]])
                                  :right-align true
                                  :render-fn #(num/mixed %)}
                                 {:key :!latest_employee_count_delta
                                  :sortable true
                                  :label "Emp. change y-o-y"
                                  :right-align true
                                  :render-fn (fn [v r]
                                               (let [pv (-! (:!latest_employee_count r) v)
                                                     v (*! 100 (div! v pv))]
                                                 (when v
                                                   [:span
                                                    (num/mixed v) "%"
                                                    (sign-icon v)])))}

                                 ]}
            :table-data nil}

   :trends-timeline {:query {:index-name "company-accounts"
                             :index-type "accounts"
                             :time-variable "?accounts_date"
                             :metrics {:variable :!turnover :title "Latest turnover (UK-wide) (£)" :metric :sum}
                             :interval "year"
                             :before "2013-01-01"}
                     :color "#28828a"
                     :timeline-data nil}

   :company-turnover-timeline {:query {:index-name "company-accounts"
                                       :index-type "accounts"
                                       :time-variable "?accounts_date"
                                       :metrics {:variable :!turnover :title "Latest turnover (UK-wide) (£)"}
                                       :interval "year"
                                       :before "2013-01-01"}
                               :color "#28828a"
                               :timeline-data nil}

   :company-employment-timeline {:query {:index-name "company-accounts"
                                         :index-type "accounts"
                                         :time-variable "?accounts_date"
                                         :metrics {:variable :!employee_count :title "Latest employees (UK-wide)"}
                                         :interval "year"
                                         :before "2013-01-01"}
                                 :color "#28828a"
                                 :timeline-data nil}

   :geo-sponsors {:controls {:max-count 1}
                  :data nil}

   :sector-histogram {:query {:index-name "companies"
                              :index-type "company"
                              :nested-path "?tags"
                              :nested-attr "tag"
                              :nested-filter {:term {:type "l4_sector"}}
                              :stats-attr "!latest_turnover"}
                      :metrics [{:metric :sum
                                 :title "Total latest turnover (UK-wide) (£)"
                                 :label-formatter (fn [] (this-as this (num/mixed (.-value this))))}]
                      :bar-width 20
                      :bar-color "#28828a"
                      :chart-height 600

                      :tag-type "l4_sector"
                      :tag-data nil
                      :tag-agg-data nil}

   :revenue-bands {:query {:index-name "companies"
                           :index-type "company"

                           :row-path [:accounts :row]
                           :row-aggs {:accounts
                                      {:nested {:path "?accounts"}

                                       :aggs
                                       {:row {:range {:field "rank"
                                                      :ranges [{:key "latest" :from 1 :to 2}]}}}} }

                           :col-path [:col]
                           :col-aggs {:col
                                      {:range {:field "turnover"
                                               :ranges [{:key "lt50k" :from 0       :to 50000 }
                                                        {:key "50k"   :from 50000   :to 100000 }
                                                        {:key "100k"  :from 100000  :to 250000 }
                                                        {:key "250k"  :from 250000  :to 500000}
                                                        {:key "500k"  :from 500000  :to 1000000}
                                                        {:key "1m"    :from 1000000 :to 5000000}
                                                        {:key "5m"    :from 5000000 }] }}}

                           :metric-path [:companies :metric]
                           :metric-aggs {:companies
                                         {:reverse_nested {}
                                          :aggs
                                          {:metric {:cardinality {:field "?natural_id"}}}}}
                           :render-fn num/fnum}

                   :view {:rows [{:key "latest" :label "latest reported"}]
                          :cols [{:key "lt50k"  :label "Less than £50k"}
                                 {:key "50k"  :label "£50k - £100k"}
                                 {:key "100k" :label "£100k - £250k"}
                                 {:key "250k"   :label "£250k - £500k"}
                                 {:key "500k"  :label "£500k - £1m"}
                                 {:key "1m"  :label "£1m - £5m"}
                                 {:key "5m" :label "More than £5m"}]
                          :color "#28828a"
                          :render-fn num/fnum}
                   :table-data nil}

   :employment-bands {:query {:index-name "companies"
                              :index-type "company"

                              :row-path [:accounts :row]
                              :row-aggs {:accounts
                                         {:nested {:path "?accounts"}

                                          :aggs
                                          {:row {:range {:field "rank"
                                                         :ranges [{:key "latest" :from 1 :to 2}]}}}} }

                              :col-path [:col]
                              :col-aggs {:col
                                         {:range {:field "employee_count"
                                                  :ranges [{:key "l"    :from 1    :to 5 }
                                                           {:key "5"    :from 5    :to 10 }
                                                           {:key "10"   :from 10   :to 20 }
                                                           {:key "20"   :from 20   :to 50 }
                                                           {:key "50"   :from 50   :to 100 }
                                                           {:key "100"  :from 100  :to 250 }
                                                           {:key "250"  :from 250  :to 500 }
                                                           {:key "500"  :from 500  :to 2500 }
                                                           {:key "2500" :from 2500 }] }}}

                              :metric-path [:companies :metric]
                              :metric-aggs {:companies
                                            {:reverse_nested {}
                                             :aggs
                                             {:metric {:cardinality {:field "?natural_id"}}}}}
                              :render-fn num/fnum

                              }
                      :view {:rows [{:key "latest" :label "latest reported"}]
                             :cols [{:key "l"    :label "1-4"}
                                    {:key "5"    :label "5-9"}
                                    {:key "10"   :label "10-19"}
                                    {:key "20"   :label "20-49"}
                                    {:key "50"   :label "50-99"}
                                    {:key "100"  :label "100-249"}
                                    {:key "250"  :label "250-499"}
                                    {:key "500"  :label "500-2499"}
                                    {:key "2500" :label "2500 or more"}]
                             :color "#28828a"
                             :render-fn num/fnum}
                      :table-data nil}

   :view :trends

   :company-close {:text "Close"
                   :target-view "main"
                   :class "btn btn-primary"}

   :reset-map-view {:text "Reset view"
                    :action (fn [e]
                              (swap! (get-app-state-atom)
                                     assoc-in
                                     [:map :controls :bounds]
                                     (get-in @(get-app-state-atom) [:map :controls :initial-bounds])))
                    :class "btn btn-default"}

   :reset-all {:content (constantly [:h1.logo "MedCity"])
               :action (fn [e]
                         (js/console.log "reset all")
                         (.preventDefault e)

                         (reset! (get-app-state-atom)
                                 (-> @(get-app-state-atom)
                                     (assoc-in [:map :controls :bounds]
                                               (get-in @(get-app-state-atom) [:map :controls :initial-bounds]))
                                     (assoc-in [:dynamic-filter-spec]
                                               (filters/reset-filter (get-in @(get-app-state-atom) [:dynamic-filter-spec]))))))}
   })


(def components
  [
   {:name :filter
    :f filter/filter-component
    :target "filter-component"
    :paths {:filter-spec [:dynamic-filter-spec]}}

   {:name :company-search
    :f search/search-component
    :target "company-search-component"
    :paths {:search [:company-search]}}

   {:name :filter-description
    :f filter-description/filter-description-component
    :target "filter-description-component"
    :paths {:components [:dynamic-filter-description-components]
            :filter-spec [:dynamic-filter-spec]}}

   {:name :headline-stats
    :f map-report/map-report-component
    :target "headline-stats-component"
    :paths {:map-report [:headline-stats]
            :filter [:dynamic-filter-spec :composed :all]}}

   {:name :map
    :f map/map-component
    :target "map-component"
    :paths {:map-state [:map]
            :filter [:dynamic-filter-spec :composed :all]}}

   {:name :color-scale
    :f color-scale/color-scale-component
    :target "color-scale-component"
    :path [:map :controls :threshold-colors]}

   {:name :map-shading-var-select
    :f (partial
        select-chooser/select-chooser-component
        "Variable"
        [{:value "!latest_employee_count" :label "Employee count"}
         {:value "!latest_employee_count_delta" :label "Employee change"}
         {:value "!latest_turnover" :label "Turnover"}
         {:value "!latest_turnover_delta" :label "Turnover change"}
         ;; {:value "?counter" :label "Company count"}
         ]
        (fn
          ([cursor] (get-in cursor [:variable]))
          ([cursor record]
           (om/update! cursor [:variable] (:value record)))))
    :target "map-shading-var-select-component"
    :path [:map :controls :boundaryline-agg]}

   {:name :map-shading-stat-select-component
    :f (partial
        select-chooser/select-chooser-component
        "Statistic"
        [{:value "sum" :label "Sum"}
         {:value "max" :label "Maximum"}
         {:value "avg" :label "Mean"}
         {:value "boundaryline_id_doc_count" :label "Count"}]
        (fn
          ([cursor] (get-in cursor [:variable]))
          ([cursor record]
           (om/update! cursor [:variable] (:value record)))))
    :target "map-shading-stat-select-component"
    :path [:map :controls :colorchooser]}

   {:name :map-shading-scale-select-component
    :f (partial
        select-chooser/select-chooser-component
        "Scale type"
        [{:value "auto-no-outliers" :label "Auto without outliers"}
         {:value "auto" :label "Auto"}
         {:value "log" :label "Log"}
         {:value "linear" :label "Linear"}]
        (fn
          ([cursor] (get-in cursor [:scale]))
          ([cursor record]
           (om/update! cursor [:scale] (:value record)))))
    :target "map-shading-scale-select-component"
    :path [:map :controls :colorchooser]}

   {:name :map-shading-color-scheme-select
    :f (partial
        select-chooser/select-chooser-component
        "Color scheme"
        [{:value :YlGn :label "YellowGreen"}
         {:value :YlGnBu :label "YellowGreenBlue"}
         {:value :GnBu :label "GreenBlue"}
         {:value :BuGn :label "BlueGreen"}
         {:value :PuBuGn :label "PurpleBlueGreen"}
         {:value :PuBu :label "PurbleBlue"}
         {:value :BuPu :label "BluePurple"}
         {:value :RdPu :label "RedPurple"}
         {:value :PuR :label "PurpleRed"}
         {:value :OrRd :label "OrangeRed"}
         {:value :YlOrRd :label "YellowOrangeRed"}
         {:value :YlOrBr :label "YellowOrangeBrown"}
         {:value :Purples :label "Purples"}
         {:value :Blues :label "Blues"}
         {:value :Greens :label "Greens"}
         {:value :Oranges :label "Oranges"}
         {:value :Reds :label "Reds"}
         {:value :Greys :label "Greys"}
         {:value :PuOr :label "PurpleOrange"}
         {:value :BrBG :label "Brown BlueGreen"}
         {:value :PRGn :label "Purple Green - divergent"}
         {:value :PiYG :label "Pink YellowGreen - divergent"}
         {:value :RdBu :label "Red Blue - divergent"}
         {:value :RdGy :label "Red Green - divergent"}
         {:value :RdYlBu :label "Red Yellow Blue - divergent"}
         {:value :RdYlGn :label "Red Yellow Green - divergent"}
         {:value :Spectral :label "Spectral"}
         {:value :Accent :label "Accent"}
         {:value :Dark2 :label "Dark 2"}
         {:value :Paired :label "Paired"}
         {:value :Pastel1 :label "Pastel 1"}
         {:value :Pastel2 :label "Pastel 2"}
         {:value :Set1 :label "Set 1"}
         {:value :Set2 :label "Set 2"}
         {:value :Set3 :label "Set 3"}]
        (fn
          ([cursor] (get-in cursor [0]))
          ([cursor record]
           (om/update! cursor [0] (:value record)))))
    :target "map-shading-color-scheme-select-component"
    :path [:map :controls :colorchooser :scheme]}


   {:name :map-shading-color-count-select
    :f (partial
        select-chooser/select-chooser-component
        "# of colors"
        [{:value "3" :label "3"}
         {:value "4" :label "4"}
         {:value "5" :label "5"}
         {:value "6" :label "6"}
         {:value "7" :label "7"}
         {:value "8" :label "8"}
         {:value "9" :label "9"}
         {:value "10" :label "10"}
         {:value "11" :label "11"}
         {:value "12" :label "12"}]
        (fn
          ([cursor] (get-in cursor [1]))
          ([cursor record]
           (om/update! cursor [1] (:value record)))))
    :target "map-shading-color-count-select-component"
    :path [:map :controls :colorchooser :scheme]}





   {:name :company-close
    :f nav-button/nav-button-component
    :target "company-close"
    :paths {:nav-button [:company-close]}}

   {:name :reset-map-view
    :f action-button/action-button-component
    :target "reset-map-view-button-component"
    :paths {:action-button [:reset-map-view]}}

   {:name :reset-all
    :f action-link/action-link-component
    :target "reset-all-component"
    :paths {:action-link [:reset-all]}}

   {:name :display-minichart-turnover
    :f (partial checkbox-boolean/checkbox-boolean-component :display-turnover)
    :target "display-minichart-turnover-component"
    :path [:map :controls :location :marker-opts]}

   {:name :display-minichart-employee-count
    :f (partial checkbox-boolean/checkbox-boolean-component :display-employee-count)
    :target "display-minichart-employee-count-component"
    :path [:map :controls :location :marker-opts]}

   {:name :display-principal-name
    :f (partial checkbox-boolean/checkbox-boolean-component :display-principal-name)
    :target "display-principal-name-component"
    :path [:map :controls :location :marker-opts]}

   ;; {:name :region-investment-histogram
   ;;  :f tag-histogram/tag-histogram
   ;;  :target "city-barchart-component"
   ;;  :paths {:tag-histogram [:city-barchart]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :sector-histogram-var-select
    :f (partial
        select-chooser/select-chooser-component
        "Variable"
        [{:value "!latest_turnover" :label "Total latest turnover (UK-wide) (£)"}
         {:value "!latest_employee_count" :label "Total latest employees (UK-wide)"}
         {:value "?counter" :label "Number of companies"}]
        (fn
          ([cursor] (get-in cursor [:query :stats-attr]))
          ([cursor record]
           (om/update! cursor [:query :stats-attr] (:value record))
           (om/update! cursor [:metrics 0 :title] (:label record)))))
    :target "sector-histogram-var-select-component"
    :path [:sector-histogram]}

   {:name :sector-histogram
    :f tag-histogram/tag-histogram
    :target "sector-histogram-component"
    :paths {:tag-histogram [:sector-histogram]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :table
    :f table/table-component
    :target "table-component"
    :paths {:table-state [:table]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :trends-timeline
    :f timeline-chart/timeline-chart
    :target "trends-timeline-component"
    :paths {:timeline-chart [:trends-timeline]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :trends-timeline-var-select
    :f (partial
        select-chooser/select-chooser-component
        "Variable"
        [{:value :!turnover :label "Latest turnover (UK-wide) (£)"}
         {:value :!employee_count :label "Latest employees (UK-wide)"}]
        (fn
          ([cursor] (get-in cursor [:query :metrics :variable]))
          ([cursor record]
           (om/update! cursor [:query :metrics :variable] (:value record))
           (om/update! cursor [:query :metrics :title] (:label record))
           )))
    :target "trends-timeline-var-select-component"
    :path [:trends-timeline]}

   ;; {:name :employment-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "employment-timeline"
   ;;  :paths {:timeline-chart [:employment-timeline]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :formation-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "formation-timeline"
   ;;  :paths {:timeline-chart [:formation-timeline]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :geo-sponsors
   ;;  :f geo-sponsors/geo-sponsors-component
   ;;  :target "geo-sponsors"
   ;;  :paths {:bounds [:map :controls :bounds]
   ;;          :geo-sponsors [:geo-sponsors]}}

   ;; {:name :revenue-bands-var-select
   ;;  :f (partial select-chooser/select-chooser-component "Variable" :field [[:turnover "Turnover (£)"][:employee_count "Employment"]])
   ;;  :target "revenue-bands-var-select-component"
   ;;  :path [:revenue-bands-table :controls :col-aggs :col :range]}

   {:name :revenue-bands-chart
    :f ranges-chart/ranges-chart-component
    :target "revenue-bands-chart-component"
    :paths {:table-state [:revenue-bands]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :employment-bands-chart
    :f ranges-chart/ranges-chart-component
    :target "employment-bands-chart-component"
    :paths {:table-state [:employment-bands]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :company-turnover-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "company-turnover-timeline"
   ;;  :paths {:timeline-chart [:company-turnover-timeline]
   ;;          :filter-spec [:selection-filter-spec :composed :all]}}

   ;; {:name :company-employment-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "company-employment-timeline"
   ;;  :paths {:timeline-chart [:company-employment-timeline]
   ;;          :filter-spec [:selection-filter-spec :composed :all]}}

   {:name :company-name
    :f text/text-component
    :target "company-name-component"
    :paths {:source [:company-info :record]
            :controls [:company-name]}}

   {:name :company-info
    :f company-info/company-info-component
    :target "company-info-component"
    :paths {:metadata [:company-info]
            :turnover-timeline [:company-turnover-timeline]
            :employment-timeline [:company-employment-timeline]
            :filter-spec [:selection-filter-spec :composed :all]}}

   ]
  )

;;;;;;;;;;;;;;;;;;;;;;;; load and index boundarylines

(def bl-collections ["uk_counties"])

(defn load-boundaryline-collection-indexes
  [state]
  (doseq [blcoll bl-collections]
    (bl/fetch-boundaryline-collection-index state :boundarylines blcoll)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-app-service
  []
  (let [event-handlers (atom nil)]
    (reify

      app/IAppService

      (init [this app]
        (load-boundaryline-collection-indexes (app/get-state app))
        {:fetch-boundarylines-fn (partial bl/get-or-fetch-best-boundarylines (app/get-state app) :boundarylines)
         :get-cached-boundaryline-fn (partial bl/get-cached-boundaryline (app/get-state app) :boundarylines)
         :point-in-boundarylines-fn (partial bl/point-in-boundarylines (app/get-state app) :boundarylines :uk_boroughs)
         :path-marker-click-fn make-boundaryline-selection})

      (destroy [this app]
        (.log js/console "DESTROY APP!"))

      (handle-event [this app type val]
        )

      (dev-mode? [this] dev-mode))))

(defn init
  []
  (app/start-or-restart-app app-instance initial-state components (create-app-service)))

(cond

 ;; dev mode : configure repl and figwheel code-reloading
 ;; js/config.repl
 ;; (do
 ;;   (ws-repl/connect "ws://localhost:9001" :verbose true)
 ;;   (fw/watch-and-reload
 ;;    :websocket-url "ws://localhost:3449/figwheel-ws"
 ;;    :jsload-callback (fn []
 ;;                       (init)
 ;;                       (.log js/console "restarted")))
 ;;   (init))

 ;; production : just run the app
 true
 (init))
