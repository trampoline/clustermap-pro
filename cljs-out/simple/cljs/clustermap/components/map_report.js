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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29311,comm,p__29312){var map__29369 = p__29311;var map__29369__$1 = ((cljs.core.seq_QMARK_.call(null,map__29369))?cljs.core.apply.call(null,cljs.core.hash_map,map__29369):map__29369);var map__29370 = cljs.core.get.call(null,map__29369__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29370__$1 = ((cljs.core.seq_QMARK_.call(null,map__29370))?cljs.core.apply.call(null,cljs.core.hash_map,map__29370):map__29370);var controls = map__29370__$1;var map__29371 = cljs.core.get.call(null,map__29370__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29371__$1 = ((cljs.core.seq_QMARK_.call(null,map__29371))?cljs.core.apply.call(null,cljs.core.hash_map,map__29371):map__29371);var summary_stats = map__29371__$1;var variables = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29372 = p__29312;var map__29372__$1 = ((cljs.core.seq_QMARK_.call(null,map__29372))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);var data = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data){
return (function iter__29373(s__29374){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data){
return (function (){var s__29374__$1 = s__29374;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29374__$1);if(temp__4126__auto__)
{var s__29374__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29374__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29374__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29376 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29375 = (0);while(true){
if((i__29375 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29375);cljs.core.chunk_append.call(null,b__29376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29375,row_variables,c__4375__auto__,size__4376__auto__,b__29376,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data){
return (function iter__29401(s__29402){return (new cljs.core.LazySeq(null,((function (i__29375,row_variables,c__4375__auto__,size__4376__auto__,b__29376,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data){
return (function (){var s__29402__$1 = s__29402;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29402__$1);if(temp__4126__auto____$1)
{var s__29402__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29402__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29402__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29404 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29403 = (0);while(true){
if((i__29403 < size__4376__auto____$1))
{var map__29409 = cljs.core._nth.call(null,c__4375__auto____$1,i__29403);var map__29409__$1 = ((cljs.core.seq_QMARK_.call(null,map__29409))?cljs.core.apply.call(null,cljs.core.hash_map,map__29409):map__29409);var render_fn = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29404,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29410 = temp__4126__auto____$2;var map__29410__$1 = ((cljs.core.seq_QMARK_.call(null,map__29410))?cljs.core.apply.call(null,cljs.core.hash_map,map__29410):map__29410);var ch_key = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29425 = (i__29403 + (1));
i__29403 = G__29425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29404),iter__29401.call(null,cljs.core.chunk_rest.call(null,s__29402__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29404),null);
}
} else
{var map__29411 = cljs.core.first.call(null,s__29402__$2);var map__29411__$1 = ((cljs.core.seq_QMARK_.call(null,map__29411))?cljs.core.apply.call(null,cljs.core.hash_map,map__29411):map__29411);var render_fn = cljs.core.get.call(null,map__29411__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29411__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29411__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29411__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29412 = temp__4126__auto____$2;var map__29412__$1 = ((cljs.core.seq_QMARK_.call(null,map__29412))?cljs.core.apply.call(null,cljs.core.hash_map,map__29412):map__29412);var ch_key = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29401.call(null,cljs.core.rest.call(null,s__29402__$2)));
}
} else
{return null;
}
break;
}
});})(i__29375,row_variables,c__4375__auto__,size__4376__auto__,b__29376,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data))
,null,null));
});})(i__29375,row_variables,c__4375__auto__,size__4376__auto__,b__29376,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29426 = (i__29375 + (1));
i__29375 = G__29426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29376),iter__29373.call(null,cljs.core.chunk_rest.call(null,s__29374__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29376),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29374__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data){
return (function iter__29413(s__29414){return (new cljs.core.LazySeq(null,((function (row_variables,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data){
return (function (){var s__29414__$1 = s__29414;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29414__$1);if(temp__4126__auto____$1)
{var s__29414__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29414__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29414__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29416 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29415 = (0);while(true){
if((i__29415 < size__4376__auto__))
{var map__29421 = cljs.core._nth.call(null,c__4375__auto__,i__29415);var map__29421__$1 = ((cljs.core.seq_QMARK_.call(null,map__29421))?cljs.core.apply.call(null,cljs.core.hash_map,map__29421):map__29421);var render_fn = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29416,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29422 = temp__4126__auto____$2;var map__29422__$1 = ((cljs.core.seq_QMARK_.call(null,map__29422))?cljs.core.apply.call(null,cljs.core.hash_map,map__29422):map__29422);var ch_key = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29427 = (i__29415 + (1));
i__29415 = G__29427;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29416),iter__29413.call(null,cljs.core.chunk_rest.call(null,s__29414__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29416),null);
}
} else
{var map__29423 = cljs.core.first.call(null,s__29414__$2);var map__29423__$1 = ((cljs.core.seq_QMARK_.call(null,map__29423))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);var render_fn = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29424 = temp__4126__auto____$2;var map__29424__$1 = ((cljs.core.seq_QMARK_.call(null,map__29424))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);var ch_key = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29413.call(null,cljs.core.rest.call(null,s__29414__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data))
,null,null));
});})(row_variables,s__29374__$2,temp__4126__auto__,belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29373.call(null,cljs.core.rest.call(null,s__29374__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data))
,null,null));
});})(belongs_to_vars,map__29369,map__29369__$1,map__29370,map__29370__$1,controls,map__29371,map__29371__$1,summary_stats,variables,map__29372,map__29372__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29428,owner){var map__29471 = p__29428;var map__29471__$1 = ((cljs.core.seq_QMARK_.call(null,map__29471))?cljs.core.apply.call(null,cljs.core.hash_map,map__29471):map__29471);var data = map__29471__$1;var filt = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29472 = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29472__$1 = ((cljs.core.seq_QMARK_.call(null,map__29472))?cljs.core.apply.call(null,cljs.core.hash_map,map__29472):map__29472);var map_report = map__29472__$1;var map__29473 = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29473__$1 = ((cljs.core.seq_QMARK_.call(null,map__29473))?cljs.core.apply.call(null,cljs.core.hash_map,map__29473):map__29473);var controls = map__29473__$1;var map__29474 = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29474__$1 = ((cljs.core.seq_QMARK_.call(null,map__29474))?cljs.core.apply.call(null,cljs.core.hash_map,map__29474):map__29474);var summary_stats = map__29474__$1;var variables = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29475 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29475 = (function (filt,index_type,owner,map__29474,data,p__29428,index,map__29471,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__29472,variables,map__29473,meta29476){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__29474 = map__29474;
this.data = data;
this.p__29428 = p__29428;
this.index = index;
this.map__29471 = map__29471;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__29472 = map__29472;
this.variables = variables;
this.map__29473 = map__29473;
this.meta29476 = meta29476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29475.cljs$lang$type = true;
clustermap.components.map_report.t29475.cljs$lang$ctorStr = "clustermap.components.map-report/t29475";
clustermap.components.map_report.t29475.cljs$lang$ctorPrWriter = ((function (map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29475");
});})(map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29475.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29475.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29478,p__29479){var self__ = this;
var map__29480 = p__29478;var map__29480__$1 = ((cljs.core.seq_QMARK_.call(null,map__29480))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480):map__29480);var next_data = map__29480__$1;var next_filt = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29481 = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29481__$1 = ((cljs.core.seq_QMARK_.call(null,map__29481))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481):map__29481);var next_map_report = map__29481__$1;var map__29482 = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29482__$1 = ((cljs.core.seq_QMARK_.call(null,map__29482))?cljs.core.apply.call(null,cljs.core.hash_map,map__29482):map__29482);var next_controls = map__29482__$1;var map__29483 = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29483__$1 = ((cljs.core.seq_QMARK_.call(null,map__29483))?cljs.core.apply.call(null,cljs.core.hash_map,map__29483):map__29483);var next_summary_stats = map__29483__$1;var next_index = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29484 = p__29479;var map__29484__$1 = ((cljs.core.seq_QMARK_.call(null,map__29484))?cljs.core.apply.call(null,cljs.core.hash_map,map__29484):map__29484);var fetch_data_fn = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29480,map__29480__$1,next_data,next_filt,map__29481,map__29481__$1,next_map_report,map__29482,map__29482__$1,next_controls,map__29483,map__29483__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29484,map__29484__$1,fetch_data_fn,map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29480,map__29480__$1,next_data,next_filt,map__29481,map__29481__$1,next_map_report,map__29482,map__29482__$1,next_controls,map__29483,map__29483__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29484,map__29484__$1,fetch_data_fn,map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29498){var state_val_29499 = (state_29498[(1)]);if((state_val_29499 === (5)))
{var inst_29496 = (state_29498[(2)]);var state_29498__$1 = state_29498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29498__$1,inst_29496);
} else
{if((state_val_29499 === (4)))
{var state_29498__$1 = state_29498;var statearr_29500_29513 = state_29498__$1;(statearr_29500_29513[(2)] = null);
(statearr_29500_29513[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29499 === (3)))
{var inst_29488 = (state_29498[(7)]);var inst_29490 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29491 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29492 = (new cljs.core.PersistentVector(null,1,(5),inst_29490,inst_29491,null));var inst_29493 = om.core.update_BANG_.call(null,self__.map_report,inst_29492,inst_29488);var state_29498__$1 = state_29498;var statearr_29501_29514 = state_29498__$1;(statearr_29501_29514[(2)] = inst_29493);
(statearr_29501_29514[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29499 === (2)))
{var inst_29488 = (state_29498[(7)]);var inst_29488__$1 = (state_29498[(2)]);var state_29498__$1 = (function (){var statearr_29502 = state_29498;(statearr_29502[(7)] = inst_29488__$1);
return statearr_29502;
})();if(cljs.core.truth_(inst_29488__$1))
{var statearr_29503_29515 = state_29498__$1;(statearr_29503_29515[(1)] = (3));
} else
{var statearr_29504_29516 = state_29498__$1;(statearr_29504_29516[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29499 === (1)))
{var inst_29485 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29486 = fetch_data_fn.call(null,next_index,next_index_type,inst_29485,next_filt,null);var state_29498__$1 = state_29498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29498__$1,(2),inst_29486);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29480,map__29480__$1,next_data,next_filt,map__29481,map__29481__$1,next_map_report,map__29482,map__29482__$1,next_controls,map__29483,map__29483__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29484,map__29484__$1,fetch_data_fn,map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29480,map__29480__$1,next_data,next_filt,map__29481,map__29481__$1,next_map_report,map__29482,map__29482__$1,next_controls,map__29483,map__29483__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29484,map__29484__$1,fetch_data_fn,map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29508 = [null,null,null,null,null,null,null,null];(statearr_29508[(0)] = state_machine__9111__auto__);
(statearr_29508[(1)] = (1));
return statearr_29508;
});
var state_machine__9111__auto____1 = (function (state_29498){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29498);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29509){if((e29509 instanceof Object))
{var ex__9114__auto__ = e29509;var statearr_29510_29517 = state_29498;(statearr_29510_29517[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29509;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29518 = state_29498;
state_29498 = G__29518;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29498){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29480,map__29480__$1,next_data,next_filt,map__29481,map__29481__$1,next_map_report,map__29482,map__29482__$1,next_controls,map__29483,map__29483__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29484,map__29484__$1,fetch_data_fn,map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29511 = f__9126__auto__.call(null);(statearr_29511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29480,map__29480__$1,next_data,next_filt,map__29481,map__29481__$1,next_map_report,map__29482,map__29482__$1,next_controls,map__29483,map__29483__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29484,map__29484__$1,fetch_data_fn,map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29475.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29475.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29512 = om.core.get_shared.call(null,self__.owner);var map__29512__$1 = ((cljs.core.seq_QMARK_.call(null,map__29512))?cljs.core.apply.call(null,cljs.core.hash_map,map__29512):map__29512);var comm = cljs.core.get.call(null,map__29512__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29475.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29475.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29477){var self__ = this;
var _29477__$1 = this;return self__.meta29476;
});})(map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29477,meta29476__$1){var self__ = this;
var _29477__$1 = this;return (new clustermap.components.map_report.t29475(self__.filt,self__.index_type,self__.owner,self__.map__29474,self__.data,self__.p__29428,self__.index,self__.map__29471,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__29472,self__.variables,self__.map__29473,meta29476__$1));
});})(map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29475 = ((function (map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29475(filt__$1,index_type__$1,owner__$1,map__29474__$2,data__$1,p__29428__$1,index__$1,map__29471__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29472__$2,variables__$1,map__29473__$2,meta29476){return (new clustermap.components.map_report.t29475(filt__$1,index_type__$1,owner__$1,map__29474__$2,data__$1,p__29428__$1,index__$1,map__29471__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29472__$2,variables__$1,map__29473__$2,meta29476));
});})(map__29471,map__29471__$1,data,filt,map__29472,map__29472__$1,map_report,map__29473,map__29473__$1,controls,map__29474,map__29474__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29475(filt,index_type,owner,map__29474__$1,data,p__29428,index,map__29471__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__29472__$1,variables,map__29473__$1,null));
});
