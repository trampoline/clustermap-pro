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
clustermap.components.table.order_col = (function order_col(controls,p__28180,p__28181){var map__28195 = p__28180;var map__28195__$1 = ((cljs.core.seq_QMARK_.call(null,map__28195))?cljs.core.apply.call(null,cljs.core.hash_map,map__28195):map__28195);var table_data = map__28195__$1;var current_sort_spec = cljs.core.get.call(null,map__28195__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28196 = p__28181;var map__28196__$1 = ((cljs.core.seq_QMARK_.call(null,map__28196))?cljs.core.apply.call(null,cljs.core.hash_map,map__28196):map__28196);var col = map__28196__$1;var render_fn = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28197 = current_sort_spec__$1;var G__28197__$1 = (((G__28197 == null))?null:cljs.core.keys.call(null,G__28197));var G__28197__$2 = (((G__28197__$1 == null))?null:cljs.core.first.call(null,G__28197__$1));return G__28197__$2;
})();var current_sort_dir = (function (){var G__28198 = current_sort_spec__$1;var G__28198__$1 = (((G__28198 == null))?null:current_sort_key.call(null,G__28198));var G__28198__$2 = (((G__28198__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28198__$1));return G__28198__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28199 = cljs.core._EQ_;var expr__28200 = current_sort_dir;if(cljs.core.truth_(pred__28199.call(null,"asc",expr__28200)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28195,map__28195__$1,table_data,current_sort_spec,map__28196,map__28196__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28205 = cljs.core._EQ_;var expr__28206 = current_sort_dir;if(cljs.core.truth_(pred__28205.call(null,"asc",expr__28206)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28205.call(null,"desc",expr__28206)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28195,map__28195__$1,table_data,current_sort_spec,map__28196,map__28196__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28204 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28204))?sablono.interpreter.attributes.call(null,attrs28204):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28204))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28204)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28208,owner,opts){var map__28217 = p__28208;var map__28217__$1 = ((cljs.core.seq_QMARK_.call(null,map__28217))?cljs.core.apply.call(null,cljs.core.hash_map,map__28217):map__28217);var controls = cljs.core.get.call(null,map__28217__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28218 = cljs.core.get.call(null,map__28217__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28218__$1 = ((cljs.core.seq_QMARK_.call(null,map__28218))?cljs.core.apply.call(null,cljs.core.hash_map,map__28218):map__28218);var table_data = map__28218__$1;var count = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28219 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28219 = (function (owner,map__28217,paginate,table_data,controls,size,p__28208,from,count,opts,map__28218,meta28220){
this.owner = owner;
this.map__28217 = map__28217;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.p__28208 = p__28208;
this.from = from;
this.count = count;
this.opts = opts;
this.map__28218 = map__28218;
this.meta28220 = meta28220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28219.cljs$lang$type = true;
clustermap.components.table.t28219.cljs$lang$ctorStr = "clustermap.components.table/t28219";
clustermap.components.table.t28219.cljs$lang$ctorPrWriter = ((function (map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28219");
});})(map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
;
clustermap.components.table.t28219.prototype.om$core$IRender$ = true;
clustermap.components.table.t28219.prototype.om$core$IRender$render$arity$1 = ((function (map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28222 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28222))?sablono.interpreter.attributes.call(null,attrs28222):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28222))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28222)], null))));
})()," to ",(function (){var attrs28223 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28223))?sablono.interpreter.attributes.call(null,attrs28223):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28223))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28223)], null))));
})()," of ",(function (){var attrs28224 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28224))?sablono.interpreter.attributes.call(null,attrs28224):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28224))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28224)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
},"Last")));
});})(map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
;
clustermap.components.table.t28219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (_28221){var self__ = this;
var _28221__$1 = this;return self__.meta28220;
});})(map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
;
clustermap.components.table.t28219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function (_28221,meta28220__$1){var self__ = this;
var _28221__$1 = this;return (new clustermap.components.table.t28219(self__.owner,self__.map__28217,self__.paginate,self__.table_data,self__.controls,self__.size,self__.p__28208,self__.from,self__.count,self__.opts,self__.map__28218,meta28220__$1));
});})(map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28219 = ((function (map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size){
return (function __GT_t28219(owner__$1,map__28217__$2,paginate__$1,table_data__$1,controls__$1,size__$1,p__28208__$1,from__$1,count__$1,opts__$1,map__28218__$2,meta28220){return (new clustermap.components.table.t28219(owner__$1,map__28217__$2,paginate__$1,table_data__$1,controls__$1,size__$1,p__28208__$1,from__$1,count__$1,opts__$1,map__28218__$2,meta28220));
});})(map__28217,map__28217__$1,controls,map__28218,map__28218__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28219(owner,map__28217__$1,paginate,table_data,controls,size,p__28208,from,count,opts,map__28218__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28225){var map__28238 = p__28225;var map__28238__$1 = ((cljs.core.seq_QMARK_.call(null,map__28238))?cljs.core.apply.call(null,cljs.core.hash_map,map__28238):map__28238);var record = cljs.core.get.call(null,map__28238__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28238__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28239 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28239 = (function (columns,record,map__28238,p__28225,render_table_row,meta28240){
this.columns = columns;
this.record = record;
this.map__28238 = map__28238;
this.p__28225 = p__28225;
this.render_table_row = render_table_row;
this.meta28240 = meta28240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28239.cljs$lang$type = true;
clustermap.components.table.t28239.cljs$lang$ctorStr = "clustermap.components.table/t28239";
clustermap.components.table.t28239.cljs$lang$ctorPrWriter = ((function (map__28238,map__28238__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28239");
});})(map__28238,map__28238__$1,record,columns))
;
clustermap.components.table.t28239.prototype.om$core$IRender$ = true;
clustermap.components.table.t28239.prototype.om$core$IRender$render$arity$1 = ((function (map__28238,map__28238__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28238,map__28238__$1,record,columns){
return (function iter__28242(s__28243){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28238,map__28238__$1,record,columns){
return (function (){var s__28243__$1 = s__28243;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28243__$1);if(temp__4126__auto__)
{var s__28243__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28243__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28243__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28245 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28244 = (0);while(true){
if((i__28244 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28244);cljs.core.chunk_append.call(null,b__28245,(function (){var map__28248 = col;var map__28248__$1 = ((cljs.core.seq_QMARK_.call(null,map__28248))?cljs.core.apply.call(null,cljs.core.hash_map,map__28248):map__28248);var render_fn = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28250 = (i__28244 + (1));
i__28244 = G__28250;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28245),iter__28242.call(null,cljs.core.chunk_rest.call(null,s__28243__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28245),null);
}
} else
{var col = cljs.core.first.call(null,s__28243__$2);return cljs.core.cons.call(null,(function (){var map__28249 = col;var map__28249__$1 = ((cljs.core.seq_QMARK_.call(null,map__28249))?cljs.core.apply.call(null,cljs.core.hash_map,map__28249):map__28249);var render_fn = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28242.call(null,cljs.core.rest.call(null,s__28243__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28238,map__28238__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28238,map__28238__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28238,map__28238__$1,record,columns))
;
clustermap.components.table.t28239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28238,map__28238__$1,record,columns){
return (function (_28241){var self__ = this;
var _28241__$1 = this;return self__.meta28240;
});})(map__28238,map__28238__$1,record,columns))
;
clustermap.components.table.t28239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28238,map__28238__$1,record,columns){
return (function (_28241,meta28240__$1){var self__ = this;
var _28241__$1 = this;return (new clustermap.components.table.t28239(self__.columns,self__.record,self__.map__28238,self__.p__28225,self__.render_table_row,meta28240__$1));
});})(map__28238,map__28238__$1,record,columns))
;
clustermap.components.table.__GT_t28239 = ((function (map__28238,map__28238__$1,record,columns){
return (function __GT_t28239(columns__$1,record__$1,map__28238__$2,p__28225__$1,render_table_row__$1,meta28240){return (new clustermap.components.table.t28239(columns__$1,record__$1,map__28238__$2,p__28225__$1,render_table_row__$1,meta28240));
});})(map__28238,map__28238__$1,record,columns))
;
}
return (new clustermap.components.table.t28239(columns,record,map__28238__$1,p__28225,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28251,owner,opts){var map__28267 = p__28251;var map__28267__$1 = ((cljs.core.seq_QMARK_.call(null,map__28267))?cljs.core.apply.call(null,cljs.core.hash_map,map__28267):map__28267);var props = map__28267__$1;var table_data = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28268 = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28268__$1 = ((cljs.core.seq_QMARK_.call(null,map__28268))?cljs.core.apply.call(null,cljs.core.hash_map,map__28268):map__28268);var controls = map__28268__$1;var columns = cljs.core.get.call(null,map__28268__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28268__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28269 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28269))?sablono.interpreter.attributes.call(null,attrs28269):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28269))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28270 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view){
return (function iter__28274(s__28275){return (new cljs.core.LazySeq(null,((function (attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view){
return (function (){var s__28275__$1 = s__28275;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28275__$1);if(temp__4126__auto__)
{var s__28275__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28275__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28275__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28277 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28276 = (0);while(true){
if((i__28276 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28276);cljs.core.chunk_append.call(null,b__28277,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28282 = (i__28276 + (1));
i__28276 = G__28282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28277),iter__28274.call(null,cljs.core.chunk_rest.call(null,s__28275__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28277),null);
}
} else
{var col = cljs.core.first.call(null,s__28275__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28274.call(null,cljs.core.rest.call(null,s__28275__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28270))?sablono.interpreter.attributes.call(null,attrs28270):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28270))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28270)], null))));
})(),(function (){var attrs28271 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28271))?sablono.interpreter.attributes.call(null,attrs28271):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28271))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28271)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28269),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28272 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view){
return (function iter__28278(s__28279){return (new cljs.core.LazySeq(null,((function (attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view){
return (function (){var s__28279__$1 = s__28279;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28279__$1);if(temp__4126__auto__)
{var s__28279__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28279__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28279__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28281 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28280 = (0);while(true){
if((i__28280 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28280);cljs.core.chunk_append.call(null,b__28281,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28283 = (i__28280 + (1));
i__28280 = G__28283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28281),iter__28278.call(null,cljs.core.chunk_rest.call(null,s__28279__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28281),null);
}
} else
{var col = cljs.core.first.call(null,s__28279__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28278.call(null,cljs.core.rest.call(null,s__28279__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28272))?sablono.interpreter.attributes.call(null,attrs28272):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28272)], null))));
})(),(function (){var attrs28273 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28269,map__28267,map__28267__$1,props,table_data,map__28268,map__28268__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28273))?sablono.interpreter.attributes.call(null,attrs28273):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28273))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28273)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28284,owner){var map__28323 = p__28284;var map__28323__$1 = ((cljs.core.seq_QMARK_.call(null,map__28323))?cljs.core.apply.call(null,cljs.core.hash_map,map__28323):map__28323);var props = map__28323__$1;var map__28324 = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28324__$1 = ((cljs.core.seq_QMARK_.call(null,map__28324))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324):map__28324);var table_state = map__28324__$1;var table_data = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28325 = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28325__$1 = ((cljs.core.seq_QMARK_.call(null,map__28325))?cljs.core.apply.call(null,cljs.core.hash_map,map__28325):map__28325);var controls = map__28325__$1;var index = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28326 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28326 = (function (sort_spec,table_component,owner,props,table_data,map__28323,index,filter_spec,columns,table_state,map__28325,p__28284,controls,size,map__28324,from,meta28327){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.map__28323 = map__28323;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__28325 = map__28325;
this.p__28284 = p__28284;
this.controls = controls;
this.size = size;
this.map__28324 = map__28324;
this.from = from;
this.meta28327 = meta28327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28326.cljs$lang$type = true;
clustermap.components.table.t28326.cljs$lang$ctorStr = "clustermap.components.table/t28326";
clustermap.components.table.t28326.cljs$lang$ctorPrWriter = ((function (map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28326");
});})(map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28326.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28326.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28329,p__28330){var self__ = this;
var map__28331 = p__28329;var map__28331__$1 = ((cljs.core.seq_QMARK_.call(null,map__28331))?cljs.core.apply.call(null,cljs.core.hash_map,map__28331):map__28331);var next_props = map__28331__$1;var map__28332 = cljs.core.get.call(null,map__28331__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28332__$1 = ((cljs.core.seq_QMARK_.call(null,map__28332))?cljs.core.apply.call(null,cljs.core.hash_map,map__28332):map__28332);var next_table_state = map__28332__$1;var next_table_data = cljs.core.get.call(null,map__28332__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28333 = cljs.core.get.call(null,map__28332__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28333__$1 = ((cljs.core.seq_QMARK_.call(null,map__28333))?cljs.core.apply.call(null,cljs.core.hash_map,map__28333):map__28333);var next_controls = map__28333__$1;var next_index = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28331__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28334 = p__28330;var map__28334__$1 = ((cljs.core.seq_QMARK_.call(null,map__28334))?cljs.core.apply.call(null,cljs.core.hash_map,map__28334):map__28334);var fetch_table_data_fn = cljs.core.get.call(null,map__28334__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28331,map__28331__$1,next_props,map__28332,map__28332__$1,next_table_state,next_table_data,map__28333,map__28333__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28334,map__28334__$1,fetch_table_data_fn,map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28331,map__28331__$1,next_props,map__28332,map__28332__$1,next_table_state,next_table_data,map__28333,map__28333__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28334,map__28334__$1,fetch_table_data_fn,map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28347){var state_val_28348 = (state_28347[(1)]);if((state_val_28348 === (5)))
{var inst_28345 = (state_28347[(2)]);var state_28347__$1 = state_28347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28347__$1,inst_28345);
} else
{if((state_val_28348 === (4)))
{var state_28347__$1 = state_28347;var statearr_28349_28361 = state_28347__$1;(statearr_28349_28361[(2)] = null);
(statearr_28349_28361[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28348 === (3)))
{var inst_28337 = (state_28347[(7)]);var inst_28339 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28340 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28341 = (new cljs.core.PersistentVector(null,1,(5),inst_28339,inst_28340,null));var inst_28342 = om.core.update_BANG_.call(null,self__.table_state,inst_28341,inst_28337);var state_28347__$1 = state_28347;var statearr_28350_28362 = state_28347__$1;(statearr_28350_28362[(2)] = inst_28342);
(statearr_28350_28362[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28348 === (2)))
{var inst_28337 = (state_28347[(7)]);var inst_28337__$1 = (state_28347[(2)]);var state_28347__$1 = (function (){var statearr_28351 = state_28347;(statearr_28351[(7)] = inst_28337__$1);
return statearr_28351;
})();if(cljs.core.truth_(inst_28337__$1))
{var statearr_28352_28363 = state_28347__$1;(statearr_28352_28363[(1)] = (3));
} else
{var statearr_28353_28364 = state_28347__$1;(statearr_28353_28364[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28348 === (1)))
{var inst_28335 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28347__$1 = state_28347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28347__$1,(2),inst_28335);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28331,map__28331__$1,next_props,map__28332,map__28332__$1,next_table_state,next_table_data,map__28333,map__28333__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28334,map__28334__$1,fetch_table_data_fn,map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28331,map__28331__$1,next_props,map__28332,map__28332__$1,next_table_state,next_table_data,map__28333,map__28333__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28334,map__28334__$1,fetch_table_data_fn,map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28357 = [null,null,null,null,null,null,null,null];(statearr_28357[(0)] = state_machine__9111__auto__);
(statearr_28357[(1)] = (1));
return statearr_28357;
});
var state_machine__9111__auto____1 = (function (state_28347){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28347);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28358){if((e28358 instanceof Object))
{var ex__9114__auto__ = e28358;var statearr_28359_28365 = state_28347;(statearr_28359_28365[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28358;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28366 = state_28347;
state_28347 = G__28366;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28347){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28331,map__28331__$1,next_props,map__28332,map__28332__$1,next_table_state,next_table_data,map__28333,map__28333__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28334,map__28334__$1,fetch_table_data_fn,map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28360 = f__9126__auto__.call(null);(statearr_28360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28331,map__28331__$1,next_props,map__28332,map__28332__$1,next_table_state,next_table_data,map__28333,map__28333__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28334,map__28334__$1,fetch_table_data_fn,map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28326.prototype.om$core$IRender$ = true;
clustermap.components.table.t28326.prototype.om$core$IRender$render$arity$1 = ((function (map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28326.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28326.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28328){var self__ = this;
var _28328__$1 = this;return self__.meta28327;
});})(map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28328,meta28327__$1){var self__ = this;
var _28328__$1 = this;return (new clustermap.components.table.t28326(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.table_data,self__.map__28323,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.map__28325,self__.p__28284,self__.controls,self__.size,self__.map__28324,self__.from,meta28327__$1));
});})(map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28326 = ((function (map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28326(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,map__28323__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__28325__$2,p__28284__$1,controls__$1,size__$1,map__28324__$2,from__$1,meta28327){return (new clustermap.components.table.t28326(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,map__28323__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__28325__$2,p__28284__$1,controls__$1,size__$1,map__28324__$2,from__$1,meta28327));
});})(map__28323,map__28323__$1,props,map__28324,map__28324__$1,table_state,table_data,map__28325,map__28325__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28326(sort_spec,table_component,owner,props,table_data,map__28323__$1,index,filter_spec,columns,table_state,map__28325__$1,p__28284,controls,size,map__28324__$1,from,null));
});
