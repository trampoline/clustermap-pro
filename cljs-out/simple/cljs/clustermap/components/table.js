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
clustermap.components.table.order_col = (function order_col(controls,p__28013,p__28014){var map__28028 = p__28013;var map__28028__$1 = ((cljs.core.seq_QMARK_.call(null,map__28028))?cljs.core.apply.call(null,cljs.core.hash_map,map__28028):map__28028);var table_data = map__28028__$1;var current_sort_spec = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28029 = p__28014;var map__28029__$1 = ((cljs.core.seq_QMARK_.call(null,map__28029))?cljs.core.apply.call(null,cljs.core.hash_map,map__28029):map__28029);var col = map__28029__$1;var render_fn = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28030 = current_sort_spec__$1;var G__28030__$1 = (((G__28030 == null))?null:cljs.core.keys.call(null,G__28030));var G__28030__$2 = (((G__28030__$1 == null))?null:cljs.core.first.call(null,G__28030__$1));return G__28030__$2;
})();var current_sort_dir = (function (){var G__28031 = current_sort_spec__$1;var G__28031__$1 = (((G__28031 == null))?null:current_sort_key.call(null,G__28031));var G__28031__$2 = (((G__28031__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28031__$1));return G__28031__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28032 = cljs.core._EQ_;var expr__28033 = current_sort_dir;if(cljs.core.truth_(pred__28032.call(null,"asc",expr__28033)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28028,map__28028__$1,table_data,current_sort_spec,map__28029,map__28029__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28038 = cljs.core._EQ_;var expr__28039 = current_sort_dir;if(cljs.core.truth_(pred__28038.call(null,"asc",expr__28039)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28038.call(null,"desc",expr__28039)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28028,map__28028__$1,table_data,current_sort_spec,map__28029,map__28029__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28037 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28037))?sablono.interpreter.attributes.call(null,attrs28037):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28037))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28037)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28041,owner,opts){var map__28050 = p__28041;var map__28050__$1 = ((cljs.core.seq_QMARK_.call(null,map__28050))?cljs.core.apply.call(null,cljs.core.hash_map,map__28050):map__28050);var controls = cljs.core.get.call(null,map__28050__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28051 = cljs.core.get.call(null,map__28050__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28051__$1 = ((cljs.core.seq_QMARK_.call(null,map__28051))?cljs.core.apply.call(null,cljs.core.hash_map,map__28051):map__28051);var table_data = map__28051__$1;var count = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28052 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28052 = (function (owner,paginate,table_data,controls,map__28051,p__28041,size,from,count,map__28050,opts,meta28053){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.map__28051 = map__28051;
this.p__28041 = p__28041;
this.size = size;
this.from = from;
this.count = count;
this.map__28050 = map__28050;
this.opts = opts;
this.meta28053 = meta28053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28052.cljs$lang$type = true;
clustermap.components.table.t28052.cljs$lang$ctorStr = "clustermap.components.table/t28052";
clustermap.components.table.t28052.cljs$lang$ctorPrWriter = ((function (map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28052");
});})(map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
;
clustermap.components.table.t28052.prototype.om$core$IRender$ = true;
clustermap.components.table.t28052.prototype.om$core$IRender$render$arity$1 = ((function (map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28055 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28055))?sablono.interpreter.attributes.call(null,attrs28055):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28055))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28055)], null))));
})()," to ",(function (){var attrs28056 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28056))?sablono.interpreter.attributes.call(null,attrs28056):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28056))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28056)], null))));
})()," of ",(function (){var attrs28057 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28057))?sablono.interpreter.attributes.call(null,attrs28057):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28057))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28057)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
},"Last")));
});})(map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
;
clustermap.components.table.t28052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (_28054){var self__ = this;
var _28054__$1 = this;return self__.meta28053;
});})(map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
;
clustermap.components.table.t28052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function (_28054,meta28053__$1){var self__ = this;
var _28054__$1 = this;return (new clustermap.components.table.t28052(self__.owner,self__.paginate,self__.table_data,self__.controls,self__.map__28051,self__.p__28041,self__.size,self__.from,self__.count,self__.map__28050,self__.opts,meta28053__$1));
});})(map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28052 = ((function (map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size){
return (function __GT_t28052(owner__$1,paginate__$1,table_data__$1,controls__$1,map__28051__$2,p__28041__$1,size__$1,from__$1,count__$1,map__28050__$2,opts__$1,meta28053){return (new clustermap.components.table.t28052(owner__$1,paginate__$1,table_data__$1,controls__$1,map__28051__$2,p__28041__$1,size__$1,from__$1,count__$1,map__28050__$2,opts__$1,meta28053));
});})(map__28050,map__28050__$1,controls,map__28051,map__28051__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28052(owner,paginate,table_data,controls,map__28051__$1,p__28041,size,from,count,map__28050__$1,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28058){var map__28071 = p__28058;var map__28071__$1 = ((cljs.core.seq_QMARK_.call(null,map__28071))?cljs.core.apply.call(null,cljs.core.hash_map,map__28071):map__28071);var record = cljs.core.get.call(null,map__28071__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28071__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28072 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28072 = (function (columns,record,map__28071,p__28058,render_table_row,meta28073){
this.columns = columns;
this.record = record;
this.map__28071 = map__28071;
this.p__28058 = p__28058;
this.render_table_row = render_table_row;
this.meta28073 = meta28073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28072.cljs$lang$type = true;
clustermap.components.table.t28072.cljs$lang$ctorStr = "clustermap.components.table/t28072";
clustermap.components.table.t28072.cljs$lang$ctorPrWriter = ((function (map__28071,map__28071__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28072");
});})(map__28071,map__28071__$1,record,columns))
;
clustermap.components.table.t28072.prototype.om$core$IRender$ = true;
clustermap.components.table.t28072.prototype.om$core$IRender$render$arity$1 = ((function (map__28071,map__28071__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28071,map__28071__$1,record,columns){
return (function iter__28075(s__28076){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28071,map__28071__$1,record,columns){
return (function (){var s__28076__$1 = s__28076;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28076__$1);if(temp__4126__auto__)
{var s__28076__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28076__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28076__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28078 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28077 = (0);while(true){
if((i__28077 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28077);cljs.core.chunk_append.call(null,b__28078,(function (){var map__28081 = col;var map__28081__$1 = ((cljs.core.seq_QMARK_.call(null,map__28081))?cljs.core.apply.call(null,cljs.core.hash_map,map__28081):map__28081);var render_fn = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28081__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28083 = (i__28077 + (1));
i__28077 = G__28083;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28078),iter__28075.call(null,cljs.core.chunk_rest.call(null,s__28076__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28078),null);
}
} else
{var col = cljs.core.first.call(null,s__28076__$2);return cljs.core.cons.call(null,(function (){var map__28082 = col;var map__28082__$1 = ((cljs.core.seq_QMARK_.call(null,map__28082))?cljs.core.apply.call(null,cljs.core.hash_map,map__28082):map__28082);var render_fn = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28075.call(null,cljs.core.rest.call(null,s__28076__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28071,map__28071__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28071,map__28071__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28071,map__28071__$1,record,columns))
;
clustermap.components.table.t28072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28071,map__28071__$1,record,columns){
return (function (_28074){var self__ = this;
var _28074__$1 = this;return self__.meta28073;
});})(map__28071,map__28071__$1,record,columns))
;
clustermap.components.table.t28072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28071,map__28071__$1,record,columns){
return (function (_28074,meta28073__$1){var self__ = this;
var _28074__$1 = this;return (new clustermap.components.table.t28072(self__.columns,self__.record,self__.map__28071,self__.p__28058,self__.render_table_row,meta28073__$1));
});})(map__28071,map__28071__$1,record,columns))
;
clustermap.components.table.__GT_t28072 = ((function (map__28071,map__28071__$1,record,columns){
return (function __GT_t28072(columns__$1,record__$1,map__28071__$2,p__28058__$1,render_table_row__$1,meta28073){return (new clustermap.components.table.t28072(columns__$1,record__$1,map__28071__$2,p__28058__$1,render_table_row__$1,meta28073));
});})(map__28071,map__28071__$1,record,columns))
;
}
return (new clustermap.components.table.t28072(columns,record,map__28071__$1,p__28058,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28084,owner,opts){var map__28100 = p__28084;var map__28100__$1 = ((cljs.core.seq_QMARK_.call(null,map__28100))?cljs.core.apply.call(null,cljs.core.hash_map,map__28100):map__28100);var props = map__28100__$1;var table_data = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28101 = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28101__$1 = ((cljs.core.seq_QMARK_.call(null,map__28101))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);var controls = map__28101__$1;var columns = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28102 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28102))?sablono.interpreter.attributes.call(null,attrs28102):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28102))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28103 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view){
return (function iter__28107(s__28108){return (new cljs.core.LazySeq(null,((function (attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view){
return (function (){var s__28108__$1 = s__28108;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28108__$1);if(temp__4126__auto__)
{var s__28108__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28108__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28108__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28110 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28109 = (0);while(true){
if((i__28109 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28109);cljs.core.chunk_append.call(null,b__28110,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28115 = (i__28109 + (1));
i__28109 = G__28115;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28110),iter__28107.call(null,cljs.core.chunk_rest.call(null,s__28108__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28110),null);
}
} else
{var col = cljs.core.first.call(null,s__28108__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28107.call(null,cljs.core.rest.call(null,s__28108__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28103))?sablono.interpreter.attributes.call(null,attrs28103):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28103))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28103)], null))));
})(),(function (){var attrs28104 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28104))?sablono.interpreter.attributes.call(null,attrs28104):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28104))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28104)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28102),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28105 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view){
return (function iter__28111(s__28112){return (new cljs.core.LazySeq(null,((function (attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view){
return (function (){var s__28112__$1 = s__28112;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28112__$1);if(temp__4126__auto__)
{var s__28112__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28112__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28112__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28114 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28113 = (0);while(true){
if((i__28113 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28113);cljs.core.chunk_append.call(null,b__28114,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28116 = (i__28113 + (1));
i__28113 = G__28116;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28114),iter__28111.call(null,cljs.core.chunk_rest.call(null,s__28112__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28114),null);
}
} else
{var col = cljs.core.first.call(null,s__28112__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28111.call(null,cljs.core.rest.call(null,s__28112__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28105))?sablono.interpreter.attributes.call(null,attrs28105):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28105))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28105)], null))));
})(),(function (){var attrs28106 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28102,map__28100,map__28100__$1,props,table_data,map__28101,map__28101__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28106))?sablono.interpreter.attributes.call(null,attrs28106):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28106))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28106)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28117,owner){var map__28156 = p__28117;var map__28156__$1 = ((cljs.core.seq_QMARK_.call(null,map__28156))?cljs.core.apply.call(null,cljs.core.hash_map,map__28156):map__28156);var props = map__28156__$1;var map__28157 = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28157__$1 = ((cljs.core.seq_QMARK_.call(null,map__28157))?cljs.core.apply.call(null,cljs.core.hash_map,map__28157):map__28157);var table_state = map__28157__$1;var table_data = cljs.core.get.call(null,map__28157__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28158 = cljs.core.get.call(null,map__28157__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28158__$1 = ((cljs.core.seq_QMARK_.call(null,map__28158))?cljs.core.apply.call(null,cljs.core.hash_map,map__28158):map__28158);var controls = map__28158__$1;var index = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28159 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28159 = (function (p__28117,sort_spec,table_component,owner,props,map__28157,table_data,index,filter_spec,columns,table_state,controls,size,map__28158,map__28156,from,meta28160){
this.p__28117 = p__28117;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__28157 = map__28157;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__28158 = map__28158;
this.map__28156 = map__28156;
this.from = from;
this.meta28160 = meta28160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28159.cljs$lang$type = true;
clustermap.components.table.t28159.cljs$lang$ctorStr = "clustermap.components.table/t28159";
clustermap.components.table.t28159.cljs$lang$ctorPrWriter = ((function (map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28159");
});})(map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28159.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28159.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28162,p__28163){var self__ = this;
var map__28164 = p__28162;var map__28164__$1 = ((cljs.core.seq_QMARK_.call(null,map__28164))?cljs.core.apply.call(null,cljs.core.hash_map,map__28164):map__28164);var next_props = map__28164__$1;var map__28165 = cljs.core.get.call(null,map__28164__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28165__$1 = ((cljs.core.seq_QMARK_.call(null,map__28165))?cljs.core.apply.call(null,cljs.core.hash_map,map__28165):map__28165);var next_table_state = map__28165__$1;var next_table_data = cljs.core.get.call(null,map__28165__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28166 = cljs.core.get.call(null,map__28165__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28166__$1 = ((cljs.core.seq_QMARK_.call(null,map__28166))?cljs.core.apply.call(null,cljs.core.hash_map,map__28166):map__28166);var next_controls = map__28166__$1;var next_index = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28164__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28167 = p__28163;var map__28167__$1 = ((cljs.core.seq_QMARK_.call(null,map__28167))?cljs.core.apply.call(null,cljs.core.hash_map,map__28167):map__28167);var fetch_table_data_fn = cljs.core.get.call(null,map__28167__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28164,map__28164__$1,next_props,map__28165,map__28165__$1,next_table_state,next_table_data,map__28166,map__28166__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28167,map__28167__$1,fetch_table_data_fn,map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28164,map__28164__$1,next_props,map__28165,map__28165__$1,next_table_state,next_table_data,map__28166,map__28166__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28167,map__28167__$1,fetch_table_data_fn,map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28180){var state_val_28181 = (state_28180[(1)]);if((state_val_28181 === (5)))
{var inst_28178 = (state_28180[(2)]);var state_28180__$1 = state_28180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28180__$1,inst_28178);
} else
{if((state_val_28181 === (4)))
{var state_28180__$1 = state_28180;var statearr_28182_28194 = state_28180__$1;(statearr_28182_28194[(2)] = null);
(statearr_28182_28194[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (3)))
{var inst_28170 = (state_28180[(7)]);var inst_28172 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28173 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28174 = (new cljs.core.PersistentVector(null,1,(5),inst_28172,inst_28173,null));var inst_28175 = om.core.update_BANG_.call(null,self__.table_state,inst_28174,inst_28170);var state_28180__$1 = state_28180;var statearr_28183_28195 = state_28180__$1;(statearr_28183_28195[(2)] = inst_28175);
(statearr_28183_28195[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (2)))
{var inst_28170 = (state_28180[(7)]);var inst_28170__$1 = (state_28180[(2)]);var state_28180__$1 = (function (){var statearr_28184 = state_28180;(statearr_28184[(7)] = inst_28170__$1);
return statearr_28184;
})();if(cljs.core.truth_(inst_28170__$1))
{var statearr_28185_28196 = state_28180__$1;(statearr_28185_28196[(1)] = (3));
} else
{var statearr_28186_28197 = state_28180__$1;(statearr_28186_28197[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28181 === (1)))
{var inst_28168 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28180__$1 = state_28180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28180__$1,(2),inst_28168);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28164,map__28164__$1,next_props,map__28165,map__28165__$1,next_table_state,next_table_data,map__28166,map__28166__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28167,map__28167__$1,fetch_table_data_fn,map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28164,map__28164__$1,next_props,map__28165,map__28165__$1,next_table_state,next_table_data,map__28166,map__28166__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28167,map__28167__$1,fetch_table_data_fn,map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28190 = [null,null,null,null,null,null,null,null];(statearr_28190[(0)] = state_machine__9111__auto__);
(statearr_28190[(1)] = (1));
return statearr_28190;
});
var state_machine__9111__auto____1 = (function (state_28180){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28180);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28191){if((e28191 instanceof Object))
{var ex__9114__auto__ = e28191;var statearr_28192_28198 = state_28180;(statearr_28192_28198[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28180);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28191;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28199 = state_28180;
state_28180 = G__28199;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28180){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28164,map__28164__$1,next_props,map__28165,map__28165__$1,next_table_state,next_table_data,map__28166,map__28166__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28167,map__28167__$1,fetch_table_data_fn,map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28193 = f__9126__auto__.call(null);(statearr_28193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28164,map__28164__$1,next_props,map__28165,map__28165__$1,next_table_state,next_table_data,map__28166,map__28166__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28167,map__28167__$1,fetch_table_data_fn,map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28159.prototype.om$core$IRender$ = true;
clustermap.components.table.t28159.prototype.om$core$IRender$render$arity$1 = ((function (map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28159.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28159.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28161){var self__ = this;
var _28161__$1 = this;return self__.meta28160;
});})(map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28161,meta28160__$1){var self__ = this;
var _28161__$1 = this;return (new clustermap.components.table.t28159(self__.p__28117,self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.map__28157,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.map__28158,self__.map__28156,self__.from,meta28160__$1));
});})(map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28159 = ((function (map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28159(p__28117__$1,sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28157__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28158__$2,map__28156__$2,from__$1,meta28160){return (new clustermap.components.table.t28159(p__28117__$1,sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28157__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28158__$2,map__28156__$2,from__$1,meta28160));
});})(map__28156,map__28156__$1,props,map__28157,map__28157__$1,table_state,table_data,map__28158,map__28158__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28159(p__28117,sort_spec,table_component,owner,props,map__28157__$1,table_data,index,filter_spec,columns,table_state,controls,size,map__28158__$1,map__28156__$1,from,null));
});
