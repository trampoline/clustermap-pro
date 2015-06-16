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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29585,comm,p__29586){var map__29643 = p__29585;var map__29643__$1 = ((cljs.core.seq_QMARK_.call(null,map__29643))?cljs.core.apply.call(null,cljs.core.hash_map,map__29643):map__29643);var map__29644 = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29644__$1 = ((cljs.core.seq_QMARK_.call(null,map__29644))?cljs.core.apply.call(null,cljs.core.hash_map,map__29644):map__29644);var controls = map__29644__$1;var map__29645 = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29645__$1 = ((cljs.core.seq_QMARK_.call(null,map__29645))?cljs.core.apply.call(null,cljs.core.hash_map,map__29645):map__29645);var summary_stats = map__29645__$1;var variables = cljs.core.get.call(null,map__29645__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29646 = p__29586;var map__29646__$1 = ((cljs.core.seq_QMARK_.call(null,map__29646))?cljs.core.apply.call(null,cljs.core.hash_map,map__29646):map__29646);var data = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data){
return (function iter__29647(s__29648){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data){
return (function (){var s__29648__$1 = s__29648;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29648__$1);if(temp__4126__auto__)
{var s__29648__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29648__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29648__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29650 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29649 = (0);while(true){
if((i__29649 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29649);cljs.core.chunk_append.call(null,b__29650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29649,row_variables,c__4375__auto__,size__4376__auto__,b__29650,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data){
return (function iter__29675(s__29676){return (new cljs.core.LazySeq(null,((function (i__29649,row_variables,c__4375__auto__,size__4376__auto__,b__29650,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data){
return (function (){var s__29676__$1 = s__29676;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29676__$1);if(temp__4126__auto____$1)
{var s__29676__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29676__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29676__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29678 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29677 = (0);while(true){
if((i__29677 < size__4376__auto____$1))
{var map__29683 = cljs.core._nth.call(null,c__4375__auto____$1,i__29677);var map__29683__$1 = ((cljs.core.seq_QMARK_.call(null,map__29683))?cljs.core.apply.call(null,cljs.core.hash_map,map__29683):map__29683);var render_fn = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29683__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29678,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29684 = temp__4126__auto____$2;var map__29684__$1 = ((cljs.core.seq_QMARK_.call(null,map__29684))?cljs.core.apply.call(null,cljs.core.hash_map,map__29684):map__29684);var ch_key = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29684__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29699 = (i__29677 + (1));
i__29677 = G__29699;
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
{var map__29685 = cljs.core.first.call(null,s__29676__$2);var map__29685__$1 = ((cljs.core.seq_QMARK_.call(null,map__29685))?cljs.core.apply.call(null,cljs.core.hash_map,map__29685):map__29685);var render_fn = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29686 = temp__4126__auto____$2;var map__29686__$1 = ((cljs.core.seq_QMARK_.call(null,map__29686))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);var ch_key = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29675.call(null,cljs.core.rest.call(null,s__29676__$2)));
}
} else
{return null;
}
break;
}
});})(i__29649,row_variables,c__4375__auto__,size__4376__auto__,b__29650,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data))
,null,null));
});})(i__29649,row_variables,c__4375__auto__,size__4376__auto__,b__29650,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29700 = (i__29649 + (1));
i__29649 = G__29700;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29650),iter__29647.call(null,cljs.core.chunk_rest.call(null,s__29648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29650),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29648__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data){
return (function iter__29687(s__29688){return (new cljs.core.LazySeq(null,((function (row_variables,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data){
return (function (){var s__29688__$1 = s__29688;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29688__$1);if(temp__4126__auto____$1)
{var s__29688__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29688__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29688__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29690 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29689 = (0);while(true){
if((i__29689 < size__4376__auto__))
{var map__29695 = cljs.core._nth.call(null,c__4375__auto__,i__29689);var map__29695__$1 = ((cljs.core.seq_QMARK_.call(null,map__29695))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695):map__29695);var render_fn = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29690,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29696 = temp__4126__auto____$2;var map__29696__$1 = ((cljs.core.seq_QMARK_.call(null,map__29696))?cljs.core.apply.call(null,cljs.core.hash_map,map__29696):map__29696);var ch_key = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29701 = (i__29689 + (1));
i__29689 = G__29701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29690),iter__29687.call(null,cljs.core.chunk_rest.call(null,s__29688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29690),null);
}
} else
{var map__29697 = cljs.core.first.call(null,s__29688__$2);var map__29697__$1 = ((cljs.core.seq_QMARK_.call(null,map__29697))?cljs.core.apply.call(null,cljs.core.hash_map,map__29697):map__29697);var render_fn = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29698 = temp__4126__auto____$2;var map__29698__$1 = ((cljs.core.seq_QMARK_.call(null,map__29698))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);var ch_key = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29687.call(null,cljs.core.rest.call(null,s__29688__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data))
,null,null));
});})(row_variables,s__29648__$2,temp__4126__auto__,belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29647.call(null,cljs.core.rest.call(null,s__29648__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data))
,null,null));
});})(belongs_to_vars,map__29643,map__29643__$1,map__29644,map__29644__$1,controls,map__29645,map__29645__$1,summary_stats,variables,map__29646,map__29646__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29702,owner){var map__29745 = p__29702;var map__29745__$1 = ((cljs.core.seq_QMARK_.call(null,map__29745))?cljs.core.apply.call(null,cljs.core.hash_map,map__29745):map__29745);var data = map__29745__$1;var filt = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29746 = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29746__$1 = ((cljs.core.seq_QMARK_.call(null,map__29746))?cljs.core.apply.call(null,cljs.core.hash_map,map__29746):map__29746);var map_report = map__29746__$1;var map__29747 = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29747__$1 = ((cljs.core.seq_QMARK_.call(null,map__29747))?cljs.core.apply.call(null,cljs.core.hash_map,map__29747):map__29747);var controls = map__29747__$1;var map__29748 = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29748__$1 = ((cljs.core.seq_QMARK_.call(null,map__29748))?cljs.core.apply.call(null,cljs.core.hash_map,map__29748):map__29748);var summary_stats = map__29748__$1;var variables = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29749 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29749 = (function (filt,index_type,owner,map__29748,data,map__29747,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__29702,map__29745,map__29746,meta29750){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__29748 = map__29748;
this.data = data;
this.map__29747 = map__29747;
this.index = index;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.p__29702 = p__29702;
this.map__29745 = map__29745;
this.map__29746 = map__29746;
this.meta29750 = meta29750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29749.cljs$lang$type = true;
clustermap.components.map_report.t29749.cljs$lang$ctorStr = "clustermap.components.map-report/t29749";
clustermap.components.map_report.t29749.cljs$lang$ctorPrWriter = ((function (map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29749");
});})(map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29749.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29749.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29752,p__29753){var self__ = this;
var map__29754 = p__29752;var map__29754__$1 = ((cljs.core.seq_QMARK_.call(null,map__29754))?cljs.core.apply.call(null,cljs.core.hash_map,map__29754):map__29754);var next_data = map__29754__$1;var next_filt = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29755 = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29755__$1 = ((cljs.core.seq_QMARK_.call(null,map__29755))?cljs.core.apply.call(null,cljs.core.hash_map,map__29755):map__29755);var next_map_report = map__29755__$1;var map__29756 = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29756__$1 = ((cljs.core.seq_QMARK_.call(null,map__29756))?cljs.core.apply.call(null,cljs.core.hash_map,map__29756):map__29756);var next_controls = map__29756__$1;var map__29757 = cljs.core.get.call(null,map__29756__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29757__$1 = ((cljs.core.seq_QMARK_.call(null,map__29757))?cljs.core.apply.call(null,cljs.core.hash_map,map__29757):map__29757);var next_summary_stats = map__29757__$1;var next_index = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29758 = p__29753;var map__29758__$1 = ((cljs.core.seq_QMARK_.call(null,map__29758))?cljs.core.apply.call(null,cljs.core.hash_map,map__29758):map__29758);var fetch_data_fn = cljs.core.get.call(null,map__29758__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29754,map__29754__$1,next_data,next_filt,map__29755,map__29755__$1,next_map_report,map__29756,map__29756__$1,next_controls,map__29757,map__29757__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29758,map__29758__$1,fetch_data_fn,map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29754,map__29754__$1,next_data,next_filt,map__29755,map__29755__$1,next_map_report,map__29756,map__29756__$1,next_controls,map__29757,map__29757__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29758,map__29758__$1,fetch_data_fn,map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29772){var state_val_29773 = (state_29772[(1)]);if((state_val_29773 === (5)))
{var inst_29770 = (state_29772[(2)]);var state_29772__$1 = state_29772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29772__$1,inst_29770);
} else
{if((state_val_29773 === (4)))
{var state_29772__$1 = state_29772;var statearr_29774_29787 = state_29772__$1;(statearr_29774_29787[(2)] = null);
(statearr_29774_29787[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29773 === (3)))
{var inst_29762 = (state_29772[(7)]);var inst_29764 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29765 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29766 = (new cljs.core.PersistentVector(null,1,(5),inst_29764,inst_29765,null));var inst_29767 = om.core.update_BANG_.call(null,self__.map_report,inst_29766,inst_29762);var state_29772__$1 = state_29772;var statearr_29775_29788 = state_29772__$1;(statearr_29775_29788[(2)] = inst_29767);
(statearr_29775_29788[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29773 === (2)))
{var inst_29762 = (state_29772[(7)]);var inst_29762__$1 = (state_29772[(2)]);var state_29772__$1 = (function (){var statearr_29776 = state_29772;(statearr_29776[(7)] = inst_29762__$1);
return statearr_29776;
})();if(cljs.core.truth_(inst_29762__$1))
{var statearr_29777_29789 = state_29772__$1;(statearr_29777_29789[(1)] = (3));
} else
{var statearr_29778_29790 = state_29772__$1;(statearr_29778_29790[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29773 === (1)))
{var inst_29759 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29760 = fetch_data_fn.call(null,next_index,next_index_type,inst_29759,next_filt,null);var state_29772__$1 = state_29772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29772__$1,(2),inst_29760);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29754,map__29754__$1,next_data,next_filt,map__29755,map__29755__$1,next_map_report,map__29756,map__29756__$1,next_controls,map__29757,map__29757__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29758,map__29758__$1,fetch_data_fn,map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29754,map__29754__$1,next_data,next_filt,map__29755,map__29755__$1,next_map_report,map__29756,map__29756__$1,next_controls,map__29757,map__29757__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29758,map__29758__$1,fetch_data_fn,map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29782 = [null,null,null,null,null,null,null,null];(statearr_29782[(0)] = state_machine__9111__auto__);
(statearr_29782[(1)] = (1));
return statearr_29782;
});
var state_machine__9111__auto____1 = (function (state_29772){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29772);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29783){if((e29783 instanceof Object))
{var ex__9114__auto__ = e29783;var statearr_29784_29791 = state_29772;(statearr_29784_29791[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29783;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29792 = state_29772;
state_29772 = G__29792;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29772){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29754,map__29754__$1,next_data,next_filt,map__29755,map__29755__$1,next_map_report,map__29756,map__29756__$1,next_controls,map__29757,map__29757__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29758,map__29758__$1,fetch_data_fn,map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29785 = f__9126__auto__.call(null);(statearr_29785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29754,map__29754__$1,next_data,next_filt,map__29755,map__29755__$1,next_map_report,map__29756,map__29756__$1,next_controls,map__29757,map__29757__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29758,map__29758__$1,fetch_data_fn,map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29749.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29749.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29786 = om.core.get_shared.call(null,self__.owner);var map__29786__$1 = ((cljs.core.seq_QMARK_.call(null,map__29786))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);var comm = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29749.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29749.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29751){var self__ = this;
var _29751__$1 = this;return self__.meta29750;
});})(map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29751,meta29750__$1){var self__ = this;
var _29751__$1 = this;return (new clustermap.components.map_report.t29749(self__.filt,self__.index_type,self__.owner,self__.map__29748,self__.data,self__.map__29747,self__.index,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.p__29702,self__.map__29745,self__.map__29746,meta29750__$1));
});})(map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29749 = ((function (map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29749(filt__$1,index_type__$1,owner__$1,map__29748__$2,data__$1,map__29747__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__29702__$1,map__29745__$2,map__29746__$2,meta29750){return (new clustermap.components.map_report.t29749(filt__$1,index_type__$1,owner__$1,map__29748__$2,data__$1,map__29747__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__29702__$1,map__29745__$2,map__29746__$2,meta29750));
});})(map__29745,map__29745__$1,data,filt,map__29746,map__29746__$1,map_report,map__29747,map__29747__$1,controls,map__29748,map__29748__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29749(filt,index_type,owner,map__29748__$1,data,map__29747__$1,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__29702,map__29745__$1,map__29746__$1,null));
});
