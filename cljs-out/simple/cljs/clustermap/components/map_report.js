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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29326,comm,p__29327){var map__29384 = p__29326;var map__29384__$1 = ((cljs.core.seq_QMARK_.call(null,map__29384))?cljs.core.apply.call(null,cljs.core.hash_map,map__29384):map__29384);var map__29385 = cljs.core.get.call(null,map__29384__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29385__$1 = ((cljs.core.seq_QMARK_.call(null,map__29385))?cljs.core.apply.call(null,cljs.core.hash_map,map__29385):map__29385);var controls = map__29385__$1;var map__29386 = cljs.core.get.call(null,map__29385__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29386__$1 = ((cljs.core.seq_QMARK_.call(null,map__29386))?cljs.core.apply.call(null,cljs.core.hash_map,map__29386):map__29386);var summary_stats = map__29386__$1;var variables = cljs.core.get.call(null,map__29386__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29387 = p__29327;var map__29387__$1 = ((cljs.core.seq_QMARK_.call(null,map__29387))?cljs.core.apply.call(null,cljs.core.hash_map,map__29387):map__29387);var data = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data){
return (function iter__29388(s__29389){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data){
return (function (){var s__29389__$1 = s__29389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29389__$1);if(temp__4126__auto__)
{var s__29389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29389__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29389__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29391 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29390 = (0);while(true){
if((i__29390 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29390);cljs.core.chunk_append.call(null,b__29391,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29390,row_variables,c__4375__auto__,size__4376__auto__,b__29391,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data){
return (function iter__29416(s__29417){return (new cljs.core.LazySeq(null,((function (i__29390,row_variables,c__4375__auto__,size__4376__auto__,b__29391,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data){
return (function (){var s__29417__$1 = s__29417;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29417__$1);if(temp__4126__auto____$1)
{var s__29417__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29417__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29417__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29419 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29418 = (0);while(true){
if((i__29418 < size__4376__auto____$1))
{var map__29424 = cljs.core._nth.call(null,c__4375__auto____$1,i__29418);var map__29424__$1 = ((cljs.core.seq_QMARK_.call(null,map__29424))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);var render_fn = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29419,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29425 = temp__4126__auto____$2;var map__29425__$1 = ((cljs.core.seq_QMARK_.call(null,map__29425))?cljs.core.apply.call(null,cljs.core.hash_map,map__29425):map__29425);var ch_key = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29440 = (i__29418 + (1));
i__29418 = G__29440;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29419),iter__29416.call(null,cljs.core.chunk_rest.call(null,s__29417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29419),null);
}
} else
{var map__29426 = cljs.core.first.call(null,s__29417__$2);var map__29426__$1 = ((cljs.core.seq_QMARK_.call(null,map__29426))?cljs.core.apply.call(null,cljs.core.hash_map,map__29426):map__29426);var render_fn = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29427 = temp__4126__auto____$2;var map__29427__$1 = ((cljs.core.seq_QMARK_.call(null,map__29427))?cljs.core.apply.call(null,cljs.core.hash_map,map__29427):map__29427);var ch_key = cljs.core.get.call(null,map__29427__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29427__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29427__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29427__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29416.call(null,cljs.core.rest.call(null,s__29417__$2)));
}
} else
{return null;
}
break;
}
});})(i__29390,row_variables,c__4375__auto__,size__4376__auto__,b__29391,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data))
,null,null));
});})(i__29390,row_variables,c__4375__auto__,size__4376__auto__,b__29391,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29441 = (i__29390 + (1));
i__29390 = G__29441;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29391),iter__29388.call(null,cljs.core.chunk_rest.call(null,s__29389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29391),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29389__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data){
return (function iter__29428(s__29429){return (new cljs.core.LazySeq(null,((function (row_variables,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data){
return (function (){var s__29429__$1 = s__29429;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29429__$1);if(temp__4126__auto____$1)
{var s__29429__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29429__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29429__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29431 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29430 = (0);while(true){
if((i__29430 < size__4376__auto__))
{var map__29436 = cljs.core._nth.call(null,c__4375__auto__,i__29430);var map__29436__$1 = ((cljs.core.seq_QMARK_.call(null,map__29436))?cljs.core.apply.call(null,cljs.core.hash_map,map__29436):map__29436);var render_fn = cljs.core.get.call(null,map__29436__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29436__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29436__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29436__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29431,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29437 = temp__4126__auto____$2;var map__29437__$1 = ((cljs.core.seq_QMARK_.call(null,map__29437))?cljs.core.apply.call(null,cljs.core.hash_map,map__29437):map__29437);var ch_key = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29442 = (i__29430 + (1));
i__29430 = G__29442;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29431),iter__29428.call(null,cljs.core.chunk_rest.call(null,s__29429__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29431),null);
}
} else
{var map__29438 = cljs.core.first.call(null,s__29429__$2);var map__29438__$1 = ((cljs.core.seq_QMARK_.call(null,map__29438))?cljs.core.apply.call(null,cljs.core.hash_map,map__29438):map__29438);var render_fn = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29439 = temp__4126__auto____$2;var map__29439__$1 = ((cljs.core.seq_QMARK_.call(null,map__29439))?cljs.core.apply.call(null,cljs.core.hash_map,map__29439):map__29439);var ch_key = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29428.call(null,cljs.core.rest.call(null,s__29429__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data))
,null,null));
});})(row_variables,s__29389__$2,temp__4126__auto__,belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29388.call(null,cljs.core.rest.call(null,s__29389__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data))
,null,null));
});})(belongs_to_vars,map__29384,map__29384__$1,map__29385,map__29385__$1,controls,map__29386,map__29386__$1,summary_stats,variables,map__29387,map__29387__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29443,owner){var map__29486 = p__29443;var map__29486__$1 = ((cljs.core.seq_QMARK_.call(null,map__29486))?cljs.core.apply.call(null,cljs.core.hash_map,map__29486):map__29486);var data = map__29486__$1;var filt = cljs.core.get.call(null,map__29486__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29487 = cljs.core.get.call(null,map__29486__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29487__$1 = ((cljs.core.seq_QMARK_.call(null,map__29487))?cljs.core.apply.call(null,cljs.core.hash_map,map__29487):map__29487);var map_report = map__29487__$1;var map__29488 = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29488__$1 = ((cljs.core.seq_QMARK_.call(null,map__29488))?cljs.core.apply.call(null,cljs.core.hash_map,map__29488):map__29488);var controls = map__29488__$1;var map__29489 = cljs.core.get.call(null,map__29488__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29489__$1 = ((cljs.core.seq_QMARK_.call(null,map__29489))?cljs.core.apply.call(null,cljs.core.hash_map,map__29489):map__29489);var summary_stats = map__29489__$1;var variables = cljs.core.get.call(null,map__29489__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29489__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29489__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29490 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29490 = (function (filt,index_type,owner,data,index,map__29489,p__29443,map__29486,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29488,map__29487,meta29491){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.index = index;
this.map__29489 = map__29489;
this.p__29443 = p__29443;
this.map__29486 = map__29486;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__29488 = map__29488;
this.map__29487 = map__29487;
this.meta29491 = meta29491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29490.cljs$lang$type = true;
clustermap.components.map_report.t29490.cljs$lang$ctorStr = "clustermap.components.map-report/t29490";
clustermap.components.map_report.t29490.cljs$lang$ctorPrWriter = ((function (map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29490");
});})(map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29490.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29490.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29493,p__29494){var self__ = this;
var map__29495 = p__29493;var map__29495__$1 = ((cljs.core.seq_QMARK_.call(null,map__29495))?cljs.core.apply.call(null,cljs.core.hash_map,map__29495):map__29495);var next_data = map__29495__$1;var next_filt = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29496 = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29496__$1 = ((cljs.core.seq_QMARK_.call(null,map__29496))?cljs.core.apply.call(null,cljs.core.hash_map,map__29496):map__29496);var next_map_report = map__29496__$1;var map__29497 = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29497__$1 = ((cljs.core.seq_QMARK_.call(null,map__29497))?cljs.core.apply.call(null,cljs.core.hash_map,map__29497):map__29497);var next_controls = map__29497__$1;var map__29498 = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29498__$1 = ((cljs.core.seq_QMARK_.call(null,map__29498))?cljs.core.apply.call(null,cljs.core.hash_map,map__29498):map__29498);var next_summary_stats = map__29498__$1;var next_index = cljs.core.get.call(null,map__29498__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29498__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29498__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29499 = p__29494;var map__29499__$1 = ((cljs.core.seq_QMARK_.call(null,map__29499))?cljs.core.apply.call(null,cljs.core.hash_map,map__29499):map__29499);var fetch_data_fn = cljs.core.get.call(null,map__29499__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29495,map__29495__$1,next_data,next_filt,map__29496,map__29496__$1,next_map_report,map__29497,map__29497__$1,next_controls,map__29498,map__29498__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29499,map__29499__$1,fetch_data_fn,map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29495,map__29495__$1,next_data,next_filt,map__29496,map__29496__$1,next_map_report,map__29497,map__29497__$1,next_controls,map__29498,map__29498__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29499,map__29499__$1,fetch_data_fn,map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29513){var state_val_29514 = (state_29513[(1)]);if((state_val_29514 === (5)))
{var inst_29511 = (state_29513[(2)]);var state_29513__$1 = state_29513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29513__$1,inst_29511);
} else
{if((state_val_29514 === (4)))
{var state_29513__$1 = state_29513;var statearr_29515_29528 = state_29513__$1;(statearr_29515_29528[(2)] = null);
(statearr_29515_29528[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29514 === (3)))
{var inst_29503 = (state_29513[(7)]);var inst_29505 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29506 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29507 = (new cljs.core.PersistentVector(null,1,(5),inst_29505,inst_29506,null));var inst_29508 = om.core.update_BANG_.call(null,self__.map_report,inst_29507,inst_29503);var state_29513__$1 = state_29513;var statearr_29516_29529 = state_29513__$1;(statearr_29516_29529[(2)] = inst_29508);
(statearr_29516_29529[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29514 === (2)))
{var inst_29503 = (state_29513[(7)]);var inst_29503__$1 = (state_29513[(2)]);var state_29513__$1 = (function (){var statearr_29517 = state_29513;(statearr_29517[(7)] = inst_29503__$1);
return statearr_29517;
})();if(cljs.core.truth_(inst_29503__$1))
{var statearr_29518_29530 = state_29513__$1;(statearr_29518_29530[(1)] = (3));
} else
{var statearr_29519_29531 = state_29513__$1;(statearr_29519_29531[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29514 === (1)))
{var inst_29500 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29501 = fetch_data_fn.call(null,next_index,next_index_type,inst_29500,next_filt,null);var state_29513__$1 = state_29513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29513__$1,(2),inst_29501);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29495,map__29495__$1,next_data,next_filt,map__29496,map__29496__$1,next_map_report,map__29497,map__29497__$1,next_controls,map__29498,map__29498__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29499,map__29499__$1,fetch_data_fn,map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29495,map__29495__$1,next_data,next_filt,map__29496,map__29496__$1,next_map_report,map__29497,map__29497__$1,next_controls,map__29498,map__29498__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29499,map__29499__$1,fetch_data_fn,map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29523 = [null,null,null,null,null,null,null,null];(statearr_29523[(0)] = state_machine__9111__auto__);
(statearr_29523[(1)] = (1));
return statearr_29523;
});
var state_machine__9111__auto____1 = (function (state_29513){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29513);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29524){if((e29524 instanceof Object))
{var ex__9114__auto__ = e29524;var statearr_29525_29532 = state_29513;(statearr_29525_29532[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29524;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29533 = state_29513;
state_29513 = G__29533;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29513){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29495,map__29495__$1,next_data,next_filt,map__29496,map__29496__$1,next_map_report,map__29497,map__29497__$1,next_controls,map__29498,map__29498__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29499,map__29499__$1,fetch_data_fn,map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29526 = f__9126__auto__.call(null);(statearr_29526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29495,map__29495__$1,next_data,next_filt,map__29496,map__29496__$1,next_map_report,map__29497,map__29497__$1,next_controls,map__29498,map__29498__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29499,map__29499__$1,fetch_data_fn,map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29490.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29490.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29527 = om.core.get_shared.call(null,self__.owner);var map__29527__$1 = ((cljs.core.seq_QMARK_.call(null,map__29527))?cljs.core.apply.call(null,cljs.core.hash_map,map__29527):map__29527);var comm = cljs.core.get.call(null,map__29527__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29490.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29490.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29492){var self__ = this;
var _29492__$1 = this;return self__.meta29491;
});})(map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29492,meta29491__$1){var self__ = this;
var _29492__$1 = this;return (new clustermap.components.map_report.t29490(self__.filt,self__.index_type,self__.owner,self__.data,self__.index,self__.map__29489,self__.p__29443,self__.map__29486,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__29488,self__.map__29487,meta29491__$1));
});})(map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29490 = ((function (map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29490(filt__$1,index_type__$1,owner__$1,data__$1,index__$1,map__29489__$2,p__29443__$1,map__29486__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29488__$2,map__29487__$2,meta29491){return (new clustermap.components.map_report.t29490(filt__$1,index_type__$1,owner__$1,data__$1,index__$1,map__29489__$2,p__29443__$1,map__29486__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29488__$2,map__29487__$2,meta29491));
});})(map__29486,map__29486__$1,data,filt,map__29487,map__29487__$1,map_report,map__29488,map__29488__$1,controls,map__29489,map__29489__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29490(filt,index_type,owner,data,index,map__29489__$1,p__29443,map__29486__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29488__$1,map__29487__$1,null));
});
