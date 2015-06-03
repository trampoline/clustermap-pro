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
clustermap.components.ranges_table.render_table = (function render_table(p__27454,owner,opts){var map__27573 = p__27454;var map__27573__$1 = ((cljs.core.seq_QMARK_.call(null,map__27573))?cljs.core.apply.call(null,cljs.core.hash_map,map__27573):map__27573);var map__27574 = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27574__$1 = ((cljs.core.seq_QMARK_.call(null,map__27574))?cljs.core.apply.call(null,cljs.core.hash_map,map__27574):map__27574);var table_data = map__27574__$1;var query = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27575 = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27575__$1 = ((cljs.core.seq_QMARK_.call(null,map__27575))?cljs.core.apply.call(null,cljs.core.hash_map,map__27575):map__27575);var controls = map__27575__$1;var title = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27576 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27576))?sablono.interpreter.attributes.call(null,attrs27576):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27576))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27577 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27577))?sablono.interpreter.attributes.call(null,attrs27577):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27577))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27577)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function iter__27579(s__27580){return (new cljs.core.LazySeq(null,((function (attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27580__$1 = s__27580;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27580__$1);if(temp__4126__auto__)
{var s__27580__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27580__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27580__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27582 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27581 = (0);while(true){
if((i__27581 < size__4376__auto__))
{var vec__27609 = cljs.core._nth.call(null,c__4375__auto__,i__27581);var row_i = cljs.core.nth.call(null,vec__27609,(0),null);var row = cljs.core.nth.call(null,vec__27609,(1),null);cljs.core.chunk_append.call(null,b__27582,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27581,vec__27609,row_i,row,c__4375__auto__,size__4376__auto__,b__27582,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function iter__27610(s__27611){return (new cljs.core.LazySeq(null,((function (i__27581,vec__27609,row_i,row,c__4375__auto__,size__4376__auto__,b__27582,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27611__$1 = s__27611;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27611__$1);if(temp__4126__auto____$1)
{var s__27611__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27611__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27611__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27613 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27612 = (0);while(true){
if((i__27612 < size__4376__auto____$1))
{var vec__27618 = cljs.core._nth.call(null,c__4375__auto____$1,i__27612);var col_i = cljs.core.nth.call(null,vec__27618,(0),null);var col = cljs.core.nth.call(null,vec__27618,(1),null);cljs.core.chunk_append.call(null,b__27613,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27619__$1 = (((G__27619 == null))?null:cljs.core.get.call(null,rowcol,G__27619));var G__27619__$2 = (((G__27619__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27619__$1));var G__27619__$3 = (((G__27619__$2 == null))?null:render_fn__$1.call(null,G__27619__$2));return G__27619__$3;
})():null)], null)));
{
var G__27691 = (i__27612 + (1));
i__27612 = G__27691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27613),iter__27610.call(null,cljs.core.chunk_rest.call(null,s__27611__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27613),null);
}
} else
{var vec__27620 = cljs.core.first.call(null,s__27611__$2);var col_i = cljs.core.nth.call(null,vec__27620,(0),null);var col = cljs.core.nth.call(null,vec__27620,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27621__$1 = (((G__27621 == null))?null:cljs.core.get.call(null,rowcol,G__27621));var G__27621__$2 = (((G__27621__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27621__$1));var G__27621__$3 = (((G__27621__$2 == null))?null:render_fn__$1.call(null,G__27621__$2));return G__27621__$3;
})():null)], null)),iter__27610.call(null,cljs.core.rest.call(null,s__27611__$2)));
}
} else
{return null;
}
break;
}
});})(i__27581,vec__27609,row_i,row,c__4375__auto__,size__4376__auto__,b__27582,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27581,vec__27609,row_i,row,c__4375__auto__,size__4376__auto__,b__27582,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27692 = (i__27581 + (1));
i__27581 = G__27692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27582),iter__27579.call(null,cljs.core.chunk_rest.call(null,s__27580__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27582),null);
}
} else
{var vec__27622 = cljs.core.first.call(null,s__27580__$2);var row_i = cljs.core.nth.call(null,vec__27622,(0),null);var row = cljs.core.nth.call(null,vec__27622,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27622,row_i,row,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function iter__27623(s__27624){return (new cljs.core.LazySeq(null,((function (vec__27622,row_i,row,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27624__$1 = s__27624;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27624__$1);if(temp__4126__auto____$1)
{var s__27624__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27624__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27624__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27626 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27625 = (0);while(true){
if((i__27625 < size__4376__auto__))
{var vec__27631 = cljs.core._nth.call(null,c__4375__auto__,i__27625);var col_i = cljs.core.nth.call(null,vec__27631,(0),null);var col = cljs.core.nth.call(null,vec__27631,(1),null);cljs.core.chunk_append.call(null,b__27626,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27632__$1 = (((G__27632 == null))?null:cljs.core.get.call(null,rowcol,G__27632));var G__27632__$2 = (((G__27632__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27632__$1));var G__27632__$3 = (((G__27632__$2 == null))?null:render_fn__$1.call(null,G__27632__$2));return G__27632__$3;
})():null)], null)));
{
var G__27693 = (i__27625 + (1));
i__27625 = G__27693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27626),iter__27623.call(null,cljs.core.chunk_rest.call(null,s__27624__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27626),null);
}
} else
{var vec__27633 = cljs.core.first.call(null,s__27624__$2);var col_i = cljs.core.nth.call(null,vec__27633,(0),null);var col = cljs.core.nth.call(null,vec__27633,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27634__$1 = (((G__27634 == null))?null:cljs.core.get.call(null,rowcol,G__27634));var G__27634__$2 = (((G__27634__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27634__$1));var G__27634__$3 = (((G__27634__$2 == null))?null:render_fn__$1.call(null,G__27634__$2));return G__27634__$3;
})():null)], null)),iter__27623.call(null,cljs.core.rest.call(null,s__27624__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27622,row_i,row,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27622,row_i,row,s__27580__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27579.call(null,cljs.core.rest.call(null,s__27580__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27576),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27578 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27578))?sablono.interpreter.attributes.call(null,attrs27578):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27578))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27578)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function iter__27635(s__27636){return (new cljs.core.LazySeq(null,((function (attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27636__$1 = s__27636;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27636__$1);if(temp__4126__auto__)
{var s__27636__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27636__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27636__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27638 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27637 = (0);while(true){
if((i__27637 < size__4376__auto__))
{var vec__27665 = cljs.core._nth.call(null,c__4375__auto__,i__27637);var row_i = cljs.core.nth.call(null,vec__27665,(0),null);var row = cljs.core.nth.call(null,vec__27665,(1),null);cljs.core.chunk_append.call(null,b__27638,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27637,vec__27665,row_i,row,c__4375__auto__,size__4376__auto__,b__27638,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function iter__27666(s__27667){return (new cljs.core.LazySeq(null,((function (i__27637,vec__27665,row_i,row,c__4375__auto__,size__4376__auto__,b__27638,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27667__$1 = s__27667;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27667__$1);if(temp__4126__auto____$1)
{var s__27667__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27667__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27667__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27669 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27668 = (0);while(true){
if((i__27668 < size__4376__auto____$1))
{var vec__27674 = cljs.core._nth.call(null,c__4375__auto____$1,i__27668);var col_i = cljs.core.nth.call(null,vec__27674,(0),null);var col = cljs.core.nth.call(null,vec__27674,(1),null);cljs.core.chunk_append.call(null,b__27669,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27675__$1 = (((G__27675 == null))?null:cljs.core.get.call(null,rowcol,G__27675));var G__27675__$2 = (((G__27675__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27675__$1));var G__27675__$3 = (((G__27675__$2 == null))?null:render_fn__$1.call(null,G__27675__$2));return G__27675__$3;
})():null)], null)));
{
var G__27694 = (i__27668 + (1));
i__27668 = G__27694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27669),iter__27666.call(null,cljs.core.chunk_rest.call(null,s__27667__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27669),null);
}
} else
{var vec__27676 = cljs.core.first.call(null,s__27667__$2);var col_i = cljs.core.nth.call(null,vec__27676,(0),null);var col = cljs.core.nth.call(null,vec__27676,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27677__$1 = (((G__27677 == null))?null:cljs.core.get.call(null,rowcol,G__27677));var G__27677__$2 = (((G__27677__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27677__$1));var G__27677__$3 = (((G__27677__$2 == null))?null:render_fn__$1.call(null,G__27677__$2));return G__27677__$3;
})():null)], null)),iter__27666.call(null,cljs.core.rest.call(null,s__27667__$2)));
}
} else
{return null;
}
break;
}
});})(i__27637,vec__27665,row_i,row,c__4375__auto__,size__4376__auto__,b__27638,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27637,vec__27665,row_i,row,c__4375__auto__,size__4376__auto__,b__27638,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27695 = (i__27637 + (1));
i__27637 = G__27695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27638),iter__27635.call(null,cljs.core.chunk_rest.call(null,s__27636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27638),null);
}
} else
{var vec__27678 = cljs.core.first.call(null,s__27636__$2);var row_i = cljs.core.nth.call(null,vec__27678,(0),null);var row = cljs.core.nth.call(null,vec__27678,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27678,row_i,row,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function iter__27679(s__27680){return (new cljs.core.LazySeq(null,((function (vec__27678,row_i,row,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27680__$1 = s__27680;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27680__$1);if(temp__4126__auto____$1)
{var s__27680__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27680__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27680__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27682 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27681 = (0);while(true){
if((i__27681 < size__4376__auto__))
{var vec__27687 = cljs.core._nth.call(null,c__4375__auto__,i__27681);var col_i = cljs.core.nth.call(null,vec__27687,(0),null);var col = cljs.core.nth.call(null,vec__27687,(1),null);cljs.core.chunk_append.call(null,b__27682,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27688__$1 = (((G__27688 == null))?null:cljs.core.get.call(null,rowcol,G__27688));var G__27688__$2 = (((G__27688__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27688__$1));var G__27688__$3 = (((G__27688__$2 == null))?null:render_fn__$1.call(null,G__27688__$2));return G__27688__$3;
})():null)], null)));
{
var G__27696 = (i__27681 + (1));
i__27681 = G__27696;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27682),iter__27679.call(null,cljs.core.chunk_rest.call(null,s__27680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27682),null);
}
} else
{var vec__27689 = cljs.core.first.call(null,s__27680__$2);var col_i = cljs.core.nth.call(null,vec__27689,(0),null);var col = cljs.core.nth.call(null,vec__27689,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27690__$1 = (((G__27690 == null))?null:cljs.core.get.call(null,rowcol,G__27690));var G__27690__$2 = (((G__27690__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27690__$1));var G__27690__$3 = (((G__27690__$2 == null))?null:render_fn__$1.call(null,G__27690__$2));return G__27690__$3;
})():null)], null)),iter__27679.call(null,cljs.core.rest.call(null,s__27680__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27678,row_i,row,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27678,row_i,row,s__27636__$2,temp__4126__auto__,attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27635.call(null,cljs.core.rest.call(null,s__27636__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27576,rowcol,render_fn__$1,map__27573,map__27573__$1,map__27574,map__27574__$1,table_data,query,results,map__27575,map__27575__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27697,owner){var map__27710 = p__27697;var map__27710__$1 = ((cljs.core.seq_QMARK_.call(null,map__27710))?cljs.core.apply.call(null,cljs.core.hash_map,map__27710):map__27710);var props = map__27710__$1;var map__27711 = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27711__$1 = ((cljs.core.seq_QMARK_.call(null,map__27711))?cljs.core.apply.call(null,cljs.core.hash_map,map__27711):map__27711);var table_state = map__27711__$1;var table_data = cljs.core.get.call(null,map__27711__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27712 = cljs.core.get.call(null,map__27711__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27712__$1 = ((cljs.core.seq_QMARK_.call(null,map__27712))?cljs.core.apply.call(null,cljs.core.hash_map,map__27712):map__27712);var controls = map__27712__$1;var index_type = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27713 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27713 = (function (index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,p__27697,ranges_table_component,col_path,filter_spec,map__27712,table_state,controls,col_aggs,title,rows,cols,map__27710,map__27711,meta27714){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.p__27697 = p__27697;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__27712 = map__27712;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__27710 = map__27710;
this.map__27711 = map__27711;
this.meta27714 = meta27714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27713.cljs$lang$type = true;
clustermap.components.ranges_table.t27713.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27713";
clustermap.components.ranges_table.t27713.cljs$lang$ctorPrWriter = ((function (map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27713");
});})(map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27713.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27713.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27716,p__27717){var self__ = this;
var map__27718 = p__27716;var map__27718__$1 = ((cljs.core.seq_QMARK_.call(null,map__27718))?cljs.core.apply.call(null,cljs.core.hash_map,map__27718):map__27718);var next_props = map__27718__$1;var map__27719 = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27719__$1 = ((cljs.core.seq_QMARK_.call(null,map__27719))?cljs.core.apply.call(null,cljs.core.hash_map,map__27719):map__27719);var next_table_state = map__27719__$1;var next_table_data = cljs.core.get.call(null,map__27719__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27720 = cljs.core.get.call(null,map__27719__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27720__$1 = ((cljs.core.seq_QMARK_.call(null,map__27720))?cljs.core.apply.call(null,cljs.core.hash_map,map__27720):map__27720);var next_controls = map__27720__$1;var next_col_aggs = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27720__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27721 = p__27717;var map__27721__$1 = ((cljs.core.seq_QMARK_.call(null,map__27721))?cljs.core.apply.call(null,cljs.core.hash_map,map__27721):map__27721);var next_state = map__27721__$1;var table_data_resource = cljs.core.get.call(null,map__27721__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27713.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27713.prototype.om$core$IRender$render$arity$1 = ((function (map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27713.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27713.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27715){var self__ = this;
var _27715__$1 = this;return self__.meta27714;
});})(map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27715,meta27714__$1){var self__ = this;
var _27715__$1 = this;return (new clustermap.components.ranges_table.t27713(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.p__27697,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.map__27712,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__27710,self__.map__27711,meta27714__$1));
});})(map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27713 = ((function (map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27713(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,p__27697__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__27712__$2,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27710__$2,map__27711__$2,meta27714){return (new clustermap.components.ranges_table.t27713(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,p__27697__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__27712__$2,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27710__$2,map__27711__$2,meta27714));
});})(map__27710,map__27710__$1,props,map__27711,map__27711__$1,table_state,table_data,map__27712,map__27712__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27713(index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,p__27697,ranges_table_component,col_path,filter_spec,map__27712__$1,table_state,controls,col_aggs,title,rows,cols,map__27710__$1,map__27711__$1,null));
});
