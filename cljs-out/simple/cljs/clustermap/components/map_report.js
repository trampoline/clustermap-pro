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
goog.require('clustermap.ordered_resource');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__28580,comm,p__28581){var map__28638 = p__28580;var map__28638__$1 = ((cljs.core.seq_QMARK_.call(null,map__28638))?cljs.core.apply.call(null,cljs.core.hash_map,map__28638):map__28638);var map__28639 = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28639__$1 = ((cljs.core.seq_QMARK_.call(null,map__28639))?cljs.core.apply.call(null,cljs.core.hash_map,map__28639):map__28639);var controls = map__28639__$1;var map__28640 = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28640__$1 = ((cljs.core.seq_QMARK_.call(null,map__28640))?cljs.core.apply.call(null,cljs.core.hash_map,map__28640):map__28640);var summary_stats = map__28640__$1;var variables = cljs.core.get.call(null,map__28640__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__28641 = p__28581;var map__28641__$1 = ((cljs.core.seq_QMARK_.call(null,map__28641))?cljs.core.apply.call(null,cljs.core.hash_map,map__28641):map__28641);var data = cljs.core.get.call(null,map__28641__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data){
return (function iter__28642(s__28643){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data){
return (function (){var s__28643__$1 = s__28643;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28643__$1);if(temp__4126__auto__)
{var s__28643__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28643__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28643__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28645 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28644 = (0);while(true){
if((i__28644 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__28644);cljs.core.chunk_append.call(null,b__28645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__28644,row_variables,c__4375__auto__,size__4376__auto__,b__28645,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data){
return (function iter__28670(s__28671){return (new cljs.core.LazySeq(null,((function (i__28644,row_variables,c__4375__auto__,size__4376__auto__,b__28645,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data){
return (function (){var s__28671__$1 = s__28671;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28671__$1);if(temp__4126__auto____$1)
{var s__28671__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28671__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28671__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28673 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28672 = (0);while(true){
if((i__28672 < size__4376__auto____$1))
{var map__28678 = cljs.core._nth.call(null,c__4375__auto____$1,i__28672);var map__28678__$1 = ((cljs.core.seq_QMARK_.call(null,map__28678))?cljs.core.apply.call(null,cljs.core.hash_map,map__28678):map__28678);var render_fn = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28673,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28679 = temp__4126__auto____$2;var map__28679__$1 = ((cljs.core.seq_QMARK_.call(null,map__28679))?cljs.core.apply.call(null,cljs.core.hash_map,map__28679):map__28679);var ch_key = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28679__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__28694 = (i__28672 + (1));
i__28672 = G__28694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28673),iter__28670.call(null,cljs.core.chunk_rest.call(null,s__28671__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28673),null);
}
} else
{var map__28680 = cljs.core.first.call(null,s__28671__$2);var map__28680__$1 = ((cljs.core.seq_QMARK_.call(null,map__28680))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);var render_fn = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28681 = temp__4126__auto____$2;var map__28681__$1 = ((cljs.core.seq_QMARK_.call(null,map__28681))?cljs.core.apply.call(null,cljs.core.hash_map,map__28681):map__28681);var ch_key = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__28670.call(null,cljs.core.rest.call(null,s__28671__$2)));
}
} else
{return null;
}
break;
}
});})(i__28644,row_variables,c__4375__auto__,size__4376__auto__,b__28645,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data))
,null,null));
});})(i__28644,row_variables,c__4375__auto__,size__4376__auto__,b__28645,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__28695 = (i__28644 + (1));
i__28644 = G__28695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28645),iter__28642.call(null,cljs.core.chunk_rest.call(null,s__28643__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28645),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__28643__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data){
return (function iter__28682(s__28683){return (new cljs.core.LazySeq(null,((function (row_variables,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data){
return (function (){var s__28683__$1 = s__28683;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28683__$1);if(temp__4126__auto____$1)
{var s__28683__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28683__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28683__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28685 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28684 = (0);while(true){
if((i__28684 < size__4376__auto__))
{var map__28690 = cljs.core._nth.call(null,c__4375__auto__,i__28684);var map__28690__$1 = ((cljs.core.seq_QMARK_.call(null,map__28690))?cljs.core.apply.call(null,cljs.core.hash_map,map__28690):map__28690);var render_fn = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28685,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28691 = temp__4126__auto____$2;var map__28691__$1 = ((cljs.core.seq_QMARK_.call(null,map__28691))?cljs.core.apply.call(null,cljs.core.hash_map,map__28691):map__28691);var ch_key = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__28696 = (i__28684 + (1));
i__28684 = G__28696;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28685),iter__28682.call(null,cljs.core.chunk_rest.call(null,s__28683__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28685),null);
}
} else
{var map__28692 = cljs.core.first.call(null,s__28683__$2);var map__28692__$1 = ((cljs.core.seq_QMARK_.call(null,map__28692))?cljs.core.apply.call(null,cljs.core.hash_map,map__28692):map__28692);var render_fn = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28693 = temp__4126__auto____$2;var map__28693__$1 = ((cljs.core.seq_QMARK_.call(null,map__28693))?cljs.core.apply.call(null,cljs.core.hash_map,map__28693):map__28693);var ch_key = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__28682.call(null,cljs.core.rest.call(null,s__28683__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data))
,null,null));
});})(row_variables,s__28643__$2,temp__4126__auto__,belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__28642.call(null,cljs.core.rest.call(null,s__28643__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data))
,null,null));
});})(belongs_to_vars,map__28638,map__28638__$1,map__28639,map__28639__$1,controls,map__28640,map__28640__$1,summary_stats,variables,map__28641,map__28641__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__28697,owner){var map__28767 = p__28697;var map__28767__$1 = ((cljs.core.seq_QMARK_.call(null,map__28767))?cljs.core.apply.call(null,cljs.core.hash_map,map__28767):map__28767);var data = map__28767__$1;var filt = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28768 = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28768__$1 = ((cljs.core.seq_QMARK_.call(null,map__28768))?cljs.core.apply.call(null,cljs.core.hash_map,map__28768):map__28768);var map_report = map__28768__$1;var map__28769 = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28769__$1 = ((cljs.core.seq_QMARK_.call(null,map__28769))?cljs.core.apply.call(null,cljs.core.hash_map,map__28769):map__28769);var controls = map__28769__$1;var map__28770 = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28770__$1 = ((cljs.core.seq_QMARK_.call(null,map__28770))?cljs.core.apply.call(null,cljs.core.hash_map,map__28770):map__28770);var summary_stats = map__28770__$1;var variables = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t28771 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t28771 = (function (map__28768,filt,index_type,map__28769,owner,data,map__28770,index,p__28697,map__28767,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,meta28772){
this.map__28768 = map__28768;
this.filt = filt;
this.index_type = index_type;
this.map__28769 = map__28769;
this.owner = owner;
this.data = data;
this.map__28770 = map__28770;
this.index = index;
this.p__28697 = p__28697;
this.map__28767 = map__28767;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.meta28772 = meta28772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t28771.cljs$lang$type = true;
clustermap.components.map_report.t28771.cljs$lang$ctorStr = "clustermap.components.map-report/t28771";
clustermap.components.map_report.t28771.cljs$lang$ctorPrWriter = ((function (map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t28771");
});})(map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28771.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t28771.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__28774,p__28775){var self__ = this;
var map__28776 = p__28774;var map__28776__$1 = ((cljs.core.seq_QMARK_.call(null,map__28776))?cljs.core.apply.call(null,cljs.core.hash_map,map__28776):map__28776);var next_data = map__28776__$1;var next_filt = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28777 = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28777__$1 = ((cljs.core.seq_QMARK_.call(null,map__28777))?cljs.core.apply.call(null,cljs.core.hash_map,map__28777):map__28777);var next_map_report = map__28777__$1;var map__28778 = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28778__$1 = ((cljs.core.seq_QMARK_.call(null,map__28778))?cljs.core.apply.call(null,cljs.core.hash_map,map__28778):map__28778);var next_controls = map__28778__$1;var map__28779 = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28779__$1 = ((cljs.core.seq_QMARK_.call(null,map__28779))?cljs.core.apply.call(null,cljs.core.hash_map,map__28779):map__28779);var next_summary_stats = map__28779__$1;var next_index = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__28780 = p__28775;var map__28780__$1 = ((cljs.core.seq_QMARK_.call(null,map__28780))?cljs.core.apply.call(null,cljs.core.hash_map,map__28780):map__28780);var next_state = map__28780__$1;var summary_stats_resource = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,map__28776,map__28776__$1,next_data,next_filt,map__28777,map__28777__$1,next_map_report,map__28778,map__28778__$1,next_controls,map__28779,map__28779__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28780,map__28780__$1,next_state,summary_stats_resource,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,map__28776,map__28776__$1,next_data,next_filt,map__28777,map__28777__$1,next_map_report,map__28778,map__28778__$1,next_controls,map__28779,map__28779__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28780,map__28780__$1,next_state,summary_stats_resource,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_28794){var state_val_28795 = (state_28794[(1)]);if((state_val_28795 === (5)))
{var inst_28792 = (state_28794[(2)]);var state_28794__$1 = state_28794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28794__$1,inst_28792);
} else
{if((state_val_28795 === (4)))
{var state_28794__$1 = state_28794;var statearr_28796_28836 = state_28794__$1;(statearr_28796_28836[(2)] = null);
(statearr_28796_28836[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28795 === (3)))
{var inst_28784 = (state_28794[(7)]);var inst_28786 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28787 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_28788 = (new cljs.core.PersistentVector(null,1,(5),inst_28786,inst_28787,null));var inst_28789 = om.core.update_BANG_.call(null,self__.map_report,inst_28788,inst_28784);var state_28794__$1 = state_28794;var statearr_28797_28837 = state_28794__$1;(statearr_28797_28837[(2)] = inst_28789);
(statearr_28797_28837[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28795 === (2)))
{var inst_28784 = (state_28794[(7)]);var inst_28784__$1 = (state_28794[(2)]);var state_28794__$1 = (function (){var statearr_28798 = state_28794;(statearr_28798[(7)] = inst_28784__$1);
return statearr_28798;
})();if(cljs.core.truth_(inst_28784__$1))
{var statearr_28799_28838 = state_28794__$1;(statearr_28799_28838[(1)] = (3));
} else
{var statearr_28800_28839 = state_28794__$1;(statearr_28800_28839[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28795 === (1)))
{var inst_28781 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_28782 = clustermap.api.summary_stats.call(null,next_index,next_index_type,inst_28781,next_filt,null);var state_28794__$1 = state_28794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28794__$1,(2),inst_28782);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,___$1,map__28776,map__28776__$1,next_data,next_filt,map__28777,map__28777__$1,next_map_report,map__28778,map__28778__$1,next_controls,map__28779,map__28779__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28780,map__28780__$1,next_state,summary_stats_resource,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,map__28776,map__28776__$1,next_data,next_filt,map__28777,map__28777__$1,next_map_report,map__28778,map__28778__$1,next_controls,map__28779,map__28779__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28780,map__28780__$1,next_state,summary_stats_resource,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28804 = [null,null,null,null,null,null,null,null];(statearr_28804[(0)] = state_machine__11462__auto__);
(statearr_28804[(1)] = (1));
return statearr_28804;
});
var state_machine__11462__auto____1 = (function (state_28794){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28794);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28805){if((e28805 instanceof Object))
{var ex__11465__auto__ = e28805;var statearr_28806_28840 = state_28794;(statearr_28806_28840[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28805;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28841 = state_28794;
state_28794 = G__28841;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28794){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,map__28776,map__28776__$1,next_data,next_filt,map__28777,map__28777__$1,next_map_report,map__28778,map__28778__$1,next_controls,map__28779,map__28779__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28780,map__28780__$1,next_state,summary_stats_resource,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__11519__auto__ = (function (){var statearr_28807 = f__11518__auto__.call(null);(statearr_28807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,map__28776,map__28776__$1,next_data,next_filt,map__28777,map__28777__$1,next_map_report,map__28778,map__28778__$1,next_controls,map__28779,map__28779__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28780,map__28780__$1,next_state,summary_stats_resource,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__11517__auto__;
} else
{return null;
}
});})(map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28771.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t28771.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__28808 = om.core.get_shared.call(null,self__.owner);var map__28808__$1 = ((cljs.core.seq_QMARK_.call(null,map__28808))?cljs.core.apply.call(null,cljs.core.hash_map,map__28808):map__28808);var comm = cljs.core.get.call(null,map__28808__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28771.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t28771.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_28822){var state_val_28823 = (state_28822[(1)]);if((state_val_28823 === (5)))
{var inst_28820 = (state_28822[(2)]);var state_28822__$1 = state_28822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28822__$1,inst_28820);
} else
{if((state_val_28823 === (4)))
{var state_28822__$1 = state_28822;var statearr_28824_28842 = state_28822__$1;(statearr_28824_28842[(2)] = null);
(statearr_28824_28842[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28823 === (3)))
{var inst_28812 = (state_28822[(7)]);var inst_28814 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28815 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_28816 = (new cljs.core.PersistentVector(null,1,(5),inst_28814,inst_28815,null));var inst_28817 = om.core.update_BANG_.call(null,self__.map_report,inst_28816,inst_28812);var state_28822__$1 = state_28822;var statearr_28825_28843 = state_28822__$1;(statearr_28825_28843[(2)] = inst_28817);
(statearr_28825_28843[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28823 === (2)))
{var inst_28812 = (state_28822[(7)]);var inst_28812__$1 = (state_28822[(2)]);var state_28822__$1 = (function (){var statearr_28826 = state_28822;(statearr_28826[(7)] = inst_28812__$1);
return statearr_28826;
})();if(cljs.core.truth_(inst_28812__$1))
{var statearr_28827_28844 = state_28822__$1;(statearr_28827_28844[(1)] = (3));
} else
{var statearr_28828_28845 = state_28822__$1;(statearr_28828_28845[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28823 === (1)))
{var inst_28809 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),self__.variables);var inst_28810 = clustermap.api.summary_stats.call(null,self__.index,self__.index_type,inst_28809,self__.filt,null);var state_28822__$1 = state_28822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28822__$1,(2),inst_28810);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,___$1,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28832 = [null,null,null,null,null,null,null,null];(statearr_28832[(0)] = state_machine__11462__auto__);
(statearr_28832[(1)] = (1));
return statearr_28832;
});
var state_machine__11462__auto____1 = (function (state_28822){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28822);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28833){if((e28833 instanceof Object))
{var ex__11465__auto__ = e28833;var statearr_28834_28846 = state_28822;(statearr_28834_28846[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28822);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28833;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28847 = state_28822;
state_28822 = G__28847;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28822){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__11519__auto__ = (function (){var statearr_28835 = f__11518__auto__.call(null);(statearr_28835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__11517__auto__;
});})(map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28773){var self__ = this;
var _28773__$1 = this;return self__.meta28772;
});})(map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28773,meta28772__$1){var self__ = this;
var _28773__$1 = this;return (new clustermap.components.map_report.t28771(self__.map__28768,self__.filt,self__.index_type,self__.map__28769,self__.owner,self__.data,self__.map__28770,self__.index,self__.p__28697,self__.map__28767,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,meta28772__$1));
});})(map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t28771 = ((function (map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t28771(map__28768__$2,filt__$1,index_type__$1,map__28769__$2,owner__$1,data__$1,map__28770__$2,index__$1,p__28697__$1,map__28767__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta28772){return (new clustermap.components.map_report.t28771(map__28768__$2,filt__$1,index_type__$1,map__28769__$2,owner__$1,data__$1,map__28770__$2,index__$1,p__28697__$1,map__28767__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta28772));
});})(map__28767,map__28767__$1,data,filt,map__28768,map__28768__$1,map_report,map__28769,map__28769__$1,controls,map__28770,map__28770__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t28771(map__28768__$1,filt,index_type,map__28769__$1,owner,data,map__28770__$1,index,p__28697,map__28767__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,null));
});
