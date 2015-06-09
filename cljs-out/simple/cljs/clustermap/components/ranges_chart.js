// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32459){var map__32505 = p__32459;var map__32505__$1 = ((cljs.core.seq_QMARK_.call(null,map__32505))?cljs.core.apply.call(null,cljs.core.hash_map,map__32505):map__32505);var map__32506 = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32506__$1 = ((cljs.core.seq_QMARK_.call(null,map__32506))?cljs.core.apply.call(null,cljs.core.hash_map,map__32506):map__32506);var table_data = map__32506__$1;var query = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32507 = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32507__$1 = ((cljs.core.seq_QMARK_.call(null,map__32507))?cljs.core.apply.call(null,cljs.core.hash_map,map__32507):map__32507);var controls = map__32507__$1;var title = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32508){var map__32509 = p__32508;var map__32509__$1 = ((cljs.core.seq_QMARK_.call(null,map__32509))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);var x = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32510(s__32511){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32511__$1 = s__32511;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32511__$1);if(temp__4126__auto__)
{var s__32511__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32511__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32511__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32513 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32512 = (0);while(true){
if((i__32512 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32512);cljs.core.chunk_append.call(null,b__32513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32512,yk,c__4375__auto__,size__4376__auto__,b__32513,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32522(s__32523){return (new cljs.core.LazySeq(null,((function (i__32512,yk,c__4375__auto__,size__4376__auto__,b__32513,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32523__$1 = s__32523;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32523__$1);if(temp__4126__auto____$1)
{var s__32523__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32523__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32523__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32525 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32524 = (0);while(true){
if((i__32524 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32524);cljs.core.chunk_append.call(null,b__32525,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32550 = (i__32524 + (1));
i__32524 = G__32550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32525),iter__32522.call(null,cljs.core.chunk_rest.call(null,s__32523__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32525),null);
}
} else
{var xk = cljs.core.first.call(null,s__32523__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32522.call(null,cljs.core.rest.call(null,s__32523__$2)));
}
} else
{return null;
}
break;
}
});})(i__32512,yk,c__4375__auto__,size__4376__auto__,b__32513,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32512,yk,c__4375__auto__,size__4376__auto__,b__32513,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__32551 = (i__32512 + (1));
i__32512 = G__32551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32513),iter__32510.call(null,cljs.core.chunk_rest.call(null,s__32511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32513),null);
}
} else
{var yk = cljs.core.first.call(null,s__32511__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32526(s__32527){return (new cljs.core.LazySeq(null,((function (yk,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32527__$1 = s__32527;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32527__$1);if(temp__4126__auto____$1)
{var s__32527__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32527__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32527__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32529 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32528 = (0);while(true){
if((i__32528 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32528);cljs.core.chunk_append.call(null,b__32529,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32552 = (i__32528 + (1));
i__32528 = G__32552;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32529),iter__32526.call(null,cljs.core.chunk_rest.call(null,s__32527__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32529),null);
}
} else
{var xk = cljs.core.first.call(null,s__32527__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32526.call(null,cljs.core.rest.call(null,s__32527__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32511__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32510.call(null,cljs.core.rest.call(null,s__32511__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32530(s__32531){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32531__$1 = s__32531;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32531__$1);if(temp__4126__auto__)
{var s__32531__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32531__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32531__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32533 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32532 = (0);while(true){
if((i__32532 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32532);cljs.core.chunk_append.call(null,b__32533,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__32553 = (i__32532 + (1));
i__32532 = G__32553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32533),iter__32530.call(null,cljs.core.chunk_rest.call(null,s__32531__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32533),null);
}
} else
{var xa = cljs.core.first.call(null,s__32531__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32530.call(null,cljs.core.rest.call(null,s__32531__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32534(s__32535){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32535__$1 = s__32535;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32535__$1);if(temp__4126__auto__)
{var s__32535__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32535__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32535__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32537 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32536 = (0);while(true){
if((i__32536 < size__4376__auto__))
{var vec__32540 = cljs.core._nth.call(null,c__4375__auto__,i__32536);var ya = cljs.core.nth.call(null,vec__32540,(0),null);var i = cljs.core.nth.call(null,vec__32540,(1),null);cljs.core.chunk_append.call(null,b__32537,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__32554 = (i__32536 + (1));
i__32536 = G__32554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32537),iter__32534.call(null,cljs.core.chunk_rest.call(null,s__32535__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32537),null);
}
} else
{var vec__32541 = cljs.core.first.call(null,s__32535__$2);var ya = cljs.core.nth.call(null,vec__32541,(0),null);var i = cljs.core.nth.call(null,vec__32541,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32534.call(null,cljs.core.rest.call(null,s__32535__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32542(s__32543){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32543__$1 = s__32543;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32543__$1);if(temp__4126__auto__)
{var s__32543__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32543__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32543__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32545 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32544 = (0);while(true){
if((i__32544 < size__4376__auto__))
{var vec__32548 = cljs.core._nth.call(null,c__4375__auto__,i__32544);var ya = cljs.core.nth.call(null,vec__32548,(0),null);var i = cljs.core.nth.call(null,vec__32548,(1),null);cljs.core.chunk_append.call(null,b__32545,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__32555 = (i__32544 + (1));
i__32544 = G__32555;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32545),iter__32542.call(null,cljs.core.chunk_rest.call(null,s__32543__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32545),null);
}
} else
{var vec__32549 = cljs.core.first.call(null,s__32543__$2);var ya = cljs.core.nth.call(null,vec__32549,(0),null);var i = cljs.core.nth.call(null,vec__32549,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__32542.call(null,cljs.core.rest.call(null,s__32543__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32505,map__32505__$1,map__32506,map__32506__$1,table_data,query,results,map__32507,map__32507__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___32677 = schema.utils.use_fn_validation;var output_schema32557_32678 = schema.core.Any;var input_schema32558_32679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker32559_32680 = schema.core.checker.call(null,input_schema32558_32679);var output_checker32560_32681 = schema.core.checker.call(null,output_schema32557_32678);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function ranges_chart_component(G__32561,G__32562){var validate__6034__auto__ = ufv___32677.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32561,G__32562], null);var temp__4126__auto___32683 = input_checker32559_32680.call(null,args__6035__auto___32682);if(cljs.core.truth_(temp__4126__auto___32683))
{var error__6036__auto___32684 = temp__4126__auto___32683;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32684,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32682,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32558_32679,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32623 = G__32561;var map__32624 = G__32623;var map__32624__$1 = ((cljs.core.seq_QMARK_.call(null,map__32624))?cljs.core.apply.call(null,cljs.core.hash_map,map__32624):map__32624);var props = map__32624__$1;var map__32625 = cljs.core.get.call(null,map__32624__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32625__$1 = ((cljs.core.seq_QMARK_.call(null,map__32625))?cljs.core.apply.call(null,cljs.core.hash_map,map__32625):map__32625);var table_state = map__32625__$1;var table_data = cljs.core.get.call(null,map__32625__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32626 = cljs.core.get.call(null,map__32625__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32626__$1 = ((cljs.core.seq_QMARK_.call(null,map__32626))?cljs.core.apply.call(null,cljs.core.hash_map,map__32626):map__32626);var controls = map__32626__$1;var index_type = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__32626__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__32624__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32562;var G__32623__$1 = G__32623;var owner__$1 = owner;while(true){
var map__32627 = G__32623__$1;var map__32627__$1 = ((cljs.core.seq_QMARK_.call(null,map__32627))?cljs.core.apply.call(null,cljs.core.hash_map,map__32627):map__32627);var props__$1 = map__32627__$1;var map__32628 = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32628__$1 = ((cljs.core.seq_QMARK_.call(null,map__32628))?cljs.core.apply.call(null,cljs.core.hash_map,map__32628):map__32628);var table_state__$1 = map__32628__$1;var table_data__$1 = cljs.core.get.call(null,map__32628__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32629 = cljs.core.get.call(null,map__32628__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32629__$1 = ((cljs.core.seq_QMARK_.call(null,map__32629))?cljs.core.apply.call(null,cljs.core.hash_map,map__32629):map__32629);var controls__$1 = map__32629__$1;var index_type__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__32627__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t32630 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t32630 = (function (index_type,row_aggs,owner,metric_path,props,output_checker32560,row_path,table_data,ranges_chart_component,map__32626,metric_aggs,index,col_path,filter_spec,map__32629,table_state,controls,input_checker32559,col_aggs,title,rows,map__32628,output_schema32557,G__32562,cols,G__32561,input_schema32558,validate__6034__auto__,map__32627,ufv__,map__32625,G__32623,map__32624,meta32631){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.output_checker32560 = output_checker32560;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.map__32626 = map__32626;
this.metric_aggs = metric_aggs;
this.index = index;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__32629 = map__32629;
this.table_state = table_state;
this.controls = controls;
this.input_checker32559 = input_checker32559;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.map__32628 = map__32628;
this.output_schema32557 = output_schema32557;
this.G__32562 = G__32562;
this.cols = cols;
this.G__32561 = G__32561;
this.input_schema32558 = input_schema32558;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__32627 = map__32627;
this.ufv__ = ufv__;
this.map__32625 = map__32625;
this.G__32623 = G__32623;
this.map__32624 = map__32624;
this.meta32631 = meta32631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t32630.cljs$lang$type = true;
clustermap.components.ranges_chart.t32630.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t32630";
clustermap.components.ranges_chart.t32630.cljs$lang$ctorPrWriter = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t32630");
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.t32630.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t32630.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.t32630.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t32630.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (_,p__32633,___$1){var self__ = this;
var map__32634 = p__32633;var map__32634__$1 = ((cljs.core.seq_QMARK_.call(null,map__32634))?cljs.core.apply.call(null,cljs.core.hash_map,map__32634):map__32634);var prev_props = map__32634__$1;var map__32635 = cljs.core.get.call(null,map__32634__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32635__$1 = ((cljs.core.seq_QMARK_.call(null,map__32635))?cljs.core.apply.call(null,cljs.core.hash_map,map__32635):map__32635);var prev_table_data = cljs.core.get.call(null,map__32635__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.t32630.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t32630.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (_,p__32636,p__32637){var self__ = this;
var map__32638 = p__32636;var map__32638__$1 = ((cljs.core.seq_QMARK_.call(null,map__32638))?cljs.core.apply.call(null,cljs.core.hash_map,map__32638):map__32638);var next_props = map__32638__$1;var map__32639 = cljs.core.get.call(null,map__32638__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32639__$1 = ((cljs.core.seq_QMARK_.call(null,map__32639))?cljs.core.apply.call(null,cljs.core.hash_map,map__32639):map__32639);var next_table_state = map__32639__$1;var next_table_data = cljs.core.get.call(null,map__32639__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32640 = cljs.core.get.call(null,map__32639__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32640__$1 = ((cljs.core.seq_QMARK_.call(null,map__32640))?cljs.core.apply.call(null,cljs.core.hash_map,map__32640):map__32640);var next_controls = map__32640__$1;var next_col_aggs = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__32638__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32641 = p__32637;var map__32641__$1 = ((cljs.core.seq_QMARK_.call(null,map__32641))?cljs.core.apply.call(null,cljs.core.hash_map,map__32641):map__32641);var fetch_data_fn = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32638,map__32638__$1,next_props,map__32639,map__32639__$1,next_table_state,next_table_data,map__32640,map__32640__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32641,map__32641__$1,fetch_data_fn,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32638,map__32638__$1,next_props,map__32639,map__32639__$1,next_table_state,next_table_data,map__32640,map__32640__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32641,map__32641__$1,fetch_data_fn,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (state_32659){var state_val_32660 = (state_32659[(1)]);if((state_val_32660 === (5)))
{var inst_32657 = (state_32659[(2)]);var state_32659__$1 = state_32659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32659__$1,inst_32657);
} else
{if((state_val_32660 === (4)))
{var state_32659__$1 = state_32659;var statearr_32661_32685 = state_32659__$1;(statearr_32661_32685[(2)] = null);
(statearr_32661_32685[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32660 === (3)))
{var inst_32644 = (state_32659[(7)]);var inst_32646 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32647 = ["RANGES-TABLE-DATA",inst_32644];var inst_32648 = (new cljs.core.PersistentVector(null,2,(5),inst_32646,inst_32647,null));var inst_32649 = cljs.core.clj__GT_js.call(null,inst_32648);var inst_32650 = console.log(inst_32649);var inst_32651 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32652 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32653 = (new cljs.core.PersistentVector(null,1,(5),inst_32651,inst_32652,null));var inst_32654 = om.core.update_BANG_.call(null,self__.table_state,inst_32653,inst_32644);var state_32659__$1 = (function (){var statearr_32662 = state_32659;(statearr_32662[(8)] = inst_32650);
return statearr_32662;
})();var statearr_32663_32686 = state_32659__$1;(statearr_32663_32686[(2)] = inst_32654);
(statearr_32663_32686[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32660 === (2)))
{var inst_32644 = (state_32659[(7)]);var inst_32644__$1 = (state_32659[(2)]);var state_32659__$1 = (function (){var statearr_32664 = state_32659;(statearr_32664[(7)] = inst_32644__$1);
return statearr_32664;
})();if(cljs.core.truth_(inst_32644__$1))
{var statearr_32665_32687 = state_32659__$1;(statearr_32665_32687[(1)] = (3));
} else
{var statearr_32666_32688 = state_32659__$1;(statearr_32666_32688[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32660 === (1)))
{var inst_32642 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_32659__$1 = state_32659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32659__$1,(2),inst_32642);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32638,map__32638__$1,next_props,map__32639,map__32639__$1,next_table_state,next_table_data,map__32640,map__32640__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32641,map__32641__$1,fetch_data_fn,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32638,map__32638__$1,next_props,map__32639,map__32639__$1,next_table_state,next_table_data,map__32640,map__32640__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32641,map__32641__$1,fetch_data_fn,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32670 = [null,null,null,null,null,null,null,null,null];(statearr_32670[(0)] = state_machine__9111__auto__);
(statearr_32670[(1)] = (1));
return statearr_32670;
});
var state_machine__9111__auto____1 = (function (state_32659){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32659);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32671){if((e32671 instanceof Object))
{var ex__9114__auto__ = e32671;var statearr_32672_32689 = state_32659;(statearr_32672_32689[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32671;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32690 = state_32659;
state_32659 = G__32690;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32659){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32638,map__32638__$1,next_props,map__32639,map__32639__$1,next_table_state,next_table_data,map__32640,map__32640__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32641,map__32641__$1,fetch_data_fn,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
})();var state__9127__auto__ = (function (){var statearr_32673 = f__9126__auto__.call(null);(statearr_32673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32638,map__32638__$1,next_props,map__32639,map__32639__$1,next_table_state,next_table_data,map__32640,map__32640__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32641,map__32641__$1,fetch_data_fn,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.t32630.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t32630.prototype.om$core$IRender$render$arity$1 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.t32630.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t32630.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32676 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__32676__$1 = (((G__32676 == null))?null:jayq.core.$.call(null,G__32676));var G__32676__$2 = (((G__32676__$1 == null))?null:G__32676__$1.highcharts());var G__32676__$3 = (((G__32676__$2 == null))?null:G__32676__$2.reflow());return G__32676__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
);
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.t32630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (_32632){var self__ = this;
var _32632__$1 = this;return self__.meta32631;
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.t32630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function (_32632,meta32631__$1){var self__ = this;
var _32632__$1 = this;return (new clustermap.components.ranges_chart.t32630(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.output_checker32560,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.map__32626,self__.metric_aggs,self__.index,self__.col_path,self__.filter_spec,self__.map__32629,self__.table_state,self__.controls,self__.input_checker32559,self__.col_aggs,self__.title,self__.rows,self__.map__32628,self__.output_schema32557,self__.G__32562,self__.cols,self__.G__32561,self__.input_schema32558,self__.validate__6034__auto__,self__.map__32627,self__.ufv__,self__.map__32625,self__.G__32623,self__.map__32624,meta32631__$1));
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
clustermap.components.ranges_chart.__GT_t32630 = ((function (map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681){
return (function __GT_t32630(index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,output_checker32560__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,map__32626__$2,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,map__32629__$2,table_state__$2,controls__$2,input_checker32559__$1,col_aggs__$2,title__$2,rows__$2,map__32628__$2,output_schema32557__$1,G__32562__$1,cols__$2,G__32561__$1,input_schema32558__$1,validate__6034__auto____$1,map__32627__$2,ufv____$1,map__32625__$2,G__32623__$2,map__32624__$2,meta32631){return (new clustermap.components.ranges_chart.t32630(index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,output_checker32560__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,map__32626__$2,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,map__32629__$2,table_state__$2,controls__$2,input_checker32559__$1,col_aggs__$2,title__$2,rows__$2,map__32628__$2,output_schema32557__$1,G__32562__$1,cols__$2,G__32561__$1,input_schema32558__$1,validate__6034__auto____$1,map__32627__$2,ufv____$1,map__32625__$2,G__32623__$2,map__32624__$2,meta32631));
});})(map__32627,map__32627__$1,props__$1,map__32628,map__32628__$1,table_state__$1,table_data__$1,map__32629,map__32629__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32623,map__32624,map__32624__$1,props,map__32625,map__32625__$1,table_state,table_data,map__32626,map__32626__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
}
return (new clustermap.components.ranges_chart.t32630(index_type__$1,row_aggs__$1,owner__$2,metric_path__$1,props__$1,output_checker32560_32681,row_path__$1,table_data__$1,ranges_chart_component,map__32626__$1,metric_aggs__$1,index__$1,col_path__$1,filter_spec__$1,map__32629__$1,table_state__$1,controls__$1,input_checker32559_32680,col_aggs__$1,title__$1,rows__$1,map__32628__$1,output_schema32557_32678,G__32562,cols__$1,G__32561,input_schema32558_32679,validate__6034__auto__,map__32627__$1,ufv___32677,map__32625__$1,G__32623__$1,map__32624__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32691 = output_checker32560_32681.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32691))
{var error__6036__auto___32692 = temp__4126__auto___32691;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32692)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32692,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32557_32678,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32677,output_schema32557_32678,input_schema32558_32679,input_checker32559_32680,output_checker32560_32681))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema32557_32678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32558_32679], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m32556){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m32556);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m32556){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m32556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
