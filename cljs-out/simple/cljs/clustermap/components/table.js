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
clustermap.components.table.order_col = (function order_col(controls,p__24721,p__24722){var map__24736 = p__24721;var map__24736__$1 = ((cljs.core.seq_QMARK_.call(null,map__24736))?cljs.core.apply.call(null,cljs.core.hash_map,map__24736):map__24736);var table_data = map__24736__$1;var current_sort_spec = cljs.core.get.call(null,map__24736__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24737 = p__24722;var map__24737__$1 = ((cljs.core.seq_QMARK_.call(null,map__24737))?cljs.core.apply.call(null,cljs.core.hash_map,map__24737):map__24737);var col = map__24737__$1;var render_fn = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24738 = current_sort_spec__$1;var G__24738__$1 = (((G__24738 == null))?null:cljs.core.keys.call(null,G__24738));var G__24738__$2 = (((G__24738__$1 == null))?null:cljs.core.first.call(null,G__24738__$1));return G__24738__$2;
})();var current_sort_dir = (function (){var G__24739 = current_sort_spec__$1;var G__24739__$1 = (((G__24739 == null))?null:current_sort_key.call(null,G__24739));var G__24739__$2 = (((G__24739__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24739__$1));return G__24739__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24740 = cljs.core._EQ_;var expr__24741 = current_sort_dir;if(cljs.core.truth_(pred__24740.call(null,"asc",expr__24741)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24736,map__24736__$1,table_data,current_sort_spec,map__24737,map__24737__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24746 = cljs.core._EQ_;var expr__24747 = current_sort_dir;if(cljs.core.truth_(pred__24746.call(null,"asc",expr__24747)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24746.call(null,"desc",expr__24747)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24736,map__24736__$1,table_data,current_sort_spec,map__24737,map__24737__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24745 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24745))?sablono.interpreter.attributes.call(null,attrs24745):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24745))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24745)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24749,owner,opts){var map__24758 = p__24749;var map__24758__$1 = ((cljs.core.seq_QMARK_.call(null,map__24758))?cljs.core.apply.call(null,cljs.core.hash_map,map__24758):map__24758);var controls = cljs.core.get.call(null,map__24758__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24759 = cljs.core.get.call(null,map__24758__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24759__$1 = ((cljs.core.seq_QMARK_.call(null,map__24759))?cljs.core.apply.call(null,cljs.core.hash_map,map__24759):map__24759);var table_data = map__24759__$1;var count = cljs.core.get.call(null,map__24759__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24759__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24759__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24760 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24760 = (function (owner,map__24759,paginate,map__24758,table_data,controls,p__24749,size,from,count,opts,meta24761){
this.owner = owner;
this.map__24759 = map__24759;
this.paginate = paginate;
this.map__24758 = map__24758;
this.table_data = table_data;
this.controls = controls;
this.p__24749 = p__24749;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta24761 = meta24761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24760.cljs$lang$type = true;
clustermap.components.table.t24760.cljs$lang$ctorStr = "clustermap.components.table/t24760";
clustermap.components.table.t24760.cljs$lang$ctorPrWriter = ((function (map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24760");
});})(map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
;
clustermap.components.table.t24760.prototype.om$core$IRender$ = true;
clustermap.components.table.t24760.prototype.om$core$IRender$render$arity$1 = ((function (map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24763 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24763))?sablono.interpreter.attributes.call(null,attrs24763):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24763))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24763)], null))));
})()," to ",(function (){var attrs24764 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24764))?sablono.interpreter.attributes.call(null,attrs24764):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24764))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24764)], null))));
})()," of ",(function (){var attrs24765 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24765))?sablono.interpreter.attributes.call(null,attrs24765):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24765))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24765)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
},"Last")));
});})(map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
;
clustermap.components.table.t24760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (_24762){var self__ = this;
var _24762__$1 = this;return self__.meta24761;
});})(map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
;
clustermap.components.table.t24760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function (_24762,meta24761__$1){var self__ = this;
var _24762__$1 = this;return (new clustermap.components.table.t24760(self__.owner,self__.map__24759,self__.paginate,self__.map__24758,self__.table_data,self__.controls,self__.p__24749,self__.size,self__.from,self__.count,self__.opts,meta24761__$1));
});})(map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24760 = ((function (map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size){
return (function __GT_t24760(owner__$1,map__24759__$2,paginate__$1,map__24758__$2,table_data__$1,controls__$1,p__24749__$1,size__$1,from__$1,count__$1,opts__$1,meta24761){return (new clustermap.components.table.t24760(owner__$1,map__24759__$2,paginate__$1,map__24758__$2,table_data__$1,controls__$1,p__24749__$1,size__$1,from__$1,count__$1,opts__$1,meta24761));
});})(map__24758,map__24758__$1,controls,map__24759,map__24759__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24760(owner,map__24759__$1,paginate,map__24758__$1,table_data,controls,p__24749,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24766){var map__24779 = p__24766;var map__24779__$1 = ((cljs.core.seq_QMARK_.call(null,map__24779))?cljs.core.apply.call(null,cljs.core.hash_map,map__24779):map__24779);var record = cljs.core.get.call(null,map__24779__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24779__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24780 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24780 = (function (columns,record,map__24779,p__24766,render_table_row,meta24781){
this.columns = columns;
this.record = record;
this.map__24779 = map__24779;
this.p__24766 = p__24766;
this.render_table_row = render_table_row;
this.meta24781 = meta24781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24780.cljs$lang$type = true;
clustermap.components.table.t24780.cljs$lang$ctorStr = "clustermap.components.table/t24780";
clustermap.components.table.t24780.cljs$lang$ctorPrWriter = ((function (map__24779,map__24779__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24780");
});})(map__24779,map__24779__$1,record,columns))
;
clustermap.components.table.t24780.prototype.om$core$IRender$ = true;
clustermap.components.table.t24780.prototype.om$core$IRender$render$arity$1 = ((function (map__24779,map__24779__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24779,map__24779__$1,record,columns){
return (function iter__24783(s__24784){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24779,map__24779__$1,record,columns){
return (function (){var s__24784__$1 = s__24784;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24784__$1);if(temp__4126__auto__)
{var s__24784__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24784__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24784__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24786 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24785 = (0);while(true){
if((i__24785 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24785);cljs.core.chunk_append.call(null,b__24786,(function (){var map__24789 = col;var map__24789__$1 = ((cljs.core.seq_QMARK_.call(null,map__24789))?cljs.core.apply.call(null,cljs.core.hash_map,map__24789):map__24789);var render_fn = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24791 = (i__24785 + (1));
i__24785 = G__24791;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24786),iter__24783.call(null,cljs.core.chunk_rest.call(null,s__24784__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24786),null);
}
} else
{var col = cljs.core.first.call(null,s__24784__$2);return cljs.core.cons.call(null,(function (){var map__24790 = col;var map__24790__$1 = ((cljs.core.seq_QMARK_.call(null,map__24790))?cljs.core.apply.call(null,cljs.core.hash_map,map__24790):map__24790);var render_fn = cljs.core.get.call(null,map__24790__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24790__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24790__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24783.call(null,cljs.core.rest.call(null,s__24784__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24779,map__24779__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24779,map__24779__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24779,map__24779__$1,record,columns))
;
clustermap.components.table.t24780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24779,map__24779__$1,record,columns){
return (function (_24782){var self__ = this;
var _24782__$1 = this;return self__.meta24781;
});})(map__24779,map__24779__$1,record,columns))
;
clustermap.components.table.t24780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24779,map__24779__$1,record,columns){
return (function (_24782,meta24781__$1){var self__ = this;
var _24782__$1 = this;return (new clustermap.components.table.t24780(self__.columns,self__.record,self__.map__24779,self__.p__24766,self__.render_table_row,meta24781__$1));
});})(map__24779,map__24779__$1,record,columns))
;
clustermap.components.table.__GT_t24780 = ((function (map__24779,map__24779__$1,record,columns){
return (function __GT_t24780(columns__$1,record__$1,map__24779__$2,p__24766__$1,render_table_row__$1,meta24781){return (new clustermap.components.table.t24780(columns__$1,record__$1,map__24779__$2,p__24766__$1,render_table_row__$1,meta24781));
});})(map__24779,map__24779__$1,record,columns))
;
}
return (new clustermap.components.table.t24780(columns,record,map__24779__$1,p__24766,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24792,owner,opts){var map__24808 = p__24792;var map__24808__$1 = ((cljs.core.seq_QMARK_.call(null,map__24808))?cljs.core.apply.call(null,cljs.core.hash_map,map__24808):map__24808);var props = map__24808__$1;var table_data = cljs.core.get.call(null,map__24808__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24809 = cljs.core.get.call(null,map__24808__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24809__$1 = ((cljs.core.seq_QMARK_.call(null,map__24809))?cljs.core.apply.call(null,cljs.core.hash_map,map__24809):map__24809);var controls = map__24809__$1;var columns = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24810 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24810))?sablono.interpreter.attributes.call(null,attrs24810):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24810))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24811 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view){
return (function iter__24815(s__24816){return (new cljs.core.LazySeq(null,((function (attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view){
return (function (){var s__24816__$1 = s__24816;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24816__$1);if(temp__4126__auto__)
{var s__24816__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24816__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24816__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24818 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24817 = (0);while(true){
if((i__24817 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24817);cljs.core.chunk_append.call(null,b__24818,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24823 = (i__24817 + (1));
i__24817 = G__24823;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24818),iter__24815.call(null,cljs.core.chunk_rest.call(null,s__24816__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24818),null);
}
} else
{var col = cljs.core.first.call(null,s__24816__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24815.call(null,cljs.core.rest.call(null,s__24816__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24811))?sablono.interpreter.attributes.call(null,attrs24811):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24811))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24811)], null))));
})(),(function (){var attrs24812 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24812))?sablono.interpreter.attributes.call(null,attrs24812):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24812))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24812)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24810),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24813 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view){
return (function iter__24819(s__24820){return (new cljs.core.LazySeq(null,((function (attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view){
return (function (){var s__24820__$1 = s__24820;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24820__$1);if(temp__4126__auto__)
{var s__24820__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24820__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24820__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24822 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24821 = (0);while(true){
if((i__24821 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24821);cljs.core.chunk_append.call(null,b__24822,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24824 = (i__24821 + (1));
i__24821 = G__24824;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24822),iter__24819.call(null,cljs.core.chunk_rest.call(null,s__24820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24822),null);
}
} else
{var col = cljs.core.first.call(null,s__24820__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24819.call(null,cljs.core.rest.call(null,s__24820__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24813))?sablono.interpreter.attributes.call(null,attrs24813):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24813))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24813)], null))));
})(),(function (){var attrs24814 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24810,map__24808,map__24808__$1,props,table_data,map__24809,map__24809__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24814))?sablono.interpreter.attributes.call(null,attrs24814):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24814))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24814)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24825,owner){var map__24838 = p__24825;var map__24838__$1 = ((cljs.core.seq_QMARK_.call(null,map__24838))?cljs.core.apply.call(null,cljs.core.hash_map,map__24838):map__24838);var props = map__24838__$1;var map__24839 = cljs.core.get.call(null,map__24838__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24839__$1 = ((cljs.core.seq_QMARK_.call(null,map__24839))?cljs.core.apply.call(null,cljs.core.hash_map,map__24839):map__24839);var table_state = map__24839__$1;var table_data = cljs.core.get.call(null,map__24839__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24840 = cljs.core.get.call(null,map__24839__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24840__$1 = ((cljs.core.seq_QMARK_.call(null,map__24840))?cljs.core.apply.call(null,cljs.core.hash_map,map__24840):map__24840);var controls = map__24840__$1;var index = cljs.core.get.call(null,map__24840__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24840__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24840__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24840__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24840__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24838__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24841 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24841 = (function (sort_spec,table_component,owner,props,table_data,index,map__24840,filter_spec,columns,table_state,p__24825,controls,map__24838,size,map__24839,from,meta24842){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.index = index;
this.map__24840 = map__24840;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.p__24825 = p__24825;
this.controls = controls;
this.map__24838 = map__24838;
this.size = size;
this.map__24839 = map__24839;
this.from = from;
this.meta24842 = meta24842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24841.cljs$lang$type = true;
clustermap.components.table.t24841.cljs$lang$ctorStr = "clustermap.components.table/t24841";
clustermap.components.table.t24841.cljs$lang$ctorPrWriter = ((function (map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24841");
});})(map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24841.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24841.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24844,p__24845){var self__ = this;
var map__24846 = p__24844;var map__24846__$1 = ((cljs.core.seq_QMARK_.call(null,map__24846))?cljs.core.apply.call(null,cljs.core.hash_map,map__24846):map__24846);var next_props = map__24846__$1;var map__24847 = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24847__$1 = ((cljs.core.seq_QMARK_.call(null,map__24847))?cljs.core.apply.call(null,cljs.core.hash_map,map__24847):map__24847);var next_table_state = map__24847__$1;var next_table_data = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24848 = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24848__$1 = ((cljs.core.seq_QMARK_.call(null,map__24848))?cljs.core.apply.call(null,cljs.core.hash_map,map__24848):map__24848);var next_controls = map__24848__$1;var next_index = cljs.core.get.call(null,map__24848__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24848__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24848__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24848__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24848__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24849 = p__24845;var map__24849__$1 = ((cljs.core.seq_QMARK_.call(null,map__24849))?cljs.core.apply.call(null,cljs.core.hash_map,map__24849):map__24849);var next_state = map__24849__$1;var table_data_resource = cljs.core.get.call(null,map__24849__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24841.prototype.om$core$IRender$ = true;
clustermap.components.table.t24841.prototype.om$core$IRender$render$arity$1 = ((function (map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24841.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24841.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24843){var self__ = this;
var _24843__$1 = this;return self__.meta24842;
});})(map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24843,meta24842__$1){var self__ = this;
var _24843__$1 = this;return (new clustermap.components.table.t24841(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.table_data,self__.index,self__.map__24840,self__.filter_spec,self__.columns,self__.table_state,self__.p__24825,self__.controls,self__.map__24838,self__.size,self__.map__24839,self__.from,meta24842__$1));
});})(map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24841 = ((function (map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24841(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,map__24840__$2,filter_spec__$1,columns__$1,table_state__$1,p__24825__$1,controls__$1,map__24838__$2,size__$1,map__24839__$2,from__$1,meta24842){return (new clustermap.components.table.t24841(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,map__24840__$2,filter_spec__$1,columns__$1,table_state__$1,p__24825__$1,controls__$1,map__24838__$2,size__$1,map__24839__$2,from__$1,meta24842));
});})(map__24838,map__24838__$1,props,map__24839,map__24839__$1,table_state,table_data,map__24840,map__24840__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24841(sort_spec,table_component,owner,props,table_data,index,map__24840__$1,filter_spec,columns,table_state,p__24825,controls,map__24838__$1,size,map__24839__$1,from,null));
});
