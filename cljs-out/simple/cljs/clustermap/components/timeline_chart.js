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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__19722,records,p__19723){var map__19754 = p__19722;var map__19754__$1 = ((cljs.core.seq_QMARK_.call(null,map__19754))?cljs.core.apply.call(null,cljs.core.hash_map,map__19754):map__19754);var metrics = cljs.core.get.call(null,map__19754__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__19755 = p__19723;var map__19755__$1 = ((cljs.core.seq_QMARK_.call(null,map__19755))?cljs.core.apply.call(null,cljs.core.hash_map,map__19755):map__19755);var opts = map__19755__$1;var y1_title = cljs.core.get.call(null,map__19755__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__19755__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (p1__19721_SHARP_){return ((1900) + p1__19721_SHARP_);
});})(map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (p1__19720_SHARP_){return p1__19720_SHARP_.getYear();
});})(map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (p1__19719_SHARP_){return (new Date(p1__19719_SHARP_));
});})(map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function iter__19756(s__19757){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (){var s__19757__$1 = s__19757;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19757__$1);if(temp__4126__auto__)
{var s__19757__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19757__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19757__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19759 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19758 = (0);while(true){
if((i__19758 < size__4376__auto__))
{var map__19770 = cljs.core._nth.call(null,c__4375__auto__,i__19758);var map__19770__$1 = ((cljs.core.seq_QMARK_.call(null,map__19770))?cljs.core.apply.call(null,cljs.core.hash_map,map__19770):map__19770);var metric_spec = map__19770__$1;var title = cljs.core.get.call(null,map__19770__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19770__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19770__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__19759,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__19758,map__19770,map__19770__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19759,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function iter__19771(s__19772){return (new cljs.core.LazySeq(null,((function (i__19758,map__19770,map__19770__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19759,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (){var s__19772__$1 = s__19772;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19772__$1);if(temp__4126__auto____$1)
{var s__19772__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19772__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19772__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19774 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19773 = (0);while(true){
if((i__19773 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__19773);cljs.core.chunk_append.call(null,b__19774,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19784 = (i__19773 + (1));
i__19773 = G__19784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19774),iter__19771.call(null,cljs.core.chunk_rest.call(null,s__19772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19774),null);
}
} else
{var record = cljs.core.first.call(null,s__19772__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19771.call(null,cljs.core.rest.call(null,s__19772__$2)));
}
} else
{return null;
}
break;
}
});})(i__19758,map__19770,map__19770__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19759,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
,null,null));
});})(i__19758,map__19770,map__19770__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__19759,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__19785 = (i__19758 + (1));
i__19758 = G__19785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19759),iter__19756.call(null,cljs.core.chunk_rest.call(null,s__19757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19759),null);
}
} else
{var map__19775 = cljs.core.first.call(null,s__19757__$2);var map__19775__$1 = ((cljs.core.seq_QMARK_.call(null,map__19775))?cljs.core.apply.call(null,cljs.core.hash_map,map__19775):map__19775);var metric_spec = map__19775__$1;var title = cljs.core.get.call(null,map__19775__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__19775__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__19775__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__19775,map__19775__$1,metric_spec,title,metric,variable,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function iter__19776(s__19777){return (new cljs.core.LazySeq(null,((function (map__19775,map__19775__$1,metric_spec,title,metric,variable,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (){var s__19777__$1 = s__19777;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19777__$1);if(temp__4126__auto____$1)
{var s__19777__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19777__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19777__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19779 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19778 = (0);while(true){
if((i__19778 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__19778);cljs.core.chunk_append.call(null,b__19779,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__19786 = (i__19778 + (1));
i__19778 = G__19786;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19779),iter__19776.call(null,cljs.core.chunk_rest.call(null,s__19777__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19779),null);
}
} else
{var record = cljs.core.first.call(null,s__19777__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__19776.call(null,cljs.core.rest.call(null,s__19777__$2)));
}
} else
{return null;
}
break;
}
});})(map__19775,map__19775__$1,metric_spec,title,metric,variable,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
,null,null));
});})(map__19775,map__19775__$1,metric_spec,title,metric,variable,s__19757__$2,temp__4126__auto__,x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__19756.call(null,cljs.core.rest.call(null,s__19757__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function iter__19780(s__19781){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title){
return (function (){var s__19781__$1 = s__19781;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19781__$1);if(temp__4126__auto__)
{var s__19781__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19781__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19781__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19783 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19782 = (0);while(true){
if((i__19782 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__19782);cljs.core.chunk_append.call(null,b__19783,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__19787 = (i__19782 + (1));
i__19782 = G__19787;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19783),iter__19780.call(null,cljs.core.chunk_rest.call(null,s__19781__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19783),null);
}
} else
{var y = cljs.core.first.call(null,s__19781__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__19780.call(null,cljs.core.rest.call(null,s__19781__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__19754,map__19754__$1,metrics,map__19755,map__19755__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___19908 = schema.utils.use_fn_validation;var output_schema19789_19909 = schema.core.Any;var input_schema19790_19910 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker19791_19911 = schema.core.checker.call(null,input_schema19790_19910);var output_checker19792_19912 = schema.core.checker.call(null,output_schema19789_19909);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function timeline_chart(G__19793,G__19794,G__19795){var validate__6034__auto__ = ufv___19908.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19913 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19793,G__19794,G__19795], null);var temp__4126__auto___19914 = input_checker19791_19911.call(null,args__6035__auto___19913);if(cljs.core.truth_(temp__4126__auto___19914))
{var error__6036__auto___19915 = temp__4126__auto___19914;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19915,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19913,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19790_19910,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19855 = G__19793;var map__19857 = G__19855;var map__19857__$1 = ((cljs.core.seq_QMARK_.call(null,map__19857))?cljs.core.apply.call(null,cljs.core.hash_map,map__19857):map__19857);var map__19858 = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19858__$1 = ((cljs.core.seq_QMARK_.call(null,map__19858))?cljs.core.apply.call(null,cljs.core.hash_map,map__19858):map__19858);var timeline_chart__$1 = map__19858__$1;var query = cljs.core.get.call(null,map__19858__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__19858__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__19857__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__19794;var G__19856 = G__19795;var map__19859 = G__19856;var map__19859__$1 = ((cljs.core.seq_QMARK_.call(null,map__19859))?cljs.core.apply.call(null,cljs.core.hash_map,map__19859):map__19859);var opts = map__19859__$1;var id = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__19855__$1 = G__19855;var owner__$1 = owner;var G__19856__$1 = G__19856;while(true){
var map__19860 = G__19855__$1;var map__19860__$1 = ((cljs.core.seq_QMARK_.call(null,map__19860))?cljs.core.apply.call(null,cljs.core.hash_map,map__19860):map__19860);var map__19861 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19861__$1 = ((cljs.core.seq_QMARK_.call(null,map__19861))?cljs.core.apply.call(null,cljs.core.hash_map,map__19861):map__19861);var timeline_chart__$2 = map__19861__$1;var query__$1 = cljs.core.get.call(null,map__19861__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__19861__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__19862 = G__19856__$1;var map__19862__$1 = ((cljs.core.seq_QMARK_.call(null,map__19862))?cljs.core.apply.call(null,cljs.core.hash_map,map__19862):map__19862);var opts__$1 = map__19862__$1;var id__$1 = cljs.core.get.call(null,map__19862__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t19863 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t19863 = (function (G__19795,query,map__19859,owner,map__19860,timeline_data,map__19861,filter_spec,G__19793,map__19857,input_checker19791,map__19862,G__19856,map__19858,G__19794,output_schema19789,G__19855,validate__6034__auto__,id,timeline_chart,output_checker19792,opts,ufv__,input_schema19790,meta19864){
this.G__19795 = G__19795;
this.query = query;
this.map__19859 = map__19859;
this.owner = owner;
this.map__19860 = map__19860;
this.timeline_data = timeline_data;
this.map__19861 = map__19861;
this.filter_spec = filter_spec;
this.G__19793 = G__19793;
this.map__19857 = map__19857;
this.input_checker19791 = input_checker19791;
this.map__19862 = map__19862;
this.G__19856 = G__19856;
this.map__19858 = map__19858;
this.G__19794 = G__19794;
this.output_schema19789 = output_schema19789;
this.G__19855 = G__19855;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.output_checker19792 = output_checker19792;
this.opts = opts;
this.ufv__ = ufv__;
this.input_schema19790 = input_schema19790;
this.meta19864 = meta19864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t19863.cljs$lang$type = true;
clustermap.components.timeline_chart.t19863.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t19863";
clustermap.components.timeline_chart.t19863.cljs$lang$ctorPrWriter = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t19863");
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.t19863.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t19863.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.t19863.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t19863.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (_,p__19866,___$1){var self__ = this;
var map__19867 = p__19866;var map__19867__$1 = ((cljs.core.seq_QMARK_.call(null,map__19867))?cljs.core.apply.call(null,cljs.core.hash_map,map__19867):map__19867);var map__19868 = cljs.core.get.call(null,map__19867__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19868__$1 = ((cljs.core.seq_QMARK_.call(null,map__19868))?cljs.core.apply.call(null,cljs.core.hash_map,map__19868):map__19868);var prev_query = cljs.core.get.call(null,map__19868__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__19868__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__19867__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.t19863.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t19863.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (_,p__19869,p__19870){var self__ = this;
var map__19871 = p__19869;var map__19871__$1 = ((cljs.core.seq_QMARK_.call(null,map__19871))?cljs.core.apply.call(null,cljs.core.hash_map,map__19871):map__19871);var map__19872 = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__19872__$1 = ((cljs.core.seq_QMARK_.call(null,map__19872))?cljs.core.apply.call(null,cljs.core.hash_map,map__19872):map__19872);var next_query = cljs.core.get.call(null,map__19872__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__19872__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__19871__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__19873 = p__19870;var map__19873__$1 = ((cljs.core.seq_QMARK_.call(null,map__19873))?cljs.core.apply.call(null,cljs.core.hash_map,map__19873):map__19873);var fetch_data_fn = cljs.core.get.call(null,map__19873__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,map__19871,map__19871__$1,map__19872,map__19872__$1,next_query,next_timeline_data,next_filter_spec,map__19873,map__19873__$1,fetch_data_fn,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,map__19871,map__19871__$1,map__19872,map__19872__$1,next_query,next_timeline_data,next_filter_spec,map__19873,map__19873__$1,fetch_data_fn,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (state_19892){var state_val_19893 = (state_19892[(1)]);if((state_val_19893 === (5)))
{var inst_19890 = (state_19892[(2)]);var state_19892__$1 = state_19892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19892__$1,inst_19890);
} else
{if((state_val_19893 === (4)))
{var state_19892__$1 = state_19892;var statearr_19894_19916 = state_19892__$1;(statearr_19894_19916[(2)] = null);
(statearr_19894_19916[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19893 === (3)))
{var inst_19876 = (state_19892[(7)]);var inst_19878 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19879 = ["TIMELINE DATA",inst_19876];var inst_19880 = (new cljs.core.PersistentVector(null,2,(5),inst_19878,inst_19879,null));var inst_19881 = cljs.core.clj__GT_js.call(null,inst_19880);var inst_19882 = console.log(inst_19881);var inst_19883 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19884 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_19885 = (new cljs.core.PersistentVector(null,1,(5),inst_19883,inst_19884,null));var inst_19886 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_19876);var inst_19887 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_19885,inst_19886);var state_19892__$1 = (function (){var statearr_19895 = state_19892;(statearr_19895[(8)] = inst_19882);
return statearr_19895;
})();var statearr_19896_19917 = state_19892__$1;(statearr_19896_19917[(2)] = inst_19887);
(statearr_19896_19917[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19893 === (2)))
{var inst_19876 = (state_19892[(7)]);var inst_19876__$1 = (state_19892[(2)]);var state_19892__$1 = (function (){var statearr_19897 = state_19892;(statearr_19897[(7)] = inst_19876__$1);
return statearr_19897;
})();if(cljs.core.truth_(inst_19876__$1))
{var statearr_19898_19918 = state_19892__$1;(statearr_19898_19918[(1)] = (3));
} else
{var statearr_19899_19919 = state_19892__$1;(statearr_19899_19919[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19893 === (1)))
{var inst_19874 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_19892__$1 = state_19892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19892__$1,(2),inst_19874);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,___$1,map__19871,map__19871__$1,map__19872,map__19872__$1,next_query,next_timeline_data,next_filter_spec,map__19873,map__19873__$1,fetch_data_fn,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,map__19871,map__19871__$1,map__19872,map__19872__$1,next_query,next_timeline_data,next_filter_spec,map__19873,map__19873__$1,fetch_data_fn,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_19903 = [null,null,null,null,null,null,null,null,null];(statearr_19903[(0)] = state_machine__11099__auto__);
(statearr_19903[(1)] = (1));
return statearr_19903;
});
var state_machine__11099__auto____1 = (function (state_19892){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_19892);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e19904){if((e19904 instanceof Object))
{var ex__11102__auto__ = e19904;var statearr_19905_19920 = state_19892;(statearr_19905_19920[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19892);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19904;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19921 = state_19892;
state_19892 = G__19921;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_19892){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_19892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,map__19871,map__19871__$1,map__19872,map__19872__$1,next_query,next_timeline_data,next_filter_spec,map__19873,map__19873__$1,fetch_data_fn,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
})();var state__11156__auto__ = (function (){var statearr_19906 = f__11155__auto__.call(null);(statearr_19906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_19906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,map__19871,map__19871__$1,map__19872,map__19872__$1,next_query,next_timeline_data,next_filter_spec,map__19873,map__19873__$1,fetch_data_fn,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
);
return c__11154__auto__;
} else
{return null;
}
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.t19863.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t19863.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),(function (){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__,node,last_dims,w,h,___$1,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function() {
var fetch_data = null;
var fetch_data__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var fetch_data__2 = (function (q,fspec){var valch__14460__auto__ = clustermap.api.timeline.call(null,q,fspec);return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
fetch_data = function(q,fspec){
switch(arguments.length){
case 0:
return fetch_data__0.call(this);
case 2:
return fetch_data__2.call(this,q,fspec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fetch_data.cljs$core$IFn$_invoke$arity$0 = fetch_data__0;
fetch_data.cljs$core$IFn$_invoke$arity$2 = fetch_data__2;
return fetch_data;
})()
;})(in_flight_atom__14458__auto__,node,last_dims,w,h,___$1,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
})());
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__19907 = om.core.get_node.call(null,self__.owner,"chart");var G__19907__$1 = (((G__19907 == null))?null:jayq.core.$.call(null,G__19907));var G__19907__$2 = (((G__19907__$1 == null))?null:G__19907__$1.highcharts());var G__19907__$3 = (((G__19907__$2 == null))?null:G__19907__$2.reflow());return G__19907__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
);
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.t19863.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t19863.prototype.om$core$IRender$render$arity$1 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.t19863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (_19865){var self__ = this;
var _19865__$1 = this;return self__.meta19864;
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.t19863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function (_19865,meta19864__$1){var self__ = this;
var _19865__$1 = this;return (new clustermap.components.timeline_chart.t19863(self__.G__19795,self__.query,self__.map__19859,self__.owner,self__.map__19860,self__.timeline_data,self__.map__19861,self__.filter_spec,self__.G__19793,self__.map__19857,self__.input_checker19791,self__.map__19862,self__.G__19856,self__.map__19858,self__.G__19794,self__.output_schema19789,self__.G__19855,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.output_checker19792,self__.opts,self__.ufv__,self__.input_schema19790,meta19864__$1));
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
clustermap.components.timeline_chart.__GT_t19863 = ((function (map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912){
return (function __GT_t19863(G__19795__$1,query__$2,map__19859__$2,owner__$3,map__19860__$2,timeline_data__$2,map__19861__$2,filter_spec__$2,G__19793__$1,map__19857__$2,input_checker19791__$1,map__19862__$2,G__19856__$2,map__19858__$2,G__19794__$1,output_schema19789__$1,G__19855__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,output_checker19792__$1,opts__$2,ufv____$1,input_schema19790__$1,meta19864){return (new clustermap.components.timeline_chart.t19863(G__19795__$1,query__$2,map__19859__$2,owner__$3,map__19860__$2,timeline_data__$2,map__19861__$2,filter_spec__$2,G__19793__$1,map__19857__$2,input_checker19791__$1,map__19862__$2,G__19856__$2,map__19858__$2,G__19794__$1,output_schema19789__$1,G__19855__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,output_checker19792__$1,opts__$2,ufv____$1,input_schema19790__$1,meta19864));
});})(map__19860,map__19860__$1,map__19861,map__19861__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__19862,map__19862__$1,opts__$1,id__$1,G__19855,map__19857,map__19857__$1,map__19858,map__19858__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__19856,map__19859,map__19859__$1,opts,id,validate__6034__auto__,ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
}
return (new clustermap.components.timeline_chart.t19863(G__19795,query__$1,map__19859__$1,owner__$2,map__19860__$1,timeline_data__$1,map__19861__$1,filter_spec__$1,G__19793,map__19857__$1,input_checker19791_19911,map__19862__$1,G__19856__$1,map__19858__$1,G__19794,output_schema19789_19909,G__19855__$1,validate__6034__auto__,id__$1,timeline_chart__$2,output_checker19792_19912,opts__$1,ufv___19908,input_schema19790_19910,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19922 = output_checker19792_19912.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19922))
{var error__6036__auto___19923 = temp__4126__auto___19922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___19923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19923,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19789_19909,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19908,output_schema19789_19909,input_schema19790_19910,input_checker19791_19911,output_checker19792_19912))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema19789_19909,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19790_19910], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m19788){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m19788);
});
__GT_timeline_chart = function(cursor__7850__auto__,m19788){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m19788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
