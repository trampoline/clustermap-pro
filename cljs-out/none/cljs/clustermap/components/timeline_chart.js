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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__30716,records,p__30717){var map__30748 = p__30716;var map__30748__$1 = ((cljs.core.seq_QMARK_.call(null,map__30748))?cljs.core.apply.call(null,cljs.core.hash_map,map__30748):map__30748);var metrics = cljs.core.get.call(null,map__30748__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var map__30749 = p__30717;var map__30749__$1 = ((cljs.core.seq_QMARK_.call(null,map__30749))?cljs.core.apply.call(null,cljs.core.hash_map,map__30749):map__30749);var opts = map__30749__$1;var y1_title = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (p1__30715_SHARP_){return ((1900) + p1__30715_SHARP_);
});})(map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (p1__30714_SHARP_){return p1__30714_SHARP_.getYear();
});})(map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (p1__30713_SHARP_){return (new Date(p1__30713_SHARP_));
});})(map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__12252__auto__ = ((function (x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function iter__30750(s__30751){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (){var s__30751__$1 = s__30751;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30751__$1);if(temp__4126__auto__)
{var s__30751__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30751__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30751__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30753 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30752 = (0);while(true){
if((i__30752 < size__12251__auto__))
{var map__30764 = cljs.core._nth.call(null,c__12250__auto__,i__30752);var map__30764__$1 = ((cljs.core.seq_QMARK_.call(null,map__30764))?cljs.core.apply.call(null,cljs.core.hash_map,map__30764):map__30764);var metric_spec = map__30764__$1;var title = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__30753,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12252__auto__ = ((function (i__30752,map__30764,map__30764__$1,metric_spec,title,metric,variable,c__12250__auto__,size__12251__auto__,b__30753,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function iter__30765(s__30766){return (new cljs.core.LazySeq(null,((function (i__30752,map__30764,map__30764__$1,metric_spec,title,metric,variable,c__12250__auto__,size__12251__auto__,b__30753,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (){var s__30766__$1 = s__30766;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30766__$1);if(temp__4126__auto____$1)
{var s__30766__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30766__$2))
{var c__12250__auto____$1 = cljs.core.chunk_first.call(null,s__30766__$2);var size__12251__auto____$1 = cljs.core.count.call(null,c__12250__auto____$1);var b__30768 = cljs.core.chunk_buffer.call(null,size__12251__auto____$1);if((function (){var i__30767 = (0);while(true){
if((i__30767 < size__12251__auto____$1))
{var record = cljs.core._nth.call(null,c__12250__auto____$1,i__30767);cljs.core.chunk_append.call(null,b__30768,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__30778 = (i__30767 + (1));
i__30767 = G__30778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30768),iter__30765.call(null,cljs.core.chunk_rest.call(null,s__30766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30768),null);
}
} else
{var record = cljs.core.first.call(null,s__30766__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__30765.call(null,cljs.core.rest.call(null,s__30766__$2)));
}
} else
{return null;
}
break;
}
});})(i__30752,map__30764,map__30764__$1,metric_spec,title,metric,variable,c__12250__auto__,size__12251__auto__,b__30753,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
,null,null));
});})(i__30752,map__30764,map__30764__$1,metric_spec,title,metric,variable,c__12250__auto__,size__12251__auto__,b__30753,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,records);
})()));
{
var G__30779 = (i__30752 + (1));
i__30752 = G__30779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30753),iter__30750.call(null,cljs.core.chunk_rest.call(null,s__30751__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30753),null);
}
} else
{var map__30769 = cljs.core.first.call(null,s__30751__$2);var map__30769__$1 = ((cljs.core.seq_QMARK_.call(null,map__30769))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);var metric_spec = map__30769__$1;var title = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12252__auto__ = ((function (map__30769,map__30769__$1,metric_spec,title,metric,variable,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function iter__30770(s__30771){return (new cljs.core.LazySeq(null,((function (map__30769,map__30769__$1,metric_spec,title,metric,variable,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (){var s__30771__$1 = s__30771;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30771__$1);if(temp__4126__auto____$1)
{var s__30771__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30771__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30771__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30773 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30772 = (0);while(true){
if((i__30772 < size__12251__auto__))
{var record = cljs.core._nth.call(null,c__12250__auto__,i__30772);cljs.core.chunk_append.call(null,b__30773,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__30780 = (i__30772 + (1));
i__30772 = G__30780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30773),iter__30770.call(null,cljs.core.chunk_rest.call(null,s__30771__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30773),null);
}
} else
{var record = cljs.core.first.call(null,s__30771__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__30770.call(null,cljs.core.rest.call(null,s__30771__$2)));
}
} else
{return null;
}
break;
}
});})(map__30769,map__30769__$1,metric_spec,title,metric,variable,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
,null,null));
});})(map__30769,map__30769__$1,metric_spec,title,metric,variable,s__30751__$2,temp__4126__auto__,x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,records);
})()),iter__30750.call(null,cljs.core.rest.call(null,s__30751__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__12252__auto__ = ((function (x_labels,metrics__$1,ys,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function iter__30774(s__30775){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title){
return (function (){var s__30775__$1 = s__30775;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30775__$1);if(temp__4126__auto__)
{var s__30775__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30775__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30775__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30777 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30776 = (0);while(true){
if((i__30776 < size__12251__auto__))
{var y = cljs.core._nth.call(null,c__12250__auto__,i__30776);cljs.core.chunk_append.call(null,b__30777,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__11514__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__30781 = (i__30776 + (1));
i__30776 = G__30781;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30777),iter__30774.call(null,cljs.core.chunk_rest.call(null,s__30775__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30777),null);
}
} else
{var y = cljs.core.first.call(null,s__30775__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__11514__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__30774.call(null,cljs.core.rest.call(null,s__30775__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__30748,map__30748__$1,metrics,map__30749,map__30749__$1,opts,y1_title,y0_title))
;return iter__12252__auto__.call(null,ys);
})()], null)));
});
clustermap.components.timeline_chart.request_timeline_data = (function request_timeline_data(resource,query,filter_spec){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.timeline,query,filter_spec);
});
var ufv___30840 = schema.utils.use_fn_validation;var output_schema30783_30841 = schema.core.Any;var input_schema30784_30842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker30785_30843 = schema.core.checker.call(null,input_schema30784_30842);var output_checker30786_30844 = schema.core.checker.call(null,output_schema30783_30841);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function timeline_chart(G__30787,G__30788,G__30789){var validate__13909__auto__ = ufv___30840.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30845 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30787,G__30788,G__30789], null);var temp__4126__auto___30846 = input_checker30785_30843.call(null,args__13910__auto___30845);if(cljs.core.truth_(temp__4126__auto___30846))
{var error__13911__auto___30847 = temp__4126__auto___30846;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__13911__auto___30847)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30847,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30845,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30784_30842,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var G__30818 = G__30787;var map__30820 = G__30818;var map__30820__$1 = ((cljs.core.seq_QMARK_.call(null,map__30820))?cljs.core.apply.call(null,cljs.core.hash_map,map__30820):map__30820);var map__30821 = cljs.core.get.call(null,map__30820__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__30821__$1 = ((cljs.core.seq_QMARK_.call(null,map__30821))?cljs.core.apply.call(null,cljs.core.hash_map,map__30821):map__30821);var timeline_chart__$1 = map__30821__$1;var query = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__30820__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__30788;var G__30819 = G__30789;var map__30822 = G__30819;var map__30822__$1 = ((cljs.core.seq_QMARK_.call(null,map__30822))?cljs.core.apply.call(null,cljs.core.hash_map,map__30822):map__30822);var opts = map__30822__$1;var id = cljs.core.get.call(null,map__30822__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__30818__$1 = G__30818;var owner__$1 = owner;var G__30819__$1 = G__30819;while(true){
var map__30823 = G__30818__$1;var map__30823__$1 = ((cljs.core.seq_QMARK_.call(null,map__30823))?cljs.core.apply.call(null,cljs.core.hash_map,map__30823):map__30823);var map__30824 = cljs.core.get.call(null,map__30823__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__30824__$1 = ((cljs.core.seq_QMARK_.call(null,map__30824))?cljs.core.apply.call(null,cljs.core.hash_map,map__30824):map__30824);var timeline_chart__$2 = map__30824__$1;var query__$1 = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__30823__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__30825 = G__30819__$1;var map__30825__$1 = ((cljs.core.seq_QMARK_.call(null,map__30825))?cljs.core.apply.call(null,cljs.core.hash_map,map__30825):map__30825);var opts__$1 = map__30825__$1;var id__$1 = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t30826 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t30826 = (function (query,owner,G__30788,input_schema30784,map__30820,map__30821,validate__13909__auto__,map__30824,timeline_data,G__30819,output_schema30783,filter_spec,G__30787,output_checker30786,map__30822,map__30823,map__30825,id,timeline_chart,opts,ufv__,G__30789,G__30818,input_checker30785,meta30827){
this.query = query;
this.owner = owner;
this.G__30788 = G__30788;
this.input_schema30784 = input_schema30784;
this.map__30820 = map__30820;
this.map__30821 = map__30821;
this.validate__13909__auto__ = validate__13909__auto__;
this.map__30824 = map__30824;
this.timeline_data = timeline_data;
this.G__30819 = G__30819;
this.output_schema30783 = output_schema30783;
this.filter_spec = filter_spec;
this.G__30787 = G__30787;
this.output_checker30786 = output_checker30786;
this.map__30822 = map__30822;
this.map__30823 = map__30823;
this.map__30825 = map__30825;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.ufv__ = ufv__;
this.G__30789 = G__30789;
this.G__30818 = G__30818;
this.input_checker30785 = input_checker30785;
this.meta30827 = meta30827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t30826.cljs$lang$type = true;
clustermap.components.timeline_chart.t30826.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t30826";
clustermap.components.timeline_chart.t30826.cljs$lang$ctorPrWriter = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.timeline-chart/t30826");
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.t30826.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t30826.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.t30826.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t30826.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (_,p__30829,___$1){var self__ = this;
var map__30830 = p__30829;var map__30830__$1 = ((cljs.core.seq_QMARK_.call(null,map__30830))?cljs.core.apply.call(null,cljs.core.hash_map,map__30830):map__30830);var map__30831 = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__30831__$1 = ((cljs.core.seq_QMARK_.call(null,map__30831))?cljs.core.apply.call(null,cljs.core.hash_map,map__30831):map__30831);var prev_query = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.query,self__.timeline_data,self__.opts);
} else
{return null;
}
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.t30826.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t30826.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (_,p__30832,p__30833){var self__ = this;
var map__30834 = p__30832;var map__30834__$1 = ((cljs.core.seq_QMARK_.call(null,map__30834))?cljs.core.apply.call(null,cljs.core.hash_map,map__30834):map__30834);var map__30835 = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__30835__$1 = ((cljs.core.seq_QMARK_.call(null,map__30835))?cljs.core.apply.call(null,cljs.core.hash_map,map__30835):map__30835);var next_query = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30836 = p__30833;var map__30836__$1 = ((cljs.core.seq_QMARK_.call(null,map__30836))?cljs.core.apply.call(null,cljs.core.hash_map,map__30836):map__30836);var next_timeline_data_resource = cljs.core.get.call(null,map__30836__$1,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.timeline_chart.request_timeline_data.call(null,next_timeline_data_resource,next_query,next_filter_spec);
} else
{return null;
}
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.t30826.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t30826.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"timeline-data-resource");var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"timeline-data-resource","timeline-data-resource",-1132292315),tdr);
clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (node,tdr,last_dims,w,h,___$1,map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (p__30837){var map__30838 = p__30837;var map__30838__$1 = ((cljs.core.seq_QMARK_.call(null,map__30838))?cljs.core.apply.call(null,cljs.core.hash_map,map__30838):map__30838);var response = map__30838__$1;var records = cljs.core.get.call(null,map__30838__$1,new cljs.core.Keyword(null,"records","records",1326822832));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE RESPONSE: ",response], null)));
return om.core.update_BANG_.call(null,self__.timeline_chart,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)], null),records);
});})(node,tdr,last_dims,w,h,___$1,map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
);
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,tdr,last_dims,w,h,___$1,map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__30839 = om.core.get_node.call(null,self__.owner,"chart");var G__30839__$1 = (((G__30839 == null))?null:jayq.core.$.call(null,G__30839));var G__30839__$2 = (((G__30839__$1 == null))?null:G__30839__$1.highcharts());var G__30839__$3 = (((G__30839__$2 == null))?null:G__30839__$2.reflow());return G__30839__$3;
} else
{return null;
}
});})(node,tdr,last_dims,w,h,___$1,map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
);
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.t30826.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t30826.prototype.om$core$IRender$render$arity$1 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.t30826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (_30828){var self__ = this;
var _30828__$1 = this;return self__.meta30827;
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.t30826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function (_30828,meta30827__$1){var self__ = this;
var _30828__$1 = this;return (new clustermap.components.timeline_chart.t30826(self__.query,self__.owner,self__.G__30788,self__.input_schema30784,self__.map__30820,self__.map__30821,self__.validate__13909__auto__,self__.map__30824,self__.timeline_data,self__.G__30819,self__.output_schema30783,self__.filter_spec,self__.G__30787,self__.output_checker30786,self__.map__30822,self__.map__30823,self__.map__30825,self__.id,self__.timeline_chart,self__.opts,self__.ufv__,self__.G__30789,self__.G__30818,self__.input_checker30785,meta30827__$1));
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
clustermap.components.timeline_chart.__GT_t30826 = ((function (map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844){
return (function __GT_t30826(query__$2,owner__$3,G__30788__$1,input_schema30784__$1,map__30820__$2,map__30821__$2,validate__13909__auto____$1,map__30824__$2,timeline_data__$2,G__30819__$2,output_schema30783__$1,filter_spec__$2,G__30787__$1,output_checker30786__$1,map__30822__$2,map__30823__$2,map__30825__$2,id__$2,timeline_chart__$3,opts__$2,ufv____$1,G__30789__$1,G__30818__$2,input_checker30785__$1,meta30827){return (new clustermap.components.timeline_chart.t30826(query__$2,owner__$3,G__30788__$1,input_schema30784__$1,map__30820__$2,map__30821__$2,validate__13909__auto____$1,map__30824__$2,timeline_data__$2,G__30819__$2,output_schema30783__$1,filter_spec__$2,G__30787__$1,output_checker30786__$1,map__30822__$2,map__30823__$2,map__30825__$2,id__$2,timeline_chart__$3,opts__$2,ufv____$1,G__30789__$1,G__30818__$2,input_checker30785__$1,meta30827));
});})(map__30823,map__30823__$1,map__30824,map__30824__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__30825,map__30825__$1,opts__$1,id__$1,G__30818,map__30820,map__30820__$1,map__30821,map__30821__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__30819,map__30822,map__30822__$1,opts,id,validate__13909__auto__,ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
}
return (new clustermap.components.timeline_chart.t30826(query__$1,owner__$2,G__30788,input_schema30784_30842,map__30820__$1,map__30821__$1,validate__13909__auto__,map__30824__$1,timeline_data__$1,G__30819__$1,output_schema30783_30841,filter_spec__$1,G__30787,output_checker30786_30844,map__30822__$1,map__30823__$1,map__30825__$1,id__$1,timeline_chart__$2,opts__$1,ufv___30840,G__30789,G__30818__$1,input_checker30785_30843,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30848 = output_checker30786_30844.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30848))
{var error__13911__auto___30849 = temp__4126__auto___30848;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__13911__auto___30849)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30849,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30783_30841,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___30840,output_schema30783_30841,input_schema30784_30842,input_checker30785_30843,output_checker30786_30844))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema30783_30841,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30784_30842], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__15725__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__15725__auto__,m30782){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__15725__auto__,m30782);
});
__GT_timeline_chart = function(cursor__15725__auto__,m30782){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__15725__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__15725__auto__,m30782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;

//# sourceMappingURL=timeline_chart.js.map