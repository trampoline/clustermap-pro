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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20761,p__20762){var map__20794 = p__20761;var map__20794__$1 = ((cljs.core.seq_QMARK_.call(null,map__20794))?cljs.core.apply.call(null,cljs.core.hash_map,map__20794):map__20794);var map__20795 = cljs.core.get.call(null,map__20794__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20795__$1 = ((cljs.core.seq_QMARK_.call(null,map__20795))?cljs.core.apply.call(null,cljs.core.hash_map,map__20795):map__20795);var metrics = cljs.core.get.call(null,map__20795__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20794__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20794__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20796 = p__20762;var map__20796__$1 = ((cljs.core.seq_QMARK_.call(null,map__20796))?cljs.core.apply.call(null,cljs.core.hash_map,map__20796):map__20796);var opts = map__20796__$1;var y1_title = cljs.core.get.call(null,map__20796__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20796__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (p1__20760_SHARP_){return ((1900) + p1__20760_SHARP_);
});})(map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (p1__20759_SHARP_){return p1__20759_SHARP_.getYear();
});})(map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (p1__20758_SHARP_){return (new Date(p1__20758_SHARP_));
});})(map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function iter__20797(s__20798){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (){var s__20798__$1 = s__20798;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20798__$1);if(temp__4126__auto__)
{var s__20798__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20798__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20798__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20800 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20799 = (0);while(true){
if((i__20799 < size__4376__auto__))
{var map__20811 = cljs.core._nth.call(null,c__4375__auto__,i__20799);var map__20811__$1 = ((cljs.core.seq_QMARK_.call(null,map__20811))?cljs.core.apply.call(null,cljs.core.hash_map,map__20811):map__20811);var metric_spec = map__20811__$1;var title = cljs.core.get.call(null,map__20811__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20811__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20811__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20800,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20799,map__20811,map__20811__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20800,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function iter__20812(s__20813){return (new cljs.core.LazySeq(null,((function (i__20799,map__20811,map__20811__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20800,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (){var s__20813__$1 = s__20813;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20813__$1);if(temp__4126__auto____$1)
{var s__20813__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20813__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20813__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20815 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20814 = (0);while(true){
if((i__20814 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20814);cljs.core.chunk_append.call(null,b__20815,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20825 = (i__20814 + (1));
i__20814 = G__20825;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20815),iter__20812.call(null,cljs.core.chunk_rest.call(null,s__20813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20815),null);
}
} else
{var record = cljs.core.first.call(null,s__20813__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20812.call(null,cljs.core.rest.call(null,s__20813__$2)));
}
} else
{return null;
}
break;
}
});})(i__20799,map__20811,map__20811__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20800,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20799,map__20811,map__20811__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20800,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20826 = (i__20799 + (1));
i__20799 = G__20826;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20800),iter__20797.call(null,cljs.core.chunk_rest.call(null,s__20798__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20800),null);
}
} else
{var map__20816 = cljs.core.first.call(null,s__20798__$2);var map__20816__$1 = ((cljs.core.seq_QMARK_.call(null,map__20816))?cljs.core.apply.call(null,cljs.core.hash_map,map__20816):map__20816);var metric_spec = map__20816__$1;var title = cljs.core.get.call(null,map__20816__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20816__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20816__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20816,map__20816__$1,metric_spec,title,metric,variable,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function iter__20817(s__20818){return (new cljs.core.LazySeq(null,((function (map__20816,map__20816__$1,metric_spec,title,metric,variable,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (){var s__20818__$1 = s__20818;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20818__$1);if(temp__4126__auto____$1)
{var s__20818__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20818__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20818__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20820 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20819 = (0);while(true){
if((i__20819 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20819);cljs.core.chunk_append.call(null,b__20820,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20827 = (i__20819 + (1));
i__20819 = G__20827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20820),iter__20817.call(null,cljs.core.chunk_rest.call(null,s__20818__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20820),null);
}
} else
{var record = cljs.core.first.call(null,s__20818__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20817.call(null,cljs.core.rest.call(null,s__20818__$2)));
}
} else
{return null;
}
break;
}
});})(map__20816,map__20816__$1,metric_spec,title,metric,variable,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20816,map__20816__$1,metric_spec,title,metric,variable,s__20798__$2,temp__4126__auto__,x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20797.call(null,cljs.core.rest.call(null,s__20798__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function iter__20821(s__20822){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title){
return (function (){var s__20822__$1 = s__20822;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20822__$1);if(temp__4126__auto__)
{var s__20822__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20822__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20822__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20824 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20823 = (0);while(true){
if((i__20823 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20823);cljs.core.chunk_append.call(null,b__20824,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20828 = (i__20823 + (1));
i__20823 = G__20828;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20824),iter__20821.call(null,cljs.core.chunk_rest.call(null,s__20822__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20824),null);
}
} else
{var y = cljs.core.first.call(null,s__20822__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20821.call(null,cljs.core.rest.call(null,s__20822__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20794,map__20794__$1,map__20795,map__20795__$1,metrics,color,records,map__20796,map__20796__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20949 = schema.utils.use_fn_validation;var output_schema20830_20950 = schema.core.Any;var input_schema20831_20951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20832_20952 = schema.core.checker.call(null,input_schema20831_20951);var output_checker20833_20953 = schema.core.checker.call(null,output_schema20830_20950);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function timeline_chart(G__20834,G__20835,G__20836){var validate__6034__auto__ = ufv___20949.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20954 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20834,G__20835,G__20836], null);var temp__4126__auto___20955 = input_checker20832_20952.call(null,args__6035__auto___20954);if(cljs.core.truth_(temp__4126__auto___20955))
{var error__6036__auto___20956 = temp__4126__auto___20955;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20956)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20956,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20954,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20831_20951,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20896 = G__20834;var map__20898 = G__20896;var map__20898__$1 = ((cljs.core.seq_QMARK_.call(null,map__20898))?cljs.core.apply.call(null,cljs.core.hash_map,map__20898):map__20898);var map__20899 = cljs.core.get.call(null,map__20898__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20899__$1 = ((cljs.core.seq_QMARK_.call(null,map__20899))?cljs.core.apply.call(null,cljs.core.hash_map,map__20899):map__20899);var timeline_chart__$1 = map__20899__$1;var query = cljs.core.get.call(null,map__20899__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20899__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20898__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20835;var G__20897 = G__20836;var map__20900 = G__20897;var map__20900__$1 = ((cljs.core.seq_QMARK_.call(null,map__20900))?cljs.core.apply.call(null,cljs.core.hash_map,map__20900):map__20900);var opts = map__20900__$1;var id = cljs.core.get.call(null,map__20900__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20896__$1 = G__20896;var owner__$1 = owner;var G__20897__$1 = G__20897;while(true){
var map__20901 = G__20896__$1;var map__20901__$1 = ((cljs.core.seq_QMARK_.call(null,map__20901))?cljs.core.apply.call(null,cljs.core.hash_map,map__20901):map__20901);var map__20902 = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20902__$1 = ((cljs.core.seq_QMARK_.call(null,map__20902))?cljs.core.apply.call(null,cljs.core.hash_map,map__20902):map__20902);var timeline_chart__$2 = map__20902__$1;var query__$1 = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20903 = G__20897__$1;var map__20903__$1 = ((cljs.core.seq_QMARK_.call(null,map__20903))?cljs.core.apply.call(null,cljs.core.hash_map,map__20903):map__20903);var opts__$1 = map__20903__$1;var id__$1 = cljs.core.get.call(null,map__20903__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20904 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20904 = (function (map__20902,query,input_schema20831,owner,G__20836,map__20898,G__20896,map__20903,input_checker20832,timeline_data,filter_spec,G__20835,map__20899,map__20901,G__20897,output_checker20833,G__20834,map__20900,output_schema20830,validate__6034__auto__,id,timeline_chart,opts,ufv__,meta20905){
this.map__20902 = map__20902;
this.query = query;
this.input_schema20831 = input_schema20831;
this.owner = owner;
this.G__20836 = G__20836;
this.map__20898 = map__20898;
this.G__20896 = G__20896;
this.map__20903 = map__20903;
this.input_checker20832 = input_checker20832;
this.timeline_data = timeline_data;
this.filter_spec = filter_spec;
this.G__20835 = G__20835;
this.map__20899 = map__20899;
this.map__20901 = map__20901;
this.G__20897 = G__20897;
this.output_checker20833 = output_checker20833;
this.G__20834 = G__20834;
this.map__20900 = map__20900;
this.output_schema20830 = output_schema20830;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20905 = meta20905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20904.cljs$lang$type = true;
clustermap.components.timeline_chart.t20904.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20904";
clustermap.components.timeline_chart.t20904.cljs$lang$ctorPrWriter = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20904");
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.t20904.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20904.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.t20904.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20904.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (_,p__20907,___$1){var self__ = this;
var map__20908 = p__20907;var map__20908__$1 = ((cljs.core.seq_QMARK_.call(null,map__20908))?cljs.core.apply.call(null,cljs.core.hash_map,map__20908):map__20908);var map__20909 = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20909__$1 = ((cljs.core.seq_QMARK_.call(null,map__20909))?cljs.core.apply.call(null,cljs.core.hash_map,map__20909):map__20909);var prev_query = cljs.core.get.call(null,map__20909__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20909__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.t20904.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20904.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (_,p__20910,p__20911){var self__ = this;
var map__20912 = p__20910;var map__20912__$1 = ((cljs.core.seq_QMARK_.call(null,map__20912))?cljs.core.apply.call(null,cljs.core.hash_map,map__20912):map__20912);var map__20913 = cljs.core.get.call(null,map__20912__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20913__$1 = ((cljs.core.seq_QMARK_.call(null,map__20913))?cljs.core.apply.call(null,cljs.core.hash_map,map__20913):map__20913);var next_query = cljs.core.get.call(null,map__20913__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20913__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20912__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20914 = p__20911;var map__20914__$1 = ((cljs.core.seq_QMARK_.call(null,map__20914))?cljs.core.apply.call(null,cljs.core.hash_map,map__20914):map__20914);var fetch_data_fn = cljs.core.get.call(null,map__20914__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20912,map__20912__$1,map__20913,map__20913__$1,next_query,next_timeline_data,next_filter_spec,map__20914,map__20914__$1,fetch_data_fn,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20912,map__20912__$1,map__20913,map__20913__$1,next_query,next_timeline_data,next_filter_spec,map__20914,map__20914__$1,fetch_data_fn,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (state_20933){var state_val_20934 = (state_20933[(1)]);if((state_val_20934 === (5)))
{var inst_20931 = (state_20933[(2)]);var state_20933__$1 = state_20933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20933__$1,inst_20931);
} else
{if((state_val_20934 === (4)))
{var state_20933__$1 = state_20933;var statearr_20935_20957 = state_20933__$1;(statearr_20935_20957[(2)] = null);
(statearr_20935_20957[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20934 === (3)))
{var inst_20917 = (state_20933[(7)]);var inst_20919 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20920 = ["TIMELINE DATA",inst_20917];var inst_20921 = (new cljs.core.PersistentVector(null,2,(5),inst_20919,inst_20920,null));var inst_20922 = cljs.core.clj__GT_js.call(null,inst_20921);var inst_20923 = console.log(inst_20922);var inst_20924 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20925 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20926 = (new cljs.core.PersistentVector(null,1,(5),inst_20924,inst_20925,null));var inst_20927 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20917);var inst_20928 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20926,inst_20927);var state_20933__$1 = (function (){var statearr_20936 = state_20933;(statearr_20936[(8)] = inst_20923);
return statearr_20936;
})();var statearr_20937_20958 = state_20933__$1;(statearr_20937_20958[(2)] = inst_20928);
(statearr_20937_20958[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20934 === (2)))
{var inst_20917 = (state_20933[(7)]);var inst_20917__$1 = (state_20933[(2)]);var state_20933__$1 = (function (){var statearr_20938 = state_20933;(statearr_20938[(7)] = inst_20917__$1);
return statearr_20938;
})();if(cljs.core.truth_(inst_20917__$1))
{var statearr_20939_20959 = state_20933__$1;(statearr_20939_20959[(1)] = (3));
} else
{var statearr_20940_20960 = state_20933__$1;(statearr_20940_20960[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20934 === (1)))
{var inst_20915 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20933__$1 = state_20933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20933__$1,(2),inst_20915);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20912,map__20912__$1,map__20913,map__20913__$1,next_query,next_timeline_data,next_filter_spec,map__20914,map__20914__$1,fetch_data_fn,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20912,map__20912__$1,map__20913,map__20913__$1,next_query,next_timeline_data,next_filter_spec,map__20914,map__20914__$1,fetch_data_fn,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20944 = [null,null,null,null,null,null,null,null,null];(statearr_20944[(0)] = state_machine__9111__auto__);
(statearr_20944[(1)] = (1));
return statearr_20944;
});
var state_machine__9111__auto____1 = (function (state_20933){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20933);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20945){if((e20945 instanceof Object))
{var ex__9114__auto__ = e20945;var statearr_20946_20961 = state_20933;(statearr_20946_20961[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20945;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20962 = state_20933;
state_20933 = G__20962;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20933){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20912,map__20912__$1,map__20913,map__20913__$1,next_query,next_timeline_data,next_filter_spec,map__20914,map__20914__$1,fetch_data_fn,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
})();var state__9127__auto__ = (function (){var statearr_20947 = f__9126__auto__.call(null);(statearr_20947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20912,map__20912__$1,map__20913,map__20913__$1,next_query,next_timeline_data,next_filter_spec,map__20914,map__20914__$1,fetch_data_fn,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.t20904.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20904.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20948 = om.core.get_node.call(null,self__.owner,"chart");var G__20948__$1 = (((G__20948 == null))?null:jayq.core.$.call(null,G__20948));var G__20948__$2 = (((G__20948__$1 == null))?null:G__20948__$1.highcharts());var G__20948__$3 = (((G__20948__$2 == null))?null:G__20948__$2.reflow());return G__20948__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
);
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.t20904.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20904.prototype.om$core$IRender$render$arity$1 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.t20904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (_20906){var self__ = this;
var _20906__$1 = this;return self__.meta20905;
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.t20904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function (_20906,meta20905__$1){var self__ = this;
var _20906__$1 = this;return (new clustermap.components.timeline_chart.t20904(self__.map__20902,self__.query,self__.input_schema20831,self__.owner,self__.G__20836,self__.map__20898,self__.G__20896,self__.map__20903,self__.input_checker20832,self__.timeline_data,self__.filter_spec,self__.G__20835,self__.map__20899,self__.map__20901,self__.G__20897,self__.output_checker20833,self__.G__20834,self__.map__20900,self__.output_schema20830,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.opts,self__.ufv__,meta20905__$1));
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
clustermap.components.timeline_chart.__GT_t20904 = ((function (map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953){
return (function __GT_t20904(map__20902__$2,query__$2,input_schema20831__$1,owner__$3,G__20836__$1,map__20898__$2,G__20896__$2,map__20903__$2,input_checker20832__$1,timeline_data__$2,filter_spec__$2,G__20835__$1,map__20899__$2,map__20901__$2,G__20897__$2,output_checker20833__$1,G__20834__$1,map__20900__$2,output_schema20830__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,meta20905){return (new clustermap.components.timeline_chart.t20904(map__20902__$2,query__$2,input_schema20831__$1,owner__$3,G__20836__$1,map__20898__$2,G__20896__$2,map__20903__$2,input_checker20832__$1,timeline_data__$2,filter_spec__$2,G__20835__$1,map__20899__$2,map__20901__$2,G__20897__$2,output_checker20833__$1,G__20834__$1,map__20900__$2,output_schema20830__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,meta20905));
});})(map__20901,map__20901__$1,map__20902,map__20902__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20903,map__20903__$1,opts__$1,id__$1,G__20896,map__20898,map__20898__$1,map__20899,map__20899__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20897,map__20900,map__20900__$1,opts,id,validate__6034__auto__,ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
}
return (new clustermap.components.timeline_chart.t20904(map__20902__$1,query__$1,input_schema20831_20951,owner__$2,G__20836,map__20898__$1,G__20896__$1,map__20903__$1,input_checker20832_20952,timeline_data__$1,filter_spec__$1,G__20835,map__20899__$1,map__20901__$1,G__20897__$1,output_checker20833_20953,G__20834,map__20900__$1,output_schema20830_20950,validate__6034__auto__,id__$1,timeline_chart__$2,opts__$1,ufv___20949,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20963 = output_checker20833_20953.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20963))
{var error__6036__auto___20964 = temp__4126__auto___20963;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20964)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20964,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20830_20950,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20949,output_schema20830_20950,input_schema20831_20951,input_checker20832_20952,output_checker20833_20953))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20830_20950,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20831_20951], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20829){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20829);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20829){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
