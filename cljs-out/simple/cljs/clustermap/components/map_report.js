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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29026,comm,p__29027){var map__29084 = p__29026;var map__29084__$1 = ((cljs.core.seq_QMARK_.call(null,map__29084))?cljs.core.apply.call(null,cljs.core.hash_map,map__29084):map__29084);var map__29085 = cljs.core.get.call(null,map__29084__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29085__$1 = ((cljs.core.seq_QMARK_.call(null,map__29085))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);var controls = map__29085__$1;var map__29086 = cljs.core.get.call(null,map__29085__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29086__$1 = ((cljs.core.seq_QMARK_.call(null,map__29086))?cljs.core.apply.call(null,cljs.core.hash_map,map__29086):map__29086);var summary_stats = map__29086__$1;var variables = cljs.core.get.call(null,map__29086__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29087 = p__29027;var map__29087__$1 = ((cljs.core.seq_QMARK_.call(null,map__29087))?cljs.core.apply.call(null,cljs.core.hash_map,map__29087):map__29087);var data = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data){
return (function iter__29088(s__29089){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data){
return (function (){var s__29089__$1 = s__29089;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29089__$1);if(temp__4126__auto__)
{var s__29089__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29089__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29089__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29091 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29090 = (0);while(true){
if((i__29090 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29090);cljs.core.chunk_append.call(null,b__29091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29090,row_variables,c__4375__auto__,size__4376__auto__,b__29091,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data){
return (function iter__29116(s__29117){return (new cljs.core.LazySeq(null,((function (i__29090,row_variables,c__4375__auto__,size__4376__auto__,b__29091,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data){
return (function (){var s__29117__$1 = s__29117;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29117__$1);if(temp__4126__auto____$1)
{var s__29117__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29117__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29117__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29119 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29118 = (0);while(true){
if((i__29118 < size__4376__auto____$1))
{var map__29124 = cljs.core._nth.call(null,c__4375__auto____$1,i__29118);var map__29124__$1 = ((cljs.core.seq_QMARK_.call(null,map__29124))?cljs.core.apply.call(null,cljs.core.hash_map,map__29124):map__29124);var render_fn = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29119,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29125 = temp__4126__auto____$2;var map__29125__$1 = ((cljs.core.seq_QMARK_.call(null,map__29125))?cljs.core.apply.call(null,cljs.core.hash_map,map__29125):map__29125);var ch_key = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29140 = (i__29118 + (1));
i__29118 = G__29140;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29119),iter__29116.call(null,cljs.core.chunk_rest.call(null,s__29117__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29119),null);
}
} else
{var map__29126 = cljs.core.first.call(null,s__29117__$2);var map__29126__$1 = ((cljs.core.seq_QMARK_.call(null,map__29126))?cljs.core.apply.call(null,cljs.core.hash_map,map__29126):map__29126);var render_fn = cljs.core.get.call(null,map__29126__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29126__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29126__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29126__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29127 = temp__4126__auto____$2;var map__29127__$1 = ((cljs.core.seq_QMARK_.call(null,map__29127))?cljs.core.apply.call(null,cljs.core.hash_map,map__29127):map__29127);var ch_key = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29116.call(null,cljs.core.rest.call(null,s__29117__$2)));
}
} else
{return null;
}
break;
}
});})(i__29090,row_variables,c__4375__auto__,size__4376__auto__,b__29091,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data))
,null,null));
});})(i__29090,row_variables,c__4375__auto__,size__4376__auto__,b__29091,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29141 = (i__29090 + (1));
i__29090 = G__29141;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29091),iter__29088.call(null,cljs.core.chunk_rest.call(null,s__29089__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29091),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29089__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data){
return (function iter__29128(s__29129){return (new cljs.core.LazySeq(null,((function (row_variables,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data){
return (function (){var s__29129__$1 = s__29129;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29129__$1);if(temp__4126__auto____$1)
{var s__29129__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29129__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29129__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29131 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29130 = (0);while(true){
if((i__29130 < size__4376__auto__))
{var map__29136 = cljs.core._nth.call(null,c__4375__auto__,i__29130);var map__29136__$1 = ((cljs.core.seq_QMARK_.call(null,map__29136))?cljs.core.apply.call(null,cljs.core.hash_map,map__29136):map__29136);var render_fn = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29131,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29137 = temp__4126__auto____$2;var map__29137__$1 = ((cljs.core.seq_QMARK_.call(null,map__29137))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);var ch_key = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29142 = (i__29130 + (1));
i__29130 = G__29142;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29131),iter__29128.call(null,cljs.core.chunk_rest.call(null,s__29129__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29131),null);
}
} else
{var map__29138 = cljs.core.first.call(null,s__29129__$2);var map__29138__$1 = ((cljs.core.seq_QMARK_.call(null,map__29138))?cljs.core.apply.call(null,cljs.core.hash_map,map__29138):map__29138);var render_fn = cljs.core.get.call(null,map__29138__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29138__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29138__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29138__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29139 = temp__4126__auto____$2;var map__29139__$1 = ((cljs.core.seq_QMARK_.call(null,map__29139))?cljs.core.apply.call(null,cljs.core.hash_map,map__29139):map__29139);var ch_key = cljs.core.get.call(null,map__29139__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29139__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29139__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29139__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29128.call(null,cljs.core.rest.call(null,s__29129__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data))
,null,null));
});})(row_variables,s__29089__$2,temp__4126__auto__,belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29088.call(null,cljs.core.rest.call(null,s__29089__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data))
,null,null));
});})(belongs_to_vars,map__29084,map__29084__$1,map__29085,map__29085__$1,controls,map__29086,map__29086__$1,summary_stats,variables,map__29087,map__29087__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29143,owner){var map__29186 = p__29143;var map__29186__$1 = ((cljs.core.seq_QMARK_.call(null,map__29186))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186):map__29186);var data = map__29186__$1;var filt = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29187 = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29187__$1 = ((cljs.core.seq_QMARK_.call(null,map__29187))?cljs.core.apply.call(null,cljs.core.hash_map,map__29187):map__29187);var map_report = map__29187__$1;var map__29188 = cljs.core.get.call(null,map__29187__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29188__$1 = ((cljs.core.seq_QMARK_.call(null,map__29188))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);var controls = map__29188__$1;var map__29189 = cljs.core.get.call(null,map__29188__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29189__$1 = ((cljs.core.seq_QMARK_.call(null,map__29189))?cljs.core.apply.call(null,cljs.core.hash_map,map__29189):map__29189);var summary_stats = map__29189__$1;var variables = cljs.core.get.call(null,map__29189__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29189__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29189__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29187__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29190 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29190 = (function (filt,index_type,map__29186,map__29189,owner,data,index,map__29188,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29187,p__29143,meta29191){
this.filt = filt;
this.index_type = index_type;
this.map__29186 = map__29186;
this.map__29189 = map__29189;
this.owner = owner;
this.data = data;
this.index = index;
this.map__29188 = map__29188;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__29187 = map__29187;
this.p__29143 = p__29143;
this.meta29191 = meta29191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29190.cljs$lang$type = true;
clustermap.components.map_report.t29190.cljs$lang$ctorStr = "clustermap.components.map-report/t29190";
clustermap.components.map_report.t29190.cljs$lang$ctorPrWriter = ((function (map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29190");
});})(map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29190.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29190.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29193,p__29194){var self__ = this;
var map__29195 = p__29193;var map__29195__$1 = ((cljs.core.seq_QMARK_.call(null,map__29195))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);var next_data = map__29195__$1;var next_filt = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29196 = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29196__$1 = ((cljs.core.seq_QMARK_.call(null,map__29196))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);var next_map_report = map__29196__$1;var map__29197 = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29197__$1 = ((cljs.core.seq_QMARK_.call(null,map__29197))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);var next_controls = map__29197__$1;var map__29198 = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29198__$1 = ((cljs.core.seq_QMARK_.call(null,map__29198))?cljs.core.apply.call(null,cljs.core.hash_map,map__29198):map__29198);var next_summary_stats = map__29198__$1;var next_index = cljs.core.get.call(null,map__29198__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29198__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29198__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29199 = p__29194;var map__29199__$1 = ((cljs.core.seq_QMARK_.call(null,map__29199))?cljs.core.apply.call(null,cljs.core.hash_map,map__29199):map__29199);var fetch_data_fn = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,map__29195,map__29195__$1,next_data,next_filt,map__29196,map__29196__$1,next_map_report,map__29197,map__29197__$1,next_controls,map__29198,map__29198__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29199,map__29199__$1,fetch_data_fn,map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,map__29195,map__29195__$1,next_data,next_filt,map__29196,map__29196__$1,next_map_report,map__29197,map__29197__$1,next_controls,map__29198,map__29198__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29199,map__29199__$1,fetch_data_fn,map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29213){var state_val_29214 = (state_29213[(1)]);if((state_val_29214 === (5)))
{var inst_29211 = (state_29213[(2)]);var state_29213__$1 = state_29213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else
{if((state_val_29214 === (4)))
{var state_29213__$1 = state_29213;var statearr_29215_29228 = state_29213__$1;(statearr_29215_29228[(2)] = null);
(statearr_29215_29228[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29214 === (3)))
{var inst_29203 = (state_29213[(7)]);var inst_29205 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29206 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29207 = (new cljs.core.PersistentVector(null,1,(5),inst_29205,inst_29206,null));var inst_29208 = om.core.update_BANG_.call(null,self__.map_report,inst_29207,inst_29203);var state_29213__$1 = state_29213;var statearr_29216_29229 = state_29213__$1;(statearr_29216_29229[(2)] = inst_29208);
(statearr_29216_29229[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29214 === (2)))
{var inst_29203 = (state_29213[(7)]);var inst_29203__$1 = (state_29213[(2)]);var state_29213__$1 = (function (){var statearr_29217 = state_29213;(statearr_29217[(7)] = inst_29203__$1);
return statearr_29217;
})();if(cljs.core.truth_(inst_29203__$1))
{var statearr_29218_29230 = state_29213__$1;(statearr_29218_29230[(1)] = (3));
} else
{var statearr_29219_29231 = state_29213__$1;(statearr_29219_29231[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29214 === (1)))
{var inst_29200 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29201 = fetch_data_fn.call(null,next_index,next_index_type,inst_29200,next_filt,null);var state_29213__$1 = state_29213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(2),inst_29201);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,___$1,map__29195,map__29195__$1,next_data,next_filt,map__29196,map__29196__$1,next_map_report,map__29197,map__29197__$1,next_controls,map__29198,map__29198__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29199,map__29199__$1,fetch_data_fn,map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,map__29195,map__29195__$1,next_data,next_filt,map__29196,map__29196__$1,next_map_report,map__29197,map__29197__$1,next_controls,map__29198,map__29198__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29199,map__29199__$1,fetch_data_fn,map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_29223 = [null,null,null,null,null,null,null,null];(statearr_29223[(0)] = state_machine__11099__auto__);
(statearr_29223[(1)] = (1));
return statearr_29223;
});
var state_machine__11099__auto____1 = (function (state_29213){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_29213);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e29224){if((e29224 instanceof Object))
{var ex__11102__auto__ = e29224;var statearr_29225_29232 = state_29213;(statearr_29225_29232[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29233 = state_29213;
state_29213 = G__29233;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,map__29195,map__29195__$1,next_data,next_filt,map__29196,map__29196__$1,next_map_report,map__29197,map__29197__$1,next_controls,map__29198,map__29198__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29199,map__29199__$1,fetch_data_fn,map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__11156__auto__ = (function (){var statearr_29226 = f__11155__auto__.call(null);(statearr_29226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_29226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,map__29195,map__29195__$1,next_data,next_filt,map__29196,map__29196__$1,next_map_report,map__29197,map__29197__$1,next_controls,map__29198,map__29198__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29199,map__29199__$1,fetch_data_fn,map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__11154__auto__;
} else
{return null;
}
});})(map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29190.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29190.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29227 = om.core.get_shared.call(null,self__.owner);var map__29227__$1 = ((cljs.core.seq_QMARK_.call(null,map__29227))?cljs.core.apply.call(null,cljs.core.hash_map,map__29227):map__29227);var comm = cljs.core.get.call(null,map__29227__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29190.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29190.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29192){var self__ = this;
var _29192__$1 = this;return self__.meta29191;
});})(map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29192,meta29191__$1){var self__ = this;
var _29192__$1 = this;return (new clustermap.components.map_report.t29190(self__.filt,self__.index_type,self__.map__29186,self__.map__29189,self__.owner,self__.data,self__.index,self__.map__29188,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__29187,self__.p__29143,meta29191__$1));
});})(map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29190 = ((function (map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29190(filt__$1,index_type__$1,map__29186__$2,map__29189__$2,owner__$1,data__$1,index__$1,map__29188__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29187__$2,p__29143__$1,meta29191){return (new clustermap.components.map_report.t29190(filt__$1,index_type__$1,map__29186__$2,map__29189__$2,owner__$1,data__$1,index__$1,map__29188__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29187__$2,p__29143__$1,meta29191));
});})(map__29186,map__29186__$1,data,filt,map__29187,map__29187__$1,map_report,map__29188,map__29188__$1,controls,map__29189,map__29189__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29190(filt,index_type,map__29186__$1,map__29189__$1,owner,data,index,map__29188__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29187__$1,p__29143,null));
});
