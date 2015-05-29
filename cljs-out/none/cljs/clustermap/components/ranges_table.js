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
clustermap.components.ranges_table.render_table = (function render_table(p__29787,owner,opts){var map__29906 = p__29787;var map__29906__$1 = ((cljs.core.seq_QMARK_.call(null,map__29906))?cljs.core.apply.call(null,cljs.core.hash_map,map__29906):map__29906);var map__29907 = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__29907__$1 = ((cljs.core.seq_QMARK_.call(null,map__29907))?cljs.core.apply.call(null,cljs.core.hash_map,map__29907):map__29907);var table_data = map__29907__$1;var query = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__29908 = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29908__$1 = ((cljs.core.seq_QMARK_.call(null,map__29908))?cljs.core.apply.call(null,cljs.core.hash_map,map__29908):map__29908);var controls = map__29908__$1;var title = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__29908__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__11514__auto__ = render_fn;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.identity;
}
})();var attrs29909 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29909))?sablono.interpreter.attributes.call(null,attrs29909):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29909))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs29910 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs29910))?sablono.interpreter.attributes.call(null,attrs29910):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29910))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29910)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function iter__29912(s__29913){return (new cljs.core.LazySeq(null,((function (attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function (){var s__29913__$1 = s__29913;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29913__$1);if(temp__4126__auto__)
{var s__29913__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29913__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29913__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29915 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29914 = (0);while(true){
if((i__29914 < size__12251__auto__))
{var vec__29942 = cljs.core._nth.call(null,c__12250__auto__,i__29914);var row_i = cljs.core.nth.call(null,vec__29942,(0),null);var row = cljs.core.nth.call(null,vec__29942,(1),null);cljs.core.chunk_append.call(null,b__29915,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (i__29914,vec__29942,row_i,row,c__12250__auto__,size__12251__auto__,b__29915,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function iter__29943(s__29944){return (new cljs.core.LazySeq(null,((function (i__29914,vec__29942,row_i,row,c__12250__auto__,size__12251__auto__,b__29915,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function (){var s__29944__$1 = s__29944;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29944__$1);if(temp__4126__auto____$1)
{var s__29944__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29944__$2))
{var c__12250__auto____$1 = cljs.core.chunk_first.call(null,s__29944__$2);var size__12251__auto____$1 = cljs.core.count.call(null,c__12250__auto____$1);var b__29946 = cljs.core.chunk_buffer.call(null,size__12251__auto____$1);if((function (){var i__29945 = (0);while(true){
if((i__29945 < size__12251__auto____$1))
{var vec__29951 = cljs.core._nth.call(null,c__12250__auto____$1,i__29945);var col_i = cljs.core.nth.call(null,vec__29951,(0),null);var col = cljs.core.nth.call(null,vec__29951,(1),null);cljs.core.chunk_append.call(null,b__29946,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__29952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__29952__$1 = (((G__29952 == null))?null:cljs.core.get.call(null,rowcol,G__29952));var G__29952__$2 = (((G__29952__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__29952__$1));var G__29952__$3 = (((G__29952__$2 == null))?null:render_fn__$1.call(null,G__29952__$2));return G__29952__$3;
})():null)], null)));
{
var G__30024 = (i__29945 + (1));
i__29945 = G__30024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29946),iter__29943.call(null,cljs.core.chunk_rest.call(null,s__29944__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29946),null);
}
} else
{var vec__29953 = cljs.core.first.call(null,s__29944__$2);var col_i = cljs.core.nth.call(null,vec__29953,(0),null);var col = cljs.core.nth.call(null,vec__29953,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__29954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__29954__$1 = (((G__29954 == null))?null:cljs.core.get.call(null,rowcol,G__29954));var G__29954__$2 = (((G__29954__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__29954__$1));var G__29954__$3 = (((G__29954__$2 == null))?null:render_fn__$1.call(null,G__29954__$2));return G__29954__$3;
})():null)], null)),iter__29943.call(null,cljs.core.rest.call(null,s__29944__$2)));
}
} else
{return null;
}
break;
}
});})(i__29914,vec__29942,row_i,row,c__12250__auto__,size__12251__auto__,b__29915,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__29914,vec__29942,row_i,row,c__12250__auto__,size__12251__auto__,b__29915,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__30025 = (i__29914 + (1));
i__29914 = G__30025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29915),iter__29912.call(null,cljs.core.chunk_rest.call(null,s__29913__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29915),null);
}
} else
{var vec__29955 = cljs.core.first.call(null,s__29913__$2);var row_i = cljs.core.nth.call(null,vec__29955,(0),null);var row = cljs.core.nth.call(null,vec__29955,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (vec__29955,row_i,row,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function iter__29956(s__29957){return (new cljs.core.LazySeq(null,((function (vec__29955,row_i,row,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function (){var s__29957__$1 = s__29957;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29957__$1);if(temp__4126__auto____$1)
{var s__29957__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29957__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29957__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29959 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29958 = (0);while(true){
if((i__29958 < size__12251__auto__))
{var vec__29964 = cljs.core._nth.call(null,c__12250__auto__,i__29958);var col_i = cljs.core.nth.call(null,vec__29964,(0),null);var col = cljs.core.nth.call(null,vec__29964,(1),null);cljs.core.chunk_append.call(null,b__29959,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__29965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__29965__$1 = (((G__29965 == null))?null:cljs.core.get.call(null,rowcol,G__29965));var G__29965__$2 = (((G__29965__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__29965__$1));var G__29965__$3 = (((G__29965__$2 == null))?null:render_fn__$1.call(null,G__29965__$2));return G__29965__$3;
})():null)], null)));
{
var G__30026 = (i__29958 + (1));
i__29958 = G__30026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29959),iter__29956.call(null,cljs.core.chunk_rest.call(null,s__29957__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29959),null);
}
} else
{var vec__29966 = cljs.core.first.call(null,s__29957__$2);var col_i = cljs.core.nth.call(null,vec__29966,(0),null);var col = cljs.core.nth.call(null,vec__29966,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__29967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__29967__$1 = (((G__29967 == null))?null:cljs.core.get.call(null,rowcol,G__29967));var G__29967__$2 = (((G__29967__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__29967__$1));var G__29967__$3 = (((G__29967__$2 == null))?null:render_fn__$1.call(null,G__29967__$2));return G__29967__$3;
})():null)], null)),iter__29956.call(null,cljs.core.rest.call(null,s__29957__$2)));
}
} else
{return null;
}
break;
}
});})(vec__29955,row_i,row,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__29955,row_i,row,s__29913__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__29912.call(null,cljs.core.rest.call(null,s__29913__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29909),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs29911 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs29911))?sablono.interpreter.attributes.call(null,attrs29911):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29911))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29911)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function iter__29968(s__29969){return (new cljs.core.LazySeq(null,((function (attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function (){var s__29969__$1 = s__29969;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29969__$1);if(temp__4126__auto__)
{var s__29969__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29969__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29969__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29971 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29970 = (0);while(true){
if((i__29970 < size__12251__auto__))
{var vec__29998 = cljs.core._nth.call(null,c__12250__auto__,i__29970);var row_i = cljs.core.nth.call(null,vec__29998,(0),null);var row = cljs.core.nth.call(null,vec__29998,(1),null);cljs.core.chunk_append.call(null,b__29971,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (i__29970,vec__29998,row_i,row,c__12250__auto__,size__12251__auto__,b__29971,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function iter__29999(s__30000){return (new cljs.core.LazySeq(null,((function (i__29970,vec__29998,row_i,row,c__12250__auto__,size__12251__auto__,b__29971,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function (){var s__30000__$1 = s__30000;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30000__$1);if(temp__4126__auto____$1)
{var s__30000__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30000__$2))
{var c__12250__auto____$1 = cljs.core.chunk_first.call(null,s__30000__$2);var size__12251__auto____$1 = cljs.core.count.call(null,c__12250__auto____$1);var b__30002 = cljs.core.chunk_buffer.call(null,size__12251__auto____$1);if((function (){var i__30001 = (0);while(true){
if((i__30001 < size__12251__auto____$1))
{var vec__30007 = cljs.core._nth.call(null,c__12250__auto____$1,i__30001);var col_i = cljs.core.nth.call(null,vec__30007,(0),null);var col = cljs.core.nth.call(null,vec__30007,(1),null);cljs.core.chunk_append.call(null,b__30002,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__30008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__30008__$1 = (((G__30008 == null))?null:cljs.core.get.call(null,rowcol,G__30008));var G__30008__$2 = (((G__30008__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__30008__$1));var G__30008__$3 = (((G__30008__$2 == null))?null:render_fn__$1.call(null,G__30008__$2));return G__30008__$3;
})():null)], null)));
{
var G__30027 = (i__30001 + (1));
i__30001 = G__30027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30002),iter__29999.call(null,cljs.core.chunk_rest.call(null,s__30000__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30002),null);
}
} else
{var vec__30009 = cljs.core.first.call(null,s__30000__$2);var col_i = cljs.core.nth.call(null,vec__30009,(0),null);var col = cljs.core.nth.call(null,vec__30009,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__30010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__30010__$1 = (((G__30010 == null))?null:cljs.core.get.call(null,rowcol,G__30010));var G__30010__$2 = (((G__30010__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__30010__$1));var G__30010__$3 = (((G__30010__$2 == null))?null:render_fn__$1.call(null,G__30010__$2));return G__30010__$3;
})():null)], null)),iter__29999.call(null,cljs.core.rest.call(null,s__30000__$2)));
}
} else
{return null;
}
break;
}
});})(i__29970,vec__29998,row_i,row,c__12250__auto__,size__12251__auto__,b__29971,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__29970,vec__29998,row_i,row,c__12250__auto__,size__12251__auto__,b__29971,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__30028 = (i__29970 + (1));
i__29970 = G__30028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29971),iter__29968.call(null,cljs.core.chunk_rest.call(null,s__29969__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29971),null);
}
} else
{var vec__30011 = cljs.core.first.call(null,s__29969__$2);var row_i = cljs.core.nth.call(null,vec__30011,(0),null);var row = cljs.core.nth.call(null,vec__30011,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (vec__30011,row_i,row,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function iter__30012(s__30013){return (new cljs.core.LazySeq(null,((function (vec__30011,row_i,row,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn){
return (function (){var s__30013__$1 = s__30013;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30013__$1);if(temp__4126__auto____$1)
{var s__30013__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__30013__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30013__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30015 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30014 = (0);while(true){
if((i__30014 < size__12251__auto__))
{var vec__30020 = cljs.core._nth.call(null,c__12250__auto__,i__30014);var col_i = cljs.core.nth.call(null,vec__30020,(0),null);var col = cljs.core.nth.call(null,vec__30020,(1),null);cljs.core.chunk_append.call(null,b__30015,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__30021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__30021__$1 = (((G__30021 == null))?null:cljs.core.get.call(null,rowcol,G__30021));var G__30021__$2 = (((G__30021__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__30021__$1));var G__30021__$3 = (((G__30021__$2 == null))?null:render_fn__$1.call(null,G__30021__$2));return G__30021__$3;
})():null)], null)));
{
var G__30029 = (i__30014 + (1));
i__30014 = G__30029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30015),iter__30012.call(null,cljs.core.chunk_rest.call(null,s__30013__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30015),null);
}
} else
{var vec__30022 = cljs.core.first.call(null,s__30013__$2);var col_i = cljs.core.nth.call(null,vec__30022,(0),null);var col = cljs.core.nth.call(null,vec__30022,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__11502__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__11502__auto__;
}
})())?(function (){var G__30023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__30023__$1 = (((G__30023 == null))?null:cljs.core.get.call(null,rowcol,G__30023));var G__30023__$2 = (((G__30023__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__30023__$1));var G__30023__$3 = (((G__30023__$2 == null))?null:render_fn__$1.call(null,G__30023__$2));return G__30023__$3;
})():null)], null)),iter__30012.call(null,cljs.core.rest.call(null,s__30013__$2)));
}
} else
{return null;
}
break;
}
});})(vec__30011,row_i,row,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__30011,row_i,row,s__29969__$2,temp__4126__auto__,attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__29968.call(null,cljs.core.rest.call(null,s__29969__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs29909,rowcol,render_fn__$1,map__29906,map__29906__$1,map__29907,map__29907__$1,table_data,query,results,map__29908,map__29908__$1,controls,title,rows,cols,render_fn))
;return iter__12252__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__30030,owner){var map__30043 = p__30030;var map__30043__$1 = ((cljs.core.seq_QMARK_.call(null,map__30043))?cljs.core.apply.call(null,cljs.core.hash_map,map__30043):map__30043);var props = map__30043__$1;var map__30044 = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30044__$1 = ((cljs.core.seq_QMARK_.call(null,map__30044))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);var table_state = map__30044__$1;var table_data = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30045 = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30045__$1 = ((cljs.core.seq_QMARK_.call(null,map__30045))?cljs.core.apply.call(null,cljs.core.hash_map,map__30045):map__30045);var controls = map__30045__$1;var index_type = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t30046 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t30046 = (function (index_type,row_aggs,owner,map__30045,metric_path,props,row_path,table_data,metric_aggs,index,map__30044,ranges_table_component,col_path,filter_spec,table_state,p__30030,controls,col_aggs,map__30043,title,rows,cols,meta30047){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.map__30045 = map__30045;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.map__30044 = map__30044;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.p__30030 = p__30030;
this.controls = controls;
this.col_aggs = col_aggs;
this.map__30043 = map__30043;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta30047 = meta30047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t30046.cljs$lang$type = true;
clustermap.components.ranges_table.t30046.cljs$lang$ctorStr = "clustermap.components.ranges-table/t30046";
clustermap.components.ranges_table.t30046.cljs$lang$ctorPrWriter = ((function (map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.ranges-table/t30046");
});})(map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t30046.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t30046.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__30049,p__30050){var self__ = this;
var map__30051 = p__30049;var map__30051__$1 = ((cljs.core.seq_QMARK_.call(null,map__30051))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);var next_props = map__30051__$1;var map__30052 = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30052__$1 = ((cljs.core.seq_QMARK_.call(null,map__30052))?cljs.core.apply.call(null,cljs.core.hash_map,map__30052):map__30052);var next_table_state = map__30052__$1;var next_table_data = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30053 = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30053__$1 = ((cljs.core.seq_QMARK_.call(null,map__30053))?cljs.core.apply.call(null,cljs.core.hash_map,map__30053):map__30053);var next_controls = map__30053__$1;var next_col_aggs = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30054 = p__30050;var map__30054__$1 = ((cljs.core.seq_QMARK_.call(null,map__30054))?cljs.core.apply.call(null,cljs.core.hash_map,map__30054):map__30054);var next_state = map__30054__$1;var table_data_resource = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.ordered_resource.api_call.call(null,table_data_resource,clustermap.api.ranges,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);
} else
{return null;
}
});})(map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t30046.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t30046.prototype.om$core$IRender$render$arity$1 = ((function (map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t30046.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t30046.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (data){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-TABLE-DATA",data], null)));
return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
});})(map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t30046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_30048){var self__ = this;
var _30048__$1 = this;return self__.meta30047;
});})(map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t30046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_30048,meta30047__$1){var self__ = this;
var _30048__$1 = this;return (new clustermap.components.ranges_table.t30046(self__.index_type,self__.row_aggs,self__.owner,self__.map__30045,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.map__30044,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.p__30030,self__.controls,self__.col_aggs,self__.map__30043,self__.title,self__.rows,self__.cols,meta30047__$1));
});})(map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t30046 = ((function (map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t30046(index_type__$1,row_aggs__$1,owner__$1,map__30045__$2,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,map__30044__$2,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,p__30030__$1,controls__$1,col_aggs__$1,map__30043__$2,title__$1,rows__$1,cols__$1,meta30047){return (new clustermap.components.ranges_table.t30046(index_type__$1,row_aggs__$1,owner__$1,map__30045__$2,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,map__30044__$2,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,p__30030__$1,controls__$1,col_aggs__$1,map__30043__$2,title__$1,rows__$1,cols__$1,meta30047));
});})(map__30043,map__30043__$1,props,map__30044,map__30044__$1,table_state,table_data,map__30045,map__30045__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t30046(index_type,row_aggs,owner,map__30045__$1,metric_path,props,row_path,table_data,metric_aggs,index,map__30044__$1,ranges_table_component,col_path,filter_spec,table_state,p__30030,controls,col_aggs,map__30043__$1,title,rows,cols,null));
});

//# sourceMappingURL=ranges_table.js.map