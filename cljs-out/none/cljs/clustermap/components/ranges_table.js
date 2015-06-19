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
clustermap.components.ranges_table.render_table = (function render_table(p__31741,owner,opts){var map__31860 = p__31741;var map__31860__$1 = ((cljs.core.seq_QMARK_.call(null,map__31860))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860):map__31860);var map__31861 = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__31861__$1 = ((cljs.core.seq_QMARK_.call(null,map__31861))?cljs.core.apply.call(null,cljs.core.hash_map,map__31861):map__31861);var table_data = map__31861__$1;var query = cljs.core.get.call(null,map__31861__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__31861__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__31862 = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__31862__$1 = ((cljs.core.seq_QMARK_.call(null,map__31862))?cljs.core.apply.call(null,cljs.core.hash_map,map__31862):map__31862);var controls = map__31862__$1;var title = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__11552__auto__ = render_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.identity;
}
})();var attrs31863 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs31863))?sablono.interpreter.attributes.call(null,attrs31863):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31863))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs31864 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs31864))?sablono.interpreter.attributes.call(null,attrs31864):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31864))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31864)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function iter__31866(s__31867){return (new cljs.core.LazySeq(null,((function (attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function (){var s__31867__$1 = s__31867;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31867__$1);if(temp__4126__auto__)
{var s__31867__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31867__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31867__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31869 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31868 = (0);while(true){
if((i__31868 < size__12289__auto__))
{var vec__31896 = cljs.core._nth.call(null,c__12288__auto__,i__31868);var row_i = cljs.core.nth.call(null,vec__31896,(0),null);var row = cljs.core.nth.call(null,vec__31896,(1),null);cljs.core.chunk_append.call(null,b__31869,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (i__31868,vec__31896,row_i,row,c__12288__auto__,size__12289__auto__,b__31869,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function iter__31897(s__31898){return (new cljs.core.LazySeq(null,((function (i__31868,vec__31896,row_i,row,c__12288__auto__,size__12289__auto__,b__31869,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function (){var s__31898__$1 = s__31898;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31898__$1);if(temp__4126__auto____$1)
{var s__31898__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31898__$2))
{var c__12288__auto____$1 = cljs.core.chunk_first.call(null,s__31898__$2);var size__12289__auto____$1 = cljs.core.count.call(null,c__12288__auto____$1);var b__31900 = cljs.core.chunk_buffer.call(null,size__12289__auto____$1);if((function (){var i__31899 = (0);while(true){
if((i__31899 < size__12289__auto____$1))
{var vec__31905 = cljs.core._nth.call(null,c__12288__auto____$1,i__31899);var col_i = cljs.core.nth.call(null,vec__31905,(0),null);var col = cljs.core.nth.call(null,vec__31905,(1),null);cljs.core.chunk_append.call(null,b__31900,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31906__$1 = (((G__31906 == null))?null:cljs.core.get.call(null,rowcol,G__31906));var G__31906__$2 = (((G__31906__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31906__$1));var G__31906__$3 = (((G__31906__$2 == null))?null:render_fn__$1.call(null,G__31906__$2));return G__31906__$3;
})():null)], null)));
{
var G__31978 = (i__31899 + (1));
i__31899 = G__31978;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31900),iter__31897.call(null,cljs.core.chunk_rest.call(null,s__31898__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31900),null);
}
} else
{var vec__31907 = cljs.core.first.call(null,s__31898__$2);var col_i = cljs.core.nth.call(null,vec__31907,(0),null);var col = cljs.core.nth.call(null,vec__31907,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31908__$1 = (((G__31908 == null))?null:cljs.core.get.call(null,rowcol,G__31908));var G__31908__$2 = (((G__31908__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31908__$1));var G__31908__$3 = (((G__31908__$2 == null))?null:render_fn__$1.call(null,G__31908__$2));return G__31908__$3;
})():null)], null)),iter__31897.call(null,cljs.core.rest.call(null,s__31898__$2)));
}
} else
{return null;
}
break;
}
});})(i__31868,vec__31896,row_i,row,c__12288__auto__,size__12289__auto__,b__31869,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__31868,vec__31896,row_i,row,c__12288__auto__,size__12289__auto__,b__31869,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__31979 = (i__31868 + (1));
i__31868 = G__31979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31869),iter__31866.call(null,cljs.core.chunk_rest.call(null,s__31867__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31869),null);
}
} else
{var vec__31909 = cljs.core.first.call(null,s__31867__$2);var row_i = cljs.core.nth.call(null,vec__31909,(0),null);var row = cljs.core.nth.call(null,vec__31909,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (vec__31909,row_i,row,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function iter__31910(s__31911){return (new cljs.core.LazySeq(null,((function (vec__31909,row_i,row,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function (){var s__31911__$1 = s__31911;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31911__$1);if(temp__4126__auto____$1)
{var s__31911__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31911__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31911__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31913 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31912 = (0);while(true){
if((i__31912 < size__12289__auto__))
{var vec__31918 = cljs.core._nth.call(null,c__12288__auto__,i__31912);var col_i = cljs.core.nth.call(null,vec__31918,(0),null);var col = cljs.core.nth.call(null,vec__31918,(1),null);cljs.core.chunk_append.call(null,b__31913,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31919__$1 = (((G__31919 == null))?null:cljs.core.get.call(null,rowcol,G__31919));var G__31919__$2 = (((G__31919__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31919__$1));var G__31919__$3 = (((G__31919__$2 == null))?null:render_fn__$1.call(null,G__31919__$2));return G__31919__$3;
})():null)], null)));
{
var G__31980 = (i__31912 + (1));
i__31912 = G__31980;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31913),iter__31910.call(null,cljs.core.chunk_rest.call(null,s__31911__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31913),null);
}
} else
{var vec__31920 = cljs.core.first.call(null,s__31911__$2);var col_i = cljs.core.nth.call(null,vec__31920,(0),null);var col = cljs.core.nth.call(null,vec__31920,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31921__$1 = (((G__31921 == null))?null:cljs.core.get.call(null,rowcol,G__31921));var G__31921__$2 = (((G__31921__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31921__$1));var G__31921__$3 = (((G__31921__$2 == null))?null:render_fn__$1.call(null,G__31921__$2));return G__31921__$3;
})():null)], null)),iter__31910.call(null,cljs.core.rest.call(null,s__31911__$2)));
}
} else
{return null;
}
break;
}
});})(vec__31909,row_i,row,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__31909,row_i,row,s__31867__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__31866.call(null,cljs.core.rest.call(null,s__31867__$2)));
}
} else
{return null;
}
break;
}
});})(attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31863),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs31865 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs31865))?sablono.interpreter.attributes.call(null,attrs31865):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31865))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31865)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function iter__31922(s__31923){return (new cljs.core.LazySeq(null,((function (attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function (){var s__31923__$1 = s__31923;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31923__$1);if(temp__4126__auto__)
{var s__31923__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31923__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31923__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31925 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31924 = (0);while(true){
if((i__31924 < size__12289__auto__))
{var vec__31952 = cljs.core._nth.call(null,c__12288__auto__,i__31924);var row_i = cljs.core.nth.call(null,vec__31952,(0),null);var row = cljs.core.nth.call(null,vec__31952,(1),null);cljs.core.chunk_append.call(null,b__31925,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (i__31924,vec__31952,row_i,row,c__12288__auto__,size__12289__auto__,b__31925,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function iter__31953(s__31954){return (new cljs.core.LazySeq(null,((function (i__31924,vec__31952,row_i,row,c__12288__auto__,size__12289__auto__,b__31925,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function (){var s__31954__$1 = s__31954;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31954__$1);if(temp__4126__auto____$1)
{var s__31954__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31954__$2))
{var c__12288__auto____$1 = cljs.core.chunk_first.call(null,s__31954__$2);var size__12289__auto____$1 = cljs.core.count.call(null,c__12288__auto____$1);var b__31956 = cljs.core.chunk_buffer.call(null,size__12289__auto____$1);if((function (){var i__31955 = (0);while(true){
if((i__31955 < size__12289__auto____$1))
{var vec__31961 = cljs.core._nth.call(null,c__12288__auto____$1,i__31955);var col_i = cljs.core.nth.call(null,vec__31961,(0),null);var col = cljs.core.nth.call(null,vec__31961,(1),null);cljs.core.chunk_append.call(null,b__31956,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31962__$1 = (((G__31962 == null))?null:cljs.core.get.call(null,rowcol,G__31962));var G__31962__$2 = (((G__31962__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31962__$1));var G__31962__$3 = (((G__31962__$2 == null))?null:render_fn__$1.call(null,G__31962__$2));return G__31962__$3;
})():null)], null)));
{
var G__31981 = (i__31955 + (1));
i__31955 = G__31981;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31956),iter__31953.call(null,cljs.core.chunk_rest.call(null,s__31954__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31956),null);
}
} else
{var vec__31963 = cljs.core.first.call(null,s__31954__$2);var col_i = cljs.core.nth.call(null,vec__31963,(0),null);var col = cljs.core.nth.call(null,vec__31963,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31964__$1 = (((G__31964 == null))?null:cljs.core.get.call(null,rowcol,G__31964));var G__31964__$2 = (((G__31964__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31964__$1));var G__31964__$3 = (((G__31964__$2 == null))?null:render_fn__$1.call(null,G__31964__$2));return G__31964__$3;
})():null)], null)),iter__31953.call(null,cljs.core.rest.call(null,s__31954__$2)));
}
} else
{return null;
}
break;
}
});})(i__31924,vec__31952,row_i,row,c__12288__auto__,size__12289__auto__,b__31925,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__31924,vec__31952,row_i,row,c__12288__auto__,size__12289__auto__,b__31925,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__31982 = (i__31924 + (1));
i__31924 = G__31982;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31925),iter__31922.call(null,cljs.core.chunk_rest.call(null,s__31923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31925),null);
}
} else
{var vec__31965 = cljs.core.first.call(null,s__31923__$2);var row_i = cljs.core.nth.call(null,vec__31965,(0),null);var row = cljs.core.nth.call(null,vec__31965,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (vec__31965,row_i,row,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function iter__31966(s__31967){return (new cljs.core.LazySeq(null,((function (vec__31965,row_i,row,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn){
return (function (){var s__31967__$1 = s__31967;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31967__$1);if(temp__4126__auto____$1)
{var s__31967__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31967__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__31967__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__31969 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__31968 = (0);while(true){
if((i__31968 < size__12289__auto__))
{var vec__31974 = cljs.core._nth.call(null,c__12288__auto__,i__31968);var col_i = cljs.core.nth.call(null,vec__31974,(0),null);var col = cljs.core.nth.call(null,vec__31974,(1),null);cljs.core.chunk_append.call(null,b__31969,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31975 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31975__$1 = (((G__31975 == null))?null:cljs.core.get.call(null,rowcol,G__31975));var G__31975__$2 = (((G__31975__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31975__$1));var G__31975__$3 = (((G__31975__$2 == null))?null:render_fn__$1.call(null,G__31975__$2));return G__31975__$3;
})():null)], null)));
{
var G__31983 = (i__31968 + (1));
i__31968 = G__31983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31969),iter__31966.call(null,cljs.core.chunk_rest.call(null,s__31967__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31969),null);
}
} else
{var vec__31976 = cljs.core.first.call(null,s__31967__$2);var col_i = cljs.core.nth.call(null,vec__31976,(0),null);var col = cljs.core.nth.call(null,vec__31976,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11540__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11540__auto__;
}
})())?(function (){var G__31977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__31977__$1 = (((G__31977 == null))?null:cljs.core.get.call(null,rowcol,G__31977));var G__31977__$2 = (((G__31977__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__31977__$1));var G__31977__$3 = (((G__31977__$2 == null))?null:render_fn__$1.call(null,G__31977__$2));return G__31977__$3;
})():null)], null)),iter__31966.call(null,cljs.core.rest.call(null,s__31967__$2)));
}
} else
{return null;
}
break;
}
});})(vec__31965,row_i,row,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__31965,row_i,row,s__31923__$2,temp__4126__auto__,attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__31922.call(null,cljs.core.rest.call(null,s__31923__$2)));
}
} else
{return null;
}
break;
}
});})(attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs31863,rowcol,render_fn__$1,map__31860,map__31860__$1,map__31861,map__31861__$1,table_data,query,results,map__31862,map__31862__$1,controls,title,rows,cols,render_fn))
;return iter__12290__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__31984,owner){var map__32029 = p__31984;var map__32029__$1 = ((cljs.core.seq_QMARK_.call(null,map__32029))?cljs.core.apply.call(null,cljs.core.hash_map,map__32029):map__32029);var props = map__32029__$1;var map__32030 = cljs.core.get.call(null,map__32029__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32030__$1 = ((cljs.core.seq_QMARK_.call(null,map__32030))?cljs.core.apply.call(null,cljs.core.hash_map,map__32030):map__32030);var table_state = map__32030__$1;var table_data = cljs.core.get.call(null,map__32030__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32031 = cljs.core.get.call(null,map__32030__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32031__$1 = ((cljs.core.seq_QMARK_.call(null,map__32031))?cljs.core.apply.call(null,cljs.core.hash_map,map__32031):map__32031);var controls = map__32031__$1;var index_type = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__32029__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t32032 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t32032 = (function (index_type,row_aggs,owner,metric_path,props,map__32030,row_path,table_data,metric_aggs,index,ranges_table_component,p__31984,map__32029,col_path,filter_spec,table_state,map__32031,controls,col_aggs,title,rows,cols,meta32033){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__32030 = map__32030;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.p__31984 = p__31984;
this.map__32029 = map__32029;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.map__32031 = map__32031;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta32033 = meta32033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t32032.cljs$lang$type = true;
clustermap.components.ranges_table.t32032.cljs$lang$ctorStr = "clustermap.components.ranges-table/t32032";
clustermap.components.ranges_table.t32032.cljs$lang$ctorPrWriter = ((function (map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.ranges-table/t32032");
});})(map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t32032.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t32032.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__32035,p__32036){var self__ = this;
var map__32037 = p__32035;var map__32037__$1 = ((cljs.core.seq_QMARK_.call(null,map__32037))?cljs.core.apply.call(null,cljs.core.hash_map,map__32037):map__32037);var next_props = map__32037__$1;var map__32038 = cljs.core.get.call(null,map__32037__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32038__$1 = ((cljs.core.seq_QMARK_.call(null,map__32038))?cljs.core.apply.call(null,cljs.core.hash_map,map__32038):map__32038);var next_table_state = map__32038__$1;var next_table_data = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32039 = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32039__$1 = ((cljs.core.seq_QMARK_.call(null,map__32039))?cljs.core.apply.call(null,cljs.core.hash_map,map__32039):map__32039);var next_controls = map__32039__$1;var next_col_aggs = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__32037__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32040 = p__32036;var map__32040__$1 = ((cljs.core.seq_QMARK_.call(null,map__32040))?cljs.core.apply.call(null,cljs.core.hash_map,map__32040):map__32040);var fetch_data_fn = cljs.core.get.call(null,map__32040__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__32037,map__32037__$1,next_props,map__32038,map__32038__$1,next_table_state,next_table_data,map__32039,map__32039__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32040,map__32040__$1,fetch_data_fn,map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__32037,map__32037__$1,next_props,map__32038,map__32038__$1,next_table_state,next_table_data,map__32039,map__32039__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32040,map__32040__$1,fetch_data_fn,map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_32058){var state_val_32059 = (state_32058[(1)]);if((state_val_32059 === (5)))
{var inst_32056 = (state_32058[(2)]);var state_32058__$1 = state_32058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32058__$1,inst_32056);
} else
{if((state_val_32059 === (4)))
{var state_32058__$1 = state_32058;var statearr_32060_32073 = state_32058__$1;(statearr_32060_32073[(2)] = null);
(statearr_32060_32073[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32059 === (3)))
{var inst_32043 = (state_32058[(7)]);var inst_32045 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32046 = ["RANGES-TABLE-DATA",inst_32043];var inst_32047 = (new cljs.core.PersistentVector(null,2,(5),inst_32045,inst_32046,null));var inst_32048 = cljs.core.clj__GT_js.call(null,inst_32047);var inst_32049 = console.log(inst_32048);var inst_32050 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32051 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32052 = (new cljs.core.PersistentVector(null,1,(5),inst_32050,inst_32051,null));var inst_32053 = om.core.update_BANG_.call(null,self__.table_state,inst_32052,inst_32043);var state_32058__$1 = (function (){var statearr_32061 = state_32058;(statearr_32061[(8)] = inst_32049);
return statearr_32061;
})();var statearr_32062_32074 = state_32058__$1;(statearr_32062_32074[(2)] = inst_32053);
(statearr_32062_32074[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32059 === (2)))
{var inst_32043 = (state_32058[(7)]);var inst_32043__$1 = (state_32058[(2)]);var state_32058__$1 = (function (){var statearr_32063 = state_32058;(statearr_32063[(7)] = inst_32043__$1);
return statearr_32063;
})();if(cljs.core.truth_(inst_32043__$1))
{var statearr_32064_32075 = state_32058__$1;(statearr_32064_32075[(1)] = (3));
} else
{var statearr_32065_32076 = state_32058__$1;(statearr_32065_32076[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32059 === (1)))
{var inst_32041 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_32058__$1 = state_32058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32058__$1,(2),inst_32041);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__32037,map__32037__$1,next_props,map__32038,map__32038__$1,next_table_state,next_table_data,map__32039,map__32039__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32040,map__32040__$1,fetch_data_fn,map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__32037,map__32037__$1,next_props,map__32038,map__32038__$1,next_table_state,next_table_data,map__32039,map__32039__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32040,map__32040__$1,fetch_data_fn,map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_32069 = [null,null,null,null,null,null,null,null,null];(statearr_32069[(0)] = state_machine__16719__auto__);
(statearr_32069[(1)] = (1));
return statearr_32069;
});
var state_machine__16719__auto____1 = (function (state_32058){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_32058);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e32070){if((e32070 instanceof Object))
{var ex__16722__auto__ = e32070;var statearr_32071_32077 = state_32058;(statearr_32071_32077[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32070;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32078 = state_32058;
state_32058 = G__32078;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_32058){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_32058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__32037,map__32037__$1,next_props,map__32038,map__32038__$1,next_table_state,next_table_data,map__32039,map__32039__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32040,map__32040__$1,fetch_data_fn,map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__16735__auto__ = (function (){var statearr_32072 = f__16734__auto__.call(null);(statearr_32072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_32072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__32037,map__32037__$1,next_props,map__32038,map__32038__$1,next_table_state,next_table_data,map__32039,map__32039__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__32040,map__32040__$1,fetch_data_fn,map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t32032.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t32032.prototype.om$core$IRender$render$arity$1 = ((function (map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t32032.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t32032.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t32032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_32034){var self__ = this;
var _32034__$1 = this;return self__.meta32033;
});})(map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t32032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_32034,meta32033__$1){var self__ = this;
var _32034__$1 = this;return (new clustermap.components.ranges_table.t32032(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__32030,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.p__31984,self__.map__32029,self__.col_path,self__.filter_spec,self__.table_state,self__.map__32031,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,meta32033__$1));
});})(map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t32032 = ((function (map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t32032(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__32030__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,p__31984__$1,map__32029__$2,col_path__$1,filter_spec__$1,table_state__$1,map__32031__$2,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta32033){return (new clustermap.components.ranges_table.t32032(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__32030__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,p__31984__$1,map__32029__$2,col_path__$1,filter_spec__$1,table_state__$1,map__32031__$2,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,meta32033));
});})(map__32029,map__32029__$1,props,map__32030,map__32030__$1,table_state,table_data,map__32031,map__32031__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t32032(index_type,row_aggs,owner,metric_path,props,map__32030__$1,row_path,table_data,metric_aggs,index,ranges_table_component,p__31984,map__32029__$1,col_path,filter_spec,table_state,map__32031__$1,controls,col_aggs,title,rows,cols,null));
});

//# sourceMappingURL=ranges_table.js.map