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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29631,comm,p__29632){var map__29689 = p__29631;var map__29689__$1 = ((cljs.core.seq_QMARK_.call(null,map__29689))?cljs.core.apply.call(null,cljs.core.hash_map,map__29689):map__29689);var map__29690 = cljs.core.get.call(null,map__29689__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29690__$1 = ((cljs.core.seq_QMARK_.call(null,map__29690))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);var controls = map__29690__$1;var map__29691 = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29691__$1 = ((cljs.core.seq_QMARK_.call(null,map__29691))?cljs.core.apply.call(null,cljs.core.hash_map,map__29691):map__29691);var summary_stats = map__29691__$1;var variables = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29692 = p__29632;var map__29692__$1 = ((cljs.core.seq_QMARK_.call(null,map__29692))?cljs.core.apply.call(null,cljs.core.hash_map,map__29692):map__29692);var data = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data){
return (function iter__29693(s__29694){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data){
return (function (){var s__29694__$1 = s__29694;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29694__$1);if(temp__4126__auto__)
{var s__29694__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29694__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29694__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29696 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29695 = (0);while(true){
if((i__29695 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29695);cljs.core.chunk_append.call(null,b__29696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29695,row_variables,c__4375__auto__,size__4376__auto__,b__29696,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data){
return (function iter__29721(s__29722){return (new cljs.core.LazySeq(null,((function (i__29695,row_variables,c__4375__auto__,size__4376__auto__,b__29696,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data){
return (function (){var s__29722__$1 = s__29722;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29722__$1);if(temp__4126__auto____$1)
{var s__29722__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29722__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29722__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29724 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29723 = (0);while(true){
if((i__29723 < size__4376__auto____$1))
{var map__29729 = cljs.core._nth.call(null,c__4375__auto____$1,i__29723);var map__29729__$1 = ((cljs.core.seq_QMARK_.call(null,map__29729))?cljs.core.apply.call(null,cljs.core.hash_map,map__29729):map__29729);var render_fn = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29724,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29730 = temp__4126__auto____$2;var map__29730__$1 = ((cljs.core.seq_QMARK_.call(null,map__29730))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);var ch_key = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29745 = (i__29723 + (1));
i__29723 = G__29745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29724),iter__29721.call(null,cljs.core.chunk_rest.call(null,s__29722__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29724),null);
}
} else
{var map__29731 = cljs.core.first.call(null,s__29722__$2);var map__29731__$1 = ((cljs.core.seq_QMARK_.call(null,map__29731))?cljs.core.apply.call(null,cljs.core.hash_map,map__29731):map__29731);var render_fn = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29732 = temp__4126__auto____$2;var map__29732__$1 = ((cljs.core.seq_QMARK_.call(null,map__29732))?cljs.core.apply.call(null,cljs.core.hash_map,map__29732):map__29732);var ch_key = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29721.call(null,cljs.core.rest.call(null,s__29722__$2)));
}
} else
{return null;
}
break;
}
});})(i__29695,row_variables,c__4375__auto__,size__4376__auto__,b__29696,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data))
,null,null));
});})(i__29695,row_variables,c__4375__auto__,size__4376__auto__,b__29696,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29746 = (i__29695 + (1));
i__29695 = G__29746;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29696),iter__29693.call(null,cljs.core.chunk_rest.call(null,s__29694__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29696),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29694__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data){
return (function iter__29733(s__29734){return (new cljs.core.LazySeq(null,((function (row_variables,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data){
return (function (){var s__29734__$1 = s__29734;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29734__$1);if(temp__4126__auto____$1)
{var s__29734__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29734__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29734__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29736 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29735 = (0);while(true){
if((i__29735 < size__4376__auto__))
{var map__29741 = cljs.core._nth.call(null,c__4375__auto__,i__29735);var map__29741__$1 = ((cljs.core.seq_QMARK_.call(null,map__29741))?cljs.core.apply.call(null,cljs.core.hash_map,map__29741):map__29741);var render_fn = cljs.core.get.call(null,map__29741__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29741__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29741__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29741__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29736,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29742 = temp__4126__auto____$2;var map__29742__$1 = ((cljs.core.seq_QMARK_.call(null,map__29742))?cljs.core.apply.call(null,cljs.core.hash_map,map__29742):map__29742);var ch_key = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29747 = (i__29735 + (1));
i__29735 = G__29747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29736),iter__29733.call(null,cljs.core.chunk_rest.call(null,s__29734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29736),null);
}
} else
{var map__29743 = cljs.core.first.call(null,s__29734__$2);var map__29743__$1 = ((cljs.core.seq_QMARK_.call(null,map__29743))?cljs.core.apply.call(null,cljs.core.hash_map,map__29743):map__29743);var render_fn = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29744 = temp__4126__auto____$2;var map__29744__$1 = ((cljs.core.seq_QMARK_.call(null,map__29744))?cljs.core.apply.call(null,cljs.core.hash_map,map__29744):map__29744);var ch_key = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29733.call(null,cljs.core.rest.call(null,s__29734__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data))
,null,null));
});})(row_variables,s__29694__$2,temp__4126__auto__,belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29693.call(null,cljs.core.rest.call(null,s__29694__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data))
,null,null));
});})(belongs_to_vars,map__29689,map__29689__$1,map__29690,map__29690__$1,controls,map__29691,map__29691__$1,summary_stats,variables,map__29692,map__29692__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29748,owner){var map__29791 = p__29748;var map__29791__$1 = ((cljs.core.seq_QMARK_.call(null,map__29791))?cljs.core.apply.call(null,cljs.core.hash_map,map__29791):map__29791);var data = map__29791__$1;var filt = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29792 = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29792__$1 = ((cljs.core.seq_QMARK_.call(null,map__29792))?cljs.core.apply.call(null,cljs.core.hash_map,map__29792):map__29792);var map_report = map__29792__$1;var map__29793 = cljs.core.get.call(null,map__29792__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29793__$1 = ((cljs.core.seq_QMARK_.call(null,map__29793))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);var controls = map__29793__$1;var map__29794 = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29794__$1 = ((cljs.core.seq_QMARK_.call(null,map__29794))?cljs.core.apply.call(null,cljs.core.hash_map,map__29794):map__29794);var summary_stats = map__29794__$1;var variables = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29792__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29795 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29795 = (function (filt,index_type,owner,data,map__29792,index,map__29791,controls,map__29794,summary_stats_data,map_report,summary_stats,map_report_component,map__29793,variables,p__29748,meta29796){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.map__29792 = map__29792;
this.index = index;
this.map__29791 = map__29791;
this.controls = controls;
this.map__29794 = map__29794;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__29793 = map__29793;
this.variables = variables;
this.p__29748 = p__29748;
this.meta29796 = meta29796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29795.cljs$lang$type = true;
clustermap.components.map_report.t29795.cljs$lang$ctorStr = "clustermap.components.map-report/t29795";
clustermap.components.map_report.t29795.cljs$lang$ctorPrWriter = ((function (map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29795");
});})(map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29795.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29795.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29798,p__29799){var self__ = this;
var map__29800 = p__29798;var map__29800__$1 = ((cljs.core.seq_QMARK_.call(null,map__29800))?cljs.core.apply.call(null,cljs.core.hash_map,map__29800):map__29800);var next_data = map__29800__$1;var next_filt = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29801 = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29801__$1 = ((cljs.core.seq_QMARK_.call(null,map__29801))?cljs.core.apply.call(null,cljs.core.hash_map,map__29801):map__29801);var next_map_report = map__29801__$1;var map__29802 = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29802__$1 = ((cljs.core.seq_QMARK_.call(null,map__29802))?cljs.core.apply.call(null,cljs.core.hash_map,map__29802):map__29802);var next_controls = map__29802__$1;var map__29803 = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29803__$1 = ((cljs.core.seq_QMARK_.call(null,map__29803))?cljs.core.apply.call(null,cljs.core.hash_map,map__29803):map__29803);var next_summary_stats = map__29803__$1;var next_index = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29801__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29804 = p__29799;var map__29804__$1 = ((cljs.core.seq_QMARK_.call(null,map__29804))?cljs.core.apply.call(null,cljs.core.hash_map,map__29804):map__29804);var fetch_data_fn = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29800,map__29800__$1,next_data,next_filt,map__29801,map__29801__$1,next_map_report,map__29802,map__29802__$1,next_controls,map__29803,map__29803__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29804,map__29804__$1,fetch_data_fn,map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29800,map__29800__$1,next_data,next_filt,map__29801,map__29801__$1,next_map_report,map__29802,map__29802__$1,next_controls,map__29803,map__29803__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29804,map__29804__$1,fetch_data_fn,map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29818){var state_val_29819 = (state_29818[(1)]);if((state_val_29819 === (5)))
{var inst_29816 = (state_29818[(2)]);var state_29818__$1 = state_29818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29818__$1,inst_29816);
} else
{if((state_val_29819 === (4)))
{var state_29818__$1 = state_29818;var statearr_29820_29833 = state_29818__$1;(statearr_29820_29833[(2)] = null);
(statearr_29820_29833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29819 === (3)))
{var inst_29808 = (state_29818[(7)]);var inst_29810 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29811 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29812 = (new cljs.core.PersistentVector(null,1,(5),inst_29810,inst_29811,null));var inst_29813 = om.core.update_BANG_.call(null,self__.map_report,inst_29812,inst_29808);var state_29818__$1 = state_29818;var statearr_29821_29834 = state_29818__$1;(statearr_29821_29834[(2)] = inst_29813);
(statearr_29821_29834[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29819 === (2)))
{var inst_29808 = (state_29818[(7)]);var inst_29808__$1 = (state_29818[(2)]);var state_29818__$1 = (function (){var statearr_29822 = state_29818;(statearr_29822[(7)] = inst_29808__$1);
return statearr_29822;
})();if(cljs.core.truth_(inst_29808__$1))
{var statearr_29823_29835 = state_29818__$1;(statearr_29823_29835[(1)] = (3));
} else
{var statearr_29824_29836 = state_29818__$1;(statearr_29824_29836[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29819 === (1)))
{var inst_29805 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29806 = fetch_data_fn.call(null,next_index,next_index_type,inst_29805,next_filt,null);var state_29818__$1 = state_29818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29818__$1,(2),inst_29806);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29800,map__29800__$1,next_data,next_filt,map__29801,map__29801__$1,next_map_report,map__29802,map__29802__$1,next_controls,map__29803,map__29803__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29804,map__29804__$1,fetch_data_fn,map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29800,map__29800__$1,next_data,next_filt,map__29801,map__29801__$1,next_map_report,map__29802,map__29802__$1,next_controls,map__29803,map__29803__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29804,map__29804__$1,fetch_data_fn,map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29828 = [null,null,null,null,null,null,null,null];(statearr_29828[(0)] = state_machine__9111__auto__);
(statearr_29828[(1)] = (1));
return statearr_29828;
});
var state_machine__9111__auto____1 = (function (state_29818){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29818);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29829){if((e29829 instanceof Object))
{var ex__9114__auto__ = e29829;var statearr_29830_29837 = state_29818;(statearr_29830_29837[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29838 = state_29818;
state_29818 = G__29838;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29818){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29800,map__29800__$1,next_data,next_filt,map__29801,map__29801__$1,next_map_report,map__29802,map__29802__$1,next_controls,map__29803,map__29803__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29804,map__29804__$1,fetch_data_fn,map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29831 = f__9126__auto__.call(null);(statearr_29831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29800,map__29800__$1,next_data,next_filt,map__29801,map__29801__$1,next_map_report,map__29802,map__29802__$1,next_controls,map__29803,map__29803__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29804,map__29804__$1,fetch_data_fn,map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29795.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29795.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29832 = om.core.get_shared.call(null,self__.owner);var map__29832__$1 = ((cljs.core.seq_QMARK_.call(null,map__29832))?cljs.core.apply.call(null,cljs.core.hash_map,map__29832):map__29832);var comm = cljs.core.get.call(null,map__29832__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29795.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29795.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29797){var self__ = this;
var _29797__$1 = this;return self__.meta29796;
});})(map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29797,meta29796__$1){var self__ = this;
var _29797__$1 = this;return (new clustermap.components.map_report.t29795(self__.filt,self__.index_type,self__.owner,self__.data,self__.map__29792,self__.index,self__.map__29791,self__.controls,self__.map__29794,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__29793,self__.variables,self__.p__29748,meta29796__$1));
});})(map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29795 = ((function (map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29795(filt__$1,index_type__$1,owner__$1,data__$1,map__29792__$2,index__$1,map__29791__$2,controls__$1,map__29794__$2,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29793__$2,variables__$1,p__29748__$1,meta29796){return (new clustermap.components.map_report.t29795(filt__$1,index_type__$1,owner__$1,data__$1,map__29792__$2,index__$1,map__29791__$2,controls__$1,map__29794__$2,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29793__$2,variables__$1,p__29748__$1,meta29796));
});})(map__29791,map__29791__$1,data,filt,map__29792,map__29792__$1,map_report,map__29793,map__29793__$1,controls,map__29794,map__29794__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29795(filt,index_type,owner,data,map__29792__$1,index,map__29791__$1,controls,map__29794__$1,summary_stats_data,map_report,summary_stats,map_report_component,map__29793__$1,variables,p__29748,null));
});
