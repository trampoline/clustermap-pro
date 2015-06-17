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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32901){var map__32947 = p__32901;var map__32947__$1 = ((cljs.core.seq_QMARK_.call(null,map__32947))?cljs.core.apply.call(null,cljs.core.hash_map,map__32947):map__32947);var map__32948 = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32948__$1 = ((cljs.core.seq_QMARK_.call(null,map__32948))?cljs.core.apply.call(null,cljs.core.hash_map,map__32948):map__32948);var table_data = map__32948__$1;var query = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32949 = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32949__$1 = ((cljs.core.seq_QMARK_.call(null,map__32949))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);var controls = map__32949__$1;var title = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32950){var map__32951 = p__32950;var map__32951__$1 = ((cljs.core.seq_QMARK_.call(null,map__32951))?cljs.core.apply.call(null,cljs.core.hash_map,map__32951):map__32951);var x = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32952(s__32953){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32953__$1 = s__32953;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32953__$1);if(temp__4126__auto__)
{var s__32953__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32953__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32953__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32955 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32954 = (0);while(true){
if((i__32954 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32954);cljs.core.chunk_append.call(null,b__32955,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32954,yk,c__4375__auto__,size__4376__auto__,b__32955,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32964(s__32965){return (new cljs.core.LazySeq(null,((function (i__32954,yk,c__4375__auto__,size__4376__auto__,b__32955,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32965__$1 = s__32965;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32965__$1);if(temp__4126__auto____$1)
{var s__32965__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32965__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32965__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32967 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32966 = (0);while(true){
if((i__32966 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32966);cljs.core.chunk_append.call(null,b__32967,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32992 = (i__32966 + (1));
i__32966 = G__32992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32967),iter__32964.call(null,cljs.core.chunk_rest.call(null,s__32965__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32967),null);
}
} else
{var xk = cljs.core.first.call(null,s__32965__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32964.call(null,cljs.core.rest.call(null,s__32965__$2)));
}
} else
{return null;
}
break;
}
});})(i__32954,yk,c__4375__auto__,size__4376__auto__,b__32955,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32954,yk,c__4375__auto__,size__4376__auto__,b__32955,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__32993 = (i__32954 + (1));
i__32954 = G__32993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32955),iter__32952.call(null,cljs.core.chunk_rest.call(null,s__32953__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32955),null);
}
} else
{var yk = cljs.core.first.call(null,s__32953__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32968(s__32969){return (new cljs.core.LazySeq(null,((function (yk,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32969__$1 = s__32969;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32969__$1);if(temp__4126__auto____$1)
{var s__32969__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32969__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32969__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32971 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32970 = (0);while(true){
if((i__32970 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32970);cljs.core.chunk_append.call(null,b__32971,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32994 = (i__32970 + (1));
i__32970 = G__32994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32971),iter__32968.call(null,cljs.core.chunk_rest.call(null,s__32969__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32971),null);
}
} else
{var xk = cljs.core.first.call(null,s__32969__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32968.call(null,cljs.core.rest.call(null,s__32969__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32953__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32952.call(null,cljs.core.rest.call(null,s__32953__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32972(s__32973){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32973__$1 = s__32973;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32973__$1);if(temp__4126__auto__)
{var s__32973__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32973__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32973__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32975 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32974 = (0);while(true){
if((i__32974 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32974);cljs.core.chunk_append.call(null,b__32975,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__32995 = (i__32974 + (1));
i__32974 = G__32995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32975),iter__32972.call(null,cljs.core.chunk_rest.call(null,s__32973__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32975),null);
}
} else
{var xa = cljs.core.first.call(null,s__32973__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32972.call(null,cljs.core.rest.call(null,s__32973__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32976(s__32977){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32977__$1 = s__32977;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32977__$1);if(temp__4126__auto__)
{var s__32977__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32977__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32977__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32979 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32978 = (0);while(true){
if((i__32978 < size__4376__auto__))
{var vec__32982 = cljs.core._nth.call(null,c__4375__auto__,i__32978);var ya = cljs.core.nth.call(null,vec__32982,(0),null);var i = cljs.core.nth.call(null,vec__32982,(1),null);cljs.core.chunk_append.call(null,b__32979,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__32996 = (i__32978 + (1));
i__32978 = G__32996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32979),iter__32976.call(null,cljs.core.chunk_rest.call(null,s__32977__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32979),null);
}
} else
{var vec__32983 = cljs.core.first.call(null,s__32977__$2);var ya = cljs.core.nth.call(null,vec__32983,(0),null);var i = cljs.core.nth.call(null,vec__32983,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32976.call(null,cljs.core.rest.call(null,s__32977__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32984(s__32985){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32985__$1 = s__32985;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32985__$1);if(temp__4126__auto__)
{var s__32985__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32985__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32985__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32987 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32986 = (0);while(true){
if((i__32986 < size__4376__auto__))
{var vec__32990 = cljs.core._nth.call(null,c__4375__auto__,i__32986);var ya = cljs.core.nth.call(null,vec__32990,(0),null);var i = cljs.core.nth.call(null,vec__32990,(1),null);cljs.core.chunk_append.call(null,b__32987,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__32997 = (i__32986 + (1));
i__32986 = G__32997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32987),iter__32984.call(null,cljs.core.chunk_rest.call(null,s__32985__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32987),null);
}
} else
{var vec__32991 = cljs.core.first.call(null,s__32985__$2);var ya = cljs.core.nth.call(null,vec__32991,(0),null);var i = cljs.core.nth.call(null,vec__32991,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__32984.call(null,cljs.core.rest.call(null,s__32985__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32947,map__32947__$1,map__32948,map__32948__$1,table_data,query,results,map__32949,map__32949__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33119 = schema.utils.use_fn_validation;var output_schema32999_33120 = schema.core.Any;var input_schema33000_33121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33001_33122 = schema.core.checker.call(null,input_schema33000_33121);var output_checker33002_33123 = schema.core.checker.call(null,output_schema32999_33120);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function ranges_chart_component(G__33003,G__33004){var validate__6034__auto__ = ufv___33119.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33003,G__33004], null);var temp__4126__auto___33125 = input_checker33001_33122.call(null,args__6035__auto___33124);if(cljs.core.truth_(temp__4126__auto___33125))
{var error__6036__auto___33126 = temp__4126__auto___33125;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33126)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33126,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33124,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33000_33121,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33065 = G__33003;var map__33066 = G__33065;var map__33066__$1 = ((cljs.core.seq_QMARK_.call(null,map__33066))?cljs.core.apply.call(null,cljs.core.hash_map,map__33066):map__33066);var props = map__33066__$1;var map__33067 = cljs.core.get.call(null,map__33066__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33067__$1 = ((cljs.core.seq_QMARK_.call(null,map__33067))?cljs.core.apply.call(null,cljs.core.hash_map,map__33067):map__33067);var table_state = map__33067__$1;var table_data = cljs.core.get.call(null,map__33067__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33068 = cljs.core.get.call(null,map__33067__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33068__$1 = ((cljs.core.seq_QMARK_.call(null,map__33068))?cljs.core.apply.call(null,cljs.core.hash_map,map__33068):map__33068);var controls = map__33068__$1;var index_type = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33066__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33004;var G__33065__$1 = G__33065;var owner__$1 = owner;while(true){
var map__33069 = G__33065__$1;var map__33069__$1 = ((cljs.core.seq_QMARK_.call(null,map__33069))?cljs.core.apply.call(null,cljs.core.hash_map,map__33069):map__33069);var props__$1 = map__33069__$1;var map__33070 = cljs.core.get.call(null,map__33069__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33070__$1 = ((cljs.core.seq_QMARK_.call(null,map__33070))?cljs.core.apply.call(null,cljs.core.hash_map,map__33070):map__33070);var table_state__$1 = map__33070__$1;var table_data__$1 = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33071 = cljs.core.get.call(null,map__33070__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33071__$1 = ((cljs.core.seq_QMARK_.call(null,map__33071))?cljs.core.apply.call(null,cljs.core.hash_map,map__33071):map__33071);var controls__$1 = map__33071__$1;var index_type__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33069__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33072 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33072 = (function (input_schema33000,index_type,row_aggs,owner,G__33065,metric_path,props,row_path,table_data,ranges_chart_component,metric_aggs,index,G__33004,col_path,output_checker33002,filter_spec,table_state,map__33066,controls,col_aggs,title,rows,output_schema32999,G__33003,input_checker33001,map__33069,cols,map__33071,map__33067,validate__6034__auto__,map__33070,map__33068,ufv__,meta33073){
this.input_schema33000 = input_schema33000;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.G__33065 = G__33065;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.index = index;
this.G__33004 = G__33004;
this.col_path = col_path;
this.output_checker33002 = output_checker33002;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.map__33066 = map__33066;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.output_schema32999 = output_schema32999;
this.G__33003 = G__33003;
this.input_checker33001 = input_checker33001;
this.map__33069 = map__33069;
this.cols = cols;
this.map__33071 = map__33071;
this.map__33067 = map__33067;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__33070 = map__33070;
this.map__33068 = map__33068;
this.ufv__ = ufv__;
this.meta33073 = meta33073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33072.cljs$lang$type = true;
clustermap.components.ranges_chart.t33072.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33072";
clustermap.components.ranges_chart.t33072.cljs$lang$ctorPrWriter = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33072");
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.t33072.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33072.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.t33072.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33072.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (_,p__33075,___$1){var self__ = this;
var map__33076 = p__33075;var map__33076__$1 = ((cljs.core.seq_QMARK_.call(null,map__33076))?cljs.core.apply.call(null,cljs.core.hash_map,map__33076):map__33076);var prev_props = map__33076__$1;var map__33077 = cljs.core.get.call(null,map__33076__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33077__$1 = ((cljs.core.seq_QMARK_.call(null,map__33077))?cljs.core.apply.call(null,cljs.core.hash_map,map__33077):map__33077);var prev_table_data = cljs.core.get.call(null,map__33077__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.t33072.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33072.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (_,p__33078,p__33079){var self__ = this;
var map__33080 = p__33078;var map__33080__$1 = ((cljs.core.seq_QMARK_.call(null,map__33080))?cljs.core.apply.call(null,cljs.core.hash_map,map__33080):map__33080);var next_props = map__33080__$1;var map__33081 = cljs.core.get.call(null,map__33080__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33081__$1 = ((cljs.core.seq_QMARK_.call(null,map__33081))?cljs.core.apply.call(null,cljs.core.hash_map,map__33081):map__33081);var next_table_state = map__33081__$1;var next_table_data = cljs.core.get.call(null,map__33081__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33082 = cljs.core.get.call(null,map__33081__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33082__$1 = ((cljs.core.seq_QMARK_.call(null,map__33082))?cljs.core.apply.call(null,cljs.core.hash_map,map__33082):map__33082);var next_controls = map__33082__$1;var next_col_aggs = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33082__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33080__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33083 = p__33079;var map__33083__$1 = ((cljs.core.seq_QMARK_.call(null,map__33083))?cljs.core.apply.call(null,cljs.core.hash_map,map__33083):map__33083);var fetch_data_fn = cljs.core.get.call(null,map__33083__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33080,map__33080__$1,next_props,map__33081,map__33081__$1,next_table_state,next_table_data,map__33082,map__33082__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33083,map__33083__$1,fetch_data_fn,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33080,map__33080__$1,next_props,map__33081,map__33081__$1,next_table_state,next_table_data,map__33082,map__33082__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33083,map__33083__$1,fetch_data_fn,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (state_33101){var state_val_33102 = (state_33101[(1)]);if((state_val_33102 === (5)))
{var inst_33099 = (state_33101[(2)]);var state_33101__$1 = state_33101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33101__$1,inst_33099);
} else
{if((state_val_33102 === (4)))
{var state_33101__$1 = state_33101;var statearr_33103_33127 = state_33101__$1;(statearr_33103_33127[(2)] = null);
(statearr_33103_33127[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33102 === (3)))
{var inst_33086 = (state_33101[(7)]);var inst_33088 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33089 = ["RANGES-TABLE-DATA",inst_33086];var inst_33090 = (new cljs.core.PersistentVector(null,2,(5),inst_33088,inst_33089,null));var inst_33091 = cljs.core.clj__GT_js.call(null,inst_33090);var inst_33092 = console.log(inst_33091);var inst_33093 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33094 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33095 = (new cljs.core.PersistentVector(null,1,(5),inst_33093,inst_33094,null));var inst_33096 = om.core.update_BANG_.call(null,self__.table_state,inst_33095,inst_33086);var state_33101__$1 = (function (){var statearr_33104 = state_33101;(statearr_33104[(8)] = inst_33092);
return statearr_33104;
})();var statearr_33105_33128 = state_33101__$1;(statearr_33105_33128[(2)] = inst_33096);
(statearr_33105_33128[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33102 === (2)))
{var inst_33086 = (state_33101[(7)]);var inst_33086__$1 = (state_33101[(2)]);var state_33101__$1 = (function (){var statearr_33106 = state_33101;(statearr_33106[(7)] = inst_33086__$1);
return statearr_33106;
})();if(cljs.core.truth_(inst_33086__$1))
{var statearr_33107_33129 = state_33101__$1;(statearr_33107_33129[(1)] = (3));
} else
{var statearr_33108_33130 = state_33101__$1;(statearr_33108_33130[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33102 === (1)))
{var inst_33084 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33101__$1 = state_33101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33101__$1,(2),inst_33084);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33080,map__33080__$1,next_props,map__33081,map__33081__$1,next_table_state,next_table_data,map__33082,map__33082__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33083,map__33083__$1,fetch_data_fn,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33080,map__33080__$1,next_props,map__33081,map__33081__$1,next_table_state,next_table_data,map__33082,map__33082__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33083,map__33083__$1,fetch_data_fn,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33112 = [null,null,null,null,null,null,null,null,null];(statearr_33112[(0)] = state_machine__9111__auto__);
(statearr_33112[(1)] = (1));
return statearr_33112;
});
var state_machine__9111__auto____1 = (function (state_33101){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33101);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33113){if((e33113 instanceof Object))
{var ex__9114__auto__ = e33113;var statearr_33114_33131 = state_33101;(statearr_33114_33131[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33132 = state_33101;
state_33101 = G__33132;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33101){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33080,map__33080__$1,next_props,map__33081,map__33081__$1,next_table_state,next_table_data,map__33082,map__33082__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33083,map__33083__$1,fetch_data_fn,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
})();var state__9127__auto__ = (function (){var statearr_33115 = f__9126__auto__.call(null);(statearr_33115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33080,map__33080__$1,next_props,map__33081,map__33081__$1,next_table_state,next_table_data,map__33082,map__33082__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33083,map__33083__$1,fetch_data_fn,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.t33072.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33072.prototype.om$core$IRender$render$arity$1 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.t33072.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33072.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33118 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33118__$1 = (((G__33118 == null))?null:jayq.core.$.call(null,G__33118));var G__33118__$2 = (((G__33118__$1 == null))?null:G__33118__$1.highcharts());var G__33118__$3 = (((G__33118__$2 == null))?null:G__33118__$2.reflow());return G__33118__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
);
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.t33072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (_33074){var self__ = this;
var _33074__$1 = this;return self__.meta33073;
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.t33072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function (_33074,meta33073__$1){var self__ = this;
var _33074__$1 = this;return (new clustermap.components.ranges_chart.t33072(self__.input_schema33000,self__.index_type,self__.row_aggs,self__.owner,self__.G__33065,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.index,self__.G__33004,self__.col_path,self__.output_checker33002,self__.filter_spec,self__.table_state,self__.map__33066,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.output_schema32999,self__.G__33003,self__.input_checker33001,self__.map__33069,self__.cols,self__.map__33071,self__.map__33067,self__.validate__6034__auto__,self__.map__33070,self__.map__33068,self__.ufv__,meta33073__$1));
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
clustermap.components.ranges_chart.__GT_t33072 = ((function (map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123){
return (function __GT_t33072(input_schema33000__$1,index_type__$2,row_aggs__$2,owner__$3,G__33065__$2,metric_path__$2,props__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,G__33004__$1,col_path__$2,output_checker33002__$1,filter_spec__$2,table_state__$2,map__33066__$2,controls__$2,col_aggs__$2,title__$2,rows__$2,output_schema32999__$1,G__33003__$1,input_checker33001__$1,map__33069__$2,cols__$2,map__33071__$2,map__33067__$2,validate__6034__auto____$1,map__33070__$2,map__33068__$2,ufv____$1,meta33073){return (new clustermap.components.ranges_chart.t33072(input_schema33000__$1,index_type__$2,row_aggs__$2,owner__$3,G__33065__$2,metric_path__$2,props__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,G__33004__$1,col_path__$2,output_checker33002__$1,filter_spec__$2,table_state__$2,map__33066__$2,controls__$2,col_aggs__$2,title__$2,rows__$2,output_schema32999__$1,G__33003__$1,input_checker33001__$1,map__33069__$2,cols__$2,map__33071__$2,map__33067__$2,validate__6034__auto____$1,map__33070__$2,map__33068__$2,ufv____$1,meta33073));
});})(map__33069,map__33069__$1,props__$1,map__33070,map__33070__$1,table_state__$1,table_data__$1,map__33071,map__33071__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33065,map__33066,map__33066__$1,props,map__33067,map__33067__$1,table_state,table_data,map__33068,map__33068__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
}
return (new clustermap.components.ranges_chart.t33072(input_schema33000_33121,index_type__$1,row_aggs__$1,owner__$2,G__33065__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,index__$1,G__33004,col_path__$1,output_checker33002_33123,filter_spec__$1,table_state__$1,map__33066__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,output_schema32999_33120,G__33003,input_checker33001_33122,map__33069__$1,cols__$1,map__33071__$1,map__33067__$1,validate__6034__auto__,map__33070__$1,map__33068__$1,ufv___33119,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33133 = output_checker33002_33123.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33133))
{var error__6036__auto___33134 = temp__4126__auto___33133;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33134)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33134,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32999_33120,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33119,output_schema32999_33120,input_schema33000_33121,input_checker33001_33122,output_checker33002_33123))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema32999_33120,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33000_33121], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m32998){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m32998);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m32998){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m32998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
