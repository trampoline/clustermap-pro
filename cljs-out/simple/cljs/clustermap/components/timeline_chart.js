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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20169,records,p__20170){var map__20201 = p__20169;var map__20201__$1 = ((cljs.core.seq_QMARK_.call(null,map__20201))?cljs.core.apply.call(null,cljs.core.hash_map,map__20201):map__20201);var metrics = cljs.core.get.call(null,map__20201__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__20202 = p__20170;var map__20202__$1 = ((cljs.core.seq_QMARK_.call(null,map__20202))?cljs.core.apply.call(null,cljs.core.hash_map,map__20202):map__20202);var opts = map__20202__$1;var y1_title = cljs.core.get.call(null,map__20202__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20202__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (p1__20168_SHARP_){return ((1900) + p1__20168_SHARP_);
});})(map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (p1__20167_SHARP_){return p1__20167_SHARP_.getYear();
});})(map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (p1__20166_SHARP_){return (new Date(p1__20166_SHARP_));
});})(map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function iter__20203(s__20204){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (){var s__20204__$1 = s__20204;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20204__$1);if(temp__4126__auto__)
{var s__20204__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20204__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20204__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20206 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20205 = (0);while(true){
if((i__20205 < size__4376__auto__))
{var map__20217 = cljs.core._nth.call(null,c__4375__auto__,i__20205);var map__20217__$1 = ((cljs.core.seq_QMARK_.call(null,map__20217))?cljs.core.apply.call(null,cljs.core.hash_map,map__20217):map__20217);var metric_spec = map__20217__$1;var title = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20206,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20205,map__20217,map__20217__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20206,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function iter__20218(s__20219){return (new cljs.core.LazySeq(null,((function (i__20205,map__20217,map__20217__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20206,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (){var s__20219__$1 = s__20219;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20219__$1);if(temp__4126__auto____$1)
{var s__20219__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20219__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20219__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20221 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20220 = (0);while(true){
if((i__20220 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20220);cljs.core.chunk_append.call(null,b__20221,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20231 = (i__20220 + (1));
i__20220 = G__20231;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20221),iter__20218.call(null,cljs.core.chunk_rest.call(null,s__20219__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20221),null);
}
} else
{var record = cljs.core.first.call(null,s__20219__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20218.call(null,cljs.core.rest.call(null,s__20219__$2)));
}
} else
{return null;
}
break;
}
});})(i__20205,map__20217,map__20217__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20206,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20205,map__20217,map__20217__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20206,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20232 = (i__20205 + (1));
i__20205 = G__20232;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20206),iter__20203.call(null,cljs.core.chunk_rest.call(null,s__20204__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20206),null);
}
} else
{var map__20222 = cljs.core.first.call(null,s__20204__$2);var map__20222__$1 = ((cljs.core.seq_QMARK_.call(null,map__20222))?cljs.core.apply.call(null,cljs.core.hash_map,map__20222):map__20222);var metric_spec = map__20222__$1;var title = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20222,map__20222__$1,metric_spec,title,metric,variable,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function iter__20223(s__20224){return (new cljs.core.LazySeq(null,((function (map__20222,map__20222__$1,metric_spec,title,metric,variable,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (){var s__20224__$1 = s__20224;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20224__$1);if(temp__4126__auto____$1)
{var s__20224__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20224__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20224__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20226 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20225 = (0);while(true){
if((i__20225 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20225);cljs.core.chunk_append.call(null,b__20226,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20233 = (i__20225 + (1));
i__20225 = G__20233;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20226),iter__20223.call(null,cljs.core.chunk_rest.call(null,s__20224__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20226),null);
}
} else
{var record = cljs.core.first.call(null,s__20224__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20223.call(null,cljs.core.rest.call(null,s__20224__$2)));
}
} else
{return null;
}
break;
}
});})(map__20222,map__20222__$1,metric_spec,title,metric,variable,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20222,map__20222__$1,metric_spec,title,metric,variable,s__20204__$2,temp__4126__auto__,x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20203.call(null,cljs.core.rest.call(null,s__20204__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function iter__20227(s__20228){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title){
return (function (){var s__20228__$1 = s__20228;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20228__$1);if(temp__4126__auto__)
{var s__20228__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20228__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20228__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20230 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20229 = (0);while(true){
if((i__20229 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20229);cljs.core.chunk_append.call(null,b__20230,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20234 = (i__20229 + (1));
i__20229 = G__20234;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),iter__20227.call(null,cljs.core.chunk_rest.call(null,s__20228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20230),null);
}
} else
{var y = cljs.core.first.call(null,s__20228__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20227.call(null,cljs.core.rest.call(null,s__20228__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20201,map__20201__$1,metrics,map__20202,map__20202__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20355 = schema.utils.use_fn_validation;var output_schema20236_20356 = schema.core.Any;var input_schema20237_20357 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20238_20358 = schema.core.checker.call(null,input_schema20237_20357);var output_checker20239_20359 = schema.core.checker.call(null,output_schema20236_20356);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function timeline_chart(G__20240,G__20241,G__20242){var validate__6034__auto__ = ufv___20355.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20360 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20240,G__20241,G__20242], null);var temp__4126__auto___20361 = input_checker20238_20358.call(null,args__6035__auto___20360);if(cljs.core.truth_(temp__4126__auto___20361))
{var error__6036__auto___20362 = temp__4126__auto___20361;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20362)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20362,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20360,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20237_20357,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20302 = G__20240;var map__20304 = G__20302;var map__20304__$1 = ((cljs.core.seq_QMARK_.call(null,map__20304))?cljs.core.apply.call(null,cljs.core.hash_map,map__20304):map__20304);var map__20305 = cljs.core.get.call(null,map__20304__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20305__$1 = ((cljs.core.seq_QMARK_.call(null,map__20305))?cljs.core.apply.call(null,cljs.core.hash_map,map__20305):map__20305);var timeline_chart__$1 = map__20305__$1;var query = cljs.core.get.call(null,map__20305__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20305__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20304__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20241;var G__20303 = G__20242;var map__20306 = G__20303;var map__20306__$1 = ((cljs.core.seq_QMARK_.call(null,map__20306))?cljs.core.apply.call(null,cljs.core.hash_map,map__20306):map__20306);var opts = map__20306__$1;var id = cljs.core.get.call(null,map__20306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20302__$1 = G__20302;var owner__$1 = owner;var G__20303__$1 = G__20303;while(true){
var map__20307 = G__20302__$1;var map__20307__$1 = ((cljs.core.seq_QMARK_.call(null,map__20307))?cljs.core.apply.call(null,cljs.core.hash_map,map__20307):map__20307);var map__20308 = cljs.core.get.call(null,map__20307__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20308__$1 = ((cljs.core.seq_QMARK_.call(null,map__20308))?cljs.core.apply.call(null,cljs.core.hash_map,map__20308):map__20308);var timeline_chart__$2 = map__20308__$1;var query__$1 = cljs.core.get.call(null,map__20308__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20308__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20307__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20309 = G__20303__$1;var map__20309__$1 = ((cljs.core.seq_QMARK_.call(null,map__20309))?cljs.core.apply.call(null,cljs.core.hash_map,map__20309):map__20309);var opts__$1 = map__20309__$1;var id__$1 = cljs.core.get.call(null,map__20309__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20310 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20310 = (function (query,G__20241,output_schema20236,owner,map__20308,map__20309,G__20303,G__20302,input_checker20238,map__20306,G__20242,timeline_data,map__20305,filter_spec,map__20304,input_schema20237,output_checker20239,validate__6034__auto__,id,timeline_chart,opts,map__20307,ufv__,G__20240,meta20311){
this.query = query;
this.G__20241 = G__20241;
this.output_schema20236 = output_schema20236;
this.owner = owner;
this.map__20308 = map__20308;
this.map__20309 = map__20309;
this.G__20303 = G__20303;
this.G__20302 = G__20302;
this.input_checker20238 = input_checker20238;
this.map__20306 = map__20306;
this.G__20242 = G__20242;
this.timeline_data = timeline_data;
this.map__20305 = map__20305;
this.filter_spec = filter_spec;
this.map__20304 = map__20304;
this.input_schema20237 = input_schema20237;
this.output_checker20239 = output_checker20239;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.map__20307 = map__20307;
this.ufv__ = ufv__;
this.G__20240 = G__20240;
this.meta20311 = meta20311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20310.cljs$lang$type = true;
clustermap.components.timeline_chart.t20310.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20310";
clustermap.components.timeline_chart.t20310.cljs$lang$ctorPrWriter = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20310");
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.t20310.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20310.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.t20310.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20310.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (_,p__20313,___$1){var self__ = this;
var map__20314 = p__20313;var map__20314__$1 = ((cljs.core.seq_QMARK_.call(null,map__20314))?cljs.core.apply.call(null,cljs.core.hash_map,map__20314):map__20314);var map__20315 = cljs.core.get.call(null,map__20314__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20315__$1 = ((cljs.core.seq_QMARK_.call(null,map__20315))?cljs.core.apply.call(null,cljs.core.hash_map,map__20315):map__20315);var prev_query = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20314__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.t20310.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20310.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (_,p__20316,p__20317){var self__ = this;
var map__20318 = p__20316;var map__20318__$1 = ((cljs.core.seq_QMARK_.call(null,map__20318))?cljs.core.apply.call(null,cljs.core.hash_map,map__20318):map__20318);var map__20319 = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20319__$1 = ((cljs.core.seq_QMARK_.call(null,map__20319))?cljs.core.apply.call(null,cljs.core.hash_map,map__20319):map__20319);var next_query = cljs.core.get.call(null,map__20319__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20319__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20320 = p__20317;var map__20320__$1 = ((cljs.core.seq_QMARK_.call(null,map__20320))?cljs.core.apply.call(null,cljs.core.hash_map,map__20320):map__20320);var fetch_data_fn = cljs.core.get.call(null,map__20320__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20318,map__20318__$1,map__20319,map__20319__$1,next_query,next_timeline_data,next_filter_spec,map__20320,map__20320__$1,fetch_data_fn,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20318,map__20318__$1,map__20319,map__20319__$1,next_query,next_timeline_data,next_filter_spec,map__20320,map__20320__$1,fetch_data_fn,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (state_20339){var state_val_20340 = (state_20339[(1)]);if((state_val_20340 === (5)))
{var inst_20337 = (state_20339[(2)]);var state_20339__$1 = state_20339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20339__$1,inst_20337);
} else
{if((state_val_20340 === (4)))
{var state_20339__$1 = state_20339;var statearr_20341_20363 = state_20339__$1;(statearr_20341_20363[(2)] = null);
(statearr_20341_20363[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20340 === (3)))
{var inst_20323 = (state_20339[(7)]);var inst_20325 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20326 = ["TIMELINE DATA",inst_20323];var inst_20327 = (new cljs.core.PersistentVector(null,2,(5),inst_20325,inst_20326,null));var inst_20328 = cljs.core.clj__GT_js.call(null,inst_20327);var inst_20329 = console.log(inst_20328);var inst_20330 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20331 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20332 = (new cljs.core.PersistentVector(null,1,(5),inst_20330,inst_20331,null));var inst_20333 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20323);var inst_20334 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20332,inst_20333);var state_20339__$1 = (function (){var statearr_20342 = state_20339;(statearr_20342[(8)] = inst_20329);
return statearr_20342;
})();var statearr_20343_20364 = state_20339__$1;(statearr_20343_20364[(2)] = inst_20334);
(statearr_20343_20364[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20340 === (2)))
{var inst_20323 = (state_20339[(7)]);var inst_20323__$1 = (state_20339[(2)]);var state_20339__$1 = (function (){var statearr_20344 = state_20339;(statearr_20344[(7)] = inst_20323__$1);
return statearr_20344;
})();if(cljs.core.truth_(inst_20323__$1))
{var statearr_20345_20365 = state_20339__$1;(statearr_20345_20365[(1)] = (3));
} else
{var statearr_20346_20366 = state_20339__$1;(statearr_20346_20366[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20340 === (1)))
{var inst_20321 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20339__$1 = state_20339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20339__$1,(2),inst_20321);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20318,map__20318__$1,map__20319,map__20319__$1,next_query,next_timeline_data,next_filter_spec,map__20320,map__20320__$1,fetch_data_fn,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20318,map__20318__$1,map__20319,map__20319__$1,next_query,next_timeline_data,next_filter_spec,map__20320,map__20320__$1,fetch_data_fn,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20350 = [null,null,null,null,null,null,null,null,null];(statearr_20350[(0)] = state_machine__9111__auto__);
(statearr_20350[(1)] = (1));
return statearr_20350;
});
var state_machine__9111__auto____1 = (function (state_20339){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20339);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20351){if((e20351 instanceof Object))
{var ex__9114__auto__ = e20351;var statearr_20352_20367 = state_20339;(statearr_20352_20367[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20339);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20351;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20368 = state_20339;
state_20339 = G__20368;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20339){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20318,map__20318__$1,map__20319,map__20319__$1,next_query,next_timeline_data,next_filter_spec,map__20320,map__20320__$1,fetch_data_fn,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
})();var state__9127__auto__ = (function (){var statearr_20353 = f__9126__auto__.call(null);(statearr_20353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20318,map__20318__$1,map__20319,map__20319__$1,next_query,next_timeline_data,next_filter_spec,map__20320,map__20320__$1,fetch_data_fn,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.t20310.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20310.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20354 = om.core.get_node.call(null,self__.owner,"chart");var G__20354__$1 = (((G__20354 == null))?null:jayq.core.$.call(null,G__20354));var G__20354__$2 = (((G__20354__$1 == null))?null:G__20354__$1.highcharts());var G__20354__$3 = (((G__20354__$2 == null))?null:G__20354__$2.reflow());return G__20354__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
);
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.t20310.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20310.prototype.om$core$IRender$render$arity$1 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.t20310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (_20312){var self__ = this;
var _20312__$1 = this;return self__.meta20311;
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.t20310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function (_20312,meta20311__$1){var self__ = this;
var _20312__$1 = this;return (new clustermap.components.timeline_chart.t20310(self__.query,self__.G__20241,self__.output_schema20236,self__.owner,self__.map__20308,self__.map__20309,self__.G__20303,self__.G__20302,self__.input_checker20238,self__.map__20306,self__.G__20242,self__.timeline_data,self__.map__20305,self__.filter_spec,self__.map__20304,self__.input_schema20237,self__.output_checker20239,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.opts,self__.map__20307,self__.ufv__,self__.G__20240,meta20311__$1));
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
clustermap.components.timeline_chart.__GT_t20310 = ((function (map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359){
return (function __GT_t20310(query__$2,G__20241__$1,output_schema20236__$1,owner__$3,map__20308__$2,map__20309__$2,G__20303__$2,G__20302__$2,input_checker20238__$1,map__20306__$2,G__20242__$1,timeline_data__$2,map__20305__$2,filter_spec__$2,map__20304__$2,input_schema20237__$1,output_checker20239__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,map__20307__$2,ufv____$1,G__20240__$1,meta20311){return (new clustermap.components.timeline_chart.t20310(query__$2,G__20241__$1,output_schema20236__$1,owner__$3,map__20308__$2,map__20309__$2,G__20303__$2,G__20302__$2,input_checker20238__$1,map__20306__$2,G__20242__$1,timeline_data__$2,map__20305__$2,filter_spec__$2,map__20304__$2,input_schema20237__$1,output_checker20239__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,map__20307__$2,ufv____$1,G__20240__$1,meta20311));
});})(map__20307,map__20307__$1,map__20308,map__20308__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20309,map__20309__$1,opts__$1,id__$1,G__20302,map__20304,map__20304__$1,map__20305,map__20305__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20303,map__20306,map__20306__$1,opts,id,validate__6034__auto__,ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
}
return (new clustermap.components.timeline_chart.t20310(query__$1,G__20241,output_schema20236_20356,owner__$2,map__20308__$1,map__20309__$1,G__20303__$1,G__20302__$1,input_checker20238_20358,map__20306__$1,G__20242,timeline_data__$1,map__20305__$1,filter_spec__$1,map__20304__$1,input_schema20237_20357,output_checker20239_20359,validate__6034__auto__,id__$1,timeline_chart__$2,opts__$1,map__20307__$1,ufv___20355,G__20240,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20369 = output_checker20239_20359.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20369))
{var error__6036__auto___20370 = temp__4126__auto___20369;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20370)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20370,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20236_20356,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20355,output_schema20236_20356,input_schema20237_20357,input_checker20238_20358,output_checker20239_20359))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20236_20356,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20237_20357], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20235){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20235);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20235){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
