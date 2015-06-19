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
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__22835){var map__22838 = p__22835;var map__22838__$1 = ((cljs.core.seq_QMARK_.call(null,map__22838))?cljs.core.apply.call(null,cljs.core.hash_map,map__22838):map__22838);var field = map__22838__$1;var render_fn = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__22839 = cljs.core.get.call(null,record,key);var G__22839__$1 = (((G__22839 == null))?null:render_fn.call(null,G__22839));return G__22839__$1;
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
clustermap.components.company_info.stat_change = (function stat_change(base,change){var prev = clustermap.formats.number.__BANG_.call(null,base,change);if(cljs.core.truth_((function (){var and__11540__auto__ = change;if(cljs.core.truth_(and__11540__auto__))
{var and__11540__auto____$1 = base;if(cljs.core.truth_(and__11540__auto____$1))
{return cljs.core.not_EQ_.call(null,(0),prev);
} else
{return and__11540__auto____$1;
}
} else
{return and__11540__auto__;
}
})()))
{var v = clustermap.formats.number._STAR__BANG_.call(null,(100),clustermap.formats.number.div_BANG_.call(null,change,prev));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.components.company_info.sign_icon.call(null,v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.number.mixed.call(null,v),"%"], null)], null);
} else
{return null;
}
});
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__22841,filter_spec,turnover_timeline,employment_timeline){var map__22872 = p__22841;var map__22872__$1 = ((cljs.core.seq_QMARK_.call(null,map__22872))?cljs.core.apply.call(null,cljs.core.hash_map,map__22872):map__22872);var controls = map__22872__$1;var fields = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs22875 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs22875))?sablono.interpreter.attributes.call(null,attrs22875):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22875))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22875)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs22878 = (function (){var G__22893 = record;var G__22893__$1 = (((G__22893 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__22893));var G__22893__$2 = (((G__22893__$1 == null))?null:cljs.core.filter.call(null,((function (G__22893,G__22893__$1,map__22872,map__22872__$1,controls,fields,title_field){
return (function (p1__22840_SHARP_){return cljs.core._EQ_.call(null,"broad_12_sectors",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__22840_SHARP_));
});})(G__22893,G__22893__$1,map__22872,map__22872__$1,controls,fields,title_field))
,G__22893__$1));var G__22893__$3 = (((G__22893__$2 == null))?null:cljs.core.first.call(null,G__22893__$2));var G__22893__$4 = (((G__22893__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__22893__$3));return G__22893__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs22878))?sablono.interpreter.attributes.call(null,attrs22878):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22878))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22878)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs22879 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__12290__auto__ = ((function (map__22872,map__22872__$1,controls,fields,title_field){
return (function iter__22894(s__22895){return (new cljs.core.LazySeq(null,((function (map__22872,map__22872__$1,controls,fields,title_field){
return (function (){var s__22895__$1 = s__22895;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22895__$1);if(temp__4126__auto__)
{var s__22895__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22895__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__22895__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__22897 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__22896 = (0);while(true){
if((i__22896 < size__12289__auto__))
{var line = cljs.core._nth.call(null,c__12288__auto__,i__22896);cljs.core.chunk_append.call(null,b__22897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__22902 = (i__22896 + (1));
i__22896 = G__22902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22897),iter__22894.call(null,cljs.core.chunk_rest.call(null,s__22895__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22897),null);
}
} else
{var line = cljs.core.first.call(null,s__22895__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__22894.call(null,cljs.core.rest.call(null,s__22895__$2)));
}
} else
{return null;
}
break;
}
});})(map__22872,map__22872__$1,controls,fields,title_field))
,null,null));
});})(map__22872,map__22872__$1,controls,fields,title_field))
;return iter__12290__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs22879))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs22879)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22879))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22879)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Turnover"),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record)))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs22884 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs22884))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs22884)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22884))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22884)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Employment"),(function (){var attrs22887 = clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs22887))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs22887)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22887))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22887)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs22888 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs22888))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs22888)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22888))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22888)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__12290__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__22872,map__22872__$1,controls,fields,title_field){
return (function iter__22898(s__22899){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__22872,map__22872__$1,controls,fields,title_field){
return (function (){var s__22899__$1 = s__22899;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22899__$1);if(temp__4126__auto__)
{var s__22899__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22899__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__22899__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__22901 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__22900 = (0);while(true){
if((i__22900 < size__12289__auto__))
{var d = cljs.core._nth.call(null,c__12288__auto__,i__22900);cljs.core.chunk_append.call(null,b__22901,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__22903 = (i__22900 + (1));
i__22900 = G__22903;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22901),iter__22898.call(null,cljs.core.chunk_rest.call(null,s__22899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22901),null);
}
} else
{var d = cljs.core.first.call(null,s__22899__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__22898.call(null,cljs.core.rest.call(null,s__22899__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__22872,map__22872__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__22872,map__22872__$1,controls,fields,title_field))
;return iter__12290__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__22904,owner){var map__22971 = p__22904;var map__22971__$1 = ((cljs.core.seq_QMARK_.call(null,map__22971))?cljs.core.apply.call(null,cljs.core.hash_map,map__22971):map__22971);var props = map__22971__$1;var map__22972 = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__22972__$1 = ((cljs.core.seq_QMARK_.call(null,map__22972))?cljs.core.apply.call(null,cljs.core.hash_map,map__22972):map__22972);var metadata = map__22972__$1;var record = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__22973 = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__22973__$1 = ((cljs.core.seq_QMARK_.call(null,map__22973))?cljs.core.apply.call(null,cljs.core.hash_map,map__22973):map__22973);var controls = map__22973__$1;var index = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t22974 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t22974 = (function (p__22904,sort_spec,index_type,metadata,owner,props,turnover_timeline,index,filter_spec,map__22973,map__22971,controls,size,employment_timeline,map__22972,record,company_info_component,meta22975){
this.p__22904 = p__22904;
this.sort_spec = sort_spec;
this.index_type = index_type;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.turnover_timeline = turnover_timeline;
this.index = index;
this.filter_spec = filter_spec;
this.map__22973 = map__22973;
this.map__22971 = map__22971;
this.controls = controls;
this.size = size;
this.employment_timeline = employment_timeline;
this.map__22972 = map__22972;
this.record = record;
this.company_info_component = company_info_component;
this.meta22975 = meta22975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t22974.cljs$lang$type = true;
clustermap.components.company_info.t22974.cljs$lang$ctorStr = "clustermap.components.company-info/t22974";
clustermap.components.company_info.t22974.cljs$lang$ctorPrWriter = ((function (map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.company-info/t22974");
});})(map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t22974.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t22974.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__22977,p__22978){var self__ = this;
var map__22979 = p__22977;var map__22979__$1 = ((cljs.core.seq_QMARK_.call(null,map__22979))?cljs.core.apply.call(null,cljs.core.hash_map,map__22979):map__22979);var map__22980 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__22980__$1 = ((cljs.core.seq_QMARK_.call(null,map__22980))?cljs.core.apply.call(null,cljs.core.hash_map,map__22980):map__22980);var next_metadata = map__22980__$1;var next_record = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__22981 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__22981__$1 = ((cljs.core.seq_QMARK_.call(null,map__22981))?cljs.core.apply.call(null,cljs.core.hash_map,map__22981):map__22981);var next_controls = map__22981__$1;var next_index = cljs.core.get.call(null,map__22981__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__22981__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__22981__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__22981__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__22982 = p__22978;var map__22982__$1 = ((cljs.core.seq_QMARK_.call(null,map__22982))?cljs.core.apply.call(null,cljs.core.hash_map,map__22982):map__22982);var fetch_metadata_fn = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__22979,map__22979__$1,map__22980,map__22980__$1,next_metadata,next_record,map__22981,map__22981__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__22982,map__22982__$1,fetch_metadata_fn,map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__22979,map__22979__$1,map__22980,map__22980__$1,next_metadata,next_record,map__22981,map__22981__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__22982,map__22982__$1,fetch_metadata_fn,map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (state_23013){var state_val_23014 = (state_23013[(1)]);if((state_val_23014 === (7)))
{var inst_22985 = (state_23013[(7)]);var inst_22999 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_22985);var state_23013__$1 = state_23013;var statearr_23015_23037 = state_23013__$1;(statearr_23015_23037[(2)] = inst_22999);
(statearr_23015_23037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (1)))
{var inst_22983 = fetch_metadata_fn.call(null,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);var state_23013__$1 = state_23013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23013__$1,(2),inst_22983);
} else
{if((state_val_23014 === (4)))
{var state_23013__$1 = state_23013;var statearr_23016_23038 = state_23013__$1;(statearr_23016_23038[(2)] = null);
(statearr_23016_23038[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (6)))
{var state_23013__$1 = state_23013;var statearr_23017_23039 = state_23013__$1;(statearr_23017_23039[(2)] = null);
(statearr_23017_23039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (3)))
{var inst_22985 = (state_23013[(7)]);var inst_22987 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22988 = ["COMPANY-INFO-DATA",inst_22985];var inst_22989 = (new cljs.core.PersistentVector(null,2,(5),inst_22987,inst_22988,null));var inst_22990 = cljs.core.clj__GT_js.call(null,inst_22989);var inst_22991 = console.log(inst_22990);var inst_22992 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22993 = [new cljs.core.Keyword(null,"record","record",-779106859)];var inst_22994 = (new cljs.core.PersistentVector(null,1,(5),inst_22992,inst_22993,null));var inst_22996 = (inst_22985 == null);var state_23013__$1 = (function (){var statearr_23018 = state_23013;(statearr_23018[(8)] = inst_22994);
(statearr_23018[(9)] = inst_22991);
return statearr_23018;
})();if(cljs.core.truth_(inst_22996))
{var statearr_23019_23040 = state_23013__$1;(statearr_23019_23040[(1)] = (6));
} else
{var statearr_23020_23041 = state_23013__$1;(statearr_23020_23041[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (2)))
{var inst_22985 = (state_23013[(7)]);var inst_22985__$1 = (state_23013[(2)]);var state_23013__$1 = (function (){var statearr_23021 = state_23013;(statearr_23021[(7)] = inst_22985__$1);
return statearr_23021;
})();if(cljs.core.truth_(inst_22985__$1))
{var statearr_23022_23042 = state_23013__$1;(statearr_23022_23042[(1)] = (3));
} else
{var statearr_23023_23043 = state_23013__$1;(statearr_23023_23043[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (11)))
{var inst_22994 = (state_23013[(8)]);var inst_23007 = (state_23013[(2)]);var inst_23008 = om.core.update_BANG_.call(null,self__.metadata,inst_22994,inst_23007);var state_23013__$1 = state_23013;var statearr_23024_23044 = state_23013__$1;(statearr_23024_23044[(2)] = inst_23008);
(statearr_23024_23044[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (9)))
{var state_23013__$1 = state_23013;var statearr_23025_23045 = state_23013__$1;(statearr_23025_23045[(2)] = null);
(statearr_23025_23045[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (5)))
{var inst_23011 = (state_23013[(2)]);var state_23013__$1 = state_23013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23013__$1,inst_23011);
} else
{if((state_val_23014 === (10)))
{var inst_23001 = (state_23013[(10)]);var inst_23005 = cljs.core.first.call(null,inst_23001);var state_23013__$1 = state_23013;var statearr_23026_23046 = state_23013__$1;(statearr_23026_23046[(2)] = inst_23005);
(statearr_23026_23046[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23014 === (8)))
{var inst_23001 = (state_23013[(10)]);var inst_23001__$1 = (state_23013[(2)]);var inst_23002 = (inst_23001__$1 == null);var state_23013__$1 = (function (){var statearr_23027 = state_23013;(statearr_23027[(10)] = inst_23001__$1);
return statearr_23027;
})();if(cljs.core.truth_(inst_23002))
{var statearr_23028_23047 = state_23013__$1;(statearr_23028_23047[(1)] = (9));
} else
{var statearr_23029_23048 = state_23013__$1;(statearr_23029_23048[(1)] = (10));
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
});})(c__16733__auto__,___$1,map__22979,map__22979__$1,map__22980,map__22980__$1,next_metadata,next_record,map__22981,map__22981__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__22982,map__22982__$1,fetch_metadata_fn,map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__22979,map__22979__$1,map__22980,map__22980__$1,next_metadata,next_record,map__22981,map__22981__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__22982,map__22982__$1,fetch_metadata_fn,map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_23033 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23033[(0)] = state_machine__16719__auto__);
(statearr_23033[(1)] = (1));
return statearr_23033;
});
var state_machine__16719__auto____1 = (function (state_23013){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_23013);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e23034){if((e23034 instanceof Object))
{var ex__16722__auto__ = e23034;var statearr_23035_23049 = state_23013;(statearr_23035_23049[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23034;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23050 = state_23013;
state_23013 = G__23050;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_23013){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_23013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__22979,map__22979__$1,map__22980,map__22980__$1,next_metadata,next_record,map__22981,map__22981__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__22982,map__22982__$1,fetch_metadata_fn,map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
})();var state__16735__auto__ = (function (){var statearr_23036 = f__16734__auto__.call(null);(statearr_23036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_23036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__22979,map__22979__$1,map__22980,map__22980__$1,next_metadata,next_record,map__22981,map__22981__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__22982,map__22982__$1,fetch_metadata_fn,map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t22974.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t22974.prototype.om$core$IRender$render$arity$1 = ((function (map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t22974.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t22974.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784),clustermap.api.records_factory.call(null));
});})(map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t22974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_22976){var self__ = this;
var _22976__$1 = this;return self__.meta22975;
});})(map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t22974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_22976,meta22975__$1){var self__ = this;
var _22976__$1 = this;return (new clustermap.components.company_info.t22974(self__.p__22904,self__.sort_spec,self__.index_type,self__.metadata,self__.owner,self__.props,self__.turnover_timeline,self__.index,self__.filter_spec,self__.map__22973,self__.map__22971,self__.controls,self__.size,self__.employment_timeline,self__.map__22972,self__.record,self__.company_info_component,meta22975__$1));
});})(map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t22974 = ((function (map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t22974(p__22904__$1,sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,map__22973__$2,map__22971__$2,controls__$1,size__$1,employment_timeline__$1,map__22972__$2,record__$1,company_info_component__$1,meta22975){return (new clustermap.components.company_info.t22974(p__22904__$1,sort_spec__$1,index_type__$1,metadata__$1,owner__$1,props__$1,turnover_timeline__$1,index__$1,filter_spec__$1,map__22973__$2,map__22971__$2,controls__$1,size__$1,employment_timeline__$1,map__22972__$2,record__$1,company_info_component__$1,meta22975));
});})(map__22971,map__22971__$1,props,map__22972,map__22972__$1,metadata,record,map__22973,map__22973__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t22974(p__22904,sort_spec,index_type,metadata,owner,props,turnover_timeline,index,filter_spec,map__22973__$1,map__22971__$1,controls,size,employment_timeline,map__22972__$1,record,company_info_component,null));
});

//# sourceMappingURL=company_info.js.map