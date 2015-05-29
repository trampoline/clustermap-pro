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
clustermap.components.table.order_col = (function order_col(controls,p__30327,p__30328){var map__30342 = p__30327;var map__30342__$1 = ((cljs.core.seq_QMARK_.call(null,map__30342))?cljs.core.apply.call(null,cljs.core.hash_map,map__30342):map__30342);var table_data = map__30342__$1;var current_sort_spec = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__30343 = p__30328;var map__30343__$1 = ((cljs.core.seq_QMARK_.call(null,map__30343))?cljs.core.apply.call(null,cljs.core.hash_map,map__30343):map__30343);var col = map__30343__$1;var render_fn = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__30344 = current_sort_spec__$1;var G__30344__$1 = (((G__30344 == null))?null:cljs.core.keys.call(null,G__30344));var G__30344__$2 = (((G__30344__$1 == null))?null:cljs.core.first.call(null,G__30344__$1));return G__30344__$2;
})();var current_sort_dir = (function (){var G__30345 = current_sort_spec__$1;var G__30345__$1 = (((G__30345 == null))?null:current_sort_key.call(null,G__30345));var G__30345__$2 = (((G__30345__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__30345__$1));return G__30345__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__30346 = cljs.core._EQ_;var expr__30347 = current_sort_dir;if(cljs.core.truth_(pred__30346.call(null,"asc",expr__30347)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__30342,map__30342__$1,table_data,current_sort_spec,map__30343,map__30343__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__30352 = cljs.core._EQ_;var expr__30353 = current_sort_dir;if(cljs.core.truth_(pred__30352.call(null,"asc",expr__30353)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__30352.call(null,"desc",expr__30353)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__11514__auto__ = current_sort_dir;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return new cljs.core.Keyword(null,"desc","desc",2093485764);
}
})()], null)], true, false));
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__30342,map__30342__$1,table_data,current_sort_spec,map__30343,map__30343__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs30351 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30351))?sablono.interpreter.attributes.call(null,attrs30351):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30351))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30351)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__30355,owner,opts){var map__30364 = p__30355;var map__30364__$1 = ((cljs.core.seq_QMARK_.call(null,map__30364))?cljs.core.apply.call(null,cljs.core.hash_map,map__30364):map__30364);var controls = cljs.core.get.call(null,map__30364__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30365 = cljs.core.get.call(null,map__30364__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30365__$1 = ((cljs.core.seq_QMARK_.call(null,map__30365))?cljs.core.apply.call(null,cljs.core.hash_map,map__30365):map__30365);var table_data = map__30365__$1;var count = cljs.core.get.call(null,map__30365__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__30365__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__30365__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t30366 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t30366 = (function (p__30355,owner,paginate,map__30365,table_data,controls,size,from,count,opts,map__30364,meta30367){
this.p__30355 = p__30355;
this.owner = owner;
this.paginate = paginate;
this.map__30365 = map__30365;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.map__30364 = map__30364;
this.meta30367 = meta30367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t30366.cljs$lang$type = true;
clustermap.components.table.t30366.cljs$lang$ctorStr = "clustermap.components.table/t30366";
clustermap.components.table.t30366.cljs$lang$ctorPrWriter = ((function (map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.table/t30366");
});})(map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
;
clustermap.components.table.t30366.prototype.om$core$IRender$ = true;
clustermap.components.table.t30366.prototype.om$core$IRender$render$arity$1 = ((function (map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (this__14971__auto__){var self__ = this;
var this__14971__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs30369 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs30369))?sablono.interpreter.attributes.call(null,attrs30369):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30369))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30369)], null))));
})()," to ",(function (){var attrs30370 = (function (){var x__11828__auto__ = (self__.from + self__.size);var y__11829__auto__ = self__.count;return ((x__11828__auto__ < y__11829__auto__) ? x__11828__auto__ : y__11829__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs30370))?sablono.interpreter.attributes.call(null,attrs30370):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30370))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30370)], null))));
})()," of ",(function (){var attrs30371 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs30371))?sablono.interpreter.attributes.call(null,attrs30371):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30371))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30371)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__11821__auto__ = (0);var y__11822__auto__ = (self__.from - self__.size);return ((x__11821__auto__ > y__11822__auto__) ? x__11821__auto__ : y__11822__auto__);
})());
});})(this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__14971__auto____$1,map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
},"Last")));
});})(map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
;
clustermap.components.table.t30366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (_30368){var self__ = this;
var _30368__$1 = this;return self__.meta30367;
});})(map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
;
clustermap.components.table.t30366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function (_30368,meta30367__$1){var self__ = this;
var _30368__$1 = this;return (new clustermap.components.table.t30366(self__.p__30355,self__.owner,self__.paginate,self__.map__30365,self__.table_data,self__.controls,self__.size,self__.from,self__.count,self__.opts,self__.map__30364,meta30367__$1));
});})(map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t30366 = ((function (map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size){
return (function __GT_t30366(p__30355__$1,owner__$1,paginate__$1,map__30365__$2,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__30364__$2,meta30367){return (new clustermap.components.table.t30366(p__30355__$1,owner__$1,paginate__$1,map__30365__$2,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__30364__$2,meta30367));
});})(map__30364,map__30364__$1,controls,map__30365,map__30365__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t30366(p__30355,owner,paginate,map__30365__$1,table_data,controls,size,from,count,opts,map__30364__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__30372){var map__30385 = p__30372;var map__30385__$1 = ((cljs.core.seq_QMARK_.call(null,map__30385))?cljs.core.apply.call(null,cljs.core.hash_map,map__30385):map__30385);var record = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t30386 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t30386 = (function (columns,record,map__30385,p__30372,render_table_row,meta30387){
this.columns = columns;
this.record = record;
this.map__30385 = map__30385;
this.p__30372 = p__30372;
this.render_table_row = render_table_row;
this.meta30387 = meta30387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t30386.cljs$lang$type = true;
clustermap.components.table.t30386.cljs$lang$ctorStr = "clustermap.components.table/t30386";
clustermap.components.table.t30386.cljs$lang$ctorPrWriter = ((function (map__30385,map__30385__$1,record,columns){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.table/t30386");
});})(map__30385,map__30385__$1,record,columns))
;
clustermap.components.table.t30386.prototype.om$core$IRender$ = true;
clustermap.components.table.t30386.prototype.om$core$IRender$render$arity$1 = ((function (map__30385,map__30385__$1,record,columns){
return (function (this__14971__auto__){var self__ = this;
var this__14971__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__12252__auto__ = ((function (this__14971__auto____$1,map__30385,map__30385__$1,record,columns){
return (function iter__30389(s__30390){return (new cljs.core.LazySeq(null,((function (this__14971__auto____$1,map__30385,map__30385__$1,record,columns){
return (function (){var s__30390__$1 = s__30390;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30390__$1);if(temp__4126__auto__)
{var s__30390__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30390__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30390__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30392 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30391 = (0);while(true){
if((i__30391 < size__12251__auto__))
{var col = cljs.core._nth.call(null,c__12250__auto__,i__30391);cljs.core.chunk_append.call(null,b__30392,(function (){var map__30395 = col;var map__30395__$1 = ((cljs.core.seq_QMARK_.call(null,map__30395))?cljs.core.apply.call(null,cljs.core.hash_map,map__30395):map__30395);var render_fn = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11514__auto__ = render_fn;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__30397 = (i__30391 + (1));
i__30391 = G__30397;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30392),iter__30389.call(null,cljs.core.chunk_rest.call(null,s__30390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30392),null);
}
} else
{var col = cljs.core.first.call(null,s__30390__$2);return cljs.core.cons.call(null,(function (){var map__30396 = col;var map__30396__$1 = ((cljs.core.seq_QMARK_.call(null,map__30396))?cljs.core.apply.call(null,cljs.core.hash_map,map__30396):map__30396);var render_fn = cljs.core.get.call(null,map__30396__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__30396__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__30396__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__11514__auto__ = render_fn;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__30389.call(null,cljs.core.rest.call(null,s__30390__$2)));
}
} else
{return null;
}
break;
}
});})(this__14971__auto____$1,map__30385,map__30385__$1,record,columns))
,null,null));
});})(this__14971__auto____$1,map__30385,map__30385__$1,record,columns))
;return iter__12252__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__30385,map__30385__$1,record,columns))
;
clustermap.components.table.t30386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30385,map__30385__$1,record,columns){
return (function (_30388){var self__ = this;
var _30388__$1 = this;return self__.meta30387;
});})(map__30385,map__30385__$1,record,columns))
;
clustermap.components.table.t30386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30385,map__30385__$1,record,columns){
return (function (_30388,meta30387__$1){var self__ = this;
var _30388__$1 = this;return (new clustermap.components.table.t30386(self__.columns,self__.record,self__.map__30385,self__.p__30372,self__.render_table_row,meta30387__$1));
});})(map__30385,map__30385__$1,record,columns))
;
clustermap.components.table.__GT_t30386 = ((function (map__30385,map__30385__$1,record,columns){
return (function __GT_t30386(columns__$1,record__$1,map__30385__$2,p__30372__$1,render_table_row__$1,meta30387){return (new clustermap.components.table.t30386(columns__$1,record__$1,map__30385__$2,p__30372__$1,render_table_row__$1,meta30387));
});})(map__30385,map__30385__$1,record,columns))
;
}
return (new clustermap.components.table.t30386(columns,record,map__30385__$1,p__30372,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__30398,owner,opts){var map__30414 = p__30398;var map__30414__$1 = ((cljs.core.seq_QMARK_.call(null,map__30414))?cljs.core.apply.call(null,cljs.core.hash_map,map__30414):map__30414);var props = map__30414__$1;var table_data = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30415 = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30415__$1 = ((cljs.core.seq_QMARK_.call(null,map__30415))?cljs.core.apply.call(null,cljs.core.hash_map,map__30415):map__30415);var controls = map__30415__$1;var columns = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs30416 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30416))?sablono.interpreter.attributes.call(null,attrs30416):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30416))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs30417 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__12252__auto__ = ((function (attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view){
return (function iter__30421(s__30422){return (new cljs.core.LazySeq(null,((function (attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view){
return (function (){var s__30422__$1 = s__30422;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30422__$1);if(temp__4126__auto__)
{var s__30422__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30422__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30422__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30424 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30423 = (0);while(true){
if((i__30423 < size__12251__auto__))
{var col = cljs.core._nth.call(null,c__12250__auto__,i__30423);cljs.core.chunk_append.call(null,b__30424,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__30429 = (i__30423 + (1));
i__30423 = G__30429;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30424),iter__30421.call(null,cljs.core.chunk_rest.call(null,s__30422__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30424),null);
}
} else
{var col = cljs.core.first.call(null,s__30422__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__30421.call(null,cljs.core.rest.call(null,s__30422__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view))
;return iter__12252__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs30417))?sablono.interpreter.attributes.call(null,attrs30417):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30417))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30417)], null))));
})(),(function (){var attrs30418 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs30418))?sablono.interpreter.attributes.call(null,attrs30418):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30418))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30418)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30416),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs30419 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__12252__auto__ = ((function (attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view){
return (function iter__30425(s__30426){return (new cljs.core.LazySeq(null,((function (attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view){
return (function (){var s__30426__$1 = s__30426;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30426__$1);if(temp__4126__auto__)
{var s__30426__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30426__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30426__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30428 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30427 = (0);while(true){
if((i__30427 < size__12251__auto__))
{var col = cljs.core._nth.call(null,c__12250__auto__,i__30427);cljs.core.chunk_append.call(null,b__30428,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__30430 = (i__30427 + (1));
i__30427 = G__30430;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30428),iter__30425.call(null,cljs.core.chunk_rest.call(null,s__30426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30428),null);
}
} else
{var col = cljs.core.first.call(null,s__30426__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__30425.call(null,cljs.core.rest.call(null,s__30426__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view))
;return iter__12252__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs30419))?sablono.interpreter.attributes.call(null,attrs30419):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30419))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30419)], null))));
})(),(function (){var attrs30420 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs30416,map__30414,map__30414__$1,props,table_data,map__30415,map__30415__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs30420))?sablono.interpreter.attributes.call(null,attrs30420):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30420))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30420)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__30431,owner){var map__30444 = p__30431;var map__30444__$1 = ((cljs.core.seq_QMARK_.call(null,map__30444))?cljs.core.apply.call(null,cljs.core.hash_map,map__30444):map__30444);var props = map__30444__$1;var map__30445 = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30445__$1 = ((cljs.core.seq_QMARK_.call(null,map__30445))?cljs.core.apply.call(null,cljs.core.hash_map,map__30445):map__30445);var table_state = map__30445__$1;var table_data = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30446 = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30446__$1 = ((cljs.core.seq_QMARK_.call(null,map__30446))?cljs.core.apply.call(null,cljs.core.hash_map,map__30446):map__30446);var controls = map__30446__$1;var index = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t30447 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t30447 = (function (sort_spec,table_component,map__30444,owner,props,table_data,index,map__30445,filter_spec,columns,table_state,controls,size,map__30446,p__30431,from,meta30448){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.map__30444 = map__30444;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.index = index;
this.map__30445 = map__30445;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__30446 = map__30446;
this.p__30431 = p__30431;
this.from = from;
this.meta30448 = meta30448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t30447.cljs$lang$type = true;
clustermap.components.table.t30447.cljs$lang$ctorStr = "clustermap.components.table/t30447";
clustermap.components.table.t30447.cljs$lang$ctorPrWriter = ((function (map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.table/t30447");
});})(map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t30447.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t30447.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__30450,p__30451){var self__ = this;
var map__30452 = p__30450;var map__30452__$1 = ((cljs.core.seq_QMARK_.call(null,map__30452))?cljs.core.apply.call(null,cljs.core.hash_map,map__30452):map__30452);var next_props = map__30452__$1;var map__30453 = cljs.core.get.call(null,map__30452__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__30453__$1 = ((cljs.core.seq_QMARK_.call(null,map__30453))?cljs.core.apply.call(null,cljs.core.hash_map,map__30453):map__30453);var next_table_state = map__30453__$1;var next_table_data = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__30454 = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30454__$1 = ((cljs.core.seq_QMARK_.call(null,map__30454))?cljs.core.apply.call(null,cljs.core.hash_map,map__30454):map__30454);var next_controls = map__30454__$1;var next_index = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__30452__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30455 = p__30451;var map__30455__$1 = ((cljs.core.seq_QMARK_.call(null,map__30455))?cljs.core.apply.call(null,cljs.core.hash_map,map__30455):map__30455);var next_state = map__30455__$1;var table_data_resource = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t30447.prototype.om$core$IRender$ = true;
clustermap.components.table.t30447.prototype.om$core$IRender$render$arity$1 = ((function (map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t30447.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t30447.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t30447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_30449){var self__ = this;
var _30449__$1 = this;return self__.meta30448;
});})(map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t30447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_30449,meta30448__$1){var self__ = this;
var _30449__$1 = this;return (new clustermap.components.table.t30447(self__.sort_spec,self__.table_component,self__.map__30444,self__.owner,self__.props,self__.table_data,self__.index,self__.map__30445,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.map__30446,self__.p__30431,self__.from,meta30448__$1));
});})(map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t30447 = ((function (map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t30447(sort_spec__$1,table_component__$1,map__30444__$2,owner__$1,props__$1,table_data__$1,index__$1,map__30445__$2,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__30446__$2,p__30431__$1,from__$1,meta30448){return (new clustermap.components.table.t30447(sort_spec__$1,table_component__$1,map__30444__$2,owner__$1,props__$1,table_data__$1,index__$1,map__30445__$2,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__30446__$2,p__30431__$1,from__$1,meta30448));
});})(map__30444,map__30444__$1,props,map__30445,map__30445__$1,table_state,table_data,map__30446,map__30446__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t30447(sort_spec,table_component,map__30444__$1,owner,props,table_data,index,map__30445__$1,filter_spec,columns,table_state,controls,size,map__30446__$1,p__30431,from,null));
});

//# sourceMappingURL=table.js.map