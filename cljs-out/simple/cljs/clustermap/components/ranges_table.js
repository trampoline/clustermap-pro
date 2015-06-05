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
clustermap.components.ranges_table.render_table = (function render_table(p__27673,owner,opts){var map__27792 = p__27673;var map__27792__$1 = ((cljs.core.seq_QMARK_.call(null,map__27792))?cljs.core.apply.call(null,cljs.core.hash_map,map__27792):map__27792);var map__27793 = cljs.core.get.call(null,map__27792__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27793__$1 = ((cljs.core.seq_QMARK_.call(null,map__27793))?cljs.core.apply.call(null,cljs.core.hash_map,map__27793):map__27793);var table_data = map__27793__$1;var query = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27794 = cljs.core.get.call(null,map__27792__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27794__$1 = ((cljs.core.seq_QMARK_.call(null,map__27794))?cljs.core.apply.call(null,cljs.core.hash_map,map__27794):map__27794);var controls = map__27794__$1;var title = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27795 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27795))?sablono.interpreter.attributes.call(null,attrs27795):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27795))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27796 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27796))?sablono.interpreter.attributes.call(null,attrs27796):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27796))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27796)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function iter__27798(s__27799){return (new cljs.core.LazySeq(null,((function (attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27799__$1 = s__27799;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27799__$1);if(temp__4126__auto__)
{var s__27799__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27799__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27799__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27801 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27800 = (0);while(true){
if((i__27800 < size__4376__auto__))
{var vec__27828 = cljs.core._nth.call(null,c__4375__auto__,i__27800);var row_i = cljs.core.nth.call(null,vec__27828,(0),null);var row = cljs.core.nth.call(null,vec__27828,(1),null);cljs.core.chunk_append.call(null,b__27801,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27800,vec__27828,row_i,row,c__4375__auto__,size__4376__auto__,b__27801,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function iter__27829(s__27830){return (new cljs.core.LazySeq(null,((function (i__27800,vec__27828,row_i,row,c__4375__auto__,size__4376__auto__,b__27801,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27830__$1 = s__27830;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27830__$1);if(temp__4126__auto____$1)
{var s__27830__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27830__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27830__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27832 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27831 = (0);while(true){
if((i__27831 < size__4376__auto____$1))
{var vec__27837 = cljs.core._nth.call(null,c__4375__auto____$1,i__27831);var col_i = cljs.core.nth.call(null,vec__27837,(0),null);var col = cljs.core.nth.call(null,vec__27837,(1),null);cljs.core.chunk_append.call(null,b__27832,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27838__$1 = (((G__27838 == null))?null:cljs.core.get.call(null,rowcol,G__27838));var G__27838__$2 = (((G__27838__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27838__$1));var G__27838__$3 = (((G__27838__$2 == null))?null:render_fn__$1.call(null,G__27838__$2));return G__27838__$3;
})():null)], null)));
{
var G__27910 = (i__27831 + (1));
i__27831 = G__27910;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27832),iter__27829.call(null,cljs.core.chunk_rest.call(null,s__27830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27832),null);
}
} else
{var vec__27839 = cljs.core.first.call(null,s__27830__$2);var col_i = cljs.core.nth.call(null,vec__27839,(0),null);var col = cljs.core.nth.call(null,vec__27839,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27840__$1 = (((G__27840 == null))?null:cljs.core.get.call(null,rowcol,G__27840));var G__27840__$2 = (((G__27840__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27840__$1));var G__27840__$3 = (((G__27840__$2 == null))?null:render_fn__$1.call(null,G__27840__$2));return G__27840__$3;
})():null)], null)),iter__27829.call(null,cljs.core.rest.call(null,s__27830__$2)));
}
} else
{return null;
}
break;
}
});})(i__27800,vec__27828,row_i,row,c__4375__auto__,size__4376__auto__,b__27801,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27800,vec__27828,row_i,row,c__4375__auto__,size__4376__auto__,b__27801,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27911 = (i__27800 + (1));
i__27800 = G__27911;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27801),iter__27798.call(null,cljs.core.chunk_rest.call(null,s__27799__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27801),null);
}
} else
{var vec__27841 = cljs.core.first.call(null,s__27799__$2);var row_i = cljs.core.nth.call(null,vec__27841,(0),null);var row = cljs.core.nth.call(null,vec__27841,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27841,row_i,row,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function iter__27842(s__27843){return (new cljs.core.LazySeq(null,((function (vec__27841,row_i,row,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27843__$1 = s__27843;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27843__$1);if(temp__4126__auto____$1)
{var s__27843__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27843__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27843__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27845 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27844 = (0);while(true){
if((i__27844 < size__4376__auto__))
{var vec__27850 = cljs.core._nth.call(null,c__4375__auto__,i__27844);var col_i = cljs.core.nth.call(null,vec__27850,(0),null);var col = cljs.core.nth.call(null,vec__27850,(1),null);cljs.core.chunk_append.call(null,b__27845,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27851__$1 = (((G__27851 == null))?null:cljs.core.get.call(null,rowcol,G__27851));var G__27851__$2 = (((G__27851__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27851__$1));var G__27851__$3 = (((G__27851__$2 == null))?null:render_fn__$1.call(null,G__27851__$2));return G__27851__$3;
})():null)], null)));
{
var G__27912 = (i__27844 + (1));
i__27844 = G__27912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27845),iter__27842.call(null,cljs.core.chunk_rest.call(null,s__27843__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27845),null);
}
} else
{var vec__27852 = cljs.core.first.call(null,s__27843__$2);var col_i = cljs.core.nth.call(null,vec__27852,(0),null);var col = cljs.core.nth.call(null,vec__27852,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27853__$1 = (((G__27853 == null))?null:cljs.core.get.call(null,rowcol,G__27853));var G__27853__$2 = (((G__27853__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27853__$1));var G__27853__$3 = (((G__27853__$2 == null))?null:render_fn__$1.call(null,G__27853__$2));return G__27853__$3;
})():null)], null)),iter__27842.call(null,cljs.core.rest.call(null,s__27843__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27841,row_i,row,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27841,row_i,row,s__27799__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27798.call(null,cljs.core.rest.call(null,s__27799__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27795),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27797 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27797))?sablono.interpreter.attributes.call(null,attrs27797):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27797))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27797)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function iter__27854(s__27855){return (new cljs.core.LazySeq(null,((function (attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27855__$1 = s__27855;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27855__$1);if(temp__4126__auto__)
{var s__27855__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27855__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27855__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27857 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27856 = (0);while(true){
if((i__27856 < size__4376__auto__))
{var vec__27884 = cljs.core._nth.call(null,c__4375__auto__,i__27856);var row_i = cljs.core.nth.call(null,vec__27884,(0),null);var row = cljs.core.nth.call(null,vec__27884,(1),null);cljs.core.chunk_append.call(null,b__27857,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27856,vec__27884,row_i,row,c__4375__auto__,size__4376__auto__,b__27857,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function iter__27885(s__27886){return (new cljs.core.LazySeq(null,((function (i__27856,vec__27884,row_i,row,c__4375__auto__,size__4376__auto__,b__27857,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27886__$1 = s__27886;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27886__$1);if(temp__4126__auto____$1)
{var s__27886__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27886__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27886__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27888 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27887 = (0);while(true){
if((i__27887 < size__4376__auto____$1))
{var vec__27893 = cljs.core._nth.call(null,c__4375__auto____$1,i__27887);var col_i = cljs.core.nth.call(null,vec__27893,(0),null);var col = cljs.core.nth.call(null,vec__27893,(1),null);cljs.core.chunk_append.call(null,b__27888,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27894__$1 = (((G__27894 == null))?null:cljs.core.get.call(null,rowcol,G__27894));var G__27894__$2 = (((G__27894__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27894__$1));var G__27894__$3 = (((G__27894__$2 == null))?null:render_fn__$1.call(null,G__27894__$2));return G__27894__$3;
})():null)], null)));
{
var G__27913 = (i__27887 + (1));
i__27887 = G__27913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27888),iter__27885.call(null,cljs.core.chunk_rest.call(null,s__27886__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27888),null);
}
} else
{var vec__27895 = cljs.core.first.call(null,s__27886__$2);var col_i = cljs.core.nth.call(null,vec__27895,(0),null);var col = cljs.core.nth.call(null,vec__27895,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27896__$1 = (((G__27896 == null))?null:cljs.core.get.call(null,rowcol,G__27896));var G__27896__$2 = (((G__27896__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27896__$1));var G__27896__$3 = (((G__27896__$2 == null))?null:render_fn__$1.call(null,G__27896__$2));return G__27896__$3;
})():null)], null)),iter__27885.call(null,cljs.core.rest.call(null,s__27886__$2)));
}
} else
{return null;
}
break;
}
});})(i__27856,vec__27884,row_i,row,c__4375__auto__,size__4376__auto__,b__27857,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27856,vec__27884,row_i,row,c__4375__auto__,size__4376__auto__,b__27857,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27914 = (i__27856 + (1));
i__27856 = G__27914;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27857),iter__27854.call(null,cljs.core.chunk_rest.call(null,s__27855__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27857),null);
}
} else
{var vec__27897 = cljs.core.first.call(null,s__27855__$2);var row_i = cljs.core.nth.call(null,vec__27897,(0),null);var row = cljs.core.nth.call(null,vec__27897,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27897,row_i,row,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function iter__27898(s__27899){return (new cljs.core.LazySeq(null,((function (vec__27897,row_i,row,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27899__$1 = s__27899;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27899__$1);if(temp__4126__auto____$1)
{var s__27899__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27899__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27899__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27901 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27900 = (0);while(true){
if((i__27900 < size__4376__auto__))
{var vec__27906 = cljs.core._nth.call(null,c__4375__auto__,i__27900);var col_i = cljs.core.nth.call(null,vec__27906,(0),null);var col = cljs.core.nth.call(null,vec__27906,(1),null);cljs.core.chunk_append.call(null,b__27901,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27907__$1 = (((G__27907 == null))?null:cljs.core.get.call(null,rowcol,G__27907));var G__27907__$2 = (((G__27907__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27907__$1));var G__27907__$3 = (((G__27907__$2 == null))?null:render_fn__$1.call(null,G__27907__$2));return G__27907__$3;
})():null)], null)));
{
var G__27915 = (i__27900 + (1));
i__27900 = G__27915;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27901),iter__27898.call(null,cljs.core.chunk_rest.call(null,s__27899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27901),null);
}
} else
{var vec__27908 = cljs.core.first.call(null,s__27899__$2);var col_i = cljs.core.nth.call(null,vec__27908,(0),null);var col = cljs.core.nth.call(null,vec__27908,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27909__$1 = (((G__27909 == null))?null:cljs.core.get.call(null,rowcol,G__27909));var G__27909__$2 = (((G__27909__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27909__$1));var G__27909__$3 = (((G__27909__$2 == null))?null:render_fn__$1.call(null,G__27909__$2));return G__27909__$3;
})():null)], null)),iter__27898.call(null,cljs.core.rest.call(null,s__27899__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27897,row_i,row,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27897,row_i,row,s__27855__$2,temp__4126__auto__,attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27854.call(null,cljs.core.rest.call(null,s__27855__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27795,rowcol,render_fn__$1,map__27792,map__27792__$1,map__27793,map__27793__$1,table_data,query,results,map__27794,map__27794__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27916,owner){var map__27929 = p__27916;var map__27929__$1 = ((cljs.core.seq_QMARK_.call(null,map__27929))?cljs.core.apply.call(null,cljs.core.hash_map,map__27929):map__27929);var props = map__27929__$1;var map__27930 = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27930__$1 = ((cljs.core.seq_QMARK_.call(null,map__27930))?cljs.core.apply.call(null,cljs.core.hash_map,map__27930):map__27930);var table_state = map__27930__$1;var table_data = cljs.core.get.call(null,map__27930__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27931 = cljs.core.get.call(null,map__27930__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27931__$1 = ((cljs.core.seq_QMARK_.call(null,map__27931))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931):map__27931);var controls = map__27931__$1;var index_type = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27932 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27932 = (function (index_type,row_aggs,owner,metric_path,map__27930,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,map__27931,col_aggs,title,rows,cols,map__27929,p__27916,meta27933){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.map__27930 = map__27930;
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
this.map__27931 = map__27931;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__27929 = map__27929;
this.p__27916 = p__27916;
this.meta27933 = meta27933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27932.cljs$lang$type = true;
clustermap.components.ranges_table.t27932.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27932";
clustermap.components.ranges_table.t27932.cljs$lang$ctorPrWriter = ((function (map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27932");
});})(map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27932.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27932.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27935,p__27936){var self__ = this;
var map__27937 = p__27935;var map__27937__$1 = ((cljs.core.seq_QMARK_.call(null,map__27937))?cljs.core.apply.call(null,cljs.core.hash_map,map__27937):map__27937);var next_props = map__27937__$1;var map__27938 = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27938__$1 = ((cljs.core.seq_QMARK_.call(null,map__27938))?cljs.core.apply.call(null,cljs.core.hash_map,map__27938):map__27938);var next_table_state = map__27938__$1;var next_table_data = cljs.core.get.call(null,map__27938__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27939 = cljs.core.get.call(null,map__27938__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27939__$1 = ((cljs.core.seq_QMARK_.call(null,map__27939))?cljs.core.apply.call(null,cljs.core.hash_map,map__27939):map__27939);var next_controls = map__27939__$1;var next_col_aggs = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27939__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27940 = p__27936;var map__27940__$1 = ((cljs.core.seq_QMARK_.call(null,map__27940))?cljs.core.apply.call(null,cljs.core.hash_map,map__27940):map__27940);var next_state = map__27940__$1;var table_data_resource = cljs.core.get.call(null,map__27940__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27932.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27932.prototype.om$core$IRender$render$arity$1 = ((function (map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27932.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27932.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27934){var self__ = this;
var _27934__$1 = this;return self__.meta27933;
});})(map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27934,meta27933__$1){var self__ = this;
var _27934__$1 = this;return (new clustermap.components.ranges_table.t27932(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.map__27930,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.map__27931,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__27929,self__.p__27916,meta27933__$1));
});})(map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27932 = ((function (map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27932(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,map__27930__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,map__27931__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27929__$2,p__27916__$1,meta27933){return (new clustermap.components.ranges_table.t27932(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,map__27930__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,map__27931__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27929__$2,p__27916__$1,meta27933));
});})(map__27929,map__27929__$1,props,map__27930,map__27930__$1,table_state,table_data,map__27931,map__27931__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27932(index_type,row_aggs,owner,metric_path,map__27930__$1,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,map__27931__$1,col_aggs,title,rows,cols,map__27929__$1,p__27916,null));
});
