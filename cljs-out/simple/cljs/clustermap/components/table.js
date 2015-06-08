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
clustermap.components.table.order_col = (function order_col(controls,p__28229,p__28230){var map__28244 = p__28229;var map__28244__$1 = ((cljs.core.seq_QMARK_.call(null,map__28244))?cljs.core.apply.call(null,cljs.core.hash_map,map__28244):map__28244);var table_data = map__28244__$1;var current_sort_spec = cljs.core.get.call(null,map__28244__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28245 = p__28230;var map__28245__$1 = ((cljs.core.seq_QMARK_.call(null,map__28245))?cljs.core.apply.call(null,cljs.core.hash_map,map__28245):map__28245);var col = map__28245__$1;var render_fn = cljs.core.get.call(null,map__28245__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28245__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28245__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28245__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28246 = current_sort_spec__$1;var G__28246__$1 = (((G__28246 == null))?null:cljs.core.keys.call(null,G__28246));var G__28246__$2 = (((G__28246__$1 == null))?null:cljs.core.first.call(null,G__28246__$1));return G__28246__$2;
})();var current_sort_dir = (function (){var G__28247 = current_sort_spec__$1;var G__28247__$1 = (((G__28247 == null))?null:current_sort_key.call(null,G__28247));var G__28247__$2 = (((G__28247__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28247__$1));return G__28247__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28248 = cljs.core._EQ_;var expr__28249 = current_sort_dir;if(cljs.core.truth_(pred__28248.call(null,"asc",expr__28249)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28244,map__28244__$1,table_data,current_sort_spec,map__28245,map__28245__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28254 = cljs.core._EQ_;var expr__28255 = current_sort_dir;if(cljs.core.truth_(pred__28254.call(null,"asc",expr__28255)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28254.call(null,"desc",expr__28255)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28244,map__28244__$1,table_data,current_sort_spec,map__28245,map__28245__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28253 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28253))?sablono.interpreter.attributes.call(null,attrs28253):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28253))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28253)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28257,owner,opts){var map__28266 = p__28257;var map__28266__$1 = ((cljs.core.seq_QMARK_.call(null,map__28266))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);var controls = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28267 = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28267__$1 = ((cljs.core.seq_QMARK_.call(null,map__28267))?cljs.core.apply.call(null,cljs.core.hash_map,map__28267):map__28267);var table_data = map__28267__$1;var count = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28268 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28268 = (function (map__28267,owner,paginate,table_data,map__28266,controls,p__28257,size,from,count,opts,meta28269){
this.map__28267 = map__28267;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__28266 = map__28266;
this.controls = controls;
this.p__28257 = p__28257;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28269 = meta28269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28268.cljs$lang$type = true;
clustermap.components.table.t28268.cljs$lang$ctorStr = "clustermap.components.table/t28268";
clustermap.components.table.t28268.cljs$lang$ctorPrWriter = ((function (map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28268");
});})(map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
;
clustermap.components.table.t28268.prototype.om$core$IRender$ = true;
clustermap.components.table.t28268.prototype.om$core$IRender$render$arity$1 = ((function (map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28271 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28271))?sablono.interpreter.attributes.call(null,attrs28271):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28271))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28271)], null))));
})()," to ",(function (){var attrs28272 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28272))?sablono.interpreter.attributes.call(null,attrs28272):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28272)], null))));
})()," of ",(function (){var attrs28273 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28273))?sablono.interpreter.attributes.call(null,attrs28273):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28273))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28273)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
},"Last")));
});})(map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
;
clustermap.components.table.t28268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (_28270){var self__ = this;
var _28270__$1 = this;return self__.meta28269;
});})(map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
;
clustermap.components.table.t28268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function (_28270,meta28269__$1){var self__ = this;
var _28270__$1 = this;return (new clustermap.components.table.t28268(self__.map__28267,self__.owner,self__.paginate,self__.table_data,self__.map__28266,self__.controls,self__.p__28257,self__.size,self__.from,self__.count,self__.opts,meta28269__$1));
});})(map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28268 = ((function (map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size){
return (function __GT_t28268(map__28267__$2,owner__$1,paginate__$1,table_data__$1,map__28266__$2,controls__$1,p__28257__$1,size__$1,from__$1,count__$1,opts__$1,meta28269){return (new clustermap.components.table.t28268(map__28267__$2,owner__$1,paginate__$1,table_data__$1,map__28266__$2,controls__$1,p__28257__$1,size__$1,from__$1,count__$1,opts__$1,meta28269));
});})(map__28266,map__28266__$1,controls,map__28267,map__28267__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28268(map__28267__$1,owner,paginate,table_data,map__28266__$1,controls,p__28257,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28274){var map__28287 = p__28274;var map__28287__$1 = ((cljs.core.seq_QMARK_.call(null,map__28287))?cljs.core.apply.call(null,cljs.core.hash_map,map__28287):map__28287);var record = cljs.core.get.call(null,map__28287__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28287__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28288 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28288 = (function (columns,record,map__28287,p__28274,render_table_row,meta28289){
this.columns = columns;
this.record = record;
this.map__28287 = map__28287;
this.p__28274 = p__28274;
this.render_table_row = render_table_row;
this.meta28289 = meta28289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28288.cljs$lang$type = true;
clustermap.components.table.t28288.cljs$lang$ctorStr = "clustermap.components.table/t28288";
clustermap.components.table.t28288.cljs$lang$ctorPrWriter = ((function (map__28287,map__28287__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28288");
});})(map__28287,map__28287__$1,record,columns))
;
clustermap.components.table.t28288.prototype.om$core$IRender$ = true;
clustermap.components.table.t28288.prototype.om$core$IRender$render$arity$1 = ((function (map__28287,map__28287__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28287,map__28287__$1,record,columns){
return (function iter__28291(s__28292){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28287,map__28287__$1,record,columns){
return (function (){var s__28292__$1 = s__28292;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28292__$1);if(temp__4126__auto__)
{var s__28292__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28292__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28292__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28294 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28293 = (0);while(true){
if((i__28293 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28293);cljs.core.chunk_append.call(null,b__28294,(function (){var map__28297 = col;var map__28297__$1 = ((cljs.core.seq_QMARK_.call(null,map__28297))?cljs.core.apply.call(null,cljs.core.hash_map,map__28297):map__28297);var render_fn = cljs.core.get.call(null,map__28297__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28297__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28297__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28299 = (i__28293 + (1));
i__28293 = G__28299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28294),iter__28291.call(null,cljs.core.chunk_rest.call(null,s__28292__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28294),null);
}
} else
{var col = cljs.core.first.call(null,s__28292__$2);return cljs.core.cons.call(null,(function (){var map__28298 = col;var map__28298__$1 = ((cljs.core.seq_QMARK_.call(null,map__28298))?cljs.core.apply.call(null,cljs.core.hash_map,map__28298):map__28298);var render_fn = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28291.call(null,cljs.core.rest.call(null,s__28292__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28287,map__28287__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28287,map__28287__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28287,map__28287__$1,record,columns))
;
clustermap.components.table.t28288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28287,map__28287__$1,record,columns){
return (function (_28290){var self__ = this;
var _28290__$1 = this;return self__.meta28289;
});})(map__28287,map__28287__$1,record,columns))
;
clustermap.components.table.t28288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28287,map__28287__$1,record,columns){
return (function (_28290,meta28289__$1){var self__ = this;
var _28290__$1 = this;return (new clustermap.components.table.t28288(self__.columns,self__.record,self__.map__28287,self__.p__28274,self__.render_table_row,meta28289__$1));
});})(map__28287,map__28287__$1,record,columns))
;
clustermap.components.table.__GT_t28288 = ((function (map__28287,map__28287__$1,record,columns){
return (function __GT_t28288(columns__$1,record__$1,map__28287__$2,p__28274__$1,render_table_row__$1,meta28289){return (new clustermap.components.table.t28288(columns__$1,record__$1,map__28287__$2,p__28274__$1,render_table_row__$1,meta28289));
});})(map__28287,map__28287__$1,record,columns))
;
}
return (new clustermap.components.table.t28288(columns,record,map__28287__$1,p__28274,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28300,owner,opts){var map__28316 = p__28300;var map__28316__$1 = ((cljs.core.seq_QMARK_.call(null,map__28316))?cljs.core.apply.call(null,cljs.core.hash_map,map__28316):map__28316);var props = map__28316__$1;var table_data = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28317 = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28317__$1 = ((cljs.core.seq_QMARK_.call(null,map__28317))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);var controls = map__28317__$1;var columns = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28318 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28318))?sablono.interpreter.attributes.call(null,attrs28318):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28318))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28319 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view){
return (function iter__28323(s__28324){return (new cljs.core.LazySeq(null,((function (attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view){
return (function (){var s__28324__$1 = s__28324;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28324__$1);if(temp__4126__auto__)
{var s__28324__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28324__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28324__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28326 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28325 = (0);while(true){
if((i__28325 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28325);cljs.core.chunk_append.call(null,b__28326,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28331 = (i__28325 + (1));
i__28325 = G__28331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28326),iter__28323.call(null,cljs.core.chunk_rest.call(null,s__28324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28326),null);
}
} else
{var col = cljs.core.first.call(null,s__28324__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28323.call(null,cljs.core.rest.call(null,s__28324__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28319))?sablono.interpreter.attributes.call(null,attrs28319):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28319))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28319)], null))));
})(),(function (){var attrs28320 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28320))?sablono.interpreter.attributes.call(null,attrs28320):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28320))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28320)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28318),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28321 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view){
return (function iter__28327(s__28328){return (new cljs.core.LazySeq(null,((function (attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view){
return (function (){var s__28328__$1 = s__28328;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28328__$1);if(temp__4126__auto__)
{var s__28328__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28328__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28328__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28330 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28329 = (0);while(true){
if((i__28329 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28329);cljs.core.chunk_append.call(null,b__28330,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28332 = (i__28329 + (1));
i__28329 = G__28332;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28330),iter__28327.call(null,cljs.core.chunk_rest.call(null,s__28328__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28330),null);
}
} else
{var col = cljs.core.first.call(null,s__28328__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28327.call(null,cljs.core.rest.call(null,s__28328__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28321))?sablono.interpreter.attributes.call(null,attrs28321):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28321))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28321)], null))));
})(),(function (){var attrs28322 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28318,map__28316,map__28316__$1,props,table_data,map__28317,map__28317__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28322))?sablono.interpreter.attributes.call(null,attrs28322):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28322))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28322)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28333,owner){var map__28372 = p__28333;var map__28372__$1 = ((cljs.core.seq_QMARK_.call(null,map__28372))?cljs.core.apply.call(null,cljs.core.hash_map,map__28372):map__28372);var props = map__28372__$1;var map__28373 = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28373__$1 = ((cljs.core.seq_QMARK_.call(null,map__28373))?cljs.core.apply.call(null,cljs.core.hash_map,map__28373):map__28373);var table_state = map__28373__$1;var table_data = cljs.core.get.call(null,map__28373__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28374 = cljs.core.get.call(null,map__28373__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28374__$1 = ((cljs.core.seq_QMARK_.call(null,map__28374))?cljs.core.apply.call(null,cljs.core.hash_map,map__28374):map__28374);var controls = map__28374__$1;var index = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28375 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28375 = (function (sort_spec,map__28372,table_component,owner,props,table_data,map__28374,index,filter_spec,columns,table_state,p__28333,controls,size,map__28373,from,meta28376){
this.sort_spec = sort_spec;
this.map__28372 = map__28372;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.map__28374 = map__28374;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.p__28333 = p__28333;
this.controls = controls;
this.size = size;
this.map__28373 = map__28373;
this.from = from;
this.meta28376 = meta28376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28375.cljs$lang$type = true;
clustermap.components.table.t28375.cljs$lang$ctorStr = "clustermap.components.table/t28375";
clustermap.components.table.t28375.cljs$lang$ctorPrWriter = ((function (map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28375");
});})(map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28375.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28375.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28378,p__28379){var self__ = this;
var map__28380 = p__28378;var map__28380__$1 = ((cljs.core.seq_QMARK_.call(null,map__28380))?cljs.core.apply.call(null,cljs.core.hash_map,map__28380):map__28380);var next_props = map__28380__$1;var map__28381 = cljs.core.get.call(null,map__28380__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28381__$1 = ((cljs.core.seq_QMARK_.call(null,map__28381))?cljs.core.apply.call(null,cljs.core.hash_map,map__28381):map__28381);var next_table_state = map__28381__$1;var next_table_data = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28382 = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28382__$1 = ((cljs.core.seq_QMARK_.call(null,map__28382))?cljs.core.apply.call(null,cljs.core.hash_map,map__28382):map__28382);var next_controls = map__28382__$1;var next_index = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28380__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28383 = p__28379;var map__28383__$1 = ((cljs.core.seq_QMARK_.call(null,map__28383))?cljs.core.apply.call(null,cljs.core.hash_map,map__28383):map__28383);var fetch_table_data_fn = cljs.core.get.call(null,map__28383__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28380,map__28380__$1,next_props,map__28381,map__28381__$1,next_table_state,next_table_data,map__28382,map__28382__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28383,map__28383__$1,fetch_table_data_fn,map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28380,map__28380__$1,next_props,map__28381,map__28381__$1,next_table_state,next_table_data,map__28382,map__28382__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28383,map__28383__$1,fetch_table_data_fn,map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28396){var state_val_28397 = (state_28396[(1)]);if((state_val_28397 === (5)))
{var inst_28394 = (state_28396[(2)]);var state_28396__$1 = state_28396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28396__$1,inst_28394);
} else
{if((state_val_28397 === (4)))
{var state_28396__$1 = state_28396;var statearr_28398_28410 = state_28396__$1;(statearr_28398_28410[(2)] = null);
(statearr_28398_28410[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28397 === (3)))
{var inst_28386 = (state_28396[(7)]);var inst_28388 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28389 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28390 = (new cljs.core.PersistentVector(null,1,(5),inst_28388,inst_28389,null));var inst_28391 = om.core.update_BANG_.call(null,self__.table_state,inst_28390,inst_28386);var state_28396__$1 = state_28396;var statearr_28399_28411 = state_28396__$1;(statearr_28399_28411[(2)] = inst_28391);
(statearr_28399_28411[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28397 === (2)))
{var inst_28386 = (state_28396[(7)]);var inst_28386__$1 = (state_28396[(2)]);var state_28396__$1 = (function (){var statearr_28400 = state_28396;(statearr_28400[(7)] = inst_28386__$1);
return statearr_28400;
})();if(cljs.core.truth_(inst_28386__$1))
{var statearr_28401_28412 = state_28396__$1;(statearr_28401_28412[(1)] = (3));
} else
{var statearr_28402_28413 = state_28396__$1;(statearr_28402_28413[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28397 === (1)))
{var inst_28384 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28396__$1 = state_28396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28396__$1,(2),inst_28384);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28380,map__28380__$1,next_props,map__28381,map__28381__$1,next_table_state,next_table_data,map__28382,map__28382__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28383,map__28383__$1,fetch_table_data_fn,map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28380,map__28380__$1,next_props,map__28381,map__28381__$1,next_table_state,next_table_data,map__28382,map__28382__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28383,map__28383__$1,fetch_table_data_fn,map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28406 = [null,null,null,null,null,null,null,null];(statearr_28406[(0)] = state_machine__9111__auto__);
(statearr_28406[(1)] = (1));
return statearr_28406;
});
var state_machine__9111__auto____1 = (function (state_28396){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28396);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28407){if((e28407 instanceof Object))
{var ex__9114__auto__ = e28407;var statearr_28408_28414 = state_28396;(statearr_28408_28414[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28415 = state_28396;
state_28396 = G__28415;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28396){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28380,map__28380__$1,next_props,map__28381,map__28381__$1,next_table_state,next_table_data,map__28382,map__28382__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28383,map__28383__$1,fetch_table_data_fn,map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28409 = f__9126__auto__.call(null);(statearr_28409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28380,map__28380__$1,next_props,map__28381,map__28381__$1,next_table_state,next_table_data,map__28382,map__28382__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28383,map__28383__$1,fetch_table_data_fn,map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28375.prototype.om$core$IRender$ = true;
clustermap.components.table.t28375.prototype.om$core$IRender$render$arity$1 = ((function (map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28375.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28375.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28377){var self__ = this;
var _28377__$1 = this;return self__.meta28376;
});})(map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28377,meta28376__$1){var self__ = this;
var _28377__$1 = this;return (new clustermap.components.table.t28375(self__.sort_spec,self__.map__28372,self__.table_component,self__.owner,self__.props,self__.table_data,self__.map__28374,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.p__28333,self__.controls,self__.size,self__.map__28373,self__.from,meta28376__$1));
});})(map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28375 = ((function (map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28375(sort_spec__$1,map__28372__$2,table_component__$1,owner__$1,props__$1,table_data__$1,map__28374__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,p__28333__$1,controls__$1,size__$1,map__28373__$2,from__$1,meta28376){return (new clustermap.components.table.t28375(sort_spec__$1,map__28372__$2,table_component__$1,owner__$1,props__$1,table_data__$1,map__28374__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,p__28333__$1,controls__$1,size__$1,map__28373__$2,from__$1,meta28376));
});})(map__28372,map__28372__$1,props,map__28373,map__28373__$1,table_state,table_data,map__28374,map__28374__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28375(sort_spec,map__28372__$1,table_component,owner,props,table_data,map__28374__$1,index,filter_spec,columns,table_state,p__28333,controls,size,map__28373__$1,from,null));
});
