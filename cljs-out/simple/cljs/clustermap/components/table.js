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
clustermap.components.table.order_col = (function order_col(controls,p__24193,p__24194){var map__24208 = p__24193;var map__24208__$1 = ((cljs.core.seq_QMARK_.call(null,map__24208))?cljs.core.apply.call(null,cljs.core.hash_map,map__24208):map__24208);var table_data = map__24208__$1;var current_sort_spec = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24209 = p__24194;var map__24209__$1 = ((cljs.core.seq_QMARK_.call(null,map__24209))?cljs.core.apply.call(null,cljs.core.hash_map,map__24209):map__24209);var col = map__24209__$1;var render_fn = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24209__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24210 = current_sort_spec__$1;var G__24210__$1 = (((G__24210 == null))?null:cljs.core.keys.call(null,G__24210));var G__24210__$2 = (((G__24210__$1 == null))?null:cljs.core.first.call(null,G__24210__$1));return G__24210__$2;
})();var current_sort_dir = (function (){var G__24211 = current_sort_spec__$1;var G__24211__$1 = (((G__24211 == null))?null:current_sort_key.call(null,G__24211));var G__24211__$2 = (((G__24211__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24211__$1));return G__24211__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24212 = cljs.core._EQ_;var expr__24213 = current_sort_dir;if(cljs.core.truth_(pred__24212.call(null,"asc",expr__24213)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24208,map__24208__$1,table_data,current_sort_spec,map__24209,map__24209__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24218 = cljs.core._EQ_;var expr__24219 = current_sort_dir;if(cljs.core.truth_(pred__24218.call(null,"asc",expr__24219)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24218.call(null,"desc",expr__24219)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24208,map__24208__$1,table_data,current_sort_spec,map__24209,map__24209__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24217 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24217))?sablono.interpreter.attributes.call(null,attrs24217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24217)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24221,owner,opts){var map__24230 = p__24221;var map__24230__$1 = ((cljs.core.seq_QMARK_.call(null,map__24230))?cljs.core.apply.call(null,cljs.core.hash_map,map__24230):map__24230);var controls = cljs.core.get.call(null,map__24230__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24231 = cljs.core.get.call(null,map__24230__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24231__$1 = ((cljs.core.seq_QMARK_.call(null,map__24231))?cljs.core.apply.call(null,cljs.core.hash_map,map__24231):map__24231);var table_data = map__24231__$1;var count = cljs.core.get.call(null,map__24231__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24231__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24231__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24232 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24232 = (function (map__24231,owner,paginate,table_data,map__24230,controls,size,p__24221,from,count,opts,meta24233){
this.map__24231 = map__24231;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__24230 = map__24230;
this.controls = controls;
this.size = size;
this.p__24221 = p__24221;
this.from = from;
this.count = count;
this.opts = opts;
this.meta24233 = meta24233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24232.cljs$lang$type = true;
clustermap.components.table.t24232.cljs$lang$ctorStr = "clustermap.components.table/t24232";
clustermap.components.table.t24232.cljs$lang$ctorPrWriter = ((function (map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24232");
});})(map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
;
clustermap.components.table.t24232.prototype.om$core$IRender$ = true;
clustermap.components.table.t24232.prototype.om$core$IRender$render$arity$1 = ((function (map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24235 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24235))?sablono.interpreter.attributes.call(null,attrs24235):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24235))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24235)], null))));
})()," to ",(function (){var attrs24236 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24236))?sablono.interpreter.attributes.call(null,attrs24236):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24236))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24236)], null))));
})()," of ",(function (){var attrs24237 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24237))?sablono.interpreter.attributes.call(null,attrs24237):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24237))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24237)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
},"Last")));
});})(map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
;
clustermap.components.table.t24232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (_24234){var self__ = this;
var _24234__$1 = this;return self__.meta24233;
});})(map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
;
clustermap.components.table.t24232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function (_24234,meta24233__$1){var self__ = this;
var _24234__$1 = this;return (new clustermap.components.table.t24232(self__.map__24231,self__.owner,self__.paginate,self__.table_data,self__.map__24230,self__.controls,self__.size,self__.p__24221,self__.from,self__.count,self__.opts,meta24233__$1));
});})(map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24232 = ((function (map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size){
return (function __GT_t24232(map__24231__$2,owner__$1,paginate__$1,table_data__$1,map__24230__$2,controls__$1,size__$1,p__24221__$1,from__$1,count__$1,opts__$1,meta24233){return (new clustermap.components.table.t24232(map__24231__$2,owner__$1,paginate__$1,table_data__$1,map__24230__$2,controls__$1,size__$1,p__24221__$1,from__$1,count__$1,opts__$1,meta24233));
});})(map__24230,map__24230__$1,controls,map__24231,map__24231__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24232(map__24231__$1,owner,paginate,table_data,map__24230__$1,controls,size,p__24221,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24238){var map__24251 = p__24238;var map__24251__$1 = ((cljs.core.seq_QMARK_.call(null,map__24251))?cljs.core.apply.call(null,cljs.core.hash_map,map__24251):map__24251);var record = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24252 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24252 = (function (columns,record,map__24251,p__24238,render_table_row,meta24253){
this.columns = columns;
this.record = record;
this.map__24251 = map__24251;
this.p__24238 = p__24238;
this.render_table_row = render_table_row;
this.meta24253 = meta24253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24252.cljs$lang$type = true;
clustermap.components.table.t24252.cljs$lang$ctorStr = "clustermap.components.table/t24252";
clustermap.components.table.t24252.cljs$lang$ctorPrWriter = ((function (map__24251,map__24251__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24252");
});})(map__24251,map__24251__$1,record,columns))
;
clustermap.components.table.t24252.prototype.om$core$IRender$ = true;
clustermap.components.table.t24252.prototype.om$core$IRender$render$arity$1 = ((function (map__24251,map__24251__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24251,map__24251__$1,record,columns){
return (function iter__24255(s__24256){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24251,map__24251__$1,record,columns){
return (function (){var s__24256__$1 = s__24256;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24256__$1);if(temp__4126__auto__)
{var s__24256__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24256__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24256__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24258 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24257 = (0);while(true){
if((i__24257 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24257);cljs.core.chunk_append.call(null,b__24258,(function (){var map__24261 = col;var map__24261__$1 = ((cljs.core.seq_QMARK_.call(null,map__24261))?cljs.core.apply.call(null,cljs.core.hash_map,map__24261):map__24261);var render_fn = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24263 = (i__24257 + (1));
i__24257 = G__24263;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24258),iter__24255.call(null,cljs.core.chunk_rest.call(null,s__24256__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24258),null);
}
} else
{var col = cljs.core.first.call(null,s__24256__$2);return cljs.core.cons.call(null,(function (){var map__24262 = col;var map__24262__$1 = ((cljs.core.seq_QMARK_.call(null,map__24262))?cljs.core.apply.call(null,cljs.core.hash_map,map__24262):map__24262);var render_fn = cljs.core.get.call(null,map__24262__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24262__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24262__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24255.call(null,cljs.core.rest.call(null,s__24256__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24251,map__24251__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24251,map__24251__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24251,map__24251__$1,record,columns))
;
clustermap.components.table.t24252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24251,map__24251__$1,record,columns){
return (function (_24254){var self__ = this;
var _24254__$1 = this;return self__.meta24253;
});})(map__24251,map__24251__$1,record,columns))
;
clustermap.components.table.t24252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24251,map__24251__$1,record,columns){
return (function (_24254,meta24253__$1){var self__ = this;
var _24254__$1 = this;return (new clustermap.components.table.t24252(self__.columns,self__.record,self__.map__24251,self__.p__24238,self__.render_table_row,meta24253__$1));
});})(map__24251,map__24251__$1,record,columns))
;
clustermap.components.table.__GT_t24252 = ((function (map__24251,map__24251__$1,record,columns){
return (function __GT_t24252(columns__$1,record__$1,map__24251__$2,p__24238__$1,render_table_row__$1,meta24253){return (new clustermap.components.table.t24252(columns__$1,record__$1,map__24251__$2,p__24238__$1,render_table_row__$1,meta24253));
});})(map__24251,map__24251__$1,record,columns))
;
}
return (new clustermap.components.table.t24252(columns,record,map__24251__$1,p__24238,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24264,owner,opts){var map__24280 = p__24264;var map__24280__$1 = ((cljs.core.seq_QMARK_.call(null,map__24280))?cljs.core.apply.call(null,cljs.core.hash_map,map__24280):map__24280);var props = map__24280__$1;var table_data = cljs.core.get.call(null,map__24280__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24281 = cljs.core.get.call(null,map__24280__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24281__$1 = ((cljs.core.seq_QMARK_.call(null,map__24281))?cljs.core.apply.call(null,cljs.core.hash_map,map__24281):map__24281);var controls = map__24281__$1;var columns = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24282 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24282))?sablono.interpreter.attributes.call(null,attrs24282):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24282))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24283 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view){
return (function iter__24287(s__24288){return (new cljs.core.LazySeq(null,((function (attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view){
return (function (){var s__24288__$1 = s__24288;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24288__$1);if(temp__4126__auto__)
{var s__24288__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24288__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24288__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24290 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24289 = (0);while(true){
if((i__24289 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24289);cljs.core.chunk_append.call(null,b__24290,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24295 = (i__24289 + (1));
i__24289 = G__24295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24290),iter__24287.call(null,cljs.core.chunk_rest.call(null,s__24288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24290),null);
}
} else
{var col = cljs.core.first.call(null,s__24288__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24287.call(null,cljs.core.rest.call(null,s__24288__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24283))?sablono.interpreter.attributes.call(null,attrs24283):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24283))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24283)], null))));
})(),(function (){var attrs24284 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24284))?sablono.interpreter.attributes.call(null,attrs24284):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24284))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24284)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24282),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24285 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view){
return (function iter__24291(s__24292){return (new cljs.core.LazySeq(null,((function (attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view){
return (function (){var s__24292__$1 = s__24292;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24292__$1);if(temp__4126__auto__)
{var s__24292__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24292__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24292__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24294 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24293 = (0);while(true){
if((i__24293 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24293);cljs.core.chunk_append.call(null,b__24294,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24296 = (i__24293 + (1));
i__24293 = G__24296;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24294),iter__24291.call(null,cljs.core.chunk_rest.call(null,s__24292__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24294),null);
}
} else
{var col = cljs.core.first.call(null,s__24292__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24291.call(null,cljs.core.rest.call(null,s__24292__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24285))?sablono.interpreter.attributes.call(null,attrs24285):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24285))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24285)], null))));
})(),(function (){var attrs24286 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24282,map__24280,map__24280__$1,props,table_data,map__24281,map__24281__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24286))?sablono.interpreter.attributes.call(null,attrs24286):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24286))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24286)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24297,owner){var map__24310 = p__24297;var map__24310__$1 = ((cljs.core.seq_QMARK_.call(null,map__24310))?cljs.core.apply.call(null,cljs.core.hash_map,map__24310):map__24310);var props = map__24310__$1;var map__24311 = cljs.core.get.call(null,map__24310__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24311__$1 = ((cljs.core.seq_QMARK_.call(null,map__24311))?cljs.core.apply.call(null,cljs.core.hash_map,map__24311):map__24311);var table_state = map__24311__$1;var table_data = cljs.core.get.call(null,map__24311__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24312 = cljs.core.get.call(null,map__24311__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24312__$1 = ((cljs.core.seq_QMARK_.call(null,map__24312))?cljs.core.apply.call(null,cljs.core.hash_map,map__24312):map__24312);var controls = map__24312__$1;var index = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24310__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24313 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24313 = (function (sort_spec,table_component,owner,map__24311,props,table_data,index,map__24310,filter_spec,columns,p__24297,table_state,controls,size,map__24312,from,meta24314){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__24311 = map__24311;
this.props = props;
this.table_data = table_data;
this.index = index;
this.map__24310 = map__24310;
this.filter_spec = filter_spec;
this.columns = columns;
this.p__24297 = p__24297;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__24312 = map__24312;
this.from = from;
this.meta24314 = meta24314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24313.cljs$lang$type = true;
clustermap.components.table.t24313.cljs$lang$ctorStr = "clustermap.components.table/t24313";
clustermap.components.table.t24313.cljs$lang$ctorPrWriter = ((function (map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24313");
});})(map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24313.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24313.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24316,p__24317){var self__ = this;
var map__24318 = p__24316;var map__24318__$1 = ((cljs.core.seq_QMARK_.call(null,map__24318))?cljs.core.apply.call(null,cljs.core.hash_map,map__24318):map__24318);var next_props = map__24318__$1;var map__24319 = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24319__$1 = ((cljs.core.seq_QMARK_.call(null,map__24319))?cljs.core.apply.call(null,cljs.core.hash_map,map__24319):map__24319);var next_table_state = map__24319__$1;var next_table_data = cljs.core.get.call(null,map__24319__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24320 = cljs.core.get.call(null,map__24319__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24320__$1 = ((cljs.core.seq_QMARK_.call(null,map__24320))?cljs.core.apply.call(null,cljs.core.hash_map,map__24320):map__24320);var next_controls = map__24320__$1;var next_index = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24321 = p__24317;var map__24321__$1 = ((cljs.core.seq_QMARK_.call(null,map__24321))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);var next_state = map__24321__$1;var table_data_resource = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24313.prototype.om$core$IRender$ = true;
clustermap.components.table.t24313.prototype.om$core$IRender$render$arity$1 = ((function (map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24313.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24313.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24315){var self__ = this;
var _24315__$1 = this;return self__.meta24314;
});})(map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24315,meta24314__$1){var self__ = this;
var _24315__$1 = this;return (new clustermap.components.table.t24313(self__.sort_spec,self__.table_component,self__.owner,self__.map__24311,self__.props,self__.table_data,self__.index,self__.map__24310,self__.filter_spec,self__.columns,self__.p__24297,self__.table_state,self__.controls,self__.size,self__.map__24312,self__.from,meta24314__$1));
});})(map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24313 = ((function (map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24313(sort_spec__$1,table_component__$1,owner__$1,map__24311__$2,props__$1,table_data__$1,index__$1,map__24310__$2,filter_spec__$1,columns__$1,p__24297__$1,table_state__$1,controls__$1,size__$1,map__24312__$2,from__$1,meta24314){return (new clustermap.components.table.t24313(sort_spec__$1,table_component__$1,owner__$1,map__24311__$2,props__$1,table_data__$1,index__$1,map__24310__$2,filter_spec__$1,columns__$1,p__24297__$1,table_state__$1,controls__$1,size__$1,map__24312__$2,from__$1,meta24314));
});})(map__24310,map__24310__$1,props,map__24311,map__24311__$1,table_state,table_data,map__24312,map__24312__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24313(sort_spec,table_component,owner,map__24311__$1,props,table_data,index,map__24310__$1,filter_spec,columns,p__24297,table_state,controls,size,map__24312__$1,from,null));
});
