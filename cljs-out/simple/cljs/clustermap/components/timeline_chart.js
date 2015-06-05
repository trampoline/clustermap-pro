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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__19708,records,p__19709){var map__19740 = p__19708;var map__19740__$1 = ((cljs.core.seq_QMARK_.call(null,map__19740))?cljs.core.apply.call(null,cljs.core.hash_map,map__19740):map__19740);var metrics = cljs.core.get.call(null,map__19740__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__19741 = p__19709;var map__19741__$1 = ((cljs.core.seq_QMARK_.call(null,map__19741))?cljs.core.apply.call(null,cljs.core.hash_map,map__19741):map__19741);var opts = map__19741__$1;var y1_title = cljs.core.get.call(null,map__19741__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__19741__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (p1__19707_SHARP_){return ((1900) + p1__19707_SHARP_);
});})(map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (p1__19706_SHARP_){return p1__19706_SHARP_.getYear();
});})(map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (p1__19705_SHARP_){return (new Date(p1__19705_SHARP_));
});})(map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function iter__19742(s__19743){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (){var s__19743__$1 = s__19743;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19743__$1);if(temp__4126__auto__)
{var s__19743__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19743__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19743__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19745 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19744 = (0);while(true){
if((i__19744 < size__4376__auto__))
{var map__19756 = cljs.core._nth.call(null,c__4375__auto__,i__19744);var map__19756__$1 = ((cljs.core.seq_QMARK_.call(null,map__19756))?cljs.core.apply.call(null,cljs.core.hash_map,map__19756):map__19756);var metric_spec = map__19756__$1;var title = cljs.core.get.call(null,map__19756__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19756__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19756__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__19745,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__19744,map__19756,map__19756__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19745,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function iter__19757(s__19758){return (new cljs.core.LazySeq(null,((function (i__19744,map__19756,map__19756__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19745,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (){var s__19758__$1 = s__19758;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19758__$1);if(temp__4126__auto____$1)
{var s__19758__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19758__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19758__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19760 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19759 = (0);while(true){
if((i__19759 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__19759);cljs.core.chunk_append.call(null,b__19760,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19770 = (i__19759 + (1));
i__19759 = G__19770;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19760),iter__19757.call(null,cljs.core.chunk_rest.call(null,s__19758__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19760),null);
}
} else
{var record = cljs.core.first.call(null,s__19758__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19757.call(null,cljs.core.rest.call(null,s__19758__$2)));
}
} else
{return null;
}
break;
}
});})(i__19744,map__19756,map__19756__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19745,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
,null,null));
});})(i__19744,map__19756,map__19756__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19745,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__19771 = (i__19744 + (1));
i__19744 = G__19771;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19745),iter__19742.call(null,cljs.core.chunk_rest.call(null,s__19743__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19745),null);
}
} else
{var map__19761 = cljs.core.first.call(null,s__19743__$2);var map__19761__$1 = ((cljs.core.seq_QMARK_.call(null,map__19761))?cljs.core.apply.call(null,cljs.core.hash_map,map__19761):map__19761);var metric_spec = map__19761__$1;var title = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__19761,map__19761__$1,metric_spec,title,metric,variable,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function iter__19762(s__19763){return (new cljs.core.LazySeq(null,((function (map__19761,map__19761__$1,metric_spec,title,metric,variable,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (){var s__19763__$1 = s__19763;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19763__$1);if(temp__4126__auto____$1)
{var s__19763__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19763__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19763__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19765 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19764 = (0);while(true){
if((i__19764 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__19764);cljs.core.chunk_append.call(null,b__19765,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19772 = (i__19764 + (1));
i__19764 = G__19772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19765),iter__19762.call(null,cljs.core.chunk_rest.call(null,s__19763__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19765),null);
}
} else
{var record = cljs.core.first.call(null,s__19763__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19762.call(null,cljs.core.rest.call(null,s__19763__$2)));
}
} else
{return null;
}
break;
}
});})(map__19761,map__19761__$1,metric_spec,title,metric,variable,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
,null,null));
});})(map__19761,map__19761__$1,metric_spec,title,metric,variable,s__19743__$2,temp__4126__auto__,x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__19742.call(null,cljs.core.rest.call(null,s__19743__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function iter__19766(s__19767){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title){
return (function (){var s__19767__$1 = s__19767;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19767__$1);if(temp__4126__auto__)
{var s__19767__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19767__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19767__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19769 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19768 = (0);while(true){
if((i__19768 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__19768);cljs.core.chunk_append.call(null,b__19769,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__19773 = (i__19768 + (1));
i__19768 = G__19773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19769),iter__19766.call(null,cljs.core.chunk_rest.call(null,s__19767__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19769),null);
}
} else
{var y = cljs.core.first.call(null,s__19767__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__19766.call(null,cljs.core.rest.call(null,s__19767__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__19740,map__19740__$1,metrics,map__19741,map__19741__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
clustermap.components.timeline_chart.request_timeline_data = (function request_timeline_data(resource,query,filter_spec){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.timeline,query,filter_spec);
});
var ufv___19832 = schema.utils.use_fn_validation;var output_schema19775_19833 = schema.core.Any;var input_schema19776_19834 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker19777_19835 = schema.core.checker.call(null,input_schema19776_19834);var output_checker19778_19836 = schema.core.checker.call(null,output_schema19775_19833);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function timeline_chart(G__19779,G__19780,G__19781){var validate__6034__auto__ = ufv___19832.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19779,G__19780,G__19781], null);var temp__4126__auto___19838 = input_checker19777_19835.call(null,args__6035__auto___19837);if(cljs.core.truth_(temp__4126__auto___19838))
{var error__6036__auto___19839 = temp__4126__auto___19838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19839,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19837,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19776_19834,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19810 = G__19779;var map__19812 = G__19810;var map__19812__$1 = ((cljs.core.seq_QMARK_.call(null,map__19812))?cljs.core.apply.call(null,cljs.core.hash_map,map__19812):map__19812);var map__19813 = cljs.core.get.call(null,map__19812__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19813__$1 = ((cljs.core.seq_QMARK_.call(null,map__19813))?cljs.core.apply.call(null,cljs.core.hash_map,map__19813):map__19813);var timeline_chart__$1 = map__19813__$1;var query = cljs.core.get.call(null,map__19813__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__19813__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__19812__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__19780;var G__19811 = G__19781;var map__19814 = G__19811;var map__19814__$1 = ((cljs.core.seq_QMARK_.call(null,map__19814))?cljs.core.apply.call(null,cljs.core.hash_map,map__19814):map__19814);var opts = map__19814__$1;var id = cljs.core.get.call(null,map__19814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__19810__$1 = G__19810;var owner__$1 = owner;var G__19811__$1 = G__19811;while(true){
var map__19815 = G__19810__$1;var map__19815__$1 = ((cljs.core.seq_QMARK_.call(null,map__19815))?cljs.core.apply.call(null,cljs.core.hash_map,map__19815):map__19815);var map__19816 = cljs.core.get.call(null,map__19815__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19816__$1 = ((cljs.core.seq_QMARK_.call(null,map__19816))?cljs.core.apply.call(null,cljs.core.hash_map,map__19816):map__19816);var timeline_chart__$2 = map__19816__$1;var query__$1 = cljs.core.get.call(null,map__19816__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__19816__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__19815__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__19817 = G__19811__$1;var map__19817__$1 = ((cljs.core.seq_QMARK_.call(null,map__19817))?cljs.core.apply.call(null,cljs.core.hash_map,map__19817):map__19817);var opts__$1 = map__19817__$1;var id__$1 = cljs.core.get.call(null,map__19817__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t19818 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t19818 = (function (query,G__19779,map__19812,output_schema19775,owner,output_checker19778,timeline_data,G__19780,map__19814,G__19810,input_checker19777,map__19813,filter_spec,map__19816,map__19815,G__19811,map__19817,input_schema19776,validate__6034__auto__,id,timeline_chart,G__19781,opts,ufv__,meta19819){
this.query = query;
this.G__19779 = G__19779;
this.map__19812 = map__19812;
this.output_schema19775 = output_schema19775;
this.owner = owner;
this.output_checker19778 = output_checker19778;
this.timeline_data = timeline_data;
this.G__19780 = G__19780;
this.map__19814 = map__19814;
this.G__19810 = G__19810;
this.input_checker19777 = input_checker19777;
this.map__19813 = map__19813;
this.filter_spec = filter_spec;
this.map__19816 = map__19816;
this.map__19815 = map__19815;
this.G__19811 = G__19811;
this.map__19817 = map__19817;
this.input_schema19776 = input_schema19776;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.G__19781 = G__19781;
this.opts = opts;
this.ufv__ = ufv__;
this.meta19819 = meta19819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t19818.cljs$lang$type = true;
clustermap.components.timeline_chart.t19818.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t19818";
clustermap.components.timeline_chart.t19818.cljs$lang$ctorPrWriter = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t19818");
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.t19818.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t19818.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.t19818.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t19818.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (_,p__19821,___$1){var self__ = this;
var map__19822 = p__19821;var map__19822__$1 = ((cljs.core.seq_QMARK_.call(null,map__19822))?cljs.core.apply.call(null,cljs.core.hash_map,map__19822):map__19822);var map__19823 = cljs.core.get.call(null,map__19822__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19823__$1 = ((cljs.core.seq_QMARK_.call(null,map__19823))?cljs.core.apply.call(null,cljs.core.hash_map,map__19823):map__19823);var prev_query = cljs.core.get.call(null,map__19823__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__19823__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__19822__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.t19818.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t19818.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (_,p__19824,p__19825){var self__ = this;
var map__19826 = p__19824;var map__19826__$1 = ((cljs.core.seq_QMARK_.call(null,map__19826))?cljs.core.apply.call(null,cljs.core.hash_map,map__19826):map__19826);var map__19827 = cljs.core.get.call(null,map__19826__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19827__$1 = ((cljs.core.seq_QMARK_.call(null,map__19827))?cljs.core.apply.call(null,cljs.core.hash_map,map__19827):map__19827);var next_query = cljs.core.get.call(null,map__19827__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__19827__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__19826__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__19828 = p__19825;var map__19828__$1 = ((cljs.core.seq_QMARK_.call(null,map__19828))?cljs.core.apply.call(null,cljs.core.hash_map,map__19828):map__19828);var next_timeline_data_resource = cljs.core.get.call(null,map__19828__$1,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.timeline_chart.request_timeline_data.call(null,next_timeline_data_resource,next_query,next_filter_spec);
} else
{return null;
}
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.t19818.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t19818.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"timeline-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,last_dims,w,h,___$1,map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (p__19829){var map__19830 = p__19829;var map__19830__$1 = ((cljs.core.seq_QMARK_.call(null,map__19830))?cljs.core.apply.call(null,cljs.core.hash_map,map__19830):map__19830);var response = map__19830__$1;var records = cljs.core.get.call(null,map__19830__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE RESPONSE: ",response], null)));
return om.core.update_BANG_.call(null,self__.timeline_chart,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)], null),records);
});})(node,tdr,last_dims,w,h,___$1,map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,last_dims,w,h,___$1,map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__19831 = om.core.get_node.call(null,self__.owner,"chart");var G__19831__$1 = (((G__19831 == null))?null:jayq.core.$.call(null,G__19831));var G__19831__$2 = (((G__19831__$1 == null))?null:G__19831__$1.highcharts());var G__19831__$3 = (((G__19831__$2 == null))?null:G__19831__$2.reflow());return G__19831__$3;
} else
{return null;
}
});})(node,tdr,last_dims,w,h,___$1,map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
);
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.t19818.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t19818.prototype.om$core$IRender$render$arity$1 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.t19818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (_19820){var self__ = this;
var _19820__$1 = this;return self__.meta19819;
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.t19818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function (_19820,meta19819__$1){var self__ = this;
var _19820__$1 = this;return (new clustermap.components.timeline_chart.t19818(self__.query,self__.G__19779,self__.map__19812,self__.output_schema19775,self__.owner,self__.output_checker19778,self__.timeline_data,self__.G__19780,self__.map__19814,self__.G__19810,self__.input_checker19777,self__.map__19813,self__.filter_spec,self__.map__19816,self__.map__19815,self__.G__19811,self__.map__19817,self__.input_schema19776,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.G__19781,self__.opts,self__.ufv__,meta19819__$1));
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
clustermap.components.timeline_chart.__GT_t19818 = ((function (map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836){
return (function __GT_t19818(query__$2,G__19779__$1,map__19812__$2,output_schema19775__$1,owner__$3,output_checker19778__$1,timeline_data__$2,G__19780__$1,map__19814__$2,G__19810__$2,input_checker19777__$1,map__19813__$2,filter_spec__$2,map__19816__$2,map__19815__$2,G__19811__$2,map__19817__$2,input_schema19776__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__19781__$1,opts__$2,ufv____$1,meta19819){return (new clustermap.components.timeline_chart.t19818(query__$2,G__19779__$1,map__19812__$2,output_schema19775__$1,owner__$3,output_checker19778__$1,timeline_data__$2,G__19780__$1,map__19814__$2,G__19810__$2,input_checker19777__$1,map__19813__$2,filter_spec__$2,map__19816__$2,map__19815__$2,G__19811__$2,map__19817__$2,input_schema19776__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__19781__$1,opts__$2,ufv____$1,meta19819));
});})(map__19815,map__19815__$1,map__19816,map__19816__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19817,map__19817__$1,opts__$1,id__$1,G__19810,map__19812,map__19812__$1,map__19813,map__19813__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19811,map__19814,map__19814__$1,opts,id,validate__6034__auto__,ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
}
return (new clustermap.components.timeline_chart.t19818(query__$1,G__19779,map__19812__$1,output_schema19775_19833,owner__$2,output_checker19778_19836,timeline_data__$1,G__19780,map__19814__$1,G__19810__$1,input_checker19777_19835,map__19813__$1,filter_spec__$1,map__19816__$1,map__19815__$1,G__19811__$1,map__19817__$1,input_schema19776_19834,validate__6034__auto__,id__$1,timeline_chart__$2,G__19781,opts__$1,ufv___19832,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19840 = output_checker19778_19836.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19840))
{var error__6036__auto___19841 = temp__4126__auto___19840;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19841,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19775_19833,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19832,output_schema19775_19833,input_schema19776_19834,input_checker19777_19835,output_checker19778_19836))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema19775_19833,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19776_19834], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m19774){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m19774);
});
__GT_timeline_chart = function(cursor__7850__auto__,m19774){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m19774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
