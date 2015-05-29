(ns clustermap.components.company-info
  (:require [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [schema.core :as s :refer-macros [defschema]]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.ordered-resource :as ordered-resource]
            [clustermap.api :as api]
            [clustermap.formats.number :as num]
            [clustermap.formats.money :as money]
            [clustermap.formats.time :as time]))

(defn render-metadata-row
  [record {:keys [key label render-fn] :or {render-fn identity} :as field}]
  [[:div.tbl-cell label]
   [:div.tbl-cell (some-> (get record key) render-fn)]])

(defn sign-icon
  [n]
  (cond
    (> n 0) [:i.icon-positive]
    (< n 0)  [:i.icon-negative]
    :else nil))

(defn stat-change
  [base change]
  (when (and change base (not= 0 base))
    (let [v (* 100 (/ change base))]
      [:div.stat-change (sign-icon v) [:span (money/readable v :sf 2 :curr "") "%"]])))

(defn render*
  [record {:keys [title-field fields] :as controls}]
  (.log js/console (clj->js ["RECORD" record]))
  (html
   [:div.panel-grid-container
    [:div.panel-grid
     [:div.panel-row

      [:div.panel
       [:div.panel-body
        [:div.company-details
         [:ul

          [:li
           [:h4 "Description"]
           [:p (:description record)]]
          [:li
           [:h4 "Website"
            [:p
             [:a {:href (:web_url record) :target "_blank"} (:web_url record)]]]]]]]]

      [:div.panel
       [:div.panel-body
        [:div.company-address
         [:div.row
          [:div.col-sm-6
           (into
            [:address
             [:h4 "Address"]]
            (for [line (str/split (:address record) #",|\n")]
              [:div line]))]]]]]
      ]

     [:div.panel-row

      [:div.panel
       [:div.panel-body
        [:div.chart-heading
         [:h4.stat-title "Turnover"]
         [:div.stat-amount [:small "€"] (money/readable (:latest_turnover record) :sf 2 :curr "")]
         (stat-change (:latest_turnover record) (:latest_turnover_delta record))]]]

      [:div.panel
       [:div.panel-body
        [:div.chart-heading
         [:h4.stat-title "Employment"]
         [:div.stat-amount (num/readable (:latest_employee_count record) :sf 3)]
         (stat-change (:latest_employee_count record) (:latest_employee_count_delta record))]]]
      ]

     [:div.panel-row

      [:div.panel
       [:div.panel-body
        [:h4.stat-title "Funding rounds"]
        [:div.table-responsive
         [:table.table
          [:thead
           [:tr
            [:th "Date"]
            [:th "Amount raised (€)"]
            [:th "Participants"]]]
          (into [:tbody]
                (for [fr (:funding_rounds record)]
                  [:tr
                   [:td (time/format-date (:raised_date fr))]
                   [:td (money/readable (:raised_amount fr) :sf 2 :curr "")]
                   [:td [:table
                         (into [:tbody]
                               (for [p (:investments fr)]
                                 [:tr [:td (:investor_name p)]]))]]]))]]]]

      [:div.panel
       [:div.panel-body
        [:h4.stat-title "Data sources"]
        [:div.table-responsive
         [:table.table
          (into [:tbody]
                (for [source (filter #(= "datasource" (:type %)) (:tags record))]
                  [:tr [:td (:description source)]]))]]]]
      ]



     ]]
   ;; [:div.box.box-first
   ;;  [:header (get record title-field)]
   ;;  [:div.tbl
   ;;   (for [field fields]
   ;;     (into [:div.tbl-row]
   ;;           (render-metadata-row record field)))]]
   ))

(defn company-info-component
  [{{record :record
     {index :index
      index-type :index-type
      sort-spec :sort-spec
      size :size
      :as controls} :controls
      :as metadata} :metadata
      filter-spec :filter-spec
      :as props}
   owner]

  (reify
    om/IDidMount
    (did-mount [_]
      (let [mdr (ordered-resource/make-discard-stale-resource "metadata-resource")]
        (om/set-state! owner :metadata-resource mdr)
        (ordered-resource/retrieve-responses mdr (fn [data]
                                                   (.log js/console (clj->js ["COMPANY-INFO-DATA" data]))
                                                   (om/update! metadata [:record] (some-> data :records first))))))

    om/IRender
    (render [_]
      (render* record controls))

    om/IWillUpdate
    (will-update [_
                  {{next-record :record
                    {next-index :index
                     next-index-type :index-type
                     next-sort-spec :sort-spec
                     next-size :size
                     :as next-controls} :controls
                    :as next-metadata} :metadata
                    next-filter-spec :filter-spec}
                  {metadata-resource :metadata-resource}]

      (when (or (not next-record)
                (not= next-controls controls)
                (not= next-filter-spec filter-spec))

        (ordered-resource/api-call metadata-resource
                                   api/records
                                   next-index
                                   next-index-type
                                   next-filter-spec
                                   next-sort-spec
                                   next-size)))))
