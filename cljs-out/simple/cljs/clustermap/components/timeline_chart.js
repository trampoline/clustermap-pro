// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.timeline_chart');
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
clustermap.components.timeline_chart.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20628,p__20629){var map__20661 = p__20628;var map__20661__$1 = ((cljs.core.seq_QMARK_.call(null,map__20661))?cljs.core.apply.call(null,cljs.core.hash_map,map__20661):map__20661);var map__20662 = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20662__$1 = ((cljs.core.seq_QMARK_.call(null,map__20662))?cljs.core.apply.call(null,cljs.core.hash_map,map__20662):map__20662);var metrics = cljs.core.get.call(null,map__20662__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20661__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20663 = p__20629;var map__20663__$1 = ((cljs.core.seq_QMARK_.call(null,map__20663))?cljs.core.apply.call(null,cljs.core.hash_map,map__20663):map__20663);var opts = map__20663__$1;var y1_title = cljs.core.get.call(null,map__20663__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20663__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (p1__20627_SHARP_){return ((1900) + p1__20627_SHARP_);
});})(map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (p1__20626_SHARP_){return p1__20626_SHARP_.getYear();
});})(map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (p1__20625_SHARP_){return (new Date(p1__20625_SHARP_));
});})(map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function iter__20664(s__20665){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (){var s__20665__$1 = s__20665;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20665__$1);if(temp__4126__auto__)
{var s__20665__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20665__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20665__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20667 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20666 = (0);while(true){
if((i__20666 < size__4376__auto__))
{var map__20678 = cljs.core._nth.call(null,c__4375__auto__,i__20666);var map__20678__$1 = ((cljs.core.seq_QMARK_.call(null,map__20678))?cljs.core.apply.call(null,cljs.core.hash_map,map__20678):map__20678);var metric_spec = map__20678__$1;var title = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20667,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20666,map__20678,map__20678__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20667,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function iter__20679(s__20680){return (new cljs.core.LazySeq(null,((function (i__20666,map__20678,map__20678__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20667,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (){var s__20680__$1 = s__20680;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20680__$1);if(temp__4126__auto____$1)
{var s__20680__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20680__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20680__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20682 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20681 = (0);while(true){
if((i__20681 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20681);cljs.core.chunk_append.call(null,b__20682,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20692 = (i__20681 + (1));
i__20681 = G__20692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20682),iter__20679.call(null,cljs.core.chunk_rest.call(null,s__20680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20682),null);
}
} else
{var record = cljs.core.first.call(null,s__20680__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20679.call(null,cljs.core.rest.call(null,s__20680__$2)));
}
} else
{return null;
}
break;
}
});})(i__20666,map__20678,map__20678__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20667,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20666,map__20678,map__20678__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20667,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20693 = (i__20666 + (1));
i__20666 = G__20693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20667),iter__20664.call(null,cljs.core.chunk_rest.call(null,s__20665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20667),null);
}
} else
{var map__20683 = cljs.core.first.call(null,s__20665__$2);var map__20683__$1 = ((cljs.core.seq_QMARK_.call(null,map__20683))?cljs.core.apply.call(null,cljs.core.hash_map,map__20683):map__20683);var metric_spec = map__20683__$1;var title = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20683,map__20683__$1,metric_spec,title,metric,variable,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function iter__20684(s__20685){return (new cljs.core.LazySeq(null,((function (map__20683,map__20683__$1,metric_spec,title,metric,variable,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (){var s__20685__$1 = s__20685;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20685__$1);if(temp__4126__auto____$1)
{var s__20685__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20685__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20685__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20687 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20686 = (0);while(true){
if((i__20686 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20686);cljs.core.chunk_append.call(null,b__20687,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20694 = (i__20686 + (1));
i__20686 = G__20694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20687),iter__20684.call(null,cljs.core.chunk_rest.call(null,s__20685__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20687),null);
}
} else
{var record = cljs.core.first.call(null,s__20685__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20684.call(null,cljs.core.rest.call(null,s__20685__$2)));
}
} else
{return null;
}
break;
}
});})(map__20683,map__20683__$1,metric_spec,title,metric,variable,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20683,map__20683__$1,metric_spec,title,metric,variable,s__20665__$2,temp__4126__auto__,x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20664.call(null,cljs.core.rest.call(null,s__20665__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function iter__20688(s__20689){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title){
return (function (){var s__20689__$1 = s__20689;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20689__$1);if(temp__4126__auto__)
{var s__20689__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20689__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20689__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20691 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20690 = (0);while(true){
if((i__20690 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20690);cljs.core.chunk_append.call(null,b__20691,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20695 = (i__20690 + (1));
i__20690 = G__20695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20691),iter__20688.call(null,cljs.core.chunk_rest.call(null,s__20689__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20691),null);
}
} else
{var y = cljs.core.first.call(null,s__20689__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20688.call(null,cljs.core.rest.call(null,s__20689__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20661,map__20661__$1,map__20662,map__20662__$1,metrics,color,records,map__20663,map__20663__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20816 = schema.utils.use_fn_validation;var output_schema20697_20817 = schema.core.Any;var input_schema20698_20818 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20699_20819 = schema.core.checker.call(null,input_schema20698_20818);var output_checker20700_20820 = schema.core.checker.call(null,output_schema20697_20817);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function timeline_chart(G__20701,G__20702,G__20703){var validate__6034__auto__ = ufv___20816.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20821 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20701,G__20702,G__20703], null);var temp__4126__auto___20822 = input_checker20699_20819.call(null,args__6035__auto___20821);if(cljs.core.truth_(temp__4126__auto___20822))
{var error__6036__auto___20823 = temp__4126__auto___20822;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20823)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20823,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20821,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20698_20818,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20763 = G__20701;var map__20765 = G__20763;var map__20765__$1 = ((cljs.core.seq_QMARK_.call(null,map__20765))?cljs.core.apply.call(null,cljs.core.hash_map,map__20765):map__20765);var map__20766 = cljs.core.get.call(null,map__20765__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20766__$1 = ((cljs.core.seq_QMARK_.call(null,map__20766))?cljs.core.apply.call(null,cljs.core.hash_map,map__20766):map__20766);var timeline_chart__$1 = map__20766__$1;var query = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20766__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20765__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20702;var G__20764 = G__20703;var map__20767 = G__20764;var map__20767__$1 = ((cljs.core.seq_QMARK_.call(null,map__20767))?cljs.core.apply.call(null,cljs.core.hash_map,map__20767):map__20767);var opts = map__20767__$1;var id = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20763__$1 = G__20763;var owner__$1 = owner;var G__20764__$1 = G__20764;while(true){
var map__20768 = G__20763__$1;var map__20768__$1 = ((cljs.core.seq_QMARK_.call(null,map__20768))?cljs.core.apply.call(null,cljs.core.hash_map,map__20768):map__20768);var map__20769 = cljs.core.get.call(null,map__20768__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20769__$1 = ((cljs.core.seq_QMARK_.call(null,map__20769))?cljs.core.apply.call(null,cljs.core.hash_map,map__20769):map__20769);var timeline_chart__$2 = map__20769__$1;var query__$1 = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20768__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20770 = G__20764__$1;var map__20770__$1 = ((cljs.core.seq_QMARK_.call(null,map__20770))?cljs.core.apply.call(null,cljs.core.hash_map,map__20770):map__20770);var opts__$1 = map__20770__$1;var id__$1 = cljs.core.get.call(null,map__20770__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20771 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20771 = (function (query,owner,map__20766,G__20763,map__20767,G__20702,input_schema20698,G__20703,timeline_data,filter_spec,input_checker20699,map__20770,map__20765,map__20769,G__20764,map__20768,output_schema20697,output_checker20700,validate__6034__auto__,id,timeline_chart,G__20701,opts,ufv__,meta20772){
this.query = query;
this.owner = owner;
this.map__20766 = map__20766;
this.G__20763 = G__20763;
this.map__20767 = map__20767;
this.G__20702 = G__20702;
this.input_schema20698 = input_schema20698;
this.G__20703 = G__20703;
this.timeline_data = timeline_data;
this.filter_spec = filter_spec;
this.input_checker20699 = input_checker20699;
this.map__20770 = map__20770;
this.map__20765 = map__20765;
this.map__20769 = map__20769;
this.G__20764 = G__20764;
this.map__20768 = map__20768;
this.output_schema20697 = output_schema20697;
this.output_checker20700 = output_checker20700;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.G__20701 = G__20701;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20772 = meta20772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20771.cljs$lang$type = true;
clustermap.components.timeline_chart.t20771.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20771";
clustermap.components.timeline_chart.t20771.cljs$lang$ctorPrWriter = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20771");
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.t20771.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20771.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.t20771.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20771.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (_,p__20774,___$1){var self__ = this;
var map__20775 = p__20774;var map__20775__$1 = ((cljs.core.seq_QMARK_.call(null,map__20775))?cljs.core.apply.call(null,cljs.core.hash_map,map__20775):map__20775);var map__20776 = cljs.core.get.call(null,map__20775__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20776__$1 = ((cljs.core.seq_QMARK_.call(null,map__20776))?cljs.core.apply.call(null,cljs.core.hash_map,map__20776):map__20776);var prev_query = cljs.core.get.call(null,map__20776__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20776__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20775__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.t20771.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20771.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (_,p__20777,p__20778){var self__ = this;
var map__20779 = p__20777;var map__20779__$1 = ((cljs.core.seq_QMARK_.call(null,map__20779))?cljs.core.apply.call(null,cljs.core.hash_map,map__20779):map__20779);var map__20780 = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20780__$1 = ((cljs.core.seq_QMARK_.call(null,map__20780))?cljs.core.apply.call(null,cljs.core.hash_map,map__20780):map__20780);var next_query = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20781 = p__20778;var map__20781__$1 = ((cljs.core.seq_QMARK_.call(null,map__20781))?cljs.core.apply.call(null,cljs.core.hash_map,map__20781):map__20781);var fetch_data_fn = cljs.core.get.call(null,map__20781__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20779,map__20779__$1,map__20780,map__20780__$1,next_query,next_timeline_data,next_filter_spec,map__20781,map__20781__$1,fetch_data_fn,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20779,map__20779__$1,map__20780,map__20780__$1,next_query,next_timeline_data,next_filter_spec,map__20781,map__20781__$1,fetch_data_fn,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (state_20800){var state_val_20801 = (state_20800[(1)]);if((state_val_20801 === (5)))
{var inst_20798 = (state_20800[(2)]);var state_20800__$1 = state_20800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20800__$1,inst_20798);
} else
{if((state_val_20801 === (4)))
{var state_20800__$1 = state_20800;var statearr_20802_20824 = state_20800__$1;(statearr_20802_20824[(2)] = null);
(statearr_20802_20824[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20801 === (3)))
{var inst_20784 = (state_20800[(7)]);var inst_20786 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20787 = ["TIMELINE DATA",inst_20784];var inst_20788 = (new cljs.core.PersistentVector(null,2,(5),inst_20786,inst_20787,null));var inst_20789 = cljs.core.clj__GT_js.call(null,inst_20788);var inst_20790 = console.log(inst_20789);var inst_20791 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20792 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20793 = (new cljs.core.PersistentVector(null,1,(5),inst_20791,inst_20792,null));var inst_20794 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20784);var inst_20795 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20793,inst_20794);var state_20800__$1 = (function (){var statearr_20803 = state_20800;(statearr_20803[(8)] = inst_20790);
return statearr_20803;
})();var statearr_20804_20825 = state_20800__$1;(statearr_20804_20825[(2)] = inst_20795);
(statearr_20804_20825[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20801 === (2)))
{var inst_20784 = (state_20800[(7)]);var inst_20784__$1 = (state_20800[(2)]);var state_20800__$1 = (function (){var statearr_20805 = state_20800;(statearr_20805[(7)] = inst_20784__$1);
return statearr_20805;
})();if(cljs.core.truth_(inst_20784__$1))
{var statearr_20806_20826 = state_20800__$1;(statearr_20806_20826[(1)] = (3));
} else
{var statearr_20807_20827 = state_20800__$1;(statearr_20807_20827[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20801 === (1)))
{var inst_20782 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20800__$1 = state_20800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20800__$1,(2),inst_20782);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20779,map__20779__$1,map__20780,map__20780__$1,next_query,next_timeline_data,next_filter_spec,map__20781,map__20781__$1,fetch_data_fn,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20779,map__20779__$1,map__20780,map__20780__$1,next_query,next_timeline_data,next_filter_spec,map__20781,map__20781__$1,fetch_data_fn,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20811 = [null,null,null,null,null,null,null,null,null];(statearr_20811[(0)] = state_machine__9111__auto__);
(statearr_20811[(1)] = (1));
return statearr_20811;
});
var state_machine__9111__auto____1 = (function (state_20800){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20800);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20812){if((e20812 instanceof Object))
{var ex__9114__auto__ = e20812;var statearr_20813_20828 = state_20800;(statearr_20813_20828[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20812;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20829 = state_20800;
state_20800 = G__20829;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20800){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20779,map__20779__$1,map__20780,map__20780__$1,next_query,next_timeline_data,next_filter_spec,map__20781,map__20781__$1,fetch_data_fn,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
})();var state__9127__auto__ = (function (){var statearr_20814 = f__9126__auto__.call(null);(statearr_20814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20779,map__20779__$1,map__20780,map__20780__$1,next_query,next_timeline_data,next_filter_spec,map__20781,map__20781__$1,fetch_data_fn,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.t20771.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20771.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20815 = om.core.get_node.call(null,self__.owner,"chart");var G__20815__$1 = (((G__20815 == null))?null:jayq.core.$.call(null,G__20815));var G__20815__$2 = (((G__20815__$1 == null))?null:G__20815__$1.highcharts());var G__20815__$3 = (((G__20815__$2 == null))?null:G__20815__$2.reflow());return G__20815__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
);
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.t20771.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20771.prototype.om$core$IRender$render$arity$1 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.t20771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (_20773){var self__ = this;
var _20773__$1 = this;return self__.meta20772;
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.t20771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function (_20773,meta20772__$1){var self__ = this;
var _20773__$1 = this;return (new clustermap.components.timeline_chart.t20771(self__.query,self__.owner,self__.map__20766,self__.G__20763,self__.map__20767,self__.G__20702,self__.input_schema20698,self__.G__20703,self__.timeline_data,self__.filter_spec,self__.input_checker20699,self__.map__20770,self__.map__20765,self__.map__20769,self__.G__20764,self__.map__20768,self__.output_schema20697,self__.output_checker20700,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.G__20701,self__.opts,self__.ufv__,meta20772__$1));
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
clustermap.components.timeline_chart.__GT_t20771 = ((function (map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820){
return (function __GT_t20771(query__$2,owner__$3,map__20766__$2,G__20763__$2,map__20767__$2,G__20702__$1,input_schema20698__$1,G__20703__$1,timeline_data__$2,filter_spec__$2,input_checker20699__$1,map__20770__$2,map__20765__$2,map__20769__$2,G__20764__$2,map__20768__$2,output_schema20697__$1,output_checker20700__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__20701__$1,opts__$2,ufv____$1,meta20772){return (new clustermap.components.timeline_chart.t20771(query__$2,owner__$3,map__20766__$2,G__20763__$2,map__20767__$2,G__20702__$1,input_schema20698__$1,G__20703__$1,timeline_data__$2,filter_spec__$2,input_checker20699__$1,map__20770__$2,map__20765__$2,map__20769__$2,G__20764__$2,map__20768__$2,output_schema20697__$1,output_checker20700__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__20701__$1,opts__$2,ufv____$1,meta20772));
});})(map__20768,map__20768__$1,map__20769,map__20769__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20770,map__20770__$1,opts__$1,id__$1,G__20763,map__20765,map__20765__$1,map__20766,map__20766__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20764,map__20767,map__20767__$1,opts,id,validate__6034__auto__,ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
}
return (new clustermap.components.timeline_chart.t20771(query__$1,owner__$2,map__20766__$1,G__20763__$1,map__20767__$1,G__20702,input_schema20698_20818,G__20703,timeline_data__$1,filter_spec__$1,input_checker20699_20819,map__20770__$1,map__20765__$1,map__20769__$1,G__20764__$1,map__20768__$1,output_schema20697_20817,output_checker20700_20820,validate__6034__auto__,id__$1,timeline_chart__$2,G__20701,opts__$1,ufv___20816,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20830 = output_checker20700_20820.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20830))
{var error__6036__auto___20831 = temp__4126__auto___20830;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20831)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20831,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20697_20817,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20816,output_schema20697_20817,input_schema20698_20818,input_checker20699_20819,output_checker20700_20820))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20697_20817,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20698_20818], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20696){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20696);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20696){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
