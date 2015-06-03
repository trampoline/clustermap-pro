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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__19485,records,p__19486){var map__19517 = p__19485;var map__19517__$1 = ((cljs.core.seq_QMARK_.call(null,map__19517))?cljs.core.apply.call(null,cljs.core.hash_map,map__19517):map__19517);var metrics = cljs.core.get.call(null,map__19517__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__19518 = p__19486;var map__19518__$1 = ((cljs.core.seq_QMARK_.call(null,map__19518))?cljs.core.apply.call(null,cljs.core.hash_map,map__19518):map__19518);var opts = map__19518__$1;var y1_title = cljs.core.get.call(null,map__19518__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__19518__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (p1__19484_SHARP_){return ((1900) + p1__19484_SHARP_);
});})(map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (p1__19483_SHARP_){return p1__19483_SHARP_.getYear();
});})(map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (p1__19482_SHARP_){return (new Date(p1__19482_SHARP_));
});})(map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function iter__19519(s__19520){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (){var s__19520__$1 = s__19520;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19520__$1);if(temp__4126__auto__)
{var s__19520__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19520__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19520__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19522 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19521 = (0);while(true){
if((i__19521 < size__4376__auto__))
{var map__19533 = cljs.core._nth.call(null,c__4375__auto__,i__19521);var map__19533__$1 = ((cljs.core.seq_QMARK_.call(null,map__19533))?cljs.core.apply.call(null,cljs.core.hash_map,map__19533):map__19533);var metric_spec = map__19533__$1;var title = cljs.core.get.call(null,map__19533__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19533__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19533__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__19522,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__19521,map__19533,map__19533__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19522,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function iter__19534(s__19535){return (new cljs.core.LazySeq(null,((function (i__19521,map__19533,map__19533__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19522,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (){var s__19535__$1 = s__19535;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19535__$1);if(temp__4126__auto____$1)
{var s__19535__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19535__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19535__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19537 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19536 = (0);while(true){
if((i__19536 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__19536);cljs.core.chunk_append.call(null,b__19537,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19547 = (i__19536 + (1));
i__19536 = G__19547;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19537),iter__19534.call(null,cljs.core.chunk_rest.call(null,s__19535__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19537),null);
}
} else
{var record = cljs.core.first.call(null,s__19535__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19534.call(null,cljs.core.rest.call(null,s__19535__$2)));
}
} else
{return null;
}
break;
}
});})(i__19521,map__19533,map__19533__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19522,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
,null,null));
});})(i__19521,map__19533,map__19533__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19522,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__19548 = (i__19521 + (1));
i__19521 = G__19548;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19522),iter__19519.call(null,cljs.core.chunk_rest.call(null,s__19520__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19522),null);
}
} else
{var map__19538 = cljs.core.first.call(null,s__19520__$2);var map__19538__$1 = ((cljs.core.seq_QMARK_.call(null,map__19538))?cljs.core.apply.call(null,cljs.core.hash_map,map__19538):map__19538);var metric_spec = map__19538__$1;var title = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19538__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__19538,map__19538__$1,metric_spec,title,metric,variable,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function iter__19539(s__19540){return (new cljs.core.LazySeq(null,((function (map__19538,map__19538__$1,metric_spec,title,metric,variable,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (){var s__19540__$1 = s__19540;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19540__$1);if(temp__4126__auto____$1)
{var s__19540__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19540__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19540__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19542 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19541 = (0);while(true){
if((i__19541 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__19541);cljs.core.chunk_append.call(null,b__19542,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19549 = (i__19541 + (1));
i__19541 = G__19549;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19542),iter__19539.call(null,cljs.core.chunk_rest.call(null,s__19540__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19542),null);
}
} else
{var record = cljs.core.first.call(null,s__19540__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19539.call(null,cljs.core.rest.call(null,s__19540__$2)));
}
} else
{return null;
}
break;
}
});})(map__19538,map__19538__$1,metric_spec,title,metric,variable,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
,null,null));
});})(map__19538,map__19538__$1,metric_spec,title,metric,variable,s__19520__$2,temp__4126__auto__,x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__19519.call(null,cljs.core.rest.call(null,s__19520__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function iter__19543(s__19544){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title){
return (function (){var s__19544__$1 = s__19544;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19544__$1);if(temp__4126__auto__)
{var s__19544__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19544__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19544__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19546 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19545 = (0);while(true){
if((i__19545 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__19545);cljs.core.chunk_append.call(null,b__19546,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__19550 = (i__19545 + (1));
i__19545 = G__19550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19546),iter__19543.call(null,cljs.core.chunk_rest.call(null,s__19544__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19546),null);
}
} else
{var y = cljs.core.first.call(null,s__19544__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__19543.call(null,cljs.core.rest.call(null,s__19544__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__19517,map__19517__$1,metrics,map__19518,map__19518__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
clustermap.components.timeline_chart.request_timeline_data = (function request_timeline_data(resource,query,filter_spec){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.timeline,query,filter_spec);
});
var ufv___19609 = schema.utils.use_fn_validation;var output_schema19552_19610 = schema.core.Any;var input_schema19553_19611 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker19554_19612 = schema.core.checker.call(null,input_schema19553_19611);var output_checker19555_19613 = schema.core.checker.call(null,output_schema19552_19610);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function timeline_chart(G__19556,G__19557,G__19558){var validate__6034__auto__ = ufv___19609.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19614 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19556,G__19557,G__19558], null);var temp__4126__auto___19615 = input_checker19554_19612.call(null,args__6035__auto___19614);if(cljs.core.truth_(temp__4126__auto___19615))
{var error__6036__auto___19616 = temp__4126__auto___19615;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19616)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19616,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19614,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19553_19611,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19587 = G__19556;var map__19589 = G__19587;var map__19589__$1 = ((cljs.core.seq_QMARK_.call(null,map__19589))?cljs.core.apply.call(null,cljs.core.hash_map,map__19589):map__19589);var map__19590 = cljs.core.get.call(null,map__19589__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19590__$1 = ((cljs.core.seq_QMARK_.call(null,map__19590))?cljs.core.apply.call(null,cljs.core.hash_map,map__19590):map__19590);var timeline_chart__$1 = map__19590__$1;var query = cljs.core.get.call(null,map__19590__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__19590__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__19589__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__19557;var G__19588 = G__19558;var map__19591 = G__19588;var map__19591__$1 = ((cljs.core.seq_QMARK_.call(null,map__19591))?cljs.core.apply.call(null,cljs.core.hash_map,map__19591):map__19591);var opts = map__19591__$1;var id = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__19587__$1 = G__19587;var owner__$1 = owner;var G__19588__$1 = G__19588;while(true){
var map__19592 = G__19587__$1;var map__19592__$1 = ((cljs.core.seq_QMARK_.call(null,map__19592))?cljs.core.apply.call(null,cljs.core.hash_map,map__19592):map__19592);var map__19593 = cljs.core.get.call(null,map__19592__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19593__$1 = ((cljs.core.seq_QMARK_.call(null,map__19593))?cljs.core.apply.call(null,cljs.core.hash_map,map__19593):map__19593);var timeline_chart__$2 = map__19593__$1;var query__$1 = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__19593__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__19592__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__19594 = G__19588__$1;var map__19594__$1 = ((cljs.core.seq_QMARK_.call(null,map__19594))?cljs.core.apply.call(null,cljs.core.hash_map,map__19594):map__19594);var opts__$1 = map__19594__$1;var id__$1 = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t19595 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t19595 = (function (query,G__19557,map__19592,G__19556,input_schema19553,owner,G__19588,input_checker19554,G__19558,timeline_data,map__19589,map__19593,map__19594,map__19591,filter_spec,G__19587,output_schema19552,output_checker19555,validate__6034__auto__,id,timeline_chart,opts,ufv__,map__19590,meta19596){
this.query = query;
this.G__19557 = G__19557;
this.map__19592 = map__19592;
this.G__19556 = G__19556;
this.input_schema19553 = input_schema19553;
this.owner = owner;
this.G__19588 = G__19588;
this.input_checker19554 = input_checker19554;
this.G__19558 = G__19558;
this.timeline_data = timeline_data;
this.map__19589 = map__19589;
this.map__19593 = map__19593;
this.map__19594 = map__19594;
this.map__19591 = map__19591;
this.filter_spec = filter_spec;
this.G__19587 = G__19587;
this.output_schema19552 = output_schema19552;
this.output_checker19555 = output_checker19555;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.ufv__ = ufv__;
this.map__19590 = map__19590;
this.meta19596 = meta19596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t19595.cljs$lang$type = true;
clustermap.components.timeline_chart.t19595.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t19595";
clustermap.components.timeline_chart.t19595.cljs$lang$ctorPrWriter = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t19595");
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.t19595.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t19595.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.t19595.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t19595.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (_,p__19598,___$1){var self__ = this;
var map__19599 = p__19598;var map__19599__$1 = ((cljs.core.seq_QMARK_.call(null,map__19599))?cljs.core.apply.call(null,cljs.core.hash_map,map__19599):map__19599);var map__19600 = cljs.core.get.call(null,map__19599__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19600__$1 = ((cljs.core.seq_QMARK_.call(null,map__19600))?cljs.core.apply.call(null,cljs.core.hash_map,map__19600):map__19600);var prev_query = cljs.core.get.call(null,map__19600__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__19600__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__19599__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.t19595.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t19595.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (_,p__19601,p__19602){var self__ = this;
var map__19603 = p__19601;var map__19603__$1 = ((cljs.core.seq_QMARK_.call(null,map__19603))?cljs.core.apply.call(null,cljs.core.hash_map,map__19603):map__19603);var map__19604 = cljs.core.get.call(null,map__19603__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19604__$1 = ((cljs.core.seq_QMARK_.call(null,map__19604))?cljs.core.apply.call(null,cljs.core.hash_map,map__19604):map__19604);var next_query = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__19603__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__19605 = p__19602;var map__19605__$1 = ((cljs.core.seq_QMARK_.call(null,map__19605))?cljs.core.apply.call(null,cljs.core.hash_map,map__19605):map__19605);var next_timeline_data_resource = cljs.core.get.call(null,map__19605__$1,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.timeline_chart.request_timeline_data.call(null,next_timeline_data_resource,next_query,next_filter_spec);
} else
{return null;
}
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.t19595.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t19595.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"timeline-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,last_dims,w,h,___$1,map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (p__19606){var map__19607 = p__19606;var map__19607__$1 = ((cljs.core.seq_QMARK_.call(null,map__19607))?cljs.core.apply.call(null,cljs.core.hash_map,map__19607):map__19607);var response = map__19607__$1;var records = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE RESPONSE: ",response], null)));
return om.core.update_BANG_.call(null,self__.timeline_chart,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)], null),records);
});})(node,tdr,last_dims,w,h,___$1,map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,last_dims,w,h,___$1,map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__19608 = om.core.get_node.call(null,self__.owner,"chart");var G__19608__$1 = (((G__19608 == null))?null:jayq.core.$.call(null,G__19608));var G__19608__$2 = (((G__19608__$1 == null))?null:G__19608__$1.highcharts());var G__19608__$3 = (((G__19608__$2 == null))?null:G__19608__$2.reflow());return G__19608__$3;
} else
{return null;
}
});})(node,tdr,last_dims,w,h,___$1,map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
);
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.t19595.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t19595.prototype.om$core$IRender$render$arity$1 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.t19595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (_19597){var self__ = this;
var _19597__$1 = this;return self__.meta19596;
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.t19595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function (_19597,meta19596__$1){var self__ = this;
var _19597__$1 = this;return (new clustermap.components.timeline_chart.t19595(self__.query,self__.G__19557,self__.map__19592,self__.G__19556,self__.input_schema19553,self__.owner,self__.G__19588,self__.input_checker19554,self__.G__19558,self__.timeline_data,self__.map__19589,self__.map__19593,self__.map__19594,self__.map__19591,self__.filter_spec,self__.G__19587,self__.output_schema19552,self__.output_checker19555,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.opts,self__.ufv__,self__.map__19590,meta19596__$1));
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
clustermap.components.timeline_chart.__GT_t19595 = ((function (map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613){
return (function __GT_t19595(query__$2,G__19557__$1,map__19592__$2,G__19556__$1,input_schema19553__$1,owner__$3,G__19588__$2,input_checker19554__$1,G__19558__$1,timeline_data__$2,map__19589__$2,map__19593__$2,map__19594__$2,map__19591__$2,filter_spec__$2,G__19587__$2,output_schema19552__$1,output_checker19555__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,map__19590__$2,meta19596){return (new clustermap.components.timeline_chart.t19595(query__$2,G__19557__$1,map__19592__$2,G__19556__$1,input_schema19553__$1,owner__$3,G__19588__$2,input_checker19554__$1,G__19558__$1,timeline_data__$2,map__19589__$2,map__19593__$2,map__19594__$2,map__19591__$2,filter_spec__$2,G__19587__$2,output_schema19552__$1,output_checker19555__$1,validate__6034__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,map__19590__$2,meta19596));
});})(map__19592,map__19592__$1,map__19593,map__19593__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19594,map__19594__$1,opts__$1,id__$1,G__19587,map__19589,map__19589__$1,map__19590,map__19590__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19588,map__19591,map__19591__$1,opts,id,validate__6034__auto__,ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
}
return (new clustermap.components.timeline_chart.t19595(query__$1,G__19557,map__19592__$1,G__19556,input_schema19553_19611,owner__$2,G__19588__$1,input_checker19554_19612,G__19558,timeline_data__$1,map__19589__$1,map__19593__$1,map__19594__$1,map__19591__$1,filter_spec__$1,G__19587__$1,output_schema19552_19610,output_checker19555_19613,validate__6034__auto__,id__$1,timeline_chart__$2,opts__$1,ufv___19609,map__19590__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19617 = output_checker19555_19613.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19617))
{var error__6036__auto___19618 = temp__4126__auto___19617;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19618,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19552_19610,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19609,output_schema19552_19610,input_schema19553_19611,input_checker19554_19612,output_checker19555_19613))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema19552_19610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19553_19611], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m19551){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m19551);
});
__GT_timeline_chart = function(cursor__7850__auto__,m19551){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m19551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
