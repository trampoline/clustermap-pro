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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__30525,metrics,tag_data,tag_agg_data,p__30526){var map__30569 = p__30525;var map__30569__$1 = ((cljs.core.seq_QMARK_.call(null,map__30569))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);var query = map__30569__$1;var map__30570 = p__30526;var map__30570__$1 = ((cljs.core.seq_QMARK_.call(null,map__30570))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);var opts = map__30570__$1;var y1_title = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__12252__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function iter__30571(s__30572){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function (){var s__30572__$1 = s__30572;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30572__$1);if(temp__4126__auto__)
{var s__30572__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30572__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30572__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30574 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30573 = (0);while(true){
if((i__30573 < size__12251__auto__))
{var map__30585 = cljs.core._nth.call(null,c__12250__auto__,i__30573);var map__30585__$1 = ((cljs.core.seq_QMARK_.call(null,map__30585))?cljs.core.apply.call(null,cljs.core.hash_map,map__30585):map__30585);var metric_spec = map__30585__$1;var title = cljs.core.get.call(null,map__30585__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30585__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__30574,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12252__auto__ = ((function (i__30573,map__30585,map__30585__$1,metric_spec,title,metric,c__12250__auto__,size__12251__auto__,b__30574,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function iter__30586(s__30587){return (new cljs.core.LazySeq(null,((function (i__30573,map__30585,map__30585__$1,metric_spec,title,metric,c__12250__auto__,size__12251__auto__,b__30574,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function (){var s__30587__$1 = s__30587;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30587__$1);if(temp__4126__auto____$1)
{var s__30587__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30587__$2))
{var c__12250__auto____$1 = cljs.core.chunk_first.call(null,s__30587__$2);var size__12251__auto____$1 = cljs.core.count.call(null,c__12250__auto____$1);var b__30589 = cljs.core.chunk_buffer.call(null,size__12251__auto____$1);if((function (){var i__30588 = (0);while(true){
if((i__30588 < size__12251__auto____$1))
{var record = cljs.core._nth.call(null,c__12250__auto____$1,i__30588);cljs.core.chunk_append.call(null,b__30589,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30611 = (i__30588 + (1));
i__30588 = G__30611;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30589),iter__30586.call(null,cljs.core.chunk_rest.call(null,s__30587__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30589),null);
}
} else
{var record = cljs.core.first.call(null,s__30587__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30586.call(null,cljs.core.rest.call(null,s__30587__$2)));
}
} else
{return null;
}
break;
}
});})(i__30573,map__30585,map__30585__$1,metric_spec,title,metric,c__12250__auto__,size__12251__auto__,b__30574,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
,null,null));
});})(i__30573,map__30585,map__30585__$1,metric_spec,title,metric,c__12250__auto__,size__12251__auto__,b__30574,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,records);
})()));
{
var G__30612 = (i__30573 + (1));
i__30573 = G__30612;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30574),iter__30571.call(null,cljs.core.chunk_rest.call(null,s__30572__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30574),null);
}
} else
{var map__30590 = cljs.core.first.call(null,s__30572__$2);var map__30590__$1 = ((cljs.core.seq_QMARK_.call(null,map__30590))?cljs.core.apply.call(null,cljs.core.hash_map,map__30590):map__30590);var metric_spec = map__30590__$1;var title = cljs.core.get.call(null,map__30590__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30590__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12252__auto__ = ((function (map__30590,map__30590__$1,metric_spec,title,metric,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function iter__30591(s__30592){return (new cljs.core.LazySeq(null,((function (map__30590,map__30590__$1,metric_spec,title,metric,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function (){var s__30592__$1 = s__30592;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30592__$1);if(temp__4126__auto____$1)
{var s__30592__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30592__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30592__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30594 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30593 = (0);while(true){
if((i__30593 < size__12251__auto__))
{var record = cljs.core._nth.call(null,c__12250__auto__,i__30593);cljs.core.chunk_append.call(null,b__30594,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__30613 = (i__30593 + (1));
i__30593 = G__30613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30594),iter__30591.call(null,cljs.core.chunk_rest.call(null,s__30592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30594),null);
}
} else
{var record = cljs.core.first.call(null,s__30592__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__30591.call(null,cljs.core.rest.call(null,s__30592__$2)));
}
} else
{return null;
}
break;
}
});})(map__30590,map__30590__$1,metric_spec,title,metric,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
,null,null));
});})(map__30590,map__30590__$1,metric_spec,title,metric,s__30572__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,records);
})()),iter__30571.call(null,cljs.core.rest.call(null,s__30572__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__12252__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function iter__30595(s__30596){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function (){var s__30596__$1 = s__30596;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30596__$1);if(temp__4126__auto__)
{var s__30596__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30596__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30596__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30598 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30597 = (0);while(true){
if((i__30597 < size__12251__auto__))
{var map__30601 = cljs.core._nth.call(null,c__12250__auto__,i__30597);var map__30601__$1 = ((cljs.core.seq_QMARK_.call(null,map__30601))?cljs.core.apply.call(null,cljs.core.hash_map,map__30601):map__30601);var label_formatter = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__30598,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__30614 = (i__30597 + (1));
i__30597 = G__30614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30598),iter__30595.call(null,cljs.core.chunk_rest.call(null,s__30596__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30598),null);
}
} else
{var map__30602 = cljs.core.first.call(null,s__30596__$2);var map__30602__$1 = ((cljs.core.seq_QMARK_.call(null,map__30602))?cljs.core.apply.call(null,cljs.core.hash_map,map__30602):map__30602);var label_formatter = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__30595.call(null,cljs.core.rest.call(null,s__30596__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__12252__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function iter__30603(s__30604){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title){
return (function (){var s__30604__$1 = s__30604;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30604__$1);if(temp__4126__auto__)
{var s__30604__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30604__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30604__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30606 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30605 = (0);while(true){
if((i__30605 < size__12251__auto__))
{var vec__30609 = cljs.core._nth.call(null,c__12250__auto__,i__30605);var y = cljs.core.nth.call(null,vec__30609,(0),null);var i = cljs.core.nth.call(null,vec__30609,(1),null);cljs.core.chunk_append.call(null,b__30606,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__30615 = (i__30605 + (1));
i__30605 = G__30615;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30606),iter__30603.call(null,cljs.core.chunk_rest.call(null,s__30604__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30606),null);
}
} else
{var vec__30610 = cljs.core.first.call(null,s__30604__$2);var y = cljs.core.nth.call(null,vec__30610,(0),null);var i = cljs.core.nth.call(null,vec__30610,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__30603.call(null,cljs.core.rest.call(null,s__30604__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__30569,map__30569__$1,query,map__30570,map__30570__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
clustermap.components.tag_histogram.request_tag_data = (function request_tag_data(resource,tag_type){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.tags_of_type,tag_type);
});
clustermap.components.tag_histogram.request_tag_agg_data = (function request_tag_agg_data(resource,query){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.nested_aggregation,query);
});
var ufv___30674 = schema.utils.use_fn_validation;var output_schema30617_30675 = schema.core.Any;var input_schema30618_30676 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker30619_30677 = schema.core.checker.call(null,input_schema30618_30676);var output_checker30620_30678 = schema.core.checker.call(null,output_schema30617_30675);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function tag_histogram(G__30621,G__30622,G__30623){var validate__13909__auto__ = ufv___30674.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30621,G__30622,G__30623], null);var temp__4126__auto___30680 = input_checker30619_30677.call(null,args__13910__auto___30679);if(cljs.core.truth_(temp__4126__auto___30680))
{var error__13911__auto___30681 = temp__4126__auto___30680;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__13911__auto___30681)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30681,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30679,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30618_30676,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var G__30652 = G__30621;var map__30654 = G__30652;var map__30654__$1 = ((cljs.core.seq_QMARK_.call(null,map__30654))?cljs.core.apply.call(null,cljs.core.hash_map,map__30654):map__30654);var map__30655 = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30655__$1 = ((cljs.core.seq_QMARK_.call(null,map__30655))?cljs.core.apply.call(null,cljs.core.hash_map,map__30655):map__30655);var tag_histogram__$1 = map__30655__$1;var query = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__30622;var G__30653 = G__30623;var map__30656 = G__30653;var map__30656__$1 = ((cljs.core.seq_QMARK_.call(null,map__30656))?cljs.core.apply.call(null,cljs.core.hash_map,map__30656):map__30656);var opts = map__30656__$1;var id = cljs.core.get.call(null,map__30656__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__30652__$1 = G__30652;var owner__$1 = owner;var G__30653__$1 = G__30653;while(true){
var map__30657 = G__30652__$1;var map__30657__$1 = ((cljs.core.seq_QMARK_.call(null,map__30657))?cljs.core.apply.call(null,cljs.core.hash_map,map__30657):map__30657);var map__30658 = cljs.core.get.call(null,map__30657__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30658__$1 = ((cljs.core.seq_QMARK_.call(null,map__30658))?cljs.core.apply.call(null,cljs.core.hash_map,map__30658):map__30658);var tag_histogram__$2 = map__30658__$1;var query__$1 = cljs.core.get.call(null,map__30658__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__30658__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__30658__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__30658__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__30658__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__30657__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__30659 = G__30653__$1;var map__30659__$1 = ((cljs.core.seq_QMARK_.call(null,map__30659))?cljs.core.apply.call(null,cljs.core.hash_map,map__30659):map__30659);var opts__$1 = map__30659__$1;var id__$1 = cljs.core.get.call(null,map__30659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t30660 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t30660 = (function (map__30658,query,map__30657,owner,metrics,output_schema30617,map__30654,output_checker30620,validate__13909__auto__,input_checker30619,tag_agg_data,tag_histogram,filter_spec,G__30623,tag_type,map__30656,G__30621,G__30652,map__30659,input_schema30618,id,G__30622,opts,tag_data,G__30653,ufv__,map__30655,meta30661){
this.map__30658 = map__30658;
this.query = query;
this.map__30657 = map__30657;
this.owner = owner;
this.metrics = metrics;
this.output_schema30617 = output_schema30617;
this.map__30654 = map__30654;
this.output_checker30620 = output_checker30620;
this.validate__13909__auto__ = validate__13909__auto__;
this.input_checker30619 = input_checker30619;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.filter_spec = filter_spec;
this.G__30623 = G__30623;
this.tag_type = tag_type;
this.map__30656 = map__30656;
this.G__30621 = G__30621;
this.G__30652 = G__30652;
this.map__30659 = map__30659;
this.input_schema30618 = input_schema30618;
this.id = id;
this.G__30622 = G__30622;
this.opts = opts;
this.tag_data = tag_data;
this.G__30653 = G__30653;
this.ufv__ = ufv__;
this.map__30655 = map__30655;
this.meta30661 = meta30661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t30660.cljs$lang$type = true;
clustermap.components.tag_histogram.t30660.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t30660";
clustermap.components.tag_histogram.t30660.cljs$lang$ctorPrWriter = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.tag-histogram/t30660");
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.t30660.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t30660.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.t30660.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t30660.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (_,p__30663,___$1){var self__ = this;
var map__30664 = p__30663;var map__30664__$1 = ((cljs.core.seq_QMARK_.call(null,map__30664))?cljs.core.apply.call(null,cljs.core.hash_map,map__30664):map__30664);var map__30665 = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30665__$1 = ((cljs.core.seq_QMARK_.call(null,map__30665))?cljs.core.apply.call(null,cljs.core.hash_map,map__30665):map__30665);var prev_query = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.metrics,self__.tag_data,self__.tag_agg_data,self__.opts);
} else
{return null;
}
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.t30660.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t30660.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (_,p__30666,p__30667){var self__ = this;
var map__30668 = p__30666;var map__30668__$1 = ((cljs.core.seq_QMARK_.call(null,map__30668))?cljs.core.apply.call(null,cljs.core.hash_map,map__30668):map__30668);var map__30669 = cljs.core.get.call(null,map__30668__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__30669__$1 = ((cljs.core.seq_QMARK_.call(null,map__30669))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);var next_query = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__30668__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30670 = p__30667;var map__30670__$1 = ((cljs.core.seq_QMARK_.call(null,map__30670))?cljs.core.apply.call(null,cljs.core.hash_map,map__30670):map__30670);var next_tag_data_resource = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551));var next_tag_agg_data_resource = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{clustermap.components.tag_histogram.request_tag_data.call(null,next_tag_data_resource,next_tag_type);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.tag_histogram.request_tag_agg_data.call(null,next_tag_agg_data_resource,cljs.core.merge.call(null,next_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),next_filter_spec], null)));
} else
{return null;
}
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.t30660.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t30660.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-data-resource");var tadr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"tag-agg-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-data-resource","tag-data-resource",-1996057551),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)], null),response);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"tag-agg-data-resource","tag-agg-data-resource",-1619650244),tadr);
clustermap.ordered_resource.retrieve_responses.call(null,tadr,((function (node,tdr,tadr,last_dims,w,h,___$1,map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (p__30671){var map__30672 = p__30671;var map__30672__$1 = ((cljs.core.seq_QMARK_.call(null,map__30672))?cljs.core.apply.call(null,cljs.core.hash_map,map__30672):map__30672);var response = map__30672__$1;var records = cljs.core.get.call(null,map__30672__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HISTOGRAM TAG AGGS: ",response], null)));
return om.core.update_BANG_.call(null,self__.tag_histogram,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)], null),records);
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,tadr,last_dims,w,h,___$1,map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__30673 = om.core.get_node.call(null,self__.owner,"chart");var G__30673__$1 = (((G__30673 == null))?null:jayq.core.$.call(null,G__30673));var G__30673__$2 = (((G__30673__$1 == null))?null:G__30673__$1.highcharts());var G__30673__$3 = (((G__30673__$2 == null))?null:G__30673__$2.reflow());return G__30673__$3;
} else
{return null;
}
});})(node,tdr,tadr,last_dims,w,h,___$1,map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
);
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.t30660.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t30660.prototype.om$core$IRender$render$arity$1 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.t30660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (_30662){var self__ = this;
var _30662__$1 = this;return self__.meta30661;
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.t30660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function (_30662,meta30661__$1){var self__ = this;
var _30662__$1 = this;return (new clustermap.components.tag_histogram.t30660(self__.map__30658,self__.query,self__.map__30657,self__.owner,self__.metrics,self__.output_schema30617,self__.map__30654,self__.output_checker30620,self__.validate__13909__auto__,self__.input_checker30619,self__.tag_agg_data,self__.tag_histogram,self__.filter_spec,self__.G__30623,self__.tag_type,self__.map__30656,self__.G__30621,self__.G__30652,self__.map__30659,self__.input_schema30618,self__.id,self__.G__30622,self__.opts,self__.tag_data,self__.G__30653,self__.ufv__,self__.map__30655,meta30661__$1));
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
clustermap.components.tag_histogram.__GT_t30660 = ((function (map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678){
return (function __GT_t30660(map__30658__$2,query__$2,map__30657__$2,owner__$3,metrics__$2,output_schema30617__$1,map__30654__$2,output_checker30620__$1,validate__13909__auto____$1,input_checker30619__$1,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,G__30623__$1,tag_type__$2,map__30656__$2,G__30621__$1,G__30652__$2,map__30659__$2,input_schema30618__$1,id__$2,G__30622__$1,opts__$2,tag_data__$2,G__30653__$2,ufv____$1,map__30655__$2,meta30661){return (new clustermap.components.tag_histogram.t30660(map__30658__$2,query__$2,map__30657__$2,owner__$3,metrics__$2,output_schema30617__$1,map__30654__$2,output_checker30620__$1,validate__13909__auto____$1,input_checker30619__$1,tag_agg_data__$2,tag_histogram__$3,filter_spec__$2,G__30623__$1,tag_type__$2,map__30656__$2,G__30621__$1,G__30652__$2,map__30659__$2,input_schema30618__$1,id__$2,G__30622__$1,opts__$2,tag_data__$2,G__30653__$2,ufv____$1,map__30655__$2,meta30661));
});})(map__30657,map__30657__$1,map__30658,map__30658__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__30659,map__30659__$1,opts__$1,id__$1,G__30652,map__30654,map__30654__$1,map__30655,map__30655__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__30653,map__30656,map__30656__$1,opts,id,validate__13909__auto__,ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
}
return (new clustermap.components.tag_histogram.t30660(map__30658__$1,query__$1,map__30657__$1,owner__$2,metrics__$1,output_schema30617_30675,map__30654__$1,output_checker30620_30678,validate__13909__auto__,input_checker30619_30677,tag_agg_data__$1,tag_histogram__$2,filter_spec__$1,G__30623,tag_type__$1,map__30656__$1,G__30621,G__30652__$1,map__30659__$1,input_schema30618_30676,id__$1,G__30622,opts__$1,tag_data__$1,G__30653__$1,ufv___30674,map__30655__$1,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30682 = output_checker30620_30678.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30682))
{var error__13911__auto___30683 = temp__4126__auto___30682;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__13911__auto___30683)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30683,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30617_30675,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___30674,output_schema30617_30675,input_schema30618_30676,input_checker30619_30677,output_checker30620_30678))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema30617_30675,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30618_30676], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__15725__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__15725__auto__,m30616){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__15725__auto__,m30616);
});
__GT_tag_histogram = function(cursor__15725__auto__,m30616){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__15725__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__15725__auto__,m30616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;

//# sourceMappingURL=tag_histogram.js.map