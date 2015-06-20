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
clustermap.components.ranges_table.render_table = (function render_table(p__28466,owner,opts){var map__28585 = p__28466;var map__28585__$1 = ((cljs.core.seq_QMARK_.call(null,map__28585))?cljs.core.apply.call(null,cljs.core.hash_map,map__28585):map__28585);var map__28586 = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28586__$1 = ((cljs.core.seq_QMARK_.call(null,map__28586))?cljs.core.apply.call(null,cljs.core.hash_map,map__28586):map__28586);var table_data = map__28586__$1;var query = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28587 = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28587__$1 = ((cljs.core.seq_QMARK_.call(null,map__28587))?cljs.core.apply.call(null,cljs.core.hash_map,map__28587):map__28587);var controls = map__28587__$1;var title = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28588 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28588))?sablono.interpreter.attributes.call(null,attrs28588):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28588))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28589 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28589))?sablono.interpreter.attributes.call(null,attrs28589):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28589))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28589)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function iter__28591(s__28592){return (new cljs.core.LazySeq(null,((function (attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28592__$1 = s__28592;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28592__$1);if(temp__4126__auto__)
{var s__28592__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28592__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28592__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28594 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28593 = (0);while(true){
if((i__28593 < size__4376__auto__))
{var vec__28621 = cljs.core._nth.call(null,c__4375__auto__,i__28593);var row_i = cljs.core.nth.call(null,vec__28621,(0),null);var row = cljs.core.nth.call(null,vec__28621,(1),null);cljs.core.chunk_append.call(null,b__28594,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28593,vec__28621,row_i,row,c__4375__auto__,size__4376__auto__,b__28594,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function iter__28622(s__28623){return (new cljs.core.LazySeq(null,((function (i__28593,vec__28621,row_i,row,c__4375__auto__,size__4376__auto__,b__28594,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28623__$1 = s__28623;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28623__$1);if(temp__4126__auto____$1)
{var s__28623__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28623__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28623__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28625 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28624 = (0);while(true){
if((i__28624 < size__4376__auto____$1))
{var vec__28630 = cljs.core._nth.call(null,c__4375__auto____$1,i__28624);var col_i = cljs.core.nth.call(null,vec__28630,(0),null);var col = cljs.core.nth.call(null,vec__28630,(1),null);cljs.core.chunk_append.call(null,b__28625,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28631__$1 = (((G__28631 == null))?null:cljs.core.get.call(null,rowcol,G__28631));var G__28631__$2 = (((G__28631__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28631__$1));var G__28631__$3 = (((G__28631__$2 == null))?null:render_fn__$1.call(null,G__28631__$2));return G__28631__$3;
})():null)], null)));
{
var G__28703 = (i__28624 + (1));
i__28624 = G__28703;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28625),iter__28622.call(null,cljs.core.chunk_rest.call(null,s__28623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28625),null);
}
} else
{var vec__28632 = cljs.core.first.call(null,s__28623__$2);var col_i = cljs.core.nth.call(null,vec__28632,(0),null);var col = cljs.core.nth.call(null,vec__28632,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28633__$1 = (((G__28633 == null))?null:cljs.core.get.call(null,rowcol,G__28633));var G__28633__$2 = (((G__28633__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28633__$1));var G__28633__$3 = (((G__28633__$2 == null))?null:render_fn__$1.call(null,G__28633__$2));return G__28633__$3;
})():null)], null)),iter__28622.call(null,cljs.core.rest.call(null,s__28623__$2)));
}
} else
{return null;
}
break;
}
});})(i__28593,vec__28621,row_i,row,c__4375__auto__,size__4376__auto__,b__28594,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28593,vec__28621,row_i,row,c__4375__auto__,size__4376__auto__,b__28594,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28704 = (i__28593 + (1));
i__28593 = G__28704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28594),iter__28591.call(null,cljs.core.chunk_rest.call(null,s__28592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28594),null);
}
} else
{var vec__28634 = cljs.core.first.call(null,s__28592__$2);var row_i = cljs.core.nth.call(null,vec__28634,(0),null);var row = cljs.core.nth.call(null,vec__28634,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28634,row_i,row,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function iter__28635(s__28636){return (new cljs.core.LazySeq(null,((function (vec__28634,row_i,row,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28636__$1 = s__28636;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28636__$1);if(temp__4126__auto____$1)
{var s__28636__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28636__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28636__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28638 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28637 = (0);while(true){
if((i__28637 < size__4376__auto__))
{var vec__28643 = cljs.core._nth.call(null,c__4375__auto__,i__28637);var col_i = cljs.core.nth.call(null,vec__28643,(0),null);var col = cljs.core.nth.call(null,vec__28643,(1),null);cljs.core.chunk_append.call(null,b__28638,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28644__$1 = (((G__28644 == null))?null:cljs.core.get.call(null,rowcol,G__28644));var G__28644__$2 = (((G__28644__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28644__$1));var G__28644__$3 = (((G__28644__$2 == null))?null:render_fn__$1.call(null,G__28644__$2));return G__28644__$3;
})():null)], null)));
{
var G__28705 = (i__28637 + (1));
i__28637 = G__28705;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28638),iter__28635.call(null,cljs.core.chunk_rest.call(null,s__28636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28638),null);
}
} else
{var vec__28645 = cljs.core.first.call(null,s__28636__$2);var col_i = cljs.core.nth.call(null,vec__28645,(0),null);var col = cljs.core.nth.call(null,vec__28645,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28646__$1 = (((G__28646 == null))?null:cljs.core.get.call(null,rowcol,G__28646));var G__28646__$2 = (((G__28646__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28646__$1));var G__28646__$3 = (((G__28646__$2 == null))?null:render_fn__$1.call(null,G__28646__$2));return G__28646__$3;
})():null)], null)),iter__28635.call(null,cljs.core.rest.call(null,s__28636__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28634,row_i,row,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28634,row_i,row,s__28592__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28591.call(null,cljs.core.rest.call(null,s__28592__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28588),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28590 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28590))?sablono.interpreter.attributes.call(null,attrs28590):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28590))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28590)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function iter__28647(s__28648){return (new cljs.core.LazySeq(null,((function (attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28648__$1 = s__28648;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28648__$1);if(temp__4126__auto__)
{var s__28648__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28648__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28648__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28650 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28649 = (0);while(true){
if((i__28649 < size__4376__auto__))
{var vec__28677 = cljs.core._nth.call(null,c__4375__auto__,i__28649);var row_i = cljs.core.nth.call(null,vec__28677,(0),null);var row = cljs.core.nth.call(null,vec__28677,(1),null);cljs.core.chunk_append.call(null,b__28650,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28649,vec__28677,row_i,row,c__4375__auto__,size__4376__auto__,b__28650,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function iter__28678(s__28679){return (new cljs.core.LazySeq(null,((function (i__28649,vec__28677,row_i,row,c__4375__auto__,size__4376__auto__,b__28650,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28679__$1 = s__28679;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28679__$1);if(temp__4126__auto____$1)
{var s__28679__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28679__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28679__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28681 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28680 = (0);while(true){
if((i__28680 < size__4376__auto____$1))
{var vec__28686 = cljs.core._nth.call(null,c__4375__auto____$1,i__28680);var col_i = cljs.core.nth.call(null,vec__28686,(0),null);var col = cljs.core.nth.call(null,vec__28686,(1),null);cljs.core.chunk_append.call(null,b__28681,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28687__$1 = (((G__28687 == null))?null:cljs.core.get.call(null,rowcol,G__28687));var G__28687__$2 = (((G__28687__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28687__$1));var G__28687__$3 = (((G__28687__$2 == null))?null:render_fn__$1.call(null,G__28687__$2));return G__28687__$3;
})():null)], null)));
{
var G__28706 = (i__28680 + (1));
i__28680 = G__28706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28681),iter__28678.call(null,cljs.core.chunk_rest.call(null,s__28679__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28681),null);
}
} else
{var vec__28688 = cljs.core.first.call(null,s__28679__$2);var col_i = cljs.core.nth.call(null,vec__28688,(0),null);var col = cljs.core.nth.call(null,vec__28688,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28689__$1 = (((G__28689 == null))?null:cljs.core.get.call(null,rowcol,G__28689));var G__28689__$2 = (((G__28689__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28689__$1));var G__28689__$3 = (((G__28689__$2 == null))?null:render_fn__$1.call(null,G__28689__$2));return G__28689__$3;
})():null)], null)),iter__28678.call(null,cljs.core.rest.call(null,s__28679__$2)));
}
} else
{return null;
}
break;
}
});})(i__28649,vec__28677,row_i,row,c__4375__auto__,size__4376__auto__,b__28650,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28649,vec__28677,row_i,row,c__4375__auto__,size__4376__auto__,b__28650,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28707 = (i__28649 + (1));
i__28649 = G__28707;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28650),iter__28647.call(null,cljs.core.chunk_rest.call(null,s__28648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28650),null);
}
} else
{var vec__28690 = cljs.core.first.call(null,s__28648__$2);var row_i = cljs.core.nth.call(null,vec__28690,(0),null);var row = cljs.core.nth.call(null,vec__28690,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28690,row_i,row,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function iter__28691(s__28692){return (new cljs.core.LazySeq(null,((function (vec__28690,row_i,row,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28692__$1 = s__28692;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28692__$1);if(temp__4126__auto____$1)
{var s__28692__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28692__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28692__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28694 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28693 = (0);while(true){
if((i__28693 < size__4376__auto__))
{var vec__28699 = cljs.core._nth.call(null,c__4375__auto__,i__28693);var col_i = cljs.core.nth.call(null,vec__28699,(0),null);var col = cljs.core.nth.call(null,vec__28699,(1),null);cljs.core.chunk_append.call(null,b__28694,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28700__$1 = (((G__28700 == null))?null:cljs.core.get.call(null,rowcol,G__28700));var G__28700__$2 = (((G__28700__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28700__$1));var G__28700__$3 = (((G__28700__$2 == null))?null:render_fn__$1.call(null,G__28700__$2));return G__28700__$3;
})():null)], null)));
{
var G__28708 = (i__28693 + (1));
i__28693 = G__28708;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28694),iter__28691.call(null,cljs.core.chunk_rest.call(null,s__28692__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28694),null);
}
} else
{var vec__28701 = cljs.core.first.call(null,s__28692__$2);var col_i = cljs.core.nth.call(null,vec__28701,(0),null);var col = cljs.core.nth.call(null,vec__28701,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28702__$1 = (((G__28702 == null))?null:cljs.core.get.call(null,rowcol,G__28702));var G__28702__$2 = (((G__28702__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28702__$1));var G__28702__$3 = (((G__28702__$2 == null))?null:render_fn__$1.call(null,G__28702__$2));return G__28702__$3;
})():null)], null)),iter__28691.call(null,cljs.core.rest.call(null,s__28692__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28690,row_i,row,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28690,row_i,row,s__28648__$2,temp__4126__auto__,attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28647.call(null,cljs.core.rest.call(null,s__28648__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28588,rowcol,render_fn__$1,map__28585,map__28585__$1,map__28586,map__28586__$1,table_data,query,results,map__28587,map__28587__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28709,owner){var map__28754 = p__28709;var map__28754__$1 = ((cljs.core.seq_QMARK_.call(null,map__28754))?cljs.core.apply.call(null,cljs.core.hash_map,map__28754):map__28754);var props = map__28754__$1;var map__28755 = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28755__$1 = ((cljs.core.seq_QMARK_.call(null,map__28755))?cljs.core.apply.call(null,cljs.core.hash_map,map__28755):map__28755);var table_state = map__28755__$1;var table_data = cljs.core.get.call(null,map__28755__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28756 = cljs.core.get.call(null,map__28755__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28756__$1 = ((cljs.core.seq_QMARK_.call(null,map__28756))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);var controls = map__28756__$1;var index_type = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28757 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28757 = (function (index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,map__28756,p__28709,filter_spec,table_state,controls,map__28755,col_aggs,title,rows,cols,map__28754,meta28758){
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
this.col_path = col_path;
this.map__28756 = map__28756;
this.p__28709 = p__28709;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.map__28755 = map__28755;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28754 = map__28754;
this.meta28758 = meta28758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28757.cljs$lang$type = true;
clustermap.components.ranges_table.t28757.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28757";
clustermap.components.ranges_table.t28757.cljs$lang$ctorPrWriter = ((function (map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28757");
});})(map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28757.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28757.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28760,p__28761){var self__ = this;
var map__28762 = p__28760;var map__28762__$1 = ((cljs.core.seq_QMARK_.call(null,map__28762))?cljs.core.apply.call(null,cljs.core.hash_map,map__28762):map__28762);var next_props = map__28762__$1;var map__28763 = cljs.core.get.call(null,map__28762__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28763__$1 = ((cljs.core.seq_QMARK_.call(null,map__28763))?cljs.core.apply.call(null,cljs.core.hash_map,map__28763):map__28763);var next_table_state = map__28763__$1;var next_table_data = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28764 = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28764__$1 = ((cljs.core.seq_QMARK_.call(null,map__28764))?cljs.core.apply.call(null,cljs.core.hash_map,map__28764):map__28764);var next_controls = map__28764__$1;var next_col_aggs = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28762__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28765 = p__28761;var map__28765__$1 = ((cljs.core.seq_QMARK_.call(null,map__28765))?cljs.core.apply.call(null,cljs.core.hash_map,map__28765):map__28765);var fetch_data_fn = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28762,map__28762__$1,next_props,map__28763,map__28763__$1,next_table_state,next_table_data,map__28764,map__28764__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28765,map__28765__$1,fetch_data_fn,map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28762,map__28762__$1,next_props,map__28763,map__28763__$1,next_table_state,next_table_data,map__28764,map__28764__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28765,map__28765__$1,fetch_data_fn,map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28783){var state_val_28784 = (state_28783[(1)]);if((state_val_28784 === (5)))
{var inst_28781 = (state_28783[(2)]);var state_28783__$1 = state_28783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28783__$1,inst_28781);
} else
{if((state_val_28784 === (4)))
{var state_28783__$1 = state_28783;var statearr_28785_28798 = state_28783__$1;(statearr_28785_28798[(2)] = null);
(statearr_28785_28798[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28784 === (3)))
{var inst_28768 = (state_28783[(7)]);var inst_28770 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28771 = ["RANGES-TABLE-DATA",inst_28768];var inst_28772 = (new cljs.core.PersistentVector(null,2,(5),inst_28770,inst_28771,null));var inst_28773 = cljs.core.clj__GT_js.call(null,inst_28772);var inst_28774 = console.log(inst_28773);var inst_28775 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28776 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28777 = (new cljs.core.PersistentVector(null,1,(5),inst_28775,inst_28776,null));var inst_28778 = om.core.update_BANG_.call(null,self__.table_state,inst_28777,inst_28768);var state_28783__$1 = (function (){var statearr_28786 = state_28783;(statearr_28786[(8)] = inst_28774);
return statearr_28786;
})();var statearr_28787_28799 = state_28783__$1;(statearr_28787_28799[(2)] = inst_28778);
(statearr_28787_28799[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28784 === (2)))
{var inst_28768 = (state_28783[(7)]);var inst_28768__$1 = (state_28783[(2)]);var state_28783__$1 = (function (){var statearr_28788 = state_28783;(statearr_28788[(7)] = inst_28768__$1);
return statearr_28788;
})();if(cljs.core.truth_(inst_28768__$1))
{var statearr_28789_28800 = state_28783__$1;(statearr_28789_28800[(1)] = (3));
} else
{var statearr_28790_28801 = state_28783__$1;(statearr_28790_28801[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28784 === (1)))
{var inst_28766 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28783__$1 = state_28783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28783__$1,(2),inst_28766);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28762,map__28762__$1,next_props,map__28763,map__28763__$1,next_table_state,next_table_data,map__28764,map__28764__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28765,map__28765__$1,fetch_data_fn,map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28762,map__28762__$1,next_props,map__28763,map__28763__$1,next_table_state,next_table_data,map__28764,map__28764__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28765,map__28765__$1,fetch_data_fn,map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28794 = [null,null,null,null,null,null,null,null,null];(statearr_28794[(0)] = state_machine__9111__auto__);
(statearr_28794[(1)] = (1));
return statearr_28794;
});
var state_machine__9111__auto____1 = (function (state_28783){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28783);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28795){if((e28795 instanceof Object))
{var ex__9114__auto__ = e28795;var statearr_28796_28802 = state_28783;(statearr_28796_28802[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28795;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28803 = state_28783;
state_28783 = G__28803;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28783){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28762,map__28762__$1,next_props,map__28763,map__28763__$1,next_table_state,next_table_data,map__28764,map__28764__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28765,map__28765__$1,fetch_data_fn,map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28797 = f__9126__auto__.call(null);(statearr_28797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28762,map__28762__$1,next_props,map__28763,map__28763__$1,next_table_state,next_table_data,map__28764,map__28764__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28765,map__28765__$1,fetch_data_fn,map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28757.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28757.prototype.om$core$IRender$render$arity$1 = ((function (map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28757.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28757.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28759){var self__ = this;
var _28759__$1 = this;return self__.meta28758;
});})(map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28759,meta28758__$1){var self__ = this;
var _28759__$1 = this;return (new clustermap.components.ranges_table.t28757(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.map__28756,self__.p__28709,self__.filter_spec,self__.table_state,self__.controls,self__.map__28755,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__28754,meta28758__$1));
});})(map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28757 = ((function (map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28757(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,map__28756__$2,p__28709__$1,filter_spec__$1,table_state__$1,controls__$1,map__28755__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28754__$2,meta28758){return (new clustermap.components.ranges_table.t28757(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,map__28756__$2,p__28709__$1,filter_spec__$1,table_state__$1,controls__$1,map__28755__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28754__$2,meta28758));
});})(map__28754,map__28754__$1,props,map__28755,map__28755__$1,table_state,table_data,map__28756,map__28756__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28757(index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,map__28756__$1,p__28709,filter_spec,table_state,controls,map__28755__$1,col_aggs,title,rows,cols,map__28754__$1,null));
});
