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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__31069,comm,p__31070){var map__31127 = p__31069;var map__31127__$1 = ((cljs.core.seq_QMARK_.call(null,map__31127))?cljs.core.apply.call(null,cljs.core.hash_map,map__31127):map__31127);var map__31128 = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31128__$1 = ((cljs.core.seq_QMARK_.call(null,map__31128))?cljs.core.apply.call(null,cljs.core.hash_map,map__31128):map__31128);var controls = map__31128__$1;var map__31129 = cljs.core.get.call(null,map__31128__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__31129__$1 = ((cljs.core.seq_QMARK_.call(null,map__31129))?cljs.core.apply.call(null,cljs.core.hash_map,map__31129):map__31129);var summary_stats = map__31129__$1;var variables = cljs.core.get.call(null,map__31129__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__31130 = p__31070;var map__31130__$1 = ((cljs.core.seq_QMARK_.call(null,map__31130))?cljs.core.apply.call(null,cljs.core.hash_map,map__31130):map__31130);var data = cljs.core.get.call(null,map__31130__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__12290__auto__ = ((function (belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data){
return (function iter__31131(s__31132){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data){
return (function (){var s__31132__$1 = s__31132;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31132__$1);if(temp__4126__auto__)
{var s__31132__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31132__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31132__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31134 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31133 = (0);while(true){
if((i__31133 < size__12289__auto__))
{var row_variables = cljs.core._nth.call(null,c__12288__auto__,i__31133);cljs.core.chunk_append.call(null,b__31134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__12290__auto__ = ((function (i__31133,row_variables,c__12288__auto__,size__12289__auto__,b__31134,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data){
return (function iter__31159(s__31160){return (new cljs.core.LazySeq(null,((function (i__31133,row_variables,c__12288__auto__,size__12289__auto__,b__31134,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data){
return (function (){var s__31160__$1 = s__31160;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31160__$1);if(temp__4126__auto____$1)
{var s__31160__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31160__$2))
{var c__12288__auto____$1 = cljs.core.chunk_first.call(null,s__31160__$2);var size__12289__auto____$1 = cljs.core.count.call(null,c__12288__auto____$1);var b__31162 = cljs.core.chunk_buffer.call(null,size__12289__auto____$1);if((function (){var i__31161 = (0);while(true){
if((i__31161 < size__12289__auto____$1))
{var map__31167 = cljs.core._nth.call(null,c__12288__auto____$1,i__31161);var map__31167__$1 = ((cljs.core.seq_QMARK_.call(null,map__31167))?cljs.core.apply.call(null,cljs.core.hash_map,map__31167):map__31167);var render_fn = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__31162,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__31168 = temp__4126__auto____$2;var map__31168__$1 = ((cljs.core.seq_QMARK_.call(null,map__31168))?cljs.core.apply.call(null,cljs.core.hash_map,map__31168):map__31168);var ch_key = cljs.core.get.call(null,map__31168__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__31168__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__31168__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__31168__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__31183 = (i__31161 + (1));
i__31161 = G__31183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31162),iter__31159.call(null,cljs.core.chunk_rest.call(null,s__31160__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31162),null);
}
} else
{var map__31169 = cljs.core.first.call(null,s__31160__$2);var map__31169__$1 = ((cljs.core.seq_QMARK_.call(null,map__31169))?cljs.core.apply.call(null,cljs.core.hash_map,map__31169):map__31169);var render_fn = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__31170 = temp__4126__auto____$2;var map__31170__$1 = ((cljs.core.seq_QMARK_.call(null,map__31170))?cljs.core.apply.call(null,cljs.core.hash_map,map__31170):map__31170);var ch_key = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__31159.call(null,cljs.core.rest.call(null,s__31160__$2)));
}
} else
{return null;
}
break;
}
});})(i__31133,row_variables,c__12288__auto__,size__12289__auto__,b__31134,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data))
,null,null));
});})(i__31133,row_variables,c__12288__auto__,size__12289__auto__,b__31134,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data))
;return iter__12290__auto__.call(null,row_variables);
})())], null));
{
var G__31184 = (i__31133 + (1));
i__31133 = G__31184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31134),iter__31131.call(null,cljs.core.chunk_rest.call(null,s__31132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31134),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__31132__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__12290__auto__ = ((function (row_variables,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data){
return (function iter__31171(s__31172){return (new cljs.core.LazySeq(null,((function (row_variables,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data){
return (function (){var s__31172__$1 = s__31172;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31172__$1);if(temp__4126__auto____$1)
{var s__31172__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31172__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31172__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31174 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31173 = (0);while(true){
if((i__31173 < size__12289__auto__))
{var map__31179 = cljs.core._nth.call(null,c__12288__auto__,i__31173);var map__31179__$1 = ((cljs.core.seq_QMARK_.call(null,map__31179))?cljs.core.apply.call(null,cljs.core.hash_map,map__31179):map__31179);var render_fn = cljs.core.get.call(null,map__31179__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__31179__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__31179__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__31179__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__31174,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__31180 = temp__4126__auto____$2;var map__31180__$1 = ((cljs.core.seq_QMARK_.call(null,map__31180))?cljs.core.apply.call(null,cljs.core.hash_map,map__31180):map__31180);var ch_key = cljs.core.get.call(null,map__31180__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__31180__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__31180__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__31180__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__31185 = (i__31173 + (1));
i__31173 = G__31185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31174),iter__31171.call(null,cljs.core.chunk_rest.call(null,s__31172__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31174),null);
}
} else
{var map__31181 = cljs.core.first.call(null,s__31172__$2);var map__31181__$1 = ((cljs.core.seq_QMARK_.call(null,map__31181))?cljs.core.apply.call(null,cljs.core.hash_map,map__31181):map__31181);var render_fn = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__31182 = temp__4126__auto____$2;var map__31182__$1 = ((cljs.core.seq_QMARK_.call(null,map__31182))?cljs.core.apply.call(null,cljs.core.hash_map,map__31182):map__31182);var ch_key = cljs.core.get.call(null,map__31182__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__31182__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__31182__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__31182__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__31171.call(null,cljs.core.rest.call(null,s__31172__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data))
,null,null));
});})(row_variables,s__31132__$2,temp__4126__auto__,belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data))
;return iter__12290__auto__.call(null,row_variables);
})())], null),iter__31131.call(null,cljs.core.rest.call(null,s__31132__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data))
,null,null));
});})(belongs_to_vars,map__31127,map__31127__$1,map__31128,map__31128__$1,controls,map__31129,map__31129__$1,summary_stats,variables,map__31130,map__31130__$1,data))
;return iter__12290__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__31186,owner){var map__31229 = p__31186;var map__31229__$1 = ((cljs.core.seq_QMARK_.call(null,map__31229))?cljs.core.apply.call(null,cljs.core.hash_map,map__31229):map__31229);var data = map__31229__$1;var filt = cljs.core.get.call(null,map__31229__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__31230 = cljs.core.get.call(null,map__31229__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__31230__$1 = ((cljs.core.seq_QMARK_.call(null,map__31230))?cljs.core.apply.call(null,cljs.core.hash_map,map__31230):map__31230);var map_report = map__31230__$1;var map__31231 = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31231__$1 = ((cljs.core.seq_QMARK_.call(null,map__31231))?cljs.core.apply.call(null,cljs.core.hash_map,map__31231):map__31231);var controls = map__31231__$1;var map__31232 = cljs.core.get.call(null,map__31231__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__31232__$1 = ((cljs.core.seq_QMARK_.call(null,map__31232))?cljs.core.apply.call(null,cljs.core.hash_map,map__31232):map__31232);var summary_stats = map__31232__$1;var variables = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__31230__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t31233 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31233 = (function (filt,index_type,owner,data,index,map__31229,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__31232,map__31230,map__31231,p__31186,meta31234){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.index = index;
this.map__31229 = map__31229;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__31232 = map__31232;
this.map__31230 = map__31230;
this.map__31231 = map__31231;
this.p__31186 = p__31186;
this.meta31234 = meta31234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31233.cljs$lang$type = true;
clustermap.components.map_report.t31233.cljs$lang$ctorStr = "clustermap.components.map-report/t31233";
clustermap.components.map_report.t31233.cljs$lang$ctorPrWriter = ((function (map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.map-report/t31233");
});})(map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t31233.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t31233.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__31236,p__31237){var self__ = this;
var map__31238 = p__31236;var map__31238__$1 = ((cljs.core.seq_QMARK_.call(null,map__31238))?cljs.core.apply.call(null,cljs.core.hash_map,map__31238):map__31238);var next_data = map__31238__$1;var next_filt = cljs.core.get.call(null,map__31238__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__31239 = cljs.core.get.call(null,map__31238__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__31239__$1 = ((cljs.core.seq_QMARK_.call(null,map__31239))?cljs.core.apply.call(null,cljs.core.hash_map,map__31239):map__31239);var next_map_report = map__31239__$1;var map__31240 = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31240__$1 = ((cljs.core.seq_QMARK_.call(null,map__31240))?cljs.core.apply.call(null,cljs.core.hash_map,map__31240):map__31240);var next_controls = map__31240__$1;var map__31241 = cljs.core.get.call(null,map__31240__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__31241__$1 = ((cljs.core.seq_QMARK_.call(null,map__31241))?cljs.core.apply.call(null,cljs.core.hash_map,map__31241):map__31241);var next_summary_stats = map__31241__$1;var next_index = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__31242 = p__31237;var map__31242__$1 = ((cljs.core.seq_QMARK_.call(null,map__31242))?cljs.core.apply.call(null,cljs.core.hash_map,map__31242):map__31242);var fetch_data_fn = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__31238,map__31238__$1,next_data,next_filt,map__31239,map__31239__$1,next_map_report,map__31240,map__31240__$1,next_controls,map__31241,map__31241__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__31242,map__31242__$1,fetch_data_fn,map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__31238,map__31238__$1,next_data,next_filt,map__31239,map__31239__$1,next_map_report,map__31240,map__31240__$1,next_controls,map__31241,map__31241__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__31242,map__31242__$1,fetch_data_fn,map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_31256){var state_val_31257 = (state_31256[(1)]);if((state_val_31257 === (5)))
{var inst_31254 = (state_31256[(2)]);var state_31256__$1 = state_31256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31256__$1,inst_31254);
} else
{if((state_val_31257 === (4)))
{var state_31256__$1 = state_31256;var statearr_31258_31271 = state_31256__$1;(statearr_31258_31271[(2)] = null);
(statearr_31258_31271[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31257 === (3)))
{var inst_31246 = (state_31256[(7)]);var inst_31248 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31249 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_31250 = (new cljs.core.PersistentVector(null,1,(5),inst_31248,inst_31249,null));var inst_31251 = om.core.update_BANG_.call(null,self__.map_report,inst_31250,inst_31246);var state_31256__$1 = state_31256;var statearr_31259_31272 = state_31256__$1;(statearr_31259_31272[(2)] = inst_31251);
(statearr_31259_31272[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31257 === (2)))
{var inst_31246 = (state_31256[(7)]);var inst_31246__$1 = (state_31256[(2)]);var state_31256__$1 = (function (){var statearr_31260 = state_31256;(statearr_31260[(7)] = inst_31246__$1);
return statearr_31260;
})();if(cljs.core.truth_(inst_31246__$1))
{var statearr_31261_31273 = state_31256__$1;(statearr_31261_31273[(1)] = (3));
} else
{var statearr_31262_31274 = state_31256__$1;(statearr_31262_31274[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31257 === (1)))
{var inst_31243 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_31244 = fetch_data_fn.call(null,next_index,next_index_type,inst_31243,next_filt,null);var state_31256__$1 = state_31256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31256__$1,(2),inst_31244);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__31238,map__31238__$1,next_data,next_filt,map__31239,map__31239__$1,next_map_report,map__31240,map__31240__$1,next_controls,map__31241,map__31241__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__31242,map__31242__$1,fetch_data_fn,map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__31238,map__31238__$1,next_data,next_filt,map__31239,map__31239__$1,next_map_report,map__31240,map__31240__$1,next_controls,map__31241,map__31241__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__31242,map__31242__$1,fetch_data_fn,map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_31266 = [null,null,null,null,null,null,null,null];(statearr_31266[(0)] = state_machine__16719__auto__);
(statearr_31266[(1)] = (1));
return statearr_31266;
});
var state_machine__16719__auto____1 = (function (state_31256){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_31256);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object))
{var ex__16722__auto__ = e31267;var statearr_31268_31275 = state_31256;(statearr_31268_31275[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31256);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31267;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31276 = state_31256;
state_31256 = G__31276;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_31256){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_31256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__31238,map__31238__$1,next_data,next_filt,map__31239,map__31239__$1,next_map_report,map__31240,map__31240__$1,next_controls,map__31241,map__31241__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__31242,map__31242__$1,fetch_data_fn,map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__16735__auto__ = (function (){var statearr_31269 = f__16734__auto__.call(null);(statearr_31269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_31269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__31238,map__31238__$1,next_data,next_filt,map__31239,map__31239__$1,next_map_report,map__31240,map__31240__$1,next_controls,map__31241,map__31241__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__31242,map__31242__$1,fetch_data_fn,map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t31233.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t31233.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__31270 = om.core.get_shared.call(null,self__.owner);var map__31270__$1 = ((cljs.core.seq_QMARK_.call(null,map__31270))?cljs.core.apply.call(null,cljs.core.hash_map,map__31270):map__31270);var comm = cljs.core.get.call(null,map__31270__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t31233.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t31233.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t31233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_31235){var self__ = this;
var _31235__$1 = this;return self__.meta31234;
});})(map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t31233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_31235,meta31234__$1){var self__ = this;
var _31235__$1 = this;return (new clustermap.components.map_report.t31233(self__.filt,self__.index_type,self__.owner,self__.data,self__.index,self__.map__31229,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__31232,self__.map__31230,self__.map__31231,self__.p__31186,meta31234__$1));
});})(map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t31233 = ((function (map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t31233(filt__$1,index_type__$1,owner__$1,data__$1,index__$1,map__31229__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__31232__$2,map__31230__$2,map__31231__$2,p__31186__$1,meta31234){return (new clustermap.components.map_report.t31233(filt__$1,index_type__$1,owner__$1,data__$1,index__$1,map__31229__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__31232__$2,map__31230__$2,map__31231__$2,p__31186__$1,meta31234));
});})(map__31229,map__31229__$1,data,filt,map__31230,map__31230__$1,map_report,map__31231,map__31231__$1,controls,map__31232,map__31232__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t31233(filt,index_type,owner,data,index,map__31229__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__31232__$1,map__31230__$1,map__31231__$1,p__31186,null));
});

//# sourceMappingURL=map_report.js.map