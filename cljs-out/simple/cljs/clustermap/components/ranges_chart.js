// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.ranges_chart.render_table = (function render_table(p__32690,owner,opts){var map__32809 = p__32690;var map__32809__$1 = ((cljs.core.seq_QMARK_.call(null,map__32809))?cljs.core.apply.call(null,cljs.core.hash_map,map__32809):map__32809);var map__32810 = cljs.core.get.call(null,map__32809__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32810__$1 = ((cljs.core.seq_QMARK_.call(null,map__32810))?cljs.core.apply.call(null,cljs.core.hash_map,map__32810):map__32810);var table_data = map__32810__$1;var query = cljs.core.get.call(null,map__32810__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32810__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32811 = cljs.core.get.call(null,map__32809__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32811__$1 = ((cljs.core.seq_QMARK_.call(null,map__32811))?cljs.core.apply.call(null,cljs.core.hash_map,map__32811):map__32811);var controls = map__32811__$1;var title = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs32812 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32812))?sablono.interpreter.attributes.call(null,attrs32812):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32812))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs32813 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32813))?sablono.interpreter.attributes.call(null,attrs32813):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32813))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32813)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function iter__32815(s__32816){return (new cljs.core.LazySeq(null,((function (attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function (){var s__32816__$1 = s__32816;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32816__$1);if(temp__4126__auto__)
{var s__32816__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32816__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32816__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32818 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32817 = (0);while(true){
if((i__32817 < size__4376__auto__))
{var vec__32845 = cljs.core._nth.call(null,c__4375__auto__,i__32817);var row_i = cljs.core.nth.call(null,vec__32845,(0),null);var row = cljs.core.nth.call(null,vec__32845,(1),null);cljs.core.chunk_append.call(null,b__32818,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__32817,vec__32845,row_i,row,c__4375__auto__,size__4376__auto__,b__32818,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function iter__32846(s__32847){return (new cljs.core.LazySeq(null,((function (i__32817,vec__32845,row_i,row,c__4375__auto__,size__4376__auto__,b__32818,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function (){var s__32847__$1 = s__32847;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32847__$1);if(temp__4126__auto____$1)
{var s__32847__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32847__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32847__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32849 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32848 = (0);while(true){
if((i__32848 < size__4376__auto____$1))
{var vec__32854 = cljs.core._nth.call(null,c__4375__auto____$1,i__32848);var col_i = cljs.core.nth.call(null,vec__32854,(0),null);var col = cljs.core.nth.call(null,vec__32854,(1),null);cljs.core.chunk_append.call(null,b__32849,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32855__$1 = (((G__32855 == null))?null:cljs.core.get.call(null,rowcol,G__32855));var G__32855__$2 = (((G__32855__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32855__$1));var G__32855__$3 = (((G__32855__$2 == null))?null:render_fn__$1.call(null,G__32855__$2));return G__32855__$3;
})():null)], null)));
{
var G__32927 = (i__32848 + (1));
i__32848 = G__32927;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32849),iter__32846.call(null,cljs.core.chunk_rest.call(null,s__32847__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32849),null);
}
} else
{var vec__32856 = cljs.core.first.call(null,s__32847__$2);var col_i = cljs.core.nth.call(null,vec__32856,(0),null);var col = cljs.core.nth.call(null,vec__32856,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32857__$1 = (((G__32857 == null))?null:cljs.core.get.call(null,rowcol,G__32857));var G__32857__$2 = (((G__32857__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32857__$1));var G__32857__$3 = (((G__32857__$2 == null))?null:render_fn__$1.call(null,G__32857__$2));return G__32857__$3;
})():null)], null)),iter__32846.call(null,cljs.core.rest.call(null,s__32847__$2)));
}
} else
{return null;
}
break;
}
});})(i__32817,vec__32845,row_i,row,c__4375__auto__,size__4376__auto__,b__32818,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__32817,vec__32845,row_i,row,c__4375__auto__,size__4376__auto__,b__32818,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__32928 = (i__32817 + (1));
i__32817 = G__32928;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32818),iter__32815.call(null,cljs.core.chunk_rest.call(null,s__32816__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32818),null);
}
} else
{var vec__32858 = cljs.core.first.call(null,s__32816__$2);var row_i = cljs.core.nth.call(null,vec__32858,(0),null);var row = cljs.core.nth.call(null,vec__32858,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__32858,row_i,row,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function iter__32859(s__32860){return (new cljs.core.LazySeq(null,((function (vec__32858,row_i,row,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function (){var s__32860__$1 = s__32860;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32860__$1);if(temp__4126__auto____$1)
{var s__32860__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32860__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32860__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32862 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32861 = (0);while(true){
if((i__32861 < size__4376__auto__))
{var vec__32867 = cljs.core._nth.call(null,c__4375__auto__,i__32861);var col_i = cljs.core.nth.call(null,vec__32867,(0),null);var col = cljs.core.nth.call(null,vec__32867,(1),null);cljs.core.chunk_append.call(null,b__32862,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32868__$1 = (((G__32868 == null))?null:cljs.core.get.call(null,rowcol,G__32868));var G__32868__$2 = (((G__32868__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32868__$1));var G__32868__$3 = (((G__32868__$2 == null))?null:render_fn__$1.call(null,G__32868__$2));return G__32868__$3;
})():null)], null)));
{
var G__32929 = (i__32861 + (1));
i__32861 = G__32929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32862),iter__32859.call(null,cljs.core.chunk_rest.call(null,s__32860__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32862),null);
}
} else
{var vec__32869 = cljs.core.first.call(null,s__32860__$2);var col_i = cljs.core.nth.call(null,vec__32869,(0),null);var col = cljs.core.nth.call(null,vec__32869,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32870__$1 = (((G__32870 == null))?null:cljs.core.get.call(null,rowcol,G__32870));var G__32870__$2 = (((G__32870__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32870__$1));var G__32870__$3 = (((G__32870__$2 == null))?null:render_fn__$1.call(null,G__32870__$2));return G__32870__$3;
})():null)], null)),iter__32859.call(null,cljs.core.rest.call(null,s__32860__$2)));
}
} else
{return null;
}
break;
}
});})(vec__32858,row_i,row,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__32858,row_i,row,s__32816__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__32815.call(null,cljs.core.rest.call(null,s__32816__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32812),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs32814 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32814))?sablono.interpreter.attributes.call(null,attrs32814):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32814))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32814)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function iter__32871(s__32872){return (new cljs.core.LazySeq(null,((function (attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function (){var s__32872__$1 = s__32872;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32872__$1);if(temp__4126__auto__)
{var s__32872__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32872__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32872__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32874 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32873 = (0);while(true){
if((i__32873 < size__4376__auto__))
{var vec__32901 = cljs.core._nth.call(null,c__4375__auto__,i__32873);var row_i = cljs.core.nth.call(null,vec__32901,(0),null);var row = cljs.core.nth.call(null,vec__32901,(1),null);cljs.core.chunk_append.call(null,b__32874,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__32873,vec__32901,row_i,row,c__4375__auto__,size__4376__auto__,b__32874,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function iter__32902(s__32903){return (new cljs.core.LazySeq(null,((function (i__32873,vec__32901,row_i,row,c__4375__auto__,size__4376__auto__,b__32874,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function (){var s__32903__$1 = s__32903;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32903__$1);if(temp__4126__auto____$1)
{var s__32903__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32903__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32903__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32905 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32904 = (0);while(true){
if((i__32904 < size__4376__auto____$1))
{var vec__32910 = cljs.core._nth.call(null,c__4375__auto____$1,i__32904);var col_i = cljs.core.nth.call(null,vec__32910,(0),null);var col = cljs.core.nth.call(null,vec__32910,(1),null);cljs.core.chunk_append.call(null,b__32905,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32911__$1 = (((G__32911 == null))?null:cljs.core.get.call(null,rowcol,G__32911));var G__32911__$2 = (((G__32911__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32911__$1));var G__32911__$3 = (((G__32911__$2 == null))?null:render_fn__$1.call(null,G__32911__$2));return G__32911__$3;
})():null)], null)));
{
var G__32930 = (i__32904 + (1));
i__32904 = G__32930;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32905),iter__32902.call(null,cljs.core.chunk_rest.call(null,s__32903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32905),null);
}
} else
{var vec__32912 = cljs.core.first.call(null,s__32903__$2);var col_i = cljs.core.nth.call(null,vec__32912,(0),null);var col = cljs.core.nth.call(null,vec__32912,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32913__$1 = (((G__32913 == null))?null:cljs.core.get.call(null,rowcol,G__32913));var G__32913__$2 = (((G__32913__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32913__$1));var G__32913__$3 = (((G__32913__$2 == null))?null:render_fn__$1.call(null,G__32913__$2));return G__32913__$3;
})():null)], null)),iter__32902.call(null,cljs.core.rest.call(null,s__32903__$2)));
}
} else
{return null;
}
break;
}
});})(i__32873,vec__32901,row_i,row,c__4375__auto__,size__4376__auto__,b__32874,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__32873,vec__32901,row_i,row,c__4375__auto__,size__4376__auto__,b__32874,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__32931 = (i__32873 + (1));
i__32873 = G__32931;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32874),iter__32871.call(null,cljs.core.chunk_rest.call(null,s__32872__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32874),null);
}
} else
{var vec__32914 = cljs.core.first.call(null,s__32872__$2);var row_i = cljs.core.nth.call(null,vec__32914,(0),null);var row = cljs.core.nth.call(null,vec__32914,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__32914,row_i,row,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function iter__32915(s__32916){return (new cljs.core.LazySeq(null,((function (vec__32914,row_i,row,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn){
return (function (){var s__32916__$1 = s__32916;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32916__$1);if(temp__4126__auto____$1)
{var s__32916__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32916__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32916__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32918 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32917 = (0);while(true){
if((i__32917 < size__4376__auto__))
{var vec__32923 = cljs.core._nth.call(null,c__4375__auto__,i__32917);var col_i = cljs.core.nth.call(null,vec__32923,(0),null);var col = cljs.core.nth.call(null,vec__32923,(1),null);cljs.core.chunk_append.call(null,b__32918,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32924__$1 = (((G__32924 == null))?null:cljs.core.get.call(null,rowcol,G__32924));var G__32924__$2 = (((G__32924__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32924__$1));var G__32924__$3 = (((G__32924__$2 == null))?null:render_fn__$1.call(null,G__32924__$2));return G__32924__$3;
})():null)], null)));
{
var G__32932 = (i__32917 + (1));
i__32917 = G__32932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32918),iter__32915.call(null,cljs.core.chunk_rest.call(null,s__32916__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32918),null);
}
} else
{var vec__32925 = cljs.core.first.call(null,s__32916__$2);var col_i = cljs.core.nth.call(null,vec__32925,(0),null);var col = cljs.core.nth.call(null,vec__32925,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__32926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__32926__$1 = (((G__32926 == null))?null:cljs.core.get.call(null,rowcol,G__32926));var G__32926__$2 = (((G__32926__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__32926__$1));var G__32926__$3 = (((G__32926__$2 == null))?null:render_fn__$1.call(null,G__32926__$2));return G__32926__$3;
})():null)], null)),iter__32915.call(null,cljs.core.rest.call(null,s__32916__$2)));
}
} else
{return null;
}
break;
}
});})(vec__32914,row_i,row,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__32914,row_i,row,s__32872__$2,temp__4126__auto__,attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__32871.call(null,cljs.core.rest.call(null,s__32872__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs32812,rowcol,render_fn__$1,map__32809,map__32809__$1,map__32810,map__32810__$1,table_data,query,results,map__32811,map__32811__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__32933){var map__32979 = p__32933;var map__32979__$1 = ((cljs.core.seq_QMARK_.call(null,map__32979))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);var map__32980 = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32980__$1 = ((cljs.core.seq_QMARK_.call(null,map__32980))?cljs.core.apply.call(null,cljs.core.hash_map,map__32980):map__32980);var table_data = map__32980__$1;var query = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__32981 = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32981__$1 = ((cljs.core.seq_QMARK_.call(null,map__32981))?cljs.core.apply.call(null,cljs.core.hash_map,map__32981):map__32981);var controls = map__32981__$1;var title = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"title","title",636505583));var x_axis = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function (p__32982){var map__32983 = p__32982;var map__32983__$1 = ((cljs.core.seq_QMARK_.call(null,map__32983))?cljs.core.apply.call(null,cljs.core.hash_map,map__32983):map__32983);var x = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function iter__32984(s__32985){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function (){var s__32985__$1 = s__32985;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32985__$1);if(temp__4126__auto__)
{var s__32985__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32985__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32985__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32987 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32986 = (0);while(true){
if((i__32986 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__32986);cljs.core.chunk_append.call(null,b__32987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__32986,yk,c__4375__auto__,size__4376__auto__,b__32987,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function iter__32996(s__32997){return (new cljs.core.LazySeq(null,((function (i__32986,yk,c__4375__auto__,size__4376__auto__,b__32987,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function (){var s__32997__$1 = s__32997;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32997__$1);if(temp__4126__auto____$1)
{var s__32997__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32997__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32997__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32999 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32998 = (0);while(true){
if((i__32998 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__32998);cljs.core.chunk_append.call(null,b__32999,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33024 = (i__32998 + (1));
i__32998 = G__33024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32999),iter__32996.call(null,cljs.core.chunk_rest.call(null,s__32997__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32999),null);
}
} else
{var xk = cljs.core.first.call(null,s__32997__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__32996.call(null,cljs.core.rest.call(null,s__32997__$2)));
}
} else
{return null;
}
break;
}
});})(i__32986,yk,c__4375__auto__,size__4376__auto__,b__32987,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
,null,null));
});})(i__32986,yk,c__4375__auto__,size__4376__auto__,b__32987,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33025 = (i__32986 + (1));
i__32986 = G__33025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32987),iter__32984.call(null,cljs.core.chunk_rest.call(null,s__32985__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32987),null);
}
} else
{var yk = cljs.core.first.call(null,s__32985__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function iter__33000(s__33001){return (new cljs.core.LazySeq(null,((function (yk,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function (){var s__33001__$1 = s__33001;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33001__$1);if(temp__4126__auto____$1)
{var s__33001__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33001__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33001__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33003 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33002 = (0);while(true){
if((i__33002 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__33002);cljs.core.chunk_append.call(null,b__33003,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33026 = (i__33002 + (1));
i__33002 = G__33026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33003),iter__33000.call(null,cljs.core.chunk_rest.call(null,s__33001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33003),null);
}
} else
{var xk = cljs.core.first.call(null,s__33001__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33000.call(null,cljs.core.rest.call(null,s__33001__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__32985__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__32984.call(null,cljs.core.rest.call(null,s__32985__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function iter__33004(s__33005){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function (){var s__33005__$1 = s__33005;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33005__$1);if(temp__4126__auto__)
{var s__33005__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33005__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33005__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33007 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33006 = (0);while(true){
if((i__33006 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__33006);cljs.core.chunk_append.call(null,b__33007,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33027 = (i__33006 + (1));
i__33006 = G__33027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33007),iter__33004.call(null,cljs.core.chunk_rest.call(null,s__33005__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33007),null);
}
} else
{var xa = cljs.core.first.call(null,s__33005__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__33004.call(null,cljs.core.rest.call(null,s__33005__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function iter__33008(s__33009){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function (){var s__33009__$1 = s__33009;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33009__$1);if(temp__4126__auto__)
{var s__33009__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33009__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33009__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33011 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33010 = (0);while(true){
if((i__33010 < size__4376__auto__))
{var vec__33014 = cljs.core._nth.call(null,c__4375__auto__,i__33010);var ya = cljs.core.nth.call(null,vec__33014,(0),null);var i = cljs.core.nth.call(null,vec__33014,(1),null);cljs.core.chunk_append.call(null,b__33011,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33028 = (i__33010 + (1));
i__33010 = G__33028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33011),iter__33008.call(null,cljs.core.chunk_rest.call(null,s__33009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33011),null);
}
} else
{var vec__33015 = cljs.core.first.call(null,s__33009__$2);var ya = cljs.core.nth.call(null,vec__33015,(0),null);var i = cljs.core.nth.call(null,vec__33015,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__33008.call(null,cljs.core.rest.call(null,s__33009__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function iter__33016(s__33017){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn){
return (function (){var s__33017__$1 = s__33017;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33017__$1);if(temp__4126__auto__)
{var s__33017__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33017__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33017__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33019 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33018 = (0);while(true){
if((i__33018 < size__4376__auto__))
{var vec__33022 = cljs.core._nth.call(null,c__4375__auto__,i__33018);var ya = cljs.core.nth.call(null,vec__33022,(0),null);var i = cljs.core.nth.call(null,vec__33022,(1),null);cljs.core.chunk_append.call(null,b__33019,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33029 = (i__33018 + (1));
i__33018 = G__33029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33019),iter__33016.call(null,cljs.core.chunk_rest.call(null,s__33017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33019),null);
}
} else
{var vec__33023 = cljs.core.first.call(null,s__33017__$2);var ya = cljs.core.nth.call(null,vec__33023,(0),null);var i = cljs.core.nth.call(null,vec__33023,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33016.call(null,cljs.core.rest.call(null,s__33017__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__32979,map__32979__$1,map__32980,map__32980__$1,table_data,query,results,map__32981,map__32981__$1,controls,title,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33151 = schema.utils.use_fn_validation;var output_schema33031_33152 = schema.core.Any;var input_schema33032_33153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33033_33154 = schema.core.checker.call(null,input_schema33032_33153);var output_checker33034_33155 = schema.core.checker.call(null,output_schema33031_33152);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function ranges_chart_component(G__33035,G__33036){var validate__6034__auto__ = ufv___33151.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33035,G__33036], null);var temp__4126__auto___33157 = input_checker33033_33154.call(null,args__6035__auto___33156);if(cljs.core.truth_(temp__4126__auto___33157))
{var error__6036__auto___33158 = temp__4126__auto___33157;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33158,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33156,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33032_33153,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33097 = G__33035;var map__33098 = G__33097;var map__33098__$1 = ((cljs.core.seq_QMARK_.call(null,map__33098))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);var props = map__33098__$1;var map__33099 = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33099__$1 = ((cljs.core.seq_QMARK_.call(null,map__33099))?cljs.core.apply.call(null,cljs.core.hash_map,map__33099):map__33099);var table_state = map__33099__$1;var table_data = cljs.core.get.call(null,map__33099__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33100 = cljs.core.get.call(null,map__33099__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33100__$1 = ((cljs.core.seq_QMARK_.call(null,map__33100))?cljs.core.apply.call(null,cljs.core.hash_map,map__33100):map__33100);var controls = map__33100__$1;var index_type = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33036;var G__33097__$1 = G__33097;var owner__$1 = owner;while(true){
var map__33101 = G__33097__$1;var map__33101__$1 = ((cljs.core.seq_QMARK_.call(null,map__33101))?cljs.core.apply.call(null,cljs.core.hash_map,map__33101):map__33101);var props__$1 = map__33101__$1;var map__33102 = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33102__$1 = ((cljs.core.seq_QMARK_.call(null,map__33102))?cljs.core.apply.call(null,cljs.core.hash_map,map__33102):map__33102);var table_state__$1 = map__33102__$1;var table_data__$1 = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33103 = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33103__$1 = ((cljs.core.seq_QMARK_.call(null,map__33103))?cljs.core.apply.call(null,cljs.core.hash_map,map__33103):map__33103);var controls__$1 = map__33103__$1;var index_type__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33104 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33104 = (function (index_type,row_aggs,owner,G__33036,G__33097,metric_path,props,map__33100,row_path,output_schema33031,table_data,ranges_chart_component,map__33103,metric_aggs,index,input_schema33032,col_path,input_checker33033,filter_spec,map__33101,table_state,G__33035,output_checker33034,controls,col_aggs,title,map__33102,rows,cols,validate__6034__auto__,map__33098,map__33099,ufv__,meta33105){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.G__33036 = G__33036;
this.G__33097 = G__33097;
this.metric_path = metric_path;
this.props = props;
this.map__33100 = map__33100;
this.row_path = row_path;
this.output_schema33031 = output_schema33031;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.map__33103 = map__33103;
this.metric_aggs = metric_aggs;
this.index = index;
this.input_schema33032 = input_schema33032;
this.col_path = col_path;
this.input_checker33033 = input_checker33033;
this.filter_spec = filter_spec;
this.map__33101 = map__33101;
this.table_state = table_state;
this.G__33035 = G__33035;
this.output_checker33034 = output_checker33034;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.map__33102 = map__33102;
this.rows = rows;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__33098 = map__33098;
this.map__33099 = map__33099;
this.ufv__ = ufv__;
this.meta33105 = meta33105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33104.cljs$lang$type = true;
clustermap.components.ranges_chart.t33104.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33104";
clustermap.components.ranges_chart.t33104.cljs$lang$ctorPrWriter = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33104");
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.t33104.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33104.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.t33104.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33104.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (_,p__33107,___$1){var self__ = this;
var map__33108 = p__33107;var map__33108__$1 = ((cljs.core.seq_QMARK_.call(null,map__33108))?cljs.core.apply.call(null,cljs.core.hash_map,map__33108):map__33108);var prev_props = map__33108__$1;var map__33109 = cljs.core.get.call(null,map__33108__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33109__$1 = ((cljs.core.seq_QMARK_.call(null,map__33109))?cljs.core.apply.call(null,cljs.core.hash_map,map__33109):map__33109);var prev_table_data = cljs.core.get.call(null,map__33109__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.t33104.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33104.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (_,p__33110,p__33111){var self__ = this;
var map__33112 = p__33110;var map__33112__$1 = ((cljs.core.seq_QMARK_.call(null,map__33112))?cljs.core.apply.call(null,cljs.core.hash_map,map__33112):map__33112);var next_props = map__33112__$1;var map__33113 = cljs.core.get.call(null,map__33112__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33113__$1 = ((cljs.core.seq_QMARK_.call(null,map__33113))?cljs.core.apply.call(null,cljs.core.hash_map,map__33113):map__33113);var next_table_state = map__33113__$1;var next_table_data = cljs.core.get.call(null,map__33113__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33114 = cljs.core.get.call(null,map__33113__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33114__$1 = ((cljs.core.seq_QMARK_.call(null,map__33114))?cljs.core.apply.call(null,cljs.core.hash_map,map__33114):map__33114);var next_controls = map__33114__$1;var next_col_aggs = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33114__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33112__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33115 = p__33111;var map__33115__$1 = ((cljs.core.seq_QMARK_.call(null,map__33115))?cljs.core.apply.call(null,cljs.core.hash_map,map__33115):map__33115);var fetch_data_fn = cljs.core.get.call(null,map__33115__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33112,map__33112__$1,next_props,map__33113,map__33113__$1,next_table_state,next_table_data,map__33114,map__33114__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33115,map__33115__$1,fetch_data_fn,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33112,map__33112__$1,next_props,map__33113,map__33113__$1,next_table_state,next_table_data,map__33114,map__33114__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33115,map__33115__$1,fetch_data_fn,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (state_33133){var state_val_33134 = (state_33133[(1)]);if((state_val_33134 === (5)))
{var inst_33131 = (state_33133[(2)]);var state_33133__$1 = state_33133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33133__$1,inst_33131);
} else
{if((state_val_33134 === (4)))
{var state_33133__$1 = state_33133;var statearr_33135_33159 = state_33133__$1;(statearr_33135_33159[(2)] = null);
(statearr_33135_33159[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33134 === (3)))
{var inst_33118 = (state_33133[(7)]);var inst_33120 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33121 = ["RANGES-TABLE-DATA",inst_33118];var inst_33122 = (new cljs.core.PersistentVector(null,2,(5),inst_33120,inst_33121,null));var inst_33123 = cljs.core.clj__GT_js.call(null,inst_33122);var inst_33124 = console.log(inst_33123);var inst_33125 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33126 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33127 = (new cljs.core.PersistentVector(null,1,(5),inst_33125,inst_33126,null));var inst_33128 = om.core.update_BANG_.call(null,self__.table_state,inst_33127,inst_33118);var state_33133__$1 = (function (){var statearr_33136 = state_33133;(statearr_33136[(8)] = inst_33124);
return statearr_33136;
})();var statearr_33137_33160 = state_33133__$1;(statearr_33137_33160[(2)] = inst_33128);
(statearr_33137_33160[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33134 === (2)))
{var inst_33118 = (state_33133[(7)]);var inst_33118__$1 = (state_33133[(2)]);var state_33133__$1 = (function (){var statearr_33138 = state_33133;(statearr_33138[(7)] = inst_33118__$1);
return statearr_33138;
})();if(cljs.core.truth_(inst_33118__$1))
{var statearr_33139_33161 = state_33133__$1;(statearr_33139_33161[(1)] = (3));
} else
{var statearr_33140_33162 = state_33133__$1;(statearr_33140_33162[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33134 === (1)))
{var inst_33116 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33133__$1 = state_33133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33133__$1,(2),inst_33116);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33112,map__33112__$1,next_props,map__33113,map__33113__$1,next_table_state,next_table_data,map__33114,map__33114__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33115,map__33115__$1,fetch_data_fn,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33112,map__33112__$1,next_props,map__33113,map__33113__$1,next_table_state,next_table_data,map__33114,map__33114__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33115,map__33115__$1,fetch_data_fn,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33144 = [null,null,null,null,null,null,null,null,null];(statearr_33144[(0)] = state_machine__9111__auto__);
(statearr_33144[(1)] = (1));
return statearr_33144;
});
var state_machine__9111__auto____1 = (function (state_33133){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33133);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33145){if((e33145 instanceof Object))
{var ex__9114__auto__ = e33145;var statearr_33146_33163 = state_33133;(statearr_33146_33163[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33145;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33164 = state_33133;
state_33133 = G__33164;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33133){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33112,map__33112__$1,next_props,map__33113,map__33113__$1,next_table_state,next_table_data,map__33114,map__33114__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33115,map__33115__$1,fetch_data_fn,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
})();var state__9127__auto__ = (function (){var statearr_33147 = f__9126__auto__.call(null);(statearr_33147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33112,map__33112__$1,next_props,map__33113,map__33113__$1,next_table_state,next_table_data,map__33114,map__33114__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33115,map__33115__$1,fetch_data_fn,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.t33104.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33104.prototype.om$core$IRender$render$arity$1 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.t33104.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33104.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33150 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33150__$1 = (((G__33150 == null))?null:jayq.core.$.call(null,G__33150));var G__33150__$2 = (((G__33150__$1 == null))?null:G__33150__$1.highcharts());var G__33150__$3 = (((G__33150__$2 == null))?null:G__33150__$2.reflow());return G__33150__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
);
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.t33104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (_33106){var self__ = this;
var _33106__$1 = this;return self__.meta33105;
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.t33104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function (_33106,meta33105__$1){var self__ = this;
var _33106__$1 = this;return (new clustermap.components.ranges_chart.t33104(self__.index_type,self__.row_aggs,self__.owner,self__.G__33036,self__.G__33097,self__.metric_path,self__.props,self__.map__33100,self__.row_path,self__.output_schema33031,self__.table_data,self__.ranges_chart_component,self__.map__33103,self__.metric_aggs,self__.index,self__.input_schema33032,self__.col_path,self__.input_checker33033,self__.filter_spec,self__.map__33101,self__.table_state,self__.G__33035,self__.output_checker33034,self__.controls,self__.col_aggs,self__.title,self__.map__33102,self__.rows,self__.cols,self__.validate__6034__auto__,self__.map__33098,self__.map__33099,self__.ufv__,meta33105__$1));
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
clustermap.components.ranges_chart.__GT_t33104 = ((function (map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155){
return (function __GT_t33104(index_type__$2,row_aggs__$2,owner__$3,G__33036__$1,G__33097__$2,metric_path__$2,props__$2,map__33100__$2,row_path__$2,output_schema33031__$1,table_data__$2,ranges_chart_component__$1,map__33103__$2,metric_aggs__$2,index__$2,input_schema33032__$1,col_path__$2,input_checker33033__$1,filter_spec__$2,map__33101__$2,table_state__$2,G__33035__$1,output_checker33034__$1,controls__$2,col_aggs__$2,title__$2,map__33102__$2,rows__$2,cols__$2,validate__6034__auto____$1,map__33098__$2,map__33099__$2,ufv____$1,meta33105){return (new clustermap.components.ranges_chart.t33104(index_type__$2,row_aggs__$2,owner__$3,G__33036__$1,G__33097__$2,metric_path__$2,props__$2,map__33100__$2,row_path__$2,output_schema33031__$1,table_data__$2,ranges_chart_component__$1,map__33103__$2,metric_aggs__$2,index__$2,input_schema33032__$1,col_path__$2,input_checker33033__$1,filter_spec__$2,map__33101__$2,table_state__$2,G__33035__$1,output_checker33034__$1,controls__$2,col_aggs__$2,title__$2,map__33102__$2,rows__$2,cols__$2,validate__6034__auto____$1,map__33098__$2,map__33099__$2,ufv____$1,meta33105));
});})(map__33101,map__33101__$1,props__$1,map__33102,map__33102__$1,table_state__$1,table_data__$1,map__33103,map__33103__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33097,map__33098,map__33098__$1,props,map__33099,map__33099__$1,table_state,table_data,map__33100,map__33100__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
}
return (new clustermap.components.ranges_chart.t33104(index_type__$1,row_aggs__$1,owner__$2,G__33036,G__33097__$1,metric_path__$1,props__$1,map__33100__$1,row_path__$1,output_schema33031_33152,table_data__$1,ranges_chart_component,map__33103__$1,metric_aggs__$1,index__$1,input_schema33032_33153,col_path__$1,input_checker33033_33154,filter_spec__$1,map__33101__$1,table_state__$1,G__33035,output_checker33034_33155,controls__$1,col_aggs__$1,title__$1,map__33102__$1,rows__$1,cols__$1,validate__6034__auto__,map__33098__$1,map__33099__$1,ufv___33151,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33165 = output_checker33034_33155.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33165))
{var error__6036__auto___33166 = temp__4126__auto___33165;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33166)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33166,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33031_33152,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33151,output_schema33031_33152,input_schema33032_33153,input_checker33033_33154,output_checker33034_33155))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33031_33152,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33032_33153], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33030){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33030);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33030){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
