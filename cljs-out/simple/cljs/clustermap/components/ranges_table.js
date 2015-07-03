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
clustermap.components.ranges_table.render_table = (function render_table(p__28631,owner,opts){var map__28750 = p__28631;var map__28750__$1 = ((cljs.core.seq_QMARK_.call(null,map__28750))?cljs.core.apply.call(null,cljs.core.hash_map,map__28750):map__28750);var map__28751 = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28751__$1 = ((cljs.core.seq_QMARK_.call(null,map__28751))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751):map__28751);var table_data = map__28751__$1;var query = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28752 = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28752__$1 = ((cljs.core.seq_QMARK_.call(null,map__28752))?cljs.core.apply.call(null,cljs.core.hash_map,map__28752):map__28752);var controls = map__28752__$1;var title = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28753 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28753))?sablono.interpreter.attributes.call(null,attrs28753):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28753))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28754 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28754))?sablono.interpreter.attributes.call(null,attrs28754):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28754))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28754)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function iter__28756(s__28757){return (new cljs.core.LazySeq(null,((function (attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28757__$1 = s__28757;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28757__$1);if(temp__4126__auto__)
{var s__28757__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28757__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28757__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28759 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28758 = (0);while(true){
if((i__28758 < size__4376__auto__))
{var vec__28786 = cljs.core._nth.call(null,c__4375__auto__,i__28758);var row_i = cljs.core.nth.call(null,vec__28786,(0),null);var row = cljs.core.nth.call(null,vec__28786,(1),null);cljs.core.chunk_append.call(null,b__28759,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28758,vec__28786,row_i,row,c__4375__auto__,size__4376__auto__,b__28759,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function iter__28787(s__28788){return (new cljs.core.LazySeq(null,((function (i__28758,vec__28786,row_i,row,c__4375__auto__,size__4376__auto__,b__28759,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28788__$1 = s__28788;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28788__$1);if(temp__4126__auto____$1)
{var s__28788__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28788__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28788__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28790 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28789 = (0);while(true){
if((i__28789 < size__4376__auto____$1))
{var vec__28795 = cljs.core._nth.call(null,c__4375__auto____$1,i__28789);var col_i = cljs.core.nth.call(null,vec__28795,(0),null);var col = cljs.core.nth.call(null,vec__28795,(1),null);cljs.core.chunk_append.call(null,b__28790,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28796__$1 = (((G__28796 == null))?null:cljs.core.get.call(null,rowcol,G__28796));var G__28796__$2 = (((G__28796__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28796__$1));var G__28796__$3 = (((G__28796__$2 == null))?null:render_fn__$1.call(null,G__28796__$2));return G__28796__$3;
})():null)], null)));
{
var G__28868 = (i__28789 + (1));
i__28789 = G__28868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28790),iter__28787.call(null,cljs.core.chunk_rest.call(null,s__28788__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28790),null);
}
} else
{var vec__28797 = cljs.core.first.call(null,s__28788__$2);var col_i = cljs.core.nth.call(null,vec__28797,(0),null);var col = cljs.core.nth.call(null,vec__28797,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28798__$1 = (((G__28798 == null))?null:cljs.core.get.call(null,rowcol,G__28798));var G__28798__$2 = (((G__28798__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28798__$1));var G__28798__$3 = (((G__28798__$2 == null))?null:render_fn__$1.call(null,G__28798__$2));return G__28798__$3;
})():null)], null)),iter__28787.call(null,cljs.core.rest.call(null,s__28788__$2)));
}
} else
{return null;
}
break;
}
});})(i__28758,vec__28786,row_i,row,c__4375__auto__,size__4376__auto__,b__28759,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28758,vec__28786,row_i,row,c__4375__auto__,size__4376__auto__,b__28759,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28869 = (i__28758 + (1));
i__28758 = G__28869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28759),iter__28756.call(null,cljs.core.chunk_rest.call(null,s__28757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28759),null);
}
} else
{var vec__28799 = cljs.core.first.call(null,s__28757__$2);var row_i = cljs.core.nth.call(null,vec__28799,(0),null);var row = cljs.core.nth.call(null,vec__28799,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28799,row_i,row,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function iter__28800(s__28801){return (new cljs.core.LazySeq(null,((function (vec__28799,row_i,row,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28801__$1 = s__28801;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28801__$1);if(temp__4126__auto____$1)
{var s__28801__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28801__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28801__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28803 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28802 = (0);while(true){
if((i__28802 < size__4376__auto__))
{var vec__28808 = cljs.core._nth.call(null,c__4375__auto__,i__28802);var col_i = cljs.core.nth.call(null,vec__28808,(0),null);var col = cljs.core.nth.call(null,vec__28808,(1),null);cljs.core.chunk_append.call(null,b__28803,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28809__$1 = (((G__28809 == null))?null:cljs.core.get.call(null,rowcol,G__28809));var G__28809__$2 = (((G__28809__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28809__$1));var G__28809__$3 = (((G__28809__$2 == null))?null:render_fn__$1.call(null,G__28809__$2));return G__28809__$3;
})():null)], null)));
{
var G__28870 = (i__28802 + (1));
i__28802 = G__28870;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28803),iter__28800.call(null,cljs.core.chunk_rest.call(null,s__28801__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28803),null);
}
} else
{var vec__28810 = cljs.core.first.call(null,s__28801__$2);var col_i = cljs.core.nth.call(null,vec__28810,(0),null);var col = cljs.core.nth.call(null,vec__28810,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28811__$1 = (((G__28811 == null))?null:cljs.core.get.call(null,rowcol,G__28811));var G__28811__$2 = (((G__28811__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28811__$1));var G__28811__$3 = (((G__28811__$2 == null))?null:render_fn__$1.call(null,G__28811__$2));return G__28811__$3;
})():null)], null)),iter__28800.call(null,cljs.core.rest.call(null,s__28801__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28799,row_i,row,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28799,row_i,row,s__28757__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28756.call(null,cljs.core.rest.call(null,s__28757__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28753),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28755 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28755))?sablono.interpreter.attributes.call(null,attrs28755):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28755))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28755)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function iter__28812(s__28813){return (new cljs.core.LazySeq(null,((function (attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28813__$1 = s__28813;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28813__$1);if(temp__4126__auto__)
{var s__28813__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28813__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28813__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28815 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28814 = (0);while(true){
if((i__28814 < size__4376__auto__))
{var vec__28842 = cljs.core._nth.call(null,c__4375__auto__,i__28814);var row_i = cljs.core.nth.call(null,vec__28842,(0),null);var row = cljs.core.nth.call(null,vec__28842,(1),null);cljs.core.chunk_append.call(null,b__28815,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28814,vec__28842,row_i,row,c__4375__auto__,size__4376__auto__,b__28815,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function iter__28843(s__28844){return (new cljs.core.LazySeq(null,((function (i__28814,vec__28842,row_i,row,c__4375__auto__,size__4376__auto__,b__28815,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28844__$1 = s__28844;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28844__$1);if(temp__4126__auto____$1)
{var s__28844__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28844__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28844__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28846 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28845 = (0);while(true){
if((i__28845 < size__4376__auto____$1))
{var vec__28851 = cljs.core._nth.call(null,c__4375__auto____$1,i__28845);var col_i = cljs.core.nth.call(null,vec__28851,(0),null);var col = cljs.core.nth.call(null,vec__28851,(1),null);cljs.core.chunk_append.call(null,b__28846,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28852__$1 = (((G__28852 == null))?null:cljs.core.get.call(null,rowcol,G__28852));var G__28852__$2 = (((G__28852__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28852__$1));var G__28852__$3 = (((G__28852__$2 == null))?null:render_fn__$1.call(null,G__28852__$2));return G__28852__$3;
})():null)], null)));
{
var G__28871 = (i__28845 + (1));
i__28845 = G__28871;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28846),iter__28843.call(null,cljs.core.chunk_rest.call(null,s__28844__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28846),null);
}
} else
{var vec__28853 = cljs.core.first.call(null,s__28844__$2);var col_i = cljs.core.nth.call(null,vec__28853,(0),null);var col = cljs.core.nth.call(null,vec__28853,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28854__$1 = (((G__28854 == null))?null:cljs.core.get.call(null,rowcol,G__28854));var G__28854__$2 = (((G__28854__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28854__$1));var G__28854__$3 = (((G__28854__$2 == null))?null:render_fn__$1.call(null,G__28854__$2));return G__28854__$3;
})():null)], null)),iter__28843.call(null,cljs.core.rest.call(null,s__28844__$2)));
}
} else
{return null;
}
break;
}
});})(i__28814,vec__28842,row_i,row,c__4375__auto__,size__4376__auto__,b__28815,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28814,vec__28842,row_i,row,c__4375__auto__,size__4376__auto__,b__28815,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28872 = (i__28814 + (1));
i__28814 = G__28872;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28815),iter__28812.call(null,cljs.core.chunk_rest.call(null,s__28813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28815),null);
}
} else
{var vec__28855 = cljs.core.first.call(null,s__28813__$2);var row_i = cljs.core.nth.call(null,vec__28855,(0),null);var row = cljs.core.nth.call(null,vec__28855,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28855,row_i,row,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function iter__28856(s__28857){return (new cljs.core.LazySeq(null,((function (vec__28855,row_i,row,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28857__$1 = s__28857;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28857__$1);if(temp__4126__auto____$1)
{var s__28857__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28857__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28857__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28859 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28858 = (0);while(true){
if((i__28858 < size__4376__auto__))
{var vec__28864 = cljs.core._nth.call(null,c__4375__auto__,i__28858);var col_i = cljs.core.nth.call(null,vec__28864,(0),null);var col = cljs.core.nth.call(null,vec__28864,(1),null);cljs.core.chunk_append.call(null,b__28859,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28865__$1 = (((G__28865 == null))?null:cljs.core.get.call(null,rowcol,G__28865));var G__28865__$2 = (((G__28865__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28865__$1));var G__28865__$3 = (((G__28865__$2 == null))?null:render_fn__$1.call(null,G__28865__$2));return G__28865__$3;
})():null)], null)));
{
var G__28873 = (i__28858 + (1));
i__28858 = G__28873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28859),iter__28856.call(null,cljs.core.chunk_rest.call(null,s__28857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28859),null);
}
} else
{var vec__28866 = cljs.core.first.call(null,s__28857__$2);var col_i = cljs.core.nth.call(null,vec__28866,(0),null);var col = cljs.core.nth.call(null,vec__28866,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28867__$1 = (((G__28867 == null))?null:cljs.core.get.call(null,rowcol,G__28867));var G__28867__$2 = (((G__28867__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28867__$1));var G__28867__$3 = (((G__28867__$2 == null))?null:render_fn__$1.call(null,G__28867__$2));return G__28867__$3;
})():null)], null)),iter__28856.call(null,cljs.core.rest.call(null,s__28857__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28855,row_i,row,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28855,row_i,row,s__28813__$2,temp__4126__auto__,attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28812.call(null,cljs.core.rest.call(null,s__28813__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28753,rowcol,render_fn__$1,map__28750,map__28750__$1,map__28751,map__28751__$1,table_data,query,results,map__28752,map__28752__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28874,owner){var map__28919 = p__28874;var map__28919__$1 = ((cljs.core.seq_QMARK_.call(null,map__28919))?cljs.core.apply.call(null,cljs.core.hash_map,map__28919):map__28919);var props = map__28919__$1;var map__28920 = cljs.core.get.call(null,map__28919__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28920__$1 = ((cljs.core.seq_QMARK_.call(null,map__28920))?cljs.core.apply.call(null,cljs.core.hash_map,map__28920):map__28920);var table_state = map__28920__$1;var table_data = cljs.core.get.call(null,map__28920__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28921 = cljs.core.get.call(null,map__28920__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28921__$1 = ((cljs.core.seq_QMARK_.call(null,map__28921))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);var controls = map__28921__$1;var index_type = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28919__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28922 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28922 = (function (p__28874,index_type,row_aggs,owner,metric_path,props,row_path,table_data,map__28920,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,map__28919,cols,map__28921,meta28923){
this.p__28874 = p__28874;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.map__28920 = map__28920;
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
this.map__28919 = map__28919;
this.cols = cols;
this.map__28921 = map__28921;
this.meta28923 = meta28923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28922.cljs$lang$type = true;
clustermap.components.ranges_table.t28922.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28922";
clustermap.components.ranges_table.t28922.cljs$lang$ctorPrWriter = ((function (map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28922");
});})(map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28922.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28922.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28925,p__28926){var self__ = this;
var map__28927 = p__28925;var map__28927__$1 = ((cljs.core.seq_QMARK_.call(null,map__28927))?cljs.core.apply.call(null,cljs.core.hash_map,map__28927):map__28927);var next_props = map__28927__$1;var map__28928 = cljs.core.get.call(null,map__28927__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28928__$1 = ((cljs.core.seq_QMARK_.call(null,map__28928))?cljs.core.apply.call(null,cljs.core.hash_map,map__28928):map__28928);var next_table_state = map__28928__$1;var next_table_data = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28929 = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28929__$1 = ((cljs.core.seq_QMARK_.call(null,map__28929))?cljs.core.apply.call(null,cljs.core.hash_map,map__28929):map__28929);var next_controls = map__28929__$1;var next_col_aggs = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28929__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28927__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28930 = p__28926;var map__28930__$1 = ((cljs.core.seq_QMARK_.call(null,map__28930))?cljs.core.apply.call(null,cljs.core.hash_map,map__28930):map__28930);var fetch_data_fn = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28927,map__28927__$1,next_props,map__28928,map__28928__$1,next_table_state,next_table_data,map__28929,map__28929__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28930,map__28930__$1,fetch_data_fn,map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28927,map__28927__$1,next_props,map__28928,map__28928__$1,next_table_state,next_table_data,map__28929,map__28929__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28930,map__28930__$1,fetch_data_fn,map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28948){var state_val_28949 = (state_28948[(1)]);if((state_val_28949 === (5)))
{var inst_28946 = (state_28948[(2)]);var state_28948__$1 = state_28948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28948__$1,inst_28946);
} else
{if((state_val_28949 === (4)))
{var state_28948__$1 = state_28948;var statearr_28950_28963 = state_28948__$1;(statearr_28950_28963[(2)] = null);
(statearr_28950_28963[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (3)))
{var inst_28933 = (state_28948[(7)]);var inst_28935 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28936 = ["RANGES-TABLE-DATA",inst_28933];var inst_28937 = (new cljs.core.PersistentVector(null,2,(5),inst_28935,inst_28936,null));var inst_28938 = cljs.core.clj__GT_js.call(null,inst_28937);var inst_28939 = console.log(inst_28938);var inst_28940 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28941 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28942 = (new cljs.core.PersistentVector(null,1,(5),inst_28940,inst_28941,null));var inst_28943 = om.core.update_BANG_.call(null,self__.table_state,inst_28942,inst_28933);var state_28948__$1 = (function (){var statearr_28951 = state_28948;(statearr_28951[(8)] = inst_28939);
return statearr_28951;
})();var statearr_28952_28964 = state_28948__$1;(statearr_28952_28964[(2)] = inst_28943);
(statearr_28952_28964[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (2)))
{var inst_28933 = (state_28948[(7)]);var inst_28933__$1 = (state_28948[(2)]);var state_28948__$1 = (function (){var statearr_28953 = state_28948;(statearr_28953[(7)] = inst_28933__$1);
return statearr_28953;
})();if(cljs.core.truth_(inst_28933__$1))
{var statearr_28954_28965 = state_28948__$1;(statearr_28954_28965[(1)] = (3));
} else
{var statearr_28955_28966 = state_28948__$1;(statearr_28955_28966[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (1)))
{var inst_28931 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28948__$1 = state_28948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28948__$1,(2),inst_28931);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28927,map__28927__$1,next_props,map__28928,map__28928__$1,next_table_state,next_table_data,map__28929,map__28929__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28930,map__28930__$1,fetch_data_fn,map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28927,map__28927__$1,next_props,map__28928,map__28928__$1,next_table_state,next_table_data,map__28929,map__28929__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28930,map__28930__$1,fetch_data_fn,map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28959 = [null,null,null,null,null,null,null,null,null];(statearr_28959[(0)] = state_machine__9111__auto__);
(statearr_28959[(1)] = (1));
return statearr_28959;
});
var state_machine__9111__auto____1 = (function (state_28948){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28948);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28960){if((e28960 instanceof Object))
{var ex__9114__auto__ = e28960;var statearr_28961_28967 = state_28948;(statearr_28961_28967[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28968 = state_28948;
state_28948 = G__28968;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28948){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28927,map__28927__$1,next_props,map__28928,map__28928__$1,next_table_state,next_table_data,map__28929,map__28929__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28930,map__28930__$1,fetch_data_fn,map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28962 = f__9126__auto__.call(null);(statearr_28962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28927,map__28927__$1,next_props,map__28928,map__28928__$1,next_table_state,next_table_data,map__28929,map__28929__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28930,map__28930__$1,fetch_data_fn,map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28922.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28922.prototype.om$core$IRender$render$arity$1 = ((function (map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28922.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28922.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28924){var self__ = this;
var _28924__$1 = this;return self__.meta28923;
});})(map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28924,meta28923__$1){var self__ = this;
var _28924__$1 = this;return (new clustermap.components.ranges_table.t28922(self__.p__28874,self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.map__28920,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.map__28919,self__.cols,self__.map__28921,meta28923__$1));
});})(map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28922 = ((function (map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28922(p__28874__$1,index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,map__28920__$2,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,map__28919__$2,cols__$1,map__28921__$2,meta28923){return (new clustermap.components.ranges_table.t28922(p__28874__$1,index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,map__28920__$2,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,map__28919__$2,cols__$1,map__28921__$2,meta28923));
});})(map__28919,map__28919__$1,props,map__28920,map__28920__$1,table_state,table_data,map__28921,map__28921__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28922(p__28874,index_type,row_aggs,owner,metric_path,props,row_path,table_data,map__28920__$1,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,map__28919__$1,cols,map__28921__$1,null));
});
