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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20547,p__20548){var map__20580 = p__20547;var map__20580__$1 = ((cljs.core.seq_QMARK_.call(null,map__20580))?cljs.core.apply.call(null,cljs.core.hash_map,map__20580):map__20580);var map__20581 = cljs.core.get.call(null,map__20580__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20581__$1 = ((cljs.core.seq_QMARK_.call(null,map__20581))?cljs.core.apply.call(null,cljs.core.hash_map,map__20581):map__20581);var metrics = cljs.core.get.call(null,map__20581__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20580__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20580__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20582 = p__20548;var map__20582__$1 = ((cljs.core.seq_QMARK_.call(null,map__20582))?cljs.core.apply.call(null,cljs.core.hash_map,map__20582):map__20582);var opts = map__20582__$1;var y1_title = cljs.core.get.call(null,map__20582__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20582__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (p1__20546_SHARP_){return ((1900) + p1__20546_SHARP_);
});})(map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (p1__20545_SHARP_){return p1__20545_SHARP_.getYear();
});})(map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (p1__20544_SHARP_){return (new Date(p1__20544_SHARP_));
});})(map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function iter__20583(s__20584){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (){var s__20584__$1 = s__20584;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20584__$1);if(temp__4126__auto__)
{var s__20584__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20584__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20584__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20586 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20585 = (0);while(true){
if((i__20585 < size__4376__auto__))
{var map__20597 = cljs.core._nth.call(null,c__4375__auto__,i__20585);var map__20597__$1 = ((cljs.core.seq_QMARK_.call(null,map__20597))?cljs.core.apply.call(null,cljs.core.hash_map,map__20597):map__20597);var metric_spec = map__20597__$1;var title = cljs.core.get.call(null,map__20597__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20597__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20597__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20586,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20585,map__20597,map__20597__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20586,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function iter__20598(s__20599){return (new cljs.core.LazySeq(null,((function (i__20585,map__20597,map__20597__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20586,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (){var s__20599__$1 = s__20599;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20599__$1);if(temp__4126__auto____$1)
{var s__20599__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20599__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20599__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20601 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20600 = (0);while(true){
if((i__20600 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20600);cljs.core.chunk_append.call(null,b__20601,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20611 = (i__20600 + (1));
i__20600 = G__20611;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20601),iter__20598.call(null,cljs.core.chunk_rest.call(null,s__20599__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20601),null);
}
} else
{var record = cljs.core.first.call(null,s__20599__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20598.call(null,cljs.core.rest.call(null,s__20599__$2)));
}
} else
{return null;
}
break;
}
});})(i__20585,map__20597,map__20597__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20586,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20585,map__20597,map__20597__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20586,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20612 = (i__20585 + (1));
i__20585 = G__20612;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20586),iter__20583.call(null,cljs.core.chunk_rest.call(null,s__20584__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20586),null);
}
} else
{var map__20602 = cljs.core.first.call(null,s__20584__$2);var map__20602__$1 = ((cljs.core.seq_QMARK_.call(null,map__20602))?cljs.core.apply.call(null,cljs.core.hash_map,map__20602):map__20602);var metric_spec = map__20602__$1;var title = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20602,map__20602__$1,metric_spec,title,metric,variable,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function iter__20603(s__20604){return (new cljs.core.LazySeq(null,((function (map__20602,map__20602__$1,metric_spec,title,metric,variable,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (){var s__20604__$1 = s__20604;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20604__$1);if(temp__4126__auto____$1)
{var s__20604__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20604__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20604__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20606 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20605 = (0);while(true){
if((i__20605 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20605);cljs.core.chunk_append.call(null,b__20606,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20613 = (i__20605 + (1));
i__20605 = G__20613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20606),iter__20603.call(null,cljs.core.chunk_rest.call(null,s__20604__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20606),null);
}
} else
{var record = cljs.core.first.call(null,s__20604__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20603.call(null,cljs.core.rest.call(null,s__20604__$2)));
}
} else
{return null;
}
break;
}
});})(map__20602,map__20602__$1,metric_spec,title,metric,variable,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20602,map__20602__$1,metric_spec,title,metric,variable,s__20584__$2,temp__4126__auto__,x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20583.call(null,cljs.core.rest.call(null,s__20584__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function iter__20607(s__20608){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title){
return (function (){var s__20608__$1 = s__20608;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20608__$1);if(temp__4126__auto__)
{var s__20608__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20608__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20608__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20610 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20609 = (0);while(true){
if((i__20609 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20609);cljs.core.chunk_append.call(null,b__20610,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20614 = (i__20609 + (1));
i__20609 = G__20614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20610),iter__20607.call(null,cljs.core.chunk_rest.call(null,s__20608__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20610),null);
}
} else
{var y = cljs.core.first.call(null,s__20608__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20607.call(null,cljs.core.rest.call(null,s__20608__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20580,map__20580__$1,map__20581,map__20581__$1,metrics,color,records,map__20582,map__20582__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20735 = schema.utils.use_fn_validation;var output_schema20616_20736 = schema.core.Any;var input_schema20617_20737 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20618_20738 = schema.core.checker.call(null,input_schema20617_20737);var output_checker20619_20739 = schema.core.checker.call(null,output_schema20616_20736);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function timeline_chart(G__20620,G__20621,G__20622){var validate__6034__auto__ = ufv___20735.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20740 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20620,G__20621,G__20622], null);var temp__4126__auto___20741 = input_checker20618_20738.call(null,args__6035__auto___20740);if(cljs.core.truth_(temp__4126__auto___20741))
{var error__6036__auto___20742 = temp__4126__auto___20741;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20742)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20742,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20740,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20617_20737,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20682 = G__20620;var map__20684 = G__20682;var map__20684__$1 = ((cljs.core.seq_QMARK_.call(null,map__20684))?cljs.core.apply.call(null,cljs.core.hash_map,map__20684):map__20684);var map__20685 = cljs.core.get.call(null,map__20684__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20685__$1 = ((cljs.core.seq_QMARK_.call(null,map__20685))?cljs.core.apply.call(null,cljs.core.hash_map,map__20685):map__20685);var timeline_chart__$1 = map__20685__$1;var query = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20684__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20621;var G__20683 = G__20622;var map__20686 = G__20683;var map__20686__$1 = ((cljs.core.seq_QMARK_.call(null,map__20686))?cljs.core.apply.call(null,cljs.core.hash_map,map__20686):map__20686);var opts = map__20686__$1;var id = cljs.core.get.call(null,map__20686__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20682__$1 = G__20682;var owner__$1 = owner;var G__20683__$1 = G__20683;while(true){
var map__20687 = G__20682__$1;var map__20687__$1 = ((cljs.core.seq_QMARK_.call(null,map__20687))?cljs.core.apply.call(null,cljs.core.hash_map,map__20687):map__20687);var map__20688 = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20688__$1 = ((cljs.core.seq_QMARK_.call(null,map__20688))?cljs.core.apply.call(null,cljs.core.hash_map,map__20688):map__20688);var timeline_chart__$2 = map__20688__$1;var query__$1 = cljs.core.get.call(null,map__20688__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20688__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20689 = G__20683__$1;var map__20689__$1 = ((cljs.core.seq_QMARK_.call(null,map__20689))?cljs.core.apply.call(null,cljs.core.hash_map,map__20689):map__20689);var opts__$1 = map__20689__$1;var id__$1 = cljs.core.get.call(null,map__20689__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20690 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20690 = (function (query,G__20620,G__20621,owner,G__20682,map__20687,input_schema20617,G__20683,timeline_data,G__20622,filter_spec,map__20689,input_checker20618,output_schema20616,map__20686,validate__6034__auto__,map__20688,id,timeline_chart,output_checker20619,map__20684,opts,ufv__,map__20685,meta20691){
this.query = query;
this.G__20620 = G__20620;
this.G__20621 = G__20621;
this.owner = owner;
this.G__20682 = G__20682;
this.map__20687 = map__20687;
this.input_schema20617 = input_schema20617;
this.G__20683 = G__20683;
this.timeline_data = timeline_data;
this.G__20622 = G__20622;
this.filter_spec = filter_spec;
this.map__20689 = map__20689;
this.input_checker20618 = input_checker20618;
this.output_schema20616 = output_schema20616;
this.map__20686 = map__20686;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__20688 = map__20688;
this.id = id;
this.timeline_chart = timeline_chart;
this.output_checker20619 = output_checker20619;
this.map__20684 = map__20684;
this.opts = opts;
this.ufv__ = ufv__;
this.map__20685 = map__20685;
this.meta20691 = meta20691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20690.cljs$lang$type = true;
clustermap.components.timeline_chart.t20690.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20690";
clustermap.components.timeline_chart.t20690.cljs$lang$ctorPrWriter = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20690");
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.t20690.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20690.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.t20690.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20690.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (_,p__20693,___$1){var self__ = this;
var map__20694 = p__20693;var map__20694__$1 = ((cljs.core.seq_QMARK_.call(null,map__20694))?cljs.core.apply.call(null,cljs.core.hash_map,map__20694):map__20694);var map__20695 = cljs.core.get.call(null,map__20694__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20695__$1 = ((cljs.core.seq_QMARK_.call(null,map__20695))?cljs.core.apply.call(null,cljs.core.hash_map,map__20695):map__20695);var prev_query = cljs.core.get.call(null,map__20695__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20695__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20694__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.t20690.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20690.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (_,p__20696,p__20697){var self__ = this;
var map__20698 = p__20696;var map__20698__$1 = ((cljs.core.seq_QMARK_.call(null,map__20698))?cljs.core.apply.call(null,cljs.core.hash_map,map__20698):map__20698);var map__20699 = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20699__$1 = ((cljs.core.seq_QMARK_.call(null,map__20699))?cljs.core.apply.call(null,cljs.core.hash_map,map__20699):map__20699);var next_query = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20700 = p__20697;var map__20700__$1 = ((cljs.core.seq_QMARK_.call(null,map__20700))?cljs.core.apply.call(null,cljs.core.hash_map,map__20700):map__20700);var fetch_data_fn = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20698,map__20698__$1,map__20699,map__20699__$1,next_query,next_timeline_data,next_filter_spec,map__20700,map__20700__$1,fetch_data_fn,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20698,map__20698__$1,map__20699,map__20699__$1,next_query,next_timeline_data,next_filter_spec,map__20700,map__20700__$1,fetch_data_fn,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (state_20719){var state_val_20720 = (state_20719[(1)]);if((state_val_20720 === (5)))
{var inst_20717 = (state_20719[(2)]);var state_20719__$1 = state_20719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20719__$1,inst_20717);
} else
{if((state_val_20720 === (4)))
{var state_20719__$1 = state_20719;var statearr_20721_20743 = state_20719__$1;(statearr_20721_20743[(2)] = null);
(statearr_20721_20743[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20720 === (3)))
{var inst_20703 = (state_20719[(7)]);var inst_20705 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20706 = ["TIMELINE DATA",inst_20703];var inst_20707 = (new cljs.core.PersistentVector(null,2,(5),inst_20705,inst_20706,null));var inst_20708 = cljs.core.clj__GT_js.call(null,inst_20707);var inst_20709 = console.log(inst_20708);var inst_20710 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20711 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20712 = (new cljs.core.PersistentVector(null,1,(5),inst_20710,inst_20711,null));var inst_20713 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20703);var inst_20714 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20712,inst_20713);var state_20719__$1 = (function (){var statearr_20722 = state_20719;(statearr_20722[(8)] = inst_20709);
return statearr_20722;
})();var statearr_20723_20744 = state_20719__$1;(statearr_20723_20744[(2)] = inst_20714);
(statearr_20723_20744[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20720 === (2)))
{var inst_20703 = (state_20719[(7)]);var inst_20703__$1 = (state_20719[(2)]);var state_20719__$1 = (function (){var statearr_20724 = state_20719;(statearr_20724[(7)] = inst_20703__$1);
return statearr_20724;
})();if(cljs.core.truth_(inst_20703__$1))
{var statearr_20725_20745 = state_20719__$1;(statearr_20725_20745[(1)] = (3));
} else
{var statearr_20726_20746 = state_20719__$1;(statearr_20726_20746[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20720 === (1)))
{var inst_20701 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20719__$1 = state_20719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20719__$1,(2),inst_20701);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20698,map__20698__$1,map__20699,map__20699__$1,next_query,next_timeline_data,next_filter_spec,map__20700,map__20700__$1,fetch_data_fn,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20698,map__20698__$1,map__20699,map__20699__$1,next_query,next_timeline_data,next_filter_spec,map__20700,map__20700__$1,fetch_data_fn,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20730 = [null,null,null,null,null,null,null,null,null];(statearr_20730[(0)] = state_machine__9111__auto__);
(statearr_20730[(1)] = (1));
return statearr_20730;
});
var state_machine__9111__auto____1 = (function (state_20719){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20719);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20731){if((e20731 instanceof Object))
{var ex__9114__auto__ = e20731;var statearr_20732_20747 = state_20719;(statearr_20732_20747[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20719);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20731;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20748 = state_20719;
state_20719 = G__20748;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20719){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20698,map__20698__$1,map__20699,map__20699__$1,next_query,next_timeline_data,next_filter_spec,map__20700,map__20700__$1,fetch_data_fn,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
})();var state__9127__auto__ = (function (){var statearr_20733 = f__9126__auto__.call(null);(statearr_20733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20698,map__20698__$1,map__20699,map__20699__$1,next_query,next_timeline_data,next_filter_spec,map__20700,map__20700__$1,fetch_data_fn,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.t20690.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20690.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20734 = om.core.get_node.call(null,self__.owner,"chart");var G__20734__$1 = (((G__20734 == null))?null:jayq.core.$.call(null,G__20734));var G__20734__$2 = (((G__20734__$1 == null))?null:G__20734__$1.highcharts());var G__20734__$3 = (((G__20734__$2 == null))?null:G__20734__$2.reflow());return G__20734__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
);
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.t20690.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20690.prototype.om$core$IRender$render$arity$1 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.t20690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (_20692){var self__ = this;
var _20692__$1 = this;return self__.meta20691;
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.t20690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function (_20692,meta20691__$1){var self__ = this;
var _20692__$1 = this;return (new clustermap.components.timeline_chart.t20690(self__.query,self__.G__20620,self__.G__20621,self__.owner,self__.G__20682,self__.map__20687,self__.input_schema20617,self__.G__20683,self__.timeline_data,self__.G__20622,self__.filter_spec,self__.map__20689,self__.input_checker20618,self__.output_schema20616,self__.map__20686,self__.validate__6034__auto__,self__.map__20688,self__.id,self__.timeline_chart,self__.output_checker20619,self__.map__20684,self__.opts,self__.ufv__,self__.map__20685,meta20691__$1));
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
clustermap.components.timeline_chart.__GT_t20690 = ((function (map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739){
return (function __GT_t20690(query__$2,G__20620__$1,G__20621__$1,owner__$3,G__20682__$2,map__20687__$2,input_schema20617__$1,G__20683__$2,timeline_data__$2,G__20622__$1,filter_spec__$2,map__20689__$2,input_checker20618__$1,output_schema20616__$1,map__20686__$2,validate__6034__auto____$1,map__20688__$2,id__$2,timeline_chart__$3,output_checker20619__$1,map__20684__$2,opts__$2,ufv____$1,map__20685__$2,meta20691){return (new clustermap.components.timeline_chart.t20690(query__$2,G__20620__$1,G__20621__$1,owner__$3,G__20682__$2,map__20687__$2,input_schema20617__$1,G__20683__$2,timeline_data__$2,G__20622__$1,filter_spec__$2,map__20689__$2,input_checker20618__$1,output_schema20616__$1,map__20686__$2,validate__6034__auto____$1,map__20688__$2,id__$2,timeline_chart__$3,output_checker20619__$1,map__20684__$2,opts__$2,ufv____$1,map__20685__$2,meta20691));
});})(map__20687,map__20687__$1,map__20688,map__20688__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20689,map__20689__$1,opts__$1,id__$1,G__20682,map__20684,map__20684__$1,map__20685,map__20685__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20683,map__20686,map__20686__$1,opts,id,validate__6034__auto__,ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
}
return (new clustermap.components.timeline_chart.t20690(query__$1,G__20620,G__20621,owner__$2,G__20682__$1,map__20687__$1,input_schema20617_20737,G__20683__$1,timeline_data__$1,G__20622,filter_spec__$1,map__20689__$1,input_checker20618_20738,output_schema20616_20736,map__20686__$1,validate__6034__auto__,map__20688__$1,id__$1,timeline_chart__$2,output_checker20619_20739,map__20684__$1,opts__$1,ufv___20735,map__20685__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20749 = output_checker20619_20739.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20749))
{var error__6036__auto___20750 = temp__4126__auto___20749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20750)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20750,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20616_20736,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20735,output_schema20616_20736,input_schema20617_20737,input_checker20618_20738,output_checker20619_20739))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20616_20736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20617_20737], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20615){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20615);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20615){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
