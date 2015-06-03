// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_table');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.ranges_table.render_table = (function render_table(p__27521,owner,opts){var map__27640 = p__27521;var map__27640__$1 = ((cljs.core.seq_QMARK_.call(null,map__27640))?cljs.core.apply.call(null,cljs.core.hash_map,map__27640):map__27640);var map__27641 = cljs.core.get.call(null,map__27640__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27641__$1 = ((cljs.core.seq_QMARK_.call(null,map__27641))?cljs.core.apply.call(null,cljs.core.hash_map,map__27641):map__27641);var table_data = map__27641__$1;var query = cljs.core.get.call(null,map__27641__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27641__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27642 = cljs.core.get.call(null,map__27640__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27642__$1 = ((cljs.core.seq_QMARK_.call(null,map__27642))?cljs.core.apply.call(null,cljs.core.hash_map,map__27642):map__27642);var controls = map__27642__$1;var title = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27642__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27643 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27643))?sablono.interpreter.attributes.call(null,attrs27643):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27643))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27644 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27644))?sablono.interpreter.attributes.call(null,attrs27644):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27644))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27644)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function iter__27646(s__27647){return (new cljs.core.LazySeq(null,((function (attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27647__$1 = s__27647;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27647__$1);if(temp__4126__auto__)
{var s__27647__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27647__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27647__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27649 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27648 = (0);while(true){
if((i__27648 < size__4376__auto__))
{var vec__27676 = cljs.core._nth.call(null,c__4375__auto__,i__27648);var row_i = cljs.core.nth.call(null,vec__27676,(0),null);var row = cljs.core.nth.call(null,vec__27676,(1),null);cljs.core.chunk_append.call(null,b__27649,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27648,vec__27676,row_i,row,c__4375__auto__,size__4376__auto__,b__27649,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function iter__27677(s__27678){return (new cljs.core.LazySeq(null,((function (i__27648,vec__27676,row_i,row,c__4375__auto__,size__4376__auto__,b__27649,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27678__$1 = s__27678;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27678__$1);if(temp__4126__auto____$1)
{var s__27678__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27678__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27678__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27680 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27679 = (0);while(true){
if((i__27679 < size__4376__auto____$1))
{var vec__27685 = cljs.core._nth.call(null,c__4375__auto____$1,i__27679);var col_i = cljs.core.nth.call(null,vec__27685,(0),null);var col = cljs.core.nth.call(null,vec__27685,(1),null);cljs.core.chunk_append.call(null,b__27680,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27686__$1 = (((G__27686 == null))?null:cljs.core.get.call(null,rowcol,G__27686));var G__27686__$2 = (((G__27686__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27686__$1));var G__27686__$3 = (((G__27686__$2 == null))?null:render_fn__$1.call(null,G__27686__$2));return G__27686__$3;
})():null)], null)));
{
var G__27758 = (i__27679 + (1));
i__27679 = G__27758;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27680),iter__27677.call(null,cljs.core.chunk_rest.call(null,s__27678__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27680),null);
}
} else
{var vec__27687 = cljs.core.first.call(null,s__27678__$2);var col_i = cljs.core.nth.call(null,vec__27687,(0),null);var col = cljs.core.nth.call(null,vec__27687,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27688__$1 = (((G__27688 == null))?null:cljs.core.get.call(null,rowcol,G__27688));var G__27688__$2 = (((G__27688__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27688__$1));var G__27688__$3 = (((G__27688__$2 == null))?null:render_fn__$1.call(null,G__27688__$2));return G__27688__$3;
})():null)], null)),iter__27677.call(null,cljs.core.rest.call(null,s__27678__$2)));
}
} else
{return null;
}
break;
}
});})(i__27648,vec__27676,row_i,row,c__4375__auto__,size__4376__auto__,b__27649,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27648,vec__27676,row_i,row,c__4375__auto__,size__4376__auto__,b__27649,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27759 = (i__27648 + (1));
i__27648 = G__27759;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27649),iter__27646.call(null,cljs.core.chunk_rest.call(null,s__27647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27649),null);
}
} else
{var vec__27689 = cljs.core.first.call(null,s__27647__$2);var row_i = cljs.core.nth.call(null,vec__27689,(0),null);var row = cljs.core.nth.call(null,vec__27689,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27689,row_i,row,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function iter__27690(s__27691){return (new cljs.core.LazySeq(null,((function (vec__27689,row_i,row,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27691__$1 = s__27691;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27691__$1);if(temp__4126__auto____$1)
{var s__27691__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27691__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27691__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27693 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27692 = (0);while(true){
if((i__27692 < size__4376__auto__))
{var vec__27698 = cljs.core._nth.call(null,c__4375__auto__,i__27692);var col_i = cljs.core.nth.call(null,vec__27698,(0),null);var col = cljs.core.nth.call(null,vec__27698,(1),null);cljs.core.chunk_append.call(null,b__27693,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27699__$1 = (((G__27699 == null))?null:cljs.core.get.call(null,rowcol,G__27699));var G__27699__$2 = (((G__27699__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27699__$1));var G__27699__$3 = (((G__27699__$2 == null))?null:render_fn__$1.call(null,G__27699__$2));return G__27699__$3;
})():null)], null)));
{
var G__27760 = (i__27692 + (1));
i__27692 = G__27760;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27693),iter__27690.call(null,cljs.core.chunk_rest.call(null,s__27691__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27693),null);
}
} else
{var vec__27700 = cljs.core.first.call(null,s__27691__$2);var col_i = cljs.core.nth.call(null,vec__27700,(0),null);var col = cljs.core.nth.call(null,vec__27700,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27701__$1 = (((G__27701 == null))?null:cljs.core.get.call(null,rowcol,G__27701));var G__27701__$2 = (((G__27701__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27701__$1));var G__27701__$3 = (((G__27701__$2 == null))?null:render_fn__$1.call(null,G__27701__$2));return G__27701__$3;
})():null)], null)),iter__27690.call(null,cljs.core.rest.call(null,s__27691__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27689,row_i,row,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27689,row_i,row,s__27647__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27646.call(null,cljs.core.rest.call(null,s__27647__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27643),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27645 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27645))?sablono.interpreter.attributes.call(null,attrs27645):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27645))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27645)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function iter__27702(s__27703){return (new cljs.core.LazySeq(null,((function (attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27703__$1 = s__27703;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27703__$1);if(temp__4126__auto__)
{var s__27703__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27703__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27703__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27705 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27704 = (0);while(true){
if((i__27704 < size__4376__auto__))
{var vec__27732 = cljs.core._nth.call(null,c__4375__auto__,i__27704);var row_i = cljs.core.nth.call(null,vec__27732,(0),null);var row = cljs.core.nth.call(null,vec__27732,(1),null);cljs.core.chunk_append.call(null,b__27705,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27704,vec__27732,row_i,row,c__4375__auto__,size__4376__auto__,b__27705,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function iter__27733(s__27734){return (new cljs.core.LazySeq(null,((function (i__27704,vec__27732,row_i,row,c__4375__auto__,size__4376__auto__,b__27705,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27734__$1 = s__27734;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27734__$1);if(temp__4126__auto____$1)
{var s__27734__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27734__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27734__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27736 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27735 = (0);while(true){
if((i__27735 < size__4376__auto____$1))
{var vec__27741 = cljs.core._nth.call(null,c__4375__auto____$1,i__27735);var col_i = cljs.core.nth.call(null,vec__27741,(0),null);var col = cljs.core.nth.call(null,vec__27741,(1),null);cljs.core.chunk_append.call(null,b__27736,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27742__$1 = (((G__27742 == null))?null:cljs.core.get.call(null,rowcol,G__27742));var G__27742__$2 = (((G__27742__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27742__$1));var G__27742__$3 = (((G__27742__$2 == null))?null:render_fn__$1.call(null,G__27742__$2));return G__27742__$3;
})():null)], null)));
{
var G__27761 = (i__27735 + (1));
i__27735 = G__27761;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27736),iter__27733.call(null,cljs.core.chunk_rest.call(null,s__27734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27736),null);
}
} else
{var vec__27743 = cljs.core.first.call(null,s__27734__$2);var col_i = cljs.core.nth.call(null,vec__27743,(0),null);var col = cljs.core.nth.call(null,vec__27743,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27744__$1 = (((G__27744 == null))?null:cljs.core.get.call(null,rowcol,G__27744));var G__27744__$2 = (((G__27744__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27744__$1));var G__27744__$3 = (((G__27744__$2 == null))?null:render_fn__$1.call(null,G__27744__$2));return G__27744__$3;
})():null)], null)),iter__27733.call(null,cljs.core.rest.call(null,s__27734__$2)));
}
} else
{return null;
}
break;
}
});})(i__27704,vec__27732,row_i,row,c__4375__auto__,size__4376__auto__,b__27705,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27704,vec__27732,row_i,row,c__4375__auto__,size__4376__auto__,b__27705,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27762 = (i__27704 + (1));
i__27704 = G__27762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27705),iter__27702.call(null,cljs.core.chunk_rest.call(null,s__27703__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27705),null);
}
} else
{var vec__27745 = cljs.core.first.call(null,s__27703__$2);var row_i = cljs.core.nth.call(null,vec__27745,(0),null);var row = cljs.core.nth.call(null,vec__27745,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27745,row_i,row,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function iter__27746(s__27747){return (new cljs.core.LazySeq(null,((function (vec__27745,row_i,row,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27747__$1 = s__27747;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27747__$1);if(temp__4126__auto____$1)
{var s__27747__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27747__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27747__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27749 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27748 = (0);while(true){
if((i__27748 < size__4376__auto__))
{var vec__27754 = cljs.core._nth.call(null,c__4375__auto__,i__27748);var col_i = cljs.core.nth.call(null,vec__27754,(0),null);var col = cljs.core.nth.call(null,vec__27754,(1),null);cljs.core.chunk_append.call(null,b__27749,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27755__$1 = (((G__27755 == null))?null:cljs.core.get.call(null,rowcol,G__27755));var G__27755__$2 = (((G__27755__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27755__$1));var G__27755__$3 = (((G__27755__$2 == null))?null:render_fn__$1.call(null,G__27755__$2));return G__27755__$3;
})():null)], null)));
{
var G__27763 = (i__27748 + (1));
i__27748 = G__27763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27749),iter__27746.call(null,cljs.core.chunk_rest.call(null,s__27747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27749),null);
}
} else
{var vec__27756 = cljs.core.first.call(null,s__27747__$2);var col_i = cljs.core.nth.call(null,vec__27756,(0),null);var col = cljs.core.nth.call(null,vec__27756,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27757__$1 = (((G__27757 == null))?null:cljs.core.get.call(null,rowcol,G__27757));var G__27757__$2 = (((G__27757__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27757__$1));var G__27757__$3 = (((G__27757__$2 == null))?null:render_fn__$1.call(null,G__27757__$2));return G__27757__$3;
})():null)], null)),iter__27746.call(null,cljs.core.rest.call(null,s__27747__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27745,row_i,row,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27745,row_i,row,s__27703__$2,temp__4126__auto__,attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27702.call(null,cljs.core.rest.call(null,s__27703__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27643,rowcol,render_fn__$1,map__27640,map__27640__$1,map__27641,map__27641__$1,table_data,query,results,map__27642,map__27642__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27764,owner){var map__27777 = p__27764;var map__27777__$1 = ((cljs.core.seq_QMARK_.call(null,map__27777))?cljs.core.apply.call(null,cljs.core.hash_map,map__27777):map__27777);var props = map__27777__$1;var map__27778 = cljs.core.get.call(null,map__27777__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27778__$1 = ((cljs.core.seq_QMARK_.call(null,map__27778))?cljs.core.apply.call(null,cljs.core.hash_map,map__27778):map__27778);var table_state = map__27778__$1;var table_data = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27779 = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27779__$1 = ((cljs.core.seq_QMARK_.call(null,map__27779))?cljs.core.apply.call(null,cljs.core.hash_map,map__27779):map__27779);var controls = map__27779__$1;var index_type = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27777__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27780 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27780 = (function (index_type,row_aggs,owner,metric_path,props,map__27777,p__27764,row_path,table_data,map__27779,metric_aggs,index,ranges_table_component,map__27778,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,meta27781){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__27777 = map__27777;
this.p__27764 = p__27764;
this.row_path = row_path;
this.table_data = table_data;
this.map__27779 = map__27779;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.map__27778 = map__27778;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta27781 = meta27781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27780.cljs$lang$type = true;
clustermap.components.ranges_table.t27780.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27780";
clustermap.components.ranges_table.t27780.cljs$lang$ctorPrWriter = ((function (map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27780");
});})(map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27780.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27780.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27783,p__27784){var self__ = this;
var map__27785 = p__27783;var map__27785__$1 = ((cljs.core.seq_QMARK_.call(null,map__27785))?cljs.core.apply.call(null,cljs.core.hash_map,map__27785):map__27785);var next_props = map__27785__$1;var map__27786 = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27786__$1 = ((cljs.core.seq_QMARK_.call(null,map__27786))?cljs.core.apply.call(null,cljs.core.hash_map,map__27786):map__27786);var next_table_state = map__27786__$1;var next_table_data = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27787 = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27787__$1 = ((cljs.core.seq_QMARK_.call(null,map__27787))?cljs.core.apply.call(null,cljs.core.hash_map,map__27787):map__27787);var next_controls = map__27787__$1;var next_col_aggs = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27788 = p__27784;var map__27788__$1 = ((cljs.core.seq_QMARK_.call(null,map__27788))?cljs.core.apply.call(null,cljs.core.hash_map,map__27788):map__27788);var next_state = map__27788__$1;var table_data_resource = cljs.core.get.call(null,map__27788__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27780.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27780.prototype.om$core$IRender$render$arity$1 = ((function (map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27780.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27780.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27782){var self__ = this;
var _27782__$1 = this;return self__.meta27781;
});})(map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27782,meta27781__$1){var self__ = this;
var _27782__$1 = this;return (new clustermap.components.ranges_table.t27780(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__27777,self__.p__27764,self__.row_path,self__.table_data,self__.map__27779,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.map__27778,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,meta27781__$1));
});})(map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27780 = ((function (map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27780(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__27777__$2,p__27764__$1,row_path__$1,table_data__$1,map__27779__$2,metric_aggs__$1,index__$1,ranges_table_component__$1,map__27778__$2,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta27781){return (new clustermap.components.ranges_table.t27780(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__27777__$2,p__27764__$1,row_path__$1,table_data__$1,map__27779__$2,metric_aggs__$1,index__$1,ranges_table_component__$1,map__27778__$2,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta27781));
});})(map__27777,map__27777__$1,props,map__27778,map__27778__$1,table_state,table_data,map__27779,map__27779__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27780(index_type,row_aggs,owner,metric_path,props,map__27777__$1,p__27764,row_path,table_data,map__27779__$1,metric_aggs,index,ranges_table_component,map__27778__$1,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,null));
});
