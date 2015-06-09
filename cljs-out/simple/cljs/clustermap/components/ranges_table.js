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
clustermap.components.ranges_table.render_table = (function render_table(p__28185,owner,opts){var map__28304 = p__28185;var map__28304__$1 = ((cljs.core.seq_QMARK_.call(null,map__28304))?cljs.core.apply.call(null,cljs.core.hash_map,map__28304):map__28304);var map__28305 = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28305__$1 = ((cljs.core.seq_QMARK_.call(null,map__28305))?cljs.core.apply.call(null,cljs.core.hash_map,map__28305):map__28305);var table_data = map__28305__$1;var query = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28306 = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28306__$1 = ((cljs.core.seq_QMARK_.call(null,map__28306))?cljs.core.apply.call(null,cljs.core.hash_map,map__28306):map__28306);var controls = map__28306__$1;var title = cljs.core.get.call(null,map__28306__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28306__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28306__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28306__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28307 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28307))?sablono.interpreter.attributes.call(null,attrs28307):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28307))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28308 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28308))?sablono.interpreter.attributes.call(null,attrs28308):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28308))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28308)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function iter__28310(s__28311){return (new cljs.core.LazySeq(null,((function (attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28311__$1 = s__28311;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28311__$1);if(temp__4126__auto__)
{var s__28311__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28311__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28311__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28313 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28312 = (0);while(true){
if((i__28312 < size__4376__auto__))
{var vec__28340 = cljs.core._nth.call(null,c__4375__auto__,i__28312);var row_i = cljs.core.nth.call(null,vec__28340,(0),null);var row = cljs.core.nth.call(null,vec__28340,(1),null);cljs.core.chunk_append.call(null,b__28313,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28312,vec__28340,row_i,row,c__4375__auto__,size__4376__auto__,b__28313,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function iter__28341(s__28342){return (new cljs.core.LazySeq(null,((function (i__28312,vec__28340,row_i,row,c__4375__auto__,size__4376__auto__,b__28313,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28342__$1 = s__28342;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28342__$1);if(temp__4126__auto____$1)
{var s__28342__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28342__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28342__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28344 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28343 = (0);while(true){
if((i__28343 < size__4376__auto____$1))
{var vec__28349 = cljs.core._nth.call(null,c__4375__auto____$1,i__28343);var col_i = cljs.core.nth.call(null,vec__28349,(0),null);var col = cljs.core.nth.call(null,vec__28349,(1),null);cljs.core.chunk_append.call(null,b__28344,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28350__$1 = (((G__28350 == null))?null:cljs.core.get.call(null,rowcol,G__28350));var G__28350__$2 = (((G__28350__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28350__$1));var G__28350__$3 = (((G__28350__$2 == null))?null:render_fn__$1.call(null,G__28350__$2));return G__28350__$3;
})():null)], null)));
{
var G__28422 = (i__28343 + (1));
i__28343 = G__28422;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28344),iter__28341.call(null,cljs.core.chunk_rest.call(null,s__28342__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28344),null);
}
} else
{var vec__28351 = cljs.core.first.call(null,s__28342__$2);var col_i = cljs.core.nth.call(null,vec__28351,(0),null);var col = cljs.core.nth.call(null,vec__28351,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28352__$1 = (((G__28352 == null))?null:cljs.core.get.call(null,rowcol,G__28352));var G__28352__$2 = (((G__28352__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28352__$1));var G__28352__$3 = (((G__28352__$2 == null))?null:render_fn__$1.call(null,G__28352__$2));return G__28352__$3;
})():null)], null)),iter__28341.call(null,cljs.core.rest.call(null,s__28342__$2)));
}
} else
{return null;
}
break;
}
});})(i__28312,vec__28340,row_i,row,c__4375__auto__,size__4376__auto__,b__28313,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28312,vec__28340,row_i,row,c__4375__auto__,size__4376__auto__,b__28313,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28423 = (i__28312 + (1));
i__28312 = G__28423;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28313),iter__28310.call(null,cljs.core.chunk_rest.call(null,s__28311__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28313),null);
}
} else
{var vec__28353 = cljs.core.first.call(null,s__28311__$2);var row_i = cljs.core.nth.call(null,vec__28353,(0),null);var row = cljs.core.nth.call(null,vec__28353,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28353,row_i,row,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function iter__28354(s__28355){return (new cljs.core.LazySeq(null,((function (vec__28353,row_i,row,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28355__$1 = s__28355;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28355__$1);if(temp__4126__auto____$1)
{var s__28355__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28355__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28355__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28357 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28356 = (0);while(true){
if((i__28356 < size__4376__auto__))
{var vec__28362 = cljs.core._nth.call(null,c__4375__auto__,i__28356);var col_i = cljs.core.nth.call(null,vec__28362,(0),null);var col = cljs.core.nth.call(null,vec__28362,(1),null);cljs.core.chunk_append.call(null,b__28357,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28363__$1 = (((G__28363 == null))?null:cljs.core.get.call(null,rowcol,G__28363));var G__28363__$2 = (((G__28363__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28363__$1));var G__28363__$3 = (((G__28363__$2 == null))?null:render_fn__$1.call(null,G__28363__$2));return G__28363__$3;
})():null)], null)));
{
var G__28424 = (i__28356 + (1));
i__28356 = G__28424;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28357),iter__28354.call(null,cljs.core.chunk_rest.call(null,s__28355__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28357),null);
}
} else
{var vec__28364 = cljs.core.first.call(null,s__28355__$2);var col_i = cljs.core.nth.call(null,vec__28364,(0),null);var col = cljs.core.nth.call(null,vec__28364,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28365__$1 = (((G__28365 == null))?null:cljs.core.get.call(null,rowcol,G__28365));var G__28365__$2 = (((G__28365__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28365__$1));var G__28365__$3 = (((G__28365__$2 == null))?null:render_fn__$1.call(null,G__28365__$2));return G__28365__$3;
})():null)], null)),iter__28354.call(null,cljs.core.rest.call(null,s__28355__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28353,row_i,row,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28353,row_i,row,s__28311__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28310.call(null,cljs.core.rest.call(null,s__28311__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28307),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28309 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28309))?sablono.interpreter.attributes.call(null,attrs28309):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28309))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28309)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function iter__28366(s__28367){return (new cljs.core.LazySeq(null,((function (attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28367__$1 = s__28367;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28367__$1);if(temp__4126__auto__)
{var s__28367__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28367__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28367__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28369 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28368 = (0);while(true){
if((i__28368 < size__4376__auto__))
{var vec__28396 = cljs.core._nth.call(null,c__4375__auto__,i__28368);var row_i = cljs.core.nth.call(null,vec__28396,(0),null);var row = cljs.core.nth.call(null,vec__28396,(1),null);cljs.core.chunk_append.call(null,b__28369,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28368,vec__28396,row_i,row,c__4375__auto__,size__4376__auto__,b__28369,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function iter__28397(s__28398){return (new cljs.core.LazySeq(null,((function (i__28368,vec__28396,row_i,row,c__4375__auto__,size__4376__auto__,b__28369,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28398__$1 = s__28398;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28398__$1);if(temp__4126__auto____$1)
{var s__28398__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28398__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28398__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28400 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28399 = (0);while(true){
if((i__28399 < size__4376__auto____$1))
{var vec__28405 = cljs.core._nth.call(null,c__4375__auto____$1,i__28399);var col_i = cljs.core.nth.call(null,vec__28405,(0),null);var col = cljs.core.nth.call(null,vec__28405,(1),null);cljs.core.chunk_append.call(null,b__28400,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28406__$1 = (((G__28406 == null))?null:cljs.core.get.call(null,rowcol,G__28406));var G__28406__$2 = (((G__28406__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28406__$1));var G__28406__$3 = (((G__28406__$2 == null))?null:render_fn__$1.call(null,G__28406__$2));return G__28406__$3;
})():null)], null)));
{
var G__28425 = (i__28399 + (1));
i__28399 = G__28425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28400),iter__28397.call(null,cljs.core.chunk_rest.call(null,s__28398__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28400),null);
}
} else
{var vec__28407 = cljs.core.first.call(null,s__28398__$2);var col_i = cljs.core.nth.call(null,vec__28407,(0),null);var col = cljs.core.nth.call(null,vec__28407,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28408__$1 = (((G__28408 == null))?null:cljs.core.get.call(null,rowcol,G__28408));var G__28408__$2 = (((G__28408__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28408__$1));var G__28408__$3 = (((G__28408__$2 == null))?null:render_fn__$1.call(null,G__28408__$2));return G__28408__$3;
})():null)], null)),iter__28397.call(null,cljs.core.rest.call(null,s__28398__$2)));
}
} else
{return null;
}
break;
}
});})(i__28368,vec__28396,row_i,row,c__4375__auto__,size__4376__auto__,b__28369,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28368,vec__28396,row_i,row,c__4375__auto__,size__4376__auto__,b__28369,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28426 = (i__28368 + (1));
i__28368 = G__28426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28369),iter__28366.call(null,cljs.core.chunk_rest.call(null,s__28367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28369),null);
}
} else
{var vec__28409 = cljs.core.first.call(null,s__28367__$2);var row_i = cljs.core.nth.call(null,vec__28409,(0),null);var row = cljs.core.nth.call(null,vec__28409,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28409,row_i,row,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function iter__28410(s__28411){return (new cljs.core.LazySeq(null,((function (vec__28409,row_i,row,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28411__$1 = s__28411;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28411__$1);if(temp__4126__auto____$1)
{var s__28411__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28411__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28411__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28413 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28412 = (0);while(true){
if((i__28412 < size__4376__auto__))
{var vec__28418 = cljs.core._nth.call(null,c__4375__auto__,i__28412);var col_i = cljs.core.nth.call(null,vec__28418,(0),null);var col = cljs.core.nth.call(null,vec__28418,(1),null);cljs.core.chunk_append.call(null,b__28413,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28419__$1 = (((G__28419 == null))?null:cljs.core.get.call(null,rowcol,G__28419));var G__28419__$2 = (((G__28419__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28419__$1));var G__28419__$3 = (((G__28419__$2 == null))?null:render_fn__$1.call(null,G__28419__$2));return G__28419__$3;
})():null)], null)));
{
var G__28427 = (i__28412 + (1));
i__28412 = G__28427;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28413),iter__28410.call(null,cljs.core.chunk_rest.call(null,s__28411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28413),null);
}
} else
{var vec__28420 = cljs.core.first.call(null,s__28411__$2);var col_i = cljs.core.nth.call(null,vec__28420,(0),null);var col = cljs.core.nth.call(null,vec__28420,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28421__$1 = (((G__28421 == null))?null:cljs.core.get.call(null,rowcol,G__28421));var G__28421__$2 = (((G__28421__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28421__$1));var G__28421__$3 = (((G__28421__$2 == null))?null:render_fn__$1.call(null,G__28421__$2));return G__28421__$3;
})():null)], null)),iter__28410.call(null,cljs.core.rest.call(null,s__28411__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28409,row_i,row,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28409,row_i,row,s__28367__$2,temp__4126__auto__,attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28366.call(null,cljs.core.rest.call(null,s__28367__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28307,rowcol,render_fn__$1,map__28304,map__28304__$1,map__28305,map__28305__$1,table_data,query,results,map__28306,map__28306__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28428,owner){var map__28473 = p__28428;var map__28473__$1 = ((cljs.core.seq_QMARK_.call(null,map__28473))?cljs.core.apply.call(null,cljs.core.hash_map,map__28473):map__28473);var props = map__28473__$1;var map__28474 = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28474__$1 = ((cljs.core.seq_QMARK_.call(null,map__28474))?cljs.core.apply.call(null,cljs.core.hash_map,map__28474):map__28474);var table_state = map__28474__$1;var table_data = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28475 = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28475__$1 = ((cljs.core.seq_QMARK_.call(null,map__28475))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);var controls = map__28475__$1;var index_type = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28473__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28476 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28476 = (function (index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,map__28475,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,p__28428,map__28474,map__28473,meta28477){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.map__28475 = map__28475;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.p__28428 = p__28428;
this.map__28474 = map__28474;
this.map__28473 = map__28473;
this.meta28477 = meta28477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28476.cljs$lang$type = true;
clustermap.components.ranges_table.t28476.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28476";
clustermap.components.ranges_table.t28476.cljs$lang$ctorPrWriter = ((function (map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28476");
});})(map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28476.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28476.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28479,p__28480){var self__ = this;
var map__28481 = p__28479;var map__28481__$1 = ((cljs.core.seq_QMARK_.call(null,map__28481))?cljs.core.apply.call(null,cljs.core.hash_map,map__28481):map__28481);var next_props = map__28481__$1;var map__28482 = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28482__$1 = ((cljs.core.seq_QMARK_.call(null,map__28482))?cljs.core.apply.call(null,cljs.core.hash_map,map__28482):map__28482);var next_table_state = map__28482__$1;var next_table_data = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28483 = cljs.core.get.call(null,map__28482__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28483__$1 = ((cljs.core.seq_QMARK_.call(null,map__28483))?cljs.core.apply.call(null,cljs.core.hash_map,map__28483):map__28483);var next_controls = map__28483__$1;var next_col_aggs = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28484 = p__28480;var map__28484__$1 = ((cljs.core.seq_QMARK_.call(null,map__28484))?cljs.core.apply.call(null,cljs.core.hash_map,map__28484):map__28484);var fetch_data_fn = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28481,map__28481__$1,next_props,map__28482,map__28482__$1,next_table_state,next_table_data,map__28483,map__28483__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28484,map__28484__$1,fetch_data_fn,map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28481,map__28481__$1,next_props,map__28482,map__28482__$1,next_table_state,next_table_data,map__28483,map__28483__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28484,map__28484__$1,fetch_data_fn,map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28502){var state_val_28503 = (state_28502[(1)]);if((state_val_28503 === (5)))
{var inst_28500 = (state_28502[(2)]);var state_28502__$1 = state_28502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28502__$1,inst_28500);
} else
{if((state_val_28503 === (4)))
{var state_28502__$1 = state_28502;var statearr_28504_28517 = state_28502__$1;(statearr_28504_28517[(2)] = null);
(statearr_28504_28517[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (3)))
{var inst_28487 = (state_28502[(7)]);var inst_28489 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28490 = ["RANGES-TABLE-DATA",inst_28487];var inst_28491 = (new cljs.core.PersistentVector(null,2,(5),inst_28489,inst_28490,null));var inst_28492 = cljs.core.clj__GT_js.call(null,inst_28491);var inst_28493 = console.log(inst_28492);var inst_28494 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28495 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28496 = (new cljs.core.PersistentVector(null,1,(5),inst_28494,inst_28495,null));var inst_28497 = om.core.update_BANG_.call(null,self__.table_state,inst_28496,inst_28487);var state_28502__$1 = (function (){var statearr_28505 = state_28502;(statearr_28505[(8)] = inst_28493);
return statearr_28505;
})();var statearr_28506_28518 = state_28502__$1;(statearr_28506_28518[(2)] = inst_28497);
(statearr_28506_28518[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (2)))
{var inst_28487 = (state_28502[(7)]);var inst_28487__$1 = (state_28502[(2)]);var state_28502__$1 = (function (){var statearr_28507 = state_28502;(statearr_28507[(7)] = inst_28487__$1);
return statearr_28507;
})();if(cljs.core.truth_(inst_28487__$1))
{var statearr_28508_28519 = state_28502__$1;(statearr_28508_28519[(1)] = (3));
} else
{var statearr_28509_28520 = state_28502__$1;(statearr_28509_28520[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (1)))
{var inst_28485 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28502__$1 = state_28502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28502__$1,(2),inst_28485);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28481,map__28481__$1,next_props,map__28482,map__28482__$1,next_table_state,next_table_data,map__28483,map__28483__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28484,map__28484__$1,fetch_data_fn,map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28481,map__28481__$1,next_props,map__28482,map__28482__$1,next_table_state,next_table_data,map__28483,map__28483__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28484,map__28484__$1,fetch_data_fn,map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28513 = [null,null,null,null,null,null,null,null,null];(statearr_28513[(0)] = state_machine__9111__auto__);
(statearr_28513[(1)] = (1));
return statearr_28513;
});
var state_machine__9111__auto____1 = (function (state_28502){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28502);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28514){if((e28514 instanceof Object))
{var ex__9114__auto__ = e28514;var statearr_28515_28521 = state_28502;(statearr_28515_28521[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28522 = state_28502;
state_28502 = G__28522;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28502){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28481,map__28481__$1,next_props,map__28482,map__28482__$1,next_table_state,next_table_data,map__28483,map__28483__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28484,map__28484__$1,fetch_data_fn,map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28516 = f__9126__auto__.call(null);(statearr_28516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28481,map__28481__$1,next_props,map__28482,map__28482__$1,next_table_state,next_table_data,map__28483,map__28483__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28484,map__28484__$1,fetch_data_fn,map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28476.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28476.prototype.om$core$IRender$render$arity$1 = ((function (map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28476.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28476.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28478){var self__ = this;
var _28478__$1 = this;return self__.meta28477;
});})(map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28478,meta28477__$1){var self__ = this;
var _28478__$1 = this;return (new clustermap.components.ranges_table.t28476(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.map__28475,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.p__28428,self__.map__28474,self__.map__28473,meta28477__$1));
});})(map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28476 = ((function (map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28476(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,map__28475__$2,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,p__28428__$1,map__28474__$2,map__28473__$2,meta28477){return (new clustermap.components.ranges_table.t28476(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,map__28475__$2,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,p__28428__$1,map__28474__$2,map__28473__$2,meta28477));
});})(map__28473,map__28473__$1,props,map__28474,map__28474__$1,table_state,table_data,map__28475,map__28475__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28476(index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,map__28475__$1,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,p__28428,map__28474__$1,map__28473__$1,null));
});
