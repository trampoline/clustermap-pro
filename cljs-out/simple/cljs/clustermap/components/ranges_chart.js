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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32867){var map__32913 = p__32867;var map__32913__$1 = ((cljs.core.seq_QMARK_.call(null,map__32913))?cljs.core.apply.call(null,cljs.core.hash_map,map__32913):map__32913);var map__32914 = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32914__$1 = ((cljs.core.seq_QMARK_.call(null,map__32914))?cljs.core.apply.call(null,cljs.core.hash_map,map__32914):map__32914);var table_data = map__32914__$1;var query = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32915 = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32915__$1 = ((cljs.core.seq_QMARK_.call(null,map__32915))?cljs.core.apply.call(null,cljs.core.hash_map,map__32915):map__32915);var controls = map__32915__$1;var title = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32916){var map__32917 = p__32916;var map__32917__$1 = ((cljs.core.seq_QMARK_.call(null,map__32917))?cljs.core.apply.call(null,cljs.core.hash_map,map__32917):map__32917);var x = cljs.core.get.call(null,map__32917__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32917__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32917__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32918(s__32919){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32919__$1 = s__32919;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32919__$1);if(temp__4126__auto__)
{var s__32919__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32919__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32919__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32921 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32920 = (0);while(true){
if((i__32920 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32920);cljs.core.chunk_append.call(null,b__32921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32920,yk,c__4375__auto__,size__4376__auto__,b__32921,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32930(s__32931){return (new cljs.core.LazySeq(null,((function (i__32920,yk,c__4375__auto__,size__4376__auto__,b__32921,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32931__$1 = s__32931;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32931__$1);if(temp__4126__auto____$1)
{var s__32931__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32931__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32931__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32933 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32932 = (0);while(true){
if((i__32932 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32932);cljs.core.chunk_append.call(null,b__32933,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32958 = (i__32932 + (1));
i__32932 = G__32958;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32933),iter__32930.call(null,cljs.core.chunk_rest.call(null,s__32931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32933),null);
}
} else
{var xk = cljs.core.first.call(null,s__32931__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32930.call(null,cljs.core.rest.call(null,s__32931__$2)));
}
} else
{return null;
}
break;
}
});})(i__32920,yk,c__4375__auto__,size__4376__auto__,b__32921,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32920,yk,c__4375__auto__,size__4376__auto__,b__32921,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__32959 = (i__32920 + (1));
i__32920 = G__32959;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32921),iter__32918.call(null,cljs.core.chunk_rest.call(null,s__32919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32921),null);
}
} else
{var yk = cljs.core.first.call(null,s__32919__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32934(s__32935){return (new cljs.core.LazySeq(null,((function (yk,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32935__$1 = s__32935;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32935__$1);if(temp__4126__auto____$1)
{var s__32935__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32935__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32935__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32937 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32936 = (0);while(true){
if((i__32936 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32936);cljs.core.chunk_append.call(null,b__32937,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32960 = (i__32936 + (1));
i__32936 = G__32960;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32937),iter__32934.call(null,cljs.core.chunk_rest.call(null,s__32935__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32937),null);
}
} else
{var xk = cljs.core.first.call(null,s__32935__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32934.call(null,cljs.core.rest.call(null,s__32935__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32919__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32918.call(null,cljs.core.rest.call(null,s__32919__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32938(s__32939){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32939__$1 = s__32939;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32939__$1);if(temp__4126__auto__)
{var s__32939__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32939__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32939__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32941 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32940 = (0);while(true){
if((i__32940 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32940);cljs.core.chunk_append.call(null,b__32941,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__32961 = (i__32940 + (1));
i__32940 = G__32961;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32941),iter__32938.call(null,cljs.core.chunk_rest.call(null,s__32939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32941),null);
}
} else
{var xa = cljs.core.first.call(null,s__32939__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32938.call(null,cljs.core.rest.call(null,s__32939__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32942(s__32943){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32943__$1 = s__32943;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32943__$1);if(temp__4126__auto__)
{var s__32943__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32943__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32943__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32945 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32944 = (0);while(true){
if((i__32944 < size__4376__auto__))
{var vec__32948 = cljs.core._nth.call(null,c__4375__auto__,i__32944);var ya = cljs.core.nth.call(null,vec__32948,(0),null);var i = cljs.core.nth.call(null,vec__32948,(1),null);cljs.core.chunk_append.call(null,b__32945,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__32962 = (i__32944 + (1));
i__32944 = G__32962;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32945),iter__32942.call(null,cljs.core.chunk_rest.call(null,s__32943__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32945),null);
}
} else
{var vec__32949 = cljs.core.first.call(null,s__32943__$2);var ya = cljs.core.nth.call(null,vec__32949,(0),null);var i = cljs.core.nth.call(null,vec__32949,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32942.call(null,cljs.core.rest.call(null,s__32943__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32950(s__32951){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32951__$1 = s__32951;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32951__$1);if(temp__4126__auto__)
{var s__32951__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32951__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32951__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32953 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32952 = (0);while(true){
if((i__32952 < size__4376__auto__))
{var vec__32956 = cljs.core._nth.call(null,c__4375__auto__,i__32952);var ya = cljs.core.nth.call(null,vec__32956,(0),null);var i = cljs.core.nth.call(null,vec__32956,(1),null);cljs.core.chunk_append.call(null,b__32953,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__32963 = (i__32952 + (1));
i__32952 = G__32963;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32953),iter__32950.call(null,cljs.core.chunk_rest.call(null,s__32951__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32953),null);
}
} else
{var vec__32957 = cljs.core.first.call(null,s__32951__$2);var ya = cljs.core.nth.call(null,vec__32957,(0),null);var i = cljs.core.nth.call(null,vec__32957,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__32950.call(null,cljs.core.rest.call(null,s__32951__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32913,map__32913__$1,map__32914,map__32914__$1,table_data,query,results,map__32915,map__32915__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33085 = schema.utils.use_fn_validation;var output_schema32965_33086 = schema.core.Any;var input_schema32966_33087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker32967_33088 = schema.core.checker.call(null,input_schema32966_33087);var output_checker32968_33089 = schema.core.checker.call(null,output_schema32965_33086);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function ranges_chart_component(G__32969,G__32970){var validate__6034__auto__ = ufv___33085.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32969,G__32970], null);var temp__4126__auto___33091 = input_checker32967_33088.call(null,args__6035__auto___33090);if(cljs.core.truth_(temp__4126__auto___33091))
{var error__6036__auto___33092 = temp__4126__auto___33091;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33092)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33092,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33090,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32966_33087,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33031 = G__32969;var map__33032 = G__33031;var map__33032__$1 = ((cljs.core.seq_QMARK_.call(null,map__33032))?cljs.core.apply.call(null,cljs.core.hash_map,map__33032):map__33032);var props = map__33032__$1;var map__33033 = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33033__$1 = ((cljs.core.seq_QMARK_.call(null,map__33033))?cljs.core.apply.call(null,cljs.core.hash_map,map__33033):map__33033);var table_state = map__33033__$1;var table_data = cljs.core.get.call(null,map__33033__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33034 = cljs.core.get.call(null,map__33033__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33034__$1 = ((cljs.core.seq_QMARK_.call(null,map__33034))?cljs.core.apply.call(null,cljs.core.hash_map,map__33034):map__33034);var controls = map__33034__$1;var index_type = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32970;var G__33031__$1 = G__33031;var owner__$1 = owner;while(true){
var map__33035 = G__33031__$1;var map__33035__$1 = ((cljs.core.seq_QMARK_.call(null,map__33035))?cljs.core.apply.call(null,cljs.core.hash_map,map__33035):map__33035);var props__$1 = map__33035__$1;var map__33036 = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33036__$1 = ((cljs.core.seq_QMARK_.call(null,map__33036))?cljs.core.apply.call(null,cljs.core.hash_map,map__33036):map__33036);var table_state__$1 = map__33036__$1;var table_data__$1 = cljs.core.get.call(null,map__33036__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33037 = cljs.core.get.call(null,map__33036__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33037__$1 = ((cljs.core.seq_QMARK_.call(null,map__33037))?cljs.core.apply.call(null,cljs.core.hash_map,map__33037):map__33037);var controls__$1 = map__33037__$1;var index_type__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33037__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33038 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33038 = (function (G__32970,index_type,row_aggs,owner,map__33036,G__33031,metric_path,props,row_path,map__33032,table_data,ranges_chart_component,metric_aggs,index,input_checker32967,output_schema32965,col_path,filter_spec,map__33033,output_checker32968,table_state,map__33037,G__32969,controls,col_aggs,title,rows,input_schema32966,cols,map__33034,validate__6034__auto__,map__33035,ufv__,meta33039){
this.G__32970 = G__32970;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.map__33036 = map__33036;
this.G__33031 = G__33031;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.map__33032 = map__33032;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.index = index;
this.input_checker32967 = input_checker32967;
this.output_schema32965 = output_schema32965;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__33033 = map__33033;
this.output_checker32968 = output_checker32968;
this.table_state = table_state;
this.map__33037 = map__33037;
this.G__32969 = G__32969;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.input_schema32966 = input_schema32966;
this.cols = cols;
this.map__33034 = map__33034;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__33035 = map__33035;
this.ufv__ = ufv__;
this.meta33039 = meta33039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33038.cljs$lang$type = true;
clustermap.components.ranges_chart.t33038.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33038";
clustermap.components.ranges_chart.t33038.cljs$lang$ctorPrWriter = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33038");
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.t33038.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33038.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.t33038.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33038.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (_,p__33041,___$1){var self__ = this;
var map__33042 = p__33041;var map__33042__$1 = ((cljs.core.seq_QMARK_.call(null,map__33042))?cljs.core.apply.call(null,cljs.core.hash_map,map__33042):map__33042);var prev_props = map__33042__$1;var map__33043 = cljs.core.get.call(null,map__33042__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33043__$1 = ((cljs.core.seq_QMARK_.call(null,map__33043))?cljs.core.apply.call(null,cljs.core.hash_map,map__33043):map__33043);var prev_table_data = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.t33038.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33038.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (_,p__33044,p__33045){var self__ = this;
var map__33046 = p__33044;var map__33046__$1 = ((cljs.core.seq_QMARK_.call(null,map__33046))?cljs.core.apply.call(null,cljs.core.hash_map,map__33046):map__33046);var next_props = map__33046__$1;var map__33047 = cljs.core.get.call(null,map__33046__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33047__$1 = ((cljs.core.seq_QMARK_.call(null,map__33047))?cljs.core.apply.call(null,cljs.core.hash_map,map__33047):map__33047);var next_table_state = map__33047__$1;var next_table_data = cljs.core.get.call(null,map__33047__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33048 = cljs.core.get.call(null,map__33047__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33048__$1 = ((cljs.core.seq_QMARK_.call(null,map__33048))?cljs.core.apply.call(null,cljs.core.hash_map,map__33048):map__33048);var next_controls = map__33048__$1;var next_col_aggs = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33046__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33049 = p__33045;var map__33049__$1 = ((cljs.core.seq_QMARK_.call(null,map__33049))?cljs.core.apply.call(null,cljs.core.hash_map,map__33049):map__33049);var fetch_data_fn = cljs.core.get.call(null,map__33049__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33046,map__33046__$1,next_props,map__33047,map__33047__$1,next_table_state,next_table_data,map__33048,map__33048__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33049,map__33049__$1,fetch_data_fn,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33046,map__33046__$1,next_props,map__33047,map__33047__$1,next_table_state,next_table_data,map__33048,map__33048__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33049,map__33049__$1,fetch_data_fn,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (state_33067){var state_val_33068 = (state_33067[(1)]);if((state_val_33068 === (5)))
{var inst_33065 = (state_33067[(2)]);var state_33067__$1 = state_33067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33067__$1,inst_33065);
} else
{if((state_val_33068 === (4)))
{var state_33067__$1 = state_33067;var statearr_33069_33093 = state_33067__$1;(statearr_33069_33093[(2)] = null);
(statearr_33069_33093[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33068 === (3)))
{var inst_33052 = (state_33067[(7)]);var inst_33054 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33055 = ["RANGES-TABLE-DATA",inst_33052];var inst_33056 = (new cljs.core.PersistentVector(null,2,(5),inst_33054,inst_33055,null));var inst_33057 = cljs.core.clj__GT_js.call(null,inst_33056);var inst_33058 = console.log(inst_33057);var inst_33059 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33060 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33061 = (new cljs.core.PersistentVector(null,1,(5),inst_33059,inst_33060,null));var inst_33062 = om.core.update_BANG_.call(null,self__.table_state,inst_33061,inst_33052);var state_33067__$1 = (function (){var statearr_33070 = state_33067;(statearr_33070[(8)] = inst_33058);
return statearr_33070;
})();var statearr_33071_33094 = state_33067__$1;(statearr_33071_33094[(2)] = inst_33062);
(statearr_33071_33094[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33068 === (2)))
{var inst_33052 = (state_33067[(7)]);var inst_33052__$1 = (state_33067[(2)]);var state_33067__$1 = (function (){var statearr_33072 = state_33067;(statearr_33072[(7)] = inst_33052__$1);
return statearr_33072;
})();if(cljs.core.truth_(inst_33052__$1))
{var statearr_33073_33095 = state_33067__$1;(statearr_33073_33095[(1)] = (3));
} else
{var statearr_33074_33096 = state_33067__$1;(statearr_33074_33096[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33068 === (1)))
{var inst_33050 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33067__$1 = state_33067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33067__$1,(2),inst_33050);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33046,map__33046__$1,next_props,map__33047,map__33047__$1,next_table_state,next_table_data,map__33048,map__33048__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33049,map__33049__$1,fetch_data_fn,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33046,map__33046__$1,next_props,map__33047,map__33047__$1,next_table_state,next_table_data,map__33048,map__33048__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33049,map__33049__$1,fetch_data_fn,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33078 = [null,null,null,null,null,null,null,null,null];(statearr_33078[(0)] = state_machine__9111__auto__);
(statearr_33078[(1)] = (1));
return statearr_33078;
});
var state_machine__9111__auto____1 = (function (state_33067){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33067);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33079){if((e33079 instanceof Object))
{var ex__9114__auto__ = e33079;var statearr_33080_33097 = state_33067;(statearr_33080_33097[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33067);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33079;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33098 = state_33067;
state_33067 = G__33098;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33067){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33046,map__33046__$1,next_props,map__33047,map__33047__$1,next_table_state,next_table_data,map__33048,map__33048__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33049,map__33049__$1,fetch_data_fn,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
})();var state__9127__auto__ = (function (){var statearr_33081 = f__9126__auto__.call(null);(statearr_33081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33046,map__33046__$1,next_props,map__33047,map__33047__$1,next_table_state,next_table_data,map__33048,map__33048__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33049,map__33049__$1,fetch_data_fn,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.t33038.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33038.prototype.om$core$IRender$render$arity$1 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.t33038.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33038.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33084 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33084__$1 = (((G__33084 == null))?null:jayq.core.$.call(null,G__33084));var G__33084__$2 = (((G__33084__$1 == null))?null:G__33084__$1.highcharts());var G__33084__$3 = (((G__33084__$2 == null))?null:G__33084__$2.reflow());return G__33084__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
);
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.t33038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (_33040){var self__ = this;
var _33040__$1 = this;return self__.meta33039;
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.t33038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function (_33040,meta33039__$1){var self__ = this;
var _33040__$1 = this;return (new clustermap.components.ranges_chart.t33038(self__.G__32970,self__.index_type,self__.row_aggs,self__.owner,self__.map__33036,self__.G__33031,self__.metric_path,self__.props,self__.row_path,self__.map__33032,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.index,self__.input_checker32967,self__.output_schema32965,self__.col_path,self__.filter_spec,self__.map__33033,self__.output_checker32968,self__.table_state,self__.map__33037,self__.G__32969,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.input_schema32966,self__.cols,self__.map__33034,self__.validate__6034__auto__,self__.map__33035,self__.ufv__,meta33039__$1));
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
clustermap.components.ranges_chart.__GT_t33038 = ((function (map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089){
return (function __GT_t33038(G__32970__$1,index_type__$2,row_aggs__$2,owner__$3,map__33036__$2,G__33031__$2,metric_path__$2,props__$2,row_path__$2,map__33032__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,input_checker32967__$1,output_schema32965__$1,col_path__$2,filter_spec__$2,map__33033__$2,output_checker32968__$1,table_state__$2,map__33037__$2,G__32969__$1,controls__$2,col_aggs__$2,title__$2,rows__$2,input_schema32966__$1,cols__$2,map__33034__$2,validate__6034__auto____$1,map__33035__$2,ufv____$1,meta33039){return (new clustermap.components.ranges_chart.t33038(G__32970__$1,index_type__$2,row_aggs__$2,owner__$3,map__33036__$2,G__33031__$2,metric_path__$2,props__$2,row_path__$2,map__33032__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,input_checker32967__$1,output_schema32965__$1,col_path__$2,filter_spec__$2,map__33033__$2,output_checker32968__$1,table_state__$2,map__33037__$2,G__32969__$1,controls__$2,col_aggs__$2,title__$2,rows__$2,input_schema32966__$1,cols__$2,map__33034__$2,validate__6034__auto____$1,map__33035__$2,ufv____$1,meta33039));
});})(map__33035,map__33035__$1,props__$1,map__33036,map__33036__$1,table_state__$1,table_data__$1,map__33037,map__33037__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33031,map__33032,map__33032__$1,props,map__33033,map__33033__$1,table_state,table_data,map__33034,map__33034__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
}
return (new clustermap.components.ranges_chart.t33038(G__32970,index_type__$1,row_aggs__$1,owner__$2,map__33036__$1,G__33031__$1,metric_path__$1,props__$1,row_path__$1,map__33032__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,index__$1,input_checker32967_33088,output_schema32965_33086,col_path__$1,filter_spec__$1,map__33033__$1,output_checker32968_33089,table_state__$1,map__33037__$1,G__32969,controls__$1,col_aggs__$1,title__$1,rows__$1,input_schema32966_33087,cols__$1,map__33034__$1,validate__6034__auto__,map__33035__$1,ufv___33085,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33099 = output_checker32968_33089.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33099))
{var error__6036__auto___33100 = temp__4126__auto___33099;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33100)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33100,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32965_33086,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33085,output_schema32965_33086,input_schema32966_33087,input_checker32967_33088,output_checker32968_33089))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema32965_33086,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32966_33087], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m32964){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m32964);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m32964){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m32964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
