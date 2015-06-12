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
clustermap.components.ranges_table.render_table = (function render_table(p__28353,owner,opts){var map__28472 = p__28353;var map__28472__$1 = ((cljs.core.seq_QMARK_.call(null,map__28472))?cljs.core.apply.call(null,cljs.core.hash_map,map__28472):map__28472);var map__28473 = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28473__$1 = ((cljs.core.seq_QMARK_.call(null,map__28473))?cljs.core.apply.call(null,cljs.core.hash_map,map__28473):map__28473);var table_data = map__28473__$1;var query = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28474 = cljs.core.get.call(null,map__28472__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28474__$1 = ((cljs.core.seq_QMARK_.call(null,map__28474))?cljs.core.apply.call(null,cljs.core.hash_map,map__28474):map__28474);var controls = map__28474__$1;var title = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28475 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28475))?sablono.interpreter.attributes.call(null,attrs28475):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28475))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28476 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28476))?sablono.interpreter.attributes.call(null,attrs28476):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28476))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28476)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function iter__28478(s__28479){return (new cljs.core.LazySeq(null,((function (attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28479__$1 = s__28479;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28479__$1);if(temp__4126__auto__)
{var s__28479__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28479__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28479__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28481 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28480 = (0);while(true){
if((i__28480 < size__4376__auto__))
{var vec__28508 = cljs.core._nth.call(null,c__4375__auto__,i__28480);var row_i = cljs.core.nth.call(null,vec__28508,(0),null);var row = cljs.core.nth.call(null,vec__28508,(1),null);cljs.core.chunk_append.call(null,b__28481,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28480,vec__28508,row_i,row,c__4375__auto__,size__4376__auto__,b__28481,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function iter__28509(s__28510){return (new cljs.core.LazySeq(null,((function (i__28480,vec__28508,row_i,row,c__4375__auto__,size__4376__auto__,b__28481,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28510__$1 = s__28510;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28510__$1);if(temp__4126__auto____$1)
{var s__28510__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28510__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28510__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28512 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28511 = (0);while(true){
if((i__28511 < size__4376__auto____$1))
{var vec__28517 = cljs.core._nth.call(null,c__4375__auto____$1,i__28511);var col_i = cljs.core.nth.call(null,vec__28517,(0),null);var col = cljs.core.nth.call(null,vec__28517,(1),null);cljs.core.chunk_append.call(null,b__28512,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28518__$1 = (((G__28518 == null))?null:cljs.core.get.call(null,rowcol,G__28518));var G__28518__$2 = (((G__28518__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28518__$1));var G__28518__$3 = (((G__28518__$2 == null))?null:render_fn__$1.call(null,G__28518__$2));return G__28518__$3;
})():null)], null)));
{
var G__28590 = (i__28511 + (1));
i__28511 = G__28590;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28512),iter__28509.call(null,cljs.core.chunk_rest.call(null,s__28510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28512),null);
}
} else
{var vec__28519 = cljs.core.first.call(null,s__28510__$2);var col_i = cljs.core.nth.call(null,vec__28519,(0),null);var col = cljs.core.nth.call(null,vec__28519,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28520__$1 = (((G__28520 == null))?null:cljs.core.get.call(null,rowcol,G__28520));var G__28520__$2 = (((G__28520__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28520__$1));var G__28520__$3 = (((G__28520__$2 == null))?null:render_fn__$1.call(null,G__28520__$2));return G__28520__$3;
})():null)], null)),iter__28509.call(null,cljs.core.rest.call(null,s__28510__$2)));
}
} else
{return null;
}
break;
}
});})(i__28480,vec__28508,row_i,row,c__4375__auto__,size__4376__auto__,b__28481,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28480,vec__28508,row_i,row,c__4375__auto__,size__4376__auto__,b__28481,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28591 = (i__28480 + (1));
i__28480 = G__28591;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28481),iter__28478.call(null,cljs.core.chunk_rest.call(null,s__28479__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28481),null);
}
} else
{var vec__28521 = cljs.core.first.call(null,s__28479__$2);var row_i = cljs.core.nth.call(null,vec__28521,(0),null);var row = cljs.core.nth.call(null,vec__28521,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28521,row_i,row,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function iter__28522(s__28523){return (new cljs.core.LazySeq(null,((function (vec__28521,row_i,row,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28523__$1 = s__28523;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28523__$1);if(temp__4126__auto____$1)
{var s__28523__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28523__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28523__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28525 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28524 = (0);while(true){
if((i__28524 < size__4376__auto__))
{var vec__28530 = cljs.core._nth.call(null,c__4375__auto__,i__28524);var col_i = cljs.core.nth.call(null,vec__28530,(0),null);var col = cljs.core.nth.call(null,vec__28530,(1),null);cljs.core.chunk_append.call(null,b__28525,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28531__$1 = (((G__28531 == null))?null:cljs.core.get.call(null,rowcol,G__28531));var G__28531__$2 = (((G__28531__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28531__$1));var G__28531__$3 = (((G__28531__$2 == null))?null:render_fn__$1.call(null,G__28531__$2));return G__28531__$3;
})():null)], null)));
{
var G__28592 = (i__28524 + (1));
i__28524 = G__28592;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28525),iter__28522.call(null,cljs.core.chunk_rest.call(null,s__28523__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28525),null);
}
} else
{var vec__28532 = cljs.core.first.call(null,s__28523__$2);var col_i = cljs.core.nth.call(null,vec__28532,(0),null);var col = cljs.core.nth.call(null,vec__28532,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28533__$1 = (((G__28533 == null))?null:cljs.core.get.call(null,rowcol,G__28533));var G__28533__$2 = (((G__28533__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28533__$1));var G__28533__$3 = (((G__28533__$2 == null))?null:render_fn__$1.call(null,G__28533__$2));return G__28533__$3;
})():null)], null)),iter__28522.call(null,cljs.core.rest.call(null,s__28523__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28521,row_i,row,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28521,row_i,row,s__28479__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28478.call(null,cljs.core.rest.call(null,s__28479__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28475),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28477 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28477))?sablono.interpreter.attributes.call(null,attrs28477):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28477))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28477)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function iter__28534(s__28535){return (new cljs.core.LazySeq(null,((function (attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28535__$1 = s__28535;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28535__$1);if(temp__4126__auto__)
{var s__28535__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28535__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28535__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28537 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28536 = (0);while(true){
if((i__28536 < size__4376__auto__))
{var vec__28564 = cljs.core._nth.call(null,c__4375__auto__,i__28536);var row_i = cljs.core.nth.call(null,vec__28564,(0),null);var row = cljs.core.nth.call(null,vec__28564,(1),null);cljs.core.chunk_append.call(null,b__28537,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28536,vec__28564,row_i,row,c__4375__auto__,size__4376__auto__,b__28537,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function iter__28565(s__28566){return (new cljs.core.LazySeq(null,((function (i__28536,vec__28564,row_i,row,c__4375__auto__,size__4376__auto__,b__28537,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28566__$1 = s__28566;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28566__$1);if(temp__4126__auto____$1)
{var s__28566__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28566__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28566__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28568 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28567 = (0);while(true){
if((i__28567 < size__4376__auto____$1))
{var vec__28573 = cljs.core._nth.call(null,c__4375__auto____$1,i__28567);var col_i = cljs.core.nth.call(null,vec__28573,(0),null);var col = cljs.core.nth.call(null,vec__28573,(1),null);cljs.core.chunk_append.call(null,b__28568,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28574__$1 = (((G__28574 == null))?null:cljs.core.get.call(null,rowcol,G__28574));var G__28574__$2 = (((G__28574__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28574__$1));var G__28574__$3 = (((G__28574__$2 == null))?null:render_fn__$1.call(null,G__28574__$2));return G__28574__$3;
})():null)], null)));
{
var G__28593 = (i__28567 + (1));
i__28567 = G__28593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28568),iter__28565.call(null,cljs.core.chunk_rest.call(null,s__28566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28568),null);
}
} else
{var vec__28575 = cljs.core.first.call(null,s__28566__$2);var col_i = cljs.core.nth.call(null,vec__28575,(0),null);var col = cljs.core.nth.call(null,vec__28575,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28576__$1 = (((G__28576 == null))?null:cljs.core.get.call(null,rowcol,G__28576));var G__28576__$2 = (((G__28576__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28576__$1));var G__28576__$3 = (((G__28576__$2 == null))?null:render_fn__$1.call(null,G__28576__$2));return G__28576__$3;
})():null)], null)),iter__28565.call(null,cljs.core.rest.call(null,s__28566__$2)));
}
} else
{return null;
}
break;
}
});})(i__28536,vec__28564,row_i,row,c__4375__auto__,size__4376__auto__,b__28537,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28536,vec__28564,row_i,row,c__4375__auto__,size__4376__auto__,b__28537,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28594 = (i__28536 + (1));
i__28536 = G__28594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28537),iter__28534.call(null,cljs.core.chunk_rest.call(null,s__28535__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28537),null);
}
} else
{var vec__28577 = cljs.core.first.call(null,s__28535__$2);var row_i = cljs.core.nth.call(null,vec__28577,(0),null);var row = cljs.core.nth.call(null,vec__28577,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28577,row_i,row,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function iter__28578(s__28579){return (new cljs.core.LazySeq(null,((function (vec__28577,row_i,row,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28579__$1 = s__28579;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28579__$1);if(temp__4126__auto____$1)
{var s__28579__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28579__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28579__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28581 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28580 = (0);while(true){
if((i__28580 < size__4376__auto__))
{var vec__28586 = cljs.core._nth.call(null,c__4375__auto__,i__28580);var col_i = cljs.core.nth.call(null,vec__28586,(0),null);var col = cljs.core.nth.call(null,vec__28586,(1),null);cljs.core.chunk_append.call(null,b__28581,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28587__$1 = (((G__28587 == null))?null:cljs.core.get.call(null,rowcol,G__28587));var G__28587__$2 = (((G__28587__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28587__$1));var G__28587__$3 = (((G__28587__$2 == null))?null:render_fn__$1.call(null,G__28587__$2));return G__28587__$3;
})():null)], null)));
{
var G__28595 = (i__28580 + (1));
i__28580 = G__28595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28581),iter__28578.call(null,cljs.core.chunk_rest.call(null,s__28579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28581),null);
}
} else
{var vec__28588 = cljs.core.first.call(null,s__28579__$2);var col_i = cljs.core.nth.call(null,vec__28588,(0),null);var col = cljs.core.nth.call(null,vec__28588,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28589__$1 = (((G__28589 == null))?null:cljs.core.get.call(null,rowcol,G__28589));var G__28589__$2 = (((G__28589__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28589__$1));var G__28589__$3 = (((G__28589__$2 == null))?null:render_fn__$1.call(null,G__28589__$2));return G__28589__$3;
})():null)], null)),iter__28578.call(null,cljs.core.rest.call(null,s__28579__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28577,row_i,row,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28577,row_i,row,s__28535__$2,temp__4126__auto__,attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28534.call(null,cljs.core.rest.call(null,s__28535__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28475,rowcol,render_fn__$1,map__28472,map__28472__$1,map__28473,map__28473__$1,table_data,query,results,map__28474,map__28474__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28596,owner){var map__28641 = p__28596;var map__28641__$1 = ((cljs.core.seq_QMARK_.call(null,map__28641))?cljs.core.apply.call(null,cljs.core.hash_map,map__28641):map__28641);var props = map__28641__$1;var map__28642 = cljs.core.get.call(null,map__28641__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28642__$1 = ((cljs.core.seq_QMARK_.call(null,map__28642))?cljs.core.apply.call(null,cljs.core.hash_map,map__28642):map__28642);var table_state = map__28642__$1;var table_data = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28643 = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28643__$1 = ((cljs.core.seq_QMARK_.call(null,map__28643))?cljs.core.apply.call(null,cljs.core.hash_map,map__28643):map__28643);var controls = map__28643__$1;var index_type = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28641__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28644 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28644 = (function (index_type,row_aggs,owner,metric_path,props,map__28642,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,p__28596,title,rows,cols,map__28641,map__28643,meta28645){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__28642 = map__28642;
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
this.p__28596 = p__28596;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28641 = map__28641;
this.map__28643 = map__28643;
this.meta28645 = meta28645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28644.cljs$lang$type = true;
clustermap.components.ranges_table.t28644.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28644";
clustermap.components.ranges_table.t28644.cljs$lang$ctorPrWriter = ((function (map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28644");
});})(map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28644.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28644.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28647,p__28648){var self__ = this;
var map__28649 = p__28647;var map__28649__$1 = ((cljs.core.seq_QMARK_.call(null,map__28649))?cljs.core.apply.call(null,cljs.core.hash_map,map__28649):map__28649);var next_props = map__28649__$1;var map__28650 = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28650__$1 = ((cljs.core.seq_QMARK_.call(null,map__28650))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);var next_table_state = map__28650__$1;var next_table_data = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28651 = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28651__$1 = ((cljs.core.seq_QMARK_.call(null,map__28651))?cljs.core.apply.call(null,cljs.core.hash_map,map__28651):map__28651);var next_controls = map__28651__$1;var next_col_aggs = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28652 = p__28648;var map__28652__$1 = ((cljs.core.seq_QMARK_.call(null,map__28652))?cljs.core.apply.call(null,cljs.core.hash_map,map__28652):map__28652);var fetch_data_fn = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28649,map__28649__$1,next_props,map__28650,map__28650__$1,next_table_state,next_table_data,map__28651,map__28651__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28652,map__28652__$1,fetch_data_fn,map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28649,map__28649__$1,next_props,map__28650,map__28650__$1,next_table_state,next_table_data,map__28651,map__28651__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28652,map__28652__$1,fetch_data_fn,map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28670){var state_val_28671 = (state_28670[(1)]);if((state_val_28671 === (5)))
{var inst_28668 = (state_28670[(2)]);var state_28670__$1 = state_28670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28670__$1,inst_28668);
} else
{if((state_val_28671 === (4)))
{var state_28670__$1 = state_28670;var statearr_28672_28685 = state_28670__$1;(statearr_28672_28685[(2)] = null);
(statearr_28672_28685[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28671 === (3)))
{var inst_28655 = (state_28670[(7)]);var inst_28657 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28658 = ["RANGES-TABLE-DATA",inst_28655];var inst_28659 = (new cljs.core.PersistentVector(null,2,(5),inst_28657,inst_28658,null));var inst_28660 = cljs.core.clj__GT_js.call(null,inst_28659);var inst_28661 = console.log(inst_28660);var inst_28662 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28663 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28664 = (new cljs.core.PersistentVector(null,1,(5),inst_28662,inst_28663,null));var inst_28665 = om.core.update_BANG_.call(null,self__.table_state,inst_28664,inst_28655);var state_28670__$1 = (function (){var statearr_28673 = state_28670;(statearr_28673[(8)] = inst_28661);
return statearr_28673;
})();var statearr_28674_28686 = state_28670__$1;(statearr_28674_28686[(2)] = inst_28665);
(statearr_28674_28686[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28671 === (2)))
{var inst_28655 = (state_28670[(7)]);var inst_28655__$1 = (state_28670[(2)]);var state_28670__$1 = (function (){var statearr_28675 = state_28670;(statearr_28675[(7)] = inst_28655__$1);
return statearr_28675;
})();if(cljs.core.truth_(inst_28655__$1))
{var statearr_28676_28687 = state_28670__$1;(statearr_28676_28687[(1)] = (3));
} else
{var statearr_28677_28688 = state_28670__$1;(statearr_28677_28688[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28671 === (1)))
{var inst_28653 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28670__$1 = state_28670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28670__$1,(2),inst_28653);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28649,map__28649__$1,next_props,map__28650,map__28650__$1,next_table_state,next_table_data,map__28651,map__28651__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28652,map__28652__$1,fetch_data_fn,map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28649,map__28649__$1,next_props,map__28650,map__28650__$1,next_table_state,next_table_data,map__28651,map__28651__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28652,map__28652__$1,fetch_data_fn,map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28681 = [null,null,null,null,null,null,null,null,null];(statearr_28681[(0)] = state_machine__9111__auto__);
(statearr_28681[(1)] = (1));
return statearr_28681;
});
var state_machine__9111__auto____1 = (function (state_28670){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28670);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28682){if((e28682 instanceof Object))
{var ex__9114__auto__ = e28682;var statearr_28683_28689 = state_28670;(statearr_28683_28689[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28682;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28690 = state_28670;
state_28670 = G__28690;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28670){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28649,map__28649__$1,next_props,map__28650,map__28650__$1,next_table_state,next_table_data,map__28651,map__28651__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28652,map__28652__$1,fetch_data_fn,map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28684 = f__9126__auto__.call(null);(statearr_28684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28649,map__28649__$1,next_props,map__28650,map__28650__$1,next_table_state,next_table_data,map__28651,map__28651__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28652,map__28652__$1,fetch_data_fn,map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28644.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28644.prototype.om$core$IRender$render$arity$1 = ((function (map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28644.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28644.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28646){var self__ = this;
var _28646__$1 = this;return self__.meta28645;
});})(map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28646,meta28645__$1){var self__ = this;
var _28646__$1 = this;return (new clustermap.components.ranges_table.t28644(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__28642,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.p__28596,self__.title,self__.rows,self__.cols,self__.map__28641,self__.map__28643,meta28645__$1));
});})(map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28644 = ((function (map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28644(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28642__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,p__28596__$1,title__$1,rows__$1,cols__$1,map__28641__$2,map__28643__$2,meta28645){return (new clustermap.components.ranges_table.t28644(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28642__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,p__28596__$1,title__$1,rows__$1,cols__$1,map__28641__$2,map__28643__$2,meta28645));
});})(map__28641,map__28641__$1,props,map__28642,map__28642__$1,table_state,table_data,map__28643,map__28643__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28644(index_type,row_aggs,owner,metric_path,props,map__28642__$1,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,p__28596,title,rows,cols,map__28641__$1,map__28643__$1,null));
});
