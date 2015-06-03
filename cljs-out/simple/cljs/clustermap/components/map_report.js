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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__28428,comm,p__28429){var map__28470 = p__28428;var map__28470__$1 = ((cljs.core.seq_QMARK_.call(null,map__28470))?cljs.core.apply.call(null,cljs.core.hash_map,map__28470):map__28470);var map__28471 = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28471__$1 = ((cljs.core.seq_QMARK_.call(null,map__28471))?cljs.core.apply.call(null,cljs.core.hash_map,map__28471):map__28471);var controls = map__28471__$1;var map__28472 = cljs.core.get.call(null,map__28471__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28472__$1 = ((cljs.core.seq_QMARK_.call(null,map__28472))?cljs.core.apply.call(null,cljs.core.hash_map,map__28472):map__28472);var summary_stats = map__28472__$1;var variables = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__28473 = p__28429;var map__28473__$1 = ((cljs.core.seq_QMARK_.call(null,map__28473))?cljs.core.apply.call(null,cljs.core.hash_map,map__28473):map__28473);var data = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data){
return (function iter__28474(s__28475){return (new cljs.core.LazySeq(null,((function (map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data){
return (function (){var s__28475__$1 = s__28475;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28475__$1);if(temp__4126__auto__)
{var s__28475__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28475__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28475__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28477 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28476 = (0);while(true){
if((i__28476 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__28476);cljs.core.chunk_append.call(null,b__28477,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__28476,row_variables,c__4375__auto__,size__4376__auto__,b__28477,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data){
return (function iter__28494(s__28495){return (new cljs.core.LazySeq(null,((function (i__28476,row_variables,c__4375__auto__,size__4376__auto__,b__28477,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data){
return (function (){var s__28495__$1 = s__28495;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28495__$1);if(temp__4126__auto____$1)
{var s__28495__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28495__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28495__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28497 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28496 = (0);while(true){
if((i__28496 < size__4376__auto____$1))
{var map__28500 = cljs.core._nth.call(null,c__4375__auto____$1,i__28496);var map__28500__$1 = ((cljs.core.seq_QMARK_.call(null,map__28500))?cljs.core.apply.call(null,cljs.core.hash_map,map__28500):map__28500);var render_fn = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28497,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null));
{
var G__28510 = (i__28496 + (1));
i__28496 = G__28510;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28497),iter__28494.call(null,cljs.core.chunk_rest.call(null,s__28495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28497),null);
}
} else
{var map__28501 = cljs.core.first.call(null,s__28495__$2);var map__28501__$1 = ((cljs.core.seq_QMARK_.call(null,map__28501))?cljs.core.apply.call(null,cljs.core.hash_map,map__28501):map__28501);var render_fn = cljs.core.get.call(null,map__28501__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28501__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28501__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28501__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null),iter__28494.call(null,cljs.core.rest.call(null,s__28495__$2)));
}
} else
{return null;
}
break;
}
});})(i__28476,row_variables,c__4375__auto__,size__4376__auto__,b__28477,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data))
,null,null));
});})(i__28476,row_variables,c__4375__auto__,size__4376__auto__,b__28477,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__28511 = (i__28476 + (1));
i__28476 = G__28511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28477),iter__28474.call(null,cljs.core.chunk_rest.call(null,s__28475__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28477),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__28475__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data){
return (function iter__28502(s__28503){return (new cljs.core.LazySeq(null,((function (row_variables,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data){
return (function (){var s__28503__$1 = s__28503;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28503__$1);if(temp__4126__auto____$1)
{var s__28503__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28503__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28503__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28505 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28504 = (0);while(true){
if((i__28504 < size__4376__auto__))
{var map__28508 = cljs.core._nth.call(null,c__4375__auto__,i__28504);var map__28508__$1 = ((cljs.core.seq_QMARK_.call(null,map__28508))?cljs.core.apply.call(null,cljs.core.hash_map,map__28508):map__28508);var render_fn = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__28505,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null));
{
var G__28512 = (i__28504 + (1));
i__28504 = G__28512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28505),iter__28502.call(null,cljs.core.chunk_rest.call(null,s__28503__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28505),null);
}
} else
{var map__28509 = cljs.core.first.call(null,s__28503__$2);var map__28509__$1 = ((cljs.core.seq_QMARK_.call(null,map__28509))?cljs.core.apply.call(null,cljs.core.hash_map,map__28509):map__28509);var render_fn = cljs.core.get.call(null,map__28509__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__28509__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__28509__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__28509__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null),iter__28502.call(null,cljs.core.rest.call(null,s__28503__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data))
,null,null));
});})(row_variables,s__28475__$2,temp__4126__auto__,map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__28474.call(null,cljs.core.rest.call(null,s__28475__$2)));
}
} else
{return null;
}
break;
}
});})(map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data))
,null,null));
});})(map__28470,map__28470__$1,map__28471,map__28471__$1,controls,map__28472,map__28472__$1,summary_stats,variables,map__28473,map__28473__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),variables));
})()));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,variables,filt,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),variables),filt,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__28513,owner){var map__28529 = p__28513;var map__28529__$1 = ((cljs.core.seq_QMARK_.call(null,map__28529))?cljs.core.apply.call(null,cljs.core.hash_map,map__28529):map__28529);var data = map__28529__$1;var filt = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28530 = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28530__$1 = ((cljs.core.seq_QMARK_.call(null,map__28530))?cljs.core.apply.call(null,cljs.core.hash_map,map__28530):map__28530);var map_report = map__28530__$1;var map__28531 = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28531__$1 = ((cljs.core.seq_QMARK_.call(null,map__28531))?cljs.core.apply.call(null,cljs.core.hash_map,map__28531):map__28531);var controls = map__28531__$1;var map__28532 = cljs.core.get.call(null,map__28531__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28532__$1 = ((cljs.core.seq_QMARK_.call(null,map__28532))?cljs.core.apply.call(null,cljs.core.hash_map,map__28532):map__28532);var summary_stats = map__28532__$1;var variables = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t28533 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t28533 = (function (filt,index_type,owner,data,map__28532,index,map__28529,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__28531,variables,p__28513,map__28530,meta28534){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.map__28532 = map__28532;
this.index = index;
this.map__28529 = map__28529;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__28531 = map__28531;
this.variables = variables;
this.p__28513 = p__28513;
this.map__28530 = map__28530;
this.meta28534 = meta28534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t28533.cljs$lang$type = true;
clustermap.components.map_report.t28533.cljs$lang$ctorStr = "clustermap.components.map-report/t28533";
clustermap.components.map_report.t28533.cljs$lang$ctorPrWriter = ((function (map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t28533");
});})(map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28533.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t28533.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__28536,p__28537){var self__ = this;
var map__28538 = p__28536;var map__28538__$1 = ((cljs.core.seq_QMARK_.call(null,map__28538))?cljs.core.apply.call(null,cljs.core.hash_map,map__28538):map__28538);var next_data = map__28538__$1;var next_filt = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__28539 = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__28539__$1 = ((cljs.core.seq_QMARK_.call(null,map__28539))?cljs.core.apply.call(null,cljs.core.hash_map,map__28539):map__28539);var next_map_report = map__28539__$1;var map__28540 = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28540__$1 = ((cljs.core.seq_QMARK_.call(null,map__28540))?cljs.core.apply.call(null,cljs.core.hash_map,map__28540):map__28540);var next_controls = map__28540__$1;var map__28541 = cljs.core.get.call(null,map__28540__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__28541__$1 = ((cljs.core.seq_QMARK_.call(null,map__28541))?cljs.core.apply.call(null,cljs.core.hash_map,map__28541):map__28541);var next_summary_stats = map__28541__$1;var next_index = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__28542 = p__28537;var map__28542__$1 = ((cljs.core.seq_QMARK_.call(null,map__28542))?cljs.core.apply.call(null,cljs.core.hash_map,map__28542):map__28542);var next_state = map__28542__$1;var summary_stats_resource = cljs.core.get.call(null,map__28542__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MAP-REPORT-FILTER",next_filt], null)));
return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variables,next_filt,null);
} else
{return null;
}
});})(map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28533.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t28533.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__28543 = om.core.get_shared.call(null,self__.owner);var map__28543__$1 = ((cljs.core.seq_QMARK_.call(null,map__28543))?cljs.core.apply.call(null,cljs.core.hash_map,map__28543):map__28543);var comm = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28533.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t28533.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
});})(map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28535){var self__ = this;
var _28535__$1 = this;return self__.meta28534;
});})(map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t28533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_28535,meta28534__$1){var self__ = this;
var _28535__$1 = this;return (new clustermap.components.map_report.t28533(self__.filt,self__.index_type,self__.owner,self__.data,self__.map__28532,self__.index,self__.map__28529,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__28531,self__.variables,self__.p__28513,self__.map__28530,meta28534__$1));
});})(map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t28533 = ((function (map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t28533(filt__$1,index_type__$1,owner__$1,data__$1,map__28532__$2,index__$1,map__28529__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__28531__$2,variables__$1,p__28513__$1,map__28530__$2,meta28534){return (new clustermap.components.map_report.t28533(filt__$1,index_type__$1,owner__$1,data__$1,map__28532__$2,index__$1,map__28529__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__28531__$2,variables__$1,p__28513__$1,map__28530__$2,meta28534));
});})(map__28529,map__28529__$1,data,filt,map__28530,map__28530__$1,map_report,map__28531,map__28531__$1,controls,map__28532,map__28532__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t28533(filt,index_type,owner,data,map__28532__$1,index,map__28529__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__28531__$1,variables,p__28513,map__28530__$1,null));
});
