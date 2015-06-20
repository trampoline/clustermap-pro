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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32960){var map__33006 = p__32960;var map__33006__$1 = ((cljs.core.seq_QMARK_.call(null,map__33006))?cljs.core.apply.call(null,cljs.core.hash_map,map__33006):map__33006);var map__33007 = cljs.core.get.call(null,map__33006__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33007__$1 = ((cljs.core.seq_QMARK_.call(null,map__33007))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);var table_data = map__33007__$1;var query = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__33008 = cljs.core.get.call(null,map__33006__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33008__$1 = ((cljs.core.seq_QMARK_.call(null,map__33008))?cljs.core.apply.call(null,cljs.core.hash_map,map__33008):map__33008);var controls = map__33008__$1;var title = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__33009){var map__33010 = p__33009;var map__33010__$1 = ((cljs.core.seq_QMARK_.call(null,map__33010))?cljs.core.apply.call(null,cljs.core.hash_map,map__33010):map__33010);var x = cljs.core.get.call(null,map__33010__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__33010__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__33010__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33011(s__33012){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33012__$1 = s__33012;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33012__$1);if(temp__4126__auto__)
{var s__33012__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33012__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33012__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33014 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33013 = (0);while(true){
if((i__33013 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__33013);cljs.core.chunk_append.call(null,b__33014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__33013,yk,c__4375__auto__,size__4376__auto__,b__33014,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33023(s__33024){return (new cljs.core.LazySeq(null,((function (i__33013,yk,c__4375__auto__,size__4376__auto__,b__33014,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33024__$1 = s__33024;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33024__$1);if(temp__4126__auto____$1)
{var s__33024__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33024__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__33024__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__33026 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__33025 = (0);while(true){
if((i__33025 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__33025);cljs.core.chunk_append.call(null,b__33026,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33051 = (i__33025 + (1));
i__33025 = G__33051;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33026),iter__33023.call(null,cljs.core.chunk_rest.call(null,s__33024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33026),null);
}
} else
{var xk = cljs.core.first.call(null,s__33024__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33023.call(null,cljs.core.rest.call(null,s__33024__$2)));
}
} else
{return null;
}
break;
}
});})(i__33013,yk,c__4375__auto__,size__4376__auto__,b__33014,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__33013,yk,c__4375__auto__,size__4376__auto__,b__33014,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33052 = (i__33013 + (1));
i__33013 = G__33052;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33014),iter__33011.call(null,cljs.core.chunk_rest.call(null,s__33012__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33014),null);
}
} else
{var yk = cljs.core.first.call(null,s__33012__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33027(s__33028){return (new cljs.core.LazySeq(null,((function (yk,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33028__$1 = s__33028;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33028__$1);if(temp__4126__auto____$1)
{var s__33028__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33028__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33028__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33030 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33029 = (0);while(true){
if((i__33029 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__33029);cljs.core.chunk_append.call(null,b__33030,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33053 = (i__33029 + (1));
i__33029 = G__33053;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33030),iter__33027.call(null,cljs.core.chunk_rest.call(null,s__33028__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33030),null);
}
} else
{var xk = cljs.core.first.call(null,s__33028__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33027.call(null,cljs.core.rest.call(null,s__33028__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__33012__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__33011.call(null,cljs.core.rest.call(null,s__33012__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33031(s__33032){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33032__$1 = s__33032;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33032__$1);if(temp__4126__auto__)
{var s__33032__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33032__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33032__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33034 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33033 = (0);while(true){
if((i__33033 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__33033);cljs.core.chunk_append.call(null,b__33034,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33054 = (i__33033 + (1));
i__33033 = G__33054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33034),iter__33031.call(null,cljs.core.chunk_rest.call(null,s__33032__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33034),null);
}
} else
{var xa = cljs.core.first.call(null,s__33032__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__33031.call(null,cljs.core.rest.call(null,s__33032__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33035(s__33036){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33036__$1 = s__33036;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33036__$1);if(temp__4126__auto__)
{var s__33036__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33036__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33036__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33038 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33037 = (0);while(true){
if((i__33037 < size__4376__auto__))
{var vec__33041 = cljs.core._nth.call(null,c__4375__auto__,i__33037);var ya = cljs.core.nth.call(null,vec__33041,(0),null);var i = cljs.core.nth.call(null,vec__33041,(1),null);cljs.core.chunk_append.call(null,b__33038,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33055 = (i__33037 + (1));
i__33037 = G__33055;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33038),iter__33035.call(null,cljs.core.chunk_rest.call(null,s__33036__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33038),null);
}
} else
{var vec__33042 = cljs.core.first.call(null,s__33036__$2);var ya = cljs.core.nth.call(null,vec__33042,(0),null);var i = cljs.core.nth.call(null,vec__33042,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__33035.call(null,cljs.core.rest.call(null,s__33036__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33043(s__33044){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33044__$1 = s__33044;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33044__$1);if(temp__4126__auto__)
{var s__33044__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33044__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33044__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33046 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33045 = (0);while(true){
if((i__33045 < size__4376__auto__))
{var vec__33049 = cljs.core._nth.call(null,c__4375__auto__,i__33045);var ya = cljs.core.nth.call(null,vec__33049,(0),null);var i = cljs.core.nth.call(null,vec__33049,(1),null);cljs.core.chunk_append.call(null,b__33046,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33056 = (i__33045 + (1));
i__33045 = G__33056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33046),iter__33043.call(null,cljs.core.chunk_rest.call(null,s__33044__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33046),null);
}
} else
{var vec__33050 = cljs.core.first.call(null,s__33044__$2);var ya = cljs.core.nth.call(null,vec__33050,(0),null);var i = cljs.core.nth.call(null,vec__33050,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33043.call(null,cljs.core.rest.call(null,s__33044__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33006,map__33006__$1,map__33007,map__33007__$1,table_data,query,results,map__33008,map__33008__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33178 = schema.utils.use_fn_validation;var output_schema33058_33179 = schema.core.Any;var input_schema33059_33180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33060_33181 = schema.core.checker.call(null,input_schema33059_33180);var output_checker33061_33182 = schema.core.checker.call(null,output_schema33058_33179);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function ranges_chart_component(G__33062,G__33063){var validate__6034__auto__ = ufv___33178.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33062,G__33063], null);var temp__4126__auto___33184 = input_checker33060_33181.call(null,args__6035__auto___33183);if(cljs.core.truth_(temp__4126__auto___33184))
{var error__6036__auto___33185 = temp__4126__auto___33184;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33185)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33185,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33183,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33059_33180,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33124 = G__33062;var map__33125 = G__33124;var map__33125__$1 = ((cljs.core.seq_QMARK_.call(null,map__33125))?cljs.core.apply.call(null,cljs.core.hash_map,map__33125):map__33125);var props = map__33125__$1;var map__33126 = cljs.core.get.call(null,map__33125__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33126__$1 = ((cljs.core.seq_QMARK_.call(null,map__33126))?cljs.core.apply.call(null,cljs.core.hash_map,map__33126):map__33126);var table_state = map__33126__$1;var table_data = cljs.core.get.call(null,map__33126__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33127 = cljs.core.get.call(null,map__33126__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33127__$1 = ((cljs.core.seq_QMARK_.call(null,map__33127))?cljs.core.apply.call(null,cljs.core.hash_map,map__33127):map__33127);var controls = map__33127__$1;var index_type = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33125__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33063;var G__33124__$1 = G__33124;var owner__$1 = owner;while(true){
var map__33128 = G__33124__$1;var map__33128__$1 = ((cljs.core.seq_QMARK_.call(null,map__33128))?cljs.core.apply.call(null,cljs.core.hash_map,map__33128):map__33128);var props__$1 = map__33128__$1;var map__33129 = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33129__$1 = ((cljs.core.seq_QMARK_.call(null,map__33129))?cljs.core.apply.call(null,cljs.core.hash_map,map__33129):map__33129);var table_state__$1 = map__33129__$1;var table_data__$1 = cljs.core.get.call(null,map__33129__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33130 = cljs.core.get.call(null,map__33129__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33130__$1 = ((cljs.core.seq_QMARK_.call(null,map__33130))?cljs.core.apply.call(null,cljs.core.hash_map,map__33130):map__33130);var controls__$1 = map__33130__$1;var index_type__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33130__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33131 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33131 = (function (G__33062,output_checker33061,index_type,row_aggs,owner,map__33126,metric_path,props,G__33124,map__33125,map__33129,row_path,table_data,ranges_chart_component,metric_aggs,index,output_schema33058,col_path,filter_spec,table_state,map__33128,controls,col_aggs,title,map__33127,G__33063,rows,cols,map__33130,validate__6034__auto__,input_schema33059,input_checker33060,ufv__,meta33132){
this.G__33062 = G__33062;
this.output_checker33061 = output_checker33061;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.map__33126 = map__33126;
this.metric_path = metric_path;
this.props = props;
this.G__33124 = G__33124;
this.map__33125 = map__33125;
this.map__33129 = map__33129;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.index = index;
this.output_schema33058 = output_schema33058;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.map__33128 = map__33128;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.map__33127 = map__33127;
this.G__33063 = G__33063;
this.rows = rows;
this.cols = cols;
this.map__33130 = map__33130;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_schema33059 = input_schema33059;
this.input_checker33060 = input_checker33060;
this.ufv__ = ufv__;
this.meta33132 = meta33132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33131.cljs$lang$type = true;
clustermap.components.ranges_chart.t33131.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33131";
clustermap.components.ranges_chart.t33131.cljs$lang$ctorPrWriter = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33131");
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.t33131.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33131.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.t33131.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33131.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (_,p__33134,___$1){var self__ = this;
var map__33135 = p__33134;var map__33135__$1 = ((cljs.core.seq_QMARK_.call(null,map__33135))?cljs.core.apply.call(null,cljs.core.hash_map,map__33135):map__33135);var prev_props = map__33135__$1;var map__33136 = cljs.core.get.call(null,map__33135__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33136__$1 = ((cljs.core.seq_QMARK_.call(null,map__33136))?cljs.core.apply.call(null,cljs.core.hash_map,map__33136):map__33136);var prev_table_data = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.t33131.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33131.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (_,p__33137,p__33138){var self__ = this;
var map__33139 = p__33137;var map__33139__$1 = ((cljs.core.seq_QMARK_.call(null,map__33139))?cljs.core.apply.call(null,cljs.core.hash_map,map__33139):map__33139);var next_props = map__33139__$1;var map__33140 = cljs.core.get.call(null,map__33139__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33140__$1 = ((cljs.core.seq_QMARK_.call(null,map__33140))?cljs.core.apply.call(null,cljs.core.hash_map,map__33140):map__33140);var next_table_state = map__33140__$1;var next_table_data = cljs.core.get.call(null,map__33140__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33141 = cljs.core.get.call(null,map__33140__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33141__$1 = ((cljs.core.seq_QMARK_.call(null,map__33141))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);var next_controls = map__33141__$1;var next_col_aggs = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33139__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33142 = p__33138;var map__33142__$1 = ((cljs.core.seq_QMARK_.call(null,map__33142))?cljs.core.apply.call(null,cljs.core.hash_map,map__33142):map__33142);var fetch_data_fn = cljs.core.get.call(null,map__33142__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33139,map__33139__$1,next_props,map__33140,map__33140__$1,next_table_state,next_table_data,map__33141,map__33141__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33142,map__33142__$1,fetch_data_fn,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33139,map__33139__$1,next_props,map__33140,map__33140__$1,next_table_state,next_table_data,map__33141,map__33141__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33142,map__33142__$1,fetch_data_fn,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (state_33160){var state_val_33161 = (state_33160[(1)]);if((state_val_33161 === (5)))
{var inst_33158 = (state_33160[(2)]);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33160__$1,inst_33158);
} else
{if((state_val_33161 === (4)))
{var state_33160__$1 = state_33160;var statearr_33162_33186 = state_33160__$1;(statearr_33162_33186[(2)] = null);
(statearr_33162_33186[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (3)))
{var inst_33145 = (state_33160[(7)]);var inst_33147 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33148 = ["RANGES-TABLE-DATA",inst_33145];var inst_33149 = (new cljs.core.PersistentVector(null,2,(5),inst_33147,inst_33148,null));var inst_33150 = cljs.core.clj__GT_js.call(null,inst_33149);var inst_33151 = console.log(inst_33150);var inst_33152 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33153 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33154 = (new cljs.core.PersistentVector(null,1,(5),inst_33152,inst_33153,null));var inst_33155 = om.core.update_BANG_.call(null,self__.table_state,inst_33154,inst_33145);var state_33160__$1 = (function (){var statearr_33163 = state_33160;(statearr_33163[(8)] = inst_33151);
return statearr_33163;
})();var statearr_33164_33187 = state_33160__$1;(statearr_33164_33187[(2)] = inst_33155);
(statearr_33164_33187[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (2)))
{var inst_33145 = (state_33160[(7)]);var inst_33145__$1 = (state_33160[(2)]);var state_33160__$1 = (function (){var statearr_33165 = state_33160;(statearr_33165[(7)] = inst_33145__$1);
return statearr_33165;
})();if(cljs.core.truth_(inst_33145__$1))
{var statearr_33166_33188 = state_33160__$1;(statearr_33166_33188[(1)] = (3));
} else
{var statearr_33167_33189 = state_33160__$1;(statearr_33167_33189[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (1)))
{var inst_33143 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33160__$1,(2),inst_33143);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33139,map__33139__$1,next_props,map__33140,map__33140__$1,next_table_state,next_table_data,map__33141,map__33141__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33142,map__33142__$1,fetch_data_fn,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33139,map__33139__$1,next_props,map__33140,map__33140__$1,next_table_state,next_table_data,map__33141,map__33141__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33142,map__33142__$1,fetch_data_fn,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33171 = [null,null,null,null,null,null,null,null,null];(statearr_33171[(0)] = state_machine__9111__auto__);
(statearr_33171[(1)] = (1));
return statearr_33171;
});
var state_machine__9111__auto____1 = (function (state_33160){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33160);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33172){if((e33172 instanceof Object))
{var ex__9114__auto__ = e33172;var statearr_33173_33190 = state_33160;(statearr_33173_33190[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33172;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33191 = state_33160;
state_33160 = G__33191;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33160){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33139,map__33139__$1,next_props,map__33140,map__33140__$1,next_table_state,next_table_data,map__33141,map__33141__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33142,map__33142__$1,fetch_data_fn,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
})();var state__9127__auto__ = (function (){var statearr_33174 = f__9126__auto__.call(null);(statearr_33174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33139,map__33139__$1,next_props,map__33140,map__33140__$1,next_table_state,next_table_data,map__33141,map__33141__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33142,map__33142__$1,fetch_data_fn,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.t33131.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33131.prototype.om$core$IRender$render$arity$1 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.t33131.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33131.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33177 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33177__$1 = (((G__33177 == null))?null:jayq.core.$.call(null,G__33177));var G__33177__$2 = (((G__33177__$1 == null))?null:G__33177__$1.highcharts());var G__33177__$3 = (((G__33177__$2 == null))?null:G__33177__$2.reflow());return G__33177__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
);
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.t33131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (_33133){var self__ = this;
var _33133__$1 = this;return self__.meta33132;
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.t33131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function (_33133,meta33132__$1){var self__ = this;
var _33133__$1 = this;return (new clustermap.components.ranges_chart.t33131(self__.G__33062,self__.output_checker33061,self__.index_type,self__.row_aggs,self__.owner,self__.map__33126,self__.metric_path,self__.props,self__.G__33124,self__.map__33125,self__.map__33129,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.index,self__.output_schema33058,self__.col_path,self__.filter_spec,self__.table_state,self__.map__33128,self__.controls,self__.col_aggs,self__.title,self__.map__33127,self__.G__33063,self__.rows,self__.cols,self__.map__33130,self__.validate__6034__auto__,self__.input_schema33059,self__.input_checker33060,self__.ufv__,meta33132__$1));
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
clustermap.components.ranges_chart.__GT_t33131 = ((function (map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182){
return (function __GT_t33131(G__33062__$1,output_checker33061__$1,index_type__$2,row_aggs__$2,owner__$3,map__33126__$2,metric_path__$2,props__$2,G__33124__$2,map__33125__$2,map__33129__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,output_schema33058__$1,col_path__$2,filter_spec__$2,table_state__$2,map__33128__$2,controls__$2,col_aggs__$2,title__$2,map__33127__$2,G__33063__$1,rows__$2,cols__$2,map__33130__$2,validate__6034__auto____$1,input_schema33059__$1,input_checker33060__$1,ufv____$1,meta33132){return (new clustermap.components.ranges_chart.t33131(G__33062__$1,output_checker33061__$1,index_type__$2,row_aggs__$2,owner__$3,map__33126__$2,metric_path__$2,props__$2,G__33124__$2,map__33125__$2,map__33129__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,output_schema33058__$1,col_path__$2,filter_spec__$2,table_state__$2,map__33128__$2,controls__$2,col_aggs__$2,title__$2,map__33127__$2,G__33063__$1,rows__$2,cols__$2,map__33130__$2,validate__6034__auto____$1,input_schema33059__$1,input_checker33060__$1,ufv____$1,meta33132));
});})(map__33128,map__33128__$1,props__$1,map__33129,map__33129__$1,table_state__$1,table_data__$1,map__33130,map__33130__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33124,map__33125,map__33125__$1,props,map__33126,map__33126__$1,table_state,table_data,map__33127,map__33127__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
}
return (new clustermap.components.ranges_chart.t33131(G__33062,output_checker33061_33182,index_type__$1,row_aggs__$1,owner__$2,map__33126__$1,metric_path__$1,props__$1,G__33124__$1,map__33125__$1,map__33129__$1,row_path__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,index__$1,output_schema33058_33179,col_path__$1,filter_spec__$1,table_state__$1,map__33128__$1,controls__$1,col_aggs__$1,title__$1,map__33127__$1,G__33063,rows__$1,cols__$1,map__33130__$1,validate__6034__auto__,input_schema33059_33180,input_checker33060_33181,ufv___33178,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33192 = output_checker33061_33182.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33192))
{var error__6036__auto___33193 = temp__4126__auto___33192;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33193,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33058_33179,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33178,output_schema33058_33179,input_schema33059_33180,input_checker33060_33181,output_checker33061_33182))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33058_33179,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33059_33180], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33057){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33057);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33057){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
