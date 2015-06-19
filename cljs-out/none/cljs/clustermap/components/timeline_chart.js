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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__33015,p__33016){var map__33048 = p__33015;var map__33048__$1 = ((cljs.core.seq_QMARK_.call(null,map__33048))?cljs.core.apply.call(null,cljs.core.hash_map,map__33048):map__33048);var map__33049 = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__33049__$1 = ((cljs.core.seq_QMARK_.call(null,map__33049))?cljs.core.apply.call(null,cljs.core.hash_map,map__33049):map__33049);var metrics = cljs.core.get.call(null,map__33049__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__33050 = p__33016;var map__33050__$1 = ((cljs.core.seq_QMARK_.call(null,map__33050))?cljs.core.apply.call(null,cljs.core.hash_map,map__33050):map__33050);var opts = map__33050__$1;var y1_title = cljs.core.get.call(null,map__33050__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__33050__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (p1__33014_SHARP_){return ((1900) + p1__33014_SHARP_);
});})(map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (p1__33013_SHARP_){return p1__33013_SHARP_.getYear();
});})(map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (p1__33012_SHARP_){return (new Date(p1__33012_SHARP_));
});})(map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__12290__auto__ = ((function (x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function iter__33051(s__33052){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (){var s__33052__$1 = s__33052;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33052__$1);if(temp__4126__auto__)
{var s__33052__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33052__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__33052__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__33054 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__33053 = (0);while(true){
if((i__33053 < size__12289__auto__))
{var map__33065 = cljs.core._nth.call(null,c__12288__auto__,i__33053);var map__33065__$1 = ((cljs.core.seq_QMARK_.call(null,map__33065))?cljs.core.apply.call(null,cljs.core.hash_map,map__33065):map__33065);var metric_spec = map__33065__$1;var title = cljs.core.get.call(null,map__33065__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__33065__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__33065__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__33054,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12290__auto__ = ((function (i__33053,map__33065,map__33065__$1,metric_spec,title,metric,variable,c__12288__auto__,size__12289__auto__,b__33054,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function iter__33066(s__33067){return (new cljs.core.LazySeq(null,((function (i__33053,map__33065,map__33065__$1,metric_spec,title,metric,variable,c__12288__auto__,size__12289__auto__,b__33054,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (){var s__33067__$1 = s__33067;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33067__$1);if(temp__4126__auto____$1)
{var s__33067__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33067__$2))
{var c__12288__auto____$1 = cljs.core.chunk_first.call(null,s__33067__$2);var size__12289__auto____$1 = cljs.core.count.call(null,c__12288__auto____$1);var b__33069 = cljs.core.chunk_buffer.call(null,size__12289__auto____$1);if((function (){var i__33068 = (0);while(true){
if((i__33068 < size__12289__auto____$1))
{var record = cljs.core._nth.call(null,c__12288__auto____$1,i__33068);cljs.core.chunk_append.call(null,b__33069,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__33079 = (i__33068 + (1));
i__33068 = G__33079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33069),iter__33066.call(null,cljs.core.chunk_rest.call(null,s__33067__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33069),null);
}
} else
{var record = cljs.core.first.call(null,s__33067__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__33066.call(null,cljs.core.rest.call(null,s__33067__$2)));
}
} else
{return null;
}
break;
}
});})(i__33053,map__33065,map__33065__$1,metric_spec,title,metric,variable,c__12288__auto__,size__12289__auto__,b__33054,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
,null,null));
});})(i__33053,map__33065,map__33065__$1,metric_spec,title,metric,variable,c__12288__auto__,size__12289__auto__,b__33054,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,records);
})()));
{
var G__33080 = (i__33053 + (1));
i__33053 = G__33080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33054),iter__33051.call(null,cljs.core.chunk_rest.call(null,s__33052__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33054),null);
}
} else
{var map__33070 = cljs.core.first.call(null,s__33052__$2);var map__33070__$1 = ((cljs.core.seq_QMARK_.call(null,map__33070))?cljs.core.apply.call(null,cljs.core.hash_map,map__33070):map__33070);var metric_spec = map__33070__$1;var title = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__12290__auto__ = ((function (map__33070,map__33070__$1,metric_spec,title,metric,variable,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function iter__33071(s__33072){return (new cljs.core.LazySeq(null,((function (map__33070,map__33070__$1,metric_spec,title,metric,variable,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (){var s__33072__$1 = s__33072;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33072__$1);if(temp__4126__auto____$1)
{var s__33072__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33072__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__33072__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__33074 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__33073 = (0);while(true){
if((i__33073 < size__12289__auto__))
{var record = cljs.core._nth.call(null,c__12288__auto__,i__33073);cljs.core.chunk_append.call(null,b__33074,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__33081 = (i__33073 + (1));
i__33073 = G__33081;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33074),iter__33071.call(null,cljs.core.chunk_rest.call(null,s__33072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33074),null);
}
} else
{var record = cljs.core.first.call(null,s__33072__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__33071.call(null,cljs.core.rest.call(null,s__33072__$2)));
}
} else
{return null;
}
break;
}
});})(map__33070,map__33070__$1,metric_spec,title,metric,variable,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
,null,null));
});})(map__33070,map__33070__$1,metric_spec,title,metric,variable,s__33052__$2,temp__4126__auto__,x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,records);
})()),iter__33051.call(null,cljs.core.rest.call(null,s__33052__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__12290__auto__ = ((function (x_labels,metrics__$1,ys,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function iter__33075(s__33076){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title){
return (function (){var s__33076__$1 = s__33076;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33076__$1);if(temp__4126__auto__)
{var s__33076__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33076__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__33076__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__33078 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__33077 = (0);while(true){
if((i__33077 < size__12289__auto__))
{var y = cljs.core._nth.call(null,c__12288__auto__,i__33077);cljs.core.chunk_append.call(null,b__33078,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__11552__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__33082 = (i__33077 + (1));
i__33077 = G__33082;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33078),iter__33075.call(null,cljs.core.chunk_rest.call(null,s__33076__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33078),null);
}
} else
{var y = cljs.core.first.call(null,s__33076__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__11552__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__33075.call(null,cljs.core.rest.call(null,s__33076__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__33048,map__33048__$1,map__33049,map__33049__$1,metrics,color,records,map__33050,map__33050__$1,opts,y1_title,y0_title))
;return iter__12290__auto__.call(null,ys);
})()], null)));
});
var ufv___33203 = schema.utils.use_fn_validation;var output_schema33084_33204 = schema.core.Any;var input_schema33085_33205 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker33086_33206 = schema.core.checker.call(null,input_schema33085_33205);var output_checker33087_33207 = schema.core.checker.call(null,output_schema33084_33204);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function timeline_chart(G__33088,G__33089,G__33090){var validate__13947__auto__ = ufv___33203.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___33208 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33088,G__33089,G__33090], null);var temp__4126__auto___33209 = input_checker33086_33206.call(null,args__13948__auto___33208);if(cljs.core.truth_(temp__4126__auto___33209))
{var error__13949__auto___33210 = temp__4126__auto___33209;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__13949__auto___33210)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33210,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33208,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33085_33205,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var G__33150 = G__33088;var map__33152 = G__33150;var map__33152__$1 = ((cljs.core.seq_QMARK_.call(null,map__33152))?cljs.core.apply.call(null,cljs.core.hash_map,map__33152):map__33152);var map__33153 = cljs.core.get.call(null,map__33152__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__33153__$1 = ((cljs.core.seq_QMARK_.call(null,map__33153))?cljs.core.apply.call(null,cljs.core.hash_map,map__33153):map__33153);var timeline_chart__$1 = map__33153__$1;var query = cljs.core.get.call(null,map__33153__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__33153__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__33152__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33089;var G__33151 = G__33090;var map__33154 = G__33151;var map__33154__$1 = ((cljs.core.seq_QMARK_.call(null,map__33154))?cljs.core.apply.call(null,cljs.core.hash_map,map__33154):map__33154);var opts = map__33154__$1;var id = cljs.core.get.call(null,map__33154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__33150__$1 = G__33150;var owner__$1 = owner;var G__33151__$1 = G__33151;while(true){
var map__33155 = G__33150__$1;var map__33155__$1 = ((cljs.core.seq_QMARK_.call(null,map__33155))?cljs.core.apply.call(null,cljs.core.hash_map,map__33155):map__33155);var map__33156 = cljs.core.get.call(null,map__33155__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__33156__$1 = ((cljs.core.seq_QMARK_.call(null,map__33156))?cljs.core.apply.call(null,cljs.core.hash_map,map__33156):map__33156);var timeline_chart__$2 = map__33156__$1;var query__$1 = cljs.core.get.call(null,map__33156__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__33156__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__33155__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__33157 = G__33151__$1;var map__33157__$1 = ((cljs.core.seq_QMARK_.call(null,map__33157))?cljs.core.apply.call(null,cljs.core.hash_map,map__33157):map__33157);var opts__$1 = map__33157__$1;var id__$1 = cljs.core.get.call(null,map__33157__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t33158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t33158 = (function (query,G__33090,owner,G__33089,map__33152,G__33151,output_checker33087,map__33155,timeline_data,input_checker33086,filter_spec,map__33157,G__33150,input_schema33085,map__33154,output_schema33084,validate__13947__auto__,id,timeline_chart,opts,ufv__,map__33153,G__33088,map__33156,meta33159){
this.query = query;
this.G__33090 = G__33090;
this.owner = owner;
this.G__33089 = G__33089;
this.map__33152 = map__33152;
this.G__33151 = G__33151;
this.output_checker33087 = output_checker33087;
this.map__33155 = map__33155;
this.timeline_data = timeline_data;
this.input_checker33086 = input_checker33086;
this.filter_spec = filter_spec;
this.map__33157 = map__33157;
this.G__33150 = G__33150;
this.input_schema33085 = input_schema33085;
this.map__33154 = map__33154;
this.output_schema33084 = output_schema33084;
this.validate__13947__auto__ = validate__13947__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.ufv__ = ufv__;
this.map__33153 = map__33153;
this.G__33088 = G__33088;
this.map__33156 = map__33156;
this.meta33159 = meta33159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t33158.cljs$lang$type = true;
clustermap.components.timeline_chart.t33158.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t33158";
clustermap.components.timeline_chart.t33158.cljs$lang$ctorPrWriter = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.timeline-chart/t33158");
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.t33158.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t33158.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.t33158.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t33158.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (_,p__33161,___$1){var self__ = this;
var map__33162 = p__33161;var map__33162__$1 = ((cljs.core.seq_QMARK_.call(null,map__33162))?cljs.core.apply.call(null,cljs.core.hash_map,map__33162):map__33162);var map__33163 = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__33163__$1 = ((cljs.core.seq_QMARK_.call(null,map__33163))?cljs.core.apply.call(null,cljs.core.hash_map,map__33163):map__33163);var prev_query = cljs.core.get.call(null,map__33163__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__33163__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.t33158.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t33158.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (_,p__33164,p__33165){var self__ = this;
var map__33166 = p__33164;var map__33166__$1 = ((cljs.core.seq_QMARK_.call(null,map__33166))?cljs.core.apply.call(null,cljs.core.hash_map,map__33166):map__33166);var map__33167 = cljs.core.get.call(null,map__33166__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__33167__$1 = ((cljs.core.seq_QMARK_.call(null,map__33167))?cljs.core.apply.call(null,cljs.core.hash_map,map__33167):map__33167);var next_query = cljs.core.get.call(null,map__33167__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__33167__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__33166__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33168 = p__33165;var map__33168__$1 = ((cljs.core.seq_QMARK_.call(null,map__33168))?cljs.core.apply.call(null,cljs.core.hash_map,map__33168):map__33168);var fetch_data_fn = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__33166,map__33166__$1,map__33167,map__33167__$1,next_query,next_timeline_data,next_filter_spec,map__33168,map__33168__$1,fetch_data_fn,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__33166,map__33166__$1,map__33167,map__33167__$1,next_query,next_timeline_data,next_filter_spec,map__33168,map__33168__$1,fetch_data_fn,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (state_33187){var state_val_33188 = (state_33187[(1)]);if((state_val_33188 === (5)))
{var inst_33185 = (state_33187[(2)]);var state_33187__$1 = state_33187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33187__$1,inst_33185);
} else
{if((state_val_33188 === (4)))
{var state_33187__$1 = state_33187;var statearr_33189_33211 = state_33187__$1;(statearr_33189_33211[(2)] = null);
(statearr_33189_33211[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33188 === (3)))
{var inst_33171 = (state_33187[(7)]);var inst_33173 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33174 = ["TIMELINE DATA",inst_33171];var inst_33175 = (new cljs.core.PersistentVector(null,2,(5),inst_33173,inst_33174,null));var inst_33176 = cljs.core.clj__GT_js.call(null,inst_33175);var inst_33177 = console.log(inst_33176);var inst_33178 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33179 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_33180 = (new cljs.core.PersistentVector(null,1,(5),inst_33178,inst_33179,null));var inst_33181 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_33171);var inst_33182 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_33180,inst_33181);var state_33187__$1 = (function (){var statearr_33190 = state_33187;(statearr_33190[(8)] = inst_33177);
return statearr_33190;
})();var statearr_33191_33212 = state_33187__$1;(statearr_33191_33212[(2)] = inst_33182);
(statearr_33191_33212[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33188 === (2)))
{var inst_33171 = (state_33187[(7)]);var inst_33171__$1 = (state_33187[(2)]);var state_33187__$1 = (function (){var statearr_33192 = state_33187;(statearr_33192[(7)] = inst_33171__$1);
return statearr_33192;
})();if(cljs.core.truth_(inst_33171__$1))
{var statearr_33193_33213 = state_33187__$1;(statearr_33193_33213[(1)] = (3));
} else
{var statearr_33194_33214 = state_33187__$1;(statearr_33194_33214[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33188 === (1)))
{var inst_33169 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_33187__$1 = state_33187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33187__$1,(2),inst_33169);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__33166,map__33166__$1,map__33167,map__33167__$1,next_query,next_timeline_data,next_filter_spec,map__33168,map__33168__$1,fetch_data_fn,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__33166,map__33166__$1,map__33167,map__33167__$1,next_query,next_timeline_data,next_filter_spec,map__33168,map__33168__$1,fetch_data_fn,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_33198 = [null,null,null,null,null,null,null,null,null];(statearr_33198[(0)] = state_machine__16719__auto__);
(statearr_33198[(1)] = (1));
return statearr_33198;
});
var state_machine__16719__auto____1 = (function (state_33187){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_33187);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e33199){if((e33199 instanceof Object))
{var ex__16722__auto__ = e33199;var statearr_33200_33215 = state_33187;(statearr_33200_33215[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33216 = state_33187;
state_33187 = G__33216;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_33187){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_33187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__33166,map__33166__$1,map__33167,map__33167__$1,next_query,next_timeline_data,next_filter_spec,map__33168,map__33168__$1,fetch_data_fn,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
})();var state__16735__auto__ = (function (){var statearr_33201 = f__16734__auto__.call(null);(statearr_33201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_33201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__33166,map__33166__$1,map__33167,map__33167__$1,next_query,next_timeline_data,next_filter_spec,map__33168,map__33168__$1,fetch_data_fn,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.t33158.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t33158.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33202 = om.core.get_node.call(null,self__.owner,"chart");var G__33202__$1 = (((G__33202 == null))?null:jayq.core.$.call(null,G__33202));var G__33202__$2 = (((G__33202__$1 == null))?null:G__33202__$1.highcharts());var G__33202__$3 = (((G__33202__$2 == null))?null:G__33202__$2.reflow());return G__33202__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
);
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.t33158.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t33158.prototype.om$core$IRender$render$arity$1 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.t33158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (_33160){var self__ = this;
var _33160__$1 = this;return self__.meta33159;
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.t33158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function (_33160,meta33159__$1){var self__ = this;
var _33160__$1 = this;return (new clustermap.components.timeline_chart.t33158(self__.query,self__.G__33090,self__.owner,self__.G__33089,self__.map__33152,self__.G__33151,self__.output_checker33087,self__.map__33155,self__.timeline_data,self__.input_checker33086,self__.filter_spec,self__.map__33157,self__.G__33150,self__.input_schema33085,self__.map__33154,self__.output_schema33084,self__.validate__13947__auto__,self__.id,self__.timeline_chart,self__.opts,self__.ufv__,self__.map__33153,self__.G__33088,self__.map__33156,meta33159__$1));
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
clustermap.components.timeline_chart.__GT_t33158 = ((function (map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207){
return (function __GT_t33158(query__$2,G__33090__$1,owner__$3,G__33089__$1,map__33152__$2,G__33151__$2,output_checker33087__$1,map__33155__$2,timeline_data__$2,input_checker33086__$1,filter_spec__$2,map__33157__$2,G__33150__$2,input_schema33085__$1,map__33154__$2,output_schema33084__$1,validate__13947__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,map__33153__$2,G__33088__$1,map__33156__$2,meta33159){return (new clustermap.components.timeline_chart.t33158(query__$2,G__33090__$1,owner__$3,G__33089__$1,map__33152__$2,G__33151__$2,output_checker33087__$1,map__33155__$2,timeline_data__$2,input_checker33086__$1,filter_spec__$2,map__33157__$2,G__33150__$2,input_schema33085__$1,map__33154__$2,output_schema33084__$1,validate__13947__auto____$1,id__$2,timeline_chart__$3,opts__$2,ufv____$1,map__33153__$2,G__33088__$1,map__33156__$2,meta33159));
});})(map__33155,map__33155__$1,map__33156,map__33156__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__33157,map__33157__$1,opts__$1,id__$1,G__33150,map__33152,map__33152__$1,map__33153,map__33153__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__33151,map__33154,map__33154__$1,opts,id,validate__13947__auto__,ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
}
return (new clustermap.components.timeline_chart.t33158(query__$1,G__33090,owner__$2,G__33089,map__33152__$1,G__33151__$1,output_checker33087_33207,map__33155__$1,timeline_data__$1,input_checker33086_33206,filter_spec__$1,map__33157__$1,G__33150__$1,input_schema33085_33205,map__33154__$1,output_schema33084_33204,validate__13947__auto__,id__$1,timeline_chart__$2,opts__$1,ufv___33203,map__33153__$1,G__33088,map__33156__$1,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___33217 = output_checker33087_33207.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33217))
{var error__13949__auto___33218 = temp__4126__auto___33217;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__13949__auto___33218)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33218,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33084_33204,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___33203,output_schema33084_33204,input_schema33085_33205,input_checker33086_33206,output_checker33087_33207))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema33084_33204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33085_33205], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__15763__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__15763__auto__,m33083){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__15763__auto__,m33083);
});
__GT_timeline_chart = function(cursor__15763__auto__,m33083){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__15763__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__15763__auto__,m33083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;

//# sourceMappingURL=timeline_chart.js.map