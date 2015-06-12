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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29479,comm,p__29480){var map__29537 = p__29479;var map__29537__$1 = ((cljs.core.seq_QMARK_.call(null,map__29537))?cljs.core.apply.call(null,cljs.core.hash_map,map__29537):map__29537);var map__29538 = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29538__$1 = ((cljs.core.seq_QMARK_.call(null,map__29538))?cljs.core.apply.call(null,cljs.core.hash_map,map__29538):map__29538);var controls = map__29538__$1;var map__29539 = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29539__$1 = ((cljs.core.seq_QMARK_.call(null,map__29539))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);var summary_stats = map__29539__$1;var variables = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29540 = p__29480;var map__29540__$1 = ((cljs.core.seq_QMARK_.call(null,map__29540))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);var data = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data){
return (function iter__29541(s__29542){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data){
return (function (){var s__29542__$1 = s__29542;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29542__$1);if(temp__4126__auto__)
{var s__29542__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29542__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29542__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29544 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29543 = (0);while(true){
if((i__29543 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29543);cljs.core.chunk_append.call(null,b__29544,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29543,row_variables,c__4375__auto__,size__4376__auto__,b__29544,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data){
return (function iter__29569(s__29570){return (new cljs.core.LazySeq(null,((function (i__29543,row_variables,c__4375__auto__,size__4376__auto__,b__29544,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data){
return (function (){var s__29570__$1 = s__29570;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29570__$1);if(temp__4126__auto____$1)
{var s__29570__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29570__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29570__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29572 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29571 = (0);while(true){
if((i__29571 < size__4376__auto____$1))
{var map__29577 = cljs.core._nth.call(null,c__4375__auto____$1,i__29571);var map__29577__$1 = ((cljs.core.seq_QMARK_.call(null,map__29577))?cljs.core.apply.call(null,cljs.core.hash_map,map__29577):map__29577);var render_fn = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29572,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29578 = temp__4126__auto____$2;var map__29578__$1 = ((cljs.core.seq_QMARK_.call(null,map__29578))?cljs.core.apply.call(null,cljs.core.hash_map,map__29578):map__29578);var ch_key = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29593 = (i__29571 + (1));
i__29571 = G__29593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29572),iter__29569.call(null,cljs.core.chunk_rest.call(null,s__29570__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29572),null);
}
} else
{var map__29579 = cljs.core.first.call(null,s__29570__$2);var map__29579__$1 = ((cljs.core.seq_QMARK_.call(null,map__29579))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579):map__29579);var render_fn = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29579__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29580 = temp__4126__auto____$2;var map__29580__$1 = ((cljs.core.seq_QMARK_.call(null,map__29580))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);var ch_key = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29569.call(null,cljs.core.rest.call(null,s__29570__$2)));
}
} else
{return null;
}
break;
}
});})(i__29543,row_variables,c__4375__auto__,size__4376__auto__,b__29544,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data))
,null,null));
});})(i__29543,row_variables,c__4375__auto__,size__4376__auto__,b__29544,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29594 = (i__29543 + (1));
i__29543 = G__29594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29544),iter__29541.call(null,cljs.core.chunk_rest.call(null,s__29542__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29544),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29542__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data){
return (function iter__29581(s__29582){return (new cljs.core.LazySeq(null,((function (row_variables,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data){
return (function (){var s__29582__$1 = s__29582;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29582__$1);if(temp__4126__auto____$1)
{var s__29582__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29582__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29582__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29584 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29583 = (0);while(true){
if((i__29583 < size__4376__auto__))
{var map__29589 = cljs.core._nth.call(null,c__4375__auto__,i__29583);var map__29589__$1 = ((cljs.core.seq_QMARK_.call(null,map__29589))?cljs.core.apply.call(null,cljs.core.hash_map,map__29589):map__29589);var render_fn = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29584,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29590 = temp__4126__auto____$2;var map__29590__$1 = ((cljs.core.seq_QMARK_.call(null,map__29590))?cljs.core.apply.call(null,cljs.core.hash_map,map__29590):map__29590);var ch_key = cljs.core.get.call(null,map__29590__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29590__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29590__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29590__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29595 = (i__29583 + (1));
i__29583 = G__29595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29584),iter__29581.call(null,cljs.core.chunk_rest.call(null,s__29582__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29584),null);
}
} else
{var map__29591 = cljs.core.first.call(null,s__29582__$2);var map__29591__$1 = ((cljs.core.seq_QMARK_.call(null,map__29591))?cljs.core.apply.call(null,cljs.core.hash_map,map__29591):map__29591);var render_fn = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29592 = temp__4126__auto____$2;var map__29592__$1 = ((cljs.core.seq_QMARK_.call(null,map__29592))?cljs.core.apply.call(null,cljs.core.hash_map,map__29592):map__29592);var ch_key = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29581.call(null,cljs.core.rest.call(null,s__29582__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data))
,null,null));
});})(row_variables,s__29542__$2,temp__4126__auto__,belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29541.call(null,cljs.core.rest.call(null,s__29542__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data))
,null,null));
});})(belongs_to_vars,map__29537,map__29537__$1,map__29538,map__29538__$1,controls,map__29539,map__29539__$1,summary_stats,variables,map__29540,map__29540__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29596,owner){var map__29639 = p__29596;var map__29639__$1 = ((cljs.core.seq_QMARK_.call(null,map__29639))?cljs.core.apply.call(null,cljs.core.hash_map,map__29639):map__29639);var data = map__29639__$1;var filt = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29640 = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29640__$1 = ((cljs.core.seq_QMARK_.call(null,map__29640))?cljs.core.apply.call(null,cljs.core.hash_map,map__29640):map__29640);var map_report = map__29640__$1;var map__29641 = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29641__$1 = ((cljs.core.seq_QMARK_.call(null,map__29641))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);var controls = map__29641__$1;var map__29642 = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29642__$1 = ((cljs.core.seq_QMARK_.call(null,map__29642))?cljs.core.apply.call(null,cljs.core.hash_map,map__29642):map__29642);var summary_stats = map__29642__$1;var variables = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29643 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29643 = (function (filt,index_type,owner,data,map__29642,index,map__29639,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__29640,variables,map__29641,p__29596,meta29644){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.map__29642 = map__29642;
this.index = index;
this.map__29639 = map__29639;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__29640 = map__29640;
this.variables = variables;
this.map__29641 = map__29641;
this.p__29596 = p__29596;
this.meta29644 = meta29644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29643.cljs$lang$type = true;
clustermap.components.map_report.t29643.cljs$lang$ctorStr = "clustermap.components.map-report/t29643";
clustermap.components.map_report.t29643.cljs$lang$ctorPrWriter = ((function (map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29643");
});})(map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29643.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29643.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29646,p__29647){var self__ = this;
var map__29648 = p__29646;var map__29648__$1 = ((cljs.core.seq_QMARK_.call(null,map__29648))?cljs.core.apply.call(null,cljs.core.hash_map,map__29648):map__29648);var next_data = map__29648__$1;var next_filt = cljs.core.get.call(null,map__29648__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29649 = cljs.core.get.call(null,map__29648__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29649__$1 = ((cljs.core.seq_QMARK_.call(null,map__29649))?cljs.core.apply.call(null,cljs.core.hash_map,map__29649):map__29649);var next_map_report = map__29649__$1;var map__29650 = cljs.core.get.call(null,map__29649__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29650__$1 = ((cljs.core.seq_QMARK_.call(null,map__29650))?cljs.core.apply.call(null,cljs.core.hash_map,map__29650):map__29650);var next_controls = map__29650__$1;var map__29651 = cljs.core.get.call(null,map__29650__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29651__$1 = ((cljs.core.seq_QMARK_.call(null,map__29651))?cljs.core.apply.call(null,cljs.core.hash_map,map__29651):map__29651);var next_summary_stats = map__29651__$1;var next_index = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29649__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29652 = p__29647;var map__29652__$1 = ((cljs.core.seq_QMARK_.call(null,map__29652))?cljs.core.apply.call(null,cljs.core.hash_map,map__29652):map__29652);var fetch_data_fn = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29648,map__29648__$1,next_data,next_filt,map__29649,map__29649__$1,next_map_report,map__29650,map__29650__$1,next_controls,map__29651,map__29651__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29652,map__29652__$1,fetch_data_fn,map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29648,map__29648__$1,next_data,next_filt,map__29649,map__29649__$1,next_map_report,map__29650,map__29650__$1,next_controls,map__29651,map__29651__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29652,map__29652__$1,fetch_data_fn,map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29666){var state_val_29667 = (state_29666[(1)]);if((state_val_29667 === (5)))
{var inst_29664 = (state_29666[(2)]);var state_29666__$1 = state_29666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29666__$1,inst_29664);
} else
{if((state_val_29667 === (4)))
{var state_29666__$1 = state_29666;var statearr_29668_29681 = state_29666__$1;(statearr_29668_29681[(2)] = null);
(statearr_29668_29681[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29667 === (3)))
{var inst_29656 = (state_29666[(7)]);var inst_29658 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29659 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29660 = (new cljs.core.PersistentVector(null,1,(5),inst_29658,inst_29659,null));var inst_29661 = om.core.update_BANG_.call(null,self__.map_report,inst_29660,inst_29656);var state_29666__$1 = state_29666;var statearr_29669_29682 = state_29666__$1;(statearr_29669_29682[(2)] = inst_29661);
(statearr_29669_29682[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29667 === (2)))
{var inst_29656 = (state_29666[(7)]);var inst_29656__$1 = (state_29666[(2)]);var state_29666__$1 = (function (){var statearr_29670 = state_29666;(statearr_29670[(7)] = inst_29656__$1);
return statearr_29670;
})();if(cljs.core.truth_(inst_29656__$1))
{var statearr_29671_29683 = state_29666__$1;(statearr_29671_29683[(1)] = (3));
} else
{var statearr_29672_29684 = state_29666__$1;(statearr_29672_29684[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29667 === (1)))
{var inst_29653 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29654 = fetch_data_fn.call(null,next_index,next_index_type,inst_29653,next_filt,null);var state_29666__$1 = state_29666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29666__$1,(2),inst_29654);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29648,map__29648__$1,next_data,next_filt,map__29649,map__29649__$1,next_map_report,map__29650,map__29650__$1,next_controls,map__29651,map__29651__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29652,map__29652__$1,fetch_data_fn,map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29648,map__29648__$1,next_data,next_filt,map__29649,map__29649__$1,next_map_report,map__29650,map__29650__$1,next_controls,map__29651,map__29651__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29652,map__29652__$1,fetch_data_fn,map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29676 = [null,null,null,null,null,null,null,null];(statearr_29676[(0)] = state_machine__9111__auto__);
(statearr_29676[(1)] = (1));
return statearr_29676;
});
var state_machine__9111__auto____1 = (function (state_29666){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29666);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29677){if((e29677 instanceof Object))
{var ex__9114__auto__ = e29677;var statearr_29678_29685 = state_29666;(statearr_29678_29685[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29686 = state_29666;
state_29666 = G__29686;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29666){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29648,map__29648__$1,next_data,next_filt,map__29649,map__29649__$1,next_map_report,map__29650,map__29650__$1,next_controls,map__29651,map__29651__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29652,map__29652__$1,fetch_data_fn,map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_29679 = f__9126__auto__.call(null);(statearr_29679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29648,map__29648__$1,next_data,next_filt,map__29649,map__29649__$1,next_map_report,map__29650,map__29650__$1,next_controls,map__29651,map__29651__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29652,map__29652__$1,fetch_data_fn,map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29643.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29643.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29680 = om.core.get_shared.call(null,self__.owner);var map__29680__$1 = ((cljs.core.seq_QMARK_.call(null,map__29680))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);var comm = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29643.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29643.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29645){var self__ = this;
var _29645__$1 = this;return self__.meta29644;
});})(map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29645,meta29644__$1){var self__ = this;
var _29645__$1 = this;return (new clustermap.components.map_report.t29643(self__.filt,self__.index_type,self__.owner,self__.data,self__.map__29642,self__.index,self__.map__29639,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__29640,self__.variables,self__.map__29641,self__.p__29596,meta29644__$1));
});})(map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29643 = ((function (map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29643(filt__$1,index_type__$1,owner__$1,data__$1,map__29642__$2,index__$1,map__29639__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29640__$2,variables__$1,map__29641__$2,p__29596__$1,meta29644){return (new clustermap.components.map_report.t29643(filt__$1,index_type__$1,owner__$1,data__$1,map__29642__$2,index__$1,map__29639__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29640__$2,variables__$1,map__29641__$2,p__29596__$1,meta29644));
});})(map__29639,map__29639__$1,data,filt,map__29640,map__29640__$1,map_report,map__29641,map__29641__$1,controls,map__29642,map__29642__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29643(filt,index_type,owner,data,map__29642__$1,index,map__29639__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__29640__$1,variables,map__29641__$1,p__29596,null));
});
