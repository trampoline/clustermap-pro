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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20399,p__20400){var map__20432 = p__20399;var map__20432__$1 = ((cljs.core.seq_QMARK_.call(null,map__20432))?cljs.core.apply.call(null,cljs.core.hash_map,map__20432):map__20432);var map__20433 = cljs.core.get.call(null,map__20432__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20433__$1 = ((cljs.core.seq_QMARK_.call(null,map__20433))?cljs.core.apply.call(null,cljs.core.hash_map,map__20433):map__20433);var metrics = cljs.core.get.call(null,map__20433__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20432__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20432__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20434 = p__20400;var map__20434__$1 = ((cljs.core.seq_QMARK_.call(null,map__20434))?cljs.core.apply.call(null,cljs.core.hash_map,map__20434):map__20434);var opts = map__20434__$1;var y1_title = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (p1__20398_SHARP_){return ((1900) + p1__20398_SHARP_);
});})(map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (p1__20397_SHARP_){return p1__20397_SHARP_.getYear();
});})(map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (p1__20396_SHARP_){return (new Date(p1__20396_SHARP_));
});})(map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function iter__20435(s__20436){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (){var s__20436__$1 = s__20436;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20436__$1);if(temp__4126__auto__)
{var s__20436__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20436__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20436__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20438 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20437 = (0);while(true){
if((i__20437 < size__4376__auto__))
{var map__20449 = cljs.core._nth.call(null,c__4375__auto__,i__20437);var map__20449__$1 = ((cljs.core.seq_QMARK_.call(null,map__20449))?cljs.core.apply.call(null,cljs.core.hash_map,map__20449):map__20449);var metric_spec = map__20449__$1;var title = cljs.core.get.call(null,map__20449__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20449__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20449__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20438,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20437,map__20449,map__20449__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20438,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function iter__20450(s__20451){return (new cljs.core.LazySeq(null,((function (i__20437,map__20449,map__20449__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20438,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (){var s__20451__$1 = s__20451;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20451__$1);if(temp__4126__auto____$1)
{var s__20451__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20451__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20451__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20453 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20452 = (0);while(true){
if((i__20452 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20452);cljs.core.chunk_append.call(null,b__20453,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20463 = (i__20452 + (1));
i__20452 = G__20463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20453),iter__20450.call(null,cljs.core.chunk_rest.call(null,s__20451__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20453),null);
}
} else
{var record = cljs.core.first.call(null,s__20451__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20450.call(null,cljs.core.rest.call(null,s__20451__$2)));
}
} else
{return null;
}
break;
}
});})(i__20437,map__20449,map__20449__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20438,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20437,map__20449,map__20449__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20438,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20464 = (i__20437 + (1));
i__20437 = G__20464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20438),iter__20435.call(null,cljs.core.chunk_rest.call(null,s__20436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20438),null);
}
} else
{var map__20454 = cljs.core.first.call(null,s__20436__$2);var map__20454__$1 = ((cljs.core.seq_QMARK_.call(null,map__20454))?cljs.core.apply.call(null,cljs.core.hash_map,map__20454):map__20454);var metric_spec = map__20454__$1;var title = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20454,map__20454__$1,metric_spec,title,metric,variable,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function iter__20455(s__20456){return (new cljs.core.LazySeq(null,((function (map__20454,map__20454__$1,metric_spec,title,metric,variable,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (){var s__20456__$1 = s__20456;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20456__$1);if(temp__4126__auto____$1)
{var s__20456__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20456__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20456__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20458 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20457 = (0);while(true){
if((i__20457 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20457);cljs.core.chunk_append.call(null,b__20458,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20465 = (i__20457 + (1));
i__20457 = G__20465;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20458),iter__20455.call(null,cljs.core.chunk_rest.call(null,s__20456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20458),null);
}
} else
{var record = cljs.core.first.call(null,s__20456__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20455.call(null,cljs.core.rest.call(null,s__20456__$2)));
}
} else
{return null;
}
break;
}
});})(map__20454,map__20454__$1,metric_spec,title,metric,variable,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20454,map__20454__$1,metric_spec,title,metric,variable,s__20436__$2,temp__4126__auto__,x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20435.call(null,cljs.core.rest.call(null,s__20436__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function iter__20459(s__20460){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title){
return (function (){var s__20460__$1 = s__20460;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20460__$1);if(temp__4126__auto__)
{var s__20460__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20460__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20460__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20462 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20461 = (0);while(true){
if((i__20461 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20461);cljs.core.chunk_append.call(null,b__20462,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20466 = (i__20461 + (1));
i__20461 = G__20466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20462),iter__20459.call(null,cljs.core.chunk_rest.call(null,s__20460__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20462),null);
}
} else
{var y = cljs.core.first.call(null,s__20460__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20459.call(null,cljs.core.rest.call(null,s__20460__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20432,map__20432__$1,map__20433,map__20433__$1,metrics,color,records,map__20434,map__20434__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20587 = schema.utils.use_fn_validation;var output_schema20468_20588 = schema.core.Any;var input_schema20469_20589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20470_20590 = schema.core.checker.call(null,input_schema20469_20589);var output_checker20471_20591 = schema.core.checker.call(null,output_schema20468_20588);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function timeline_chart(G__20472,G__20473,G__20474){var validate__6034__auto__ = ufv___20587.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20592 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20472,G__20473,G__20474], null);var temp__4126__auto___20593 = input_checker20470_20590.call(null,args__6035__auto___20592);if(cljs.core.truth_(temp__4126__auto___20593))
{var error__6036__auto___20594 = temp__4126__auto___20593;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20594,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20592,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20469_20589,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20534 = G__20472;var map__20536 = G__20534;var map__20536__$1 = ((cljs.core.seq_QMARK_.call(null,map__20536))?cljs.core.apply.call(null,cljs.core.hash_map,map__20536):map__20536);var map__20537 = cljs.core.get.call(null,map__20536__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20537__$1 = ((cljs.core.seq_QMARK_.call(null,map__20537))?cljs.core.apply.call(null,cljs.core.hash_map,map__20537):map__20537);var timeline_chart__$1 = map__20537__$1;var query = cljs.core.get.call(null,map__20537__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20537__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20536__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20473;var G__20535 = G__20474;var map__20538 = G__20535;var map__20538__$1 = ((cljs.core.seq_QMARK_.call(null,map__20538))?cljs.core.apply.call(null,cljs.core.hash_map,map__20538):map__20538);var opts = map__20538__$1;var id = cljs.core.get.call(null,map__20538__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20534__$1 = G__20534;var owner__$1 = owner;var G__20535__$1 = G__20535;while(true){
var map__20539 = G__20534__$1;var map__20539__$1 = ((cljs.core.seq_QMARK_.call(null,map__20539))?cljs.core.apply.call(null,cljs.core.hash_map,map__20539):map__20539);var map__20540 = cljs.core.get.call(null,map__20539__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20540__$1 = ((cljs.core.seq_QMARK_.call(null,map__20540))?cljs.core.apply.call(null,cljs.core.hash_map,map__20540):map__20540);var timeline_chart__$2 = map__20540__$1;var query__$1 = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20539__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20541 = G__20535__$1;var map__20541__$1 = ((cljs.core.seq_QMARK_.call(null,map__20541))?cljs.core.apply.call(null,cljs.core.hash_map,map__20541):map__20541);var opts__$1 = map__20541__$1;var id__$1 = cljs.core.get.call(null,map__20541__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20542 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20542 = (function (query,map__20541,input_checker20470,owner,G__20473,map__20538,timeline_data,map__20539,G__20474,filter_spec,output_checker20471,map__20537,G__20534,G__20472,validate__6034__auto__,output_schema20468,map__20540,G__20535,id,input_schema20469,timeline_chart,map__20536,opts,ufv__,meta20543){
this.query = query;
this.map__20541 = map__20541;
this.input_checker20470 = input_checker20470;
this.owner = owner;
this.G__20473 = G__20473;
this.map__20538 = map__20538;
this.timeline_data = timeline_data;
this.map__20539 = map__20539;
this.G__20474 = G__20474;
this.filter_spec = filter_spec;
this.output_checker20471 = output_checker20471;
this.map__20537 = map__20537;
this.G__20534 = G__20534;
this.G__20472 = G__20472;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema20468 = output_schema20468;
this.map__20540 = map__20540;
this.G__20535 = G__20535;
this.id = id;
this.input_schema20469 = input_schema20469;
this.timeline_chart = timeline_chart;
this.map__20536 = map__20536;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20543 = meta20543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20542.cljs$lang$type = true;
clustermap.components.timeline_chart.t20542.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20542";
clustermap.components.timeline_chart.t20542.cljs$lang$ctorPrWriter = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20542");
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.t20542.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20542.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.t20542.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20542.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (_,p__20545,___$1){var self__ = this;
var map__20546 = p__20545;var map__20546__$1 = ((cljs.core.seq_QMARK_.call(null,map__20546))?cljs.core.apply.call(null,cljs.core.hash_map,map__20546):map__20546);var map__20547 = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20547__$1 = ((cljs.core.seq_QMARK_.call(null,map__20547))?cljs.core.apply.call(null,cljs.core.hash_map,map__20547):map__20547);var prev_query = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20546__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.t20542.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20542.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (_,p__20548,p__20549){var self__ = this;
var map__20550 = p__20548;var map__20550__$1 = ((cljs.core.seq_QMARK_.call(null,map__20550))?cljs.core.apply.call(null,cljs.core.hash_map,map__20550):map__20550);var map__20551 = cljs.core.get.call(null,map__20550__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20551__$1 = ((cljs.core.seq_QMARK_.call(null,map__20551))?cljs.core.apply.call(null,cljs.core.hash_map,map__20551):map__20551);var next_query = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20551__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20550__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20552 = p__20549;var map__20552__$1 = ((cljs.core.seq_QMARK_.call(null,map__20552))?cljs.core.apply.call(null,cljs.core.hash_map,map__20552):map__20552);var fetch_data_fn = cljs.core.get.call(null,map__20552__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20550,map__20550__$1,map__20551,map__20551__$1,next_query,next_timeline_data,next_filter_spec,map__20552,map__20552__$1,fetch_data_fn,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20550,map__20550__$1,map__20551,map__20551__$1,next_query,next_timeline_data,next_filter_spec,map__20552,map__20552__$1,fetch_data_fn,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (state_20571){var state_val_20572 = (state_20571[(1)]);if((state_val_20572 === (5)))
{var inst_20569 = (state_20571[(2)]);var state_20571__$1 = state_20571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20571__$1,inst_20569);
} else
{if((state_val_20572 === (4)))
{var state_20571__$1 = state_20571;var statearr_20573_20595 = state_20571__$1;(statearr_20573_20595[(2)] = null);
(statearr_20573_20595[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20572 === (3)))
{var inst_20555 = (state_20571[(7)]);var inst_20557 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20558 = ["TIMELINE DATA",inst_20555];var inst_20559 = (new cljs.core.PersistentVector(null,2,(5),inst_20557,inst_20558,null));var inst_20560 = cljs.core.clj__GT_js.call(null,inst_20559);var inst_20561 = console.log(inst_20560);var inst_20562 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20563 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20564 = (new cljs.core.PersistentVector(null,1,(5),inst_20562,inst_20563,null));var inst_20565 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20555);var inst_20566 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20564,inst_20565);var state_20571__$1 = (function (){var statearr_20574 = state_20571;(statearr_20574[(8)] = inst_20561);
return statearr_20574;
})();var statearr_20575_20596 = state_20571__$1;(statearr_20575_20596[(2)] = inst_20566);
(statearr_20575_20596[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20572 === (2)))
{var inst_20555 = (state_20571[(7)]);var inst_20555__$1 = (state_20571[(2)]);var state_20571__$1 = (function (){var statearr_20576 = state_20571;(statearr_20576[(7)] = inst_20555__$1);
return statearr_20576;
})();if(cljs.core.truth_(inst_20555__$1))
{var statearr_20577_20597 = state_20571__$1;(statearr_20577_20597[(1)] = (3));
} else
{var statearr_20578_20598 = state_20571__$1;(statearr_20578_20598[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20572 === (1)))
{var inst_20553 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20571__$1 = state_20571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20571__$1,(2),inst_20553);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20550,map__20550__$1,map__20551,map__20551__$1,next_query,next_timeline_data,next_filter_spec,map__20552,map__20552__$1,fetch_data_fn,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20550,map__20550__$1,map__20551,map__20551__$1,next_query,next_timeline_data,next_filter_spec,map__20552,map__20552__$1,fetch_data_fn,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20582 = [null,null,null,null,null,null,null,null,null];(statearr_20582[(0)] = state_machine__9111__auto__);
(statearr_20582[(1)] = (1));
return statearr_20582;
});
var state_machine__9111__auto____1 = (function (state_20571){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20571);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20583){if((e20583 instanceof Object))
{var ex__9114__auto__ = e20583;var statearr_20584_20599 = state_20571;(statearr_20584_20599[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20571);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20600 = state_20571;
state_20571 = G__20600;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20571){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20550,map__20550__$1,map__20551,map__20551__$1,next_query,next_timeline_data,next_filter_spec,map__20552,map__20552__$1,fetch_data_fn,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
})();var state__9127__auto__ = (function (){var statearr_20585 = f__9126__auto__.call(null);(statearr_20585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20550,map__20550__$1,map__20551,map__20551__$1,next_query,next_timeline_data,next_filter_spec,map__20552,map__20552__$1,fetch_data_fn,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.t20542.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20542.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20586 = om.core.get_node.call(null,self__.owner,"chart");var G__20586__$1 = (((G__20586 == null))?null:jayq.core.$.call(null,G__20586));var G__20586__$2 = (((G__20586__$1 == null))?null:G__20586__$1.highcharts());var G__20586__$3 = (((G__20586__$2 == null))?null:G__20586__$2.reflow());return G__20586__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
);
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.t20542.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20542.prototype.om$core$IRender$render$arity$1 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.t20542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (_20544){var self__ = this;
var _20544__$1 = this;return self__.meta20543;
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.t20542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function (_20544,meta20543__$1){var self__ = this;
var _20544__$1 = this;return (new clustermap.components.timeline_chart.t20542(self__.query,self__.map__20541,self__.input_checker20470,self__.owner,self__.G__20473,self__.map__20538,self__.timeline_data,self__.map__20539,self__.G__20474,self__.filter_spec,self__.output_checker20471,self__.map__20537,self__.G__20534,self__.G__20472,self__.validate__6034__auto__,self__.output_schema20468,self__.map__20540,self__.G__20535,self__.id,self__.input_schema20469,self__.timeline_chart,self__.map__20536,self__.opts,self__.ufv__,meta20543__$1));
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
clustermap.components.timeline_chart.__GT_t20542 = ((function (map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591){
return (function __GT_t20542(query__$2,map__20541__$2,input_checker20470__$1,owner__$3,G__20473__$1,map__20538__$2,timeline_data__$2,map__20539__$2,G__20474__$1,filter_spec__$2,output_checker20471__$1,map__20537__$2,G__20534__$2,G__20472__$1,validate__6034__auto____$1,output_schema20468__$1,map__20540__$2,G__20535__$2,id__$2,input_schema20469__$1,timeline_chart__$3,map__20536__$2,opts__$2,ufv____$1,meta20543){return (new clustermap.components.timeline_chart.t20542(query__$2,map__20541__$2,input_checker20470__$1,owner__$3,G__20473__$1,map__20538__$2,timeline_data__$2,map__20539__$2,G__20474__$1,filter_spec__$2,output_checker20471__$1,map__20537__$2,G__20534__$2,G__20472__$1,validate__6034__auto____$1,output_schema20468__$1,map__20540__$2,G__20535__$2,id__$2,input_schema20469__$1,timeline_chart__$3,map__20536__$2,opts__$2,ufv____$1,meta20543));
});})(map__20539,map__20539__$1,map__20540,map__20540__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20541,map__20541__$1,opts__$1,id__$1,G__20534,map__20536,map__20536__$1,map__20537,map__20537__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20535,map__20538,map__20538__$1,opts,id,validate__6034__auto__,ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
}
return (new clustermap.components.timeline_chart.t20542(query__$1,map__20541__$1,input_checker20470_20590,owner__$2,G__20473,map__20538__$1,timeline_data__$1,map__20539__$1,G__20474,filter_spec__$1,output_checker20471_20591,map__20537__$1,G__20534__$1,G__20472,validate__6034__auto__,output_schema20468_20588,map__20540__$1,G__20535__$1,id__$1,input_schema20469_20589,timeline_chart__$2,map__20536__$1,opts__$1,ufv___20587,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20601 = output_checker20471_20591.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20601))
{var error__6036__auto___20602 = temp__4126__auto___20601;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20602)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20602,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20468_20588,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20587,output_schema20468_20588,input_schema20469_20589,input_checker20470_20590,output_checker20471_20591))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20468_20588,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20469_20589], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20467){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20467);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20467){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
