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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32746){var map__32792 = p__32746;var map__32792__$1 = ((cljs.core.seq_QMARK_.call(null,map__32792))?cljs.core.apply.call(null,cljs.core.hash_map,map__32792):map__32792);var map__32793 = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32793__$1 = ((cljs.core.seq_QMARK_.call(null,map__32793))?cljs.core.apply.call(null,cljs.core.hash_map,map__32793):map__32793);var table_data = map__32793__$1;var query = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32794 = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32794__$1 = ((cljs.core.seq_QMARK_.call(null,map__32794))?cljs.core.apply.call(null,cljs.core.hash_map,map__32794):map__32794);var controls = map__32794__$1;var title = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32794__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32795){var map__32796 = p__32795;var map__32796__$1 = ((cljs.core.seq_QMARK_.call(null,map__32796))?cljs.core.apply.call(null,cljs.core.hash_map,map__32796):map__32796);var x = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32797(s__32798){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32798__$1 = s__32798;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32798__$1);if(temp__4126__auto__)
{var s__32798__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32798__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32798__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32800 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32799 = (0);while(true){
if((i__32799 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32799);cljs.core.chunk_append.call(null,b__32800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32799,yk,c__4375__auto__,size__4376__auto__,b__32800,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32809(s__32810){return (new cljs.core.LazySeq(null,((function (i__32799,yk,c__4375__auto__,size__4376__auto__,b__32800,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32810__$1 = s__32810;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32810__$1);if(temp__4126__auto____$1)
{var s__32810__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32810__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32810__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32812 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32811 = (0);while(true){
if((i__32811 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32811);cljs.core.chunk_append.call(null,b__32812,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32837 = (i__32811 + (1));
i__32811 = G__32837;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32812),iter__32809.call(null,cljs.core.chunk_rest.call(null,s__32810__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32812),null);
}
} else
{var xk = cljs.core.first.call(null,s__32810__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32809.call(null,cljs.core.rest.call(null,s__32810__$2)));
}
} else
{return null;
}
break;
}
});})(i__32799,yk,c__4375__auto__,size__4376__auto__,b__32800,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32799,yk,c__4375__auto__,size__4376__auto__,b__32800,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__32838 = (i__32799 + (1));
i__32799 = G__32838;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32800),iter__32797.call(null,cljs.core.chunk_rest.call(null,s__32798__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32800),null);
}
} else
{var yk = cljs.core.first.call(null,s__32798__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32813(s__32814){return (new cljs.core.LazySeq(null,((function (yk,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32814__$1 = s__32814;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32814__$1);if(temp__4126__auto____$1)
{var s__32814__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32814__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32814__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32816 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32815 = (0);while(true){
if((i__32815 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32815);cljs.core.chunk_append.call(null,b__32816,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32839 = (i__32815 + (1));
i__32815 = G__32839;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32816),iter__32813.call(null,cljs.core.chunk_rest.call(null,s__32814__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32816),null);
}
} else
{var xk = cljs.core.first.call(null,s__32814__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32813.call(null,cljs.core.rest.call(null,s__32814__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32798__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32797.call(null,cljs.core.rest.call(null,s__32798__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32817(s__32818){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32818__$1 = s__32818;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32818__$1);if(temp__4126__auto__)
{var s__32818__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32818__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32818__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32820 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32819 = (0);while(true){
if((i__32819 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32819);cljs.core.chunk_append.call(null,b__32820,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__32840 = (i__32819 + (1));
i__32819 = G__32840;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32820),iter__32817.call(null,cljs.core.chunk_rest.call(null,s__32818__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32820),null);
}
} else
{var xa = cljs.core.first.call(null,s__32818__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32817.call(null,cljs.core.rest.call(null,s__32818__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32821(s__32822){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32822__$1 = s__32822;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32822__$1);if(temp__4126__auto__)
{var s__32822__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32822__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32822__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32824 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32823 = (0);while(true){
if((i__32823 < size__4376__auto__))
{var vec__32827 = cljs.core._nth.call(null,c__4375__auto__,i__32823);var ya = cljs.core.nth.call(null,vec__32827,(0),null);var i = cljs.core.nth.call(null,vec__32827,(1),null);cljs.core.chunk_append.call(null,b__32824,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__32841 = (i__32823 + (1));
i__32823 = G__32841;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32824),iter__32821.call(null,cljs.core.chunk_rest.call(null,s__32822__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32824),null);
}
} else
{var vec__32828 = cljs.core.first.call(null,s__32822__$2);var ya = cljs.core.nth.call(null,vec__32828,(0),null);var i = cljs.core.nth.call(null,vec__32828,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32821.call(null,cljs.core.rest.call(null,s__32822__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32829(s__32830){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32830__$1 = s__32830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32830__$1);if(temp__4126__auto__)
{var s__32830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32830__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32830__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32832 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32831 = (0);while(true){
if((i__32831 < size__4376__auto__))
{var vec__32835 = cljs.core._nth.call(null,c__4375__auto__,i__32831);var ya = cljs.core.nth.call(null,vec__32835,(0),null);var i = cljs.core.nth.call(null,vec__32835,(1),null);cljs.core.chunk_append.call(null,b__32832,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__32842 = (i__32831 + (1));
i__32831 = G__32842;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32832),iter__32829.call(null,cljs.core.chunk_rest.call(null,s__32830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32832),null);
}
} else
{var vec__32836 = cljs.core.first.call(null,s__32830__$2);var ya = cljs.core.nth.call(null,vec__32836,(0),null);var i = cljs.core.nth.call(null,vec__32836,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__32829.call(null,cljs.core.rest.call(null,s__32830__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32792,map__32792__$1,map__32793,map__32793__$1,table_data,query,results,map__32794,map__32794__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___32964 = schema.utils.use_fn_validation;var output_schema32844_32965 = schema.core.Any;var input_schema32845_32966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker32846_32967 = schema.core.checker.call(null,input_schema32845_32966);var output_checker32847_32968 = schema.core.checker.call(null,output_schema32844_32965);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function ranges_chart_component(G__32848,G__32849){var validate__6034__auto__ = ufv___32964.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32848,G__32849], null);var temp__4126__auto___32970 = input_checker32846_32967.call(null,args__6035__auto___32969);if(cljs.core.truth_(temp__4126__auto___32970))
{var error__6036__auto___32971 = temp__4126__auto___32970;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32971,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32969,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32845_32966,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32910 = G__32848;var map__32911 = G__32910;var map__32911__$1 = ((cljs.core.seq_QMARK_.call(null,map__32911))?cljs.core.apply.call(null,cljs.core.hash_map,map__32911):map__32911);var props = map__32911__$1;var map__32912 = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32912__$1 = ((cljs.core.seq_QMARK_.call(null,map__32912))?cljs.core.apply.call(null,cljs.core.hash_map,map__32912):map__32912);var table_state = map__32912__$1;var table_data = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32913 = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32913__$1 = ((cljs.core.seq_QMARK_.call(null,map__32913))?cljs.core.apply.call(null,cljs.core.hash_map,map__32913):map__32913);var controls = map__32913__$1;var index_type = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32849;var G__32910__$1 = G__32910;var owner__$1 = owner;while(true){
var map__32914 = G__32910__$1;var map__32914__$1 = ((cljs.core.seq_QMARK_.call(null,map__32914))?cljs.core.apply.call(null,cljs.core.hash_map,map__32914):map__32914);var props__$1 = map__32914__$1;var map__32915 = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32915__$1 = ((cljs.core.seq_QMARK_.call(null,map__32915))?cljs.core.apply.call(null,cljs.core.hash_map,map__32915):map__32915);var table_state__$1 = map__32915__$1;var table_data__$1 = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32916 = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32916__$1 = ((cljs.core.seq_QMARK_.call(null,map__32916))?cljs.core.apply.call(null,cljs.core.hash_map,map__32916):map__32916);var controls__$1 = map__32916__$1;var index_type__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__32916__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t32917 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t32917 = (function (index_type,row_aggs,owner,metric_path,props,map__32911,output_checker32847,map__32912,G__32849,row_path,table_data,ranges_chart_component,metric_aggs,map__32913,G__32910,index,map__32915,col_path,input_schema32845,filter_spec,map__32916,table_state,controls,G__32848,col_aggs,map__32914,title,rows,cols,validate__6034__auto__,ufv__,input_checker32846,output_schema32844,meta32918){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__32911 = map__32911;
this.output_checker32847 = output_checker32847;
this.map__32912 = map__32912;
this.G__32849 = G__32849;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.map__32913 = map__32913;
this.G__32910 = G__32910;
this.index = index;
this.map__32915 = map__32915;
this.col_path = col_path;
this.input_schema32845 = input_schema32845;
this.filter_spec = filter_spec;
this.map__32916 = map__32916;
this.table_state = table_state;
this.controls = controls;
this.G__32848 = G__32848;
this.col_aggs = col_aggs;
this.map__32914 = map__32914;
this.title = title;
this.rows = rows;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.input_checker32846 = input_checker32846;
this.output_schema32844 = output_schema32844;
this.meta32918 = meta32918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t32917.cljs$lang$type = true;
clustermap.components.ranges_chart.t32917.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t32917";
clustermap.components.ranges_chart.t32917.cljs$lang$ctorPrWriter = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t32917");
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.t32917.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t32917.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.t32917.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t32917.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (_,p__32920,___$1){var self__ = this;
var map__32921 = p__32920;var map__32921__$1 = ((cljs.core.seq_QMARK_.call(null,map__32921))?cljs.core.apply.call(null,cljs.core.hash_map,map__32921):map__32921);var prev_props = map__32921__$1;var map__32922 = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32922__$1 = ((cljs.core.seq_QMARK_.call(null,map__32922))?cljs.core.apply.call(null,cljs.core.hash_map,map__32922):map__32922);var prev_table_data = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.t32917.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t32917.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (_,p__32923,p__32924){var self__ = this;
var map__32925 = p__32923;var map__32925__$1 = ((cljs.core.seq_QMARK_.call(null,map__32925))?cljs.core.apply.call(null,cljs.core.hash_map,map__32925):map__32925);var next_props = map__32925__$1;var map__32926 = cljs.core.get.call(null,map__32925__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32926__$1 = ((cljs.core.seq_QMARK_.call(null,map__32926))?cljs.core.apply.call(null,cljs.core.hash_map,map__32926):map__32926);var next_table_state = map__32926__$1;var next_table_data = cljs.core.get.call(null,map__32926__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32927 = cljs.core.get.call(null,map__32926__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32927__$1 = ((cljs.core.seq_QMARK_.call(null,map__32927))?cljs.core.apply.call(null,cljs.core.hash_map,map__32927):map__32927);var next_controls = map__32927__$1;var next_col_aggs = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__32925__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32928 = p__32924;var map__32928__$1 = ((cljs.core.seq_QMARK_.call(null,map__32928))?cljs.core.apply.call(null,cljs.core.hash_map,map__32928):map__32928);var fetch_data_fn = cljs.core.get.call(null,map__32928__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32925,map__32925__$1,next_props,map__32926,map__32926__$1,next_table_state,next_table_data,map__32927,map__32927__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32928,map__32928__$1,fetch_data_fn,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32925,map__32925__$1,next_props,map__32926,map__32926__$1,next_table_state,next_table_data,map__32927,map__32927__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32928,map__32928__$1,fetch_data_fn,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (state_32946){var state_val_32947 = (state_32946[(1)]);if((state_val_32947 === (5)))
{var inst_32944 = (state_32946[(2)]);var state_32946__$1 = state_32946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32946__$1,inst_32944);
} else
{if((state_val_32947 === (4)))
{var state_32946__$1 = state_32946;var statearr_32948_32972 = state_32946__$1;(statearr_32948_32972[(2)] = null);
(statearr_32948_32972[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32947 === (3)))
{var inst_32931 = (state_32946[(7)]);var inst_32933 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32934 = ["RANGES-TABLE-DATA",inst_32931];var inst_32935 = (new cljs.core.PersistentVector(null,2,(5),inst_32933,inst_32934,null));var inst_32936 = cljs.core.clj__GT_js.call(null,inst_32935);var inst_32937 = console.log(inst_32936);var inst_32938 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32939 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32940 = (new cljs.core.PersistentVector(null,1,(5),inst_32938,inst_32939,null));var inst_32941 = om.core.update_BANG_.call(null,self__.table_state,inst_32940,inst_32931);var state_32946__$1 = (function (){var statearr_32949 = state_32946;(statearr_32949[(8)] = inst_32937);
return statearr_32949;
})();var statearr_32950_32973 = state_32946__$1;(statearr_32950_32973[(2)] = inst_32941);
(statearr_32950_32973[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32947 === (2)))
{var inst_32931 = (state_32946[(7)]);var inst_32931__$1 = (state_32946[(2)]);var state_32946__$1 = (function (){var statearr_32951 = state_32946;(statearr_32951[(7)] = inst_32931__$1);
return statearr_32951;
})();if(cljs.core.truth_(inst_32931__$1))
{var statearr_32952_32974 = state_32946__$1;(statearr_32952_32974[(1)] = (3));
} else
{var statearr_32953_32975 = state_32946__$1;(statearr_32953_32975[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32947 === (1)))
{var inst_32929 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_32946__$1 = state_32946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32946__$1,(2),inst_32929);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32925,map__32925__$1,next_props,map__32926,map__32926__$1,next_table_state,next_table_data,map__32927,map__32927__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32928,map__32928__$1,fetch_data_fn,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32925,map__32925__$1,next_props,map__32926,map__32926__$1,next_table_state,next_table_data,map__32927,map__32927__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32928,map__32928__$1,fetch_data_fn,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32957 = [null,null,null,null,null,null,null,null,null];(statearr_32957[(0)] = state_machine__9111__auto__);
(statearr_32957[(1)] = (1));
return statearr_32957;
});
var state_machine__9111__auto____1 = (function (state_32946){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32946);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32958){if((e32958 instanceof Object))
{var ex__9114__auto__ = e32958;var statearr_32959_32976 = state_32946;(statearr_32959_32976[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32958;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32977 = state_32946;
state_32946 = G__32977;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32946){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32925,map__32925__$1,next_props,map__32926,map__32926__$1,next_table_state,next_table_data,map__32927,map__32927__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32928,map__32928__$1,fetch_data_fn,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
})();var state__9127__auto__ = (function (){var statearr_32960 = f__9126__auto__.call(null);(statearr_32960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32925,map__32925__$1,next_props,map__32926,map__32926__$1,next_table_state,next_table_data,map__32927,map__32927__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32928,map__32928__$1,fetch_data_fn,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.t32917.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t32917.prototype.om$core$IRender$render$arity$1 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.t32917.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t32917.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32963 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__32963__$1 = (((G__32963 == null))?null:jayq.core.$.call(null,G__32963));var G__32963__$2 = (((G__32963__$1 == null))?null:G__32963__$1.highcharts());var G__32963__$3 = (((G__32963__$2 == null))?null:G__32963__$2.reflow());return G__32963__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
);
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.t32917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (_32919){var self__ = this;
var _32919__$1 = this;return self__.meta32918;
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.t32917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function (_32919,meta32918__$1){var self__ = this;
var _32919__$1 = this;return (new clustermap.components.ranges_chart.t32917(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__32911,self__.output_checker32847,self__.map__32912,self__.G__32849,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.map__32913,self__.G__32910,self__.index,self__.map__32915,self__.col_path,self__.input_schema32845,self__.filter_spec,self__.map__32916,self__.table_state,self__.controls,self__.G__32848,self__.col_aggs,self__.map__32914,self__.title,self__.rows,self__.cols,self__.validate__6034__auto__,self__.ufv__,self__.input_checker32846,self__.output_schema32844,meta32918__$1));
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
clustermap.components.ranges_chart.__GT_t32917 = ((function (map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968){
return (function __GT_t32917(index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,map__32911__$2,output_checker32847__$1,map__32912__$2,G__32849__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,map__32913__$2,G__32910__$2,index__$2,map__32915__$2,col_path__$2,input_schema32845__$1,filter_spec__$2,map__32916__$2,table_state__$2,controls__$2,G__32848__$1,col_aggs__$2,map__32914__$2,title__$2,rows__$2,cols__$2,validate__6034__auto____$1,ufv____$1,input_checker32846__$1,output_schema32844__$1,meta32918){return (new clustermap.components.ranges_chart.t32917(index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,map__32911__$2,output_checker32847__$1,map__32912__$2,G__32849__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,map__32913__$2,G__32910__$2,index__$2,map__32915__$2,col_path__$2,input_schema32845__$1,filter_spec__$2,map__32916__$2,table_state__$2,controls__$2,G__32848__$1,col_aggs__$2,map__32914__$2,title__$2,rows__$2,cols__$2,validate__6034__auto____$1,ufv____$1,input_checker32846__$1,output_schema32844__$1,meta32918));
});})(map__32914,map__32914__$1,props__$1,map__32915,map__32915__$1,table_state__$1,table_data__$1,map__32916,map__32916__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32910,map__32911,map__32911__$1,props,map__32912,map__32912__$1,table_state,table_data,map__32913,map__32913__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
}
return (new clustermap.components.ranges_chart.t32917(index_type__$1,row_aggs__$1,owner__$2,metric_path__$1,props__$1,map__32911__$1,output_checker32847_32968,map__32912__$1,G__32849,row_path__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,map__32913__$1,G__32910__$1,index__$1,map__32915__$1,col_path__$1,input_schema32845_32966,filter_spec__$1,map__32916__$1,table_state__$1,controls__$1,G__32848,col_aggs__$1,map__32914__$1,title__$1,rows__$1,cols__$1,validate__6034__auto__,ufv___32964,input_checker32846_32967,output_schema32844_32965,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32978 = output_checker32847_32968.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32978))
{var error__6036__auto___32979 = temp__4126__auto___32978;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32979)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32979,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32844_32965,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32964,output_schema32844_32965,input_schema32845_32966,input_checker32846_32967,output_checker32847_32968))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema32844_32965,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32845_32966], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m32843){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m32843);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m32843){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m32843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
