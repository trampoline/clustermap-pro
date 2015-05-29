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
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__22333){var map__22336 = p__22333;var map__22336__$1 = ((cljs.core.seq_QMARK_.call(null,map__22336))?cljs.core.apply.call(null,cljs.core.hash_map,map__22336):map__22336);var field = map__22336__$1;var render_fn = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__22336__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__22337 = cljs.core.get.call(null,record,key);var G__22337__$1 = (((G__22337 == null))?null:render_fn.call(null,G__22337));return G__22337__$1;
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
clustermap.components.company_info.stat_change = (function stat_change(base,change){if(cljs.core.truth_((function (){var and__11502__auto__ = change;if(cljs.core.truth_(and__11502__auto__))
{var and__11502__auto____$1 = base;if(cljs.core.truth_(and__11502__auto____$1))
{return cljs.core.not_EQ_.call(null,(0),base);
} else
{return and__11502__auto____$1;
}
} else
{return and__11502__auto__;
}
})()))
{var v = ((100) * (change / base));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.components.company_info.sign_icon.call(null,v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.money.readable.call(null,v,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""),"%"], null)], null);
} else
{return null;
}
});
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__22339){var map__22387 = p__22339;var map__22387__$1 = ((cljs.core.seq_QMARK_.call(null,map__22387))?cljs.core.apply.call(null,cljs.core.hash_map,map__22387):map__22387);var controls = map__22387__$1;var fields = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Description"),(function (){var attrs22390 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs22390))?sablono.interpreter.attributes.call(null,attrs22390):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22390))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22390)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Website",React.DOM.p(null,React.DOM.a({"href": new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record), "target": "_blank"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)))))))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs22391 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__12252__auto__ = ((function (map__22387,map__22387__$1,controls,fields,title_field){
return (function iter__22406(s__22407){return (new cljs.core.LazySeq(null,((function (map__22387,map__22387__$1,controls,fields,title_field){
return (function (){var s__22407__$1 = s__22407;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22407__$1);if(temp__4126__auto__)
{var s__22407__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22407__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__22407__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__22409 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__22408 = (0);while(true){
if((i__22408 < size__12251__auto__))
{var line = cljs.core._nth.call(null,c__12250__auto__,i__22408);cljs.core.chunk_append.call(null,b__22409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__22434 = (i__22408 + (1));
i__22408 = G__22434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22409),iter__22406.call(null,cljs.core.chunk_rest.call(null,s__22407__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22409),null);
}
} else
{var line = cljs.core.first.call(null,s__22407__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__22406.call(null,cljs.core.rest.call(null,s__22407__$2)));
}
} else
{return null;
}
break;
}
});})(map__22387,map__22387__$1,controls,fields,title_field))
,null,null));
});})(map__22387,map__22387__$1,controls,fields,title_field))
;return iter__12252__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs22391))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs22391)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22391))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22391)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u20AC"),sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs22398 = clustermap.formats.number.readable.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs22398))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs22398)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22398))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22398)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record))))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h4({"className": "stat-title"},"Funding rounds"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Date"),React.DOM.th(null,"Amount raised (\u20AC)"),React.DOM.th(null,"Participants"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__12252__auto__ = ((function (map__22387,map__22387__$1,controls,fields,title_field){
return (function iter__22410(s__22411){return (new cljs.core.LazySeq(null,((function (map__22387,map__22387__$1,controls,fields,title_field){
return (function (){var s__22411__$1 = s__22411;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22411__$1);if(temp__4126__auto__)
{var s__22411__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22411__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__22411__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__22413 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__22412 = (0);while(true){
if((i__22412 < size__12251__auto__))
{var fr = cljs.core._nth.call(null,c__12250__auto__,i__22412);cljs.core.chunk_append.call(null,b__22413,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount","raised_amount",-1367838417).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__12252__auto__ = ((function (i__22412,fr,c__12250__auto__,size__12251__auto__,b__22413,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field){
return (function iter__22422(s__22423){return (new cljs.core.LazySeq(null,((function (i__22412,fr,c__12250__auto__,size__12251__auto__,b__22413,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field){
return (function (){var s__22423__$1 = s__22423;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22423__$1);if(temp__4126__auto____$1)
{var s__22423__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22423__$2))
{var c__12250__auto____$1 = cljs.core.chunk_first.call(null,s__22423__$2);var size__12251__auto____$1 = cljs.core.count.call(null,c__12250__auto____$1);var b__22425 = cljs.core.chunk_buffer.call(null,size__12251__auto____$1);if((function (){var i__22424 = (0);while(true){
if((i__22424 < size__12251__auto____$1))
{var p = cljs.core._nth.call(null,c__12250__auto____$1,i__22424);cljs.core.chunk_append.call(null,b__22425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
{
var G__22435 = (i__22424 + (1));
i__22424 = G__22435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22425),iter__22422.call(null,cljs.core.chunk_rest.call(null,s__22423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22425),null);
}
} else
{var p = cljs.core.first.call(null,s__22423__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null),iter__22422.call(null,cljs.core.rest.call(null,s__22423__$2)));
}
} else
{return null;
}
break;
}
});})(i__22412,fr,c__12250__auto__,size__12251__auto__,b__22413,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field))
,null,null));
});})(i__22412,fr,c__12250__auto__,size__12251__auto__,b__22413,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field))
;return iter__12252__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null)], null));
{
var G__22436 = (i__22412 + (1));
i__22412 = G__22436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22413),iter__22410.call(null,cljs.core.chunk_rest.call(null,s__22411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22413),null);
}
} else
{var fr = cljs.core.first.call(null,s__22411__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"raised_amount","raised_amount",-1367838417).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__12252__auto__ = ((function (fr,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field){
return (function iter__22426(s__22427){return (new cljs.core.LazySeq(null,((function (fr,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field){
return (function (){var s__22427__$1 = s__22427;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22427__$1);if(temp__4126__auto____$1)
{var s__22427__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22427__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__22427__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__22429 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__22428 = (0);while(true){
if((i__22428 < size__12251__auto__))
{var p = cljs.core._nth.call(null,c__12250__auto__,i__22428);cljs.core.chunk_append.call(null,b__22429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
{
var G__22437 = (i__22428 + (1));
i__22428 = G__22437;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22429),iter__22426.call(null,cljs.core.chunk_rest.call(null,s__22427__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22429),null);
}
} else
{var p = cljs.core.first.call(null,s__22427__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(p)], null)], null),iter__22426.call(null,cljs.core.rest.call(null,s__22427__$2)));
}
} else
{return null;
}
break;
}
});})(fr,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field))
,null,null));
});})(fr,s__22411__$2,temp__4126__auto__,map__22387,map__22387__$1,controls,fields,title_field))
;return iter__12252__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null)], null),iter__22410.call(null,cljs.core.rest.call(null,s__22411__$2)));
}
} else
{return null;
}
break;
}
});})(map__22387,map__22387__$1,controls,fields,title_field))
,null,null));
});})(map__22387,map__22387__$1,controls,fields,title_field))
;return iter__12252__auto__.call(null,new cljs.core.Keyword(null,"funding_rounds","funding_rounds",-1158649947).cljs$core$IFn$_invoke$arity$1(record));
})())))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h4({"className": "stat-title"},"Data sources"),React.DOM.div({"className": "table-responsive"},(function (){var attrs22405 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__12252__auto__ = ((function (map__22387,map__22387__$1,controls,fields,title_field){
return (function iter__22430(s__22431){return (new cljs.core.LazySeq(null,((function (map__22387,map__22387__$1,controls,fields,title_field){
return (function (){var s__22431__$1 = s__22431;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22431__$1);if(temp__4126__auto__)
{var s__22431__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22431__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__22431__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__22433 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__22432 = (0);while(true){
if((i__22432 < size__12251__auto__))
{var source = cljs.core._nth.call(null,c__12250__auto__,i__22432);cljs.core.chunk_append.call(null,b__22433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(source)], null)], null));
{
var G__22438 = (i__22432 + (1));
i__22432 = G__22438;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22433),iter__22430.call(null,cljs.core.chunk_rest.call(null,s__22431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22433),null);
}
} else
{var source = cljs.core.first.call(null,s__22431__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(source)], null)], null),iter__22430.call(null,cljs.core.rest.call(null,s__22431__$2)));
}
} else
{return null;
}
break;
}
});})(map__22387,map__22387__$1,controls,fields,title_field))
,null,null));
});})(map__22387,map__22387__$1,controls,fields,title_field))
;return iter__12252__auto__.call(null,cljs.core.filter.call(null,((function (iter__12252__auto__,map__22387,map__22387__$1,controls,fields,title_field){
return (function (p1__22338_SHARP_){return cljs.core._EQ_.call(null,"datasource",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__22338_SHARP_));
});})(iter__12252__auto__,map__22387,map__22387__$1,controls,fields,title_field))
,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(record)));
})());return cljs.core.apply.call(null,React.DOM.table,((cljs.core.map_QMARK_.call(null,attrs22405))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["table"], null)], null),attrs22405)):{"className": "table"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22405))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22405)], null))));
})()))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__22439,owner){var map__22453 = p__22439;var map__22453__$1 = ((cljs.core.seq_QMARK_.call(null,map__22453))?cljs.core.apply.call(null,cljs.core.hash_map,map__22453):map__22453);var props = map__22453__$1;var map__22454 = cljs.core.get.call(null,map__22453__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__22454__$1 = ((cljs.core.seq_QMARK_.call(null,map__22454))?cljs.core.apply.call(null,cljs.core.hash_map,map__22454):map__22454);var metadata = map__22454__$1;var record = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__22455 = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__22455__$1 = ((cljs.core.seq_QMARK_.call(null,map__22455))?cljs.core.apply.call(null,cljs.core.hash_map,map__22455):map__22455);var controls = map__22455__$1;var index = cljs.core.get.call(null,map__22455__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__22455__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__22455__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__22455__$1,new cljs.core.Keyword(null,"size","size",1098693007));var filter_spec = cljs.core.get.call(null,map__22453__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t22456 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t22456 = (function (sort_spec,index_type,metadata,owner,props,p__22439,index,filter_spec,controls,map__22454,map__22455,size,record,company_info_component,map__22453,meta22457){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.p__22439 = p__22439;
this.index = index;
this.filter_spec = filter_spec;
this.controls = controls;
this.map__22454 = map__22454;
this.map__22455 = map__22455;
this.size = size;
this.record = record;
this.company_info_component = company_info_component;
this.map__22453 = map__22453;
this.meta22457 = meta22457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t22456.cljs$lang$type = true;
clustermap.components.company_info.t22456.cljs$lang$ctorStr = "clustermap.components.company-info/t22456";
clustermap.components.company_info.t22456.cljs$lang$ctorPrWriter = ((function (map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.company-info/t22456");
});})(map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t22456.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t22456.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_,p__22459,p__22460){var self__ = this;
var map__22461 = p__22459;var map__22461__$1 = ((cljs.core.seq_QMARK_.call(null,map__22461))?cljs.core.apply.call(null,cljs.core.hash_map,map__22461):map__22461);var map__22462 = cljs.core.get.call(null,map__22461__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__22462__$1 = ((cljs.core.seq_QMARK_.call(null,map__22462))?cljs.core.apply.call(null,cljs.core.hash_map,map__22462):map__22462);var next_metadata = map__22462__$1;var next_record = cljs.core.get.call(null,map__22462__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__22463 = cljs.core.get.call(null,map__22462__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__22463__$1 = ((cljs.core.seq_QMARK_.call(null,map__22463))?cljs.core.apply.call(null,cljs.core.hash_map,map__22463):map__22463);var next_controls = map__22463__$1;var next_index = cljs.core.get.call(null,map__22463__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__22463__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__22463__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__22463__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__22461__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__22464 = p__22460;var map__22464__$1 = ((cljs.core.seq_QMARK_.call(null,map__22464))?cljs.core.apply.call(null,cljs.core.hash_map,map__22464):map__22464);var metadata_resource = cljs.core.get.call(null,map__22464__$1,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,metadata_resource,clustermap.api.records,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);
} else
{return null;
}
});})(map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t22456.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t22456.prototype.om$core$IRender$render$arity$1 = ((function (map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls);
});})(map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t22456.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t22456.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var mdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"metadata-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303),mdr);
return clustermap.ordered_resource.retrieve_responses.call(null,mdr,((function (mdr,___$1,map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPANY-INFO-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.metadata,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record","record",-779106859)], null),(function (){var G__22465 = data;var G__22465__$1 = (((G__22465 == null))?null:new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(G__22465));var G__22465__$2 = (((G__22465__$1 == null))?null:cljs.core.first.call(null,G__22465__$1));return G__22465__$2;
})());
});})(mdr,___$1,map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
);
});})(map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t22456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_22458){var self__ = this;
var _22458__$1 = this;return self__.meta22457;
});})(map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.t22456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function (_22458,meta22457__$1){var self__ = this;
var _22458__$1 = this;return (new clustermap.components.company_info.t22456(self__.sort_spec,self__.index_type,self__.metadata,self__.owner,self__.props,self__.p__22439,self__.index,self__.filter_spec,self__.controls,self__.map__22454,self__.map__22455,self__.size,self__.record,self__.company_info_component,self__.map__22453,meta22457__$1));
});})(map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
clustermap.components.company_info.__GT_t22456 = ((function (map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec){
return (function __GT_t22456(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,p__22439__$1,index__$1,filter_spec__$1,controls__$1,map__22454__$2,map__22455__$2,size__$1,record__$1,company_info_component__$1,map__22453__$2,meta22457){return (new clustermap.components.company_info.t22456(sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,p__22439__$1,index__$1,filter_spec__$1,controls__$1,map__22454__$2,map__22455__$2,size__$1,record__$1,company_info_component__$1,map__22453__$2,meta22457));
});})(map__22453,map__22453__$1,props,map__22454,map__22454__$1,metadata,record,map__22455,map__22455__$1,controls,index,index_type,sort_spec,size,filter_spec))
;
}
return (new clustermap.components.company_info.t22456(sort_spec,index_type,metadata,owner,props,p__22439,index,filter_spec,controls,map__22454__$1,map__22455__$1,size,record,company_info_component,map__22453__$1,null));
});

//# sourceMappingURL=company_info.js.map