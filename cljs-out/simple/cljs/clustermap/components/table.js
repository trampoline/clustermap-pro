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
clustermap.components.table.order_col = (function order_col(controls,p__24124,p__24125){var map__24139 = p__24124;var map__24139__$1 = ((cljs.core.seq_QMARK_.call(null,map__24139))?cljs.core.apply.call(null,cljs.core.hash_map,map__24139):map__24139);var table_data = map__24139__$1;var current_sort_spec = cljs.core.get.call(null,map__24139__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__24140 = p__24125;var map__24140__$1 = ((cljs.core.seq_QMARK_.call(null,map__24140))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);var col = map__24140__$1;var render_fn = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__24141 = current_sort_spec__$1;var G__24141__$1 = (((G__24141 == null))?null:cljs.core.keys.call(null,G__24141));var G__24141__$2 = (((G__24141__$1 == null))?null:cljs.core.first.call(null,G__24141__$1));return G__24141__$2;
})();var current_sort_dir = (function (){var G__24142 = current_sort_spec__$1;var G__24142__$1 = (((G__24142 == null))?null:current_sort_key.call(null,G__24142));var G__24142__$2 = (((G__24142__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__24142__$1));return G__24142__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__24143 = cljs.core._EQ_;var expr__24144 = current_sort_dir;if(cljs.core.truth_(pred__24143.call(null,"asc",expr__24144)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24139,map__24139__$1,table_data,current_sort_spec,map__24140,map__24140__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__24149 = cljs.core._EQ_;var expr__24150 = current_sort_dir;if(cljs.core.truth_(pred__24149.call(null,"asc",expr__24150)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__24149.call(null,"desc",expr__24150)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__24139,map__24139__$1,table_data,current_sort_spec,map__24140,map__24140__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs24148 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24148))?sablono.interpreter.attributes.call(null,attrs24148):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24148))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24148)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__24152,owner,opts){var map__24161 = p__24152;var map__24161__$1 = ((cljs.core.seq_QMARK_.call(null,map__24161))?cljs.core.apply.call(null,cljs.core.hash_map,map__24161):map__24161);var controls = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24162 = cljs.core.get.call(null,map__24161__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24162__$1 = ((cljs.core.seq_QMARK_.call(null,map__24162))?cljs.core.apply.call(null,cljs.core.hash_map,map__24162):map__24162);var table_data = map__24162__$1;var count = cljs.core.get.call(null,map__24162__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__24162__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24162__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t24163 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24163 = (function (map__24162,owner,paginate,table_data,controls,map__24161,size,p__24152,from,count,opts,meta24164){
this.map__24162 = map__24162;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.map__24161 = map__24161;
this.size = size;
this.p__24152 = p__24152;
this.from = from;
this.count = count;
this.opts = opts;
this.meta24164 = meta24164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24163.cljs$lang$type = true;
clustermap.components.table.t24163.cljs$lang$ctorStr = "clustermap.components.table/t24163";
clustermap.components.table.t24163.cljs$lang$ctorPrWriter = ((function (map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24163");
});})(map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
;
clustermap.components.table.t24163.prototype.om$core$IRender$ = true;
clustermap.components.table.t24163.prototype.om$core$IRender$render$arity$1 = ((function (map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs24166 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24166))?sablono.interpreter.attributes.call(null,attrs24166):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24166))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24166)], null))));
})()," to ",(function (){var attrs24167 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24167))?sablono.interpreter.attributes.call(null,attrs24167):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24167))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24167)], null))));
})()," of ",(function (){var attrs24168 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs24168))?sablono.interpreter.attributes.call(null,attrs24168):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24168))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24168)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
},"Last")));
});})(map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
;
clustermap.components.table.t24163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (_24165){var self__ = this;
var _24165__$1 = this;return self__.meta24164;
});})(map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
;
clustermap.components.table.t24163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function (_24165,meta24164__$1){var self__ = this;
var _24165__$1 = this;return (new clustermap.components.table.t24163(self__.map__24162,self__.owner,self__.paginate,self__.table_data,self__.controls,self__.map__24161,self__.size,self__.p__24152,self__.from,self__.count,self__.opts,meta24164__$1));
});})(map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t24163 = ((function (map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size){
return (function __GT_t24163(map__24162__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,map__24161__$2,size__$1,p__24152__$1,from__$1,count__$1,opts__$1,meta24164){return (new clustermap.components.table.t24163(map__24162__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,map__24161__$2,size__$1,p__24152__$1,from__$1,count__$1,opts__$1,meta24164));
});})(map__24161,map__24161__$1,controls,map__24162,map__24162__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t24163(map__24162__$1,owner,paginate,table_data,controls,map__24161__$1,size,p__24152,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__24169){var map__24182 = p__24169;var map__24182__$1 = ((cljs.core.seq_QMARK_.call(null,map__24182))?cljs.core.apply.call(null,cljs.core.hash_map,map__24182):map__24182);var record = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t24183 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24183 = (function (columns,record,map__24182,p__24169,render_table_row,meta24184){
this.columns = columns;
this.record = record;
this.map__24182 = map__24182;
this.p__24169 = p__24169;
this.render_table_row = render_table_row;
this.meta24184 = meta24184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24183.cljs$lang$type = true;
clustermap.components.table.t24183.cljs$lang$ctorStr = "clustermap.components.table/t24183";
clustermap.components.table.t24183.cljs$lang$ctorPrWriter = ((function (map__24182,map__24182__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24183");
});})(map__24182,map__24182__$1,record,columns))
;
clustermap.components.table.t24183.prototype.om$core$IRender$ = true;
clustermap.components.table.t24183.prototype.om$core$IRender$render$arity$1 = ((function (map__24182,map__24182__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__24182,map__24182__$1,record,columns){
return (function iter__24186(s__24187){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__24182,map__24182__$1,record,columns){
return (function (){var s__24187__$1 = s__24187;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24187__$1);if(temp__4126__auto__)
{var s__24187__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24187__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24187__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24189 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24188 = (0);while(true){
if((i__24188 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24188);cljs.core.chunk_append.call(null,b__24189,(function (){var map__24192 = col;var map__24192__$1 = ((cljs.core.seq_QMARK_.call(null,map__24192))?cljs.core.apply.call(null,cljs.core.hash_map,map__24192):map__24192);var render_fn = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__24194 = (i__24188 + (1));
i__24188 = G__24194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24189),iter__24186.call(null,cljs.core.chunk_rest.call(null,s__24187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24189),null);
}
} else
{var col = cljs.core.first.call(null,s__24187__$2);return cljs.core.cons.call(null,(function (){var map__24193 = col;var map__24193__$1 = ((cljs.core.seq_QMARK_.call(null,map__24193))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);var render_fn = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__24186.call(null,cljs.core.rest.call(null,s__24187__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__24182,map__24182__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__24182,map__24182__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__24182,map__24182__$1,record,columns))
;
clustermap.components.table.t24183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24182,map__24182__$1,record,columns){
return (function (_24185){var self__ = this;
var _24185__$1 = this;return self__.meta24184;
});})(map__24182,map__24182__$1,record,columns))
;
clustermap.components.table.t24183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24182,map__24182__$1,record,columns){
return (function (_24185,meta24184__$1){var self__ = this;
var _24185__$1 = this;return (new clustermap.components.table.t24183(self__.columns,self__.record,self__.map__24182,self__.p__24169,self__.render_table_row,meta24184__$1));
});})(map__24182,map__24182__$1,record,columns))
;
clustermap.components.table.__GT_t24183 = ((function (map__24182,map__24182__$1,record,columns){
return (function __GT_t24183(columns__$1,record__$1,map__24182__$2,p__24169__$1,render_table_row__$1,meta24184){return (new clustermap.components.table.t24183(columns__$1,record__$1,map__24182__$2,p__24169__$1,render_table_row__$1,meta24184));
});})(map__24182,map__24182__$1,record,columns))
;
}
return (new clustermap.components.table.t24183(columns,record,map__24182__$1,p__24169,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__24195,owner,opts){var map__24211 = p__24195;var map__24211__$1 = ((cljs.core.seq_QMARK_.call(null,map__24211))?cljs.core.apply.call(null,cljs.core.hash_map,map__24211):map__24211);var props = map__24211__$1;var table_data = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24212 = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24212__$1 = ((cljs.core.seq_QMARK_.call(null,map__24212))?cljs.core.apply.call(null,cljs.core.hash_map,map__24212):map__24212);var controls = map__24212__$1;var columns = cljs.core.get.call(null,map__24212__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__24212__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs24213 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24213))?sablono.interpreter.attributes.call(null,attrs24213):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24213))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24214 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view){
return (function iter__24218(s__24219){return (new cljs.core.LazySeq(null,((function (attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view){
return (function (){var s__24219__$1 = s__24219;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24219__$1);if(temp__4126__auto__)
{var s__24219__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24219__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24219__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24221 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24220 = (0);while(true){
if((i__24220 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24220);cljs.core.chunk_append.call(null,b__24221,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24226 = (i__24220 + (1));
i__24220 = G__24226;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24221),iter__24218.call(null,cljs.core.chunk_rest.call(null,s__24219__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24221),null);
}
} else
{var col = cljs.core.first.call(null,s__24219__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24218.call(null,cljs.core.rest.call(null,s__24219__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24214))?sablono.interpreter.attributes.call(null,attrs24214):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24214))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24214)], null))));
})(),(function (){var attrs24215 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24215))?sablono.interpreter.attributes.call(null,attrs24215):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24215))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24215)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24213),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs24216 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view){
return (function iter__24222(s__24223){return (new cljs.core.LazySeq(null,((function (attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view){
return (function (){var s__24223__$1 = s__24223;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24223__$1);if(temp__4126__auto__)
{var s__24223__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24223__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24223__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24225 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24224 = (0);while(true){
if((i__24224 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__24224);cljs.core.chunk_append.call(null,b__24225,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__24227 = (i__24224 + (1));
i__24224 = G__24227;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24225),iter__24222.call(null,cljs.core.chunk_rest.call(null,s__24223__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24225),null);
}
} else
{var col = cljs.core.first.call(null,s__24223__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__24222.call(null,cljs.core.rest.call(null,s__24223__$2)));
}
} else
{return null;
}
break;
}
});})(attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs24216))?sablono.interpreter.attributes.call(null,attrs24216):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24216))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24216)], null))));
})(),(function (){var attrs24217 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs24213,map__24211,map__24211__$1,props,table_data,map__24212,map__24212__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs24217))?sablono.interpreter.attributes.call(null,attrs24217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24217)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,_,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,null,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__24228,owner){var map__24241 = p__24228;var map__24241__$1 = ((cljs.core.seq_QMARK_.call(null,map__24241))?cljs.core.apply.call(null,cljs.core.hash_map,map__24241):map__24241);var props = map__24241__$1;var map__24242 = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24242__$1 = ((cljs.core.seq_QMARK_.call(null,map__24242))?cljs.core.apply.call(null,cljs.core.hash_map,map__24242):map__24242);var table_state = map__24242__$1;var table_data = cljs.core.get.call(null,map__24242__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24243 = cljs.core.get.call(null,map__24242__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24243__$1 = ((cljs.core.seq_QMARK_.call(null,map__24243))?cljs.core.apply.call(null,cljs.core.hash_map,map__24243):map__24243);var controls = map__24243__$1;var index = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__24243__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__24241__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t24244 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t24244 = (function (p__24228,sort_spec,table_component,owner,props,table_data,index,filter_spec,map__24243,columns,table_state,map__24241,controls,size,map__24242,from,meta24245){
this.p__24228 = p__24228;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.map__24243 = map__24243;
this.columns = columns;
this.table_state = table_state;
this.map__24241 = map__24241;
this.controls = controls;
this.size = size;
this.map__24242 = map__24242;
this.from = from;
this.meta24245 = meta24245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t24244.cljs$lang$type = true;
clustermap.components.table.t24244.cljs$lang$ctorStr = "clustermap.components.table/t24244";
clustermap.components.table.t24244.cljs$lang$ctorPrWriter = ((function (map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t24244");
});})(map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24244.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t24244.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__24247,p__24248){var self__ = this;
var map__24249 = p__24247;var map__24249__$1 = ((cljs.core.seq_QMARK_.call(null,map__24249))?cljs.core.apply.call(null,cljs.core.hash_map,map__24249):map__24249);var next_props = map__24249__$1;var map__24250 = cljs.core.get.call(null,map__24249__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24250__$1 = ((cljs.core.seq_QMARK_.call(null,map__24250))?cljs.core.apply.call(null,cljs.core.hash_map,map__24250):map__24250);var next_table_state = map__24250__$1;var next_table_data = cljs.core.get.call(null,map__24250__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24251 = cljs.core.get.call(null,map__24250__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24251__$1 = ((cljs.core.seq_QMARK_.call(null,map__24251))?cljs.core.apply.call(null,cljs.core.hash_map,map__24251):map__24251);var next_controls = map__24251__$1;var next_index = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__24249__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24252 = p__24248;var map__24252__$1 = ((cljs.core.seq_QMARK_.call(null,map__24252))?cljs.core.apply.call(null,cljs.core.hash_map,map__24252):map__24252);var next_state = map__24252__$1;var table_data_resource = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24244.prototype.om$core$IRender$ = true;
clustermap.components.table.t24244.prototype.om$core$IRender$render$arity$1 = ((function (map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24244.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t24244.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
});})(map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24246){var self__ = this;
var _24246__$1 = this;return self__.meta24245;
});})(map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t24244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_24246,meta24245__$1){var self__ = this;
var _24246__$1 = this;return (new clustermap.components.table.t24244(self__.p__24228,self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.map__24243,self__.columns,self__.table_state,self__.map__24241,self__.controls,self__.size,self__.map__24242,self__.from,meta24245__$1));
});})(map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t24244 = ((function (map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t24244(p__24228__$1,sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,map__24243__$2,columns__$1,table_state__$1,map__24241__$2,controls__$1,size__$1,map__24242__$2,from__$1,meta24245){return (new clustermap.components.table.t24244(p__24228__$1,sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,map__24243__$2,columns__$1,table_state__$1,map__24241__$2,controls__$1,size__$1,map__24242__$2,from__$1,meta24245));
});})(map__24241,map__24241__$1,props,map__24242,map__24242__$1,table_state,table_data,map__24243,map__24243__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t24244(p__24228,sort_spec,table_component,owner,props,table_data,index,filter_spec,map__24243__$1,columns,table_state,map__24241__$1,controls,size,map__24242__$1,from,null));
});
