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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__30434,metrics,tag_data,tag_agg_data,p__30435){var map__30478 = p__30434;var map__30478__$1 = ((cljs.core.seq_QMARK_.call(null,map__30478))?cljs.core.apply.call(null,cljs.core.hash_map,map__30478):map__30478);var query = map__30478__$1;var map__30479 = p__30435;var map__30479__$1 = ((cljs.core.seq_QMARK_.call(null,map__30479))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479):map__30479);var opts = map__30479__$1;var y1_title = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function iter__30480(s__30481){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function (){var s__30481__$1 = s__30481;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30481__$1);if(temp__4126__auto__)
{var s__30481__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30481__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30481__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30483 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30482 = (0);while(true){
if((i__30482 < size__4376__auto__))
{var map__30494 = cljs.core._nth.call(null,c__4375__auto__,i__30482);var map__30494__$1 = ((cljs.core.seq_QMARK_.call(null,map__30494))?cljs.core.apply.call(null,cljs.core.hash_map,map__30494):map__30494);var metric_spec = map__30494__$1;var title = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__30483,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__30482,map__30494,map__30494__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30483,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function iter__30495(s__30496){return (new cljs.core.LazySeq(null,((function (i__30482,map__30494,map__30494__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30483,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function (){var s__30496__$1 = s__30496;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30496__$1);if(temp__4126__auto____$1)
{var s__30496__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30496__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__30496__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__30498 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__30497 = (0);while(true){
if((i__30497 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__30497);cljs.core.chunk_append.call(null,b__30498,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30520 = (i__30497 + (1));
i__30497 = G__30520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30498),iter__30495.call(null,cljs.core.chunk_rest.call(null,s__30496__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30498),null);
}
} else
{var record = cljs.core.first.call(null,s__30496__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30495.call(null,cljs.core.rest.call(null,s__30496__$2)));
}
} else
{return null;
}
break;
}
});})(i__30482,map__30494,map__30494__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30483,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
,null,null));
});})(i__30482,map__30494,map__30494__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__30483,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__30521 = (i__30482 + (1));
i__30482 = G__30521;
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
{var map__30499 = cljs.core.first.call(null,s__30481__$2);var map__30499__$1 = ((cljs.core.seq_QMARK_.call(null,map__30499))?cljs.core.apply.call(null,cljs.core.hash_map,map__30499):map__30499);var metric_spec = map__30499__$1;var title = cljs.core.get.call(null,map__30499__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30499__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__30499,map__30499__$1,metric_spec,title,metric,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function iter__30500(s__30501){return (new cljs.core.LazySeq(null,((function (map__30499,map__30499__$1,metric_spec,title,metric,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function (){var s__30501__$1 = s__30501;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30501__$1);if(temp__4126__auto____$1)
{var s__30501__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30501__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30501__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30503 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30502 = (0);while(true){
if((i__30502 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__30502);cljs.core.chunk_append.call(null,b__30503,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30522 = (i__30502 + (1));
i__30502 = G__30522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30503),iter__30500.call(null,cljs.core.chunk_rest.call(null,s__30501__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30503),null);
}
} else
{var record = cljs.core.first.call(null,s__30501__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30500.call(null,cljs.core.rest.call(null,s__30501__$2)));
}
} else
{return null;
}
break;
}
});})(map__30499,map__30499__$1,metric_spec,title,metric,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
,null,null));
});})(map__30499,map__30499__$1,metric_spec,title,metric,s__30481__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__30480.call(null,cljs.core.rest.call(null,s__30481__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function iter__30504(s__30505){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function (){var s__30505__$1 = s__30505;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30505__$1);if(temp__4126__auto__)
{var s__30505__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30505__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30505__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30507 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30506 = (0);while(true){
if((i__30506 < size__4376__auto__))
{var map__30510 = cljs.core._nth.call(null,c__4375__auto__,i__30506);var map__30510__$1 = ((cljs.core.seq_QMARK_.call(null,map__30510))?cljs.core.apply.call(null,cljs.core.hash_map,map__30510):map__30510);var label_formatter = cljs.core.get.call(null,map__30510__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30510__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__30507,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__30523 = (i__30506 + (1));
i__30506 = G__30523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30507),iter__30504.call(null,cljs.core.chunk_rest.call(null,s__30505__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30507),null);
}
} else
{var map__30511 = cljs.core.first.call(null,s__30505__$2);var map__30511__$1 = ((cljs.core.seq_QMARK_.call(null,map__30511))?cljs.core.apply.call(null,cljs.core.hash_map,map__30511):map__30511);var label_formatter = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__30504.call(null,cljs.core.rest.call(null,s__30505__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function iter__30512(s__30513){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title){
return (function (){var s__30513__$1 = s__30513;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30513__$1);if(temp__4126__auto__)
{var s__30513__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30513__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30513__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30515 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30514 = (0);while(true){
if((i__30514 < size__4376__auto__))
{var vec__30518 = cljs.core._nth.call(null,c__4375__auto__,i__30514);var y = cljs.core.nth.call(null,vec__30518,(0),null);var i = cljs.core.nth.call(null,vec__30518,(1),null);cljs.core.chunk_append.call(null,b__30515,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__30524 = (i__30514 + (1));
i__30514 = G__30524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30515),iter__30512.call(null,cljs.core.chunk_rest.call(null,s__30513__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30515),null);
}
} else
{var vec__30519 = cljs.core.first.call(null,s__30513__$2);var y = cljs.core.nth.call(null,vec__30519,(0),null);var i = cljs.core.nth.call(null,vec__30519,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__30512.call(null,cljs.core.rest.call(null,s__30513__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30478,map__30478__$1,query,map__30479,map__30479__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
clustermap.components.tag_histogram.request_tag_data = (function request_tag_data(resource,tag_type){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.tags_of_type,tag_type);
});
clustermap.components.tag_histogram.request_tag_agg_data = (function request_tag_agg_data(resource,query){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.nested_aggregation,query);
});
var ufv___30583 = schema.utils.use_fn_validation;var output_schema30526_30584 = schema.core.Any;var input_schema30527_30585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker30528_30586 = schema.core.checker.call(null,input_schema30527_30585);var output_checker30529_30587 = schema.core.checker.call(null,output_schema30526_30584);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function tag_histogram(G__30530,G__30531,G__30532){var validate__6034__auto__ = ufv___30583.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30588 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30530,G__30531,G__30532], null);var temp__4126__auto___30589 = input_checker30528_30586.call(null,args__6035__auto___30588);if(cljs.core.truth_(temp__4126__auto___30589))
{var error__6036__auto___30590 = temp__4126__auto___30589;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___30590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30590,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30588,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30527_30585,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__30561 = G__30530;var map__30563 = G__30561;var map__30563__$1 = ((cljs.core.seq_QMARK_.call(null,map__30563))?cljs.core.apply.call(null,cljs.core.hash_map,map__30563):map__30563);var map__30564 = cljs.core.get.call(null,map__30563__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30564__$1 = ((cljs.core.seq_QMARK_.call(null,map__30564))?cljs.core.apply.call(null,cljs.core.hash_map,map__30564):map__30564);var tag_histogram__$1 = map__30564__$1;var query = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__30563__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__30531;var G__30562 = G__30532;var map__30565 = G__30562;var map__30565__$1 = ((cljs.core.seq_QMARK_.call(null,map__30565))?cljs.core.apply.call(null,cljs.core.hash_map,map__30565):map__30565);var opts = map__30565__$1;var id = cljs.core.get.call(null,map__30565__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__30561__$1 = G__30561;var owner__$1 = owner;var G__30562__$1 = G__30562;while(true){
var map__30566 = G__30561__$1;var map__30566__$1 = ((cljs.core.seq_QMARK_.call(null,map__30566))?cljs.core.apply.call(null,cljs.core.hash_map,map__30566):map__30566);var map__30567 = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30567__$1 = ((cljs.core.seq_QMARK_.call(null,map__30567))?cljs.core.apply.call(null,cljs.core.hash_map,map__30567):map__30567);var tag_histogram__$2 = map__30567__$1;var query__$1 = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__30568 = G__30562__$1;var map__30568__$1 = ((cljs.core.seq_QMARK_.call(null,map__30568))?cljs.core.apply.call(null,cljs.core.hash_map,map__30568):map__30568);var opts__$1 = map__30568__$1;var id__$1 = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t30569 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t30569 = (function (G__30561,query,owner,metrics,map__30565,tag_agg_data,tag_histogram,filter_spec,map__30567,input_schema30527,G__30532,tag_type,map__30563,input_checker30528,map__30566,output_schema30526,G__30530,validate__6034__auto__,G__30531,id,opts,output_checker30529,tag_data,ufv__,map__30564,G__30562,map__30568,meta30570){
this.G__30561 = G__30561;
this.query = query;
this.owner = owner;
this.metrics = metrics;
this.map__30565 = map__30565;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.filter_spec = filter_spec;
this.map__30567 = map__30567;
this.input_schema30527 = input_schema30527;
this.G__30532 = G__30532;
this.tag_type = tag_type;
this.map__30563 = map__30563;
this.input_checker30528 = input_checker30528;
this.map__30566 = map__30566;
this.output_schema30526 = output_schema30526;
this.G__30530 = G__30530;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__30531 = G__30531;
this.id = id;
this.opts = opts;
this.output_checker30529 = output_checker30529;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.map__30564 = map__30564;
this.G__30562 = G__30562;
this.map__30568 = map__30568;
this.meta30570 = meta30570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t30569.cljs$lang$type = true;
clustermap.components.tag_histogram.t30569.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t30569";
clustermap.components.tag_histogram.t30569.cljs$lang$ctorPrWriter = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t30569");
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.t30569.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t30569.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.t30569.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t30569.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (_,p__30572,___$1){var self__ = this;
var map__30573 = p__30572;var map__30573__$1 = ((cljs.core.seq_QMARK_.call(null,map__30573))?cljs.core.apply.call(null,cljs.core.hash_map,map__30573):map__30573);var map__30574 = cljs.core.get.call(null,map__30573__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30574__$1 = ((cljs.core.seq_QMARK_.call(null,map__30574))?cljs.core.apply.call(null,cljs.core.hash_map,map__30574):map__30574);var prev_query = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__30573__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.t30569.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t30569.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (_,p__30575,p__30576){var self__ = this;
var map__30577 = p__30575;var map__30577__$1 = ((cljs.core.seq_QMARK_.call(null,map__30577))?cljs.core.apply.call(null,cljs.core.hash_map,map__30577):map__30577);var map__30578 = cljs.core.get.call(null,map__30577__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30578__$1 = ((cljs.core.seq_QMARK_.call(null,map__30578))?cljs.core.apply.call(null,cljs.core.hash_map,map__30578):map__30578);var next_query = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__30577__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30579 = p__30576;var map__30579__$1 = ((cljs.core.seq_QMARK_.call(null,map__30579))?cljs.core.apply.call(null,cljs.core.hash_map,map__30579):map__30579);var next_tag_data_resource = cljs.core.get.call(null,map__30579__$1,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551));var next_tag_agg_data_resource = cljs.core.get.call(null,map__30579__$1,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{clustermap.components.tag_histogram.request_tag_data.call(null,next_tag_data_resource,next_tag_type);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.tag_histogram.request_tag_agg_data.call(null,next_tag_agg_data_resource,cljs.core.merge.call(null,next_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null)));
} else
{return null;
}
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.t30569.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t30569.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-data-resource");var tadr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-agg-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)], null),response);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244),tadr);
clustermap.ordered_resource.retrieve_responses.call(null,tadr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (p__30580){var map__30581 = p__30580;var map__30581__$1 = ((cljs.core.seq_QMARK_.call(null,map__30581))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);var response = map__30581__$1;var records = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAG AGGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)], null),records);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,tadr,last_dims,w,h,___$1,map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__30582 = om.core.get_node.call(null,self__.owner,"chart");var G__30582__$1 = (((G__30582 == null))?null:jayq.core.$.call(null,G__30582));var G__30582__$2 = (((G__30582__$1 == null))?null:G__30582__$1.highcharts());var G__30582__$3 = (((G__30582__$2 == null))?null:G__30582__$2.reflow());return G__30582__$3;
} else
{return null;
}
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
);
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.t30569.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t30569.prototype.om$core$IRender$render$arity$1 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.t30569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (_30571){var self__ = this;
var _30571__$1 = this;return self__.meta30570;
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.t30569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function (_30571,meta30570__$1){var self__ = this;
var _30571__$1 = this;return (new clustermap.components.tag_histogram.t30569(self__.G__30561,self__.query,self__.owner,self__.metrics,self__.map__30565,self__.tag_agg_data,self__.tag_histogram,self__.filter_spec,self__.map__30567,self__.input_schema30527,self__.G__30532,self__.tag_type,self__.map__30563,self__.input_checker30528,self__.map__30566,self__.output_schema30526,self__.G__30530,self__.validate__6034__auto__,self__.G__30531,self__.id,self__.opts,self__.output_checker30529,self__.tag_data,self__.ufv__,self__.map__30564,self__.G__30562,self__.map__30568,meta30570__$1));
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
clustermap.components.tag_histogram.__GT_t30569 = ((function (map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587){
return (function __GT_t30569(G__30561__$2,query__$2,owner__$3,metrics__$2,map__30565__$2,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__30567__$2,input_schema30527__$1,G__30532__$1,tag_type__$2,map__30563__$2,input_checker30528__$1,map__30566__$2,output_schema30526__$1,G__30530__$1,validate__6034__auto____$1,G__30531__$1,id__$2,opts__$2,output_checker30529__$1,tag_data__$2,ufv____$1,map__30564__$2,G__30562__$2,map__30568__$2,meta30570){return (new clustermap.components.tag_histogram.t30569(G__30561__$2,query__$2,owner__$3,metrics__$2,map__30565__$2,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,map__30567__$2,input_schema30527__$1,G__30532__$1,tag_type__$2,map__30563__$2,input_checker30528__$1,map__30566__$2,output_schema30526__$1,G__30530__$1,validate__6034__auto____$1,G__30531__$1,id__$2,opts__$2,output_checker30529__$1,tag_data__$2,ufv____$1,map__30564__$2,G__30562__$2,map__30568__$2,meta30570));
});})(map__30566,map__30566__$1,map__30567,map__30567__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30568,map__30568__$1,opts__$1,id__$1,G__30561,map__30563,map__30563__$1,map__30564,map__30564__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30562,map__30565,map__30565__$1,opts,id,validate__6034__auto__,ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
}
return (new clustermap.components.tag_histogram.t30569(G__30561__$1,query__$1,owner__$2,metrics__$1,map__30565__$1,tag_agg_data__$1,tag_histogram__$2,filter_spec__$1,map__30567__$1,input_schema30527_30585,G__30532,tag_type__$1,map__30563__$1,input_checker30528_30586,map__30566__$1,output_schema30526_30584,G__30530,validate__6034__auto__,G__30531,id__$1,opts__$1,output_checker30529_30587,tag_data__$1,ufv___30583,map__30564__$1,G__30562__$1,map__30568__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30591 = output_checker30529_30587.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30591))
{var error__6036__auto___30592 = temp__4126__auto___30591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___30592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30592,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30526_30584,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___30583,output_schema30526_30584,input_schema30527_30585,input_checker30528_30586,output_checker30529_30587))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema30526_30584,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30527_30585], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m30525){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m30525);
});
__GT_tag_histogram = function(cursor__7850__auto__,m30525){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m30525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
