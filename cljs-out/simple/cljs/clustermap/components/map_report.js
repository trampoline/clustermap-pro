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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29463,comm,p__29464){var map__29521 = p__29463;var map__29521__$1 = ((cljs.core.seq_QMARK_.call(null,map__29521))?cljs.core.apply.call(null,cljs.core.hash_map,map__29521):map__29521);var map__29522 = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29522__$1 = ((cljs.core.seq_QMARK_.call(null,map__29522))?cljs.core.apply.call(null,cljs.core.hash_map,map__29522):map__29522);var controls = map__29522__$1;var map__29523 = cljs.core.get.call(null,map__29522__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29523__$1 = ((cljs.core.seq_QMARK_.call(null,map__29523))?cljs.core.apply.call(null,cljs.core.hash_map,map__29523):map__29523);var summary_stats = map__29523__$1;var variables = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29524 = p__29464;var map__29524__$1 = ((cljs.core.seq_QMARK_.call(null,map__29524))?cljs.core.apply.call(null,cljs.core.hash_map,map__29524):map__29524);var data = cljs.core.get.call(null,map__29524__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data){
return (function iter__29525(s__29526){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data){
return (function (){var s__29526__$1 = s__29526;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29526__$1);if(temp__4126__auto__)
{var s__29526__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29526__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29526__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29528 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29527 = (0);while(true){
if((i__29527 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29527);cljs.core.chunk_append.call(null,b__29528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29527,row_variables,c__4375__auto__,size__4376__auto__,b__29528,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data){
return (function iter__29553(s__29554){return (new cljs.core.LazySeq(null,((function (i__29527,row_variables,c__4375__auto__,size__4376__auto__,b__29528,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data){
return (function (){var s__29554__$1 = s__29554;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29554__$1);if(temp__4126__auto____$1)
{var s__29554__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29554__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29554__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29556 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29555 = (0);while(true){
if((i__29555 < size__4376__auto____$1))
{var map__29561 = cljs.core._nth.call(null,c__4375__auto____$1,i__29555);var map__29561__$1 = ((cljs.core.seq_QMARK_.call(null,map__29561))?cljs.core.apply.call(null,cljs.core.hash_map,map__29561):map__29561);var render_fn = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29556,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29562 = temp__4126__auto____$2;var map__29562__$1 = ((cljs.core.seq_QMARK_.call(null,map__29562))?cljs.core.apply.call(null,cljs.core.hash_map,map__29562):map__29562);var ch_key = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29577 = (i__29555 + (1));
i__29555 = G__29577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29556),iter__29553.call(null,cljs.core.chunk_rest.call(null,s__29554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29556),null);
}
} else
{var map__29563 = cljs.core.first.call(null,s__29554__$2);var map__29563__$1 = ((cljs.core.seq_QMARK_.call(null,map__29563))?cljs.core.apply.call(null,cljs.core.hash_map,map__29563):map__29563);var render_fn = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29563__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29564 = temp__4126__auto____$2;var map__29564__$1 = ((cljs.core.seq_QMARK_.call(null,map__29564))?cljs.core.apply.call(null,cljs.core.hash_map,map__29564):map__29564);var ch_key = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29553.call(null,cljs.core.rest.call(null,s__29554__$2)));
}
} else
{return null;
}
break;
}
});})(i__29527,row_variables,c__4375__auto__,size__4376__auto__,b__29528,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data))
,null,null));
});})(i__29527,row_variables,c__4375__auto__,size__4376__auto__,b__29528,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29578 = (i__29527 + (1));
i__29527 = G__29578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29528),iter__29525.call(null,cljs.core.chunk_rest.call(null,s__29526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29528),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29526__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data){
return (function iter__29565(s__29566){return (new cljs.core.LazySeq(null,((function (row_variables,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data){
return (function (){var s__29566__$1 = s__29566;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29566__$1);if(temp__4126__auto____$1)
{var s__29566__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29566__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29566__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29568 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29567 = (0);while(true){
if((i__29567 < size__4376__auto__))
{var map__29573 = cljs.core._nth.call(null,c__4375__auto__,i__29567);var map__29573__$1 = ((cljs.core.seq_QMARK_.call(null,map__29573))?cljs.core.apply.call(null,cljs.core.hash_map,map__29573):map__29573);var render_fn = cljs.core.get.call(null,map__29573__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29573__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29573__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29573__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29568,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29574 = temp__4126__auto____$2;var map__29574__$1 = ((cljs.core.seq_QMARK_.call(null,map__29574))?cljs.core.apply.call(null,cljs.core.hash_map,map__29574):map__29574);var ch_key = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29579 = (i__29567 + (1));
i__29567 = G__29579;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29568),iter__29565.call(null,cljs.core.chunk_rest.call(null,s__29566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29568),null);
}
} else
{var map__29575 = cljs.core.first.call(null,s__29566__$2);var map__29575__$1 = ((cljs.core.seq_QMARK_.call(null,map__29575))?cljs.core.apply.call(null,cljs.core.hash_map,map__29575):map__29575);var render_fn = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29575__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29576 = temp__4126__auto____$2;var map__29576__$1 = ((cljs.core.seq_QMARK_.call(null,map__29576))?cljs.core.apply.call(null,cljs.core.hash_map,map__29576):map__29576);var ch_key = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29565.call(null,cljs.core.rest.call(null,s__29566__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data))
,null,null));
});})(row_variables,s__29526__$2,temp__4126__auto__,belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29525.call(null,cljs.core.rest.call(null,s__29526__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data))
,null,null));
});})(belongs_to_vars,map__29521,map__29521__$1,map__29522,map__29522__$1,controls,map__29523,map__29523__$1,summary_stats,variables,map__29524,map__29524__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29580,owner){var map__29623 = p__29580;var map__29623__$1 = ((cljs.core.seq_QMARK_.call(null,map__29623))?cljs.core.apply.call(null,cljs.core.hash_map,map__29623):map__29623);var data = map__29623__$1;var filt = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29624 = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29624__$1 = ((cljs.core.seq_QMARK_.call(null,map__29624))?cljs.core.apply.call(null,cljs.core.hash_map,map__29624):map__29624);var map_report = map__29624__$1;var map__29625 = cljs.core.get.call(null,map__29624__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29625__$1 = ((cljs.core.seq_QMARK_.call(null,map__29625))?cljs.core.apply.call(null,cljs.core.hash_map,map__29625):map__29625);var controls = map__29625__$1;var map__29626 = cljs.core.get.call(null,map__29625__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29626__$1 = ((cljs.core.seq_QMARK_.call(null,map__29626))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);var summary_stats = map__29626__$1;var variables = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29624__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29627 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29627 = (function (filt,index_type,owner,data,index,p__29580,map__29626,controls,summary_stats_data,map_report,summary_stats,map__29625,map_report_component,variables,map__29623,map__29624,meta29628){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.index = index;
this.p__29580 = p__29580;
this.map__29626 = map__29626;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map__29625 = map__29625;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__29623 = map__29623;
this.map__29624 = map__29624;
this.meta29628 = meta29628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29627.cljs$lang$type = true;
clustermap.components.map_report.t29627.cljs$lang$ctorStr = "clustermap.components.map-report/t29627";
clustermap.components.map_report.t29627.cljs$lang$ctorPrWriter = ((function (map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29627");
});})(map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29627.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29627.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29630,p__29631){var self__ = this;
var map__29632 = p__29630;var map__29632__$1 = ((cljs.core.seq_QMARK_.call(null,map__29632))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632):map__29632);var next_data = map__29632__$1;var next_filt = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29633 = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29633__$1 = ((cljs.core.seq_QMARK_.call(null,map__29633))?cljs.core.apply.call(null,cljs.core.hash_map,map__29633):map__29633);var next_map_report = map__29633__$1;var map__29634 = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29634__$1 = ((cljs.core.seq_QMARK_.call(null,map__29634))?cljs.core.apply.call(null,cljs.core.hash_map,map__29634):map__29634);var next_controls = map__29634__$1;var map__29635 = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29635__$1 = ((cljs.core.seq_QMARK_.call(null,map__29635))?cljs.core.apply.call(null,cljs.core.hash_map,map__29635):map__29635);var next_summary_stats = map__29635__$1;var next_index = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29636 = p__29631;var map__29636__$1 = ((cljs.core.seq_QMARK_.call(null,map__29636))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636):map__29636);var fetch_data_fn = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29632,map__29632__$1,next_data,next_filt,map__29633,map__29633__$1,next_map_report,map__29634,map__29634__$1,next_controls,map__29635,map__29635__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29636,map__29636__$1,fetch_data_fn,map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29632,map__29632__$1,next_data,next_filt,map__29633,map__29633__$1,next_map_report,map__29634,map__29634__$1,next_controls,map__29635,map__29635__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29636,map__29636__$1,fetch_data_fn,map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29650){var state_val_29651 = (state_29650[(1)]);if((state_val_29651 === (5)))
{var inst_29648 = (state_29650[(2)]);var state_29650__$1 = state_29650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29650__$1,inst_29648);
} else
{if((state_val_29651 === (4)))
{var state_29650__$1 = state_29650;var statearr_29652_29665 = state_29650__$1;(statearr_29652_29665[(2)] = null);
(statearr_29652_29665[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29651 === (3)))
{var inst_29640 = (state_29650[(7)]);var inst_29642 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29643 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29644 = (new cljs.core.PersistentVector(null,1,(5),inst_29642,inst_29643,null));var inst_29645 = om.core.update_BANG_.call(null,self__.map_report,inst_29644,inst_29640);var state_29650__$1 = state_29650;var statearr_29653_29666 = state_29650__$1;(statearr_29653_29666[(2)] = inst_29645);
(statearr_29653_29666[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29651 === (2)))
{var inst_29640 = (state_29650[(7)]);var inst_29640__$1 = (state_29650[(2)]);var state_29650__$1 = (function (){var statearr_29654 = state_29650;(statearr_29654[(7)] = inst_29640__$1);
return statearr_29654;
})();if(cljs.core.truth_(inst_29640__$1))
{var statearr_29655_29667 = state_29650__$1;(statearr_29655_29667[(1)] = (3));
} else
{var statearr_29656_29668 = state_29650__$1;(statearr_29656_29668[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29651 === (1)))
{var inst_29637 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29638 = fetch_data_fn.call(null,next_index,next_index_type,inst_29637,next_filt,null);var state_29650__$1 = state_29650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29650__$1,(2),inst_29638);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29632,map__29632__$1,next_data,next_filt,map__29633,map__29633__$1,next_map_report,map__29634,map__29634__$1,next_controls,map__29635,map__29635__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29636,map__29636__$1,fetch_data_fn,map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29632,map__29632__$1,next_data,next_filt,map__29633,map__29633__$1,next_map_report,map__29634,map__29634__$1,next_controls,map__29635,map__29635__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29636,map__29636__$1,fetch_data_fn,map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29660 = [null,null,null,null,null,null,null,null];(statearr_29660[(0)] = state_machine__9111__auto__);
(statearr_29660[(1)] = (1));
return statearr_29660;
});
var state_machine__9111__auto____1 = (function (state_29650){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29650);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29661){if((e29661 instanceof Object))
{var ex__9114__auto__ = e29661;var statearr_29662_29669 = state_29650;(statearr_29662_29669[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29650);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29661;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29670 = state_29650;
state_29650 = G__29670;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29650){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29632,map__29632__$1,next_data,next_filt,map__29633,map__29633__$1,next_map_report,map__29634,map__29634__$1,next_controls,map__29635,map__29635__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29636,map__29636__$1,fetch_data_fn,map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29663 = f__9126__auto__.call(null);(statearr_29663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29632,map__29632__$1,next_data,next_filt,map__29633,map__29633__$1,next_map_report,map__29634,map__29634__$1,next_controls,map__29635,map__29635__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29636,map__29636__$1,fetch_data_fn,map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29627.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29627.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29664 = om.core.get_shared.call(null,self__.owner);var map__29664__$1 = ((cljs.core.seq_QMARK_.call(null,map__29664))?cljs.core.apply.call(null,cljs.core.hash_map,map__29664):map__29664);var comm = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29627.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29627.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29629){var self__ = this;
var _29629__$1 = this;return self__.meta29628;
});})(map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29629,meta29628__$1){var self__ = this;
var _29629__$1 = this;return (new clustermap.components.map_report.t29627(self__.filt,self__.index_type,self__.owner,self__.data,self__.index,self__.p__29580,self__.map__29626,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map__29625,self__.map_report_component,self__.variables,self__.map__29623,self__.map__29624,meta29628__$1));
});})(map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29627 = ((function (map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29627(filt__$1,index_type__$1,owner__$1,data__$1,index__$1,p__29580__$1,map__29626__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map__29625__$2,map_report_component__$1,variables__$1,map__29623__$2,map__29624__$2,meta29628){return (new clustermap.components.map_report.t29627(filt__$1,index_type__$1,owner__$1,data__$1,index__$1,p__29580__$1,map__29626__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map__29625__$2,map_report_component__$1,variables__$1,map__29623__$2,map__29624__$2,meta29628));
});})(map__29623,map__29623__$1,data,filt,map__29624,map__29624__$1,map_report,map__29625,map__29625__$1,controls,map__29626,map__29626__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29627(filt,index_type,owner,data,index,p__29580,map__29626__$1,controls,summary_stats_data,map_report,summary_stats,map__29625__$1,map_report_component,variables,map__29623__$1,map__29624__$1,null));
});
