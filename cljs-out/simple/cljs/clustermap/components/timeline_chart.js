// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.ordered_resource');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__23239,records,p__23240){var map__23271 = p__23239;var map__23271__$1 = ((cljs.core.seq_QMARK_.call(null,map__23271))?cljs.core.apply.call(null,cljs.core.hash_map,map__23271):map__23271);var metrics = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__23272 = p__23240;var map__23272__$1 = ((cljs.core.seq_QMARK_.call(null,map__23272))?cljs.core.apply.call(null,cljs.core.hash_map,map__23272):map__23272);var opts = map__23272__$1;var y1_title = cljs.core.get.call(null,map__23272__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__23272__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (p1__23238_SHARP_){return ((1900) + p1__23238_SHARP_);
});})(map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (p1__23237_SHARP_){return p1__23237_SHARP_.getYear();
});})(map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (p1__23236_SHARP_){return (new Date(p1__23236_SHARP_));
});})(map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function iter__23273(s__23274){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (){var s__23274__$1 = s__23274;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23274__$1);if(temp__4126__auto__)
{var s__23274__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23274__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__23274__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__23276 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__23275 = (0);while(true){
if((i__23275 < size__4376__auto__))
{var map__23287 = cljs.core._nth.call(null,c__4375__auto__,i__23275);var map__23287__$1 = ((cljs.core.seq_QMARK_.call(null,map__23287))?cljs.core.apply.call(null,cljs.core.hash_map,map__23287):map__23287);var metric_spec = map__23287__$1;var title = cljs.core.get.call(null,map__23287__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__23287__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__23287__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__23276,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__23275,map__23287,map__23287__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__23276,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function iter__23288(s__23289){return (new cljs.core.LazySeq(null,((function (i__23275,map__23287,map__23287__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__23276,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (){var s__23289__$1 = s__23289;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23289__$1);if(temp__4126__auto____$1)
{var s__23289__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23289__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__23289__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__23291 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__23290 = (0);while(true){
if((i__23290 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__23290);cljs.core.chunk_append.call(null,b__23291,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__23301 = (i__23290 + (1));
i__23290 = G__23301;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23291),iter__23288.call(null,cljs.core.chunk_rest.call(null,s__23289__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23291),null);
}
} else
{var record = cljs.core.first.call(null,s__23289__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__23288.call(null,cljs.core.rest.call(null,s__23289__$2)));
}
} else
{return null;
}
break;
}
});})(i__23275,map__23287,map__23287__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__23276,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
,null,null));
});})(i__23275,map__23287,map__23287__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__23276,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__23302 = (i__23275 + (1));
i__23275 = G__23302;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23276),iter__23273.call(null,cljs.core.chunk_rest.call(null,s__23274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23276),null);
}
} else
{var map__23292 = cljs.core.first.call(null,s__23274__$2);var map__23292__$1 = ((cljs.core.seq_QMARK_.call(null,map__23292))?cljs.core.apply.call(null,cljs.core.hash_map,map__23292):map__23292);var metric_spec = map__23292__$1;var title = cljs.core.get.call(null,map__23292__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__23292__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__23292__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__23292,map__23292__$1,metric_spec,title,metric,variable,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function iter__23293(s__23294){return (new cljs.core.LazySeq(null,((function (map__23292,map__23292__$1,metric_spec,title,metric,variable,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (){var s__23294__$1 = s__23294;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23294__$1);if(temp__4126__auto____$1)
{var s__23294__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23294__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__23294__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__23296 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__23295 = (0);while(true){
if((i__23295 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__23295);cljs.core.chunk_append.call(null,b__23296,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__23303 = (i__23295 + (1));
i__23295 = G__23303;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23296),iter__23293.call(null,cljs.core.chunk_rest.call(null,s__23294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23296),null);
}
} else
{var record = cljs.core.first.call(null,s__23294__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__23293.call(null,cljs.core.rest.call(null,s__23294__$2)));
}
} else
{return null;
}
break;
}
});})(map__23292,map__23292__$1,metric_spec,title,metric,variable,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
,null,null));
});})(map__23292,map__23292__$1,metric_spec,title,metric,variable,s__23274__$2,temp__4126__auto__,x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__23273.call(null,cljs.core.rest.call(null,s__23274__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function iter__23297(s__23298){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title){
return (function (){var s__23298__$1 = s__23298;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23298__$1);if(temp__4126__auto__)
{var s__23298__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23298__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__23298__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__23300 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__23299 = (0);while(true){
if((i__23299 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__23299);cljs.core.chunk_append.call(null,b__23300,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__23304 = (i__23299 + (1));
i__23299 = G__23304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23300),iter__23297.call(null,cljs.core.chunk_rest.call(null,s__23298__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23300),null);
}
} else
{var y = cljs.core.first.call(null,s__23298__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__23297.call(null,cljs.core.rest.call(null,s__23298__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__23271,map__23271__$1,metrics,map__23272,map__23272__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
clustermap.components.timeline_chart.request_timeline_data = (function request_timeline_data(resource,query,filter_spec){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.timeline,query,filter_spec);
});
var ufv___23363 = schema.utils.use_fn_validation;var output_schema23306_23364 = schema.core.Any;var input_schema23307_23365 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker23308_23366 = schema.core.checker.call(null,input_schema23307_23365);var output_checker23309_23367 = schema.core.checker.call(null,output_schema23306_23364);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function timeline_chart(G__23310,G__23311,G__23312){var validate__6034__auto__ = ufv___23363.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___23368 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23310,G__23311,G__23312], null);var temp__4126__auto___23369 = input_checker23308_23366.call(null,args__6035__auto___23368);if(cljs.core.truth_(temp__4126__auto___23369))
{var error__6036__auto___23370 = temp__4126__auto___23369;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___23370)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___23370,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___23368,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23307_23365,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__23341 = G__23310;var map__23343 = G__23341;var map__23343__$1 = ((cljs.core.seq_QMARK_.call(null,map__23343))?cljs.core.apply.call(null,cljs.core.hash_map,map__23343):map__23343);var map__23344 = cljs.core.get.call(null,map__23343__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__23344__$1 = ((cljs.core.seq_QMARK_.call(null,map__23344))?cljs.core.apply.call(null,cljs.core.hash_map,map__23344):map__23344);var timeline_chart__$1 = map__23344__$1;var query = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__23344__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__23343__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__23311;var G__23342 = G__23312;var map__23345 = G__23342;var map__23345__$1 = ((cljs.core.seq_QMARK_.call(null,map__23345))?cljs.core.apply.call(null,cljs.core.hash_map,map__23345):map__23345);var opts = map__23345__$1;var id = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__23341__$1 = G__23341;var owner__$1 = owner;var G__23342__$1 = G__23342;while(true){
var map__23346 = G__23341__$1;var map__23346__$1 = ((cljs.core.seq_QMARK_.call(null,map__23346))?cljs.core.apply.call(null,cljs.core.hash_map,map__23346):map__23346);var map__23347 = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__23347__$1 = ((cljs.core.seq_QMARK_.call(null,map__23347))?cljs.core.apply.call(null,cljs.core.hash_map,map__23347):map__23347);var timeline_chart__$2 = map__23347__$1;var query__$1 = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__23348 = G__23342__$1;var map__23348__$1 = ((cljs.core.seq_QMARK_.call(null,map__23348))?cljs.core.apply.call(null,cljs.core.hash_map,map__23348):map__23348);var opts__$1 = map__23348__$1;var id__$1 = cljs.core.get.call(null,map__23348__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t23349 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t23349 = (function (map__23348,query,G__23342,owner,G__23312,map__23344,timeline_data,input_schema23307,map__23343,map__23345,filter_spec,G__23311,map__23347,map__23346,input_checker23308,validate__6034__auto__,id,timeline_chart,output_checker23309,opts,ufv__,G__23310,G__23341,output_schema23306,meta23350){
this.map__23348 = map__23348;
this.query = query;
this.G__23342 = G__23342;
this.owner = owner;
this.G__23312 = G__23312;
this.map__23344 = map__23344;
this.timeline_data = timeline_data;
this.input_schema23307 = input_schema23307;
this.map__23343 = map__23343;
this.map__23345 = map__23345;
this.filter_spec = filter_spec;
this.G__23311 = G__23311;
this.map__23347 = map__23347;
this.map__23346 = map__23346;
this.input_checker23308 = input_checker23308;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.output_checker23309 = output_checker23309;
this.opts = opts;
this.ufv__ = ufv__;
this.G__23310 = G__23310;
this.G__23341 = G__23341;
this.output_schema23306 = output_schema23306;
this.meta23350 = meta23350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t23349.cljs$lang$type = true;
clustermap.components.timeline_chart.t23349.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t23349";
clustermap.components.timeline_chart.t23349.cljs$lang$ctorPrWriter = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t23349");
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.t23349.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t23349.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.t23349.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t23349.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (_,p__23352,___$1){var self__ = this;
var map__23353 = p__23352;var map__23353__$1 = ((cljs.core.seq_QMARK_.call(null,map__23353))?cljs.core.apply.call(null,cljs.core.hash_map,map__23353):map__23353);var map__23354 = cljs.core.get.call(null,map__23353__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__23354__$1 = ((cljs.core.seq_QMARK_.call(null,map__23354))?cljs.core.apply.call(null,cljs.core.hash_map,map__23354):map__23354);var prev_query = cljs.core.get.call(null,map__23354__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__23354__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__23353__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.t23349.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t23349.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (_,p__23355,p__23356){var self__ = this;
var map__23357 = p__23355;var map__23357__$1 = ((cljs.core.seq_QMARK_.call(null,map__23357))?cljs.core.apply.call(null,cljs.core.hash_map,map__23357):map__23357);var map__23358 = cljs.core.get.call(null,map__23357__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__23358__$1 = ((cljs.core.seq_QMARK_.call(null,map__23358))?cljs.core.apply.call(null,cljs.core.hash_map,map__23358):map__23358);var next_query = cljs.core.get.call(null,map__23358__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__23358__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__23357__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__23359 = p__23356;var map__23359__$1 = ((cljs.core.seq_QMARK_.call(null,map__23359))?cljs.core.apply.call(null,cljs.core.hash_map,map__23359):map__23359);var next_timeline_data_resource = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.timeline_chart.request_timeline_data.call(null,next_timeline_data_resource,next_query,next_filter_spec);
} else
{return null;
}
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.t23349.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t23349.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"timeline-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,last_dims,w,h,___$1,map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (p__23360){var map__23361 = p__23360;var map__23361__$1 = ((cljs.core.seq_QMARK_.call(null,map__23361))?cljs.core.apply.call(null,cljs.core.hash_map,map__23361):map__23361);var response = map__23361__$1;var records = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE RESPONSE: ",response], null)));
return om.core.update_BANG_.call(null,self__.timeline_chart,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)], null),records);
});})(node,tdr,last_dims,w,h,___$1,map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,last_dims,w,h,___$1,map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__23362 = om.core.get_node.call(null,self__.owner,"chart");var G__23362__$1 = (((G__23362 == null))?null:jayq.core.$.call(null,G__23362));var G__23362__$2 = (((G__23362__$1 == null))?null:G__23362__$1.highcharts());var G__23362__$3 = (((G__23362__$2 == null))?null:G__23362__$2.reflow());return G__23362__$3;
} else
{return null;
}
});})(node,tdr,last_dims,w,h,___$1,map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
);
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.t23349.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t23349.prototype.om$core$IRender$render$arity$1 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.t23349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (_23351){var self__ = this;
var _23351__$1 = this;return self__.meta23350;
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.t23349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function (_23351,meta23350__$1){var self__ = this;
var _23351__$1 = this;return (new clustermap.components.timeline_chart.t23349(self__.map__23348,self__.query,self__.G__23342,self__.owner,self__.G__23312,self__.map__23344,self__.timeline_data,self__.input_schema23307,self__.map__23343,self__.map__23345,self__.filter_spec,self__.G__23311,self__.map__23347,self__.map__23346,self__.input_checker23308,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.output_checker23309,self__.opts,self__.ufv__,self__.G__23310,self__.G__23341,self__.output_schema23306,meta23350__$1));
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
clustermap.components.timeline_chart.__GT_t23349 = ((function (map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367){
return (function __GT_t23349(map__23348__$2,query__$2,G__23342__$2,owner__$3,G__23312__$1,map__23344__$2,timeline_data__$2,input_schema23307__$1,map__23343__$2,map__23345__$2,filter_spec__$2,G__23311__$1,map__23347__$2,map__23346__$2,input_checker23308__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,output_checker23309__$1,opts__$2,ufv____$1,G__23310__$1,G__23341__$2,output_schema23306__$1,meta23350){return (new clustermap.components.timeline_chart.t23349(map__23348__$2,query__$2,G__23342__$2,owner__$3,G__23312__$1,map__23344__$2,timeline_data__$2,input_schema23307__$1,map__23343__$2,map__23345__$2,filter_spec__$2,G__23311__$1,map__23347__$2,map__23346__$2,input_checker23308__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,output_checker23309__$1,opts__$2,ufv____$1,G__23310__$1,G__23341__$2,output_schema23306__$1,meta23350));
});})(map__23346,map__23346__$1,map__23347,map__23347__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__23348,map__23348__$1,opts__$1,id__$1,G__23341,map__23343,map__23343__$1,map__23344,map__23344__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__23342,map__23345,map__23345__$1,opts,id,validate__6034__auto__,ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
}
return (new clustermap.components.timeline_chart.t23349(map__23348__$1,query__$1,G__23342__$1,owner__$2,G__23312,map__23344__$1,timeline_data__$1,input_schema23307_23365,map__23343__$1,map__23345__$1,filter_spec__$1,G__23311,map__23347__$1,map__23346__$1,input_checker23308_23366,validate__6034__auto__,id__$1,timeline_chart__$2,output_checker23309_23367,opts__$1,ufv___23363,G__23310,G__23341__$1,output_schema23306_23364,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___23371 = output_checker23309_23367.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___23371))
{var error__6036__auto___23372 = temp__4126__auto___23371;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___23372)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___23372,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23306_23364,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___23363,output_schema23306_23364,input_schema23307_23365,input_checker23308_23366,output_checker23309_23367))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema23306_23364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23307_23365], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m23305){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m23305);
});
__GT_timeline_chart = function(cursor__7850__auto__,m23305){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m23305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
