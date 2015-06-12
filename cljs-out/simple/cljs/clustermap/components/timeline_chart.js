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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20533,p__20534){var map__20566 = p__20533;var map__20566__$1 = ((cljs.core.seq_QMARK_.call(null,map__20566))?cljs.core.apply.call(null,cljs.core.hash_map,map__20566):map__20566);var map__20567 = cljs.core.get.call(null,map__20566__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20567__$1 = ((cljs.core.seq_QMARK_.call(null,map__20567))?cljs.core.apply.call(null,cljs.core.hash_map,map__20567):map__20567);var metrics = cljs.core.get.call(null,map__20567__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20566__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20566__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20568 = p__20534;var map__20568__$1 = ((cljs.core.seq_QMARK_.call(null,map__20568))?cljs.core.apply.call(null,cljs.core.hash_map,map__20568):map__20568);var opts = map__20568__$1;var y1_title = cljs.core.get.call(null,map__20568__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20568__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (p1__20532_SHARP_){return ((1900) + p1__20532_SHARP_);
});})(map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (p1__20531_SHARP_){return p1__20531_SHARP_.getYear();
});})(map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (p1__20530_SHARP_){return (new Date(p1__20530_SHARP_));
});})(map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function iter__20569(s__20570){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (){var s__20570__$1 = s__20570;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20570__$1);if(temp__4126__auto__)
{var s__20570__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20570__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20570__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20572 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20571 = (0);while(true){
if((i__20571 < size__4376__auto__))
{var map__20583 = cljs.core._nth.call(null,c__4375__auto__,i__20571);var map__20583__$1 = ((cljs.core.seq_QMARK_.call(null,map__20583))?cljs.core.apply.call(null,cljs.core.hash_map,map__20583):map__20583);var metric_spec = map__20583__$1;var title = cljs.core.get.call(null,map__20583__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20583__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20583__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20572,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20571,map__20583,map__20583__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20572,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function iter__20584(s__20585){return (new cljs.core.LazySeq(null,((function (i__20571,map__20583,map__20583__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20572,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (){var s__20585__$1 = s__20585;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20585__$1);if(temp__4126__auto____$1)
{var s__20585__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20585__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20585__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20587 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20586 = (0);while(true){
if((i__20586 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20586);cljs.core.chunk_append.call(null,b__20587,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20597 = (i__20586 + (1));
i__20586 = G__20597;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20587),iter__20584.call(null,cljs.core.chunk_rest.call(null,s__20585__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20587),null);
}
} else
{var record = cljs.core.first.call(null,s__20585__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20584.call(null,cljs.core.rest.call(null,s__20585__$2)));
}
} else
{return null;
}
break;
}
});})(i__20571,map__20583,map__20583__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20572,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20571,map__20583,map__20583__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20572,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20598 = (i__20571 + (1));
i__20571 = G__20598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20572),iter__20569.call(null,cljs.core.chunk_rest.call(null,s__20570__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20572),null);
}
} else
{var map__20588 = cljs.core.first.call(null,s__20570__$2);var map__20588__$1 = ((cljs.core.seq_QMARK_.call(null,map__20588))?cljs.core.apply.call(null,cljs.core.hash_map,map__20588):map__20588);var metric_spec = map__20588__$1;var title = cljs.core.get.call(null,map__20588__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20588__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20588__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20588,map__20588__$1,metric_spec,title,metric,variable,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function iter__20589(s__20590){return (new cljs.core.LazySeq(null,((function (map__20588,map__20588__$1,metric_spec,title,metric,variable,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (){var s__20590__$1 = s__20590;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20590__$1);if(temp__4126__auto____$1)
{var s__20590__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20590__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20590__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20592 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20591 = (0);while(true){
if((i__20591 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20591);cljs.core.chunk_append.call(null,b__20592,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20599 = (i__20591 + (1));
i__20591 = G__20599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20592),iter__20589.call(null,cljs.core.chunk_rest.call(null,s__20590__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20592),null);
}
} else
{var record = cljs.core.first.call(null,s__20590__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20589.call(null,cljs.core.rest.call(null,s__20590__$2)));
}
} else
{return null;
}
break;
}
});})(map__20588,map__20588__$1,metric_spec,title,metric,variable,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20588,map__20588__$1,metric_spec,title,metric,variable,s__20570__$2,temp__4126__auto__,x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20569.call(null,cljs.core.rest.call(null,s__20570__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function iter__20593(s__20594){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title){
return (function (){var s__20594__$1 = s__20594;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20594__$1);if(temp__4126__auto__)
{var s__20594__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20594__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20594__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20596 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20595 = (0);while(true){
if((i__20595 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20595);cljs.core.chunk_append.call(null,b__20596,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20600 = (i__20595 + (1));
i__20595 = G__20600;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20596),iter__20593.call(null,cljs.core.chunk_rest.call(null,s__20594__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20596),null);
}
} else
{var y = cljs.core.first.call(null,s__20594__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20593.call(null,cljs.core.rest.call(null,s__20594__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20566,map__20566__$1,map__20567,map__20567__$1,metrics,color,records,map__20568,map__20568__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20721 = schema.utils.use_fn_validation;var output_schema20602_20722 = schema.core.Any;var input_schema20603_20723 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20604_20724 = schema.core.checker.call(null,input_schema20603_20723);var output_checker20605_20725 = schema.core.checker.call(null,output_schema20602_20722);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function timeline_chart(G__20606,G__20607,G__20608){var validate__6034__auto__ = ufv___20721.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20726 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20606,G__20607,G__20608], null);var temp__4126__auto___20727 = input_checker20604_20724.call(null,args__6035__auto___20726);if(cljs.core.truth_(temp__4126__auto___20727))
{var error__6036__auto___20728 = temp__4126__auto___20727;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20728)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20728,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20726,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20603_20723,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20668 = G__20606;var map__20670 = G__20668;var map__20670__$1 = ((cljs.core.seq_QMARK_.call(null,map__20670))?cljs.core.apply.call(null,cljs.core.hash_map,map__20670):map__20670);var map__20671 = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20671__$1 = ((cljs.core.seq_QMARK_.call(null,map__20671))?cljs.core.apply.call(null,cljs.core.hash_map,map__20671):map__20671);var timeline_chart__$1 = map__20671__$1;var query = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20607;var G__20669 = G__20608;var map__20672 = G__20669;var map__20672__$1 = ((cljs.core.seq_QMARK_.call(null,map__20672))?cljs.core.apply.call(null,cljs.core.hash_map,map__20672):map__20672);var opts = map__20672__$1;var id = cljs.core.get.call(null,map__20672__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20668__$1 = G__20668;var owner__$1 = owner;var G__20669__$1 = G__20669;while(true){
var map__20673 = G__20668__$1;var map__20673__$1 = ((cljs.core.seq_QMARK_.call(null,map__20673))?cljs.core.apply.call(null,cljs.core.hash_map,map__20673):map__20673);var map__20674 = cljs.core.get.call(null,map__20673__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20674__$1 = ((cljs.core.seq_QMARK_.call(null,map__20674))?cljs.core.apply.call(null,cljs.core.hash_map,map__20674):map__20674);var timeline_chart__$2 = map__20674__$1;var query__$1 = cljs.core.get.call(null,map__20674__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20674__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20673__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20675 = G__20669__$1;var map__20675__$1 = ((cljs.core.seq_QMARK_.call(null,map__20675))?cljs.core.apply.call(null,cljs.core.hash_map,map__20675):map__20675);var opts__$1 = map__20675__$1;var id__$1 = cljs.core.get.call(null,map__20675__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20676 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20676 = (function (query,owner,input_checker20604,map__20674,map__20673,timeline_data,filter_spec,map__20671,G__20607,G__20669,input_schema20603,map__20672,map__20675,G__20606,validate__6034__auto__,G__20608,map__20670,id,timeline_chart,output_checker20605,opts,output_schema20602,ufv__,G__20668,meta20677){
this.query = query;
this.owner = owner;
this.input_checker20604 = input_checker20604;
this.map__20674 = map__20674;
this.map__20673 = map__20673;
this.timeline_data = timeline_data;
this.filter_spec = filter_spec;
this.map__20671 = map__20671;
this.G__20607 = G__20607;
this.G__20669 = G__20669;
this.input_schema20603 = input_schema20603;
this.map__20672 = map__20672;
this.map__20675 = map__20675;
this.G__20606 = G__20606;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__20608 = G__20608;
this.map__20670 = map__20670;
this.id = id;
this.timeline_chart = timeline_chart;
this.output_checker20605 = output_checker20605;
this.opts = opts;
this.output_schema20602 = output_schema20602;
this.ufv__ = ufv__;
this.G__20668 = G__20668;
this.meta20677 = meta20677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20676.cljs$lang$type = true;
clustermap.components.timeline_chart.t20676.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20676";
clustermap.components.timeline_chart.t20676.cljs$lang$ctorPrWriter = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20676");
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.t20676.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20676.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.t20676.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20676.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (_,p__20679,___$1){var self__ = this;
var map__20680 = p__20679;var map__20680__$1 = ((cljs.core.seq_QMARK_.call(null,map__20680))?cljs.core.apply.call(null,cljs.core.hash_map,map__20680):map__20680);var map__20681 = cljs.core.get.call(null,map__20680__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20681__$1 = ((cljs.core.seq_QMARK_.call(null,map__20681))?cljs.core.apply.call(null,cljs.core.hash_map,map__20681):map__20681);var prev_query = cljs.core.get.call(null,map__20681__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20681__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20680__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.t20676.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20676.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (_,p__20682,p__20683){var self__ = this;
var map__20684 = p__20682;var map__20684__$1 = ((cljs.core.seq_QMARK_.call(null,map__20684))?cljs.core.apply.call(null,cljs.core.hash_map,map__20684):map__20684);var map__20685 = cljs.core.get.call(null,map__20684__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20685__$1 = ((cljs.core.seq_QMARK_.call(null,map__20685))?cljs.core.apply.call(null,cljs.core.hash_map,map__20685):map__20685);var next_query = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20684__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20686 = p__20683;var map__20686__$1 = ((cljs.core.seq_QMARK_.call(null,map__20686))?cljs.core.apply.call(null,cljs.core.hash_map,map__20686):map__20686);var fetch_data_fn = cljs.core.get.call(null,map__20686__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20684,map__20684__$1,map__20685,map__20685__$1,next_query,next_timeline_data,next_filter_spec,map__20686,map__20686__$1,fetch_data_fn,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20684,map__20684__$1,map__20685,map__20685__$1,next_query,next_timeline_data,next_filter_spec,map__20686,map__20686__$1,fetch_data_fn,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (state_20705){var state_val_20706 = (state_20705[(1)]);if((state_val_20706 === (5)))
{var inst_20703 = (state_20705[(2)]);var state_20705__$1 = state_20705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20705__$1,inst_20703);
} else
{if((state_val_20706 === (4)))
{var state_20705__$1 = state_20705;var statearr_20707_20729 = state_20705__$1;(statearr_20707_20729[(2)] = null);
(statearr_20707_20729[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20706 === (3)))
{var inst_20689 = (state_20705[(7)]);var inst_20691 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20692 = ["TIMELINE DATA",inst_20689];var inst_20693 = (new cljs.core.PersistentVector(null,2,(5),inst_20691,inst_20692,null));var inst_20694 = cljs.core.clj__GT_js.call(null,inst_20693);var inst_20695 = console.log(inst_20694);var inst_20696 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20697 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20698 = (new cljs.core.PersistentVector(null,1,(5),inst_20696,inst_20697,null));var inst_20699 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20689);var inst_20700 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20698,inst_20699);var state_20705__$1 = (function (){var statearr_20708 = state_20705;(statearr_20708[(8)] = inst_20695);
return statearr_20708;
})();var statearr_20709_20730 = state_20705__$1;(statearr_20709_20730[(2)] = inst_20700);
(statearr_20709_20730[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20706 === (2)))
{var inst_20689 = (state_20705[(7)]);var inst_20689__$1 = (state_20705[(2)]);var state_20705__$1 = (function (){var statearr_20710 = state_20705;(statearr_20710[(7)] = inst_20689__$1);
return statearr_20710;
})();if(cljs.core.truth_(inst_20689__$1))
{var statearr_20711_20731 = state_20705__$1;(statearr_20711_20731[(1)] = (3));
} else
{var statearr_20712_20732 = state_20705__$1;(statearr_20712_20732[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20706 === (1)))
{var inst_20687 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20705__$1 = state_20705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20705__$1,(2),inst_20687);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20684,map__20684__$1,map__20685,map__20685__$1,next_query,next_timeline_data,next_filter_spec,map__20686,map__20686__$1,fetch_data_fn,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20684,map__20684__$1,map__20685,map__20685__$1,next_query,next_timeline_data,next_filter_spec,map__20686,map__20686__$1,fetch_data_fn,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20716 = [null,null,null,null,null,null,null,null,null];(statearr_20716[(0)] = state_machine__9111__auto__);
(statearr_20716[(1)] = (1));
return statearr_20716;
});
var state_machine__9111__auto____1 = (function (state_20705){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20705);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20717){if((e20717 instanceof Object))
{var ex__9114__auto__ = e20717;var statearr_20718_20733 = state_20705;(statearr_20718_20733[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20717;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20734 = state_20705;
state_20705 = G__20734;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20705){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20684,map__20684__$1,map__20685,map__20685__$1,next_query,next_timeline_data,next_filter_spec,map__20686,map__20686__$1,fetch_data_fn,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
})();var state__9127__auto__ = (function (){var statearr_20719 = f__9126__auto__.call(null);(statearr_20719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20684,map__20684__$1,map__20685,map__20685__$1,next_query,next_timeline_data,next_filter_spec,map__20686,map__20686__$1,fetch_data_fn,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.t20676.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20676.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20720 = om.core.get_node.call(null,self__.owner,"chart");var G__20720__$1 = (((G__20720 == null))?null:jayq.core.$.call(null,G__20720));var G__20720__$2 = (((G__20720__$1 == null))?null:G__20720__$1.highcharts());var G__20720__$3 = (((G__20720__$2 == null))?null:G__20720__$2.reflow());return G__20720__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
);
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.t20676.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20676.prototype.om$core$IRender$render$arity$1 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.t20676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (_20678){var self__ = this;
var _20678__$1 = this;return self__.meta20677;
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.t20676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function (_20678,meta20677__$1){var self__ = this;
var _20678__$1 = this;return (new clustermap.components.timeline_chart.t20676(self__.query,self__.owner,self__.input_checker20604,self__.map__20674,self__.map__20673,self__.timeline_data,self__.filter_spec,self__.map__20671,self__.G__20607,self__.G__20669,self__.input_schema20603,self__.map__20672,self__.map__20675,self__.G__20606,self__.validate__6034__auto__,self__.G__20608,self__.map__20670,self__.id,self__.timeline_chart,self__.output_checker20605,self__.opts,self__.output_schema20602,self__.ufv__,self__.G__20668,meta20677__$1));
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
clustermap.components.timeline_chart.__GT_t20676 = ((function (map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725){
return (function __GT_t20676(query__$2,owner__$3,input_checker20604__$1,map__20674__$2,map__20673__$2,timeline_data__$2,filter_spec__$2,map__20671__$2,G__20607__$1,G__20669__$2,input_schema20603__$1,map__20672__$2,map__20675__$2,G__20606__$1,validate__6034__auto____$1,G__20608__$1,map__20670__$2,id__$2,timeline_chart__$3,output_checker20605__$1,opts__$2,output_schema20602__$1,ufv____$1,G__20668__$2,meta20677){return (new clustermap.components.timeline_chart.t20676(query__$2,owner__$3,input_checker20604__$1,map__20674__$2,map__20673__$2,timeline_data__$2,filter_spec__$2,map__20671__$2,G__20607__$1,G__20669__$2,input_schema20603__$1,map__20672__$2,map__20675__$2,G__20606__$1,validate__6034__auto____$1,G__20608__$1,map__20670__$2,id__$2,timeline_chart__$3,output_checker20605__$1,opts__$2,output_schema20602__$1,ufv____$1,G__20668__$2,meta20677));
});})(map__20673,map__20673__$1,map__20674,map__20674__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20675,map__20675__$1,opts__$1,id__$1,G__20668,map__20670,map__20670__$1,map__20671,map__20671__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20669,map__20672,map__20672__$1,opts,id,validate__6034__auto__,ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
}
return (new clustermap.components.timeline_chart.t20676(query__$1,owner__$2,input_checker20604_20724,map__20674__$1,map__20673__$1,timeline_data__$1,filter_spec__$1,map__20671__$1,G__20607,G__20669__$1,input_schema20603_20723,map__20672__$1,map__20675__$1,G__20606,validate__6034__auto__,G__20608,map__20670__$1,id__$1,timeline_chart__$2,output_checker20605_20725,opts__$1,output_schema20602_20722,ufv___20721,G__20668__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20735 = output_checker20605_20725.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20735))
{var error__6036__auto___20736 = temp__4126__auto___20735;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20736,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20602_20722,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20721,output_schema20602_20722,input_schema20603_20723,input_checker20604_20724,output_checker20605_20725))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20602_20722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20603_20723], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20601){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20601);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20601){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
