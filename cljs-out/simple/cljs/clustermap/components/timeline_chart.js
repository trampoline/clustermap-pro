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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20600,p__20601){var map__20633 = p__20600;var map__20633__$1 = ((cljs.core.seq_QMARK_.call(null,map__20633))?cljs.core.apply.call(null,cljs.core.hash_map,map__20633):map__20633);var map__20634 = cljs.core.get.call(null,map__20633__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20634__$1 = ((cljs.core.seq_QMARK_.call(null,map__20634))?cljs.core.apply.call(null,cljs.core.hash_map,map__20634):map__20634);var metrics = cljs.core.get.call(null,map__20634__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20633__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20633__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20635 = p__20601;var map__20635__$1 = ((cljs.core.seq_QMARK_.call(null,map__20635))?cljs.core.apply.call(null,cljs.core.hash_map,map__20635):map__20635);var opts = map__20635__$1;var y1_title = cljs.core.get.call(null,map__20635__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20635__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (p1__20599_SHARP_){return ((1900) + p1__20599_SHARP_);
});})(map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (p1__20598_SHARP_){return p1__20598_SHARP_.getYear();
});})(map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (p1__20597_SHARP_){return (new Date(p1__20597_SHARP_));
});})(map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function iter__20636(s__20637){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (){var s__20637__$1 = s__20637;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20637__$1);if(temp__4126__auto__)
{var s__20637__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20637__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20637__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20639 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20638 = (0);while(true){
if((i__20638 < size__4376__auto__))
{var map__20650 = cljs.core._nth.call(null,c__4375__auto__,i__20638);var map__20650__$1 = ((cljs.core.seq_QMARK_.call(null,map__20650))?cljs.core.apply.call(null,cljs.core.hash_map,map__20650):map__20650);var metric_spec = map__20650__$1;var title = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20639,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20638,map__20650,map__20650__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20639,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function iter__20651(s__20652){return (new cljs.core.LazySeq(null,((function (i__20638,map__20650,map__20650__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20639,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (){var s__20652__$1 = s__20652;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20652__$1);if(temp__4126__auto____$1)
{var s__20652__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20652__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20652__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20654 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20653 = (0);while(true){
if((i__20653 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20653);cljs.core.chunk_append.call(null,b__20654,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20664 = (i__20653 + (1));
i__20653 = G__20664;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20654),iter__20651.call(null,cljs.core.chunk_rest.call(null,s__20652__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20654),null);
}
} else
{var record = cljs.core.first.call(null,s__20652__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20651.call(null,cljs.core.rest.call(null,s__20652__$2)));
}
} else
{return null;
}
break;
}
});})(i__20638,map__20650,map__20650__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20639,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20638,map__20650,map__20650__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20639,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20665 = (i__20638 + (1));
i__20638 = G__20665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20639),iter__20636.call(null,cljs.core.chunk_rest.call(null,s__20637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20639),null);
}
} else
{var map__20655 = cljs.core.first.call(null,s__20637__$2);var map__20655__$1 = ((cljs.core.seq_QMARK_.call(null,map__20655))?cljs.core.apply.call(null,cljs.core.hash_map,map__20655):map__20655);var metric_spec = map__20655__$1;var title = cljs.core.get.call(null,map__20655__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20655__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20655__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20655,map__20655__$1,metric_spec,title,metric,variable,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function iter__20656(s__20657){return (new cljs.core.LazySeq(null,((function (map__20655,map__20655__$1,metric_spec,title,metric,variable,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (){var s__20657__$1 = s__20657;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20657__$1);if(temp__4126__auto____$1)
{var s__20657__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20657__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20657__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20659 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20658 = (0);while(true){
if((i__20658 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20658);cljs.core.chunk_append.call(null,b__20659,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20666 = (i__20658 + (1));
i__20658 = G__20666;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20659),iter__20656.call(null,cljs.core.chunk_rest.call(null,s__20657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20659),null);
}
} else
{var record = cljs.core.first.call(null,s__20657__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20656.call(null,cljs.core.rest.call(null,s__20657__$2)));
}
} else
{return null;
}
break;
}
});})(map__20655,map__20655__$1,metric_spec,title,metric,variable,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20655,map__20655__$1,metric_spec,title,metric,variable,s__20637__$2,temp__4126__auto__,x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20636.call(null,cljs.core.rest.call(null,s__20637__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function iter__20660(s__20661){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title){
return (function (){var s__20661__$1 = s__20661;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20661__$1);if(temp__4126__auto__)
{var s__20661__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20661__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20661__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20663 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20662 = (0);while(true){
if((i__20662 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20662);cljs.core.chunk_append.call(null,b__20663,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20667 = (i__20662 + (1));
i__20662 = G__20667;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20663),iter__20660.call(null,cljs.core.chunk_rest.call(null,s__20661__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20663),null);
}
} else
{var y = cljs.core.first.call(null,s__20661__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20660.call(null,cljs.core.rest.call(null,s__20661__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20633,map__20633__$1,map__20634,map__20634__$1,metrics,color,records,map__20635,map__20635__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20788 = schema.utils.use_fn_validation;var output_schema20669_20789 = schema.core.Any;var input_schema20670_20790 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20671_20791 = schema.core.checker.call(null,input_schema20670_20790);var output_checker20672_20792 = schema.core.checker.call(null,output_schema20669_20789);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function timeline_chart(G__20673,G__20674,G__20675){var validate__6034__auto__ = ufv___20788.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20793 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20673,G__20674,G__20675], null);var temp__4126__auto___20794 = input_checker20671_20791.call(null,args__6035__auto___20793);if(cljs.core.truth_(temp__4126__auto___20794))
{var error__6036__auto___20795 = temp__4126__auto___20794;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20795,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20793,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20670_20790,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20735 = G__20673;var map__20737 = G__20735;var map__20737__$1 = ((cljs.core.seq_QMARK_.call(null,map__20737))?cljs.core.apply.call(null,cljs.core.hash_map,map__20737):map__20737);var map__20738 = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20738__$1 = ((cljs.core.seq_QMARK_.call(null,map__20738))?cljs.core.apply.call(null,cljs.core.hash_map,map__20738):map__20738);var timeline_chart__$1 = map__20738__$1;var query = cljs.core.get.call(null,map__20738__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20738__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20674;var G__20736 = G__20675;var map__20739 = G__20736;var map__20739__$1 = ((cljs.core.seq_QMARK_.call(null,map__20739))?cljs.core.apply.call(null,cljs.core.hash_map,map__20739):map__20739);var opts = map__20739__$1;var id = cljs.core.get.call(null,map__20739__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20735__$1 = G__20735;var owner__$1 = owner;var G__20736__$1 = G__20736;while(true){
var map__20740 = G__20735__$1;var map__20740__$1 = ((cljs.core.seq_QMARK_.call(null,map__20740))?cljs.core.apply.call(null,cljs.core.hash_map,map__20740):map__20740);var map__20741 = cljs.core.get.call(null,map__20740__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20741__$1 = ((cljs.core.seq_QMARK_.call(null,map__20741))?cljs.core.apply.call(null,cljs.core.hash_map,map__20741):map__20741);var timeline_chart__$2 = map__20741__$1;var query__$1 = cljs.core.get.call(null,map__20741__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20741__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20740__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20742 = G__20736__$1;var map__20742__$1 = ((cljs.core.seq_QMARK_.call(null,map__20742))?cljs.core.apply.call(null,cljs.core.hash_map,map__20742):map__20742);var opts__$1 = map__20742__$1;var id__$1 = cljs.core.get.call(null,map__20742__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20743 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20743 = (function (query,G__20735,owner,output_schema20669,map__20738,G__20675,timeline_data,map__20742,filter_spec,map__20739,map__20737,G__20736,output_checker20672,G__20673,G__20674,input_checker20671,validate__6034__auto__,map__20741,id,map__20740,timeline_chart,opts,input_schema20670,ufv__,meta20744){
this.query = query;
this.G__20735 = G__20735;
this.owner = owner;
this.output_schema20669 = output_schema20669;
this.map__20738 = map__20738;
this.G__20675 = G__20675;
this.timeline_data = timeline_data;
this.map__20742 = map__20742;
this.filter_spec = filter_spec;
this.map__20739 = map__20739;
this.map__20737 = map__20737;
this.G__20736 = G__20736;
this.output_checker20672 = output_checker20672;
this.G__20673 = G__20673;
this.G__20674 = G__20674;
this.input_checker20671 = input_checker20671;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__20741 = map__20741;
this.id = id;
this.map__20740 = map__20740;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.input_schema20670 = input_schema20670;
this.ufv__ = ufv__;
this.meta20744 = meta20744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20743.cljs$lang$type = true;
clustermap.components.timeline_chart.t20743.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20743";
clustermap.components.timeline_chart.t20743.cljs$lang$ctorPrWriter = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20743");
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.t20743.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20743.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.t20743.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20743.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (_,p__20746,___$1){var self__ = this;
var map__20747 = p__20746;var map__20747__$1 = ((cljs.core.seq_QMARK_.call(null,map__20747))?cljs.core.apply.call(null,cljs.core.hash_map,map__20747):map__20747);var map__20748 = cljs.core.get.call(null,map__20747__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20748__$1 = ((cljs.core.seq_QMARK_.call(null,map__20748))?cljs.core.apply.call(null,cljs.core.hash_map,map__20748):map__20748);var prev_query = cljs.core.get.call(null,map__20748__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20748__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20747__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.t20743.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20743.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (_,p__20749,p__20750){var self__ = this;
var map__20751 = p__20749;var map__20751__$1 = ((cljs.core.seq_QMARK_.call(null,map__20751))?cljs.core.apply.call(null,cljs.core.hash_map,map__20751):map__20751);var map__20752 = cljs.core.get.call(null,map__20751__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20752__$1 = ((cljs.core.seq_QMARK_.call(null,map__20752))?cljs.core.apply.call(null,cljs.core.hash_map,map__20752):map__20752);var next_query = cljs.core.get.call(null,map__20752__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20752__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20751__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20753 = p__20750;var map__20753__$1 = ((cljs.core.seq_QMARK_.call(null,map__20753))?cljs.core.apply.call(null,cljs.core.hash_map,map__20753):map__20753);var fetch_data_fn = cljs.core.get.call(null,map__20753__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20751,map__20751__$1,map__20752,map__20752__$1,next_query,next_timeline_data,next_filter_spec,map__20753,map__20753__$1,fetch_data_fn,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20751,map__20751__$1,map__20752,map__20752__$1,next_query,next_timeline_data,next_filter_spec,map__20753,map__20753__$1,fetch_data_fn,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (state_20772){var state_val_20773 = (state_20772[(1)]);if((state_val_20773 === (5)))
{var inst_20770 = (state_20772[(2)]);var state_20772__$1 = state_20772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20772__$1,inst_20770);
} else
{if((state_val_20773 === (4)))
{var state_20772__$1 = state_20772;var statearr_20774_20796 = state_20772__$1;(statearr_20774_20796[(2)] = null);
(statearr_20774_20796[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20773 === (3)))
{var inst_20756 = (state_20772[(7)]);var inst_20758 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20759 = ["TIMELINE DATA",inst_20756];var inst_20760 = (new cljs.core.PersistentVector(null,2,(5),inst_20758,inst_20759,null));var inst_20761 = cljs.core.clj__GT_js.call(null,inst_20760);var inst_20762 = console.log(inst_20761);var inst_20763 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20764 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20765 = (new cljs.core.PersistentVector(null,1,(5),inst_20763,inst_20764,null));var inst_20766 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20756);var inst_20767 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20765,inst_20766);var state_20772__$1 = (function (){var statearr_20775 = state_20772;(statearr_20775[(8)] = inst_20762);
return statearr_20775;
})();var statearr_20776_20797 = state_20772__$1;(statearr_20776_20797[(2)] = inst_20767);
(statearr_20776_20797[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20773 === (2)))
{var inst_20756 = (state_20772[(7)]);var inst_20756__$1 = (state_20772[(2)]);var state_20772__$1 = (function (){var statearr_20777 = state_20772;(statearr_20777[(7)] = inst_20756__$1);
return statearr_20777;
})();if(cljs.core.truth_(inst_20756__$1))
{var statearr_20778_20798 = state_20772__$1;(statearr_20778_20798[(1)] = (3));
} else
{var statearr_20779_20799 = state_20772__$1;(statearr_20779_20799[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20773 === (1)))
{var inst_20754 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20772__$1 = state_20772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20772__$1,(2),inst_20754);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20751,map__20751__$1,map__20752,map__20752__$1,next_query,next_timeline_data,next_filter_spec,map__20753,map__20753__$1,fetch_data_fn,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20751,map__20751__$1,map__20752,map__20752__$1,next_query,next_timeline_data,next_filter_spec,map__20753,map__20753__$1,fetch_data_fn,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20783 = [null,null,null,null,null,null,null,null,null];(statearr_20783[(0)] = state_machine__9111__auto__);
(statearr_20783[(1)] = (1));
return statearr_20783;
});
var state_machine__9111__auto____1 = (function (state_20772){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20772);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20784){if((e20784 instanceof Object))
{var ex__9114__auto__ = e20784;var statearr_20785_20800 = state_20772;(statearr_20785_20800[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20784;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20801 = state_20772;
state_20772 = G__20801;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20772){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20751,map__20751__$1,map__20752,map__20752__$1,next_query,next_timeline_data,next_filter_spec,map__20753,map__20753__$1,fetch_data_fn,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
})();var state__9127__auto__ = (function (){var statearr_20786 = f__9126__auto__.call(null);(statearr_20786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20751,map__20751__$1,map__20752,map__20752__$1,next_query,next_timeline_data,next_filter_spec,map__20753,map__20753__$1,fetch_data_fn,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.t20743.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20743.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20787 = om.core.get_node.call(null,self__.owner,"chart");var G__20787__$1 = (((G__20787 == null))?null:jayq.core.$.call(null,G__20787));var G__20787__$2 = (((G__20787__$1 == null))?null:G__20787__$1.highcharts());var G__20787__$3 = (((G__20787__$2 == null))?null:G__20787__$2.reflow());return G__20787__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
);
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.t20743.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20743.prototype.om$core$IRender$render$arity$1 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.t20743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (_20745){var self__ = this;
var _20745__$1 = this;return self__.meta20744;
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.t20743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function (_20745,meta20744__$1){var self__ = this;
var _20745__$1 = this;return (new clustermap.components.timeline_chart.t20743(self__.query,self__.G__20735,self__.owner,self__.output_schema20669,self__.map__20738,self__.G__20675,self__.timeline_data,self__.map__20742,self__.filter_spec,self__.map__20739,self__.map__20737,self__.G__20736,self__.output_checker20672,self__.G__20673,self__.G__20674,self__.input_checker20671,self__.validate__6034__auto__,self__.map__20741,self__.id,self__.map__20740,self__.timeline_chart,self__.opts,self__.input_schema20670,self__.ufv__,meta20744__$1));
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
clustermap.components.timeline_chart.__GT_t20743 = ((function (map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792){
return (function __GT_t20743(query__$2,G__20735__$2,owner__$3,output_schema20669__$1,map__20738__$2,G__20675__$1,timeline_data__$2,map__20742__$2,filter_spec__$2,map__20739__$2,map__20737__$2,G__20736__$2,output_checker20672__$1,G__20673__$1,G__20674__$1,input_checker20671__$1,validate__6034__auto____$1,map__20741__$2,id__$2,map__20740__$2,timeline_chart__$3,opts__$2,input_schema20670__$1,ufv____$1,meta20744){return (new clustermap.components.timeline_chart.t20743(query__$2,G__20735__$2,owner__$3,output_schema20669__$1,map__20738__$2,G__20675__$1,timeline_data__$2,map__20742__$2,filter_spec__$2,map__20739__$2,map__20737__$2,G__20736__$2,output_checker20672__$1,G__20673__$1,G__20674__$1,input_checker20671__$1,validate__6034__auto____$1,map__20741__$2,id__$2,map__20740__$2,timeline_chart__$3,opts__$2,input_schema20670__$1,ufv____$1,meta20744));
});})(map__20740,map__20740__$1,map__20741,map__20741__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20742,map__20742__$1,opts__$1,id__$1,G__20735,map__20737,map__20737__$1,map__20738,map__20738__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20736,map__20739,map__20739__$1,opts,id,validate__6034__auto__,ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
}
return (new clustermap.components.timeline_chart.t20743(query__$1,G__20735__$1,owner__$2,output_schema20669_20789,map__20738__$1,G__20675,timeline_data__$1,map__20742__$1,filter_spec__$1,map__20739__$1,map__20737__$1,G__20736__$1,output_checker20672_20792,G__20673,G__20674,input_checker20671_20791,validate__6034__auto__,map__20741__$1,id__$1,map__20740__$1,timeline_chart__$2,opts__$1,input_schema20670_20790,ufv___20788,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20802 = output_checker20672_20792.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20802))
{var error__6036__auto___20803 = temp__4126__auto___20802;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20803)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20803,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20669_20789,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20788,output_schema20669_20789,input_schema20670_20790,input_checker20671_20791,output_checker20672_20792))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20669_20789,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20670_20790], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20668){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20668);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20668){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
