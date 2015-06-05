// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.tag_histogram');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.ordered_resource');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.tag_histogram.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31212,metrics,tag_data,tag_agg_data,p__31213){var map__31256 = p__31212;var map__31256__$1 = ((cljs.core.seq_QMARK_.call(null,map__31256))?cljs.core.apply.call(null,cljs.core.hash_map,map__31256):map__31256);var query = map__31256__$1;var map__31257 = p__31213;var map__31257__$1 = ((cljs.core.seq_QMARK_.call(null,map__31257))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257):map__31257);var opts = map__31257__$1;var y1_title = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function iter__31258(s__31259){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function (){var s__31259__$1 = s__31259;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31259__$1);if(temp__4126__auto__)
{var s__31259__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31259__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31259__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31261 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31260 = (0);while(true){
if((i__31260 < size__4376__auto__))
{var map__31272 = cljs.core._nth.call(null,c__4375__auto__,i__31260);var map__31272__$1 = ((cljs.core.seq_QMARK_.call(null,map__31272))?cljs.core.apply.call(null,cljs.core.hash_map,map__31272):map__31272);var metric_spec = map__31272__$1;var title = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31261,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31260,map__31272,map__31272__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31261,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function iter__31273(s__31274){return (new cljs.core.LazySeq(null,((function (i__31260,map__31272,map__31272__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31261,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function (){var s__31274__$1 = s__31274;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31274__$1);if(temp__4126__auto____$1)
{var s__31274__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31274__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31274__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31276 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31275 = (0);while(true){
if((i__31275 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31275);cljs.core.chunk_append.call(null,b__31276,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31298 = (i__31275 + (1));
i__31275 = G__31298;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31276),iter__31273.call(null,cljs.core.chunk_rest.call(null,s__31274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31276),null);
}
} else
{var record = cljs.core.first.call(null,s__31274__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31273.call(null,cljs.core.rest.call(null,s__31274__$2)));
}
} else
{return null;
}
break;
}
});})(i__31260,map__31272,map__31272__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31261,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31260,map__31272,map__31272__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31261,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31299 = (i__31260 + (1));
i__31260 = G__31299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31261),iter__31258.call(null,cljs.core.chunk_rest.call(null,s__31259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31261),null);
}
} else
{var map__31277 = cljs.core.first.call(null,s__31259__$2);var map__31277__$1 = ((cljs.core.seq_QMARK_.call(null,map__31277))?cljs.core.apply.call(null,cljs.core.hash_map,map__31277):map__31277);var metric_spec = map__31277__$1;var title = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31277,map__31277__$1,metric_spec,title,metric,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function iter__31278(s__31279){return (new cljs.core.LazySeq(null,((function (map__31277,map__31277__$1,metric_spec,title,metric,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function (){var s__31279__$1 = s__31279;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31279__$1);if(temp__4126__auto____$1)
{var s__31279__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31279__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31279__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31281 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31280 = (0);while(true){
if((i__31280 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31280);cljs.core.chunk_append.call(null,b__31281,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31300 = (i__31280 + (1));
i__31280 = G__31300;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31281),iter__31278.call(null,cljs.core.chunk_rest.call(null,s__31279__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31281),null);
}
} else
{var record = cljs.core.first.call(null,s__31279__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31278.call(null,cljs.core.rest.call(null,s__31279__$2)));
}
} else
{return null;
}
break;
}
});})(map__31277,map__31277__$1,metric_spec,title,metric,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31277,map__31277__$1,metric_spec,title,metric,s__31259__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31258.call(null,cljs.core.rest.call(null,s__31259__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function iter__31282(s__31283){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function (){var s__31283__$1 = s__31283;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31283__$1);if(temp__4126__auto__)
{var s__31283__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31283__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31283__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31285 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31284 = (0);while(true){
if((i__31284 < size__4376__auto__))
{var map__31288 = cljs.core._nth.call(null,c__4375__auto__,i__31284);var map__31288__$1 = ((cljs.core.seq_QMARK_.call(null,map__31288))?cljs.core.apply.call(null,cljs.core.hash_map,map__31288):map__31288);var label_formatter = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31285,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31301 = (i__31284 + (1));
i__31284 = G__31301;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31285),iter__31282.call(null,cljs.core.chunk_rest.call(null,s__31283__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31285),null);
}
} else
{var map__31289 = cljs.core.first.call(null,s__31283__$2);var map__31289__$1 = ((cljs.core.seq_QMARK_.call(null,map__31289))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);var label_formatter = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31282.call(null,cljs.core.rest.call(null,s__31283__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function iter__31290(s__31291){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title){
return (function (){var s__31291__$1 = s__31291;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31291__$1);if(temp__4126__auto__)
{var s__31291__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31291__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31291__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31293 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31292 = (0);while(true){
if((i__31292 < size__4376__auto__))
{var vec__31296 = cljs.core._nth.call(null,c__4375__auto__,i__31292);var y = cljs.core.nth.call(null,vec__31296,(0),null);var i = cljs.core.nth.call(null,vec__31296,(1),null);cljs.core.chunk_append.call(null,b__31293,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31302 = (i__31292 + (1));
i__31292 = G__31302;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31293),iter__31290.call(null,cljs.core.chunk_rest.call(null,s__31291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31293),null);
}
} else
{var vec__31297 = cljs.core.first.call(null,s__31291__$2);var y = cljs.core.nth.call(null,vec__31297,(0),null);var i = cljs.core.nth.call(null,vec__31297,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31290.call(null,cljs.core.rest.call(null,s__31291__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31256,map__31256__$1,query,map__31257,map__31257__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31495 = schema.utils.use_fn_validation;var output_schema31304_31496 = schema.core.Any;var input_schema31305_31497 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31306_31498 = schema.core.checker.call(null,input_schema31305_31497);var output_checker31307_31499 = schema.core.checker.call(null,output_schema31304_31496);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function tag_histogram(G__31308,G__31309,G__31310){var validate__6034__auto__ = ufv___31495.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31500 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31308,G__31309,G__31310], null);var temp__4126__auto___31501 = input_checker31306_31498.call(null,args__6035__auto___31500);if(cljs.core.truth_(temp__4126__auto___31501))
{var error__6036__auto___31502 = temp__4126__auto___31501;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31502)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31502,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31500,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31305_31497,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31406 = G__31308;var map__31408 = G__31406;var map__31408__$1 = ((cljs.core.seq_QMARK_.call(null,map__31408))?cljs.core.apply.call(null,cljs.core.hash_map,map__31408):map__31408);var map__31409 = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31409__$1 = ((cljs.core.seq_QMARK_.call(null,map__31409))?cljs.core.apply.call(null,cljs.core.hash_map,map__31409):map__31409);var tag_histogram__$1 = map__31409__$1;var query = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31309;var G__31407 = G__31310;var map__31410 = G__31407;var map__31410__$1 = ((cljs.core.seq_QMARK_.call(null,map__31410))?cljs.core.apply.call(null,cljs.core.hash_map,map__31410):map__31410);var opts = map__31410__$1;var id = cljs.core.get.call(null,map__31410__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31406__$1 = G__31406;var owner__$1 = owner;var G__31407__$1 = G__31407;while(true){
var map__31411 = G__31406__$1;var map__31411__$1 = ((cljs.core.seq_QMARK_.call(null,map__31411))?cljs.core.apply.call(null,cljs.core.hash_map,map__31411):map__31411);var map__31412 = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31412__$1 = ((cljs.core.seq_QMARK_.call(null,map__31412))?cljs.core.apply.call(null,cljs.core.hash_map,map__31412):map__31412);var tag_histogram__$2 = map__31412__$1;var query__$1 = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31413 = G__31407__$1;var map__31413__$1 = ((cljs.core.seq_QMARK_.call(null,map__31413))?cljs.core.apply.call(null,cljs.core.hash_map,map__31413):map__31413);var opts__$1 = map__31413__$1;var id__$1 = cljs.core.get.call(null,map__31413__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31414 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31414 = (function (output_checker31307,query,map__31410,owner,metrics,map__31412,map__31411,map__31408,G__31308,G__31407,map__31413,tag_agg_data,tag_histogram,G__31406,G__31310,filter_spec,map__31409,tag_type,input_schema31305,G__31309,validate__6034__auto__,id,input_checker31306,opts,tag_data,ufv__,output_schema31304,meta31415){
this.output_checker31307 = output_checker31307;
this.query = query;
this.map__31410 = map__31410;
this.owner = owner;
this.metrics = metrics;
this.map__31412 = map__31412;
this.map__31411 = map__31411;
this.map__31408 = map__31408;
this.G__31308 = G__31308;
this.G__31407 = G__31407;
this.map__31413 = map__31413;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__31406 = G__31406;
this.G__31310 = G__31310;
this.filter_spec = filter_spec;
this.map__31409 = map__31409;
this.tag_type = tag_type;
this.input_schema31305 = input_schema31305;
this.G__31309 = G__31309;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.input_checker31306 = input_checker31306;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.output_schema31304 = output_schema31304;
this.meta31415 = meta31415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31414.cljs$lang$type = true;
clustermap.components.tag_histogram.t31414.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31414";
clustermap.components.tag_histogram.t31414.cljs$lang$ctorPrWriter = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31414");
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.t31414.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31414.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.t31414.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31414.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (_,p__31417,___$1){var self__ = this;
var map__31418 = p__31417;var map__31418__$1 = ((cljs.core.seq_QMARK_.call(null,map__31418))?cljs.core.apply.call(null,cljs.core.hash_map,map__31418):map__31418);var map__31419 = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31419__$1 = ((cljs.core.seq_QMARK_.call(null,map__31419))?cljs.core.apply.call(null,cljs.core.hash_map,map__31419):map__31419);var prev_query = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.t31414.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31414.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (_,p__31420,p__31421){var self__ = this;
var map__31422 = p__31420;var map__31422__$1 = ((cljs.core.seq_QMARK_.call(null,map__31422))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);var map__31423 = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31423__$1 = ((cljs.core.seq_QMARK_.call(null,map__31423))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);var next_query = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31424 = p__31421;var map__31424__$1 = ((cljs.core.seq_QMARK_.call(null,map__31424))?cljs.core.apply.call(null,cljs.core.hash_map,map__31424):map__31424);var fetch_tag_data_fn = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__11154__auto___31503 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___31503,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___31503,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (state_31442){var state_val_31443 = (state_31442[(1)]);if((state_val_31443 === (5)))
{var inst_31440 = (state_31442[(2)]);var state_31442__$1 = state_31442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31442__$1,inst_31440);
} else
{if((state_val_31443 === (4)))
{var state_31442__$1 = state_31442;var statearr_31444_31504 = state_31442__$1;(statearr_31444_31504[(2)] = null);
(statearr_31444_31504[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31443 === (3)))
{var inst_31427 = (state_31442[(7)]);var inst_31429 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31430 = ["HISTOGRAM TAGS: ",inst_31427];var inst_31431 = (new cljs.core.PersistentVector(null,2,(5),inst_31429,inst_31430,null));var inst_31432 = cljs.core.clj__GT_js.call(null,inst_31431);var inst_31433 = console.log(inst_31432);var inst_31434 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31435 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31436 = (new cljs.core.PersistentVector(null,1,(5),inst_31434,inst_31435,null));var inst_31437 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31436,inst_31427);var state_31442__$1 = (function (){var statearr_31445 = state_31442;(statearr_31445[(8)] = inst_31433);
return statearr_31445;
})();var statearr_31446_31505 = state_31442__$1;(statearr_31446_31505[(2)] = inst_31437);
(statearr_31446_31505[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31443 === (2)))
{var inst_31427 = (state_31442[(7)]);var inst_31427__$1 = (state_31442[(2)]);var state_31442__$1 = (function (){var statearr_31447 = state_31442;(statearr_31447[(7)] = inst_31427__$1);
return statearr_31447;
})();if(cljs.core.truth_(inst_31427__$1))
{var statearr_31448_31506 = state_31442__$1;(statearr_31448_31506[(1)] = (3));
} else
{var statearr_31449_31507 = state_31442__$1;(statearr_31449_31507[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31443 === (1)))
{var inst_31425 = fetch_tag_data_fn.call(null,next_tag_type);var state_31442__$1 = state_31442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31442__$1,(2),inst_31425);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto___31503,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;return ((function (switch__11098__auto__,c__11154__auto___31503,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_31453 = [null,null,null,null,null,null,null,null,null];(statearr_31453[(0)] = state_machine__11099__auto__);
(statearr_31453[(1)] = (1));
return statearr_31453;
});
var state_machine__11099__auto____1 = (function (state_31442){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_31442);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e31454){if((e31454 instanceof Object))
{var ex__11102__auto__ = e31454;var statearr_31455_31508 = state_31442;(statearr_31455_31508[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31442);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31454;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31509 = state_31442;
state_31442 = G__31509;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_31442){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_31442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___31503,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
})();var state__11156__auto__ = (function (){var statearr_31456 = f__11155__auto__.call(null);(statearr_31456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___31503);
return statearr_31456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___31503,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (state_31479){var state_val_31480 = (state_31479[(1)]);if((state_val_31480 === (5)))
{var inst_31477 = (state_31479[(2)]);var state_31479__$1 = state_31479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31479__$1,inst_31477);
} else
{if((state_val_31480 === (4)))
{var state_31479__$1 = state_31479;var statearr_31481_31510 = state_31479__$1;(statearr_31481_31510[(2)] = null);
(statearr_31481_31510[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31480 === (3)))
{var inst_31463 = (state_31479[(7)]);var inst_31465 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31466 = ["HISTOGRAM TAG AGGS: ",inst_31463];var inst_31467 = (new cljs.core.PersistentVector(null,2,(5),inst_31465,inst_31466,null));var inst_31468 = cljs.core.clj__GT_js.call(null,inst_31467);var inst_31469 = console.log(inst_31468);var inst_31470 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31471 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31472 = (new cljs.core.PersistentVector(null,1,(5),inst_31470,inst_31471,null));var inst_31473 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31463);var inst_31474 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31472,inst_31473);var state_31479__$1 = (function (){var statearr_31482 = state_31479;(statearr_31482[(8)] = inst_31469);
return statearr_31482;
})();var statearr_31483_31511 = state_31479__$1;(statearr_31483_31511[(2)] = inst_31474);
(statearr_31483_31511[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31480 === (2)))
{var inst_31463 = (state_31479[(7)]);var inst_31463__$1 = (state_31479[(2)]);var state_31479__$1 = (function (){var statearr_31484 = state_31479;(statearr_31484[(7)] = inst_31463__$1);
return statearr_31484;
})();if(cljs.core.truth_(inst_31463__$1))
{var statearr_31485_31512 = state_31479__$1;(statearr_31485_31512[(1)] = (3));
} else
{var statearr_31486_31513 = state_31479__$1;(statearr_31486_31513[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31480 === (1)))
{var inst_31457 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31458 = [next_filter_spec];var inst_31459 = cljs.core.PersistentHashMap.fromArrays(inst_31457,inst_31458);var inst_31460 = cljs.core.merge.call(null,next_query,inst_31459);var inst_31461 = fetch_tag_agg_data_fn.call(null,inst_31460);var state_31479__$1 = state_31479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31479__$1,(2),inst_31461);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_31490 = [null,null,null,null,null,null,null,null,null];(statearr_31490[(0)] = state_machine__11099__auto__);
(statearr_31490[(1)] = (1));
return statearr_31490;
});
var state_machine__11099__auto____1 = (function (state_31479){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_31479);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e31491){if((e31491 instanceof Object))
{var ex__11102__auto__ = e31491;var statearr_31492_31514 = state_31479;(statearr_31492_31514[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31491;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31515 = state_31479;
state_31479 = G__31515;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_31479){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_31479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
})();var state__11156__auto__ = (function (){var statearr_31493 = f__11155__auto__.call(null);(statearr_31493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_31493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,map__31422,map__31422__$1,map__31423,map__31423__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31424,map__31424__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
);
return c__11154__auto__;
} else
{return null;
}
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.t31414.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31414.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31494 = om.core.get_node.call(null,self__.owner,"chart");var G__31494__$1 = (((G__31494 == null))?null:jayq.core.$.call(null,G__31494));var G__31494__$2 = (((G__31494__$1 == null))?null:G__31494__$1.highcharts());var G__31494__$3 = (((G__31494__$2 == null))?null:G__31494__$2.reflow());return G__31494__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
);
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.t31414.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31414.prototype.om$core$IRender$render$arity$1 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.t31414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (_31416){var self__ = this;
var _31416__$1 = this;return self__.meta31415;
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.t31414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function (_31416,meta31415__$1){var self__ = this;
var _31416__$1 = this;return (new clustermap.components.tag_histogram.t31414(self__.output_checker31307,self__.query,self__.map__31410,self__.owner,self__.metrics,self__.map__31412,self__.map__31411,self__.map__31408,self__.G__31308,self__.G__31407,self__.map__31413,self__.tag_agg_data,self__.tag_histogram,self__.G__31406,self__.G__31310,self__.filter_spec,self__.map__31409,self__.tag_type,self__.input_schema31305,self__.G__31309,self__.validate__6034__auto__,self__.id,self__.input_checker31306,self__.opts,self__.tag_data,self__.ufv__,self__.output_schema31304,meta31415__$1));
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
clustermap.components.tag_histogram.__GT_t31414 = ((function (map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499){
return (function __GT_t31414(output_checker31307__$1,query__$2,map__31410__$2,owner__$3,metrics__$2,map__31412__$2,map__31411__$2,map__31408__$2,G__31308__$1,G__31407__$2,map__31413__$2,tag_agg_data__$2,tag_histogram__$3,G__31406__$2,G__31310__$1,filter_spec__$2,map__31409__$2,tag_type__$2,input_schema31305__$1,G__31309__$1,validate__6034__auto____$1,id__$2,input_checker31306__$1,opts__$2,tag_data__$2,ufv____$1,output_schema31304__$1,meta31415){return (new clustermap.components.tag_histogram.t31414(output_checker31307__$1,query__$2,map__31410__$2,owner__$3,metrics__$2,map__31412__$2,map__31411__$2,map__31408__$2,G__31308__$1,G__31407__$2,map__31413__$2,tag_agg_data__$2,tag_histogram__$3,G__31406__$2,G__31310__$1,filter_spec__$2,map__31409__$2,tag_type__$2,input_schema31305__$1,G__31309__$1,validate__6034__auto____$1,id__$2,input_checker31306__$1,opts__$2,tag_data__$2,ufv____$1,output_schema31304__$1,meta31415));
});})(map__31411,map__31411__$1,map__31412,map__31412__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31413,map__31413__$1,opts__$1,id__$1,G__31406,map__31408,map__31408__$1,map__31409,map__31409__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31407,map__31410,map__31410__$1,opts,id,validate__6034__auto__,ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
}
return (new clustermap.components.tag_histogram.t31414(output_checker31307_31499,query__$1,map__31410__$1,owner__$2,metrics__$1,map__31412__$1,map__31411__$1,map__31408__$1,G__31308,G__31407__$1,map__31413__$1,tag_agg_data__$1,tag_histogram__$2,G__31406__$1,G__31310,filter_spec__$1,map__31409__$1,tag_type__$1,input_schema31305_31497,G__31309,validate__6034__auto__,id__$1,input_checker31306_31498,opts__$1,tag_data__$1,ufv___31495,output_schema31304_31496,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31516 = output_checker31307_31499.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31516))
{var error__6036__auto___31517 = temp__4126__auto___31516;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31517)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31517,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31304_31496,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31495,output_schema31304_31496,input_schema31305_31497,input_checker31306_31498,output_checker31307_31499))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31304_31496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31305_31497], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31303){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31303);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31303){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
