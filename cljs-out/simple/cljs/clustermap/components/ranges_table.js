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
clustermap.components.ranges_table.render_table = (function render_table(p__28416,owner,opts){var map__28535 = p__28416;var map__28535__$1 = ((cljs.core.seq_QMARK_.call(null,map__28535))?cljs.core.apply.call(null,cljs.core.hash_map,map__28535):map__28535);var map__28536 = cljs.core.get.call(null,map__28535__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28536__$1 = ((cljs.core.seq_QMARK_.call(null,map__28536))?cljs.core.apply.call(null,cljs.core.hash_map,map__28536):map__28536);var table_data = map__28536__$1;var query = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28537 = cljs.core.get.call(null,map__28535__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28537__$1 = ((cljs.core.seq_QMARK_.call(null,map__28537))?cljs.core.apply.call(null,cljs.core.hash_map,map__28537):map__28537);var controls = map__28537__$1;var title = cljs.core.get.call(null,map__28537__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28537__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28537__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28537__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28538 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28538))?sablono.interpreter.attributes.call(null,attrs28538):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28538))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28539 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28539))?sablono.interpreter.attributes.call(null,attrs28539):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28539))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28539)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function iter__28541(s__28542){return (new cljs.core.LazySeq(null,((function (attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28542__$1 = s__28542;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28542__$1);if(temp__4126__auto__)
{var s__28542__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28542__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28542__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28544 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28543 = (0);while(true){
if((i__28543 < size__4376__auto__))
{var vec__28571 = cljs.core._nth.call(null,c__4375__auto__,i__28543);var row_i = cljs.core.nth.call(null,vec__28571,(0),null);var row = cljs.core.nth.call(null,vec__28571,(1),null);cljs.core.chunk_append.call(null,b__28544,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28543,vec__28571,row_i,row,c__4375__auto__,size__4376__auto__,b__28544,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function iter__28572(s__28573){return (new cljs.core.LazySeq(null,((function (i__28543,vec__28571,row_i,row,c__4375__auto__,size__4376__auto__,b__28544,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28573__$1 = s__28573;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28573__$1);if(temp__4126__auto____$1)
{var s__28573__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28573__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28573__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28575 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28574 = (0);while(true){
if((i__28574 < size__4376__auto____$1))
{var vec__28580 = cljs.core._nth.call(null,c__4375__auto____$1,i__28574);var col_i = cljs.core.nth.call(null,vec__28580,(0),null);var col = cljs.core.nth.call(null,vec__28580,(1),null);cljs.core.chunk_append.call(null,b__28575,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28581__$1 = (((G__28581 == null))?null:cljs.core.get.call(null,rowcol,G__28581));var G__28581__$2 = (((G__28581__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28581__$1));var G__28581__$3 = (((G__28581__$2 == null))?null:render_fn__$1.call(null,G__28581__$2));return G__28581__$3;
})():null)], null)));
{
var G__28653 = (i__28574 + (1));
i__28574 = G__28653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28575),iter__28572.call(null,cljs.core.chunk_rest.call(null,s__28573__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28575),null);
}
} else
{var vec__28582 = cljs.core.first.call(null,s__28573__$2);var col_i = cljs.core.nth.call(null,vec__28582,(0),null);var col = cljs.core.nth.call(null,vec__28582,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28583__$1 = (((G__28583 == null))?null:cljs.core.get.call(null,rowcol,G__28583));var G__28583__$2 = (((G__28583__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28583__$1));var G__28583__$3 = (((G__28583__$2 == null))?null:render_fn__$1.call(null,G__28583__$2));return G__28583__$3;
})():null)], null)),iter__28572.call(null,cljs.core.rest.call(null,s__28573__$2)));
}
} else
{return null;
}
break;
}
});})(i__28543,vec__28571,row_i,row,c__4375__auto__,size__4376__auto__,b__28544,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28543,vec__28571,row_i,row,c__4375__auto__,size__4376__auto__,b__28544,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28654 = (i__28543 + (1));
i__28543 = G__28654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28544),iter__28541.call(null,cljs.core.chunk_rest.call(null,s__28542__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28544),null);
}
} else
{var vec__28584 = cljs.core.first.call(null,s__28542__$2);var row_i = cljs.core.nth.call(null,vec__28584,(0),null);var row = cljs.core.nth.call(null,vec__28584,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28584,row_i,row,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function iter__28585(s__28586){return (new cljs.core.LazySeq(null,((function (vec__28584,row_i,row,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28586__$1 = s__28586;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28586__$1);if(temp__4126__auto____$1)
{var s__28586__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28586__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28586__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28588 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28587 = (0);while(true){
if((i__28587 < size__4376__auto__))
{var vec__28593 = cljs.core._nth.call(null,c__4375__auto__,i__28587);var col_i = cljs.core.nth.call(null,vec__28593,(0),null);var col = cljs.core.nth.call(null,vec__28593,(1),null);cljs.core.chunk_append.call(null,b__28588,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28594__$1 = (((G__28594 == null))?null:cljs.core.get.call(null,rowcol,G__28594));var G__28594__$2 = (((G__28594__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28594__$1));var G__28594__$3 = (((G__28594__$2 == null))?null:render_fn__$1.call(null,G__28594__$2));return G__28594__$3;
})():null)], null)));
{
var G__28655 = (i__28587 + (1));
i__28587 = G__28655;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28588),iter__28585.call(null,cljs.core.chunk_rest.call(null,s__28586__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28588),null);
}
} else
{var vec__28595 = cljs.core.first.call(null,s__28586__$2);var col_i = cljs.core.nth.call(null,vec__28595,(0),null);var col = cljs.core.nth.call(null,vec__28595,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28596__$1 = (((G__28596 == null))?null:cljs.core.get.call(null,rowcol,G__28596));var G__28596__$2 = (((G__28596__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28596__$1));var G__28596__$3 = (((G__28596__$2 == null))?null:render_fn__$1.call(null,G__28596__$2));return G__28596__$3;
})():null)], null)),iter__28585.call(null,cljs.core.rest.call(null,s__28586__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28584,row_i,row,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28584,row_i,row,s__28542__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28541.call(null,cljs.core.rest.call(null,s__28542__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28538),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28540 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28540))?sablono.interpreter.attributes.call(null,attrs28540):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28540)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function iter__28597(s__28598){return (new cljs.core.LazySeq(null,((function (attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28598__$1 = s__28598;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28598__$1);if(temp__4126__auto__)
{var s__28598__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28598__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28598__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28600 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28599 = (0);while(true){
if((i__28599 < size__4376__auto__))
{var vec__28627 = cljs.core._nth.call(null,c__4375__auto__,i__28599);var row_i = cljs.core.nth.call(null,vec__28627,(0),null);var row = cljs.core.nth.call(null,vec__28627,(1),null);cljs.core.chunk_append.call(null,b__28600,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28599,vec__28627,row_i,row,c__4375__auto__,size__4376__auto__,b__28600,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function iter__28628(s__28629){return (new cljs.core.LazySeq(null,((function (i__28599,vec__28627,row_i,row,c__4375__auto__,size__4376__auto__,b__28600,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28629__$1 = s__28629;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28629__$1);if(temp__4126__auto____$1)
{var s__28629__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28629__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28629__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28631 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28630 = (0);while(true){
if((i__28630 < size__4376__auto____$1))
{var vec__28636 = cljs.core._nth.call(null,c__4375__auto____$1,i__28630);var col_i = cljs.core.nth.call(null,vec__28636,(0),null);var col = cljs.core.nth.call(null,vec__28636,(1),null);cljs.core.chunk_append.call(null,b__28631,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28637__$1 = (((G__28637 == null))?null:cljs.core.get.call(null,rowcol,G__28637));var G__28637__$2 = (((G__28637__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28637__$1));var G__28637__$3 = (((G__28637__$2 == null))?null:render_fn__$1.call(null,G__28637__$2));return G__28637__$3;
})():null)], null)));
{
var G__28656 = (i__28630 + (1));
i__28630 = G__28656;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28631),iter__28628.call(null,cljs.core.chunk_rest.call(null,s__28629__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28631),null);
}
} else
{var vec__28638 = cljs.core.first.call(null,s__28629__$2);var col_i = cljs.core.nth.call(null,vec__28638,(0),null);var col = cljs.core.nth.call(null,vec__28638,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28639__$1 = (((G__28639 == null))?null:cljs.core.get.call(null,rowcol,G__28639));var G__28639__$2 = (((G__28639__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28639__$1));var G__28639__$3 = (((G__28639__$2 == null))?null:render_fn__$1.call(null,G__28639__$2));return G__28639__$3;
})():null)], null)),iter__28628.call(null,cljs.core.rest.call(null,s__28629__$2)));
}
} else
{return null;
}
break;
}
});})(i__28599,vec__28627,row_i,row,c__4375__auto__,size__4376__auto__,b__28600,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28599,vec__28627,row_i,row,c__4375__auto__,size__4376__auto__,b__28600,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28657 = (i__28599 + (1));
i__28599 = G__28657;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28600),iter__28597.call(null,cljs.core.chunk_rest.call(null,s__28598__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28600),null);
}
} else
{var vec__28640 = cljs.core.first.call(null,s__28598__$2);var row_i = cljs.core.nth.call(null,vec__28640,(0),null);var row = cljs.core.nth.call(null,vec__28640,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28640,row_i,row,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function iter__28641(s__28642){return (new cljs.core.LazySeq(null,((function (vec__28640,row_i,row,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28642__$1 = s__28642;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28642__$1);if(temp__4126__auto____$1)
{var s__28642__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28642__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28642__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28644 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28643 = (0);while(true){
if((i__28643 < size__4376__auto__))
{var vec__28649 = cljs.core._nth.call(null,c__4375__auto__,i__28643);var col_i = cljs.core.nth.call(null,vec__28649,(0),null);var col = cljs.core.nth.call(null,vec__28649,(1),null);cljs.core.chunk_append.call(null,b__28644,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28650__$1 = (((G__28650 == null))?null:cljs.core.get.call(null,rowcol,G__28650));var G__28650__$2 = (((G__28650__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28650__$1));var G__28650__$3 = (((G__28650__$2 == null))?null:render_fn__$1.call(null,G__28650__$2));return G__28650__$3;
})():null)], null)));
{
var G__28658 = (i__28643 + (1));
i__28643 = G__28658;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28644),iter__28641.call(null,cljs.core.chunk_rest.call(null,s__28642__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28644),null);
}
} else
{var vec__28651 = cljs.core.first.call(null,s__28642__$2);var col_i = cljs.core.nth.call(null,vec__28651,(0),null);var col = cljs.core.nth.call(null,vec__28651,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28652__$1 = (((G__28652 == null))?null:cljs.core.get.call(null,rowcol,G__28652));var G__28652__$2 = (((G__28652__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28652__$1));var G__28652__$3 = (((G__28652__$2 == null))?null:render_fn__$1.call(null,G__28652__$2));return G__28652__$3;
})():null)], null)),iter__28641.call(null,cljs.core.rest.call(null,s__28642__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28640,row_i,row,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28640,row_i,row,s__28598__$2,temp__4126__auto__,attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28597.call(null,cljs.core.rest.call(null,s__28598__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28538,rowcol,render_fn__$1,map__28535,map__28535__$1,map__28536,map__28536__$1,table_data,query,results,map__28537,map__28537__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28659,owner){var map__28704 = p__28659;var map__28704__$1 = ((cljs.core.seq_QMARK_.call(null,map__28704))?cljs.core.apply.call(null,cljs.core.hash_map,map__28704):map__28704);var props = map__28704__$1;var map__28705 = cljs.core.get.call(null,map__28704__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28705__$1 = ((cljs.core.seq_QMARK_.call(null,map__28705))?cljs.core.apply.call(null,cljs.core.hash_map,map__28705):map__28705);var table_state = map__28705__$1;var table_data = cljs.core.get.call(null,map__28705__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28706 = cljs.core.get.call(null,map__28705__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28706__$1 = ((cljs.core.seq_QMARK_.call(null,map__28706))?cljs.core.apply.call(null,cljs.core.hash_map,map__28706):map__28706);var controls = map__28706__$1;var index_type = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28704__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28707 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28707 = (function (map__28705,index_type,map__28706,row_aggs,owner,metric_path,p__28659,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,map__28704,col_aggs,title,rows,cols,meta28708){
this.map__28705 = map__28705;
this.index_type = index_type;
this.map__28706 = map__28706;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.p__28659 = p__28659;
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
this.map__28704 = map__28704;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta28708 = meta28708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28707.cljs$lang$type = true;
clustermap.components.ranges_table.t28707.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28707";
clustermap.components.ranges_table.t28707.cljs$lang$ctorPrWriter = ((function (map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28707");
});})(map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28707.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28707.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28710,p__28711){var self__ = this;
var map__28712 = p__28710;var map__28712__$1 = ((cljs.core.seq_QMARK_.call(null,map__28712))?cljs.core.apply.call(null,cljs.core.hash_map,map__28712):map__28712);var next_props = map__28712__$1;var map__28713 = cljs.core.get.call(null,map__28712__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28713__$1 = ((cljs.core.seq_QMARK_.call(null,map__28713))?cljs.core.apply.call(null,cljs.core.hash_map,map__28713):map__28713);var next_table_state = map__28713__$1;var next_table_data = cljs.core.get.call(null,map__28713__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28714 = cljs.core.get.call(null,map__28713__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28714__$1 = ((cljs.core.seq_QMARK_.call(null,map__28714))?cljs.core.apply.call(null,cljs.core.hash_map,map__28714):map__28714);var next_controls = map__28714__$1;var next_col_aggs = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28714__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28712__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28715 = p__28711;var map__28715__$1 = ((cljs.core.seq_QMARK_.call(null,map__28715))?cljs.core.apply.call(null,cljs.core.hash_map,map__28715):map__28715);var fetch_data_fn = cljs.core.get.call(null,map__28715__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28712,map__28712__$1,next_props,map__28713,map__28713__$1,next_table_state,next_table_data,map__28714,map__28714__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28715,map__28715__$1,fetch_data_fn,map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28712,map__28712__$1,next_props,map__28713,map__28713__$1,next_table_state,next_table_data,map__28714,map__28714__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28715,map__28715__$1,fetch_data_fn,map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28733){var state_val_28734 = (state_28733[(1)]);if((state_val_28734 === (5)))
{var inst_28731 = (state_28733[(2)]);var state_28733__$1 = state_28733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28733__$1,inst_28731);
} else
{if((state_val_28734 === (4)))
{var state_28733__$1 = state_28733;var statearr_28735_28748 = state_28733__$1;(statearr_28735_28748[(2)] = null);
(statearr_28735_28748[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28734 === (3)))
{var inst_28718 = (state_28733[(7)]);var inst_28720 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28721 = ["RANGES-TABLE-DATA",inst_28718];var inst_28722 = (new cljs.core.PersistentVector(null,2,(5),inst_28720,inst_28721,null));var inst_28723 = cljs.core.clj__GT_js.call(null,inst_28722);var inst_28724 = console.log(inst_28723);var inst_28725 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28726 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28727 = (new cljs.core.PersistentVector(null,1,(5),inst_28725,inst_28726,null));var inst_28728 = om.core.update_BANG_.call(null,self__.table_state,inst_28727,inst_28718);var state_28733__$1 = (function (){var statearr_28736 = state_28733;(statearr_28736[(8)] = inst_28724);
return statearr_28736;
})();var statearr_28737_28749 = state_28733__$1;(statearr_28737_28749[(2)] = inst_28728);
(statearr_28737_28749[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28734 === (2)))
{var inst_28718 = (state_28733[(7)]);var inst_28718__$1 = (state_28733[(2)]);var state_28733__$1 = (function (){var statearr_28738 = state_28733;(statearr_28738[(7)] = inst_28718__$1);
return statearr_28738;
})();if(cljs.core.truth_(inst_28718__$1))
{var statearr_28739_28750 = state_28733__$1;(statearr_28739_28750[(1)] = (3));
} else
{var statearr_28740_28751 = state_28733__$1;(statearr_28740_28751[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28734 === (1)))
{var inst_28716 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28733__$1 = state_28733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28733__$1,(2),inst_28716);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28712,map__28712__$1,next_props,map__28713,map__28713__$1,next_table_state,next_table_data,map__28714,map__28714__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28715,map__28715__$1,fetch_data_fn,map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28712,map__28712__$1,next_props,map__28713,map__28713__$1,next_table_state,next_table_data,map__28714,map__28714__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28715,map__28715__$1,fetch_data_fn,map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28744 = [null,null,null,null,null,null,null,null,null];(statearr_28744[(0)] = state_machine__9111__auto__);
(statearr_28744[(1)] = (1));
return statearr_28744;
});
var state_machine__9111__auto____1 = (function (state_28733){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28733);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28745){if((e28745 instanceof Object))
{var ex__9114__auto__ = e28745;var statearr_28746_28752 = state_28733;(statearr_28746_28752[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28745;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28753 = state_28733;
state_28733 = G__28753;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28733){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28712,map__28712__$1,next_props,map__28713,map__28713__$1,next_table_state,next_table_data,map__28714,map__28714__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28715,map__28715__$1,fetch_data_fn,map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28747 = f__9126__auto__.call(null);(statearr_28747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28712,map__28712__$1,next_props,map__28713,map__28713__$1,next_table_state,next_table_data,map__28714,map__28714__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28715,map__28715__$1,fetch_data_fn,map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28707.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28707.prototype.om$core$IRender$render$arity$1 = ((function (map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28707.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28707.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28709){var self__ = this;
var _28709__$1 = this;return self__.meta28708;
});})(map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28709,meta28708__$1){var self__ = this;
var _28709__$1 = this;return (new clustermap.components.ranges_table.t28707(self__.map__28705,self__.index_type,self__.map__28706,self__.row_aggs,self__.owner,self__.metric_path,self__.p__28659,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.map__28704,self__.col_aggs,self__.title,self__.rows,self__.cols,meta28708__$1));
});})(map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28707 = ((function (map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28707(map__28705__$2,index_type__$1,map__28706__$2,row_aggs__$1,owner__$1,metric_path__$1,p__28659__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,map__28704__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,meta28708){return (new clustermap.components.ranges_table.t28707(map__28705__$2,index_type__$1,map__28706__$2,row_aggs__$1,owner__$1,metric_path__$1,p__28659__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,map__28704__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,meta28708));
});})(map__28704,map__28704__$1,props,map__28705,map__28705__$1,table_state,table_data,map__28706,map__28706__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28707(map__28705__$1,index_type,map__28706__$1,row_aggs,owner,metric_path,p__28659,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,map__28704__$1,col_aggs,title,rows,cols,null));
});
