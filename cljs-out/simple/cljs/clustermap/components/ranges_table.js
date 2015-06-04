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
clustermap.components.ranges_table.render_table = (function render_table(p__27483,owner,opts){var map__27602 = p__27483;var map__27602__$1 = ((cljs.core.seq_QMARK_.call(null,map__27602))?cljs.core.apply.call(null,cljs.core.hash_map,map__27602):map__27602);var map__27603 = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27603__$1 = ((cljs.core.seq_QMARK_.call(null,map__27603))?cljs.core.apply.call(null,cljs.core.hash_map,map__27603):map__27603);var table_data = map__27603__$1;var query = cljs.core.get.call(null,map__27603__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27603__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27604 = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27604__$1 = ((cljs.core.seq_QMARK_.call(null,map__27604))?cljs.core.apply.call(null,cljs.core.hash_map,map__27604):map__27604);var controls = map__27604__$1;var title = cljs.core.get.call(null,map__27604__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27604__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27604__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27604__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27605 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27605))?sablono.interpreter.attributes.call(null,attrs27605):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27605))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27606 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27606))?sablono.interpreter.attributes.call(null,attrs27606):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27606))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27606)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function iter__27608(s__27609){return (new cljs.core.LazySeq(null,((function (attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27609__$1 = s__27609;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27609__$1);if(temp__4126__auto__)
{var s__27609__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27609__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27609__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27611 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27610 = (0);while(true){
if((i__27610 < size__4376__auto__))
{var vec__27638 = cljs.core._nth.call(null,c__4375__auto__,i__27610);var row_i = cljs.core.nth.call(null,vec__27638,(0),null);var row = cljs.core.nth.call(null,vec__27638,(1),null);cljs.core.chunk_append.call(null,b__27611,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27610,vec__27638,row_i,row,c__4375__auto__,size__4376__auto__,b__27611,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function iter__27639(s__27640){return (new cljs.core.LazySeq(null,((function (i__27610,vec__27638,row_i,row,c__4375__auto__,size__4376__auto__,b__27611,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27640__$1 = s__27640;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27640__$1);if(temp__4126__auto____$1)
{var s__27640__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27640__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27640__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27642 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27641 = (0);while(true){
if((i__27641 < size__4376__auto____$1))
{var vec__27647 = cljs.core._nth.call(null,c__4375__auto____$1,i__27641);var col_i = cljs.core.nth.call(null,vec__27647,(0),null);var col = cljs.core.nth.call(null,vec__27647,(1),null);cljs.core.chunk_append.call(null,b__27642,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27648__$1 = (((G__27648 == null))?null:cljs.core.get.call(null,rowcol,G__27648));var G__27648__$2 = (((G__27648__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27648__$1));var G__27648__$3 = (((G__27648__$2 == null))?null:render_fn__$1.call(null,G__27648__$2));return G__27648__$3;
})():null)], null)));
{
var G__27720 = (i__27641 + (1));
i__27641 = G__27720;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27642),iter__27639.call(null,cljs.core.chunk_rest.call(null,s__27640__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27642),null);
}
} else
{var vec__27649 = cljs.core.first.call(null,s__27640__$2);var col_i = cljs.core.nth.call(null,vec__27649,(0),null);var col = cljs.core.nth.call(null,vec__27649,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27650__$1 = (((G__27650 == null))?null:cljs.core.get.call(null,rowcol,G__27650));var G__27650__$2 = (((G__27650__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27650__$1));var G__27650__$3 = (((G__27650__$2 == null))?null:render_fn__$1.call(null,G__27650__$2));return G__27650__$3;
})():null)], null)),iter__27639.call(null,cljs.core.rest.call(null,s__27640__$2)));
}
} else
{return null;
}
break;
}
});})(i__27610,vec__27638,row_i,row,c__4375__auto__,size__4376__auto__,b__27611,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27610,vec__27638,row_i,row,c__4375__auto__,size__4376__auto__,b__27611,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27721 = (i__27610 + (1));
i__27610 = G__27721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27611),iter__27608.call(null,cljs.core.chunk_rest.call(null,s__27609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27611),null);
}
} else
{var vec__27651 = cljs.core.first.call(null,s__27609__$2);var row_i = cljs.core.nth.call(null,vec__27651,(0),null);var row = cljs.core.nth.call(null,vec__27651,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27651,row_i,row,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function iter__27652(s__27653){return (new cljs.core.LazySeq(null,((function (vec__27651,row_i,row,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27653__$1 = s__27653;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27653__$1);if(temp__4126__auto____$1)
{var s__27653__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27653__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27653__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27655 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27654 = (0);while(true){
if((i__27654 < size__4376__auto__))
{var vec__27660 = cljs.core._nth.call(null,c__4375__auto__,i__27654);var col_i = cljs.core.nth.call(null,vec__27660,(0),null);var col = cljs.core.nth.call(null,vec__27660,(1),null);cljs.core.chunk_append.call(null,b__27655,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27661__$1 = (((G__27661 == null))?null:cljs.core.get.call(null,rowcol,G__27661));var G__27661__$2 = (((G__27661__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27661__$1));var G__27661__$3 = (((G__27661__$2 == null))?null:render_fn__$1.call(null,G__27661__$2));return G__27661__$3;
})():null)], null)));
{
var G__27722 = (i__27654 + (1));
i__27654 = G__27722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27655),iter__27652.call(null,cljs.core.chunk_rest.call(null,s__27653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27655),null);
}
} else
{var vec__27662 = cljs.core.first.call(null,s__27653__$2);var col_i = cljs.core.nth.call(null,vec__27662,(0),null);var col = cljs.core.nth.call(null,vec__27662,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27663__$1 = (((G__27663 == null))?null:cljs.core.get.call(null,rowcol,G__27663));var G__27663__$2 = (((G__27663__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27663__$1));var G__27663__$3 = (((G__27663__$2 == null))?null:render_fn__$1.call(null,G__27663__$2));return G__27663__$3;
})():null)], null)),iter__27652.call(null,cljs.core.rest.call(null,s__27653__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27651,row_i,row,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27651,row_i,row,s__27609__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27608.call(null,cljs.core.rest.call(null,s__27609__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27605),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27607 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27607))?sablono.interpreter.attributes.call(null,attrs27607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27607)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function iter__27664(s__27665){return (new cljs.core.LazySeq(null,((function (attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27665__$1 = s__27665;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27665__$1);if(temp__4126__auto__)
{var s__27665__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27665__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27665__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27667 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27666 = (0);while(true){
if((i__27666 < size__4376__auto__))
{var vec__27694 = cljs.core._nth.call(null,c__4375__auto__,i__27666);var row_i = cljs.core.nth.call(null,vec__27694,(0),null);var row = cljs.core.nth.call(null,vec__27694,(1),null);cljs.core.chunk_append.call(null,b__27667,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27666,vec__27694,row_i,row,c__4375__auto__,size__4376__auto__,b__27667,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function iter__27695(s__27696){return (new cljs.core.LazySeq(null,((function (i__27666,vec__27694,row_i,row,c__4375__auto__,size__4376__auto__,b__27667,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27696__$1 = s__27696;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27696__$1);if(temp__4126__auto____$1)
{var s__27696__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27696__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27696__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27698 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27697 = (0);while(true){
if((i__27697 < size__4376__auto____$1))
{var vec__27703 = cljs.core._nth.call(null,c__4375__auto____$1,i__27697);var col_i = cljs.core.nth.call(null,vec__27703,(0),null);var col = cljs.core.nth.call(null,vec__27703,(1),null);cljs.core.chunk_append.call(null,b__27698,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27704__$1 = (((G__27704 == null))?null:cljs.core.get.call(null,rowcol,G__27704));var G__27704__$2 = (((G__27704__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27704__$1));var G__27704__$3 = (((G__27704__$2 == null))?null:render_fn__$1.call(null,G__27704__$2));return G__27704__$3;
})():null)], null)));
{
var G__27723 = (i__27697 + (1));
i__27697 = G__27723;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27698),iter__27695.call(null,cljs.core.chunk_rest.call(null,s__27696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27698),null);
}
} else
{var vec__27705 = cljs.core.first.call(null,s__27696__$2);var col_i = cljs.core.nth.call(null,vec__27705,(0),null);var col = cljs.core.nth.call(null,vec__27705,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27706__$1 = (((G__27706 == null))?null:cljs.core.get.call(null,rowcol,G__27706));var G__27706__$2 = (((G__27706__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27706__$1));var G__27706__$3 = (((G__27706__$2 == null))?null:render_fn__$1.call(null,G__27706__$2));return G__27706__$3;
})():null)], null)),iter__27695.call(null,cljs.core.rest.call(null,s__27696__$2)));
}
} else
{return null;
}
break;
}
});})(i__27666,vec__27694,row_i,row,c__4375__auto__,size__4376__auto__,b__27667,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27666,vec__27694,row_i,row,c__4375__auto__,size__4376__auto__,b__27667,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27724 = (i__27666 + (1));
i__27666 = G__27724;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27667),iter__27664.call(null,cljs.core.chunk_rest.call(null,s__27665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27667),null);
}
} else
{var vec__27707 = cljs.core.first.call(null,s__27665__$2);var row_i = cljs.core.nth.call(null,vec__27707,(0),null);var row = cljs.core.nth.call(null,vec__27707,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27707,row_i,row,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function iter__27708(s__27709){return (new cljs.core.LazySeq(null,((function (vec__27707,row_i,row,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27709__$1 = s__27709;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27709__$1);if(temp__4126__auto____$1)
{var s__27709__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27709__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27709__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27711 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27710 = (0);while(true){
if((i__27710 < size__4376__auto__))
{var vec__27716 = cljs.core._nth.call(null,c__4375__auto__,i__27710);var col_i = cljs.core.nth.call(null,vec__27716,(0),null);var col = cljs.core.nth.call(null,vec__27716,(1),null);cljs.core.chunk_append.call(null,b__27711,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27717__$1 = (((G__27717 == null))?null:cljs.core.get.call(null,rowcol,G__27717));var G__27717__$2 = (((G__27717__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27717__$1));var G__27717__$3 = (((G__27717__$2 == null))?null:render_fn__$1.call(null,G__27717__$2));return G__27717__$3;
})():null)], null)));
{
var G__27725 = (i__27710 + (1));
i__27710 = G__27725;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27711),iter__27708.call(null,cljs.core.chunk_rest.call(null,s__27709__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27711),null);
}
} else
{var vec__27718 = cljs.core.first.call(null,s__27709__$2);var col_i = cljs.core.nth.call(null,vec__27718,(0),null);var col = cljs.core.nth.call(null,vec__27718,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27719__$1 = (((G__27719 == null))?null:cljs.core.get.call(null,rowcol,G__27719));var G__27719__$2 = (((G__27719__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27719__$1));var G__27719__$3 = (((G__27719__$2 == null))?null:render_fn__$1.call(null,G__27719__$2));return G__27719__$3;
})():null)], null)),iter__27708.call(null,cljs.core.rest.call(null,s__27709__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27707,row_i,row,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27707,row_i,row,s__27665__$2,temp__4126__auto__,attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27664.call(null,cljs.core.rest.call(null,s__27665__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27605,rowcol,render_fn__$1,map__27602,map__27602__$1,map__27603,map__27603__$1,table_data,query,results,map__27604,map__27604__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27726,owner){var map__27739 = p__27726;var map__27739__$1 = ((cljs.core.seq_QMARK_.call(null,map__27739))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);var props = map__27739__$1;var map__27740 = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27740__$1 = ((cljs.core.seq_QMARK_.call(null,map__27740))?cljs.core.apply.call(null,cljs.core.hash_map,map__27740):map__27740);var table_state = map__27740__$1;var table_data = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27741 = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27741__$1 = ((cljs.core.seq_QMARK_.call(null,map__27741))?cljs.core.apply.call(null,cljs.core.hash_map,map__27741):map__27741);var controls = map__27741__$1;var index_type = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27741__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27742 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27742 = (function (map__27740,index_type,map__27741,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,p__27726,map__27739,meta27743){
this.map__27740 = map__27740;
this.index_type = index_type;
this.map__27741 = map__27741;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.p__27726 = p__27726;
this.map__27739 = map__27739;
this.meta27743 = meta27743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27742.cljs$lang$type = true;
clustermap.components.ranges_table.t27742.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27742";
clustermap.components.ranges_table.t27742.cljs$lang$ctorPrWriter = ((function (map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27742");
});})(map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27742.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27742.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27745,p__27746){var self__ = this;
var map__27747 = p__27745;var map__27747__$1 = ((cljs.core.seq_QMARK_.call(null,map__27747))?cljs.core.apply.call(null,cljs.core.hash_map,map__27747):map__27747);var next_props = map__27747__$1;var map__27748 = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27748__$1 = ((cljs.core.seq_QMARK_.call(null,map__27748))?cljs.core.apply.call(null,cljs.core.hash_map,map__27748):map__27748);var next_table_state = map__27748__$1;var next_table_data = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27749 = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27749__$1 = ((cljs.core.seq_QMARK_.call(null,map__27749))?cljs.core.apply.call(null,cljs.core.hash_map,map__27749):map__27749);var next_controls = map__27749__$1;var next_col_aggs = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27747__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27750 = p__27746;var map__27750__$1 = ((cljs.core.seq_QMARK_.call(null,map__27750))?cljs.core.apply.call(null,cljs.core.hash_map,map__27750):map__27750);var next_state = map__27750__$1;var table_data_resource = cljs.core.get.call(null,map__27750__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27742.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27742.prototype.om$core$IRender$render$arity$1 = ((function (map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27742.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27742.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27744){var self__ = this;
var _27744__$1 = this;return self__.meta27743;
});})(map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27744,meta27743__$1){var self__ = this;
var _27744__$1 = this;return (new clustermap.components.ranges_table.t27742(self__.map__27740,self__.index_type,self__.map__27741,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.p__27726,self__.map__27739,meta27743__$1));
});})(map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27742 = ((function (map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27742(map__27740__$2,index_type__$1,map__27741__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,p__27726__$1,map__27739__$2,meta27743){return (new clustermap.components.ranges_table.t27742(map__27740__$2,index_type__$1,map__27741__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,p__27726__$1,map__27739__$2,meta27743));
});})(map__27739,map__27739__$1,props,map__27740,map__27740__$1,table_state,table_data,map__27741,map__27741__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27742(map__27740__$1,index_type,map__27741__$1,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,p__27726,map__27739__$1,null));
});
