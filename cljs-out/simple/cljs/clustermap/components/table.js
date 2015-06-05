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
clustermap.components.table.order_col = (function order_col(controls,p__24203,p__24204){var map__24218 = p__24203;var map__24218__$1 = ((cljs.core.seq_QMARK_.call(null,map__24218))?cljs.core.apply.call(null,cljs.core.hash_map,map__24218):map__24218);var table_data = map__24218__$1;var current_sort_spec = cljs.core.get.call(null,map__24218__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24219 = p__24204;var map__24219__$1 = ((cljs.core.seq_QMARK_.call(null,map__24219))?cljs.core.apply.call(null,cljs.core.hash_map,map__24219):map__24219);var col = map__24219__$1;var render_fn = cljs.core.get.call(null,map__24219__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24219__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24219__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24219__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24220 = current_sort_spec__$1;var G__24220__$1 = (((G__24220 == null))?null:cljs.core.keys.call(null,G__24220));var G__24220__$2 = (((G__24220__$1 == null))?null:cljs.core.first.call(null,G__24220__$1));return G__24220__$2;
})();var current_sort_dir = (function (){var G__24221 = current_sort_spec__$1;var G__24221__$1 = (((G__24221 == null))?null:current_sort_key.call(null,G__24221));var G__24221__$2 = (((G__24221__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24221__$1));return G__24221__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24222 = cljs.core._EQ_;var expr__24223 = current_sort_dir;if(cljs.core.truth_(pred__24222.call(null,"asc",expr__24223)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24218,map__24218__$1,table_data,current_sort_spec,map__24219,map__24219__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24228 = cljs.core._EQ_;var expr__24229 = current_sort_dir;if(cljs.core.truth_(pred__24228.call(null,"asc",expr__24229)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24228.call(null,"desc",expr__24229)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24218,map__24218__$1,table_data,current_sort_spec,map__24219,map__24219__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24227 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24227))?sablono.interpreter.attributes.call(null,attrs24227):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24227))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24227)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24231,owner,opts){var map__24240 = p__24231;var map__24240__$1 = ((cljs.core.seq_QMARK_.call(null,map__24240))?cljs.core.apply.call(null,cljs.core.hash_map,map__24240):map__24240);var controls = cljs.core.get.call(null,map__24240__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24241 = cljs.core.get.call(null,map__24240__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24241__$1 = ((cljs.core.seq_QMARK_.call(null,map__24241))?cljs.core.apply.call(null,cljs.core.hash_map,map__24241):map__24241);var table_data = map__24241__$1;var count = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24242 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24242 = (function (owner,paginate,table_data,map__24240,map__24241,controls,size,p__24231,from,count,opts,meta24243){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__24240 = map__24240;
this.map__24241 = map__24241;
this.controls = controls;
this.size = size;
this.p__24231 = p__24231;
this.from = from;
this.count = count;
this.opts = opts;
this.meta24243 = meta24243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24242.cljs$lang$type = true;
clustermap.components.table.t24242.cljs$lang$ctorStr = "clustermap.components.table/t24242";
clustermap.components.table.t24242.cljs$lang$ctorPrWriter = ((function (map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24242");
});})(map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
;
clustermap.components.table.t24242.prototype.om$core$IRender$ = true;
clustermap.components.table.t24242.prototype.om$core$IRender$render$arity$1 = ((function (map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24245 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24245))?sablono.interpreter.attributes.call(null,attrs24245):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24245))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24245)], null))));
})()," to ",(function (){var attrs24246 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24246))?sablono.interpreter.attributes.call(null,attrs24246):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24246))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24246)], null))));
})()," of ",(function (){var attrs24247 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24247))?sablono.interpreter.attributes.call(null,attrs24247):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24247))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24247)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
},"Last")));
});})(map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
;
clustermap.components.table.t24242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (_24244){var self__ = this;
var _24244__$1 = this;return self__.meta24243;
});})(map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
;
clustermap.components.table.t24242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function (_24244,meta24243__$1){var self__ = this;
var _24244__$1 = this;return (new clustermap.components.table.t24242(self__.owner,self__.paginate,self__.table_data,self__.map__24240,self__.map__24241,self__.controls,self__.size,self__.p__24231,self__.from,self__.count,self__.opts,meta24243__$1));
});})(map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24242 = ((function (map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size){
return (function __GT_t24242(owner__$1,paginate__$1,table_data__$1,map__24240__$2,map__24241__$2,controls__$1,size__$1,p__24231__$1,from__$1,count__$1,opts__$1,meta24243){return (new clustermap.components.table.t24242(owner__$1,paginate__$1,table_data__$1,map__24240__$2,map__24241__$2,controls__$1,size__$1,p__24231__$1,from__$1,count__$1,opts__$1,meta24243));
});})(map__24240,map__24240__$1,controls,map__24241,map__24241__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24242(owner,paginate,table_data,map__24240__$1,map__24241__$1,controls,size,p__24231,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24248){var map__24261 = p__24248;var map__24261__$1 = ((cljs.core.seq_QMARK_.call(null,map__24261))?cljs.core.apply.call(null,cljs.core.hash_map,map__24261):map__24261);var record = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24262 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24262 = (function (columns,record,map__24261,p__24248,render_table_row,meta24263){
this.columns = columns;
this.record = record;
this.map__24261 = map__24261;
this.p__24248 = p__24248;
this.render_table_row = render_table_row;
this.meta24263 = meta24263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24262.cljs$lang$type = true;
clustermap.components.table.t24262.cljs$lang$ctorStr = "clustermap.components.table/t24262";
clustermap.components.table.t24262.cljs$lang$ctorPrWriter = ((function (map__24261,map__24261__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24262");
});})(map__24261,map__24261__$1,record,columns))
;
clustermap.components.table.t24262.prototype.om$core$IRender$ = true;
clustermap.components.table.t24262.prototype.om$core$IRender$render$arity$1 = ((function (map__24261,map__24261__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24261,map__24261__$1,record,columns){
return (function iter__24265(s__24266){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24261,map__24261__$1,record,columns){
return (function (){var s__24266__$1 = s__24266;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24266__$1);if(temp__4126__auto__)
{var s__24266__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24266__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24266__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24268 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24267 = (0);while(true){
if((i__24267 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24267);cljs.core.chunk_append.call(null,b__24268,(function (){var map__24271 = col;var map__24271__$1 = ((cljs.core.seq_QMARK_.call(null,map__24271))?cljs.core.apply.call(null,cljs.core.hash_map,map__24271):map__24271);var render_fn = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24273 = (i__24267 + (1));
i__24267 = G__24273;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24268),iter__24265.call(null,cljs.core.chunk_rest.call(null,s__24266__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24268),null);
}
} else
{var col = cljs.core.first.call(null,s__24266__$2);return cljs.core.cons.call(null,(function (){var map__24272 = col;var map__24272__$1 = ((cljs.core.seq_QMARK_.call(null,map__24272))?cljs.core.apply.call(null,cljs.core.hash_map,map__24272):map__24272);var render_fn = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24272__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24265.call(null,cljs.core.rest.call(null,s__24266__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24261,map__24261__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24261,map__24261__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24261,map__24261__$1,record,columns))
;
clustermap.components.table.t24262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24261,map__24261__$1,record,columns){
return (function (_24264){var self__ = this;
var _24264__$1 = this;return self__.meta24263;
});})(map__24261,map__24261__$1,record,columns))
;
clustermap.components.table.t24262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24261,map__24261__$1,record,columns){
return (function (_24264,meta24263__$1){var self__ = this;
var _24264__$1 = this;return (new clustermap.components.table.t24262(self__.columns,self__.record,self__.map__24261,self__.p__24248,self__.render_table_row,meta24263__$1));
});})(map__24261,map__24261__$1,record,columns))
;
clustermap.components.table.__GT_t24262 = ((function (map__24261,map__24261__$1,record,columns){
return (function __GT_t24262(columns__$1,record__$1,map__24261__$2,p__24248__$1,render_table_row__$1,meta24263){return (new clustermap.components.table.t24262(columns__$1,record__$1,map__24261__$2,p__24248__$1,render_table_row__$1,meta24263));
});})(map__24261,map__24261__$1,record,columns))
;
}
return (new clustermap.components.table.t24262(columns,record,map__24261__$1,p__24248,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24274,owner,opts){var map__24290 = p__24274;var map__24290__$1 = ((cljs.core.seq_QMARK_.call(null,map__24290))?cljs.core.apply.call(null,cljs.core.hash_map,map__24290):map__24290);var props = map__24290__$1;var table_data = cljs.core.get.call(null,map__24290__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24291 = cljs.core.get.call(null,map__24290__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24291__$1 = ((cljs.core.seq_QMARK_.call(null,map__24291))?cljs.core.apply.call(null,cljs.core.hash_map,map__24291):map__24291);var controls = map__24291__$1;var columns = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24292 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24292))?sablono.interpreter.attributes.call(null,attrs24292):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24292))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24293 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view){
return (function iter__24297(s__24298){return (new cljs.core.LazySeq(null,((function (attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view){
return (function (){var s__24298__$1 = s__24298;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24298__$1);if(temp__4126__auto__)
{var s__24298__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24298__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24298__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24300 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24299 = (0);while(true){
if((i__24299 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24299);cljs.core.chunk_append.call(null,b__24300,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24305 = (i__24299 + (1));
i__24299 = G__24305;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24300),iter__24297.call(null,cljs.core.chunk_rest.call(null,s__24298__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24300),null);
}
} else
{var col = cljs.core.first.call(null,s__24298__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24297.call(null,cljs.core.rest.call(null,s__24298__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24293))?sablono.interpreter.attributes.call(null,attrs24293):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24293))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24293)], null))));
})(),(function (){var attrs24294 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24294))?sablono.interpreter.attributes.call(null,attrs24294):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24294))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24294)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24292),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24295 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view){
return (function iter__24301(s__24302){return (new cljs.core.LazySeq(null,((function (attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view){
return (function (){var s__24302__$1 = s__24302;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24302__$1);if(temp__4126__auto__)
{var s__24302__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24302__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24302__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24304 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24303 = (0);while(true){
if((i__24303 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24303);cljs.core.chunk_append.call(null,b__24304,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24306 = (i__24303 + (1));
i__24303 = G__24306;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24304),iter__24301.call(null,cljs.core.chunk_rest.call(null,s__24302__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24304),null);
}
} else
{var col = cljs.core.first.call(null,s__24302__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24301.call(null,cljs.core.rest.call(null,s__24302__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24295))?sablono.interpreter.attributes.call(null,attrs24295):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24295))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24295)], null))));
})(),(function (){var attrs24296 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24292,map__24290,map__24290__$1,props,table_data,map__24291,map__24291__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24296))?sablono.interpreter.attributes.call(null,attrs24296):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24296))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24296)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24307,owner){var map__24320 = p__24307;var map__24320__$1 = ((cljs.core.seq_QMARK_.call(null,map__24320))?cljs.core.apply.call(null,cljs.core.hash_map,map__24320):map__24320);var props = map__24320__$1;var map__24321 = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24321__$1 = ((cljs.core.seq_QMARK_.call(null,map__24321))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);var table_state = map__24321__$1;var table_data = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24322 = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24322__$1 = ((cljs.core.seq_QMARK_.call(null,map__24322))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322):map__24322);var controls = map__24322__$1;var index = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24323 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24323 = (function (sort_spec,table_component,owner,map__24322,map__24320,p__24307,props,table_data,index,filter_spec,columns,table_state,map__24321,controls,size,from,meta24324){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__24322 = map__24322;
this.map__24320 = map__24320;
this.p__24307 = p__24307;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__24321 = map__24321;
this.controls = controls;
this.size = size;
this.from = from;
this.meta24324 = meta24324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24323.cljs$lang$type = true;
clustermap.components.table.t24323.cljs$lang$ctorStr = "clustermap.components.table/t24323";
clustermap.components.table.t24323.cljs$lang$ctorPrWriter = ((function (map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24323");
});})(map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24323.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24323.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24326,p__24327){var self__ = this;
var map__24328 = p__24326;var map__24328__$1 = ((cljs.core.seq_QMARK_.call(null,map__24328))?cljs.core.apply.call(null,cljs.core.hash_map,map__24328):map__24328);var next_props = map__24328__$1;var map__24329 = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24329__$1 = ((cljs.core.seq_QMARK_.call(null,map__24329))?cljs.core.apply.call(null,cljs.core.hash_map,map__24329):map__24329);var next_table_state = map__24329__$1;var next_table_data = cljs.core.get.call(null,map__24329__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24330 = cljs.core.get.call(null,map__24329__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24330__$1 = ((cljs.core.seq_QMARK_.call(null,map__24330))?cljs.core.apply.call(null,cljs.core.hash_map,map__24330):map__24330);var next_controls = map__24330__$1;var next_index = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24331 = p__24327;var map__24331__$1 = ((cljs.core.seq_QMARK_.call(null,map__24331))?cljs.core.apply.call(null,cljs.core.hash_map,map__24331):map__24331);var next_state = map__24331__$1;var table_data_resource = cljs.core.get.call(null,map__24331__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24323.prototype.om$core$IRender$ = true;
clustermap.components.table.t24323.prototype.om$core$IRender$render$arity$1 = ((function (map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24323.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24323.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24325){var self__ = this;
var _24325__$1 = this;return self__.meta24324;
});})(map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24325,meta24324__$1){var self__ = this;
var _24325__$1 = this;return (new clustermap.components.table.t24323(self__.sort_spec,self__.table_component,self__.owner,self__.map__24322,self__.map__24320,self__.p__24307,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.map__24321,self__.controls,self__.size,self__.from,meta24324__$1));
});})(map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24323 = ((function (map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24323(sort_spec__$1,table_component__$1,owner__$1,map__24322__$2,map__24320__$2,p__24307__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__24321__$2,controls__$1,size__$1,from__$1,meta24324){return (new clustermap.components.table.t24323(sort_spec__$1,table_component__$1,owner__$1,map__24322__$2,map__24320__$2,p__24307__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__24321__$2,controls__$1,size__$1,from__$1,meta24324));
});})(map__24320,map__24320__$1,props,map__24321,map__24321__$1,table_state,table_data,map__24322,map__24322__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24323(sort_spec,table_component,owner,map__24322__$1,map__24320__$1,p__24307,props,table_data,index,filter_spec,columns,table_state,map__24321__$1,controls,size,from,null));
});
