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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32772){var map__32818 = p__32772;var map__32818__$1 = ((cljs.core.seq_QMARK_.call(null,map__32818))?cljs.core.apply.call(null,cljs.core.hash_map,map__32818):map__32818);var map__32819 = cljs.core.get.call(null,map__32818__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32819__$1 = ((cljs.core.seq_QMARK_.call(null,map__32819))?cljs.core.apply.call(null,cljs.core.hash_map,map__32819):map__32819);var table_data = map__32819__$1;var query = cljs.core.get.call(null,map__32819__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32819__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32820 = cljs.core.get.call(null,map__32818__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32820__$1 = ((cljs.core.seq_QMARK_.call(null,map__32820))?cljs.core.apply.call(null,cljs.core.hash_map,map__32820):map__32820);var controls = map__32820__$1;var title = cljs.core.get.call(null,map__32820__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__32820__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__32820__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32820__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32820__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__32821){var map__32822 = p__32821;var map__32822__$1 = ((cljs.core.seq_QMARK_.call(null,map__32822))?cljs.core.apply.call(null,cljs.core.hash_map,map__32822):map__32822);var x = cljs.core.get.call(null,map__32822__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32822__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32822__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32823(s__32824){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32824__$1 = s__32824;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32824__$1);if(temp__4126__auto__)
{var s__32824__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32824__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32824__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32826 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32825 = (0);while(true){
if((i__32825 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32825);cljs.core.chunk_append.call(null,b__32826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32825,yk,c__4375__auto__,size__4376__auto__,b__32826,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32835(s__32836){return (new cljs.core.LazySeq(null,((function (i__32825,yk,c__4375__auto__,size__4376__auto__,b__32826,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32836__$1 = s__32836;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32836__$1);if(temp__4126__auto____$1)
{var s__32836__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32836__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32836__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32838 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32837 = (0);while(true){
if((i__32837 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32837);cljs.core.chunk_append.call(null,b__32838,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32863 = (i__32837 + (1));
i__32837 = G__32863;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32838),iter__32835.call(null,cljs.core.chunk_rest.call(null,s__32836__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32838),null);
}
} else
{var xk = cljs.core.first.call(null,s__32836__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32835.call(null,cljs.core.rest.call(null,s__32836__$2)));
}
} else
{return null;
}
break;
}
});})(i__32825,yk,c__4375__auto__,size__4376__auto__,b__32826,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__32825,yk,c__4375__auto__,size__4376__auto__,b__32826,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__32864 = (i__32825 + (1));
i__32825 = G__32864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32826),iter__32823.call(null,cljs.core.chunk_rest.call(null,s__32824__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32826),null);
}
} else
{var yk = cljs.core.first.call(null,s__32824__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32839(s__32840){return (new cljs.core.LazySeq(null,((function (yk,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32840__$1 = s__32840;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32840__$1);if(temp__4126__auto____$1)
{var s__32840__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32840__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32840__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32842 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32841 = (0);while(true){
if((i__32841 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__32841);cljs.core.chunk_append.call(null,b__32842,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__32865 = (i__32841 + (1));
i__32841 = G__32865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32842),iter__32839.call(null,cljs.core.chunk_rest.call(null,s__32840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32842),null);
}
} else
{var xk = cljs.core.first.call(null,s__32840__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32839.call(null,cljs.core.rest.call(null,s__32840__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32824__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32823.call(null,cljs.core.rest.call(null,s__32824__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32843(s__32844){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32844__$1 = s__32844;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32844__$1);if(temp__4126__auto__)
{var s__32844__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32844__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32844__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32846 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32845 = (0);while(true){
if((i__32845 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__32845);cljs.core.chunk_append.call(null,b__32846,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__32866 = (i__32845 + (1));
i__32845 = G__32866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32846),iter__32843.call(null,cljs.core.chunk_rest.call(null,s__32844__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32846),null);
}
} else
{var xa = cljs.core.first.call(null,s__32844__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__32843.call(null,cljs.core.rest.call(null,s__32844__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32847(s__32848){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32848__$1 = s__32848;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32848__$1);if(temp__4126__auto__)
{var s__32848__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32848__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32848__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32850 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32849 = (0);while(true){
if((i__32849 < size__4376__auto__))
{var vec__32853 = cljs.core._nth.call(null,c__4375__auto__,i__32849);var ya = cljs.core.nth.call(null,vec__32853,(0),null);var i = cljs.core.nth.call(null,vec__32853,(1),null);cljs.core.chunk_append.call(null,b__32850,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__32867 = (i__32849 + (1));
i__32849 = G__32867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32850),iter__32847.call(null,cljs.core.chunk_rest.call(null,s__32848__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32850),null);
}
} else
{var vec__32854 = cljs.core.first.call(null,s__32848__$2);var ya = cljs.core.nth.call(null,vec__32854,(0),null);var i = cljs.core.nth.call(null,vec__32854,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__32847.call(null,cljs.core.rest.call(null,s__32848__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__32855(s__32856){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__32856__$1 = s__32856;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32856__$1);if(temp__4126__auto__)
{var s__32856__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32856__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32856__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32858 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32857 = (0);while(true){
if((i__32857 < size__4376__auto__))
{var vec__32861 = cljs.core._nth.call(null,c__4375__auto__,i__32857);var ya = cljs.core.nth.call(null,vec__32861,(0),null);var i = cljs.core.nth.call(null,vec__32861,(1),null);cljs.core.chunk_append.call(null,b__32858,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__32868 = (i__32857 + (1));
i__32857 = G__32868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32858),iter__32855.call(null,cljs.core.chunk_rest.call(null,s__32856__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32858),null);
}
} else
{var vec__32862 = cljs.core.first.call(null,s__32856__$2);var ya = cljs.core.nth.call(null,vec__32862,(0),null);var i = cljs.core.nth.call(null,vec__32862,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__32855.call(null,cljs.core.rest.call(null,s__32856__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32818,map__32818__$1,map__32819,map__32819__$1,table_data,query,results,map__32820,map__32820__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___32990 = schema.utils.use_fn_validation;var output_schema32870_32991 = schema.core.Any;var input_schema32871_32992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker32872_32993 = schema.core.checker.call(null,input_schema32871_32992);var output_checker32873_32994 = schema.core.checker.call(null,output_schema32870_32991);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function ranges_chart_component(G__32874,G__32875){var validate__6034__auto__ = ufv___32990.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32874,G__32875], null);var temp__4126__auto___32996 = input_checker32872_32993.call(null,args__6035__auto___32995);if(cljs.core.truth_(temp__4126__auto___32996))
{var error__6036__auto___32997 = temp__4126__auto___32996;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___32997)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32997,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32995,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32871_32992,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32936 = G__32874;var map__32937 = G__32936;var map__32937__$1 = ((cljs.core.seq_QMARK_.call(null,map__32937))?cljs.core.apply.call(null,cljs.core.hash_map,map__32937):map__32937);var props = map__32937__$1;var map__32938 = cljs.core.get.call(null,map__32937__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32938__$1 = ((cljs.core.seq_QMARK_.call(null,map__32938))?cljs.core.apply.call(null,cljs.core.hash_map,map__32938):map__32938);var table_state = map__32938__$1;var table_data = cljs.core.get.call(null,map__32938__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32939 = cljs.core.get.call(null,map__32938__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32939__$1 = ((cljs.core.seq_QMARK_.call(null,map__32939))?cljs.core.apply.call(null,cljs.core.hash_map,map__32939):map__32939);var controls = map__32939__$1;var index_type = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__32937__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32875;var G__32936__$1 = G__32936;var owner__$1 = owner;while(true){
var map__32940 = G__32936__$1;var map__32940__$1 = ((cljs.core.seq_QMARK_.call(null,map__32940))?cljs.core.apply.call(null,cljs.core.hash_map,map__32940):map__32940);var props__$1 = map__32940__$1;var map__32941 = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32941__$1 = ((cljs.core.seq_QMARK_.call(null,map__32941))?cljs.core.apply.call(null,cljs.core.hash_map,map__32941):map__32941);var table_state__$1 = map__32941__$1;var table_data__$1 = cljs.core.get.call(null,map__32941__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32942 = cljs.core.get.call(null,map__32941__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32942__$1 = ((cljs.core.seq_QMARK_.call(null,map__32942))?cljs.core.apply.call(null,cljs.core.hash_map,map__32942):map__32942);var controls__$1 = map__32942__$1;var index_type__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__32940__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t32943 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t32943 = (function (map__32939,index_type,map__32938,G__32874,row_aggs,owner,metric_path,props,output_checker32873,map__32940,row_path,table_data,input_schema32871,ranges_chart_component,G__32936,metric_aggs,index,G__32875,col_path,filter_spec,map__32941,table_state,controls,col_aggs,map__32942,title,rows,cols,validate__6034__auto__,map__32937,ufv__,input_checker32872,output_schema32870,meta32944){
this.map__32939 = map__32939;
this.index_type = index_type;
this.map__32938 = map__32938;
this.G__32874 = G__32874;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.output_checker32873 = output_checker32873;
this.map__32940 = map__32940;
this.row_path = row_path;
this.table_data = table_data;
this.input_schema32871 = input_schema32871;
this.ranges_chart_component = ranges_chart_component;
this.G__32936 = G__32936;
this.metric_aggs = metric_aggs;
this.index = index;
this.G__32875 = G__32875;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__32941 = map__32941;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.map__32942 = map__32942;
this.title = title;
this.rows = rows;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__32937 = map__32937;
this.ufv__ = ufv__;
this.input_checker32872 = input_checker32872;
this.output_schema32870 = output_schema32870;
this.meta32944 = meta32944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t32943.cljs$lang$type = true;
clustermap.components.ranges_chart.t32943.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t32943";
clustermap.components.ranges_chart.t32943.cljs$lang$ctorPrWriter = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t32943");
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.t32943.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t32943.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.t32943.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t32943.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (_,p__32946,___$1){var self__ = this;
var map__32947 = p__32946;var map__32947__$1 = ((cljs.core.seq_QMARK_.call(null,map__32947))?cljs.core.apply.call(null,cljs.core.hash_map,map__32947):map__32947);var prev_props = map__32947__$1;var map__32948 = cljs.core.get.call(null,map__32947__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32948__$1 = ((cljs.core.seq_QMARK_.call(null,map__32948))?cljs.core.apply.call(null,cljs.core.hash_map,map__32948):map__32948);var prev_table_data = cljs.core.get.call(null,map__32948__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.t32943.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t32943.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (_,p__32949,p__32950){var self__ = this;
var map__32951 = p__32949;var map__32951__$1 = ((cljs.core.seq_QMARK_.call(null,map__32951))?cljs.core.apply.call(null,cljs.core.hash_map,map__32951):map__32951);var next_props = map__32951__$1;var map__32952 = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32952__$1 = ((cljs.core.seq_QMARK_.call(null,map__32952))?cljs.core.apply.call(null,cljs.core.hash_map,map__32952):map__32952);var next_table_state = map__32952__$1;var next_table_data = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32953 = cljs.core.get.call(null,map__32952__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32953__$1 = ((cljs.core.seq_QMARK_.call(null,map__32953))?cljs.core.apply.call(null,cljs.core.hash_map,map__32953):map__32953);var next_controls = map__32953__$1;var next_col_aggs = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32954 = p__32950;var map__32954__$1 = ((cljs.core.seq_QMARK_.call(null,map__32954))?cljs.core.apply.call(null,cljs.core.hash_map,map__32954):map__32954);var fetch_data_fn = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32951,map__32951__$1,next_props,map__32952,map__32952__$1,next_table_state,next_table_data,map__32953,map__32953__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32954,map__32954__$1,fetch_data_fn,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32951,map__32951__$1,next_props,map__32952,map__32952__$1,next_table_state,next_table_data,map__32953,map__32953__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32954,map__32954__$1,fetch_data_fn,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (state_32972){var state_val_32973 = (state_32972[(1)]);if((state_val_32973 === (5)))
{var inst_32970 = (state_32972[(2)]);var state_32972__$1 = state_32972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32972__$1,inst_32970);
} else
{if((state_val_32973 === (4)))
{var state_32972__$1 = state_32972;var statearr_32974_32998 = state_32972__$1;(statearr_32974_32998[(2)] = null);
(statearr_32974_32998[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32973 === (3)))
{var inst_32957 = (state_32972[(7)]);var inst_32959 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32960 = ["RANGES-TABLE-DATA",inst_32957];var inst_32961 = (new cljs.core.PersistentVector(null,2,(5),inst_32959,inst_32960,null));var inst_32962 = cljs.core.clj__GT_js.call(null,inst_32961);var inst_32963 = console.log(inst_32962);var inst_32964 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32965 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32966 = (new cljs.core.PersistentVector(null,1,(5),inst_32964,inst_32965,null));var inst_32967 = om.core.update_BANG_.call(null,self__.table_state,inst_32966,inst_32957);var state_32972__$1 = (function (){var statearr_32975 = state_32972;(statearr_32975[(8)] = inst_32963);
return statearr_32975;
})();var statearr_32976_32999 = state_32972__$1;(statearr_32976_32999[(2)] = inst_32967);
(statearr_32976_32999[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32973 === (2)))
{var inst_32957 = (state_32972[(7)]);var inst_32957__$1 = (state_32972[(2)]);var state_32972__$1 = (function (){var statearr_32977 = state_32972;(statearr_32977[(7)] = inst_32957__$1);
return statearr_32977;
})();if(cljs.core.truth_(inst_32957__$1))
{var statearr_32978_33000 = state_32972__$1;(statearr_32978_33000[(1)] = (3));
} else
{var statearr_32979_33001 = state_32972__$1;(statearr_32979_33001[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32973 === (1)))
{var inst_32955 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_32972__$1 = state_32972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32972__$1,(2),inst_32955);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32951,map__32951__$1,next_props,map__32952,map__32952__$1,next_table_state,next_table_data,map__32953,map__32953__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32954,map__32954__$1,fetch_data_fn,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32951,map__32951__$1,next_props,map__32952,map__32952__$1,next_table_state,next_table_data,map__32953,map__32953__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32954,map__32954__$1,fetch_data_fn,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32983 = [null,null,null,null,null,null,null,null,null];(statearr_32983[(0)] = state_machine__9111__auto__);
(statearr_32983[(1)] = (1));
return statearr_32983;
});
var state_machine__9111__auto____1 = (function (state_32972){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32972);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32984){if((e32984 instanceof Object))
{var ex__9114__auto__ = e32984;var statearr_32985_33002 = state_32972;(statearr_32985_33002[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32984;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33003 = state_32972;
state_32972 = G__33003;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32972){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32951,map__32951__$1,next_props,map__32952,map__32952__$1,next_table_state,next_table_data,map__32953,map__32953__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32954,map__32954__$1,fetch_data_fn,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
})();var state__9127__auto__ = (function (){var statearr_32986 = f__9126__auto__.call(null);(statearr_32986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32951,map__32951__$1,next_props,map__32952,map__32952__$1,next_table_state,next_table_data,map__32953,map__32953__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32954,map__32954__$1,fetch_data_fn,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.t32943.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t32943.prototype.om$core$IRender$render$arity$1 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.t32943.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t32943.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32989 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__32989__$1 = (((G__32989 == null))?null:jayq.core.$.call(null,G__32989));var G__32989__$2 = (((G__32989__$1 == null))?null:G__32989__$1.highcharts());var G__32989__$3 = (((G__32989__$2 == null))?null:G__32989__$2.reflow());return G__32989__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
);
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.t32943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (_32945){var self__ = this;
var _32945__$1 = this;return self__.meta32944;
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.t32943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function (_32945,meta32944__$1){var self__ = this;
var _32945__$1 = this;return (new clustermap.components.ranges_chart.t32943(self__.map__32939,self__.index_type,self__.map__32938,self__.G__32874,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.output_checker32873,self__.map__32940,self__.row_path,self__.table_data,self__.input_schema32871,self__.ranges_chart_component,self__.G__32936,self__.metric_aggs,self__.index,self__.G__32875,self__.col_path,self__.filter_spec,self__.map__32941,self__.table_state,self__.controls,self__.col_aggs,self__.map__32942,self__.title,self__.rows,self__.cols,self__.validate__6034__auto__,self__.map__32937,self__.ufv__,self__.input_checker32872,self__.output_schema32870,meta32944__$1));
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
clustermap.components.ranges_chart.__GT_t32943 = ((function (map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994){
return (function __GT_t32943(map__32939__$2,index_type__$2,map__32938__$2,G__32874__$1,row_aggs__$2,owner__$3,metric_path__$2,props__$2,output_checker32873__$1,map__32940__$2,row_path__$2,table_data__$2,input_schema32871__$1,ranges_chart_component__$1,G__32936__$2,metric_aggs__$2,index__$2,G__32875__$1,col_path__$2,filter_spec__$2,map__32941__$2,table_state__$2,controls__$2,col_aggs__$2,map__32942__$2,title__$2,rows__$2,cols__$2,validate__6034__auto____$1,map__32937__$2,ufv____$1,input_checker32872__$1,output_schema32870__$1,meta32944){return (new clustermap.components.ranges_chart.t32943(map__32939__$2,index_type__$2,map__32938__$2,G__32874__$1,row_aggs__$2,owner__$3,metric_path__$2,props__$2,output_checker32873__$1,map__32940__$2,row_path__$2,table_data__$2,input_schema32871__$1,ranges_chart_component__$1,G__32936__$2,metric_aggs__$2,index__$2,G__32875__$1,col_path__$2,filter_spec__$2,map__32941__$2,table_state__$2,controls__$2,col_aggs__$2,map__32942__$2,title__$2,rows__$2,cols__$2,validate__6034__auto____$1,map__32937__$2,ufv____$1,input_checker32872__$1,output_schema32870__$1,meta32944));
});})(map__32940,map__32940__$1,props__$1,map__32941,map__32941__$1,table_state__$1,table_data__$1,map__32942,map__32942__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__32936,map__32937,map__32937__$1,props,map__32938,map__32938__$1,table_state,table_data,map__32939,map__32939__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
}
return (new clustermap.components.ranges_chart.t32943(map__32939__$1,index_type__$1,map__32938__$1,G__32874,row_aggs__$1,owner__$2,metric_path__$1,props__$1,output_checker32873_32994,map__32940__$1,row_path__$1,table_data__$1,input_schema32871_32992,ranges_chart_component,G__32936__$1,metric_aggs__$1,index__$1,G__32875,col_path__$1,filter_spec__$1,map__32941__$1,table_state__$1,controls__$1,col_aggs__$1,map__32942__$1,title__$1,rows__$1,cols__$1,validate__6034__auto__,map__32937__$1,ufv___32990,input_checker32872_32993,output_schema32870_32991,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33004 = output_checker32873_32994.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33004))
{var error__6036__auto___33005 = temp__4126__auto___33004;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33005)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33005,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32870_32991,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32990,output_schema32870_32991,input_schema32871_32992,input_checker32872_32993,output_checker32873_32994))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema32870_32991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32871_32992], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m32869){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m32869);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m32869){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m32869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
