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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32474){var map__32520 = p__32474;var map__32520__$1 = ((cljs.core.seq_QMARK_.call(null,map__32520))?cljs.core.apply.call(null,cljs.core.hash_map,map__32520):map__32520);var map__32521 = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32521__$1 = ((cljs.core.seq_QMARK_.call(null,map__32521))?cljs.core.apply.call(null,cljs.core.hash_map,map__32521):map__32521);var table_data = map__32521__$1;var query = cljs.core.get.call(null,map__32521__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32521__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32522 = cljs.core.get.call(null,map__32520__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32522__$1 = ((cljs.core.seq_QMARK_.call(null,map__32522))?cljs.core.apply.call(null,cljs.core.hash_map,map__32522):map__32522);var controls = map__32522__$1;var title = cljs.core.get.call(null,map__32522__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32522__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32522__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32522__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32522__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32523){var map__32524 = p__32523;var map__32524__$1 = ((cljs.core.seq_QMARK_.call(null,map__32524))?cljs.core.apply.call(null,cljs.core.hash_map,map__32524):map__32524);var x = cljs.core.get.call(null,map__32524__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32524__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32524__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32525(s__32526){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32526__$1 = s__32526;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32526__$1);if(temp__4126__auto__)
{var s__32526__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32526__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32526__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32528 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32527 = (0);while(true){
if((i__32527 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32527);cljs.core.chunk_append.call(null,b__32528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32527,yk,c__4375__auto__,size__4376__auto__,b__32528,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32537(s__32538){return (new cljs.core.LazySeq(null,((function (i__32527,yk,c__4375__auto__,size__4376__auto__,b__32528,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32538__$1 = s__32538;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32538__$1);if(temp__4126__auto____$1)
{var s__32538__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32538__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32538__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32540 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32539 = (0);while(true){
if((i__32539 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32539);cljs.core.chunk_append.call(null,b__32540,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32565 = (i__32539 + (1));
i__32539 = G__32565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32540),iter__32537.call(null,cljs.core.chunk_rest.call(null,s__32538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32540),null);
}
} else
{var xk = cljs.core.first.call(null,s__32538__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32537.call(null,cljs.core.rest.call(null,s__32538__$2)));
}
} else
{return null;
}
break;
}
});})(i__32527,yk,c__4375__auto__,size__4376__auto__,b__32528,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32527,yk,c__4375__auto__,size__4376__auto__,b__32528,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__32566 = (i__32527 + (1));
i__32527 = G__32566;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32528),iter__32525.call(null,cljs.core.chunk_rest.call(null,s__32526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32528),null);
}
} else
{var yk = cljs.core.first.call(null,s__32526__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32541(s__32542){return (new cljs.core.LazySeq(null,((function (yk,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32542__$1 = s__32542;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32542__$1);if(temp__4126__auto____$1)
{var s__32542__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32542__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32542__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32544 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32543 = (0);while(true){
if((i__32543 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32543);cljs.core.chunk_append.call(null,b__32544,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32567 = (i__32543 + (1));
i__32543 = G__32567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32544),iter__32541.call(null,cljs.core.chunk_rest.call(null,s__32542__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32544),null);
}
} else
{var xk = cljs.core.first.call(null,s__32542__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32541.call(null,cljs.core.rest.call(null,s__32542__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32526__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32525.call(null,cljs.core.rest.call(null,s__32526__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32545(s__32546){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32546__$1 = s__32546;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32546__$1);if(temp__4126__auto__)
{var s__32546__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32546__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32546__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32548 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32547 = (0);while(true){
if((i__32547 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32547);cljs.core.chunk_append.call(null,b__32548,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__32568 = (i__32547 + (1));
i__32547 = G__32568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32548),iter__32545.call(null,cljs.core.chunk_rest.call(null,s__32546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32548),null);
}
} else
{var xa = cljs.core.first.call(null,s__32546__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32545.call(null,cljs.core.rest.call(null,s__32546__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32549(s__32550){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32550__$1 = s__32550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32550__$1);if(temp__4126__auto__)
{var s__32550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32550__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32550__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32552 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32551 = (0);while(true){
if((i__32551 < size__4376__auto__))
{var vec__32555 = cljs.core._nth.call(null,c__4375__auto__,i__32551);var ya = cljs.core.nth.call(null,vec__32555,(0),null);var i = cljs.core.nth.call(null,vec__32555,(1),null);cljs.core.chunk_append.call(null,b__32552,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__32569 = (i__32551 + (1));
i__32551 = G__32569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32552),iter__32549.call(null,cljs.core.chunk_rest.call(null,s__32550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32552),null);
}
} else
{var vec__32556 = cljs.core.first.call(null,s__32550__$2);var ya = cljs.core.nth.call(null,vec__32556,(0),null);var i = cljs.core.nth.call(null,vec__32556,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32549.call(null,cljs.core.rest.call(null,s__32550__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32557(s__32558){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32558__$1 = s__32558;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32558__$1);if(temp__4126__auto__)
{var s__32558__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32558__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32558__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32560 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32559 = (0);while(true){
if((i__32559 < size__4376__auto__))
{var vec__32563 = cljs.core._nth.call(null,c__4375__auto__,i__32559);var ya = cljs.core.nth.call(null,vec__32563,(0),null);var i = cljs.core.nth.call(null,vec__32563,(1),null);cljs.core.chunk_append.call(null,b__32560,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__32570 = (i__32559 + (1));
i__32559 = G__32570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32560),iter__32557.call(null,cljs.core.chunk_rest.call(null,s__32558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32560),null);
}
} else
{var vec__32564 = cljs.core.first.call(null,s__32558__$2);var ya = cljs.core.nth.call(null,vec__32564,(0),null);var i = cljs.core.nth.call(null,vec__32564,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__32557.call(null,cljs.core.rest.call(null,s__32558__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32520,map__32520__$1,map__32521,map__32521__$1,table_data,query,results,map__32522,map__32522__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___32692 = schema.utils.use_fn_validation;var output_schema32572_32693 = schema.core.Any;var input_schema32573_32694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker32574_32695 = schema.core.checker.call(null,input_schema32573_32694);var output_checker32575_32696 = schema.core.checker.call(null,output_schema32572_32693);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function ranges_chart_component(G__32576,G__32577){var validate__6034__auto__ = ufv___32692.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32576,G__32577], null);var temp__4126__auto___32698 = input_checker32574_32695.call(null,args__6035__auto___32697);if(cljs.core.truth_(temp__4126__auto___32698))
{var error__6036__auto___32699 = temp__4126__auto___32698;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32699,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32697,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32573_32694,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32638 = G__32576;var map__32639 = G__32638;var map__32639__$1 = ((cljs.core.seq_QMARK_.call(null,map__32639))?cljs.core.apply.call(null,cljs.core.hash_map,map__32639):map__32639);var props = map__32639__$1;var map__32640 = cljs.core.get.call(null,map__32639__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32640__$1 = ((cljs.core.seq_QMARK_.call(null,map__32640))?cljs.core.apply.call(null,cljs.core.hash_map,map__32640):map__32640);var table_state = map__32640__$1;var table_data = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32641 = cljs.core.get.call(null,map__32640__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32641__$1 = ((cljs.core.seq_QMARK_.call(null,map__32641))?cljs.core.apply.call(null,cljs.core.hash_map,map__32641):map__32641);var controls = map__32641__$1;var index_type = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__32641__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__32639__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32577;var G__32638__$1 = G__32638;var owner__$1 = owner;while(true){
var map__32642 = G__32638__$1;var map__32642__$1 = ((cljs.core.seq_QMARK_.call(null,map__32642))?cljs.core.apply.call(null,cljs.core.hash_map,map__32642):map__32642);var props__$1 = map__32642__$1;var map__32643 = cljs.core.get.call(null,map__32642__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32643__$1 = ((cljs.core.seq_QMARK_.call(null,map__32643))?cljs.core.apply.call(null,cljs.core.hash_map,map__32643):map__32643);var table_state__$1 = map__32643__$1;var table_data__$1 = cljs.core.get.call(null,map__32643__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32644 = cljs.core.get.call(null,map__32643__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32644__$1 = ((cljs.core.seq_QMARK_.call(null,map__32644))?cljs.core.apply.call(null,cljs.core.hash_map,map__32644):map__32644);var controls__$1 = map__32644__$1;var index_type__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__32642__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t32645 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t32645 = (function (output_schema32572,G__32576,index_type,row_aggs,owner,metric_path,props,input_checker32574,map__32639,row_path,table_data,map__32643,ranges_chart_component,metric_aggs,map__32641,index,col_path,G__32638,filter_spec,map__32644,table_state,map__32640,controls,col_aggs,output_checker32575,title,G__32577,rows,cols,validate__6034__auto__,map__32642,input_schema32573,ufv__,meta32646){
this.output_schema32572 = output_schema32572;
this.G__32576 = G__32576;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.input_checker32574 = input_checker32574;
this.map__32639 = map__32639;
this.row_path = row_path;
this.table_data = table_data;
this.map__32643 = map__32643;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.map__32641 = map__32641;
this.index = index;
this.col_path = col_path;
this.G__32638 = G__32638;
this.filter_spec = filter_spec;
this.map__32644 = map__32644;
this.table_state = table_state;
this.map__32640 = map__32640;
this.controls = controls;
this.col_aggs = col_aggs;
this.output_checker32575 = output_checker32575;
this.title = title;
this.G__32577 = G__32577;
this.rows = rows;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__32642 = map__32642;
this.input_schema32573 = input_schema32573;
this.ufv__ = ufv__;
this.meta32646 = meta32646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t32645.cljs$lang$type = true;
clustermap.components.ranges_chart.t32645.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t32645";
clustermap.components.ranges_chart.t32645.cljs$lang$ctorPrWriter = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t32645");
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.t32645.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t32645.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.t32645.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t32645.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (_,p__32648,___$1){var self__ = this;
var map__32649 = p__32648;var map__32649__$1 = ((cljs.core.seq_QMARK_.call(null,map__32649))?cljs.core.apply.call(null,cljs.core.hash_map,map__32649):map__32649);var prev_props = map__32649__$1;var map__32650 = cljs.core.get.call(null,map__32649__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32650__$1 = ((cljs.core.seq_QMARK_.call(null,map__32650))?cljs.core.apply.call(null,cljs.core.hash_map,map__32650):map__32650);var prev_table_data = cljs.core.get.call(null,map__32650__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.t32645.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t32645.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (_,p__32651,p__32652){var self__ = this;
var map__32653 = p__32651;var map__32653__$1 = ((cljs.core.seq_QMARK_.call(null,map__32653))?cljs.core.apply.call(null,cljs.core.hash_map,map__32653):map__32653);var next_props = map__32653__$1;var map__32654 = cljs.core.get.call(null,map__32653__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32654__$1 = ((cljs.core.seq_QMARK_.call(null,map__32654))?cljs.core.apply.call(null,cljs.core.hash_map,map__32654):map__32654);var next_table_state = map__32654__$1;var next_table_data = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32655 = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32655__$1 = ((cljs.core.seq_QMARK_.call(null,map__32655))?cljs.core.apply.call(null,cljs.core.hash_map,map__32655):map__32655);var next_controls = map__32655__$1;var next_col_aggs = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__32655__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__32653__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32656 = p__32652;var map__32656__$1 = ((cljs.core.seq_QMARK_.call(null,map__32656))?cljs.core.apply.call(null,cljs.core.hash_map,map__32656):map__32656);var fetch_data_fn = cljs.core.get.call(null,map__32656__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32653,map__32653__$1,next_props,map__32654,map__32654__$1,next_table_state,next_table_data,map__32655,map__32655__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32656,map__32656__$1,fetch_data_fn,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32653,map__32653__$1,next_props,map__32654,map__32654__$1,next_table_state,next_table_data,map__32655,map__32655__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32656,map__32656__$1,fetch_data_fn,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (state_32674){var state_val_32675 = (state_32674[(1)]);if((state_val_32675 === (5)))
{var inst_32672 = (state_32674[(2)]);var state_32674__$1 = state_32674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32674__$1,inst_32672);
} else
{if((state_val_32675 === (4)))
{var state_32674__$1 = state_32674;var statearr_32676_32700 = state_32674__$1;(statearr_32676_32700[(2)] = null);
(statearr_32676_32700[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32675 === (3)))
{var inst_32659 = (state_32674[(7)]);var inst_32661 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32662 = ["RANGES-TABLE-DATA",inst_32659];var inst_32663 = (new cljs.core.PersistentVector(null,2,(5),inst_32661,inst_32662,null));var inst_32664 = cljs.core.clj__GT_js.call(null,inst_32663);var inst_32665 = console.log(inst_32664);var inst_32666 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32667 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32668 = (new cljs.core.PersistentVector(null,1,(5),inst_32666,inst_32667,null));var inst_32669 = om.core.update_BANG_.call(null,self__.table_state,inst_32668,inst_32659);var state_32674__$1 = (function (){var statearr_32677 = state_32674;(statearr_32677[(8)] = inst_32665);
return statearr_32677;
})();var statearr_32678_32701 = state_32674__$1;(statearr_32678_32701[(2)] = inst_32669);
(statearr_32678_32701[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32675 === (2)))
{var inst_32659 = (state_32674[(7)]);var inst_32659__$1 = (state_32674[(2)]);var state_32674__$1 = (function (){var statearr_32679 = state_32674;(statearr_32679[(7)] = inst_32659__$1);
return statearr_32679;
})();if(cljs.core.truth_(inst_32659__$1))
{var statearr_32680_32702 = state_32674__$1;(statearr_32680_32702[(1)] = (3));
} else
{var statearr_32681_32703 = state_32674__$1;(statearr_32681_32703[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32675 === (1)))
{var inst_32657 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_32674__$1 = state_32674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32674__$1,(2),inst_32657);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32653,map__32653__$1,next_props,map__32654,map__32654__$1,next_table_state,next_table_data,map__32655,map__32655__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32656,map__32656__$1,fetch_data_fn,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32653,map__32653__$1,next_props,map__32654,map__32654__$1,next_table_state,next_table_data,map__32655,map__32655__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32656,map__32656__$1,fetch_data_fn,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32685 = [null,null,null,null,null,null,null,null,null];(statearr_32685[(0)] = state_machine__9111__auto__);
(statearr_32685[(1)] = (1));
return statearr_32685;
});
var state_machine__9111__auto____1 = (function (state_32674){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32674);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32686){if((e32686 instanceof Object))
{var ex__9114__auto__ = e32686;var statearr_32687_32704 = state_32674;(statearr_32687_32704[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32686;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32705 = state_32674;
state_32674 = G__32705;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32674){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32653,map__32653__$1,next_props,map__32654,map__32654__$1,next_table_state,next_table_data,map__32655,map__32655__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32656,map__32656__$1,fetch_data_fn,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
})();var state__9127__auto__ = (function (){var statearr_32688 = f__9126__auto__.call(null);(statearr_32688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32653,map__32653__$1,next_props,map__32654,map__32654__$1,next_table_state,next_table_data,map__32655,map__32655__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32656,map__32656__$1,fetch_data_fn,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.t32645.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t32645.prototype.om$core$IRender$render$arity$1 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.t32645.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t32645.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32691 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__32691__$1 = (((G__32691 == null))?null:jayq.core.$.call(null,G__32691));var G__32691__$2 = (((G__32691__$1 == null))?null:G__32691__$1.highcharts());var G__32691__$3 = (((G__32691__$2 == null))?null:G__32691__$2.reflow());return G__32691__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
);
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.t32645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (_32647){var self__ = this;
var _32647__$1 = this;return self__.meta32646;
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.t32645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function (_32647,meta32646__$1){var self__ = this;
var _32647__$1 = this;return (new clustermap.components.ranges_chart.t32645(self__.output_schema32572,self__.G__32576,self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.input_checker32574,self__.map__32639,self__.row_path,self__.table_data,self__.map__32643,self__.ranges_chart_component,self__.metric_aggs,self__.map__32641,self__.index,self__.col_path,self__.G__32638,self__.filter_spec,self__.map__32644,self__.table_state,self__.map__32640,self__.controls,self__.col_aggs,self__.output_checker32575,self__.title,self__.G__32577,self__.rows,self__.cols,self__.validate__6034__auto__,self__.map__32642,self__.input_schema32573,self__.ufv__,meta32646__$1));
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
clustermap.components.ranges_chart.__GT_t32645 = ((function (map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696){
return (function __GT_t32645(output_schema32572__$1,G__32576__$1,index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,input_checker32574__$1,map__32639__$2,row_path__$2,table_data__$2,map__32643__$2,ranges_chart_component__$1,metric_aggs__$2,map__32641__$2,index__$2,col_path__$2,G__32638__$2,filter_spec__$2,map__32644__$2,table_state__$2,map__32640__$2,controls__$2,col_aggs__$2,output_checker32575__$1,title__$2,G__32577__$1,rows__$2,cols__$2,validate__6034__auto____$1,map__32642__$2,input_schema32573__$1,ufv____$1,meta32646){return (new clustermap.components.ranges_chart.t32645(output_schema32572__$1,G__32576__$1,index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,input_checker32574__$1,map__32639__$2,row_path__$2,table_data__$2,map__32643__$2,ranges_chart_component__$1,metric_aggs__$2,map__32641__$2,index__$2,col_path__$2,G__32638__$2,filter_spec__$2,map__32644__$2,table_state__$2,map__32640__$2,controls__$2,col_aggs__$2,output_checker32575__$1,title__$2,G__32577__$1,rows__$2,cols__$2,validate__6034__auto____$1,map__32642__$2,input_schema32573__$1,ufv____$1,meta32646));
});})(map__32642,map__32642__$1,props__$1,map__32643,map__32643__$1,table_state__$1,table_data__$1,map__32644,map__32644__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32638,map__32639,map__32639__$1,props,map__32640,map__32640__$1,table_state,table_data,map__32641,map__32641__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
}
return (new clustermap.components.ranges_chart.t32645(output_schema32572_32693,G__32576,index_type__$1,row_aggs__$1,owner__$2,metric_path__$1,props__$1,input_checker32574_32695,map__32639__$1,row_path__$1,table_data__$1,map__32643__$1,ranges_chart_component,metric_aggs__$1,map__32641__$1,index__$1,col_path__$1,G__32638__$1,filter_spec__$1,map__32644__$1,table_state__$1,map__32640__$1,controls__$1,col_aggs__$1,output_checker32575_32696,title__$1,G__32577,rows__$1,cols__$1,validate__6034__auto__,map__32642__$1,input_schema32573_32694,ufv___32692,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32706 = output_checker32575_32696.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32706))
{var error__6036__auto___32707 = temp__4126__auto___32706;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32707)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32707,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32572_32693,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32692,output_schema32572_32693,input_schema32573_32694,input_checker32574_32695,output_checker32575_32696))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema32572_32693,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32573_32694], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m32571){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m32571);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m32571){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m32571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
