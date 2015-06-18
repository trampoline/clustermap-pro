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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20651,p__20652){var map__20684 = p__20651;var map__20684__$1 = ((cljs.core.seq_QMARK_.call(null,map__20684))?cljs.core.apply.call(null,cljs.core.hash_map,map__20684):map__20684);var map__20685 = cljs.core.get.call(null,map__20684__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20685__$1 = ((cljs.core.seq_QMARK_.call(null,map__20685))?cljs.core.apply.call(null,cljs.core.hash_map,map__20685):map__20685);var metrics = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20684__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20684__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20686 = p__20652;var map__20686__$1 = ((cljs.core.seq_QMARK_.call(null,map__20686))?cljs.core.apply.call(null,cljs.core.hash_map,map__20686):map__20686);var opts = map__20686__$1;var y1_title = cljs.core.get.call(null,map__20686__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20686__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (p1__20650_SHARP_){return ((1900) + p1__20650_SHARP_);
});})(map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (p1__20649_SHARP_){return p1__20649_SHARP_.getYear();
});})(map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (p1__20648_SHARP_){return (new Date(p1__20648_SHARP_));
});})(map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function iter__20687(s__20688){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (){var s__20688__$1 = s__20688;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20688__$1);if(temp__4126__auto__)
{var s__20688__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20688__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20688__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20690 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20689 = (0);while(true){
if((i__20689 < size__4376__auto__))
{var map__20701 = cljs.core._nth.call(null,c__4375__auto__,i__20689);var map__20701__$1 = ((cljs.core.seq_QMARK_.call(null,map__20701))?cljs.core.apply.call(null,cljs.core.hash_map,map__20701):map__20701);var metric_spec = map__20701__$1;var title = cljs.core.get.call(null,map__20701__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20701__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20701__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20690,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20689,map__20701,map__20701__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20690,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function iter__20702(s__20703){return (new cljs.core.LazySeq(null,((function (i__20689,map__20701,map__20701__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20690,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (){var s__20703__$1 = s__20703;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20703__$1);if(temp__4126__auto____$1)
{var s__20703__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20703__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20703__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20705 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20704 = (0);while(true){
if((i__20704 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20704);cljs.core.chunk_append.call(null,b__20705,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20715 = (i__20704 + (1));
i__20704 = G__20715;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20705),iter__20702.call(null,cljs.core.chunk_rest.call(null,s__20703__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20705),null);
}
} else
{var record = cljs.core.first.call(null,s__20703__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20702.call(null,cljs.core.rest.call(null,s__20703__$2)));
}
} else
{return null;
}
break;
}
});})(i__20689,map__20701,map__20701__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20690,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20689,map__20701,map__20701__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20690,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20716 = (i__20689 + (1));
i__20689 = G__20716;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20690),iter__20687.call(null,cljs.core.chunk_rest.call(null,s__20688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20690),null);
}
} else
{var map__20706 = cljs.core.first.call(null,s__20688__$2);var map__20706__$1 = ((cljs.core.seq_QMARK_.call(null,map__20706))?cljs.core.apply.call(null,cljs.core.hash_map,map__20706):map__20706);var metric_spec = map__20706__$1;var title = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20706,map__20706__$1,metric_spec,title,metric,variable,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function iter__20707(s__20708){return (new cljs.core.LazySeq(null,((function (map__20706,map__20706__$1,metric_spec,title,metric,variable,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (){var s__20708__$1 = s__20708;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20708__$1);if(temp__4126__auto____$1)
{var s__20708__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20708__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20708__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20710 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20709 = (0);while(true){
if((i__20709 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20709);cljs.core.chunk_append.call(null,b__20710,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20717 = (i__20709 + (1));
i__20709 = G__20717;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20710),iter__20707.call(null,cljs.core.chunk_rest.call(null,s__20708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20710),null);
}
} else
{var record = cljs.core.first.call(null,s__20708__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20707.call(null,cljs.core.rest.call(null,s__20708__$2)));
}
} else
{return null;
}
break;
}
});})(map__20706,map__20706__$1,metric_spec,title,metric,variable,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20706,map__20706__$1,metric_spec,title,metric,variable,s__20688__$2,temp__4126__auto__,x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20687.call(null,cljs.core.rest.call(null,s__20688__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function iter__20711(s__20712){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title){
return (function (){var s__20712__$1 = s__20712;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20712__$1);if(temp__4126__auto__)
{var s__20712__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20712__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20712__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20714 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20713 = (0);while(true){
if((i__20713 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20713);cljs.core.chunk_append.call(null,b__20714,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20718 = (i__20713 + (1));
i__20713 = G__20718;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20714),iter__20711.call(null,cljs.core.chunk_rest.call(null,s__20712__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20714),null);
}
} else
{var y = cljs.core.first.call(null,s__20712__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20711.call(null,cljs.core.rest.call(null,s__20712__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20684,map__20684__$1,map__20685,map__20685__$1,metrics,color,records,map__20686,map__20686__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20839 = schema.utils.use_fn_validation;var output_schema20720_20840 = schema.core.Any;var input_schema20721_20841 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20722_20842 = schema.core.checker.call(null,input_schema20721_20841);var output_checker20723_20843 = schema.core.checker.call(null,output_schema20720_20840);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function timeline_chart(G__20724,G__20725,G__20726){var validate__6034__auto__ = ufv___20839.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20724,G__20725,G__20726], null);var temp__4126__auto___20845 = input_checker20722_20842.call(null,args__6035__auto___20844);if(cljs.core.truth_(temp__4126__auto___20845))
{var error__6036__auto___20846 = temp__4126__auto___20845;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20846)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20846,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20844,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20721_20841,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20786 = G__20724;var map__20788 = G__20786;var map__20788__$1 = ((cljs.core.seq_QMARK_.call(null,map__20788))?cljs.core.apply.call(null,cljs.core.hash_map,map__20788):map__20788);var map__20789 = cljs.core.get.call(null,map__20788__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20789__$1 = ((cljs.core.seq_QMARK_.call(null,map__20789))?cljs.core.apply.call(null,cljs.core.hash_map,map__20789):map__20789);var timeline_chart__$1 = map__20789__$1;var query = cljs.core.get.call(null,map__20789__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20789__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20788__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20725;var G__20787 = G__20726;var map__20790 = G__20787;var map__20790__$1 = ((cljs.core.seq_QMARK_.call(null,map__20790))?cljs.core.apply.call(null,cljs.core.hash_map,map__20790):map__20790);var opts = map__20790__$1;var id = cljs.core.get.call(null,map__20790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20786__$1 = G__20786;var owner__$1 = owner;var G__20787__$1 = G__20787;while(true){
var map__20791 = G__20786__$1;var map__20791__$1 = ((cljs.core.seq_QMARK_.call(null,map__20791))?cljs.core.apply.call(null,cljs.core.hash_map,map__20791):map__20791);var map__20792 = cljs.core.get.call(null,map__20791__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20792__$1 = ((cljs.core.seq_QMARK_.call(null,map__20792))?cljs.core.apply.call(null,cljs.core.hash_map,map__20792):map__20792);var timeline_chart__$2 = map__20792__$1;var query__$1 = cljs.core.get.call(null,map__20792__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20792__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20791__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20793 = G__20787__$1;var map__20793__$1 = ((cljs.core.seq_QMARK_.call(null,map__20793))?cljs.core.apply.call(null,cljs.core.hash_map,map__20793):map__20793);var opts__$1 = map__20793__$1;var id__$1 = cljs.core.get.call(null,map__20793__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20794 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20794 = (function (query,owner,input_schema20721,output_checker20723,output_schema20720,timeline_data,G__20787,G__20726,filter_spec,G__20724,map__20793,G__20725,map__20791,validate__6034__auto__,map__20792,map__20789,id,input_checker20722,timeline_chart,map__20790,G__20786,opts,ufv__,map__20788,meta20795){
this.query = query;
this.owner = owner;
this.input_schema20721 = input_schema20721;
this.output_checker20723 = output_checker20723;
this.output_schema20720 = output_schema20720;
this.timeline_data = timeline_data;
this.G__20787 = G__20787;
this.G__20726 = G__20726;
this.filter_spec = filter_spec;
this.G__20724 = G__20724;
this.map__20793 = map__20793;
this.G__20725 = G__20725;
this.map__20791 = map__20791;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__20792 = map__20792;
this.map__20789 = map__20789;
this.id = id;
this.input_checker20722 = input_checker20722;
this.timeline_chart = timeline_chart;
this.map__20790 = map__20790;
this.G__20786 = G__20786;
this.opts = opts;
this.ufv__ = ufv__;
this.map__20788 = map__20788;
this.meta20795 = meta20795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20794.cljs$lang$type = true;
clustermap.components.timeline_chart.t20794.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20794";
clustermap.components.timeline_chart.t20794.cljs$lang$ctorPrWriter = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20794");
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.t20794.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20794.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.t20794.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20794.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (_,p__20797,___$1){var self__ = this;
var map__20798 = p__20797;var map__20798__$1 = ((cljs.core.seq_QMARK_.call(null,map__20798))?cljs.core.apply.call(null,cljs.core.hash_map,map__20798):map__20798);var map__20799 = cljs.core.get.call(null,map__20798__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20799__$1 = ((cljs.core.seq_QMARK_.call(null,map__20799))?cljs.core.apply.call(null,cljs.core.hash_map,map__20799):map__20799);var prev_query = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20798__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.t20794.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20794.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (_,p__20800,p__20801){var self__ = this;
var map__20802 = p__20800;var map__20802__$1 = ((cljs.core.seq_QMARK_.call(null,map__20802))?cljs.core.apply.call(null,cljs.core.hash_map,map__20802):map__20802);var map__20803 = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20803__$1 = ((cljs.core.seq_QMARK_.call(null,map__20803))?cljs.core.apply.call(null,cljs.core.hash_map,map__20803):map__20803);var next_query = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20804 = p__20801;var map__20804__$1 = ((cljs.core.seq_QMARK_.call(null,map__20804))?cljs.core.apply.call(null,cljs.core.hash_map,map__20804):map__20804);var fetch_data_fn = cljs.core.get.call(null,map__20804__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20802,map__20802__$1,map__20803,map__20803__$1,next_query,next_timeline_data,next_filter_spec,map__20804,map__20804__$1,fetch_data_fn,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20802,map__20802__$1,map__20803,map__20803__$1,next_query,next_timeline_data,next_filter_spec,map__20804,map__20804__$1,fetch_data_fn,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (state_20823){var state_val_20824 = (state_20823[(1)]);if((state_val_20824 === (5)))
{var inst_20821 = (state_20823[(2)]);var state_20823__$1 = state_20823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20823__$1,inst_20821);
} else
{if((state_val_20824 === (4)))
{var state_20823__$1 = state_20823;var statearr_20825_20847 = state_20823__$1;(statearr_20825_20847[(2)] = null);
(statearr_20825_20847[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20824 === (3)))
{var inst_20807 = (state_20823[(7)]);var inst_20809 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20810 = ["TIMELINE DATA",inst_20807];var inst_20811 = (new cljs.core.PersistentVector(null,2,(5),inst_20809,inst_20810,null));var inst_20812 = cljs.core.clj__GT_js.call(null,inst_20811);var inst_20813 = console.log(inst_20812);var inst_20814 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20815 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20816 = (new cljs.core.PersistentVector(null,1,(5),inst_20814,inst_20815,null));var inst_20817 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20807);var inst_20818 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20816,inst_20817);var state_20823__$1 = (function (){var statearr_20826 = state_20823;(statearr_20826[(8)] = inst_20813);
return statearr_20826;
})();var statearr_20827_20848 = state_20823__$1;(statearr_20827_20848[(2)] = inst_20818);
(statearr_20827_20848[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20824 === (2)))
{var inst_20807 = (state_20823[(7)]);var inst_20807__$1 = (state_20823[(2)]);var state_20823__$1 = (function (){var statearr_20828 = state_20823;(statearr_20828[(7)] = inst_20807__$1);
return statearr_20828;
})();if(cljs.core.truth_(inst_20807__$1))
{var statearr_20829_20849 = state_20823__$1;(statearr_20829_20849[(1)] = (3));
} else
{var statearr_20830_20850 = state_20823__$1;(statearr_20830_20850[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20824 === (1)))
{var inst_20805 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20823__$1 = state_20823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20823__$1,(2),inst_20805);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20802,map__20802__$1,map__20803,map__20803__$1,next_query,next_timeline_data,next_filter_spec,map__20804,map__20804__$1,fetch_data_fn,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20802,map__20802__$1,map__20803,map__20803__$1,next_query,next_timeline_data,next_filter_spec,map__20804,map__20804__$1,fetch_data_fn,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20834 = [null,null,null,null,null,null,null,null,null];(statearr_20834[(0)] = state_machine__9111__auto__);
(statearr_20834[(1)] = (1));
return statearr_20834;
});
var state_machine__9111__auto____1 = (function (state_20823){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20823);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20835){if((e20835 instanceof Object))
{var ex__9114__auto__ = e20835;var statearr_20836_20851 = state_20823;(statearr_20836_20851[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20852 = state_20823;
state_20823 = G__20852;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20823){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20802,map__20802__$1,map__20803,map__20803__$1,next_query,next_timeline_data,next_filter_spec,map__20804,map__20804__$1,fetch_data_fn,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
})();var state__9127__auto__ = (function (){var statearr_20837 = f__9126__auto__.call(null);(statearr_20837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20802,map__20802__$1,map__20803,map__20803__$1,next_query,next_timeline_data,next_filter_spec,map__20804,map__20804__$1,fetch_data_fn,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.t20794.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20794.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20838 = om.core.get_node.call(null,self__.owner,"chart");var G__20838__$1 = (((G__20838 == null))?null:jayq.core.$.call(null,G__20838));var G__20838__$2 = (((G__20838__$1 == null))?null:G__20838__$1.highcharts());var G__20838__$3 = (((G__20838__$2 == null))?null:G__20838__$2.reflow());return G__20838__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
);
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.t20794.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20794.prototype.om$core$IRender$render$arity$1 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.t20794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (_20796){var self__ = this;
var _20796__$1 = this;return self__.meta20795;
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.t20794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function (_20796,meta20795__$1){var self__ = this;
var _20796__$1 = this;return (new clustermap.components.timeline_chart.t20794(self__.query,self__.owner,self__.input_schema20721,self__.output_checker20723,self__.output_schema20720,self__.timeline_data,self__.G__20787,self__.G__20726,self__.filter_spec,self__.G__20724,self__.map__20793,self__.G__20725,self__.map__20791,self__.validate__6034__auto__,self__.map__20792,self__.map__20789,self__.id,self__.input_checker20722,self__.timeline_chart,self__.map__20790,self__.G__20786,self__.opts,self__.ufv__,self__.map__20788,meta20795__$1));
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
clustermap.components.timeline_chart.__GT_t20794 = ((function (map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843){
return (function __GT_t20794(query__$2,owner__$3,input_schema20721__$1,output_checker20723__$1,output_schema20720__$1,timeline_data__$2,G__20787__$2,G__20726__$1,filter_spec__$2,G__20724__$1,map__20793__$2,G__20725__$1,map__20791__$2,validate__6034__auto____$1,map__20792__$2,map__20789__$2,id__$2,input_checker20722__$1,timeline_chart__$3,map__20790__$2,G__20786__$2,opts__$2,ufv____$1,map__20788__$2,meta20795){return (new clustermap.components.timeline_chart.t20794(query__$2,owner__$3,input_schema20721__$1,output_checker20723__$1,output_schema20720__$1,timeline_data__$2,G__20787__$2,G__20726__$1,filter_spec__$2,G__20724__$1,map__20793__$2,G__20725__$1,map__20791__$2,validate__6034__auto____$1,map__20792__$2,map__20789__$2,id__$2,input_checker20722__$1,timeline_chart__$3,map__20790__$2,G__20786__$2,opts__$2,ufv____$1,map__20788__$2,meta20795));
});})(map__20791,map__20791__$1,map__20792,map__20792__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20793,map__20793__$1,opts__$1,id__$1,G__20786,map__20788,map__20788__$1,map__20789,map__20789__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20787,map__20790,map__20790__$1,opts,id,validate__6034__auto__,ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
}
return (new clustermap.components.timeline_chart.t20794(query__$1,owner__$2,input_schema20721_20841,output_checker20723_20843,output_schema20720_20840,timeline_data__$1,G__20787__$1,G__20726,filter_spec__$1,G__20724,map__20793__$1,G__20725,map__20791__$1,validate__6034__auto__,map__20792__$1,map__20789__$1,id__$1,input_checker20722_20842,timeline_chart__$2,map__20790__$1,G__20786__$1,opts__$1,ufv___20839,map__20788__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20853 = output_checker20723_20843.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20853))
{var error__6036__auto___20854 = temp__4126__auto___20853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20854,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20720_20840,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20839,output_schema20720_20840,input_schema20721_20841,input_checker20722_20842,output_checker20723_20843))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20720_20840,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20721_20841], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20719){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20719);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20719){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
