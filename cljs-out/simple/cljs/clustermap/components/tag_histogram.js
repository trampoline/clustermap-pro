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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__30402,metrics,tag_data,tag_agg_data,p__30403){var map__30446 = p__30402;var map__30446__$1 = ((cljs.core.seq_QMARK_.call(null,map__30446))?cljs.core.apply.call(null,cljs.core.hash_map,map__30446):map__30446);var query = map__30446__$1;var map__30447 = p__30403;var map__30447__$1 = ((cljs.core.seq_QMARK_.call(null,map__30447))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);var opts = map__30447__$1;var y1_title = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function iter__30448(s__30449){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function (){var s__30449__$1 = s__30449;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30449__$1);if(temp__4126__auto__)
{var s__30449__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30449__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30449__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30451 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30450 = (0);while(true){
if((i__30450 < size__4376__auto__))
{var map__30462 = cljs.core._nth.call(null,c__4375__auto__,i__30450);var map__30462__$1 = ((cljs.core.seq_QMARK_.call(null,map__30462))?cljs.core.apply.call(null,cljs.core.hash_map,map__30462):map__30462);var metric_spec = map__30462__$1;var title = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__30451,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__30450,map__30462,map__30462__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30451,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function iter__30463(s__30464){return (new cljs.core.LazySeq(null,((function (i__30450,map__30462,map__30462__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30451,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function (){var s__30464__$1 = s__30464;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30464__$1);if(temp__4126__auto____$1)
{var s__30464__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30464__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__30464__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__30466 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__30465 = (0);while(true){
if((i__30465 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__30465);cljs.core.chunk_append.call(null,b__30466,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30488 = (i__30465 + (1));
i__30465 = G__30488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30466),iter__30463.call(null,cljs.core.chunk_rest.call(null,s__30464__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30466),null);
}
} else
{var record = cljs.core.first.call(null,s__30464__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30463.call(null,cljs.core.rest.call(null,s__30464__$2)));
}
} else
{return null;
}
break;
}
});})(i__30450,map__30462,map__30462__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30451,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
,null,null));
});})(i__30450,map__30462,map__30462__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30451,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__30489 = (i__30450 + (1));
i__30450 = G__30489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30451),iter__30448.call(null,cljs.core.chunk_rest.call(null,s__30449__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30451),null);
}
} else
{var map__30467 = cljs.core.first.call(null,s__30449__$2);var map__30467__$1 = ((cljs.core.seq_QMARK_.call(null,map__30467))?cljs.core.apply.call(null,cljs.core.hash_map,map__30467):map__30467);var metric_spec = map__30467__$1;var title = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__30467,map__30467__$1,metric_spec,title,metric,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function iter__30468(s__30469){return (new cljs.core.LazySeq(null,((function (map__30467,map__30467__$1,metric_spec,title,metric,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function (){var s__30469__$1 = s__30469;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30469__$1);if(temp__4126__auto____$1)
{var s__30469__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30469__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30469__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30471 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30470 = (0);while(true){
if((i__30470 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__30470);cljs.core.chunk_append.call(null,b__30471,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30490 = (i__30470 + (1));
i__30470 = G__30490;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30471),iter__30468.call(null,cljs.core.chunk_rest.call(null,s__30469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30471),null);
}
} else
{var record = cljs.core.first.call(null,s__30469__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30468.call(null,cljs.core.rest.call(null,s__30469__$2)));
}
} else
{return null;
}
break;
}
});})(map__30467,map__30467__$1,metric_spec,title,metric,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
,null,null));
});})(map__30467,map__30467__$1,metric_spec,title,metric,s__30449__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__30448.call(null,cljs.core.rest.call(null,s__30449__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function iter__30472(s__30473){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function (){var s__30473__$1 = s__30473;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30473__$1);if(temp__4126__auto__)
{var s__30473__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30473__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30473__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30475 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30474 = (0);while(true){
if((i__30474 < size__4376__auto__))
{var map__30478 = cljs.core._nth.call(null,c__4375__auto__,i__30474);var map__30478__$1 = ((cljs.core.seq_QMARK_.call(null,map__30478))?cljs.core.apply.call(null,cljs.core.hash_map,map__30478):map__30478);var label_formatter = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__30475,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__30491 = (i__30474 + (1));
i__30474 = G__30491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30475),iter__30472.call(null,cljs.core.chunk_rest.call(null,s__30473__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30475),null);
}
} else
{var map__30479 = cljs.core.first.call(null,s__30473__$2);var map__30479__$1 = ((cljs.core.seq_QMARK_.call(null,map__30479))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479):map__30479);var label_formatter = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__30472.call(null,cljs.core.rest.call(null,s__30473__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function iter__30480(s__30481){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title){
return (function (){var s__30481__$1 = s__30481;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30481__$1);if(temp__4126__auto__)
{var s__30481__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30481__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30481__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30483 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30482 = (0);while(true){
if((i__30482 < size__4376__auto__))
{var vec__30486 = cljs.core._nth.call(null,c__4375__auto__,i__30482);var y = cljs.core.nth.call(null,vec__30486,(0),null);var i = cljs.core.nth.call(null,vec__30486,(1),null);cljs.core.chunk_append.call(null,b__30483,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__30492 = (i__30482 + (1));
i__30482 = G__30492;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30483),iter__30480.call(null,cljs.core.chunk_rest.call(null,s__30481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30483),null);
}
} else
{var vec__30487 = cljs.core.first.call(null,s__30481__$2);var y = cljs.core.nth.call(null,vec__30487,(0),null);var i = cljs.core.nth.call(null,vec__30487,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__30480.call(null,cljs.core.rest.call(null,s__30481__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30446,map__30446__$1,query,map__30447,map__30447__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
clustermap.components.tag_histogram.request_tag_data = (function request_tag_data(resource,tag_type){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.tags_of_type,tag_type);
});
clustermap.components.tag_histogram.request_tag_agg_data = (function request_tag_agg_data(resource,query){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.nested_aggregation,query);
});
var ufv___30551 = schema.utils.use_fn_validation;var output_schema30494_30552 = schema.core.Any;var input_schema30495_30553 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker30496_30554 = schema.core.checker.call(null,input_schema30495_30553);var output_checker30497_30555 = schema.core.checker.call(null,output_schema30494_30552);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function tag_histogram(G__30498,G__30499,G__30500){var validate__6034__auto__ = ufv___30551.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30556 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30498,G__30499,G__30500], null);var temp__4126__auto___30557 = input_checker30496_30554.call(null,args__6035__auto___30556);if(cljs.core.truth_(temp__4126__auto___30557))
{var error__6036__auto___30558 = temp__4126__auto___30557;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___30558)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30558,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30556,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30495_30553,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__30529 = G__30498;var map__30531 = G__30529;var map__30531__$1 = ((cljs.core.seq_QMARK_.call(null,map__30531))?cljs.core.apply.call(null,cljs.core.hash_map,map__30531):map__30531);var map__30532 = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30532__$1 = ((cljs.core.seq_QMARK_.call(null,map__30532))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532):map__30532);var tag_histogram__$1 = map__30532__$1;var query = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__30499;var G__30530 = G__30500;var map__30533 = G__30530;var map__30533__$1 = ((cljs.core.seq_QMARK_.call(null,map__30533))?cljs.core.apply.call(null,cljs.core.hash_map,map__30533):map__30533);var opts = map__30533__$1;var id = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__30529__$1 = G__30529;var owner__$1 = owner;var G__30530__$1 = G__30530;while(true){
var map__30534 = G__30529__$1;var map__30534__$1 = ((cljs.core.seq_QMARK_.call(null,map__30534))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);var map__30535 = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30535__$1 = ((cljs.core.seq_QMARK_.call(null,map__30535))?cljs.core.apply.call(null,cljs.core.hash_map,map__30535):map__30535);var tag_histogram__$2 = map__30535__$1;var query__$1 = cljs.core.get.call(null,map__30535__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__30535__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__30535__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__30535__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__30535__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__30536 = G__30530__$1;var map__30536__$1 = ((cljs.core.seq_QMARK_.call(null,map__30536))?cljs.core.apply.call(null,cljs.core.hash_map,map__30536):map__30536);var opts__$1 = map__30536__$1;var id__$1 = cljs.core.get.call(null,map__30536__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t30537 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t30537 = (function (query,output_schema30494,map__30534,owner,metrics,G__30529,tag_agg_data,tag_histogram,input_checker30496,filter_spec,G__30499,tag_type,map__30532,map__30535,output_checker30497,G__30530,map__30536,input_schema30495,validate__6034__auto__,map__30533,map__30531,id,G__30498,opts,tag_data,G__30500,ufv__,meta30538){
this.query = query;
this.output_schema30494 = output_schema30494;
this.map__30534 = map__30534;
this.owner = owner;
this.metrics = metrics;
this.G__30529 = G__30529;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.input_checker30496 = input_checker30496;
this.filter_spec = filter_spec;
this.G__30499 = G__30499;
this.tag_type = tag_type;
this.map__30532 = map__30532;
this.map__30535 = map__30535;
this.output_checker30497 = output_checker30497;
this.G__30530 = G__30530;
this.map__30536 = map__30536;
this.input_schema30495 = input_schema30495;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__30533 = map__30533;
this.map__30531 = map__30531;
this.id = id;
this.G__30498 = G__30498;
this.opts = opts;
this.tag_data = tag_data;
this.G__30500 = G__30500;
this.ufv__ = ufv__;
this.meta30538 = meta30538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t30537.cljs$lang$type = true;
clustermap.components.tag_histogram.t30537.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t30537";
clustermap.components.tag_histogram.t30537.cljs$lang$ctorPrWriter = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t30537");
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.t30537.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t30537.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.t30537.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t30537.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (_,p__30540,___$1){var self__ = this;
var map__30541 = p__30540;var map__30541__$1 = ((cljs.core.seq_QMARK_.call(null,map__30541))?cljs.core.apply.call(null,cljs.core.hash_map,map__30541):map__30541);var map__30542 = cljs.core.get.call(null,map__30541__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30542__$1 = ((cljs.core.seq_QMARK_.call(null,map__30542))?cljs.core.apply.call(null,cljs.core.hash_map,map__30542):map__30542);var prev_query = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__30541__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.t30537.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t30537.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (_,p__30543,p__30544){var self__ = this;
var map__30545 = p__30543;var map__30545__$1 = ((cljs.core.seq_QMARK_.call(null,map__30545))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545):map__30545);var map__30546 = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30546__$1 = ((cljs.core.seq_QMARK_.call(null,map__30546))?cljs.core.apply.call(null,cljs.core.hash_map,map__30546):map__30546);var next_query = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30547 = p__30544;var map__30547__$1 = ((cljs.core.seq_QMARK_.call(null,map__30547))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);var next_tag_data_resource = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551));var next_tag_agg_data_resource = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{clustermap.components.tag_histogram.request_tag_data.call(null,next_tag_data_resource,next_tag_type);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.tag_histogram.request_tag_agg_data.call(null,next_tag_agg_data_resource,cljs.core.merge.call(null,next_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null)));
} else
{return null;
}
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.t30537.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t30537.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-data-resource");var tadr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-agg-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)], null),response);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244),tadr);
clustermap.ordered_resource.retrieve_responses.call(null,tadr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (p__30548){var map__30549 = p__30548;var map__30549__$1 = ((cljs.core.seq_QMARK_.call(null,map__30549))?cljs.core.apply.call(null,cljs.core.hash_map,map__30549):map__30549);var response = map__30549__$1;var records = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAG AGGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)], null),records);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,tadr,last_dims,w,h,___$1,map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__30550 = om.core.get_node.call(null,self__.owner,"chart");var G__30550__$1 = (((G__30550 == null))?null:jayq.core.$.call(null,G__30550));var G__30550__$2 = (((G__30550__$1 == null))?null:G__30550__$1.highcharts());var G__30550__$3 = (((G__30550__$2 == null))?null:G__30550__$2.reflow());return G__30550__$3;
} else
{return null;
}
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
);
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.t30537.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t30537.prototype.om$core$IRender$render$arity$1 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.t30537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (_30539){var self__ = this;
var _30539__$1 = this;return self__.meta30538;
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.t30537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function (_30539,meta30538__$1){var self__ = this;
var _30539__$1 = this;return (new clustermap.components.tag_histogram.t30537(self__.query,self__.output_schema30494,self__.map__30534,self__.owner,self__.metrics,self__.G__30529,self__.tag_agg_data,self__.tag_histogram,self__.input_checker30496,self__.filter_spec,self__.G__30499,self__.tag_type,self__.map__30532,self__.map__30535,self__.output_checker30497,self__.G__30530,self__.map__30536,self__.input_schema30495,self__.validate__6034__auto__,self__.map__30533,self__.map__30531,self__.id,self__.G__30498,self__.opts,self__.tag_data,self__.G__30500,self__.ufv__,meta30538__$1));
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
clustermap.components.tag_histogram.__GT_t30537 = ((function (map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555){
return (function __GT_t30537(query__$2,output_schema30494__$1,map__30534__$2,owner__$3,metrics__$2,G__30529__$2,tag_agg_data__$2,tag_histogram__$3,input_checker30496__$1,filter_spec__$2,G__30499__$1,tag_type__$2,map__30532__$2,map__30535__$2,output_checker30497__$1,G__30530__$2,map__30536__$2,input_schema30495__$1,validate__6034__auto____$1,map__30533__$2,map__30531__$2,id__$2,G__30498__$1,opts__$2,tag_data__$2,G__30500__$1,ufv____$1,meta30538){return (new clustermap.components.tag_histogram.t30537(query__$2,output_schema30494__$1,map__30534__$2,owner__$3,metrics__$2,G__30529__$2,tag_agg_data__$2,tag_histogram__$3,input_checker30496__$1,filter_spec__$2,G__30499__$1,tag_type__$2,map__30532__$2,map__30535__$2,output_checker30497__$1,G__30530__$2,map__30536__$2,input_schema30495__$1,validate__6034__auto____$1,map__30533__$2,map__30531__$2,id__$2,G__30498__$1,opts__$2,tag_data__$2,G__30500__$1,ufv____$1,meta30538));
});})(map__30534,map__30534__$1,map__30535,map__30535__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30536,map__30536__$1,opts__$1,id__$1,G__30529,map__30531,map__30531__$1,map__30532,map__30532__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30530,map__30533,map__30533__$1,opts,id,validate__6034__auto__,ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
}
return (new clustermap.components.tag_histogram.t30537(query__$1,output_schema30494_30552,map__30534__$1,owner__$2,metrics__$1,G__30529__$1,tag_agg_data__$1,tag_histogram__$2,input_checker30496_30554,filter_spec__$1,G__30499,tag_type__$1,map__30532__$1,map__30535__$1,output_checker30497_30555,G__30530__$1,map__30536__$1,input_schema30495_30553,validate__6034__auto__,map__30533__$1,map__30531__$1,id__$1,G__30498,opts__$1,tag_data__$1,G__30500,ufv___30551,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30559 = output_checker30497_30555.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30559))
{var error__6036__auto___30560 = temp__4126__auto___30559;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___30560)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30560,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30494_30552,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30551,output_schema30494_30552,input_schema30495_30553,input_checker30496_30554,output_checker30497_30555))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema30494_30552,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30495_30553], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m30493){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m30493);
});
__GT_tag_histogram = function(cursor__7850__auto__,m30493){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m30493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
