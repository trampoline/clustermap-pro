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
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__15572){var map__15575 = p__15572;var map__15575__$1 = ((cljs.core.seq_QMARK_.call(null,map__15575))?cljs.core.apply.call(null,cljs.core.hash_map,map__15575):map__15575);var field = map__15575__$1;var render_fn = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__15576 = cljs.core.get.call(null,record,key);var G__15576__$1 = (((G__15576 == null))?null:render_fn.call(null,G__15576));return G__15576__$1;
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
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__15578,filter_spec,turnover_timeline,employment_timeline){var map__15609 = p__15578;var map__15609__$1 = ((cljs.core.seq_QMARK_.call(null,map__15609))?cljs.core.apply.call(null,cljs.core.hash_map,map__15609):map__15609);var controls = map__15609__$1;var fields = cljs.core.get.call(null,map__15609__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__15609__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs15612 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15612))?sablono.interpreter.attributes.call(null,attrs15612):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15612))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15612)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs15615 = (function (){var G__15630 = record;var G__15630__$1 = (((G__15630 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15630));var G__15630__$2 = (((G__15630__$1 == null))?null:cljs.core.filter.call(null,((function (G__15630,G__15630__$1,map__15609,map__15609__$1,controls,fields,title_field){
return (function (p1__15577_SHARP_){return cljs.core._EQ_.call(null,"broad_12_sectors",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15577_SHARP_));
});})(G__15630,G__15630__$1,map__15609,map__15609__$1,controls,fields,title_field))
,G__15630__$1));var G__15630__$3 = (((G__15630__$2 == null))?null:cljs.core.first.call(null,G__15630__$2));var G__15630__$4 = (((G__15630__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15630__$3));return G__15630__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15615))?sablono.interpreter.attributes.call(null,attrs15615):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15615))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15615)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs15616 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__15609,map__15609__$1,controls,fields,title_field){
return (function iter__15631(s__15632){return (new cljs.core.LazySeq(null,((function (map__15609,map__15609__$1,controls,fields,title_field){
return (function (){var s__15632__$1 = s__15632;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15632__$1);if(temp__4126__auto__)
{var s__15632__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15632__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15632__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15634 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15633 = (0);while(true){
if((i__15633 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__15633);cljs.core.chunk_append.call(null,b__15634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__15639 = (i__15633 + (1));
i__15633 = G__15639;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15634),iter__15631.call(null,cljs.core.chunk_rest.call(null,s__15632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15634),null);
}
} else
{var line = cljs.core.first.call(null,s__15632__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__15631.call(null,cljs.core.rest.call(null,s__15632__$2)));
}
} else
{return null;
}
break;
}
});})(map__15609,map__15609__$1,controls,fields,title_field))
,null,null));
});})(map__15609,map__15609__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15616))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs15616)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15616))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15616)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15621 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15621))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15621)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15621))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15621)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs15624 = clustermap.formats.number.readable.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15624))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs15624)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15624))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15624)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15625 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15625))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15625)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15625))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15625)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__4377__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__15609,map__15609__$1,controls,fields,title_field){
return (function iter__15635(s__15636){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__15609,map__15609__$1,controls,fields,title_field){
return (function (){var s__15636__$1 = s__15636;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15636__$1);if(temp__4126__auto__)
{var s__15636__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15636__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15636__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15638 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15637 = (0);while(true){
if((i__15637 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__15637);cljs.core.chunk_append.call(null,b__15638,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__15640 = (i__15637 + (1));
i__15637 = G__15640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15638),iter__15635.call(null,cljs.core.chunk_rest.call(null,s__15636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15638),null);
}
} else
{var d = cljs.core.first.call(null,s__15636__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__15635.call(null,cljs.core.rest.call(null,s__15636__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__15609,map__15609__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__15609,map__15609__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__15641,owner){var map__15655 = p__15641;var map__15655__$1 = ((cljs.core.seq_QMARK_.call(null,map__15655))?cljs.core.apply.call(null,cljs.core.hash_map,map__15655):map__15655);var props = map__15655__$1;var map__15656 = cljs.core.get.call(null,map__15655__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15656__$1 = ((cljs.core.seq_QMARK_.call(null,map__15656))?cljs.core.apply.call(null,cljs.core.hash_map,map__15656):map__15656);var metadata = map__15656__$1;var record = cljs.core.get.call(null,map__15656__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15657 = cljs.core.get.call(null,map__15656__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15657__$1 = ((cljs.core.seq_QMARK_.call(null,map__15657))?cljs.core.apply.call(null,cljs.core.hash_map,map__15657):map__15657);var controls = map__15657__$1;var index = cljs.core.get.call(null,map__15657__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__15657__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__15657__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__15657__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__15655__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__15655__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__15655__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t15658 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t15658 = (function (sort_spec,index_type,metadata,owner,props,turnover_timeline,index,filter_spec,map__15657,controls,size,map__15655,employment_timeline,record,company_info_component,map__15656,p__15641,meta15659){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.turnover_timeline = turnover_timeline;
this.index = index;
this.filter_spec = filter_spec;
this.map__15657 = map__15657;
this.controls = controls;
this.size = size;
this.map__15655 = map__15655;
this.employment_timeline = employment_timeline;
this.record = record;
this.company_info_component = company_info_component;
this.map__15656 = map__15656;
this.p__15641 = p__15641;
this.meta15659 = meta15659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t15658.cljs$lang$type = true;
clustermap.components.company_info.t15658.cljs$lang$ctorStr = "clustermap.components.company-info/t15658";
clustermap.components.company_info.t15658.cljs$lang$ctorPrWriter = ((function (map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t15658");
});})(map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15658.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t15658.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__15661,p__15662){var self__ = this;
var map__15663 = p__15661;var map__15663__$1 = ((cljs.core.seq_QMARK_.call(null,map__15663))?cljs.core.apply.call(null,cljs.core.hash_map,map__15663):map__15663);var map__15664 = cljs.core.get.call(null,map__15663__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15664__$1 = ((cljs.core.seq_QMARK_.call(null,map__15664))?cljs.core.apply.call(null,cljs.core.hash_map,map__15664):map__15664);var next_metadata = map__15664__$1;var next_record = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15665 = cljs.core.get.call(null,map__15664__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15665__$1 = ((cljs.core.seq_QMARK_.call(null,map__15665))?cljs.core.apply.call(null,cljs.core.hash_map,map__15665):map__15665);var next_controls = map__15665__$1;var next_index = cljs.core.get.call(null,map__15665__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15665__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15665__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15665__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15663__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15666 = p__15662;var map__15666__$1 = ((cljs.core.seq_QMARK_.call(null,map__15666))?cljs.core.apply.call(null,cljs.core.hash_map,map__15666):map__15666);var metadata_resource = cljs.core.get.call(null,map__15666__$1,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,metadata_resource,clustermap.api.records,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);
} else
{return null;
}
});})(map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15658.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t15658.prototype.om$core$IRender$render$arity$1 = ((function (map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15658.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t15658.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var mdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"metadata-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303),mdr);
return clustermap.ordered_resource.retrieve_responses.call(null,mdr,((function (mdr,___$1,map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPANY-INFO-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.metadata,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record","record",-779106859)], null),(function (){var G__15667 = data;var G__15667__$1 = (((G__15667 == null))?null:new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(G__15667));var G__15667__$2 = (((G__15667__$1 == null))?null:cljs.core.first.call(null,G__15667__$1));return G__15667__$2;
})());
});})(mdr,___$1,map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
});})(map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15660){var self__ = this;
var _15660__$1 = this;return self__.meta15659;
});})(map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15660,meta15659__$1){var self__ = this;
var _15660__$1 = this;return (new clustermap.components.company_info.t15658(self__.sort_spec,self__.index_type,self__.metadata,self__.owner,self__.props,self__.turnover_timeline,self__.index,self__.filter_spec,self__.map__15657,self__.controls,self__.size,self__.map__15655,self__.employment_timeline,self__.record,self__.company_info_component,self__.map__15656,self__.p__15641,meta15659__$1));
});})(map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t15658 = ((function (map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t15658(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,map__15657__$2,controls__$1,size__$1,map__15655__$2,employment_timeline__$1,record__$1,company_info_component__$1,map__15656__$2,p__15641__$1,meta15659){return (new clustermap.components.company_info.t15658(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,map__15657__$2,controls__$1,size__$1,map__15655__$2,employment_timeline__$1,record__$1,company_info_component__$1,map__15656__$2,p__15641__$1,meta15659));
});})(map__15655,map__15655__$1,props,map__15656,map__15656__$1,metadata,record,map__15657,map__15657__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t15658(sort_spec,index_type,metadata,owner,props,turnover_timeline,index,filter_spec,map__15657__$1,controls,size,map__15655__$1,employment_timeline,record,company_info_component,map__15656__$1,p__15641,null));
});
