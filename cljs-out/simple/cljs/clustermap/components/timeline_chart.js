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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20002,records,p__20003){var map__20034 = p__20002;var map__20034__$1 = ((cljs.core.seq_QMARK_.call(null,map__20034))?cljs.core.apply.call(null,cljs.core.hash_map,map__20034):map__20034);var metrics = cljs.core.get.call(null,map__20034__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__20035 = p__20003;var map__20035__$1 = ((cljs.core.seq_QMARK_.call(null,map__20035))?cljs.core.apply.call(null,cljs.core.hash_map,map__20035):map__20035);var opts = map__20035__$1;var y1_title = cljs.core.get.call(null,map__20035__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20035__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (p1__20001_SHARP_){return ((1900) + p1__20001_SHARP_);
});})(map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (p1__20000_SHARP_){return p1__20000_SHARP_.getYear();
});})(map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (p1__19999_SHARP_){return (new Date(p1__19999_SHARP_));
});})(map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function iter__20036(s__20037){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (){var s__20037__$1 = s__20037;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20037__$1);if(temp__4126__auto__)
{var s__20037__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20037__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20037__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20039 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20038 = (0);while(true){
if((i__20038 < size__4376__auto__))
{var map__20050 = cljs.core._nth.call(null,c__4375__auto__,i__20038);var map__20050__$1 = ((cljs.core.seq_QMARK_.call(null,map__20050))?cljs.core.apply.call(null,cljs.core.hash_map,map__20050):map__20050);var metric_spec = map__20050__$1;var title = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20039,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20038,map__20050,map__20050__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20039,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function iter__20051(s__20052){return (new cljs.core.LazySeq(null,((function (i__20038,map__20050,map__20050__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20039,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (){var s__20052__$1 = s__20052;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20052__$1);if(temp__4126__auto____$1)
{var s__20052__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20052__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20052__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20054 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20053 = (0);while(true){
if((i__20053 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20053);cljs.core.chunk_append.call(null,b__20054,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20064 = (i__20053 + (1));
i__20053 = G__20064;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20054),iter__20051.call(null,cljs.core.chunk_rest.call(null,s__20052__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20054),null);
}
} else
{var record = cljs.core.first.call(null,s__20052__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20051.call(null,cljs.core.rest.call(null,s__20052__$2)));
}
} else
{return null;
}
break;
}
});})(i__20038,map__20050,map__20050__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20039,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20038,map__20050,map__20050__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20039,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20065 = (i__20038 + (1));
i__20038 = G__20065;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20039),iter__20036.call(null,cljs.core.chunk_rest.call(null,s__20037__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20039),null);
}
} else
{var map__20055 = cljs.core.first.call(null,s__20037__$2);var map__20055__$1 = ((cljs.core.seq_QMARK_.call(null,map__20055))?cljs.core.apply.call(null,cljs.core.hash_map,map__20055):map__20055);var metric_spec = map__20055__$1;var title = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20055__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20055,map__20055__$1,metric_spec,title,metric,variable,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function iter__20056(s__20057){return (new cljs.core.LazySeq(null,((function (map__20055,map__20055__$1,metric_spec,title,metric,variable,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (){var s__20057__$1 = s__20057;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20057__$1);if(temp__4126__auto____$1)
{var s__20057__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20057__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20057__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20059 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20058 = (0);while(true){
if((i__20058 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20058);cljs.core.chunk_append.call(null,b__20059,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20066 = (i__20058 + (1));
i__20058 = G__20066;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20059),iter__20056.call(null,cljs.core.chunk_rest.call(null,s__20057__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20059),null);
}
} else
{var record = cljs.core.first.call(null,s__20057__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20056.call(null,cljs.core.rest.call(null,s__20057__$2)));
}
} else
{return null;
}
break;
}
});})(map__20055,map__20055__$1,metric_spec,title,metric,variable,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20055,map__20055__$1,metric_spec,title,metric,variable,s__20037__$2,temp__4126__auto__,x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20036.call(null,cljs.core.rest.call(null,s__20037__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function iter__20060(s__20061){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title){
return (function (){var s__20061__$1 = s__20061;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20061__$1);if(temp__4126__auto__)
{var s__20061__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20061__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20061__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20063 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20062 = (0);while(true){
if((i__20062 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20062);cljs.core.chunk_append.call(null,b__20063,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20067 = (i__20062 + (1));
i__20062 = G__20067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20063),iter__20060.call(null,cljs.core.chunk_rest.call(null,s__20061__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20063),null);
}
} else
{var y = cljs.core.first.call(null,s__20061__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20060.call(null,cljs.core.rest.call(null,s__20061__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20034,map__20034__$1,metrics,map__20035,map__20035__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20188 = schema.utils.use_fn_validation;var output_schema20069_20189 = schema.core.Any;var input_schema20070_20190 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20071_20191 = schema.core.checker.call(null,input_schema20070_20190);var output_checker20072_20192 = schema.core.checker.call(null,output_schema20069_20189);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function timeline_chart(G__20073,G__20074,G__20075){var validate__6034__auto__ = ufv___20188.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20193 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20073,G__20074,G__20075], null);var temp__4126__auto___20194 = input_checker20071_20191.call(null,args__6035__auto___20193);if(cljs.core.truth_(temp__4126__auto___20194))
{var error__6036__auto___20195 = temp__4126__auto___20194;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20195,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20193,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20070_20190,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20135 = G__20073;var map__20137 = G__20135;var map__20137__$1 = ((cljs.core.seq_QMARK_.call(null,map__20137))?cljs.core.apply.call(null,cljs.core.hash_map,map__20137):map__20137);var map__20138 = cljs.core.get.call(null,map__20137__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20138__$1 = ((cljs.core.seq_QMARK_.call(null,map__20138))?cljs.core.apply.call(null,cljs.core.hash_map,map__20138):map__20138);var timeline_chart__$1 = map__20138__$1;var query = cljs.core.get.call(null,map__20138__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20138__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20137__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20074;var G__20136 = G__20075;var map__20139 = G__20136;var map__20139__$1 = ((cljs.core.seq_QMARK_.call(null,map__20139))?cljs.core.apply.call(null,cljs.core.hash_map,map__20139):map__20139);var opts = map__20139__$1;var id = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20135__$1 = G__20135;var owner__$1 = owner;var G__20136__$1 = G__20136;while(true){
var map__20140 = G__20135__$1;var map__20140__$1 = ((cljs.core.seq_QMARK_.call(null,map__20140))?cljs.core.apply.call(null,cljs.core.hash_map,map__20140):map__20140);var map__20141 = cljs.core.get.call(null,map__20140__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20141__$1 = ((cljs.core.seq_QMARK_.call(null,map__20141))?cljs.core.apply.call(null,cljs.core.hash_map,map__20141):map__20141);var timeline_chart__$2 = map__20141__$1;var query__$1 = cljs.core.get.call(null,map__20141__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20141__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20140__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20142 = G__20136__$1;var map__20142__$1 = ((cljs.core.seq_QMARK_.call(null,map__20142))?cljs.core.apply.call(null,cljs.core.hash_map,map__20142):map__20142);var opts__$1 = map__20142__$1;var id__$1 = cljs.core.get.call(null,map__20142__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20143 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20143 = (function (map__20137,output_schema20069,query,map__20138,owner,map__20142,input_checker20071,timeline_data,filter_spec,output_checker20072,G__20075,map__20141,G__20136,G__20074,G__20073,G__20135,validate__6034__auto__,id,timeline_chart,input_schema20070,map__20140,opts,map__20139,ufv__,meta20144){
this.map__20137 = map__20137;
this.output_schema20069 = output_schema20069;
this.query = query;
this.map__20138 = map__20138;
this.owner = owner;
this.map__20142 = map__20142;
this.input_checker20071 = input_checker20071;
this.timeline_data = timeline_data;
this.filter_spec = filter_spec;
this.output_checker20072 = output_checker20072;
this.G__20075 = G__20075;
this.map__20141 = map__20141;
this.G__20136 = G__20136;
this.G__20074 = G__20074;
this.G__20073 = G__20073;
this.G__20135 = G__20135;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.input_schema20070 = input_schema20070;
this.map__20140 = map__20140;
this.opts = opts;
this.map__20139 = map__20139;
this.ufv__ = ufv__;
this.meta20144 = meta20144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20143.cljs$lang$type = true;
clustermap.components.timeline_chart.t20143.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20143";
clustermap.components.timeline_chart.t20143.cljs$lang$ctorPrWriter = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20143");
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.t20143.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20143.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.t20143.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20143.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (_,p__20146,___$1){var self__ = this;
var map__20147 = p__20146;var map__20147__$1 = ((cljs.core.seq_QMARK_.call(null,map__20147))?cljs.core.apply.call(null,cljs.core.hash_map,map__20147):map__20147);var map__20148 = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20148__$1 = ((cljs.core.seq_QMARK_.call(null,map__20148))?cljs.core.apply.call(null,cljs.core.hash_map,map__20148):map__20148);var prev_query = cljs.core.get.call(null,map__20148__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20148__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.t20143.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20143.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (_,p__20149,p__20150){var self__ = this;
var map__20151 = p__20149;var map__20151__$1 = ((cljs.core.seq_QMARK_.call(null,map__20151))?cljs.core.apply.call(null,cljs.core.hash_map,map__20151):map__20151);var map__20152 = cljs.core.get.call(null,map__20151__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20152__$1 = ((cljs.core.seq_QMARK_.call(null,map__20152))?cljs.core.apply.call(null,cljs.core.hash_map,map__20152):map__20152);var next_query = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20152__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20151__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20153 = p__20150;var map__20153__$1 = ((cljs.core.seq_QMARK_.call(null,map__20153))?cljs.core.apply.call(null,cljs.core.hash_map,map__20153):map__20153);var fetch_data_fn = cljs.core.get.call(null,map__20153__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,map__20151,map__20151__$1,map__20152,map__20152__$1,next_query,next_timeline_data,next_filter_spec,map__20153,map__20153__$1,fetch_data_fn,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,map__20151,map__20151__$1,map__20152,map__20152__$1,next_query,next_timeline_data,next_filter_spec,map__20153,map__20153__$1,fetch_data_fn,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (state_20172){var state_val_20173 = (state_20172[(1)]);if((state_val_20173 === (5)))
{var inst_20170 = (state_20172[(2)]);var state_20172__$1 = state_20172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20172__$1,inst_20170);
} else
{if((state_val_20173 === (4)))
{var state_20172__$1 = state_20172;var statearr_20174_20196 = state_20172__$1;(statearr_20174_20196[(2)] = null);
(statearr_20174_20196[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20173 === (3)))
{var inst_20156 = (state_20172[(7)]);var inst_20158 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20159 = ["TIMELINE DATA",inst_20156];var inst_20160 = (new cljs.core.PersistentVector(null,2,(5),inst_20158,inst_20159,null));var inst_20161 = cljs.core.clj__GT_js.call(null,inst_20160);var inst_20162 = console.log(inst_20161);var inst_20163 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20164 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20165 = (new cljs.core.PersistentVector(null,1,(5),inst_20163,inst_20164,null));var inst_20166 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20156);var inst_20167 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20165,inst_20166);var state_20172__$1 = (function (){var statearr_20175 = state_20172;(statearr_20175[(8)] = inst_20162);
return statearr_20175;
})();var statearr_20176_20197 = state_20172__$1;(statearr_20176_20197[(2)] = inst_20167);
(statearr_20176_20197[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20173 === (2)))
{var inst_20156 = (state_20172[(7)]);var inst_20156__$1 = (state_20172[(2)]);var state_20172__$1 = (function (){var statearr_20177 = state_20172;(statearr_20177[(7)] = inst_20156__$1);
return statearr_20177;
})();if(cljs.core.truth_(inst_20156__$1))
{var statearr_20178_20198 = state_20172__$1;(statearr_20178_20198[(1)] = (3));
} else
{var statearr_20179_20199 = state_20172__$1;(statearr_20179_20199[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20173 === (1)))
{var inst_20154 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20172__$1 = state_20172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20172__$1,(2),inst_20154);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,___$1,map__20151,map__20151__$1,map__20152,map__20152__$1,next_query,next_timeline_data,next_filter_spec,map__20153,map__20153__$1,fetch_data_fn,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,map__20151,map__20151__$1,map__20152,map__20152__$1,next_query,next_timeline_data,next_filter_spec,map__20153,map__20153__$1,fetch_data_fn,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_20183 = [null,null,null,null,null,null,null,null,null];(statearr_20183[(0)] = state_machine__11099__auto__);
(statearr_20183[(1)] = (1));
return statearr_20183;
});
var state_machine__11099__auto____1 = (function (state_20172){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_20172);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e20184){if((e20184 instanceof Object))
{var ex__11102__auto__ = e20184;var statearr_20185_20200 = state_20172;(statearr_20185_20200[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20201 = state_20172;
state_20172 = G__20201;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_20172){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_20172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,map__20151,map__20151__$1,map__20152,map__20152__$1,next_query,next_timeline_data,next_filter_spec,map__20153,map__20153__$1,fetch_data_fn,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
})();var state__11156__auto__ = (function (){var statearr_20186 = f__11155__auto__.call(null);(statearr_20186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_20186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,map__20151,map__20151__$1,map__20152,map__20152__$1,next_query,next_timeline_data,next_filter_spec,map__20153,map__20153__$1,fetch_data_fn,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
);
return c__11154__auto__;
} else
{return null;
}
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.t20143.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20143.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20187 = om.core.get_node.call(null,self__.owner,"chart");var G__20187__$1 = (((G__20187 == null))?null:jayq.core.$.call(null,G__20187));var G__20187__$2 = (((G__20187__$1 == null))?null:G__20187__$1.highcharts());var G__20187__$3 = (((G__20187__$2 == null))?null:G__20187__$2.reflow());return G__20187__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
);
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.t20143.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20143.prototype.om$core$IRender$render$arity$1 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.t20143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (_20145){var self__ = this;
var _20145__$1 = this;return self__.meta20144;
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.t20143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function (_20145,meta20144__$1){var self__ = this;
var _20145__$1 = this;return (new clustermap.components.timeline_chart.t20143(self__.map__20137,self__.output_schema20069,self__.query,self__.map__20138,self__.owner,self__.map__20142,self__.input_checker20071,self__.timeline_data,self__.filter_spec,self__.output_checker20072,self__.G__20075,self__.map__20141,self__.G__20136,self__.G__20074,self__.G__20073,self__.G__20135,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.input_schema20070,self__.map__20140,self__.opts,self__.map__20139,self__.ufv__,meta20144__$1));
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
clustermap.components.timeline_chart.__GT_t20143 = ((function (map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192){
return (function __GT_t20143(map__20137__$2,output_schema20069__$1,query__$2,map__20138__$2,owner__$3,map__20142__$2,input_checker20071__$1,timeline_data__$2,filter_spec__$2,output_checker20072__$1,G__20075__$1,map__20141__$2,G__20136__$2,G__20074__$1,G__20073__$1,G__20135__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,input_schema20070__$1,map__20140__$2,opts__$2,map__20139__$2,ufv____$1,meta20144){return (new clustermap.components.timeline_chart.t20143(map__20137__$2,output_schema20069__$1,query__$2,map__20138__$2,owner__$3,map__20142__$2,input_checker20071__$1,timeline_data__$2,filter_spec__$2,output_checker20072__$1,G__20075__$1,map__20141__$2,G__20136__$2,G__20074__$1,G__20073__$1,G__20135__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,input_schema20070__$1,map__20140__$2,opts__$2,map__20139__$2,ufv____$1,meta20144));
});})(map__20140,map__20140__$1,map__20141,map__20141__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20142,map__20142__$1,opts__$1,id__$1,G__20135,map__20137,map__20137__$1,map__20138,map__20138__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20136,map__20139,map__20139__$1,opts,id,validate__6034__auto__,ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
}
return (new clustermap.components.timeline_chart.t20143(map__20137__$1,output_schema20069_20189,query__$1,map__20138__$1,owner__$2,map__20142__$1,input_checker20071_20191,timeline_data__$1,filter_spec__$1,output_checker20072_20192,G__20075,map__20141__$1,G__20136__$1,G__20074,G__20073,G__20135__$1,validate__6034__auto__,id__$1,timeline_chart__$2,input_schema20070_20190,map__20140__$1,opts__$1,map__20139__$1,ufv___20188,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20202 = output_checker20072_20192.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20202))
{var error__6036__auto___20203 = temp__4126__auto___20202;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20203)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20203,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20069_20189,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20188,output_schema20069_20189,input_schema20070_20190,input_checker20071_20191,output_checker20072_20192))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20069_20189,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20070_20190], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20068){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20068);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20068){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
