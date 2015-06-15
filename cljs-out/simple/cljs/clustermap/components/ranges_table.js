// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.ranges_table.render_table = (function render_table(p__28367,owner,opts){var map__28486 = p__28367;var map__28486__$1 = ((cljs.core.seq_QMARK_.call(null,map__28486))?cljs.core.apply.call(null,cljs.core.hash_map,map__28486):map__28486);var map__28487 = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28487__$1 = ((cljs.core.seq_QMARK_.call(null,map__28487))?cljs.core.apply.call(null,cljs.core.hash_map,map__28487):map__28487);var table_data = map__28487__$1;var query = cljs.core.get.call(null,map__28487__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28487__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28488 = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28488__$1 = ((cljs.core.seq_QMARK_.call(null,map__28488))?cljs.core.apply.call(null,cljs.core.hash_map,map__28488):map__28488);var controls = map__28488__$1;var title = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28489 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28489))?sablono.interpreter.attributes.call(null,attrs28489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28489))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28490 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28490))?sablono.interpreter.attributes.call(null,attrs28490):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28490))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28490)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function iter__28492(s__28493){return (new cljs.core.LazySeq(null,((function (attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28493__$1 = s__28493;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28493__$1);if(temp__4126__auto__)
{var s__28493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28493__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28493__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28495 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28494 = (0);while(true){
if((i__28494 < size__4376__auto__))
{var vec__28522 = cljs.core._nth.call(null,c__4375__auto__,i__28494);var row_i = cljs.core.nth.call(null,vec__28522,(0),null);var row = cljs.core.nth.call(null,vec__28522,(1),null);cljs.core.chunk_append.call(null,b__28495,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28494,vec__28522,row_i,row,c__4375__auto__,size__4376__auto__,b__28495,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function iter__28523(s__28524){return (new cljs.core.LazySeq(null,((function (i__28494,vec__28522,row_i,row,c__4375__auto__,size__4376__auto__,b__28495,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28524__$1 = s__28524;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28524__$1);if(temp__4126__auto____$1)
{var s__28524__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28524__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28524__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28526 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28525 = (0);while(true){
if((i__28525 < size__4376__auto____$1))
{var vec__28531 = cljs.core._nth.call(null,c__4375__auto____$1,i__28525);var col_i = cljs.core.nth.call(null,vec__28531,(0),null);var col = cljs.core.nth.call(null,vec__28531,(1),null);cljs.core.chunk_append.call(null,b__28526,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28532__$1 = (((G__28532 == null))?null:cljs.core.get.call(null,rowcol,G__28532));var G__28532__$2 = (((G__28532__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28532__$1));var G__28532__$3 = (((G__28532__$2 == null))?null:render_fn__$1.call(null,G__28532__$2));return G__28532__$3;
})():null)], null)));
{
var G__28604 = (i__28525 + (1));
i__28525 = G__28604;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28526),iter__28523.call(null,cljs.core.chunk_rest.call(null,s__28524__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28526),null);
}
} else
{var vec__28533 = cljs.core.first.call(null,s__28524__$2);var col_i = cljs.core.nth.call(null,vec__28533,(0),null);var col = cljs.core.nth.call(null,vec__28533,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28534__$1 = (((G__28534 == null))?null:cljs.core.get.call(null,rowcol,G__28534));var G__28534__$2 = (((G__28534__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28534__$1));var G__28534__$3 = (((G__28534__$2 == null))?null:render_fn__$1.call(null,G__28534__$2));return G__28534__$3;
})():null)], null)),iter__28523.call(null,cljs.core.rest.call(null,s__28524__$2)));
}
} else
{return null;
}
break;
}
});})(i__28494,vec__28522,row_i,row,c__4375__auto__,size__4376__auto__,b__28495,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28494,vec__28522,row_i,row,c__4375__auto__,size__4376__auto__,b__28495,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28605 = (i__28494 + (1));
i__28494 = G__28605;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28495),iter__28492.call(null,cljs.core.chunk_rest.call(null,s__28493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28495),null);
}
} else
{var vec__28535 = cljs.core.first.call(null,s__28493__$2);var row_i = cljs.core.nth.call(null,vec__28535,(0),null);var row = cljs.core.nth.call(null,vec__28535,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28535,row_i,row,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function iter__28536(s__28537){return (new cljs.core.LazySeq(null,((function (vec__28535,row_i,row,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28537__$1 = s__28537;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28537__$1);if(temp__4126__auto____$1)
{var s__28537__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28537__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28537__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28539 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28538 = (0);while(true){
if((i__28538 < size__4376__auto__))
{var vec__28544 = cljs.core._nth.call(null,c__4375__auto__,i__28538);var col_i = cljs.core.nth.call(null,vec__28544,(0),null);var col = cljs.core.nth.call(null,vec__28544,(1),null);cljs.core.chunk_append.call(null,b__28539,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28545__$1 = (((G__28545 == null))?null:cljs.core.get.call(null,rowcol,G__28545));var G__28545__$2 = (((G__28545__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28545__$1));var G__28545__$3 = (((G__28545__$2 == null))?null:render_fn__$1.call(null,G__28545__$2));return G__28545__$3;
})():null)], null)));
{
var G__28606 = (i__28538 + (1));
i__28538 = G__28606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28539),iter__28536.call(null,cljs.core.chunk_rest.call(null,s__28537__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28539),null);
}
} else
{var vec__28546 = cljs.core.first.call(null,s__28537__$2);var col_i = cljs.core.nth.call(null,vec__28546,(0),null);var col = cljs.core.nth.call(null,vec__28546,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28547__$1 = (((G__28547 == null))?null:cljs.core.get.call(null,rowcol,G__28547));var G__28547__$2 = (((G__28547__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28547__$1));var G__28547__$3 = (((G__28547__$2 == null))?null:render_fn__$1.call(null,G__28547__$2));return G__28547__$3;
})():null)], null)),iter__28536.call(null,cljs.core.rest.call(null,s__28537__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28535,row_i,row,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28535,row_i,row,s__28493__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28492.call(null,cljs.core.rest.call(null,s__28493__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28489),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28491 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28491))?sablono.interpreter.attributes.call(null,attrs28491):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28491))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28491)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function iter__28548(s__28549){return (new cljs.core.LazySeq(null,((function (attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28549__$1 = s__28549;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28549__$1);if(temp__4126__auto__)
{var s__28549__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28549__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28549__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28551 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28550 = (0);while(true){
if((i__28550 < size__4376__auto__))
{var vec__28578 = cljs.core._nth.call(null,c__4375__auto__,i__28550);var row_i = cljs.core.nth.call(null,vec__28578,(0),null);var row = cljs.core.nth.call(null,vec__28578,(1),null);cljs.core.chunk_append.call(null,b__28551,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28550,vec__28578,row_i,row,c__4375__auto__,size__4376__auto__,b__28551,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function iter__28579(s__28580){return (new cljs.core.LazySeq(null,((function (i__28550,vec__28578,row_i,row,c__4375__auto__,size__4376__auto__,b__28551,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28580__$1 = s__28580;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28580__$1);if(temp__4126__auto____$1)
{var s__28580__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28580__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28580__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28582 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28581 = (0);while(true){
if((i__28581 < size__4376__auto____$1))
{var vec__28587 = cljs.core._nth.call(null,c__4375__auto____$1,i__28581);var col_i = cljs.core.nth.call(null,vec__28587,(0),null);var col = cljs.core.nth.call(null,vec__28587,(1),null);cljs.core.chunk_append.call(null,b__28582,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28588__$1 = (((G__28588 == null))?null:cljs.core.get.call(null,rowcol,G__28588));var G__28588__$2 = (((G__28588__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28588__$1));var G__28588__$3 = (((G__28588__$2 == null))?null:render_fn__$1.call(null,G__28588__$2));return G__28588__$3;
})():null)], null)));
{
var G__28607 = (i__28581 + (1));
i__28581 = G__28607;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28582),iter__28579.call(null,cljs.core.chunk_rest.call(null,s__28580__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28582),null);
}
} else
{var vec__28589 = cljs.core.first.call(null,s__28580__$2);var col_i = cljs.core.nth.call(null,vec__28589,(0),null);var col = cljs.core.nth.call(null,vec__28589,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28590__$1 = (((G__28590 == null))?null:cljs.core.get.call(null,rowcol,G__28590));var G__28590__$2 = (((G__28590__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28590__$1));var G__28590__$3 = (((G__28590__$2 == null))?null:render_fn__$1.call(null,G__28590__$2));return G__28590__$3;
})():null)], null)),iter__28579.call(null,cljs.core.rest.call(null,s__28580__$2)));
}
} else
{return null;
}
break;
}
});})(i__28550,vec__28578,row_i,row,c__4375__auto__,size__4376__auto__,b__28551,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28550,vec__28578,row_i,row,c__4375__auto__,size__4376__auto__,b__28551,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28608 = (i__28550 + (1));
i__28550 = G__28608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28551),iter__28548.call(null,cljs.core.chunk_rest.call(null,s__28549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28551),null);
}
} else
{var vec__28591 = cljs.core.first.call(null,s__28549__$2);var row_i = cljs.core.nth.call(null,vec__28591,(0),null);var row = cljs.core.nth.call(null,vec__28591,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28591,row_i,row,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function iter__28592(s__28593){return (new cljs.core.LazySeq(null,((function (vec__28591,row_i,row,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28593__$1 = s__28593;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28593__$1);if(temp__4126__auto____$1)
{var s__28593__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28593__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28593__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28595 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28594 = (0);while(true){
if((i__28594 < size__4376__auto__))
{var vec__28600 = cljs.core._nth.call(null,c__4375__auto__,i__28594);var col_i = cljs.core.nth.call(null,vec__28600,(0),null);var col = cljs.core.nth.call(null,vec__28600,(1),null);cljs.core.chunk_append.call(null,b__28595,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28601__$1 = (((G__28601 == null))?null:cljs.core.get.call(null,rowcol,G__28601));var G__28601__$2 = (((G__28601__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28601__$1));var G__28601__$3 = (((G__28601__$2 == null))?null:render_fn__$1.call(null,G__28601__$2));return G__28601__$3;
})():null)], null)));
{
var G__28609 = (i__28594 + (1));
i__28594 = G__28609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28595),iter__28592.call(null,cljs.core.chunk_rest.call(null,s__28593__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28595),null);
}
} else
{var vec__28602 = cljs.core.first.call(null,s__28593__$2);var col_i = cljs.core.nth.call(null,vec__28602,(0),null);var col = cljs.core.nth.call(null,vec__28602,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28603__$1 = (((G__28603 == null))?null:cljs.core.get.call(null,rowcol,G__28603));var G__28603__$2 = (((G__28603__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28603__$1));var G__28603__$3 = (((G__28603__$2 == null))?null:render_fn__$1.call(null,G__28603__$2));return G__28603__$3;
})():null)], null)),iter__28592.call(null,cljs.core.rest.call(null,s__28593__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28591,row_i,row,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28591,row_i,row,s__28549__$2,temp__4126__auto__,attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28548.call(null,cljs.core.rest.call(null,s__28549__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28489,rowcol,render_fn__$1,map__28486,map__28486__$1,map__28487,map__28487__$1,table_data,query,results,map__28488,map__28488__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28610,owner){var map__28655 = p__28610;var map__28655__$1 = ((cljs.core.seq_QMARK_.call(null,map__28655))?cljs.core.apply.call(null,cljs.core.hash_map,map__28655):map__28655);var props = map__28655__$1;var map__28656 = cljs.core.get.call(null,map__28655__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28656__$1 = ((cljs.core.seq_QMARK_.call(null,map__28656))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);var table_state = map__28656__$1;var table_data = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28657 = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28657__$1 = ((cljs.core.seq_QMARK_.call(null,map__28657))?cljs.core.apply.call(null,cljs.core.hash_map,map__28657):map__28657);var controls = map__28657__$1;var index_type = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28657__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28655__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28658 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28658 = (function (index_type,map__28657,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,map__28655,map__28656,ranges_table_component,col_path,filter_spec,table_state,controls,p__28610,col_aggs,title,rows,cols,meta28659){
this.index_type = index_type;
this.map__28657 = map__28657;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.map__28655 = map__28655;
this.map__28656 = map__28656;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.p__28610 = p__28610;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta28659 = meta28659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28658.cljs$lang$type = true;
clustermap.components.ranges_table.t28658.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28658";
clustermap.components.ranges_table.t28658.cljs$lang$ctorPrWriter = ((function (map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28658");
});})(map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28658.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28658.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28661,p__28662){var self__ = this;
var map__28663 = p__28661;var map__28663__$1 = ((cljs.core.seq_QMARK_.call(null,map__28663))?cljs.core.apply.call(null,cljs.core.hash_map,map__28663):map__28663);var next_props = map__28663__$1;var map__28664 = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28664__$1 = ((cljs.core.seq_QMARK_.call(null,map__28664))?cljs.core.apply.call(null,cljs.core.hash_map,map__28664):map__28664);var next_table_state = map__28664__$1;var next_table_data = cljs.core.get.call(null,map__28664__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28665 = cljs.core.get.call(null,map__28664__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28665__$1 = ((cljs.core.seq_QMARK_.call(null,map__28665))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);var next_controls = map__28665__$1;var next_col_aggs = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28666 = p__28662;var map__28666__$1 = ((cljs.core.seq_QMARK_.call(null,map__28666))?cljs.core.apply.call(null,cljs.core.hash_map,map__28666):map__28666);var fetch_data_fn = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28663,map__28663__$1,next_props,map__28664,map__28664__$1,next_table_state,next_table_data,map__28665,map__28665__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28666,map__28666__$1,fetch_data_fn,map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28663,map__28663__$1,next_props,map__28664,map__28664__$1,next_table_state,next_table_data,map__28665,map__28665__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28666,map__28666__$1,fetch_data_fn,map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28684){var state_val_28685 = (state_28684[(1)]);if((state_val_28685 === (5)))
{var inst_28682 = (state_28684[(2)]);var state_28684__$1 = state_28684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28684__$1,inst_28682);
} else
{if((state_val_28685 === (4)))
{var state_28684__$1 = state_28684;var statearr_28686_28699 = state_28684__$1;(statearr_28686_28699[(2)] = null);
(statearr_28686_28699[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28685 === (3)))
{var inst_28669 = (state_28684[(7)]);var inst_28671 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28672 = ["RANGES-TABLE-DATA",inst_28669];var inst_28673 = (new cljs.core.PersistentVector(null,2,(5),inst_28671,inst_28672,null));var inst_28674 = cljs.core.clj__GT_js.call(null,inst_28673);var inst_28675 = console.log(inst_28674);var inst_28676 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28677 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28678 = (new cljs.core.PersistentVector(null,1,(5),inst_28676,inst_28677,null));var inst_28679 = om.core.update_BANG_.call(null,self__.table_state,inst_28678,inst_28669);var state_28684__$1 = (function (){var statearr_28687 = state_28684;(statearr_28687[(8)] = inst_28675);
return statearr_28687;
})();var statearr_28688_28700 = state_28684__$1;(statearr_28688_28700[(2)] = inst_28679);
(statearr_28688_28700[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28685 === (2)))
{var inst_28669 = (state_28684[(7)]);var inst_28669__$1 = (state_28684[(2)]);var state_28684__$1 = (function (){var statearr_28689 = state_28684;(statearr_28689[(7)] = inst_28669__$1);
return statearr_28689;
})();if(cljs.core.truth_(inst_28669__$1))
{var statearr_28690_28701 = state_28684__$1;(statearr_28690_28701[(1)] = (3));
} else
{var statearr_28691_28702 = state_28684__$1;(statearr_28691_28702[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28685 === (1)))
{var inst_28667 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28684__$1 = state_28684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28684__$1,(2),inst_28667);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28663,map__28663__$1,next_props,map__28664,map__28664__$1,next_table_state,next_table_data,map__28665,map__28665__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28666,map__28666__$1,fetch_data_fn,map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28663,map__28663__$1,next_props,map__28664,map__28664__$1,next_table_state,next_table_data,map__28665,map__28665__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28666,map__28666__$1,fetch_data_fn,map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28695 = [null,null,null,null,null,null,null,null,null];(statearr_28695[(0)] = state_machine__9111__auto__);
(statearr_28695[(1)] = (1));
return statearr_28695;
});
var state_machine__9111__auto____1 = (function (state_28684){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28684);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28696){if((e28696 instanceof Object))
{var ex__9114__auto__ = e28696;var statearr_28697_28703 = state_28684;(statearr_28697_28703[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28696;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28704 = state_28684;
state_28684 = G__28704;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28684){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28663,map__28663__$1,next_props,map__28664,map__28664__$1,next_table_state,next_table_data,map__28665,map__28665__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28666,map__28666__$1,fetch_data_fn,map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28698 = f__9126__auto__.call(null);(statearr_28698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28663,map__28663__$1,next_props,map__28664,map__28664__$1,next_table_state,next_table_data,map__28665,map__28665__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28666,map__28666__$1,fetch_data_fn,map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28658.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28658.prototype.om$core$IRender$render$arity$1 = ((function (map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28658.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28658.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28660){var self__ = this;
var _28660__$1 = this;return self__.meta28659;
});})(map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28660,meta28659__$1){var self__ = this;
var _28660__$1 = this;return (new clustermap.components.ranges_table.t28658(self__.index_type,self__.map__28657,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.map__28655,self__.map__28656,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.p__28610,self__.col_aggs,self__.title,self__.rows,self__.cols,meta28659__$1));
});})(map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28658 = ((function (map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28658(index_type__$1,map__28657__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,map__28655__$2,map__28656__$2,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,p__28610__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta28659){return (new clustermap.components.ranges_table.t28658(index_type__$1,map__28657__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,map__28655__$2,map__28656__$2,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,p__28610__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta28659));
});})(map__28655,map__28655__$1,props,map__28656,map__28656__$1,table_state,table_data,map__28657,map__28657__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28658(index_type,map__28657__$1,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,map__28655__$1,map__28656__$1,ranges_table_component,col_path,filter_spec,table_state,controls,p__28610,col_aggs,title,rows,cols,null));
});
