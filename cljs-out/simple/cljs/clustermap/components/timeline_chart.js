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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__19564,records,p__19565){var map__19596 = p__19564;var map__19596__$1 = ((cljs.core.seq_QMARK_.call(null,map__19596))?cljs.core.apply.call(null,cljs.core.hash_map,map__19596):map__19596);var metrics = cljs.core.get.call(null,map__19596__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__19597 = p__19565;var map__19597__$1 = ((cljs.core.seq_QMARK_.call(null,map__19597))?cljs.core.apply.call(null,cljs.core.hash_map,map__19597):map__19597);var opts = map__19597__$1;var y1_title = cljs.core.get.call(null,map__19597__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__19597__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (p1__19563_SHARP_){return ((1900) + p1__19563_SHARP_);
});})(map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (p1__19562_SHARP_){return p1__19562_SHARP_.getYear();
});})(map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (p1__19561_SHARP_){return (new Date(p1__19561_SHARP_));
});})(map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function iter__19598(s__19599){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (){var s__19599__$1 = s__19599;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19599__$1);if(temp__4126__auto__)
{var s__19599__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19599__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19599__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19601 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19600 = (0);while(true){
if((i__19600 < size__4376__auto__))
{var map__19612 = cljs.core._nth.call(null,c__4375__auto__,i__19600);var map__19612__$1 = ((cljs.core.seq_QMARK_.call(null,map__19612))?cljs.core.apply.call(null,cljs.core.hash_map,map__19612):map__19612);var metric_spec = map__19612__$1;var title = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__19601,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__19600,map__19612,map__19612__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19601,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function iter__19613(s__19614){return (new cljs.core.LazySeq(null,((function (i__19600,map__19612,map__19612__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19601,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (){var s__19614__$1 = s__19614;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19614__$1);if(temp__4126__auto____$1)
{var s__19614__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19614__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19614__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19616 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19615 = (0);while(true){
if((i__19615 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__19615);cljs.core.chunk_append.call(null,b__19616,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19626 = (i__19615 + (1));
i__19615 = G__19626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19616),iter__19613.call(null,cljs.core.chunk_rest.call(null,s__19614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19616),null);
}
} else
{var record = cljs.core.first.call(null,s__19614__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19613.call(null,cljs.core.rest.call(null,s__19614__$2)));
}
} else
{return null;
}
break;
}
});})(i__19600,map__19612,map__19612__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19601,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
,null,null));
});})(i__19600,map__19612,map__19612__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19601,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__19627 = (i__19600 + (1));
i__19600 = G__19627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19601),iter__19598.call(null,cljs.core.chunk_rest.call(null,s__19599__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19601),null);
}
} else
{var map__19617 = cljs.core.first.call(null,s__19599__$2);var map__19617__$1 = ((cljs.core.seq_QMARK_.call(null,map__19617))?cljs.core.apply.call(null,cljs.core.hash_map,map__19617):map__19617);var metric_spec = map__19617__$1;var title = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__19617,map__19617__$1,metric_spec,title,metric,variable,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function iter__19618(s__19619){return (new cljs.core.LazySeq(null,((function (map__19617,map__19617__$1,metric_spec,title,metric,variable,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (){var s__19619__$1 = s__19619;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19619__$1);if(temp__4126__auto____$1)
{var s__19619__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19619__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19619__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19621 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19620 = (0);while(true){
if((i__19620 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__19620);cljs.core.chunk_append.call(null,b__19621,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19628 = (i__19620 + (1));
i__19620 = G__19628;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19621),iter__19618.call(null,cljs.core.chunk_rest.call(null,s__19619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19621),null);
}
} else
{var record = cljs.core.first.call(null,s__19619__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19618.call(null,cljs.core.rest.call(null,s__19619__$2)));
}
} else
{return null;
}
break;
}
});})(map__19617,map__19617__$1,metric_spec,title,metric,variable,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
,null,null));
});})(map__19617,map__19617__$1,metric_spec,title,metric,variable,s__19599__$2,temp__4126__auto__,x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__19598.call(null,cljs.core.rest.call(null,s__19599__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function iter__19622(s__19623){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title){
return (function (){var s__19623__$1 = s__19623;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19623__$1);if(temp__4126__auto__)
{var s__19623__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19623__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19623__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19625 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19624 = (0);while(true){
if((i__19624 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__19624);cljs.core.chunk_append.call(null,b__19625,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__19629 = (i__19624 + (1));
i__19624 = G__19629;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19625),iter__19622.call(null,cljs.core.chunk_rest.call(null,s__19623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19625),null);
}
} else
{var y = cljs.core.first.call(null,s__19623__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__19622.call(null,cljs.core.rest.call(null,s__19623__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__19596,map__19596__$1,metrics,map__19597,map__19597__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
clustermap.components.timeline_chart.request_timeline_data = (function request_timeline_data(resource,query,filter_spec){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.timeline,query,filter_spec);
});
var ufv___19688 = schema.utils.use_fn_validation;var output_schema19631_19689 = schema.core.Any;var input_schema19632_19690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker19633_19691 = schema.core.checker.call(null,input_schema19632_19690);var output_checker19634_19692 = schema.core.checker.call(null,output_schema19631_19689);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function timeline_chart(G__19635,G__19636,G__19637){var validate__6034__auto__ = ufv___19688.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19635,G__19636,G__19637], null);var temp__4126__auto___19694 = input_checker19633_19691.call(null,args__6035__auto___19693);if(cljs.core.truth_(temp__4126__auto___19694))
{var error__6036__auto___19695 = temp__4126__auto___19694;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19695)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19695,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19693,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19632_19690,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19666 = G__19635;var map__19668 = G__19666;var map__19668__$1 = ((cljs.core.seq_QMARK_.call(null,map__19668))?cljs.core.apply.call(null,cljs.core.hash_map,map__19668):map__19668);var map__19669 = cljs.core.get.call(null,map__19668__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19669__$1 = ((cljs.core.seq_QMARK_.call(null,map__19669))?cljs.core.apply.call(null,cljs.core.hash_map,map__19669):map__19669);var timeline_chart__$1 = map__19669__$1;var query = cljs.core.get.call(null,map__19669__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__19669__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__19668__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__19636;var G__19667 = G__19637;var map__19670 = G__19667;var map__19670__$1 = ((cljs.core.seq_QMARK_.call(null,map__19670))?cljs.core.apply.call(null,cljs.core.hash_map,map__19670):map__19670);var opts = map__19670__$1;var id = cljs.core.get.call(null,map__19670__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__19666__$1 = G__19666;var owner__$1 = owner;var G__19667__$1 = G__19667;while(true){
var map__19671 = G__19666__$1;var map__19671__$1 = ((cljs.core.seq_QMARK_.call(null,map__19671))?cljs.core.apply.call(null,cljs.core.hash_map,map__19671):map__19671);var map__19672 = cljs.core.get.call(null,map__19671__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19672__$1 = ((cljs.core.seq_QMARK_.call(null,map__19672))?cljs.core.apply.call(null,cljs.core.hash_map,map__19672):map__19672);var timeline_chart__$2 = map__19672__$1;var query__$1 = cljs.core.get.call(null,map__19672__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__19672__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__19671__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__19673 = G__19667__$1;var map__19673__$1 = ((cljs.core.seq_QMARK_.call(null,map__19673))?cljs.core.apply.call(null,cljs.core.hash_map,map__19673):map__19673);var opts__$1 = map__19673__$1;var id__$1 = cljs.core.get.call(null,map__19673__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t19674 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t19674 = (function (query,map__19669,owner,G__19637,output_schema19631,G__19636,output_checker19634,G__19667,timeline_data,map__19671,filter_spec,input_checker19633,G__19666,map__19672,map__19670,map__19668,map__19673,validate__6034__auto__,id,timeline_chart,opts,ufv__,G__19635,input_schema19632,meta19675){
this.query = query;
this.map__19669 = map__19669;
this.owner = owner;
this.G__19637 = G__19637;
this.output_schema19631 = output_schema19631;
this.G__19636 = G__19636;
this.output_checker19634 = output_checker19634;
this.G__19667 = G__19667;
this.timeline_data = timeline_data;
this.map__19671 = map__19671;
this.filter_spec = filter_spec;
this.input_checker19633 = input_checker19633;
this.G__19666 = G__19666;
this.map__19672 = map__19672;
this.map__19670 = map__19670;
this.map__19668 = map__19668;
this.map__19673 = map__19673;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.ufv__ = ufv__;
this.G__19635 = G__19635;
this.input_schema19632 = input_schema19632;
this.meta19675 = meta19675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t19674.cljs$lang$type = true;
clustermap.components.timeline_chart.t19674.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t19674";
clustermap.components.timeline_chart.t19674.cljs$lang$ctorPrWriter = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t19674");
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.t19674.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t19674.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.t19674.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t19674.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (_,p__19677,___$1){var self__ = this;
var map__19678 = p__19677;var map__19678__$1 = ((cljs.core.seq_QMARK_.call(null,map__19678))?cljs.core.apply.call(null,cljs.core.hash_map,map__19678):map__19678);var map__19679 = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19679__$1 = ((cljs.core.seq_QMARK_.call(null,map__19679))?cljs.core.apply.call(null,cljs.core.hash_map,map__19679):map__19679);var prev_query = cljs.core.get.call(null,map__19679__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__19679__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.t19674.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t19674.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (_,p__19680,p__19681){var self__ = this;
var map__19682 = p__19680;var map__19682__$1 = ((cljs.core.seq_QMARK_.call(null,map__19682))?cljs.core.apply.call(null,cljs.core.hash_map,map__19682):map__19682);var map__19683 = cljs.core.get.call(null,map__19682__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19683__$1 = ((cljs.core.seq_QMARK_.call(null,map__19683))?cljs.core.apply.call(null,cljs.core.hash_map,map__19683):map__19683);var next_query = cljs.core.get.call(null,map__19683__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__19683__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__19682__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__19684 = p__19681;var map__19684__$1 = ((cljs.core.seq_QMARK_.call(null,map__19684))?cljs.core.apply.call(null,cljs.core.hash_map,map__19684):map__19684);var next_timeline_data_resource = cljs.core.get.call(null,map__19684__$1,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.timeline_chart.request_timeline_data.call(null,next_timeline_data_resource,next_query,next_filter_spec);
} else
{return null;
}
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.t19674.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t19674.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"timeline-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,last_dims,w,h,___$1,map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (p__19685){var map__19686 = p__19685;var map__19686__$1 = ((cljs.core.seq_QMARK_.call(null,map__19686))?cljs.core.apply.call(null,cljs.core.hash_map,map__19686):map__19686);var response = map__19686__$1;var records = cljs.core.get.call(null,map__19686__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE RESPONSE: ",response], null)));
return om.core.update_BANG_.call(null,self__.timeline_chart,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)], null),records);
});})(node,tdr,last_dims,w,h,___$1,map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,last_dims,w,h,___$1,map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__19687 = om.core.get_node.call(null,self__.owner,"chart");var G__19687__$1 = (((G__19687 == null))?null:jayq.core.$.call(null,G__19687));var G__19687__$2 = (((G__19687__$1 == null))?null:G__19687__$1.highcharts());var G__19687__$3 = (((G__19687__$2 == null))?null:G__19687__$2.reflow());return G__19687__$3;
} else
{return null;
}
});})(node,tdr,last_dims,w,h,___$1,map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
);
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.t19674.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t19674.prototype.om$core$IRender$render$arity$1 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.t19674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (_19676){var self__ = this;
var _19676__$1 = this;return self__.meta19675;
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.t19674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function (_19676,meta19675__$1){var self__ = this;
var _19676__$1 = this;return (new clustermap.components.timeline_chart.t19674(self__.query,self__.map__19669,self__.owner,self__.G__19637,self__.output_schema19631,self__.G__19636,self__.output_checker19634,self__.G__19667,self__.timeline_data,self__.map__19671,self__.filter_spec,self__.input_checker19633,self__.G__19666,self__.map__19672,self__.map__19670,self__.map__19668,self__.map__19673,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.opts,self__.ufv__,self__.G__19635,self__.input_schema19632,meta19675__$1));
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
clustermap.components.timeline_chart.__GT_t19674 = ((function (map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692){
return (function __GT_t19674(query__$2,map__19669__$2,owner__$3,G__19637__$1,output_schema19631__$1,G__19636__$1,output_checker19634__$1,G__19667__$2,timeline_data__$2,map__19671__$2,filter_spec__$2,input_checker19633__$1,G__19666__$2,map__19672__$2,map__19670__$2,map__19668__$2,map__19673__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,G__19635__$1,input_schema19632__$1,meta19675){return (new clustermap.components.timeline_chart.t19674(query__$2,map__19669__$2,owner__$3,G__19637__$1,output_schema19631__$1,G__19636__$1,output_checker19634__$1,G__19667__$2,timeline_data__$2,map__19671__$2,filter_spec__$2,input_checker19633__$1,G__19666__$2,map__19672__$2,map__19670__$2,map__19668__$2,map__19673__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,G__19635__$1,input_schema19632__$1,meta19675));
});})(map__19671,map__19671__$1,map__19672,map__19672__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19673,map__19673__$1,opts__$1,id__$1,G__19666,map__19668,map__19668__$1,map__19669,map__19669__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19667,map__19670,map__19670__$1,opts,id,validate__6034__auto__,ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
}
return (new clustermap.components.timeline_chart.t19674(query__$1,map__19669__$1,owner__$2,G__19637,output_schema19631_19689,G__19636,output_checker19634_19692,G__19667__$1,timeline_data__$1,map__19671__$1,filter_spec__$1,input_checker19633_19691,G__19666__$1,map__19672__$1,map__19670__$1,map__19668__$1,map__19673__$1,validate__6034__auto__,id__$1,timeline_chart__$2,opts__$1,ufv___19688,G__19635,input_schema19632_19690,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19696 = output_checker19634_19692.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19696))
{var error__6036__auto___19697 = temp__4126__auto___19696;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19697)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19697,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19631_19689,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19688,output_schema19631_19689,input_schema19632_19690,input_checker19633_19691,output_checker19634_19692))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema19631_19689,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19632_19690], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m19630){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m19630);
});
__GT_timeline_chart = function(cursor__7850__auto__,m19630){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m19630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
