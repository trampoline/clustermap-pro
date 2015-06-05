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
clustermap.components.ranges_table.render_table = (function render_table(p__27757,owner,opts){var map__27876 = p__27757;var map__27876__$1 = ((cljs.core.seq_QMARK_.call(null,map__27876))?cljs.core.apply.call(null,cljs.core.hash_map,map__27876):map__27876);var map__27877 = cljs.core.get.call(null,map__27876__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27877__$1 = ((cljs.core.seq_QMARK_.call(null,map__27877))?cljs.core.apply.call(null,cljs.core.hash_map,map__27877):map__27877);var table_data = map__27877__$1;var query = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27878 = cljs.core.get.call(null,map__27876__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27878__$1 = ((cljs.core.seq_QMARK_.call(null,map__27878))?cljs.core.apply.call(null,cljs.core.hash_map,map__27878):map__27878);var controls = map__27878__$1;var title = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27879 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27879))?sablono.interpreter.attributes.call(null,attrs27879):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27879))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27880 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27880))?sablono.interpreter.attributes.call(null,attrs27880):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27880))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27880)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function iter__27882(s__27883){return (new cljs.core.LazySeq(null,((function (attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27883__$1 = s__27883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27883__$1);if(temp__4126__auto__)
{var s__27883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27883__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27883__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27885 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27884 = (0);while(true){
if((i__27884 < size__4376__auto__))
{var vec__27912 = cljs.core._nth.call(null,c__4375__auto__,i__27884);var row_i = cljs.core.nth.call(null,vec__27912,(0),null);var row = cljs.core.nth.call(null,vec__27912,(1),null);cljs.core.chunk_append.call(null,b__27885,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27884,vec__27912,row_i,row,c__4375__auto__,size__4376__auto__,b__27885,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function iter__27913(s__27914){return (new cljs.core.LazySeq(null,((function (i__27884,vec__27912,row_i,row,c__4375__auto__,size__4376__auto__,b__27885,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27914__$1 = s__27914;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27914__$1);if(temp__4126__auto____$1)
{var s__27914__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27914__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27914__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27916 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27915 = (0);while(true){
if((i__27915 < size__4376__auto____$1))
{var vec__27921 = cljs.core._nth.call(null,c__4375__auto____$1,i__27915);var col_i = cljs.core.nth.call(null,vec__27921,(0),null);var col = cljs.core.nth.call(null,vec__27921,(1),null);cljs.core.chunk_append.call(null,b__27916,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27922__$1 = (((G__27922 == null))?null:cljs.core.get.call(null,rowcol,G__27922));var G__27922__$2 = (((G__27922__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27922__$1));var G__27922__$3 = (((G__27922__$2 == null))?null:render_fn__$1.call(null,G__27922__$2));return G__27922__$3;
})():null)], null)));
{
var G__27994 = (i__27915 + (1));
i__27915 = G__27994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27916),iter__27913.call(null,cljs.core.chunk_rest.call(null,s__27914__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27916),null);
}
} else
{var vec__27923 = cljs.core.first.call(null,s__27914__$2);var col_i = cljs.core.nth.call(null,vec__27923,(0),null);var col = cljs.core.nth.call(null,vec__27923,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27924__$1 = (((G__27924 == null))?null:cljs.core.get.call(null,rowcol,G__27924));var G__27924__$2 = (((G__27924__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27924__$1));var G__27924__$3 = (((G__27924__$2 == null))?null:render_fn__$1.call(null,G__27924__$2));return G__27924__$3;
})():null)], null)),iter__27913.call(null,cljs.core.rest.call(null,s__27914__$2)));
}
} else
{return null;
}
break;
}
});})(i__27884,vec__27912,row_i,row,c__4375__auto__,size__4376__auto__,b__27885,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27884,vec__27912,row_i,row,c__4375__auto__,size__4376__auto__,b__27885,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27995 = (i__27884 + (1));
i__27884 = G__27995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27885),iter__27882.call(null,cljs.core.chunk_rest.call(null,s__27883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27885),null);
}
} else
{var vec__27925 = cljs.core.first.call(null,s__27883__$2);var row_i = cljs.core.nth.call(null,vec__27925,(0),null);var row = cljs.core.nth.call(null,vec__27925,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27925,row_i,row,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function iter__27926(s__27927){return (new cljs.core.LazySeq(null,((function (vec__27925,row_i,row,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27927__$1 = s__27927;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27927__$1);if(temp__4126__auto____$1)
{var s__27927__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27927__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27927__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27929 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27928 = (0);while(true){
if((i__27928 < size__4376__auto__))
{var vec__27934 = cljs.core._nth.call(null,c__4375__auto__,i__27928);var col_i = cljs.core.nth.call(null,vec__27934,(0),null);var col = cljs.core.nth.call(null,vec__27934,(1),null);cljs.core.chunk_append.call(null,b__27929,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27935__$1 = (((G__27935 == null))?null:cljs.core.get.call(null,rowcol,G__27935));var G__27935__$2 = (((G__27935__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27935__$1));var G__27935__$3 = (((G__27935__$2 == null))?null:render_fn__$1.call(null,G__27935__$2));return G__27935__$3;
})():null)], null)));
{
var G__27996 = (i__27928 + (1));
i__27928 = G__27996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27929),iter__27926.call(null,cljs.core.chunk_rest.call(null,s__27927__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27929),null);
}
} else
{var vec__27936 = cljs.core.first.call(null,s__27927__$2);var col_i = cljs.core.nth.call(null,vec__27936,(0),null);var col = cljs.core.nth.call(null,vec__27936,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27937__$1 = (((G__27937 == null))?null:cljs.core.get.call(null,rowcol,G__27937));var G__27937__$2 = (((G__27937__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27937__$1));var G__27937__$3 = (((G__27937__$2 == null))?null:render_fn__$1.call(null,G__27937__$2));return G__27937__$3;
})():null)], null)),iter__27926.call(null,cljs.core.rest.call(null,s__27927__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27925,row_i,row,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27925,row_i,row,s__27883__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27882.call(null,cljs.core.rest.call(null,s__27883__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27879),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27881 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27881))?sablono.interpreter.attributes.call(null,attrs27881):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27881))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27881)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function iter__27938(s__27939){return (new cljs.core.LazySeq(null,((function (attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27939__$1 = s__27939;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27939__$1);if(temp__4126__auto__)
{var s__27939__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27939__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27939__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27941 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27940 = (0);while(true){
if((i__27940 < size__4376__auto__))
{var vec__27968 = cljs.core._nth.call(null,c__4375__auto__,i__27940);var row_i = cljs.core.nth.call(null,vec__27968,(0),null);var row = cljs.core.nth.call(null,vec__27968,(1),null);cljs.core.chunk_append.call(null,b__27941,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27940,vec__27968,row_i,row,c__4375__auto__,size__4376__auto__,b__27941,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function iter__27969(s__27970){return (new cljs.core.LazySeq(null,((function (i__27940,vec__27968,row_i,row,c__4375__auto__,size__4376__auto__,b__27941,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27970__$1 = s__27970;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27970__$1);if(temp__4126__auto____$1)
{var s__27970__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27970__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27970__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27972 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27971 = (0);while(true){
if((i__27971 < size__4376__auto____$1))
{var vec__27977 = cljs.core._nth.call(null,c__4375__auto____$1,i__27971);var col_i = cljs.core.nth.call(null,vec__27977,(0),null);var col = cljs.core.nth.call(null,vec__27977,(1),null);cljs.core.chunk_append.call(null,b__27972,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27978__$1 = (((G__27978 == null))?null:cljs.core.get.call(null,rowcol,G__27978));var G__27978__$2 = (((G__27978__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27978__$1));var G__27978__$3 = (((G__27978__$2 == null))?null:render_fn__$1.call(null,G__27978__$2));return G__27978__$3;
})():null)], null)));
{
var G__27997 = (i__27971 + (1));
i__27971 = G__27997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27972),iter__27969.call(null,cljs.core.chunk_rest.call(null,s__27970__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27972),null);
}
} else
{var vec__27979 = cljs.core.first.call(null,s__27970__$2);var col_i = cljs.core.nth.call(null,vec__27979,(0),null);var col = cljs.core.nth.call(null,vec__27979,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27980__$1 = (((G__27980 == null))?null:cljs.core.get.call(null,rowcol,G__27980));var G__27980__$2 = (((G__27980__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27980__$1));var G__27980__$3 = (((G__27980__$2 == null))?null:render_fn__$1.call(null,G__27980__$2));return G__27980__$3;
})():null)], null)),iter__27969.call(null,cljs.core.rest.call(null,s__27970__$2)));
}
} else
{return null;
}
break;
}
});})(i__27940,vec__27968,row_i,row,c__4375__auto__,size__4376__auto__,b__27941,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27940,vec__27968,row_i,row,c__4375__auto__,size__4376__auto__,b__27941,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27998 = (i__27940 + (1));
i__27940 = G__27998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27941),iter__27938.call(null,cljs.core.chunk_rest.call(null,s__27939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27941),null);
}
} else
{var vec__27981 = cljs.core.first.call(null,s__27939__$2);var row_i = cljs.core.nth.call(null,vec__27981,(0),null);var row = cljs.core.nth.call(null,vec__27981,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27981,row_i,row,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function iter__27982(s__27983){return (new cljs.core.LazySeq(null,((function (vec__27981,row_i,row,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27983__$1 = s__27983;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27983__$1);if(temp__4126__auto____$1)
{var s__27983__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27983__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27983__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27985 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27984 = (0);while(true){
if((i__27984 < size__4376__auto__))
{var vec__27990 = cljs.core._nth.call(null,c__4375__auto__,i__27984);var col_i = cljs.core.nth.call(null,vec__27990,(0),null);var col = cljs.core.nth.call(null,vec__27990,(1),null);cljs.core.chunk_append.call(null,b__27985,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27991__$1 = (((G__27991 == null))?null:cljs.core.get.call(null,rowcol,G__27991));var G__27991__$2 = (((G__27991__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27991__$1));var G__27991__$3 = (((G__27991__$2 == null))?null:render_fn__$1.call(null,G__27991__$2));return G__27991__$3;
})():null)], null)));
{
var G__27999 = (i__27984 + (1));
i__27984 = G__27999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27985),iter__27982.call(null,cljs.core.chunk_rest.call(null,s__27983__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27985),null);
}
} else
{var vec__27992 = cljs.core.first.call(null,s__27983__$2);var col_i = cljs.core.nth.call(null,vec__27992,(0),null);var col = cljs.core.nth.call(null,vec__27992,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27993__$1 = (((G__27993 == null))?null:cljs.core.get.call(null,rowcol,G__27993));var G__27993__$2 = (((G__27993__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27993__$1));var G__27993__$3 = (((G__27993__$2 == null))?null:render_fn__$1.call(null,G__27993__$2));return G__27993__$3;
})():null)], null)),iter__27982.call(null,cljs.core.rest.call(null,s__27983__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27981,row_i,row,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27981,row_i,row,s__27939__$2,temp__4126__auto__,attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27938.call(null,cljs.core.rest.call(null,s__27939__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27879,rowcol,render_fn__$1,map__27876,map__27876__$1,map__27877,map__27877__$1,table_data,query,results,map__27878,map__27878__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28000,owner){var map__28013 = p__28000;var map__28013__$1 = ((cljs.core.seq_QMARK_.call(null,map__28013))?cljs.core.apply.call(null,cljs.core.hash_map,map__28013):map__28013);var props = map__28013__$1;var map__28014 = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28014__$1 = ((cljs.core.seq_QMARK_.call(null,map__28014))?cljs.core.apply.call(null,cljs.core.hash_map,map__28014):map__28014);var table_state = map__28014__$1;var table_data = cljs.core.get.call(null,map__28014__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28015 = cljs.core.get.call(null,map__28014__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28015__$1 = ((cljs.core.seq_QMARK_.call(null,map__28015))?cljs.core.apply.call(null,cljs.core.hash_map,map__28015):map__28015);var controls = map__28015__$1;var index_type = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28016 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28016 = (function (index_type,row_aggs,owner,metric_path,map__28015,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__28013,p__28000,table_state,controls,map__28014,col_aggs,title,rows,cols,meta28017){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.map__28015 = map__28015;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__28013 = map__28013;
this.p__28000 = p__28000;
this.table_state = table_state;
this.controls = controls;
this.map__28014 = map__28014;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta28017 = meta28017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28016.cljs$lang$type = true;
clustermap.components.ranges_table.t28016.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28016";
clustermap.components.ranges_table.t28016.cljs$lang$ctorPrWriter = ((function (map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28016");
});})(map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28016.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28016.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28019,p__28020){var self__ = this;
var map__28021 = p__28019;var map__28021__$1 = ((cljs.core.seq_QMARK_.call(null,map__28021))?cljs.core.apply.call(null,cljs.core.hash_map,map__28021):map__28021);var next_props = map__28021__$1;var map__28022 = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28022__$1 = ((cljs.core.seq_QMARK_.call(null,map__28022))?cljs.core.apply.call(null,cljs.core.hash_map,map__28022):map__28022);var next_table_state = map__28022__$1;var next_table_data = cljs.core.get.call(null,map__28022__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28023 = cljs.core.get.call(null,map__28022__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28023__$1 = ((cljs.core.seq_QMARK_.call(null,map__28023))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);var next_controls = map__28023__$1;var next_col_aggs = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28024 = p__28020;var map__28024__$1 = ((cljs.core.seq_QMARK_.call(null,map__28024))?cljs.core.apply.call(null,cljs.core.hash_map,map__28024):map__28024);var next_state = map__28024__$1;var table_data_resource = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28016.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28016.prototype.om$core$IRender$render$arity$1 = ((function (map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28016.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28016.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28018){var self__ = this;
var _28018__$1 = this;return self__.meta28017;
});})(map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28018,meta28017__$1){var self__ = this;
var _28018__$1 = this;return (new clustermap.components.ranges_table.t28016(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.map__28015,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.map__28013,self__.p__28000,self__.table_state,self__.controls,self__.map__28014,self__.col_aggs,self__.title,self__.rows,self__.cols,meta28017__$1));
});})(map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28016 = ((function (map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28016(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,map__28015__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__28013__$2,p__28000__$1,table_state__$1,controls__$1,map__28014__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,meta28017){return (new clustermap.components.ranges_table.t28016(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,map__28015__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__28013__$2,p__28000__$1,table_state__$1,controls__$1,map__28014__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,meta28017));
});})(map__28013,map__28013__$1,props,map__28014,map__28014__$1,table_state,table_data,map__28015,map__28015__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28016(index_type,row_aggs,owner,metric_path,map__28015__$1,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__28013__$1,p__28000,table_state,controls,map__28014__$1,col_aggs,title,rows,cols,null));
});
