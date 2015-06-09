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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20384,p__20385){var map__20417 = p__20384;var map__20417__$1 = ((cljs.core.seq_QMARK_.call(null,map__20417))?cljs.core.apply.call(null,cljs.core.hash_map,map__20417):map__20417);var map__20418 = cljs.core.get.call(null,map__20417__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20418__$1 = ((cljs.core.seq_QMARK_.call(null,map__20418))?cljs.core.apply.call(null,cljs.core.hash_map,map__20418):map__20418);var metrics = cljs.core.get.call(null,map__20418__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20417__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20417__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20419 = p__20385;var map__20419__$1 = ((cljs.core.seq_QMARK_.call(null,map__20419))?cljs.core.apply.call(null,cljs.core.hash_map,map__20419):map__20419);var opts = map__20419__$1;var y1_title = cljs.core.get.call(null,map__20419__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20419__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (p1__20383_SHARP_){return ((1900) + p1__20383_SHARP_);
});})(map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (p1__20382_SHARP_){return p1__20382_SHARP_.getYear();
});})(map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (p1__20381_SHARP_){return (new Date(p1__20381_SHARP_));
});})(map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function iter__20420(s__20421){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (){var s__20421__$1 = s__20421;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20421__$1);if(temp__4126__auto__)
{var s__20421__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20421__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20421__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20423 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20422 = (0);while(true){
if((i__20422 < size__4376__auto__))
{var map__20434 = cljs.core._nth.call(null,c__4375__auto__,i__20422);var map__20434__$1 = ((cljs.core.seq_QMARK_.call(null,map__20434))?cljs.core.apply.call(null,cljs.core.hash_map,map__20434):map__20434);var metric_spec = map__20434__$1;var title = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20423,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20422,map__20434,map__20434__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20423,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function iter__20435(s__20436){return (new cljs.core.LazySeq(null,((function (i__20422,map__20434,map__20434__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20423,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (){var s__20436__$1 = s__20436;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20436__$1);if(temp__4126__auto____$1)
{var s__20436__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20436__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20436__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20438 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20437 = (0);while(true){
if((i__20437 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20437);cljs.core.chunk_append.call(null,b__20438,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20448 = (i__20437 + (1));
i__20437 = G__20448;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20438),iter__20435.call(null,cljs.core.chunk_rest.call(null,s__20436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20438),null);
}
} else
{var record = cljs.core.first.call(null,s__20436__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20435.call(null,cljs.core.rest.call(null,s__20436__$2)));
}
} else
{return null;
}
break;
}
});})(i__20422,map__20434,map__20434__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20423,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20422,map__20434,map__20434__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20423,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20449 = (i__20422 + (1));
i__20422 = G__20449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20423),iter__20420.call(null,cljs.core.chunk_rest.call(null,s__20421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20423),null);
}
} else
{var map__20439 = cljs.core.first.call(null,s__20421__$2);var map__20439__$1 = ((cljs.core.seq_QMARK_.call(null,map__20439))?cljs.core.apply.call(null,cljs.core.hash_map,map__20439):map__20439);var metric_spec = map__20439__$1;var title = cljs.core.get.call(null,map__20439__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20439__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20439__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20439,map__20439__$1,metric_spec,title,metric,variable,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function iter__20440(s__20441){return (new cljs.core.LazySeq(null,((function (map__20439,map__20439__$1,metric_spec,title,metric,variable,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (){var s__20441__$1 = s__20441;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20441__$1);if(temp__4126__auto____$1)
{var s__20441__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20441__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20441__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20443 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20442 = (0);while(true){
if((i__20442 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20442);cljs.core.chunk_append.call(null,b__20443,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20450 = (i__20442 + (1));
i__20442 = G__20450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20443),iter__20440.call(null,cljs.core.chunk_rest.call(null,s__20441__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20443),null);
}
} else
{var record = cljs.core.first.call(null,s__20441__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20440.call(null,cljs.core.rest.call(null,s__20441__$2)));
}
} else
{return null;
}
break;
}
});})(map__20439,map__20439__$1,metric_spec,title,metric,variable,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20439,map__20439__$1,metric_spec,title,metric,variable,s__20421__$2,temp__4126__auto__,x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20420.call(null,cljs.core.rest.call(null,s__20421__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function iter__20444(s__20445){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title){
return (function (){var s__20445__$1 = s__20445;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20445__$1);if(temp__4126__auto__)
{var s__20445__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20445__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20445__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20447 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20446 = (0);while(true){
if((i__20446 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20446);cljs.core.chunk_append.call(null,b__20447,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20451 = (i__20446 + (1));
i__20446 = G__20451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20447),iter__20444.call(null,cljs.core.chunk_rest.call(null,s__20445__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20447),null);
}
} else
{var y = cljs.core.first.call(null,s__20445__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20444.call(null,cljs.core.rest.call(null,s__20445__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20417,map__20417__$1,map__20418,map__20418__$1,metrics,color,records,map__20419,map__20419__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20572 = schema.utils.use_fn_validation;var output_schema20453_20573 = schema.core.Any;var input_schema20454_20574 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20455_20575 = schema.core.checker.call(null,input_schema20454_20574);var output_checker20456_20576 = schema.core.checker.call(null,output_schema20453_20573);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function timeline_chart(G__20457,G__20458,G__20459){var validate__6034__auto__ = ufv___20572.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20577 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20457,G__20458,G__20459], null);var temp__4126__auto___20578 = input_checker20455_20575.call(null,args__6035__auto___20577);if(cljs.core.truth_(temp__4126__auto___20578))
{var error__6036__auto___20579 = temp__4126__auto___20578;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20579)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20579,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20577,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20454_20574,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20519 = G__20457;var map__20521 = G__20519;var map__20521__$1 = ((cljs.core.seq_QMARK_.call(null,map__20521))?cljs.core.apply.call(null,cljs.core.hash_map,map__20521):map__20521);var map__20522 = cljs.core.get.call(null,map__20521__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20522__$1 = ((cljs.core.seq_QMARK_.call(null,map__20522))?cljs.core.apply.call(null,cljs.core.hash_map,map__20522):map__20522);var timeline_chart__$1 = map__20522__$1;var query = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20521__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20458;var G__20520 = G__20459;var map__20523 = G__20520;var map__20523__$1 = ((cljs.core.seq_QMARK_.call(null,map__20523))?cljs.core.apply.call(null,cljs.core.hash_map,map__20523):map__20523);var opts = map__20523__$1;var id = cljs.core.get.call(null,map__20523__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20519__$1 = G__20519;var owner__$1 = owner;var G__20520__$1 = G__20520;while(true){
var map__20524 = G__20519__$1;var map__20524__$1 = ((cljs.core.seq_QMARK_.call(null,map__20524))?cljs.core.apply.call(null,cljs.core.hash_map,map__20524):map__20524);var map__20525 = cljs.core.get.call(null,map__20524__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20525__$1 = ((cljs.core.seq_QMARK_.call(null,map__20525))?cljs.core.apply.call(null,cljs.core.hash_map,map__20525):map__20525);var timeline_chart__$2 = map__20525__$1;var query__$1 = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20524__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20526 = G__20520__$1;var map__20526__$1 = ((cljs.core.seq_QMARK_.call(null,map__20526))?cljs.core.apply.call(null,cljs.core.hash_map,map__20526):map__20526);var opts__$1 = map__20526__$1;var id__$1 = cljs.core.get.call(null,map__20526__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20527 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20527 = (function (query,map__20522,map__20526,owner,G__20519,input_schema20454,map__20524,map__20523,timeline_data,input_checker20455,filter_spec,G__20459,map__20525,output_checker20456,validate__6034__auto__,G__20520,id,timeline_chart,map__20521,opts,ufv__,G__20457,G__20458,output_schema20453,meta20528){
this.query = query;
this.map__20522 = map__20522;
this.map__20526 = map__20526;
this.owner = owner;
this.G__20519 = G__20519;
this.input_schema20454 = input_schema20454;
this.map__20524 = map__20524;
this.map__20523 = map__20523;
this.timeline_data = timeline_data;
this.input_checker20455 = input_checker20455;
this.filter_spec = filter_spec;
this.G__20459 = G__20459;
this.map__20525 = map__20525;
this.output_checker20456 = output_checker20456;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__20520 = G__20520;
this.id = id;
this.timeline_chart = timeline_chart;
this.map__20521 = map__20521;
this.opts = opts;
this.ufv__ = ufv__;
this.G__20457 = G__20457;
this.G__20458 = G__20458;
this.output_schema20453 = output_schema20453;
this.meta20528 = meta20528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20527.cljs$lang$type = true;
clustermap.components.timeline_chart.t20527.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20527";
clustermap.components.timeline_chart.t20527.cljs$lang$ctorPrWriter = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20527");
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.t20527.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20527.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.t20527.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20527.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (_,p__20530,___$1){var self__ = this;
var map__20531 = p__20530;var map__20531__$1 = ((cljs.core.seq_QMARK_.call(null,map__20531))?cljs.core.apply.call(null,cljs.core.hash_map,map__20531):map__20531);var map__20532 = cljs.core.get.call(null,map__20531__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20532__$1 = ((cljs.core.seq_QMARK_.call(null,map__20532))?cljs.core.apply.call(null,cljs.core.hash_map,map__20532):map__20532);var prev_query = cljs.core.get.call(null,map__20532__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20532__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20531__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.t20527.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20527.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (_,p__20533,p__20534){var self__ = this;
var map__20535 = p__20533;var map__20535__$1 = ((cljs.core.seq_QMARK_.call(null,map__20535))?cljs.core.apply.call(null,cljs.core.hash_map,map__20535):map__20535);var map__20536 = cljs.core.get.call(null,map__20535__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20536__$1 = ((cljs.core.seq_QMARK_.call(null,map__20536))?cljs.core.apply.call(null,cljs.core.hash_map,map__20536):map__20536);var next_query = cljs.core.get.call(null,map__20536__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20536__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20535__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20537 = p__20534;var map__20537__$1 = ((cljs.core.seq_QMARK_.call(null,map__20537))?cljs.core.apply.call(null,cljs.core.hash_map,map__20537):map__20537);var fetch_data_fn = cljs.core.get.call(null,map__20537__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20535,map__20535__$1,map__20536,map__20536__$1,next_query,next_timeline_data,next_filter_spec,map__20537,map__20537__$1,fetch_data_fn,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20535,map__20535__$1,map__20536,map__20536__$1,next_query,next_timeline_data,next_filter_spec,map__20537,map__20537__$1,fetch_data_fn,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (state_20556){var state_val_20557 = (state_20556[(1)]);if((state_val_20557 === (5)))
{var inst_20554 = (state_20556[(2)]);var state_20556__$1 = state_20556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20556__$1,inst_20554);
} else
{if((state_val_20557 === (4)))
{var state_20556__$1 = state_20556;var statearr_20558_20580 = state_20556__$1;(statearr_20558_20580[(2)] = null);
(statearr_20558_20580[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20557 === (3)))
{var inst_20540 = (state_20556[(7)]);var inst_20542 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20543 = ["TIMELINE DATA",inst_20540];var inst_20544 = (new cljs.core.PersistentVector(null,2,(5),inst_20542,inst_20543,null));var inst_20545 = cljs.core.clj__GT_js.call(null,inst_20544);var inst_20546 = console.log(inst_20545);var inst_20547 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20548 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20549 = (new cljs.core.PersistentVector(null,1,(5),inst_20547,inst_20548,null));var inst_20550 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20540);var inst_20551 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20549,inst_20550);var state_20556__$1 = (function (){var statearr_20559 = state_20556;(statearr_20559[(8)] = inst_20546);
return statearr_20559;
})();var statearr_20560_20581 = state_20556__$1;(statearr_20560_20581[(2)] = inst_20551);
(statearr_20560_20581[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20557 === (2)))
{var inst_20540 = (state_20556[(7)]);var inst_20540__$1 = (state_20556[(2)]);var state_20556__$1 = (function (){var statearr_20561 = state_20556;(statearr_20561[(7)] = inst_20540__$1);
return statearr_20561;
})();if(cljs.core.truth_(inst_20540__$1))
{var statearr_20562_20582 = state_20556__$1;(statearr_20562_20582[(1)] = (3));
} else
{var statearr_20563_20583 = state_20556__$1;(statearr_20563_20583[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20557 === (1)))
{var inst_20538 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20556__$1 = state_20556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20556__$1,(2),inst_20538);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20535,map__20535__$1,map__20536,map__20536__$1,next_query,next_timeline_data,next_filter_spec,map__20537,map__20537__$1,fetch_data_fn,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20535,map__20535__$1,map__20536,map__20536__$1,next_query,next_timeline_data,next_filter_spec,map__20537,map__20537__$1,fetch_data_fn,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20567 = [null,null,null,null,null,null,null,null,null];(statearr_20567[(0)] = state_machine__9111__auto__);
(statearr_20567[(1)] = (1));
return statearr_20567;
});
var state_machine__9111__auto____1 = (function (state_20556){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20556);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20568){if((e20568 instanceof Object))
{var ex__9114__auto__ = e20568;var statearr_20569_20584 = state_20556;(statearr_20569_20584[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20568;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20585 = state_20556;
state_20556 = G__20585;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20556){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20535,map__20535__$1,map__20536,map__20536__$1,next_query,next_timeline_data,next_filter_spec,map__20537,map__20537__$1,fetch_data_fn,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
})();var state__9127__auto__ = (function (){var statearr_20570 = f__9126__auto__.call(null);(statearr_20570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20535,map__20535__$1,map__20536,map__20536__$1,next_query,next_timeline_data,next_filter_spec,map__20537,map__20537__$1,fetch_data_fn,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.t20527.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20527.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20571 = om.core.get_node.call(null,self__.owner,"chart");var G__20571__$1 = (((G__20571 == null))?null:jayq.core.$.call(null,G__20571));var G__20571__$2 = (((G__20571__$1 == null))?null:G__20571__$1.highcharts());var G__20571__$3 = (((G__20571__$2 == null))?null:G__20571__$2.reflow());return G__20571__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
);
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.t20527.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20527.prototype.om$core$IRender$render$arity$1 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.t20527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (_20529){var self__ = this;
var _20529__$1 = this;return self__.meta20528;
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.t20527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function (_20529,meta20528__$1){var self__ = this;
var _20529__$1 = this;return (new clustermap.components.timeline_chart.t20527(self__.query,self__.map__20522,self__.map__20526,self__.owner,self__.G__20519,self__.input_schema20454,self__.map__20524,self__.map__20523,self__.timeline_data,self__.input_checker20455,self__.filter_spec,self__.G__20459,self__.map__20525,self__.output_checker20456,self__.validate__6034__auto__,self__.G__20520,self__.id,self__.timeline_chart,self__.map__20521,self__.opts,self__.ufv__,self__.G__20457,self__.G__20458,self__.output_schema20453,meta20528__$1));
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
clustermap.components.timeline_chart.__GT_t20527 = ((function (map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576){
return (function __GT_t20527(query__$2,map__20522__$2,map__20526__$2,owner__$3,G__20519__$2,input_schema20454__$1,map__20524__$2,map__20523__$2,timeline_data__$2,input_checker20455__$1,filter_spec__$2,G__20459__$1,map__20525__$2,output_checker20456__$1,validate__6034__auto____$1,G__20520__$2,id__$2,timeline_chart__$3,map__20521__$2,opts__$2,ufv____$1,G__20457__$1,G__20458__$1,output_schema20453__$1,meta20528){return (new clustermap.components.timeline_chart.t20527(query__$2,map__20522__$2,map__20526__$2,owner__$3,G__20519__$2,input_schema20454__$1,map__20524__$2,map__20523__$2,timeline_data__$2,input_checker20455__$1,filter_spec__$2,G__20459__$1,map__20525__$2,output_checker20456__$1,validate__6034__auto____$1,G__20520__$2,id__$2,timeline_chart__$3,map__20521__$2,opts__$2,ufv____$1,G__20457__$1,G__20458__$1,output_schema20453__$1,meta20528));
});})(map__20524,map__20524__$1,map__20525,map__20525__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20526,map__20526__$1,opts__$1,id__$1,G__20519,map__20521,map__20521__$1,map__20522,map__20522__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20520,map__20523,map__20523__$1,opts,id,validate__6034__auto__,ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
}
return (new clustermap.components.timeline_chart.t20527(query__$1,map__20522__$1,map__20526__$1,owner__$2,G__20519__$1,input_schema20454_20574,map__20524__$1,map__20523__$1,timeline_data__$1,input_checker20455_20575,filter_spec__$1,G__20459,map__20525__$1,output_checker20456_20576,validate__6034__auto__,G__20520__$1,id__$1,timeline_chart__$2,map__20521__$1,opts__$1,ufv___20572,G__20457,G__20458,output_schema20453_20573,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20586 = output_checker20456_20576.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20586))
{var error__6036__auto___20587 = temp__4126__auto___20586;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20587)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20587,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20453_20573,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20572,output_schema20453_20573,input_schema20454_20574,input_checker20455_20575,output_checker20456_20576))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20453_20573,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20454_20574], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20452){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20452);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20452){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
