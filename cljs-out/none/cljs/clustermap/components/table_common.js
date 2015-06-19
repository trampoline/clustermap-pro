// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.table_common');
goog.require('cljs.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* return v if it's already sequential, otherwise wrap it in a vector
*/
clustermap.components.table_common.make_sequential = (function make_sequential(v){if((v == null))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return v;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
clustermap.components.table_common.es_sort_dir = (function es_sort_dir(dir){if(cljs.core._EQ_.call(null,"d",(function (){var G__32609 = dir;var G__32609__$1 = (((G__32609 == null))?null:cljs.core.name.call(null,G__32609));var G__32609__$2 = (((G__32609__$1 == null))?null:cljs.core.first.call(null,G__32609__$1));return G__32609__$2;
})()))
{return new cljs.core.Keyword(null,"desc","desc",2093485764);
} else
{return new cljs.core.Keyword(null,"asc","asc",356854569);
}
});
/**
* turn an ES sort-spec into a seq of [key order] pairs
*/
clustermap.components.table_common.parse_sort_spec = (function parse_sort_spec(sort_spec){var sort_spec__$1 = clustermap.components.table_common.make_sequential.call(null,sort_spec);var iter__12290__auto__ = ((function (sort_spec__$1){
return (function iter__32626(s__32627){return (new cljs.core.LazySeq(null,((function (sort_spec__$1){
return (function (){var s__32627__$1 = s__32627;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32627__$1);if(temp__4126__auto__)
{var s__32627__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32627__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32627__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32629 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32628 = (0);while(true){
if((i__32628 < size__12289__auto__))
{var order_spec = cljs.core._nth.call(null,c__12288__auto__,i__32628);cljs.core.chunk_append.call(null,b__32629,((cljs.core.map_QMARK_.call(null,order_spec))?(function (){var vec__32636 = (function (){var G__32637 = order_spec;var G__32637__$1 = (((G__32637 == null))?null:cljs.core.seq.call(null,G__32637));var G__32637__$2 = (((G__32637__$1 == null))?null:cljs.core.first.call(null,G__32637__$1));return G__32637__$2;
})();var key = cljs.core.nth.call(null,vec__32636,(0),null);var order_dir = cljs.core.nth.call(null,vec__32636,(1),null);if(cljs.core.map_QMARK_.call(null,order_dir))
{var vec__32638 = cljs.core.first.call(null,cljs.core.seq.call(null,order_dir));var _ = cljs.core.nth.call(null,vec__32638,(0),null);var order_dir__$1 = cljs.core.nth.call(null,vec__32638,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,clustermap.components.table_common.es_sort_dir.call(null,order_dir__$1)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,clustermap.components.table_common.es_sort_dir.call(null,order_dir)], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,order_spec),new cljs.core.Keyword(null,"asc","asc",356854569)], null)));
{
var G__32642 = (i__32628 + (1));
i__32628 = G__32642;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32629),iter__32626.call(null,cljs.core.chunk_rest.call(null,s__32627__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32629),null);
}
} else
{var order_spec = cljs.core.first.call(null,s__32627__$2);return cljs.core.cons.call(null,((cljs.core.map_QMARK_.call(null,order_spec))?(function (){var vec__32639 = (function (){var G__32640 = order_spec;var G__32640__$1 = (((G__32640 == null))?null:cljs.core.seq.call(null,G__32640));var G__32640__$2 = (((G__32640__$1 == null))?null:cljs.core.first.call(null,G__32640__$1));return G__32640__$2;
})();var key = cljs.core.nth.call(null,vec__32639,(0),null);var order_dir = cljs.core.nth.call(null,vec__32639,(1),null);if(cljs.core.map_QMARK_.call(null,order_dir))
{var vec__32641 = cljs.core.first.call(null,cljs.core.seq.call(null,order_dir));var _ = cljs.core.nth.call(null,vec__32641,(0),null);var order_dir__$1 = cljs.core.nth.call(null,vec__32641,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,clustermap.components.table_common.es_sort_dir.call(null,order_dir__$1)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,clustermap.components.table_common.es_sort_dir.call(null,order_dir)], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,order_spec),new cljs.core.Keyword(null,"asc","asc",356854569)], null)),iter__32626.call(null,cljs.core.rest.call(null,s__32627__$2)));
}
} else
{return null;
}
break;
}
});})(sort_spec__$1))
,null,null));
});})(sort_spec__$1))
;return iter__12290__auto__.call(null,sort_spec__$1);
});
/**
* generate a table-ordering link for table-headers
* - controls : cursor with :sort-spec member containing sort-spec
* - current-sort-spec : the current sort-spec
* - col-key : the column key
* - col-label : the column name
*/
clustermap.components.table_common.order_col = (function order_col(controls,current_sort_spec,col_key,col_label){var vec__32648 = (function (){var G__32649 = current_sort_spec;var G__32649__$1 = (((G__32649 == null))?null:clustermap.components.table_common.parse_sort_spec.call(null,G__32649));var G__32649__$2 = (((G__32649__$1 == null))?null:cljs.core.first.call(null,G__32649__$1));return G__32649__$2;
})();var current_sort_key = cljs.core.nth.call(null,vec__32648,(0),null);var current_sort_dir = cljs.core.nth.call(null,vec__32648,(1),null);var content = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_label,(cljs.core.truth_((function (){var and__11540__auto__ = col_key;if(cljs.core.truth_(and__11540__auto__))
{return cljs.core._EQ_.call(null,current_sort_key,col_key);
} else
{return and__11540__auto__;
}
})())?(function (){var pred__32650 = cljs.core._EQ_;var expr__32651 = current_sort_dir;if(cljs.core.truth_(pred__32650.call(null,new cljs.core.Keyword(null,"asc","asc",356854569),expr__32651)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})():null)], null);if(cljs.core.truth_(controls))
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__32648,current_sort_key,current_sort_dir,content){
return (function (e){e.preventDefault();
if((cljs.core._EQ_.call(null,col_key,current_sort_key)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"asc","asc",356854569),current_sort_dir)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if((cljs.core._EQ_.call(null,col_key,current_sort_key)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"desc","desc",2093485764),current_sort_dir)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));

}
}
});})(vec__32648,current_sort_key,current_sort_dir,content))
], null)], null),content);
} else
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),content);
}
});
/**
* given a possibly nested seq of column descriptions,
* extract the column value descriptors in the correct order.
* each value descriptor is a map {:key col-key :name col-name :render-fn render-fn}
*/
clustermap.components.table_common.column_value_descriptors = (function column_value_descriptors(columns){return cljs.core.reduce.call(null,(function (cks,col){if(cljs.core.sequential_QMARK_.call(null,col))
{return cljs.core.into.call(null,cks,column_value_descriptors.call(null,cljs.core.rest.call(null,col)));
} else
{return cljs.core.into.call(null,cks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null));
}
}),cljs.core.PersistentVector.EMPTY,columns);
});
/**
* extract one row of column headers
* @param {...*} var_args
*/
clustermap.components.table_common.extract_column_headers_STAR_ = (function() { 
var extract_column_headers_STAR___delegate = function (columns,p__32653){var vec__32658 = p__32653;var map__32659 = cljs.core.nth.call(null,vec__32658,(0),null);var map__32659__$1 = ((cljs.core.seq_QMARK_.call(null,map__32659))?cljs.core.apply.call(null,cljs.core.hash_map,map__32659):map__32659);var insert_blank_col = cljs.core.get.call(null,map__32659__$1,new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847));var current_sort_spec = cljs.core.get.call(null,map__32659__$1,new cljs.core.Keyword(null,"current-sort-spec","current-sort-spec",302606848));var controls = cljs.core.get.call(null,map__32659__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var group_row = cljs.core.some.call(null,cljs.core.sequential_QMARK_,columns);return cljs.core.map.call(null,((function (group_row,vec__32658,map__32659,map__32659__$1,insert_blank_col,current_sort_spec,controls){
return (function (p__32660){var vec__32661 = p__32660;var ci = cljs.core.nth.call(null,vec__32661,(0),null);var col = cljs.core.nth.call(null,vec__32661,(1),null);if(cljs.core.sequential_QMARK_.call(null,col))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ci)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col)),new cljs.core.Keyword(null,"colSpan","colSpan",872137394),cljs.core.count.call(null,clustermap.components.table_common.column_value_descriptors.call(null,cljs.core.rest.call(null,col)))], null),cljs.core.first.call(null,col)], null);
} else
{if(cljs.core.truth_(group_row))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ci)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ci)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),clustermap.components.table_common.order_col.call(null,controls,current_sort_spec,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col))], null);
}
}
});})(group_row,vec__32658,map__32659,map__32659__$1,insert_blank_col,current_sort_spec,controls))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.truth_(insert_blank_col)?(2):(1))),columns));
};
var extract_column_headers_STAR_ = function (columns,var_args){
var p__32653 = null;if (arguments.length > 1) {
  p__32653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return extract_column_headers_STAR___delegate.call(this,columns,p__32653);};
extract_column_headers_STAR_.cljs$lang$maxFixedArity = 1;
extract_column_headers_STAR_.cljs$lang$applyTo = (function (arglist__32662){
var columns = cljs.core.first(arglist__32662);
var p__32653 = cljs.core.rest(arglist__32662);
return extract_column_headers_STAR___delegate(columns,p__32653);
});
extract_column_headers_STAR_.cljs$core$IFn$_invoke$arity$variadic = extract_column_headers_STAR___delegate;
return extract_column_headers_STAR_;
})()
;
/**
* extract the next row of column descriptions, if there are any
*/
clustermap.components.table_common.extract_sub_columns_STAR_ = (function extract_sub_columns_STAR_(columns){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.sequential_QMARK_,columns)))
{return cljs.core.mapcat.call(null,(function (col){if(cljs.core.sequential_QMARK_.call(null,col))
{return cljs.core.rest.call(null,col);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null);
}
}),columns);
} else
{return null;
}
});
/**
* lazy seq of column header rows
* @param {...*} var_args
*/
clustermap.components.table_common.column_header_row_seq_STAR_ = (function() { 
var column_header_row_seq_STAR___delegate = function (columns,p__32663){var vec__32665 = p__32663;var opts = cljs.core.nth.call(null,vec__32665,(0),null);if(cljs.core.truth_(cljs.core.not_empty.call(null,columns)))
{return (new cljs.core.LazySeq(null,((function (vec__32665,opts){
return (function (){return cljs.core.cons.call(null,clustermap.components.table_common.extract_column_headers_STAR_.call(null,columns,opts),column_header_row_seq_STAR_.call(null,clustermap.components.table_common.extract_sub_columns_STAR_.call(null,columns),opts));
});})(vec__32665,opts))
,null,null));
} else
{return null;
}
};
var column_header_row_seq_STAR_ = function (columns,var_args){
var p__32663 = null;if (arguments.length > 1) {
  p__32663 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return column_header_row_seq_STAR___delegate.call(this,columns,p__32663);};
column_header_row_seq_STAR_.cljs$lang$maxFixedArity = 1;
column_header_row_seq_STAR_.cljs$lang$applyTo = (function (arglist__32666){
var columns = cljs.core.first(arglist__32666);
var p__32663 = cljs.core.rest(arglist__32666);
return column_header_row_seq_STAR___delegate(columns,p__32663);
});
column_header_row_seq_STAR_.cljs$core$IFn$_invoke$arity$variadic = column_header_row_seq_STAR___delegate;
return column_header_row_seq_STAR_;
})()
;
/**
* given a possibly nested seq of column descriptions extract table header rows suitable
* for direct inclusion in a <thead> element
* - columns : the column descriptions
* - controls : the table controls cursor
* - current-sort-spec : the current sort spec
* @param {...*} var_args
*/
clustermap.components.table_common.column_header_rows = (function() { 
var column_header_rows__delegate = function (columns,p__32667){var vec__32672 = p__32667;var map__32673 = cljs.core.nth.call(null,vec__32672,(0),null);var map__32673__$1 = ((cljs.core.seq_QMARK_.call(null,map__32673))?cljs.core.apply.call(null,cljs.core.hash_map,map__32673):map__32673);var opts = map__32673__$1;var insert_blank_col = cljs.core.get.call(null,map__32673__$1,new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847));var current_sort_spec = cljs.core.get.call(null,map__32673__$1,new cljs.core.Keyword(null,"current-sort-spec","current-sort-spec",302606848));var controls = cljs.core.get.call(null,map__32673__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));return cljs.core.map.call(null,((function (vec__32672,map__32673,map__32673__$1,opts,insert_blank_col,current_sort_spec,controls){
return (function (p__32674){var vec__32675 = p__32674;var ri = cljs.core.nth.call(null,vec__32675,(0),null);var r = cljs.core.nth.call(null,vec__32675,(1),null);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ri))], null),(cljs.core.truth_(insert_blank_col)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-1"], null)], null):null)], null),r);
});})(vec__32672,map__32673,map__32673__$1,opts,insert_blank_col,current_sort_spec,controls))
,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),clustermap.components.table_common.column_header_row_seq_STAR_.call(null,columns,opts)));
};
var column_header_rows = function (columns,var_args){
var p__32667 = null;if (arguments.length > 1) {
  p__32667 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return column_header_rows__delegate.call(this,columns,p__32667);};
column_header_rows.cljs$lang$maxFixedArity = 1;
column_header_rows.cljs$lang$applyTo = (function (arglist__32676){
var columns = cljs.core.first(arglist__32676);
var p__32667 = cljs.core.rest(arglist__32676);
return column_header_rows__delegate(columns,p__32667);
});
column_header_rows.cljs$core$IFn$_invoke$arity$variadic = column_header_rows__delegate;
return column_header_rows;
})()
;

//# sourceMappingURL=table_common.js.map