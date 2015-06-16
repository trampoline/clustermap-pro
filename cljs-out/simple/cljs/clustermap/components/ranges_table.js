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
clustermap.components.ranges_table.render_table = (function render_table(p__28420,owner,opts){var map__28539 = p__28420;var map__28539__$1 = ((cljs.core.seq_QMARK_.call(null,map__28539))?cljs.core.apply.call(null,cljs.core.hash_map,map__28539):map__28539);var map__28540 = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28540__$1 = ((cljs.core.seq_QMARK_.call(null,map__28540))?cljs.core.apply.call(null,cljs.core.hash_map,map__28540):map__28540);var table_data = map__28540__$1;var query = cljs.core.get.call(null,map__28540__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28540__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28541 = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28541__$1 = ((cljs.core.seq_QMARK_.call(null,map__28541))?cljs.core.apply.call(null,cljs.core.hash_map,map__28541):map__28541);var controls = map__28541__$1;var title = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28542 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28542))?sablono.interpreter.attributes.call(null,attrs28542):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28542))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28543 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28543))?sablono.interpreter.attributes.call(null,attrs28543):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28543)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function iter__28545(s__28546){return (new cljs.core.LazySeq(null,((function (attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28546__$1 = s__28546;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28546__$1);if(temp__4126__auto__)
{var s__28546__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28546__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28546__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28548 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28547 = (0);while(true){
if((i__28547 < size__4376__auto__))
{var vec__28575 = cljs.core._nth.call(null,c__4375__auto__,i__28547);var row_i = cljs.core.nth.call(null,vec__28575,(0),null);var row = cljs.core.nth.call(null,vec__28575,(1),null);cljs.core.chunk_append.call(null,b__28548,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28547,vec__28575,row_i,row,c__4375__auto__,size__4376__auto__,b__28548,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function iter__28576(s__28577){return (new cljs.core.LazySeq(null,((function (i__28547,vec__28575,row_i,row,c__4375__auto__,size__4376__auto__,b__28548,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28577__$1 = s__28577;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28577__$1);if(temp__4126__auto____$1)
{var s__28577__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28577__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28577__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28579 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28578 = (0);while(true){
if((i__28578 < size__4376__auto____$1))
{var vec__28584 = cljs.core._nth.call(null,c__4375__auto____$1,i__28578);var col_i = cljs.core.nth.call(null,vec__28584,(0),null);var col = cljs.core.nth.call(null,vec__28584,(1),null);cljs.core.chunk_append.call(null,b__28579,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28585__$1 = (((G__28585 == null))?null:cljs.core.get.call(null,rowcol,G__28585));var G__28585__$2 = (((G__28585__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28585__$1));var G__28585__$3 = (((G__28585__$2 == null))?null:render_fn__$1.call(null,G__28585__$2));return G__28585__$3;
})():null)], null)));
{
var G__28657 = (i__28578 + (1));
i__28578 = G__28657;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28579),iter__28576.call(null,cljs.core.chunk_rest.call(null,s__28577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28579),null);
}
} else
{var vec__28586 = cljs.core.first.call(null,s__28577__$2);var col_i = cljs.core.nth.call(null,vec__28586,(0),null);var col = cljs.core.nth.call(null,vec__28586,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28587__$1 = (((G__28587 == null))?null:cljs.core.get.call(null,rowcol,G__28587));var G__28587__$2 = (((G__28587__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28587__$1));var G__28587__$3 = (((G__28587__$2 == null))?null:render_fn__$1.call(null,G__28587__$2));return G__28587__$3;
})():null)], null)),iter__28576.call(null,cljs.core.rest.call(null,s__28577__$2)));
}
} else
{return null;
}
break;
}
});})(i__28547,vec__28575,row_i,row,c__4375__auto__,size__4376__auto__,b__28548,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28547,vec__28575,row_i,row,c__4375__auto__,size__4376__auto__,b__28548,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28658 = (i__28547 + (1));
i__28547 = G__28658;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28548),iter__28545.call(null,cljs.core.chunk_rest.call(null,s__28546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28548),null);
}
} else
{var vec__28588 = cljs.core.first.call(null,s__28546__$2);var row_i = cljs.core.nth.call(null,vec__28588,(0),null);var row = cljs.core.nth.call(null,vec__28588,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28588,row_i,row,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function iter__28589(s__28590){return (new cljs.core.LazySeq(null,((function (vec__28588,row_i,row,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28590__$1 = s__28590;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28590__$1);if(temp__4126__auto____$1)
{var s__28590__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28590__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28590__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28592 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28591 = (0);while(true){
if((i__28591 < size__4376__auto__))
{var vec__28597 = cljs.core._nth.call(null,c__4375__auto__,i__28591);var col_i = cljs.core.nth.call(null,vec__28597,(0),null);var col = cljs.core.nth.call(null,vec__28597,(1),null);cljs.core.chunk_append.call(null,b__28592,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28598__$1 = (((G__28598 == null))?null:cljs.core.get.call(null,rowcol,G__28598));var G__28598__$2 = (((G__28598__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28598__$1));var G__28598__$3 = (((G__28598__$2 == null))?null:render_fn__$1.call(null,G__28598__$2));return G__28598__$3;
})():null)], null)));
{
var G__28659 = (i__28591 + (1));
i__28591 = G__28659;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28592),iter__28589.call(null,cljs.core.chunk_rest.call(null,s__28590__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28592),null);
}
} else
{var vec__28599 = cljs.core.first.call(null,s__28590__$2);var col_i = cljs.core.nth.call(null,vec__28599,(0),null);var col = cljs.core.nth.call(null,vec__28599,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28600__$1 = (((G__28600 == null))?null:cljs.core.get.call(null,rowcol,G__28600));var G__28600__$2 = (((G__28600__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28600__$1));var G__28600__$3 = (((G__28600__$2 == null))?null:render_fn__$1.call(null,G__28600__$2));return G__28600__$3;
})():null)], null)),iter__28589.call(null,cljs.core.rest.call(null,s__28590__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28588,row_i,row,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28588,row_i,row,s__28546__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28545.call(null,cljs.core.rest.call(null,s__28546__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28542),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28544 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28544))?sablono.interpreter.attributes.call(null,attrs28544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28544)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function iter__28601(s__28602){return (new cljs.core.LazySeq(null,((function (attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28602__$1 = s__28602;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28602__$1);if(temp__4126__auto__)
{var s__28602__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28602__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28602__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28604 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28603 = (0);while(true){
if((i__28603 < size__4376__auto__))
{var vec__28631 = cljs.core._nth.call(null,c__4375__auto__,i__28603);var row_i = cljs.core.nth.call(null,vec__28631,(0),null);var row = cljs.core.nth.call(null,vec__28631,(1),null);cljs.core.chunk_append.call(null,b__28604,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28603,vec__28631,row_i,row,c__4375__auto__,size__4376__auto__,b__28604,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function iter__28632(s__28633){return (new cljs.core.LazySeq(null,((function (i__28603,vec__28631,row_i,row,c__4375__auto__,size__4376__auto__,b__28604,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28633__$1 = s__28633;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28633__$1);if(temp__4126__auto____$1)
{var s__28633__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28633__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28633__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28635 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28634 = (0);while(true){
if((i__28634 < size__4376__auto____$1))
{var vec__28640 = cljs.core._nth.call(null,c__4375__auto____$1,i__28634);var col_i = cljs.core.nth.call(null,vec__28640,(0),null);var col = cljs.core.nth.call(null,vec__28640,(1),null);cljs.core.chunk_append.call(null,b__28635,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28641__$1 = (((G__28641 == null))?null:cljs.core.get.call(null,rowcol,G__28641));var G__28641__$2 = (((G__28641__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28641__$1));var G__28641__$3 = (((G__28641__$2 == null))?null:render_fn__$1.call(null,G__28641__$2));return G__28641__$3;
})():null)], null)));
{
var G__28660 = (i__28634 + (1));
i__28634 = G__28660;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28635),iter__28632.call(null,cljs.core.chunk_rest.call(null,s__28633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28635),null);
}
} else
{var vec__28642 = cljs.core.first.call(null,s__28633__$2);var col_i = cljs.core.nth.call(null,vec__28642,(0),null);var col = cljs.core.nth.call(null,vec__28642,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28643__$1 = (((G__28643 == null))?null:cljs.core.get.call(null,rowcol,G__28643));var G__28643__$2 = (((G__28643__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28643__$1));var G__28643__$3 = (((G__28643__$2 == null))?null:render_fn__$1.call(null,G__28643__$2));return G__28643__$3;
})():null)], null)),iter__28632.call(null,cljs.core.rest.call(null,s__28633__$2)));
}
} else
{return null;
}
break;
}
});})(i__28603,vec__28631,row_i,row,c__4375__auto__,size__4376__auto__,b__28604,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28603,vec__28631,row_i,row,c__4375__auto__,size__4376__auto__,b__28604,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28661 = (i__28603 + (1));
i__28603 = G__28661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28604),iter__28601.call(null,cljs.core.chunk_rest.call(null,s__28602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28604),null);
}
} else
{var vec__28644 = cljs.core.first.call(null,s__28602__$2);var row_i = cljs.core.nth.call(null,vec__28644,(0),null);var row = cljs.core.nth.call(null,vec__28644,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28644,row_i,row,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function iter__28645(s__28646){return (new cljs.core.LazySeq(null,((function (vec__28644,row_i,row,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28646__$1 = s__28646;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28646__$1);if(temp__4126__auto____$1)
{var s__28646__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28646__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28646__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28648 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28647 = (0);while(true){
if((i__28647 < size__4376__auto__))
{var vec__28653 = cljs.core._nth.call(null,c__4375__auto__,i__28647);var col_i = cljs.core.nth.call(null,vec__28653,(0),null);var col = cljs.core.nth.call(null,vec__28653,(1),null);cljs.core.chunk_append.call(null,b__28648,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28654__$1 = (((G__28654 == null))?null:cljs.core.get.call(null,rowcol,G__28654));var G__28654__$2 = (((G__28654__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28654__$1));var G__28654__$3 = (((G__28654__$2 == null))?null:render_fn__$1.call(null,G__28654__$2));return G__28654__$3;
})():null)], null)));
{
var G__28662 = (i__28647 + (1));
i__28647 = G__28662;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28648),iter__28645.call(null,cljs.core.chunk_rest.call(null,s__28646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28648),null);
}
} else
{var vec__28655 = cljs.core.first.call(null,s__28646__$2);var col_i = cljs.core.nth.call(null,vec__28655,(0),null);var col = cljs.core.nth.call(null,vec__28655,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28656__$1 = (((G__28656 == null))?null:cljs.core.get.call(null,rowcol,G__28656));var G__28656__$2 = (((G__28656__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28656__$1));var G__28656__$3 = (((G__28656__$2 == null))?null:render_fn__$1.call(null,G__28656__$2));return G__28656__$3;
})():null)], null)),iter__28645.call(null,cljs.core.rest.call(null,s__28646__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28644,row_i,row,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28644,row_i,row,s__28602__$2,temp__4126__auto__,attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28601.call(null,cljs.core.rest.call(null,s__28602__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28542,rowcol,render_fn__$1,map__28539,map__28539__$1,map__28540,map__28540__$1,table_data,query,results,map__28541,map__28541__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28663,owner){var map__28708 = p__28663;var map__28708__$1 = ((cljs.core.seq_QMARK_.call(null,map__28708))?cljs.core.apply.call(null,cljs.core.hash_map,map__28708):map__28708);var props = map__28708__$1;var map__28709 = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28709__$1 = ((cljs.core.seq_QMARK_.call(null,map__28709))?cljs.core.apply.call(null,cljs.core.hash_map,map__28709):map__28709);var table_state = map__28709__$1;var table_data = cljs.core.get.call(null,map__28709__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28710 = cljs.core.get.call(null,map__28709__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28710__$1 = ((cljs.core.seq_QMARK_.call(null,map__28710))?cljs.core.apply.call(null,cljs.core.hash_map,map__28710):map__28710);var controls = map__28710__$1;var index_type = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28710__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28711 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28711 = (function (p__28663,index_type,row_aggs,owner,metric_path,map__28708,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,map__28709,map__28710,cols,meta28712){
this.p__28663 = p__28663;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.map__28708 = map__28708;
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
this.title = title;
this.rows = rows;
this.map__28709 = map__28709;
this.map__28710 = map__28710;
this.cols = cols;
this.meta28712 = meta28712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28711.cljs$lang$type = true;
clustermap.components.ranges_table.t28711.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28711";
clustermap.components.ranges_table.t28711.cljs$lang$ctorPrWriter = ((function (map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28711");
});})(map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28711.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28711.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28714,p__28715){var self__ = this;
var map__28716 = p__28714;var map__28716__$1 = ((cljs.core.seq_QMARK_.call(null,map__28716))?cljs.core.apply.call(null,cljs.core.hash_map,map__28716):map__28716);var next_props = map__28716__$1;var map__28717 = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28717__$1 = ((cljs.core.seq_QMARK_.call(null,map__28717))?cljs.core.apply.call(null,cljs.core.hash_map,map__28717):map__28717);var next_table_state = map__28717__$1;var next_table_data = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28718 = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28718__$1 = ((cljs.core.seq_QMARK_.call(null,map__28718))?cljs.core.apply.call(null,cljs.core.hash_map,map__28718):map__28718);var next_controls = map__28718__$1;var next_col_aggs = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28719 = p__28715;var map__28719__$1 = ((cljs.core.seq_QMARK_.call(null,map__28719))?cljs.core.apply.call(null,cljs.core.hash_map,map__28719):map__28719);var fetch_data_fn = cljs.core.get.call(null,map__28719__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28716,map__28716__$1,next_props,map__28717,map__28717__$1,next_table_state,next_table_data,map__28718,map__28718__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28719,map__28719__$1,fetch_data_fn,map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28716,map__28716__$1,next_props,map__28717,map__28717__$1,next_table_state,next_table_data,map__28718,map__28718__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28719,map__28719__$1,fetch_data_fn,map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28737){var state_val_28738 = (state_28737[(1)]);if((state_val_28738 === (5)))
{var inst_28735 = (state_28737[(2)]);var state_28737__$1 = state_28737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28737__$1,inst_28735);
} else
{if((state_val_28738 === (4)))
{var state_28737__$1 = state_28737;var statearr_28739_28752 = state_28737__$1;(statearr_28739_28752[(2)] = null);
(statearr_28739_28752[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28738 === (3)))
{var inst_28722 = (state_28737[(7)]);var inst_28724 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28725 = ["RANGES-TABLE-DATA",inst_28722];var inst_28726 = (new cljs.core.PersistentVector(null,2,(5),inst_28724,inst_28725,null));var inst_28727 = cljs.core.clj__GT_js.call(null,inst_28726);var inst_28728 = console.log(inst_28727);var inst_28729 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28730 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28731 = (new cljs.core.PersistentVector(null,1,(5),inst_28729,inst_28730,null));var inst_28732 = om.core.update_BANG_.call(null,self__.table_state,inst_28731,inst_28722);var state_28737__$1 = (function (){var statearr_28740 = state_28737;(statearr_28740[(8)] = inst_28728);
return statearr_28740;
})();var statearr_28741_28753 = state_28737__$1;(statearr_28741_28753[(2)] = inst_28732);
(statearr_28741_28753[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28738 === (2)))
{var inst_28722 = (state_28737[(7)]);var inst_28722__$1 = (state_28737[(2)]);var state_28737__$1 = (function (){var statearr_28742 = state_28737;(statearr_28742[(7)] = inst_28722__$1);
return statearr_28742;
})();if(cljs.core.truth_(inst_28722__$1))
{var statearr_28743_28754 = state_28737__$1;(statearr_28743_28754[(1)] = (3));
} else
{var statearr_28744_28755 = state_28737__$1;(statearr_28744_28755[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28738 === (1)))
{var inst_28720 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28737__$1 = state_28737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28737__$1,(2),inst_28720);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28716,map__28716__$1,next_props,map__28717,map__28717__$1,next_table_state,next_table_data,map__28718,map__28718__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28719,map__28719__$1,fetch_data_fn,map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28716,map__28716__$1,next_props,map__28717,map__28717__$1,next_table_state,next_table_data,map__28718,map__28718__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28719,map__28719__$1,fetch_data_fn,map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28748 = [null,null,null,null,null,null,null,null,null];(statearr_28748[(0)] = state_machine__9111__auto__);
(statearr_28748[(1)] = (1));
return statearr_28748;
});
var state_machine__9111__auto____1 = (function (state_28737){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28737);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28749){if((e28749 instanceof Object))
{var ex__9114__auto__ = e28749;var statearr_28750_28756 = state_28737;(statearr_28750_28756[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28749;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28757 = state_28737;
state_28737 = G__28757;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28737){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28716,map__28716__$1,next_props,map__28717,map__28717__$1,next_table_state,next_table_data,map__28718,map__28718__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28719,map__28719__$1,fetch_data_fn,map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28751 = f__9126__auto__.call(null);(statearr_28751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28716,map__28716__$1,next_props,map__28717,map__28717__$1,next_table_state,next_table_data,map__28718,map__28718__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28719,map__28719__$1,fetch_data_fn,map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28711.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28711.prototype.om$core$IRender$render$arity$1 = ((function (map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28711.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28711.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28713){var self__ = this;
var _28713__$1 = this;return self__.meta28712;
});})(map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28713,meta28712__$1){var self__ = this;
var _28713__$1 = this;return (new clustermap.components.ranges_table.t28711(self__.p__28663,self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.map__28708,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.map__28709,self__.map__28710,self__.cols,meta28712__$1));
});})(map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28711 = ((function (map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28711(p__28663__$1,index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,map__28708__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,map__28709__$2,map__28710__$2,cols__$1,meta28712){return (new clustermap.components.ranges_table.t28711(p__28663__$1,index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,map__28708__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,map__28709__$2,map__28710__$2,cols__$1,meta28712));
});})(map__28708,map__28708__$1,props,map__28709,map__28709__$1,table_state,table_data,map__28710,map__28710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28711(p__28663,index_type,row_aggs,owner,metric_path,map__28708__$1,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,map__28709__$1,map__28710__$1,cols,null));
});
