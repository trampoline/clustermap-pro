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
clustermap.components.table.order_col = (function order_col(controls,p__24429,p__24430){var map__24444 = p__24429;var map__24444__$1 = ((cljs.core.seq_QMARK_.call(null,map__24444))?cljs.core.apply.call(null,cljs.core.hash_map,map__24444):map__24444);var table_data = map__24444__$1;var current_sort_spec = cljs.core.get.call(null,map__24444__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24445 = p__24430;var map__24445__$1 = ((cljs.core.seq_QMARK_.call(null,map__24445))?cljs.core.apply.call(null,cljs.core.hash_map,map__24445):map__24445);var col = map__24445__$1;var render_fn = cljs.core.get.call(null,map__24445__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24445__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24445__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24445__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24446 = current_sort_spec__$1;var G__24446__$1 = (((G__24446 == null))?null:cljs.core.keys.call(null,G__24446));var G__24446__$2 = (((G__24446__$1 == null))?null:cljs.core.first.call(null,G__24446__$1));return G__24446__$2;
})();var current_sort_dir = (function (){var G__24447 = current_sort_spec__$1;var G__24447__$1 = (((G__24447 == null))?null:current_sort_key.call(null,G__24447));var G__24447__$2 = (((G__24447__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24447__$1));return G__24447__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24448 = cljs.core._EQ_;var expr__24449 = current_sort_dir;if(cljs.core.truth_(pred__24448.call(null,"asc",expr__24449)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24444,map__24444__$1,table_data,current_sort_spec,map__24445,map__24445__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24454 = cljs.core._EQ_;var expr__24455 = current_sort_dir;if(cljs.core.truth_(pred__24454.call(null,"asc",expr__24455)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24454.call(null,"desc",expr__24455)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24444,map__24444__$1,table_data,current_sort_spec,map__24445,map__24445__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24453 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24453))?sablono.interpreter.attributes.call(null,attrs24453):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24453))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24453)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24457,owner,opts){var map__24466 = p__24457;var map__24466__$1 = ((cljs.core.seq_QMARK_.call(null,map__24466))?cljs.core.apply.call(null,cljs.core.hash_map,map__24466):map__24466);var controls = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24467 = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24467__$1 = ((cljs.core.seq_QMARK_.call(null,map__24467))?cljs.core.apply.call(null,cljs.core.hash_map,map__24467):map__24467);var table_data = map__24467__$1;var count = cljs.core.get.call(null,map__24467__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24467__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24467__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24468 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24468 = (function (owner,map__24467,paginate,table_data,controls,size,p__24457,from,count,opts,map__24466,meta24469){
this.owner = owner;
this.map__24467 = map__24467;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.p__24457 = p__24457;
this.from = from;
this.count = count;
this.opts = opts;
this.map__24466 = map__24466;
this.meta24469 = meta24469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24468.cljs$lang$type = true;
clustermap.components.table.t24468.cljs$lang$ctorStr = "clustermap.components.table/t24468";
clustermap.components.table.t24468.cljs$lang$ctorPrWriter = ((function (map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24468");
});})(map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
;
clustermap.components.table.t24468.prototype.om$core$IRender$ = true;
clustermap.components.table.t24468.prototype.om$core$IRender$render$arity$1 = ((function (map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24471 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24471))?sablono.interpreter.attributes.call(null,attrs24471):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24471))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24471)], null))));
})()," to ",(function (){var attrs24472 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24472))?sablono.interpreter.attributes.call(null,attrs24472):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24472))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24472)], null))));
})()," of ",(function (){var attrs24473 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24473))?sablono.interpreter.attributes.call(null,attrs24473):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24473))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24473)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
},"Last")));
});})(map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
;
clustermap.components.table.t24468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (_24470){var self__ = this;
var _24470__$1 = this;return self__.meta24469;
});})(map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
;
clustermap.components.table.t24468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function (_24470,meta24469__$1){var self__ = this;
var _24470__$1 = this;return (new clustermap.components.table.t24468(self__.owner,self__.map__24467,self__.paginate,self__.table_data,self__.controls,self__.size,self__.p__24457,self__.from,self__.count,self__.opts,self__.map__24466,meta24469__$1));
});})(map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24468 = ((function (map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size){
return (function __GT_t24468(owner__$1,map__24467__$2,paginate__$1,table_data__$1,controls__$1,size__$1,p__24457__$1,from__$1,count__$1,opts__$1,map__24466__$2,meta24469){return (new clustermap.components.table.t24468(owner__$1,map__24467__$2,paginate__$1,table_data__$1,controls__$1,size__$1,p__24457__$1,from__$1,count__$1,opts__$1,map__24466__$2,meta24469));
});})(map__24466,map__24466__$1,controls,map__24467,map__24467__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24468(owner,map__24467__$1,paginate,table_data,controls,size,p__24457,from,count,opts,map__24466__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24474){var map__24487 = p__24474;var map__24487__$1 = ((cljs.core.seq_QMARK_.call(null,map__24487))?cljs.core.apply.call(null,cljs.core.hash_map,map__24487):map__24487);var record = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24488 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24488 = (function (columns,record,map__24487,p__24474,render_table_row,meta24489){
this.columns = columns;
this.record = record;
this.map__24487 = map__24487;
this.p__24474 = p__24474;
this.render_table_row = render_table_row;
this.meta24489 = meta24489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24488.cljs$lang$type = true;
clustermap.components.table.t24488.cljs$lang$ctorStr = "clustermap.components.table/t24488";
clustermap.components.table.t24488.cljs$lang$ctorPrWriter = ((function (map__24487,map__24487__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24488");
});})(map__24487,map__24487__$1,record,columns))
;
clustermap.components.table.t24488.prototype.om$core$IRender$ = true;
clustermap.components.table.t24488.prototype.om$core$IRender$render$arity$1 = ((function (map__24487,map__24487__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24487,map__24487__$1,record,columns){
return (function iter__24491(s__24492){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24487,map__24487__$1,record,columns){
return (function (){var s__24492__$1 = s__24492;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24492__$1);if(temp__4126__auto__)
{var s__24492__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24492__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24492__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24494 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24493 = (0);while(true){
if((i__24493 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24493);cljs.core.chunk_append.call(null,b__24494,(function (){var map__24497 = col;var map__24497__$1 = ((cljs.core.seq_QMARK_.call(null,map__24497))?cljs.core.apply.call(null,cljs.core.hash_map,map__24497):map__24497);var render_fn = cljs.core.get.call(null,map__24497__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24497__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24497__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24499 = (i__24493 + (1));
i__24493 = G__24499;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24494),iter__24491.call(null,cljs.core.chunk_rest.call(null,s__24492__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24494),null);
}
} else
{var col = cljs.core.first.call(null,s__24492__$2);return cljs.core.cons.call(null,(function (){var map__24498 = col;var map__24498__$1 = ((cljs.core.seq_QMARK_.call(null,map__24498))?cljs.core.apply.call(null,cljs.core.hash_map,map__24498):map__24498);var render_fn = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24491.call(null,cljs.core.rest.call(null,s__24492__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24487,map__24487__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24487,map__24487__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24487,map__24487__$1,record,columns))
;
clustermap.components.table.t24488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24487,map__24487__$1,record,columns){
return (function (_24490){var self__ = this;
var _24490__$1 = this;return self__.meta24489;
});})(map__24487,map__24487__$1,record,columns))
;
clustermap.components.table.t24488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24487,map__24487__$1,record,columns){
return (function (_24490,meta24489__$1){var self__ = this;
var _24490__$1 = this;return (new clustermap.components.table.t24488(self__.columns,self__.record,self__.map__24487,self__.p__24474,self__.render_table_row,meta24489__$1));
});})(map__24487,map__24487__$1,record,columns))
;
clustermap.components.table.__GT_t24488 = ((function (map__24487,map__24487__$1,record,columns){
return (function __GT_t24488(columns__$1,record__$1,map__24487__$2,p__24474__$1,render_table_row__$1,meta24489){return (new clustermap.components.table.t24488(columns__$1,record__$1,map__24487__$2,p__24474__$1,render_table_row__$1,meta24489));
});})(map__24487,map__24487__$1,record,columns))
;
}
return (new clustermap.components.table.t24488(columns,record,map__24487__$1,p__24474,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24500,owner,opts){var map__24516 = p__24500;var map__24516__$1 = ((cljs.core.seq_QMARK_.call(null,map__24516))?cljs.core.apply.call(null,cljs.core.hash_map,map__24516):map__24516);var props = map__24516__$1;var table_data = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24517 = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24517__$1 = ((cljs.core.seq_QMARK_.call(null,map__24517))?cljs.core.apply.call(null,cljs.core.hash_map,map__24517):map__24517);var controls = map__24517__$1;var columns = cljs.core.get.call(null,map__24517__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24517__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24518 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24518))?sablono.interpreter.attributes.call(null,attrs24518):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24518))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24519 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view){
return (function iter__24523(s__24524){return (new cljs.core.LazySeq(null,((function (attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view){
return (function (){var s__24524__$1 = s__24524;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24524__$1);if(temp__4126__auto__)
{var s__24524__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24524__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24524__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24526 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24525 = (0);while(true){
if((i__24525 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24525);cljs.core.chunk_append.call(null,b__24526,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24531 = (i__24525 + (1));
i__24525 = G__24531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24526),iter__24523.call(null,cljs.core.chunk_rest.call(null,s__24524__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24526),null);
}
} else
{var col = cljs.core.first.call(null,s__24524__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24523.call(null,cljs.core.rest.call(null,s__24524__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24519))?sablono.interpreter.attributes.call(null,attrs24519):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24519))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24519)], null))));
})(),(function (){var attrs24520 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24520))?sablono.interpreter.attributes.call(null,attrs24520):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24520))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24520)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24518),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24521 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view){
return (function iter__24527(s__24528){return (new cljs.core.LazySeq(null,((function (attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view){
return (function (){var s__24528__$1 = s__24528;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24528__$1);if(temp__4126__auto__)
{var s__24528__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24528__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24528__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24530 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24529 = (0);while(true){
if((i__24529 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24529);cljs.core.chunk_append.call(null,b__24530,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24532 = (i__24529 + (1));
i__24529 = G__24532;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24530),iter__24527.call(null,cljs.core.chunk_rest.call(null,s__24528__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24530),null);
}
} else
{var col = cljs.core.first.call(null,s__24528__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24527.call(null,cljs.core.rest.call(null,s__24528__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24521))?sablono.interpreter.attributes.call(null,attrs24521):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24521))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24521)], null))));
})(),(function (){var attrs24522 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24518,map__24516,map__24516__$1,props,table_data,map__24517,map__24517__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24522))?sablono.interpreter.attributes.call(null,attrs24522):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24522))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24522)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24533,owner){var map__24546 = p__24533;var map__24546__$1 = ((cljs.core.seq_QMARK_.call(null,map__24546))?cljs.core.apply.call(null,cljs.core.hash_map,map__24546):map__24546);var props = map__24546__$1;var map__24547 = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24547__$1 = ((cljs.core.seq_QMARK_.call(null,map__24547))?cljs.core.apply.call(null,cljs.core.hash_map,map__24547):map__24547);var table_state = map__24547__$1;var table_data = cljs.core.get.call(null,map__24547__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24548 = cljs.core.get.call(null,map__24547__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24548__$1 = ((cljs.core.seq_QMARK_.call(null,map__24548))?cljs.core.apply.call(null,cljs.core.hash_map,map__24548):map__24548);var controls = map__24548__$1;var index = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24549 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24549 = (function (map__24548,sort_spec,table_component,owner,props,p__24533,table_data,index,filter_spec,columns,table_state,controls,map__24546,size,map__24547,from,meta24550){
this.map__24548 = map__24548;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.p__24533 = p__24533;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__24546 = map__24546;
this.size = size;
this.map__24547 = map__24547;
this.from = from;
this.meta24550 = meta24550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24549.cljs$lang$type = true;
clustermap.components.table.t24549.cljs$lang$ctorStr = "clustermap.components.table/t24549";
clustermap.components.table.t24549.cljs$lang$ctorPrWriter = ((function (map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24549");
});})(map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24549.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24549.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24552,p__24553){var self__ = this;
var map__24554 = p__24552;var map__24554__$1 = ((cljs.core.seq_QMARK_.call(null,map__24554))?cljs.core.apply.call(null,cljs.core.hash_map,map__24554):map__24554);var next_props = map__24554__$1;var map__24555 = cljs.core.get.call(null,map__24554__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24555__$1 = ((cljs.core.seq_QMARK_.call(null,map__24555))?cljs.core.apply.call(null,cljs.core.hash_map,map__24555):map__24555);var next_table_state = map__24555__$1;var next_table_data = cljs.core.get.call(null,map__24555__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24556 = cljs.core.get.call(null,map__24555__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24556__$1 = ((cljs.core.seq_QMARK_.call(null,map__24556))?cljs.core.apply.call(null,cljs.core.hash_map,map__24556):map__24556);var next_controls = map__24556__$1;var next_index = cljs.core.get.call(null,map__24556__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24556__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24556__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24556__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24556__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24554__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24557 = p__24553;var map__24557__$1 = ((cljs.core.seq_QMARK_.call(null,map__24557))?cljs.core.apply.call(null,cljs.core.hash_map,map__24557):map__24557);var next_state = map__24557__$1;var table_data_resource = cljs.core.get.call(null,map__24557__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24549.prototype.om$core$IRender$ = true;
clustermap.components.table.t24549.prototype.om$core$IRender$render$arity$1 = ((function (map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24549.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24549.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24551){var self__ = this;
var _24551__$1 = this;return self__.meta24550;
});})(map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24551,meta24550__$1){var self__ = this;
var _24551__$1 = this;return (new clustermap.components.table.t24549(self__.map__24548,self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.p__24533,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__24546,self__.size,self__.map__24547,self__.from,meta24550__$1));
});})(map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24549 = ((function (map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24549(map__24548__$2,sort_spec__$1,table_component__$1,owner__$1,props__$1,p__24533__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__24546__$2,size__$1,map__24547__$2,from__$1,meta24550){return (new clustermap.components.table.t24549(map__24548__$2,sort_spec__$1,table_component__$1,owner__$1,props__$1,p__24533__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__24546__$2,size__$1,map__24547__$2,from__$1,meta24550));
});})(map__24546,map__24546__$1,props,map__24547,map__24547__$1,table_state,table_data,map__24548,map__24548__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24549(map__24548__$1,sort_spec,table_component,owner,props,p__24533,table_data,index,filter_spec,columns,table_state,controls,map__24546__$1,size,map__24547__$1,from,null));
});
