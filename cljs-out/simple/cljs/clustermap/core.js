// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
goog.require('clustermap.components.nav_button');
goog.require('clustermap.formats.money');
goog.require('clustermap.filters');
goog.require('clustermap.api');
goog.require('weasel.repl');
goog.require('clustermap.components.geo_sponsors');
goog.require('clustermap.components.filter_description');
clustermap.core.dev_mode = (function (){var G__18986 = window;var G__18986__$1 = (((G__18986 == null))?null:G__18986.config);var G__18986__$2 = (((G__18986__$1 == null))?null:G__18986__$1.repl);return G__18986__$2;
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
clustermap.core.make_boundaryline_selection = (function make_boundaryline_selection(boundaryline_id){var app_state = clustermap.app.get_state.call(null,cljs.core.deref.call(null,clustermap.core.app_instance));var ch = (cljs.core.truth_(boundaryline_id)?clustermap.boundarylines.get_or_fetch_boundaryline.call(null,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id):null);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,app_state,ch){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,app_state,ch){
return (function (state_19071){var state_val_19072 = (state_19071[(1)]);if((state_val_19072 === (7)))
{var state_19071__$1 = state_19071;var statearr_19073_19095 = state_19071__$1;(statearr_19073_19095[(2)] = null);
(statearr_19073_19095[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (1)))
{var state_19071__$1 = state_19071;if(cljs.core.truth_(ch))
{var statearr_19074_19096 = state_19071__$1;(statearr_19074_19096[(1)] = (2));
} else
{var statearr_19075_19097 = state_19071__$1;(statearr_19075_19097[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (4)))
{var inst_19046 = (state_19071[(7)]);var inst_19046__$1 = (state_19071[(2)]);var inst_19047 = console.log(inst_19046__$1);var state_19071__$1 = (function (){var statearr_19076 = state_19071;(statearr_19076[(8)] = inst_19047);
(statearr_19076[(7)] = inst_19046__$1);
return statearr_19076;
})();if(cljs.core.truth_(boundaryline_id))
{var statearr_19077_19098 = state_19071__$1;(statearr_19077_19098[(1)] = (6));
} else
{var statearr_19078_19099 = state_19071__$1;(statearr_19078_19099[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (6)))
{var inst_19049 = clustermap.core.boundaryline_filter.call(null,boundaryline_id);var state_19071__$1 = state_19071;var statearr_19079_19100 = state_19071__$1;(statearr_19079_19100[(2)] = inst_19049);
(statearr_19079_19100[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (3)))
{var state_19071__$1 = state_19071;var statearr_19080_19101 = state_19071__$1;(statearr_19080_19101[(2)] = null);
(statearr_19080_19101[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (2)))
{var state_19071__$1 = state_19071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19071__$1,(5),ch);
} else
{if((state_val_19072 === (11)))
{var inst_19052 = (state_19071[(9)]);var inst_19057 = (state_19071[(2)]);var inst_19058 = cljs.core.deref.call(null,app_state);var inst_19059 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19060 = [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)];var inst_19061 = (new cljs.core.PersistentVector(null,1,(5),inst_19059,inst_19060,null));var inst_19062 = cljs.core.get_in.call(null,inst_19058,inst_19061);var inst_19063 = clustermap.filters.update_filter_component.call(null,inst_19062,new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),inst_19052,inst_19057,boundaryline_id);var inst_19064 = cljs.core.clj__GT_js.call(null,inst_19063);var inst_19065 = console.log(inst_19064);var inst_19066 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19067 = [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)];var inst_19068 = (new cljs.core.PersistentVector(null,1,(5),inst_19066,inst_19067,null));var inst_19069 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,inst_19068,inst_19063);var state_19071__$1 = (function (){var statearr_19081 = state_19071;(statearr_19081[(10)] = inst_19065);
return statearr_19081;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19071__$1,inst_19069);
} else
{if((state_val_19072 === (9)))
{var inst_19046 = (state_19071[(7)]);var inst_19054 = (inst_19046["compact_name"]);var state_19071__$1 = state_19071;var statearr_19082_19102 = state_19071__$1;(statearr_19082_19102[(2)] = inst_19054);
(statearr_19082_19102[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (5)))
{var inst_19043 = (state_19071[(2)]);var state_19071__$1 = state_19071;var statearr_19083_19103 = state_19071__$1;(statearr_19083_19103[(2)] = inst_19043);
(statearr_19083_19103[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (10)))
{var state_19071__$1 = state_19071;var statearr_19084_19104 = state_19071__$1;(statearr_19084_19104[(2)] = null);
(statearr_19084_19104[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19072 === (8)))
{var inst_19052 = (state_19071[(2)]);var state_19071__$1 = (function (){var statearr_19085 = state_19071;(statearr_19085[(9)] = inst_19052);
return statearr_19085;
})();if(cljs.core.truth_(boundaryline_id))
{var statearr_19086_19105 = state_19071__$1;(statearr_19086_19105[(1)] = (9));
} else
{var statearr_19087_19106 = state_19071__$1;(statearr_19087_19106[(1)] = (10));
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
});})(c__11517__auto__,app_state,ch))
;return ((function (switch__11461__auto__,c__11517__auto__,app_state,ch){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_19091 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19091[(0)] = state_machine__11462__auto__);
(statearr_19091[(1)] = (1));
return statearr_19091;
});
var state_machine__11462__auto____1 = (function (state_19071){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_19071);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e19092){if((e19092 instanceof Object))
{var ex__11465__auto__ = e19092;var statearr_19093_19107 = state_19071;(statearr_19093_19107[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19092;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19108 = state_19071;
state_19071 = G__19108;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_19071){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_19071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,app_state,ch))
})();var state__11519__auto__ = (function (){var statearr_19094 = f__11518__auto__.call(null);(statearr_19094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_19094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,app_state,ch))
);
return c__11517__auto__;
});
clustermap.core.make_company_selection = (function make_company_selection(natural_id){var state_atom = clustermap.core.get_app_state_atom.call(null);var components = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"components","components",-1073188942)], null));var components__$1 = cljs.core.assoc_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"natural-id","natural-id",1706763483)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["?natural_id",natural_id], null)], null));var base_filters = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964)], null));var composed = clustermap.filters.compose_filters.call(null,components__$1,base_filters);return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),components__$1,new cljs.core.Keyword(null,"composed","composed",-1510693384),composed], null));
});
clustermap.core.company_link_render_fn = (function company_link_render_fn(name,record){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){e.preventDefault();
clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(record));
return clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
})], null),name], null);
});
clustermap.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"investment-timeline","investment-timeline",-1858948670),new cljs.core.Keyword(null,"company-close","company-close",-1678145918),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"company-name","company-name",1213910953),new cljs.core.Keyword(null,"company-search","company-search",-2146533206),new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411),new cljs.core.Keyword(null,"city-barchart","city-barchart",825479308),new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691),new cljs.core.Keyword(null,"dynamic-filter-description-components","dynamic-filter-description-components",-281677520),new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418),new cljs.core.Keyword(null,"formation-timeline","formation-timeline",-1472056810),new cljs.core.Keyword(null,"revenue-bands-table","revenue-bands-table",768168694),new cljs.core.Keyword(null,"company-turnover-timeline","company-turnover-timeline",-996483945),new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"company-employment-timeline","company-employment-timeline",1293857343)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"selection-filter","selection-filter",1191734461),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"natural_id","natural_id",-322974786),null], null),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-funding-rounds",new cljs.core.Keyword(null,"index-type","index-type",500383962),"funding-round",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?raised_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!raised_amount_usd","!raised_amount_usd",-560737202),new cljs.core.Keyword(null,"title","title",636505583),"-",new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814)], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),"2015-01-01"], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Close",new cljs.core.Keyword(null,"target-view","target-view",-2032886926),"main",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!name","!name",1164538490),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),clustermap.core.company_link_render_fn], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Formation date",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__19110_SHARP_){return clustermap.formats.time.format_date.call(null,p1__19110_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Turnover",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__19111_SHARP_){return clustermap.formats.money.readable.call(null,p1__19111_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Employees",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__19112_SHARP_){return clustermap.formats.number.readable.call(null,p1__19112_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));
})], null)], null)], null),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),null,new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"title-field","title-field",402861939),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"formation_date","formation_date",-1475761548),new cljs.core.Keyword(null,"label","label",1718410804),"Formation date",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__19109_SHARP_){return clustermap.formats.time.format_date.call(null,p1__19109_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"web_url","web_url",2107881046),new cljs.core.Keyword(null,"label","label",1718410804),"Web",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (w){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),w,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),w], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"funding_rounds","funding_rounds",-1158649947),new cljs.core.Keyword(null,"label","label",1718410804),"Funding",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (frs){var iter__4377__auto__ = (function iter__19113(s__19114){return (new cljs.core.LazySeq(null,(function (){var s__19114__$1 = s__19114;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19114__$1);if(temp__4126__auto__)
{var s__19114__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19114__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19114__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19116 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19115 = (0);while(true){
if((i__19115 < size__4376__auto__))
{var fr = cljs.core._nth.call(null,c__4375__auto__,i__19115);cljs.core.chunk_append.call(null,b__19116,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))," : ",clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount_usd","raised_amount_usd",252697530).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.join.call(null,", ",(function (){var iter__4377__auto__ = ((function (i__19115,fr,c__4375__auto__,size__4376__auto__,b__19116,s__19114__$2,temp__4126__auto__){
return (function iter__19125(s__19126){return (new cljs.core.LazySeq(null,((function (i__19115,fr,c__4375__auto__,size__4376__auto__,b__19116,s__19114__$2,temp__4126__auto__){
return (function (){var s__19126__$1 = s__19126;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19126__$1);if(temp__4126__auto____$1)
{var s__19126__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19126__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19126__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19128 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19127 = (0);while(true){
if((i__19127 < size__4376__auto____$1))
{var inv = cljs.core._nth.call(null,c__4375__auto____$1,i__19127);cljs.core.chunk_append.call(null,b__19128,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv));
{
var G__19169 = (i__19127 + (1));
i__19127 = G__19169;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19128),iter__19125.call(null,cljs.core.chunk_rest.call(null,s__19126__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19128),null);
}
} else
{var inv = cljs.core.first.call(null,s__19126__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv),iter__19125.call(null,cljs.core.rest.call(null,s__19126__$2)));
}
} else
{return null;
}
break;
}
});})(i__19115,fr,c__4375__auto__,size__4376__auto__,b__19116,s__19114__$2,temp__4126__auto__))
,null,null));
});})(i__19115,fr,c__4375__auto__,size__4376__auto__,b__19116,s__19114__$2,temp__4126__auto__))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null));
{
var G__19170 = (i__19115 + (1));
i__19115 = G__19170;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19116),iter__19113.call(null,cljs.core.chunk_rest.call(null,s__19114__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19116),null);
}
} else
{var fr = cljs.core.first.call(null,s__19114__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))," : ",clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount_usd","raised_amount_usd",252697530).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.join.call(null,", ",(function (){var iter__4377__auto__ = ((function (fr,s__19114__$2,temp__4126__auto__){
return (function iter__19129(s__19130){return (new cljs.core.LazySeq(null,((function (fr,s__19114__$2,temp__4126__auto__){
return (function (){var s__19130__$1 = s__19130;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19130__$1);if(temp__4126__auto____$1)
{var s__19130__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19130__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19130__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19132 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19131 = (0);while(true){
if((i__19131 < size__4376__auto__))
{var inv = cljs.core._nth.call(null,c__4375__auto__,i__19131);cljs.core.chunk_append.call(null,b__19132,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv));
{
var G__19171 = (i__19131 + (1));
i__19131 = G__19171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19132),iter__19129.call(null,cljs.core.chunk_rest.call(null,s__19130__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19132),null);
}
} else
{var inv = cljs.core.first.call(null,s__19130__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv),iter__19129.call(null,cljs.core.rest.call(null,s__19130__$2)));
}
} else
{return null;
}
break;
}
});})(fr,s__19114__$2,temp__4126__auto__))
,null,null));
});})(fr,s__19114__$2,temp__4126__auto__))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null),iter__19113.call(null,cljs.core.rest.call(null,s__19114__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341),frs));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"directorships","directorships",1218259884),new cljs.core.Keyword(null,"label","label",1718410804),"Directors",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (ds){var iter__4377__auto__ = (function iter__19133(s__19134){return (new cljs.core.LazySeq(null,(function (){var s__19134__$1 = s__19134;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19134__$1);if(temp__4126__auto__)
{var s__19134__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19134__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19134__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19136 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19135 = (0);while(true){
if((i__19135 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__19135);cljs.core.chunk_append.call(null,b__19136,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null));
{
var G__19172 = (i__19135 + (1));
i__19135 = G__19172;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19136),iter__19133.call(null,cljs.core.chunk_rest.call(null,s__19134__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19136),null);
}
} else
{var d = cljs.core.first.call(null,s__19134__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),iter__19133.call(null,cljs.core.rest.call(null,s__19134__$2)));
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
})], null),new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"fill-report-button","fill-report-button",-2098144961),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?counter","?counter",-1780233491),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032),new cljs.core.Keyword(null,"label","label",1718410804),"Companies",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Total turnover",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3");
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Total employees",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"startup_region"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"!total_funding"], null),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"title","title",636505583),"Total",new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955),(function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244),new cljs.core.Keyword(null,"title","title",636505583),"# of Companies",new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955),(function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null),new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"startup_region",new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),null,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949),null], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"ons_sector"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"?counter"], null),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244),new cljs.core.Keyword(null,"title","title",636505583),"Companies",new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955),(function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null),new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"ons_sector",new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),null,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949),null], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"total-funding","total-funding",-1874345268),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"hub","hub",1977768006),new cljs.core.Keyword(null,"latest-turnover","latest-turnover",-1943662305),new cljs.core.Keyword(null,"highgrowth","highgrowth",-759844423)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!employee_count","!employee_count",-1454063472),new cljs.core.Keyword(null,"title","title",636505583),"Employees"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),clustermap.formats.time.today_str.call(null)], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"!formation_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"?counter","?counter",-1780233491),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"title","title",636505583),"Formations"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year"], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reverse_nested","reverse_nested",-218199250),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"?natural_id"], null)], null)], null)], null)], null),"companies",(function (v){return clustermap.formats.number.fnum.call(null,v);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"turnover",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"low",new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(500000),new cljs.core.Keyword(null,"label","label",1718410804),"< \u00A3500k"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"500k",new cljs.core.Keyword(null,"from","from",1815293044),(500000),new cljs.core.Keyword(null,"to","to",192099007),(5000000),new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A3500k"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"5m",new cljs.core.Keyword(null,"from","from",1815293044),(5000000),new cljs.core.Keyword(null,"to","to",192099007),(10000000),new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A35m"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"10m",new cljs.core.Keyword(null,"from","from",1815293044),(10000000),new cljs.core.Keyword(null,"to","to",192099007),(100000000),new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A310m"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"100m",new cljs.core.Keyword(null,"from","from",1815293044),(100000000),new cljs.core.Keyword(null,"to","to",192099007),(1000000000),new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A3100m"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"2014",new cljs.core.Keyword(null,"label","label",1718410804),"2014"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"low",new cljs.core.Keyword(null,"label","label",1718410804),"< \u00A3500k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"500k",new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A3500k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"5m",new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A35m"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"10m",new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A310m"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"100m",new cljs.core.Keyword(null,"label","label",1718410804),"> \u00A3100m"], null)], null),"company",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts"], null),new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"accounts_date",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"2014",new cljs.core.Keyword(null,"from","from",1815293044),"2014-01-01",new cljs.core.Keyword(null,"to","to",192099007),"2015-01-01"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.Keyword(null,"metric","metric",408798077)], null)]),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!turnover","!turnover",1658808771),new cljs.core.Keyword(null,"title","title",636505583),"Turnover (\u00A3)"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),clustermap.formats.time.today_str.call(null)], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),(1)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"map-options","map-options",-379251610),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"link-render-fn","link-render-fn",-751089172),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),new cljs.core.Keyword(null,"show-points","show-points",-480527088),new cljs.core.Keyword(null,"link-click-fn","link-click-fn",708668465),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542)],[null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true,new cljs.core.Keyword(null,"touchZoom","touchZoom",1236110738),true,new cljs.core.Keyword(null,"scrollWheelZoom","scrollWheelZoom",1775177212),false,new cljs.core.Keyword(null,"doubleClickZoom","doubleClickZoom",-1569471619),true,new cljs.core.Keyword(null,"boxZoom","boxZoom",-1994664913),true], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"startup_region"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"!total_funding"], null),new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"startup_region",new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915),(function (tag,stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244).cljs$core$IFn$_invoke$arity$1(stats),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"")], null);
}),new cljs.core.Keyword(null,"popup-render-fn","popup-render-fn",1150622160),(function (tag,stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(tag)], null)], null);
}),new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),(function (geotag,geotag_agg,e){var boundaryline_id = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(geotag);var ch = clustermap.boundarylines.get_or_fetch_boundaryline.call(null,clustermap.core.get_app_state_atom.call(null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,boundaryline_id,ch){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,boundaryline_id,ch){
return (function (state_19154){var state_val_19155 = (state_19154[(1)]);if((state_val_19155 === (5)))
{var inst_19152 = (state_19154[(2)]);var state_19154__$1 = state_19154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19154__$1,inst_19152);
} else
{if((state_val_19155 === (4)))
{var state_19154__$1 = state_19154;var statearr_19156_19173 = state_19154__$1;(statearr_19156_19173[(2)] = null);
(statearr_19156_19173[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19155 === (3)))
{var inst_19141 = (state_19154[(7)]);var inst_19143 = cljs.core.deref.call(null,clustermap.core.app_instance);var inst_19144 = clustermap.app.get_state.call(null,inst_19143);var inst_19145 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19146 = [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)];var inst_19147 = (new cljs.core.PersistentVector(null,3,(5),inst_19145,inst_19146,null));var inst_19148 = cljs.core.swap_BANG_.call(null,inst_19144,cljs.core.assoc_in,inst_19147,inst_19141);var inst_19149 = clustermap.core.make_boundaryline_selection.call(null,boundaryline_id);var state_19154__$1 = (function (){var statearr_19157 = state_19154;(statearr_19157[(8)] = inst_19148);
return statearr_19157;
})();var statearr_19158_19174 = state_19154__$1;(statearr_19158_19174[(2)] = inst_19149);
(statearr_19158_19174[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19155 === (2)))
{var inst_19141 = (state_19154[(7)]);var inst_19138 = (state_19154[(2)]);var inst_19139 = (inst_19138["envelope"]);var inst_19140 = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,inst_19139);var inst_19141__$1 = cljs.core.js__GT_clj.call(null,inst_19140);var state_19154__$1 = (function (){var statearr_19159 = state_19154;(statearr_19159[(7)] = inst_19141__$1);
return statearr_19159;
})();if(cljs.core.truth_(inst_19141__$1))
{var statearr_19160_19175 = state_19154__$1;(statearr_19160_19175[(1)] = (3));
} else
{var statearr_19161_19176 = state_19154__$1;(statearr_19161_19176[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19155 === (1)))
{var state_19154__$1 = state_19154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19154__$1,(2),ch);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,boundaryline_id,ch))
;return ((function (switch__11461__auto__,c__11517__auto__,boundaryline_id,ch){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_19165 = [null,null,null,null,null,null,null,null,null];(statearr_19165[(0)] = state_machine__11462__auto__);
(statearr_19165[(1)] = (1));
return statearr_19165;
});
var state_machine__11462__auto____1 = (function (state_19154){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_19154);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e19166){if((e19166 instanceof Object))
{var ex__11465__auto__ = e19166;var statearr_19167_19177 = state_19154;(statearr_19167_19177[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19154);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19166;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19178 = state_19154;
state_19154 = G__19178;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_19154){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_19154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundaryline_id,ch))
})();var state__11519__auto__ = (function (){var statearr_19168 = f__11518__auto__.call(null);(statearr_19168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_19168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,boundaryline_id,ch))
);
return c__11517__auto__;
}),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976),null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391),null], null),(function (r){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),("#"),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),cljs.core.get.call(null,r,new cljs.core.Keyword(null,"name","name",1843675177))], null);
}),null,null,true,(function (r,e){clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(r));
clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
return console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLICK",r,e], null)));
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"RdPu","RdPu",-1880439170),new cljs.core.Keyword(null,"6","6",-1107752709)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"boundaryline_id_doc_count","boundaryline_id_doc_count",1461854746)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [51.95,-0.76], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [52.76,1.07], null)], null)]),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coll","coll",1647737163),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),null], null),new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null),new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),new cljs.core.Keyword(null,"label","label",1718410804),"Sector",new cljs.core.Keyword(null,"sorted","sorted",-896746253),false,new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"broad_12_sectors",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"construction_and_utilities",new cljs.core.Keyword(null,"label","label",1718410804),"Construction and utilities"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"education_arts_charities_social_care",new cljs.core.Keyword(null,"label","label",1718410804),"Education, arts, charities, social care"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"information_technology_and_telecoms",new cljs.core.Keyword(null,"label","label",1718410804),"Information Technology and Telecoms"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"knowledge_intensive_professional_services",new cljs.core.Keyword(null,"label","label",1718410804),"Knowledge Intensive Professional Services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"life_science_and_healthcare",new cljs.core.Keyword(null,"label","label",1718410804),"Life Science and Healthcare"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manufacturing",new cljs.core.Keyword(null,"label","label",1718410804),"Manufacturing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"other_business_services",new cljs.core.Keyword(null,"label","label",1718410804),"Other Business Services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"personal_services",new cljs.core.Keyword(null,"label","label",1718410804),"Personal services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"primary",new cljs.core.Keyword(null,"label","label",1718410804),"Primary"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"property_and_finance",new cljs.core.Keyword(null,"label","label",1718410804),"Property and finance"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"transport_and_travel",new cljs.core.Keyword(null,"label","label",1718410804),"Transport and travel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"wholesale_and_retail_distribution",new cljs.core.Keyword(null,"label","label",1718410804),"Wholesale and retail distribution"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"not_known",new cljs.core.Keyword(null,"label","label",1718410804),"Unknown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"highgrowth","highgrowth",-759844423),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new cljs.core.Keyword(null,"label","label",1718410804),"High growth",new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"latest",new cljs.core.Keyword(null,"label","label",1718410804),"High growth companies",new cljs.core.Keyword(null,"filter","filter",-948537934),clustermap.core.scaleup_filter], null)], null)], null)], null),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"trends","trends",193200459),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!employee_count","!employee_count",-1454063472),new cljs.core.Keyword(null,"title","title",636505583),"Employees"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),clustermap.formats.time.today_str.call(null)], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null)]);
clustermap.core.components = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter.filter_component,new cljs.core.Keyword(null,"target","target",253001721),"filter-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-search","company-search",-2146533206),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.search.search_component,new cljs.core.Keyword(null,"target","target",253001721),"company-search-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-search","company-search",-2146533206)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-description","filter-description",2074900015),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter_description.filter_description_component,new cljs.core.Keyword(null,"target","target",253001721),"filter-description-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-description-components","dynamic-filter-description-components",-281677520)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map_report.map_report_component,new cljs.core.Keyword(null,"target","target",253001721),"headline-stats-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map.map_component,new cljs.core.Keyword(null,"target","target",253001721),"map-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color-scale","color-scale",-2117745622),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.color_scale.color_scale_component,new cljs.core.Keyword(null,"target","target",253001721),"color-scale-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-close","company-close",-1678145918),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.nav_button.nav_button_component,new cljs.core.Keyword(null,"target","target",253001721),"company-close",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-close","company-close",-1678145918)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.tag_histogram.tag_histogram,new cljs.core.Keyword(null,"target","target",253001721),"sector-histogram",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.table.table_component,new cljs.core.Keyword(null,"target","target",253001721),"table-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"revenue-bands-table","revenue-bands-table",768168694),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.ranges_table.ranges_table_component,new cljs.core.Keyword(null,"target","target",253001721),"revenue-bands-table-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revenue-bands-table","revenue-bands-table",768168694)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-name","company-name",1213910953),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.text.text_component,new cljs.core.Keyword(null,"target","target",253001721),"company-name-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"record","record",-779106859)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-name","company-name",1213910953)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.company_info.company_info_component,new cljs.core.Keyword(null,"target","target",253001721),"company-info-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-info","company-info",-854288729)], null),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-turnover-timeline","company-turnover-timeline",-996483945)], null),new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-employment-timeline","company-employment-timeline",1293857343)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null)], null);
clustermap.core.bl_collections = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_counties"], null);
clustermap.core.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__19183 = cljs.core.seq.call(null,clustermap.core.bl_collections);var chunk__19184 = null;var count__19185 = (0);var i__19186 = (0);while(true){
if((i__19186 < count__19185))
{var blcoll = cljs.core._nth.call(null,chunk__19184,i__19186);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__19187 = seq__19183;
var G__19188 = chunk__19184;
var G__19189 = count__19185;
var G__19190 = (i__19186 + (1));
seq__19183 = G__19187;
chunk__19184 = G__19188;
count__19185 = G__19189;
i__19186 = G__19190;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19183);if(temp__4126__auto__)
{var seq__19183__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19183__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19183__$1);{
var G__19191 = cljs.core.chunk_rest.call(null,seq__19183__$1);
var G__19192 = c__4408__auto__;
var G__19193 = cljs.core.count.call(null,c__4408__auto__);
var G__19194 = (0);
seq__19183 = G__19191;
chunk__19184 = G__19192;
count__19185 = G__19193;
i__19186 = G__19194;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__19183__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__19195 = cljs.core.next.call(null,seq__19183__$1);
var G__19196 = null;
var G__19197 = (0);
var G__19198 = (0);
seq__19183 = G__19195;
chunk__19184 = G__19196;
count__19185 = G__19197;
i__19186 = G__19198;
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
clustermap.core.create_app_service = (function create_app_service(){var event_handlers = cljs.core.atom.call(null,null);if(typeof clustermap.core.t19202 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.core.t19202 = (function (event_handlers,create_app_service,meta19203){
this.event_handlers = event_handlers;
this.create_app_service = create_app_service;
this.meta19203 = meta19203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.core.t19202.cljs$lang$type = true;
clustermap.core.t19202.cljs$lang$ctorStr = "clustermap.core/t19202";
clustermap.core.t19202.cljs$lang$ctorPrWriter = ((function (event_handlers){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.core/t19202");
});})(event_handlers))
;
clustermap.core.t19202.prototype.clustermap$app$IAppService$ = true;
clustermap.core.t19202.prototype.clustermap$app$IAppService$init$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;clustermap.core.load_boundaryline_collection_indexes.call(null,clustermap.app.get_state.call(null,app));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"get-cached-boundaryline-fn","get-cached-boundaryline-fn",-1176244331),cljs.core.partial.call(null,clustermap.boundarylines.get_cached_boundaryline,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440)),new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),clustermap.core.make_boundaryline_selection], null);
});})(event_handlers))
;
clustermap.core.t19202.prototype.clustermap$app$IAppService$destroy$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;return console.log("DESTROY APP!");
});})(event_handlers))
;
clustermap.core.t19202.prototype.clustermap$app$IAppService$handle_event$arity$4 = ((function (event_handlers){
return (function (this$,app,type,val){var self__ = this;
var this$__$1 = this;return null;
});})(event_handlers))
;
clustermap.core.t19202.prototype.clustermap$app$IAppService$dev_mode_QMARK_$arity$1 = ((function (event_handlers){
return (function (this$){var self__ = this;
var this$__$1 = this;return clustermap.core.dev_mode;
});})(event_handlers))
;
clustermap.core.t19202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_handlers){
return (function (_19204){var self__ = this;
var _19204__$1 = this;return self__.meta19203;
});})(event_handlers))
;
clustermap.core.t19202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_handlers){
return (function (_19204,meta19203__$1){var self__ = this;
var _19204__$1 = this;return (new clustermap.core.t19202(self__.event_handlers,self__.create_app_service,meta19203__$1));
});})(event_handlers))
;
clustermap.core.__GT_t19202 = ((function (event_handlers){
return (function __GT_t19202(event_handlers__$1,create_app_service__$1,meta19203){return (new clustermap.core.t19202(event_handlers__$1,create_app_service__$1,meta19203));
});})(event_handlers))
;
}
return (new clustermap.core.t19202(event_handlers,create_app_service,null));
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
