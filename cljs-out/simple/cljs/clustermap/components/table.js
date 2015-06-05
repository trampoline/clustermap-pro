// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(controls,p__24349,p__24350){var map__24364 = p__24349;var map__24364__$1 = ((cljs.core.seq_QMARK_.call(null,map__24364))?cljs.core.apply.call(null,cljs.core.hash_map,map__24364):map__24364);var table_data = map__24364__$1;var current_sort_spec = cljs.core.get.call(null,map__24364__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24365 = p__24350;var map__24365__$1 = ((cljs.core.seq_QMARK_.call(null,map__24365))?cljs.core.apply.call(null,cljs.core.hash_map,map__24365):map__24365);var col = map__24365__$1;var render_fn = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24366 = current_sort_spec__$1;var G__24366__$1 = (((G__24366 == null))?null:cljs.core.keys.call(null,G__24366));var G__24366__$2 = (((G__24366__$1 == null))?null:cljs.core.first.call(null,G__24366__$1));return G__24366__$2;
})();var current_sort_dir = (function (){var G__24367 = current_sort_spec__$1;var G__24367__$1 = (((G__24367 == null))?null:current_sort_key.call(null,G__24367));var G__24367__$2 = (((G__24367__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24367__$1));return G__24367__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24368 = cljs.core._EQ_;var expr__24369 = current_sort_dir;if(cljs.core.truth_(pred__24368.call(null,"asc",expr__24369)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24364,map__24364__$1,table_data,current_sort_spec,map__24365,map__24365__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24374 = cljs.core._EQ_;var expr__24375 = current_sort_dir;if(cljs.core.truth_(pred__24374.call(null,"asc",expr__24375)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24374.call(null,"desc",expr__24375)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24364,map__24364__$1,table_data,current_sort_spec,map__24365,map__24365__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24373 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24373))?sablono.interpreter.attributes.call(null,attrs24373):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24373))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24373)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24377,owner,opts){var map__24386 = p__24377;var map__24386__$1 = ((cljs.core.seq_QMARK_.call(null,map__24386))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);var controls = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24387 = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24387__$1 = ((cljs.core.seq_QMARK_.call(null,map__24387))?cljs.core.apply.call(null,cljs.core.hash_map,map__24387):map__24387);var table_data = map__24387__$1;var count = cljs.core.get.call(null,map__24387__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24387__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24387__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24388 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24388 = (function (p__24377,map__24386,owner,paginate,table_data,controls,size,from,count,opts,map__24387,meta24389){
this.p__24377 = p__24377;
this.map__24386 = map__24386;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.map__24387 = map__24387;
this.meta24389 = meta24389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24388.cljs$lang$type = true;
clustermap.components.table.t24388.cljs$lang$ctorStr = "clustermap.components.table/t24388";
clustermap.components.table.t24388.cljs$lang$ctorPrWriter = ((function (map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24388");
});})(map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
;
clustermap.components.table.t24388.prototype.om$core$IRender$ = true;
clustermap.components.table.t24388.prototype.om$core$IRender$render$arity$1 = ((function (map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24391 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24391))?sablono.interpreter.attributes.call(null,attrs24391):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24391))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24391)], null))));
})()," to ",(function (){var attrs24392 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24392))?sablono.interpreter.attributes.call(null,attrs24392):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24392))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24392)], null))));
})()," of ",(function (){var attrs24393 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24393))?sablono.interpreter.attributes.call(null,attrs24393):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24393))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24393)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
},"Last")));
});})(map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
;
clustermap.components.table.t24388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (_24390){var self__ = this;
var _24390__$1 = this;return self__.meta24389;
});})(map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
;
clustermap.components.table.t24388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function (_24390,meta24389__$1){var self__ = this;
var _24390__$1 = this;return (new clustermap.components.table.t24388(self__.p__24377,self__.map__24386,self__.owner,self__.paginate,self__.table_data,self__.controls,self__.size,self__.from,self__.count,self__.opts,self__.map__24387,meta24389__$1));
});})(map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24388 = ((function (map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size){
return (function __GT_t24388(p__24377__$1,map__24386__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__24387__$2,meta24389){return (new clustermap.components.table.t24388(p__24377__$1,map__24386__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__24387__$2,meta24389));
});})(map__24386,map__24386__$1,controls,map__24387,map__24387__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24388(p__24377,map__24386__$1,owner,paginate,table_data,controls,size,from,count,opts,map__24387__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24394){var map__24407 = p__24394;var map__24407__$1 = ((cljs.core.seq_QMARK_.call(null,map__24407))?cljs.core.apply.call(null,cljs.core.hash_map,map__24407):map__24407);var record = cljs.core.get.call(null,map__24407__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24407__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24408 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24408 = (function (columns,record,map__24407,p__24394,render_table_row,meta24409){
this.columns = columns;
this.record = record;
this.map__24407 = map__24407;
this.p__24394 = p__24394;
this.render_table_row = render_table_row;
this.meta24409 = meta24409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24408.cljs$lang$type = true;
clustermap.components.table.t24408.cljs$lang$ctorStr = "clustermap.components.table/t24408";
clustermap.components.table.t24408.cljs$lang$ctorPrWriter = ((function (map__24407,map__24407__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24408");
});})(map__24407,map__24407__$1,record,columns))
;
clustermap.components.table.t24408.prototype.om$core$IRender$ = true;
clustermap.components.table.t24408.prototype.om$core$IRender$render$arity$1 = ((function (map__24407,map__24407__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24407,map__24407__$1,record,columns){
return (function iter__24411(s__24412){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24407,map__24407__$1,record,columns){
return (function (){var s__24412__$1 = s__24412;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24412__$1);if(temp__4126__auto__)
{var s__24412__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24412__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24412__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24414 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24413 = (0);while(true){
if((i__24413 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24413);cljs.core.chunk_append.call(null,b__24414,(function (){var map__24417 = col;var map__24417__$1 = ((cljs.core.seq_QMARK_.call(null,map__24417))?cljs.core.apply.call(null,cljs.core.hash_map,map__24417):map__24417);var render_fn = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24419 = (i__24413 + (1));
i__24413 = G__24419;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24414),iter__24411.call(null,cljs.core.chunk_rest.call(null,s__24412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24414),null);
}
} else
{var col = cljs.core.first.call(null,s__24412__$2);return cljs.core.cons.call(null,(function (){var map__24418 = col;var map__24418__$1 = ((cljs.core.seq_QMARK_.call(null,map__24418))?cljs.core.apply.call(null,cljs.core.hash_map,map__24418):map__24418);var render_fn = cljs.core.get.call(null,map__24418__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24418__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24418__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24411.call(null,cljs.core.rest.call(null,s__24412__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24407,map__24407__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24407,map__24407__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24407,map__24407__$1,record,columns))
;
clustermap.components.table.t24408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24407,map__24407__$1,record,columns){
return (function (_24410){var self__ = this;
var _24410__$1 = this;return self__.meta24409;
});})(map__24407,map__24407__$1,record,columns))
;
clustermap.components.table.t24408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24407,map__24407__$1,record,columns){
return (function (_24410,meta24409__$1){var self__ = this;
var _24410__$1 = this;return (new clustermap.components.table.t24408(self__.columns,self__.record,self__.map__24407,self__.p__24394,self__.render_table_row,meta24409__$1));
});})(map__24407,map__24407__$1,record,columns))
;
clustermap.components.table.__GT_t24408 = ((function (map__24407,map__24407__$1,record,columns){
return (function __GT_t24408(columns__$1,record__$1,map__24407__$2,p__24394__$1,render_table_row__$1,meta24409){return (new clustermap.components.table.t24408(columns__$1,record__$1,map__24407__$2,p__24394__$1,render_table_row__$1,meta24409));
});})(map__24407,map__24407__$1,record,columns))
;
}
return (new clustermap.components.table.t24408(columns,record,map__24407__$1,p__24394,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24420,owner,opts){var map__24436 = p__24420;var map__24436__$1 = ((cljs.core.seq_QMARK_.call(null,map__24436))?cljs.core.apply.call(null,cljs.core.hash_map,map__24436):map__24436);var props = map__24436__$1;var table_data = cljs.core.get.call(null,map__24436__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24437 = cljs.core.get.call(null,map__24436__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24437__$1 = ((cljs.core.seq_QMARK_.call(null,map__24437))?cljs.core.apply.call(null,cljs.core.hash_map,map__24437):map__24437);var controls = map__24437__$1;var columns = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24438 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24438))?sablono.interpreter.attributes.call(null,attrs24438):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24438))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24439 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view){
return (function iter__24443(s__24444){return (new cljs.core.LazySeq(null,((function (attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view){
return (function (){var s__24444__$1 = s__24444;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24444__$1);if(temp__4126__auto__)
{var s__24444__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24444__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24444__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24446 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24445 = (0);while(true){
if((i__24445 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24445);cljs.core.chunk_append.call(null,b__24446,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24451 = (i__24445 + (1));
i__24445 = G__24451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24446),iter__24443.call(null,cljs.core.chunk_rest.call(null,s__24444__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24446),null);
}
} else
{var col = cljs.core.first.call(null,s__24444__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24443.call(null,cljs.core.rest.call(null,s__24444__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24439))?sablono.interpreter.attributes.call(null,attrs24439):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24439))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24439)], null))));
})(),(function (){var attrs24440 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24440))?sablono.interpreter.attributes.call(null,attrs24440):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24440)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24438),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24441 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view){
return (function iter__24447(s__24448){return (new cljs.core.LazySeq(null,((function (attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view){
return (function (){var s__24448__$1 = s__24448;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24448__$1);if(temp__4126__auto__)
{var s__24448__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24448__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24448__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24450 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24449 = (0);while(true){
if((i__24449 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24449);cljs.core.chunk_append.call(null,b__24450,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24452 = (i__24449 + (1));
i__24449 = G__24452;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24450),iter__24447.call(null,cljs.core.chunk_rest.call(null,s__24448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24450),null);
}
} else
{var col = cljs.core.first.call(null,s__24448__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24447.call(null,cljs.core.rest.call(null,s__24448__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24441))?sablono.interpreter.attributes.call(null,attrs24441):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24441))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24441)], null))));
})(),(function (){var attrs24442 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24438,map__24436,map__24436__$1,props,table_data,map__24437,map__24437__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24442))?sablono.interpreter.attributes.call(null,attrs24442):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24442))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24442)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24453,owner){var map__24466 = p__24453;var map__24466__$1 = ((cljs.core.seq_QMARK_.call(null,map__24466))?cljs.core.apply.call(null,cljs.core.hash_map,map__24466):map__24466);var props = map__24466__$1;var map__24467 = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24467__$1 = ((cljs.core.seq_QMARK_.call(null,map__24467))?cljs.core.apply.call(null,cljs.core.hash_map,map__24467):map__24467);var table_state = map__24467__$1;var table_data = cljs.core.get.call(null,map__24467__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24468 = cljs.core.get.call(null,map__24467__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24468__$1 = ((cljs.core.seq_QMARK_.call(null,map__24468))?cljs.core.apply.call(null,cljs.core.hash_map,map__24468):map__24468);var controls = map__24468__$1;var index = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24469 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24469 = (function (sort_spec,table_component,owner,map__24467,props,map__24468,table_data,index,p__24453,filter_spec,columns,table_state,controls,size,from,map__24466,meta24470){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__24467 = map__24467;
this.props = props;
this.map__24468 = map__24468;
this.table_data = table_data;
this.index = index;
this.p__24453 = p__24453;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.from = from;
this.map__24466 = map__24466;
this.meta24470 = meta24470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24469.cljs$lang$type = true;
clustermap.components.table.t24469.cljs$lang$ctorStr = "clustermap.components.table/t24469";
clustermap.components.table.t24469.cljs$lang$ctorPrWriter = ((function (map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24469");
});})(map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24469.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24469.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24472,p__24473){var self__ = this;
var map__24474 = p__24472;var map__24474__$1 = ((cljs.core.seq_QMARK_.call(null,map__24474))?cljs.core.apply.call(null,cljs.core.hash_map,map__24474):map__24474);var next_props = map__24474__$1;var map__24475 = cljs.core.get.call(null,map__24474__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24475__$1 = ((cljs.core.seq_QMARK_.call(null,map__24475))?cljs.core.apply.call(null,cljs.core.hash_map,map__24475):map__24475);var next_table_state = map__24475__$1;var next_table_data = cljs.core.get.call(null,map__24475__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24476 = cljs.core.get.call(null,map__24475__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24476__$1 = ((cljs.core.seq_QMARK_.call(null,map__24476))?cljs.core.apply.call(null,cljs.core.hash_map,map__24476):map__24476);var next_controls = map__24476__$1;var next_index = cljs.core.get.call(null,map__24476__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24476__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24476__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24476__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24476__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24474__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24477 = p__24473;var map__24477__$1 = ((cljs.core.seq_QMARK_.call(null,map__24477))?cljs.core.apply.call(null,cljs.core.hash_map,map__24477):map__24477);var next_state = map__24477__$1;var table_data_resource = cljs.core.get.call(null,map__24477__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24469.prototype.om$core$IRender$ = true;
clustermap.components.table.t24469.prototype.om$core$IRender$render$arity$1 = ((function (map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24469.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24469.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24471){var self__ = this;
var _24471__$1 = this;return self__.meta24470;
});})(map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24471,meta24470__$1){var self__ = this;
var _24471__$1 = this;return (new clustermap.components.table.t24469(self__.sort_spec,self__.table_component,self__.owner,self__.map__24467,self__.props,self__.map__24468,self__.table_data,self__.index,self__.p__24453,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.from,self__.map__24466,meta24470__$1));
});})(map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24469 = ((function (map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24469(sort_spec__$1,table_component__$1,owner__$1,map__24467__$2,props__$1,map__24468__$2,table_data__$1,index__$1,p__24453__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,from__$1,map__24466__$2,meta24470){return (new clustermap.components.table.t24469(sort_spec__$1,table_component__$1,owner__$1,map__24467__$2,props__$1,map__24468__$2,table_data__$1,index__$1,p__24453__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,from__$1,map__24466__$2,meta24470));
});})(map__24466,map__24466__$1,props,map__24467,map__24467__$1,table_state,table_data,map__24468,map__24468__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24469(sort_spec,table_component,owner,map__24467__$1,props,map__24468__$1,table_data,index,p__24453,filter_spec,columns,table_state,controls,size,from,map__24466__$1,null));
});
