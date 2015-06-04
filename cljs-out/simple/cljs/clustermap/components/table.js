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
clustermap.components.table.order_col = (function order_col(controls,p__24155,p__24156){var map__24170 = p__24155;var map__24170__$1 = ((cljs.core.seq_QMARK_.call(null,map__24170))?cljs.core.apply.call(null,cljs.core.hash_map,map__24170):map__24170);var table_data = map__24170__$1;var current_sort_spec = cljs.core.get.call(null,map__24170__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24171 = p__24156;var map__24171__$1 = ((cljs.core.seq_QMARK_.call(null,map__24171))?cljs.core.apply.call(null,cljs.core.hash_map,map__24171):map__24171);var col = map__24171__$1;var render_fn = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24172 = current_sort_spec__$1;var G__24172__$1 = (((G__24172 == null))?null:cljs.core.keys.call(null,G__24172));var G__24172__$2 = (((G__24172__$1 == null))?null:cljs.core.first.call(null,G__24172__$1));return G__24172__$2;
})();var current_sort_dir = (function (){var G__24173 = current_sort_spec__$1;var G__24173__$1 = (((G__24173 == null))?null:current_sort_key.call(null,G__24173));var G__24173__$2 = (((G__24173__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24173__$1));return G__24173__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24174 = cljs.core._EQ_;var expr__24175 = current_sort_dir;if(cljs.core.truth_(pred__24174.call(null,"asc",expr__24175)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24170,map__24170__$1,table_data,current_sort_spec,map__24171,map__24171__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24180 = cljs.core._EQ_;var expr__24181 = current_sort_dir;if(cljs.core.truth_(pred__24180.call(null,"asc",expr__24181)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24180.call(null,"desc",expr__24181)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24170,map__24170__$1,table_data,current_sort_spec,map__24171,map__24171__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24179 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24179))?sablono.interpreter.attributes.call(null,attrs24179):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24179))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24179)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24183,owner,opts){var map__24192 = p__24183;var map__24192__$1 = ((cljs.core.seq_QMARK_.call(null,map__24192))?cljs.core.apply.call(null,cljs.core.hash_map,map__24192):map__24192);var controls = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24193 = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24193__$1 = ((cljs.core.seq_QMARK_.call(null,map__24193))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);var table_data = map__24193__$1;var count = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24194 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24194 = (function (owner,map__24192,paginate,table_data,controls,map__24193,size,from,count,opts,p__24183,meta24195){
this.owner = owner;
this.map__24192 = map__24192;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.map__24193 = map__24193;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.p__24183 = p__24183;
this.meta24195 = meta24195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24194.cljs$lang$type = true;
clustermap.components.table.t24194.cljs$lang$ctorStr = "clustermap.components.table/t24194";
clustermap.components.table.t24194.cljs$lang$ctorPrWriter = ((function (map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24194");
});})(map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
;
clustermap.components.table.t24194.prototype.om$core$IRender$ = true;
clustermap.components.table.t24194.prototype.om$core$IRender$render$arity$1 = ((function (map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24197 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24197))?sablono.interpreter.attributes.call(null,attrs24197):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24197))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24197)], null))));
})()," to ",(function (){var attrs24198 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24198))?sablono.interpreter.attributes.call(null,attrs24198):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24198))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24198)], null))));
})()," of ",(function (){var attrs24199 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24199))?sablono.interpreter.attributes.call(null,attrs24199):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24199))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24199)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
},"Last")));
});})(map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
;
clustermap.components.table.t24194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (_24196){var self__ = this;
var _24196__$1 = this;return self__.meta24195;
});})(map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
;
clustermap.components.table.t24194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function (_24196,meta24195__$1){var self__ = this;
var _24196__$1 = this;return (new clustermap.components.table.t24194(self__.owner,self__.map__24192,self__.paginate,self__.table_data,self__.controls,self__.map__24193,self__.size,self__.from,self__.count,self__.opts,self__.p__24183,meta24195__$1));
});})(map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24194 = ((function (map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size){
return (function __GT_t24194(owner__$1,map__24192__$2,paginate__$1,table_data__$1,controls__$1,map__24193__$2,size__$1,from__$1,count__$1,opts__$1,p__24183__$1,meta24195){return (new clustermap.components.table.t24194(owner__$1,map__24192__$2,paginate__$1,table_data__$1,controls__$1,map__24193__$2,size__$1,from__$1,count__$1,opts__$1,p__24183__$1,meta24195));
});})(map__24192,map__24192__$1,controls,map__24193,map__24193__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24194(owner,map__24192__$1,paginate,table_data,controls,map__24193__$1,size,from,count,opts,p__24183,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24200){var map__24213 = p__24200;var map__24213__$1 = ((cljs.core.seq_QMARK_.call(null,map__24213))?cljs.core.apply.call(null,cljs.core.hash_map,map__24213):map__24213);var record = cljs.core.get.call(null,map__24213__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24213__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24214 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24214 = (function (columns,record,map__24213,p__24200,render_table_row,meta24215){
this.columns = columns;
this.record = record;
this.map__24213 = map__24213;
this.p__24200 = p__24200;
this.render_table_row = render_table_row;
this.meta24215 = meta24215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24214.cljs$lang$type = true;
clustermap.components.table.t24214.cljs$lang$ctorStr = "clustermap.components.table/t24214";
clustermap.components.table.t24214.cljs$lang$ctorPrWriter = ((function (map__24213,map__24213__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24214");
});})(map__24213,map__24213__$1,record,columns))
;
clustermap.components.table.t24214.prototype.om$core$IRender$ = true;
clustermap.components.table.t24214.prototype.om$core$IRender$render$arity$1 = ((function (map__24213,map__24213__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24213,map__24213__$1,record,columns){
return (function iter__24217(s__24218){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24213,map__24213__$1,record,columns){
return (function (){var s__24218__$1 = s__24218;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24218__$1);if(temp__4126__auto__)
{var s__24218__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24218__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24218__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24220 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24219 = (0);while(true){
if((i__24219 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24219);cljs.core.chunk_append.call(null,b__24220,(function (){var map__24223 = col;var map__24223__$1 = ((cljs.core.seq_QMARK_.call(null,map__24223))?cljs.core.apply.call(null,cljs.core.hash_map,map__24223):map__24223);var render_fn = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24225 = (i__24219 + (1));
i__24219 = G__24225;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24220),iter__24217.call(null,cljs.core.chunk_rest.call(null,s__24218__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24220),null);
}
} else
{var col = cljs.core.first.call(null,s__24218__$2);return cljs.core.cons.call(null,(function (){var map__24224 = col;var map__24224__$1 = ((cljs.core.seq_QMARK_.call(null,map__24224))?cljs.core.apply.call(null,cljs.core.hash_map,map__24224):map__24224);var render_fn = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24217.call(null,cljs.core.rest.call(null,s__24218__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24213,map__24213__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24213,map__24213__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24213,map__24213__$1,record,columns))
;
clustermap.components.table.t24214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24213,map__24213__$1,record,columns){
return (function (_24216){var self__ = this;
var _24216__$1 = this;return self__.meta24215;
});})(map__24213,map__24213__$1,record,columns))
;
clustermap.components.table.t24214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24213,map__24213__$1,record,columns){
return (function (_24216,meta24215__$1){var self__ = this;
var _24216__$1 = this;return (new clustermap.components.table.t24214(self__.columns,self__.record,self__.map__24213,self__.p__24200,self__.render_table_row,meta24215__$1));
});})(map__24213,map__24213__$1,record,columns))
;
clustermap.components.table.__GT_t24214 = ((function (map__24213,map__24213__$1,record,columns){
return (function __GT_t24214(columns__$1,record__$1,map__24213__$2,p__24200__$1,render_table_row__$1,meta24215){return (new clustermap.components.table.t24214(columns__$1,record__$1,map__24213__$2,p__24200__$1,render_table_row__$1,meta24215));
});})(map__24213,map__24213__$1,record,columns))
;
}
return (new clustermap.components.table.t24214(columns,record,map__24213__$1,p__24200,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24226,owner,opts){var map__24242 = p__24226;var map__24242__$1 = ((cljs.core.seq_QMARK_.call(null,map__24242))?cljs.core.apply.call(null,cljs.core.hash_map,map__24242):map__24242);var props = map__24242__$1;var table_data = cljs.core.get.call(null,map__24242__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24243 = cljs.core.get.call(null,map__24242__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24243__$1 = ((cljs.core.seq_QMARK_.call(null,map__24243))?cljs.core.apply.call(null,cljs.core.hash_map,map__24243):map__24243);var controls = map__24243__$1;var columns = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24244 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24244))?sablono.interpreter.attributes.call(null,attrs24244):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24244))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24245 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view){
return (function iter__24249(s__24250){return (new cljs.core.LazySeq(null,((function (attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view){
return (function (){var s__24250__$1 = s__24250;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24250__$1);if(temp__4126__auto__)
{var s__24250__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24250__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24250__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24252 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24251 = (0);while(true){
if((i__24251 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24251);cljs.core.chunk_append.call(null,b__24252,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24257 = (i__24251 + (1));
i__24251 = G__24257;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24252),iter__24249.call(null,cljs.core.chunk_rest.call(null,s__24250__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24252),null);
}
} else
{var col = cljs.core.first.call(null,s__24250__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24249.call(null,cljs.core.rest.call(null,s__24250__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24245))?sablono.interpreter.attributes.call(null,attrs24245):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24245))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24245)], null))));
})(),(function (){var attrs24246 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24246))?sablono.interpreter.attributes.call(null,attrs24246):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24246))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24246)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24244),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24247 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view){
return (function iter__24253(s__24254){return (new cljs.core.LazySeq(null,((function (attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view){
return (function (){var s__24254__$1 = s__24254;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24254__$1);if(temp__4126__auto__)
{var s__24254__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24254__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24254__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24256 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24255 = (0);while(true){
if((i__24255 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24255);cljs.core.chunk_append.call(null,b__24256,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24258 = (i__24255 + (1));
i__24255 = G__24258;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24256),iter__24253.call(null,cljs.core.chunk_rest.call(null,s__24254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24256),null);
}
} else
{var col = cljs.core.first.call(null,s__24254__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24253.call(null,cljs.core.rest.call(null,s__24254__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24247))?sablono.interpreter.attributes.call(null,attrs24247):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24247))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24247)], null))));
})(),(function (){var attrs24248 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24244,map__24242,map__24242__$1,props,table_data,map__24243,map__24243__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24248))?sablono.interpreter.attributes.call(null,attrs24248):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24248))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24248)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24259,owner){var map__24272 = p__24259;var map__24272__$1 = ((cljs.core.seq_QMARK_.call(null,map__24272))?cljs.core.apply.call(null,cljs.core.hash_map,map__24272):map__24272);var props = map__24272__$1;var map__24273 = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24273__$1 = ((cljs.core.seq_QMARK_.call(null,map__24273))?cljs.core.apply.call(null,cljs.core.hash_map,map__24273):map__24273);var table_state = map__24273__$1;var table_data = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24274 = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24274__$1 = ((cljs.core.seq_QMARK_.call(null,map__24274))?cljs.core.apply.call(null,cljs.core.hash_map,map__24274):map__24274);var controls = map__24274__$1;var index = cljs.core.get.call(null,map__24274__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24274__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24274__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24274__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24274__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24275 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24275 = (function (map__24273,sort_spec,table_component,owner,props,table_data,map__24272,map__24274,index,filter_spec,columns,table_state,controls,size,p__24259,from,meta24276){
this.map__24273 = map__24273;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.map__24272 = map__24272;
this.map__24274 = map__24274;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.p__24259 = p__24259;
this.from = from;
this.meta24276 = meta24276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24275.cljs$lang$type = true;
clustermap.components.table.t24275.cljs$lang$ctorStr = "clustermap.components.table/t24275";
clustermap.components.table.t24275.cljs$lang$ctorPrWriter = ((function (map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24275");
});})(map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24275.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24275.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24278,p__24279){var self__ = this;
var map__24280 = p__24278;var map__24280__$1 = ((cljs.core.seq_QMARK_.call(null,map__24280))?cljs.core.apply.call(null,cljs.core.hash_map,map__24280):map__24280);var next_props = map__24280__$1;var map__24281 = cljs.core.get.call(null,map__24280__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24281__$1 = ((cljs.core.seq_QMARK_.call(null,map__24281))?cljs.core.apply.call(null,cljs.core.hash_map,map__24281):map__24281);var next_table_state = map__24281__$1;var next_table_data = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24282 = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24282__$1 = ((cljs.core.seq_QMARK_.call(null,map__24282))?cljs.core.apply.call(null,cljs.core.hash_map,map__24282):map__24282);var next_controls = map__24282__$1;var next_index = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24280__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24283 = p__24279;var map__24283__$1 = ((cljs.core.seq_QMARK_.call(null,map__24283))?cljs.core.apply.call(null,cljs.core.hash_map,map__24283):map__24283);var next_state = map__24283__$1;var table_data_resource = cljs.core.get.call(null,map__24283__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24275.prototype.om$core$IRender$ = true;
clustermap.components.table.t24275.prototype.om$core$IRender$render$arity$1 = ((function (map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24275.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24275.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24277){var self__ = this;
var _24277__$1 = this;return self__.meta24276;
});})(map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24277,meta24276__$1){var self__ = this;
var _24277__$1 = this;return (new clustermap.components.table.t24275(self__.map__24273,self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.table_data,self__.map__24272,self__.map__24274,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.p__24259,self__.from,meta24276__$1));
});})(map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24275 = ((function (map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24275(map__24273__$2,sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,map__24272__$2,map__24274__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,p__24259__$1,from__$1,meta24276){return (new clustermap.components.table.t24275(map__24273__$2,sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,map__24272__$2,map__24274__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,p__24259__$1,from__$1,meta24276));
});})(map__24272,map__24272__$1,props,map__24273,map__24273__$1,table_state,table_data,map__24274,map__24274__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24275(map__24273__$1,sort_spec,table_component,owner,props,table_data,map__24272__$1,map__24274__$1,index,filter_spec,columns,table_state,controls,size,p__24259,from,null));
});
