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
clustermap.components.table.order_col = (function order_col(controls,p__28279,p__28280){var map__28294 = p__28279;var map__28294__$1 = ((cljs.core.seq_QMARK_.call(null,map__28294))?cljs.core.apply.call(null,cljs.core.hash_map,map__28294):map__28294);var table_data = map__28294__$1;var current_sort_spec = cljs.core.get.call(null,map__28294__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28295 = p__28280;var map__28295__$1 = ((cljs.core.seq_QMARK_.call(null,map__28295))?cljs.core.apply.call(null,cljs.core.hash_map,map__28295):map__28295);var col = map__28295__$1;var render_fn = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28296 = current_sort_spec__$1;var G__28296__$1 = (((G__28296 == null))?null:cljs.core.keys.call(null,G__28296));var G__28296__$2 = (((G__28296__$1 == null))?null:cljs.core.first.call(null,G__28296__$1));return G__28296__$2;
})();var current_sort_dir = (function (){var G__28297 = current_sort_spec__$1;var G__28297__$1 = (((G__28297 == null))?null:current_sort_key.call(null,G__28297));var G__28297__$2 = (((G__28297__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28297__$1));return G__28297__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28298 = cljs.core._EQ_;var expr__28299 = current_sort_dir;if(cljs.core.truth_(pred__28298.call(null,"asc",expr__28299)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28294,map__28294__$1,table_data,current_sort_spec,map__28295,map__28295__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28304 = cljs.core._EQ_;var expr__28305 = current_sort_dir;if(cljs.core.truth_(pred__28304.call(null,"asc",expr__28305)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28304.call(null,"desc",expr__28305)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28294,map__28294__$1,table_data,current_sort_spec,map__28295,map__28295__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28303 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28303))?sablono.interpreter.attributes.call(null,attrs28303):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28303))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28303)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28307,owner,opts){var map__28316 = p__28307;var map__28316__$1 = ((cljs.core.seq_QMARK_.call(null,map__28316))?cljs.core.apply.call(null,cljs.core.hash_map,map__28316):map__28316);var controls = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28317 = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28317__$1 = ((cljs.core.seq_QMARK_.call(null,map__28317))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);var table_data = map__28317__$1;var count = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28318 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28318 = (function (owner,p__28307,paginate,table_data,controls,map__28317,map__28316,size,from,count,opts,meta28319){
this.owner = owner;
this.p__28307 = p__28307;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.map__28317 = map__28317;
this.map__28316 = map__28316;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28319 = meta28319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28318.cljs$lang$type = true;
clustermap.components.table.t28318.cljs$lang$ctorStr = "clustermap.components.table/t28318";
clustermap.components.table.t28318.cljs$lang$ctorPrWriter = ((function (map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28318");
});})(map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
;
clustermap.components.table.t28318.prototype.om$core$IRender$ = true;
clustermap.components.table.t28318.prototype.om$core$IRender$render$arity$1 = ((function (map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28321 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28321))?sablono.interpreter.attributes.call(null,attrs28321):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28321))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28321)], null))));
})()," to ",(function (){var attrs28322 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28322))?sablono.interpreter.attributes.call(null,attrs28322):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28322))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28322)], null))));
})()," of ",(function (){var attrs28323 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28323))?sablono.interpreter.attributes.call(null,attrs28323):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28323))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28323)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
},"Last")));
});})(map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
;
clustermap.components.table.t28318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (_28320){var self__ = this;
var _28320__$1 = this;return self__.meta28319;
});})(map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
;
clustermap.components.table.t28318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function (_28320,meta28319__$1){var self__ = this;
var _28320__$1 = this;return (new clustermap.components.table.t28318(self__.owner,self__.p__28307,self__.paginate,self__.table_data,self__.controls,self__.map__28317,self__.map__28316,self__.size,self__.from,self__.count,self__.opts,meta28319__$1));
});})(map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28318 = ((function (map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size){
return (function __GT_t28318(owner__$1,p__28307__$1,paginate__$1,table_data__$1,controls__$1,map__28317__$2,map__28316__$2,size__$1,from__$1,count__$1,opts__$1,meta28319){return (new clustermap.components.table.t28318(owner__$1,p__28307__$1,paginate__$1,table_data__$1,controls__$1,map__28317__$2,map__28316__$2,size__$1,from__$1,count__$1,opts__$1,meta28319));
});})(map__28316,map__28316__$1,controls,map__28317,map__28317__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28318(owner,p__28307,paginate,table_data,controls,map__28317__$1,map__28316__$1,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28324){var map__28337 = p__28324;var map__28337__$1 = ((cljs.core.seq_QMARK_.call(null,map__28337))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);var record = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28338 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28338 = (function (columns,record,map__28337,p__28324,render_table_row,meta28339){
this.columns = columns;
this.record = record;
this.map__28337 = map__28337;
this.p__28324 = p__28324;
this.render_table_row = render_table_row;
this.meta28339 = meta28339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28338.cljs$lang$type = true;
clustermap.components.table.t28338.cljs$lang$ctorStr = "clustermap.components.table/t28338";
clustermap.components.table.t28338.cljs$lang$ctorPrWriter = ((function (map__28337,map__28337__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28338");
});})(map__28337,map__28337__$1,record,columns))
;
clustermap.components.table.t28338.prototype.om$core$IRender$ = true;
clustermap.components.table.t28338.prototype.om$core$IRender$render$arity$1 = ((function (map__28337,map__28337__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28337,map__28337__$1,record,columns){
return (function iter__28341(s__28342){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28337,map__28337__$1,record,columns){
return (function (){var s__28342__$1 = s__28342;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28342__$1);if(temp__4126__auto__)
{var s__28342__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28342__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28342__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28344 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28343 = (0);while(true){
if((i__28343 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28343);cljs.core.chunk_append.call(null,b__28344,(function (){var map__28347 = col;var map__28347__$1 = ((cljs.core.seq_QMARK_.call(null,map__28347))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);var render_fn = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28349 = (i__28343 + (1));
i__28343 = G__28349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28344),iter__28341.call(null,cljs.core.chunk_rest.call(null,s__28342__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28344),null);
}
} else
{var col = cljs.core.first.call(null,s__28342__$2);return cljs.core.cons.call(null,(function (){var map__28348 = col;var map__28348__$1 = ((cljs.core.seq_QMARK_.call(null,map__28348))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);var render_fn = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28341.call(null,cljs.core.rest.call(null,s__28342__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28337,map__28337__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28337,map__28337__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28337,map__28337__$1,record,columns))
;
clustermap.components.table.t28338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28337,map__28337__$1,record,columns){
return (function (_28340){var self__ = this;
var _28340__$1 = this;return self__.meta28339;
});})(map__28337,map__28337__$1,record,columns))
;
clustermap.components.table.t28338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28337,map__28337__$1,record,columns){
return (function (_28340,meta28339__$1){var self__ = this;
var _28340__$1 = this;return (new clustermap.components.table.t28338(self__.columns,self__.record,self__.map__28337,self__.p__28324,self__.render_table_row,meta28339__$1));
});})(map__28337,map__28337__$1,record,columns))
;
clustermap.components.table.__GT_t28338 = ((function (map__28337,map__28337__$1,record,columns){
return (function __GT_t28338(columns__$1,record__$1,map__28337__$2,p__28324__$1,render_table_row__$1,meta28339){return (new clustermap.components.table.t28338(columns__$1,record__$1,map__28337__$2,p__28324__$1,render_table_row__$1,meta28339));
});})(map__28337,map__28337__$1,record,columns))
;
}
return (new clustermap.components.table.t28338(columns,record,map__28337__$1,p__28324,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28350,owner,opts){var map__28366 = p__28350;var map__28366__$1 = ((cljs.core.seq_QMARK_.call(null,map__28366))?cljs.core.apply.call(null,cljs.core.hash_map,map__28366):map__28366);var props = map__28366__$1;var table_data = cljs.core.get.call(null,map__28366__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28367 = cljs.core.get.call(null,map__28366__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28367__$1 = ((cljs.core.seq_QMARK_.call(null,map__28367))?cljs.core.apply.call(null,cljs.core.hash_map,map__28367):map__28367);var controls = map__28367__$1;var columns = cljs.core.get.call(null,map__28367__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28367__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28368 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28368))?sablono.interpreter.attributes.call(null,attrs28368):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28368))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28369 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view){
return (function iter__28373(s__28374){return (new cljs.core.LazySeq(null,((function (attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view){
return (function (){var s__28374__$1 = s__28374;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28374__$1);if(temp__4126__auto__)
{var s__28374__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28374__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28374__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28376 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28375 = (0);while(true){
if((i__28375 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28375);cljs.core.chunk_append.call(null,b__28376,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28381 = (i__28375 + (1));
i__28375 = G__28381;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28376),iter__28373.call(null,cljs.core.chunk_rest.call(null,s__28374__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28376),null);
}
} else
{var col = cljs.core.first.call(null,s__28374__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28373.call(null,cljs.core.rest.call(null,s__28374__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28369))?sablono.interpreter.attributes.call(null,attrs28369):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28369))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28369)], null))));
})(),(function (){var attrs28370 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28370))?sablono.interpreter.attributes.call(null,attrs28370):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28370))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28370)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28368),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28371 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view){
return (function iter__28377(s__28378){return (new cljs.core.LazySeq(null,((function (attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view){
return (function (){var s__28378__$1 = s__28378;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28378__$1);if(temp__4126__auto__)
{var s__28378__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28378__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28378__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28380 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28379 = (0);while(true){
if((i__28379 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28379);cljs.core.chunk_append.call(null,b__28380,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28382 = (i__28379 + (1));
i__28379 = G__28382;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28380),iter__28377.call(null,cljs.core.chunk_rest.call(null,s__28378__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28380),null);
}
} else
{var col = cljs.core.first.call(null,s__28378__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28377.call(null,cljs.core.rest.call(null,s__28378__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28371))?sablono.interpreter.attributes.call(null,attrs28371):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28371))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28371)], null))));
})(),(function (){var attrs28372 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28368,map__28366,map__28366__$1,props,table_data,map__28367,map__28367__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28372))?sablono.interpreter.attributes.call(null,attrs28372):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28372))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28372)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28383,owner){var map__28422 = p__28383;var map__28422__$1 = ((cljs.core.seq_QMARK_.call(null,map__28422))?cljs.core.apply.call(null,cljs.core.hash_map,map__28422):map__28422);var props = map__28422__$1;var map__28423 = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28423__$1 = ((cljs.core.seq_QMARK_.call(null,map__28423))?cljs.core.apply.call(null,cljs.core.hash_map,map__28423):map__28423);var table_state = map__28423__$1;var table_data = cljs.core.get.call(null,map__28423__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28424 = cljs.core.get.call(null,map__28423__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28424__$1 = ((cljs.core.seq_QMARK_.call(null,map__28424))?cljs.core.apply.call(null,cljs.core.hash_map,map__28424):map__28424);var controls = map__28424__$1;var index = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28425 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28425 = (function (sort_spec,table_component,owner,props,table_data,index,filter_spec,columns,map__28424,map__28423,table_state,controls,size,map__28422,p__28383,from,meta28426){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__28424 = map__28424;
this.map__28423 = map__28423;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__28422 = map__28422;
this.p__28383 = p__28383;
this.from = from;
this.meta28426 = meta28426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28425.cljs$lang$type = true;
clustermap.components.table.t28425.cljs$lang$ctorStr = "clustermap.components.table/t28425";
clustermap.components.table.t28425.cljs$lang$ctorPrWriter = ((function (map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28425");
});})(map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28425.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28425.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28428,p__28429){var self__ = this;
var map__28430 = p__28428;var map__28430__$1 = ((cljs.core.seq_QMARK_.call(null,map__28430))?cljs.core.apply.call(null,cljs.core.hash_map,map__28430):map__28430);var next_props = map__28430__$1;var map__28431 = cljs.core.get.call(null,map__28430__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28431__$1 = ((cljs.core.seq_QMARK_.call(null,map__28431))?cljs.core.apply.call(null,cljs.core.hash_map,map__28431):map__28431);var next_table_state = map__28431__$1;var next_table_data = cljs.core.get.call(null,map__28431__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28432 = cljs.core.get.call(null,map__28431__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28432__$1 = ((cljs.core.seq_QMARK_.call(null,map__28432))?cljs.core.apply.call(null,cljs.core.hash_map,map__28432):map__28432);var next_controls = map__28432__$1;var next_index = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28430__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28433 = p__28429;var map__28433__$1 = ((cljs.core.seq_QMARK_.call(null,map__28433))?cljs.core.apply.call(null,cljs.core.hash_map,map__28433):map__28433);var fetch_table_data_fn = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28430,map__28430__$1,next_props,map__28431,map__28431__$1,next_table_state,next_table_data,map__28432,map__28432__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28433,map__28433__$1,fetch_table_data_fn,map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28430,map__28430__$1,next_props,map__28431,map__28431__$1,next_table_state,next_table_data,map__28432,map__28432__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28433,map__28433__$1,fetch_table_data_fn,map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28446){var state_val_28447 = (state_28446[(1)]);if((state_val_28447 === (5)))
{var inst_28444 = (state_28446[(2)]);var state_28446__$1 = state_28446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28446__$1,inst_28444);
} else
{if((state_val_28447 === (4)))
{var state_28446__$1 = state_28446;var statearr_28448_28460 = state_28446__$1;(statearr_28448_28460[(2)] = null);
(statearr_28448_28460[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28447 === (3)))
{var inst_28436 = (state_28446[(7)]);var inst_28438 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28439 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28440 = (new cljs.core.PersistentVector(null,1,(5),inst_28438,inst_28439,null));var inst_28441 = om.core.update_BANG_.call(null,self__.table_state,inst_28440,inst_28436);var state_28446__$1 = state_28446;var statearr_28449_28461 = state_28446__$1;(statearr_28449_28461[(2)] = inst_28441);
(statearr_28449_28461[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28447 === (2)))
{var inst_28436 = (state_28446[(7)]);var inst_28436__$1 = (state_28446[(2)]);var state_28446__$1 = (function (){var statearr_28450 = state_28446;(statearr_28450[(7)] = inst_28436__$1);
return statearr_28450;
})();if(cljs.core.truth_(inst_28436__$1))
{var statearr_28451_28462 = state_28446__$1;(statearr_28451_28462[(1)] = (3));
} else
{var statearr_28452_28463 = state_28446__$1;(statearr_28452_28463[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28447 === (1)))
{var inst_28434 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28446__$1 = state_28446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28446__$1,(2),inst_28434);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28430,map__28430__$1,next_props,map__28431,map__28431__$1,next_table_state,next_table_data,map__28432,map__28432__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28433,map__28433__$1,fetch_table_data_fn,map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28430,map__28430__$1,next_props,map__28431,map__28431__$1,next_table_state,next_table_data,map__28432,map__28432__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28433,map__28433__$1,fetch_table_data_fn,map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28456 = [null,null,null,null,null,null,null,null];(statearr_28456[(0)] = state_machine__9111__auto__);
(statearr_28456[(1)] = (1));
return statearr_28456;
});
var state_machine__9111__auto____1 = (function (state_28446){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28446);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28457){if((e28457 instanceof Object))
{var ex__9114__auto__ = e28457;var statearr_28458_28464 = state_28446;(statearr_28458_28464[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28457;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28465 = state_28446;
state_28446 = G__28465;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28446){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28430,map__28430__$1,next_props,map__28431,map__28431__$1,next_table_state,next_table_data,map__28432,map__28432__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28433,map__28433__$1,fetch_table_data_fn,map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28459 = f__9126__auto__.call(null);(statearr_28459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28430,map__28430__$1,next_props,map__28431,map__28431__$1,next_table_state,next_table_data,map__28432,map__28432__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28433,map__28433__$1,fetch_table_data_fn,map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28425.prototype.om$core$IRender$ = true;
clustermap.components.table.t28425.prototype.om$core$IRender$render$arity$1 = ((function (map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28425.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28425.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28427){var self__ = this;
var _28427__$1 = this;return self__.meta28426;
});})(map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28427,meta28426__$1){var self__ = this;
var _28427__$1 = this;return (new clustermap.components.table.t28425(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.map__28424,self__.map__28423,self__.table_state,self__.controls,self__.size,self__.map__28422,self__.p__28383,self__.from,meta28426__$1));
});})(map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28425 = ((function (map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28425(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__28424__$2,map__28423__$2,table_state__$1,controls__$1,size__$1,map__28422__$2,p__28383__$1,from__$1,meta28426){return (new clustermap.components.table.t28425(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__28424__$2,map__28423__$2,table_state__$1,controls__$1,size__$1,map__28422__$2,p__28383__$1,from__$1,meta28426));
});})(map__28422,map__28422__$1,props,map__28423,map__28423__$1,table_state,table_data,map__28424,map__28424__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28425(sort_spec,table_component,owner,props,table_data,index,filter_spec,columns,map__28424__$1,map__28423__$1,table_state,controls,size,map__28422__$1,p__28383,from,null));
});
