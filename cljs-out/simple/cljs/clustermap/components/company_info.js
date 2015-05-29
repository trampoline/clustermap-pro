// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.company_info');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('schema.core');
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
goog.require('clojure.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__14874){var map__14877 = p__14874;var map__14877__$1 = ((cljs.core.seq_QMARK_.call(null,map__14877))?cljs.core.apply.call(null,cljs.core.hash_map,map__14877):map__14877);var field = map__14877__$1;var render_fn = cljs.core.get.call(null,map__14877__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__14877__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__14877__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__14878 = cljs.core.get.call(null,record,key);var G__14878__$1 = (((G__14878 == null))?null:render_fn.call(null,G__14878));return G__14878__$1;
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
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__14880){var map__14928 = p__14880;var map__14928__$1 = ((cljs.core.seq_QMARK_.call(null,map__14928))?cljs.core.apply.call(null,cljs.core.hash_map,map__14928):map__14928);var controls = map__14928__$1;var fields = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__14928__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Description"),(function (){var attrs14931 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs14931))?sablono.interpreter.attributes.call(null,attrs14931):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14931))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14931)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Website",React.DOM.p(null,React.DOM.a({"href": new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record), "target": "_blank"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)))))))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs14932 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__14928,map__14928__$1,controls,fields,title_field){
return (function iter__14947(s__14948){return (new cljs.core.LazySeq(null,((function (map__14928,map__14928__$1,controls,fields,title_field){
return (function (){var s__14948__$1 = s__14948;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14948__$1);if(temp__4126__auto__)
{var s__14948__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14948__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__14948__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__14950 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__14949 = (0);while(true){
if((i__14949 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__14949);cljs.core.chunk_append.call(null,b__14950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__14975 = (i__14949 + (1));
i__14949 = G__14975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14950),iter__14947.call(null,cljs.core.chunk_rest.call(null,s__14948__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14950),null);
}
} else
{var line = cljs.core.first.call(null,s__14948__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__14947.call(null,cljs.core.rest.call(null,s__14948__$2)));
}
} else
{return null;
}
break;
}
});})(map__14928,map__14928__$1,controls,fields,title_field))
,null,null));
});})(map__14928,map__14928__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14932))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs14932)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14932))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14932)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u20AC"),sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs14939 = clustermap.formats.number.readable.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14939))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs14939)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14939))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14939)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record))))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h4({"className": "stat-title"},"Funding rounds"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Date"),React.DOM.th(null,"Amount raised (\u20AC)"),React.DOM.th(null,"Participants"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4377__auto__ = ((function (map__14928,map__14928__$1,controls,fields,title_field){
return (function iter__14951(s__14952){return (new cljs.core.LazySeq(null,((function (map__14928,map__14928__$1,controls,fields,title_field){
return (function (){var s__14952__$1 = s__14952;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14952__$1);if(temp__4126__auto__)
{var s__14952__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14952__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__14952__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__14954 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__14953 = (0);while(true){
if((i__14953 < size__4376__auto__))
{var fr = cljs.core._nth.call(null,c__4375__auto__,i__14953);cljs.core.chunk_append.call(null,b__14954,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount","raised_amount",-1367838417).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4377__auto__ = ((function (i__14953,fr,c__4375__auto__,size__4376__auto__,b__14954,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field){
return (function iter__14963(s__14964){return (new cljs.core.LazySeq(null,((function (i__14953,fr,c__4375__auto__,size__4376__auto__,b__14954,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field){
return (function (){var s__14964__$1 = s__14964;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14964__$1);if(temp__4126__auto____$1)
{var s__14964__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14964__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__14964__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__14966 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__14965 = (0);while(true){
if((i__14965 < size__4376__auto____$1))
{var p = cljs.core._nth.call(null,c__4375__auto____$1,i__14965);cljs.core.chunk_append.call(null,b__14966,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
{
var G__14976 = (i__14965 + (1));
i__14965 = G__14976;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14966),iter__14963.call(null,cljs.core.chunk_rest.call(null,s__14964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14966),null);
}
} else
{var p = cljs.core.first.call(null,s__14964__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null),iter__14963.call(null,cljs.core.rest.call(null,s__14964__$2)));
}
} else
{return null;
}
break;
}
});})(i__14953,fr,c__4375__auto__,size__4376__auto__,b__14954,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field))
,null,null));
});})(i__14953,fr,c__4375__auto__,size__4376__auto__,b__14954,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null)], null));
{
var G__14977 = (i__14953 + (1));
i__14953 = G__14977;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14954),iter__14951.call(null,cljs.core.chunk_rest.call(null,s__14952__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14954),null);
}
} else
{var fr = cljs.core.first.call(null,s__14952__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount","raised_amount",-1367838417).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4377__auto__ = ((function (fr,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field){
return (function iter__14967(s__14968){return (new cljs.core.LazySeq(null,((function (fr,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field){
return (function (){var s__14968__$1 = s__14968;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14968__$1);if(temp__4126__auto____$1)
{var s__14968__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14968__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__14968__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__14970 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__14969 = (0);while(true){
if((i__14969 < size__4376__auto__))
{var p = cljs.core._nth.call(null,c__4375__auto__,i__14969);cljs.core.chunk_append.call(null,b__14970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
{
var G__14978 = (i__14969 + (1));
i__14969 = G__14978;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14970),iter__14967.call(null,cljs.core.chunk_rest.call(null,s__14968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14970),null);
}
} else
{var p = cljs.core.first.call(null,s__14968__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null),iter__14967.call(null,cljs.core.rest.call(null,s__14968__$2)));
}
} else
{return null;
}
break;
}
});})(fr,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field))
,null,null));
});})(fr,s__14952__$2,temp__4126__auto__,map__14928,map__14928__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null)], null),iter__14951.call(null,cljs.core.rest.call(null,s__14952__$2)));
}
} else
{return null;
}
break;
}
});})(map__14928,map__14928__$1,controls,fields,title_field))
,null,null));
});})(map__14928,map__14928__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"funding_rounds","funding_rounds",-1158649947).cljs$core$IFn$_invoke$arity$1(record));
})())))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h4({"className": "stat-title"},"Data sources"),React.DOM.div({"className": "table-responsive"},(function (){var attrs14946 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4377__auto__ = ((function (map__14928,map__14928__$1,controls,fields,title_field){
return (function iter__14971(s__14972){return (new cljs.core.LazySeq(null,((function (map__14928,map__14928__$1,controls,fields,title_field){
return (function (){var s__14972__$1 = s__14972;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14972__$1);if(temp__4126__auto__)
{var s__14972__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14972__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__14972__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__14974 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__14973 = (0);while(true){
if((i__14973 < size__4376__auto__))
{var source = cljs.core._nth.call(null,c__4375__auto__,i__14973);cljs.core.chunk_append.call(null,b__14974,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(source)], null)], null));
{
var G__14979 = (i__14973 + (1));
i__14973 = G__14979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14974),iter__14971.call(null,cljs.core.chunk_rest.call(null,s__14972__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14974),null);
}
} else
{var source = cljs.core.first.call(null,s__14972__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(source)], null)], null),iter__14971.call(null,cljs.core.rest.call(null,s__14972__$2)));
}
} else
{return null;
}
break;
}
});})(map__14928,map__14928__$1,controls,fields,title_field))
,null,null));
});})(map__14928,map__14928__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,cljs.core.filter.call(null,((function (iter__4377__auto__,map__14928,map__14928__$1,controls,fields,title_field){
return (function (p1__14879_SHARP_){return cljs.core._EQ_.call(null,"datasource",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14879_SHARP_));
});})(iter__4377__auto__,map__14928,map__14928__$1,controls,fields,title_field))
,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(record)));
})());return cljs.core.apply.call(null,React.DOM.table,((cljs.core.map_QMARK_.call(null,attrs14946))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table"], null)], null),attrs14946)):{"className": "table"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14946))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14946)], null))));
})()))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__14980,owner){var map__14994 = p__14980;var map__14994__$1 = ((cljs.core.seq_QMARK_.call(null,map__14994))?cljs.core.apply.call(null,cljs.core.hash_map,map__14994):map__14994);var props = map__14994__$1;var map__14995 = cljs.core.get.call(null,map__14994__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__14995__$1 = ((cljs.core.seq_QMARK_.call(null,map__14995))?cljs.core.apply.call(null,cljs.core.hash_map,map__14995):map__14995);var metadata = map__14995__$1;var record = cljs.core.get.call(null,map__14995__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__14996 = cljs.core.get.call(null,map__14995__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14996__$1 = ((cljs.core.seq_QMARK_.call(null,map__14996))?cljs.core.apply.call(null,cljs.core.hash_map,map__14996):map__14996);var controls = map__14996__$1;var index = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"size","size",1098693007));var filter_spec = cljs.core.get.call(null,map__14994__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t14997 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t14997 = (function (sort_spec,index_type,metadata,owner,props,index,filter_spec,map__14995,map__14996,controls,map__14994,size,record,company_info_component,p__14980,meta14998){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.index = index;
this.filter_spec = filter_spec;
this.map__14995 = map__14995;
this.map__14996 = map__14996;
this.controls = controls;
this.map__14994 = map__14994;
this.size = size;
this.record = record;
this.company_info_component = company_info_component;
this.p__14980 = p__14980;
this.meta14998 = meta14998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t14997.cljs$lang$type = true;
clustermap.components.company_info.t14997.cljs$lang$ctorStr = "clustermap.components.company-info/t14997";
clustermap.components.company_info.t14997.cljs$lang$ctorPrWriter = ((function (map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t14997");
});})(map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14997.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t14997.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_,p__15000,p__15001){var self__ = this;
var map__15002 = p__15000;var map__15002__$1 = ((cljs.core.seq_QMARK_.call(null,map__15002))?cljs.core.apply.call(null,cljs.core.hash_map,map__15002):map__15002);var map__15003 = cljs.core.get.call(null,map__15002__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15003__$1 = ((cljs.core.seq_QMARK_.call(null,map__15003))?cljs.core.apply.call(null,cljs.core.hash_map,map__15003):map__15003);var next_metadata = map__15003__$1;var next_record = cljs.core.get.call(null,map__15003__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15004 = cljs.core.get.call(null,map__15003__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15004__$1 = ((cljs.core.seq_QMARK_.call(null,map__15004))?cljs.core.apply.call(null,cljs.core.hash_map,map__15004):map__15004);var next_controls = map__15004__$1;var next_index = cljs.core.get.call(null,map__15004__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15004__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15004__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15004__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15002__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15005 = p__15001;var map__15005__$1 = ((cljs.core.seq_QMARK_.call(null,map__15005))?cljs.core.apply.call(null,cljs.core.hash_map,map__15005):map__15005);var metadata_resource = cljs.core.get.call(null,map__15005__$1,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,metadata_resource,clustermap.api.records,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);
} else
{return null;
}
});})(map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14997.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t14997.prototype.om$core$IRender$render$arity$1 = ((function (map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls);
});})(map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14997.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t14997.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var mdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"metadata-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303),mdr);
return clustermap.ordered_resource.retrieve_responses.call(null,mdr,((function (mdr,___$1,map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPANY-INFO-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.metadata,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record","record",-779106859)], null),(function (){var G__15006 = data;var G__15006__$1 = (((G__15006 == null))?null:new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(G__15006));var G__15006__$2 = (((G__15006__$1 == null))?null:cljs.core.first.call(null,G__15006__$1));return G__15006__$2;
})());
});})(mdr,___$1,map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
);
});})(map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_14999){var self__ = this;
var _14999__$1 = this;return self__.meta14998;
});})(map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t14997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_14999,meta14998__$1){var self__ = this;
var _14999__$1 = this;return (new clustermap.components.company_info.t14997(self__.sort_spec,self__.index_type,self__.metadata,self__.owner,self__.props,self__.index,self__.filter_spec,self__.map__14995,self__.map__14996,self__.controls,self__.map__14994,self__.size,self__.record,self__.company_info_component,self__.p__14980,meta14998__$1));
});})(map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.__GT_t14997 = ((function (map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function __GT_t14997(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,index__$1,filter_spec__$1,map__14995__$2,map__14996__$2,controls__$1,map__14994__$2,size__$1,record__$1,company_info_component__$1,p__14980__$1,meta14998){return (new clustermap.components.company_info.t14997(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,index__$1,filter_spec__$1,map__14995__$2,map__14996__$2,controls__$1,map__14994__$2,size__$1,record__$1,company_info_component__$1,p__14980__$1,meta14998));
});})(map__14994,map__14994__$1,props,map__14995,map__14995__$1,metadata,record,map__14996,map__14996__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
}
return (new clustermap.components.company_info.t14997(sort_spec,index_type,metadata,owner,props,index,filter_spec,map__14995__$1,map__14996__$1,controls,map__14994__$1,size,record,company_info_component,p__14980,null));
});
