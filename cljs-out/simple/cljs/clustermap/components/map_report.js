// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('clustermap.formats.string');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__28361,comm,p__28362){var map__28403 = p__28361;var map__28403__$1 = ((cljs.core.seq_QMARK_.call(null,map__28403))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);var map__28404 = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28404__$1 = ((cljs.core.seq_QMARK_.call(null,map__28404))?cljs.core.apply.call(null,cljs.core.hash_map,map__28404):map__28404);var controls = map__28404__$1;var map__28405 = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28405__$1 = ((cljs.core.seq_QMARK_.call(null,map__28405))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);var summary_stats = map__28405__$1;var variables = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__28406 = p__28362;var map__28406__$1 = ((cljs.core.seq_QMARK_.call(null,map__28406))?cljs.core.apply.call(null,cljs.core.hash_map,map__28406):map__28406);var data = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data){
return (function iter__28407(s__28408){return (new cljs.core.LazySeq(null,((function (map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data){
return (function (){var s__28408__$1 = s__28408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28408__$1);if(temp__4126__auto__)
{var s__28408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28408__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28408__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28410 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28409 = (0);while(true){
if((i__28409 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__28409);cljs.core.chunk_append.call(null,b__28410,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__28409,row_variables,c__4375__auto__,size__4376__auto__,b__28410,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data){
return (function iter__28427(s__28428){return (new cljs.core.LazySeq(null,((function (i__28409,row_variables,c__4375__auto__,size__4376__auto__,b__28410,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data){
return (function (){var s__28428__$1 = s__28428;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28428__$1);if(temp__4126__auto____$1)
{var s__28428__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28428__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28428__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28430 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28429 = (0);while(true){
if((i__28429 < size__4376__auto____$1))
{var map__28433 = cljs.core._nth.call(null,c__4375__auto____$1,i__28429);var map__28433__$1 = ((cljs.core.seq_QMARK_.call(null,map__28433))?cljs.core.apply.call(null,cljs.core.hash_map,map__28433):map__28433);var render_fn = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28430,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null));
{
var G__28443 = (i__28429 + (1));
i__28429 = G__28443;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28430),iter__28427.call(null,cljs.core.chunk_rest.call(null,s__28428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28430),null);
}
} else
{var map__28434 = cljs.core.first.call(null,s__28428__$2);var map__28434__$1 = ((cljs.core.seq_QMARK_.call(null,map__28434))?cljs.core.apply.call(null,cljs.core.hash_map,map__28434):map__28434);var render_fn = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null),iter__28427.call(null,cljs.core.rest.call(null,s__28428__$2)));
}
} else
{return null;
}
break;
}
});})(i__28409,row_variables,c__4375__auto__,size__4376__auto__,b__28410,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data))
,null,null));
});})(i__28409,row_variables,c__4375__auto__,size__4376__auto__,b__28410,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__28444 = (i__28409 + (1));
i__28409 = G__28444;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28410),iter__28407.call(null,cljs.core.chunk_rest.call(null,s__28408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28410),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__28408__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data){
return (function iter__28435(s__28436){return (new cljs.core.LazySeq(null,((function (row_variables,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data){
return (function (){var s__28436__$1 = s__28436;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28436__$1);if(temp__4126__auto____$1)
{var s__28436__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28436__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28436__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28438 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28437 = (0);while(true){
if((i__28437 < size__4376__auto__))
{var map__28441 = cljs.core._nth.call(null,c__4375__auto__,i__28437);var map__28441__$1 = ((cljs.core.seq_QMARK_.call(null,map__28441))?cljs.core.apply.call(null,cljs.core.hash_map,map__28441):map__28441);var render_fn = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28438,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null));
{
var G__28445 = (i__28437 + (1));
i__28437 = G__28445;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28438),iter__28435.call(null,cljs.core.chunk_rest.call(null,s__28436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28438),null);
}
} else
{var map__28442 = cljs.core.first.call(null,s__28436__$2);var map__28442__$1 = ((cljs.core.seq_QMARK_.call(null,map__28442))?cljs.core.apply.call(null,cljs.core.hash_map,map__28442):map__28442);var render_fn = cljs.core.get.call(null,map__28442__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28442__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28442__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28442__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null),iter__28435.call(null,cljs.core.rest.call(null,s__28436__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data))
,null,null));
});})(row_variables,s__28408__$2,temp__4126__auto__,map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__28407.call(null,cljs.core.rest.call(null,s__28408__$2)));
}
} else
{return null;
}
break;
}
});})(map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data))
,null,null));
});})(map__28403,map__28403__$1,map__28404,map__28404__$1,controls,map__28405,map__28405__$1,summary_stats,variables,map__28406,map__28406__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),variables));
})()));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,variables,filt,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),variables),filt,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__28446,owner){var map__28462 = p__28446;var map__28462__$1 = ((cljs.core.seq_QMARK_.call(null,map__28462))?cljs.core.apply.call(null,cljs.core.hash_map,map__28462):map__28462);var data = map__28462__$1;var filt = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28463 = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28463__$1 = ((cljs.core.seq_QMARK_.call(null,map__28463))?cljs.core.apply.call(null,cljs.core.hash_map,map__28463):map__28463);var map_report = map__28463__$1;var map__28464 = cljs.core.get.call(null,map__28463__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28464__$1 = ((cljs.core.seq_QMARK_.call(null,map__28464))?cljs.core.apply.call(null,cljs.core.hash_map,map__28464):map__28464);var controls = map__28464__$1;var map__28465 = cljs.core.get.call(null,map__28464__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28465__$1 = ((cljs.core.seq_QMARK_.call(null,map__28465))?cljs.core.apply.call(null,cljs.core.hash_map,map__28465):map__28465);var summary_stats = map__28465__$1;var variables = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__28463__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t28466 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t28466 = (function (filt,index_type,owner,data,p__28446,map__28465,index,map__28462,map__28463,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__28464,meta28467){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.p__28446 = p__28446;
this.map__28465 = map__28465;
this.index = index;
this.map__28462 = map__28462;
this.map__28463 = map__28463;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__28464 = map__28464;
this.meta28467 = meta28467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t28466.cljs$lang$type = true;
clustermap.components.map_report.t28466.cljs$lang$ctorStr = "clustermap.components.map-report/t28466";
clustermap.components.map_report.t28466.cljs$lang$ctorPrWriter = ((function (map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t28466");
});})(map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28466.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t28466.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__28469,p__28470){var self__ = this;
var map__28471 = p__28469;var map__28471__$1 = ((cljs.core.seq_QMARK_.call(null,map__28471))?cljs.core.apply.call(null,cljs.core.hash_map,map__28471):map__28471);var next_data = map__28471__$1;var next_filt = cljs.core.get.call(null,map__28471__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28472 = cljs.core.get.call(null,map__28471__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28472__$1 = ((cljs.core.seq_QMARK_.call(null,map__28472))?cljs.core.apply.call(null,cljs.core.hash_map,map__28472):map__28472);var next_map_report = map__28472__$1;var map__28473 = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28473__$1 = ((cljs.core.seq_QMARK_.call(null,map__28473))?cljs.core.apply.call(null,cljs.core.hash_map,map__28473):map__28473);var next_controls = map__28473__$1;var map__28474 = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28474__$1 = ((cljs.core.seq_QMARK_.call(null,map__28474))?cljs.core.apply.call(null,cljs.core.hash_map,map__28474):map__28474);var next_summary_stats = map__28474__$1;var next_index = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__28475 = p__28470;var map__28475__$1 = ((cljs.core.seq_QMARK_.call(null,map__28475))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);var next_state = map__28475__$1;var summary_stats_resource = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MAP-REPORT-FILTER",next_filt], null)));
return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variables,next_filt,null);
} else
{return null;
}
});})(map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28466.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t28466.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__28476 = om.core.get_shared.call(null,self__.owner);var map__28476__$1 = ((cljs.core.seq_QMARK_.call(null,map__28476))?cljs.core.apply.call(null,cljs.core.hash_map,map__28476):map__28476);var comm = cljs.core.get.call(null,map__28476__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28466.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t28466.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
});})(map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28468){var self__ = this;
var _28468__$1 = this;return self__.meta28467;
});})(map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28468,meta28467__$1){var self__ = this;
var _28468__$1 = this;return (new clustermap.components.map_report.t28466(self__.filt,self__.index_type,self__.owner,self__.data,self__.p__28446,self__.map__28465,self__.index,self__.map__28462,self__.map__28463,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__28464,meta28467__$1));
});})(map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t28466 = ((function (map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t28466(filt__$1,index_type__$1,owner__$1,data__$1,p__28446__$1,map__28465__$2,index__$1,map__28462__$2,map__28463__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__28464__$2,meta28467){return (new clustermap.components.map_report.t28466(filt__$1,index_type__$1,owner__$1,data__$1,p__28446__$1,map__28465__$2,index__$1,map__28462__$2,map__28463__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__28464__$2,meta28467));
});})(map__28462,map__28462__$1,data,filt,map__28463,map__28463__$1,map_report,map__28464,map__28464__$1,controls,map__28465,map__28465__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t28466(filt,index_type,owner,data,p__28446,map__28465__$1,index,map__28462__$1,map__28463__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__28464__$1,null));
});
