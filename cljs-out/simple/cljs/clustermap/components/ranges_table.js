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
clustermap.components.ranges_table.render_table = (function render_table(p__28200,owner,opts){var map__28319 = p__28200;var map__28319__$1 = ((cljs.core.seq_QMARK_.call(null,map__28319))?cljs.core.apply.call(null,cljs.core.hash_map,map__28319):map__28319);var map__28320 = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28320__$1 = ((cljs.core.seq_QMARK_.call(null,map__28320))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);var table_data = map__28320__$1;var query = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28321 = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28321__$1 = ((cljs.core.seq_QMARK_.call(null,map__28321))?cljs.core.apply.call(null,cljs.core.hash_map,map__28321):map__28321);var controls = map__28321__$1;var title = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28322 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28322))?sablono.interpreter.attributes.call(null,attrs28322):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28322))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28323 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28323))?sablono.interpreter.attributes.call(null,attrs28323):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28323))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28323)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function iter__28325(s__28326){return (new cljs.core.LazySeq(null,((function (attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28326__$1 = s__28326;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28326__$1);if(temp__4126__auto__)
{var s__28326__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28326__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28326__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28328 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28327 = (0);while(true){
if((i__28327 < size__4376__auto__))
{var vec__28355 = cljs.core._nth.call(null,c__4375__auto__,i__28327);var row_i = cljs.core.nth.call(null,vec__28355,(0),null);var row = cljs.core.nth.call(null,vec__28355,(1),null);cljs.core.chunk_append.call(null,b__28328,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28327,vec__28355,row_i,row,c__4375__auto__,size__4376__auto__,b__28328,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function iter__28356(s__28357){return (new cljs.core.LazySeq(null,((function (i__28327,vec__28355,row_i,row,c__4375__auto__,size__4376__auto__,b__28328,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28357__$1 = s__28357;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28357__$1);if(temp__4126__auto____$1)
{var s__28357__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28357__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28357__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28359 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28358 = (0);while(true){
if((i__28358 < size__4376__auto____$1))
{var vec__28364 = cljs.core._nth.call(null,c__4375__auto____$1,i__28358);var col_i = cljs.core.nth.call(null,vec__28364,(0),null);var col = cljs.core.nth.call(null,vec__28364,(1),null);cljs.core.chunk_append.call(null,b__28359,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28365__$1 = (((G__28365 == null))?null:cljs.core.get.call(null,rowcol,G__28365));var G__28365__$2 = (((G__28365__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28365__$1));var G__28365__$3 = (((G__28365__$2 == null))?null:render_fn__$1.call(null,G__28365__$2));return G__28365__$3;
})():null)], null)));
{
var G__28437 = (i__28358 + (1));
i__28358 = G__28437;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28359),iter__28356.call(null,cljs.core.chunk_rest.call(null,s__28357__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28359),null);
}
} else
{var vec__28366 = cljs.core.first.call(null,s__28357__$2);var col_i = cljs.core.nth.call(null,vec__28366,(0),null);var col = cljs.core.nth.call(null,vec__28366,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28367__$1 = (((G__28367 == null))?null:cljs.core.get.call(null,rowcol,G__28367));var G__28367__$2 = (((G__28367__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28367__$1));var G__28367__$3 = (((G__28367__$2 == null))?null:render_fn__$1.call(null,G__28367__$2));return G__28367__$3;
})():null)], null)),iter__28356.call(null,cljs.core.rest.call(null,s__28357__$2)));
}
} else
{return null;
}
break;
}
});})(i__28327,vec__28355,row_i,row,c__4375__auto__,size__4376__auto__,b__28328,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28327,vec__28355,row_i,row,c__4375__auto__,size__4376__auto__,b__28328,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28438 = (i__28327 + (1));
i__28327 = G__28438;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28328),iter__28325.call(null,cljs.core.chunk_rest.call(null,s__28326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28328),null);
}
} else
{var vec__28368 = cljs.core.first.call(null,s__28326__$2);var row_i = cljs.core.nth.call(null,vec__28368,(0),null);var row = cljs.core.nth.call(null,vec__28368,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28368,row_i,row,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function iter__28369(s__28370){return (new cljs.core.LazySeq(null,((function (vec__28368,row_i,row,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28370__$1 = s__28370;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28370__$1);if(temp__4126__auto____$1)
{var s__28370__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28370__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28370__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28372 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28371 = (0);while(true){
if((i__28371 < size__4376__auto__))
{var vec__28377 = cljs.core._nth.call(null,c__4375__auto__,i__28371);var col_i = cljs.core.nth.call(null,vec__28377,(0),null);var col = cljs.core.nth.call(null,vec__28377,(1),null);cljs.core.chunk_append.call(null,b__28372,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28378__$1 = (((G__28378 == null))?null:cljs.core.get.call(null,rowcol,G__28378));var G__28378__$2 = (((G__28378__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28378__$1));var G__28378__$3 = (((G__28378__$2 == null))?null:render_fn__$1.call(null,G__28378__$2));return G__28378__$3;
})():null)], null)));
{
var G__28439 = (i__28371 + (1));
i__28371 = G__28439;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28372),iter__28369.call(null,cljs.core.chunk_rest.call(null,s__28370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28372),null);
}
} else
{var vec__28379 = cljs.core.first.call(null,s__28370__$2);var col_i = cljs.core.nth.call(null,vec__28379,(0),null);var col = cljs.core.nth.call(null,vec__28379,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28380__$1 = (((G__28380 == null))?null:cljs.core.get.call(null,rowcol,G__28380));var G__28380__$2 = (((G__28380__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28380__$1));var G__28380__$3 = (((G__28380__$2 == null))?null:render_fn__$1.call(null,G__28380__$2));return G__28380__$3;
})():null)], null)),iter__28369.call(null,cljs.core.rest.call(null,s__28370__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28368,row_i,row,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28368,row_i,row,s__28326__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28325.call(null,cljs.core.rest.call(null,s__28326__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28322),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28324 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28324))?sablono.interpreter.attributes.call(null,attrs28324):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28324))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28324)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function iter__28381(s__28382){return (new cljs.core.LazySeq(null,((function (attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28382__$1 = s__28382;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28382__$1);if(temp__4126__auto__)
{var s__28382__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28382__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28382__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28384 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28383 = (0);while(true){
if((i__28383 < size__4376__auto__))
{var vec__28411 = cljs.core._nth.call(null,c__4375__auto__,i__28383);var row_i = cljs.core.nth.call(null,vec__28411,(0),null);var row = cljs.core.nth.call(null,vec__28411,(1),null);cljs.core.chunk_append.call(null,b__28384,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28383,vec__28411,row_i,row,c__4375__auto__,size__4376__auto__,b__28384,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function iter__28412(s__28413){return (new cljs.core.LazySeq(null,((function (i__28383,vec__28411,row_i,row,c__4375__auto__,size__4376__auto__,b__28384,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28413__$1 = s__28413;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28413__$1);if(temp__4126__auto____$1)
{var s__28413__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28413__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28413__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28415 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28414 = (0);while(true){
if((i__28414 < size__4376__auto____$1))
{var vec__28420 = cljs.core._nth.call(null,c__4375__auto____$1,i__28414);var col_i = cljs.core.nth.call(null,vec__28420,(0),null);var col = cljs.core.nth.call(null,vec__28420,(1),null);cljs.core.chunk_append.call(null,b__28415,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28421__$1 = (((G__28421 == null))?null:cljs.core.get.call(null,rowcol,G__28421));var G__28421__$2 = (((G__28421__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28421__$1));var G__28421__$3 = (((G__28421__$2 == null))?null:render_fn__$1.call(null,G__28421__$2));return G__28421__$3;
})():null)], null)));
{
var G__28440 = (i__28414 + (1));
i__28414 = G__28440;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28415),iter__28412.call(null,cljs.core.chunk_rest.call(null,s__28413__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28415),null);
}
} else
{var vec__28422 = cljs.core.first.call(null,s__28413__$2);var col_i = cljs.core.nth.call(null,vec__28422,(0),null);var col = cljs.core.nth.call(null,vec__28422,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28423__$1 = (((G__28423 == null))?null:cljs.core.get.call(null,rowcol,G__28423));var G__28423__$2 = (((G__28423__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28423__$1));var G__28423__$3 = (((G__28423__$2 == null))?null:render_fn__$1.call(null,G__28423__$2));return G__28423__$3;
})():null)], null)),iter__28412.call(null,cljs.core.rest.call(null,s__28413__$2)));
}
} else
{return null;
}
break;
}
});})(i__28383,vec__28411,row_i,row,c__4375__auto__,size__4376__auto__,b__28384,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28383,vec__28411,row_i,row,c__4375__auto__,size__4376__auto__,b__28384,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28441 = (i__28383 + (1));
i__28383 = G__28441;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28384),iter__28381.call(null,cljs.core.chunk_rest.call(null,s__28382__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28384),null);
}
} else
{var vec__28424 = cljs.core.first.call(null,s__28382__$2);var row_i = cljs.core.nth.call(null,vec__28424,(0),null);var row = cljs.core.nth.call(null,vec__28424,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28424,row_i,row,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function iter__28425(s__28426){return (new cljs.core.LazySeq(null,((function (vec__28424,row_i,row,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28426__$1 = s__28426;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28426__$1);if(temp__4126__auto____$1)
{var s__28426__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28426__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28426__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28428 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28427 = (0);while(true){
if((i__28427 < size__4376__auto__))
{var vec__28433 = cljs.core._nth.call(null,c__4375__auto__,i__28427);var col_i = cljs.core.nth.call(null,vec__28433,(0),null);var col = cljs.core.nth.call(null,vec__28433,(1),null);cljs.core.chunk_append.call(null,b__28428,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28434__$1 = (((G__28434 == null))?null:cljs.core.get.call(null,rowcol,G__28434));var G__28434__$2 = (((G__28434__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28434__$1));var G__28434__$3 = (((G__28434__$2 == null))?null:render_fn__$1.call(null,G__28434__$2));return G__28434__$3;
})():null)], null)));
{
var G__28442 = (i__28427 + (1));
i__28427 = G__28442;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28428),iter__28425.call(null,cljs.core.chunk_rest.call(null,s__28426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28428),null);
}
} else
{var vec__28435 = cljs.core.first.call(null,s__28426__$2);var col_i = cljs.core.nth.call(null,vec__28435,(0),null);var col = cljs.core.nth.call(null,vec__28435,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28436__$1 = (((G__28436 == null))?null:cljs.core.get.call(null,rowcol,G__28436));var G__28436__$2 = (((G__28436__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28436__$1));var G__28436__$3 = (((G__28436__$2 == null))?null:render_fn__$1.call(null,G__28436__$2));return G__28436__$3;
})():null)], null)),iter__28425.call(null,cljs.core.rest.call(null,s__28426__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28424,row_i,row,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28424,row_i,row,s__28382__$2,temp__4126__auto__,attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28381.call(null,cljs.core.rest.call(null,s__28382__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28322,rowcol,render_fn__$1,map__28319,map__28319__$1,map__28320,map__28320__$1,table_data,query,results,map__28321,map__28321__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28443,owner){var map__28488 = p__28443;var map__28488__$1 = ((cljs.core.seq_QMARK_.call(null,map__28488))?cljs.core.apply.call(null,cljs.core.hash_map,map__28488):map__28488);var props = map__28488__$1;var map__28489 = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28489__$1 = ((cljs.core.seq_QMARK_.call(null,map__28489))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);var table_state = map__28489__$1;var table_data = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28490 = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28490__$1 = ((cljs.core.seq_QMARK_.call(null,map__28490))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);var controls = map__28490__$1;var index_type = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28491 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28491 = (function (index_type,row_aggs,map__28489,owner,metric_path,props,row_path,table_data,metric_aggs,map__28490,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28488,p__28443,meta28492){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.map__28489 = map__28489;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.map__28490 = map__28490;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28488 = map__28488;
this.p__28443 = p__28443;
this.meta28492 = meta28492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28491.cljs$lang$type = true;
clustermap.components.ranges_table.t28491.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28491";
clustermap.components.ranges_table.t28491.cljs$lang$ctorPrWriter = ((function (map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28491");
});})(map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28491.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28491.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28494,p__28495){var self__ = this;
var map__28496 = p__28494;var map__28496__$1 = ((cljs.core.seq_QMARK_.call(null,map__28496))?cljs.core.apply.call(null,cljs.core.hash_map,map__28496):map__28496);var next_props = map__28496__$1;var map__28497 = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28497__$1 = ((cljs.core.seq_QMARK_.call(null,map__28497))?cljs.core.apply.call(null,cljs.core.hash_map,map__28497):map__28497);var next_table_state = map__28497__$1;var next_table_data = cljs.core.get.call(null,map__28497__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28498 = cljs.core.get.call(null,map__28497__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28498__$1 = ((cljs.core.seq_QMARK_.call(null,map__28498))?cljs.core.apply.call(null,cljs.core.hash_map,map__28498):map__28498);var next_controls = map__28498__$1;var next_col_aggs = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28499 = p__28495;var map__28499__$1 = ((cljs.core.seq_QMARK_.call(null,map__28499))?cljs.core.apply.call(null,cljs.core.hash_map,map__28499):map__28499);var fetch_data_fn = cljs.core.get.call(null,map__28499__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28496,map__28496__$1,next_props,map__28497,map__28497__$1,next_table_state,next_table_data,map__28498,map__28498__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28499,map__28499__$1,fetch_data_fn,map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28496,map__28496__$1,next_props,map__28497,map__28497__$1,next_table_state,next_table_data,map__28498,map__28498__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28499,map__28499__$1,fetch_data_fn,map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28517){var state_val_28518 = (state_28517[(1)]);if((state_val_28518 === (5)))
{var inst_28515 = (state_28517[(2)]);var state_28517__$1 = state_28517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28517__$1,inst_28515);
} else
{if((state_val_28518 === (4)))
{var state_28517__$1 = state_28517;var statearr_28519_28532 = state_28517__$1;(statearr_28519_28532[(2)] = null);
(statearr_28519_28532[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28518 === (3)))
{var inst_28502 = (state_28517[(7)]);var inst_28504 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28505 = ["RANGES-TABLE-DATA",inst_28502];var inst_28506 = (new cljs.core.PersistentVector(null,2,(5),inst_28504,inst_28505,null));var inst_28507 = cljs.core.clj__GT_js.call(null,inst_28506);var inst_28508 = console.log(inst_28507);var inst_28509 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28510 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28511 = (new cljs.core.PersistentVector(null,1,(5),inst_28509,inst_28510,null));var inst_28512 = om.core.update_BANG_.call(null,self__.table_state,inst_28511,inst_28502);var state_28517__$1 = (function (){var statearr_28520 = state_28517;(statearr_28520[(8)] = inst_28508);
return statearr_28520;
})();var statearr_28521_28533 = state_28517__$1;(statearr_28521_28533[(2)] = inst_28512);
(statearr_28521_28533[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28518 === (2)))
{var inst_28502 = (state_28517[(7)]);var inst_28502__$1 = (state_28517[(2)]);var state_28517__$1 = (function (){var statearr_28522 = state_28517;(statearr_28522[(7)] = inst_28502__$1);
return statearr_28522;
})();if(cljs.core.truth_(inst_28502__$1))
{var statearr_28523_28534 = state_28517__$1;(statearr_28523_28534[(1)] = (3));
} else
{var statearr_28524_28535 = state_28517__$1;(statearr_28524_28535[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28518 === (1)))
{var inst_28500 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28517__$1 = state_28517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28517__$1,(2),inst_28500);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28496,map__28496__$1,next_props,map__28497,map__28497__$1,next_table_state,next_table_data,map__28498,map__28498__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28499,map__28499__$1,fetch_data_fn,map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28496,map__28496__$1,next_props,map__28497,map__28497__$1,next_table_state,next_table_data,map__28498,map__28498__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28499,map__28499__$1,fetch_data_fn,map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28528 = [null,null,null,null,null,null,null,null,null];(statearr_28528[(0)] = state_machine__9111__auto__);
(statearr_28528[(1)] = (1));
return statearr_28528;
});
var state_machine__9111__auto____1 = (function (state_28517){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28517);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28529){if((e28529 instanceof Object))
{var ex__9114__auto__ = e28529;var statearr_28530_28536 = state_28517;(statearr_28530_28536[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28537 = state_28517;
state_28517 = G__28537;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28517){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28496,map__28496__$1,next_props,map__28497,map__28497__$1,next_table_state,next_table_data,map__28498,map__28498__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28499,map__28499__$1,fetch_data_fn,map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28531 = f__9126__auto__.call(null);(statearr_28531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28496,map__28496__$1,next_props,map__28497,map__28497__$1,next_table_state,next_table_data,map__28498,map__28498__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28499,map__28499__$1,fetch_data_fn,map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28491.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28491.prototype.om$core$IRender$render$arity$1 = ((function (map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28491.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28491.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28493){var self__ = this;
var _28493__$1 = this;return self__.meta28492;
});})(map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28493,meta28492__$1){var self__ = this;
var _28493__$1 = this;return (new clustermap.components.ranges_table.t28491(self__.index_type,self__.row_aggs,self__.map__28489,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.map__28490,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__28488,self__.p__28443,meta28492__$1));
});})(map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28491 = ((function (map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28491(index_type__$1,row_aggs__$1,map__28489__$2,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,map__28490__$2,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28488__$2,p__28443__$1,meta28492){return (new clustermap.components.ranges_table.t28491(index_type__$1,row_aggs__$1,map__28489__$2,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,map__28490__$2,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28488__$2,p__28443__$1,meta28492));
});})(map__28488,map__28488__$1,props,map__28489,map__28489__$1,table_state,table_data,map__28490,map__28490__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28491(index_type,row_aggs,map__28489__$1,owner,metric_path,props,row_path,table_data,metric_aggs,map__28490__$1,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28488__$1,p__28443,null));
});
