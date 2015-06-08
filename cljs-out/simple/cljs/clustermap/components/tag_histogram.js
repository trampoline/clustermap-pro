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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31649,metrics,tag_data,tag_agg_data,p__31650){var map__31693 = p__31649;var map__31693__$1 = ((cljs.core.seq_QMARK_.call(null,map__31693))?cljs.core.apply.call(null,cljs.core.hash_map,map__31693):map__31693);var query = map__31693__$1;var map__31694 = p__31650;var map__31694__$1 = ((cljs.core.seq_QMARK_.call(null,map__31694))?cljs.core.apply.call(null,cljs.core.hash_map,map__31694):map__31694);var opts = map__31694__$1;var y1_title = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function iter__31695(s__31696){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function (){var s__31696__$1 = s__31696;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31696__$1);if(temp__4126__auto__)
{var s__31696__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31696__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31696__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31698 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31697 = (0);while(true){
if((i__31697 < size__4376__auto__))
{var map__31709 = cljs.core._nth.call(null,c__4375__auto__,i__31697);var map__31709__$1 = ((cljs.core.seq_QMARK_.call(null,map__31709))?cljs.core.apply.call(null,cljs.core.hash_map,map__31709):map__31709);var metric_spec = map__31709__$1;var title = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31698,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31697,map__31709,map__31709__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31698,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function iter__31710(s__31711){return (new cljs.core.LazySeq(null,((function (i__31697,map__31709,map__31709__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31698,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function (){var s__31711__$1 = s__31711;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31711__$1);if(temp__4126__auto____$1)
{var s__31711__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31711__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31711__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31713 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31712 = (0);while(true){
if((i__31712 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31712);cljs.core.chunk_append.call(null,b__31713,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31735 = (i__31712 + (1));
i__31712 = G__31735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31713),iter__31710.call(null,cljs.core.chunk_rest.call(null,s__31711__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31713),null);
}
} else
{var record = cljs.core.first.call(null,s__31711__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31710.call(null,cljs.core.rest.call(null,s__31711__$2)));
}
} else
{return null;
}
break;
}
});})(i__31697,map__31709,map__31709__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31698,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31697,map__31709,map__31709__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31698,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31736 = (i__31697 + (1));
i__31697 = G__31736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31698),iter__31695.call(null,cljs.core.chunk_rest.call(null,s__31696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31698),null);
}
} else
{var map__31714 = cljs.core.first.call(null,s__31696__$2);var map__31714__$1 = ((cljs.core.seq_QMARK_.call(null,map__31714))?cljs.core.apply.call(null,cljs.core.hash_map,map__31714):map__31714);var metric_spec = map__31714__$1;var title = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31714,map__31714__$1,metric_spec,title,metric,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function iter__31715(s__31716){return (new cljs.core.LazySeq(null,((function (map__31714,map__31714__$1,metric_spec,title,metric,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function (){var s__31716__$1 = s__31716;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31716__$1);if(temp__4126__auto____$1)
{var s__31716__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31716__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31716__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31718 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31717 = (0);while(true){
if((i__31717 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31717);cljs.core.chunk_append.call(null,b__31718,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31737 = (i__31717 + (1));
i__31717 = G__31737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31718),iter__31715.call(null,cljs.core.chunk_rest.call(null,s__31716__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31718),null);
}
} else
{var record = cljs.core.first.call(null,s__31716__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31715.call(null,cljs.core.rest.call(null,s__31716__$2)));
}
} else
{return null;
}
break;
}
});})(map__31714,map__31714__$1,metric_spec,title,metric,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31714,map__31714__$1,metric_spec,title,metric,s__31696__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31695.call(null,cljs.core.rest.call(null,s__31696__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function iter__31719(s__31720){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function (){var s__31720__$1 = s__31720;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31720__$1);if(temp__4126__auto__)
{var s__31720__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31720__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31720__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31722 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31721 = (0);while(true){
if((i__31721 < size__4376__auto__))
{var map__31725 = cljs.core._nth.call(null,c__4375__auto__,i__31721);var map__31725__$1 = ((cljs.core.seq_QMARK_.call(null,map__31725))?cljs.core.apply.call(null,cljs.core.hash_map,map__31725):map__31725);var label_formatter = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31722,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31738 = (i__31721 + (1));
i__31721 = G__31738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31722),iter__31719.call(null,cljs.core.chunk_rest.call(null,s__31720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31722),null);
}
} else
{var map__31726 = cljs.core.first.call(null,s__31720__$2);var map__31726__$1 = ((cljs.core.seq_QMARK_.call(null,map__31726))?cljs.core.apply.call(null,cljs.core.hash_map,map__31726):map__31726);var label_formatter = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31719.call(null,cljs.core.rest.call(null,s__31720__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function iter__31727(s__31728){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title){
return (function (){var s__31728__$1 = s__31728;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31728__$1);if(temp__4126__auto__)
{var s__31728__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31728__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31728__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31730 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31729 = (0);while(true){
if((i__31729 < size__4376__auto__))
{var vec__31733 = cljs.core._nth.call(null,c__4375__auto__,i__31729);var y = cljs.core.nth.call(null,vec__31733,(0),null);var i = cljs.core.nth.call(null,vec__31733,(1),null);cljs.core.chunk_append.call(null,b__31730,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__31739 = (i__31729 + (1));
i__31729 = G__31739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31730),iter__31727.call(null,cljs.core.chunk_rest.call(null,s__31728__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31730),null);
}
} else
{var vec__31734 = cljs.core.first.call(null,s__31728__$2);var y = cljs.core.nth.call(null,vec__31734,(0),null);var i = cljs.core.nth.call(null,vec__31734,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31727.call(null,cljs.core.rest.call(null,s__31728__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31693,map__31693__$1,query,map__31694,map__31694__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___31932 = schema.utils.use_fn_validation;var output_schema31741_31933 = schema.core.Any;var input_schema31742_31934 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker31743_31935 = schema.core.checker.call(null,input_schema31742_31934);var output_checker31744_31936 = schema.core.checker.call(null,output_schema31741_31933);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function tag_histogram(G__31745,G__31746,G__31747){var validate__6034__auto__ = ufv___31932.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31937 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31745,G__31746,G__31747], null);var temp__4126__auto___31938 = input_checker31743_31935.call(null,args__6035__auto___31937);if(cljs.core.truth_(temp__4126__auto___31938))
{var error__6036__auto___31939 = temp__4126__auto___31938;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31939)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31939,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31937,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31742_31934,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__31843 = G__31745;var map__31845 = G__31843;var map__31845__$1 = ((cljs.core.seq_QMARK_.call(null,map__31845))?cljs.core.apply.call(null,cljs.core.hash_map,map__31845):map__31845);var map__31846 = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31846__$1 = ((cljs.core.seq_QMARK_.call(null,map__31846))?cljs.core.apply.call(null,cljs.core.hash_map,map__31846):map__31846);var tag_histogram__$1 = map__31846__$1;var query = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31746;var G__31844 = G__31747;var map__31847 = G__31844;var map__31847__$1 = ((cljs.core.seq_QMARK_.call(null,map__31847))?cljs.core.apply.call(null,cljs.core.hash_map,map__31847):map__31847);var opts = map__31847__$1;var id = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__31843__$1 = G__31843;var owner__$1 = owner;var G__31844__$1 = G__31844;while(true){
var map__31848 = G__31843__$1;var map__31848__$1 = ((cljs.core.seq_QMARK_.call(null,map__31848))?cljs.core.apply.call(null,cljs.core.hash_map,map__31848):map__31848);var map__31849 = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31849__$1 = ((cljs.core.seq_QMARK_.call(null,map__31849))?cljs.core.apply.call(null,cljs.core.hash_map,map__31849):map__31849);var tag_histogram__$2 = map__31849__$1;var query__$1 = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__31850 = G__31844__$1;var map__31850__$1 = ((cljs.core.seq_QMARK_.call(null,map__31850))?cljs.core.apply.call(null,cljs.core.hash_map,map__31850):map__31850);var opts__$1 = map__31850__$1;var id__$1 = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t31851 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t31851 = (function (G__31747,query,owner,metrics,output_schema31741,map__31849,map__31848,input_schema31742,tag_agg_data,tag_histogram,G__31844,filter_spec,map__31847,map__31850,input_checker31743,map__31845,G__31746,map__31846,tag_type,output_checker31744,validate__6034__auto__,G__31745,id,opts,tag_data,ufv__,G__31843,meta31852){
this.G__31747 = G__31747;
this.query = query;
this.owner = owner;
this.metrics = metrics;
this.output_schema31741 = output_schema31741;
this.map__31849 = map__31849;
this.map__31848 = map__31848;
this.input_schema31742 = input_schema31742;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__31844 = G__31844;
this.filter_spec = filter_spec;
this.map__31847 = map__31847;
this.map__31850 = map__31850;
this.input_checker31743 = input_checker31743;
this.map__31845 = map__31845;
this.G__31746 = G__31746;
this.map__31846 = map__31846;
this.tag_type = tag_type;
this.output_checker31744 = output_checker31744;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__31745 = G__31745;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.G__31843 = G__31843;
this.meta31852 = meta31852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t31851.cljs$lang$type = true;
clustermap.components.tag_histogram.t31851.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t31851";
clustermap.components.tag_histogram.t31851.cljs$lang$ctorPrWriter = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t31851");
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.t31851.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t31851.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.t31851.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t31851.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (_,p__31854,___$1){var self__ = this;
var map__31855 = p__31854;var map__31855__$1 = ((cljs.core.seq_QMARK_.call(null,map__31855))?cljs.core.apply.call(null,cljs.core.hash_map,map__31855):map__31855);var map__31856 = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31856__$1 = ((cljs.core.seq_QMARK_.call(null,map__31856))?cljs.core.apply.call(null,cljs.core.hash_map,map__31856):map__31856);var prev_query = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.t31851.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t31851.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (_,p__31857,p__31858){var self__ = this;
var map__31859 = p__31857;var map__31859__$1 = ((cljs.core.seq_QMARK_.call(null,map__31859))?cljs.core.apply.call(null,cljs.core.hash_map,map__31859):map__31859);var map__31860 = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__31860__$1 = ((cljs.core.seq_QMARK_.call(null,map__31860))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860):map__31860);var next_query = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31861 = p__31858;var map__31861__$1 = ((cljs.core.seq_QMARK_.call(null,map__31861))?cljs.core.apply.call(null,cljs.core.hash_map,map__31861):map__31861);var fetch_tag_data_fn = cljs.core.get.call(null,map__31861__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__31861__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___31940 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___31940,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___31940,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (state_31879){var state_val_31880 = (state_31879[(1)]);if((state_val_31880 === (5)))
{var inst_31877 = (state_31879[(2)]);var state_31879__$1 = state_31879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31879__$1,inst_31877);
} else
{if((state_val_31880 === (4)))
{var state_31879__$1 = state_31879;var statearr_31881_31941 = state_31879__$1;(statearr_31881_31941[(2)] = null);
(statearr_31881_31941[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31880 === (3)))
{var inst_31864 = (state_31879[(7)]);var inst_31866 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31867 = ["HISTOGRAM TAGS: ",inst_31864];var inst_31868 = (new cljs.core.PersistentVector(null,2,(5),inst_31866,inst_31867,null));var inst_31869 = cljs.core.clj__GT_js.call(null,inst_31868);var inst_31870 = console.log(inst_31869);var inst_31871 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31872 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_31873 = (new cljs.core.PersistentVector(null,1,(5),inst_31871,inst_31872,null));var inst_31874 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31873,inst_31864);var state_31879__$1 = (function (){var statearr_31882 = state_31879;(statearr_31882[(8)] = inst_31870);
return statearr_31882;
})();var statearr_31883_31942 = state_31879__$1;(statearr_31883_31942[(2)] = inst_31874);
(statearr_31883_31942[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31880 === (2)))
{var inst_31864 = (state_31879[(7)]);var inst_31864__$1 = (state_31879[(2)]);var state_31879__$1 = (function (){var statearr_31884 = state_31879;(statearr_31884[(7)] = inst_31864__$1);
return statearr_31884;
})();if(cljs.core.truth_(inst_31864__$1))
{var statearr_31885_31943 = state_31879__$1;(statearr_31885_31943[(1)] = (3));
} else
{var statearr_31886_31944 = state_31879__$1;(statearr_31886_31944[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31880 === (1)))
{var inst_31862 = fetch_tag_data_fn.call(null,next_tag_type);var state_31879__$1 = state_31879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31879__$1,(2),inst_31862);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___31940,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;return ((function (switch__9110__auto__,c__9125__auto___31940,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31890 = [null,null,null,null,null,null,null,null,null];(statearr_31890[(0)] = state_machine__9111__auto__);
(statearr_31890[(1)] = (1));
return statearr_31890;
});
var state_machine__9111__auto____1 = (function (state_31879){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31879);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31891){if((e31891 instanceof Object))
{var ex__9114__auto__ = e31891;var statearr_31892_31945 = state_31879;(statearr_31892_31945[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31891;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31946 = state_31879;
state_31879 = G__31946;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31879){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___31940,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
})();var state__9127__auto__ = (function (){var statearr_31893 = f__9126__auto__.call(null);(statearr_31893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___31940);
return statearr_31893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___31940,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (state_31916){var state_val_31917 = (state_31916[(1)]);if((state_val_31917 === (5)))
{var inst_31914 = (state_31916[(2)]);var state_31916__$1 = state_31916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31916__$1,inst_31914);
} else
{if((state_val_31917 === (4)))
{var state_31916__$1 = state_31916;var statearr_31918_31947 = state_31916__$1;(statearr_31918_31947[(2)] = null);
(statearr_31918_31947[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31917 === (3)))
{var inst_31900 = (state_31916[(7)]);var inst_31902 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31903 = ["HISTOGRAM TAG AGGS: ",inst_31900];var inst_31904 = (new cljs.core.PersistentVector(null,2,(5),inst_31902,inst_31903,null));var inst_31905 = cljs.core.clj__GT_js.call(null,inst_31904);var inst_31906 = console.log(inst_31905);var inst_31907 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31908 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_31909 = (new cljs.core.PersistentVector(null,1,(5),inst_31907,inst_31908,null));var inst_31910 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_31900);var inst_31911 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_31909,inst_31910);var state_31916__$1 = (function (){var statearr_31919 = state_31916;(statearr_31919[(8)] = inst_31906);
return statearr_31919;
})();var statearr_31920_31948 = state_31916__$1;(statearr_31920_31948[(2)] = inst_31911);
(statearr_31920_31948[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31917 === (2)))
{var inst_31900 = (state_31916[(7)]);var inst_31900__$1 = (state_31916[(2)]);var state_31916__$1 = (function (){var statearr_31921 = state_31916;(statearr_31921[(7)] = inst_31900__$1);
return statearr_31921;
})();if(cljs.core.truth_(inst_31900__$1))
{var statearr_31922_31949 = state_31916__$1;(statearr_31922_31949[(1)] = (3));
} else
{var statearr_31923_31950 = state_31916__$1;(statearr_31923_31950[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31917 === (1)))
{var inst_31894 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_31895 = [next_filter_spec];var inst_31896 = cljs.core.PersistentHashMap.fromArrays(inst_31894,inst_31895);var inst_31897 = cljs.core.merge.call(null,next_query,inst_31896);var inst_31898 = fetch_tag_agg_data_fn.call(null,inst_31897);var state_31916__$1 = state_31916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31916__$1,(2),inst_31898);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31927 = [null,null,null,null,null,null,null,null,null];(statearr_31927[(0)] = state_machine__9111__auto__);
(statearr_31927[(1)] = (1));
return statearr_31927;
});
var state_machine__9111__auto____1 = (function (state_31916){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31916);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31928){if((e31928 instanceof Object))
{var ex__9114__auto__ = e31928;var statearr_31929_31951 = state_31916;(statearr_31929_31951[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31928;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31952 = state_31916;
state_31916 = G__31952;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31916){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
})();var state__9127__auto__ = (function (){var statearr_31930 = f__9126__auto__.call(null);(statearr_31930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__31859,map__31859__$1,map__31860,map__31860__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__31861,map__31861__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.t31851.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t31851.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31931 = om.core.get_node.call(null,self__.owner,"chart");var G__31931__$1 = (((G__31931 == null))?null:jayq.core.$.call(null,G__31931));var G__31931__$2 = (((G__31931__$1 == null))?null:G__31931__$1.highcharts());var G__31931__$3 = (((G__31931__$2 == null))?null:G__31931__$2.reflow());return G__31931__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
);
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.t31851.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t31851.prototype.om$core$IRender$render$arity$1 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.t31851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (_31853){var self__ = this;
var _31853__$1 = this;return self__.meta31852;
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.t31851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function (_31853,meta31852__$1){var self__ = this;
var _31853__$1 = this;return (new clustermap.components.tag_histogram.t31851(self__.G__31747,self__.query,self__.owner,self__.metrics,self__.output_schema31741,self__.map__31849,self__.map__31848,self__.input_schema31742,self__.tag_agg_data,self__.tag_histogram,self__.G__31844,self__.filter_spec,self__.map__31847,self__.map__31850,self__.input_checker31743,self__.map__31845,self__.G__31746,self__.map__31846,self__.tag_type,self__.output_checker31744,self__.validate__6034__auto__,self__.G__31745,self__.id,self__.opts,self__.tag_data,self__.ufv__,self__.G__31843,meta31852__$1));
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
clustermap.components.tag_histogram.__GT_t31851 = ((function (map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936){
return (function __GT_t31851(G__31747__$1,query__$2,owner__$3,metrics__$2,output_schema31741__$1,map__31849__$2,map__31848__$2,input_schema31742__$1,tag_agg_data__$2,tag_histogram__$3,G__31844__$2,filter_spec__$2,map__31847__$2,map__31850__$2,input_checker31743__$1,map__31845__$2,G__31746__$1,map__31846__$2,tag_type__$2,output_checker31744__$1,validate__6034__auto____$1,G__31745__$1,id__$2,opts__$2,tag_data__$2,ufv____$1,G__31843__$2,meta31852){return (new clustermap.components.tag_histogram.t31851(G__31747__$1,query__$2,owner__$3,metrics__$2,output_schema31741__$1,map__31849__$2,map__31848__$2,input_schema31742__$1,tag_agg_data__$2,tag_histogram__$3,G__31844__$2,filter_spec__$2,map__31847__$2,map__31850__$2,input_checker31743__$1,map__31845__$2,G__31746__$1,map__31846__$2,tag_type__$2,output_checker31744__$1,validate__6034__auto____$1,G__31745__$1,id__$2,opts__$2,tag_data__$2,ufv____$1,G__31843__$2,meta31852));
});})(map__31848,map__31848__$1,map__31849,map__31849__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__31850,map__31850__$1,opts__$1,id__$1,G__31843,map__31845,map__31845__$1,map__31846,map__31846__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__31844,map__31847,map__31847__$1,opts,id,validate__6034__auto__,ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
}
return (new clustermap.components.tag_histogram.t31851(G__31747,query__$1,owner__$2,metrics__$1,output_schema31741_31933,map__31849__$1,map__31848__$1,input_schema31742_31934,tag_agg_data__$1,tag_histogram__$2,G__31844__$1,filter_spec__$1,map__31847__$1,map__31850__$1,input_checker31743_31935,map__31845__$1,G__31746,map__31846__$1,tag_type__$1,output_checker31744_31936,validate__6034__auto__,G__31745,id__$1,opts__$1,tag_data__$1,ufv___31932,G__31843__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31953 = output_checker31744_31936.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31953))
{var error__6036__auto___31954 = temp__4126__auto___31953;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___31954)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31954,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31741_31933,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___31932,output_schema31741_31933,input_schema31742_31934,input_checker31743_31935,output_checker31744_31936))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema31741_31933,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31742_31934], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m31740){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m31740);
});
__GT_tag_histogram = function(cursor__7850__auto__,m31740){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m31740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
