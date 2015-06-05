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
clustermap.components.ranges_table.render_table = (function render_table(p__27967,owner,opts){var map__28086 = p__27967;var map__28086__$1 = ((cljs.core.seq_QMARK_.call(null,map__28086))?cljs.core.apply.call(null,cljs.core.hash_map,map__28086):map__28086);var map__28087 = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28087__$1 = ((cljs.core.seq_QMARK_.call(null,map__28087))?cljs.core.apply.call(null,cljs.core.hash_map,map__28087):map__28087);var table_data = map__28087__$1;var query = cljs.core.get.call(null,map__28087__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28087__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28088 = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28088__$1 = ((cljs.core.seq_QMARK_.call(null,map__28088))?cljs.core.apply.call(null,cljs.core.hash_map,map__28088):map__28088);var controls = map__28088__$1;var title = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28089 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28089))?sablono.interpreter.attributes.call(null,attrs28089):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28089))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28090 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28090))?sablono.interpreter.attributes.call(null,attrs28090):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28090))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28090)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function iter__28092(s__28093){return (new cljs.core.LazySeq(null,((function (attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28093__$1 = s__28093;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28093__$1);if(temp__4126__auto__)
{var s__28093__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28093__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28093__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28095 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28094 = (0);while(true){
if((i__28094 < size__4376__auto__))
{var vec__28122 = cljs.core._nth.call(null,c__4375__auto__,i__28094);var row_i = cljs.core.nth.call(null,vec__28122,(0),null);var row = cljs.core.nth.call(null,vec__28122,(1),null);cljs.core.chunk_append.call(null,b__28095,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28094,vec__28122,row_i,row,c__4375__auto__,size__4376__auto__,b__28095,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function iter__28123(s__28124){return (new cljs.core.LazySeq(null,((function (i__28094,vec__28122,row_i,row,c__4375__auto__,size__4376__auto__,b__28095,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28124__$1 = s__28124;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28124__$1);if(temp__4126__auto____$1)
{var s__28124__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28124__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28124__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28126 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28125 = (0);while(true){
if((i__28125 < size__4376__auto____$1))
{var vec__28131 = cljs.core._nth.call(null,c__4375__auto____$1,i__28125);var col_i = cljs.core.nth.call(null,vec__28131,(0),null);var col = cljs.core.nth.call(null,vec__28131,(1),null);cljs.core.chunk_append.call(null,b__28126,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28132__$1 = (((G__28132 == null))?null:cljs.core.get.call(null,rowcol,G__28132));var G__28132__$2 = (((G__28132__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28132__$1));var G__28132__$3 = (((G__28132__$2 == null))?null:render_fn__$1.call(null,G__28132__$2));return G__28132__$3;
})():null)], null)));
{
var G__28204 = (i__28125 + (1));
i__28125 = G__28204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28126),iter__28123.call(null,cljs.core.chunk_rest.call(null,s__28124__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28126),null);
}
} else
{var vec__28133 = cljs.core.first.call(null,s__28124__$2);var col_i = cljs.core.nth.call(null,vec__28133,(0),null);var col = cljs.core.nth.call(null,vec__28133,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28134__$1 = (((G__28134 == null))?null:cljs.core.get.call(null,rowcol,G__28134));var G__28134__$2 = (((G__28134__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28134__$1));var G__28134__$3 = (((G__28134__$2 == null))?null:render_fn__$1.call(null,G__28134__$2));return G__28134__$3;
})():null)], null)),iter__28123.call(null,cljs.core.rest.call(null,s__28124__$2)));
}
} else
{return null;
}
break;
}
});})(i__28094,vec__28122,row_i,row,c__4375__auto__,size__4376__auto__,b__28095,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28094,vec__28122,row_i,row,c__4375__auto__,size__4376__auto__,b__28095,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28205 = (i__28094 + (1));
i__28094 = G__28205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28095),iter__28092.call(null,cljs.core.chunk_rest.call(null,s__28093__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28095),null);
}
} else
{var vec__28135 = cljs.core.first.call(null,s__28093__$2);var row_i = cljs.core.nth.call(null,vec__28135,(0),null);var row = cljs.core.nth.call(null,vec__28135,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28135,row_i,row,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function iter__28136(s__28137){return (new cljs.core.LazySeq(null,((function (vec__28135,row_i,row,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28137__$1 = s__28137;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28137__$1);if(temp__4126__auto____$1)
{var s__28137__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28137__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28137__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28139 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28138 = (0);while(true){
if((i__28138 < size__4376__auto__))
{var vec__28144 = cljs.core._nth.call(null,c__4375__auto__,i__28138);var col_i = cljs.core.nth.call(null,vec__28144,(0),null);var col = cljs.core.nth.call(null,vec__28144,(1),null);cljs.core.chunk_append.call(null,b__28139,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28145__$1 = (((G__28145 == null))?null:cljs.core.get.call(null,rowcol,G__28145));var G__28145__$2 = (((G__28145__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28145__$1));var G__28145__$3 = (((G__28145__$2 == null))?null:render_fn__$1.call(null,G__28145__$2));return G__28145__$3;
})():null)], null)));
{
var G__28206 = (i__28138 + (1));
i__28138 = G__28206;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28139),iter__28136.call(null,cljs.core.chunk_rest.call(null,s__28137__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28139),null);
}
} else
{var vec__28146 = cljs.core.first.call(null,s__28137__$2);var col_i = cljs.core.nth.call(null,vec__28146,(0),null);var col = cljs.core.nth.call(null,vec__28146,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28147__$1 = (((G__28147 == null))?null:cljs.core.get.call(null,rowcol,G__28147));var G__28147__$2 = (((G__28147__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28147__$1));var G__28147__$3 = (((G__28147__$2 == null))?null:render_fn__$1.call(null,G__28147__$2));return G__28147__$3;
})():null)], null)),iter__28136.call(null,cljs.core.rest.call(null,s__28137__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28135,row_i,row,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28135,row_i,row,s__28093__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28092.call(null,cljs.core.rest.call(null,s__28093__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28089),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28091 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28091))?sablono.interpreter.attributes.call(null,attrs28091):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28091))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28091)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function iter__28148(s__28149){return (new cljs.core.LazySeq(null,((function (attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28149__$1 = s__28149;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28149__$1);if(temp__4126__auto__)
{var s__28149__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28149__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28149__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28151 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28150 = (0);while(true){
if((i__28150 < size__4376__auto__))
{var vec__28178 = cljs.core._nth.call(null,c__4375__auto__,i__28150);var row_i = cljs.core.nth.call(null,vec__28178,(0),null);var row = cljs.core.nth.call(null,vec__28178,(1),null);cljs.core.chunk_append.call(null,b__28151,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28150,vec__28178,row_i,row,c__4375__auto__,size__4376__auto__,b__28151,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function iter__28179(s__28180){return (new cljs.core.LazySeq(null,((function (i__28150,vec__28178,row_i,row,c__4375__auto__,size__4376__auto__,b__28151,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28180__$1 = s__28180;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28180__$1);if(temp__4126__auto____$1)
{var s__28180__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28180__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28180__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28182 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28181 = (0);while(true){
if((i__28181 < size__4376__auto____$1))
{var vec__28187 = cljs.core._nth.call(null,c__4375__auto____$1,i__28181);var col_i = cljs.core.nth.call(null,vec__28187,(0),null);var col = cljs.core.nth.call(null,vec__28187,(1),null);cljs.core.chunk_append.call(null,b__28182,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28188__$1 = (((G__28188 == null))?null:cljs.core.get.call(null,rowcol,G__28188));var G__28188__$2 = (((G__28188__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28188__$1));var G__28188__$3 = (((G__28188__$2 == null))?null:render_fn__$1.call(null,G__28188__$2));return G__28188__$3;
})():null)], null)));
{
var G__28207 = (i__28181 + (1));
i__28181 = G__28207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28182),iter__28179.call(null,cljs.core.chunk_rest.call(null,s__28180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28182),null);
}
} else
{var vec__28189 = cljs.core.first.call(null,s__28180__$2);var col_i = cljs.core.nth.call(null,vec__28189,(0),null);var col = cljs.core.nth.call(null,vec__28189,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28190__$1 = (((G__28190 == null))?null:cljs.core.get.call(null,rowcol,G__28190));var G__28190__$2 = (((G__28190__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28190__$1));var G__28190__$3 = (((G__28190__$2 == null))?null:render_fn__$1.call(null,G__28190__$2));return G__28190__$3;
})():null)], null)),iter__28179.call(null,cljs.core.rest.call(null,s__28180__$2)));
}
} else
{return null;
}
break;
}
});})(i__28150,vec__28178,row_i,row,c__4375__auto__,size__4376__auto__,b__28151,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28150,vec__28178,row_i,row,c__4375__auto__,size__4376__auto__,b__28151,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28208 = (i__28150 + (1));
i__28150 = G__28208;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28151),iter__28148.call(null,cljs.core.chunk_rest.call(null,s__28149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28151),null);
}
} else
{var vec__28191 = cljs.core.first.call(null,s__28149__$2);var row_i = cljs.core.nth.call(null,vec__28191,(0),null);var row = cljs.core.nth.call(null,vec__28191,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28191,row_i,row,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function iter__28192(s__28193){return (new cljs.core.LazySeq(null,((function (vec__28191,row_i,row,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28193__$1 = s__28193;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28193__$1);if(temp__4126__auto____$1)
{var s__28193__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28193__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28193__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28195 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28194 = (0);while(true){
if((i__28194 < size__4376__auto__))
{var vec__28200 = cljs.core._nth.call(null,c__4375__auto__,i__28194);var col_i = cljs.core.nth.call(null,vec__28200,(0),null);var col = cljs.core.nth.call(null,vec__28200,(1),null);cljs.core.chunk_append.call(null,b__28195,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28201__$1 = (((G__28201 == null))?null:cljs.core.get.call(null,rowcol,G__28201));var G__28201__$2 = (((G__28201__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28201__$1));var G__28201__$3 = (((G__28201__$2 == null))?null:render_fn__$1.call(null,G__28201__$2));return G__28201__$3;
})():null)], null)));
{
var G__28209 = (i__28194 + (1));
i__28194 = G__28209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28195),iter__28192.call(null,cljs.core.chunk_rest.call(null,s__28193__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28195),null);
}
} else
{var vec__28202 = cljs.core.first.call(null,s__28193__$2);var col_i = cljs.core.nth.call(null,vec__28202,(0),null);var col = cljs.core.nth.call(null,vec__28202,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28203__$1 = (((G__28203 == null))?null:cljs.core.get.call(null,rowcol,G__28203));var G__28203__$2 = (((G__28203__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28203__$1));var G__28203__$3 = (((G__28203__$2 == null))?null:render_fn__$1.call(null,G__28203__$2));return G__28203__$3;
})():null)], null)),iter__28192.call(null,cljs.core.rest.call(null,s__28193__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28191,row_i,row,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28191,row_i,row,s__28149__$2,temp__4126__auto__,attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28148.call(null,cljs.core.rest.call(null,s__28149__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28089,rowcol,render_fn__$1,map__28086,map__28086__$1,map__28087,map__28087__$1,table_data,query,results,map__28088,map__28088__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28210,owner){var map__28255 = p__28210;var map__28255__$1 = ((cljs.core.seq_QMARK_.call(null,map__28255))?cljs.core.apply.call(null,cljs.core.hash_map,map__28255):map__28255);var props = map__28255__$1;var map__28256 = cljs.core.get.call(null,map__28255__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28256__$1 = ((cljs.core.seq_QMARK_.call(null,map__28256))?cljs.core.apply.call(null,cljs.core.hash_map,map__28256):map__28256);var table_state = map__28256__$1;var table_data = cljs.core.get.call(null,map__28256__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28257 = cljs.core.get.call(null,map__28256__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28257__$1 = ((cljs.core.seq_QMARK_.call(null,map__28257))?cljs.core.apply.call(null,cljs.core.hash_map,map__28257):map__28257);var controls = map__28257__$1;var index_type = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28255__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28258 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28258 = (function (index_type,row_aggs,owner,metric_path,props,map__28255,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,map__28257,title,rows,cols,map__28256,p__28210,meta28259){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__28255 = map__28255;
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
this.map__28257 = map__28257;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28256 = map__28256;
this.p__28210 = p__28210;
this.meta28259 = meta28259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28258.cljs$lang$type = true;
clustermap.components.ranges_table.t28258.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28258";
clustermap.components.ranges_table.t28258.cljs$lang$ctorPrWriter = ((function (map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28258");
});})(map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28258.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28258.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28261,p__28262){var self__ = this;
var map__28263 = p__28261;var map__28263__$1 = ((cljs.core.seq_QMARK_.call(null,map__28263))?cljs.core.apply.call(null,cljs.core.hash_map,map__28263):map__28263);var next_props = map__28263__$1;var map__28264 = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28264__$1 = ((cljs.core.seq_QMARK_.call(null,map__28264))?cljs.core.apply.call(null,cljs.core.hash_map,map__28264):map__28264);var next_table_state = map__28264__$1;var next_table_data = cljs.core.get.call(null,map__28264__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28265 = cljs.core.get.call(null,map__28264__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28265__$1 = ((cljs.core.seq_QMARK_.call(null,map__28265))?cljs.core.apply.call(null,cljs.core.hash_map,map__28265):map__28265);var next_controls = map__28265__$1;var next_col_aggs = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28266 = p__28262;var map__28266__$1 = ((cljs.core.seq_QMARK_.call(null,map__28266))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);var fetch_data_fn = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28263,map__28263__$1,next_props,map__28264,map__28264__$1,next_table_state,next_table_data,map__28265,map__28265__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28266,map__28266__$1,fetch_data_fn,map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28263,map__28263__$1,next_props,map__28264,map__28264__$1,next_table_state,next_table_data,map__28265,map__28265__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28266,map__28266__$1,fetch_data_fn,map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28284){var state_val_28285 = (state_28284[(1)]);if((state_val_28285 === (5)))
{var inst_28282 = (state_28284[(2)]);var state_28284__$1 = state_28284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28284__$1,inst_28282);
} else
{if((state_val_28285 === (4)))
{var state_28284__$1 = state_28284;var statearr_28286_28299 = state_28284__$1;(statearr_28286_28299[(2)] = null);
(statearr_28286_28299[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28285 === (3)))
{var inst_28269 = (state_28284[(7)]);var inst_28271 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28272 = ["RANGES-TABLE-DATA",inst_28269];var inst_28273 = (new cljs.core.PersistentVector(null,2,(5),inst_28271,inst_28272,null));var inst_28274 = cljs.core.clj__GT_js.call(null,inst_28273);var inst_28275 = console.log(inst_28274);var inst_28276 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28277 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28278 = (new cljs.core.PersistentVector(null,1,(5),inst_28276,inst_28277,null));var inst_28279 = om.core.update_BANG_.call(null,self__.table_state,inst_28278,inst_28269);var state_28284__$1 = (function (){var statearr_28287 = state_28284;(statearr_28287[(8)] = inst_28275);
return statearr_28287;
})();var statearr_28288_28300 = state_28284__$1;(statearr_28288_28300[(2)] = inst_28279);
(statearr_28288_28300[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28285 === (2)))
{var inst_28269 = (state_28284[(7)]);var inst_28269__$1 = (state_28284[(2)]);var state_28284__$1 = (function (){var statearr_28289 = state_28284;(statearr_28289[(7)] = inst_28269__$1);
return statearr_28289;
})();if(cljs.core.truth_(inst_28269__$1))
{var statearr_28290_28301 = state_28284__$1;(statearr_28290_28301[(1)] = (3));
} else
{var statearr_28291_28302 = state_28284__$1;(statearr_28291_28302[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28285 === (1)))
{var inst_28267 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28284__$1 = state_28284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28284__$1,(2),inst_28267);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28263,map__28263__$1,next_props,map__28264,map__28264__$1,next_table_state,next_table_data,map__28265,map__28265__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28266,map__28266__$1,fetch_data_fn,map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28263,map__28263__$1,next_props,map__28264,map__28264__$1,next_table_state,next_table_data,map__28265,map__28265__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28266,map__28266__$1,fetch_data_fn,map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28295 = [null,null,null,null,null,null,null,null,null];(statearr_28295[(0)] = state_machine__9111__auto__);
(statearr_28295[(1)] = (1));
return statearr_28295;
});
var state_machine__9111__auto____1 = (function (state_28284){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28284);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28296){if((e28296 instanceof Object))
{var ex__9114__auto__ = e28296;var statearr_28297_28303 = state_28284;(statearr_28297_28303[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28296;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28304 = state_28284;
state_28284 = G__28304;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28284){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28263,map__28263__$1,next_props,map__28264,map__28264__$1,next_table_state,next_table_data,map__28265,map__28265__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28266,map__28266__$1,fetch_data_fn,map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28298 = f__9126__auto__.call(null);(statearr_28298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28263,map__28263__$1,next_props,map__28264,map__28264__$1,next_table_state,next_table_data,map__28265,map__28265__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28266,map__28266__$1,fetch_data_fn,map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28258.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28258.prototype.om$core$IRender$render$arity$1 = ((function (map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28258.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28258.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28260){var self__ = this;
var _28260__$1 = this;return self__.meta28259;
});})(map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28260,meta28259__$1){var self__ = this;
var _28260__$1 = this;return (new clustermap.components.ranges_table.t28258(self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__28255,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.map__28257,self__.title,self__.rows,self__.cols,self__.map__28256,self__.p__28210,meta28259__$1));
});})(map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28258 = ((function (map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28258(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28255__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,map__28257__$2,title__$1,rows__$1,cols__$1,map__28256__$2,p__28210__$1,meta28259){return (new clustermap.components.ranges_table.t28258(index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28255__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,map__28257__$2,title__$1,rows__$1,cols__$1,map__28256__$2,p__28210__$1,meta28259));
});})(map__28255,map__28255__$1,props,map__28256,map__28256__$1,table_state,table_data,map__28257,map__28257__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28258(index_type,row_aggs,owner,metric_path,props,map__28255__$1,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,map__28257__$1,title,rows,cols,map__28256__$1,p__28210,null));
});
