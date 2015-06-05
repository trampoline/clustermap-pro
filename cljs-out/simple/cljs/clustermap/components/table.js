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
clustermap.components.table.order_col = (function order_col(controls,p__24345,p__24346){var map__24360 = p__24345;var map__24360__$1 = ((cljs.core.seq_QMARK_.call(null,map__24360))?cljs.core.apply.call(null,cljs.core.hash_map,map__24360):map__24360);var table_data = map__24360__$1;var current_sort_spec = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24361 = p__24346;var map__24361__$1 = ((cljs.core.seq_QMARK_.call(null,map__24361))?cljs.core.apply.call(null,cljs.core.hash_map,map__24361):map__24361);var col = map__24361__$1;var render_fn = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24362 = current_sort_spec__$1;var G__24362__$1 = (((G__24362 == null))?null:cljs.core.keys.call(null,G__24362));var G__24362__$2 = (((G__24362__$1 == null))?null:cljs.core.first.call(null,G__24362__$1));return G__24362__$2;
})();var current_sort_dir = (function (){var G__24363 = current_sort_spec__$1;var G__24363__$1 = (((G__24363 == null))?null:current_sort_key.call(null,G__24363));var G__24363__$2 = (((G__24363__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24363__$1));return G__24363__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24364 = cljs.core._EQ_;var expr__24365 = current_sort_dir;if(cljs.core.truth_(pred__24364.call(null,"asc",expr__24365)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24360,map__24360__$1,table_data,current_sort_spec,map__24361,map__24361__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24370 = cljs.core._EQ_;var expr__24371 = current_sort_dir;if(cljs.core.truth_(pred__24370.call(null,"asc",expr__24371)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24370.call(null,"desc",expr__24371)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24360,map__24360__$1,table_data,current_sort_spec,map__24361,map__24361__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24369 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24369))?sablono.interpreter.attributes.call(null,attrs24369):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24369))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24369)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24373,owner,opts){var map__24382 = p__24373;var map__24382__$1 = ((cljs.core.seq_QMARK_.call(null,map__24382))?cljs.core.apply.call(null,cljs.core.hash_map,map__24382):map__24382);var controls = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24383 = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24383__$1 = ((cljs.core.seq_QMARK_.call(null,map__24383))?cljs.core.apply.call(null,cljs.core.hash_map,map__24383):map__24383);var table_data = map__24383__$1;var count = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24384 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24384 = (function (map__24382,owner,map__24383,paginate,table_data,controls,size,from,count,opts,p__24373,meta24385){
this.map__24382 = map__24382;
this.owner = owner;
this.map__24383 = map__24383;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.p__24373 = p__24373;
this.meta24385 = meta24385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24384.cljs$lang$type = true;
clustermap.components.table.t24384.cljs$lang$ctorStr = "clustermap.components.table/t24384";
clustermap.components.table.t24384.cljs$lang$ctorPrWriter = ((function (map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24384");
});})(map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
;
clustermap.components.table.t24384.prototype.om$core$IRender$ = true;
clustermap.components.table.t24384.prototype.om$core$IRender$render$arity$1 = ((function (map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24387 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24387))?sablono.interpreter.attributes.call(null,attrs24387):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24387))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24387)], null))));
})()," to ",(function (){var attrs24388 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24388))?sablono.interpreter.attributes.call(null,attrs24388):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24388))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24388)], null))));
})()," of ",(function (){var attrs24389 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24389))?sablono.interpreter.attributes.call(null,attrs24389):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24389))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24389)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
},"Last")));
});})(map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
;
clustermap.components.table.t24384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (_24386){var self__ = this;
var _24386__$1 = this;return self__.meta24385;
});})(map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
;
clustermap.components.table.t24384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function (_24386,meta24385__$1){var self__ = this;
var _24386__$1 = this;return (new clustermap.components.table.t24384(self__.map__24382,self__.owner,self__.map__24383,self__.paginate,self__.table_data,self__.controls,self__.size,self__.from,self__.count,self__.opts,self__.p__24373,meta24385__$1));
});})(map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24384 = ((function (map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size){
return (function __GT_t24384(map__24382__$2,owner__$1,map__24383__$2,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,p__24373__$1,meta24385){return (new clustermap.components.table.t24384(map__24382__$2,owner__$1,map__24383__$2,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,p__24373__$1,meta24385));
});})(map__24382,map__24382__$1,controls,map__24383,map__24383__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24384(map__24382__$1,owner,map__24383__$1,paginate,table_data,controls,size,from,count,opts,p__24373,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24390){var map__24403 = p__24390;var map__24403__$1 = ((cljs.core.seq_QMARK_.call(null,map__24403))?cljs.core.apply.call(null,cljs.core.hash_map,map__24403):map__24403);var record = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24403__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24404 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24404 = (function (columns,record,map__24403,p__24390,render_table_row,meta24405){
this.columns = columns;
this.record = record;
this.map__24403 = map__24403;
this.p__24390 = p__24390;
this.render_table_row = render_table_row;
this.meta24405 = meta24405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24404.cljs$lang$type = true;
clustermap.components.table.t24404.cljs$lang$ctorStr = "clustermap.components.table/t24404";
clustermap.components.table.t24404.cljs$lang$ctorPrWriter = ((function (map__24403,map__24403__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24404");
});})(map__24403,map__24403__$1,record,columns))
;
clustermap.components.table.t24404.prototype.om$core$IRender$ = true;
clustermap.components.table.t24404.prototype.om$core$IRender$render$arity$1 = ((function (map__24403,map__24403__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24403,map__24403__$1,record,columns){
return (function iter__24407(s__24408){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24403,map__24403__$1,record,columns){
return (function (){var s__24408__$1 = s__24408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24408__$1);if(temp__4126__auto__)
{var s__24408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24408__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24408__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24410 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24409 = (0);while(true){
if((i__24409 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24409);cljs.core.chunk_append.call(null,b__24410,(function (){var map__24413 = col;var map__24413__$1 = ((cljs.core.seq_QMARK_.call(null,map__24413))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);var render_fn = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24415 = (i__24409 + (1));
i__24409 = G__24415;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24410),iter__24407.call(null,cljs.core.chunk_rest.call(null,s__24408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24410),null);
}
} else
{var col = cljs.core.first.call(null,s__24408__$2);return cljs.core.cons.call(null,(function (){var map__24414 = col;var map__24414__$1 = ((cljs.core.seq_QMARK_.call(null,map__24414))?cljs.core.apply.call(null,cljs.core.hash_map,map__24414):map__24414);var render_fn = cljs.core.get.call(null,map__24414__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24414__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24414__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24407.call(null,cljs.core.rest.call(null,s__24408__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24403,map__24403__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24403,map__24403__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24403,map__24403__$1,record,columns))
;
clustermap.components.table.t24404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24403,map__24403__$1,record,columns){
return (function (_24406){var self__ = this;
var _24406__$1 = this;return self__.meta24405;
});})(map__24403,map__24403__$1,record,columns))
;
clustermap.components.table.t24404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24403,map__24403__$1,record,columns){
return (function (_24406,meta24405__$1){var self__ = this;
var _24406__$1 = this;return (new clustermap.components.table.t24404(self__.columns,self__.record,self__.map__24403,self__.p__24390,self__.render_table_row,meta24405__$1));
});})(map__24403,map__24403__$1,record,columns))
;
clustermap.components.table.__GT_t24404 = ((function (map__24403,map__24403__$1,record,columns){
return (function __GT_t24404(columns__$1,record__$1,map__24403__$2,p__24390__$1,render_table_row__$1,meta24405){return (new clustermap.components.table.t24404(columns__$1,record__$1,map__24403__$2,p__24390__$1,render_table_row__$1,meta24405));
});})(map__24403,map__24403__$1,record,columns))
;
}
return (new clustermap.components.table.t24404(columns,record,map__24403__$1,p__24390,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24416,owner,opts){var map__24432 = p__24416;var map__24432__$1 = ((cljs.core.seq_QMARK_.call(null,map__24432))?cljs.core.apply.call(null,cljs.core.hash_map,map__24432):map__24432);var props = map__24432__$1;var table_data = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24433 = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24433__$1 = ((cljs.core.seq_QMARK_.call(null,map__24433))?cljs.core.apply.call(null,cljs.core.hash_map,map__24433):map__24433);var controls = map__24433__$1;var columns = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24434 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24434))?sablono.interpreter.attributes.call(null,attrs24434):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24434))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24435 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view){
return (function iter__24439(s__24440){return (new cljs.core.LazySeq(null,((function (attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view){
return (function (){var s__24440__$1 = s__24440;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24440__$1);if(temp__4126__auto__)
{var s__24440__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24440__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24440__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24442 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24441 = (0);while(true){
if((i__24441 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24441);cljs.core.chunk_append.call(null,b__24442,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24447 = (i__24441 + (1));
i__24441 = G__24447;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24442),iter__24439.call(null,cljs.core.chunk_rest.call(null,s__24440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24442),null);
}
} else
{var col = cljs.core.first.call(null,s__24440__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24439.call(null,cljs.core.rest.call(null,s__24440__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24435))?sablono.interpreter.attributes.call(null,attrs24435):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24435))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24435)], null))));
})(),(function (){var attrs24436 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24436))?sablono.interpreter.attributes.call(null,attrs24436):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24436))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24436)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24434),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24437 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view){
return (function iter__24443(s__24444){return (new cljs.core.LazySeq(null,((function (attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view){
return (function (){var s__24444__$1 = s__24444;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24444__$1);if(temp__4126__auto__)
{var s__24444__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24444__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24444__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24446 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24445 = (0);while(true){
if((i__24445 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24445);cljs.core.chunk_append.call(null,b__24446,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24448 = (i__24445 + (1));
i__24445 = G__24448;
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
});})(attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24437))?sablono.interpreter.attributes.call(null,attrs24437):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24437))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24437)], null))));
})(),(function (){var attrs24438 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24434,map__24432,map__24432__$1,props,table_data,map__24433,map__24433__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24438))?sablono.interpreter.attributes.call(null,attrs24438):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24438))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24438)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24449,owner){var map__24462 = p__24449;var map__24462__$1 = ((cljs.core.seq_QMARK_.call(null,map__24462))?cljs.core.apply.call(null,cljs.core.hash_map,map__24462):map__24462);var props = map__24462__$1;var map__24463 = cljs.core.get.call(null,map__24462__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24463__$1 = ((cljs.core.seq_QMARK_.call(null,map__24463))?cljs.core.apply.call(null,cljs.core.hash_map,map__24463):map__24463);var table_state = map__24463__$1;var table_data = cljs.core.get.call(null,map__24463__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24464 = cljs.core.get.call(null,map__24463__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24464__$1 = ((cljs.core.seq_QMARK_.call(null,map__24464))?cljs.core.apply.call(null,cljs.core.hash_map,map__24464):map__24464);var controls = map__24464__$1;var index = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24462__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24465 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24465 = (function (sort_spec,map__24464,table_component,owner,p__24449,props,table_data,map__24463,index,filter_spec,columns,table_state,controls,map__24462,size,from,meta24466){
this.sort_spec = sort_spec;
this.map__24464 = map__24464;
this.table_component = table_component;
this.owner = owner;
this.p__24449 = p__24449;
this.props = props;
this.table_data = table_data;
this.map__24463 = map__24463;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__24462 = map__24462;
this.size = size;
this.from = from;
this.meta24466 = meta24466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24465.cljs$lang$type = true;
clustermap.components.table.t24465.cljs$lang$ctorStr = "clustermap.components.table/t24465";
clustermap.components.table.t24465.cljs$lang$ctorPrWriter = ((function (map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24465");
});})(map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24465.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24465.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24468,p__24469){var self__ = this;
var map__24470 = p__24468;var map__24470__$1 = ((cljs.core.seq_QMARK_.call(null,map__24470))?cljs.core.apply.call(null,cljs.core.hash_map,map__24470):map__24470);var next_props = map__24470__$1;var map__24471 = cljs.core.get.call(null,map__24470__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24471__$1 = ((cljs.core.seq_QMARK_.call(null,map__24471))?cljs.core.apply.call(null,cljs.core.hash_map,map__24471):map__24471);var next_table_state = map__24471__$1;var next_table_data = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24472 = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24472__$1 = ((cljs.core.seq_QMARK_.call(null,map__24472))?cljs.core.apply.call(null,cljs.core.hash_map,map__24472):map__24472);var next_controls = map__24472__$1;var next_index = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24470__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24473 = p__24469;var map__24473__$1 = ((cljs.core.seq_QMARK_.call(null,map__24473))?cljs.core.apply.call(null,cljs.core.hash_map,map__24473):map__24473);var next_state = map__24473__$1;var table_data_resource = cljs.core.get.call(null,map__24473__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24465.prototype.om$core$IRender$ = true;
clustermap.components.table.t24465.prototype.om$core$IRender$render$arity$1 = ((function (map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24465.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24465.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24467){var self__ = this;
var _24467__$1 = this;return self__.meta24466;
});})(map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24467,meta24466__$1){var self__ = this;
var _24467__$1 = this;return (new clustermap.components.table.t24465(self__.sort_spec,self__.map__24464,self__.table_component,self__.owner,self__.p__24449,self__.props,self__.table_data,self__.map__24463,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__24462,self__.size,self__.from,meta24466__$1));
});})(map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24465 = ((function (map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24465(sort_spec__$1,map__24464__$2,table_component__$1,owner__$1,p__24449__$1,props__$1,table_data__$1,map__24463__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__24462__$2,size__$1,from__$1,meta24466){return (new clustermap.components.table.t24465(sort_spec__$1,map__24464__$2,table_component__$1,owner__$1,p__24449__$1,props__$1,table_data__$1,map__24463__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__24462__$2,size__$1,from__$1,meta24466));
});})(map__24462,map__24462__$1,props,map__24463,map__24463__$1,table_state,table_data,map__24464,map__24464__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24465(sort_spec,map__24464__$1,table_component,owner,p__24449,props,table_data,map__24463__$1,index,filter_spec,columns,table_state,controls,map__24462__$1,size,from,null));
});
