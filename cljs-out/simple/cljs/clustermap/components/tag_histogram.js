// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.tag_histogram');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__30850,metrics,tag_data,tag_agg_data,p__30851){var map__30894 = p__30850;var map__30894__$1 = ((cljs.core.seq_QMARK_.call(null,map__30894))?cljs.core.apply.call(null,cljs.core.hash_map,map__30894):map__30894);var query = map__30894__$1;var map__30895 = p__30851;var map__30895__$1 = ((cljs.core.seq_QMARK_.call(null,map__30895))?cljs.core.apply.call(null,cljs.core.hash_map,map__30895):map__30895);var opts = map__30895__$1;var y1_title = cljs.core.get.call(null,map__30895__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__30895__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function iter__30896(s__30897){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function (){var s__30897__$1 = s__30897;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30897__$1);if(temp__4126__auto__)
{var s__30897__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30897__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30897__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30899 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30898 = (0);while(true){
if((i__30898 < size__4376__auto__))
{var map__30910 = cljs.core._nth.call(null,c__4375__auto__,i__30898);var map__30910__$1 = ((cljs.core.seq_QMARK_.call(null,map__30910))?cljs.core.apply.call(null,cljs.core.hash_map,map__30910):map__30910);var metric_spec = map__30910__$1;var title = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__30899,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__30898,map__30910,map__30910__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30899,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function iter__30911(s__30912){return (new cljs.core.LazySeq(null,((function (i__30898,map__30910,map__30910__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30899,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function (){var s__30912__$1 = s__30912;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30912__$1);if(temp__4126__auto____$1)
{var s__30912__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30912__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__30912__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__30914 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__30913 = (0);while(true){
if((i__30913 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__30913);cljs.core.chunk_append.call(null,b__30914,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30936 = (i__30913 + (1));
i__30913 = G__30936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30914),iter__30911.call(null,cljs.core.chunk_rest.call(null,s__30912__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30914),null);
}
} else
{var record = cljs.core.first.call(null,s__30912__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30911.call(null,cljs.core.rest.call(null,s__30912__$2)));
}
} else
{return null;
}
break;
}
});})(i__30898,map__30910,map__30910__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30899,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
,null,null));
});})(i__30898,map__30910,map__30910__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30899,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__30937 = (i__30898 + (1));
i__30898 = G__30937;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30899),iter__30896.call(null,cljs.core.chunk_rest.call(null,s__30897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30899),null);
}
} else
{var map__30915 = cljs.core.first.call(null,s__30897__$2);var map__30915__$1 = ((cljs.core.seq_QMARK_.call(null,map__30915))?cljs.core.apply.call(null,cljs.core.hash_map,map__30915):map__30915);var metric_spec = map__30915__$1;var title = cljs.core.get.call(null,map__30915__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30915__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__30915,map__30915__$1,metric_spec,title,metric,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function iter__30916(s__30917){return (new cljs.core.LazySeq(null,((function (map__30915,map__30915__$1,metric_spec,title,metric,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function (){var s__30917__$1 = s__30917;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30917__$1);if(temp__4126__auto____$1)
{var s__30917__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30917__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30917__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30919 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30918 = (0);while(true){
if((i__30918 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__30918);cljs.core.chunk_append.call(null,b__30919,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30938 = (i__30918 + (1));
i__30918 = G__30938;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30919),iter__30916.call(null,cljs.core.chunk_rest.call(null,s__30917__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30919),null);
}
} else
{var record = cljs.core.first.call(null,s__30917__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30916.call(null,cljs.core.rest.call(null,s__30917__$2)));
}
} else
{return null;
}
break;
}
});})(map__30915,map__30915__$1,metric_spec,title,metric,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
,null,null));
});})(map__30915,map__30915__$1,metric_spec,title,metric,s__30897__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__30896.call(null,cljs.core.rest.call(null,s__30897__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function iter__30920(s__30921){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function (){var s__30921__$1 = s__30921;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30921__$1);if(temp__4126__auto__)
{var s__30921__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30921__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30921__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30923 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30922 = (0);while(true){
if((i__30922 < size__4376__auto__))
{var map__30926 = cljs.core._nth.call(null,c__4375__auto__,i__30922);var map__30926__$1 = ((cljs.core.seq_QMARK_.call(null,map__30926))?cljs.core.apply.call(null,cljs.core.hash_map,map__30926):map__30926);var label_formatter = cljs.core.get.call(null,map__30926__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30926__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__30923,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__30939 = (i__30922 + (1));
i__30922 = G__30939;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30923),iter__30920.call(null,cljs.core.chunk_rest.call(null,s__30921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30923),null);
}
} else
{var map__30927 = cljs.core.first.call(null,s__30921__$2);var map__30927__$1 = ((cljs.core.seq_QMARK_.call(null,map__30927))?cljs.core.apply.call(null,cljs.core.hash_map,map__30927):map__30927);var label_formatter = cljs.core.get.call(null,map__30927__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30927__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__30920.call(null,cljs.core.rest.call(null,s__30921__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function iter__30928(s__30929){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title){
return (function (){var s__30929__$1 = s__30929;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30929__$1);if(temp__4126__auto__)
{var s__30929__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30929__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30929__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30931 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30930 = (0);while(true){
if((i__30930 < size__4376__auto__))
{var vec__30934 = cljs.core._nth.call(null,c__4375__auto__,i__30930);var y = cljs.core.nth.call(null,vec__30934,(0),null);var i = cljs.core.nth.call(null,vec__30934,(1),null);cljs.core.chunk_append.call(null,b__30931,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__30940 = (i__30930 + (1));
i__30930 = G__30940;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30931),iter__30928.call(null,cljs.core.chunk_rest.call(null,s__30929__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30931),null);
}
} else
{var vec__30935 = cljs.core.first.call(null,s__30929__$2);var y = cljs.core.nth.call(null,vec__30935,(0),null);var i = cljs.core.nth.call(null,vec__30935,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__30928.call(null,cljs.core.rest.call(null,s__30929__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30894,map__30894__$1,query,map__30895,map__30895__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
clustermap.components.tag_histogram.request_tag_data = (function request_tag_data(resource,tag_type){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.tags_of_type,tag_type);
});
clustermap.components.tag_histogram.request_tag_agg_data = (function request_tag_agg_data(resource,query){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.nested_aggregation,query);
});
var ufv___30999 = schema.utils.use_fn_validation;var output_schema30942_31000 = schema.core.Any;var input_schema30943_31001 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker30944_31002 = schema.core.checker.call(null,input_schema30943_31001);var output_checker30945_31003 = schema.core.checker.call(null,output_schema30942_31000);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function tag_histogram(G__30946,G__30947,G__30948){var validate__6034__auto__ = ufv___30999.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30946,G__30947,G__30948], null);var temp__4126__auto___31005 = input_checker30944_31002.call(null,args__6035__auto___31004);if(cljs.core.truth_(temp__4126__auto___31005))
{var error__6036__auto___31006 = temp__4126__auto___31005;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31006)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31006,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31004,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30943_31001,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__30977 = G__30946;var map__30979 = G__30977;var map__30979__$1 = ((cljs.core.seq_QMARK_.call(null,map__30979))?cljs.core.apply.call(null,cljs.core.hash_map,map__30979):map__30979);var map__30980 = cljs.core.get.call(null,map__30979__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30980__$1 = ((cljs.core.seq_QMARK_.call(null,map__30980))?cljs.core.apply.call(null,cljs.core.hash_map,map__30980):map__30980);var tag_histogram__$1 = map__30980__$1;var query = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__30979__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__30947;var G__30978 = G__30948;var map__30981 = G__30978;var map__30981__$1 = ((cljs.core.seq_QMARK_.call(null,map__30981))?cljs.core.apply.call(null,cljs.core.hash_map,map__30981):map__30981);var opts = map__30981__$1;var id = cljs.core.get.call(null,map__30981__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__30977__$1 = G__30977;var owner__$1 = owner;var G__30978__$1 = G__30978;while(true){
var map__30982 = G__30977__$1;var map__30982__$1 = ((cljs.core.seq_QMARK_.call(null,map__30982))?cljs.core.apply.call(null,cljs.core.hash_map,map__30982):map__30982);var map__30983 = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30983__$1 = ((cljs.core.seq_QMARK_.call(null,map__30983))?cljs.core.apply.call(null,cljs.core.hash_map,map__30983):map__30983);var tag_histogram__$2 = map__30983__$1;var query__$1 = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__30984 = G__30978__$1;var map__30984__$1 = ((cljs.core.seq_QMARK_.call(null,map__30984))?cljs.core.apply.call(null,cljs.core.hash_map,map__30984):map__30984);var opts__$1 = map__30984__$1;var id__$1 = cljs.core.get.call(null,map__30984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t30985 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t30985 = (function (query,input_checker30944,map__30980,owner,metrics,G__30947,map__30984,tag_agg_data,tag_histogram,G__30946,G__30948,filter_spec,output_schema30942,G__30977,map__30981,tag_type,output_checker30945,map__30979,map__30983,input_schema30943,map__30982,validate__6034__auto__,id,G__30978,opts,tag_data,ufv__,meta30986){
this.query = query;
this.input_checker30944 = input_checker30944;
this.map__30980 = map__30980;
this.owner = owner;
this.metrics = metrics;
this.G__30947 = G__30947;
this.map__30984 = map__30984;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__30946 = G__30946;
this.G__30948 = G__30948;
this.filter_spec = filter_spec;
this.output_schema30942 = output_schema30942;
this.G__30977 = G__30977;
this.map__30981 = map__30981;
this.tag_type = tag_type;
this.output_checker30945 = output_checker30945;
this.map__30979 = map__30979;
this.map__30983 = map__30983;
this.input_schema30943 = input_schema30943;
this.map__30982 = map__30982;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30978 = G__30978;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.meta30986 = meta30986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t30985.cljs$lang$type = true;
clustermap.components.tag_histogram.t30985.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t30985";
clustermap.components.tag_histogram.t30985.cljs$lang$ctorPrWriter = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t30985");
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.t30985.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t30985.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.t30985.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t30985.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (_,p__30988,___$1){var self__ = this;
var map__30989 = p__30988;var map__30989__$1 = ((cljs.core.seq_QMARK_.call(null,map__30989))?cljs.core.apply.call(null,cljs.core.hash_map,map__30989):map__30989);var map__30990 = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30990__$1 = ((cljs.core.seq_QMARK_.call(null,map__30990))?cljs.core.apply.call(null,cljs.core.hash_map,map__30990):map__30990);var prev_query = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.t30985.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t30985.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (_,p__30991,p__30992){var self__ = this;
var map__30993 = p__30991;var map__30993__$1 = ((cljs.core.seq_QMARK_.call(null,map__30993))?cljs.core.apply.call(null,cljs.core.hash_map,map__30993):map__30993);var map__30994 = cljs.core.get.call(null,map__30993__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30994__$1 = ((cljs.core.seq_QMARK_.call(null,map__30994))?cljs.core.apply.call(null,cljs.core.hash_map,map__30994):map__30994);var next_query = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__30993__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30995 = p__30992;var map__30995__$1 = ((cljs.core.seq_QMARK_.call(null,map__30995))?cljs.core.apply.call(null,cljs.core.hash_map,map__30995):map__30995);var next_tag_data_resource = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551));var next_tag_agg_data_resource = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{clustermap.components.tag_histogram.request_tag_data.call(null,next_tag_data_resource,next_tag_type);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.tag_histogram.request_tag_agg_data.call(null,next_tag_agg_data_resource,cljs.core.merge.call(null,next_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null)));
} else
{return null;
}
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.t30985.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t30985.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-data-resource");var tadr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-agg-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)], null),response);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244),tadr);
clustermap.ordered_resource.retrieve_responses.call(null,tadr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (p__30996){var map__30997 = p__30996;var map__30997__$1 = ((cljs.core.seq_QMARK_.call(null,map__30997))?cljs.core.apply.call(null,cljs.core.hash_map,map__30997):map__30997);var response = map__30997__$1;var records = cljs.core.get.call(null,map__30997__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAG AGGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)], null),records);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,tadr,last_dims,w,h,___$1,map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__30998 = om.core.get_node.call(null,self__.owner,"chart");var G__30998__$1 = (((G__30998 == null))?null:jayq.core.$.call(null,G__30998));var G__30998__$2 = (((G__30998__$1 == null))?null:G__30998__$1.highcharts());var G__30998__$3 = (((G__30998__$2 == null))?null:G__30998__$2.reflow());return G__30998__$3;
} else
{return null;
}
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
);
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.t30985.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t30985.prototype.om$core$IRender$render$arity$1 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.t30985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (_30987){var self__ = this;
var _30987__$1 = this;return self__.meta30986;
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.t30985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function (_30987,meta30986__$1){var self__ = this;
var _30987__$1 = this;return (new clustermap.components.tag_histogram.t30985(self__.query,self__.input_checker30944,self__.map__30980,self__.owner,self__.metrics,self__.G__30947,self__.map__30984,self__.tag_agg_data,self__.tag_histogram,self__.G__30946,self__.G__30948,self__.filter_spec,self__.output_schema30942,self__.G__30977,self__.map__30981,self__.tag_type,self__.output_checker30945,self__.map__30979,self__.map__30983,self__.input_schema30943,self__.map__30982,self__.validate__6034__auto__,self__.id,self__.G__30978,self__.opts,self__.tag_data,self__.ufv__,meta30986__$1));
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
clustermap.components.tag_histogram.__GT_t30985 = ((function (map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003){
return (function __GT_t30985(query__$2,input_checker30944__$1,map__30980__$2,owner__$3,metrics__$2,G__30947__$1,map__30984__$2,tag_agg_data__$2,tag_histogram__$3,G__30946__$1,G__30948__$1,filter_spec__$2,output_schema30942__$1,G__30977__$2,map__30981__$2,tag_type__$2,output_checker30945__$1,map__30979__$2,map__30983__$2,input_schema30943__$1,map__30982__$2,validate__6034__auto____$1,id__$2,G__30978__$2,opts__$2,tag_data__$2,ufv____$1,meta30986){return (new clustermap.components.tag_histogram.t30985(query__$2,input_checker30944__$1,map__30980__$2,owner__$3,metrics__$2,G__30947__$1,map__30984__$2,tag_agg_data__$2,tag_histogram__$3,G__30946__$1,G__30948__$1,filter_spec__$2,output_schema30942__$1,G__30977__$2,map__30981__$2,tag_type__$2,output_checker30945__$1,map__30979__$2,map__30983__$2,input_schema30943__$1,map__30982__$2,validate__6034__auto____$1,id__$2,G__30978__$2,opts__$2,tag_data__$2,ufv____$1,meta30986));
});})(map__30982,map__30982__$1,map__30983,map__30983__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30984,map__30984__$1,opts__$1,id__$1,G__30977,map__30979,map__30979__$1,map__30980,map__30980__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30978,map__30981,map__30981__$1,opts,id,validate__6034__auto__,ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
}
return (new clustermap.components.tag_histogram.t30985(query__$1,input_checker30944_31002,map__30980__$1,owner__$2,metrics__$1,G__30947,map__30984__$1,tag_agg_data__$1,tag_histogram__$2,G__30946,G__30948,filter_spec__$1,output_schema30942_31000,G__30977__$1,map__30981__$1,tag_type__$1,output_checker30945_31003,map__30979__$1,map__30983__$1,input_schema30943_31001,map__30982__$1,validate__6034__auto__,id__$1,G__30978__$1,opts__$1,tag_data__$1,ufv___30999,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31007 = output_checker30945_31003.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31007))
{var error__6036__auto___31008 = temp__4126__auto___31007;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31008,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30942_31000,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30999,output_schema30942_31000,input_schema30943_31001,input_checker30944_31002,output_checker30945_31003))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema30942_31000,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30943_31001], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m30941){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m30941);
});
__GT_tag_histogram = function(cursor__7850__auto__,m30941){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m30941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
