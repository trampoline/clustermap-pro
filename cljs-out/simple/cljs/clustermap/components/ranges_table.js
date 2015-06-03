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
clustermap.components.ranges_table.render_table = (function render_table(p__27452,owner,opts){var map__27571 = p__27452;var map__27571__$1 = ((cljs.core.seq_QMARK_.call(null,map__27571))?cljs.core.apply.call(null,cljs.core.hash_map,map__27571):map__27571);var map__27572 = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27572__$1 = ((cljs.core.seq_QMARK_.call(null,map__27572))?cljs.core.apply.call(null,cljs.core.hash_map,map__27572):map__27572);var table_data = map__27572__$1;var query = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27573 = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27573__$1 = ((cljs.core.seq_QMARK_.call(null,map__27573))?cljs.core.apply.call(null,cljs.core.hash_map,map__27573):map__27573);var controls = map__27573__$1;var title = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27574 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27574))?sablono.interpreter.attributes.call(null,attrs27574):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27574))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27575 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27575))?sablono.interpreter.attributes.call(null,attrs27575):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27575))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27575)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function iter__27577(s__27578){return (new cljs.core.LazySeq(null,((function (attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27578__$1 = s__27578;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27578__$1);if(temp__4126__auto__)
{var s__27578__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27578__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27578__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27580 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27579 = (0);while(true){
if((i__27579 < size__4376__auto__))
{var vec__27607 = cljs.core._nth.call(null,c__4375__auto__,i__27579);var row_i = cljs.core.nth.call(null,vec__27607,(0),null);var row = cljs.core.nth.call(null,vec__27607,(1),null);cljs.core.chunk_append.call(null,b__27580,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27579,vec__27607,row_i,row,c__4375__auto__,size__4376__auto__,b__27580,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function iter__27608(s__27609){return (new cljs.core.LazySeq(null,((function (i__27579,vec__27607,row_i,row,c__4375__auto__,size__4376__auto__,b__27580,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27609__$1 = s__27609;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27609__$1);if(temp__4126__auto____$1)
{var s__27609__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27609__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27609__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27611 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27610 = (0);while(true){
if((i__27610 < size__4376__auto____$1))
{var vec__27616 = cljs.core._nth.call(null,c__4375__auto____$1,i__27610);var col_i = cljs.core.nth.call(null,vec__27616,(0),null);var col = cljs.core.nth.call(null,vec__27616,(1),null);cljs.core.chunk_append.call(null,b__27611,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27617__$1 = (((G__27617 == null))?null:cljs.core.get.call(null,rowcol,G__27617));var G__27617__$2 = (((G__27617__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27617__$1));var G__27617__$3 = (((G__27617__$2 == null))?null:render_fn__$1.call(null,G__27617__$2));return G__27617__$3;
})():null)], null)));
{
var G__27689 = (i__27610 + (1));
i__27610 = G__27689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27611),iter__27608.call(null,cljs.core.chunk_rest.call(null,s__27609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27611),null);
}
} else
{var vec__27618 = cljs.core.first.call(null,s__27609__$2);var col_i = cljs.core.nth.call(null,vec__27618,(0),null);var col = cljs.core.nth.call(null,vec__27618,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27619__$1 = (((G__27619 == null))?null:cljs.core.get.call(null,rowcol,G__27619));var G__27619__$2 = (((G__27619__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27619__$1));var G__27619__$3 = (((G__27619__$2 == null))?null:render_fn__$1.call(null,G__27619__$2));return G__27619__$3;
})():null)], null)),iter__27608.call(null,cljs.core.rest.call(null,s__27609__$2)));
}
} else
{return null;
}
break;
}
});})(i__27579,vec__27607,row_i,row,c__4375__auto__,size__4376__auto__,b__27580,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27579,vec__27607,row_i,row,c__4375__auto__,size__4376__auto__,b__27580,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27690 = (i__27579 + (1));
i__27579 = G__27690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27580),iter__27577.call(null,cljs.core.chunk_rest.call(null,s__27578__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27580),null);
}
} else
{var vec__27620 = cljs.core.first.call(null,s__27578__$2);var row_i = cljs.core.nth.call(null,vec__27620,(0),null);var row = cljs.core.nth.call(null,vec__27620,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27620,row_i,row,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function iter__27621(s__27622){return (new cljs.core.LazySeq(null,((function (vec__27620,row_i,row,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27622__$1 = s__27622;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27622__$1);if(temp__4126__auto____$1)
{var s__27622__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27622__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27622__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27624 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27623 = (0);while(true){
if((i__27623 < size__4376__auto__))
{var vec__27629 = cljs.core._nth.call(null,c__4375__auto__,i__27623);var col_i = cljs.core.nth.call(null,vec__27629,(0),null);var col = cljs.core.nth.call(null,vec__27629,(1),null);cljs.core.chunk_append.call(null,b__27624,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27630__$1 = (((G__27630 == null))?null:cljs.core.get.call(null,rowcol,G__27630));var G__27630__$2 = (((G__27630__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27630__$1));var G__27630__$3 = (((G__27630__$2 == null))?null:render_fn__$1.call(null,G__27630__$2));return G__27630__$3;
})():null)], null)));
{
var G__27691 = (i__27623 + (1));
i__27623 = G__27691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27624),iter__27621.call(null,cljs.core.chunk_rest.call(null,s__27622__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27624),null);
}
} else
{var vec__27631 = cljs.core.first.call(null,s__27622__$2);var col_i = cljs.core.nth.call(null,vec__27631,(0),null);var col = cljs.core.nth.call(null,vec__27631,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27632__$1 = (((G__27632 == null))?null:cljs.core.get.call(null,rowcol,G__27632));var G__27632__$2 = (((G__27632__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27632__$1));var G__27632__$3 = (((G__27632__$2 == null))?null:render_fn__$1.call(null,G__27632__$2));return G__27632__$3;
})():null)], null)),iter__27621.call(null,cljs.core.rest.call(null,s__27622__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27620,row_i,row,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27620,row_i,row,s__27578__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27577.call(null,cljs.core.rest.call(null,s__27578__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27574),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27576 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27576))?sablono.interpreter.attributes.call(null,attrs27576):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27576))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27576)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function iter__27633(s__27634){return (new cljs.core.LazySeq(null,((function (attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27634__$1 = s__27634;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27634__$1);if(temp__4126__auto__)
{var s__27634__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27634__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27634__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27636 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27635 = (0);while(true){
if((i__27635 < size__4376__auto__))
{var vec__27663 = cljs.core._nth.call(null,c__4375__auto__,i__27635);var row_i = cljs.core.nth.call(null,vec__27663,(0),null);var row = cljs.core.nth.call(null,vec__27663,(1),null);cljs.core.chunk_append.call(null,b__27636,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27635,vec__27663,row_i,row,c__4375__auto__,size__4376__auto__,b__27636,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function iter__27664(s__27665){return (new cljs.core.LazySeq(null,((function (i__27635,vec__27663,row_i,row,c__4375__auto__,size__4376__auto__,b__27636,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27665__$1 = s__27665;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27665__$1);if(temp__4126__auto____$1)
{var s__27665__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27665__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27665__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27667 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27666 = (0);while(true){
if((i__27666 < size__4376__auto____$1))
{var vec__27672 = cljs.core._nth.call(null,c__4375__auto____$1,i__27666);var col_i = cljs.core.nth.call(null,vec__27672,(0),null);var col = cljs.core.nth.call(null,vec__27672,(1),null);cljs.core.chunk_append.call(null,b__27667,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27673__$1 = (((G__27673 == null))?null:cljs.core.get.call(null,rowcol,G__27673));var G__27673__$2 = (((G__27673__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27673__$1));var G__27673__$3 = (((G__27673__$2 == null))?null:render_fn__$1.call(null,G__27673__$2));return G__27673__$3;
})():null)], null)));
{
var G__27692 = (i__27666 + (1));
i__27666 = G__27692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27667),iter__27664.call(null,cljs.core.chunk_rest.call(null,s__27665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27667),null);
}
} else
{var vec__27674 = cljs.core.first.call(null,s__27665__$2);var col_i = cljs.core.nth.call(null,vec__27674,(0),null);var col = cljs.core.nth.call(null,vec__27674,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27675__$1 = (((G__27675 == null))?null:cljs.core.get.call(null,rowcol,G__27675));var G__27675__$2 = (((G__27675__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27675__$1));var G__27675__$3 = (((G__27675__$2 == null))?null:render_fn__$1.call(null,G__27675__$2));return G__27675__$3;
})():null)], null)),iter__27664.call(null,cljs.core.rest.call(null,s__27665__$2)));
}
} else
{return null;
}
break;
}
});})(i__27635,vec__27663,row_i,row,c__4375__auto__,size__4376__auto__,b__27636,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27635,vec__27663,row_i,row,c__4375__auto__,size__4376__auto__,b__27636,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27693 = (i__27635 + (1));
i__27635 = G__27693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27636),iter__27633.call(null,cljs.core.chunk_rest.call(null,s__27634__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27636),null);
}
} else
{var vec__27676 = cljs.core.first.call(null,s__27634__$2);var row_i = cljs.core.nth.call(null,vec__27676,(0),null);var row = cljs.core.nth.call(null,vec__27676,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27676,row_i,row,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function iter__27677(s__27678){return (new cljs.core.LazySeq(null,((function (vec__27676,row_i,row,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27678__$1 = s__27678;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27678__$1);if(temp__4126__auto____$1)
{var s__27678__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27678__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27678__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27680 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27679 = (0);while(true){
if((i__27679 < size__4376__auto__))
{var vec__27685 = cljs.core._nth.call(null,c__4375__auto__,i__27679);var col_i = cljs.core.nth.call(null,vec__27685,(0),null);var col = cljs.core.nth.call(null,vec__27685,(1),null);cljs.core.chunk_append.call(null,b__27680,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27686__$1 = (((G__27686 == null))?null:cljs.core.get.call(null,rowcol,G__27686));var G__27686__$2 = (((G__27686__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27686__$1));var G__27686__$3 = (((G__27686__$2 == null))?null:render_fn__$1.call(null,G__27686__$2));return G__27686__$3;
})():null)], null)));
{
var G__27694 = (i__27679 + (1));
i__27679 = G__27694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27680),iter__27677.call(null,cljs.core.chunk_rest.call(null,s__27678__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27680),null);
}
} else
{var vec__27687 = cljs.core.first.call(null,s__27678__$2);var col_i = cljs.core.nth.call(null,vec__27687,(0),null);var col = cljs.core.nth.call(null,vec__27687,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27688__$1 = (((G__27688 == null))?null:cljs.core.get.call(null,rowcol,G__27688));var G__27688__$2 = (((G__27688__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27688__$1));var G__27688__$3 = (((G__27688__$2 == null))?null:render_fn__$1.call(null,G__27688__$2));return G__27688__$3;
})():null)], null)),iter__27677.call(null,cljs.core.rest.call(null,s__27678__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27676,row_i,row,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27676,row_i,row,s__27634__$2,temp__4126__auto__,attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27633.call(null,cljs.core.rest.call(null,s__27634__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27574,rowcol,render_fn__$1,map__27571,map__27571__$1,map__27572,map__27572__$1,table_data,query,results,map__27573,map__27573__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27695,owner){var map__27708 = p__27695;var map__27708__$1 = ((cljs.core.seq_QMARK_.call(null,map__27708))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);var props = map__27708__$1;var map__27709 = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27709__$1 = ((cljs.core.seq_QMARK_.call(null,map__27709))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);var table_state = map__27709__$1;var table_data = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27710 = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27710__$1 = ((cljs.core.seq_QMARK_.call(null,map__27710))?cljs.core.apply.call(null,cljs.core.hash_map,map__27710):map__27710);var controls = map__27710__$1;var index_type = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27711 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27711 = (function (index_type,row_aggs,owner,metric_path,props,row_path,table_data,p__27695,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__27709,table_state,controls,col_aggs,title,rows,cols,map__27710,map__27708,meta27712){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.p__27695 = p__27695;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__27709 = map__27709;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__27710 = map__27710;
this.map__27708 = map__27708;
this.meta27712 = meta27712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27711.cljs$lang$type = true;
clustermap.components.ranges_table.t27711.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27711";
clustermap.components.ranges_table.t27711.cljs$lang$ctorPrWriter = ((function (map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27711");
});})(map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27711.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27711.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27714,p__27715){var self__ = this;
var map__27716 = p__27714;var map__27716__$1 = ((cljs.core.seq_QMARK_.call(null,map__27716))?cljs.core.apply.call(null,cljs.core.hash_map,map__27716):map__27716);var next_props = map__27716__$1;var map__27717 = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27717__$1 = ((cljs.core.seq_QMARK_.call(null,map__27717))?cljs.core.apply.call(null,cljs.core.hash_map,map__27717):map__27717);var next_table_state = map__27717__$1;var next_table_data = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27718 = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27718__$1 = ((cljs.core.seq_QMARK_.call(null,map__27718))?cljs.core.apply.call(null,cljs.core.hash_map,map__27718):map__27718);var next_controls = map__27718__$1;var next_col_aggs = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27716__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27719 = p__27715;var map__27719__$1 = ((cljs.core.seq_QMARK_.call(null,map__27719))?cljs.core.apply.call(null,cljs.core.hash_map,map__27719):map__27719);var next_state = map__27719__$1;var table_data_resource = cljs.core.get.call(null,map__27719__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27711.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27711.prototype.om$core$IRender$render$arity$1 = ((function (map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27711.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27711.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27713){var self__ = this;
var _27713__$1 = this;return self__.meta27712;
});})(map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27713,meta27712__$1){var self__ = this;
var _27713__$1 = this;return (new clustermap.components.ranges_table.t27711(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.p__27695,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.map__27709,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__27710,self__.map__27708,meta27712__$1));
});})(map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27711 = ((function (map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27711(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,p__27695__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__27709__$2,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27710__$2,map__27708__$2,meta27712){return (new clustermap.components.ranges_table.t27711(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,p__27695__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__27709__$2,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27710__$2,map__27708__$2,meta27712));
});})(map__27708,map__27708__$1,props,map__27709,map__27709__$1,table_state,table_data,map__27710,map__27710__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27711(index_type,row_aggs,owner,metric_path,props,row_path,table_data,p__27695,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__27709__$1,table_state,controls,col_aggs,title,rows,cols,map__27710__$1,map__27708__$1,null));
});
