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
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__15365){var map__15368 = p__15365;var map__15368__$1 = ((cljs.core.seq_QMARK_.call(null,map__15368))?cljs.core.apply.call(null,cljs.core.hash_map,map__15368):map__15368);var field = map__15368__$1;var render_fn = cljs.core.get.call(null,map__15368__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__15368__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__15368__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__15369 = cljs.core.get.call(null,record,key);var G__15369__$1 = (((G__15369 == null))?null:render_fn.call(null,G__15369));return G__15369__$1;
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
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__15371,filter_spec,turnover_timeline,employment_timeline){var map__15402 = p__15371;var map__15402__$1 = ((cljs.core.seq_QMARK_.call(null,map__15402))?cljs.core.apply.call(null,cljs.core.hash_map,map__15402):map__15402);var controls = map__15402__$1;var fields = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs15405 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15405))?sablono.interpreter.attributes.call(null,attrs15405):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15405))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15405)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs15408 = (function (){var G__15423 = record;var G__15423__$1 = (((G__15423 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15423));var G__15423__$2 = (((G__15423__$1 == null))?null:cljs.core.filter.call(null,((function (G__15423,G__15423__$1,map__15402,map__15402__$1,controls,fields,title_field){
return (function (p1__15370_SHARP_){return cljs.core._EQ_.call(null,"broad_12_sectors",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15370_SHARP_));
});})(G__15423,G__15423__$1,map__15402,map__15402__$1,controls,fields,title_field))
,G__15423__$1));var G__15423__$3 = (((G__15423__$2 == null))?null:cljs.core.first.call(null,G__15423__$2));var G__15423__$4 = (((G__15423__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15423__$3));return G__15423__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15408))?sablono.interpreter.attributes.call(null,attrs15408):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15408))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15408)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs15409 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__15402,map__15402__$1,controls,fields,title_field){
return (function iter__15424(s__15425){return (new cljs.core.LazySeq(null,((function (map__15402,map__15402__$1,controls,fields,title_field){
return (function (){var s__15425__$1 = s__15425;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15425__$1);if(temp__4126__auto__)
{var s__15425__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15425__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15425__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15427 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15426 = (0);while(true){
if((i__15426 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__15426);cljs.core.chunk_append.call(null,b__15427,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__15432 = (i__15426 + (1));
i__15426 = G__15432;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15427),iter__15424.call(null,cljs.core.chunk_rest.call(null,s__15425__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15427),null);
}
} else
{var line = cljs.core.first.call(null,s__15425__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__15424.call(null,cljs.core.rest.call(null,s__15425__$2)));
}
} else
{return null;
}
break;
}
});})(map__15402,map__15402__$1,controls,fields,title_field))
,null,null));
});})(map__15402,map__15402__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15409))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs15409)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15409))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15409)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record)))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15414 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15414))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15414)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15414))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15414)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs15417 = clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15417))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs15417)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15417))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15417)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15418 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15418))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15418)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15418))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15418)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__4377__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__15402,map__15402__$1,controls,fields,title_field){
return (function iter__15428(s__15429){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__15402,map__15402__$1,controls,fields,title_field){
return (function (){var s__15429__$1 = s__15429;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15429__$1);if(temp__4126__auto__)
{var s__15429__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15429__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15429__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15431 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15430 = (0);while(true){
if((i__15430 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__15430);cljs.core.chunk_append.call(null,b__15431,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__15433 = (i__15430 + (1));
i__15430 = G__15433;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15431),iter__15428.call(null,cljs.core.chunk_rest.call(null,s__15429__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15431),null);
}
} else
{var d = cljs.core.first.call(null,s__15429__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__15428.call(null,cljs.core.rest.call(null,s__15429__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__15402,map__15402__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__15402,map__15402__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__15434,owner){var map__15501 = p__15434;var map__15501__$1 = ((cljs.core.seq_QMARK_.call(null,map__15501))?cljs.core.apply.call(null,cljs.core.hash_map,map__15501):map__15501);var props = map__15501__$1;var map__15502 = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15502__$1 = ((cljs.core.seq_QMARK_.call(null,map__15502))?cljs.core.apply.call(null,cljs.core.hash_map,map__15502):map__15502);var metadata = map__15502__$1;var record = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15503 = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15503__$1 = ((cljs.core.seq_QMARK_.call(null,map__15503))?cljs.core.apply.call(null,cljs.core.hash_map,map__15503):map__15503);var controls = map__15503__$1;var index = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t15504 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t15504 = (function (map__15502,sort_spec,index_type,metadata,map__15501,owner,props,turnover_timeline,index,filter_spec,controls,map__15503,size,employment_timeline,p__15434,record,company_info_component,meta15505){
this.map__15502 = map__15502;
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.map__15501 = map__15501;
this.owner = owner;
this.props = props;
this.turnover_timeline = turnover_timeline;
this.index = index;
this.filter_spec = filter_spec;
this.controls = controls;
this.map__15503 = map__15503;
this.size = size;
this.employment_timeline = employment_timeline;
this.p__15434 = p__15434;
this.record = record;
this.company_info_component = company_info_component;
this.meta15505 = meta15505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t15504.cljs$lang$type = true;
clustermap.components.company_info.t15504.cljs$lang$ctorStr = "clustermap.components.company-info/t15504";
clustermap.components.company_info.t15504.cljs$lang$ctorPrWriter = ((function (map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t15504");
});})(map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15504.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t15504.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__15507,p__15508){var self__ = this;
var map__15509 = p__15507;var map__15509__$1 = ((cljs.core.seq_QMARK_.call(null,map__15509))?cljs.core.apply.call(null,cljs.core.hash_map,map__15509):map__15509);var map__15510 = cljs.core.get.call(null,map__15509__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15510__$1 = ((cljs.core.seq_QMARK_.call(null,map__15510))?cljs.core.apply.call(null,cljs.core.hash_map,map__15510):map__15510);var next_metadata = map__15510__$1;var next_record = cljs.core.get.call(null,map__15510__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15511 = cljs.core.get.call(null,map__15510__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15511__$1 = ((cljs.core.seq_QMARK_.call(null,map__15511))?cljs.core.apply.call(null,cljs.core.hash_map,map__15511):map__15511);var next_controls = map__15511__$1;var next_index = cljs.core.get.call(null,map__15511__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15511__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15511__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15511__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15509__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15512 = p__15508;var map__15512__$1 = ((cljs.core.seq_QMARK_.call(null,map__15512))?cljs.core.apply.call(null,cljs.core.hash_map,map__15512):map__15512);var fetch_metadata_fn = cljs.core.get.call(null,map__15512__$1,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__15509,map__15509__$1,map__15510,map__15510__$1,next_metadata,next_record,map__15511,map__15511__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15512,map__15512__$1,fetch_metadata_fn,map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__15509,map__15509__$1,map__15510,map__15510__$1,next_metadata,next_record,map__15511,map__15511__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15512,map__15512__$1,fetch_metadata_fn,map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (state_15543){var state_val_15544 = (state_15543[(1)]);if((state_val_15544 === (7)))
{var inst_15515 = (state_15543[(7)]);var inst_15529 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_15515);var state_15543__$1 = state_15543;var statearr_15545_15567 = state_15543__$1;(statearr_15545_15567[(2)] = inst_15529);
(statearr_15545_15567[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (1)))
{var inst_15513 = fetch_metadata_fn.call(null,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);var state_15543__$1 = state_15543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15543__$1,(2),inst_15513);
} else
{if((state_val_15544 === (4)))
{var state_15543__$1 = state_15543;var statearr_15546_15568 = state_15543__$1;(statearr_15546_15568[(2)] = null);
(statearr_15546_15568[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (6)))
{var state_15543__$1 = state_15543;var statearr_15547_15569 = state_15543__$1;(statearr_15547_15569[(2)] = null);
(statearr_15547_15569[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (3)))
{var inst_15515 = (state_15543[(7)]);var inst_15517 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15518 = ["COMPANY-INFO-DATA",inst_15515];var inst_15519 = (new cljs.core.PersistentVector(null,2,(5),inst_15517,inst_15518,null));var inst_15520 = cljs.core.clj__GT_js.call(null,inst_15519);var inst_15521 = console.log(inst_15520);var inst_15522 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15523 = [new cljs.core.Keyword(null,"record","record",-779106859)];var inst_15524 = (new cljs.core.PersistentVector(null,1,(5),inst_15522,inst_15523,null));var inst_15526 = (inst_15515 == null);var state_15543__$1 = (function (){var statearr_15548 = state_15543;(statearr_15548[(8)] = inst_15524);
(statearr_15548[(9)] = inst_15521);
return statearr_15548;
})();if(cljs.core.truth_(inst_15526))
{var statearr_15549_15570 = state_15543__$1;(statearr_15549_15570[(1)] = (6));
} else
{var statearr_15550_15571 = state_15543__$1;(statearr_15550_15571[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (2)))
{var inst_15515 = (state_15543[(7)]);var inst_15515__$1 = (state_15543[(2)]);var state_15543__$1 = (function (){var statearr_15551 = state_15543;(statearr_15551[(7)] = inst_15515__$1);
return statearr_15551;
})();if(cljs.core.truth_(inst_15515__$1))
{var statearr_15552_15572 = state_15543__$1;(statearr_15552_15572[(1)] = (3));
} else
{var statearr_15553_15573 = state_15543__$1;(statearr_15553_15573[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (11)))
{var inst_15524 = (state_15543[(8)]);var inst_15537 = (state_15543[(2)]);var inst_15538 = om.core.update_BANG_.call(null,self__.metadata,inst_15524,inst_15537);var state_15543__$1 = state_15543;var statearr_15554_15574 = state_15543__$1;(statearr_15554_15574[(2)] = inst_15538);
(statearr_15554_15574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (9)))
{var state_15543__$1 = state_15543;var statearr_15555_15575 = state_15543__$1;(statearr_15555_15575[(2)] = null);
(statearr_15555_15575[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (5)))
{var inst_15541 = (state_15543[(2)]);var state_15543__$1 = state_15543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15543__$1,inst_15541);
} else
{if((state_val_15544 === (10)))
{var inst_15531 = (state_15543[(10)]);var inst_15535 = cljs.core.first.call(null,inst_15531);var state_15543__$1 = state_15543;var statearr_15556_15576 = state_15543__$1;(statearr_15556_15576[(2)] = inst_15535);
(statearr_15556_15576[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15544 === (8)))
{var inst_15531 = (state_15543[(10)]);var inst_15531__$1 = (state_15543[(2)]);var inst_15532 = (inst_15531__$1 == null);var state_15543__$1 = (function (){var statearr_15557 = state_15543;(statearr_15557[(10)] = inst_15531__$1);
return statearr_15557;
})();if(cljs.core.truth_(inst_15532))
{var statearr_15558_15577 = state_15543__$1;(statearr_15558_15577[(1)] = (9));
} else
{var statearr_15559_15578 = state_15543__$1;(statearr_15559_15578[(1)] = (10));
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
});})(c__9125__auto__,___$1,map__15509,map__15509__$1,map__15510,map__15510__$1,next_metadata,next_record,map__15511,map__15511__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15512,map__15512__$1,fetch_metadata_fn,map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__15509,map__15509__$1,map__15510,map__15510__$1,next_metadata,next_record,map__15511,map__15511__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15512,map__15512__$1,fetch_metadata_fn,map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_15563 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15563[(0)] = state_machine__9111__auto__);
(statearr_15563[(1)] = (1));
return statearr_15563;
});
var state_machine__9111__auto____1 = (function (state_15543){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_15543);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e15564){if((e15564 instanceof Object))
{var ex__9114__auto__ = e15564;var statearr_15565_15579 = state_15543;(statearr_15565_15579[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15580 = state_15543;
state_15543 = G__15580;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_15543){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_15543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__15509,map__15509__$1,map__15510,map__15510__$1,next_metadata,next_record,map__15511,map__15511__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15512,map__15512__$1,fetch_metadata_fn,map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_15566 = f__9126__auto__.call(null);(statearr_15566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_15566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__15509,map__15509__$1,map__15510,map__15510__$1,next_metadata,next_record,map__15511,map__15511__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15512,map__15512__$1,fetch_metadata_fn,map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15504.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t15504.prototype.om$core$IRender$render$arity$1 = ((function (map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15504.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t15504.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784),clustermap.api.records_factory.call(null));
});})(map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15506){var self__ = this;
var _15506__$1 = this;return self__.meta15505;
});})(map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15506,meta15505__$1){var self__ = this;
var _15506__$1 = this;return (new clustermap.components.company_info.t15504(self__.map__15502,self__.sort_spec,self__.index_type,self__.metadata,self__.map__15501,self__.owner,self__.props,self__.turnover_timeline,self__.index,self__.filter_spec,self__.controls,self__.map__15503,self__.size,self__.employment_timeline,self__.p__15434,self__.record,self__.company_info_component,meta15505__$1));
});})(map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t15504 = ((function (map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t15504(map__15502__$2,sort_spec__$1,index_type__$1,metadata__$1,map__15501__$2,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,controls__$1,map__15503__$2,size__$1,employment_timeline__$1,p__15434__$1,record__$1,company_info_component__$1,meta15505){return (new clustermap.components.company_info.t15504(map__15502__$2,sort_spec__$1,index_type__$1,metadata__$1,map__15501__$2,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,controls__$1,map__15503__$2,size__$1,employment_timeline__$1,p__15434__$1,record__$1,company_info_component__$1,meta15505));
});})(map__15501,map__15501__$1,props,map__15502,map__15502__$1,metadata,record,map__15503,map__15503__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t15504(map__15502__$1,sort_spec,index_type,metadata,map__15501__$1,owner,props,turnover_timeline,index,filter_spec,controls,map__15503__$1,size,employment_timeline,p__15434,record,company_info_component,null));
});
