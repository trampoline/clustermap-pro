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
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__15486){var map__15489 = p__15486;var map__15489__$1 = ((cljs.core.seq_QMARK_.call(null,map__15489))?cljs.core.apply.call(null,cljs.core.hash_map,map__15489):map__15489);var field = map__15489__$1;var render_fn = cljs.core.get.call(null,map__15489__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__15489__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__15489__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__15490 = cljs.core.get.call(null,record,key);var G__15490__$1 = (((G__15490 == null))?null:render_fn.call(null,G__15490));return G__15490__$1;
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
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__15492,filter_spec,turnover_timeline,employment_timeline){var map__15523 = p__15492;var map__15523__$1 = ((cljs.core.seq_QMARK_.call(null,map__15523))?cljs.core.apply.call(null,cljs.core.hash_map,map__15523):map__15523);var controls = map__15523__$1;var fields = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs15526 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15526))?sablono.interpreter.attributes.call(null,attrs15526):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15526))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15526)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs15529 = (function (){var G__15544 = record;var G__15544__$1 = (((G__15544 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15544));var G__15544__$2 = (((G__15544__$1 == null))?null:cljs.core.filter.call(null,((function (G__15544,G__15544__$1,map__15523,map__15523__$1,controls,fields,title_field){
return (function (p1__15491_SHARP_){return cljs.core._EQ_.call(null,"broad_12_sectors",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15491_SHARP_));
});})(G__15544,G__15544__$1,map__15523,map__15523__$1,controls,fields,title_field))
,G__15544__$1));var G__15544__$3 = (((G__15544__$2 == null))?null:cljs.core.first.call(null,G__15544__$2));var G__15544__$4 = (((G__15544__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15544__$3));return G__15544__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15529))?sablono.interpreter.attributes.call(null,attrs15529):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15529))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15529)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs15530 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__15523,map__15523__$1,controls,fields,title_field){
return (function iter__15545(s__15546){return (new cljs.core.LazySeq(null,((function (map__15523,map__15523__$1,controls,fields,title_field){
return (function (){var s__15546__$1 = s__15546;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15546__$1);if(temp__4126__auto__)
{var s__15546__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15546__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15546__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15548 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15547 = (0);while(true){
if((i__15547 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__15547);cljs.core.chunk_append.call(null,b__15548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__15553 = (i__15547 + (1));
i__15547 = G__15553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15548),iter__15545.call(null,cljs.core.chunk_rest.call(null,s__15546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15548),null);
}
} else
{var line = cljs.core.first.call(null,s__15546__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__15545.call(null,cljs.core.rest.call(null,s__15546__$2)));
}
} else
{return null;
}
break;
}
});})(map__15523,map__15523__$1,controls,fields,title_field))
,null,null));
});})(map__15523,map__15523__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15530))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs15530)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15530))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15530)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),""))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15535 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15535))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15535)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15535))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15535)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs15538 = clustermap.formats.number.readable.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"sf","sf",-1949491738),(3));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15538))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs15538)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15538))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15538)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15539 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15539))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15539)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15539))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15539)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__4377__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__15523,map__15523__$1,controls,fields,title_field){
return (function iter__15549(s__15550){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__15523,map__15523__$1,controls,fields,title_field){
return (function (){var s__15550__$1 = s__15550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15550__$1);if(temp__4126__auto__)
{var s__15550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15550__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15550__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15552 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15551 = (0);while(true){
if((i__15551 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__15551);cljs.core.chunk_append.call(null,b__15552,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__15554 = (i__15551 + (1));
i__15551 = G__15554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15552),iter__15549.call(null,cljs.core.chunk_rest.call(null,s__15550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15552),null);
}
} else
{var d = cljs.core.first.call(null,s__15550__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__15549.call(null,cljs.core.rest.call(null,s__15550__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__15523,map__15523__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__15523,map__15523__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__15555,owner){var map__15569 = p__15555;var map__15569__$1 = ((cljs.core.seq_QMARK_.call(null,map__15569))?cljs.core.apply.call(null,cljs.core.hash_map,map__15569):map__15569);var props = map__15569__$1;var map__15570 = cljs.core.get.call(null,map__15569__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15570__$1 = ((cljs.core.seq_QMARK_.call(null,map__15570))?cljs.core.apply.call(null,cljs.core.hash_map,map__15570):map__15570);var metadata = map__15570__$1;var record = cljs.core.get.call(null,map__15570__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15571 = cljs.core.get.call(null,map__15570__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15571__$1 = ((cljs.core.seq_QMARK_.call(null,map__15571))?cljs.core.apply.call(null,cljs.core.hash_map,map__15571):map__15571);var controls = map__15571__$1;var index = cljs.core.get.call(null,map__15571__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__15571__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__15571__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__15571__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__15569__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__15569__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__15569__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t15572 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t15572 = (function (sort_spec,index_type,map__15569,metadata,owner,props,turnover_timeline,index,filter_spec,p__15555,map__15570,controls,size,employment_timeline,record,company_info_component,map__15571,meta15573){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.map__15569 = map__15569;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.turnover_timeline = turnover_timeline;
this.index = index;
this.filter_spec = filter_spec;
this.p__15555 = p__15555;
this.map__15570 = map__15570;
this.controls = controls;
this.size = size;
this.employment_timeline = employment_timeline;
this.record = record;
this.company_info_component = company_info_component;
this.map__15571 = map__15571;
this.meta15573 = meta15573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t15572.cljs$lang$type = true;
clustermap.components.company_info.t15572.cljs$lang$ctorStr = "clustermap.components.company-info/t15572";
clustermap.components.company_info.t15572.cljs$lang$ctorPrWriter = ((function (map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t15572");
});})(map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15572.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t15572.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__15575,p__15576){var self__ = this;
var map__15577 = p__15575;var map__15577__$1 = ((cljs.core.seq_QMARK_.call(null,map__15577))?cljs.core.apply.call(null,cljs.core.hash_map,map__15577):map__15577);var map__15578 = cljs.core.get.call(null,map__15577__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15578__$1 = ((cljs.core.seq_QMARK_.call(null,map__15578))?cljs.core.apply.call(null,cljs.core.hash_map,map__15578):map__15578);var next_metadata = map__15578__$1;var next_record = cljs.core.get.call(null,map__15578__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15579 = cljs.core.get.call(null,map__15578__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15579__$1 = ((cljs.core.seq_QMARK_.call(null,map__15579))?cljs.core.apply.call(null,cljs.core.hash_map,map__15579):map__15579);var next_controls = map__15579__$1;var next_index = cljs.core.get.call(null,map__15579__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15579__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15579__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15579__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15577__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15580 = p__15576;var map__15580__$1 = ((cljs.core.seq_QMARK_.call(null,map__15580))?cljs.core.apply.call(null,cljs.core.hash_map,map__15580):map__15580);var metadata_resource = cljs.core.get.call(null,map__15580__$1,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,metadata_resource,clustermap.api.records,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);
} else
{return null;
}
});})(map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15572.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t15572.prototype.om$core$IRender$render$arity$1 = ((function (map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15572.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t15572.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var mdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"metadata-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"metadata-resource","metadata-resource",-1836732303),mdr);
return clustermap.ordered_resource.retrieve_responses.call(null,mdr,((function (mdr,___$1,map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPANY-INFO-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.metadata,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"record","record",-779106859)], null),(function (){var G__15581 = data;var G__15581__$1 = (((G__15581 == null))?null:new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(G__15581));var G__15581__$2 = (((G__15581__$1 == null))?null:cljs.core.first.call(null,G__15581__$1));return G__15581__$2;
})());
});})(mdr,___$1,map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
});})(map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15574){var self__ = this;
var _15574__$1 = this;return self__.meta15573;
});})(map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15574,meta15573__$1){var self__ = this;
var _15574__$1 = this;return (new clustermap.components.company_info.t15572(self__.sort_spec,self__.index_type,self__.map__15569,self__.metadata,self__.owner,self__.props,self__.turnover_timeline,self__.index,self__.filter_spec,self__.p__15555,self__.map__15570,self__.controls,self__.size,self__.employment_timeline,self__.record,self__.company_info_component,self__.map__15571,meta15573__$1));
});})(map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t15572 = ((function (map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t15572(sort_spec__$1,index_type__$1,map__15569__$2,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,p__15555__$1,map__15570__$2,controls__$1,size__$1,employment_timeline__$1,record__$1,company_info_component__$1,map__15571__$2,meta15573){return (new clustermap.components.company_info.t15572(sort_spec__$1,index_type__$1,map__15569__$2,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,p__15555__$1,map__15570__$2,controls__$1,size__$1,employment_timeline__$1,record__$1,company_info_component__$1,map__15571__$2,meta15573));
});})(map__15569,map__15569__$1,props,map__15570,map__15570__$1,metadata,record,map__15571,map__15571__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t15572(sort_spec,index_type,map__15569__$1,metadata,owner,props,turnover_timeline,index,filter_spec,p__15555,map__15570__$1,controls,size,employment_timeline,record,company_info_component,map__15571__$1,null));
});
