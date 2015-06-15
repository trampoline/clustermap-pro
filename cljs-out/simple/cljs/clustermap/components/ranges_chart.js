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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32773){var map__32819 = p__32773;var map__32819__$1 = ((cljs.core.seq_QMARK_.call(null,map__32819))?cljs.core.apply.call(null,cljs.core.hash_map,map__32819):map__32819);var map__32820 = cljs.core.get.call(null,map__32819__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32820__$1 = ((cljs.core.seq_QMARK_.call(null,map__32820))?cljs.core.apply.call(null,cljs.core.hash_map,map__32820):map__32820);var table_data = map__32820__$1;var query = cljs.core.get.call(null,map__32820__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32820__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32821 = cljs.core.get.call(null,map__32819__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32821__$1 = ((cljs.core.seq_QMARK_.call(null,map__32821))?cljs.core.apply.call(null,cljs.core.hash_map,map__32821):map__32821);var controls = map__32821__$1;var title = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32822){var map__32823 = p__32822;var map__32823__$1 = ((cljs.core.seq_QMARK_.call(null,map__32823))?cljs.core.apply.call(null,cljs.core.hash_map,map__32823):map__32823);var x = cljs.core.get.call(null,map__32823__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32823__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32823__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32824(s__32825){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32825__$1 = s__32825;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32825__$1);if(temp__4126__auto__)
{var s__32825__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32825__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32825__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32827 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32826 = (0);while(true){
if((i__32826 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32826);cljs.core.chunk_append.call(null,b__32827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32826,yk,c__4375__auto__,size__4376__auto__,b__32827,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32836(s__32837){return (new cljs.core.LazySeq(null,((function (i__32826,yk,c__4375__auto__,size__4376__auto__,b__32827,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32837__$1 = s__32837;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32837__$1);if(temp__4126__auto____$1)
{var s__32837__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32837__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32837__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32839 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32838 = (0);while(true){
if((i__32838 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32838);cljs.core.chunk_append.call(null,b__32839,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32864 = (i__32838 + (1));
i__32838 = G__32864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32839),iter__32836.call(null,cljs.core.chunk_rest.call(null,s__32837__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32839),null);
}
} else
{var xk = cljs.core.first.call(null,s__32837__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32836.call(null,cljs.core.rest.call(null,s__32837__$2)));
}
} else
{return null;
}
break;
}
});})(i__32826,yk,c__4375__auto__,size__4376__auto__,b__32827,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32826,yk,c__4375__auto__,size__4376__auto__,b__32827,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__32865 = (i__32826 + (1));
i__32826 = G__32865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32827),iter__32824.call(null,cljs.core.chunk_rest.call(null,s__32825__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32827),null);
}
} else
{var yk = cljs.core.first.call(null,s__32825__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32840(s__32841){return (new cljs.core.LazySeq(null,((function (yk,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32841__$1 = s__32841;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32841__$1);if(temp__4126__auto____$1)
{var s__32841__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32841__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32841__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32843 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32842 = (0);while(true){
if((i__32842 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32842);cljs.core.chunk_append.call(null,b__32843,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32866 = (i__32842 + (1));
i__32842 = G__32866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32843),iter__32840.call(null,cljs.core.chunk_rest.call(null,s__32841__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32843),null);
}
} else
{var xk = cljs.core.first.call(null,s__32841__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32840.call(null,cljs.core.rest.call(null,s__32841__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32825__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32824.call(null,cljs.core.rest.call(null,s__32825__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32844(s__32845){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32845__$1 = s__32845;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32845__$1);if(temp__4126__auto__)
{var s__32845__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32845__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32845__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32847 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32846 = (0);while(true){
if((i__32846 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32846);cljs.core.chunk_append.call(null,b__32847,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__32867 = (i__32846 + (1));
i__32846 = G__32867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32847),iter__32844.call(null,cljs.core.chunk_rest.call(null,s__32845__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32847),null);
}
} else
{var xa = cljs.core.first.call(null,s__32845__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32844.call(null,cljs.core.rest.call(null,s__32845__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32848(s__32849){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32849__$1 = s__32849;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32849__$1);if(temp__4126__auto__)
{var s__32849__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32849__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32849__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32851 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32850 = (0);while(true){
if((i__32850 < size__4376__auto__))
{var vec__32854 = cljs.core._nth.call(null,c__4375__auto__,i__32850);var ya = cljs.core.nth.call(null,vec__32854,(0),null);var i = cljs.core.nth.call(null,vec__32854,(1),null);cljs.core.chunk_append.call(null,b__32851,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__32868 = (i__32850 + (1));
i__32850 = G__32868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32851),iter__32848.call(null,cljs.core.chunk_rest.call(null,s__32849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32851),null);
}
} else
{var vec__32855 = cljs.core.first.call(null,s__32849__$2);var ya = cljs.core.nth.call(null,vec__32855,(0),null);var i = cljs.core.nth.call(null,vec__32855,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32848.call(null,cljs.core.rest.call(null,s__32849__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32856(s__32857){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32857__$1 = s__32857;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32857__$1);if(temp__4126__auto__)
{var s__32857__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32857__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32857__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32859 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32858 = (0);while(true){
if((i__32858 < size__4376__auto__))
{var vec__32862 = cljs.core._nth.call(null,c__4375__auto__,i__32858);var ya = cljs.core.nth.call(null,vec__32862,(0),null);var i = cljs.core.nth.call(null,vec__32862,(1),null);cljs.core.chunk_append.call(null,b__32859,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__32869 = (i__32858 + (1));
i__32858 = G__32869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32859),iter__32856.call(null,cljs.core.chunk_rest.call(null,s__32857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32859),null);
}
} else
{var vec__32863 = cljs.core.first.call(null,s__32857__$2);var ya = cljs.core.nth.call(null,vec__32863,(0),null);var i = cljs.core.nth.call(null,vec__32863,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__32856.call(null,cljs.core.rest.call(null,s__32857__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32819,map__32819__$1,map__32820,map__32820__$1,table_data,query,results,map__32821,map__32821__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___32991 = schema.utils.use_fn_validation;var output_schema32871_32992 = schema.core.Any;var input_schema32872_32993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker32873_32994 = schema.core.checker.call(null,input_schema32872_32993);var output_checker32874_32995 = schema.core.checker.call(null,output_schema32871_32992);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function ranges_chart_component(G__32875,G__32876){var validate__6034__auto__ = ufv___32991.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32875,G__32876], null);var temp__4126__auto___32997 = input_checker32873_32994.call(null,args__6035__auto___32996);if(cljs.core.truth_(temp__4126__auto___32997))
{var error__6036__auto___32998 = temp__4126__auto___32997;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32998)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32998,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32996,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32872_32993,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32937 = G__32875;var map__32938 = G__32937;var map__32938__$1 = ((cljs.core.seq_QMARK_.call(null,map__32938))?cljs.core.apply.call(null,cljs.core.hash_map,map__32938):map__32938);var props = map__32938__$1;var map__32939 = cljs.core.get.call(null,map__32938__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32939__$1 = ((cljs.core.seq_QMARK_.call(null,map__32939))?cljs.core.apply.call(null,cljs.core.hash_map,map__32939):map__32939);var table_state = map__32939__$1;var table_data = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32940 = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32940__$1 = ((cljs.core.seq_QMARK_.call(null,map__32940))?cljs.core.apply.call(null,cljs.core.hash_map,map__32940):map__32940);var controls = map__32940__$1;var index_type = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__32938__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32876;var G__32937__$1 = G__32937;var owner__$1 = owner;while(true){
var map__32941 = G__32937__$1;var map__32941__$1 = ((cljs.core.seq_QMARK_.call(null,map__32941))?cljs.core.apply.call(null,cljs.core.hash_map,map__32941):map__32941);var props__$1 = map__32941__$1;var map__32942 = cljs.core.get.call(null,map__32941__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32942__$1 = ((cljs.core.seq_QMARK_.call(null,map__32942))?cljs.core.apply.call(null,cljs.core.hash_map,map__32942):map__32942);var table_state__$1 = map__32942__$1;var table_data__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32943 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32943__$1 = ((cljs.core.seq_QMARK_.call(null,map__32943))?cljs.core.apply.call(null,cljs.core.hash_map,map__32943):map__32943);var controls__$1 = map__32943__$1;var index_type__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__32943__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__32941__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t32944 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t32944 = (function (map__32939,index_type,map__32938,row_aggs,owner,metric_path,props,input_checker32873,map__32940,row_path,table_data,ranges_chart_component,metric_aggs,index,G__32875,col_path,filter_spec,output_checker32874,map__32941,table_state,G__32876,controls,col_aggs,map__32942,title,map__32943,rows,output_schema32871,cols,validate__6034__auto__,G__32937,ufv__,input_schema32872,meta32945){
this.map__32939 = map__32939;
this.index_type = index_type;
this.map__32938 = map__32938;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.input_checker32873 = input_checker32873;
this.map__32940 = map__32940;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.index = index;
this.G__32875 = G__32875;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.output_checker32874 = output_checker32874;
this.map__32941 = map__32941;
this.table_state = table_state;
this.G__32876 = G__32876;
this.controls = controls;
this.col_aggs = col_aggs;
this.map__32942 = map__32942;
this.title = title;
this.map__32943 = map__32943;
this.rows = rows;
this.output_schema32871 = output_schema32871;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__32937 = G__32937;
this.ufv__ = ufv__;
this.input_schema32872 = input_schema32872;
this.meta32945 = meta32945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t32944.cljs$lang$type = true;
clustermap.components.ranges_chart.t32944.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t32944";
clustermap.components.ranges_chart.t32944.cljs$lang$ctorPrWriter = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t32944");
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.t32944.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t32944.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.t32944.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t32944.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (_,p__32947,___$1){var self__ = this;
var map__32948 = p__32947;var map__32948__$1 = ((cljs.core.seq_QMARK_.call(null,map__32948))?cljs.core.apply.call(null,cljs.core.hash_map,map__32948):map__32948);var prev_props = map__32948__$1;var map__32949 = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32949__$1 = ((cljs.core.seq_QMARK_.call(null,map__32949))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);var prev_table_data = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.t32944.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t32944.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (_,p__32950,p__32951){var self__ = this;
var map__32952 = p__32950;var map__32952__$1 = ((cljs.core.seq_QMARK_.call(null,map__32952))?cljs.core.apply.call(null,cljs.core.hash_map,map__32952):map__32952);var next_props = map__32952__$1;var map__32953 = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32953__$1 = ((cljs.core.seq_QMARK_.call(null,map__32953))?cljs.core.apply.call(null,cljs.core.hash_map,map__32953):map__32953);var next_table_state = map__32953__$1;var next_table_data = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32954 = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32954__$1 = ((cljs.core.seq_QMARK_.call(null,map__32954))?cljs.core.apply.call(null,cljs.core.hash_map,map__32954):map__32954);var next_controls = map__32954__$1;var next_col_aggs = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32955 = p__32951;var map__32955__$1 = ((cljs.core.seq_QMARK_.call(null,map__32955))?cljs.core.apply.call(null,cljs.core.hash_map,map__32955):map__32955);var fetch_data_fn = cljs.core.get.call(null,map__32955__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32952,map__32952__$1,next_props,map__32953,map__32953__$1,next_table_state,next_table_data,map__32954,map__32954__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32955,map__32955__$1,fetch_data_fn,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32952,map__32952__$1,next_props,map__32953,map__32953__$1,next_table_state,next_table_data,map__32954,map__32954__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32955,map__32955__$1,fetch_data_fn,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (state_32973){var state_val_32974 = (state_32973[(1)]);if((state_val_32974 === (5)))
{var inst_32971 = (state_32973[(2)]);var state_32973__$1 = state_32973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32973__$1,inst_32971);
} else
{if((state_val_32974 === (4)))
{var state_32973__$1 = state_32973;var statearr_32975_32999 = state_32973__$1;(statearr_32975_32999[(2)] = null);
(statearr_32975_32999[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32974 === (3)))
{var inst_32958 = (state_32973[(7)]);var inst_32960 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32961 = ["RANGES-TABLE-DATA",inst_32958];var inst_32962 = (new cljs.core.PersistentVector(null,2,(5),inst_32960,inst_32961,null));var inst_32963 = cljs.core.clj__GT_js.call(null,inst_32962);var inst_32964 = console.log(inst_32963);var inst_32965 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32966 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32967 = (new cljs.core.PersistentVector(null,1,(5),inst_32965,inst_32966,null));var inst_32968 = om.core.update_BANG_.call(null,self__.table_state,inst_32967,inst_32958);var state_32973__$1 = (function (){var statearr_32976 = state_32973;(statearr_32976[(8)] = inst_32964);
return statearr_32976;
})();var statearr_32977_33000 = state_32973__$1;(statearr_32977_33000[(2)] = inst_32968);
(statearr_32977_33000[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32974 === (2)))
{var inst_32958 = (state_32973[(7)]);var inst_32958__$1 = (state_32973[(2)]);var state_32973__$1 = (function (){var statearr_32978 = state_32973;(statearr_32978[(7)] = inst_32958__$1);
return statearr_32978;
})();if(cljs.core.truth_(inst_32958__$1))
{var statearr_32979_33001 = state_32973__$1;(statearr_32979_33001[(1)] = (3));
} else
{var statearr_32980_33002 = state_32973__$1;(statearr_32980_33002[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32974 === (1)))
{var inst_32956 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_32973__$1 = state_32973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32973__$1,(2),inst_32956);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32952,map__32952__$1,next_props,map__32953,map__32953__$1,next_table_state,next_table_data,map__32954,map__32954__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32955,map__32955__$1,fetch_data_fn,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32952,map__32952__$1,next_props,map__32953,map__32953__$1,next_table_state,next_table_data,map__32954,map__32954__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32955,map__32955__$1,fetch_data_fn,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32984 = [null,null,null,null,null,null,null,null,null];(statearr_32984[(0)] = state_machine__9111__auto__);
(statearr_32984[(1)] = (1));
return statearr_32984;
});
var state_machine__9111__auto____1 = (function (state_32973){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32973);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32985){if((e32985 instanceof Object))
{var ex__9114__auto__ = e32985;var statearr_32986_33003 = state_32973;(statearr_32986_33003[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32985;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33004 = state_32973;
state_32973 = G__33004;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32973){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32952,map__32952__$1,next_props,map__32953,map__32953__$1,next_table_state,next_table_data,map__32954,map__32954__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32955,map__32955__$1,fetch_data_fn,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
})();var state__9127__auto__ = (function (){var statearr_32987 = f__9126__auto__.call(null);(statearr_32987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32952,map__32952__$1,next_props,map__32953,map__32953__$1,next_table_state,next_table_data,map__32954,map__32954__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32955,map__32955__$1,fetch_data_fn,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.t32944.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t32944.prototype.om$core$IRender$render$arity$1 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.t32944.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t32944.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32990 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__32990__$1 = (((G__32990 == null))?null:jayq.core.$.call(null,G__32990));var G__32990__$2 = (((G__32990__$1 == null))?null:G__32990__$1.highcharts());var G__32990__$3 = (((G__32990__$2 == null))?null:G__32990__$2.reflow());return G__32990__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
);
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.t32944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (_32946){var self__ = this;
var _32946__$1 = this;return self__.meta32945;
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.t32944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function (_32946,meta32945__$1){var self__ = this;
var _32946__$1 = this;return (new clustermap.components.ranges_chart.t32944(self__.map__32939,self__.index_type,self__.map__32938,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.input_checker32873,self__.map__32940,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.index,self__.G__32875,self__.col_path,self__.filter_spec,self__.output_checker32874,self__.map__32941,self__.table_state,self__.G__32876,self__.controls,self__.col_aggs,self__.map__32942,self__.title,self__.map__32943,self__.rows,self__.output_schema32871,self__.cols,self__.validate__6034__auto__,self__.G__32937,self__.ufv__,self__.input_schema32872,meta32945__$1));
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
clustermap.components.ranges_chart.__GT_t32944 = ((function (map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995){
return (function __GT_t32944(map__32939__$2,index_type__$2,map__32938__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,input_checker32873__$1,map__32940__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,G__32875__$1,col_path__$2,filter_spec__$2,output_checker32874__$1,map__32941__$2,table_state__$2,G__32876__$1,controls__$2,col_aggs__$2,map__32942__$2,title__$2,map__32943__$2,rows__$2,output_schema32871__$1,cols__$2,validate__6034__auto____$1,G__32937__$2,ufv____$1,input_schema32872__$1,meta32945){return (new clustermap.components.ranges_chart.t32944(map__32939__$2,index_type__$2,map__32938__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,input_checker32873__$1,map__32940__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,G__32875__$1,col_path__$2,filter_spec__$2,output_checker32874__$1,map__32941__$2,table_state__$2,G__32876__$1,controls__$2,col_aggs__$2,map__32942__$2,title__$2,map__32943__$2,rows__$2,output_schema32871__$1,cols__$2,validate__6034__auto____$1,G__32937__$2,ufv____$1,input_schema32872__$1,meta32945));
});})(map__32941,map__32941__$1,props__$1,map__32942,map__32942__$1,table_state__$1,table_data__$1,map__32943,map__32943__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32937,map__32938,map__32938__$1,props,map__32939,map__32939__$1,table_state,table_data,map__32940,map__32940__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
}
return (new clustermap.components.ranges_chart.t32944(map__32939__$1,index_type__$1,map__32938__$1,row_aggs__$1,owner__$2,metric_path__$1,props__$1,input_checker32873_32994,map__32940__$1,row_path__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,index__$1,G__32875,col_path__$1,filter_spec__$1,output_checker32874_32995,map__32941__$1,table_state__$1,G__32876,controls__$1,col_aggs__$1,map__32942__$1,title__$1,map__32943__$1,rows__$1,output_schema32871_32992,cols__$1,validate__6034__auto__,G__32937__$1,ufv___32991,input_schema32872_32993,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33005 = output_checker32874_32995.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33005))
{var error__6036__auto___33006 = temp__4126__auto___33005;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33006)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33006,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32871_32992,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32991,output_schema32871_32992,input_schema32872_32993,input_checker32873_32994,output_checker32874_32995))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema32871_32992,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32872_32993], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m32870){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m32870);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m32870){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m32870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
