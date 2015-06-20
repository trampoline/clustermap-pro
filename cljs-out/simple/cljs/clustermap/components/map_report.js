// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29669,comm,p__29670){var map__29727 = p__29669;var map__29727__$1 = ((cljs.core.seq_QMARK_.call(null,map__29727))?cljs.core.apply.call(null,cljs.core.hash_map,map__29727):map__29727);var map__29728 = cljs.core.get.call(null,map__29727__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29728__$1 = ((cljs.core.seq_QMARK_.call(null,map__29728))?cljs.core.apply.call(null,cljs.core.hash_map,map__29728):map__29728);var controls = map__29728__$1;var map__29729 = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29729__$1 = ((cljs.core.seq_QMARK_.call(null,map__29729))?cljs.core.apply.call(null,cljs.core.hash_map,map__29729):map__29729);var summary_stats = map__29729__$1;var variables = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29730 = p__29670;var map__29730__$1 = ((cljs.core.seq_QMARK_.call(null,map__29730))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);var data = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data){
return (function iter__29731(s__29732){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data){
return (function (){var s__29732__$1 = s__29732;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29732__$1);if(temp__4126__auto__)
{var s__29732__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29732__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29732__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29734 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29733 = (0);while(true){
if((i__29733 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29733);cljs.core.chunk_append.call(null,b__29734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29733,row_variables,c__4375__auto__,size__4376__auto__,b__29734,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data){
return (function iter__29759(s__29760){return (new cljs.core.LazySeq(null,((function (i__29733,row_variables,c__4375__auto__,size__4376__auto__,b__29734,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data){
return (function (){var s__29760__$1 = s__29760;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29760__$1);if(temp__4126__auto____$1)
{var s__29760__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29760__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29760__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29762 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29761 = (0);while(true){
if((i__29761 < size__4376__auto____$1))
{var map__29767 = cljs.core._nth.call(null,c__4375__auto____$1,i__29761);var map__29767__$1 = ((cljs.core.seq_QMARK_.call(null,map__29767))?cljs.core.apply.call(null,cljs.core.hash_map,map__29767):map__29767);var render_fn = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29762,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29768 = temp__4126__auto____$2;var map__29768__$1 = ((cljs.core.seq_QMARK_.call(null,map__29768))?cljs.core.apply.call(null,cljs.core.hash_map,map__29768):map__29768);var ch_key = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29783 = (i__29761 + (1));
i__29761 = G__29783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29762),iter__29759.call(null,cljs.core.chunk_rest.call(null,s__29760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29762),null);
}
} else
{var map__29769 = cljs.core.first.call(null,s__29760__$2);var map__29769__$1 = ((cljs.core.seq_QMARK_.call(null,map__29769))?cljs.core.apply.call(null,cljs.core.hash_map,map__29769):map__29769);var render_fn = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29770 = temp__4126__auto____$2;var map__29770__$1 = ((cljs.core.seq_QMARK_.call(null,map__29770))?cljs.core.apply.call(null,cljs.core.hash_map,map__29770):map__29770);var ch_key = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29759.call(null,cljs.core.rest.call(null,s__29760__$2)));
}
} else
{return null;
}
break;
}
});})(i__29733,row_variables,c__4375__auto__,size__4376__auto__,b__29734,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data))
,null,null));
});})(i__29733,row_variables,c__4375__auto__,size__4376__auto__,b__29734,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29784 = (i__29733 + (1));
i__29733 = G__29784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29734),iter__29731.call(null,cljs.core.chunk_rest.call(null,s__29732__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29734),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29732__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data){
return (function iter__29771(s__29772){return (new cljs.core.LazySeq(null,((function (row_variables,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data){
return (function (){var s__29772__$1 = s__29772;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29772__$1);if(temp__4126__auto____$1)
{var s__29772__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29772__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29772__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29774 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29773 = (0);while(true){
if((i__29773 < size__4376__auto__))
{var map__29779 = cljs.core._nth.call(null,c__4375__auto__,i__29773);var map__29779__$1 = ((cljs.core.seq_QMARK_.call(null,map__29779))?cljs.core.apply.call(null,cljs.core.hash_map,map__29779):map__29779);var render_fn = cljs.core.get.call(null,map__29779__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29779__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29779__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29779__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29774,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29780 = temp__4126__auto____$2;var map__29780__$1 = ((cljs.core.seq_QMARK_.call(null,map__29780))?cljs.core.apply.call(null,cljs.core.hash_map,map__29780):map__29780);var ch_key = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29785 = (i__29773 + (1));
i__29773 = G__29785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29774),iter__29771.call(null,cljs.core.chunk_rest.call(null,s__29772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29774),null);
}
} else
{var map__29781 = cljs.core.first.call(null,s__29772__$2);var map__29781__$1 = ((cljs.core.seq_QMARK_.call(null,map__29781))?cljs.core.apply.call(null,cljs.core.hash_map,map__29781):map__29781);var render_fn = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29781__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29782 = temp__4126__auto____$2;var map__29782__$1 = ((cljs.core.seq_QMARK_.call(null,map__29782))?cljs.core.apply.call(null,cljs.core.hash_map,map__29782):map__29782);var ch_key = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29771.call(null,cljs.core.rest.call(null,s__29772__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data))
,null,null));
});})(row_variables,s__29732__$2,temp__4126__auto__,belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29731.call(null,cljs.core.rest.call(null,s__29732__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data))
,null,null));
});})(belongs_to_vars,map__29727,map__29727__$1,map__29728,map__29728__$1,controls,map__29729,map__29729__$1,summary_stats,variables,map__29730,map__29730__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29786,owner){var map__29829 = p__29786;var map__29829__$1 = ((cljs.core.seq_QMARK_.call(null,map__29829))?cljs.core.apply.call(null,cljs.core.hash_map,map__29829):map__29829);var data = map__29829__$1;var filt = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29830 = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29830__$1 = ((cljs.core.seq_QMARK_.call(null,map__29830))?cljs.core.apply.call(null,cljs.core.hash_map,map__29830):map__29830);var map_report = map__29830__$1;var map__29831 = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29831__$1 = ((cljs.core.seq_QMARK_.call(null,map__29831))?cljs.core.apply.call(null,cljs.core.hash_map,map__29831):map__29831);var controls = map__29831__$1;var map__29832 = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29832__$1 = ((cljs.core.seq_QMARK_.call(null,map__29832))?cljs.core.apply.call(null,cljs.core.hash_map,map__29832):map__29832);var summary_stats = map__29832__$1;var variables = cljs.core.get.call(null,map__29832__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29832__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29832__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29833 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29833 = (function (filt,index_type,map__29830,owner,data,p__29786,map__29831,index,map__29829,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29832,meta29834){
this.filt = filt;
this.index_type = index_type;
this.map__29830 = map__29830;
this.owner = owner;
this.data = data;
this.p__29786 = p__29786;
this.map__29831 = map__29831;
this.index = index;
this.map__29829 = map__29829;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__29832 = map__29832;
this.meta29834 = meta29834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29833.cljs$lang$type = true;
clustermap.components.map_report.t29833.cljs$lang$ctorStr = "clustermap.components.map-report/t29833";
clustermap.components.map_report.t29833.cljs$lang$ctorPrWriter = ((function (map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29833");
});})(map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29833.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29833.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29836,p__29837){var self__ = this;
var map__29838 = p__29836;var map__29838__$1 = ((cljs.core.seq_QMARK_.call(null,map__29838))?cljs.core.apply.call(null,cljs.core.hash_map,map__29838):map__29838);var next_data = map__29838__$1;var next_filt = cljs.core.get.call(null,map__29838__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29839 = cljs.core.get.call(null,map__29838__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29839__$1 = ((cljs.core.seq_QMARK_.call(null,map__29839))?cljs.core.apply.call(null,cljs.core.hash_map,map__29839):map__29839);var next_map_report = map__29839__$1;var map__29840 = cljs.core.get.call(null,map__29839__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29840__$1 = ((cljs.core.seq_QMARK_.call(null,map__29840))?cljs.core.apply.call(null,cljs.core.hash_map,map__29840):map__29840);var next_controls = map__29840__$1;var map__29841 = cljs.core.get.call(null,map__29840__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29841__$1 = ((cljs.core.seq_QMARK_.call(null,map__29841))?cljs.core.apply.call(null,cljs.core.hash_map,map__29841):map__29841);var next_summary_stats = map__29841__$1;var next_index = cljs.core.get.call(null,map__29841__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29841__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29841__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29839__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29842 = p__29837;var map__29842__$1 = ((cljs.core.seq_QMARK_.call(null,map__29842))?cljs.core.apply.call(null,cljs.core.hash_map,map__29842):map__29842);var fetch_data_fn = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29838,map__29838__$1,next_data,next_filt,map__29839,map__29839__$1,next_map_report,map__29840,map__29840__$1,next_controls,map__29841,map__29841__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29842,map__29842__$1,fetch_data_fn,map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29838,map__29838__$1,next_data,next_filt,map__29839,map__29839__$1,next_map_report,map__29840,map__29840__$1,next_controls,map__29841,map__29841__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29842,map__29842__$1,fetch_data_fn,map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29856){var state_val_29857 = (state_29856[(1)]);if((state_val_29857 === (5)))
{var inst_29854 = (state_29856[(2)]);var state_29856__$1 = state_29856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29856__$1,inst_29854);
} else
{if((state_val_29857 === (4)))
{var state_29856__$1 = state_29856;var statearr_29858_29871 = state_29856__$1;(statearr_29858_29871[(2)] = null);
(statearr_29858_29871[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29857 === (3)))
{var inst_29846 = (state_29856[(7)]);var inst_29848 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29849 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29850 = (new cljs.core.PersistentVector(null,1,(5),inst_29848,inst_29849,null));var inst_29851 = om.core.update_BANG_.call(null,self__.map_report,inst_29850,inst_29846);var state_29856__$1 = state_29856;var statearr_29859_29872 = state_29856__$1;(statearr_29859_29872[(2)] = inst_29851);
(statearr_29859_29872[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29857 === (2)))
{var inst_29846 = (state_29856[(7)]);var inst_29846__$1 = (state_29856[(2)]);var state_29856__$1 = (function (){var statearr_29860 = state_29856;(statearr_29860[(7)] = inst_29846__$1);
return statearr_29860;
})();if(cljs.core.truth_(inst_29846__$1))
{var statearr_29861_29873 = state_29856__$1;(statearr_29861_29873[(1)] = (3));
} else
{var statearr_29862_29874 = state_29856__$1;(statearr_29862_29874[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29857 === (1)))
{var inst_29843 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29844 = fetch_data_fn.call(null,next_index,next_index_type,inst_29843,next_filt,null);var state_29856__$1 = state_29856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29856__$1,(2),inst_29844);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29838,map__29838__$1,next_data,next_filt,map__29839,map__29839__$1,next_map_report,map__29840,map__29840__$1,next_controls,map__29841,map__29841__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29842,map__29842__$1,fetch_data_fn,map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29838,map__29838__$1,next_data,next_filt,map__29839,map__29839__$1,next_map_report,map__29840,map__29840__$1,next_controls,map__29841,map__29841__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29842,map__29842__$1,fetch_data_fn,map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29866 = [null,null,null,null,null,null,null,null];(statearr_29866[(0)] = state_machine__9111__auto__);
(statearr_29866[(1)] = (1));
return statearr_29866;
});
var state_machine__9111__auto____1 = (function (state_29856){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29856);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29867){if((e29867 instanceof Object))
{var ex__9114__auto__ = e29867;var statearr_29868_29875 = state_29856;(statearr_29868_29875[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29867;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29876 = state_29856;
state_29856 = G__29876;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29856){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29838,map__29838__$1,next_data,next_filt,map__29839,map__29839__$1,next_map_report,map__29840,map__29840__$1,next_controls,map__29841,map__29841__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29842,map__29842__$1,fetch_data_fn,map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29869 = f__9126__auto__.call(null);(statearr_29869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29838,map__29838__$1,next_data,next_filt,map__29839,map__29839__$1,next_map_report,map__29840,map__29840__$1,next_controls,map__29841,map__29841__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29842,map__29842__$1,fetch_data_fn,map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29833.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29833.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29870 = om.core.get_shared.call(null,self__.owner);var map__29870__$1 = ((cljs.core.seq_QMARK_.call(null,map__29870))?cljs.core.apply.call(null,cljs.core.hash_map,map__29870):map__29870);var comm = cljs.core.get.call(null,map__29870__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29833.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29833.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29835){var self__ = this;
var _29835__$1 = this;return self__.meta29834;
});})(map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29835,meta29834__$1){var self__ = this;
var _29835__$1 = this;return (new clustermap.components.map_report.t29833(self__.filt,self__.index_type,self__.map__29830,self__.owner,self__.data,self__.p__29786,self__.map__29831,self__.index,self__.map__29829,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__29832,meta29834__$1));
});})(map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29833 = ((function (map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29833(filt__$1,index_type__$1,map__29830__$2,owner__$1,data__$1,p__29786__$1,map__29831__$2,index__$1,map__29829__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29832__$2,meta29834){return (new clustermap.components.map_report.t29833(filt__$1,index_type__$1,map__29830__$2,owner__$1,data__$1,p__29786__$1,map__29831__$2,index__$1,map__29829__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29832__$2,meta29834));
});})(map__29829,map__29829__$1,data,filt,map__29830,map__29830__$1,map_report,map__29831,map__29831__$1,controls,map__29832,map__29832__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29833(filt,index_type,map__29830__$1,owner,data,p__29786,map__29831__$1,index,map__29829__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29832__$1,null));
});
