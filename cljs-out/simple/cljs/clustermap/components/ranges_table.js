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
clustermap.components.ranges_table.render_table = (function render_table(p__28448,owner,opts){var map__28567 = p__28448;var map__28567__$1 = ((cljs.core.seq_QMARK_.call(null,map__28567))?cljs.core.apply.call(null,cljs.core.hash_map,map__28567):map__28567);var map__28568 = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28568__$1 = ((cljs.core.seq_QMARK_.call(null,map__28568))?cljs.core.apply.call(null,cljs.core.hash_map,map__28568):map__28568);var table_data = map__28568__$1;var query = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28569 = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28569__$1 = ((cljs.core.seq_QMARK_.call(null,map__28569))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);var controls = map__28569__$1;var title = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28570 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28570))?sablono.interpreter.attributes.call(null,attrs28570):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28570))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28571 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28571))?sablono.interpreter.attributes.call(null,attrs28571):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28571))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28571)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function iter__28573(s__28574){return (new cljs.core.LazySeq(null,((function (attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28574__$1 = s__28574;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28574__$1);if(temp__4126__auto__)
{var s__28574__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28574__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28574__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28576 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28575 = (0);while(true){
if((i__28575 < size__4376__auto__))
{var vec__28603 = cljs.core._nth.call(null,c__4375__auto__,i__28575);var row_i = cljs.core.nth.call(null,vec__28603,(0),null);var row = cljs.core.nth.call(null,vec__28603,(1),null);cljs.core.chunk_append.call(null,b__28576,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28575,vec__28603,row_i,row,c__4375__auto__,size__4376__auto__,b__28576,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function iter__28604(s__28605){return (new cljs.core.LazySeq(null,((function (i__28575,vec__28603,row_i,row,c__4375__auto__,size__4376__auto__,b__28576,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28605__$1 = s__28605;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28605__$1);if(temp__4126__auto____$1)
{var s__28605__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28605__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28605__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28607 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28606 = (0);while(true){
if((i__28606 < size__4376__auto____$1))
{var vec__28612 = cljs.core._nth.call(null,c__4375__auto____$1,i__28606);var col_i = cljs.core.nth.call(null,vec__28612,(0),null);var col = cljs.core.nth.call(null,vec__28612,(1),null);cljs.core.chunk_append.call(null,b__28607,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28613__$1 = (((G__28613 == null))?null:cljs.core.get.call(null,rowcol,G__28613));var G__28613__$2 = (((G__28613__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28613__$1));var G__28613__$3 = (((G__28613__$2 == null))?null:render_fn__$1.call(null,G__28613__$2));return G__28613__$3;
})():null)], null)));
{
var G__28685 = (i__28606 + (1));
i__28606 = G__28685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28607),iter__28604.call(null,cljs.core.chunk_rest.call(null,s__28605__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28607),null);
}
} else
{var vec__28614 = cljs.core.first.call(null,s__28605__$2);var col_i = cljs.core.nth.call(null,vec__28614,(0),null);var col = cljs.core.nth.call(null,vec__28614,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28615__$1 = (((G__28615 == null))?null:cljs.core.get.call(null,rowcol,G__28615));var G__28615__$2 = (((G__28615__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28615__$1));var G__28615__$3 = (((G__28615__$2 == null))?null:render_fn__$1.call(null,G__28615__$2));return G__28615__$3;
})():null)], null)),iter__28604.call(null,cljs.core.rest.call(null,s__28605__$2)));
}
} else
{return null;
}
break;
}
});})(i__28575,vec__28603,row_i,row,c__4375__auto__,size__4376__auto__,b__28576,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28575,vec__28603,row_i,row,c__4375__auto__,size__4376__auto__,b__28576,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28686 = (i__28575 + (1));
i__28575 = G__28686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28576),iter__28573.call(null,cljs.core.chunk_rest.call(null,s__28574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28576),null);
}
} else
{var vec__28616 = cljs.core.first.call(null,s__28574__$2);var row_i = cljs.core.nth.call(null,vec__28616,(0),null);var row = cljs.core.nth.call(null,vec__28616,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28616,row_i,row,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function iter__28617(s__28618){return (new cljs.core.LazySeq(null,((function (vec__28616,row_i,row,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28618__$1 = s__28618;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28618__$1);if(temp__4126__auto____$1)
{var s__28618__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28618__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28618__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28620 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28619 = (0);while(true){
if((i__28619 < size__4376__auto__))
{var vec__28625 = cljs.core._nth.call(null,c__4375__auto__,i__28619);var col_i = cljs.core.nth.call(null,vec__28625,(0),null);var col = cljs.core.nth.call(null,vec__28625,(1),null);cljs.core.chunk_append.call(null,b__28620,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28626__$1 = (((G__28626 == null))?null:cljs.core.get.call(null,rowcol,G__28626));var G__28626__$2 = (((G__28626__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28626__$1));var G__28626__$3 = (((G__28626__$2 == null))?null:render_fn__$1.call(null,G__28626__$2));return G__28626__$3;
})():null)], null)));
{
var G__28687 = (i__28619 + (1));
i__28619 = G__28687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28620),iter__28617.call(null,cljs.core.chunk_rest.call(null,s__28618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28620),null);
}
} else
{var vec__28627 = cljs.core.first.call(null,s__28618__$2);var col_i = cljs.core.nth.call(null,vec__28627,(0),null);var col = cljs.core.nth.call(null,vec__28627,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28628__$1 = (((G__28628 == null))?null:cljs.core.get.call(null,rowcol,G__28628));var G__28628__$2 = (((G__28628__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28628__$1));var G__28628__$3 = (((G__28628__$2 == null))?null:render_fn__$1.call(null,G__28628__$2));return G__28628__$3;
})():null)], null)),iter__28617.call(null,cljs.core.rest.call(null,s__28618__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28616,row_i,row,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28616,row_i,row,s__28574__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28573.call(null,cljs.core.rest.call(null,s__28574__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28570),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28572 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28572))?sablono.interpreter.attributes.call(null,attrs28572):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28572))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28572)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function iter__28629(s__28630){return (new cljs.core.LazySeq(null,((function (attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28630__$1 = s__28630;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28630__$1);if(temp__4126__auto__)
{var s__28630__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28630__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28630__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28632 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28631 = (0);while(true){
if((i__28631 < size__4376__auto__))
{var vec__28659 = cljs.core._nth.call(null,c__4375__auto__,i__28631);var row_i = cljs.core.nth.call(null,vec__28659,(0),null);var row = cljs.core.nth.call(null,vec__28659,(1),null);cljs.core.chunk_append.call(null,b__28632,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28631,vec__28659,row_i,row,c__4375__auto__,size__4376__auto__,b__28632,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function iter__28660(s__28661){return (new cljs.core.LazySeq(null,((function (i__28631,vec__28659,row_i,row,c__4375__auto__,size__4376__auto__,b__28632,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28661__$1 = s__28661;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28661__$1);if(temp__4126__auto____$1)
{var s__28661__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28661__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28661__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28663 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28662 = (0);while(true){
if((i__28662 < size__4376__auto____$1))
{var vec__28668 = cljs.core._nth.call(null,c__4375__auto____$1,i__28662);var col_i = cljs.core.nth.call(null,vec__28668,(0),null);var col = cljs.core.nth.call(null,vec__28668,(1),null);cljs.core.chunk_append.call(null,b__28663,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28669__$1 = (((G__28669 == null))?null:cljs.core.get.call(null,rowcol,G__28669));var G__28669__$2 = (((G__28669__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28669__$1));var G__28669__$3 = (((G__28669__$2 == null))?null:render_fn__$1.call(null,G__28669__$2));return G__28669__$3;
})():null)], null)));
{
var G__28688 = (i__28662 + (1));
i__28662 = G__28688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28663),iter__28660.call(null,cljs.core.chunk_rest.call(null,s__28661__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28663),null);
}
} else
{var vec__28670 = cljs.core.first.call(null,s__28661__$2);var col_i = cljs.core.nth.call(null,vec__28670,(0),null);var col = cljs.core.nth.call(null,vec__28670,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28671__$1 = (((G__28671 == null))?null:cljs.core.get.call(null,rowcol,G__28671));var G__28671__$2 = (((G__28671__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28671__$1));var G__28671__$3 = (((G__28671__$2 == null))?null:render_fn__$1.call(null,G__28671__$2));return G__28671__$3;
})():null)], null)),iter__28660.call(null,cljs.core.rest.call(null,s__28661__$2)));
}
} else
{return null;
}
break;
}
});})(i__28631,vec__28659,row_i,row,c__4375__auto__,size__4376__auto__,b__28632,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28631,vec__28659,row_i,row,c__4375__auto__,size__4376__auto__,b__28632,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28689 = (i__28631 + (1));
i__28631 = G__28689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28632),iter__28629.call(null,cljs.core.chunk_rest.call(null,s__28630__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28632),null);
}
} else
{var vec__28672 = cljs.core.first.call(null,s__28630__$2);var row_i = cljs.core.nth.call(null,vec__28672,(0),null);var row = cljs.core.nth.call(null,vec__28672,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28672,row_i,row,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function iter__28673(s__28674){return (new cljs.core.LazySeq(null,((function (vec__28672,row_i,row,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28674__$1 = s__28674;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28674__$1);if(temp__4126__auto____$1)
{var s__28674__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28674__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28674__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28676 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28675 = (0);while(true){
if((i__28675 < size__4376__auto__))
{var vec__28681 = cljs.core._nth.call(null,c__4375__auto__,i__28675);var col_i = cljs.core.nth.call(null,vec__28681,(0),null);var col = cljs.core.nth.call(null,vec__28681,(1),null);cljs.core.chunk_append.call(null,b__28676,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28682__$1 = (((G__28682 == null))?null:cljs.core.get.call(null,rowcol,G__28682));var G__28682__$2 = (((G__28682__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28682__$1));var G__28682__$3 = (((G__28682__$2 == null))?null:render_fn__$1.call(null,G__28682__$2));return G__28682__$3;
})():null)], null)));
{
var G__28690 = (i__28675 + (1));
i__28675 = G__28690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28676),iter__28673.call(null,cljs.core.chunk_rest.call(null,s__28674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28676),null);
}
} else
{var vec__28683 = cljs.core.first.call(null,s__28674__$2);var col_i = cljs.core.nth.call(null,vec__28683,(0),null);var col = cljs.core.nth.call(null,vec__28683,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28684__$1 = (((G__28684 == null))?null:cljs.core.get.call(null,rowcol,G__28684));var G__28684__$2 = (((G__28684__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28684__$1));var G__28684__$3 = (((G__28684__$2 == null))?null:render_fn__$1.call(null,G__28684__$2));return G__28684__$3;
})():null)], null)),iter__28673.call(null,cljs.core.rest.call(null,s__28674__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28672,row_i,row,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28672,row_i,row,s__28630__$2,temp__4126__auto__,attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28629.call(null,cljs.core.rest.call(null,s__28630__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28570,rowcol,render_fn__$1,map__28567,map__28567__$1,map__28568,map__28568__$1,table_data,query,results,map__28569,map__28569__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28691,owner){var map__28736 = p__28691;var map__28736__$1 = ((cljs.core.seq_QMARK_.call(null,map__28736))?cljs.core.apply.call(null,cljs.core.hash_map,map__28736):map__28736);var props = map__28736__$1;var map__28737 = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28737__$1 = ((cljs.core.seq_QMARK_.call(null,map__28737))?cljs.core.apply.call(null,cljs.core.hash_map,map__28737):map__28737);var table_state = map__28737__$1;var table_data = cljs.core.get.call(null,map__28737__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28738 = cljs.core.get.call(null,map__28737__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28738__$1 = ((cljs.core.seq_QMARK_.call(null,map__28738))?cljs.core.apply.call(null,cljs.core.hash_map,map__28738):map__28738);var controls = map__28738__$1;var index_type = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28738__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28739 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28739 = (function (map__28738,index_type,map__28736,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,p__28691,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28737,meta28740){
this.map__28738 = map__28738;
this.index_type = index_type;
this.map__28736 = map__28736;
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
this.p__28691 = p__28691;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28737 = map__28737;
this.meta28740 = meta28740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28739.cljs$lang$type = true;
clustermap.components.ranges_table.t28739.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28739";
clustermap.components.ranges_table.t28739.cljs$lang$ctorPrWriter = ((function (map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28739");
});})(map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28739.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28739.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28742,p__28743){var self__ = this;
var map__28744 = p__28742;var map__28744__$1 = ((cljs.core.seq_QMARK_.call(null,map__28744))?cljs.core.apply.call(null,cljs.core.hash_map,map__28744):map__28744);var next_props = map__28744__$1;var map__28745 = cljs.core.get.call(null,map__28744__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28745__$1 = ((cljs.core.seq_QMARK_.call(null,map__28745))?cljs.core.apply.call(null,cljs.core.hash_map,map__28745):map__28745);var next_table_state = map__28745__$1;var next_table_data = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28746 = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28746__$1 = ((cljs.core.seq_QMARK_.call(null,map__28746))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746):map__28746);var next_controls = map__28746__$1;var next_col_aggs = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28744__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28747 = p__28743;var map__28747__$1 = ((cljs.core.seq_QMARK_.call(null,map__28747))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);var fetch_data_fn = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28744,map__28744__$1,next_props,map__28745,map__28745__$1,next_table_state,next_table_data,map__28746,map__28746__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28747,map__28747__$1,fetch_data_fn,map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28744,map__28744__$1,next_props,map__28745,map__28745__$1,next_table_state,next_table_data,map__28746,map__28746__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28747,map__28747__$1,fetch_data_fn,map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28765){var state_val_28766 = (state_28765[(1)]);if((state_val_28766 === (5)))
{var inst_28763 = (state_28765[(2)]);var state_28765__$1 = state_28765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28765__$1,inst_28763);
} else
{if((state_val_28766 === (4)))
{var state_28765__$1 = state_28765;var statearr_28767_28780 = state_28765__$1;(statearr_28767_28780[(2)] = null);
(statearr_28767_28780[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28766 === (3)))
{var inst_28750 = (state_28765[(7)]);var inst_28752 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28753 = ["RANGES-TABLE-DATA",inst_28750];var inst_28754 = (new cljs.core.PersistentVector(null,2,(5),inst_28752,inst_28753,null));var inst_28755 = cljs.core.clj__GT_js.call(null,inst_28754);var inst_28756 = console.log(inst_28755);var inst_28757 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28758 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28759 = (new cljs.core.PersistentVector(null,1,(5),inst_28757,inst_28758,null));var inst_28760 = om.core.update_BANG_.call(null,self__.table_state,inst_28759,inst_28750);var state_28765__$1 = (function (){var statearr_28768 = state_28765;(statearr_28768[(8)] = inst_28756);
return statearr_28768;
})();var statearr_28769_28781 = state_28765__$1;(statearr_28769_28781[(2)] = inst_28760);
(statearr_28769_28781[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28766 === (2)))
{var inst_28750 = (state_28765[(7)]);var inst_28750__$1 = (state_28765[(2)]);var state_28765__$1 = (function (){var statearr_28770 = state_28765;(statearr_28770[(7)] = inst_28750__$1);
return statearr_28770;
})();if(cljs.core.truth_(inst_28750__$1))
{var statearr_28771_28782 = state_28765__$1;(statearr_28771_28782[(1)] = (3));
} else
{var statearr_28772_28783 = state_28765__$1;(statearr_28772_28783[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28766 === (1)))
{var inst_28748 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28765__$1 = state_28765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28765__$1,(2),inst_28748);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28744,map__28744__$1,next_props,map__28745,map__28745__$1,next_table_state,next_table_data,map__28746,map__28746__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28747,map__28747__$1,fetch_data_fn,map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28744,map__28744__$1,next_props,map__28745,map__28745__$1,next_table_state,next_table_data,map__28746,map__28746__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28747,map__28747__$1,fetch_data_fn,map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28776 = [null,null,null,null,null,null,null,null,null];(statearr_28776[(0)] = state_machine__9111__auto__);
(statearr_28776[(1)] = (1));
return statearr_28776;
});
var state_machine__9111__auto____1 = (function (state_28765){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28765);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28777){if((e28777 instanceof Object))
{var ex__9114__auto__ = e28777;var statearr_28778_28784 = state_28765;(statearr_28778_28784[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28785 = state_28765;
state_28765 = G__28785;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28765){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28744,map__28744__$1,next_props,map__28745,map__28745__$1,next_table_state,next_table_data,map__28746,map__28746__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28747,map__28747__$1,fetch_data_fn,map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28779 = f__9126__auto__.call(null);(statearr_28779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28744,map__28744__$1,next_props,map__28745,map__28745__$1,next_table_state,next_table_data,map__28746,map__28746__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28747,map__28747__$1,fetch_data_fn,map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28739.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28739.prototype.om$core$IRender$render$arity$1 = ((function (map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28739.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28739.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28741){var self__ = this;
var _28741__$1 = this;return self__.meta28740;
});})(map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28741,meta28740__$1){var self__ = this;
var _28741__$1 = this;return (new clustermap.components.ranges_table.t28739(self__.map__28738,self__.index_type,self__.map__28736,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.p__28691,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__28737,meta28740__$1));
});})(map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28739 = ((function (map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28739(map__28738__$2,index_type__$1,map__28736__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,p__28691__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28737__$2,meta28740){return (new clustermap.components.ranges_table.t28739(map__28738__$2,index_type__$1,map__28736__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,p__28691__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28737__$2,meta28740));
});})(map__28736,map__28736__$1,props,map__28737,map__28737__$1,table_state,table_data,map__28738,map__28738__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28739(map__28738__$1,index_type,map__28736__$1,row_aggs,owner,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,p__28691,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28737__$1,null));
});
