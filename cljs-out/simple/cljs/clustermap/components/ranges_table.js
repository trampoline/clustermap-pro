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
clustermap.components.ranges_table.render_table = (function render_table(p__27451,owner,opts){var map__27570 = p__27451;var map__27570__$1 = ((cljs.core.seq_QMARK_.call(null,map__27570))?cljs.core.apply.call(null,cljs.core.hash_map,map__27570):map__27570);var map__27571 = cljs.core.get.call(null,map__27570__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27571__$1 = ((cljs.core.seq_QMARK_.call(null,map__27571))?cljs.core.apply.call(null,cljs.core.hash_map,map__27571):map__27571);var table_data = map__27571__$1;var query = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27572 = cljs.core.get.call(null,map__27570__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27572__$1 = ((cljs.core.seq_QMARK_.call(null,map__27572))?cljs.core.apply.call(null,cljs.core.hash_map,map__27572):map__27572);var controls = map__27572__$1;var title = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27573 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27573))?sablono.interpreter.attributes.call(null,attrs27573):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27573))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27574 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27574))?sablono.interpreter.attributes.call(null,attrs27574):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27574))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27574)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function iter__27576(s__27577){return (new cljs.core.LazySeq(null,((function (attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27577__$1 = s__27577;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27577__$1);if(temp__4126__auto__)
{var s__27577__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27577__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27577__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27579 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27578 = (0);while(true){
if((i__27578 < size__4376__auto__))
{var vec__27606 = cljs.core._nth.call(null,c__4375__auto__,i__27578);var row_i = cljs.core.nth.call(null,vec__27606,(0),null);var row = cljs.core.nth.call(null,vec__27606,(1),null);cljs.core.chunk_append.call(null,b__27579,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27578,vec__27606,row_i,row,c__4375__auto__,size__4376__auto__,b__27579,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function iter__27607(s__27608){return (new cljs.core.LazySeq(null,((function (i__27578,vec__27606,row_i,row,c__4375__auto__,size__4376__auto__,b__27579,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27608__$1 = s__27608;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27608__$1);if(temp__4126__auto____$1)
{var s__27608__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27608__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27608__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27610 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27609 = (0);while(true){
if((i__27609 < size__4376__auto____$1))
{var vec__27615 = cljs.core._nth.call(null,c__4375__auto____$1,i__27609);var col_i = cljs.core.nth.call(null,vec__27615,(0),null);var col = cljs.core.nth.call(null,vec__27615,(1),null);cljs.core.chunk_append.call(null,b__27610,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27616__$1 = (((G__27616 == null))?null:cljs.core.get.call(null,rowcol,G__27616));var G__27616__$2 = (((G__27616__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27616__$1));var G__27616__$3 = (((G__27616__$2 == null))?null:render_fn__$1.call(null,G__27616__$2));return G__27616__$3;
})():null)], null)));
{
var G__27688 = (i__27609 + (1));
i__27609 = G__27688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27610),iter__27607.call(null,cljs.core.chunk_rest.call(null,s__27608__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27610),null);
}
} else
{var vec__27617 = cljs.core.first.call(null,s__27608__$2);var col_i = cljs.core.nth.call(null,vec__27617,(0),null);var col = cljs.core.nth.call(null,vec__27617,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27618__$1 = (((G__27618 == null))?null:cljs.core.get.call(null,rowcol,G__27618));var G__27618__$2 = (((G__27618__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27618__$1));var G__27618__$3 = (((G__27618__$2 == null))?null:render_fn__$1.call(null,G__27618__$2));return G__27618__$3;
})():null)], null)),iter__27607.call(null,cljs.core.rest.call(null,s__27608__$2)));
}
} else
{return null;
}
break;
}
});})(i__27578,vec__27606,row_i,row,c__4375__auto__,size__4376__auto__,b__27579,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27578,vec__27606,row_i,row,c__4375__auto__,size__4376__auto__,b__27579,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27689 = (i__27578 + (1));
i__27578 = G__27689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27579),iter__27576.call(null,cljs.core.chunk_rest.call(null,s__27577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27579),null);
}
} else
{var vec__27619 = cljs.core.first.call(null,s__27577__$2);var row_i = cljs.core.nth.call(null,vec__27619,(0),null);var row = cljs.core.nth.call(null,vec__27619,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27619,row_i,row,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function iter__27620(s__27621){return (new cljs.core.LazySeq(null,((function (vec__27619,row_i,row,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27621__$1 = s__27621;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27621__$1);if(temp__4126__auto____$1)
{var s__27621__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27621__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27621__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27623 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27622 = (0);while(true){
if((i__27622 < size__4376__auto__))
{var vec__27628 = cljs.core._nth.call(null,c__4375__auto__,i__27622);var col_i = cljs.core.nth.call(null,vec__27628,(0),null);var col = cljs.core.nth.call(null,vec__27628,(1),null);cljs.core.chunk_append.call(null,b__27623,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27629__$1 = (((G__27629 == null))?null:cljs.core.get.call(null,rowcol,G__27629));var G__27629__$2 = (((G__27629__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27629__$1));var G__27629__$3 = (((G__27629__$2 == null))?null:render_fn__$1.call(null,G__27629__$2));return G__27629__$3;
})():null)], null)));
{
var G__27690 = (i__27622 + (1));
i__27622 = G__27690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27623),iter__27620.call(null,cljs.core.chunk_rest.call(null,s__27621__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27623),null);
}
} else
{var vec__27630 = cljs.core.first.call(null,s__27621__$2);var col_i = cljs.core.nth.call(null,vec__27630,(0),null);var col = cljs.core.nth.call(null,vec__27630,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27631__$1 = (((G__27631 == null))?null:cljs.core.get.call(null,rowcol,G__27631));var G__27631__$2 = (((G__27631__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27631__$1));var G__27631__$3 = (((G__27631__$2 == null))?null:render_fn__$1.call(null,G__27631__$2));return G__27631__$3;
})():null)], null)),iter__27620.call(null,cljs.core.rest.call(null,s__27621__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27619,row_i,row,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27619,row_i,row,s__27577__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27576.call(null,cljs.core.rest.call(null,s__27577__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27573),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27575 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27575))?sablono.interpreter.attributes.call(null,attrs27575):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27575))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27575)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function iter__27632(s__27633){return (new cljs.core.LazySeq(null,((function (attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27633__$1 = s__27633;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27633__$1);if(temp__4126__auto__)
{var s__27633__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27633__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27633__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27635 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27634 = (0);while(true){
if((i__27634 < size__4376__auto__))
{var vec__27662 = cljs.core._nth.call(null,c__4375__auto__,i__27634);var row_i = cljs.core.nth.call(null,vec__27662,(0),null);var row = cljs.core.nth.call(null,vec__27662,(1),null);cljs.core.chunk_append.call(null,b__27635,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27634,vec__27662,row_i,row,c__4375__auto__,size__4376__auto__,b__27635,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function iter__27663(s__27664){return (new cljs.core.LazySeq(null,((function (i__27634,vec__27662,row_i,row,c__4375__auto__,size__4376__auto__,b__27635,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27664__$1 = s__27664;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27664__$1);if(temp__4126__auto____$1)
{var s__27664__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27664__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27664__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27666 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27665 = (0);while(true){
if((i__27665 < size__4376__auto____$1))
{var vec__27671 = cljs.core._nth.call(null,c__4375__auto____$1,i__27665);var col_i = cljs.core.nth.call(null,vec__27671,(0),null);var col = cljs.core.nth.call(null,vec__27671,(1),null);cljs.core.chunk_append.call(null,b__27666,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27672__$1 = (((G__27672 == null))?null:cljs.core.get.call(null,rowcol,G__27672));var G__27672__$2 = (((G__27672__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27672__$1));var G__27672__$3 = (((G__27672__$2 == null))?null:render_fn__$1.call(null,G__27672__$2));return G__27672__$3;
})():null)], null)));
{
var G__27691 = (i__27665 + (1));
i__27665 = G__27691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27666),iter__27663.call(null,cljs.core.chunk_rest.call(null,s__27664__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27666),null);
}
} else
{var vec__27673 = cljs.core.first.call(null,s__27664__$2);var col_i = cljs.core.nth.call(null,vec__27673,(0),null);var col = cljs.core.nth.call(null,vec__27673,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27674__$1 = (((G__27674 == null))?null:cljs.core.get.call(null,rowcol,G__27674));var G__27674__$2 = (((G__27674__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27674__$1));var G__27674__$3 = (((G__27674__$2 == null))?null:render_fn__$1.call(null,G__27674__$2));return G__27674__$3;
})():null)], null)),iter__27663.call(null,cljs.core.rest.call(null,s__27664__$2)));
}
} else
{return null;
}
break;
}
});})(i__27634,vec__27662,row_i,row,c__4375__auto__,size__4376__auto__,b__27635,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27634,vec__27662,row_i,row,c__4375__auto__,size__4376__auto__,b__27635,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27692 = (i__27634 + (1));
i__27634 = G__27692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27635),iter__27632.call(null,cljs.core.chunk_rest.call(null,s__27633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27635),null);
}
} else
{var vec__27675 = cljs.core.first.call(null,s__27633__$2);var row_i = cljs.core.nth.call(null,vec__27675,(0),null);var row = cljs.core.nth.call(null,vec__27675,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27675,row_i,row,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function iter__27676(s__27677){return (new cljs.core.LazySeq(null,((function (vec__27675,row_i,row,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27677__$1 = s__27677;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27677__$1);if(temp__4126__auto____$1)
{var s__27677__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27677__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27677__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27679 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27678 = (0);while(true){
if((i__27678 < size__4376__auto__))
{var vec__27684 = cljs.core._nth.call(null,c__4375__auto__,i__27678);var col_i = cljs.core.nth.call(null,vec__27684,(0),null);var col = cljs.core.nth.call(null,vec__27684,(1),null);cljs.core.chunk_append.call(null,b__27679,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27685__$1 = (((G__27685 == null))?null:cljs.core.get.call(null,rowcol,G__27685));var G__27685__$2 = (((G__27685__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27685__$1));var G__27685__$3 = (((G__27685__$2 == null))?null:render_fn__$1.call(null,G__27685__$2));return G__27685__$3;
})():null)], null)));
{
var G__27693 = (i__27678 + (1));
i__27678 = G__27693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27679),iter__27676.call(null,cljs.core.chunk_rest.call(null,s__27677__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27679),null);
}
} else
{var vec__27686 = cljs.core.first.call(null,s__27677__$2);var col_i = cljs.core.nth.call(null,vec__27686,(0),null);var col = cljs.core.nth.call(null,vec__27686,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27687__$1 = (((G__27687 == null))?null:cljs.core.get.call(null,rowcol,G__27687));var G__27687__$2 = (((G__27687__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27687__$1));var G__27687__$3 = (((G__27687__$2 == null))?null:render_fn__$1.call(null,G__27687__$2));return G__27687__$3;
})():null)], null)),iter__27676.call(null,cljs.core.rest.call(null,s__27677__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27675,row_i,row,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27675,row_i,row,s__27633__$2,temp__4126__auto__,attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27632.call(null,cljs.core.rest.call(null,s__27633__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27573,rowcol,render_fn__$1,map__27570,map__27570__$1,map__27571,map__27571__$1,table_data,query,results,map__27572,map__27572__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27694,owner){var map__27707 = p__27694;var map__27707__$1 = ((cljs.core.seq_QMARK_.call(null,map__27707))?cljs.core.apply.call(null,cljs.core.hash_map,map__27707):map__27707);var props = map__27707__$1;var map__27708 = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27708__$1 = ((cljs.core.seq_QMARK_.call(null,map__27708))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);var table_state = map__27708__$1;var table_data = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27709 = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27709__$1 = ((cljs.core.seq_QMARK_.call(null,map__27709))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);var controls = map__27709__$1;var index_type = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27710 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27710 = (function (index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,p__27694,filter_spec,map__27709,table_state,controls,col_aggs,title,rows,cols,map__27707,map__27708,meta27711){
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
this.p__27694 = p__27694;
this.filter_spec = filter_spec;
this.map__27709 = map__27709;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__27707 = map__27707;
this.map__27708 = map__27708;
this.meta27711 = meta27711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27710.cljs$lang$type = true;
clustermap.components.ranges_table.t27710.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27710";
clustermap.components.ranges_table.t27710.cljs$lang$ctorPrWriter = ((function (map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27710");
});})(map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27710.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27710.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27713,p__27714){var self__ = this;
var map__27715 = p__27713;var map__27715__$1 = ((cljs.core.seq_QMARK_.call(null,map__27715))?cljs.core.apply.call(null,cljs.core.hash_map,map__27715):map__27715);var next_props = map__27715__$1;var map__27716 = cljs.core.get.call(null,map__27715__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27716__$1 = ((cljs.core.seq_QMARK_.call(null,map__27716))?cljs.core.apply.call(null,cljs.core.hash_map,map__27716):map__27716);var next_table_state = map__27716__$1;var next_table_data = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27717 = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27717__$1 = ((cljs.core.seq_QMARK_.call(null,map__27717))?cljs.core.apply.call(null,cljs.core.hash_map,map__27717):map__27717);var next_controls = map__27717__$1;var next_col_aggs = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27715__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27718 = p__27714;var map__27718__$1 = ((cljs.core.seq_QMARK_.call(null,map__27718))?cljs.core.apply.call(null,cljs.core.hash_map,map__27718):map__27718);var next_state = map__27718__$1;var table_data_resource = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27710.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27710.prototype.om$core$IRender$render$arity$1 = ((function (map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27710.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27710.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27712){var self__ = this;
var _27712__$1 = this;return self__.meta27711;
});})(map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27712,meta27711__$1){var self__ = this;
var _27712__$1 = this;return (new clustermap.components.ranges_table.t27710(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.p__27694,self__.filter_spec,self__.map__27709,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__27707,self__.map__27708,meta27711__$1));
});})(map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27710 = ((function (map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27710(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,p__27694__$1,filter_spec__$1,map__27709__$2,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27707__$2,map__27708__$2,meta27711){return (new clustermap.components.ranges_table.t27710(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,p__27694__$1,filter_spec__$1,map__27709__$2,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27707__$2,map__27708__$2,meta27711));
});})(map__27707,map__27707__$1,props,map__27708,map__27708__$1,table_state,table_data,map__27709,map__27709__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27710(index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,p__27694,filter_spec,map__27709__$1,table_state,controls,col_aggs,title,rows,cols,map__27707__$1,map__27708__$1,null));
});
