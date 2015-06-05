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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__28584,comm,p__28585){var map__28642 = p__28584;var map__28642__$1 = ((cljs.core.seq_QMARK_.call(null,map__28642))?cljs.core.apply.call(null,cljs.core.hash_map,map__28642):map__28642);var map__28643 = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28643__$1 = ((cljs.core.seq_QMARK_.call(null,map__28643))?cljs.core.apply.call(null,cljs.core.hash_map,map__28643):map__28643);var controls = map__28643__$1;var map__28644 = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28644__$1 = ((cljs.core.seq_QMARK_.call(null,map__28644))?cljs.core.apply.call(null,cljs.core.hash_map,map__28644):map__28644);var summary_stats = map__28644__$1;var variables = cljs.core.get.call(null,map__28644__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__28645 = p__28585;var map__28645__$1 = ((cljs.core.seq_QMARK_.call(null,map__28645))?cljs.core.apply.call(null,cljs.core.hash_map,map__28645):map__28645);var data = cljs.core.get.call(null,map__28645__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data){
return (function iter__28646(s__28647){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data){
return (function (){var s__28647__$1 = s__28647;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28647__$1);if(temp__4126__auto__)
{var s__28647__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28647__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28647__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28649 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28648 = (0);while(true){
if((i__28648 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__28648);cljs.core.chunk_append.call(null,b__28649,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__28648,row_variables,c__4375__auto__,size__4376__auto__,b__28649,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data){
return (function iter__28674(s__28675){return (new cljs.core.LazySeq(null,((function (i__28648,row_variables,c__4375__auto__,size__4376__auto__,b__28649,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data){
return (function (){var s__28675__$1 = s__28675;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28675__$1);if(temp__4126__auto____$1)
{var s__28675__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28675__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28675__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28677 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28676 = (0);while(true){
if((i__28676 < size__4376__auto____$1))
{var map__28682 = cljs.core._nth.call(null,c__4375__auto____$1,i__28676);var map__28682__$1 = ((cljs.core.seq_QMARK_.call(null,map__28682))?cljs.core.apply.call(null,cljs.core.hash_map,map__28682):map__28682);var render_fn = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28677,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28683 = temp__4126__auto____$2;var map__28683__$1 = ((cljs.core.seq_QMARK_.call(null,map__28683))?cljs.core.apply.call(null,cljs.core.hash_map,map__28683):map__28683);var ch_key = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__28698 = (i__28676 + (1));
i__28676 = G__28698;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28677),iter__28674.call(null,cljs.core.chunk_rest.call(null,s__28675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28677),null);
}
} else
{var map__28684 = cljs.core.first.call(null,s__28675__$2);var map__28684__$1 = ((cljs.core.seq_QMARK_.call(null,map__28684))?cljs.core.apply.call(null,cljs.core.hash_map,map__28684):map__28684);var render_fn = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28685 = temp__4126__auto____$2;var map__28685__$1 = ((cljs.core.seq_QMARK_.call(null,map__28685))?cljs.core.apply.call(null,cljs.core.hash_map,map__28685):map__28685);var ch_key = cljs.core.get.call(null,map__28685__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28685__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28685__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28685__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__28674.call(null,cljs.core.rest.call(null,s__28675__$2)));
}
} else
{return null;
}
break;
}
});})(i__28648,row_variables,c__4375__auto__,size__4376__auto__,b__28649,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data))
,null,null));
});})(i__28648,row_variables,c__4375__auto__,size__4376__auto__,b__28649,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__28699 = (i__28648 + (1));
i__28648 = G__28699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28649),iter__28646.call(null,cljs.core.chunk_rest.call(null,s__28647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28649),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__28647__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data){
return (function iter__28686(s__28687){return (new cljs.core.LazySeq(null,((function (row_variables,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data){
return (function (){var s__28687__$1 = s__28687;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28687__$1);if(temp__4126__auto____$1)
{var s__28687__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28687__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28687__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28689 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28688 = (0);while(true){
if((i__28688 < size__4376__auto__))
{var map__28694 = cljs.core._nth.call(null,c__4375__auto__,i__28688);var map__28694__$1 = ((cljs.core.seq_QMARK_.call(null,map__28694))?cljs.core.apply.call(null,cljs.core.hash_map,map__28694):map__28694);var render_fn = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28689,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28695 = temp__4126__auto____$2;var map__28695__$1 = ((cljs.core.seq_QMARK_.call(null,map__28695))?cljs.core.apply.call(null,cljs.core.hash_map,map__28695):map__28695);var ch_key = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__28700 = (i__28688 + (1));
i__28688 = G__28700;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28689),iter__28686.call(null,cljs.core.chunk_rest.call(null,s__28687__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28689),null);
}
} else
{var map__28696 = cljs.core.first.call(null,s__28687__$2);var map__28696__$1 = ((cljs.core.seq_QMARK_.call(null,map__28696))?cljs.core.apply.call(null,cljs.core.hash_map,map__28696):map__28696);var render_fn = cljs.core.get.call(null,map__28696__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28696__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28696__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28696__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__28697 = temp__4126__auto____$2;var map__28697__$1 = ((cljs.core.seq_QMARK_.call(null,map__28697))?cljs.core.apply.call(null,cljs.core.hash_map,map__28697):map__28697);var ch_key = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__28697__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__28686.call(null,cljs.core.rest.call(null,s__28687__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data))
,null,null));
});})(row_variables,s__28647__$2,temp__4126__auto__,belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__28646.call(null,cljs.core.rest.call(null,s__28647__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data))
,null,null));
});})(belongs_to_vars,map__28642,map__28642__$1,map__28643,map__28643__$1,controls,map__28644,map__28644__$1,summary_stats,variables,map__28645,map__28645__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__28701,owner){var map__28771 = p__28701;var map__28771__$1 = ((cljs.core.seq_QMARK_.call(null,map__28771))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);var data = map__28771__$1;var filt = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28772 = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28772__$1 = ((cljs.core.seq_QMARK_.call(null,map__28772))?cljs.core.apply.call(null,cljs.core.hash_map,map__28772):map__28772);var map_report = map__28772__$1;var map__28773 = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28773__$1 = ((cljs.core.seq_QMARK_.call(null,map__28773))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);var controls = map__28773__$1;var map__28774 = cljs.core.get.call(null,map__28773__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28774__$1 = ((cljs.core.seq_QMARK_.call(null,map__28774))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);var summary_stats = map__28774__$1;var variables = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t28775 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t28775 = (function (filt,index_type,owner,map__28772,data,map__28771,p__28701,index,map__28773,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__28774,meta28776){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__28772 = map__28772;
this.data = data;
this.map__28771 = map__28771;
this.p__28701 = p__28701;
this.index = index;
this.map__28773 = map__28773;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__28774 = map__28774;
this.meta28776 = meta28776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t28775.cljs$lang$type = true;
clustermap.components.map_report.t28775.cljs$lang$ctorStr = "clustermap.components.map-report/t28775";
clustermap.components.map_report.t28775.cljs$lang$ctorPrWriter = ((function (map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t28775");
});})(map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28775.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t28775.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__28778,p__28779){var self__ = this;
var map__28780 = p__28778;var map__28780__$1 = ((cljs.core.seq_QMARK_.call(null,map__28780))?cljs.core.apply.call(null,cljs.core.hash_map,map__28780):map__28780);var next_data = map__28780__$1;var next_filt = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28781 = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28781__$1 = ((cljs.core.seq_QMARK_.call(null,map__28781))?cljs.core.apply.call(null,cljs.core.hash_map,map__28781):map__28781);var next_map_report = map__28781__$1;var map__28782 = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28782__$1 = ((cljs.core.seq_QMARK_.call(null,map__28782))?cljs.core.apply.call(null,cljs.core.hash_map,map__28782):map__28782);var next_controls = map__28782__$1;var map__28783 = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28783__$1 = ((cljs.core.seq_QMARK_.call(null,map__28783))?cljs.core.apply.call(null,cljs.core.hash_map,map__28783):map__28783);var next_summary_stats = map__28783__$1;var next_index = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__28784 = p__28779;var map__28784__$1 = ((cljs.core.seq_QMARK_.call(null,map__28784))?cljs.core.apply.call(null,cljs.core.hash_map,map__28784):map__28784);var next_state = map__28784__$1;var summary_stats_resource = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,map__28780,map__28780__$1,next_data,next_filt,map__28781,map__28781__$1,next_map_report,map__28782,map__28782__$1,next_controls,map__28783,map__28783__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28784,map__28784__$1,next_state,summary_stats_resource,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,map__28780,map__28780__$1,next_data,next_filt,map__28781,map__28781__$1,next_map_report,map__28782,map__28782__$1,next_controls,map__28783,map__28783__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28784,map__28784__$1,next_state,summary_stats_resource,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_28798){var state_val_28799 = (state_28798[(1)]);if((state_val_28799 === (5)))
{var inst_28796 = (state_28798[(2)]);var state_28798__$1 = state_28798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28798__$1,inst_28796);
} else
{if((state_val_28799 === (4)))
{var state_28798__$1 = state_28798;var statearr_28800_28840 = state_28798__$1;(statearr_28800_28840[(2)] = null);
(statearr_28800_28840[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28799 === (3)))
{var inst_28788 = (state_28798[(7)]);var inst_28790 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28791 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_28792 = (new cljs.core.PersistentVector(null,1,(5),inst_28790,inst_28791,null));var inst_28793 = om.core.update_BANG_.call(null,self__.map_report,inst_28792,inst_28788);var state_28798__$1 = state_28798;var statearr_28801_28841 = state_28798__$1;(statearr_28801_28841[(2)] = inst_28793);
(statearr_28801_28841[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28799 === (2)))
{var inst_28788 = (state_28798[(7)]);var inst_28788__$1 = (state_28798[(2)]);var state_28798__$1 = (function (){var statearr_28802 = state_28798;(statearr_28802[(7)] = inst_28788__$1);
return statearr_28802;
})();if(cljs.core.truth_(inst_28788__$1))
{var statearr_28803_28842 = state_28798__$1;(statearr_28803_28842[(1)] = (3));
} else
{var statearr_28804_28843 = state_28798__$1;(statearr_28804_28843[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28799 === (1)))
{var inst_28785 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_28786 = clustermap.api.summary_stats.call(null,next_index,next_index_type,inst_28785,next_filt,null);var state_28798__$1 = state_28798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28798__$1,(2),inst_28786);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,___$1,map__28780,map__28780__$1,next_data,next_filt,map__28781,map__28781__$1,next_map_report,map__28782,map__28782__$1,next_controls,map__28783,map__28783__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28784,map__28784__$1,next_state,summary_stats_resource,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,map__28780,map__28780__$1,next_data,next_filt,map__28781,map__28781__$1,next_map_report,map__28782,map__28782__$1,next_controls,map__28783,map__28783__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28784,map__28784__$1,next_state,summary_stats_resource,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28808 = [null,null,null,null,null,null,null,null];(statearr_28808[(0)] = state_machine__11462__auto__);
(statearr_28808[(1)] = (1));
return statearr_28808;
});
var state_machine__11462__auto____1 = (function (state_28798){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28798);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28809){if((e28809 instanceof Object))
{var ex__11465__auto__ = e28809;var statearr_28810_28844 = state_28798;(statearr_28810_28844[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28845 = state_28798;
state_28798 = G__28845;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28798){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,map__28780,map__28780__$1,next_data,next_filt,map__28781,map__28781__$1,next_map_report,map__28782,map__28782__$1,next_controls,map__28783,map__28783__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28784,map__28784__$1,next_state,summary_stats_resource,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__11519__auto__ = (function (){var statearr_28811 = f__11518__auto__.call(null);(statearr_28811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,map__28780,map__28780__$1,next_data,next_filt,map__28781,map__28781__$1,next_map_report,map__28782,map__28782__$1,next_controls,map__28783,map__28783__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__28784,map__28784__$1,next_state,summary_stats_resource,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__11517__auto__;
} else
{return null;
}
});})(map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28775.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t28775.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__28812 = om.core.get_shared.call(null,self__.owner);var map__28812__$1 = ((cljs.core.seq_QMARK_.call(null,map__28812))?cljs.core.apply.call(null,cljs.core.hash_map,map__28812):map__28812);var comm = cljs.core.get.call(null,map__28812__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28775.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t28775.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_28826){var state_val_28827 = (state_28826[(1)]);if((state_val_28827 === (5)))
{var inst_28824 = (state_28826[(2)]);var state_28826__$1 = state_28826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28826__$1,inst_28824);
} else
{if((state_val_28827 === (4)))
{var state_28826__$1 = state_28826;var statearr_28828_28846 = state_28826__$1;(statearr_28828_28846[(2)] = null);
(statearr_28828_28846[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28827 === (3)))
{var inst_28816 = (state_28826[(7)]);var inst_28818 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28819 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_28820 = (new cljs.core.PersistentVector(null,1,(5),inst_28818,inst_28819,null));var inst_28821 = om.core.update_BANG_.call(null,self__.map_report,inst_28820,inst_28816);var state_28826__$1 = state_28826;var statearr_28829_28847 = state_28826__$1;(statearr_28829_28847[(2)] = inst_28821);
(statearr_28829_28847[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28827 === (2)))
{var inst_28816 = (state_28826[(7)]);var inst_28816__$1 = (state_28826[(2)]);var state_28826__$1 = (function (){var statearr_28830 = state_28826;(statearr_28830[(7)] = inst_28816__$1);
return statearr_28830;
})();if(cljs.core.truth_(inst_28816__$1))
{var statearr_28831_28848 = state_28826__$1;(statearr_28831_28848[(1)] = (3));
} else
{var statearr_28832_28849 = state_28826__$1;(statearr_28832_28849[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28827 === (1)))
{var inst_28813 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),self__.variables);var inst_28814 = clustermap.api.summary_stats.call(null,self__.index,self__.index_type,inst_28813,self__.filt,null);var state_28826__$1 = state_28826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28826__$1,(2),inst_28814);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,___$1,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28836 = [null,null,null,null,null,null,null,null];(statearr_28836[(0)] = state_machine__11462__auto__);
(statearr_28836[(1)] = (1));
return statearr_28836;
});
var state_machine__11462__auto____1 = (function (state_28826){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28826);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28837){if((e28837 instanceof Object))
{var ex__11465__auto__ = e28837;var statearr_28838_28850 = state_28826;(statearr_28838_28850[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28837;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28851 = state_28826;
state_28826 = G__28851;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28826){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__11519__auto__ = (function (){var statearr_28839 = f__11518__auto__.call(null);(statearr_28839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__11517__auto__;
});})(map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28777){var self__ = this;
var _28777__$1 = this;return self__.meta28776;
});})(map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28777,meta28776__$1){var self__ = this;
var _28777__$1 = this;return (new clustermap.components.map_report.t28775(self__.filt,self__.index_type,self__.owner,self__.map__28772,self__.data,self__.map__28771,self__.p__28701,self__.index,self__.map__28773,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__28774,meta28776__$1));
});})(map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t28775 = ((function (map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t28775(filt__$1,index_type__$1,owner__$1,map__28772__$2,data__$1,map__28771__$2,p__28701__$1,index__$1,map__28773__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__28774__$2,meta28776){return (new clustermap.components.map_report.t28775(filt__$1,index_type__$1,owner__$1,map__28772__$2,data__$1,map__28771__$2,p__28701__$1,index__$1,map__28773__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__28774__$2,meta28776));
});})(map__28771,map__28771__$1,data,filt,map__28772,map__28772__$1,map_report,map__28773,map__28773__$1,controls,map__28774,map__28774__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t28775(filt,index_type,owner,map__28772__$1,data,map__28771__$1,p__28701,index,map__28773__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__28774__$1,null));
});
