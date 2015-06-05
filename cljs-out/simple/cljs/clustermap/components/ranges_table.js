// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
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
clustermap.components.ranges_table.render_table = (function render_table(p__28049,owner,opts){var map__28168 = p__28049;var map__28168__$1 = ((cljs.core.seq_QMARK_.call(null,map__28168))?cljs.core.apply.call(null,cljs.core.hash_map,map__28168):map__28168);var map__28169 = cljs.core.get.call(null,map__28168__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28169__$1 = ((cljs.core.seq_QMARK_.call(null,map__28169))?cljs.core.apply.call(null,cljs.core.hash_map,map__28169):map__28169);var table_data = map__28169__$1;var query = cljs.core.get.call(null,map__28169__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28169__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28170 = cljs.core.get.call(null,map__28168__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28170__$1 = ((cljs.core.seq_QMARK_.call(null,map__28170))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170):map__28170);var controls = map__28170__$1;var title = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28171 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28171))?sablono.interpreter.attributes.call(null,attrs28171):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28171))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28172 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28172))?sablono.interpreter.attributes.call(null,attrs28172):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28172))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28172)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function iter__28174(s__28175){return (new cljs.core.LazySeq(null,((function (attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28175__$1 = s__28175;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28175__$1);if(temp__4126__auto__)
{var s__28175__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28175__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28175__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28177 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28176 = (0);while(true){
if((i__28176 < size__4376__auto__))
{var vec__28204 = cljs.core._nth.call(null,c__4375__auto__,i__28176);var row_i = cljs.core.nth.call(null,vec__28204,(0),null);var row = cljs.core.nth.call(null,vec__28204,(1),null);cljs.core.chunk_append.call(null,b__28177,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28176,vec__28204,row_i,row,c__4375__auto__,size__4376__auto__,b__28177,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function iter__28205(s__28206){return (new cljs.core.LazySeq(null,((function (i__28176,vec__28204,row_i,row,c__4375__auto__,size__4376__auto__,b__28177,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28206__$1 = s__28206;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28206__$1);if(temp__4126__auto____$1)
{var s__28206__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28206__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28206__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28208 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28207 = (0);while(true){
if((i__28207 < size__4376__auto____$1))
{var vec__28213 = cljs.core._nth.call(null,c__4375__auto____$1,i__28207);var col_i = cljs.core.nth.call(null,vec__28213,(0),null);var col = cljs.core.nth.call(null,vec__28213,(1),null);cljs.core.chunk_append.call(null,b__28208,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28214__$1 = (((G__28214 == null))?null:cljs.core.get.call(null,rowcol,G__28214));var G__28214__$2 = (((G__28214__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28214__$1));var G__28214__$3 = (((G__28214__$2 == null))?null:render_fn__$1.call(null,G__28214__$2));return G__28214__$3;
})():null)], null)));
{
var G__28286 = (i__28207 + (1));
i__28207 = G__28286;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28208),iter__28205.call(null,cljs.core.chunk_rest.call(null,s__28206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28208),null);
}
} else
{var vec__28215 = cljs.core.first.call(null,s__28206__$2);var col_i = cljs.core.nth.call(null,vec__28215,(0),null);var col = cljs.core.nth.call(null,vec__28215,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28216__$1 = (((G__28216 == null))?null:cljs.core.get.call(null,rowcol,G__28216));var G__28216__$2 = (((G__28216__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28216__$1));var G__28216__$3 = (((G__28216__$2 == null))?null:render_fn__$1.call(null,G__28216__$2));return G__28216__$3;
})():null)], null)),iter__28205.call(null,cljs.core.rest.call(null,s__28206__$2)));
}
} else
{return null;
}
break;
}
});})(i__28176,vec__28204,row_i,row,c__4375__auto__,size__4376__auto__,b__28177,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28176,vec__28204,row_i,row,c__4375__auto__,size__4376__auto__,b__28177,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28287 = (i__28176 + (1));
i__28176 = G__28287;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28177),iter__28174.call(null,cljs.core.chunk_rest.call(null,s__28175__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28177),null);
}
} else
{var vec__28217 = cljs.core.first.call(null,s__28175__$2);var row_i = cljs.core.nth.call(null,vec__28217,(0),null);var row = cljs.core.nth.call(null,vec__28217,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28217,row_i,row,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function iter__28218(s__28219){return (new cljs.core.LazySeq(null,((function (vec__28217,row_i,row,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28219__$1 = s__28219;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28219__$1);if(temp__4126__auto____$1)
{var s__28219__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28219__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28219__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28221 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28220 = (0);while(true){
if((i__28220 < size__4376__auto__))
{var vec__28226 = cljs.core._nth.call(null,c__4375__auto__,i__28220);var col_i = cljs.core.nth.call(null,vec__28226,(0),null);var col = cljs.core.nth.call(null,vec__28226,(1),null);cljs.core.chunk_append.call(null,b__28221,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28227__$1 = (((G__28227 == null))?null:cljs.core.get.call(null,rowcol,G__28227));var G__28227__$2 = (((G__28227__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28227__$1));var G__28227__$3 = (((G__28227__$2 == null))?null:render_fn__$1.call(null,G__28227__$2));return G__28227__$3;
})():null)], null)));
{
var G__28288 = (i__28220 + (1));
i__28220 = G__28288;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28221),iter__28218.call(null,cljs.core.chunk_rest.call(null,s__28219__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28221),null);
}
} else
{var vec__28228 = cljs.core.first.call(null,s__28219__$2);var col_i = cljs.core.nth.call(null,vec__28228,(0),null);var col = cljs.core.nth.call(null,vec__28228,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28229__$1 = (((G__28229 == null))?null:cljs.core.get.call(null,rowcol,G__28229));var G__28229__$2 = (((G__28229__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28229__$1));var G__28229__$3 = (((G__28229__$2 == null))?null:render_fn__$1.call(null,G__28229__$2));return G__28229__$3;
})():null)], null)),iter__28218.call(null,cljs.core.rest.call(null,s__28219__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28217,row_i,row,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28217,row_i,row,s__28175__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28174.call(null,cljs.core.rest.call(null,s__28175__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28171),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28173 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28173))?sablono.interpreter.attributes.call(null,attrs28173):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28173))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28173)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function iter__28230(s__28231){return (new cljs.core.LazySeq(null,((function (attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28231__$1 = s__28231;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28231__$1);if(temp__4126__auto__)
{var s__28231__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28231__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28231__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28233 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28232 = (0);while(true){
if((i__28232 < size__4376__auto__))
{var vec__28260 = cljs.core._nth.call(null,c__4375__auto__,i__28232);var row_i = cljs.core.nth.call(null,vec__28260,(0),null);var row = cljs.core.nth.call(null,vec__28260,(1),null);cljs.core.chunk_append.call(null,b__28233,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28232,vec__28260,row_i,row,c__4375__auto__,size__4376__auto__,b__28233,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function iter__28261(s__28262){return (new cljs.core.LazySeq(null,((function (i__28232,vec__28260,row_i,row,c__4375__auto__,size__4376__auto__,b__28233,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28262__$1 = s__28262;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28262__$1);if(temp__4126__auto____$1)
{var s__28262__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28262__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28262__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28264 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28263 = (0);while(true){
if((i__28263 < size__4376__auto____$1))
{var vec__28269 = cljs.core._nth.call(null,c__4375__auto____$1,i__28263);var col_i = cljs.core.nth.call(null,vec__28269,(0),null);var col = cljs.core.nth.call(null,vec__28269,(1),null);cljs.core.chunk_append.call(null,b__28264,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28270__$1 = (((G__28270 == null))?null:cljs.core.get.call(null,rowcol,G__28270));var G__28270__$2 = (((G__28270__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28270__$1));var G__28270__$3 = (((G__28270__$2 == null))?null:render_fn__$1.call(null,G__28270__$2));return G__28270__$3;
})():null)], null)));
{
var G__28289 = (i__28263 + (1));
i__28263 = G__28289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28264),iter__28261.call(null,cljs.core.chunk_rest.call(null,s__28262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28264),null);
}
} else
{var vec__28271 = cljs.core.first.call(null,s__28262__$2);var col_i = cljs.core.nth.call(null,vec__28271,(0),null);var col = cljs.core.nth.call(null,vec__28271,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28272__$1 = (((G__28272 == null))?null:cljs.core.get.call(null,rowcol,G__28272));var G__28272__$2 = (((G__28272__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28272__$1));var G__28272__$3 = (((G__28272__$2 == null))?null:render_fn__$1.call(null,G__28272__$2));return G__28272__$3;
})():null)], null)),iter__28261.call(null,cljs.core.rest.call(null,s__28262__$2)));
}
} else
{return null;
}
break;
}
});})(i__28232,vec__28260,row_i,row,c__4375__auto__,size__4376__auto__,b__28233,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28232,vec__28260,row_i,row,c__4375__auto__,size__4376__auto__,b__28233,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28290 = (i__28232 + (1));
i__28232 = G__28290;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28233),iter__28230.call(null,cljs.core.chunk_rest.call(null,s__28231__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28233),null);
}
} else
{var vec__28273 = cljs.core.first.call(null,s__28231__$2);var row_i = cljs.core.nth.call(null,vec__28273,(0),null);var row = cljs.core.nth.call(null,vec__28273,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28273,row_i,row,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function iter__28274(s__28275){return (new cljs.core.LazySeq(null,((function (vec__28273,row_i,row,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28275__$1 = s__28275;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28275__$1);if(temp__4126__auto____$1)
{var s__28275__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28275__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28275__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28277 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28276 = (0);while(true){
if((i__28276 < size__4376__auto__))
{var vec__28282 = cljs.core._nth.call(null,c__4375__auto__,i__28276);var col_i = cljs.core.nth.call(null,vec__28282,(0),null);var col = cljs.core.nth.call(null,vec__28282,(1),null);cljs.core.chunk_append.call(null,b__28277,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28283__$1 = (((G__28283 == null))?null:cljs.core.get.call(null,rowcol,G__28283));var G__28283__$2 = (((G__28283__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28283__$1));var G__28283__$3 = (((G__28283__$2 == null))?null:render_fn__$1.call(null,G__28283__$2));return G__28283__$3;
})():null)], null)));
{
var G__28291 = (i__28276 + (1));
i__28276 = G__28291;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28277),iter__28274.call(null,cljs.core.chunk_rest.call(null,s__28275__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28277),null);
}
} else
{var vec__28284 = cljs.core.first.call(null,s__28275__$2);var col_i = cljs.core.nth.call(null,vec__28284,(0),null);var col = cljs.core.nth.call(null,vec__28284,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28285__$1 = (((G__28285 == null))?null:cljs.core.get.call(null,rowcol,G__28285));var G__28285__$2 = (((G__28285__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28285__$1));var G__28285__$3 = (((G__28285__$2 == null))?null:render_fn__$1.call(null,G__28285__$2));return G__28285__$3;
})():null)], null)),iter__28274.call(null,cljs.core.rest.call(null,s__28275__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28273,row_i,row,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28273,row_i,row,s__28231__$2,temp__4126__auto__,attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28230.call(null,cljs.core.rest.call(null,s__28231__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28171,rowcol,render_fn__$1,map__28168,map__28168__$1,map__28169,map__28169__$1,table_data,query,results,map__28170,map__28170__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28292,owner){var map__28337 = p__28292;var map__28337__$1 = ((cljs.core.seq_QMARK_.call(null,map__28337))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);var props = map__28337__$1;var map__28338 = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28338__$1 = ((cljs.core.seq_QMARK_.call(null,map__28338))?cljs.core.apply.call(null,cljs.core.hash_map,map__28338):map__28338);var table_state = map__28338__$1;var table_data = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28339 = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28339__$1 = ((cljs.core.seq_QMARK_.call(null,map__28339))?cljs.core.apply.call(null,cljs.core.hash_map,map__28339):map__28339);var controls = map__28339__$1;var index_type = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28340 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28340 = (function (index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,p__28292,title,map__28338,rows,cols,map__28337,map__28339,meta28341){
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
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.p__28292 = p__28292;
this.title = title;
this.map__28338 = map__28338;
this.rows = rows;
this.cols = cols;
this.map__28337 = map__28337;
this.map__28339 = map__28339;
this.meta28341 = meta28341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28340.cljs$lang$type = true;
clustermap.components.ranges_table.t28340.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28340";
clustermap.components.ranges_table.t28340.cljs$lang$ctorPrWriter = ((function (map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28340");
});})(map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28340.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28340.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28343,p__28344){var self__ = this;
var map__28345 = p__28343;var map__28345__$1 = ((cljs.core.seq_QMARK_.call(null,map__28345))?cljs.core.apply.call(null,cljs.core.hash_map,map__28345):map__28345);var next_props = map__28345__$1;var map__28346 = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28346__$1 = ((cljs.core.seq_QMARK_.call(null,map__28346))?cljs.core.apply.call(null,cljs.core.hash_map,map__28346):map__28346);var next_table_state = map__28346__$1;var next_table_data = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28347 = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28347__$1 = ((cljs.core.seq_QMARK_.call(null,map__28347))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);var next_controls = map__28347__$1;var next_col_aggs = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28348 = p__28344;var map__28348__$1 = ((cljs.core.seq_QMARK_.call(null,map__28348))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);var fetch_data_fn = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,map__28345,map__28345__$1,next_props,map__28346,map__28346__$1,next_table_state,next_table_data,map__28347,map__28347__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28348,map__28348__$1,fetch_data_fn,map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,map__28345,map__28345__$1,next_props,map__28346,map__28346__$1,next_table_state,next_table_data,map__28347,map__28347__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28348,map__28348__$1,fetch_data_fn,map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28366){var state_val_28367 = (state_28366[(1)]);if((state_val_28367 === (5)))
{var inst_28364 = (state_28366[(2)]);var state_28366__$1 = state_28366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28366__$1,inst_28364);
} else
{if((state_val_28367 === (4)))
{var state_28366__$1 = state_28366;var statearr_28368_28381 = state_28366__$1;(statearr_28368_28381[(2)] = null);
(statearr_28368_28381[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28367 === (3)))
{var inst_28351 = (state_28366[(7)]);var inst_28353 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28354 = ["RANGES-TABLE-DATA",inst_28351];var inst_28355 = (new cljs.core.PersistentVector(null,2,(5),inst_28353,inst_28354,null));var inst_28356 = cljs.core.clj__GT_js.call(null,inst_28355);var inst_28357 = console.log(inst_28356);var inst_28358 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28359 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28360 = (new cljs.core.PersistentVector(null,1,(5),inst_28358,inst_28359,null));var inst_28361 = om.core.update_BANG_.call(null,self__.table_state,inst_28360,inst_28351);var state_28366__$1 = (function (){var statearr_28369 = state_28366;(statearr_28369[(8)] = inst_28357);
return statearr_28369;
})();var statearr_28370_28382 = state_28366__$1;(statearr_28370_28382[(2)] = inst_28361);
(statearr_28370_28382[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28367 === (2)))
{var inst_28351 = (state_28366[(7)]);var inst_28351__$1 = (state_28366[(2)]);var state_28366__$1 = (function (){var statearr_28371 = state_28366;(statearr_28371[(7)] = inst_28351__$1);
return statearr_28371;
})();if(cljs.core.truth_(inst_28351__$1))
{var statearr_28372_28383 = state_28366__$1;(statearr_28372_28383[(1)] = (3));
} else
{var statearr_28373_28384 = state_28366__$1;(statearr_28373_28384[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28367 === (1)))
{var inst_28349 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28366__$1 = state_28366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28366__$1,(2),inst_28349);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,___$1,map__28345,map__28345__$1,next_props,map__28346,map__28346__$1,next_table_state,next_table_data,map__28347,map__28347__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28348,map__28348__$1,fetch_data_fn,map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,map__28345,map__28345__$1,next_props,map__28346,map__28346__$1,next_table_state,next_table_data,map__28347,map__28347__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28348,map__28348__$1,fetch_data_fn,map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_28377 = [null,null,null,null,null,null,null,null,null];(statearr_28377[(0)] = state_machine__11099__auto__);
(statearr_28377[(1)] = (1));
return statearr_28377;
});
var state_machine__11099__auto____1 = (function (state_28366){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_28366);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e28378){if((e28378 instanceof Object))
{var ex__11102__auto__ = e28378;var statearr_28379_28385 = state_28366;(statearr_28379_28385[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28378;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28386 = state_28366;
state_28366 = G__28386;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_28366){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_28366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,map__28345,map__28345__$1,next_props,map__28346,map__28346__$1,next_table_state,next_table_data,map__28347,map__28347__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28348,map__28348__$1,fetch_data_fn,map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__11156__auto__ = (function (){var statearr_28380 = f__11155__auto__.call(null);(statearr_28380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_28380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,map__28345,map__28345__$1,next_props,map__28346,map__28346__$1,next_table_state,next_table_data,map__28347,map__28347__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28348,map__28348__$1,fetch_data_fn,map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__11154__auto__;
} else
{return null;
}
});})(map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28340.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28340.prototype.om$core$IRender$render$arity$1 = ((function (map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28340.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28340.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28342){var self__ = this;
var _28342__$1 = this;return self__.meta28341;
});})(map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28342,meta28341__$1){var self__ = this;
var _28342__$1 = this;return (new clustermap.components.ranges_table.t28340(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.p__28292,self__.title,self__.map__28338,self__.rows,self__.cols,self__.map__28337,self__.map__28339,meta28341__$1));
});})(map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28340 = ((function (map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28340(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,p__28292__$1,title__$1,map__28338__$2,rows__$1,cols__$1,map__28337__$2,map__28339__$2,meta28341){return (new clustermap.components.ranges_table.t28340(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,p__28292__$1,title__$1,map__28338__$2,rows__$1,cols__$1,map__28337__$2,map__28339__$2,meta28341));
});})(map__28337,map__28337__$1,props,map__28338,map__28338__$1,table_state,table_data,map__28339,map__28339__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28340(index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,p__28292,title,map__28338__$1,rows,cols,map__28337__$1,map__28339__$1,null));
});
