// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.components.company_info');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('schema.core');
goog.require('clustermap.components.timeline_chart');
goog.require('weasel.repl');
goog.require('clustermap.components.text');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('figwheel.client');
goog.require('clustermap.components.table');
goog.require('clustermap.components.ranges_table');
goog.require('clustermap.components.table');
goog.require('clustermap.api');
goog.require('clustermap.components.tag_histogram');
goog.require('cljs.core.async');
goog.require('clustermap.components.ranges_table');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.company_info');
goog.require('clustermap.filters');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.geo_sponsors');
goog.require('clustermap.boundarylines');
goog.require('clustermap.app');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.filter_component_description');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.text');
goog.require('figwheel.client');
goog.require('clustermap.components.search');
goog.require('schema.core');
goog.require('clustermap.components.filter_description');
goog.require('clustermap.components.filter_component_description');
goog.require('secretary.core');
goog.require('clustermap.components.nav_button');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clojure.string');
goog.require('clustermap.components.tag_histogram');
goog.require('clustermap.app');
goog.require('clustermap.components.map');
goog.require('clustermap.components.ranges_chart');
goog.require('clustermap.components.nav_button');
goog.require('clustermap.formats.money');
goog.require('clustermap.filters');
goog.require('clustermap.api');
goog.require('weasel.repl');
goog.require('clustermap.components.geo_sponsors');
goog.require('clustermap.components.filter_description');
goog.require('clustermap.components.ranges_chart');
clustermap.core.dev_mode = (function (){var G__20084 = window;var G__20084__$1 = (((G__20084 == null))?null:G__20084.config);var G__20084__$2 = (((G__20084__$1 == null))?null:G__20084__$1.repl);return G__20084__$2;
})();
clustermap.core.app_instance = cljs.core.atom.call(null,null);
clustermap.core.get_app_state_atom = (function get_app_state_atom(){return clustermap.app.get_state.call(null,cljs.core.deref.call(null,clustermap.core.app_instance));
});
clustermap.core.max_lag_months = (22);
clustermap.core.current_filter = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["rank",(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["accounts_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),clustermap.formats.time.format_date.call(null,clustermap.formats.time.months_ago.call(null,clustermap.core.max_lag_months))], null)], null)], null)], null)], null)], null)], null)], null);
clustermap.core.scaleup_rank_filter = (function scaleup_rank_filter(n){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["rank",n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["accounts_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),clustermap.formats.time.format_date.call(null,clustermap.formats.time.months_ago.call(null,(clustermap.core.max_lag_months + ((12) * (n - (1))))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["turnover_delta_norm",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),0.2], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["rank",(n + (1))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["accounts_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),clustermap.formats.time.format_date.call(null,clustermap.formats.time.months_ago.call(null,(clustermap.core.max_lag_months + ((12) * n))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["turnover_delta_norm",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),0.2], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["employee_count",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),(10)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),(1000000)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
clustermap.core.scaleup_filter = clustermap.core.scaleup_rank_filter.call(null,(1));
clustermap.core.previous_scaleup_filter = clustermap.core.scaleup_rank_filter.call(null,(2));
clustermap.core.boundaryline_filter = (function boundaryline_filter(boundaryline_id){if(cljs.core.truth_(boundaryline_id))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?boundarylines",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["boundaryline_id",boundaryline_id], null)], null)], null)], null);
} else
{return null;
}
});
clustermap.core.make_boundaryline_selection = (function make_boundaryline_selection(boundaryline_id){var app_state = clustermap.app.get_state.call(null,cljs.core.deref.call(null,clustermap.core.app_instance));var ch = (cljs.core.truth_(boundaryline_id)?clustermap.boundarylines.get_or_fetch_boundaryline.call(null,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id):null);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,app_state,ch){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,app_state,ch){
return (function (state_20169){var state_val_20170 = (state_20169[(1)]);if((state_val_20170 === (7)))
{var state_20169__$1 = state_20169;var statearr_20171_20193 = state_20169__$1;(statearr_20171_20193[(2)] = null);
(statearr_20171_20193[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (1)))
{var state_20169__$1 = state_20169;if(cljs.core.truth_(ch))
{var statearr_20172_20194 = state_20169__$1;(statearr_20172_20194[(1)] = (2));
} else
{var statearr_20173_20195 = state_20169__$1;(statearr_20173_20195[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (4)))
{var inst_20144 = (state_20169[(7)]);var inst_20144__$1 = (state_20169[(2)]);var inst_20145 = console.log(inst_20144__$1);var state_20169__$1 = (function (){var statearr_20174 = state_20169;(statearr_20174[(8)] = inst_20145);
(statearr_20174[(7)] = inst_20144__$1);
return statearr_20174;
})();if(cljs.core.truth_(boundaryline_id))
{var statearr_20175_20196 = state_20169__$1;(statearr_20175_20196[(1)] = (6));
} else
{var statearr_20176_20197 = state_20169__$1;(statearr_20176_20197[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (6)))
{var inst_20147 = clustermap.core.boundaryline_filter.call(null,boundaryline_id);var state_20169__$1 = state_20169;var statearr_20177_20198 = state_20169__$1;(statearr_20177_20198[(2)] = inst_20147);
(statearr_20177_20198[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (3)))
{var state_20169__$1 = state_20169;var statearr_20178_20199 = state_20169__$1;(statearr_20178_20199[(2)] = null);
(statearr_20178_20199[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (2)))
{var state_20169__$1 = state_20169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20169__$1,(5),ch);
} else
{if((state_val_20170 === (11)))
{var inst_20150 = (state_20169[(9)]);var inst_20155 = (state_20169[(2)]);var inst_20156 = cljs.core.deref.call(null,app_state);var inst_20157 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20158 = [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)];var inst_20159 = (new cljs.core.PersistentVector(null,1,(5),inst_20157,inst_20158,null));var inst_20160 = cljs.core.get_in.call(null,inst_20156,inst_20159);var inst_20161 = clustermap.filters.update_filter_component.call(null,inst_20160,new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),inst_20150,inst_20155,boundaryline_id);var inst_20162 = cljs.core.clj__GT_js.call(null,inst_20161);var inst_20163 = console.log(inst_20162);var inst_20164 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20165 = [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)];var inst_20166 = (new cljs.core.PersistentVector(null,1,(5),inst_20164,inst_20165,null));var inst_20167 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,inst_20166,inst_20161);var state_20169__$1 = (function (){var statearr_20179 = state_20169;(statearr_20179[(10)] = inst_20163);
return statearr_20179;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20169__$1,inst_20167);
} else
{if((state_val_20170 === (9)))
{var inst_20144 = (state_20169[(7)]);var inst_20152 = (inst_20144["compact_name"]);var state_20169__$1 = state_20169;var statearr_20180_20200 = state_20169__$1;(statearr_20180_20200[(2)] = inst_20152);
(statearr_20180_20200[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (5)))
{var inst_20141 = (state_20169[(2)]);var state_20169__$1 = state_20169;var statearr_20181_20201 = state_20169__$1;(statearr_20181_20201[(2)] = inst_20141);
(statearr_20181_20201[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (10)))
{var state_20169__$1 = state_20169;var statearr_20182_20202 = state_20169__$1;(statearr_20182_20202[(2)] = null);
(statearr_20182_20202[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20170 === (8)))
{var inst_20150 = (state_20169[(2)]);var state_20169__$1 = (function (){var statearr_20183 = state_20169;(statearr_20183[(9)] = inst_20150);
return statearr_20183;
})();if(cljs.core.truth_(boundaryline_id))
{var statearr_20184_20203 = state_20169__$1;(statearr_20184_20203[(1)] = (9));
} else
{var statearr_20185_20204 = state_20169__$1;(statearr_20185_20204[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__,app_state,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,app_state,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20189 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20189[(0)] = state_machine__9111__auto__);
(statearr_20189[(1)] = (1));
return statearr_20189;
});
var state_machine__9111__auto____1 = (function (state_20169){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20169);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20190){if((e20190 instanceof Object))
{var ex__9114__auto__ = e20190;var statearr_20191_20205 = state_20169;(statearr_20191_20205[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20190;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20206 = state_20169;
state_20169 = G__20206;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20169){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,app_state,ch))
})();var state__9127__auto__ = (function (){var statearr_20192 = f__9126__auto__.call(null);(statearr_20192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,app_state,ch))
);
return c__9125__auto__;
});
clustermap.core.make_company_selection = (function make_company_selection(natural_id){var state_atom = clustermap.core.get_app_state_atom.call(null);var components = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"components","components",-1073188942)], null));var components__$1 = cljs.core.assoc_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"natural-id","natural-id",1706763483)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["?natural_id",natural_id], null)], null));var base_filters = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964)], null));var composed = clustermap.filters.compose_filters.call(null,components__$1,base_filters);return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),components__$1,new cljs.core.Keyword(null,"composed","composed",-1510693384),composed], null));
});
clustermap.core.company_link_render_fn = (function company_link_render_fn(name,record){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){e.preventDefault();
clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(record));
return clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
})], null),name], null);
});
clustermap.core.sign_icon = (function sign_icon(n){if((n > (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-positive","i.icon-positive",1320612420)], null);
} else
{if((n < (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-negative","i.icon-negative",1168365176)], null);
} else
{return null;

}
}
});
clustermap.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"revenue-bands","revenue-bands",-33104862),new cljs.core.Keyword(null,"company-close","company-close",-1678145918),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"company-name","company-name",1213910953),new cljs.core.Keyword(null,"company-search","company-search",-2146533206),new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411),new cljs.core.Keyword(null,"city-barchart","city-barchart",825479308),new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691),new cljs.core.Keyword(null,"dynamic-filter-description-components","dynamic-filter-description-components",-281677520),new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491),new cljs.core.Keyword(null,"company-turnover-timeline","company-turnover-timeline",-996483945),new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"company-employment-timeline","company-employment-timeline",1293857343)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"selection-filter","selection-filter",1191734461),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"natural_id","natural_id",-322974786),null], null),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reverse_nested","reverse_nested",-218199250),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"?natural_id"], null)], null)], null)], null)], null),"companies",(function (v){return clustermap.formats.number.fnum.call(null,v);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"turnover",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"lt50k",new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(50000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"50k",new cljs.core.Keyword(null,"from","from",1815293044),(50000),new cljs.core.Keyword(null,"to","to",192099007),(100000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"100k",new cljs.core.Keyword(null,"from","from",1815293044),(100000),new cljs.core.Keyword(null,"to","to",192099007),(250000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"250k",new cljs.core.Keyword(null,"from","from",1815293044),(250000),new cljs.core.Keyword(null,"to","to",192099007),(500000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"500k",new cljs.core.Keyword(null,"from","from",1815293044),(500000),new cljs.core.Keyword(null,"to","to",192099007),(1000000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"1m",new cljs.core.Keyword(null,"from","from",1815293044),(1000000),new cljs.core.Keyword(null,"to","to",192099007),(5000000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"5m",new cljs.core.Keyword(null,"from","from",1815293044),(5000000)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"2013",new cljs.core.Keyword(null,"label","label",1718410804),"2013"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"lt50k",new cljs.core.Keyword(null,"label","label",1718410804),"Less than \u00A350k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"50k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A350k - \u00A3100k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"100k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A3100k - \u00A3250k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"250k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A3250k - \u00A3500k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"500k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A3500k - \u00A31m"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"1m",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A31m - \u00A35m"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"5m",new cljs.core.Keyword(null,"label","label",1718410804),"More than \u00A35m"], null)], null),"company",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts"], null),new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"accounts_date",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"2013",new cljs.core.Keyword(null,"from","from",1815293044),"2013-01-01",new cljs.core.Keyword(null,"to","to",192099007),"2014-01-01"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.Keyword(null,"metric","metric",408798077)], null)]),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Close",new cljs.core.Keyword(null,"target-view","target-view",-2032886926),"main",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!name","!name",1164538490),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),clustermap.core.company_link_render_fn], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Formation date",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20208_SHARP_){return clustermap.formats.time.format_date.call(null,p1__20208_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Turnover",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20209_SHARP_){return clustermap.formats.money.readable.call(null,p1__20209_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover_delta","!latest_turnover_delta",426854981),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Turn. change",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v,r){var pv = new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972).cljs$core$IFn$_invoke$arity$1(r);var v__$1 = clustermap.formats.number._STAR__BANG_.call(null,(100),clustermap.formats.number.div_BANG_.call(null,v,pv));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.core.sign_icon.call(null,v__$1),clustermap.formats.money.readable.call(null,v__$1,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""),"%"], null);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Employees",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20210_SHARP_){return clustermap.formats.number.readable.call(null,p1__20210_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count_delta","!latest_employee_count_delta",-328358407),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Emp. change",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v,r){var pv = new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938).cljs$core$IFn$_invoke$arity$1(r);var v__$1 = clustermap.formats.number._STAR__BANG_.call(null,(100),clustermap.formats.number.div_BANG_.call(null,v,pv));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.core.sign_icon.call(null,v__$1),clustermap.formats.money.readable.call(null,v__$1,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""),"%"], null);
})], null)], null)], null),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),null,new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"title-field","title-field",402861939),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"formation_date","formation_date",-1475761548),new cljs.core.Keyword(null,"label","label",1718410804),"Formation date",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20207_SHARP_){return clustermap.formats.time.format_date.call(null,p1__20207_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"web_url","web_url",2107881046),new cljs.core.Keyword(null,"label","label",1718410804),"Web",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (w){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),w,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),w], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"funding_rounds","funding_rounds",-1158649947),new cljs.core.Keyword(null,"label","label",1718410804),"Funding",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (frs){var iter__4377__auto__ = (function iter__20211(s__20212){return (new cljs.core.LazySeq(null,(function (){var s__20212__$1 = s__20212;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20212__$1);if(temp__4126__auto__)
{var s__20212__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20212__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20212__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20214 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20213 = (0);while(true){
if((i__20213 < size__4376__auto__))
{var fr = cljs.core._nth.call(null,c__4375__auto__,i__20213);cljs.core.chunk_append.call(null,b__20214,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))," : ",clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount_usd","raised_amount_usd",252697530).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.join.call(null,", ",(function (){var iter__4377__auto__ = ((function (i__20213,fr,c__4375__auto__,size__4376__auto__,b__20214,s__20212__$2,temp__4126__auto__){
return (function iter__20223(s__20224){return (new cljs.core.LazySeq(null,((function (i__20213,fr,c__4375__auto__,size__4376__auto__,b__20214,s__20212__$2,temp__4126__auto__){
return (function (){var s__20224__$1 = s__20224;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20224__$1);if(temp__4126__auto____$1)
{var s__20224__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20224__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20224__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20226 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20225 = (0);while(true){
if((i__20225 < size__4376__auto____$1))
{var inv = cljs.core._nth.call(null,c__4375__auto____$1,i__20225);cljs.core.chunk_append.call(null,b__20226,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv));
{
var G__20267 = (i__20225 + (1));
i__20225 = G__20267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20226),iter__20223.call(null,cljs.core.chunk_rest.call(null,s__20224__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20226),null);
}
} else
{var inv = cljs.core.first.call(null,s__20224__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv),iter__20223.call(null,cljs.core.rest.call(null,s__20224__$2)));
}
} else
{return null;
}
break;
}
});})(i__20213,fr,c__4375__auto__,size__4376__auto__,b__20214,s__20212__$2,temp__4126__auto__))
,null,null));
});})(i__20213,fr,c__4375__auto__,size__4376__auto__,b__20214,s__20212__$2,temp__4126__auto__))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null));
{
var G__20268 = (i__20213 + (1));
i__20213 = G__20268;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20214),iter__20211.call(null,cljs.core.chunk_rest.call(null,s__20212__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20214),null);
}
} else
{var fr = cljs.core.first.call(null,s__20212__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))," : ",clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount_usd","raised_amount_usd",252697530).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.join.call(null,", ",(function (){var iter__4377__auto__ = ((function (fr,s__20212__$2,temp__4126__auto__){
return (function iter__20227(s__20228){return (new cljs.core.LazySeq(null,((function (fr,s__20212__$2,temp__4126__auto__){
return (function (){var s__20228__$1 = s__20228;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20228__$1);if(temp__4126__auto____$1)
{var s__20228__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20228__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20228__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20230 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20229 = (0);while(true){
if((i__20229 < size__4376__auto__))
{var inv = cljs.core._nth.call(null,c__4375__auto__,i__20229);cljs.core.chunk_append.call(null,b__20230,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv));
{
var G__20269 = (i__20229 + (1));
i__20229 = G__20269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),iter__20227.call(null,cljs.core.chunk_rest.call(null,s__20228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),null);
}
} else
{var inv = cljs.core.first.call(null,s__20228__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv),iter__20227.call(null,cljs.core.rest.call(null,s__20228__$2)));
}
} else
{return null;
}
break;
}
});})(fr,s__20212__$2,temp__4126__auto__))
,null,null));
});})(fr,s__20212__$2,temp__4126__auto__))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null),iter__20211.call(null,cljs.core.rest.call(null,s__20212__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341),frs));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"directorships","directorships",1218259884),new cljs.core.Keyword(null,"label","label",1718410804),"Directors",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (ds){var iter__4377__auto__ = (function iter__20231(s__20232){return (new cljs.core.LazySeq(null,(function (){var s__20232__$1 = s__20232;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20232__$1);if(temp__4126__auto__)
{var s__20232__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20232__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20232__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20234 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20233 = (0);while(true){
if((i__20233 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__20233);cljs.core.chunk_append.call(null,b__20234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null));
{
var G__20270 = (i__20233 + (1));
i__20233 = G__20270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20234),iter__20231.call(null,cljs.core.chunk_rest.call(null,s__20232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20234),null);
}
} else
{var d = cljs.core.first.call(null,s__20232__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),iter__20231.call(null,cljs.core.rest.call(null,s__20232__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,ds);
})], null)], null)], null),new cljs.core.Keyword(null,"record","record",-779106859),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),clustermap.api.company_search,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (r){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r)], null)], null);
}),new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),null,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),(function (r){clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(r));
return clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
})], null),new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"fill-report-button","fill-report-button",-2098144961),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?counter","?counter",-1780233491),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032),new cljs.core.Keyword(null,"label","label",1718410804),"Companies",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Total turnover",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3");
})], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover_delta","!latest_turnover_delta",426854981),new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Turnover change",new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (btv,v){return ((100) * (v / btv));
}),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.core.sign_icon.call(null,v),clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""),"%"], null);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Total employees",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count_delta","!latest_employee_count_delta",-328358407),new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Employment change",new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (btv,v){return ((100) * (v / btv));
}),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.core.sign_icon.call(null,v),clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""),"%"], null);
})], null)], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"startup_region"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"!total_funding"], null),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"title","title",636505583),"Total",new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955),(function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244),new cljs.core.Keyword(null,"title","title",636505583),"# of Companies",new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955),(function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null),new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"startup_region",new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),null,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949),null], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"broad_12_sectors"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"!latest_turnover"], null),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"title","title",636505583),"-",new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955),(function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null),new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"broad_12_sectors",new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),null,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949),null], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"total-funding","total-funding",-1874345268),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"hub","hub",1977768006),new cljs.core.Keyword(null,"latest-turnover","latest-turnover",-1943662305),new cljs.core.Keyword(null,"highgrowth","highgrowth",-759844423)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!turnover","!turnover",1658808771),new cljs.core.Keyword(null,"title","title",636505583),"-",new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814)], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),"2014-01-01"], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!turnover","!turnover",1658808771),new cljs.core.Keyword(null,"title","title",636505583),"Turnover (\u00A3)"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),clustermap.formats.time.today_str.call(null)], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),(1)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"map-options","map-options",-379251610),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),new cljs.core.Keyword(null,"show-points","show-points",-480527088),new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542)],[null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true,new cljs.core.Keyword(null,"touchZoom","touchZoom",1236110738),true,new cljs.core.Keyword(null,"scrollWheelZoom","scrollWheelZoom",1775177212),false,new cljs.core.Keyword(null,"doubleClickZoom","doubleClickZoom",-1569471619),true,new cljs.core.Keyword(null,"boxZoom","boxZoom",-1994664913),true], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"uk_boroughs"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"?count"], null),new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"uk_boroughs",new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031),(function (z){return (((7) < z)) && ((z < (10)));
}),new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915),(function (tag,stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244).cljs$core$IFn$_invoke$arity$1(stats),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"")], null);
}),new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160),(function (tag,stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(tag)], null)], null);
}),new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),(function (geotag,geotag_agg,e){var boundaryline_id = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(geotag);var ch = clustermap.boundarylines.get_or_fetch_boundaryline.call(null,clustermap.core.get_app_state_atom.call(null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundaryline_id,ch){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundaryline_id,ch){
return (function (state_20252){var state_val_20253 = (state_20252[(1)]);if((state_val_20253 === (5)))
{var inst_20250 = (state_20252[(2)]);var state_20252__$1 = state_20252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20252__$1,inst_20250);
} else
{if((state_val_20253 === (4)))
{var state_20252__$1 = state_20252;var statearr_20254_20271 = state_20252__$1;(statearr_20254_20271[(2)] = null);
(statearr_20254_20271[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20253 === (3)))
{var inst_20239 = (state_20252[(7)]);var inst_20241 = cljs.core.deref.call(null,clustermap.core.app_instance);var inst_20242 = clustermap.app.get_state.call(null,inst_20241);var inst_20243 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20244 = [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)];var inst_20245 = (new cljs.core.PersistentVector(null,3,(5),inst_20243,inst_20244,null));var inst_20246 = cljs.core.swap_BANG_.call(null,inst_20242,cljs.core.assoc_in,inst_20245,inst_20239);var inst_20247 = clustermap.core.make_boundaryline_selection.call(null,boundaryline_id);var state_20252__$1 = (function (){var statearr_20255 = state_20252;(statearr_20255[(8)] = inst_20246);
return statearr_20255;
})();var statearr_20256_20272 = state_20252__$1;(statearr_20256_20272[(2)] = inst_20247);
(statearr_20256_20272[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20253 === (2)))
{var inst_20239 = (state_20252[(7)]);var inst_20236 = (state_20252[(2)]);var inst_20237 = (inst_20236["envelope"]);var inst_20238 = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,inst_20237);var inst_20239__$1 = cljs.core.js__GT_clj.call(null,inst_20238);var state_20252__$1 = (function (){var statearr_20257 = state_20252;(statearr_20257[(7)] = inst_20239__$1);
return statearr_20257;
})();if(cljs.core.truth_(inst_20239__$1))
{var statearr_20258_20273 = state_20252__$1;(statearr_20258_20273[(1)] = (3));
} else
{var statearr_20259_20274 = state_20252__$1;(statearr_20259_20274[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20253 === (1)))
{var state_20252__$1 = state_20252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20252__$1,(2),ch);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundaryline_id,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,boundaryline_id,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20263 = [null,null,null,null,null,null,null,null,null];(statearr_20263[(0)] = state_machine__9111__auto__);
(statearr_20263[(1)] = (1));
return statearr_20263;
});
var state_machine__9111__auto____1 = (function (state_20252){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20252);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20264){if((e20264 instanceof Object))
{var ex__9114__auto__ = e20264;var statearr_20265_20275 = state_20252;(statearr_20265_20275[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20264;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20276 = state_20252;
state_20252 = G__20276;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20252){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundaryline_id,ch))
})();var state__9127__auto__ = (function (){var statearr_20266 = f__9126__auto__.call(null);(statearr_20266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundaryline_id,ch))
);
return c__9125__auto__;
}),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976),null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391),null], null),(function (r){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),("#"),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),cljs.core.get.call(null,r,new cljs.core.Keyword(null,"name","name",1843675177))], null);
}),null,null,true,(function (r,e){clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(r));
clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
return console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLICK",r,e], null)));
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"RdPu","RdPu",-1880439170),new cljs.core.Keyword(null,"6","6",-1107752709)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"boundaryline_id_doc_count","boundaryline_id_doc_count",1461854746)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [51.95,-0.76], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [52.76,1.07], null)], null)]),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coll","coll",1647737163),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),null], null),new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null),new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),new cljs.core.Keyword(null,"label","label",1718410804),"Sector",new cljs.core.Keyword(null,"sorted","sorted",-896746253),false,new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"broad_12_sectors",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"construction_and_utilities",new cljs.core.Keyword(null,"label","label",1718410804),"Construction and utilities"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"education_arts_charities_social_care",new cljs.core.Keyword(null,"label","label",1718410804),"Education, arts, charities, social care"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"information_technology_and_telecoms",new cljs.core.Keyword(null,"label","label",1718410804),"Information Technology and Telecoms"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"knowledge_intensive_professional_services",new cljs.core.Keyword(null,"label","label",1718410804),"Knowledge Intensive Professional Services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"life_science_and_healthcare",new cljs.core.Keyword(null,"label","label",1718410804),"Life Science and Healthcare"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manufacturing",new cljs.core.Keyword(null,"label","label",1718410804),"Manufacturing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"other_business_services",new cljs.core.Keyword(null,"label","label",1718410804),"Other Business Services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"personal_services",new cljs.core.Keyword(null,"label","label",1718410804),"Personal services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"primary",new cljs.core.Keyword(null,"label","label",1718410804),"Primary"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"property_and_finance",new cljs.core.Keyword(null,"label","label",1718410804),"Property and finance"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"transport_and_travel",new cljs.core.Keyword(null,"label","label",1718410804),"Transport and travel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"wholesale_and_retail_distribution",new cljs.core.Keyword(null,"label","label",1718410804),"Wholesale and retail distribution"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"not_known",new cljs.core.Keyword(null,"label","label",1718410804),"Unknown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"highgrowth","highgrowth",-759844423),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new cljs.core.Keyword(null,"label","label",1718410804),"High growth",new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"latest",new cljs.core.Keyword(null,"label","label",1718410804),"High growth companies",new cljs.core.Keyword(null,"filter","filter",-948537934),clustermap.core.scaleup_filter], null)], null)], null)], null),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"trends","trends",193200459),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!employee_count","!employee_count",-1454063472),new cljs.core.Keyword(null,"title","title",636505583),"Employees"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),clustermap.formats.time.today_str.call(null)], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null)]);
clustermap.core.components = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter.filter_component,new cljs.core.Keyword(null,"target","target",253001721),"filter-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-search","company-search",-2146533206),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.search.search_component,new cljs.core.Keyword(null,"target","target",253001721),"company-search-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-search","company-search",-2146533206)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-description","filter-description",2074900015),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter_description.filter_description_component,new cljs.core.Keyword(null,"target","target",253001721),"filter-description-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-description-components","dynamic-filter-description-components",-281677520)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map_report.map_report_component,new cljs.core.Keyword(null,"target","target",253001721),"headline-stats-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map.map_component,new cljs.core.Keyword(null,"target","target",253001721),"map-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color-scale","color-scale",-2117745622),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.color_scale.color_scale_component,new cljs.core.Keyword(null,"target","target",253001721),"color-scale-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-close","company-close",-1678145918),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.nav_button.nav_button_component,new cljs.core.Keyword(null,"target","target",253001721),"company-close",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-close","company-close",-1678145918)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sector-histogram-var-select","sector-histogram-var-select",509957660),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Total turnover (\u00A3)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Total employees"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"sector-histogram-var-select-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691),new cljs.core.Keyword(null,"query","query",-1288509510)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.tag_histogram.tag_histogram,new cljs.core.Keyword(null,"target","target",253001721),"sector-histogram-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.table.table_component,new cljs.core.Keyword(null,"target","target",253001721),"table-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.timeline_chart.timeline_chart,new cljs.core.Keyword(null,"target","target",253001721),"trends-timeline-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"trends-timeline-var-select","trends-timeline-var-select",151865182),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!turnover","!turnover",1658808771),"Turnover (\u00A3)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!employee_count","!employee_count",-1454063472),"Employees"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"trends-timeline-var-select-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"metrics","metrics",394093469)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"revenue-bands-chart","revenue-bands-chart",-2114746014),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.ranges_chart.ranges_chart_component,new cljs.core.Keyword(null,"target","target",253001721),"revenue-bands-chart-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revenue-bands","revenue-bands",-33104862)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-name","company-name",1213910953),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.text.text_component,new cljs.core.Keyword(null,"target","target",253001721),"company-name-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"record","record",-779106859)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-name","company-name",1213910953)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.company_info.company_info_component,new cljs.core.Keyword(null,"target","target",253001721),"company-info-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-info","company-info",-854288729)], null),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-turnover-timeline","company-turnover-timeline",-996483945)], null),new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-employment-timeline","company-employment-timeline",1293857343)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null)], null);
clustermap.core.bl_collections = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_counties"], null);
clustermap.core.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__20281 = cljs.core.seq.call(null,clustermap.core.bl_collections);var chunk__20282 = null;var count__20283 = (0);var i__20284 = (0);while(true){
if((i__20284 < count__20283))
{var blcoll = cljs.core._nth.call(null,chunk__20282,i__20284);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__20285 = seq__20281;
var G__20286 = chunk__20282;
var G__20287 = count__20283;
var G__20288 = (i__20284 + (1));
seq__20281 = G__20285;
chunk__20282 = G__20286;
count__20283 = G__20287;
i__20284 = G__20288;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20281);if(temp__4126__auto__)
{var seq__20281__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20281__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20281__$1);{
var G__20289 = cljs.core.chunk_rest.call(null,seq__20281__$1);
var G__20290 = c__4408__auto__;
var G__20291 = cljs.core.count.call(null,c__4408__auto__);
var G__20292 = (0);
seq__20281 = G__20289;
chunk__20282 = G__20290;
count__20283 = G__20291;
i__20284 = G__20292;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__20281__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__20293 = cljs.core.next.call(null,seq__20281__$1);
var G__20294 = null;
var G__20295 = (0);
var G__20296 = (0);
seq__20281 = G__20293;
chunk__20282 = G__20294;
count__20283 = G__20295;
i__20284 = G__20296;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.core.create_app_service = (function create_app_service(){var event_handlers = cljs.core.atom.call(null,null);if(typeof clustermap.core.t20300 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.core.t20300 = (function (event_handlers,create_app_service,meta20301){
this.event_handlers = event_handlers;
this.create_app_service = create_app_service;
this.meta20301 = meta20301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.core.t20300.cljs$lang$type = true;
clustermap.core.t20300.cljs$lang$ctorStr = "clustermap.core/t20300";
clustermap.core.t20300.cljs$lang$ctorPrWriter = ((function (event_handlers){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.core/t20300");
});})(event_handlers))
;
clustermap.core.t20300.prototype.clustermap$app$IAppService$ = true;
clustermap.core.t20300.prototype.clustermap$app$IAppService$init$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;clustermap.core.load_boundaryline_collection_indexes.call(null,clustermap.app.get_state.call(null,app));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"get-cached-boundaryline-fn","get-cached-boundaryline-fn",-1176244331),cljs.core.partial.call(null,clustermap.boundarylines.get_cached_boundaryline,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440)),new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),clustermap.core.make_boundaryline_selection], null);
});})(event_handlers))
;
clustermap.core.t20300.prototype.clustermap$app$IAppService$destroy$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;return console.log("DESTROY APP!");
});})(event_handlers))
;
clustermap.core.t20300.prototype.clustermap$app$IAppService$handle_event$arity$4 = ((function (event_handlers){
return (function (this$,app,type,val){var self__ = this;
var this$__$1 = this;return null;
});})(event_handlers))
;
clustermap.core.t20300.prototype.clustermap$app$IAppService$dev_mode_QMARK_$arity$1 = ((function (event_handlers){
return (function (this$){var self__ = this;
var this$__$1 = this;return clustermap.core.dev_mode;
});})(event_handlers))
;
clustermap.core.t20300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_handlers){
return (function (_20302){var self__ = this;
var _20302__$1 = this;return self__.meta20301;
});})(event_handlers))
;
clustermap.core.t20300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_handlers){
return (function (_20302,meta20301__$1){var self__ = this;
var _20302__$1 = this;return (new clustermap.core.t20300(self__.event_handlers,self__.create_app_service,meta20301__$1));
});})(event_handlers))
;
clustermap.core.__GT_t20300 = ((function (event_handlers){
return (function __GT_t20300(event_handlers__$1,create_app_service__$1,meta20301){return (new clustermap.core.t20300(event_handlers__$1,create_app_service__$1,meta20301));
});})(event_handlers))
;
}
return (new clustermap.core.t20300(event_handlers,create_app_service,null));
});
clustermap.core.init = (function init(){return clustermap.app.start_or_restart_app.call(null,clustermap.core.app_instance,clustermap.core.initial_state,clustermap.core.components,clustermap.core.create_app_service.call(null));
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){clustermap.core.init.call(null);
return console.log("restarted");
}));
clustermap.core.init.call(null);
} else
{clustermap.core.init.call(null);

}
