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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29799,comm,p__29800){var map__29857 = p__29799;var map__29857__$1 = ((cljs.core.seq_QMARK_.call(null,map__29857))?cljs.core.apply.call(null,cljs.core.hash_map,map__29857):map__29857);var map__29858 = cljs.core.get.call(null,map__29857__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29858__$1 = ((cljs.core.seq_QMARK_.call(null,map__29858))?cljs.core.apply.call(null,cljs.core.hash_map,map__29858):map__29858);var controls = map__29858__$1;var map__29859 = cljs.core.get.call(null,map__29858__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29859__$1 = ((cljs.core.seq_QMARK_.call(null,map__29859))?cljs.core.apply.call(null,cljs.core.hash_map,map__29859):map__29859);var summary_stats = map__29859__$1;var variables = cljs.core.get.call(null,map__29859__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29860 = p__29800;var map__29860__$1 = ((cljs.core.seq_QMARK_.call(null,map__29860))?cljs.core.apply.call(null,cljs.core.hash_map,map__29860):map__29860);var data = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data){
return (function iter__29861(s__29862){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data){
return (function (){var s__29862__$1 = s__29862;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29862__$1);if(temp__4126__auto__)
{var s__29862__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29862__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29862__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29864 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29863 = (0);while(true){
if((i__29863 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29863);cljs.core.chunk_append.call(null,b__29864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29863,row_variables,c__4375__auto__,size__4376__auto__,b__29864,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data){
return (function iter__29889(s__29890){return (new cljs.core.LazySeq(null,((function (i__29863,row_variables,c__4375__auto__,size__4376__auto__,b__29864,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data){
return (function (){var s__29890__$1 = s__29890;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29890__$1);if(temp__4126__auto____$1)
{var s__29890__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29890__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29890__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29892 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29891 = (0);while(true){
if((i__29891 < size__4376__auto____$1))
{var map__29897 = cljs.core._nth.call(null,c__4375__auto____$1,i__29891);var map__29897__$1 = ((cljs.core.seq_QMARK_.call(null,map__29897))?cljs.core.apply.call(null,cljs.core.hash_map,map__29897):map__29897);var render_fn = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29892,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29898 = temp__4126__auto____$2;var map__29898__$1 = ((cljs.core.seq_QMARK_.call(null,map__29898))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);var ch_key = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29913 = (i__29891 + (1));
i__29891 = G__29913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29892),iter__29889.call(null,cljs.core.chunk_rest.call(null,s__29890__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29892),null);
}
} else
{var map__29899 = cljs.core.first.call(null,s__29890__$2);var map__29899__$1 = ((cljs.core.seq_QMARK_.call(null,map__29899))?cljs.core.apply.call(null,cljs.core.hash_map,map__29899):map__29899);var render_fn = cljs.core.get.call(null,map__29899__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29899__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29899__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29899__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29900 = temp__4126__auto____$2;var map__29900__$1 = ((cljs.core.seq_QMARK_.call(null,map__29900))?cljs.core.apply.call(null,cljs.core.hash_map,map__29900):map__29900);var ch_key = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29889.call(null,cljs.core.rest.call(null,s__29890__$2)));
}
} else
{return null;
}
break;
}
});})(i__29863,row_variables,c__4375__auto__,size__4376__auto__,b__29864,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data))
,null,null));
});})(i__29863,row_variables,c__4375__auto__,size__4376__auto__,b__29864,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29914 = (i__29863 + (1));
i__29863 = G__29914;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29864),iter__29861.call(null,cljs.core.chunk_rest.call(null,s__29862__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29864),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29862__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data){
return (function iter__29901(s__29902){return (new cljs.core.LazySeq(null,((function (row_variables,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data){
return (function (){var s__29902__$1 = s__29902;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29902__$1);if(temp__4126__auto____$1)
{var s__29902__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29902__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29902__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29904 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29903 = (0);while(true){
if((i__29903 < size__4376__auto__))
{var map__29909 = cljs.core._nth.call(null,c__4375__auto__,i__29903);var map__29909__$1 = ((cljs.core.seq_QMARK_.call(null,map__29909))?cljs.core.apply.call(null,cljs.core.hash_map,map__29909):map__29909);var render_fn = cljs.core.get.call(null,map__29909__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29909__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29909__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29909__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29904,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29910 = temp__4126__auto____$2;var map__29910__$1 = ((cljs.core.seq_QMARK_.call(null,map__29910))?cljs.core.apply.call(null,cljs.core.hash_map,map__29910):map__29910);var ch_key = cljs.core.get.call(null,map__29910__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29910__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29910__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29910__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29915 = (i__29903 + (1));
i__29903 = G__29915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29904),iter__29901.call(null,cljs.core.chunk_rest.call(null,s__29902__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29904),null);
}
} else
{var map__29911 = cljs.core.first.call(null,s__29902__$2);var map__29911__$1 = ((cljs.core.seq_QMARK_.call(null,map__29911))?cljs.core.apply.call(null,cljs.core.hash_map,map__29911):map__29911);var render_fn = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29911__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29912 = temp__4126__auto____$2;var map__29912__$1 = ((cljs.core.seq_QMARK_.call(null,map__29912))?cljs.core.apply.call(null,cljs.core.hash_map,map__29912):map__29912);var ch_key = cljs.core.get.call(null,map__29912__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29912__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29912__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29912__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29901.call(null,cljs.core.rest.call(null,s__29902__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data))
,null,null));
});})(row_variables,s__29862__$2,temp__4126__auto__,belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29861.call(null,cljs.core.rest.call(null,s__29862__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data))
,null,null));
});})(belongs_to_vars,map__29857,map__29857__$1,map__29858,map__29858__$1,controls,map__29859,map__29859__$1,summary_stats,variables,map__29860,map__29860__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29916,owner){var map__29959 = p__29916;var map__29959__$1 = ((cljs.core.seq_QMARK_.call(null,map__29959))?cljs.core.apply.call(null,cljs.core.hash_map,map__29959):map__29959);var data = map__29959__$1;var filt = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29960 = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29960__$1 = ((cljs.core.seq_QMARK_.call(null,map__29960))?cljs.core.apply.call(null,cljs.core.hash_map,map__29960):map__29960);var map_report = map__29960__$1;var map__29961 = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29961__$1 = ((cljs.core.seq_QMARK_.call(null,map__29961))?cljs.core.apply.call(null,cljs.core.hash_map,map__29961):map__29961);var controls = map__29961__$1;var map__29962 = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29962__$1 = ((cljs.core.seq_QMARK_.call(null,map__29962))?cljs.core.apply.call(null,cljs.core.hash_map,map__29962):map__29962);var summary_stats = map__29962__$1;var variables = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29960__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29963 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29963 = (function (p__29916,filt,index_type,map__29960,owner,data,map__29961,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29959,map__29962,meta29964){
this.p__29916 = p__29916;
this.filt = filt;
this.index_type = index_type;
this.map__29960 = map__29960;
this.owner = owner;
this.data = data;
this.map__29961 = map__29961;
this.index = index;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__29959 = map__29959;
this.map__29962 = map__29962;
this.meta29964 = meta29964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29963.cljs$lang$type = true;
clustermap.components.map_report.t29963.cljs$lang$ctorStr = "clustermap.components.map-report/t29963";
clustermap.components.map_report.t29963.cljs$lang$ctorPrWriter = ((function (map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29963");
});})(map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29963.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29963.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29966,p__29967){var self__ = this;
var map__29968 = p__29966;var map__29968__$1 = ((cljs.core.seq_QMARK_.call(null,map__29968))?cljs.core.apply.call(null,cljs.core.hash_map,map__29968):map__29968);var next_data = map__29968__$1;var next_filt = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29969 = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29969__$1 = ((cljs.core.seq_QMARK_.call(null,map__29969))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);var next_map_report = map__29969__$1;var map__29970 = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29970__$1 = ((cljs.core.seq_QMARK_.call(null,map__29970))?cljs.core.apply.call(null,cljs.core.hash_map,map__29970):map__29970);var next_controls = map__29970__$1;var map__29971 = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29971__$1 = ((cljs.core.seq_QMARK_.call(null,map__29971))?cljs.core.apply.call(null,cljs.core.hash_map,map__29971):map__29971);var next_summary_stats = map__29971__$1;var next_index = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29972 = p__29967;var map__29972__$1 = ((cljs.core.seq_QMARK_.call(null,map__29972))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);var fetch_data_fn = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29968,map__29968__$1,next_data,next_filt,map__29969,map__29969__$1,next_map_report,map__29970,map__29970__$1,next_controls,map__29971,map__29971__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29972,map__29972__$1,fetch_data_fn,map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29968,map__29968__$1,next_data,next_filt,map__29969,map__29969__$1,next_map_report,map__29970,map__29970__$1,next_controls,map__29971,map__29971__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29972,map__29972__$1,fetch_data_fn,map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29986){var state_val_29987 = (state_29986[(1)]);if((state_val_29987 === (5)))
{var inst_29984 = (state_29986[(2)]);var state_29986__$1 = state_29986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29986__$1,inst_29984);
} else
{if((state_val_29987 === (4)))
{var state_29986__$1 = state_29986;var statearr_29988_30001 = state_29986__$1;(statearr_29988_30001[(2)] = null);
(statearr_29988_30001[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (3)))
{var inst_29976 = (state_29986[(7)]);var inst_29978 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29979 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29980 = (new cljs.core.PersistentVector(null,1,(5),inst_29978,inst_29979,null));var inst_29981 = om.core.update_BANG_.call(null,self__.map_report,inst_29980,inst_29976);var state_29986__$1 = state_29986;var statearr_29989_30002 = state_29986__$1;(statearr_29989_30002[(2)] = inst_29981);
(statearr_29989_30002[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (2)))
{var inst_29976 = (state_29986[(7)]);var inst_29976__$1 = (state_29986[(2)]);var state_29986__$1 = (function (){var statearr_29990 = state_29986;(statearr_29990[(7)] = inst_29976__$1);
return statearr_29990;
})();if(cljs.core.truth_(inst_29976__$1))
{var statearr_29991_30003 = state_29986__$1;(statearr_29991_30003[(1)] = (3));
} else
{var statearr_29992_30004 = state_29986__$1;(statearr_29992_30004[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (1)))
{var inst_29973 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29974 = fetch_data_fn.call(null,next_index,next_index_type,inst_29973,next_filt,null);var state_29986__$1 = state_29986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29986__$1,(2),inst_29974);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29968,map__29968__$1,next_data,next_filt,map__29969,map__29969__$1,next_map_report,map__29970,map__29970__$1,next_controls,map__29971,map__29971__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29972,map__29972__$1,fetch_data_fn,map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29968,map__29968__$1,next_data,next_filt,map__29969,map__29969__$1,next_map_report,map__29970,map__29970__$1,next_controls,map__29971,map__29971__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29972,map__29972__$1,fetch_data_fn,map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29996 = [null,null,null,null,null,null,null,null];(statearr_29996[(0)] = state_machine__9111__auto__);
(statearr_29996[(1)] = (1));
return statearr_29996;
});
var state_machine__9111__auto____1 = (function (state_29986){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29986);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29997){if((e29997 instanceof Object))
{var ex__9114__auto__ = e29997;var statearr_29998_30005 = state_29986;(statearr_29998_30005[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29997;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30006 = state_29986;
state_29986 = G__30006;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29986){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29968,map__29968__$1,next_data,next_filt,map__29969,map__29969__$1,next_map_report,map__29970,map__29970__$1,next_controls,map__29971,map__29971__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29972,map__29972__$1,fetch_data_fn,map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29999 = f__9126__auto__.call(null);(statearr_29999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29968,map__29968__$1,next_data,next_filt,map__29969,map__29969__$1,next_map_report,map__29970,map__29970__$1,next_controls,map__29971,map__29971__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29972,map__29972__$1,fetch_data_fn,map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29963.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29963.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__30000 = om.core.get_shared.call(null,self__.owner);var map__30000__$1 = ((cljs.core.seq_QMARK_.call(null,map__30000))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);var comm = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29963.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29963.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29965){var self__ = this;
var _29965__$1 = this;return self__.meta29964;
});})(map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29965,meta29964__$1){var self__ = this;
var _29965__$1 = this;return (new clustermap.components.map_report.t29963(self__.p__29916,self__.filt,self__.index_type,self__.map__29960,self__.owner,self__.data,self__.map__29961,self__.index,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__29959,self__.map__29962,meta29964__$1));
});})(map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29963 = ((function (map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29963(p__29916__$1,filt__$1,index_type__$1,map__29960__$2,owner__$1,data__$1,map__29961__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29959__$2,map__29962__$2,meta29964){return (new clustermap.components.map_report.t29963(p__29916__$1,filt__$1,index_type__$1,map__29960__$2,owner__$1,data__$1,map__29961__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29959__$2,map__29962__$2,meta29964));
});})(map__29959,map__29959__$1,data,filt,map__29960,map__29960__$1,map_report,map__29961,map__29961__$1,controls,map__29962,map__29962__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29963(p__29916,filt,index_type,map__29960__$1,owner,data,map__29961__$1,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29959__$1,map__29962__$1,null));
});
