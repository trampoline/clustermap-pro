// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.company_info');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('schema.core');
goog.require('clustermap.components.timeline_chart');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.time');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clojure.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__15312){var map__15315 = p__15312;var map__15315__$1 = ((cljs.core.seq_QMARK_.call(null,map__15315))?cljs.core.apply.call(null,cljs.core.hash_map,map__15315):map__15315);var field = map__15315__$1;var render_fn = cljs.core.get.call(null,map__15315__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__15315__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__15315__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__15316 = cljs.core.get.call(null,record,key);var G__15316__$1 = (((G__15316 == null))?null:render_fn.call(null,G__15316));return G__15316__$1;
})()], null)], null);
});
clustermap.components.company_info.sign_icon = (function sign_icon(n){if((n > (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-positive","i.icon-positive",1320612420)], null);
} else
{if((n < (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-negative","i.icon-negative",1168365176)], null);
} else
{return null;

}
}
});
clustermap.components.company_info.stat_change = (function stat_change(base,change){if(cljs.core.truth_((function (){var and__3627__auto__ = change;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = base;if(cljs.core.truth_(and__3627__auto____$1))
{return cljs.core.not_EQ_.call(null,(0),base);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var v = ((100) * (change / base));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.components.company_info.sign_icon.call(null,v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""),"%"], null)], null);
} else
{return null;
}
});
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__15318,filter_spec,turnover_timeline,employment_timeline){var map__15349 = p__15318;var map__15349__$1 = ((cljs.core.seq_QMARK_.call(null,map__15349))?cljs.core.apply.call(null,cljs.core.hash_map,map__15349):map__15349);var controls = map__15349__$1;var fields = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__15349__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs15352 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15352))?sablono.interpreter.attributes.call(null,attrs15352):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15352))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15352)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs15355 = (function (){var G__15370 = record;var G__15370__$1 = (((G__15370 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15370));var G__15370__$2 = (((G__15370__$1 == null))?null:cljs.core.filter.call(null,((function (G__15370,G__15370__$1,map__15349,map__15349__$1,controls,fields,title_field){
return (function (p1__15317_SHARP_){return cljs.core._EQ_.call(null,"broad_12_sectors",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15317_SHARP_));
});})(G__15370,G__15370__$1,map__15349,map__15349__$1,controls,fields,title_field))
,G__15370__$1));var G__15370__$3 = (((G__15370__$2 == null))?null:cljs.core.first.call(null,G__15370__$2));var G__15370__$4 = (((G__15370__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15370__$3));return G__15370__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15355))?sablono.interpreter.attributes.call(null,attrs15355):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15355))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15355)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs15356 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__15349,map__15349__$1,controls,fields,title_field){
return (function iter__15371(s__15372){return (new cljs.core.LazySeq(null,((function (map__15349,map__15349__$1,controls,fields,title_field){
return (function (){var s__15372__$1 = s__15372;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15372__$1);if(temp__4126__auto__)
{var s__15372__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15372__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15372__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15374 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15373 = (0);while(true){
if((i__15373 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__15373);cljs.core.chunk_append.call(null,b__15374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__15379 = (i__15373 + (1));
i__15373 = G__15379;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15374),iter__15371.call(null,cljs.core.chunk_rest.call(null,s__15372__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15374),null);
}
} else
{var line = cljs.core.first.call(null,s__15372__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__15371.call(null,cljs.core.rest.call(null,s__15372__$2)));
}
} else
{return null;
}
break;
}
});})(map__15349,map__15349__$1,controls,fields,title_field))
,null,null));
});})(map__15349,map__15349__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15356))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs15356)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15356))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15356)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15361 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15361))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15361)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15361)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs15364 = clustermap.formats.number.readable.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15364))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs15364)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15364))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15364)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15365 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15365))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15365)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15365))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15365)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__4377__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__15349,map__15349__$1,controls,fields,title_field){
return (function iter__15375(s__15376){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__15349,map__15349__$1,controls,fields,title_field){
return (function (){var s__15376__$1 = s__15376;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15376__$1);if(temp__4126__auto__)
{var s__15376__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15376__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15376__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15378 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15377 = (0);while(true){
if((i__15377 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__15377);cljs.core.chunk_append.call(null,b__15378,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__15380 = (i__15377 + (1));
i__15377 = G__15380;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15378),iter__15375.call(null,cljs.core.chunk_rest.call(null,s__15376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15378),null);
}
} else
{var d = cljs.core.first.call(null,s__15376__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__15375.call(null,cljs.core.rest.call(null,s__15376__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__15349,map__15349__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__15349,map__15349__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__15381,owner){var map__15448 = p__15381;var map__15448__$1 = ((cljs.core.seq_QMARK_.call(null,map__15448))?cljs.core.apply.call(null,cljs.core.hash_map,map__15448):map__15448);var props = map__15448__$1;var map__15449 = cljs.core.get.call(null,map__15448__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15449__$1 = ((cljs.core.seq_QMARK_.call(null,map__15449))?cljs.core.apply.call(null,cljs.core.hash_map,map__15449):map__15449);var metadata = map__15449__$1;var record = cljs.core.get.call(null,map__15449__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15450 = cljs.core.get.call(null,map__15449__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15450__$1 = ((cljs.core.seq_QMARK_.call(null,map__15450))?cljs.core.apply.call(null,cljs.core.hash_map,map__15450):map__15450);var controls = map__15450__$1;var index = cljs.core.get.call(null,map__15450__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__15450__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__15450__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__15450__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__15448__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__15448__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__15448__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t15451 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t15451 = (function (sort_spec,index_type,p__15381,metadata,owner,props,turnover_timeline,index,map__15449,map__15448,filter_spec,controls,map__15450,size,employment_timeline,record,company_info_component,meta15452){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.p__15381 = p__15381;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.turnover_timeline = turnover_timeline;
this.index = index;
this.map__15449 = map__15449;
this.map__15448 = map__15448;
this.filter_spec = filter_spec;
this.controls = controls;
this.map__15450 = map__15450;
this.size = size;
this.employment_timeline = employment_timeline;
this.record = record;
this.company_info_component = company_info_component;
this.meta15452 = meta15452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t15451.cljs$lang$type = true;
clustermap.components.company_info.t15451.cljs$lang$ctorStr = "clustermap.components.company-info/t15451";
clustermap.components.company_info.t15451.cljs$lang$ctorPrWriter = ((function (map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t15451");
});})(map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15451.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t15451.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__15454,p__15455){var self__ = this;
var map__15456 = p__15454;var map__15456__$1 = ((cljs.core.seq_QMARK_.call(null,map__15456))?cljs.core.apply.call(null,cljs.core.hash_map,map__15456):map__15456);var map__15457 = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15457__$1 = ((cljs.core.seq_QMARK_.call(null,map__15457))?cljs.core.apply.call(null,cljs.core.hash_map,map__15457):map__15457);var next_metadata = map__15457__$1;var next_record = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15458 = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15458__$1 = ((cljs.core.seq_QMARK_.call(null,map__15458))?cljs.core.apply.call(null,cljs.core.hash_map,map__15458):map__15458);var next_controls = map__15458__$1;var next_index = cljs.core.get.call(null,map__15458__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15458__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15458__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15458__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15456__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15459 = p__15455;var map__15459__$1 = ((cljs.core.seq_QMARK_.call(null,map__15459))?cljs.core.apply.call(null,cljs.core.hash_map,map__15459):map__15459);var fetch_metadata_fn = cljs.core.get.call(null,map__15459__$1,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__15456,map__15456__$1,map__15457,map__15457__$1,next_metadata,next_record,map__15458,map__15458__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15459,map__15459__$1,fetch_metadata_fn,map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__15456,map__15456__$1,map__15457,map__15457__$1,next_metadata,next_record,map__15458,map__15458__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15459,map__15459__$1,fetch_metadata_fn,map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (state_15490){var state_val_15491 = (state_15490[(1)]);if((state_val_15491 === (7)))
{var inst_15462 = (state_15490[(7)]);var inst_15476 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_15462);var state_15490__$1 = state_15490;var statearr_15492_15514 = state_15490__$1;(statearr_15492_15514[(2)] = inst_15476);
(statearr_15492_15514[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (1)))
{var inst_15460 = fetch_metadata_fn.call(null,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15490__$1,(2),inst_15460);
} else
{if((state_val_15491 === (4)))
{var state_15490__$1 = state_15490;var statearr_15493_15515 = state_15490__$1;(statearr_15493_15515[(2)] = null);
(statearr_15493_15515[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (6)))
{var state_15490__$1 = state_15490;var statearr_15494_15516 = state_15490__$1;(statearr_15494_15516[(2)] = null);
(statearr_15494_15516[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (3)))
{var inst_15462 = (state_15490[(7)]);var inst_15464 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15465 = ["COMPANY-INFO-DATA",inst_15462];var inst_15466 = (new cljs.core.PersistentVector(null,2,(5),inst_15464,inst_15465,null));var inst_15467 = cljs.core.clj__GT_js.call(null,inst_15466);var inst_15468 = console.log(inst_15467);var inst_15469 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15470 = [new cljs.core.Keyword(null,"record","record",-779106859)];var inst_15471 = (new cljs.core.PersistentVector(null,1,(5),inst_15469,inst_15470,null));var inst_15473 = (inst_15462 == null);var state_15490__$1 = (function (){var statearr_15495 = state_15490;(statearr_15495[(8)] = inst_15471);
(statearr_15495[(9)] = inst_15468);
return statearr_15495;
})();if(cljs.core.truth_(inst_15473))
{var statearr_15496_15517 = state_15490__$1;(statearr_15496_15517[(1)] = (6));
} else
{var statearr_15497_15518 = state_15490__$1;(statearr_15497_15518[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (2)))
{var inst_15462 = (state_15490[(7)]);var inst_15462__$1 = (state_15490[(2)]);var state_15490__$1 = (function (){var statearr_15498 = state_15490;(statearr_15498[(7)] = inst_15462__$1);
return statearr_15498;
})();if(cljs.core.truth_(inst_15462__$1))
{var statearr_15499_15519 = state_15490__$1;(statearr_15499_15519[(1)] = (3));
} else
{var statearr_15500_15520 = state_15490__$1;(statearr_15500_15520[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (11)))
{var inst_15471 = (state_15490[(8)]);var inst_15484 = (state_15490[(2)]);var inst_15485 = om.core.update_BANG_.call(null,self__.metadata,inst_15471,inst_15484);var state_15490__$1 = state_15490;var statearr_15501_15521 = state_15490__$1;(statearr_15501_15521[(2)] = inst_15485);
(statearr_15501_15521[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (9)))
{var state_15490__$1 = state_15490;var statearr_15502_15522 = state_15490__$1;(statearr_15502_15522[(2)] = null);
(statearr_15502_15522[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (5)))
{var inst_15488 = (state_15490[(2)]);var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15490__$1,inst_15488);
} else
{if((state_val_15491 === (10)))
{var inst_15478 = (state_15490[(10)]);var inst_15482 = cljs.core.first.call(null,inst_15478);var state_15490__$1 = state_15490;var statearr_15503_15523 = state_15490__$1;(statearr_15503_15523[(2)] = inst_15482);
(statearr_15503_15523[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15491 === (8)))
{var inst_15478 = (state_15490[(10)]);var inst_15478__$1 = (state_15490[(2)]);var inst_15479 = (inst_15478__$1 == null);var state_15490__$1 = (function (){var statearr_15504 = state_15490;(statearr_15504[(10)] = inst_15478__$1);
return statearr_15504;
})();if(cljs.core.truth_(inst_15479))
{var statearr_15505_15524 = state_15490__$1;(statearr_15505_15524[(1)] = (9));
} else
{var statearr_15506_15525 = state_15490__$1;(statearr_15506_15525[(1)] = (10));
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
});})(c__9125__auto__,___$1,map__15456,map__15456__$1,map__15457,map__15457__$1,next_metadata,next_record,map__15458,map__15458__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15459,map__15459__$1,fetch_metadata_fn,map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__15456,map__15456__$1,map__15457,map__15457__$1,next_metadata,next_record,map__15458,map__15458__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15459,map__15459__$1,fetch_metadata_fn,map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_15510 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15510[(0)] = state_machine__9111__auto__);
(statearr_15510[(1)] = (1));
return statearr_15510;
});
var state_machine__9111__auto____1 = (function (state_15490){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_15490);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e15511){if((e15511 instanceof Object))
{var ex__9114__auto__ = e15511;var statearr_15512_15526 = state_15490;(statearr_15512_15526[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15511;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15527 = state_15490;
state_15490 = G__15527;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_15490){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_15490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__15456,map__15456__$1,map__15457,map__15457__$1,next_metadata,next_record,map__15458,map__15458__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15459,map__15459__$1,fetch_metadata_fn,map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_15513 = f__9126__auto__.call(null);(statearr_15513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_15513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__15456,map__15456__$1,map__15457,map__15457__$1,next_metadata,next_record,map__15458,map__15458__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15459,map__15459__$1,fetch_metadata_fn,map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15451.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t15451.prototype.om$core$IRender$render$arity$1 = ((function (map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15451.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t15451.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784),clustermap.api.records_factory.call(null));
});})(map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15453){var self__ = this;
var _15453__$1 = this;return self__.meta15452;
});})(map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15453,meta15452__$1){var self__ = this;
var _15453__$1 = this;return (new clustermap.components.company_info.t15451(self__.sort_spec,self__.index_type,self__.p__15381,self__.metadata,self__.owner,self__.props,self__.turnover_timeline,self__.index,self__.map__15449,self__.map__15448,self__.filter_spec,self__.controls,self__.map__15450,self__.size,self__.employment_timeline,self__.record,self__.company_info_component,meta15452__$1));
});})(map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t15451 = ((function (map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t15451(sort_spec__$1,index_type__$1,p__15381__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,map__15449__$2,map__15448__$2,filter_spec__$1,controls__$1,map__15450__$2,size__$1,employment_timeline__$1,record__$1,company_info_component__$1,meta15452){return (new clustermap.components.company_info.t15451(sort_spec__$1,index_type__$1,p__15381__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,map__15449__$2,map__15448__$2,filter_spec__$1,controls__$1,map__15450__$2,size__$1,employment_timeline__$1,record__$1,company_info_component__$1,meta15452));
});})(map__15448,map__15448__$1,props,map__15449,map__15449__$1,metadata,record,map__15450,map__15450__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t15451(sort_spec,index_type,p__15381,metadata,owner,props,turnover_timeline,index,map__15449__$1,map__15448__$1,filter_spec,controls,map__15450__$1,size,employment_timeline,record,company_info_component,null));
});
