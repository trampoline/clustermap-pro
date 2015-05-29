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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29561,comm,p__29562){var map__29603 = p__29561;var map__29603__$1 = ((cljs.core.seq_QMARK_.call(null,map__29603))?cljs.core.apply.call(null,cljs.core.hash_map,map__29603):map__29603);var map__29604 = cljs.core.get.call(null,map__29603__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29604__$1 = ((cljs.core.seq_QMARK_.call(null,map__29604))?cljs.core.apply.call(null,cljs.core.hash_map,map__29604):map__29604);var controls = map__29604__$1;var map__29605 = cljs.core.get.call(null,map__29604__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29605__$1 = ((cljs.core.seq_QMARK_.call(null,map__29605))?cljs.core.apply.call(null,cljs.core.hash_map,map__29605):map__29605);var summary_stats = map__29605__$1;var variables = cljs.core.get.call(null,map__29605__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29606 = p__29562;var map__29606__$1 = ((cljs.core.seq_QMARK_.call(null,map__29606))?cljs.core.apply.call(null,cljs.core.hash_map,map__29606):map__29606);var data = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__12252__auto__ = ((function (map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data){
return (function iter__29607(s__29608){return (new cljs.core.LazySeq(null,((function (map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data){
return (function (){var s__29608__$1 = s__29608;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29608__$1);if(temp__4126__auto__)
{var s__29608__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29608__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29608__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29610 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29609 = (0);while(true){
if((i__29609 < size__12251__auto__))
{var row_variables = cljs.core._nth.call(null,c__12250__auto__,i__29609);cljs.core.chunk_append.call(null,b__29610,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__12252__auto__ = ((function (i__29609,row_variables,c__12250__auto__,size__12251__auto__,b__29610,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data){
return (function iter__29627(s__29628){return (new cljs.core.LazySeq(null,((function (i__29609,row_variables,c__12250__auto__,size__12251__auto__,b__29610,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data){
return (function (){var s__29628__$1 = s__29628;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29628__$1);if(temp__4126__auto____$1)
{var s__29628__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29628__$2))
{var c__12250__auto____$1 = cljs.core.chunk_first.call(null,s__29628__$2);var size__12251__auto____$1 = cljs.core.count.call(null,c__12250__auto____$1);var b__29630 = cljs.core.chunk_buffer.call(null,size__12251__auto____$1);if((function (){var i__29629 = (0);while(true){
if((i__29629 < size__12251__auto____$1))
{var map__29633 = cljs.core._nth.call(null,c__12250__auto____$1,i__29629);var map__29633__$1 = ((cljs.core.seq_QMARK_.call(null,map__29633))?cljs.core.apply.call(null,cljs.core.hash_map,map__29633):map__29633);var render_fn = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29633__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29630,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null));
{
var G__29643 = (i__29629 + (1));
i__29629 = G__29643;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29630),iter__29627.call(null,cljs.core.chunk_rest.call(null,s__29628__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29630),null);
}
} else
{var map__29634 = cljs.core.first.call(null,s__29628__$2);var map__29634__$1 = ((cljs.core.seq_QMARK_.call(null,map__29634))?cljs.core.apply.call(null,cljs.core.hash_map,map__29634):map__29634);var render_fn = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29634__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null),iter__29627.call(null,cljs.core.rest.call(null,s__29628__$2)));
}
} else
{return null;
}
break;
}
});})(i__29609,row_variables,c__12250__auto__,size__12251__auto__,b__29610,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data))
,null,null));
});})(i__29609,row_variables,c__12250__auto__,size__12251__auto__,b__29610,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data))
;return iter__12252__auto__.call(null,row_variables);
})())], null));
{
var G__29644 = (i__29609 + (1));
i__29609 = G__29644;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29610),iter__29607.call(null,cljs.core.chunk_rest.call(null,s__29608__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29610),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29608__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__12252__auto__ = ((function (row_variables,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data){
return (function iter__29635(s__29636){return (new cljs.core.LazySeq(null,((function (row_variables,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data){
return (function (){var s__29636__$1 = s__29636;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29636__$1);if(temp__4126__auto____$1)
{var s__29636__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29636__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29636__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29638 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29637 = (0);while(true){
if((i__29637 < size__12251__auto__))
{var map__29641 = cljs.core._nth.call(null,c__12250__auto__,i__29637);var map__29641__$1 = ((cljs.core.seq_QMARK_.call(null,map__29641))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);var render_fn = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29638,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null));
{
var G__29645 = (i__29637 + (1));
i__29637 = G__29645;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29638),iter__29635.call(null,cljs.core.chunk_rest.call(null,s__29636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29638),null);
}
} else
{var map__29642 = cljs.core.first.call(null,s__29636__$2);var map__29642__$1 = ((cljs.core.seq_QMARK_.call(null,map__29642))?cljs.core.apply.call(null,cljs.core.hash_map,map__29642):map__29642);var render_fn = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null)], null),iter__29635.call(null,cljs.core.rest.call(null,s__29636__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data))
,null,null));
});})(row_variables,s__29608__$2,temp__4126__auto__,map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data))
;return iter__12252__auto__.call(null,row_variables);
})())], null),iter__29607.call(null,cljs.core.rest.call(null,s__29608__$2)));
}
} else
{return null;
}
break;
}
});})(map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data))
,null,null));
});})(map__29603,map__29603__$1,map__29604,map__29604__$1,controls,map__29605,map__29605__$1,summary_stats,variables,map__29606,map__29606__$1,data))
;return iter__12252__auto__.call(null,cljs.core.partition_all.call(null,(2),variables));
})()));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,variables,filt,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),variables),filt,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29646,owner){var map__29662 = p__29646;var map__29662__$1 = ((cljs.core.seq_QMARK_.call(null,map__29662))?cljs.core.apply.call(null,cljs.core.hash_map,map__29662):map__29662);var data = map__29662__$1;var filt = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29663 = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29663__$1 = ((cljs.core.seq_QMARK_.call(null,map__29663))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);var map_report = map__29663__$1;var map__29664 = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29664__$1 = ((cljs.core.seq_QMARK_.call(null,map__29664))?cljs.core.apply.call(null,cljs.core.hash_map,map__29664):map__29664);var controls = map__29664__$1;var map__29665 = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29665__$1 = ((cljs.core.seq_QMARK_.call(null,map__29665))?cljs.core.apply.call(null,cljs.core.hash_map,map__29665):map__29665);var summary_stats = map__29665__$1;var variables = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29666 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29666 = (function (map__29662,filt,index_type,map__29665,owner,data,map__29664,index,p__29646,map__29663,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,meta29667){
this.map__29662 = map__29662;
this.filt = filt;
this.index_type = index_type;
this.map__29665 = map__29665;
this.owner = owner;
this.data = data;
this.map__29664 = map__29664;
this.index = index;
this.p__29646 = p__29646;
this.map__29663 = map__29663;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.meta29667 = meta29667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29666.cljs$lang$type = true;
clustermap.components.map_report.t29666.cljs$lang$ctorStr = "clustermap.components.map-report/t29666";
clustermap.components.map_report.t29666.cljs$lang$ctorPrWriter = ((function (map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.map-report/t29666");
});})(map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29666.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29666.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29669,p__29670){var self__ = this;
var map__29671 = p__29669;var map__29671__$1 = ((cljs.core.seq_QMARK_.call(null,map__29671))?cljs.core.apply.call(null,cljs.core.hash_map,map__29671):map__29671);var next_data = map__29671__$1;var next_filt = cljs.core.get.call(null,map__29671__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29672 = cljs.core.get.call(null,map__29671__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29672__$1 = ((cljs.core.seq_QMARK_.call(null,map__29672))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);var next_map_report = map__29672__$1;var map__29673 = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29673__$1 = ((cljs.core.seq_QMARK_.call(null,map__29673))?cljs.core.apply.call(null,cljs.core.hash_map,map__29673):map__29673);var next_controls = map__29673__$1;var map__29674 = cljs.core.get.call(null,map__29673__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29674__$1 = ((cljs.core.seq_QMARK_.call(null,map__29674))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);var next_summary_stats = map__29674__$1;var next_index = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29675 = p__29670;var map__29675__$1 = ((cljs.core.seq_QMARK_.call(null,map__29675))?cljs.core.apply.call(null,cljs.core.hash_map,map__29675):map__29675);var next_state = map__29675__$1;var summary_stats_resource = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MAP-REPORT-FILTER",next_filt], null)));
return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variables,next_filt,null);
} else
{return null;
}
});})(map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29666.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29666.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__29676 = om.core.get_shared.call(null,self__.owner);var map__29676__$1 = ((cljs.core.seq_QMARK_.call(null,map__29676))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);var comm = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29666.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29666.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
});})(map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29668){var self__ = this;
var _29668__$1 = this;return self__.meta29667;
});})(map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29668,meta29667__$1){var self__ = this;
var _29668__$1 = this;return (new clustermap.components.map_report.t29666(self__.map__29662,self__.filt,self__.index_type,self__.map__29665,self__.owner,self__.data,self__.map__29664,self__.index,self__.p__29646,self__.map__29663,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,meta29667__$1));
});})(map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29666 = ((function (map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29666(map__29662__$2,filt__$1,index_type__$1,map__29665__$2,owner__$1,data__$1,map__29664__$2,index__$1,p__29646__$1,map__29663__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta29667){return (new clustermap.components.map_report.t29666(map__29662__$2,filt__$1,index_type__$1,map__29665__$2,owner__$1,data__$1,map__29664__$2,index__$1,p__29646__$1,map__29663__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta29667));
});})(map__29662,map__29662__$1,data,filt,map__29663,map__29663__$1,map_report,map__29664,map__29664__$1,controls,map__29665,map__29665__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29666(map__29662__$1,filt,index_type,map__29665__$1,owner,data,map__29664__$1,index,p__29646,map__29663__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,null));
});

//# sourceMappingURL=map_report.js.map