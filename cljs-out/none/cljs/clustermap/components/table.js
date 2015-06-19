// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(controls,p__32421,p__32422){var map__32436 = p__32421;var map__32436__$1 = ((cljs.core.seq_QMARK_.call(null,map__32436))?cljs.core.apply.call(null,cljs.core.hash_map,map__32436):map__32436);var table_data = map__32436__$1;var current_sort_spec = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__32437 = p__32422;var map__32437__$1 = ((cljs.core.seq_QMARK_.call(null,map__32437))?cljs.core.apply.call(null,cljs.core.hash_map,map__32437):map__32437);var col = map__32437__$1;var render_fn = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__32438 = current_sort_spec__$1;var G__32438__$1 = (((G__32438 == null))?null:cljs.core.keys.call(null,G__32438));var G__32438__$2 = (((G__32438__$1 == null))?null:cljs.core.first.call(null,G__32438__$1));return G__32438__$2;
})();var current_sort_dir = (function (){var G__32439 = current_sort_spec__$1;var G__32439__$1 = (((G__32439 == null))?null:current_sort_key.call(null,G__32439));var G__32439__$2 = (((G__32439__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__32439__$1));return G__32439__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__32440 = cljs.core._EQ_;var expr__32441 = current_sort_dir;if(cljs.core.truth_(pred__32440.call(null,"asc",expr__32441)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__32436,map__32436__$1,table_data,current_sort_spec,map__32437,map__32437__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__32446 = cljs.core._EQ_;var expr__32447 = current_sort_dir;if(cljs.core.truth_(pred__32446.call(null,"asc",expr__32447)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__32446.call(null,"desc",expr__32447)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__11552__auto__ = current_sort_dir;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return new cljs.core.Keyword(null,"desc","desc",2093485764);
}
})()], null)], true, false));
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__32436,map__32436__$1,table_data,current_sort_spec,map__32437,map__32437__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs32445 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32445))?sablono.interpreter.attributes.call(null,attrs32445):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32445))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32445)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__32449,owner,opts){var map__32458 = p__32449;var map__32458__$1 = ((cljs.core.seq_QMARK_.call(null,map__32458))?cljs.core.apply.call(null,cljs.core.hash_map,map__32458):map__32458);var controls = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32459 = cljs.core.get.call(null,map__32458__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32459__$1 = ((cljs.core.seq_QMARK_.call(null,map__32459))?cljs.core.apply.call(null,cljs.core.hash_map,map__32459):map__32459);var table_data = map__32459__$1;var count = cljs.core.get.call(null,map__32459__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__32459__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32459__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t32460 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32460 = (function (owner,p__32449,paginate,table_data,controls,size,from,map__32459,count,opts,map__32458,meta32461){
this.owner = owner;
this.p__32449 = p__32449;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.map__32459 = map__32459;
this.count = count;
this.opts = opts;
this.map__32458 = map__32458;
this.meta32461 = meta32461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32460.cljs$lang$type = true;
clustermap.components.table.t32460.cljs$lang$ctorStr = "clustermap.components.table/t32460";
clustermap.components.table.t32460.cljs$lang$ctorPrWriter = ((function (map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.table/t32460");
});})(map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
;
clustermap.components.table.t32460.prototype.om$core$IRender$ = true;
clustermap.components.table.t32460.prototype.om$core$IRender$render$arity$1 = ((function (map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (this__15009__auto__){var self__ = this;
var this__15009__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs32463 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs32463))?sablono.interpreter.attributes.call(null,attrs32463):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32463))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32463)], null))));
})()," to ",(function (){var attrs32464 = (function (){var x__11866__auto__ = (self__.from + self__.size);var y__11867__auto__ = self__.count;return ((x__11866__auto__ < y__11867__auto__) ? x__11866__auto__ : y__11867__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs32464))?sablono.interpreter.attributes.call(null,attrs32464):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32464))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32464)], null))));
})()," of ",(function (){var attrs32465 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs32465))?sablono.interpreter.attributes.call(null,attrs32465):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32465))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32465)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__11859__auto__ = (0);var y__11860__auto__ = (self__.from - self__.size);return ((x__11859__auto__ > y__11860__auto__) ? x__11859__auto__ : y__11860__auto__);
})());
});})(this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__15009__auto____$1,map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
},"Last")));
});})(map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
;
clustermap.components.table.t32460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (_32462){var self__ = this;
var _32462__$1 = this;return self__.meta32461;
});})(map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
;
clustermap.components.table.t32460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function (_32462,meta32461__$1){var self__ = this;
var _32462__$1 = this;return (new clustermap.components.table.t32460(self__.owner,self__.p__32449,self__.paginate,self__.table_data,self__.controls,self__.size,self__.from,self__.map__32459,self__.count,self__.opts,self__.map__32458,meta32461__$1));
});})(map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t32460 = ((function (map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size){
return (function __GT_t32460(owner__$1,p__32449__$1,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,map__32459__$2,count__$1,opts__$1,map__32458__$2,meta32461){return (new clustermap.components.table.t32460(owner__$1,p__32449__$1,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,map__32459__$2,count__$1,opts__$1,map__32458__$2,meta32461));
});})(map__32458,map__32458__$1,controls,map__32459,map__32459__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t32460(owner,p__32449,paginate,table_data,controls,size,from,map__32459__$1,count,opts,map__32458__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__32466){var map__32479 = p__32466;var map__32479__$1 = ((cljs.core.seq_QMARK_.call(null,map__32479))?cljs.core.apply.call(null,cljs.core.hash_map,map__32479):map__32479);var record = cljs.core.get.call(null,map__32479__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__32479__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t32480 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32480 = (function (columns,record,map__32479,p__32466,render_table_row,meta32481){
this.columns = columns;
this.record = record;
this.map__32479 = map__32479;
this.p__32466 = p__32466;
this.render_table_row = render_table_row;
this.meta32481 = meta32481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32480.cljs$lang$type = true;
clustermap.components.table.t32480.cljs$lang$ctorStr = "clustermap.components.table/t32480";
clustermap.components.table.t32480.cljs$lang$ctorPrWriter = ((function (map__32479,map__32479__$1,record,columns){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.table/t32480");
});})(map__32479,map__32479__$1,record,columns))
;
clustermap.components.table.t32480.prototype.om$core$IRender$ = true;
clustermap.components.table.t32480.prototype.om$core$IRender$render$arity$1 = ((function (map__32479,map__32479__$1,record,columns){
return (function (this__15009__auto__){var self__ = this;
var this__15009__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__12290__auto__ = ((function (this__15009__auto____$1,map__32479,map__32479__$1,record,columns){
return (function iter__32483(s__32484){return (new cljs.core.LazySeq(null,((function (this__15009__auto____$1,map__32479,map__32479__$1,record,columns){
return (function (){var s__32484__$1 = s__32484;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32484__$1);if(temp__4126__auto__)
{var s__32484__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32484__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32484__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32486 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32485 = (0);while(true){
if((i__32485 < size__12289__auto__))
{var col = cljs.core._nth.call(null,c__12288__auto__,i__32485);cljs.core.chunk_append.call(null,b__32486,(function (){var map__32489 = col;var map__32489__$1 = ((cljs.core.seq_QMARK_.call(null,map__32489))?cljs.core.apply.call(null,cljs.core.hash_map,map__32489):map__32489);var render_fn = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11552__auto__ = render_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__32491 = (i__32485 + (1));
i__32485 = G__32491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32486),iter__32483.call(null,cljs.core.chunk_rest.call(null,s__32484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32486),null);
}
} else
{var col = cljs.core.first.call(null,s__32484__$2);return cljs.core.cons.call(null,(function (){var map__32490 = col;var map__32490__$1 = ((cljs.core.seq_QMARK_.call(null,map__32490))?cljs.core.apply.call(null,cljs.core.hash_map,map__32490):map__32490);var render_fn = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__32490__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11552__auto__ = render_fn;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__32483.call(null,cljs.core.rest.call(null,s__32484__$2)));
}
} else
{return null;
}
break;
}
});})(this__15009__auto____$1,map__32479,map__32479__$1,record,columns))
,null,null));
});})(this__15009__auto____$1,map__32479,map__32479__$1,record,columns))
;return iter__12290__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__32479,map__32479__$1,record,columns))
;
clustermap.components.table.t32480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32479,map__32479__$1,record,columns){
return (function (_32482){var self__ = this;
var _32482__$1 = this;return self__.meta32481;
});})(map__32479,map__32479__$1,record,columns))
;
clustermap.components.table.t32480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32479,map__32479__$1,record,columns){
return (function (_32482,meta32481__$1){var self__ = this;
var _32482__$1 = this;return (new clustermap.components.table.t32480(self__.columns,self__.record,self__.map__32479,self__.p__32466,self__.render_table_row,meta32481__$1));
});})(map__32479,map__32479__$1,record,columns))
;
clustermap.components.table.__GT_t32480 = ((function (map__32479,map__32479__$1,record,columns){
return (function __GT_t32480(columns__$1,record__$1,map__32479__$2,p__32466__$1,render_table_row__$1,meta32481){return (new clustermap.components.table.t32480(columns__$1,record__$1,map__32479__$2,p__32466__$1,render_table_row__$1,meta32481));
});})(map__32479,map__32479__$1,record,columns))
;
}
return (new clustermap.components.table.t32480(columns,record,map__32479__$1,p__32466,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__32492,owner,opts){var map__32508 = p__32492;var map__32508__$1 = ((cljs.core.seq_QMARK_.call(null,map__32508))?cljs.core.apply.call(null,cljs.core.hash_map,map__32508):map__32508);var props = map__32508__$1;var table_data = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32509 = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32509__$1 = ((cljs.core.seq_QMARK_.call(null,map__32509))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);var controls = map__32509__$1;var columns = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs32510 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32510))?sablono.interpreter.attributes.call(null,attrs32510):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32510))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs32511 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__12290__auto__ = ((function (attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view){
return (function iter__32515(s__32516){return (new cljs.core.LazySeq(null,((function (attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view){
return (function (){var s__32516__$1 = s__32516;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32516__$1);if(temp__4126__auto__)
{var s__32516__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32516__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32516__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32518 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32517 = (0);while(true){
if((i__32517 < size__12289__auto__))
{var col = cljs.core._nth.call(null,c__12288__auto__,i__32517);cljs.core.chunk_append.call(null,b__32518,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__32523 = (i__32517 + (1));
i__32517 = G__32523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32518),iter__32515.call(null,cljs.core.chunk_rest.call(null,s__32516__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32518),null);
}
} else
{var col = cljs.core.first.call(null,s__32516__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__32515.call(null,cljs.core.rest.call(null,s__32516__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view))
;return iter__12290__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32511))?sablono.interpreter.attributes.call(null,attrs32511):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32511))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32511)], null))));
})(),(function (){var attrs32512 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32512))?sablono.interpreter.attributes.call(null,attrs32512):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32512))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32512)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32510),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs32513 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__12290__auto__ = ((function (attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view){
return (function iter__32519(s__32520){return (new cljs.core.LazySeq(null,((function (attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view){
return (function (){var s__32520__$1 = s__32520;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32520__$1);if(temp__4126__auto__)
{var s__32520__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32520__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32520__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32522 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32521 = (0);while(true){
if((i__32521 < size__12289__auto__))
{var col = cljs.core._nth.call(null,c__12288__auto__,i__32521);cljs.core.chunk_append.call(null,b__32522,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__32524 = (i__32521 + (1));
i__32521 = G__32524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32522),iter__32519.call(null,cljs.core.chunk_rest.call(null,s__32520__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32522),null);
}
} else
{var col = cljs.core.first.call(null,s__32520__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__32519.call(null,cljs.core.rest.call(null,s__32520__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view))
;return iter__12290__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32513))?sablono.interpreter.attributes.call(null,attrs32513):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32513))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32513)], null))));
})(),(function (){var attrs32514 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32510,map__32508,map__32508__$1,props,table_data,map__32509,map__32509__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32514))?sablono.interpreter.attributes.call(null,attrs32514):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32514))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32514)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__32525,owner){var map__32564 = p__32525;var map__32564__$1 = ((cljs.core.seq_QMARK_.call(null,map__32564))?cljs.core.apply.call(null,cljs.core.hash_map,map__32564):map__32564);var props = map__32564__$1;var map__32565 = cljs.core.get.call(null,map__32564__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32565__$1 = ((cljs.core.seq_QMARK_.call(null,map__32565))?cljs.core.apply.call(null,cljs.core.hash_map,map__32565):map__32565);var table_state = map__32565__$1;var table_data = cljs.core.get.call(null,map__32565__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32566 = cljs.core.get.call(null,map__32565__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32566__$1 = ((cljs.core.seq_QMARK_.call(null,map__32566))?cljs.core.apply.call(null,cljs.core.hash_map,map__32566):map__32566);var controls = map__32566__$1;var index = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__32564__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t32567 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32567 = (function (sort_spec,table_component,owner,p__32525,props,map__32564,map__32566,table_data,index,filter_spec,columns,table_state,map__32565,controls,size,from,meta32568){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.p__32525 = p__32525;
this.props = props;
this.map__32564 = map__32564;
this.map__32566 = map__32566;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__32565 = map__32565;
this.controls = controls;
this.size = size;
this.from = from;
this.meta32568 = meta32568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32567.cljs$lang$type = true;
clustermap.components.table.t32567.cljs$lang$ctorStr = "clustermap.components.table/t32567";
clustermap.components.table.t32567.cljs$lang$ctorPrWriter = ((function (map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.table/t32567");
});})(map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t32567.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t32567.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__32570,p__32571){var self__ = this;
var map__32572 = p__32570;var map__32572__$1 = ((cljs.core.seq_QMARK_.call(null,map__32572))?cljs.core.apply.call(null,cljs.core.hash_map,map__32572):map__32572);var next_props = map__32572__$1;var map__32573 = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32573__$1 = ((cljs.core.seq_QMARK_.call(null,map__32573))?cljs.core.apply.call(null,cljs.core.hash_map,map__32573):map__32573);var next_table_state = map__32573__$1;var next_table_data = cljs.core.get.call(null,map__32573__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32574 = cljs.core.get.call(null,map__32573__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32574__$1 = ((cljs.core.seq_QMARK_.call(null,map__32574))?cljs.core.apply.call(null,cljs.core.hash_map,map__32574):map__32574);var next_controls = map__32574__$1;var next_index = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32575 = p__32571;var map__32575__$1 = ((cljs.core.seq_QMARK_.call(null,map__32575))?cljs.core.apply.call(null,cljs.core.hash_map,map__32575):map__32575);var fetch_table_data_fn = cljs.core.get.call(null,map__32575__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,map__32572,map__32572__$1,next_props,map__32573,map__32573__$1,next_table_state,next_table_data,map__32574,map__32574__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__32575,map__32575__$1,fetch_table_data_fn,map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,map__32572,map__32572__$1,next_props,map__32573,map__32573__$1,next_table_state,next_table_data,map__32574,map__32574__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__32575,map__32575__$1,fetch_table_data_fn,map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_32588){var state_val_32589 = (state_32588[(1)]);if((state_val_32589 === (5)))
{var inst_32586 = (state_32588[(2)]);var state_32588__$1 = state_32588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32588__$1,inst_32586);
} else
{if((state_val_32589 === (4)))
{var state_32588__$1 = state_32588;var statearr_32590_32602 = state_32588__$1;(statearr_32590_32602[(2)] = null);
(statearr_32590_32602[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32589 === (3)))
{var inst_32578 = (state_32588[(7)]);var inst_32580 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32581 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_32582 = (new cljs.core.PersistentVector(null,1,(5),inst_32580,inst_32581,null));var inst_32583 = om.core.update_BANG_.call(null,self__.table_state,inst_32582,inst_32578);var state_32588__$1 = state_32588;var statearr_32591_32603 = state_32588__$1;(statearr_32591_32603[(2)] = inst_32583);
(statearr_32591_32603[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32589 === (2)))
{var inst_32578 = (state_32588[(7)]);var inst_32578__$1 = (state_32588[(2)]);var state_32588__$1 = (function (){var statearr_32592 = state_32588;(statearr_32592[(7)] = inst_32578__$1);
return statearr_32592;
})();if(cljs.core.truth_(inst_32578__$1))
{var statearr_32593_32604 = state_32588__$1;(statearr_32593_32604[(1)] = (3));
} else
{var statearr_32594_32605 = state_32588__$1;(statearr_32594_32605[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32589 === (1)))
{var inst_32576 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_32588__$1 = state_32588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32588__$1,(2),inst_32576);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,___$1,map__32572,map__32572__$1,next_props,map__32573,map__32573__$1,next_table_state,next_table_data,map__32574,map__32574__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__32575,map__32575__$1,fetch_table_data_fn,map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,map__32572,map__32572__$1,next_props,map__32573,map__32573__$1,next_table_state,next_table_data,map__32574,map__32574__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__32575,map__32575__$1,fetch_table_data_fn,map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_32598 = [null,null,null,null,null,null,null,null];(statearr_32598[(0)] = state_machine__16719__auto__);
(statearr_32598[(1)] = (1));
return statearr_32598;
});
var state_machine__16719__auto____1 = (function (state_32588){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_32588);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e32599){if((e32599 instanceof Object))
{var ex__16722__auto__ = e32599;var statearr_32600_32606 = state_32588;(statearr_32600_32606[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32588);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32607 = state_32588;
state_32588 = G__32607;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_32588){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_32588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,map__32572,map__32572__$1,next_props,map__32573,map__32573__$1,next_table_state,next_table_data,map__32574,map__32574__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__32575,map__32575__$1,fetch_table_data_fn,map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__16735__auto__ = (function (){var statearr_32601 = f__16734__auto__.call(null);(statearr_32601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_32601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,map__32572,map__32572__$1,next_props,map__32573,map__32573__$1,next_table_state,next_table_data,map__32574,map__32574__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__32575,map__32575__$1,fetch_table_data_fn,map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__16733__auto__;
} else
{return null;
}
});})(map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t32567.prototype.om$core$IRender$ = true;
clustermap.components.table.t32567.prototype.om$core$IRender$render$arity$1 = ((function (map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t32567.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t32567.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t32567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_32569){var self__ = this;
var _32569__$1 = this;return self__.meta32568;
});})(map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t32567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_32569,meta32568__$1){var self__ = this;
var _32569__$1 = this;return (new clustermap.components.table.t32567(self__.sort_spec,self__.table_component,self__.owner,self__.p__32525,self__.props,self__.map__32564,self__.map__32566,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.map__32565,self__.controls,self__.size,self__.from,meta32568__$1));
});})(map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t32567 = ((function (map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t32567(sort_spec__$1,table_component__$1,owner__$1,p__32525__$1,props__$1,map__32564__$2,map__32566__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__32565__$2,controls__$1,size__$1,from__$1,meta32568){return (new clustermap.components.table.t32567(sort_spec__$1,table_component__$1,owner__$1,p__32525__$1,props__$1,map__32564__$2,map__32566__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__32565__$2,controls__$1,size__$1,from__$1,meta32568));
});})(map__32564,map__32564__$1,props,map__32565,map__32565__$1,table_state,table_data,map__32566,map__32566__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t32567(sort_spec,table_component,owner,p__32525,props,map__32564__$1,map__32566__$1,table_data,index,filter_spec,columns,table_state,map__32565__$1,controls,size,from,null));
});

//# sourceMappingURL=table.js.map