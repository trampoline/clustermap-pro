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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__31507){var map__31553 = p__31507;var map__31553__$1 = ((cljs.core.seq_QMARK_.call(null,map__31553))?cljs.core.apply.call(null,cljs.core.hash_map,map__31553):map__31553);var map__31554 = cljs.core.get.call(null,map__31553__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__31554__$1 = ((cljs.core.seq_QMARK_.call(null,map__31554))?cljs.core.apply.call(null,cljs.core.hash_map,map__31554):map__31554);var table_data = map__31554__$1;var query = cljs.core.get.call(null,map__31554__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__31554__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__31555 = cljs.core.get.call(null,map__31553__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31555__$1 = ((cljs.core.seq_QMARK_.call(null,map__31555))?cljs.core.apply.call(null,cljs.core.hash_map,map__31555):map__31555);var controls = map__31555__$1;var title = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__31556){var map__31557 = p__31556;var map__31557__$1 = ((cljs.core.seq_QMARK_.call(null,map__31557))?cljs.core.apply.call(null,cljs.core.hash_map,map__31557):map__31557);var x = cljs.core.get.call(null,map__31557__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__31557__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__31557__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = ((function (y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__31558(s__31559){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__31559__$1 = s__31559;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31559__$1);if(temp__4126__auto__)
{var s__31559__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31559__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31559__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31561 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31560 = (0);while(true){
if((i__31560 < size__12289__auto__))
{var yk = cljs.core._nth.call(null,c__12288__auto__,i__31560);cljs.core.chunk_append.call(null,b__31561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__12290__auto__ = ((function (i__31560,yk,c__12288__auto__,size__12289__auto__,b__31561,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__31570(s__31571){return (new cljs.core.LazySeq(null,((function (i__31560,yk,c__12288__auto__,size__12289__auto__,b__31561,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__31571__$1 = s__31571;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31571__$1);if(temp__4126__auto____$1)
{var s__31571__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31571__$2))
{var c__12288__auto____$1 = cljs.core.chunk_first.call(null,s__31571__$2);var size__12289__auto____$1 = cljs.core.count.call(null,c__12288__auto____$1);var b__31573 = cljs.core.chunk_buffer.call(null,size__12289__auto____$1);if((function (){var i__31572 = (0);while(true){
if((i__31572 < size__12289__auto____$1))
{var xk = cljs.core._nth.call(null,c__12288__auto____$1,i__31572);cljs.core.chunk_append.call(null,b__31573,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__31598 = (i__31572 + (1));
i__31572 = G__31598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31573),iter__31570.call(null,cljs.core.chunk_rest.call(null,s__31571__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31573),null);
}
} else
{var xk = cljs.core.first.call(null,s__31571__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__31570.call(null,cljs.core.rest.call(null,s__31571__$2)));
}
} else
{return null;
}
break;
}
});})(i__31560,yk,c__12288__auto__,size__12289__auto__,b__31561,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__31560,yk,c__12288__auto__,size__12289__auto__,b__31561,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__12290__auto__.call(null,x_keys);
})())], null));
{
var G__31599 = (i__31560 + (1));
i__31560 = G__31599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31561),iter__31558.call(null,cljs.core.chunk_rest.call(null,s__31559__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31561),null);
}
} else
{var yk = cljs.core.first.call(null,s__31559__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__12290__auto__ = ((function (yk,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__31574(s__31575){return (new cljs.core.LazySeq(null,((function (yk,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__31575__$1 = s__31575;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31575__$1);if(temp__4126__auto____$1)
{var s__31575__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31575__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31575__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31577 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31576 = (0);while(true){
if((i__31576 < size__12289__auto__))
{var xk = cljs.core._nth.call(null,c__12288__auto__,i__31576);cljs.core.chunk_append.call(null,b__31577,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__31600 = (i__31576 + (1));
i__31576 = G__31600;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31577),iter__31574.call(null,cljs.core.chunk_rest.call(null,s__31575__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31577),null);
}
} else
{var xk = cljs.core.first.call(null,s__31575__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__31574.call(null,cljs.core.rest.call(null,s__31575__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__31559__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__12290__auto__.call(null,x_keys);
})())], null),iter__31558.call(null,cljs.core.rest.call(null,s__31559__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__12290__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__12290__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__31578(s__31579){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__31579__$1 = s__31579;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31579__$1);if(temp__4126__auto__)
{var s__31579__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31579__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31579__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31581 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31580 = (0);while(true){
if((i__31580 < size__12289__auto__))
{var xa = cljs.core._nth.call(null,c__12288__auto__,i__31580);cljs.core.chunk_append.call(null,b__31581,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__31601 = (i__31580 + (1));
i__31580 = G__31601;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31581),iter__31578.call(null,cljs.core.chunk_rest.call(null,s__31579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31581),null);
}
} else
{var xa = cljs.core.first.call(null,s__31579__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__31578.call(null,cljs.core.rest.call(null,s__31579__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__12290__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__12290__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__31582(s__31583){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__31583__$1 = s__31583;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31583__$1);if(temp__4126__auto__)
{var s__31583__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31583__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31583__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31585 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31584 = (0);while(true){
if((i__31584 < size__12289__auto__))
{var vec__31588 = cljs.core._nth.call(null,c__12288__auto__,i__31584);var ya = cljs.core.nth.call(null,vec__31588,(0),null);var i = cljs.core.nth.call(null,vec__31588,(1),null);cljs.core.chunk_append.call(null,b__31585,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__31602 = (i__31584 + (1));
i__31584 = G__31602;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31585),iter__31582.call(null,cljs.core.chunk_rest.call(null,s__31583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31585),null);
}
} else
{var vec__31589 = cljs.core.first.call(null,s__31583__$2);var ya = cljs.core.nth.call(null,vec__31589,(0),null);var i = cljs.core.nth.call(null,vec__31589,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__31582.call(null,cljs.core.rest.call(null,s__31583__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__12290__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__31590(s__31591){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__31591__$1 = s__31591;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31591__$1);if(temp__4126__auto__)
{var s__31591__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31591__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31591__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31593 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31592 = (0);while(true){
if((i__31592 < size__12289__auto__))
{var vec__31596 = cljs.core._nth.call(null,c__12288__auto__,i__31592);var ya = cljs.core.nth.call(null,vec__31596,(0),null);var i = cljs.core.nth.call(null,vec__31596,(1),null);cljs.core.chunk_append.call(null,b__31593,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__31603 = (i__31592 + (1));
i__31592 = G__31603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31593),iter__31590.call(null,cljs.core.chunk_rest.call(null,s__31591__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31593),null);
}
} else
{var vec__31597 = cljs.core.first.call(null,s__31591__$2);var ya = cljs.core.nth.call(null,vec__31597,(0),null);var i = cljs.core.nth.call(null,vec__31597,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__31590.call(null,cljs.core.rest.call(null,s__31591__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__31553,map__31553__$1,map__31554,map__31554__$1,table_data,query,results,map__31555,map__31555__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___31725 = schema.utils.use_fn_validation;var output_schema31605_31726 = schema.core.Any;var input_schema31606_31727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker31607_31728 = schema.core.checker.call(null,input_schema31606_31727);var output_checker31608_31729 = schema.core.checker.call(null,output_schema31605_31726);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function ranges_chart_component(G__31609,G__31610){var validate__13947__auto__ = ufv___31725.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___31730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31609,G__31610], null);var temp__4126__auto___31731 = input_checker31607_31728.call(null,args__13948__auto___31730);if(cljs.core.truth_(temp__4126__auto___31731))
{var error__13949__auto___31732 = temp__4126__auto___31731;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__13949__auto___31732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___31732,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___31730,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31606_31727,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var G__31671 = G__31609;var map__31672 = G__31671;var map__31672__$1 = ((cljs.core.seq_QMARK_.call(null,map__31672))?cljs.core.apply.call(null,cljs.core.hash_map,map__31672):map__31672);var props = map__31672__$1;var map__31673 = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__31673__$1 = ((cljs.core.seq_QMARK_.call(null,map__31673))?cljs.core.apply.call(null,cljs.core.hash_map,map__31673):map__31673);var table_state = map__31673__$1;var table_data = cljs.core.get.call(null,map__31673__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__31674 = cljs.core.get.call(null,map__31673__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31674__$1 = ((cljs.core.seq_QMARK_.call(null,map__31674))?cljs.core.apply.call(null,cljs.core.hash_map,map__31674):map__31674);var controls = map__31674__$1;var index_type = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__31674__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__31610;var G__31671__$1 = G__31671;var owner__$1 = owner;while(true){
var map__31675 = G__31671__$1;var map__31675__$1 = ((cljs.core.seq_QMARK_.call(null,map__31675))?cljs.core.apply.call(null,cljs.core.hash_map,map__31675):map__31675);var props__$1 = map__31675__$1;var map__31676 = cljs.core.get.call(null,map__31675__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__31676__$1 = ((cljs.core.seq_QMARK_.call(null,map__31676))?cljs.core.apply.call(null,cljs.core.hash_map,map__31676):map__31676);var table_state__$1 = map__31676__$1;var table_data__$1 = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__31677 = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31677__$1 = ((cljs.core.seq_QMARK_.call(null,map__31677))?cljs.core.apply.call(null,cljs.core.hash_map,map__31677):map__31677);var controls__$1 = map__31677__$1;var index_type__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__31677__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__31675__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t31678 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t31678 = (function (map__31672,index_type,row_aggs,owner,metric_path,output_schema31605,map__31673,props,map__31675,row_path,table_data,ranges_chart_component,metric_aggs,index,map__31676,col_path,filter_spec,input_schema31606,table_state,controls,col_aggs,title,G__31610,output_checker31608,map__31677,rows,cols,validate__13947__auto__,input_checker31607,G__31671,G__31609,ufv__,map__31674,meta31679){
this.map__31672 = map__31672;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.output_schema31605 = output_schema31605;
this.map__31673 = map__31673;
this.props = props;
this.map__31675 = map__31675;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.index = index;
this.map__31676 = map__31676;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.input_schema31606 = input_schema31606;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.G__31610 = G__31610;
this.output_checker31608 = output_checker31608;
this.map__31677 = map__31677;
this.rows = rows;
this.cols = cols;
this.validate__13947__auto__ = validate__13947__auto__;
this.input_checker31607 = input_checker31607;
this.G__31671 = G__31671;
this.G__31609 = G__31609;
this.ufv__ = ufv__;
this.map__31674 = map__31674;
this.meta31679 = meta31679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t31678.cljs$lang$type = true;
clustermap.components.ranges_chart.t31678.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t31678";
clustermap.components.ranges_chart.t31678.cljs$lang$ctorPrWriter = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.ranges-chart/t31678");
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.t31678.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t31678.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.t31678.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t31678.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (_,p__31681,___$1){var self__ = this;
var map__31682 = p__31681;var map__31682__$1 = ((cljs.core.seq_QMARK_.call(null,map__31682))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);var prev_props = map__31682__$1;var map__31683 = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__31683__$1 = ((cljs.core.seq_QMARK_.call(null,map__31683))?cljs.core.apply.call(null,cljs.core.hash_map,map__31683):map__31683);var prev_table_data = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.t31678.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t31678.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (_,p__31684,p__31685){var self__ = this;
var map__31686 = p__31684;var map__31686__$1 = ((cljs.core.seq_QMARK_.call(null,map__31686))?cljs.core.apply.call(null,cljs.core.hash_map,map__31686):map__31686);var next_props = map__31686__$1;var map__31687 = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__31687__$1 = ((cljs.core.seq_QMARK_.call(null,map__31687))?cljs.core.apply.call(null,cljs.core.hash_map,map__31687):map__31687);var next_table_state = map__31687__$1;var next_table_data = cljs.core.get.call(null,map__31687__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__31688 = cljs.core.get.call(null,map__31687__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31688__$1 = ((cljs.core.seq_QMARK_.call(null,map__31688))?cljs.core.apply.call(null,cljs.core.hash_map,map__31688):map__31688);var next_controls = map__31688__$1;var next_col_aggs = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__31688__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__31689 = p__31685;var map__31689__$1 = ((cljs.core.seq_QMARK_.call(null,map__31689))?cljs.core.apply.call(null,cljs.core.hash_map,map__31689):map__31689);var fetch_data_fn = cljs.core.get.call(null,map__31689__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__31686,map__31686__$1,next_props,map__31687,map__31687__$1,next_table_state,next_table_data,map__31688,map__31688__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__31689,map__31689__$1,fetch_data_fn,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__31686,map__31686__$1,next_props,map__31687,map__31687__$1,next_table_state,next_table_data,map__31688,map__31688__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__31689,map__31689__$1,fetch_data_fn,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (state_31707){var state_val_31708 = (state_31707[(1)]);if((state_val_31708 === (5)))
{var inst_31705 = (state_31707[(2)]);var state_31707__$1 = state_31707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31707__$1,inst_31705);
} else
{if((state_val_31708 === (4)))
{var state_31707__$1 = state_31707;var statearr_31709_31733 = state_31707__$1;(statearr_31709_31733[(2)] = null);
(statearr_31709_31733[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31708 === (3)))
{var inst_31692 = (state_31707[(7)]);var inst_31694 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31695 = ["RANGES-TABLE-DATA",inst_31692];var inst_31696 = (new cljs.core.PersistentVector(null,2,(5),inst_31694,inst_31695,null));var inst_31697 = cljs.core.clj__GT_js.call(null,inst_31696);var inst_31698 = console.log(inst_31697);var inst_31699 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31700 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_31701 = (new cljs.core.PersistentVector(null,1,(5),inst_31699,inst_31700,null));var inst_31702 = om.core.update_BANG_.call(null,self__.table_state,inst_31701,inst_31692);var state_31707__$1 = (function (){var statearr_31710 = state_31707;(statearr_31710[(8)] = inst_31698);
return statearr_31710;
})();var statearr_31711_31734 = state_31707__$1;(statearr_31711_31734[(2)] = inst_31702);
(statearr_31711_31734[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31708 === (2)))
{var inst_31692 = (state_31707[(7)]);var inst_31692__$1 = (state_31707[(2)]);var state_31707__$1 = (function (){var statearr_31712 = state_31707;(statearr_31712[(7)] = inst_31692__$1);
return statearr_31712;
})();if(cljs.core.truth_(inst_31692__$1))
{var statearr_31713_31735 = state_31707__$1;(statearr_31713_31735[(1)] = (3));
} else
{var statearr_31714_31736 = state_31707__$1;(statearr_31714_31736[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31708 === (1)))
{var inst_31690 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_31707__$1 = state_31707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31707__$1,(2),inst_31690);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__31686,map__31686__$1,next_props,map__31687,map__31687__$1,next_table_state,next_table_data,map__31688,map__31688__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__31689,map__31689__$1,fetch_data_fn,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__31686,map__31686__$1,next_props,map__31687,map__31687__$1,next_table_state,next_table_data,map__31688,map__31688__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__31689,map__31689__$1,fetch_data_fn,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_31718 = [null,null,null,null,null,null,null,null,null];(statearr_31718[(0)] = state_machine__16719__auto__);
(statearr_31718[(1)] = (1));
return statearr_31718;
});
var state_machine__16719__auto____1 = (function (state_31707){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_31707);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e31719){if((e31719 instanceof Object))
{var ex__16722__auto__ = e31719;var statearr_31720_31737 = state_31707;(statearr_31720_31737[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31719;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31738 = state_31707;
state_31707 = G__31738;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_31707){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_31707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__31686,map__31686__$1,next_props,map__31687,map__31687__$1,next_table_state,next_table_data,map__31688,map__31688__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__31689,map__31689__$1,fetch_data_fn,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
})();var state__16735__auto__ = (function (){var statearr_31721 = f__16734__auto__.call(null);(statearr_31721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_31721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__31686,map__31686__$1,next_props,map__31687,map__31687__$1,next_table_state,next_table_data,map__31688,map__31688__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__31689,map__31689__$1,fetch_data_fn,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.t31678.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t31678.prototype.om$core$IRender$render$arity$1 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.t31678.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t31678.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__31724 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__31724__$1 = (((G__31724 == null))?null:jayq.core.$.call(null,G__31724));var G__31724__$2 = (((G__31724__$1 == null))?null:G__31724__$1.highcharts());var G__31724__$3 = (((G__31724__$2 == null))?null:G__31724__$2.reflow());return G__31724__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
);
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.t31678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (_31680){var self__ = this;
var _31680__$1 = this;return self__.meta31679;
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.t31678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function (_31680,meta31679__$1){var self__ = this;
var _31680__$1 = this;return (new clustermap.components.ranges_chart.t31678(self__.map__31672,self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.output_schema31605,self__.map__31673,self__.props,self__.map__31675,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.index,self__.map__31676,self__.col_path,self__.filter_spec,self__.input_schema31606,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.G__31610,self__.output_checker31608,self__.map__31677,self__.rows,self__.cols,self__.validate__13947__auto__,self__.input_checker31607,self__.G__31671,self__.G__31609,self__.ufv__,self__.map__31674,meta31679__$1));
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
clustermap.components.ranges_chart.__GT_t31678 = ((function (map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729){
return (function __GT_t31678(map__31672__$2,index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,output_schema31605__$1,map__31673__$2,props__$2,map__31675__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,map__31676__$2,col_path__$2,filter_spec__$2,input_schema31606__$1,table_state__$2,controls__$2,col_aggs__$2,title__$2,G__31610__$1,output_checker31608__$1,map__31677__$2,rows__$2,cols__$2,validate__13947__auto____$1,input_checker31607__$1,G__31671__$2,G__31609__$1,ufv____$1,map__31674__$2,meta31679){return (new clustermap.components.ranges_chart.t31678(map__31672__$2,index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,output_schema31605__$1,map__31673__$2,props__$2,map__31675__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,map__31676__$2,col_path__$2,filter_spec__$2,input_schema31606__$1,table_state__$2,controls__$2,col_aggs__$2,title__$2,G__31610__$1,output_checker31608__$1,map__31677__$2,rows__$2,cols__$2,validate__13947__auto____$1,input_checker31607__$1,G__31671__$2,G__31609__$1,ufv____$1,map__31674__$2,meta31679));
});})(map__31675,map__31675__$1,props__$1,map__31676,map__31676__$1,table_state__$1,table_data__$1,map__31677,map__31677__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__31671,map__31672,map__31672__$1,props,map__31673,map__31673__$1,table_state,table_data,map__31674,map__31674__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__13947__auto__,ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
}
return (new clustermap.components.ranges_chart.t31678(map__31672__$1,index_type__$1,row_aggs__$1,owner__$2,metric_path__$1,output_schema31605_31726,map__31673__$1,props__$1,map__31675__$1,row_path__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,index__$1,map__31676__$1,col_path__$1,filter_spec__$1,input_schema31606_31727,table_state__$1,controls__$1,col_aggs__$1,title__$1,G__31610,output_checker31608_31729,map__31677__$1,rows__$1,cols__$1,validate__13947__auto__,input_checker31607_31728,G__31671__$1,G__31609,ufv___31725,map__31674__$1,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___31739 = output_checker31608_31729.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___31739))
{var error__13949__auto___31740 = temp__4126__auto___31739;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__13949__auto___31740)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___31740,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31605_31726,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___31725,output_schema31605_31726,input_schema31606_31727,input_checker31607_31728,output_checker31608_31729))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema31605_31726,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31606_31727], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__15763__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__15763__auto__,m31604){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__15763__auto__,m31604);
});
__GT_ranges_chart_component = function(cursor__15763__auto__,m31604){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__15763__auto__,m31604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;

//# sourceMappingURL=ranges_chart.js.map