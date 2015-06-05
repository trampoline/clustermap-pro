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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__28664,comm,p__28665){var map__28722 = p__28664;var map__28722__$1 = ((cljs.core.seq_QMARK_.call(null,map__28722))?cljs.core.apply.call(null,cljs.core.hash_map,map__28722):map__28722);var map__28723 = cljs.core.get.call(null,map__28722__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28723__$1 = ((cljs.core.seq_QMARK_.call(null,map__28723))?cljs.core.apply.call(null,cljs.core.hash_map,map__28723):map__28723);var controls = map__28723__$1;var map__28724 = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28724__$1 = ((cljs.core.seq_QMARK_.call(null,map__28724))?cljs.core.apply.call(null,cljs.core.hash_map,map__28724):map__28724);var summary_stats = map__28724__$1;var variables = cljs.core.get.call(null,map__28724__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__28725 = p__28665;var map__28725__$1 = ((cljs.core.seq_QMARK_.call(null,map__28725))?cljs.core.apply.call(null,cljs.core.hash_map,map__28725):map__28725);var data = cljs.core.get.call(null,map__28725__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data){
return (function iter__28726(s__28727){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data){
return (function (){var s__28727__$1 = s__28727;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28727__$1);if(temp__4126__auto__)
{var s__28727__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28727__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28727__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28729 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28728 = (0);while(true){
if((i__28728 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__28728);cljs.core.chunk_append.call(null,b__28729,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__28728,row_variables,c__4375__auto__,size__4376__auto__,b__28729,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data){
return (function iter__28754(s__28755){return (new cljs.core.LazySeq(null,((function (i__28728,row_variables,c__4375__auto__,size__4376__auto__,b__28729,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data){
return (function (){var s__28755__$1 = s__28755;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28755__$1);if(temp__4126__auto____$1)
{var s__28755__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28755__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28755__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28757 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28756 = (0);while(true){
if((i__28756 < size__4376__auto____$1))
{var map__28762 = cljs.core._nth.call(null,c__4375__auto____$1,i__28756);var map__28762__$1 = ((cljs.core.seq_QMARK_.call(null,map__28762))?cljs.core.apply.call(null,cljs.core.hash_map,map__28762):map__28762);var render_fn = cljs.core.get.call(null,map__28762__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28762__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28762__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28762__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28757,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28763 = temp__4126__auto____$2;var map__28763__$1 = ((cljs.core.seq_QMARK_.call(null,map__28763))?cljs.core.apply.call(null,cljs.core.hash_map,map__28763):map__28763);var ch_key = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__28778 = (i__28756 + (1));
i__28756 = G__28778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28757),iter__28754.call(null,cljs.core.chunk_rest.call(null,s__28755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28757),null);
}
} else
{var map__28764 = cljs.core.first.call(null,s__28755__$2);var map__28764__$1 = ((cljs.core.seq_QMARK_.call(null,map__28764))?cljs.core.apply.call(null,cljs.core.hash_map,map__28764):map__28764);var render_fn = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28765 = temp__4126__auto____$2;var map__28765__$1 = ((cljs.core.seq_QMARK_.call(null,map__28765))?cljs.core.apply.call(null,cljs.core.hash_map,map__28765):map__28765);var ch_key = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__28754.call(null,cljs.core.rest.call(null,s__28755__$2)));
}
} else
{return null;
}
break;
}
});})(i__28728,row_variables,c__4375__auto__,size__4376__auto__,b__28729,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data))
,null,null));
});})(i__28728,row_variables,c__4375__auto__,size__4376__auto__,b__28729,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__28779 = (i__28728 + (1));
i__28728 = G__28779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28729),iter__28726.call(null,cljs.core.chunk_rest.call(null,s__28727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28729),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__28727__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data){
return (function iter__28766(s__28767){return (new cljs.core.LazySeq(null,((function (row_variables,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data){
return (function (){var s__28767__$1 = s__28767;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28767__$1);if(temp__4126__auto____$1)
{var s__28767__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28767__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28767__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28769 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28768 = (0);while(true){
if((i__28768 < size__4376__auto__))
{var map__28774 = cljs.core._nth.call(null,c__4375__auto__,i__28768);var map__28774__$1 = ((cljs.core.seq_QMARK_.call(null,map__28774))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);var render_fn = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28769,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28775 = temp__4126__auto____$2;var map__28775__$1 = ((cljs.core.seq_QMARK_.call(null,map__28775))?cljs.core.apply.call(null,cljs.core.hash_map,map__28775):map__28775);var ch_key = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__28780 = (i__28768 + (1));
i__28768 = G__28780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28769),iter__28766.call(null,cljs.core.chunk_rest.call(null,s__28767__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28769),null);
}
} else
{var map__28776 = cljs.core.first.call(null,s__28767__$2);var map__28776__$1 = ((cljs.core.seq_QMARK_.call(null,map__28776))?cljs.core.apply.call(null,cljs.core.hash_map,map__28776):map__28776);var render_fn = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28776__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28777 = temp__4126__auto____$2;var map__28777__$1 = ((cljs.core.seq_QMARK_.call(null,map__28777))?cljs.core.apply.call(null,cljs.core.hash_map,map__28777):map__28777);var ch_key = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__28766.call(null,cljs.core.rest.call(null,s__28767__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data))
,null,null));
});})(row_variables,s__28727__$2,temp__4126__auto__,belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__28726.call(null,cljs.core.rest.call(null,s__28727__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data))
,null,null));
});})(belongs_to_vars,map__28722,map__28722__$1,map__28723,map__28723__$1,controls,map__28724,map__28724__$1,summary_stats,variables,map__28725,map__28725__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__28781,owner){var map__28824 = p__28781;var map__28824__$1 = ((cljs.core.seq_QMARK_.call(null,map__28824))?cljs.core.apply.call(null,cljs.core.hash_map,map__28824):map__28824);var data = map__28824__$1;var filt = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28825 = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28825__$1 = ((cljs.core.seq_QMARK_.call(null,map__28825))?cljs.core.apply.call(null,cljs.core.hash_map,map__28825):map__28825);var map_report = map__28825__$1;var map__28826 = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28826__$1 = ((cljs.core.seq_QMARK_.call(null,map__28826))?cljs.core.apply.call(null,cljs.core.hash_map,map__28826):map__28826);var controls = map__28826__$1;var map__28827 = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28827__$1 = ((cljs.core.seq_QMARK_.call(null,map__28827))?cljs.core.apply.call(null,cljs.core.hash_map,map__28827):map__28827);var summary_stats = map__28827__$1;var variables = cljs.core.get.call(null,map__28827__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__28827__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__28827__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t28828 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t28828 = (function (filt,index_type,owner,map__28827,data,index,map__28824,map__28825,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__28781,map__28826,meta28829){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__28827 = map__28827;
this.data = data;
this.index = index;
this.map__28824 = map__28824;
this.map__28825 = map__28825;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.p__28781 = p__28781;
this.map__28826 = map__28826;
this.meta28829 = meta28829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t28828.cljs$lang$type = true;
clustermap.components.map_report.t28828.cljs$lang$ctorStr = "clustermap.components.map-report/t28828";
clustermap.components.map_report.t28828.cljs$lang$ctorPrWriter = ((function (map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t28828");
});})(map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28828.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t28828.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__28831,p__28832){var self__ = this;
var map__28833 = p__28831;var map__28833__$1 = ((cljs.core.seq_QMARK_.call(null,map__28833))?cljs.core.apply.call(null,cljs.core.hash_map,map__28833):map__28833);var next_data = map__28833__$1;var next_filt = cljs.core.get.call(null,map__28833__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28834 = cljs.core.get.call(null,map__28833__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28834__$1 = ((cljs.core.seq_QMARK_.call(null,map__28834))?cljs.core.apply.call(null,cljs.core.hash_map,map__28834):map__28834);var next_map_report = map__28834__$1;var map__28835 = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28835__$1 = ((cljs.core.seq_QMARK_.call(null,map__28835))?cljs.core.apply.call(null,cljs.core.hash_map,map__28835):map__28835);var next_controls = map__28835__$1;var map__28836 = cljs.core.get.call(null,map__28835__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28836__$1 = ((cljs.core.seq_QMARK_.call(null,map__28836))?cljs.core.apply.call(null,cljs.core.hash_map,map__28836):map__28836);var next_summary_stats = map__28836__$1;var next_index = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__28836__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__28837 = p__28832;var map__28837__$1 = ((cljs.core.seq_QMARK_.call(null,map__28837))?cljs.core.apply.call(null,cljs.core.hash_map,map__28837):map__28837);var fetch_data_fn = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,map__28833,map__28833__$1,next_data,next_filt,map__28834,map__28834__$1,next_map_report,map__28835,map__28835__$1,next_controls,map__28836,map__28836__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28837,map__28837__$1,fetch_data_fn,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,map__28833,map__28833__$1,next_data,next_filt,map__28834,map__28834__$1,next_map_report,map__28835,map__28835__$1,next_controls,map__28836,map__28836__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28837,map__28837__$1,fetch_data_fn,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_28851){var state_val_28852 = (state_28851[(1)]);if((state_val_28852 === (5)))
{var inst_28849 = (state_28851[(2)]);var state_28851__$1 = state_28851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28851__$1,inst_28849);
} else
{if((state_val_28852 === (4)))
{var state_28851__$1 = state_28851;var statearr_28853_28866 = state_28851__$1;(statearr_28853_28866[(2)] = null);
(statearr_28853_28866[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28852 === (3)))
{var inst_28841 = (state_28851[(7)]);var inst_28843 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28844 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_28845 = (new cljs.core.PersistentVector(null,1,(5),inst_28843,inst_28844,null));var inst_28846 = om.core.update_BANG_.call(null,self__.map_report,inst_28845,inst_28841);var state_28851__$1 = state_28851;var statearr_28854_28867 = state_28851__$1;(statearr_28854_28867[(2)] = inst_28846);
(statearr_28854_28867[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28852 === (2)))
{var inst_28841 = (state_28851[(7)]);var inst_28841__$1 = (state_28851[(2)]);var state_28851__$1 = (function (){var statearr_28855 = state_28851;(statearr_28855[(7)] = inst_28841__$1);
return statearr_28855;
})();if(cljs.core.truth_(inst_28841__$1))
{var statearr_28856_28868 = state_28851__$1;(statearr_28856_28868[(1)] = (3));
} else
{var statearr_28857_28869 = state_28851__$1;(statearr_28857_28869[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28852 === (1)))
{var inst_28838 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_28839 = fetch_data_fn.call(null,next_index,next_index_type,inst_28838,next_filt);var state_28851__$1 = state_28851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28851__$1,(2),inst_28839);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,___$1,map__28833,map__28833__$1,next_data,next_filt,map__28834,map__28834__$1,next_map_report,map__28835,map__28835__$1,next_controls,map__28836,map__28836__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28837,map__28837__$1,fetch_data_fn,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,map__28833,map__28833__$1,next_data,next_filt,map__28834,map__28834__$1,next_map_report,map__28835,map__28835__$1,next_controls,map__28836,map__28836__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28837,map__28837__$1,fetch_data_fn,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_28861 = [null,null,null,null,null,null,null,null];(statearr_28861[(0)] = state_machine__11099__auto__);
(statearr_28861[(1)] = (1));
return statearr_28861;
});
var state_machine__11099__auto____1 = (function (state_28851){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_28851);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e28862){if((e28862 instanceof Object))
{var ex__11102__auto__ = e28862;var statearr_28863_28870 = state_28851;(statearr_28863_28870[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28862;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28871 = state_28851;
state_28851 = G__28871;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_28851){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_28851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,map__28833,map__28833__$1,next_data,next_filt,map__28834,map__28834__$1,next_map_report,map__28835,map__28835__$1,next_controls,map__28836,map__28836__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28837,map__28837__$1,fetch_data_fn,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__11156__auto__ = (function (){var statearr_28864 = f__11155__auto__.call(null);(statearr_28864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_28864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,map__28833,map__28833__$1,next_data,next_filt,map__28834,map__28834__$1,next_map_report,map__28835,map__28835__$1,next_controls,map__28836,map__28836__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28837,map__28837__$1,fetch_data_fn,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__11154__auto__;
} else
{return null;
}
});})(map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28828.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t28828.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__28865 = om.core.get_shared.call(null,self__.owner);var map__28865__$1 = ((cljs.core.seq_QMARK_.call(null,map__28865))?cljs.core.apply.call(null,cljs.core.hash_map,map__28865):map__28865);var comm = cljs.core.get.call(null,map__28865__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28828.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t28828.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),(function (){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__,___$1,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var fetch_data = null;
var fetch_data__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var fetch_data__4 = (function (idx,idx_type,vars,filt__$2){var valch__14460__auto__ = clustermap.api.summary_stats.call(null,idx,idx_type,vars,filt__$2,null);return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
fetch_data = function(idx,idx_type,vars,filt__$2){
switch(arguments.length){
case 0:
return fetch_data__0.call(this);
case 4:
return fetch_data__4.call(this,idx,idx_type,vars,filt__$2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fetch_data.cljs$core$IFn$_invoke$arity$0 = fetch_data__0;
fetch_data.cljs$core$IFn$_invoke$arity$4 = fetch_data__4;
return fetch_data;
})()
;})(in_flight_atom__14458__auto__,___$1,map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
})());
});})(map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28830){var self__ = this;
var _28830__$1 = this;return self__.meta28829;
});})(map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28830,meta28829__$1){var self__ = this;
var _28830__$1 = this;return (new clustermap.components.map_report.t28828(self__.filt,self__.index_type,self__.owner,self__.map__28827,self__.data,self__.index,self__.map__28824,self__.map__28825,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.p__28781,self__.map__28826,meta28829__$1));
});})(map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t28828 = ((function (map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t28828(filt__$1,index_type__$1,owner__$1,map__28827__$2,data__$1,index__$1,map__28824__$2,map__28825__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__28781__$1,map__28826__$2,meta28829){return (new clustermap.components.map_report.t28828(filt__$1,index_type__$1,owner__$1,map__28827__$2,data__$1,index__$1,map__28824__$2,map__28825__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__28781__$1,map__28826__$2,meta28829));
});})(map__28824,map__28824__$1,data,filt,map__28825,map__28825__$1,map_report,map__28826,map__28826__$1,controls,map__28827,map__28827__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t28828(filt,index_type,owner,map__28827__$1,data,index,map__28824__$1,map__28825__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__28781,map__28826__$1,null));
});
