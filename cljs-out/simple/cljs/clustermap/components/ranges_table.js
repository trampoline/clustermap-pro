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
clustermap.components.ranges_table.render_table = (function render_table(p__27677,owner,opts){var map__27796 = p__27677;var map__27796__$1 = ((cljs.core.seq_QMARK_.call(null,map__27796))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);var map__27797 = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27797__$1 = ((cljs.core.seq_QMARK_.call(null,map__27797))?cljs.core.apply.call(null,cljs.core.hash_map,map__27797):map__27797);var table_data = map__27797__$1;var query = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27798 = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27798__$1 = ((cljs.core.seq_QMARK_.call(null,map__27798))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);var controls = map__27798__$1;var title = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27799 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27799))?sablono.interpreter.attributes.call(null,attrs27799):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27799))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27800 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27800))?sablono.interpreter.attributes.call(null,attrs27800):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27800))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27800)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function iter__27802(s__27803){return (new cljs.core.LazySeq(null,((function (attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27803__$1 = s__27803;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27803__$1);if(temp__4126__auto__)
{var s__27803__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27803__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27803__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27805 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27804 = (0);while(true){
if((i__27804 < size__4376__auto__))
{var vec__27832 = cljs.core._nth.call(null,c__4375__auto__,i__27804);var row_i = cljs.core.nth.call(null,vec__27832,(0),null);var row = cljs.core.nth.call(null,vec__27832,(1),null);cljs.core.chunk_append.call(null,b__27805,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27804,vec__27832,row_i,row,c__4375__auto__,size__4376__auto__,b__27805,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function iter__27833(s__27834){return (new cljs.core.LazySeq(null,((function (i__27804,vec__27832,row_i,row,c__4375__auto__,size__4376__auto__,b__27805,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27834__$1 = s__27834;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27834__$1);if(temp__4126__auto____$1)
{var s__27834__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27834__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27834__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27836 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27835 = (0);while(true){
if((i__27835 < size__4376__auto____$1))
{var vec__27841 = cljs.core._nth.call(null,c__4375__auto____$1,i__27835);var col_i = cljs.core.nth.call(null,vec__27841,(0),null);var col = cljs.core.nth.call(null,vec__27841,(1),null);cljs.core.chunk_append.call(null,b__27836,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27842__$1 = (((G__27842 == null))?null:cljs.core.get.call(null,rowcol,G__27842));var G__27842__$2 = (((G__27842__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27842__$1));var G__27842__$3 = (((G__27842__$2 == null))?null:render_fn__$1.call(null,G__27842__$2));return G__27842__$3;
})():null)], null)));
{
var G__27914 = (i__27835 + (1));
i__27835 = G__27914;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27836),iter__27833.call(null,cljs.core.chunk_rest.call(null,s__27834__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27836),null);
}
} else
{var vec__27843 = cljs.core.first.call(null,s__27834__$2);var col_i = cljs.core.nth.call(null,vec__27843,(0),null);var col = cljs.core.nth.call(null,vec__27843,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27844__$1 = (((G__27844 == null))?null:cljs.core.get.call(null,rowcol,G__27844));var G__27844__$2 = (((G__27844__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27844__$1));var G__27844__$3 = (((G__27844__$2 == null))?null:render_fn__$1.call(null,G__27844__$2));return G__27844__$3;
})():null)], null)),iter__27833.call(null,cljs.core.rest.call(null,s__27834__$2)));
}
} else
{return null;
}
break;
}
});})(i__27804,vec__27832,row_i,row,c__4375__auto__,size__4376__auto__,b__27805,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27804,vec__27832,row_i,row,c__4375__auto__,size__4376__auto__,b__27805,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27915 = (i__27804 + (1));
i__27804 = G__27915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27805),iter__27802.call(null,cljs.core.chunk_rest.call(null,s__27803__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27805),null);
}
} else
{var vec__27845 = cljs.core.first.call(null,s__27803__$2);var row_i = cljs.core.nth.call(null,vec__27845,(0),null);var row = cljs.core.nth.call(null,vec__27845,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27845,row_i,row,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function iter__27846(s__27847){return (new cljs.core.LazySeq(null,((function (vec__27845,row_i,row,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27847__$1 = s__27847;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27847__$1);if(temp__4126__auto____$1)
{var s__27847__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27847__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27847__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27849 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27848 = (0);while(true){
if((i__27848 < size__4376__auto__))
{var vec__27854 = cljs.core._nth.call(null,c__4375__auto__,i__27848);var col_i = cljs.core.nth.call(null,vec__27854,(0),null);var col = cljs.core.nth.call(null,vec__27854,(1),null);cljs.core.chunk_append.call(null,b__27849,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27855__$1 = (((G__27855 == null))?null:cljs.core.get.call(null,rowcol,G__27855));var G__27855__$2 = (((G__27855__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27855__$1));var G__27855__$3 = (((G__27855__$2 == null))?null:render_fn__$1.call(null,G__27855__$2));return G__27855__$3;
})():null)], null)));
{
var G__27916 = (i__27848 + (1));
i__27848 = G__27916;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27849),iter__27846.call(null,cljs.core.chunk_rest.call(null,s__27847__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27849),null);
}
} else
{var vec__27856 = cljs.core.first.call(null,s__27847__$2);var col_i = cljs.core.nth.call(null,vec__27856,(0),null);var col = cljs.core.nth.call(null,vec__27856,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27857__$1 = (((G__27857 == null))?null:cljs.core.get.call(null,rowcol,G__27857));var G__27857__$2 = (((G__27857__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27857__$1));var G__27857__$3 = (((G__27857__$2 == null))?null:render_fn__$1.call(null,G__27857__$2));return G__27857__$3;
})():null)], null)),iter__27846.call(null,cljs.core.rest.call(null,s__27847__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27845,row_i,row,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27845,row_i,row,s__27803__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27802.call(null,cljs.core.rest.call(null,s__27803__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27799),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27801 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27801))?sablono.interpreter.attributes.call(null,attrs27801):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27801))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27801)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function iter__27858(s__27859){return (new cljs.core.LazySeq(null,((function (attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27859__$1 = s__27859;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27859__$1);if(temp__4126__auto__)
{var s__27859__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27859__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27859__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27861 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27860 = (0);while(true){
if((i__27860 < size__4376__auto__))
{var vec__27888 = cljs.core._nth.call(null,c__4375__auto__,i__27860);var row_i = cljs.core.nth.call(null,vec__27888,(0),null);var row = cljs.core.nth.call(null,vec__27888,(1),null);cljs.core.chunk_append.call(null,b__27861,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27860,vec__27888,row_i,row,c__4375__auto__,size__4376__auto__,b__27861,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function iter__27889(s__27890){return (new cljs.core.LazySeq(null,((function (i__27860,vec__27888,row_i,row,c__4375__auto__,size__4376__auto__,b__27861,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27890__$1 = s__27890;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27890__$1);if(temp__4126__auto____$1)
{var s__27890__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27890__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27890__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27892 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27891 = (0);while(true){
if((i__27891 < size__4376__auto____$1))
{var vec__27897 = cljs.core._nth.call(null,c__4375__auto____$1,i__27891);var col_i = cljs.core.nth.call(null,vec__27897,(0),null);var col = cljs.core.nth.call(null,vec__27897,(1),null);cljs.core.chunk_append.call(null,b__27892,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27898__$1 = (((G__27898 == null))?null:cljs.core.get.call(null,rowcol,G__27898));var G__27898__$2 = (((G__27898__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27898__$1));var G__27898__$3 = (((G__27898__$2 == null))?null:render_fn__$1.call(null,G__27898__$2));return G__27898__$3;
})():null)], null)));
{
var G__27917 = (i__27891 + (1));
i__27891 = G__27917;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27892),iter__27889.call(null,cljs.core.chunk_rest.call(null,s__27890__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27892),null);
}
} else
{var vec__27899 = cljs.core.first.call(null,s__27890__$2);var col_i = cljs.core.nth.call(null,vec__27899,(0),null);var col = cljs.core.nth.call(null,vec__27899,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27900__$1 = (((G__27900 == null))?null:cljs.core.get.call(null,rowcol,G__27900));var G__27900__$2 = (((G__27900__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27900__$1));var G__27900__$3 = (((G__27900__$2 == null))?null:render_fn__$1.call(null,G__27900__$2));return G__27900__$3;
})():null)], null)),iter__27889.call(null,cljs.core.rest.call(null,s__27890__$2)));
}
} else
{return null;
}
break;
}
});})(i__27860,vec__27888,row_i,row,c__4375__auto__,size__4376__auto__,b__27861,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27860,vec__27888,row_i,row,c__4375__auto__,size__4376__auto__,b__27861,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27918 = (i__27860 + (1));
i__27860 = G__27918;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27861),iter__27858.call(null,cljs.core.chunk_rest.call(null,s__27859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27861),null);
}
} else
{var vec__27901 = cljs.core.first.call(null,s__27859__$2);var row_i = cljs.core.nth.call(null,vec__27901,(0),null);var row = cljs.core.nth.call(null,vec__27901,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27901,row_i,row,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function iter__27902(s__27903){return (new cljs.core.LazySeq(null,((function (vec__27901,row_i,row,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27903__$1 = s__27903;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27903__$1);if(temp__4126__auto____$1)
{var s__27903__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27903__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27903__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27905 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27904 = (0);while(true){
if((i__27904 < size__4376__auto__))
{var vec__27910 = cljs.core._nth.call(null,c__4375__auto__,i__27904);var col_i = cljs.core.nth.call(null,vec__27910,(0),null);var col = cljs.core.nth.call(null,vec__27910,(1),null);cljs.core.chunk_append.call(null,b__27905,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27911__$1 = (((G__27911 == null))?null:cljs.core.get.call(null,rowcol,G__27911));var G__27911__$2 = (((G__27911__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27911__$1));var G__27911__$3 = (((G__27911__$2 == null))?null:render_fn__$1.call(null,G__27911__$2));return G__27911__$3;
})():null)], null)));
{
var G__27919 = (i__27904 + (1));
i__27904 = G__27919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27905),iter__27902.call(null,cljs.core.chunk_rest.call(null,s__27903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27905),null);
}
} else
{var vec__27912 = cljs.core.first.call(null,s__27903__$2);var col_i = cljs.core.nth.call(null,vec__27912,(0),null);var col = cljs.core.nth.call(null,vec__27912,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27913__$1 = (((G__27913 == null))?null:cljs.core.get.call(null,rowcol,G__27913));var G__27913__$2 = (((G__27913__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27913__$1));var G__27913__$3 = (((G__27913__$2 == null))?null:render_fn__$1.call(null,G__27913__$2));return G__27913__$3;
})():null)], null)),iter__27902.call(null,cljs.core.rest.call(null,s__27903__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27901,row_i,row,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27901,row_i,row,s__27859__$2,temp__4126__auto__,attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27858.call(null,cljs.core.rest.call(null,s__27859__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27799,rowcol,render_fn__$1,map__27796,map__27796__$1,map__27797,map__27797__$1,table_data,query,results,map__27798,map__27798__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27920,owner){var map__27933 = p__27920;var map__27933__$1 = ((cljs.core.seq_QMARK_.call(null,map__27933))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933):map__27933);var props = map__27933__$1;var map__27934 = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27934__$1 = ((cljs.core.seq_QMARK_.call(null,map__27934))?cljs.core.apply.call(null,cljs.core.hash_map,map__27934):map__27934);var table_state = map__27934__$1;var table_data = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27935 = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27935__$1 = ((cljs.core.seq_QMARK_.call(null,map__27935))?cljs.core.apply.call(null,cljs.core.hash_map,map__27935):map__27935);var controls = map__27935__$1;var index_type = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27935__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27936 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27936 = (function (index_type,row_aggs,owner,metric_path,props,map__27935,map__27933,row_path,table_data,metric_aggs,index,ranges_table_component,p__27920,col_path,filter_spec,table_state,map__27934,controls,col_aggs,title,rows,cols,meta27937){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__27935 = map__27935;
this.map__27933 = map__27933;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.p__27920 = p__27920;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.map__27934 = map__27934;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta27937 = meta27937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27936.cljs$lang$type = true;
clustermap.components.ranges_table.t27936.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27936";
clustermap.components.ranges_table.t27936.cljs$lang$ctorPrWriter = ((function (map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27936");
});})(map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27936.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27936.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27939,p__27940){var self__ = this;
var map__27941 = p__27939;var map__27941__$1 = ((cljs.core.seq_QMARK_.call(null,map__27941))?cljs.core.apply.call(null,cljs.core.hash_map,map__27941):map__27941);var next_props = map__27941__$1;var map__27942 = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27942__$1 = ((cljs.core.seq_QMARK_.call(null,map__27942))?cljs.core.apply.call(null,cljs.core.hash_map,map__27942):map__27942);var next_table_state = map__27942__$1;var next_table_data = cljs.core.get.call(null,map__27942__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27943 = cljs.core.get.call(null,map__27942__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27943__$1 = ((cljs.core.seq_QMARK_.call(null,map__27943))?cljs.core.apply.call(null,cljs.core.hash_map,map__27943):map__27943);var next_controls = map__27943__$1;var next_col_aggs = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27943__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27944 = p__27940;var map__27944__$1 = ((cljs.core.seq_QMARK_.call(null,map__27944))?cljs.core.apply.call(null,cljs.core.hash_map,map__27944):map__27944);var next_state = map__27944__$1;var table_data_resource = cljs.core.get.call(null,map__27944__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27936.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27936.prototype.om$core$IRender$render$arity$1 = ((function (map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27936.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27936.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27938){var self__ = this;
var _27938__$1 = this;return self__.meta27937;
});})(map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27938,meta27937__$1){var self__ = this;
var _27938__$1 = this;return (new clustermap.components.ranges_table.t27936(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__27935,self__.map__27933,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.p__27920,self__.col_path,self__.filter_spec,self__.table_state,self__.map__27934,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,meta27937__$1));
});})(map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27936 = ((function (map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27936(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__27935__$2,map__27933__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,p__27920__$1,col_path__$1,filter_spec__$1,table_state__$1,map__27934__$2,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta27937){return (new clustermap.components.ranges_table.t27936(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__27935__$2,map__27933__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,p__27920__$1,col_path__$1,filter_spec__$1,table_state__$1,map__27934__$2,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta27937));
});})(map__27933,map__27933__$1,props,map__27934,map__27934__$1,table_state,table_data,map__27935,map__27935__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27936(index_type,row_aggs,owner,metric_path,props,map__27935__$1,map__27933__$1,row_path,table_data,metric_aggs,index,ranges_table_component,p__27920,col_path,filter_spec,table_state,map__27934__$1,controls,col_aggs,title,rows,cols,null));
});
