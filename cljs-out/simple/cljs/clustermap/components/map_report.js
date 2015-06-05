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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29014,comm,p__29015){var map__29072 = p__29014;var map__29072__$1 = ((cljs.core.seq_QMARK_.call(null,map__29072))?cljs.core.apply.call(null,cljs.core.hash_map,map__29072):map__29072);var map__29073 = cljs.core.get.call(null,map__29072__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29073__$1 = ((cljs.core.seq_QMARK_.call(null,map__29073))?cljs.core.apply.call(null,cljs.core.hash_map,map__29073):map__29073);var controls = map__29073__$1;var map__29074 = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29074__$1 = ((cljs.core.seq_QMARK_.call(null,map__29074))?cljs.core.apply.call(null,cljs.core.hash_map,map__29074):map__29074);var summary_stats = map__29074__$1;var variables = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29075 = p__29015;var map__29075__$1 = ((cljs.core.seq_QMARK_.call(null,map__29075))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);var data = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data){
return (function iter__29076(s__29077){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data){
return (function (){var s__29077__$1 = s__29077;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29077__$1);if(temp__4126__auto__)
{var s__29077__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29077__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29077__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29079 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29078 = (0);while(true){
if((i__29078 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29078);cljs.core.chunk_append.call(null,b__29079,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29078,row_variables,c__4375__auto__,size__4376__auto__,b__29079,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data){
return (function iter__29104(s__29105){return (new cljs.core.LazySeq(null,((function (i__29078,row_variables,c__4375__auto__,size__4376__auto__,b__29079,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data){
return (function (){var s__29105__$1 = s__29105;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29105__$1);if(temp__4126__auto____$1)
{var s__29105__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29105__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29105__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29107 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29106 = (0);while(true){
if((i__29106 < size__4376__auto____$1))
{var map__29112 = cljs.core._nth.call(null,c__4375__auto____$1,i__29106);var map__29112__$1 = ((cljs.core.seq_QMARK_.call(null,map__29112))?cljs.core.apply.call(null,cljs.core.hash_map,map__29112):map__29112);var render_fn = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29112__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29107,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29113 = temp__4126__auto____$2;var map__29113__$1 = ((cljs.core.seq_QMARK_.call(null,map__29113))?cljs.core.apply.call(null,cljs.core.hash_map,map__29113):map__29113);var ch_key = cljs.core.get.call(null,map__29113__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29113__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29113__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29113__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29128 = (i__29106 + (1));
i__29106 = G__29128;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29107),iter__29104.call(null,cljs.core.chunk_rest.call(null,s__29105__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29107),null);
}
} else
{var map__29114 = cljs.core.first.call(null,s__29105__$2);var map__29114__$1 = ((cljs.core.seq_QMARK_.call(null,map__29114))?cljs.core.apply.call(null,cljs.core.hash_map,map__29114):map__29114);var render_fn = cljs.core.get.call(null,map__29114__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29114__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29114__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29114__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29115 = temp__4126__auto____$2;var map__29115__$1 = ((cljs.core.seq_QMARK_.call(null,map__29115))?cljs.core.apply.call(null,cljs.core.hash_map,map__29115):map__29115);var ch_key = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29104.call(null,cljs.core.rest.call(null,s__29105__$2)));
}
} else
{return null;
}
break;
}
});})(i__29078,row_variables,c__4375__auto__,size__4376__auto__,b__29079,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data))
,null,null));
});})(i__29078,row_variables,c__4375__auto__,size__4376__auto__,b__29079,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29129 = (i__29078 + (1));
i__29078 = G__29129;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29079),iter__29076.call(null,cljs.core.chunk_rest.call(null,s__29077__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29079),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29077__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data){
return (function iter__29116(s__29117){return (new cljs.core.LazySeq(null,((function (row_variables,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data){
return (function (){var s__29117__$1 = s__29117;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29117__$1);if(temp__4126__auto____$1)
{var s__29117__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29117__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29117__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29119 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29118 = (0);while(true){
if((i__29118 < size__4376__auto__))
{var map__29124 = cljs.core._nth.call(null,c__4375__auto__,i__29118);var map__29124__$1 = ((cljs.core.seq_QMARK_.call(null,map__29124))?cljs.core.apply.call(null,cljs.core.hash_map,map__29124):map__29124);var render_fn = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29124__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29119,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29125 = temp__4126__auto____$2;var map__29125__$1 = ((cljs.core.seq_QMARK_.call(null,map__29125))?cljs.core.apply.call(null,cljs.core.hash_map,map__29125):map__29125);var ch_key = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29130 = (i__29118 + (1));
i__29118 = G__29130;
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
});})(row_variables,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data))
,null,null));
});})(row_variables,s__29077__$2,temp__4126__auto__,belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29076.call(null,cljs.core.rest.call(null,s__29077__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data))
,null,null));
});})(belongs_to_vars,map__29072,map__29072__$1,map__29073,map__29073__$1,controls,map__29074,map__29074__$1,summary_stats,variables,map__29075,map__29075__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29131,owner){var map__29174 = p__29131;var map__29174__$1 = ((cljs.core.seq_QMARK_.call(null,map__29174))?cljs.core.apply.call(null,cljs.core.hash_map,map__29174):map__29174);var data = map__29174__$1;var filt = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29175 = cljs.core.get.call(null,map__29174__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29175__$1 = ((cljs.core.seq_QMARK_.call(null,map__29175))?cljs.core.apply.call(null,cljs.core.hash_map,map__29175):map__29175);var map_report = map__29175__$1;var map__29176 = cljs.core.get.call(null,map__29175__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29176__$1 = ((cljs.core.seq_QMARK_.call(null,map__29176))?cljs.core.apply.call(null,cljs.core.hash_map,map__29176):map__29176);var controls = map__29176__$1;var map__29177 = cljs.core.get.call(null,map__29176__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29177__$1 = ((cljs.core.seq_QMARK_.call(null,map__29177))?cljs.core.apply.call(null,cljs.core.hash_map,map__29177):map__29177);var summary_stats = map__29177__$1;var variables = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29177__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29175__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29178 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29178 = (function (map__29174,filt,index_type,map__29176,owner,data,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__29131,map__29177,map__29175,meta29179){
this.map__29174 = map__29174;
this.filt = filt;
this.index_type = index_type;
this.map__29176 = map__29176;
this.owner = owner;
this.data = data;
this.index = index;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.p__29131 = p__29131;
this.map__29177 = map__29177;
this.map__29175 = map__29175;
this.meta29179 = meta29179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29178.cljs$lang$type = true;
clustermap.components.map_report.t29178.cljs$lang$ctorStr = "clustermap.components.map-report/t29178";
clustermap.components.map_report.t29178.cljs$lang$ctorPrWriter = ((function (map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29178");
});})(map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29178.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29178.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29181,p__29182){var self__ = this;
var map__29183 = p__29181;var map__29183__$1 = ((cljs.core.seq_QMARK_.call(null,map__29183))?cljs.core.apply.call(null,cljs.core.hash_map,map__29183):map__29183);var next_data = map__29183__$1;var next_filt = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29184 = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29184__$1 = ((cljs.core.seq_QMARK_.call(null,map__29184))?cljs.core.apply.call(null,cljs.core.hash_map,map__29184):map__29184);var next_map_report = map__29184__$1;var map__29185 = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29185__$1 = ((cljs.core.seq_QMARK_.call(null,map__29185))?cljs.core.apply.call(null,cljs.core.hash_map,map__29185):map__29185);var next_controls = map__29185__$1;var map__29186 = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29186__$1 = ((cljs.core.seq_QMARK_.call(null,map__29186))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186):map__29186);var next_summary_stats = map__29186__$1;var next_index = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29187 = p__29182;var map__29187__$1 = ((cljs.core.seq_QMARK_.call(null,map__29187))?cljs.core.apply.call(null,cljs.core.hash_map,map__29187):map__29187);var fetch_data_fn = cljs.core.get.call(null,map__29187__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29183,map__29183__$1,next_data,next_filt,map__29184,map__29184__$1,next_map_report,map__29185,map__29185__$1,next_controls,map__29186,map__29186__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29187,map__29187__$1,fetch_data_fn,map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29183,map__29183__$1,next_data,next_filt,map__29184,map__29184__$1,next_map_report,map__29185,map__29185__$1,next_controls,map__29186,map__29186__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29187,map__29187__$1,fetch_data_fn,map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29201){var state_val_29202 = (state_29201[(1)]);if((state_val_29202 === (5)))
{var inst_29199 = (state_29201[(2)]);var state_29201__$1 = state_29201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29201__$1,inst_29199);
} else
{if((state_val_29202 === (4)))
{var state_29201__$1 = state_29201;var statearr_29203_29216 = state_29201__$1;(statearr_29203_29216[(2)] = null);
(statearr_29203_29216[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29202 === (3)))
{var inst_29191 = (state_29201[(7)]);var inst_29193 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29194 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29195 = (new cljs.core.PersistentVector(null,1,(5),inst_29193,inst_29194,null));var inst_29196 = om.core.update_BANG_.call(null,self__.map_report,inst_29195,inst_29191);var state_29201__$1 = state_29201;var statearr_29204_29217 = state_29201__$1;(statearr_29204_29217[(2)] = inst_29196);
(statearr_29204_29217[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29202 === (2)))
{var inst_29191 = (state_29201[(7)]);var inst_29191__$1 = (state_29201[(2)]);var state_29201__$1 = (function (){var statearr_29205 = state_29201;(statearr_29205[(7)] = inst_29191__$1);
return statearr_29205;
})();if(cljs.core.truth_(inst_29191__$1))
{var statearr_29206_29218 = state_29201__$1;(statearr_29206_29218[(1)] = (3));
} else
{var statearr_29207_29219 = state_29201__$1;(statearr_29207_29219[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29202 === (1)))
{var inst_29188 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29189 = fetch_data_fn.call(null,next_index,next_index_type,inst_29188,next_filt,null);var state_29201__$1 = state_29201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29201__$1,(2),inst_29189);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29183,map__29183__$1,next_data,next_filt,map__29184,map__29184__$1,next_map_report,map__29185,map__29185__$1,next_controls,map__29186,map__29186__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29187,map__29187__$1,fetch_data_fn,map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29183,map__29183__$1,next_data,next_filt,map__29184,map__29184__$1,next_map_report,map__29185,map__29185__$1,next_controls,map__29186,map__29186__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29187,map__29187__$1,fetch_data_fn,map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29211 = [null,null,null,null,null,null,null,null];(statearr_29211[(0)] = state_machine__9111__auto__);
(statearr_29211[(1)] = (1));
return statearr_29211;
});
var state_machine__9111__auto____1 = (function (state_29201){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29201);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29212){if((e29212 instanceof Object))
{var ex__9114__auto__ = e29212;var statearr_29213_29220 = state_29201;(statearr_29213_29220[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29212;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29221 = state_29201;
state_29201 = G__29221;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29201){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29183,map__29183__$1,next_data,next_filt,map__29184,map__29184__$1,next_map_report,map__29185,map__29185__$1,next_controls,map__29186,map__29186__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29187,map__29187__$1,fetch_data_fn,map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29214 = f__9126__auto__.call(null);(statearr_29214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29183,map__29183__$1,next_data,next_filt,map__29184,map__29184__$1,next_map_report,map__29185,map__29185__$1,next_controls,map__29186,map__29186__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29187,map__29187__$1,fetch_data_fn,map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29178.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29178.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29215 = om.core.get_shared.call(null,self__.owner);var map__29215__$1 = ((cljs.core.seq_QMARK_.call(null,map__29215))?cljs.core.apply.call(null,cljs.core.hash_map,map__29215):map__29215);var comm = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29178.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29178.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29180){var self__ = this;
var _29180__$1 = this;return self__.meta29179;
});})(map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29180,meta29179__$1){var self__ = this;
var _29180__$1 = this;return (new clustermap.components.map_report.t29178(self__.map__29174,self__.filt,self__.index_type,self__.map__29176,self__.owner,self__.data,self__.index,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.p__29131,self__.map__29177,self__.map__29175,meta29179__$1));
});})(map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29178 = ((function (map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29178(map__29174__$2,filt__$1,index_type__$1,map__29176__$2,owner__$1,data__$1,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__29131__$1,map__29177__$2,map__29175__$2,meta29179){return (new clustermap.components.map_report.t29178(map__29174__$2,filt__$1,index_type__$1,map__29176__$2,owner__$1,data__$1,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__29131__$1,map__29177__$2,map__29175__$2,meta29179));
});})(map__29174,map__29174__$1,data,filt,map__29175,map__29175__$1,map_report,map__29176,map__29176__$1,controls,map__29177,map__29177__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29178(map__29174__$1,filt,index_type,map__29176__$1,owner,data,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__29131,map__29177__$1,map__29175__$1,null));
});
