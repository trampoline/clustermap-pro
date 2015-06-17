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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29613,comm,p__29614){var map__29671 = p__29613;var map__29671__$1 = ((cljs.core.seq_QMARK_.call(null,map__29671))?cljs.core.apply.call(null,cljs.core.hash_map,map__29671):map__29671);var map__29672 = cljs.core.get.call(null,map__29671__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29672__$1 = ((cljs.core.seq_QMARK_.call(null,map__29672))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);var controls = map__29672__$1;var map__29673 = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29673__$1 = ((cljs.core.seq_QMARK_.call(null,map__29673))?cljs.core.apply.call(null,cljs.core.hash_map,map__29673):map__29673);var summary_stats = map__29673__$1;var variables = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29674 = p__29614;var map__29674__$1 = ((cljs.core.seq_QMARK_.call(null,map__29674))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);var data = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data){
return (function iter__29675(s__29676){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data){
return (function (){var s__29676__$1 = s__29676;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29676__$1);if(temp__4126__auto__)
{var s__29676__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29676__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29676__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29678 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29677 = (0);while(true){
if((i__29677 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29677);cljs.core.chunk_append.call(null,b__29678,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29677,row_variables,c__4375__auto__,size__4376__auto__,b__29678,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data){
return (function iter__29703(s__29704){return (new cljs.core.LazySeq(null,((function (i__29677,row_variables,c__4375__auto__,size__4376__auto__,b__29678,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data){
return (function (){var s__29704__$1 = s__29704;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29704__$1);if(temp__4126__auto____$1)
{var s__29704__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29704__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29704__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29706 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29705 = (0);while(true){
if((i__29705 < size__4376__auto____$1))
{var map__29711 = cljs.core._nth.call(null,c__4375__auto____$1,i__29705);var map__29711__$1 = ((cljs.core.seq_QMARK_.call(null,map__29711))?cljs.core.apply.call(null,cljs.core.hash_map,map__29711):map__29711);var render_fn = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29711__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29706,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29712 = temp__4126__auto____$2;var map__29712__$1 = ((cljs.core.seq_QMARK_.call(null,map__29712))?cljs.core.apply.call(null,cljs.core.hash_map,map__29712):map__29712);var ch_key = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29727 = (i__29705 + (1));
i__29705 = G__29727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29706),iter__29703.call(null,cljs.core.chunk_rest.call(null,s__29704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29706),null);
}
} else
{var map__29713 = cljs.core.first.call(null,s__29704__$2);var map__29713__$1 = ((cljs.core.seq_QMARK_.call(null,map__29713))?cljs.core.apply.call(null,cljs.core.hash_map,map__29713):map__29713);var render_fn = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29714 = temp__4126__auto____$2;var map__29714__$1 = ((cljs.core.seq_QMARK_.call(null,map__29714))?cljs.core.apply.call(null,cljs.core.hash_map,map__29714):map__29714);var ch_key = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29703.call(null,cljs.core.rest.call(null,s__29704__$2)));
}
} else
{return null;
}
break;
}
});})(i__29677,row_variables,c__4375__auto__,size__4376__auto__,b__29678,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data))
,null,null));
});})(i__29677,row_variables,c__4375__auto__,size__4376__auto__,b__29678,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29728 = (i__29677 + (1));
i__29677 = G__29728;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29678),iter__29675.call(null,cljs.core.chunk_rest.call(null,s__29676__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29678),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29676__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data){
return (function iter__29715(s__29716){return (new cljs.core.LazySeq(null,((function (row_variables,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data){
return (function (){var s__29716__$1 = s__29716;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29716__$1);if(temp__4126__auto____$1)
{var s__29716__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29716__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29716__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29718 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29717 = (0);while(true){
if((i__29717 < size__4376__auto__))
{var map__29723 = cljs.core._nth.call(null,c__4375__auto__,i__29717);var map__29723__$1 = ((cljs.core.seq_QMARK_.call(null,map__29723))?cljs.core.apply.call(null,cljs.core.hash_map,map__29723):map__29723);var render_fn = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29718,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29724 = temp__4126__auto____$2;var map__29724__$1 = ((cljs.core.seq_QMARK_.call(null,map__29724))?cljs.core.apply.call(null,cljs.core.hash_map,map__29724):map__29724);var ch_key = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29729 = (i__29717 + (1));
i__29717 = G__29729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29718),iter__29715.call(null,cljs.core.chunk_rest.call(null,s__29716__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29718),null);
}
} else
{var map__29725 = cljs.core.first.call(null,s__29716__$2);var map__29725__$1 = ((cljs.core.seq_QMARK_.call(null,map__29725))?cljs.core.apply.call(null,cljs.core.hash_map,map__29725):map__29725);var render_fn = cljs.core.get.call(null,map__29725__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29725__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29725__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29725__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29726 = temp__4126__auto____$2;var map__29726__$1 = ((cljs.core.seq_QMARK_.call(null,map__29726))?cljs.core.apply.call(null,cljs.core.hash_map,map__29726):map__29726);var ch_key = cljs.core.get.call(null,map__29726__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29726__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29726__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29726__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29715.call(null,cljs.core.rest.call(null,s__29716__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data))
,null,null));
});})(row_variables,s__29676__$2,temp__4126__auto__,belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29675.call(null,cljs.core.rest.call(null,s__29676__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data))
,null,null));
});})(belongs_to_vars,map__29671,map__29671__$1,map__29672,map__29672__$1,controls,map__29673,map__29673__$1,summary_stats,variables,map__29674,map__29674__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29730,owner){var map__29773 = p__29730;var map__29773__$1 = ((cljs.core.seq_QMARK_.call(null,map__29773))?cljs.core.apply.call(null,cljs.core.hash_map,map__29773):map__29773);var data = map__29773__$1;var filt = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29774 = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29774__$1 = ((cljs.core.seq_QMARK_.call(null,map__29774))?cljs.core.apply.call(null,cljs.core.hash_map,map__29774):map__29774);var map_report = map__29774__$1;var map__29775 = cljs.core.get.call(null,map__29774__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29775__$1 = ((cljs.core.seq_QMARK_.call(null,map__29775))?cljs.core.apply.call(null,cljs.core.hash_map,map__29775):map__29775);var controls = map__29775__$1;var map__29776 = cljs.core.get.call(null,map__29775__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29776__$1 = ((cljs.core.seq_QMARK_.call(null,map__29776))?cljs.core.apply.call(null,cljs.core.hash_map,map__29776):map__29776);var summary_stats = map__29776__$1;var variables = cljs.core.get.call(null,map__29776__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29776__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29776__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29774__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29777 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29777 = (function (map__29776,filt,index_type,map__29774,owner,data,map__29773,map__29775,index,p__29730,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,meta29778){
this.map__29776 = map__29776;
this.filt = filt;
this.index_type = index_type;
this.map__29774 = map__29774;
this.owner = owner;
this.data = data;
this.map__29773 = map__29773;
this.map__29775 = map__29775;
this.index = index;
this.p__29730 = p__29730;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.meta29778 = meta29778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29777.cljs$lang$type = true;
clustermap.components.map_report.t29777.cljs$lang$ctorStr = "clustermap.components.map-report/t29777";
clustermap.components.map_report.t29777.cljs$lang$ctorPrWriter = ((function (map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29777");
});})(map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29777.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29777.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29780,p__29781){var self__ = this;
var map__29782 = p__29780;var map__29782__$1 = ((cljs.core.seq_QMARK_.call(null,map__29782))?cljs.core.apply.call(null,cljs.core.hash_map,map__29782):map__29782);var next_data = map__29782__$1;var next_filt = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29783 = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29783__$1 = ((cljs.core.seq_QMARK_.call(null,map__29783))?cljs.core.apply.call(null,cljs.core.hash_map,map__29783):map__29783);var next_map_report = map__29783__$1;var map__29784 = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29784__$1 = ((cljs.core.seq_QMARK_.call(null,map__29784))?cljs.core.apply.call(null,cljs.core.hash_map,map__29784):map__29784);var next_controls = map__29784__$1;var map__29785 = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29785__$1 = ((cljs.core.seq_QMARK_.call(null,map__29785))?cljs.core.apply.call(null,cljs.core.hash_map,map__29785):map__29785);var next_summary_stats = map__29785__$1;var next_index = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29786 = p__29781;var map__29786__$1 = ((cljs.core.seq_QMARK_.call(null,map__29786))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);var fetch_data_fn = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29782,map__29782__$1,next_data,next_filt,map__29783,map__29783__$1,next_map_report,map__29784,map__29784__$1,next_controls,map__29785,map__29785__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29786,map__29786__$1,fetch_data_fn,map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29782,map__29782__$1,next_data,next_filt,map__29783,map__29783__$1,next_map_report,map__29784,map__29784__$1,next_controls,map__29785,map__29785__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29786,map__29786__$1,fetch_data_fn,map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29800){var state_val_29801 = (state_29800[(1)]);if((state_val_29801 === (5)))
{var inst_29798 = (state_29800[(2)]);var state_29800__$1 = state_29800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29800__$1,inst_29798);
} else
{if((state_val_29801 === (4)))
{var state_29800__$1 = state_29800;var statearr_29802_29815 = state_29800__$1;(statearr_29802_29815[(2)] = null);
(statearr_29802_29815[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29801 === (3)))
{var inst_29790 = (state_29800[(7)]);var inst_29792 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29793 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29794 = (new cljs.core.PersistentVector(null,1,(5),inst_29792,inst_29793,null));var inst_29795 = om.core.update_BANG_.call(null,self__.map_report,inst_29794,inst_29790);var state_29800__$1 = state_29800;var statearr_29803_29816 = state_29800__$1;(statearr_29803_29816[(2)] = inst_29795);
(statearr_29803_29816[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29801 === (2)))
{var inst_29790 = (state_29800[(7)]);var inst_29790__$1 = (state_29800[(2)]);var state_29800__$1 = (function (){var statearr_29804 = state_29800;(statearr_29804[(7)] = inst_29790__$1);
return statearr_29804;
})();if(cljs.core.truth_(inst_29790__$1))
{var statearr_29805_29817 = state_29800__$1;(statearr_29805_29817[(1)] = (3));
} else
{var statearr_29806_29818 = state_29800__$1;(statearr_29806_29818[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29801 === (1)))
{var inst_29787 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29788 = fetch_data_fn.call(null,next_index,next_index_type,inst_29787,next_filt,null);var state_29800__$1 = state_29800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29800__$1,(2),inst_29788);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29782,map__29782__$1,next_data,next_filt,map__29783,map__29783__$1,next_map_report,map__29784,map__29784__$1,next_controls,map__29785,map__29785__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29786,map__29786__$1,fetch_data_fn,map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29782,map__29782__$1,next_data,next_filt,map__29783,map__29783__$1,next_map_report,map__29784,map__29784__$1,next_controls,map__29785,map__29785__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29786,map__29786__$1,fetch_data_fn,map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29810 = [null,null,null,null,null,null,null,null];(statearr_29810[(0)] = state_machine__9111__auto__);
(statearr_29810[(1)] = (1));
return statearr_29810;
});
var state_machine__9111__auto____1 = (function (state_29800){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29800);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29811){if((e29811 instanceof Object))
{var ex__9114__auto__ = e29811;var statearr_29812_29819 = state_29800;(statearr_29812_29819[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29820 = state_29800;
state_29800 = G__29820;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29800){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29782,map__29782__$1,next_data,next_filt,map__29783,map__29783__$1,next_map_report,map__29784,map__29784__$1,next_controls,map__29785,map__29785__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29786,map__29786__$1,fetch_data_fn,map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29813 = f__9126__auto__.call(null);(statearr_29813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29782,map__29782__$1,next_data,next_filt,map__29783,map__29783__$1,next_map_report,map__29784,map__29784__$1,next_controls,map__29785,map__29785__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29786,map__29786__$1,fetch_data_fn,map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29777.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29777.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29814 = om.core.get_shared.call(null,self__.owner);var map__29814__$1 = ((cljs.core.seq_QMARK_.call(null,map__29814))?cljs.core.apply.call(null,cljs.core.hash_map,map__29814):map__29814);var comm = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29777.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29777.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29779){var self__ = this;
var _29779__$1 = this;return self__.meta29778;
});})(map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29779,meta29778__$1){var self__ = this;
var _29779__$1 = this;return (new clustermap.components.map_report.t29777(self__.map__29776,self__.filt,self__.index_type,self__.map__29774,self__.owner,self__.data,self__.map__29773,self__.map__29775,self__.index,self__.p__29730,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,meta29778__$1));
});})(map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29777 = ((function (map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29777(map__29776__$2,filt__$1,index_type__$1,map__29774__$2,owner__$1,data__$1,map__29773__$2,map__29775__$2,index__$1,p__29730__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta29778){return (new clustermap.components.map_report.t29777(map__29776__$2,filt__$1,index_type__$1,map__29774__$2,owner__$1,data__$1,map__29773__$2,map__29775__$2,index__$1,p__29730__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta29778));
});})(map__29773,map__29773__$1,data,filt,map__29774,map__29774__$1,map_report,map__29775,map__29775__$1,controls,map__29776,map__29776__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29777(map__29776__$1,filt,index_type,map__29774__$1,owner,data,map__29773__$1,map__29775__$1,index,p__29730,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,null));
});
