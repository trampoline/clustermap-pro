// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.company_info');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('schema.core');
goog.require('clustermap.components.timeline_chart');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
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
goog.require('clustermap.ordered_resource');
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__15554){var map__15557 = p__15554;var map__15557__$1 = ((cljs.core.seq_QMARK_.call(null,map__15557))?cljs.core.apply.call(null,cljs.core.hash_map,map__15557):map__15557);var field = map__15557__$1;var render_fn = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__15558 = cljs.core.get.call(null,record,key);var G__15558__$1 = (((G__15558 == null))?null:render_fn.call(null,G__15558));return G__15558__$1;
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
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__15560,filter_spec,turnover_timeline,employment_timeline){var map__15591 = p__15560;var map__15591__$1 = ((cljs.core.seq_QMARK_.call(null,map__15591))?cljs.core.apply.call(null,cljs.core.hash_map,map__15591):map__15591);var controls = map__15591__$1;var fields = cljs.core.get.call(null,map__15591__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__15591__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs15594 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15594))?sablono.interpreter.attributes.call(null,attrs15594):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15594))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15594)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs15597 = (function (){var G__15612 = record;var G__15612__$1 = (((G__15612 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15612));var G__15612__$2 = (((G__15612__$1 == null))?null:cljs.core.filter.call(null,((function (G__15612,G__15612__$1,map__15591,map__15591__$1,controls,fields,title_field){
return (function (p1__15559_SHARP_){return cljs.core._EQ_.call(null,"broad_12_sectors",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15559_SHARP_));
});})(G__15612,G__15612__$1,map__15591,map__15591__$1,controls,fields,title_field))
,G__15612__$1));var G__15612__$3 = (((G__15612__$2 == null))?null:cljs.core.first.call(null,G__15612__$2));var G__15612__$4 = (((G__15612__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15612__$3));return G__15612__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15597))?sablono.interpreter.attributes.call(null,attrs15597):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15597))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15597)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs15598 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__15591,map__15591__$1,controls,fields,title_field){
return (function iter__15613(s__15614){return (new cljs.core.LazySeq(null,((function (map__15591,map__15591__$1,controls,fields,title_field){
return (function (){var s__15614__$1 = s__15614;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15614__$1);if(temp__4126__auto__)
{var s__15614__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15614__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15614__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15616 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15615 = (0);while(true){
if((i__15615 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__15615);cljs.core.chunk_append.call(null,b__15616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__15621 = (i__15615 + (1));
i__15615 = G__15621;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15616),iter__15613.call(null,cljs.core.chunk_rest.call(null,s__15614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15616),null);
}
} else
{var line = cljs.core.first.call(null,s__15614__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__15613.call(null,cljs.core.rest.call(null,s__15614__$2)));
}
} else
{return null;
}
break;
}
});})(map__15591,map__15591__$1,controls,fields,title_field))
,null,null));
});})(map__15591,map__15591__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15598))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs15598)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15598))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15598)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15603 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15603))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15603)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15603))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15603)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs15606 = clustermap.formats.number.readable.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15606))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs15606)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15606))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15606)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15607 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15607))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15607)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15607)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__4377__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__15591,map__15591__$1,controls,fields,title_field){
return (function iter__15617(s__15618){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__15591,map__15591__$1,controls,fields,title_field){
return (function (){var s__15618__$1 = s__15618;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15618__$1);if(temp__4126__auto__)
{var s__15618__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15618__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15618__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15620 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15619 = (0);while(true){
if((i__15619 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__15619);cljs.core.chunk_append.call(null,b__15620,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__15622 = (i__15619 + (1));
i__15619 = G__15622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15620),iter__15617.call(null,cljs.core.chunk_rest.call(null,s__15618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15620),null);
}
} else
{var d = cljs.core.first.call(null,s__15618__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__15617.call(null,cljs.core.rest.call(null,s__15618__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__15591,map__15591__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__15591,map__15591__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__15623,owner){var map__15637 = p__15623;var map__15637__$1 = ((cljs.core.seq_QMARK_.call(null,map__15637))?cljs.core.apply.call(null,cljs.core.hash_map,map__15637):map__15637);var props = map__15637__$1;var map__15638 = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15638__$1 = ((cljs.core.seq_QMARK_.call(null,map__15638))?cljs.core.apply.call(null,cljs.core.hash_map,map__15638):map__15638);var metadata = map__15638__$1;var record = cljs.core.get.call(null,map__15638__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15639 = cljs.core.get.call(null,map__15638__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15639__$1 = ((cljs.core.seq_QMARK_.call(null,map__15639))?cljs.core.apply.call(null,cljs.core.hash_map,map__15639):map__15639);var controls = map__15639__$1;var index = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t15640 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t15640 = (function (map__15638,sort_spec,index_type,metadata,owner,props,turnover_timeline,map__15637,index,filter_spec,controls,size,employment_timeline,p__15623,record,company_info_component,map__15639,meta15641){
this.map__15638 = map__15638;
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.turnover_timeline = turnover_timeline;
this.map__15637 = map__15637;
this.index = index;
this.filter_spec = filter_spec;
this.controls = controls;
this.size = size;
this.employment_timeline = employment_timeline;
this.p__15623 = p__15623;
this.record = record;
this.company_info_component = company_info_component;
this.map__15639 = map__15639;
this.meta15641 = meta15641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t15640.cljs$lang$type = true;
clustermap.components.company_info.t15640.cljs$lang$ctorStr = "clustermap.components.company-info/t15640";
clustermap.components.company_info.t15640.cljs$lang$ctorPrWriter = ((function (map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t15640");
});})(map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15640.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t15640.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__15643,p__15644){var self__ = this;
var map__15645 = p__15643;var map__15645__$1 = ((cljs.core.seq_QMARK_.call(null,map__15645))?cljs.core.apply.call(null,cljs.core.hash_map,map__15645):map__15645);var map__15646 = cljs.core.get.call(null,map__15645__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15646__$1 = ((cljs.core.seq_QMARK_.call(null,map__15646))?cljs.core.apply.call(null,cljs.core.hash_map,map__15646):map__15646);var next_metadata = map__15646__$1;var next_record = cljs.core.get.call(null,map__15646__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15647 = cljs.core.get.call(null,map__15646__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15647__$1 = ((cljs.core.seq_QMARK_.call(null,map__15647))?cljs.core.apply.call(null,cljs.core.hash_map,map__15647):map__15647);var next_controls = map__15647__$1;var next_index = cljs.core.get.call(null,map__15647__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15647__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15647__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15647__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15645__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15648 = p__15644;var map__15648__$1 = ((cljs.core.seq_QMARK_.call(null,map__15648))?cljs.core.apply.call(null,cljs.core.hash_map,map__15648):map__15648);var metadata_resource = cljs.core.get.call(null,map__15648__$1,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,metadata_resource,clustermap.api.records,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);
} else
{return null;
}
});})(map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15640.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t15640.prototype.om$core$IRender$render$arity$1 = ((function (map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15640.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t15640.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var mdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"metadata-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303),mdr);
return clustermap.ordered_resource.retrieve_responses.call(null,mdr,((function (mdr,___$1,map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPANY-INFO-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.metadata,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record","record",-779106859)], null),(function (){var G__15649 = data;var G__15649__$1 = (((G__15649 == null))?null:new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(G__15649));var G__15649__$2 = (((G__15649__$1 == null))?null:cljs.core.first.call(null,G__15649__$1));return G__15649__$2;
})());
});})(mdr,___$1,map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
});})(map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15642){var self__ = this;
var _15642__$1 = this;return self__.meta15641;
});})(map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15642,meta15641__$1){var self__ = this;
var _15642__$1 = this;return (new clustermap.components.company_info.t15640(self__.map__15638,self__.sort_spec,self__.index_type,self__.metadata,self__.owner,self__.props,self__.turnover_timeline,self__.map__15637,self__.index,self__.filter_spec,self__.controls,self__.size,self__.employment_timeline,self__.p__15623,self__.record,self__.company_info_component,self__.map__15639,meta15641__$1));
});})(map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t15640 = ((function (map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t15640(map__15638__$2,sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,map__15637__$2,index__$1,filter_spec__$1,controls__$1,size__$1,employment_timeline__$1,p__15623__$1,record__$1,company_info_component__$1,map__15639__$2,meta15641){return (new clustermap.components.company_info.t15640(map__15638__$2,sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,map__15637__$2,index__$1,filter_spec__$1,controls__$1,size__$1,employment_timeline__$1,p__15623__$1,record__$1,company_info_component__$1,map__15639__$2,meta15641));
});})(map__15637,map__15637__$1,props,map__15638,map__15638__$1,metadata,record,map__15639,map__15639__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t15640(map__15638__$1,sort_spec,index_type,metadata,owner,props,turnover_timeline,map__15637__$1,index,filter_spec,controls,size,employment_timeline,p__15623,record,company_info_component,map__15639__$1,null));
});
