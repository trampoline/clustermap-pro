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
clustermap.components.table.order_col = (function order_col(controls,p__24126,p__24127){var map__24141 = p__24126;var map__24141__$1 = ((cljs.core.seq_QMARK_.call(null,map__24141))?cljs.core.apply.call(null,cljs.core.hash_map,map__24141):map__24141);var table_data = map__24141__$1;var current_sort_spec = cljs.core.get.call(null,map__24141__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24142 = p__24127;var map__24142__$1 = ((cljs.core.seq_QMARK_.call(null,map__24142))?cljs.core.apply.call(null,cljs.core.hash_map,map__24142):map__24142);var col = map__24142__$1;var render_fn = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24143 = current_sort_spec__$1;var G__24143__$1 = (((G__24143 == null))?null:cljs.core.keys.call(null,G__24143));var G__24143__$2 = (((G__24143__$1 == null))?null:cljs.core.first.call(null,G__24143__$1));return G__24143__$2;
})();var current_sort_dir = (function (){var G__24144 = current_sort_spec__$1;var G__24144__$1 = (((G__24144 == null))?null:current_sort_key.call(null,G__24144));var G__24144__$2 = (((G__24144__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24144__$1));return G__24144__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24145 = cljs.core._EQ_;var expr__24146 = current_sort_dir;if(cljs.core.truth_(pred__24145.call(null,"asc",expr__24146)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24141,map__24141__$1,table_data,current_sort_spec,map__24142,map__24142__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24151 = cljs.core._EQ_;var expr__24152 = current_sort_dir;if(cljs.core.truth_(pred__24151.call(null,"asc",expr__24152)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24151.call(null,"desc",expr__24152)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24141,map__24141__$1,table_data,current_sort_spec,map__24142,map__24142__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24150 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24150))?sablono.interpreter.attributes.call(null,attrs24150):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24150))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24150)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24154,owner,opts){var map__24163 = p__24154;var map__24163__$1 = ((cljs.core.seq_QMARK_.call(null,map__24163))?cljs.core.apply.call(null,cljs.core.hash_map,map__24163):map__24163);var controls = cljs.core.get.call(null,map__24163__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24164 = cljs.core.get.call(null,map__24163__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24164__$1 = ((cljs.core.seq_QMARK_.call(null,map__24164))?cljs.core.apply.call(null,cljs.core.hash_map,map__24164):map__24164);var table_data = map__24164__$1;var count = cljs.core.get.call(null,map__24164__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24164__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24164__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24165 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24165 = (function (p__24154,owner,paginate,table_data,map__24164,controls,size,map__24163,from,count,opts,meta24166){
this.p__24154 = p__24154;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__24164 = map__24164;
this.controls = controls;
this.size = size;
this.map__24163 = map__24163;
this.from = from;
this.count = count;
this.opts = opts;
this.meta24166 = meta24166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24165.cljs$lang$type = true;
clustermap.components.table.t24165.cljs$lang$ctorStr = "clustermap.components.table/t24165";
clustermap.components.table.t24165.cljs$lang$ctorPrWriter = ((function (map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24165");
});})(map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
;
clustermap.components.table.t24165.prototype.om$core$IRender$ = true;
clustermap.components.table.t24165.prototype.om$core$IRender$render$arity$1 = ((function (map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24168 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24168))?sablono.interpreter.attributes.call(null,attrs24168):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24168))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24168)], null))));
})()," to ",(function (){var attrs24169 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24169))?sablono.interpreter.attributes.call(null,attrs24169):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24169))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24169)], null))));
})()," of ",(function (){var attrs24170 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24170))?sablono.interpreter.attributes.call(null,attrs24170):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24170))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24170)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
},"Last")));
});})(map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
;
clustermap.components.table.t24165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (_24167){var self__ = this;
var _24167__$1 = this;return self__.meta24166;
});})(map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
;
clustermap.components.table.t24165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function (_24167,meta24166__$1){var self__ = this;
var _24167__$1 = this;return (new clustermap.components.table.t24165(self__.p__24154,self__.owner,self__.paginate,self__.table_data,self__.map__24164,self__.controls,self__.size,self__.map__24163,self__.from,self__.count,self__.opts,meta24166__$1));
});})(map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24165 = ((function (map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size){
return (function __GT_t24165(p__24154__$1,owner__$1,paginate__$1,table_data__$1,map__24164__$2,controls__$1,size__$1,map__24163__$2,from__$1,count__$1,opts__$1,meta24166){return (new clustermap.components.table.t24165(p__24154__$1,owner__$1,paginate__$1,table_data__$1,map__24164__$2,controls__$1,size__$1,map__24163__$2,from__$1,count__$1,opts__$1,meta24166));
});})(map__24163,map__24163__$1,controls,map__24164,map__24164__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24165(p__24154,owner,paginate,table_data,map__24164__$1,controls,size,map__24163__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24171){var map__24184 = p__24171;var map__24184__$1 = ((cljs.core.seq_QMARK_.call(null,map__24184))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184):map__24184);var record = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24185 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24185 = (function (columns,record,map__24184,p__24171,render_table_row,meta24186){
this.columns = columns;
this.record = record;
this.map__24184 = map__24184;
this.p__24171 = p__24171;
this.render_table_row = render_table_row;
this.meta24186 = meta24186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24185.cljs$lang$type = true;
clustermap.components.table.t24185.cljs$lang$ctorStr = "clustermap.components.table/t24185";
clustermap.components.table.t24185.cljs$lang$ctorPrWriter = ((function (map__24184,map__24184__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24185");
});})(map__24184,map__24184__$1,record,columns))
;
clustermap.components.table.t24185.prototype.om$core$IRender$ = true;
clustermap.components.table.t24185.prototype.om$core$IRender$render$arity$1 = ((function (map__24184,map__24184__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24184,map__24184__$1,record,columns){
return (function iter__24188(s__24189){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24184,map__24184__$1,record,columns){
return (function (){var s__24189__$1 = s__24189;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24189__$1);if(temp__4126__auto__)
{var s__24189__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24189__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24189__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24191 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24190 = (0);while(true){
if((i__24190 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24190);cljs.core.chunk_append.call(null,b__24191,(function (){var map__24194 = col;var map__24194__$1 = ((cljs.core.seq_QMARK_.call(null,map__24194))?cljs.core.apply.call(null,cljs.core.hash_map,map__24194):map__24194);var render_fn = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24196 = (i__24190 + (1));
i__24190 = G__24196;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24191),iter__24188.call(null,cljs.core.chunk_rest.call(null,s__24189__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24191),null);
}
} else
{var col = cljs.core.first.call(null,s__24189__$2);return cljs.core.cons.call(null,(function (){var map__24195 = col;var map__24195__$1 = ((cljs.core.seq_QMARK_.call(null,map__24195))?cljs.core.apply.call(null,cljs.core.hash_map,map__24195):map__24195);var render_fn = cljs.core.get.call(null,map__24195__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24195__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24195__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24188.call(null,cljs.core.rest.call(null,s__24189__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24184,map__24184__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24184,map__24184__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24184,map__24184__$1,record,columns))
;
clustermap.components.table.t24185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24184,map__24184__$1,record,columns){
return (function (_24187){var self__ = this;
var _24187__$1 = this;return self__.meta24186;
});})(map__24184,map__24184__$1,record,columns))
;
clustermap.components.table.t24185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24184,map__24184__$1,record,columns){
return (function (_24187,meta24186__$1){var self__ = this;
var _24187__$1 = this;return (new clustermap.components.table.t24185(self__.columns,self__.record,self__.map__24184,self__.p__24171,self__.render_table_row,meta24186__$1));
});})(map__24184,map__24184__$1,record,columns))
;
clustermap.components.table.__GT_t24185 = ((function (map__24184,map__24184__$1,record,columns){
return (function __GT_t24185(columns__$1,record__$1,map__24184__$2,p__24171__$1,render_table_row__$1,meta24186){return (new clustermap.components.table.t24185(columns__$1,record__$1,map__24184__$2,p__24171__$1,render_table_row__$1,meta24186));
});})(map__24184,map__24184__$1,record,columns))
;
}
return (new clustermap.components.table.t24185(columns,record,map__24184__$1,p__24171,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24197,owner,opts){var map__24213 = p__24197;var map__24213__$1 = ((cljs.core.seq_QMARK_.call(null,map__24213))?cljs.core.apply.call(null,cljs.core.hash_map,map__24213):map__24213);var props = map__24213__$1;var table_data = cljs.core.get.call(null,map__24213__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24214 = cljs.core.get.call(null,map__24213__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24214__$1 = ((cljs.core.seq_QMARK_.call(null,map__24214))?cljs.core.apply.call(null,cljs.core.hash_map,map__24214):map__24214);var controls = map__24214__$1;var columns = cljs.core.get.call(null,map__24214__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24214__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24215 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24215))?sablono.interpreter.attributes.call(null,attrs24215):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24215))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24216 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view){
return (function iter__24220(s__24221){return (new cljs.core.LazySeq(null,((function (attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view){
return (function (){var s__24221__$1 = s__24221;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24221__$1);if(temp__4126__auto__)
{var s__24221__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24221__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24221__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24223 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24222 = (0);while(true){
if((i__24222 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24222);cljs.core.chunk_append.call(null,b__24223,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24228 = (i__24222 + (1));
i__24222 = G__24228;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24223),iter__24220.call(null,cljs.core.chunk_rest.call(null,s__24221__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24223),null);
}
} else
{var col = cljs.core.first.call(null,s__24221__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24220.call(null,cljs.core.rest.call(null,s__24221__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24216))?sablono.interpreter.attributes.call(null,attrs24216):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24216))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24216)], null))));
})(),(function (){var attrs24217 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24217))?sablono.interpreter.attributes.call(null,attrs24217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24217)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24215),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24218 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view){
return (function iter__24224(s__24225){return (new cljs.core.LazySeq(null,((function (attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view){
return (function (){var s__24225__$1 = s__24225;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24225__$1);if(temp__4126__auto__)
{var s__24225__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24225__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24225__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24227 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24226 = (0);while(true){
if((i__24226 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24226);cljs.core.chunk_append.call(null,b__24227,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24229 = (i__24226 + (1));
i__24226 = G__24229;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24227),iter__24224.call(null,cljs.core.chunk_rest.call(null,s__24225__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24227),null);
}
} else
{var col = cljs.core.first.call(null,s__24225__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24224.call(null,cljs.core.rest.call(null,s__24225__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24218))?sablono.interpreter.attributes.call(null,attrs24218):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24218))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24218)], null))));
})(),(function (){var attrs24219 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24215,map__24213,map__24213__$1,props,table_data,map__24214,map__24214__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24219))?sablono.interpreter.attributes.call(null,attrs24219):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24219))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24219)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24230,owner){var map__24243 = p__24230;var map__24243__$1 = ((cljs.core.seq_QMARK_.call(null,map__24243))?cljs.core.apply.call(null,cljs.core.hash_map,map__24243):map__24243);var props = map__24243__$1;var map__24244 = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24244__$1 = ((cljs.core.seq_QMARK_.call(null,map__24244))?cljs.core.apply.call(null,cljs.core.hash_map,map__24244):map__24244);var table_state = map__24244__$1;var table_data = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24245 = cljs.core.get.call(null,map__24244__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24245__$1 = ((cljs.core.seq_QMARK_.call(null,map__24245))?cljs.core.apply.call(null,cljs.core.hash_map,map__24245):map__24245);var controls = map__24245__$1;var index = cljs.core.get.call(null,map__24245__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24245__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24245__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24245__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24245__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24246 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24246 = (function (sort_spec,table_component,owner,props,map__24245,table_data,map__24244,index,filter_spec,map__24243,columns,table_state,controls,size,p__24230,from,meta24247){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__24245 = map__24245;
this.table_data = table_data;
this.map__24244 = map__24244;
this.index = index;
this.filter_spec = filter_spec;
this.map__24243 = map__24243;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.p__24230 = p__24230;
this.from = from;
this.meta24247 = meta24247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24246.cljs$lang$type = true;
clustermap.components.table.t24246.cljs$lang$ctorStr = "clustermap.components.table/t24246";
clustermap.components.table.t24246.cljs$lang$ctorPrWriter = ((function (map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24246");
});})(map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24246.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24246.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24249,p__24250){var self__ = this;
var map__24251 = p__24249;var map__24251__$1 = ((cljs.core.seq_QMARK_.call(null,map__24251))?cljs.core.apply.call(null,cljs.core.hash_map,map__24251):map__24251);var next_props = map__24251__$1;var map__24252 = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24252__$1 = ((cljs.core.seq_QMARK_.call(null,map__24252))?cljs.core.apply.call(null,cljs.core.hash_map,map__24252):map__24252);var next_table_state = map__24252__$1;var next_table_data = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24253 = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24253__$1 = ((cljs.core.seq_QMARK_.call(null,map__24253))?cljs.core.apply.call(null,cljs.core.hash_map,map__24253):map__24253);var next_controls = map__24253__$1;var next_index = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24254 = p__24250;var map__24254__$1 = ((cljs.core.seq_QMARK_.call(null,map__24254))?cljs.core.apply.call(null,cljs.core.hash_map,map__24254):map__24254);var next_state = map__24254__$1;var table_data_resource = cljs.core.get.call(null,map__24254__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24246.prototype.om$core$IRender$ = true;
clustermap.components.table.t24246.prototype.om$core$IRender$render$arity$1 = ((function (map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24246.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24246.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24248){var self__ = this;
var _24248__$1 = this;return self__.meta24247;
});})(map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24248,meta24247__$1){var self__ = this;
var _24248__$1 = this;return (new clustermap.components.table.t24246(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.map__24245,self__.table_data,self__.map__24244,self__.index,self__.filter_spec,self__.map__24243,self__.columns,self__.table_state,self__.controls,self__.size,self__.p__24230,self__.from,meta24247__$1));
});})(map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24246 = ((function (map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24246(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__24245__$2,table_data__$1,map__24244__$2,index__$1,filter_spec__$1,map__24243__$2,columns__$1,table_state__$1,controls__$1,size__$1,p__24230__$1,from__$1,meta24247){return (new clustermap.components.table.t24246(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__24245__$2,table_data__$1,map__24244__$2,index__$1,filter_spec__$1,map__24243__$2,columns__$1,table_state__$1,controls__$1,size__$1,p__24230__$1,from__$1,meta24247));
});})(map__24243,map__24243__$1,props,map__24244,map__24244__$1,table_state,table_data,map__24245,map__24245__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24246(sort_spec,table_component,owner,props,map__24245__$1,table_data,map__24244__$1,index,filter_spec,map__24243__$1,columns,table_state,controls,size,p__24230,from,null));
});
