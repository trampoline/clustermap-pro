// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.company_info');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
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
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__15376){var map__15379 = p__15376;var map__15379__$1 = ((cljs.core.seq_QMARK_.call(null,map__15379))?cljs.core.apply.call(null,cljs.core.hash_map,map__15379):map__15379);var field = map__15379__$1;var render_fn = cljs.core.get.call(null,map__15379__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__15379__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__15379__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__15380 = cljs.core.get.call(null,record,key);var G__15380__$1 = (((G__15380 == null))?null:render_fn.call(null,G__15380));return G__15380__$1;
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
clustermap.components.company_info.stat_change = (function stat_change(base,change){var prev = clustermap.formats.number.__BANG_.call(null,base,change);if(cljs.core.truth_((function (){var and__3627__auto__ = change;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = base;if(cljs.core.truth_(and__3627__auto____$1))
{return cljs.core.not_EQ_.call(null,(0),prev);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var v = clustermap.formats.number._STAR__BANG_.call(null,(100),clustermap.formats.number.div_BANG_.call(null,change,prev));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.components.company_info.sign_icon.call(null,v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.number.mixed.call(null,v),"%"], null)], null);
} else
{return null;
}
});
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__15382,filter_spec,turnover_timeline,employment_timeline){var map__15413 = p__15382;var map__15413__$1 = ((cljs.core.seq_QMARK_.call(null,map__15413))?cljs.core.apply.call(null,cljs.core.hash_map,map__15413):map__15413);var controls = map__15413__$1;var fields = cljs.core.get.call(null,map__15413__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__15413__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs15416 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15416))?sablono.interpreter.attributes.call(null,attrs15416):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15416))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15416)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs15419 = (function (){var G__15434 = record;var G__15434__$1 = (((G__15434 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15434));var G__15434__$2 = (((G__15434__$1 == null))?null:cljs.core.filter.call(null,((function (G__15434,G__15434__$1,map__15413,map__15413__$1,controls,fields,title_field){
return (function (p1__15381_SHARP_){return cljs.core._EQ_.call(null,"broad_12_sectors",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15381_SHARP_));
});})(G__15434,G__15434__$1,map__15413,map__15413__$1,controls,fields,title_field))
,G__15434__$1));var G__15434__$3 = (((G__15434__$2 == null))?null:cljs.core.first.call(null,G__15434__$2));var G__15434__$4 = (((G__15434__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15434__$3));return G__15434__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15419))?sablono.interpreter.attributes.call(null,attrs15419):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15419))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15419)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs15420 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__15413,map__15413__$1,controls,fields,title_field){
return (function iter__15435(s__15436){return (new cljs.core.LazySeq(null,((function (map__15413,map__15413__$1,controls,fields,title_field){
return (function (){var s__15436__$1 = s__15436;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15436__$1);if(temp__4126__auto__)
{var s__15436__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15436__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15436__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15438 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15437 = (0);while(true){
if((i__15437 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__15437);cljs.core.chunk_append.call(null,b__15438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__15443 = (i__15437 + (1));
i__15437 = G__15443;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15438),iter__15435.call(null,cljs.core.chunk_rest.call(null,s__15436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15438),null);
}
} else
{var line = cljs.core.first.call(null,s__15436__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__15435.call(null,cljs.core.rest.call(null,s__15436__$2)));
}
} else
{return null;
}
break;
}
});})(map__15413,map__15413__$1,controls,fields,title_field))
,null,null));
});})(map__15413,map__15413__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15420))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs15420)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15420))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15420)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record)))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15425 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15425))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15425)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15425))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15425)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs15428 = clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15428))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs15428)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15428))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15428)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15429 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15429))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15429)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15429))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15429)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__4377__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__15413,map__15413__$1,controls,fields,title_field){
return (function iter__15439(s__15440){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__15413,map__15413__$1,controls,fields,title_field){
return (function (){var s__15440__$1 = s__15440;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15440__$1);if(temp__4126__auto__)
{var s__15440__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15440__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15440__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15442 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15441 = (0);while(true){
if((i__15441 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__15441);cljs.core.chunk_append.call(null,b__15442,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__15444 = (i__15441 + (1));
i__15441 = G__15444;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15442),iter__15439.call(null,cljs.core.chunk_rest.call(null,s__15440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15442),null);
}
} else
{var d = cljs.core.first.call(null,s__15440__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__15439.call(null,cljs.core.rest.call(null,s__15440__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__15413,map__15413__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__15413,map__15413__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__15445,owner){var map__15512 = p__15445;var map__15512__$1 = ((cljs.core.seq_QMARK_.call(null,map__15512))?cljs.core.apply.call(null,cljs.core.hash_map,map__15512):map__15512);var props = map__15512__$1;var map__15513 = cljs.core.get.call(null,map__15512__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15513__$1 = ((cljs.core.seq_QMARK_.call(null,map__15513))?cljs.core.apply.call(null,cljs.core.hash_map,map__15513):map__15513);var metadata = map__15513__$1;var record = cljs.core.get.call(null,map__15513__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15514 = cljs.core.get.call(null,map__15513__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15514__$1 = ((cljs.core.seq_QMARK_.call(null,map__15514))?cljs.core.apply.call(null,cljs.core.hash_map,map__15514):map__15514);var controls = map__15514__$1;var index = cljs.core.get.call(null,map__15514__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__15514__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__15514__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__15514__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__15512__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__15512__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__15512__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t15515 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t15515 = (function (sort_spec,index_type,metadata,owner,props,turnover_timeline,map__15514,map__15512,index,filter_spec,controls,size,employment_timeline,map__15513,record,company_info_component,p__15445,meta15516){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.turnover_timeline = turnover_timeline;
this.map__15514 = map__15514;
this.map__15512 = map__15512;
this.index = index;
this.filter_spec = filter_spec;
this.controls = controls;
this.size = size;
this.employment_timeline = employment_timeline;
this.map__15513 = map__15513;
this.record = record;
this.company_info_component = company_info_component;
this.p__15445 = p__15445;
this.meta15516 = meta15516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t15515.cljs$lang$type = true;
clustermap.components.company_info.t15515.cljs$lang$ctorStr = "clustermap.components.company-info/t15515";
clustermap.components.company_info.t15515.cljs$lang$ctorPrWriter = ((function (map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t15515");
});})(map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15515.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t15515.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__15518,p__15519){var self__ = this;
var map__15520 = p__15518;var map__15520__$1 = ((cljs.core.seq_QMARK_.call(null,map__15520))?cljs.core.apply.call(null,cljs.core.hash_map,map__15520):map__15520);var map__15521 = cljs.core.get.call(null,map__15520__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15521__$1 = ((cljs.core.seq_QMARK_.call(null,map__15521))?cljs.core.apply.call(null,cljs.core.hash_map,map__15521):map__15521);var next_metadata = map__15521__$1;var next_record = cljs.core.get.call(null,map__15521__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15522 = cljs.core.get.call(null,map__15521__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15522__$1 = ((cljs.core.seq_QMARK_.call(null,map__15522))?cljs.core.apply.call(null,cljs.core.hash_map,map__15522):map__15522);var next_controls = map__15522__$1;var next_index = cljs.core.get.call(null,map__15522__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15522__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15522__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15522__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15520__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15523 = p__15519;var map__15523__$1 = ((cljs.core.seq_QMARK_.call(null,map__15523))?cljs.core.apply.call(null,cljs.core.hash_map,map__15523):map__15523);var fetch_metadata_fn = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__15520,map__15520__$1,map__15521,map__15521__$1,next_metadata,next_record,map__15522,map__15522__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15523,map__15523__$1,fetch_metadata_fn,map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__15520,map__15520__$1,map__15521,map__15521__$1,next_metadata,next_record,map__15522,map__15522__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15523,map__15523__$1,fetch_metadata_fn,map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (state_15554){var state_val_15555 = (state_15554[(1)]);if((state_val_15555 === (7)))
{var inst_15526 = (state_15554[(7)]);var inst_15540 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_15526);var state_15554__$1 = state_15554;var statearr_15556_15578 = state_15554__$1;(statearr_15556_15578[(2)] = inst_15540);
(statearr_15556_15578[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (1)))
{var inst_15524 = fetch_metadata_fn.call(null,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);var state_15554__$1 = state_15554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15554__$1,(2),inst_15524);
} else
{if((state_val_15555 === (4)))
{var state_15554__$1 = state_15554;var statearr_15557_15579 = state_15554__$1;(statearr_15557_15579[(2)] = null);
(statearr_15557_15579[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (6)))
{var state_15554__$1 = state_15554;var statearr_15558_15580 = state_15554__$1;(statearr_15558_15580[(2)] = null);
(statearr_15558_15580[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (3)))
{var inst_15526 = (state_15554[(7)]);var inst_15528 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15529 = ["COMPANY-INFO-DATA",inst_15526];var inst_15530 = (new cljs.core.PersistentVector(null,2,(5),inst_15528,inst_15529,null));var inst_15531 = cljs.core.clj__GT_js.call(null,inst_15530);var inst_15532 = console.log(inst_15531);var inst_15533 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15534 = [new cljs.core.Keyword(null,"record","record",-779106859)];var inst_15535 = (new cljs.core.PersistentVector(null,1,(5),inst_15533,inst_15534,null));var inst_15537 = (inst_15526 == null);var state_15554__$1 = (function (){var statearr_15559 = state_15554;(statearr_15559[(8)] = inst_15532);
(statearr_15559[(9)] = inst_15535);
return statearr_15559;
})();if(cljs.core.truth_(inst_15537))
{var statearr_15560_15581 = state_15554__$1;(statearr_15560_15581[(1)] = (6));
} else
{var statearr_15561_15582 = state_15554__$1;(statearr_15561_15582[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (2)))
{var inst_15526 = (state_15554[(7)]);var inst_15526__$1 = (state_15554[(2)]);var state_15554__$1 = (function (){var statearr_15562 = state_15554;(statearr_15562[(7)] = inst_15526__$1);
return statearr_15562;
})();if(cljs.core.truth_(inst_15526__$1))
{var statearr_15563_15583 = state_15554__$1;(statearr_15563_15583[(1)] = (3));
} else
{var statearr_15564_15584 = state_15554__$1;(statearr_15564_15584[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (11)))
{var inst_15535 = (state_15554[(9)]);var inst_15548 = (state_15554[(2)]);var inst_15549 = om.core.update_BANG_.call(null,self__.metadata,inst_15535,inst_15548);var state_15554__$1 = state_15554;var statearr_15565_15585 = state_15554__$1;(statearr_15565_15585[(2)] = inst_15549);
(statearr_15565_15585[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (9)))
{var state_15554__$1 = state_15554;var statearr_15566_15586 = state_15554__$1;(statearr_15566_15586[(2)] = null);
(statearr_15566_15586[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (5)))
{var inst_15552 = (state_15554[(2)]);var state_15554__$1 = state_15554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15554__$1,inst_15552);
} else
{if((state_val_15555 === (10)))
{var inst_15542 = (state_15554[(10)]);var inst_15546 = cljs.core.first.call(null,inst_15542);var state_15554__$1 = state_15554;var statearr_15567_15587 = state_15554__$1;(statearr_15567_15587[(2)] = inst_15546);
(statearr_15567_15587[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15555 === (8)))
{var inst_15542 = (state_15554[(10)]);var inst_15542__$1 = (state_15554[(2)]);var inst_15543 = (inst_15542__$1 == null);var state_15554__$1 = (function (){var statearr_15568 = state_15554;(statearr_15568[(10)] = inst_15542__$1);
return statearr_15568;
})();if(cljs.core.truth_(inst_15543))
{var statearr_15569_15588 = state_15554__$1;(statearr_15569_15588[(1)] = (9));
} else
{var statearr_15570_15589 = state_15554__$1;(statearr_15570_15589[(1)] = (10));
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
});})(c__9125__auto__,___$1,map__15520,map__15520__$1,map__15521,map__15521__$1,next_metadata,next_record,map__15522,map__15522__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15523,map__15523__$1,fetch_metadata_fn,map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__15520,map__15520__$1,map__15521,map__15521__$1,next_metadata,next_record,map__15522,map__15522__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15523,map__15523__$1,fetch_metadata_fn,map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_15574 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15574[(0)] = state_machine__9111__auto__);
(statearr_15574[(1)] = (1));
return statearr_15574;
});
var state_machine__9111__auto____1 = (function (state_15554){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_15554);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e15575){if((e15575 instanceof Object))
{var ex__9114__auto__ = e15575;var statearr_15576_15590 = state_15554;(statearr_15576_15590[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15591 = state_15554;
state_15554 = G__15591;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_15554){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_15554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__15520,map__15520__$1,map__15521,map__15521__$1,next_metadata,next_record,map__15522,map__15522__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15523,map__15523__$1,fetch_metadata_fn,map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_15577 = f__9126__auto__.call(null);(statearr_15577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_15577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__15520,map__15520__$1,map__15521,map__15521__$1,next_metadata,next_record,map__15522,map__15522__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15523,map__15523__$1,fetch_metadata_fn,map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15515.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t15515.prototype.om$core$IRender$render$arity$1 = ((function (map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15515.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t15515.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784),clustermap.api.records_factory.call(null));
});})(map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15517){var self__ = this;
var _15517__$1 = this;return self__.meta15516;
});})(map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15517,meta15516__$1){var self__ = this;
var _15517__$1 = this;return (new clustermap.components.company_info.t15515(self__.sort_spec,self__.index_type,self__.metadata,self__.owner,self__.props,self__.turnover_timeline,self__.map__15514,self__.map__15512,self__.index,self__.filter_spec,self__.controls,self__.size,self__.employment_timeline,self__.map__15513,self__.record,self__.company_info_component,self__.p__15445,meta15516__$1));
});})(map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t15515 = ((function (map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t15515(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,map__15514__$2,map__15512__$2,index__$1,filter_spec__$1,controls__$1,size__$1,employment_timeline__$1,map__15513__$2,record__$1,company_info_component__$1,p__15445__$1,meta15516){return (new clustermap.components.company_info.t15515(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,map__15514__$2,map__15512__$2,index__$1,filter_spec__$1,controls__$1,size__$1,employment_timeline__$1,map__15513__$2,record__$1,company_info_component__$1,p__15445__$1,meta15516));
});})(map__15512,map__15512__$1,props,map__15513,map__15513__$1,metadata,record,map__15514,map__15514__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t15515(sort_spec,index_type,metadata,owner,props,turnover_timeline,map__15514__$1,map__15512__$1,index,filter_spec,controls,size,employment_timeline,map__15513__$1,record,company_info_component,p__15445,null));
});
