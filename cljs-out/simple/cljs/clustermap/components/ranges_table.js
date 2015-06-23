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
clustermap.components.ranges_table.render_table = (function render_table(p__28506,owner,opts){var map__28625 = p__28506;var map__28625__$1 = ((cljs.core.seq_QMARK_.call(null,map__28625))?cljs.core.apply.call(null,cljs.core.hash_map,map__28625):map__28625);var map__28626 = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28626__$1 = ((cljs.core.seq_QMARK_.call(null,map__28626))?cljs.core.apply.call(null,cljs.core.hash_map,map__28626):map__28626);var table_data = map__28626__$1;var query = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28627 = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28627__$1 = ((cljs.core.seq_QMARK_.call(null,map__28627))?cljs.core.apply.call(null,cljs.core.hash_map,map__28627):map__28627);var controls = map__28627__$1;var title = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28628 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28628))?sablono.interpreter.attributes.call(null,attrs28628):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28628))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28629 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28629))?sablono.interpreter.attributes.call(null,attrs28629):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28629))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28629)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function iter__28631(s__28632){return (new cljs.core.LazySeq(null,((function (attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28632__$1 = s__28632;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28632__$1);if(temp__4126__auto__)
{var s__28632__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28632__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28632__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28634 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28633 = (0);while(true){
if((i__28633 < size__4376__auto__))
{var vec__28661 = cljs.core._nth.call(null,c__4375__auto__,i__28633);var row_i = cljs.core.nth.call(null,vec__28661,(0),null);var row = cljs.core.nth.call(null,vec__28661,(1),null);cljs.core.chunk_append.call(null,b__28634,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28633,vec__28661,row_i,row,c__4375__auto__,size__4376__auto__,b__28634,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function iter__28662(s__28663){return (new cljs.core.LazySeq(null,((function (i__28633,vec__28661,row_i,row,c__4375__auto__,size__4376__auto__,b__28634,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28663__$1 = s__28663;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28663__$1);if(temp__4126__auto____$1)
{var s__28663__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28663__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28663__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28665 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28664 = (0);while(true){
if((i__28664 < size__4376__auto____$1))
{var vec__28670 = cljs.core._nth.call(null,c__4375__auto____$1,i__28664);var col_i = cljs.core.nth.call(null,vec__28670,(0),null);var col = cljs.core.nth.call(null,vec__28670,(1),null);cljs.core.chunk_append.call(null,b__28665,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28671__$1 = (((G__28671 == null))?null:cljs.core.get.call(null,rowcol,G__28671));var G__28671__$2 = (((G__28671__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28671__$1));var G__28671__$3 = (((G__28671__$2 == null))?null:render_fn__$1.call(null,G__28671__$2));return G__28671__$3;
})():null)], null)));
{
var G__28743 = (i__28664 + (1));
i__28664 = G__28743;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28665),iter__28662.call(null,cljs.core.chunk_rest.call(null,s__28663__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28665),null);
}
} else
{var vec__28672 = cljs.core.first.call(null,s__28663__$2);var col_i = cljs.core.nth.call(null,vec__28672,(0),null);var col = cljs.core.nth.call(null,vec__28672,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28673__$1 = (((G__28673 == null))?null:cljs.core.get.call(null,rowcol,G__28673));var G__28673__$2 = (((G__28673__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28673__$1));var G__28673__$3 = (((G__28673__$2 == null))?null:render_fn__$1.call(null,G__28673__$2));return G__28673__$3;
})():null)], null)),iter__28662.call(null,cljs.core.rest.call(null,s__28663__$2)));
}
} else
{return null;
}
break;
}
});})(i__28633,vec__28661,row_i,row,c__4375__auto__,size__4376__auto__,b__28634,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28633,vec__28661,row_i,row,c__4375__auto__,size__4376__auto__,b__28634,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28744 = (i__28633 + (1));
i__28633 = G__28744;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28634),iter__28631.call(null,cljs.core.chunk_rest.call(null,s__28632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28634),null);
}
} else
{var vec__28674 = cljs.core.first.call(null,s__28632__$2);var row_i = cljs.core.nth.call(null,vec__28674,(0),null);var row = cljs.core.nth.call(null,vec__28674,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28674,row_i,row,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function iter__28675(s__28676){return (new cljs.core.LazySeq(null,((function (vec__28674,row_i,row,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28676__$1 = s__28676;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28676__$1);if(temp__4126__auto____$1)
{var s__28676__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28676__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28676__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28678 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28677 = (0);while(true){
if((i__28677 < size__4376__auto__))
{var vec__28683 = cljs.core._nth.call(null,c__4375__auto__,i__28677);var col_i = cljs.core.nth.call(null,vec__28683,(0),null);var col = cljs.core.nth.call(null,vec__28683,(1),null);cljs.core.chunk_append.call(null,b__28678,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28684__$1 = (((G__28684 == null))?null:cljs.core.get.call(null,rowcol,G__28684));var G__28684__$2 = (((G__28684__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28684__$1));var G__28684__$3 = (((G__28684__$2 == null))?null:render_fn__$1.call(null,G__28684__$2));return G__28684__$3;
})():null)], null)));
{
var G__28745 = (i__28677 + (1));
i__28677 = G__28745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28678),iter__28675.call(null,cljs.core.chunk_rest.call(null,s__28676__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28678),null);
}
} else
{var vec__28685 = cljs.core.first.call(null,s__28676__$2);var col_i = cljs.core.nth.call(null,vec__28685,(0),null);var col = cljs.core.nth.call(null,vec__28685,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28686__$1 = (((G__28686 == null))?null:cljs.core.get.call(null,rowcol,G__28686));var G__28686__$2 = (((G__28686__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28686__$1));var G__28686__$3 = (((G__28686__$2 == null))?null:render_fn__$1.call(null,G__28686__$2));return G__28686__$3;
})():null)], null)),iter__28675.call(null,cljs.core.rest.call(null,s__28676__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28674,row_i,row,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28674,row_i,row,s__28632__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28631.call(null,cljs.core.rest.call(null,s__28632__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28628),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28630 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28630))?sablono.interpreter.attributes.call(null,attrs28630):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28630))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28630)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function iter__28687(s__28688){return (new cljs.core.LazySeq(null,((function (attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28688__$1 = s__28688;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28688__$1);if(temp__4126__auto__)
{var s__28688__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28688__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28688__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28690 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28689 = (0);while(true){
if((i__28689 < size__4376__auto__))
{var vec__28717 = cljs.core._nth.call(null,c__4375__auto__,i__28689);var row_i = cljs.core.nth.call(null,vec__28717,(0),null);var row = cljs.core.nth.call(null,vec__28717,(1),null);cljs.core.chunk_append.call(null,b__28690,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28689,vec__28717,row_i,row,c__4375__auto__,size__4376__auto__,b__28690,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function iter__28718(s__28719){return (new cljs.core.LazySeq(null,((function (i__28689,vec__28717,row_i,row,c__4375__auto__,size__4376__auto__,b__28690,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28719__$1 = s__28719;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28719__$1);if(temp__4126__auto____$1)
{var s__28719__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28719__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28719__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28721 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28720 = (0);while(true){
if((i__28720 < size__4376__auto____$1))
{var vec__28726 = cljs.core._nth.call(null,c__4375__auto____$1,i__28720);var col_i = cljs.core.nth.call(null,vec__28726,(0),null);var col = cljs.core.nth.call(null,vec__28726,(1),null);cljs.core.chunk_append.call(null,b__28721,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28727__$1 = (((G__28727 == null))?null:cljs.core.get.call(null,rowcol,G__28727));var G__28727__$2 = (((G__28727__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28727__$1));var G__28727__$3 = (((G__28727__$2 == null))?null:render_fn__$1.call(null,G__28727__$2));return G__28727__$3;
})():null)], null)));
{
var G__28746 = (i__28720 + (1));
i__28720 = G__28746;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28721),iter__28718.call(null,cljs.core.chunk_rest.call(null,s__28719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28721),null);
}
} else
{var vec__28728 = cljs.core.first.call(null,s__28719__$2);var col_i = cljs.core.nth.call(null,vec__28728,(0),null);var col = cljs.core.nth.call(null,vec__28728,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28729__$1 = (((G__28729 == null))?null:cljs.core.get.call(null,rowcol,G__28729));var G__28729__$2 = (((G__28729__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28729__$1));var G__28729__$3 = (((G__28729__$2 == null))?null:render_fn__$1.call(null,G__28729__$2));return G__28729__$3;
})():null)], null)),iter__28718.call(null,cljs.core.rest.call(null,s__28719__$2)));
}
} else
{return null;
}
break;
}
});})(i__28689,vec__28717,row_i,row,c__4375__auto__,size__4376__auto__,b__28690,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28689,vec__28717,row_i,row,c__4375__auto__,size__4376__auto__,b__28690,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28747 = (i__28689 + (1));
i__28689 = G__28747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28690),iter__28687.call(null,cljs.core.chunk_rest.call(null,s__28688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28690),null);
}
} else
{var vec__28730 = cljs.core.first.call(null,s__28688__$2);var row_i = cljs.core.nth.call(null,vec__28730,(0),null);var row = cljs.core.nth.call(null,vec__28730,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28730,row_i,row,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function iter__28731(s__28732){return (new cljs.core.LazySeq(null,((function (vec__28730,row_i,row,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28732__$1 = s__28732;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28732__$1);if(temp__4126__auto____$1)
{var s__28732__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28732__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28732__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28734 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28733 = (0);while(true){
if((i__28733 < size__4376__auto__))
{var vec__28739 = cljs.core._nth.call(null,c__4375__auto__,i__28733);var col_i = cljs.core.nth.call(null,vec__28739,(0),null);var col = cljs.core.nth.call(null,vec__28739,(1),null);cljs.core.chunk_append.call(null,b__28734,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28740__$1 = (((G__28740 == null))?null:cljs.core.get.call(null,rowcol,G__28740));var G__28740__$2 = (((G__28740__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28740__$1));var G__28740__$3 = (((G__28740__$2 == null))?null:render_fn__$1.call(null,G__28740__$2));return G__28740__$3;
})():null)], null)));
{
var G__28748 = (i__28733 + (1));
i__28733 = G__28748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28734),iter__28731.call(null,cljs.core.chunk_rest.call(null,s__28732__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28734),null);
}
} else
{var vec__28741 = cljs.core.first.call(null,s__28732__$2);var col_i = cljs.core.nth.call(null,vec__28741,(0),null);var col = cljs.core.nth.call(null,vec__28741,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28742__$1 = (((G__28742 == null))?null:cljs.core.get.call(null,rowcol,G__28742));var G__28742__$2 = (((G__28742__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28742__$1));var G__28742__$3 = (((G__28742__$2 == null))?null:render_fn__$1.call(null,G__28742__$2));return G__28742__$3;
})():null)], null)),iter__28731.call(null,cljs.core.rest.call(null,s__28732__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28730,row_i,row,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28730,row_i,row,s__28688__$2,temp__4126__auto__,attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28687.call(null,cljs.core.rest.call(null,s__28688__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28628,rowcol,render_fn__$1,map__28625,map__28625__$1,map__28626,map__28626__$1,table_data,query,results,map__28627,map__28627__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28749,owner){var map__28794 = p__28749;var map__28794__$1 = ((cljs.core.seq_QMARK_.call(null,map__28794))?cljs.core.apply.call(null,cljs.core.hash_map,map__28794):map__28794);var props = map__28794__$1;var map__28795 = cljs.core.get.call(null,map__28794__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28795__$1 = ((cljs.core.seq_QMARK_.call(null,map__28795))?cljs.core.apply.call(null,cljs.core.hash_map,map__28795):map__28795);var table_state = map__28795__$1;var table_data = cljs.core.get.call(null,map__28795__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28796 = cljs.core.get.call(null,map__28795__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28796__$1 = ((cljs.core.seq_QMARK_.call(null,map__28796))?cljs.core.apply.call(null,cljs.core.hash_map,map__28796):map__28796);var controls = map__28796__$1;var index_type = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28796__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28794__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28797 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28797 = (function (index_type,row_aggs,owner,p__28749,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__28796,table_state,controls,map__28795,col_aggs,title,rows,cols,map__28794,meta28798){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.p__28749 = p__28749;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__28796 = map__28796;
this.table_state = table_state;
this.controls = controls;
this.map__28795 = map__28795;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28794 = map__28794;
this.meta28798 = meta28798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28797.cljs$lang$type = true;
clustermap.components.ranges_table.t28797.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28797";
clustermap.components.ranges_table.t28797.cljs$lang$ctorPrWriter = ((function (map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28797");
});})(map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28797.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28797.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28800,p__28801){var self__ = this;
var map__28802 = p__28800;var map__28802__$1 = ((cljs.core.seq_QMARK_.call(null,map__28802))?cljs.core.apply.call(null,cljs.core.hash_map,map__28802):map__28802);var next_props = map__28802__$1;var map__28803 = cljs.core.get.call(null,map__28802__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28803__$1 = ((cljs.core.seq_QMARK_.call(null,map__28803))?cljs.core.apply.call(null,cljs.core.hash_map,map__28803):map__28803);var next_table_state = map__28803__$1;var next_table_data = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28804 = cljs.core.get.call(null,map__28803__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28804__$1 = ((cljs.core.seq_QMARK_.call(null,map__28804))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);var next_controls = map__28804__$1;var next_col_aggs = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28802__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28805 = p__28801;var map__28805__$1 = ((cljs.core.seq_QMARK_.call(null,map__28805))?cljs.core.apply.call(null,cljs.core.hash_map,map__28805):map__28805);var fetch_data_fn = cljs.core.get.call(null,map__28805__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28802,map__28802__$1,next_props,map__28803,map__28803__$1,next_table_state,next_table_data,map__28804,map__28804__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28805,map__28805__$1,fetch_data_fn,map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28802,map__28802__$1,next_props,map__28803,map__28803__$1,next_table_state,next_table_data,map__28804,map__28804__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28805,map__28805__$1,fetch_data_fn,map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28823){var state_val_28824 = (state_28823[(1)]);if((state_val_28824 === (5)))
{var inst_28821 = (state_28823[(2)]);var state_28823__$1 = state_28823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28823__$1,inst_28821);
} else
{if((state_val_28824 === (4)))
{var state_28823__$1 = state_28823;var statearr_28825_28838 = state_28823__$1;(statearr_28825_28838[(2)] = null);
(statearr_28825_28838[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28824 === (3)))
{var inst_28808 = (state_28823[(7)]);var inst_28810 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28811 = ["RANGES-TABLE-DATA",inst_28808];var inst_28812 = (new cljs.core.PersistentVector(null,2,(5),inst_28810,inst_28811,null));var inst_28813 = cljs.core.clj__GT_js.call(null,inst_28812);var inst_28814 = console.log(inst_28813);var inst_28815 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28816 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28817 = (new cljs.core.PersistentVector(null,1,(5),inst_28815,inst_28816,null));var inst_28818 = om.core.update_BANG_.call(null,self__.table_state,inst_28817,inst_28808);var state_28823__$1 = (function (){var statearr_28826 = state_28823;(statearr_28826[(8)] = inst_28814);
return statearr_28826;
})();var statearr_28827_28839 = state_28823__$1;(statearr_28827_28839[(2)] = inst_28818);
(statearr_28827_28839[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28824 === (2)))
{var inst_28808 = (state_28823[(7)]);var inst_28808__$1 = (state_28823[(2)]);var state_28823__$1 = (function (){var statearr_28828 = state_28823;(statearr_28828[(7)] = inst_28808__$1);
return statearr_28828;
})();if(cljs.core.truth_(inst_28808__$1))
{var statearr_28829_28840 = state_28823__$1;(statearr_28829_28840[(1)] = (3));
} else
{var statearr_28830_28841 = state_28823__$1;(statearr_28830_28841[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28824 === (1)))
{var inst_28806 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28823__$1 = state_28823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28823__$1,(2),inst_28806);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28802,map__28802__$1,next_props,map__28803,map__28803__$1,next_table_state,next_table_data,map__28804,map__28804__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28805,map__28805__$1,fetch_data_fn,map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28802,map__28802__$1,next_props,map__28803,map__28803__$1,next_table_state,next_table_data,map__28804,map__28804__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28805,map__28805__$1,fetch_data_fn,map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28834 = [null,null,null,null,null,null,null,null,null];(statearr_28834[(0)] = state_machine__9111__auto__);
(statearr_28834[(1)] = (1));
return statearr_28834;
});
var state_machine__9111__auto____1 = (function (state_28823){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28823);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28835){if((e28835 instanceof Object))
{var ex__9114__auto__ = e28835;var statearr_28836_28842 = state_28823;(statearr_28836_28842[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28843 = state_28823;
state_28823 = G__28843;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28823){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28802,map__28802__$1,next_props,map__28803,map__28803__$1,next_table_state,next_table_data,map__28804,map__28804__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28805,map__28805__$1,fetch_data_fn,map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28837 = f__9126__auto__.call(null);(statearr_28837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28802,map__28802__$1,next_props,map__28803,map__28803__$1,next_table_state,next_table_data,map__28804,map__28804__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28805,map__28805__$1,fetch_data_fn,map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28797.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28797.prototype.om$core$IRender$render$arity$1 = ((function (map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28797.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28797.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28799){var self__ = this;
var _28799__$1 = this;return self__.meta28798;
});})(map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28799,meta28798__$1){var self__ = this;
var _28799__$1 = this;return (new clustermap.components.ranges_table.t28797(self__.index_type,self__.row_aggs,self__.owner,self__.p__28749,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.map__28796,self__.table_state,self__.controls,self__.map__28795,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__28794,meta28798__$1));
});})(map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28797 = ((function (map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28797(index_type__$1,row_aggs__$1,owner__$1,p__28749__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__28796__$2,table_state__$1,controls__$1,map__28795__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28794__$2,meta28798){return (new clustermap.components.ranges_table.t28797(index_type__$1,row_aggs__$1,owner__$1,p__28749__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__28796__$2,table_state__$1,controls__$1,map__28795__$2,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28794__$2,meta28798));
});})(map__28794,map__28794__$1,props,map__28795,map__28795__$1,table_state,table_data,map__28796,map__28796__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28797(index_type,row_aggs,owner,p__28749,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__28796__$1,table_state,controls,map__28795__$1,col_aggs,title,rows,cols,map__28794__$1,null));
});
