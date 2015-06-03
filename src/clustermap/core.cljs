(ns clustermap.core
  (:require-macros [hiccups.core :as hiccups]
                   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [weasel.repl :as ws-repl]
   [figwheel.client :as fw :include-macros true]
   [clustermap.api :as api]
   [clustermap.app :as app]
   [clustermap.filters :as filters]
   [clustermap.formats.time :as time]
   [clustermap.formats.number :as num]
   [clustermap.formats.money :as money]
   [clustermap.components.map :as map]
   [clustermap.components.filter :as filter]
   [clustermap.components.search :as search]
   [clustermap.components.select-chooser :as select-chooser]
   [clustermap.components.color-scale :as color-scale]
   [clustermap.components.map-report :as map-report]
   [clustermap.components.table :as table]
   [clustermap.components.ranges-table :as ranges-table]
   [clustermap.components.timeline-chart :as timeline-chart]
   [clustermap.components.tag-histogram :as tag-histogram]
   [clustermap.components.geo-sponsors :as geo-sponsors]
   [clustermap.components.filter-component-description :as filter-component-description]
   [clustermap.components.filter-description :as filter-description]
   [clustermap.components.text :as text]
   [clustermap.components.company-info :as company-info]
   [clustermap.components.nav-button :as nav-button]
   [clustermap.boundarylines :as bl]
   [secretary.core :as secretary :include-macros true :refer [defroute]]
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
                         :components {:boundaryline nil}

                         ;; dynamic component descriptions
                         :component-descrs {}

                         ;; dynamic component url descriptions
                         :url-components {}

                         ;; filters to compose with components
                         :base-filters {:all nil}

                         ;; specifications for dynamic components
                         :component-specs [
                                           ;; {:id :hub
                                           ;;  :type :tag-checkboxes
                                           ;;  :label "Hub"
                                           ;;  :sorted true
                                           ;;  :tag-type "startup_region"
                                           ;;  :tags [{:value "nuts_1__UKI" :label "London"}
                                           ;;         {:value "nuts_1__FR1" :label "Paris"}
                                           ;;         {:value "nuts_2__UKD3" :label "Manchester"}
                                           ;;         {:value "nuts_2__FI1B" :label "Helsinki"}
                                           ;;         {:value "nuts_2__SE11" :label "Stockholm"}
                                           ;;         {:value "nuts_1__BE1" :label "Brussels"}
                                           ;;         {:value "nuts_2__RO32" :label "Bucuresti"}
                                           ;;         {:value "nuts_1__ES3" :label "Madrid"}
                                           ;;         {:value "nuts_3__DE212" :label "Munich"}
                                           ;;         {:value "nuts_1__DE3" :label "Berlin"}

                                           ;;         ]}

                                           ;; {:id :boundaryline
                                           ;;  :type :external
                                           ;;  :label "Region"
                                           ;;  :formatter (fn [content] [:h1 content])
                                           ;;  :default-text "All (select from map)"
                                           ;;  :set-filter-for-url (fn [boundaryline-id set-filter]
                                           ;;                        (let [ch (when boundaryline-id
                                           ;;                                   (bl/get-or-fetch-boundaryline (get-app-state-atom) :boundarylines boundaryline-id))]
                                           ;;                          (go
                                           ;;                            (when-let [bl (when ch (<! ch))]
                                           ;;                              (let [bl-filter (when boundaryline-id (boundaryline-filter boundaryline-id))
                                           ;;                                    bl-name (when boundaryline-id (aget bl "compact_name"))]
                                           ;;                                (set-filter bl-filter bl-name))))))}

                                           ;; {:id :age
                                           ;;  :type :checkboxes
                                           ;;  :label "Age"
                                           ;;  :options [;; {:value "any" :filter nil :label "Any" :omit-description true}
                                           ;;            {:value "new" :label "< 5 years" :filter {:range {"!formation_date" {:gte "2010-01-01"}}}}
                                           ;;            {:value "mid" :label "5 - 10 years" :filter {:range {"!formation_date" {:gte "2005-01-01"
                                           ;;                                                                                    :lt "2010-01-01"}}}}
                                           ;;            {:value "old" :label "10 - 15 years" :filter {:range {"!formation_date" {:gte "2000-01-01"
                                           ;;                                                                                     :lt "2005-01-01"}}}}
                                           ;;            {:value "oldest" :label ">= 15 years" :filter {:range {"!formation_date" {:lt "2000-01-01"}}}}]}

                                           ;; {:id :total-funding
                                           ;;  :type :checkboxes
                                           ;;  :label "Total funding"
                                           ;;  :options [;; {:value "any" :label "Any" :filter nil :omit-description true}
                                           ;;            {:value "min" :label "< £500k" :filter {:range {"!total_funding" {:lt 500000}}}}
                                           ;;            {:value "low" :label "£500k - £5m" :filter {:range {"!total_funding" {:gte 500000 :lt 5000000}}}}
                                           ;;            {:value "lowmid" :label "£5m - £10m" :filter {:range {"!total_funding" {:gte 5000000 :lt 10000000}}}}
                                           ;;            {:value "highmid" :label "£10m - £100m" :filter {:range {"!total_funding" {:gte 10000000 :lt 100000000}}}}
                                           ;;            {:value "high" :label "> £100m" :filter {:range {"!total_funding" {:gte 100000000}}}}
                                           ;;            ]}

                                           ;; {:id :latest-turnover
                                           ;;  :type :checkboxes
                                           ;;  :label "Turnover"
                                           ;;  :options [;; {:value "any" :label "Any" :filter nil :omit-description true}
                                           ;;            {:value "min" :label "< £500k" :filter {:range {"!latest_turnover" {:lt 500000}}}}
                                           ;;            {:value "low" :label "£500k - £5m" :filter {:range {"!latest_turnover" {:gte 500000 :lt 5000000}}}}
                                           ;;            {:value "lowmid" :label "£5m - £10m" :filter {:range {"!latest_turnover" {:gte 5000000 :lt 10000000}}}}
                                           ;;            {:value "highmid" :label "£10m - £100m" :filter {:range {"!latest_turnover" {:gte 10000000 :lt 100000000}}}}
                                           ;;            {:value "high" :label "> £100m" :filter {:range {"!latest_turnover" {:gte 100000000}}}}
                                           ;;            ]}

                                           ;; {:id :sector
                                           ;;  :type :tag
                                           ;;  :label "Sector"
                                           ;;  :sorted true
                                           ;;  :tag-type "ons_sector"
                                           ;;  :tags [{:value "" :label "Any" :omit-description true}
                                           ;;         {:value "digi_tech" :label "Digital Technologies"}
                                           ;;         {:value "lifesci_health" :label "Life Sciences & Healthcare"}
                                           ;;         {:value "pub_broad" :label "Publishing & Broadcasting"}
                                           ;;         {:value "other_scitechmanf" :label "Other scientific/technological manufacture"}
                                           ;;         {:value "other_scitech_serv" :label "Other scientific/technological services"}]
                                           ;;  }

                                           ;; {:id :ds
                                           ;;  :type :tag
                                           ;;  :label "Source"
                                           ;;  :sorted true
                                           ;;  :tag-type "datasource"
                                           ;;  :tags [{:value "" :label "Any" :omit-description true}
                                           ;;         {:value "crunchbase" :label "Crunchbase"}
                                           ;;         {:value "angellist" :label "Angellist"}
                                           ;;         {:value "seeddb" :label "Seed-DB"}
                                           ;;         {:value "registry" :label "Registry"}]}
                                           ]

                         ;; base-filters AND combined with dynamic components
                         :composed {}}

   :dynamic-filter-description-components [:boundaryline :age :total-funding :sector :ds :hub :latest-turnover]

   :selection-filter-spec {:id :selection-filter
                           :components {:natural_id nil}
                           :base-filters {:all nil}
                           :composed {}}

   :company-search {:controls {:search-fn api/company-search
                               :render-fn (fn [r] [[:div (:name r)]
                                                   [:div (some->> (:tags r)
                                                                  (some (fn [t] (when (= "startup_region" (:type t)) t)))
                                                                  :description)]])
                               :col-headers ["Name" "Hub"]
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
                                                                (money/readable (:raised_amount_usd fr) :sf 2 :curr "£")]
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
         :boundaryline-collections [[0 "uk_boroughs"] [10 "uk_wards"]]
         :controls {:initial-bounds [[51.95 -0.76] [52.76 1.07]]
                    :map-options {:zoomControl true
                                  :dragging true
                                  :touchZoom true
                                  :scrollWheelZoom false
                                  :doubleClickZoom true
                                  :boxZoom true
                                  }
                    :link-render-fn (fn [r]
                                      [:a {:href (str "#") :target "_blank"}
                                       (get r :name)])
                    :link-click-fn (fn [r e]
                                     (make-company-selection (:natural_id r))
                                     (app/navigate @app-instance "company")
                                     (.log js/console (clj->js ["CLICK" r e])))
                    :zoom nil
                    :bounds nil
                    :show-points true
                    :boundaryline-collection nil
                    :boundaryline-agg {:type :stats
                                       :index "companies"
                                       :index-type "company"
                                       :key "boundaryline_id"
                                       :variable "!latest_employee_count"}
                    :colorchooser {:scheme [:RdPu :6]
                                   :scale :auto
                                   :variable :boundaryline_id_doc_count}

                         :geotag-aggs {:query {:index-name "companies"
                                               :index-type "company"
                                               :nested-path "?tags"
                                               :nested-attr "tag"
                                               :nested-filter {:term {:type "startup_region"}}
                                               :stats-attr "!total_funding"}
                                       :tag-type "startup_region"
                                       :icon-render-fn (fn [tag stats]
                                                         [:p (money/readable (:nested_attr_doc_count stats) :sf 2 :curr "")])
                                       :popup-render-fn (fn [tag stats]
                                                          [:p [:a {:href "#"} (:description tag)]])
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
                                                            :render-fn (fn [v] (money/readable v :sf 2 :curr ""))}
                                                           {:key :!latest_turnover
                                                            :metric :sum
                                                            :label "Total turnover"
                                                            :render-fn (fn [v] (money/readable v :sf 2 :curr "£"))}
                                                           {:key :!latest_employee_count
                                                            :metric :sum
                                                            :label "Total employees"
                                                            :render-fn (fn [v] (money/readable v :sf 2 :curr ""))}
                                                           ;; {:key :!total_funding
                                                           ;;  :metric :sum
                                                           ;;  :label "Total funding"
                                                           ;;  :render-fn (fn [v] (money/readable v :sf 2 :curr "£"))}
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
                                 ;; {:key :?tags :label "Hub" :render-fn (fn [tags] (->> tags (filter (fn [t] (= "startup_region" (:type t)))) first :description))}
                                 {:key :!formation_date :sortable true :label "Formation date" :render-fn #(time/format-date %)}
                                 ;; {:key :!latest_accounts_date :label "Filing date" :render-fn #(time/format-date %)}
                                 {:key :!latest_turnover :sortable true :label "Turnover" :render-fn #(money/readable % :sf 3 :curr "")}
                                 {:key :!latest_employee_count :sortable true :label "Employees" :render-fn #(num/readable % :dec 0)}
                                 ;; {:key :!total_funding :sortable true :label "Funding" :render-fn #(money/readable % :sf 3 :curr "")}
                                 ]}
            :table-data nil}

   :investment-timeline {:query {:index-name "company-funding-rounds"
                                 :index-type "funding-round"
                                 :time-variable "?raised_date"
                                 :metrics {:variable :!raised_amount_usd :title "-" :metric :sum}
                                 :interval "year"
                                 :before "2015-01-01"}
                         :timeline-data nil}

   :employment-timeline {:query {:index-name "company-accounts"
                                 :index-type "accounts"
                                 :time-variable "?accounts_date"
                                 :metrics {:variable :!employee_count :title "Employees"}
                                 :interval "year"
                                 :before (time/today-str)
                                 }
                         :timeline-data nil}

   :formation-timeline {:query {:index-name "companies"
                                :index-type "company"
                                :time-variable "!formation_date"
                                :metrics {:variable :?counter :metric :count :title "Formations"}
                                :interval "year"
                                ;; :before (time/today-str)
                                }
                        :timeline-data nil}

   :company-turnover-timeline {:query {:index-name "company-accounts"
                                       :index-type "accounts"
                                       :time-variable "?accounts_date"
                                       :metrics {:variable :!turnover :title "Turnover (£)"}
                                       :interval "year"
                                       :before (time/today-str)}
                               :timeline-data nil}

   :company-employment-timeline {:query {:index-name "company-accounts"
                                         :index-type "accounts"
                                         :time-variable "?accounts_date"
                                         :metrics {:variable :!employee_count :title "Employees"}
                                         :interval "year"
                                         :before (time/today-str)}
                                 :timeline-data nil}

   :geo-sponsors {:controls {:max-count 1}
                  :data nil}

   :city-barchart {:query {:index-name "companies"
                           :index-type "company"
                           :nested-path "?tags"
                           :nested-attr "tag"
                           :nested-filter {:term {:type "startup_region"}}
                           :stats-attr "!total_funding"}
                   :metrics [{:metric :sum
                              :title "Total"
                              :label-formatter (fn [] (this-as this (money/readable (.-value this) :sf 2 :curr "")))}
                             {:metric :nested_attr_doc_count
                              :title  "# of Companies"
                              :label-formatter (fn [] (this-as this (money/readable (.-value this) :sf 2 :curr "")))}
                             ]
                   :tag-type "startup_region"
                   :tag-data nil
                   :tag-agg-data nil}

   :sector-histogram {:query {:index-name "companies"
                              :index-type "company"
                              :nested-path "?tags"
                              :nested-attr "tag"
                              :nested-filter {:term {:type "ons_sector"}}
                              :stats-attr "?counter"}
                      :metrics [{:metric :nested_attr_doc_count
                                 :title "Companies"
                                 :label-formatter (fn [] (this-as this (money/readable (.-value this) :sf 2 :curr "")))}]
                      :tag-type "ons_sector"
                      :tag-data nil
                      :tag-agg-data nil}

   :revenue-bands-table {:controls {:index "companies"
                                    :index-type "company"

                                    :rows [{:key "2014" :label "2014"}]
                                    :row-path [:accounts :row]
                                    :row-aggs {:accounts
                                               {:nested {:path "?accounts"}

                                                :aggs
                                                {:row {:range {:field "accounts_date"
                                                               :ranges [{:key "2014" :from "2014-01-01" :to "2015-01-01"}]}}}} }

                                    :cols [{:key "low"  :label "< £500k"}
                                           {:key "500k" :label "> £500k"}
                                           {:key "5m"   :label "> £5m"}
                                           {:key "10m"  :label "> £10m"}
                                           {:key "100m" :label "> £100m"}]
                                    :col-path [:col]
                                    :col-aggs {:col
                                               {:range {:field "turnover"
                                                        :ranges [{:key "low"  :from 0         :to 500000     :label "< £500k"}
                                                                 {:key "500k" :from 500000    :to 5000000    :label "> £500k"}
                                                                 {:key "5m"   :from 5000000   :to 10000000   :label "> £5m"}
                                                                 {:key "10m"  :from 10000000  :to 100000000  :label "> £10m"}
                                                                 {:key "100m" :from 100000000 :to 1000000000 :label "> £100m"}] }}}

                                    :metric-path [:companies :metric]
                                    :metric-aggs {:companies
                                                  {:reverse_nested {}
                                                   :aggs
                                                   {:metric {:cardinality {:field "?natural_id"}}}}}
                                    :render-fn (fn [v] (num/fnum v))

                                    }
                         :table-data nil}

   :view :trends

   :company-close {:text "Close"
                   :target-view "main"
                   :class "btn btn-primary"}

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

   {:name :company-close
    :f nav-button/nav-button-component
    :target "company-close"
    :paths {:nav-button [:company-close]}}

   ;; {:name :city-barchart-var-select
   ;;  :f (partial select-chooser/select-chooser-component "Variable" :stats-attr [["!total_funding" "Total investment (£)"] ["!latest_employee_count" "Employee count"] ["!latest_turnover" "Turnover (£)"]])
   ;;  :target "city-barchart-var-select-component"
   ;;  :path [:city-barchart :query]}

   ;; {:name :region-investment-histogram
   ;;  :f tag-histogram/tag-histogram
   ;;  :target "city-barchart-component"
   ;;  :paths {:tag-histogram [:city-barchart]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :sector-histogram
    :f tag-histogram/tag-histogram
    :target "sector-histogram"
    :paths {:tag-histogram [:sector-histogram]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   {:name :table
    :f table/table-component
    :target "table-component"
    :paths {:table-state [:table]
            :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :investment-timeline
   ;;  :f timeline-chart/timeline-chart
   ;;  :target "investment-timeline-component"
   ;;  :paths {:timeline-chart [:investment-timeline]
   ;;          :filter-spec [:dynamic-filter-spec :composed :all]}}

   ;; {:name :invesetment-timeline-var-select
   ;;  :f (partial select-chooser/select-chooser-component "Variable" :metric [[:sum "Total investment (£)"][:count "Number of deals"]])
   ;;  :target "investment-timeline-var-select-component"
   ;;  :path [:investment-timeline :query :metrics]}

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

   {:name :revenue-bands-table
    :f ranges-table/ranges-table-component
    :target "revenue-bands-table-component"
    :paths {:table-state [:revenue-bands-table]
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
 js/config.repl
 (do
   (ws-repl/connect "ws://localhost:9001" :verbose true)
   (fw/watch-and-reload
    :websocket-url "ws://localhost:3449/figwheel-ws"
    :jsload-callback (fn []
                       (init)
                       (.log js/console "restarted")))
   (init))

 ;; production : just run the app
 true
 (init))
