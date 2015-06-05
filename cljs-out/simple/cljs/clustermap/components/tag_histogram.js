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
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31200,metrics,tag_data,tag_agg_data,p__31201){var map__31244 = p__31200;var map__31244__$1 = ((cljs.core.seq_QMARK_.call(null,map__31244))?cljs.core.apply.call(null,cljs.core.hash_map,map__31244):map__31244);var query = map__31244__$1;var map__31245 = p__31201;var map__31245__$1 = ((cljs.core.seq_QMARK_.call(null,map__31245))?cljs.core.apply.call(null,cljs.core.hash_map,map__31245):map__31245);var opts = map__31245__$1;var y1_title = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function iter__31246(s__31247){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function (){var s__31247__$1 = s__31247;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31247__$1);if(temp__4126__auto__)
{var s__31247__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31247__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31247__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31249 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31248 = (0);while(true){
if((i__31248 < size__4376__auto__))
{var map__31260 = cljs.core._nth.call(null,c__4375__auto__,i__31248);var map__31260__$1 = ((cljs.core.seq_QMARK_.call(null,map__31260))?cljs.core.apply.call(null,cljs.core.hash_map,map__31260):map__31260);var metric_spec = map__31260__$1;var title = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31249,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31248,map__31260,map__31260__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31249,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function iter__31261(s__31262){return (new cljs.core.LazySeq(null,((function (i__31248,map__31260,map__31260__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31249,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function (){var s__31262__$1 = s__31262;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31262__$1);if(temp__4126__auto____$1)
{var s__31262__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31262__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31262__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31264 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31263 = (0);while(true){
if((i__31263 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31263);cljs.core.chunk_append.call(null,b__31264,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31286 = (i__31263 + (1));
i__31263 = G__31286;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31264),iter__31261.call(null,cljs.core.chunk_rest.call(null,s__31262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31264),null);
}
} else
{var record = cljs.core.first.call(null,s__31262__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31261.call(null,cljs.core.rest.call(null,s__31262__$2)));
}
} else
{return null;
}
break;
}
});})(i__31248,map__31260,map__31260__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31249,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31248,map__31260,map__31260__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31249,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31287 = (i__31248 + (1));
i__31248 = G__31287;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31249),iter__31246.call(null,cljs.core.chunk_rest.call(null,s__31247__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31249),null);
}
} else
{var map__31265 = cljs.core.first.call(null,s__31247__$2);var map__31265__$1 = ((cljs.core.seq_QMARK_.call(null,map__31265))?cljs.core.apply.call(null,cljs.core.hash_map,map__31265):map__31265);var metric_spec = map__31265__$1;var title = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31265,map__31265__$1,metric_spec,title,metric,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function iter__31266(s__31267){return (new cljs.core.LazySeq(null,((function (map__31265,map__31265__$1,metric_spec,title,metric,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function (){var s__31267__$1 = s__31267;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31267__$1);if(temp__4126__auto____$1)
{var s__31267__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31267__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31267__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31269 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31268 = (0);while(true){
if((i__31268 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31268);cljs.core.chunk_append.call(null,b__31269,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31288 = (i__31268 + (1));
i__31268 = G__31288;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31269),iter__31266.call(null,cljs.core.chunk_rest.call(null,s__31267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31269),null);
}
} else
{var record = cljs.core.first.call(null,s__31267__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31266.call(null,cljs.core.rest.call(null,s__31267__$2)));
}
} else
{return null;
}
break;
}
});})(map__31265,map__31265__$1,metric_spec,title,metric,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31265,map__31265__$1,metric_spec,title,metric,s__31247__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31246.call(null,cljs.core.rest.call(null,s__31247__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function iter__31270(s__31271){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function (){var s__31271__$1 = s__31271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31271__$1);if(temp__4126__auto__)
{var s__31271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31271__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31271__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31273 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31272 = (0);while(true){
if((i__31272 < size__4376__auto__))
{var map__31276 = cljs.core._nth.call(null,c__4375__auto__,i__31272);var map__31276__$1 = ((cljs.core.seq_QMARK_.call(null,map__31276))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);var label_formatter = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31273,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31289 = (i__31272 + (1));
i__31272 = G__31289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31273),iter__31270.call(null,cljs.core.chunk_rest.call(null,s__31271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31273),null);
}
} else
{var map__31277 = cljs.core.first.call(null,s__31271__$2);var map__31277__$1 = ((cljs.core.seq_QMARK_.call(null,map__31277))?cljs.core.apply.call(null,cljs.core.hash_map,map__31277):map__31277);var label_formatter = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31270.call(null,cljs.core.rest.call(null,s__31271__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function iter__31278(s__31279){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title){
return (function (){var s__31279__$1 = s__31279;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31279__$1);if(temp__4126__auto__)
{var s__31279__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31279__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31279__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31281 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31280 = (0);while(true){
if((i__31280 < size__4376__auto__))
{var vec__31284 = cljs.core._nth.call(null,c__4375__auto__,i__31280);var y = cljs.core.nth.call(null,vec__31284,(0),null);var i = cljs.core.nth.call(null,vec__31284,(1),null);cljs.core.chunk_append.call(null,b__31281,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31290 = (i__31280 + (1));
i__31280 = G__31290;
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
{var vec__31285 = cljs.core.first.call(null,s__31279__$2);var y = cljs.core.nth.call(null,vec__31285,(0),null);var i = cljs.core.nth.call(null,vec__31285,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31278.call(null,cljs.core.rest.call(null,s__31279__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31244,map__31244__$1,query,map__31245,map__31245__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31483 = schema.utils.use_fn_validation;var output_schema31292_31484 = schema.core.Any;var input_schema31293_31485 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31294_31486 = schema.core.checker.call(null,input_schema31293_31485);var output_checker31295_31487 = schema.core.checker.call(null,output_schema31292_31484);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function tag_histogram(G__31296,G__31297,G__31298){var validate__6034__auto__ = ufv___31483.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31488 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31296,G__31297,G__31298], null);var temp__4126__auto___31489 = input_checker31294_31486.call(null,args__6035__auto___31488);if(cljs.core.truth_(temp__4126__auto___31489))
{var error__6036__auto___31490 = temp__4126__auto___31489;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31490)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31490,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31488,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31293_31485,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31394 = G__31296;var map__31396 = G__31394;var map__31396__$1 = ((cljs.core.seq_QMARK_.call(null,map__31396))?cljs.core.apply.call(null,cljs.core.hash_map,map__31396):map__31396);var map__31397 = cljs.core.get.call(null,map__31396__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31397__$1 = ((cljs.core.seq_QMARK_.call(null,map__31397))?cljs.core.apply.call(null,cljs.core.hash_map,map__31397):map__31397);var tag_histogram__$1 = map__31397__$1;var query = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31396__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31297;var G__31395 = G__31298;var map__31398 = G__31395;var map__31398__$1 = ((cljs.core.seq_QMARK_.call(null,map__31398))?cljs.core.apply.call(null,cljs.core.hash_map,map__31398):map__31398);var opts = map__31398__$1;var id = cljs.core.get.call(null,map__31398__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31394__$1 = G__31394;var owner__$1 = owner;var G__31395__$1 = G__31395;while(true){
var map__31399 = G__31394__$1;var map__31399__$1 = ((cljs.core.seq_QMARK_.call(null,map__31399))?cljs.core.apply.call(null,cljs.core.hash_map,map__31399):map__31399);var map__31400 = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31400__$1 = ((cljs.core.seq_QMARK_.call(null,map__31400))?cljs.core.apply.call(null,cljs.core.hash_map,map__31400):map__31400);var tag_histogram__$2 = map__31400__$1;var query__$1 = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31401 = G__31395__$1;var map__31401__$1 = ((cljs.core.seq_QMARK_.call(null,map__31401))?cljs.core.apply.call(null,cljs.core.hash_map,map__31401):map__31401);var opts__$1 = map__31401__$1;var id__$1 = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31402 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31402 = (function (map__31401,query,G__31395,owner,metrics,map__31397,G__31296,input_checker31294,tag_agg_data,tag_histogram,G__31298,filter_spec,input_schema31293,map__31399,tag_type,map__31396,output_checker31295,map__31398,G__31297,G__31394,validate__6034__auto__,id,map__31400,opts,tag_data,ufv__,output_schema31292,meta31403){
this.map__31401 = map__31401;
this.query = query;
this.G__31395 = G__31395;
this.owner = owner;
this.metrics = metrics;
this.map__31397 = map__31397;
this.G__31296 = G__31296;
this.input_checker31294 = input_checker31294;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__31298 = G__31298;
this.filter_spec = filter_spec;
this.input_schema31293 = input_schema31293;
this.map__31399 = map__31399;
this.tag_type = tag_type;
this.map__31396 = map__31396;
this.output_checker31295 = output_checker31295;
this.map__31398 = map__31398;
this.G__31297 = G__31297;
this.G__31394 = G__31394;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map__31400 = map__31400;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.output_schema31292 = output_schema31292;
this.meta31403 = meta31403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31402.cljs$lang$type = true;
clustermap.components.tag_histogram.t31402.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31402";
clustermap.components.tag_histogram.t31402.cljs$lang$ctorPrWriter = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31402");
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.t31402.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31402.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.t31402.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31402.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (_,p__31405,___$1){var self__ = this;
var map__31406 = p__31405;var map__31406__$1 = ((cljs.core.seq_QMARK_.call(null,map__31406))?cljs.core.apply.call(null,cljs.core.hash_map,map__31406):map__31406);var map__31407 = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31407__$1 = ((cljs.core.seq_QMARK_.call(null,map__31407))?cljs.core.apply.call(null,cljs.core.hash_map,map__31407):map__31407);var prev_query = cljs.core.get.call(null,map__31407__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31407__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31407__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31407__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.t31402.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31402.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (_,p__31408,p__31409){var self__ = this;
var map__31410 = p__31408;var map__31410__$1 = ((cljs.core.seq_QMARK_.call(null,map__31410))?cljs.core.apply.call(null,cljs.core.hash_map,map__31410):map__31410);var map__31411 = cljs.core.get.call(null,map__31410__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31411__$1 = ((cljs.core.seq_QMARK_.call(null,map__31411))?cljs.core.apply.call(null,cljs.core.hash_map,map__31411):map__31411);var next_query = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31410__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31412 = p__31409;var map__31412__$1 = ((cljs.core.seq_QMARK_.call(null,map__31412))?cljs.core.apply.call(null,cljs.core.hash_map,map__31412):map__31412);var fetch_tag_data_fn = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31412__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___31491 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___31491,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___31491,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (state_31430){var state_val_31431 = (state_31430[(1)]);if((state_val_31431 === (5)))
{var inst_31428 = (state_31430[(2)]);var state_31430__$1 = state_31430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31430__$1,inst_31428);
} else
{if((state_val_31431 === (4)))
{var state_31430__$1 = state_31430;var statearr_31432_31492 = state_31430__$1;(statearr_31432_31492[(2)] = null);
(statearr_31432_31492[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31431 === (3)))
{var inst_31415 = (state_31430[(7)]);var inst_31417 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31418 = ["HISTOGRAM TAGS: ",inst_31415];var inst_31419 = (new cljs.core.PersistentVector(null,2,(5),inst_31417,inst_31418,null));var inst_31420 = cljs.core.clj__GT_js.call(null,inst_31419);var inst_31421 = console.log(inst_31420);var inst_31422 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31423 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31424 = (new cljs.core.PersistentVector(null,1,(5),inst_31422,inst_31423,null));var inst_31425 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31424,inst_31415);var state_31430__$1 = (function (){var statearr_31433 = state_31430;(statearr_31433[(8)] = inst_31421);
return statearr_31433;
})();var statearr_31434_31493 = state_31430__$1;(statearr_31434_31493[(2)] = inst_31425);
(statearr_31434_31493[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31431 === (2)))
{var inst_31415 = (state_31430[(7)]);var inst_31415__$1 = (state_31430[(2)]);var state_31430__$1 = (function (){var statearr_31435 = state_31430;(statearr_31435[(7)] = inst_31415__$1);
return statearr_31435;
})();if(cljs.core.truth_(inst_31415__$1))
{var statearr_31436_31494 = state_31430__$1;(statearr_31436_31494[(1)] = (3));
} else
{var statearr_31437_31495 = state_31430__$1;(statearr_31437_31495[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31431 === (1)))
{var inst_31413 = fetch_tag_data_fn.call(null,next_tag_type);var state_31430__$1 = state_31430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31430__$1,(2),inst_31413);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___31491,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;return ((function (switch__9110__auto__,c__9125__auto___31491,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31441 = [null,null,null,null,null,null,null,null,null];(statearr_31441[(0)] = state_machine__9111__auto__);
(statearr_31441[(1)] = (1));
return statearr_31441;
});
var state_machine__9111__auto____1 = (function (state_31430){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31430);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31442){if((e31442 instanceof Object))
{var ex__9114__auto__ = e31442;var statearr_31443_31496 = state_31430;(statearr_31443_31496[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31442;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31497 = state_31430;
state_31430 = G__31497;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31430){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___31491,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
})();var state__9127__auto__ = (function (){var statearr_31444 = f__9126__auto__.call(null);(statearr_31444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___31491);
return statearr_31444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___31491,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (state_31467){var state_val_31468 = (state_31467[(1)]);if((state_val_31468 === (5)))
{var inst_31465 = (state_31467[(2)]);var state_31467__$1 = state_31467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31467__$1,inst_31465);
} else
{if((state_val_31468 === (4)))
{var state_31467__$1 = state_31467;var statearr_31469_31498 = state_31467__$1;(statearr_31469_31498[(2)] = null);
(statearr_31469_31498[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31468 === (3)))
{var inst_31451 = (state_31467[(7)]);var inst_31453 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31454 = ["HISTOGRAM TAG AGGS: ",inst_31451];var inst_31455 = (new cljs.core.PersistentVector(null,2,(5),inst_31453,inst_31454,null));var inst_31456 = cljs.core.clj__GT_js.call(null,inst_31455);var inst_31457 = console.log(inst_31456);var inst_31458 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31459 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31460 = (new cljs.core.PersistentVector(null,1,(5),inst_31458,inst_31459,null));var inst_31461 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31451);var inst_31462 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31460,inst_31461);var state_31467__$1 = (function (){var statearr_31470 = state_31467;(statearr_31470[(8)] = inst_31457);
return statearr_31470;
})();var statearr_31471_31499 = state_31467__$1;(statearr_31471_31499[(2)] = inst_31462);
(statearr_31471_31499[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31468 === (2)))
{var inst_31451 = (state_31467[(7)]);var inst_31451__$1 = (state_31467[(2)]);var state_31467__$1 = (function (){var statearr_31472 = state_31467;(statearr_31472[(7)] = inst_31451__$1);
return statearr_31472;
})();if(cljs.core.truth_(inst_31451__$1))
{var statearr_31473_31500 = state_31467__$1;(statearr_31473_31500[(1)] = (3));
} else
{var statearr_31474_31501 = state_31467__$1;(statearr_31474_31501[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31468 === (1)))
{var inst_31445 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31446 = [next_filter_spec];var inst_31447 = cljs.core.PersistentHashMap.fromArrays(inst_31445,inst_31446);var inst_31448 = cljs.core.merge.call(null,next_query,inst_31447);var inst_31449 = fetch_tag_agg_data_fn.call(null,inst_31448);var state_31467__$1 = state_31467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31467__$1,(2),inst_31449);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31478 = [null,null,null,null,null,null,null,null,null];(statearr_31478[(0)] = state_machine__9111__auto__);
(statearr_31478[(1)] = (1));
return statearr_31478;
});
var state_machine__9111__auto____1 = (function (state_31467){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31467);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31479){if((e31479 instanceof Object))
{var ex__9114__auto__ = e31479;var statearr_31480_31502 = state_31467;(statearr_31480_31502[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31479;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31503 = state_31467;
state_31467 = G__31503;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
})();var state__9127__auto__ = (function (){var statearr_31481 = f__9126__auto__.call(null);(statearr_31481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31410,map__31410__$1,map__31411,map__31411__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31412,map__31412__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.t31402.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31402.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31482 = om.core.get_node.call(null,self__.owner,"chart");var G__31482__$1 = (((G__31482 == null))?null:jayq.core.$.call(null,G__31482));var G__31482__$2 = (((G__31482__$1 == null))?null:G__31482__$1.highcharts());var G__31482__$3 = (((G__31482__$2 == null))?null:G__31482__$2.reflow());return G__31482__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
);
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.t31402.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31402.prototype.om$core$IRender$render$arity$1 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.t31402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (_31404){var self__ = this;
var _31404__$1 = this;return self__.meta31403;
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.t31402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function (_31404,meta31403__$1){var self__ = this;
var _31404__$1 = this;return (new clustermap.components.tag_histogram.t31402(self__.map__31401,self__.query,self__.G__31395,self__.owner,self__.metrics,self__.map__31397,self__.G__31296,self__.input_checker31294,self__.tag_agg_data,self__.tag_histogram,self__.G__31298,self__.filter_spec,self__.input_schema31293,self__.map__31399,self__.tag_type,self__.map__31396,self__.output_checker31295,self__.map__31398,self__.G__31297,self__.G__31394,self__.validate__6034__auto__,self__.id,self__.map__31400,self__.opts,self__.tag_data,self__.ufv__,self__.output_schema31292,meta31403__$1));
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
clustermap.components.tag_histogram.__GT_t31402 = ((function (map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487){
return (function __GT_t31402(map__31401__$2,query__$2,G__31395__$2,owner__$3,metrics__$2,map__31397__$2,G__31296__$1,input_checker31294__$1,tag_agg_data__$2,tag_histogram__$3,G__31298__$1,filter_spec__$2,input_schema31293__$1,map__31399__$2,tag_type__$2,map__31396__$2,output_checker31295__$1,map__31398__$2,G__31297__$1,G__31394__$2,validate__6034__auto____$1,id__$2,map__31400__$2,opts__$2,tag_data__$2,ufv____$1,output_schema31292__$1,meta31403){return (new clustermap.components.tag_histogram.t31402(map__31401__$2,query__$2,G__31395__$2,owner__$3,metrics__$2,map__31397__$2,G__31296__$1,input_checker31294__$1,tag_agg_data__$2,tag_histogram__$3,G__31298__$1,filter_spec__$2,input_schema31293__$1,map__31399__$2,tag_type__$2,map__31396__$2,output_checker31295__$1,map__31398__$2,G__31297__$1,G__31394__$2,validate__6034__auto____$1,id__$2,map__31400__$2,opts__$2,tag_data__$2,ufv____$1,output_schema31292__$1,meta31403));
});})(map__31399,map__31399__$1,map__31400,map__31400__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31401,map__31401__$1,opts__$1,id__$1,G__31394,map__31396,map__31396__$1,map__31397,map__31397__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31395,map__31398,map__31398__$1,opts,id,validate__6034__auto__,ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
}
return (new clustermap.components.tag_histogram.t31402(map__31401__$1,query__$1,G__31395__$1,owner__$2,metrics__$1,map__31397__$1,G__31296,input_checker31294_31486,tag_agg_data__$1,tag_histogram__$2,G__31298,filter_spec__$1,input_schema31293_31485,map__31399__$1,tag_type__$1,map__31396__$1,output_checker31295_31487,map__31398__$1,G__31297,G__31394__$1,validate__6034__auto__,id__$1,map__31400__$1,opts__$1,tag_data__$1,ufv___31483,output_schema31292_31484,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31504 = output_checker31295_31487.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31504))
{var error__6036__auto___31505 = temp__4126__auto___31504;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31505)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31505,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31292_31484,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31483,output_schema31292_31484,input_schema31293_31485,input_checker31294_31486,output_checker31295_31487))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31292_31484,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31293_31485], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31291){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31291);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31291){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
