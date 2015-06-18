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
clustermap.components.table.order_col = (function order_col(controls,p__28314,p__28315){var map__28329 = p__28314;var map__28329__$1 = ((cljs.core.seq_QMARK_.call(null,map__28329))?cljs.core.apply.call(null,cljs.core.hash_map,map__28329):map__28329);var table_data = map__28329__$1;var current_sort_spec = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28330 = p__28315;var map__28330__$1 = ((cljs.core.seq_QMARK_.call(null,map__28330))?cljs.core.apply.call(null,cljs.core.hash_map,map__28330):map__28330);var col = map__28330__$1;var render_fn = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28331 = current_sort_spec__$1;var G__28331__$1 = (((G__28331 == null))?null:cljs.core.keys.call(null,G__28331));var G__28331__$2 = (((G__28331__$1 == null))?null:cljs.core.first.call(null,G__28331__$1));return G__28331__$2;
})();var current_sort_dir = (function (){var G__28332 = current_sort_spec__$1;var G__28332__$1 = (((G__28332 == null))?null:current_sort_key.call(null,G__28332));var G__28332__$2 = (((G__28332__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28332__$1));return G__28332__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28333 = cljs.core._EQ_;var expr__28334 = current_sort_dir;if(cljs.core.truth_(pred__28333.call(null,"asc",expr__28334)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28329,map__28329__$1,table_data,current_sort_spec,map__28330,map__28330__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28339 = cljs.core._EQ_;var expr__28340 = current_sort_dir;if(cljs.core.truth_(pred__28339.call(null,"asc",expr__28340)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28339.call(null,"desc",expr__28340)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28329,map__28329__$1,table_data,current_sort_spec,map__28330,map__28330__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28338 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28338))?sablono.interpreter.attributes.call(null,attrs28338):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28338))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28338)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28342,owner,opts){var map__28351 = p__28342;var map__28351__$1 = ((cljs.core.seq_QMARK_.call(null,map__28351))?cljs.core.apply.call(null,cljs.core.hash_map,map__28351):map__28351);var controls = cljs.core.get.call(null,map__28351__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28352 = cljs.core.get.call(null,map__28351__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28352__$1 = ((cljs.core.seq_QMARK_.call(null,map__28352))?cljs.core.apply.call(null,cljs.core.hash_map,map__28352):map__28352);var table_data = map__28352__$1;var count = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28353 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28353 = (function (map__28351,owner,paginate,p__28342,table_data,controls,size,from,count,opts,map__28352,meta28354){
this.map__28351 = map__28351;
this.owner = owner;
this.paginate = paginate;
this.p__28342 = p__28342;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.map__28352 = map__28352;
this.meta28354 = meta28354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28353.cljs$lang$type = true;
clustermap.components.table.t28353.cljs$lang$ctorStr = "clustermap.components.table/t28353";
clustermap.components.table.t28353.cljs$lang$ctorPrWriter = ((function (map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28353");
});})(map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
;
clustermap.components.table.t28353.prototype.om$core$IRender$ = true;
clustermap.components.table.t28353.prototype.om$core$IRender$render$arity$1 = ((function (map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28356 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28356))?sablono.interpreter.attributes.call(null,attrs28356):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28356))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28356)], null))));
})()," to ",(function (){var attrs28357 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28357))?sablono.interpreter.attributes.call(null,attrs28357):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28357)], null))));
})()," of ",(function (){var attrs28358 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28358))?sablono.interpreter.attributes.call(null,attrs28358):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28358))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28358)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
},"Last")));
});})(map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
;
clustermap.components.table.t28353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (_28355){var self__ = this;
var _28355__$1 = this;return self__.meta28354;
});})(map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
;
clustermap.components.table.t28353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function (_28355,meta28354__$1){var self__ = this;
var _28355__$1 = this;return (new clustermap.components.table.t28353(self__.map__28351,self__.owner,self__.paginate,self__.p__28342,self__.table_data,self__.controls,self__.size,self__.from,self__.count,self__.opts,self__.map__28352,meta28354__$1));
});})(map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28353 = ((function (map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size){
return (function __GT_t28353(map__28351__$2,owner__$1,paginate__$1,p__28342__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__28352__$2,meta28354){return (new clustermap.components.table.t28353(map__28351__$2,owner__$1,paginate__$1,p__28342__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__28352__$2,meta28354));
});})(map__28351,map__28351__$1,controls,map__28352,map__28352__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28353(map__28351__$1,owner,paginate,p__28342,table_data,controls,size,from,count,opts,map__28352__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28359){var map__28372 = p__28359;var map__28372__$1 = ((cljs.core.seq_QMARK_.call(null,map__28372))?cljs.core.apply.call(null,cljs.core.hash_map,map__28372):map__28372);var record = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28373 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28373 = (function (columns,record,map__28372,p__28359,render_table_row,meta28374){
this.columns = columns;
this.record = record;
this.map__28372 = map__28372;
this.p__28359 = p__28359;
this.render_table_row = render_table_row;
this.meta28374 = meta28374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28373.cljs$lang$type = true;
clustermap.components.table.t28373.cljs$lang$ctorStr = "clustermap.components.table/t28373";
clustermap.components.table.t28373.cljs$lang$ctorPrWriter = ((function (map__28372,map__28372__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28373");
});})(map__28372,map__28372__$1,record,columns))
;
clustermap.components.table.t28373.prototype.om$core$IRender$ = true;
clustermap.components.table.t28373.prototype.om$core$IRender$render$arity$1 = ((function (map__28372,map__28372__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28372,map__28372__$1,record,columns){
return (function iter__28376(s__28377){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28372,map__28372__$1,record,columns){
return (function (){var s__28377__$1 = s__28377;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28377__$1);if(temp__4126__auto__)
{var s__28377__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28377__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28377__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28379 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28378 = (0);while(true){
if((i__28378 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28378);cljs.core.chunk_append.call(null,b__28379,(function (){var map__28382 = col;var map__28382__$1 = ((cljs.core.seq_QMARK_.call(null,map__28382))?cljs.core.apply.call(null,cljs.core.hash_map,map__28382):map__28382);var render_fn = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28384 = (i__28378 + (1));
i__28378 = G__28384;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28379),iter__28376.call(null,cljs.core.chunk_rest.call(null,s__28377__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28379),null);
}
} else
{var col = cljs.core.first.call(null,s__28377__$2);return cljs.core.cons.call(null,(function (){var map__28383 = col;var map__28383__$1 = ((cljs.core.seq_QMARK_.call(null,map__28383))?cljs.core.apply.call(null,cljs.core.hash_map,map__28383):map__28383);var render_fn = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28376.call(null,cljs.core.rest.call(null,s__28377__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28372,map__28372__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28372,map__28372__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28372,map__28372__$1,record,columns))
;
clustermap.components.table.t28373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28372,map__28372__$1,record,columns){
return (function (_28375){var self__ = this;
var _28375__$1 = this;return self__.meta28374;
});})(map__28372,map__28372__$1,record,columns))
;
clustermap.components.table.t28373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28372,map__28372__$1,record,columns){
return (function (_28375,meta28374__$1){var self__ = this;
var _28375__$1 = this;return (new clustermap.components.table.t28373(self__.columns,self__.record,self__.map__28372,self__.p__28359,self__.render_table_row,meta28374__$1));
});})(map__28372,map__28372__$1,record,columns))
;
clustermap.components.table.__GT_t28373 = ((function (map__28372,map__28372__$1,record,columns){
return (function __GT_t28373(columns__$1,record__$1,map__28372__$2,p__28359__$1,render_table_row__$1,meta28374){return (new clustermap.components.table.t28373(columns__$1,record__$1,map__28372__$2,p__28359__$1,render_table_row__$1,meta28374));
});})(map__28372,map__28372__$1,record,columns))
;
}
return (new clustermap.components.table.t28373(columns,record,map__28372__$1,p__28359,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28385,owner,opts){var map__28401 = p__28385;var map__28401__$1 = ((cljs.core.seq_QMARK_.call(null,map__28401))?cljs.core.apply.call(null,cljs.core.hash_map,map__28401):map__28401);var props = map__28401__$1;var table_data = cljs.core.get.call(null,map__28401__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28402 = cljs.core.get.call(null,map__28401__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28402__$1 = ((cljs.core.seq_QMARK_.call(null,map__28402))?cljs.core.apply.call(null,cljs.core.hash_map,map__28402):map__28402);var controls = map__28402__$1;var columns = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28402__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28403 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28403))?sablono.interpreter.attributes.call(null,attrs28403):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28403))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28404 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view){
return (function iter__28408(s__28409){return (new cljs.core.LazySeq(null,((function (attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view){
return (function (){var s__28409__$1 = s__28409;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28409__$1);if(temp__4126__auto__)
{var s__28409__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28409__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28409__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28411 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28410 = (0);while(true){
if((i__28410 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28410);cljs.core.chunk_append.call(null,b__28411,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28416 = (i__28410 + (1));
i__28410 = G__28416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28411),iter__28408.call(null,cljs.core.chunk_rest.call(null,s__28409__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28411),null);
}
} else
{var col = cljs.core.first.call(null,s__28409__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28408.call(null,cljs.core.rest.call(null,s__28409__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28404))?sablono.interpreter.attributes.call(null,attrs28404):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28404))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28404)], null))));
})(),(function (){var attrs28405 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28405))?sablono.interpreter.attributes.call(null,attrs28405):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28405))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28405)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28403),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28406 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view){
return (function iter__28412(s__28413){return (new cljs.core.LazySeq(null,((function (attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view){
return (function (){var s__28413__$1 = s__28413;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28413__$1);if(temp__4126__auto__)
{var s__28413__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28413__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28413__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28415 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28414 = (0);while(true){
if((i__28414 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28414);cljs.core.chunk_append.call(null,b__28415,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28417 = (i__28414 + (1));
i__28414 = G__28417;
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
{var col = cljs.core.first.call(null,s__28413__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28412.call(null,cljs.core.rest.call(null,s__28413__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28406))?sablono.interpreter.attributes.call(null,attrs28406):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28406))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28406)], null))));
})(),(function (){var attrs28407 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28403,map__28401,map__28401__$1,props,table_data,map__28402,map__28402__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28407))?sablono.interpreter.attributes.call(null,attrs28407):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28407))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28407)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28418,owner){var map__28457 = p__28418;var map__28457__$1 = ((cljs.core.seq_QMARK_.call(null,map__28457))?cljs.core.apply.call(null,cljs.core.hash_map,map__28457):map__28457);var props = map__28457__$1;var map__28458 = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28458__$1 = ((cljs.core.seq_QMARK_.call(null,map__28458))?cljs.core.apply.call(null,cljs.core.hash_map,map__28458):map__28458);var table_state = map__28458__$1;var table_data = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28459 = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28459__$1 = ((cljs.core.seq_QMARK_.call(null,map__28459))?cljs.core.apply.call(null,cljs.core.hash_map,map__28459):map__28459);var controls = map__28459__$1;var index = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28460 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28460 = (function (sort_spec,table_component,owner,props,map__28457,table_data,index,filter_spec,columns,table_state,controls,map__28458,size,map__28459,from,p__28418,meta28461){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__28457 = map__28457;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__28458 = map__28458;
this.size = size;
this.map__28459 = map__28459;
this.from = from;
this.p__28418 = p__28418;
this.meta28461 = meta28461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28460.cljs$lang$type = true;
clustermap.components.table.t28460.cljs$lang$ctorStr = "clustermap.components.table/t28460";
clustermap.components.table.t28460.cljs$lang$ctorPrWriter = ((function (map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28460");
});})(map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28460.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28460.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28463,p__28464){var self__ = this;
var map__28465 = p__28463;var map__28465__$1 = ((cljs.core.seq_QMARK_.call(null,map__28465))?cljs.core.apply.call(null,cljs.core.hash_map,map__28465):map__28465);var next_props = map__28465__$1;var map__28466 = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28466__$1 = ((cljs.core.seq_QMARK_.call(null,map__28466))?cljs.core.apply.call(null,cljs.core.hash_map,map__28466):map__28466);var next_table_state = map__28466__$1;var next_table_data = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28467 = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28467__$1 = ((cljs.core.seq_QMARK_.call(null,map__28467))?cljs.core.apply.call(null,cljs.core.hash_map,map__28467):map__28467);var next_controls = map__28467__$1;var next_index = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28468 = p__28464;var map__28468__$1 = ((cljs.core.seq_QMARK_.call(null,map__28468))?cljs.core.apply.call(null,cljs.core.hash_map,map__28468):map__28468);var fetch_table_data_fn = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28465,map__28465__$1,next_props,map__28466,map__28466__$1,next_table_state,next_table_data,map__28467,map__28467__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28468,map__28468__$1,fetch_table_data_fn,map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28465,map__28465__$1,next_props,map__28466,map__28466__$1,next_table_state,next_table_data,map__28467,map__28467__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28468,map__28468__$1,fetch_table_data_fn,map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28481){var state_val_28482 = (state_28481[(1)]);if((state_val_28482 === (5)))
{var inst_28479 = (state_28481[(2)]);var state_28481__$1 = state_28481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28481__$1,inst_28479);
} else
{if((state_val_28482 === (4)))
{var state_28481__$1 = state_28481;var statearr_28483_28495 = state_28481__$1;(statearr_28483_28495[(2)] = null);
(statearr_28483_28495[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (3)))
{var inst_28471 = (state_28481[(7)]);var inst_28473 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28474 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28475 = (new cljs.core.PersistentVector(null,1,(5),inst_28473,inst_28474,null));var inst_28476 = om.core.update_BANG_.call(null,self__.table_state,inst_28475,inst_28471);var state_28481__$1 = state_28481;var statearr_28484_28496 = state_28481__$1;(statearr_28484_28496[(2)] = inst_28476);
(statearr_28484_28496[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (2)))
{var inst_28471 = (state_28481[(7)]);var inst_28471__$1 = (state_28481[(2)]);var state_28481__$1 = (function (){var statearr_28485 = state_28481;(statearr_28485[(7)] = inst_28471__$1);
return statearr_28485;
})();if(cljs.core.truth_(inst_28471__$1))
{var statearr_28486_28497 = state_28481__$1;(statearr_28486_28497[(1)] = (3));
} else
{var statearr_28487_28498 = state_28481__$1;(statearr_28487_28498[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28482 === (1)))
{var inst_28469 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28481__$1 = state_28481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28481__$1,(2),inst_28469);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28465,map__28465__$1,next_props,map__28466,map__28466__$1,next_table_state,next_table_data,map__28467,map__28467__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28468,map__28468__$1,fetch_table_data_fn,map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28465,map__28465__$1,next_props,map__28466,map__28466__$1,next_table_state,next_table_data,map__28467,map__28467__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28468,map__28468__$1,fetch_table_data_fn,map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28491 = [null,null,null,null,null,null,null,null];(statearr_28491[(0)] = state_machine__9111__auto__);
(statearr_28491[(1)] = (1));
return statearr_28491;
});
var state_machine__9111__auto____1 = (function (state_28481){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28481);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28492){if((e28492 instanceof Object))
{var ex__9114__auto__ = e28492;var statearr_28493_28499 = state_28481;(statearr_28493_28499[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28500 = state_28481;
state_28481 = G__28500;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28481){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28465,map__28465__$1,next_props,map__28466,map__28466__$1,next_table_state,next_table_data,map__28467,map__28467__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28468,map__28468__$1,fetch_table_data_fn,map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28494 = f__9126__auto__.call(null);(statearr_28494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28465,map__28465__$1,next_props,map__28466,map__28466__$1,next_table_state,next_table_data,map__28467,map__28467__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28468,map__28468__$1,fetch_table_data_fn,map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28460.prototype.om$core$IRender$ = true;
clustermap.components.table.t28460.prototype.om$core$IRender$render$arity$1 = ((function (map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28460.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28460.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28462){var self__ = this;
var _28462__$1 = this;return self__.meta28461;
});})(map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28462,meta28461__$1){var self__ = this;
var _28462__$1 = this;return (new clustermap.components.table.t28460(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.map__28457,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__28458,self__.size,self__.map__28459,self__.from,self__.p__28418,meta28461__$1));
});})(map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28460 = ((function (map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28460(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28457__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__28458__$2,size__$1,map__28459__$2,from__$1,p__28418__$1,meta28461){return (new clustermap.components.table.t28460(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28457__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__28458__$2,size__$1,map__28459__$2,from__$1,p__28418__$1,meta28461));
});})(map__28457,map__28457__$1,props,map__28458,map__28458__$1,table_state,table_data,map__28459,map__28459__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28460(sort_spec,table_component,owner,props,map__28457__$1,table_data,index,filter_spec,columns,table_state,controls,map__28458__$1,size,map__28459__$1,from,p__28418,null));
});
