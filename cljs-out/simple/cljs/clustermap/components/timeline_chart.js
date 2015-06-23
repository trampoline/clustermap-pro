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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20656,p__20657){var map__20689 = p__20656;var map__20689__$1 = ((cljs.core.seq_QMARK_.call(null,map__20689))?cljs.core.apply.call(null,cljs.core.hash_map,map__20689):map__20689);var map__20690 = cljs.core.get.call(null,map__20689__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20690__$1 = ((cljs.core.seq_QMARK_.call(null,map__20690))?cljs.core.apply.call(null,cljs.core.hash_map,map__20690):map__20690);var metrics = cljs.core.get.call(null,map__20690__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20689__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20689__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20691 = p__20657;var map__20691__$1 = ((cljs.core.seq_QMARK_.call(null,map__20691))?cljs.core.apply.call(null,cljs.core.hash_map,map__20691):map__20691);var opts = map__20691__$1;var y1_title = cljs.core.get.call(null,map__20691__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20691__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (p1__20655_SHARP_){return ((1900) + p1__20655_SHARP_);
});})(map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (p1__20654_SHARP_){return p1__20654_SHARP_.getYear();
});})(map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (p1__20653_SHARP_){return (new Date(p1__20653_SHARP_));
});})(map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function iter__20692(s__20693){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (){var s__20693__$1 = s__20693;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20693__$1);if(temp__4126__auto__)
{var s__20693__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20693__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20693__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20695 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20694 = (0);while(true){
if((i__20694 < size__4376__auto__))
{var map__20706 = cljs.core._nth.call(null,c__4375__auto__,i__20694);var map__20706__$1 = ((cljs.core.seq_QMARK_.call(null,map__20706))?cljs.core.apply.call(null,cljs.core.hash_map,map__20706):map__20706);var metric_spec = map__20706__$1;var title = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20706__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20695,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20694,map__20706,map__20706__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20695,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function iter__20707(s__20708){return (new cljs.core.LazySeq(null,((function (i__20694,map__20706,map__20706__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20695,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (){var s__20708__$1 = s__20708;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20708__$1);if(temp__4126__auto____$1)
{var s__20708__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20708__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20708__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20710 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20709 = (0);while(true){
if((i__20709 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20709);cljs.core.chunk_append.call(null,b__20710,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20720 = (i__20709 + (1));
i__20709 = G__20720;
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
});})(i__20694,map__20706,map__20706__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20695,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20694,map__20706,map__20706__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20695,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20721 = (i__20694 + (1));
i__20694 = G__20721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20695),iter__20692.call(null,cljs.core.chunk_rest.call(null,s__20693__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20695),null);
}
} else
{var map__20711 = cljs.core.first.call(null,s__20693__$2);var map__20711__$1 = ((cljs.core.seq_QMARK_.call(null,map__20711))?cljs.core.apply.call(null,cljs.core.hash_map,map__20711):map__20711);var metric_spec = map__20711__$1;var title = cljs.core.get.call(null,map__20711__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20711__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20711__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20711,map__20711__$1,metric_spec,title,metric,variable,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function iter__20712(s__20713){return (new cljs.core.LazySeq(null,((function (map__20711,map__20711__$1,metric_spec,title,metric,variable,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (){var s__20713__$1 = s__20713;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20713__$1);if(temp__4126__auto____$1)
{var s__20713__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20713__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20713__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20715 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20714 = (0);while(true){
if((i__20714 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20714);cljs.core.chunk_append.call(null,b__20715,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20722 = (i__20714 + (1));
i__20714 = G__20722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20715),iter__20712.call(null,cljs.core.chunk_rest.call(null,s__20713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20715),null);
}
} else
{var record = cljs.core.first.call(null,s__20713__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20712.call(null,cljs.core.rest.call(null,s__20713__$2)));
}
} else
{return null;
}
break;
}
});})(map__20711,map__20711__$1,metric_spec,title,metric,variable,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20711,map__20711__$1,metric_spec,title,metric,variable,s__20693__$2,temp__4126__auto__,x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20692.call(null,cljs.core.rest.call(null,s__20693__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function iter__20716(s__20717){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title){
return (function (){var s__20717__$1 = s__20717;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20717__$1);if(temp__4126__auto__)
{var s__20717__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20717__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20717__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20719 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20718 = (0);while(true){
if((i__20718 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20718);cljs.core.chunk_append.call(null,b__20719,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20723 = (i__20718 + (1));
i__20718 = G__20723;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20719),iter__20716.call(null,cljs.core.chunk_rest.call(null,s__20717__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20719),null);
}
} else
{var y = cljs.core.first.call(null,s__20717__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20716.call(null,cljs.core.rest.call(null,s__20717__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20689,map__20689__$1,map__20690,map__20690__$1,metrics,color,records,map__20691,map__20691__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20844 = schema.utils.use_fn_validation;var output_schema20725_20845 = schema.core.Any;var input_schema20726_20846 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20727_20847 = schema.core.checker.call(null,input_schema20726_20846);var output_checker20728_20848 = schema.core.checker.call(null,output_schema20725_20845);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function timeline_chart(G__20729,G__20730,G__20731){var validate__6034__auto__ = ufv___20844.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20849 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20729,G__20730,G__20731], null);var temp__4126__auto___20850 = input_checker20727_20847.call(null,args__6035__auto___20849);if(cljs.core.truth_(temp__4126__auto___20850))
{var error__6036__auto___20851 = temp__4126__auto___20850;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20851,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20849,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20726_20846,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20791 = G__20729;var map__20793 = G__20791;var map__20793__$1 = ((cljs.core.seq_QMARK_.call(null,map__20793))?cljs.core.apply.call(null,cljs.core.hash_map,map__20793):map__20793);var map__20794 = cljs.core.get.call(null,map__20793__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20794__$1 = ((cljs.core.seq_QMARK_.call(null,map__20794))?cljs.core.apply.call(null,cljs.core.hash_map,map__20794):map__20794);var timeline_chart__$1 = map__20794__$1;var query = cljs.core.get.call(null,map__20794__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20794__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20793__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20730;var G__20792 = G__20731;var map__20795 = G__20792;var map__20795__$1 = ((cljs.core.seq_QMARK_.call(null,map__20795))?cljs.core.apply.call(null,cljs.core.hash_map,map__20795):map__20795);var opts = map__20795__$1;var id = cljs.core.get.call(null,map__20795__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20791__$1 = G__20791;var owner__$1 = owner;var G__20792__$1 = G__20792;while(true){
var map__20796 = G__20791__$1;var map__20796__$1 = ((cljs.core.seq_QMARK_.call(null,map__20796))?cljs.core.apply.call(null,cljs.core.hash_map,map__20796):map__20796);var map__20797 = cljs.core.get.call(null,map__20796__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20797__$1 = ((cljs.core.seq_QMARK_.call(null,map__20797))?cljs.core.apply.call(null,cljs.core.hash_map,map__20797):map__20797);var timeline_chart__$2 = map__20797__$1;var query__$1 = cljs.core.get.call(null,map__20797__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20797__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20796__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20798 = G__20792__$1;var map__20798__$1 = ((cljs.core.seq_QMARK_.call(null,map__20798))?cljs.core.apply.call(null,cljs.core.hash_map,map__20798):map__20798);var opts__$1 = map__20798__$1;var id__$1 = cljs.core.get.call(null,map__20798__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20799 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20799 = (function (query,G__20792,owner,G__20731,map__20795,input_checker20727,timeline_data,G__20729,input_schema20726,filter_spec,output_checker20728,map__20796,map__20797,map__20794,G__20730,output_schema20725,map__20793,map__20798,validate__6034__auto__,id,timeline_chart,G__20791,opts,ufv__,meta20800){
this.query = query;
this.G__20792 = G__20792;
this.owner = owner;
this.G__20731 = G__20731;
this.map__20795 = map__20795;
this.input_checker20727 = input_checker20727;
this.timeline_data = timeline_data;
this.G__20729 = G__20729;
this.input_schema20726 = input_schema20726;
this.filter_spec = filter_spec;
this.output_checker20728 = output_checker20728;
this.map__20796 = map__20796;
this.map__20797 = map__20797;
this.map__20794 = map__20794;
this.G__20730 = G__20730;
this.output_schema20725 = output_schema20725;
this.map__20793 = map__20793;
this.map__20798 = map__20798;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.G__20791 = G__20791;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20800 = meta20800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20799.cljs$lang$type = true;
clustermap.components.timeline_chart.t20799.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20799";
clustermap.components.timeline_chart.t20799.cljs$lang$ctorPrWriter = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20799");
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.t20799.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20799.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.t20799.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20799.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (_,p__20802,___$1){var self__ = this;
var map__20803 = p__20802;var map__20803__$1 = ((cljs.core.seq_QMARK_.call(null,map__20803))?cljs.core.apply.call(null,cljs.core.hash_map,map__20803):map__20803);var map__20804 = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20804__$1 = ((cljs.core.seq_QMARK_.call(null,map__20804))?cljs.core.apply.call(null,cljs.core.hash_map,map__20804):map__20804);var prev_query = cljs.core.get.call(null,map__20804__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20804__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.t20799.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20799.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (_,p__20805,p__20806){var self__ = this;
var map__20807 = p__20805;var map__20807__$1 = ((cljs.core.seq_QMARK_.call(null,map__20807))?cljs.core.apply.call(null,cljs.core.hash_map,map__20807):map__20807);var map__20808 = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20808__$1 = ((cljs.core.seq_QMARK_.call(null,map__20808))?cljs.core.apply.call(null,cljs.core.hash_map,map__20808):map__20808);var next_query = cljs.core.get.call(null,map__20808__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20808__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20809 = p__20806;var map__20809__$1 = ((cljs.core.seq_QMARK_.call(null,map__20809))?cljs.core.apply.call(null,cljs.core.hash_map,map__20809):map__20809);var fetch_data_fn = cljs.core.get.call(null,map__20809__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20807,map__20807__$1,map__20808,map__20808__$1,next_query,next_timeline_data,next_filter_spec,map__20809,map__20809__$1,fetch_data_fn,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20807,map__20807__$1,map__20808,map__20808__$1,next_query,next_timeline_data,next_filter_spec,map__20809,map__20809__$1,fetch_data_fn,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (state_20828){var state_val_20829 = (state_20828[(1)]);if((state_val_20829 === (5)))
{var inst_20826 = (state_20828[(2)]);var state_20828__$1 = state_20828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20828__$1,inst_20826);
} else
{if((state_val_20829 === (4)))
{var state_20828__$1 = state_20828;var statearr_20830_20852 = state_20828__$1;(statearr_20830_20852[(2)] = null);
(statearr_20830_20852[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20829 === (3)))
{var inst_20812 = (state_20828[(7)]);var inst_20814 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20815 = ["TIMELINE DATA",inst_20812];var inst_20816 = (new cljs.core.PersistentVector(null,2,(5),inst_20814,inst_20815,null));var inst_20817 = cljs.core.clj__GT_js.call(null,inst_20816);var inst_20818 = console.log(inst_20817);var inst_20819 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20820 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20821 = (new cljs.core.PersistentVector(null,1,(5),inst_20819,inst_20820,null));var inst_20822 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20812);var inst_20823 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20821,inst_20822);var state_20828__$1 = (function (){var statearr_20831 = state_20828;(statearr_20831[(8)] = inst_20818);
return statearr_20831;
})();var statearr_20832_20853 = state_20828__$1;(statearr_20832_20853[(2)] = inst_20823);
(statearr_20832_20853[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20829 === (2)))
{var inst_20812 = (state_20828[(7)]);var inst_20812__$1 = (state_20828[(2)]);var state_20828__$1 = (function (){var statearr_20833 = state_20828;(statearr_20833[(7)] = inst_20812__$1);
return statearr_20833;
})();if(cljs.core.truth_(inst_20812__$1))
{var statearr_20834_20854 = state_20828__$1;(statearr_20834_20854[(1)] = (3));
} else
{var statearr_20835_20855 = state_20828__$1;(statearr_20835_20855[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20829 === (1)))
{var inst_20810 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20828__$1 = state_20828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20828__$1,(2),inst_20810);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20807,map__20807__$1,map__20808,map__20808__$1,next_query,next_timeline_data,next_filter_spec,map__20809,map__20809__$1,fetch_data_fn,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20807,map__20807__$1,map__20808,map__20808__$1,next_query,next_timeline_data,next_filter_spec,map__20809,map__20809__$1,fetch_data_fn,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20839 = [null,null,null,null,null,null,null,null,null];(statearr_20839[(0)] = state_machine__9111__auto__);
(statearr_20839[(1)] = (1));
return statearr_20839;
});
var state_machine__9111__auto____1 = (function (state_20828){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20828);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20840){if((e20840 instanceof Object))
{var ex__9114__auto__ = e20840;var statearr_20841_20856 = state_20828;(statearr_20841_20856[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20840;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20857 = state_20828;
state_20828 = G__20857;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20828){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20807,map__20807__$1,map__20808,map__20808__$1,next_query,next_timeline_data,next_filter_spec,map__20809,map__20809__$1,fetch_data_fn,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
})();var state__9127__auto__ = (function (){var statearr_20842 = f__9126__auto__.call(null);(statearr_20842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20807,map__20807__$1,map__20808,map__20808__$1,next_query,next_timeline_data,next_filter_spec,map__20809,map__20809__$1,fetch_data_fn,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.t20799.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20799.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20843 = om.core.get_node.call(null,self__.owner,"chart");var G__20843__$1 = (((G__20843 == null))?null:jayq.core.$.call(null,G__20843));var G__20843__$2 = (((G__20843__$1 == null))?null:G__20843__$1.highcharts());var G__20843__$3 = (((G__20843__$2 == null))?null:G__20843__$2.reflow());return G__20843__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
);
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.t20799.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20799.prototype.om$core$IRender$render$arity$1 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.t20799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (_20801){var self__ = this;
var _20801__$1 = this;return self__.meta20800;
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.t20799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function (_20801,meta20800__$1){var self__ = this;
var _20801__$1 = this;return (new clustermap.components.timeline_chart.t20799(self__.query,self__.G__20792,self__.owner,self__.G__20731,self__.map__20795,self__.input_checker20727,self__.timeline_data,self__.G__20729,self__.input_schema20726,self__.filter_spec,self__.output_checker20728,self__.map__20796,self__.map__20797,self__.map__20794,self__.G__20730,self__.output_schema20725,self__.map__20793,self__.map__20798,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.G__20791,self__.opts,self__.ufv__,meta20800__$1));
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
clustermap.components.timeline_chart.__GT_t20799 = ((function (map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848){
return (function __GT_t20799(query__$2,G__20792__$2,owner__$3,G__20731__$1,map__20795__$2,input_checker20727__$1,timeline_data__$2,G__20729__$1,input_schema20726__$1,filter_spec__$2,output_checker20728__$1,map__20796__$2,map__20797__$2,map__20794__$2,G__20730__$1,output_schema20725__$1,map__20793__$2,map__20798__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__20791__$2,opts__$2,ufv____$1,meta20800){return (new clustermap.components.timeline_chart.t20799(query__$2,G__20792__$2,owner__$3,G__20731__$1,map__20795__$2,input_checker20727__$1,timeline_data__$2,G__20729__$1,input_schema20726__$1,filter_spec__$2,output_checker20728__$1,map__20796__$2,map__20797__$2,map__20794__$2,G__20730__$1,output_schema20725__$1,map__20793__$2,map__20798__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__20791__$2,opts__$2,ufv____$1,meta20800));
});})(map__20796,map__20796__$1,map__20797,map__20797__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20798,map__20798__$1,opts__$1,id__$1,G__20791,map__20793,map__20793__$1,map__20794,map__20794__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20792,map__20795,map__20795__$1,opts,id,validate__6034__auto__,ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
}
return (new clustermap.components.timeline_chart.t20799(query__$1,G__20792__$1,owner__$2,G__20731,map__20795__$1,input_checker20727_20847,timeline_data__$1,G__20729,input_schema20726_20846,filter_spec__$1,output_checker20728_20848,map__20796__$1,map__20797__$1,map__20794__$1,G__20730,output_schema20725_20845,map__20793__$1,map__20798__$1,validate__6034__auto__,id__$1,timeline_chart__$2,G__20791__$1,opts__$1,ufv___20844,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20858 = output_checker20728_20848.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20858))
{var error__6036__auto___20859 = temp__4126__auto___20858;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20859)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20859,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20725_20845,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20844,output_schema20725_20845,input_schema20726_20846,input_checker20727_20847,output_checker20728_20848))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20725_20845,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20726_20846], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20724){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20724);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20724){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
