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
clustermap.components.table.order_col = (function order_col(controls,p__27780,p__27781){var map__27795 = p__27780;var map__27795__$1 = ((cljs.core.seq_QMARK_.call(null,map__27795))?cljs.core.apply.call(null,cljs.core.hash_map,map__27795):map__27795);var table_data = map__27795__$1;var current_sort_spec = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__27796 = p__27781;var map__27796__$1 = ((cljs.core.seq_QMARK_.call(null,map__27796))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);var col = map__27796__$1;var render_fn = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__27797 = current_sort_spec__$1;var G__27797__$1 = (((G__27797 == null))?null:cljs.core.keys.call(null,G__27797));var G__27797__$2 = (((G__27797__$1 == null))?null:cljs.core.first.call(null,G__27797__$1));return G__27797__$2;
})();var current_sort_dir = (function (){var G__27798 = current_sort_spec__$1;var G__27798__$1 = (((G__27798 == null))?null:current_sort_key.call(null,G__27798));var G__27798__$2 = (((G__27798__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__27798__$1));return G__27798__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__27799 = cljs.core._EQ_;var expr__27800 = current_sort_dir;if(cljs.core.truth_(pred__27799.call(null,"asc",expr__27800)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__27795,map__27795__$1,table_data,current_sort_spec,map__27796,map__27796__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__27805 = cljs.core._EQ_;var expr__27806 = current_sort_dir;if(cljs.core.truth_(pred__27805.call(null,"asc",expr__27806)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__27805.call(null,"desc",expr__27806)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__27795,map__27795__$1,table_data,current_sort_spec,map__27796,map__27796__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs27804 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs27804))?sablono.interpreter.attributes.call(null,attrs27804):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27804))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27804)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__27808,owner,opts){var map__27817 = p__27808;var map__27817__$1 = ((cljs.core.seq_QMARK_.call(null,map__27817))?cljs.core.apply.call(null,cljs.core.hash_map,map__27817):map__27817);var controls = cljs.core.get.call(null,map__27817__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27818 = cljs.core.get.call(null,map__27817__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27818__$1 = ((cljs.core.seq_QMARK_.call(null,map__27818))?cljs.core.apply.call(null,cljs.core.hash_map,map__27818):map__27818);var table_data = map__27818__$1;var count = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t27819 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27819 = (function (owner,map__27817,paginate,table_data,p__27808,controls,map__27818,size,from,count,opts,meta27820){
this.owner = owner;
this.map__27817 = map__27817;
this.paginate = paginate;
this.table_data = table_data;
this.p__27808 = p__27808;
this.controls = controls;
this.map__27818 = map__27818;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta27820 = meta27820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27819.cljs$lang$type = true;
clustermap.components.table.t27819.cljs$lang$ctorStr = "clustermap.components.table/t27819";
clustermap.components.table.t27819.cljs$lang$ctorPrWriter = ((function (map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t27819");
});})(map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
;
clustermap.components.table.t27819.prototype.om$core$IRender$ = true;
clustermap.components.table.t27819.prototype.om$core$IRender$render$arity$1 = ((function (map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs27822 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs27822))?sablono.interpreter.attributes.call(null,attrs27822):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27822))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27822)], null))));
})()," to ",(function (){var attrs27823 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs27823))?sablono.interpreter.attributes.call(null,attrs27823):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27823))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27823)], null))));
})()," of ",(function (){var attrs27824 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs27824))?sablono.interpreter.attributes.call(null,attrs27824):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27824))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27824)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
},"Last")));
});})(map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
;
clustermap.components.table.t27819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (_27821){var self__ = this;
var _27821__$1 = this;return self__.meta27820;
});})(map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
;
clustermap.components.table.t27819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function (_27821,meta27820__$1){var self__ = this;
var _27821__$1 = this;return (new clustermap.components.table.t27819(self__.owner,self__.map__27817,self__.paginate,self__.table_data,self__.p__27808,self__.controls,self__.map__27818,self__.size,self__.from,self__.count,self__.opts,meta27820__$1));
});})(map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t27819 = ((function (map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size){
return (function __GT_t27819(owner__$1,map__27817__$2,paginate__$1,table_data__$1,p__27808__$1,controls__$1,map__27818__$2,size__$1,from__$1,count__$1,opts__$1,meta27820){return (new clustermap.components.table.t27819(owner__$1,map__27817__$2,paginate__$1,table_data__$1,p__27808__$1,controls__$1,map__27818__$2,size__$1,from__$1,count__$1,opts__$1,meta27820));
});})(map__27817,map__27817__$1,controls,map__27818,map__27818__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t27819(owner,map__27817__$1,paginate,table_data,p__27808,controls,map__27818__$1,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__27825){var map__27838 = p__27825;var map__27838__$1 = ((cljs.core.seq_QMARK_.call(null,map__27838))?cljs.core.apply.call(null,cljs.core.hash_map,map__27838):map__27838);var record = cljs.core.get.call(null,map__27838__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__27838__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t27839 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27839 = (function (columns,record,map__27838,p__27825,render_table_row,meta27840){
this.columns = columns;
this.record = record;
this.map__27838 = map__27838;
this.p__27825 = p__27825;
this.render_table_row = render_table_row;
this.meta27840 = meta27840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27839.cljs$lang$type = true;
clustermap.components.table.t27839.cljs$lang$ctorStr = "clustermap.components.table/t27839";
clustermap.components.table.t27839.cljs$lang$ctorPrWriter = ((function (map__27838,map__27838__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t27839");
});})(map__27838,map__27838__$1,record,columns))
;
clustermap.components.table.t27839.prototype.om$core$IRender$ = true;
clustermap.components.table.t27839.prototype.om$core$IRender$render$arity$1 = ((function (map__27838,map__27838__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__27838,map__27838__$1,record,columns){
return (function iter__27842(s__27843){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__27838,map__27838__$1,record,columns){
return (function (){var s__27843__$1 = s__27843;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27843__$1);if(temp__4126__auto__)
{var s__27843__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27843__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27843__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27845 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27844 = (0);while(true){
if((i__27844 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__27844);cljs.core.chunk_append.call(null,b__27845,(function (){var map__27848 = col;var map__27848__$1 = ((cljs.core.seq_QMARK_.call(null,map__27848))?cljs.core.apply.call(null,cljs.core.hash_map,map__27848):map__27848);var render_fn = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__27850 = (i__27844 + (1));
i__27844 = G__27850;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27845),iter__27842.call(null,cljs.core.chunk_rest.call(null,s__27843__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27845),null);
}
} else
{var col = cljs.core.first.call(null,s__27843__$2);return cljs.core.cons.call(null,(function (){var map__27849 = col;var map__27849__$1 = ((cljs.core.seq_QMARK_.call(null,map__27849))?cljs.core.apply.call(null,cljs.core.hash_map,map__27849):map__27849);var render_fn = cljs.core.get.call(null,map__27849__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__27849__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__27849__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__27842.call(null,cljs.core.rest.call(null,s__27843__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__27838,map__27838__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__27838,map__27838__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__27838,map__27838__$1,record,columns))
;
clustermap.components.table.t27839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27838,map__27838__$1,record,columns){
return (function (_27841){var self__ = this;
var _27841__$1 = this;return self__.meta27840;
});})(map__27838,map__27838__$1,record,columns))
;
clustermap.components.table.t27839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27838,map__27838__$1,record,columns){
return (function (_27841,meta27840__$1){var self__ = this;
var _27841__$1 = this;return (new clustermap.components.table.t27839(self__.columns,self__.record,self__.map__27838,self__.p__27825,self__.render_table_row,meta27840__$1));
});})(map__27838,map__27838__$1,record,columns))
;
clustermap.components.table.__GT_t27839 = ((function (map__27838,map__27838__$1,record,columns){
return (function __GT_t27839(columns__$1,record__$1,map__27838__$2,p__27825__$1,render_table_row__$1,meta27840){return (new clustermap.components.table.t27839(columns__$1,record__$1,map__27838__$2,p__27825__$1,render_table_row__$1,meta27840));
});})(map__27838,map__27838__$1,record,columns))
;
}
return (new clustermap.components.table.t27839(columns,record,map__27838__$1,p__27825,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__27851,owner,opts){var map__27867 = p__27851;var map__27867__$1 = ((cljs.core.seq_QMARK_.call(null,map__27867))?cljs.core.apply.call(null,cljs.core.hash_map,map__27867):map__27867);var props = map__27867__$1;var table_data = cljs.core.get.call(null,map__27867__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27868 = cljs.core.get.call(null,map__27867__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27868__$1 = ((cljs.core.seq_QMARK_.call(null,map__27868))?cljs.core.apply.call(null,cljs.core.hash_map,map__27868):map__27868);var controls = map__27868__$1;var columns = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs27869 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27869))?sablono.interpreter.attributes.call(null,attrs27869):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27869))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27870 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view){
return (function iter__27874(s__27875){return (new cljs.core.LazySeq(null,((function (attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view){
return (function (){var s__27875__$1 = s__27875;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27875__$1);if(temp__4126__auto__)
{var s__27875__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27875__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27875__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27877 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27876 = (0);while(true){
if((i__27876 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__27876);cljs.core.chunk_append.call(null,b__27877,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__27882 = (i__27876 + (1));
i__27876 = G__27882;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27877),iter__27874.call(null,cljs.core.chunk_rest.call(null,s__27875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27877),null);
}
} else
{var col = cljs.core.first.call(null,s__27875__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__27874.call(null,cljs.core.rest.call(null,s__27875__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27870))?sablono.interpreter.attributes.call(null,attrs27870):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27870))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27870)], null))));
})(),(function (){var attrs27871 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs27871))?sablono.interpreter.attributes.call(null,attrs27871):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27871))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27871)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27869),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs27872 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view){
return (function iter__27878(s__27879){return (new cljs.core.LazySeq(null,((function (attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view){
return (function (){var s__27879__$1 = s__27879;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27879__$1);if(temp__4126__auto__)
{var s__27879__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27879__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27879__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27881 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27880 = (0);while(true){
if((i__27880 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__27880);cljs.core.chunk_append.call(null,b__27881,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__27883 = (i__27880 + (1));
i__27880 = G__27883;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27881),iter__27878.call(null,cljs.core.chunk_rest.call(null,s__27879__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27881),null);
}
} else
{var col = cljs.core.first.call(null,s__27879__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__27878.call(null,cljs.core.rest.call(null,s__27879__$2)));
}
} else
{return null;
}
break;
}
});})(attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27872))?sablono.interpreter.attributes.call(null,attrs27872):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27872))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27872)], null))));
})(),(function (){var attrs27873 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs27869,map__27867,map__27867__$1,props,table_data,map__27868,map__27868__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs27873))?sablono.interpreter.attributes.call(null,attrs27873):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27873))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27873)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__27884,owner){var map__27923 = p__27884;var map__27923__$1 = ((cljs.core.seq_QMARK_.call(null,map__27923))?cljs.core.apply.call(null,cljs.core.hash_map,map__27923):map__27923);var props = map__27923__$1;var map__27924 = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27924__$1 = ((cljs.core.seq_QMARK_.call(null,map__27924))?cljs.core.apply.call(null,cljs.core.hash_map,map__27924):map__27924);var table_state = map__27924__$1;var table_data = cljs.core.get.call(null,map__27924__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27925 = cljs.core.get.call(null,map__27924__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27925__$1 = ((cljs.core.seq_QMARK_.call(null,map__27925))?cljs.core.apply.call(null,cljs.core.hash_map,map__27925):map__27925);var controls = map__27925__$1;var index = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t27926 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27926 = (function (sort_spec,map__27923,table_component,owner,props,map__27925,table_data,index,filter_spec,columns,p__27884,table_state,controls,map__27924,size,from,meta27927){
this.sort_spec = sort_spec;
this.map__27923 = map__27923;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__27925 = map__27925;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.p__27884 = p__27884;
this.table_state = table_state;
this.controls = controls;
this.map__27924 = map__27924;
this.size = size;
this.from = from;
this.meta27927 = meta27927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27926.cljs$lang$type = true;
clustermap.components.table.t27926.cljs$lang$ctorStr = "clustermap.components.table/t27926";
clustermap.components.table.t27926.cljs$lang$ctorPrWriter = ((function (map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t27926");
});})(map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t27926.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t27926.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__27929,p__27930){var self__ = this;
var map__27931 = p__27929;var map__27931__$1 = ((cljs.core.seq_QMARK_.call(null,map__27931))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931):map__27931);var next_props = map__27931__$1;var map__27932 = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27932__$1 = ((cljs.core.seq_QMARK_.call(null,map__27932))?cljs.core.apply.call(null,cljs.core.hash_map,map__27932):map__27932);var next_table_state = map__27932__$1;var next_table_data = cljs.core.get.call(null,map__27932__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27933 = cljs.core.get.call(null,map__27932__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27933__$1 = ((cljs.core.seq_QMARK_.call(null,map__27933))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933):map__27933);var next_controls = map__27933__$1;var next_index = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27934 = p__27930;var map__27934__$1 = ((cljs.core.seq_QMARK_.call(null,map__27934))?cljs.core.apply.call(null,cljs.core.hash_map,map__27934):map__27934);var fetch_table_data_fn = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__27931,map__27931__$1,next_props,map__27932,map__27932__$1,next_table_state,next_table_data,map__27933,map__27933__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__27934,map__27934__$1,fetch_table_data_fn,map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__27931,map__27931__$1,next_props,map__27932,map__27932__$1,next_table_state,next_table_data,map__27933,map__27933__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__27934,map__27934__$1,fetch_table_data_fn,map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_27947){var state_val_27948 = (state_27947[(1)]);if((state_val_27948 === (5)))
{var inst_27945 = (state_27947[(2)]);var state_27947__$1 = state_27947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27947__$1,inst_27945);
} else
{if((state_val_27948 === (4)))
{var state_27947__$1 = state_27947;var statearr_27949_27961 = state_27947__$1;(statearr_27949_27961[(2)] = null);
(statearr_27949_27961[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27948 === (3)))
{var inst_27937 = (state_27947[(7)]);var inst_27939 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27940 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_27941 = (new cljs.core.PersistentVector(null,1,(5),inst_27939,inst_27940,null));var inst_27942 = om.core.update_BANG_.call(null,self__.table_state,inst_27941,inst_27937);var state_27947__$1 = state_27947;var statearr_27950_27962 = state_27947__$1;(statearr_27950_27962[(2)] = inst_27942);
(statearr_27950_27962[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27948 === (2)))
{var inst_27937 = (state_27947[(7)]);var inst_27937__$1 = (state_27947[(2)]);var state_27947__$1 = (function (){var statearr_27951 = state_27947;(statearr_27951[(7)] = inst_27937__$1);
return statearr_27951;
})();if(cljs.core.truth_(inst_27937__$1))
{var statearr_27952_27963 = state_27947__$1;(statearr_27952_27963[(1)] = (3));
} else
{var statearr_27953_27964 = state_27947__$1;(statearr_27953_27964[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27948 === (1)))
{var inst_27935 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_27947__$1 = state_27947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27947__$1,(2),inst_27935);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__27931,map__27931__$1,next_props,map__27932,map__27932__$1,next_table_state,next_table_data,map__27933,map__27933__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__27934,map__27934__$1,fetch_table_data_fn,map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__27931,map__27931__$1,next_props,map__27932,map__27932__$1,next_table_state,next_table_data,map__27933,map__27933__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__27934,map__27934__$1,fetch_table_data_fn,map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27957 = [null,null,null,null,null,null,null,null];(statearr_27957[(0)] = state_machine__9111__auto__);
(statearr_27957[(1)] = (1));
return statearr_27957;
});
var state_machine__9111__auto____1 = (function (state_27947){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27947);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27958){if((e27958 instanceof Object))
{var ex__9114__auto__ = e27958;var statearr_27959_27965 = state_27947;(statearr_27959_27965[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27958;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27966 = state_27947;
state_27947 = G__27966;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27947){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__27931,map__27931__$1,next_props,map__27932,map__27932__$1,next_table_state,next_table_data,map__27933,map__27933__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__27934,map__27934__$1,fetch_table_data_fn,map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_27960 = f__9126__auto__.call(null);(statearr_27960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__27931,map__27931__$1,next_props,map__27932,map__27932__$1,next_table_state,next_table_data,map__27933,map__27933__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__27934,map__27934__$1,fetch_table_data_fn,map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t27926.prototype.om$core$IRender$ = true;
clustermap.components.table.t27926.prototype.om$core$IRender$render$arity$1 = ((function (map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t27926.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t27926.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t27926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_27928){var self__ = this;
var _27928__$1 = this;return self__.meta27927;
});})(map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t27926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_27928,meta27927__$1){var self__ = this;
var _27928__$1 = this;return (new clustermap.components.table.t27926(self__.sort_spec,self__.map__27923,self__.table_component,self__.owner,self__.props,self__.map__27925,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.p__27884,self__.table_state,self__.controls,self__.map__27924,self__.size,self__.from,meta27927__$1));
});})(map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t27926 = ((function (map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t27926(sort_spec__$1,map__27923__$2,table_component__$1,owner__$1,props__$1,map__27925__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,p__27884__$1,table_state__$1,controls__$1,map__27924__$2,size__$1,from__$1,meta27927){return (new clustermap.components.table.t27926(sort_spec__$1,map__27923__$2,table_component__$1,owner__$1,props__$1,map__27925__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,p__27884__$1,table_state__$1,controls__$1,map__27924__$2,size__$1,from__$1,meta27927));
});})(map__27923,map__27923__$1,props,map__27924,map__27924__$1,table_state,table_data,map__27925,map__27925__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t27926(sort_spec,map__27923__$1,table_component,owner,props,map__27925__$1,table_data,index,filter_spec,columns,p__27884,table_state,controls,map__27924__$1,size,from,null));
});
