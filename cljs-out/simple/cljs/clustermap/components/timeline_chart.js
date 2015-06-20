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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20616,p__20617){var map__20649 = p__20616;var map__20649__$1 = ((cljs.core.seq_QMARK_.call(null,map__20649))?cljs.core.apply.call(null,cljs.core.hash_map,map__20649):map__20649);var map__20650 = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20650__$1 = ((cljs.core.seq_QMARK_.call(null,map__20650))?cljs.core.apply.call(null,cljs.core.hash_map,map__20650):map__20650);var metrics = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20651 = p__20617;var map__20651__$1 = ((cljs.core.seq_QMARK_.call(null,map__20651))?cljs.core.apply.call(null,cljs.core.hash_map,map__20651):map__20651);var opts = map__20651__$1;var y1_title = cljs.core.get.call(null,map__20651__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20651__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (p1__20615_SHARP_){return ((1900) + p1__20615_SHARP_);
});})(map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (p1__20614_SHARP_){return p1__20614_SHARP_.getYear();
});})(map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (p1__20613_SHARP_){return (new Date(p1__20613_SHARP_));
});})(map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function iter__20652(s__20653){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (){var s__20653__$1 = s__20653;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20653__$1);if(temp__4126__auto__)
{var s__20653__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20653__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20653__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20655 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20654 = (0);while(true){
if((i__20654 < size__4376__auto__))
{var map__20666 = cljs.core._nth.call(null,c__4375__auto__,i__20654);var map__20666__$1 = ((cljs.core.seq_QMARK_.call(null,map__20666))?cljs.core.apply.call(null,cljs.core.hash_map,map__20666):map__20666);var metric_spec = map__20666__$1;var title = cljs.core.get.call(null,map__20666__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20666__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20666__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20655,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20654,map__20666,map__20666__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20655,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function iter__20667(s__20668){return (new cljs.core.LazySeq(null,((function (i__20654,map__20666,map__20666__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20655,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (){var s__20668__$1 = s__20668;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20668__$1);if(temp__4126__auto____$1)
{var s__20668__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20668__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20668__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20670 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20669 = (0);while(true){
if((i__20669 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20669);cljs.core.chunk_append.call(null,b__20670,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20680 = (i__20669 + (1));
i__20669 = G__20680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20670),iter__20667.call(null,cljs.core.chunk_rest.call(null,s__20668__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20670),null);
}
} else
{var record = cljs.core.first.call(null,s__20668__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20667.call(null,cljs.core.rest.call(null,s__20668__$2)));
}
} else
{return null;
}
break;
}
});})(i__20654,map__20666,map__20666__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20655,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20654,map__20666,map__20666__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20655,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20681 = (i__20654 + (1));
i__20654 = G__20681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20655),iter__20652.call(null,cljs.core.chunk_rest.call(null,s__20653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20655),null);
}
} else
{var map__20671 = cljs.core.first.call(null,s__20653__$2);var map__20671__$1 = ((cljs.core.seq_QMARK_.call(null,map__20671))?cljs.core.apply.call(null,cljs.core.hash_map,map__20671):map__20671);var metric_spec = map__20671__$1;var title = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20671,map__20671__$1,metric_spec,title,metric,variable,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function iter__20672(s__20673){return (new cljs.core.LazySeq(null,((function (map__20671,map__20671__$1,metric_spec,title,metric,variable,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (){var s__20673__$1 = s__20673;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20673__$1);if(temp__4126__auto____$1)
{var s__20673__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20673__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20673__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20675 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20674 = (0);while(true){
if((i__20674 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20674);cljs.core.chunk_append.call(null,b__20675,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20682 = (i__20674 + (1));
i__20674 = G__20682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20675),iter__20672.call(null,cljs.core.chunk_rest.call(null,s__20673__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20675),null);
}
} else
{var record = cljs.core.first.call(null,s__20673__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20672.call(null,cljs.core.rest.call(null,s__20673__$2)));
}
} else
{return null;
}
break;
}
});})(map__20671,map__20671__$1,metric_spec,title,metric,variable,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20671,map__20671__$1,metric_spec,title,metric,variable,s__20653__$2,temp__4126__auto__,x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20652.call(null,cljs.core.rest.call(null,s__20653__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function iter__20676(s__20677){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title){
return (function (){var s__20677__$1 = s__20677;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20677__$1);if(temp__4126__auto__)
{var s__20677__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20677__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20677__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20679 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20678 = (0);while(true){
if((i__20678 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20678);cljs.core.chunk_append.call(null,b__20679,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20683 = (i__20678 + (1));
i__20678 = G__20683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20679),iter__20676.call(null,cljs.core.chunk_rest.call(null,s__20677__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20679),null);
}
} else
{var y = cljs.core.first.call(null,s__20677__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20676.call(null,cljs.core.rest.call(null,s__20677__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20649,map__20649__$1,map__20650,map__20650__$1,metrics,color,records,map__20651,map__20651__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20804 = schema.utils.use_fn_validation;var output_schema20685_20805 = schema.core.Any;var input_schema20686_20806 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20687_20807 = schema.core.checker.call(null,input_schema20686_20806);var output_checker20688_20808 = schema.core.checker.call(null,output_schema20685_20805);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function timeline_chart(G__20689,G__20690,G__20691){var validate__6034__auto__ = ufv___20804.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20809 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20689,G__20690,G__20691], null);var temp__4126__auto___20810 = input_checker20687_20807.call(null,args__6035__auto___20809);if(cljs.core.truth_(temp__4126__auto___20810))
{var error__6036__auto___20811 = temp__4126__auto___20810;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20811,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20809,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20686_20806,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20751 = G__20689;var map__20753 = G__20751;var map__20753__$1 = ((cljs.core.seq_QMARK_.call(null,map__20753))?cljs.core.apply.call(null,cljs.core.hash_map,map__20753):map__20753);var map__20754 = cljs.core.get.call(null,map__20753__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20754__$1 = ((cljs.core.seq_QMARK_.call(null,map__20754))?cljs.core.apply.call(null,cljs.core.hash_map,map__20754):map__20754);var timeline_chart__$1 = map__20754__$1;var query = cljs.core.get.call(null,map__20754__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20754__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20753__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20690;var G__20752 = G__20691;var map__20755 = G__20752;var map__20755__$1 = ((cljs.core.seq_QMARK_.call(null,map__20755))?cljs.core.apply.call(null,cljs.core.hash_map,map__20755):map__20755);var opts = map__20755__$1;var id = cljs.core.get.call(null,map__20755__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20751__$1 = G__20751;var owner__$1 = owner;var G__20752__$1 = G__20752;while(true){
var map__20756 = G__20751__$1;var map__20756__$1 = ((cljs.core.seq_QMARK_.call(null,map__20756))?cljs.core.apply.call(null,cljs.core.hash_map,map__20756):map__20756);var map__20757 = cljs.core.get.call(null,map__20756__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20757__$1 = ((cljs.core.seq_QMARK_.call(null,map__20757))?cljs.core.apply.call(null,cljs.core.hash_map,map__20757):map__20757);var timeline_chart__$2 = map__20757__$1;var query__$1 = cljs.core.get.call(null,map__20757__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20757__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20756__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20758 = G__20752__$1;var map__20758__$1 = ((cljs.core.seq_QMARK_.call(null,map__20758))?cljs.core.apply.call(null,cljs.core.hash_map,map__20758):map__20758);var opts__$1 = map__20758__$1;var id__$1 = cljs.core.get.call(null,map__20758__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20759 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20759 = (function (map__20755,output_schema20685,query,owner,map__20756,map__20754,G__20689,timeline_data,G__20690,input_schema20686,filter_spec,output_checker20688,input_checker20687,map__20758,G__20691,G__20752,G__20751,map__20753,map__20757,validate__6034__auto__,id,timeline_chart,opts,ufv__,meta20760){
this.map__20755 = map__20755;
this.output_schema20685 = output_schema20685;
this.query = query;
this.owner = owner;
this.map__20756 = map__20756;
this.map__20754 = map__20754;
this.G__20689 = G__20689;
this.timeline_data = timeline_data;
this.G__20690 = G__20690;
this.input_schema20686 = input_schema20686;
this.filter_spec = filter_spec;
this.output_checker20688 = output_checker20688;
this.input_checker20687 = input_checker20687;
this.map__20758 = map__20758;
this.G__20691 = G__20691;
this.G__20752 = G__20752;
this.G__20751 = G__20751;
this.map__20753 = map__20753;
this.map__20757 = map__20757;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20760 = meta20760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20759.cljs$lang$type = true;
clustermap.components.timeline_chart.t20759.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20759";
clustermap.components.timeline_chart.t20759.cljs$lang$ctorPrWriter = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20759");
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.t20759.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20759.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.t20759.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20759.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (_,p__20762,___$1){var self__ = this;
var map__20763 = p__20762;var map__20763__$1 = ((cljs.core.seq_QMARK_.call(null,map__20763))?cljs.core.apply.call(null,cljs.core.hash_map,map__20763):map__20763);var map__20764 = cljs.core.get.call(null,map__20763__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20764__$1 = ((cljs.core.seq_QMARK_.call(null,map__20764))?cljs.core.apply.call(null,cljs.core.hash_map,map__20764):map__20764);var prev_query = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20764__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20763__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.t20759.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20759.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (_,p__20765,p__20766){var self__ = this;
var map__20767 = p__20765;var map__20767__$1 = ((cljs.core.seq_QMARK_.call(null,map__20767))?cljs.core.apply.call(null,cljs.core.hash_map,map__20767):map__20767);var map__20768 = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20768__$1 = ((cljs.core.seq_QMARK_.call(null,map__20768))?cljs.core.apply.call(null,cljs.core.hash_map,map__20768):map__20768);var next_query = cljs.core.get.call(null,map__20768__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20768__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20769 = p__20766;var map__20769__$1 = ((cljs.core.seq_QMARK_.call(null,map__20769))?cljs.core.apply.call(null,cljs.core.hash_map,map__20769):map__20769);var fetch_data_fn = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20767,map__20767__$1,map__20768,map__20768__$1,next_query,next_timeline_data,next_filter_spec,map__20769,map__20769__$1,fetch_data_fn,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20767,map__20767__$1,map__20768,map__20768__$1,next_query,next_timeline_data,next_filter_spec,map__20769,map__20769__$1,fetch_data_fn,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (state_20788){var state_val_20789 = (state_20788[(1)]);if((state_val_20789 === (5)))
{var inst_20786 = (state_20788[(2)]);var state_20788__$1 = state_20788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20788__$1,inst_20786);
} else
{if((state_val_20789 === (4)))
{var state_20788__$1 = state_20788;var statearr_20790_20812 = state_20788__$1;(statearr_20790_20812[(2)] = null);
(statearr_20790_20812[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20789 === (3)))
{var inst_20772 = (state_20788[(7)]);var inst_20774 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20775 = ["TIMELINE DATA",inst_20772];var inst_20776 = (new cljs.core.PersistentVector(null,2,(5),inst_20774,inst_20775,null));var inst_20777 = cljs.core.clj__GT_js.call(null,inst_20776);var inst_20778 = console.log(inst_20777);var inst_20779 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20780 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20781 = (new cljs.core.PersistentVector(null,1,(5),inst_20779,inst_20780,null));var inst_20782 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20772);var inst_20783 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20781,inst_20782);var state_20788__$1 = (function (){var statearr_20791 = state_20788;(statearr_20791[(8)] = inst_20778);
return statearr_20791;
})();var statearr_20792_20813 = state_20788__$1;(statearr_20792_20813[(2)] = inst_20783);
(statearr_20792_20813[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20789 === (2)))
{var inst_20772 = (state_20788[(7)]);var inst_20772__$1 = (state_20788[(2)]);var state_20788__$1 = (function (){var statearr_20793 = state_20788;(statearr_20793[(7)] = inst_20772__$1);
return statearr_20793;
})();if(cljs.core.truth_(inst_20772__$1))
{var statearr_20794_20814 = state_20788__$1;(statearr_20794_20814[(1)] = (3));
} else
{var statearr_20795_20815 = state_20788__$1;(statearr_20795_20815[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20789 === (1)))
{var inst_20770 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20788__$1 = state_20788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20788__$1,(2),inst_20770);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20767,map__20767__$1,map__20768,map__20768__$1,next_query,next_timeline_data,next_filter_spec,map__20769,map__20769__$1,fetch_data_fn,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20767,map__20767__$1,map__20768,map__20768__$1,next_query,next_timeline_data,next_filter_spec,map__20769,map__20769__$1,fetch_data_fn,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20799 = [null,null,null,null,null,null,null,null,null];(statearr_20799[(0)] = state_machine__9111__auto__);
(statearr_20799[(1)] = (1));
return statearr_20799;
});
var state_machine__9111__auto____1 = (function (state_20788){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20788);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20800){if((e20800 instanceof Object))
{var ex__9114__auto__ = e20800;var statearr_20801_20816 = state_20788;(statearr_20801_20816[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20800;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20817 = state_20788;
state_20788 = G__20817;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20788){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20767,map__20767__$1,map__20768,map__20768__$1,next_query,next_timeline_data,next_filter_spec,map__20769,map__20769__$1,fetch_data_fn,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
})();var state__9127__auto__ = (function (){var statearr_20802 = f__9126__auto__.call(null);(statearr_20802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20767,map__20767__$1,map__20768,map__20768__$1,next_query,next_timeline_data,next_filter_spec,map__20769,map__20769__$1,fetch_data_fn,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.t20759.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20759.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20803 = om.core.get_node.call(null,self__.owner,"chart");var G__20803__$1 = (((G__20803 == null))?null:jayq.core.$.call(null,G__20803));var G__20803__$2 = (((G__20803__$1 == null))?null:G__20803__$1.highcharts());var G__20803__$3 = (((G__20803__$2 == null))?null:G__20803__$2.reflow());return G__20803__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
);
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.t20759.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20759.prototype.om$core$IRender$render$arity$1 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.t20759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (_20761){var self__ = this;
var _20761__$1 = this;return self__.meta20760;
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.t20759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function (_20761,meta20760__$1){var self__ = this;
var _20761__$1 = this;return (new clustermap.components.timeline_chart.t20759(self__.map__20755,self__.output_schema20685,self__.query,self__.owner,self__.map__20756,self__.map__20754,self__.G__20689,self__.timeline_data,self__.G__20690,self__.input_schema20686,self__.filter_spec,self__.output_checker20688,self__.input_checker20687,self__.map__20758,self__.G__20691,self__.G__20752,self__.G__20751,self__.map__20753,self__.map__20757,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.opts,self__.ufv__,meta20760__$1));
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
clustermap.components.timeline_chart.__GT_t20759 = ((function (map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808){
return (function __GT_t20759(map__20755__$2,output_schema20685__$1,query__$2,owner__$3,map__20756__$2,map__20754__$2,G__20689__$1,timeline_data__$2,G__20690__$1,input_schema20686__$1,filter_spec__$2,output_checker20688__$1,input_checker20687__$1,map__20758__$2,G__20691__$1,G__20752__$2,G__20751__$2,map__20753__$2,map__20757__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,meta20760){return (new clustermap.components.timeline_chart.t20759(map__20755__$2,output_schema20685__$1,query__$2,owner__$3,map__20756__$2,map__20754__$2,G__20689__$1,timeline_data__$2,G__20690__$1,input_schema20686__$1,filter_spec__$2,output_checker20688__$1,input_checker20687__$1,map__20758__$2,G__20691__$1,G__20752__$2,G__20751__$2,map__20753__$2,map__20757__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,meta20760));
});})(map__20756,map__20756__$1,map__20757,map__20757__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20758,map__20758__$1,opts__$1,id__$1,G__20751,map__20753,map__20753__$1,map__20754,map__20754__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20752,map__20755,map__20755__$1,opts,id,validate__6034__auto__,ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
}
return (new clustermap.components.timeline_chart.t20759(map__20755__$1,output_schema20685_20805,query__$1,owner__$2,map__20756__$1,map__20754__$1,G__20689,timeline_data__$1,G__20690,input_schema20686_20806,filter_spec__$1,output_checker20688_20808,input_checker20687_20807,map__20758__$1,G__20691,G__20752__$1,G__20751__$1,map__20753__$1,map__20757__$1,validate__6034__auto__,id__$1,timeline_chart__$2,opts__$1,ufv___20804,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20818 = output_checker20688_20808.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20818))
{var error__6036__auto___20819 = temp__4126__auto___20818;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20819,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20685_20805,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20804,output_schema20685_20805,input_schema20686_20806,input_checker20687_20807,output_checker20688_20808))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20685_20805,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20686_20806], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20684){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20684);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20684){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
