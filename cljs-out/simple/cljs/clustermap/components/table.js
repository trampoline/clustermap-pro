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
clustermap.components.table.order_col = (function order_col(controls,p__28317,p__28318){var map__28332 = p__28317;var map__28332__$1 = ((cljs.core.seq_QMARK_.call(null,map__28332))?cljs.core.apply.call(null,cljs.core.hash_map,map__28332):map__28332);var table_data = map__28332__$1;var current_sort_spec = cljs.core.get.call(null,map__28332__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28333 = p__28318;var map__28333__$1 = ((cljs.core.seq_QMARK_.call(null,map__28333))?cljs.core.apply.call(null,cljs.core.hash_map,map__28333):map__28333);var col = map__28333__$1;var render_fn = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28334 = current_sort_spec__$1;var G__28334__$1 = (((G__28334 == null))?null:cljs.core.keys.call(null,G__28334));var G__28334__$2 = (((G__28334__$1 == null))?null:cljs.core.first.call(null,G__28334__$1));return G__28334__$2;
})();var current_sort_dir = (function (){var G__28335 = current_sort_spec__$1;var G__28335__$1 = (((G__28335 == null))?null:current_sort_key.call(null,G__28335));var G__28335__$2 = (((G__28335__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28335__$1));return G__28335__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28336 = cljs.core._EQ_;var expr__28337 = current_sort_dir;if(cljs.core.truth_(pred__28336.call(null,"asc",expr__28337)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28332,map__28332__$1,table_data,current_sort_spec,map__28333,map__28333__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28342 = cljs.core._EQ_;var expr__28343 = current_sort_dir;if(cljs.core.truth_(pred__28342.call(null,"asc",expr__28343)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28342.call(null,"desc",expr__28343)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__3639__auto__ = current_sort_dir;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"desc","desc",2093485764);
}
})()], null)], true, false));
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28332,map__28332__$1,table_data,current_sort_spec,map__28333,map__28333__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28341 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28341))?sablono.interpreter.attributes.call(null,attrs28341):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28341))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28341)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28345,owner,opts){var map__28354 = p__28345;var map__28354__$1 = ((cljs.core.seq_QMARK_.call(null,map__28354))?cljs.core.apply.call(null,cljs.core.hash_map,map__28354):map__28354);var controls = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28355 = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28355__$1 = ((cljs.core.seq_QMARK_.call(null,map__28355))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355):map__28355);var table_data = map__28355__$1;var count = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28356 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28356 = (function (owner,paginate,table_data,map__28355,controls,map__28354,size,p__28345,from,count,opts,meta28357){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__28355 = map__28355;
this.controls = controls;
this.map__28354 = map__28354;
this.size = size;
this.p__28345 = p__28345;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28357 = meta28357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28356.cljs$lang$type = true;
clustermap.components.table.t28356.cljs$lang$ctorStr = "clustermap.components.table/t28356";
clustermap.components.table.t28356.cljs$lang$ctorPrWriter = ((function (map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28356");
});})(map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
;
clustermap.components.table.t28356.prototype.om$core$IRender$ = true;
clustermap.components.table.t28356.prototype.om$core$IRender$render$arity$1 = ((function (map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28359 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28359))?sablono.interpreter.attributes.call(null,attrs28359):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28359))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28359)], null))));
})()," to ",(function (){var attrs28360 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28360))?sablono.interpreter.attributes.call(null,attrs28360):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28360))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28360)], null))));
})()," of ",(function (){var attrs28361 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28361))?sablono.interpreter.attributes.call(null,attrs28361):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28361)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
},"Last")));
});})(map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
;
clustermap.components.table.t28356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (_28358){var self__ = this;
var _28358__$1 = this;return self__.meta28357;
});})(map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
;
clustermap.components.table.t28356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function (_28358,meta28357__$1){var self__ = this;
var _28358__$1 = this;return (new clustermap.components.table.t28356(self__.owner,self__.paginate,self__.table_data,self__.map__28355,self__.controls,self__.map__28354,self__.size,self__.p__28345,self__.from,self__.count,self__.opts,meta28357__$1));
});})(map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28356 = ((function (map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size){
return (function __GT_t28356(owner__$1,paginate__$1,table_data__$1,map__28355__$2,controls__$1,map__28354__$2,size__$1,p__28345__$1,from__$1,count__$1,opts__$1,meta28357){return (new clustermap.components.table.t28356(owner__$1,paginate__$1,table_data__$1,map__28355__$2,controls__$1,map__28354__$2,size__$1,p__28345__$1,from__$1,count__$1,opts__$1,meta28357));
});})(map__28354,map__28354__$1,controls,map__28355,map__28355__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28356(owner,paginate,table_data,map__28355__$1,controls,map__28354__$1,size,p__28345,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28362){var map__28375 = p__28362;var map__28375__$1 = ((cljs.core.seq_QMARK_.call(null,map__28375))?cljs.core.apply.call(null,cljs.core.hash_map,map__28375):map__28375);var record = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28376 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28376 = (function (columns,record,map__28375,p__28362,render_table_row,meta28377){
this.columns = columns;
this.record = record;
this.map__28375 = map__28375;
this.p__28362 = p__28362;
this.render_table_row = render_table_row;
this.meta28377 = meta28377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28376.cljs$lang$type = true;
clustermap.components.table.t28376.cljs$lang$ctorStr = "clustermap.components.table/t28376";
clustermap.components.table.t28376.cljs$lang$ctorPrWriter = ((function (map__28375,map__28375__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28376");
});})(map__28375,map__28375__$1,record,columns))
;
clustermap.components.table.t28376.prototype.om$core$IRender$ = true;
clustermap.components.table.t28376.prototype.om$core$IRender$render$arity$1 = ((function (map__28375,map__28375__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28375,map__28375__$1,record,columns){
return (function iter__28379(s__28380){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28375,map__28375__$1,record,columns){
return (function (){var s__28380__$1 = s__28380;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28380__$1);if(temp__4126__auto__)
{var s__28380__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28380__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28380__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28382 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28381 = (0);while(true){
if((i__28381 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28381);cljs.core.chunk_append.call(null,b__28382,(function (){var map__28385 = col;var map__28385__$1 = ((cljs.core.seq_QMARK_.call(null,map__28385))?cljs.core.apply.call(null,cljs.core.hash_map,map__28385):map__28385);var render_fn = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28387 = (i__28381 + (1));
i__28381 = G__28387;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28382),iter__28379.call(null,cljs.core.chunk_rest.call(null,s__28380__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28382),null);
}
} else
{var col = cljs.core.first.call(null,s__28380__$2);return cljs.core.cons.call(null,(function (){var map__28386 = col;var map__28386__$1 = ((cljs.core.seq_QMARK_.call(null,map__28386))?cljs.core.apply.call(null,cljs.core.hash_map,map__28386):map__28386);var render_fn = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28379.call(null,cljs.core.rest.call(null,s__28380__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28375,map__28375__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28375,map__28375__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28375,map__28375__$1,record,columns))
;
clustermap.components.table.t28376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28375,map__28375__$1,record,columns){
return (function (_28378){var self__ = this;
var _28378__$1 = this;return self__.meta28377;
});})(map__28375,map__28375__$1,record,columns))
;
clustermap.components.table.t28376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28375,map__28375__$1,record,columns){
return (function (_28378,meta28377__$1){var self__ = this;
var _28378__$1 = this;return (new clustermap.components.table.t28376(self__.columns,self__.record,self__.map__28375,self__.p__28362,self__.render_table_row,meta28377__$1));
});})(map__28375,map__28375__$1,record,columns))
;
clustermap.components.table.__GT_t28376 = ((function (map__28375,map__28375__$1,record,columns){
return (function __GT_t28376(columns__$1,record__$1,map__28375__$2,p__28362__$1,render_table_row__$1,meta28377){return (new clustermap.components.table.t28376(columns__$1,record__$1,map__28375__$2,p__28362__$1,render_table_row__$1,meta28377));
});})(map__28375,map__28375__$1,record,columns))
;
}
return (new clustermap.components.table.t28376(columns,record,map__28375__$1,p__28362,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28388,owner,opts){var map__28404 = p__28388;var map__28404__$1 = ((cljs.core.seq_QMARK_.call(null,map__28404))?cljs.core.apply.call(null,cljs.core.hash_map,map__28404):map__28404);var props = map__28404__$1;var table_data = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28405 = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28405__$1 = ((cljs.core.seq_QMARK_.call(null,map__28405))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);var controls = map__28405__$1;var columns = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28406 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28406))?sablono.interpreter.attributes.call(null,attrs28406):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28406))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28407 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view){
return (function iter__28411(s__28412){return (new cljs.core.LazySeq(null,((function (attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view){
return (function (){var s__28412__$1 = s__28412;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28412__$1);if(temp__4126__auto__)
{var s__28412__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28412__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28412__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28414 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28413 = (0);while(true){
if((i__28413 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28413);cljs.core.chunk_append.call(null,b__28414,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28419 = (i__28413 + (1));
i__28413 = G__28419;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28414),iter__28411.call(null,cljs.core.chunk_rest.call(null,s__28412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28414),null);
}
} else
{var col = cljs.core.first.call(null,s__28412__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28411.call(null,cljs.core.rest.call(null,s__28412__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28407))?sablono.interpreter.attributes.call(null,attrs28407):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28407))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28407)], null))));
})(),(function (){var attrs28408 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28408))?sablono.interpreter.attributes.call(null,attrs28408):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28408))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28408)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28406),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28409 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view){
return (function iter__28415(s__28416){return (new cljs.core.LazySeq(null,((function (attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view){
return (function (){var s__28416__$1 = s__28416;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28416__$1);if(temp__4126__auto__)
{var s__28416__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28416__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28416__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28418 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28417 = (0);while(true){
if((i__28417 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28417);cljs.core.chunk_append.call(null,b__28418,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28420 = (i__28417 + (1));
i__28417 = G__28420;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28418),iter__28415.call(null,cljs.core.chunk_rest.call(null,s__28416__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28418),null);
}
} else
{var col = cljs.core.first.call(null,s__28416__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28415.call(null,cljs.core.rest.call(null,s__28416__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28409))?sablono.interpreter.attributes.call(null,attrs28409):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28409))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28409)], null))));
})(),(function (){var attrs28410 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28406,map__28404,map__28404__$1,props,table_data,map__28405,map__28405__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28410))?sablono.interpreter.attributes.call(null,attrs28410):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28410))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28410)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28421,owner){var map__28460 = p__28421;var map__28460__$1 = ((cljs.core.seq_QMARK_.call(null,map__28460))?cljs.core.apply.call(null,cljs.core.hash_map,map__28460):map__28460);var props = map__28460__$1;var map__28461 = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28461__$1 = ((cljs.core.seq_QMARK_.call(null,map__28461))?cljs.core.apply.call(null,cljs.core.hash_map,map__28461):map__28461);var table_state = map__28461__$1;var table_data = cljs.core.get.call(null,map__28461__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28462 = cljs.core.get.call(null,map__28461__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28462__$1 = ((cljs.core.seq_QMARK_.call(null,map__28462))?cljs.core.apply.call(null,cljs.core.hash_map,map__28462):map__28462);var controls = map__28462__$1;var index = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28463 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28463 = (function (sort_spec,table_component,owner,props,map__28460,table_data,index,filter_spec,columns,map__28462,table_state,controls,map__28461,p__28421,size,from,meta28464){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__28460 = map__28460;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__28462 = map__28462;
this.table_state = table_state;
this.controls = controls;
this.map__28461 = map__28461;
this.p__28421 = p__28421;
this.size = size;
this.from = from;
this.meta28464 = meta28464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28463.cljs$lang$type = true;
clustermap.components.table.t28463.cljs$lang$ctorStr = "clustermap.components.table/t28463";
clustermap.components.table.t28463.cljs$lang$ctorPrWriter = ((function (map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28463");
});})(map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28463.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28463.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28466,p__28467){var self__ = this;
var map__28468 = p__28466;var map__28468__$1 = ((cljs.core.seq_QMARK_.call(null,map__28468))?cljs.core.apply.call(null,cljs.core.hash_map,map__28468):map__28468);var next_props = map__28468__$1;var map__28469 = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28469__$1 = ((cljs.core.seq_QMARK_.call(null,map__28469))?cljs.core.apply.call(null,cljs.core.hash_map,map__28469):map__28469);var next_table_state = map__28469__$1;var next_table_data = cljs.core.get.call(null,map__28469__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28470 = cljs.core.get.call(null,map__28469__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28470__$1 = ((cljs.core.seq_QMARK_.call(null,map__28470))?cljs.core.apply.call(null,cljs.core.hash_map,map__28470):map__28470);var next_controls = map__28470__$1;var next_index = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28471 = p__28467;var map__28471__$1 = ((cljs.core.seq_QMARK_.call(null,map__28471))?cljs.core.apply.call(null,cljs.core.hash_map,map__28471):map__28471);var fetch_table_data_fn = cljs.core.get.call(null,map__28471__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28468,map__28468__$1,next_props,map__28469,map__28469__$1,next_table_state,next_table_data,map__28470,map__28470__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28471,map__28471__$1,fetch_table_data_fn,map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28468,map__28468__$1,next_props,map__28469,map__28469__$1,next_table_state,next_table_data,map__28470,map__28470__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28471,map__28471__$1,fetch_table_data_fn,map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28484){var state_val_28485 = (state_28484[(1)]);if((state_val_28485 === (5)))
{var inst_28482 = (state_28484[(2)]);var state_28484__$1 = state_28484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28484__$1,inst_28482);
} else
{if((state_val_28485 === (4)))
{var state_28484__$1 = state_28484;var statearr_28486_28498 = state_28484__$1;(statearr_28486_28498[(2)] = null);
(statearr_28486_28498[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28485 === (3)))
{var inst_28474 = (state_28484[(7)]);var inst_28476 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28477 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28478 = (new cljs.core.PersistentVector(null,1,(5),inst_28476,inst_28477,null));var inst_28479 = om.core.update_BANG_.call(null,self__.table_state,inst_28478,inst_28474);var state_28484__$1 = state_28484;var statearr_28487_28499 = state_28484__$1;(statearr_28487_28499[(2)] = inst_28479);
(statearr_28487_28499[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28485 === (2)))
{var inst_28474 = (state_28484[(7)]);var inst_28474__$1 = (state_28484[(2)]);var state_28484__$1 = (function (){var statearr_28488 = state_28484;(statearr_28488[(7)] = inst_28474__$1);
return statearr_28488;
})();if(cljs.core.truth_(inst_28474__$1))
{var statearr_28489_28500 = state_28484__$1;(statearr_28489_28500[(1)] = (3));
} else
{var statearr_28490_28501 = state_28484__$1;(statearr_28490_28501[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28485 === (1)))
{var inst_28472 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28484__$1 = state_28484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28484__$1,(2),inst_28472);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28468,map__28468__$1,next_props,map__28469,map__28469__$1,next_table_state,next_table_data,map__28470,map__28470__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28471,map__28471__$1,fetch_table_data_fn,map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28468,map__28468__$1,next_props,map__28469,map__28469__$1,next_table_state,next_table_data,map__28470,map__28470__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28471,map__28471__$1,fetch_table_data_fn,map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28494 = [null,null,null,null,null,null,null,null];(statearr_28494[(0)] = state_machine__9111__auto__);
(statearr_28494[(1)] = (1));
return statearr_28494;
});
var state_machine__9111__auto____1 = (function (state_28484){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28484);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28495){if((e28495 instanceof Object))
{var ex__9114__auto__ = e28495;var statearr_28496_28502 = state_28484;(statearr_28496_28502[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28495;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28503 = state_28484;
state_28484 = G__28503;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28484){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28468,map__28468__$1,next_props,map__28469,map__28469__$1,next_table_state,next_table_data,map__28470,map__28470__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28471,map__28471__$1,fetch_table_data_fn,map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28497 = f__9126__auto__.call(null);(statearr_28497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28468,map__28468__$1,next_props,map__28469,map__28469__$1,next_table_state,next_table_data,map__28470,map__28470__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28471,map__28471__$1,fetch_table_data_fn,map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28463.prototype.om$core$IRender$ = true;
clustermap.components.table.t28463.prototype.om$core$IRender$render$arity$1 = ((function (map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28463.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28463.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28465){var self__ = this;
var _28465__$1 = this;return self__.meta28464;
});})(map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28465,meta28464__$1){var self__ = this;
var _28465__$1 = this;return (new clustermap.components.table.t28463(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.map__28460,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.map__28462,self__.table_state,self__.controls,self__.map__28461,self__.p__28421,self__.size,self__.from,meta28464__$1));
});})(map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28463 = ((function (map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28463(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28460__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__28462__$2,table_state__$1,controls__$1,map__28461__$2,p__28421__$1,size__$1,from__$1,meta28464){return (new clustermap.components.table.t28463(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28460__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__28462__$2,table_state__$1,controls__$1,map__28461__$2,p__28421__$1,size__$1,from__$1,meta28464));
});})(map__28460,map__28460__$1,props,map__28461,map__28461__$1,table_state,table_data,map__28462,map__28462__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28463(sort_spec,table_component,owner,props,map__28460__$1,table_data,index,filter_spec,columns,map__28462__$1,table_state,controls,map__28461__$1,p__28421,size,from,null));
});
