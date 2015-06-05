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
clustermap.components.ranges_table.render_table = (function render_table(p__27531,owner,opts){var map__27650 = p__27531;var map__27650__$1 = ((cljs.core.seq_QMARK_.call(null,map__27650))?cljs.core.apply.call(null,cljs.core.hash_map,map__27650):map__27650);var map__27651 = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27651__$1 = ((cljs.core.seq_QMARK_.call(null,map__27651))?cljs.core.apply.call(null,cljs.core.hash_map,map__27651):map__27651);var table_data = map__27651__$1;var query = cljs.core.get.call(null,map__27651__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__27651__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__27652 = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27652__$1 = ((cljs.core.seq_QMARK_.call(null,map__27652))?cljs.core.apply.call(null,cljs.core.hash_map,map__27652):map__27652);var controls = map__27652__$1;var title = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__27652__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs27653 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27653))?sablono.interpreter.attributes.call(null,attrs27653):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27653))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27654 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27654))?sablono.interpreter.attributes.call(null,attrs27654):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27654))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27654)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function iter__27656(s__27657){return (new cljs.core.LazySeq(null,((function (attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27657__$1 = s__27657;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27657__$1);if(temp__4126__auto__)
{var s__27657__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27657__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27657__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27659 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27658 = (0);while(true){
if((i__27658 < size__4376__auto__))
{var vec__27686 = cljs.core._nth.call(null,c__4375__auto__,i__27658);var row_i = cljs.core.nth.call(null,vec__27686,(0),null);var row = cljs.core.nth.call(null,vec__27686,(1),null);cljs.core.chunk_append.call(null,b__27659,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27658,vec__27686,row_i,row,c__4375__auto__,size__4376__auto__,b__27659,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function iter__27687(s__27688){return (new cljs.core.LazySeq(null,((function (i__27658,vec__27686,row_i,row,c__4375__auto__,size__4376__auto__,b__27659,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27688__$1 = s__27688;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27688__$1);if(temp__4126__auto____$1)
{var s__27688__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27688__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27688__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27690 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27689 = (0);while(true){
if((i__27689 < size__4376__auto____$1))
{var vec__27695 = cljs.core._nth.call(null,c__4375__auto____$1,i__27689);var col_i = cljs.core.nth.call(null,vec__27695,(0),null);var col = cljs.core.nth.call(null,vec__27695,(1),null);cljs.core.chunk_append.call(null,b__27690,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27696__$1 = (((G__27696 == null))?null:cljs.core.get.call(null,rowcol,G__27696));var G__27696__$2 = (((G__27696__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27696__$1));var G__27696__$3 = (((G__27696__$2 == null))?null:render_fn__$1.call(null,G__27696__$2));return G__27696__$3;
})():null)], null)));
{
var G__27768 = (i__27689 + (1));
i__27689 = G__27768;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27690),iter__27687.call(null,cljs.core.chunk_rest.call(null,s__27688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27690),null);
}
} else
{var vec__27697 = cljs.core.first.call(null,s__27688__$2);var col_i = cljs.core.nth.call(null,vec__27697,(0),null);var col = cljs.core.nth.call(null,vec__27697,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27698__$1 = (((G__27698 == null))?null:cljs.core.get.call(null,rowcol,G__27698));var G__27698__$2 = (((G__27698__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27698__$1));var G__27698__$3 = (((G__27698__$2 == null))?null:render_fn__$1.call(null,G__27698__$2));return G__27698__$3;
})():null)], null)),iter__27687.call(null,cljs.core.rest.call(null,s__27688__$2)));
}
} else
{return null;
}
break;
}
});})(i__27658,vec__27686,row_i,row,c__4375__auto__,size__4376__auto__,b__27659,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27658,vec__27686,row_i,row,c__4375__auto__,size__4376__auto__,b__27659,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27769 = (i__27658 + (1));
i__27658 = G__27769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27659),iter__27656.call(null,cljs.core.chunk_rest.call(null,s__27657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27659),null);
}
} else
{var vec__27699 = cljs.core.first.call(null,s__27657__$2);var row_i = cljs.core.nth.call(null,vec__27699,(0),null);var row = cljs.core.nth.call(null,vec__27699,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27699,row_i,row,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function iter__27700(s__27701){return (new cljs.core.LazySeq(null,((function (vec__27699,row_i,row,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27701__$1 = s__27701;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27701__$1);if(temp__4126__auto____$1)
{var s__27701__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27701__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27701__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27703 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27702 = (0);while(true){
if((i__27702 < size__4376__auto__))
{var vec__27708 = cljs.core._nth.call(null,c__4375__auto__,i__27702);var col_i = cljs.core.nth.call(null,vec__27708,(0),null);var col = cljs.core.nth.call(null,vec__27708,(1),null);cljs.core.chunk_append.call(null,b__27703,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27709__$1 = (((G__27709 == null))?null:cljs.core.get.call(null,rowcol,G__27709));var G__27709__$2 = (((G__27709__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27709__$1));var G__27709__$3 = (((G__27709__$2 == null))?null:render_fn__$1.call(null,G__27709__$2));return G__27709__$3;
})():null)], null)));
{
var G__27770 = (i__27702 + (1));
i__27702 = G__27770;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27703),iter__27700.call(null,cljs.core.chunk_rest.call(null,s__27701__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27703),null);
}
} else
{var vec__27710 = cljs.core.first.call(null,s__27701__$2);var col_i = cljs.core.nth.call(null,vec__27710,(0),null);var col = cljs.core.nth.call(null,vec__27710,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27711__$1 = (((G__27711 == null))?null:cljs.core.get.call(null,rowcol,G__27711));var G__27711__$2 = (((G__27711__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27711__$1));var G__27711__$3 = (((G__27711__$2 == null))?null:render_fn__$1.call(null,G__27711__$2));return G__27711__$3;
})():null)], null)),iter__27700.call(null,cljs.core.rest.call(null,s__27701__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27699,row_i,row,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27699,row_i,row,s__27657__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27656.call(null,cljs.core.rest.call(null,s__27657__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27653),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27655 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27655))?sablono.interpreter.attributes.call(null,attrs27655):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27655))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27655)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function iter__27712(s__27713){return (new cljs.core.LazySeq(null,((function (attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27713__$1 = s__27713;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27713__$1);if(temp__4126__auto__)
{var s__27713__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27713__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27713__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27715 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27714 = (0);while(true){
if((i__27714 < size__4376__auto__))
{var vec__27742 = cljs.core._nth.call(null,c__4375__auto__,i__27714);var row_i = cljs.core.nth.call(null,vec__27742,(0),null);var row = cljs.core.nth.call(null,vec__27742,(1),null);cljs.core.chunk_append.call(null,b__27715,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__27714,vec__27742,row_i,row,c__4375__auto__,size__4376__auto__,b__27715,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function iter__27743(s__27744){return (new cljs.core.LazySeq(null,((function (i__27714,vec__27742,row_i,row,c__4375__auto__,size__4376__auto__,b__27715,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27744__$1 = s__27744;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27744__$1);if(temp__4126__auto____$1)
{var s__27744__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27744__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__27744__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__27746 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__27745 = (0);while(true){
if((i__27745 < size__4376__auto____$1))
{var vec__27751 = cljs.core._nth.call(null,c__4375__auto____$1,i__27745);var col_i = cljs.core.nth.call(null,vec__27751,(0),null);var col = cljs.core.nth.call(null,vec__27751,(1),null);cljs.core.chunk_append.call(null,b__27746,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27752__$1 = (((G__27752 == null))?null:cljs.core.get.call(null,rowcol,G__27752));var G__27752__$2 = (((G__27752__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27752__$1));var G__27752__$3 = (((G__27752__$2 == null))?null:render_fn__$1.call(null,G__27752__$2));return G__27752__$3;
})():null)], null)));
{
var G__27771 = (i__27745 + (1));
i__27745 = G__27771;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27746),iter__27743.call(null,cljs.core.chunk_rest.call(null,s__27744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27746),null);
}
} else
{var vec__27753 = cljs.core.first.call(null,s__27744__$2);var col_i = cljs.core.nth.call(null,vec__27753,(0),null);var col = cljs.core.nth.call(null,vec__27753,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27754__$1 = (((G__27754 == null))?null:cljs.core.get.call(null,rowcol,G__27754));var G__27754__$2 = (((G__27754__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27754__$1));var G__27754__$3 = (((G__27754__$2 == null))?null:render_fn__$1.call(null,G__27754__$2));return G__27754__$3;
})():null)], null)),iter__27743.call(null,cljs.core.rest.call(null,s__27744__$2)));
}
} else
{return null;
}
break;
}
});})(i__27714,vec__27742,row_i,row,c__4375__auto__,size__4376__auto__,b__27715,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__27714,vec__27742,row_i,row,c__4375__auto__,size__4376__auto__,b__27715,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__27772 = (i__27714 + (1));
i__27714 = G__27772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27715),iter__27712.call(null,cljs.core.chunk_rest.call(null,s__27713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27715),null);
}
} else
{var vec__27755 = cljs.core.first.call(null,s__27713__$2);var row_i = cljs.core.nth.call(null,vec__27755,(0),null);var row = cljs.core.nth.call(null,vec__27755,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__27755,row_i,row,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function iter__27756(s__27757){return (new cljs.core.LazySeq(null,((function (vec__27755,row_i,row,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn){
return (function (){var s__27757__$1 = s__27757;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27757__$1);if(temp__4126__auto____$1)
{var s__27757__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27757__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27757__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27759 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27758 = (0);while(true){
if((i__27758 < size__4376__auto__))
{var vec__27764 = cljs.core._nth.call(null,c__4375__auto__,i__27758);var col_i = cljs.core.nth.call(null,vec__27764,(0),null);var col = cljs.core.nth.call(null,vec__27764,(1),null);cljs.core.chunk_append.call(null,b__27759,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27765__$1 = (((G__27765 == null))?null:cljs.core.get.call(null,rowcol,G__27765));var G__27765__$2 = (((G__27765__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27765__$1));var G__27765__$3 = (((G__27765__$2 == null))?null:render_fn__$1.call(null,G__27765__$2));return G__27765__$3;
})():null)], null)));
{
var G__27773 = (i__27758 + (1));
i__27758 = G__27773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27759),iter__27756.call(null,cljs.core.chunk_rest.call(null,s__27757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27759),null);
}
} else
{var vec__27766 = cljs.core.first.call(null,s__27757__$2);var col_i = cljs.core.nth.call(null,vec__27766,(0),null);var col = cljs.core.nth.call(null,vec__27766,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__27767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__27767__$1 = (((G__27767 == null))?null:cljs.core.get.call(null,rowcol,G__27767));var G__27767__$2 = (((G__27767__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__27767__$1));var G__27767__$3 = (((G__27767__$2 == null))?null:render_fn__$1.call(null,G__27767__$2));return G__27767__$3;
})():null)], null)),iter__27756.call(null,cljs.core.rest.call(null,s__27757__$2)));
}
} else
{return null;
}
break;
}
});})(vec__27755,row_i,row,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__27755,row_i,row,s__27713__$2,temp__4126__auto__,attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__27712.call(null,cljs.core.rest.call(null,s__27713__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs27653,rowcol,render_fn__$1,map__27650,map__27650__$1,map__27651,map__27651__$1,table_data,query,results,map__27652,map__27652__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__27774,owner){var map__27787 = p__27774;var map__27787__$1 = ((cljs.core.seq_QMARK_.call(null,map__27787))?cljs.core.apply.call(null,cljs.core.hash_map,map__27787):map__27787);var props = map__27787__$1;var map__27788 = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27788__$1 = ((cljs.core.seq_QMARK_.call(null,map__27788))?cljs.core.apply.call(null,cljs.core.hash_map,map__27788):map__27788);var table_state = map__27788__$1;var table_data = cljs.core.get.call(null,map__27788__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27789 = cljs.core.get.call(null,map__27788__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27789__$1 = ((cljs.core.seq_QMARK_.call(null,map__27789))?cljs.core.apply.call(null,cljs.core.hash_map,map__27789):map__27789);var controls = map__27789__$1;var index_type = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__27789__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t27790 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t27790 = (function (index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,map__27787,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__27789,p__27774,map__27788,meta27791){
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
this.map__27787 = map__27787;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__27789 = map__27789;
this.p__27774 = p__27774;
this.map__27788 = map__27788;
this.meta27791 = meta27791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t27790.cljs$lang$type = true;
clustermap.components.ranges_table.t27790.cljs$lang$ctorStr = "clustermap.components.ranges-table/t27790";
clustermap.components.ranges_table.t27790.cljs$lang$ctorPrWriter = ((function (map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t27790");
});})(map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27790.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t27790.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__27793,p__27794){var self__ = this;
var map__27795 = p__27793;var map__27795__$1 = ((cljs.core.seq_QMARK_.call(null,map__27795))?cljs.core.apply.call(null,cljs.core.hash_map,map__27795):map__27795);var next_props = map__27795__$1;var map__27796 = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27796__$1 = ((cljs.core.seq_QMARK_.call(null,map__27796))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);var next_table_state = map__27796__$1;var next_table_data = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27797 = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27797__$1 = ((cljs.core.seq_QMARK_.call(null,map__27797))?cljs.core.apply.call(null,cljs.core.hash_map,map__27797):map__27797);var next_controls = map__27797__$1;var next_col_aggs = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27798 = p__27794;var map__27798__$1 = ((cljs.core.seq_QMARK_.call(null,map__27798))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);var next_state = map__27798__$1;var table_data_resource = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27790.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t27790.prototype.om$core$IRender$render$arity$1 = ((function (map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27790.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t27790.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27792){var self__ = this;
var _27792__$1 = this;return self__.meta27791;
});})(map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t27790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_27792,meta27791__$1){var self__ = this;
var _27792__$1 = this;return (new clustermap.components.ranges_table.t27790(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.map__27787,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__27789,self__.p__27774,self__.map__27788,meta27791__$1));
});})(map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t27790 = ((function (map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t27790(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,map__27787__$2,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27789__$2,p__27774__$1,map__27788__$2,meta27791){return (new clustermap.components.ranges_table.t27790(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,map__27787__$2,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__27789__$2,p__27774__$1,map__27788__$2,meta27791));
});})(map__27787,map__27787__$1,props,map__27788,map__27788__$1,table_state,table_data,map__27789,map__27789__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t27790(index_type,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,map__27787__$1,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__27789__$1,p__27774,map__27788__$1,null));
});
