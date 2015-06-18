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
clustermap.components.ranges_table.render_table = (function render_table(p__28501,owner,opts){var map__28620 = p__28501;var map__28620__$1 = ((cljs.core.seq_QMARK_.call(null,map__28620))?cljs.core.apply.call(null,cljs.core.hash_map,map__28620):map__28620);var map__28621 = cljs.core.get.call(null,map__28620__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28621__$1 = ((cljs.core.seq_QMARK_.call(null,map__28621))?cljs.core.apply.call(null,cljs.core.hash_map,map__28621):map__28621);var table_data = map__28621__$1;var query = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28622 = cljs.core.get.call(null,map__28620__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28622__$1 = ((cljs.core.seq_QMARK_.call(null,map__28622))?cljs.core.apply.call(null,cljs.core.hash_map,map__28622):map__28622);var controls = map__28622__$1;var title = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28623 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28623))?sablono.interpreter.attributes.call(null,attrs28623):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28623))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28624 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28624))?sablono.interpreter.attributes.call(null,attrs28624):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28624))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28624)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function iter__28626(s__28627){return (new cljs.core.LazySeq(null,((function (attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28627__$1 = s__28627;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28627__$1);if(temp__4126__auto__)
{var s__28627__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28627__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28627__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28629 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28628 = (0);while(true){
if((i__28628 < size__4376__auto__))
{var vec__28656 = cljs.core._nth.call(null,c__4375__auto__,i__28628);var row_i = cljs.core.nth.call(null,vec__28656,(0),null);var row = cljs.core.nth.call(null,vec__28656,(1),null);cljs.core.chunk_append.call(null,b__28629,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28628,vec__28656,row_i,row,c__4375__auto__,size__4376__auto__,b__28629,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function iter__28657(s__28658){return (new cljs.core.LazySeq(null,((function (i__28628,vec__28656,row_i,row,c__4375__auto__,size__4376__auto__,b__28629,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28658__$1 = s__28658;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28658__$1);if(temp__4126__auto____$1)
{var s__28658__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28658__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28658__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28660 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28659 = (0);while(true){
if((i__28659 < size__4376__auto____$1))
{var vec__28665 = cljs.core._nth.call(null,c__4375__auto____$1,i__28659);var col_i = cljs.core.nth.call(null,vec__28665,(0),null);var col = cljs.core.nth.call(null,vec__28665,(1),null);cljs.core.chunk_append.call(null,b__28660,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28666__$1 = (((G__28666 == null))?null:cljs.core.get.call(null,rowcol,G__28666));var G__28666__$2 = (((G__28666__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28666__$1));var G__28666__$3 = (((G__28666__$2 == null))?null:render_fn__$1.call(null,G__28666__$2));return G__28666__$3;
})():null)], null)));
{
var G__28738 = (i__28659 + (1));
i__28659 = G__28738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28660),iter__28657.call(null,cljs.core.chunk_rest.call(null,s__28658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28660),null);
}
} else
{var vec__28667 = cljs.core.first.call(null,s__28658__$2);var col_i = cljs.core.nth.call(null,vec__28667,(0),null);var col = cljs.core.nth.call(null,vec__28667,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28668__$1 = (((G__28668 == null))?null:cljs.core.get.call(null,rowcol,G__28668));var G__28668__$2 = (((G__28668__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28668__$1));var G__28668__$3 = (((G__28668__$2 == null))?null:render_fn__$1.call(null,G__28668__$2));return G__28668__$3;
})():null)], null)),iter__28657.call(null,cljs.core.rest.call(null,s__28658__$2)));
}
} else
{return null;
}
break;
}
});})(i__28628,vec__28656,row_i,row,c__4375__auto__,size__4376__auto__,b__28629,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28628,vec__28656,row_i,row,c__4375__auto__,size__4376__auto__,b__28629,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28739 = (i__28628 + (1));
i__28628 = G__28739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28629),iter__28626.call(null,cljs.core.chunk_rest.call(null,s__28627__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28629),null);
}
} else
{var vec__28669 = cljs.core.first.call(null,s__28627__$2);var row_i = cljs.core.nth.call(null,vec__28669,(0),null);var row = cljs.core.nth.call(null,vec__28669,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28669,row_i,row,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function iter__28670(s__28671){return (new cljs.core.LazySeq(null,((function (vec__28669,row_i,row,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28671__$1 = s__28671;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28671__$1);if(temp__4126__auto____$1)
{var s__28671__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28671__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28671__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28673 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28672 = (0);while(true){
if((i__28672 < size__4376__auto__))
{var vec__28678 = cljs.core._nth.call(null,c__4375__auto__,i__28672);var col_i = cljs.core.nth.call(null,vec__28678,(0),null);var col = cljs.core.nth.call(null,vec__28678,(1),null);cljs.core.chunk_append.call(null,b__28673,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28679__$1 = (((G__28679 == null))?null:cljs.core.get.call(null,rowcol,G__28679));var G__28679__$2 = (((G__28679__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28679__$1));var G__28679__$3 = (((G__28679__$2 == null))?null:render_fn__$1.call(null,G__28679__$2));return G__28679__$3;
})():null)], null)));
{
var G__28740 = (i__28672 + (1));
i__28672 = G__28740;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28673),iter__28670.call(null,cljs.core.chunk_rest.call(null,s__28671__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28673),null);
}
} else
{var vec__28680 = cljs.core.first.call(null,s__28671__$2);var col_i = cljs.core.nth.call(null,vec__28680,(0),null);var col = cljs.core.nth.call(null,vec__28680,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28681__$1 = (((G__28681 == null))?null:cljs.core.get.call(null,rowcol,G__28681));var G__28681__$2 = (((G__28681__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28681__$1));var G__28681__$3 = (((G__28681__$2 == null))?null:render_fn__$1.call(null,G__28681__$2));return G__28681__$3;
})():null)], null)),iter__28670.call(null,cljs.core.rest.call(null,s__28671__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28669,row_i,row,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28669,row_i,row,s__28627__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28626.call(null,cljs.core.rest.call(null,s__28627__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28623),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28625 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28625))?sablono.interpreter.attributes.call(null,attrs28625):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28625))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28625)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function iter__28682(s__28683){return (new cljs.core.LazySeq(null,((function (attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28683__$1 = s__28683;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28683__$1);if(temp__4126__auto__)
{var s__28683__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28683__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28683__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28685 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28684 = (0);while(true){
if((i__28684 < size__4376__auto__))
{var vec__28712 = cljs.core._nth.call(null,c__4375__auto__,i__28684);var row_i = cljs.core.nth.call(null,vec__28712,(0),null);var row = cljs.core.nth.call(null,vec__28712,(1),null);cljs.core.chunk_append.call(null,b__28685,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28684,vec__28712,row_i,row,c__4375__auto__,size__4376__auto__,b__28685,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function iter__28713(s__28714){return (new cljs.core.LazySeq(null,((function (i__28684,vec__28712,row_i,row,c__4375__auto__,size__4376__auto__,b__28685,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28714__$1 = s__28714;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28714__$1);if(temp__4126__auto____$1)
{var s__28714__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28714__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28714__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28716 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28715 = (0);while(true){
if((i__28715 < size__4376__auto____$1))
{var vec__28721 = cljs.core._nth.call(null,c__4375__auto____$1,i__28715);var col_i = cljs.core.nth.call(null,vec__28721,(0),null);var col = cljs.core.nth.call(null,vec__28721,(1),null);cljs.core.chunk_append.call(null,b__28716,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28722__$1 = (((G__28722 == null))?null:cljs.core.get.call(null,rowcol,G__28722));var G__28722__$2 = (((G__28722__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28722__$1));var G__28722__$3 = (((G__28722__$2 == null))?null:render_fn__$1.call(null,G__28722__$2));return G__28722__$3;
})():null)], null)));
{
var G__28741 = (i__28715 + (1));
i__28715 = G__28741;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28716),iter__28713.call(null,cljs.core.chunk_rest.call(null,s__28714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28716),null);
}
} else
{var vec__28723 = cljs.core.first.call(null,s__28714__$2);var col_i = cljs.core.nth.call(null,vec__28723,(0),null);var col = cljs.core.nth.call(null,vec__28723,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28724__$1 = (((G__28724 == null))?null:cljs.core.get.call(null,rowcol,G__28724));var G__28724__$2 = (((G__28724__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28724__$1));var G__28724__$3 = (((G__28724__$2 == null))?null:render_fn__$1.call(null,G__28724__$2));return G__28724__$3;
})():null)], null)),iter__28713.call(null,cljs.core.rest.call(null,s__28714__$2)));
}
} else
{return null;
}
break;
}
});})(i__28684,vec__28712,row_i,row,c__4375__auto__,size__4376__auto__,b__28685,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28684,vec__28712,row_i,row,c__4375__auto__,size__4376__auto__,b__28685,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28742 = (i__28684 + (1));
i__28684 = G__28742;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28685),iter__28682.call(null,cljs.core.chunk_rest.call(null,s__28683__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28685),null);
}
} else
{var vec__28725 = cljs.core.first.call(null,s__28683__$2);var row_i = cljs.core.nth.call(null,vec__28725,(0),null);var row = cljs.core.nth.call(null,vec__28725,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28725,row_i,row,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function iter__28726(s__28727){return (new cljs.core.LazySeq(null,((function (vec__28725,row_i,row,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28727__$1 = s__28727;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28727__$1);if(temp__4126__auto____$1)
{var s__28727__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28727__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28727__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28729 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28728 = (0);while(true){
if((i__28728 < size__4376__auto__))
{var vec__28734 = cljs.core._nth.call(null,c__4375__auto__,i__28728);var col_i = cljs.core.nth.call(null,vec__28734,(0),null);var col = cljs.core.nth.call(null,vec__28734,(1),null);cljs.core.chunk_append.call(null,b__28729,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28735__$1 = (((G__28735 == null))?null:cljs.core.get.call(null,rowcol,G__28735));var G__28735__$2 = (((G__28735__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28735__$1));var G__28735__$3 = (((G__28735__$2 == null))?null:render_fn__$1.call(null,G__28735__$2));return G__28735__$3;
})():null)], null)));
{
var G__28743 = (i__28728 + (1));
i__28728 = G__28743;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28729),iter__28726.call(null,cljs.core.chunk_rest.call(null,s__28727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28729),null);
}
} else
{var vec__28736 = cljs.core.first.call(null,s__28727__$2);var col_i = cljs.core.nth.call(null,vec__28736,(0),null);var col = cljs.core.nth.call(null,vec__28736,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28737__$1 = (((G__28737 == null))?null:cljs.core.get.call(null,rowcol,G__28737));var G__28737__$2 = (((G__28737__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28737__$1));var G__28737__$3 = (((G__28737__$2 == null))?null:render_fn__$1.call(null,G__28737__$2));return G__28737__$3;
})():null)], null)),iter__28726.call(null,cljs.core.rest.call(null,s__28727__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28725,row_i,row,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28725,row_i,row,s__28683__$2,temp__4126__auto__,attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28682.call(null,cljs.core.rest.call(null,s__28683__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28623,rowcol,render_fn__$1,map__28620,map__28620__$1,map__28621,map__28621__$1,table_data,query,results,map__28622,map__28622__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28744,owner){var map__28789 = p__28744;var map__28789__$1 = ((cljs.core.seq_QMARK_.call(null,map__28789))?cljs.core.apply.call(null,cljs.core.hash_map,map__28789):map__28789);var props = map__28789__$1;var map__28790 = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28790__$1 = ((cljs.core.seq_QMARK_.call(null,map__28790))?cljs.core.apply.call(null,cljs.core.hash_map,map__28790):map__28790);var table_state = map__28790__$1;var table_data = cljs.core.get.call(null,map__28790__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28791 = cljs.core.get.call(null,map__28790__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28791__$1 = ((cljs.core.seq_QMARK_.call(null,map__28791))?cljs.core.apply.call(null,cljs.core.hash_map,map__28791):map__28791);var controls = map__28791__$1;var index_type = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28792 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28792 = (function (index_type,row_aggs,owner,metric_path,props,map__28791,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,map__28790,controls,col_aggs,map__28789,title,rows,cols,p__28744,meta28793){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__28791 = map__28791;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.map__28790 = map__28790;
this.controls = controls;
this.col_aggs = col_aggs;
this.map__28789 = map__28789;
this.title = title;
this.rows = rows;
this.cols = cols;
this.p__28744 = p__28744;
this.meta28793 = meta28793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28792.cljs$lang$type = true;
clustermap.components.ranges_table.t28792.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28792";
clustermap.components.ranges_table.t28792.cljs$lang$ctorPrWriter = ((function (map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28792");
});})(map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28792.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28792.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28795,p__28796){var self__ = this;
var map__28797 = p__28795;var map__28797__$1 = ((cljs.core.seq_QMARK_.call(null,map__28797))?cljs.core.apply.call(null,cljs.core.hash_map,map__28797):map__28797);var next_props = map__28797__$1;var map__28798 = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28798__$1 = ((cljs.core.seq_QMARK_.call(null,map__28798))?cljs.core.apply.call(null,cljs.core.hash_map,map__28798):map__28798);var next_table_state = map__28798__$1;var next_table_data = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28799 = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28799__$1 = ((cljs.core.seq_QMARK_.call(null,map__28799))?cljs.core.apply.call(null,cljs.core.hash_map,map__28799):map__28799);var next_controls = map__28799__$1;var next_col_aggs = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28799__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28800 = p__28796;var map__28800__$1 = ((cljs.core.seq_QMARK_.call(null,map__28800))?cljs.core.apply.call(null,cljs.core.hash_map,map__28800):map__28800);var fetch_data_fn = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28797,map__28797__$1,next_props,map__28798,map__28798__$1,next_table_state,next_table_data,map__28799,map__28799__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28800,map__28800__$1,fetch_data_fn,map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28797,map__28797__$1,next_props,map__28798,map__28798__$1,next_table_state,next_table_data,map__28799,map__28799__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28800,map__28800__$1,fetch_data_fn,map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28818){var state_val_28819 = (state_28818[(1)]);if((state_val_28819 === (5)))
{var inst_28816 = (state_28818[(2)]);var state_28818__$1 = state_28818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28818__$1,inst_28816);
} else
{if((state_val_28819 === (4)))
{var state_28818__$1 = state_28818;var statearr_28820_28833 = state_28818__$1;(statearr_28820_28833[(2)] = null);
(statearr_28820_28833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28819 === (3)))
{var inst_28803 = (state_28818[(7)]);var inst_28805 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28806 = ["RANGES-TABLE-DATA",inst_28803];var inst_28807 = (new cljs.core.PersistentVector(null,2,(5),inst_28805,inst_28806,null));var inst_28808 = cljs.core.clj__GT_js.call(null,inst_28807);var inst_28809 = console.log(inst_28808);var inst_28810 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28811 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28812 = (new cljs.core.PersistentVector(null,1,(5),inst_28810,inst_28811,null));var inst_28813 = om.core.update_BANG_.call(null,self__.table_state,inst_28812,inst_28803);var state_28818__$1 = (function (){var statearr_28821 = state_28818;(statearr_28821[(8)] = inst_28809);
return statearr_28821;
})();var statearr_28822_28834 = state_28818__$1;(statearr_28822_28834[(2)] = inst_28813);
(statearr_28822_28834[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28819 === (2)))
{var inst_28803 = (state_28818[(7)]);var inst_28803__$1 = (state_28818[(2)]);var state_28818__$1 = (function (){var statearr_28823 = state_28818;(statearr_28823[(7)] = inst_28803__$1);
return statearr_28823;
})();if(cljs.core.truth_(inst_28803__$1))
{var statearr_28824_28835 = state_28818__$1;(statearr_28824_28835[(1)] = (3));
} else
{var statearr_28825_28836 = state_28818__$1;(statearr_28825_28836[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28819 === (1)))
{var inst_28801 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28818__$1 = state_28818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28818__$1,(2),inst_28801);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28797,map__28797__$1,next_props,map__28798,map__28798__$1,next_table_state,next_table_data,map__28799,map__28799__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28800,map__28800__$1,fetch_data_fn,map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28797,map__28797__$1,next_props,map__28798,map__28798__$1,next_table_state,next_table_data,map__28799,map__28799__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28800,map__28800__$1,fetch_data_fn,map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28829 = [null,null,null,null,null,null,null,null,null];(statearr_28829[(0)] = state_machine__9111__auto__);
(statearr_28829[(1)] = (1));
return statearr_28829;
});
var state_machine__9111__auto____1 = (function (state_28818){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28818);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28830){if((e28830 instanceof Object))
{var ex__9114__auto__ = e28830;var statearr_28831_28837 = state_28818;(statearr_28831_28837[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28830;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28838 = state_28818;
state_28818 = G__28838;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28818){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28797,map__28797__$1,next_props,map__28798,map__28798__$1,next_table_state,next_table_data,map__28799,map__28799__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28800,map__28800__$1,fetch_data_fn,map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28832 = f__9126__auto__.call(null);(statearr_28832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28797,map__28797__$1,next_props,map__28798,map__28798__$1,next_table_state,next_table_data,map__28799,map__28799__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28800,map__28800__$1,fetch_data_fn,map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28792.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28792.prototype.om$core$IRender$render$arity$1 = ((function (map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28792.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28792.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28794){var self__ = this;
var _28794__$1 = this;return self__.meta28793;
});})(map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28794,meta28793__$1){var self__ = this;
var _28794__$1 = this;return (new clustermap.components.ranges_table.t28792(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__28791,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.map__28790,self__.controls,self__.col_aggs,self__.map__28789,self__.title,self__.rows,self__.cols,self__.p__28744,meta28793__$1));
});})(map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28792 = ((function (map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28792(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28791__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,map__28790__$2,controls__$1,col_aggs__$1,map__28789__$2,title__$1,rows__$1,cols__$1,p__28744__$1,meta28793){return (new clustermap.components.ranges_table.t28792(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28791__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,map__28790__$2,controls__$1,col_aggs__$1,map__28789__$2,title__$1,rows__$1,cols__$1,p__28744__$1,meta28793));
});})(map__28789,map__28789__$1,props,map__28790,map__28790__$1,table_state,table_data,map__28791,map__28791__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28792(index_type,row_aggs,owner,metric_path,props,map__28791__$1,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,map__28790__$1,controls,col_aggs,map__28789__$1,title,rows,cols,p__28744,null));
});
