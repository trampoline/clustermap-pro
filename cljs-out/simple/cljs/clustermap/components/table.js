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
clustermap.components.table.order_col = (function order_col(controls,p__28166,p__28167){var map__28181 = p__28166;var map__28181__$1 = ((cljs.core.seq_QMARK_.call(null,map__28181))?cljs.core.apply.call(null,cljs.core.hash_map,map__28181):map__28181);var table_data = map__28181__$1;var current_sort_spec = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28182 = p__28167;var map__28182__$1 = ((cljs.core.seq_QMARK_.call(null,map__28182))?cljs.core.apply.call(null,cljs.core.hash_map,map__28182):map__28182);var col = map__28182__$1;var render_fn = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28183 = current_sort_spec__$1;var G__28183__$1 = (((G__28183 == null))?null:cljs.core.keys.call(null,G__28183));var G__28183__$2 = (((G__28183__$1 == null))?null:cljs.core.first.call(null,G__28183__$1));return G__28183__$2;
})();var current_sort_dir = (function (){var G__28184 = current_sort_spec__$1;var G__28184__$1 = (((G__28184 == null))?null:current_sort_key.call(null,G__28184));var G__28184__$2 = (((G__28184__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28184__$1));return G__28184__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28185 = cljs.core._EQ_;var expr__28186 = current_sort_dir;if(cljs.core.truth_(pred__28185.call(null,"asc",expr__28186)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28181,map__28181__$1,table_data,current_sort_spec,map__28182,map__28182__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28191 = cljs.core._EQ_;var expr__28192 = current_sort_dir;if(cljs.core.truth_(pred__28191.call(null,"asc",expr__28192)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28191.call(null,"desc",expr__28192)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28181,map__28181__$1,table_data,current_sort_spec,map__28182,map__28182__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28190 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28190))?sablono.interpreter.attributes.call(null,attrs28190):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28190))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28190)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28194,owner,opts){var map__28203 = p__28194;var map__28203__$1 = ((cljs.core.seq_QMARK_.call(null,map__28203))?cljs.core.apply.call(null,cljs.core.hash_map,map__28203):map__28203);var controls = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28204 = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28204__$1 = ((cljs.core.seq_QMARK_.call(null,map__28204))?cljs.core.apply.call(null,cljs.core.hash_map,map__28204):map__28204);var table_data = map__28204__$1;var count = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28205 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28205 = (function (owner,map__28204,paginate,table_data,controls,p__28194,map__28203,size,from,count,opts,meta28206){
this.owner = owner;
this.map__28204 = map__28204;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.p__28194 = p__28194;
this.map__28203 = map__28203;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28206 = meta28206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28205.cljs$lang$type = true;
clustermap.components.table.t28205.cljs$lang$ctorStr = "clustermap.components.table/t28205";
clustermap.components.table.t28205.cljs$lang$ctorPrWriter = ((function (map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28205");
});})(map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
;
clustermap.components.table.t28205.prototype.om$core$IRender$ = true;
clustermap.components.table.t28205.prototype.om$core$IRender$render$arity$1 = ((function (map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28208 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28208))?sablono.interpreter.attributes.call(null,attrs28208):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28208))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28208)], null))));
})()," to ",(function (){var attrs28209 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28209))?sablono.interpreter.attributes.call(null,attrs28209):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28209))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28209)], null))));
})()," of ",(function (){var attrs28210 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28210))?sablono.interpreter.attributes.call(null,attrs28210):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28210))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28210)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
},"Last")));
});})(map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
;
clustermap.components.table.t28205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (_28207){var self__ = this;
var _28207__$1 = this;return self__.meta28206;
});})(map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
;
clustermap.components.table.t28205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function (_28207,meta28206__$1){var self__ = this;
var _28207__$1 = this;return (new clustermap.components.table.t28205(self__.owner,self__.map__28204,self__.paginate,self__.table_data,self__.controls,self__.p__28194,self__.map__28203,self__.size,self__.from,self__.count,self__.opts,meta28206__$1));
});})(map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28205 = ((function (map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size){
return (function __GT_t28205(owner__$1,map__28204__$2,paginate__$1,table_data__$1,controls__$1,p__28194__$1,map__28203__$2,size__$1,from__$1,count__$1,opts__$1,meta28206){return (new clustermap.components.table.t28205(owner__$1,map__28204__$2,paginate__$1,table_data__$1,controls__$1,p__28194__$1,map__28203__$2,size__$1,from__$1,count__$1,opts__$1,meta28206));
});})(map__28203,map__28203__$1,controls,map__28204,map__28204__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28205(owner,map__28204__$1,paginate,table_data,controls,p__28194,map__28203__$1,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28211){var map__28224 = p__28211;var map__28224__$1 = ((cljs.core.seq_QMARK_.call(null,map__28224))?cljs.core.apply.call(null,cljs.core.hash_map,map__28224):map__28224);var record = cljs.core.get.call(null,map__28224__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28224__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28225 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28225 = (function (columns,record,map__28224,p__28211,render_table_row,meta28226){
this.columns = columns;
this.record = record;
this.map__28224 = map__28224;
this.p__28211 = p__28211;
this.render_table_row = render_table_row;
this.meta28226 = meta28226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28225.cljs$lang$type = true;
clustermap.components.table.t28225.cljs$lang$ctorStr = "clustermap.components.table/t28225";
clustermap.components.table.t28225.cljs$lang$ctorPrWriter = ((function (map__28224,map__28224__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28225");
});})(map__28224,map__28224__$1,record,columns))
;
clustermap.components.table.t28225.prototype.om$core$IRender$ = true;
clustermap.components.table.t28225.prototype.om$core$IRender$render$arity$1 = ((function (map__28224,map__28224__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28224,map__28224__$1,record,columns){
return (function iter__28228(s__28229){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28224,map__28224__$1,record,columns){
return (function (){var s__28229__$1 = s__28229;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28229__$1);if(temp__4126__auto__)
{var s__28229__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28229__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28229__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28231 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28230 = (0);while(true){
if((i__28230 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28230);cljs.core.chunk_append.call(null,b__28231,(function (){var map__28234 = col;var map__28234__$1 = ((cljs.core.seq_QMARK_.call(null,map__28234))?cljs.core.apply.call(null,cljs.core.hash_map,map__28234):map__28234);var render_fn = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28234__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28236 = (i__28230 + (1));
i__28230 = G__28236;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28231),iter__28228.call(null,cljs.core.chunk_rest.call(null,s__28229__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28231),null);
}
} else
{var col = cljs.core.first.call(null,s__28229__$2);return cljs.core.cons.call(null,(function (){var map__28235 = col;var map__28235__$1 = ((cljs.core.seq_QMARK_.call(null,map__28235))?cljs.core.apply.call(null,cljs.core.hash_map,map__28235):map__28235);var render_fn = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28228.call(null,cljs.core.rest.call(null,s__28229__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28224,map__28224__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28224,map__28224__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28224,map__28224__$1,record,columns))
;
clustermap.components.table.t28225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28224,map__28224__$1,record,columns){
return (function (_28227){var self__ = this;
var _28227__$1 = this;return self__.meta28226;
});})(map__28224,map__28224__$1,record,columns))
;
clustermap.components.table.t28225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28224,map__28224__$1,record,columns){
return (function (_28227,meta28226__$1){var self__ = this;
var _28227__$1 = this;return (new clustermap.components.table.t28225(self__.columns,self__.record,self__.map__28224,self__.p__28211,self__.render_table_row,meta28226__$1));
});})(map__28224,map__28224__$1,record,columns))
;
clustermap.components.table.__GT_t28225 = ((function (map__28224,map__28224__$1,record,columns){
return (function __GT_t28225(columns__$1,record__$1,map__28224__$2,p__28211__$1,render_table_row__$1,meta28226){return (new clustermap.components.table.t28225(columns__$1,record__$1,map__28224__$2,p__28211__$1,render_table_row__$1,meta28226));
});})(map__28224,map__28224__$1,record,columns))
;
}
return (new clustermap.components.table.t28225(columns,record,map__28224__$1,p__28211,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28237,owner,opts){var map__28253 = p__28237;var map__28253__$1 = ((cljs.core.seq_QMARK_.call(null,map__28253))?cljs.core.apply.call(null,cljs.core.hash_map,map__28253):map__28253);var props = map__28253__$1;var table_data = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28254 = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28254__$1 = ((cljs.core.seq_QMARK_.call(null,map__28254))?cljs.core.apply.call(null,cljs.core.hash_map,map__28254):map__28254);var controls = map__28254__$1;var columns = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28255 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28255))?sablono.interpreter.attributes.call(null,attrs28255):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28255))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28256 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view){
return (function iter__28260(s__28261){return (new cljs.core.LazySeq(null,((function (attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view){
return (function (){var s__28261__$1 = s__28261;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28261__$1);if(temp__4126__auto__)
{var s__28261__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28261__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28261__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28263 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28262 = (0);while(true){
if((i__28262 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28262);cljs.core.chunk_append.call(null,b__28263,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28268 = (i__28262 + (1));
i__28262 = G__28268;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28263),iter__28260.call(null,cljs.core.chunk_rest.call(null,s__28261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28263),null);
}
} else
{var col = cljs.core.first.call(null,s__28261__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28260.call(null,cljs.core.rest.call(null,s__28261__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28256))?sablono.interpreter.attributes.call(null,attrs28256):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28256))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28256)], null))));
})(),(function (){var attrs28257 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28257))?sablono.interpreter.attributes.call(null,attrs28257):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28257))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28257)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28255),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28258 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view){
return (function iter__28264(s__28265){return (new cljs.core.LazySeq(null,((function (attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view){
return (function (){var s__28265__$1 = s__28265;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28265__$1);if(temp__4126__auto__)
{var s__28265__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28265__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28265__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28267 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28266 = (0);while(true){
if((i__28266 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28266);cljs.core.chunk_append.call(null,b__28267,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28269 = (i__28266 + (1));
i__28266 = G__28269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28267),iter__28264.call(null,cljs.core.chunk_rest.call(null,s__28265__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28267),null);
}
} else
{var col = cljs.core.first.call(null,s__28265__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28264.call(null,cljs.core.rest.call(null,s__28265__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28258))?sablono.interpreter.attributes.call(null,attrs28258):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28258))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28258)], null))));
})(),(function (){var attrs28259 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28255,map__28253,map__28253__$1,props,table_data,map__28254,map__28254__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28259))?sablono.interpreter.attributes.call(null,attrs28259):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28259))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28259)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28270,owner){var map__28309 = p__28270;var map__28309__$1 = ((cljs.core.seq_QMARK_.call(null,map__28309))?cljs.core.apply.call(null,cljs.core.hash_map,map__28309):map__28309);var props = map__28309__$1;var map__28310 = cljs.core.get.call(null,map__28309__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28310__$1 = ((cljs.core.seq_QMARK_.call(null,map__28310))?cljs.core.apply.call(null,cljs.core.hash_map,map__28310):map__28310);var table_state = map__28310__$1;var table_data = cljs.core.get.call(null,map__28310__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28311 = cljs.core.get.call(null,map__28310__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28311__$1 = ((cljs.core.seq_QMARK_.call(null,map__28311))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);var controls = map__28311__$1;var index = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28309__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28312 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28312 = (function (sort_spec,table_component,owner,props,map__28311,table_data,index,p__28270,filter_spec,map__28310,columns,table_state,controls,size,map__28309,from,meta28313){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__28311 = map__28311;
this.table_data = table_data;
this.index = index;
this.p__28270 = p__28270;
this.filter_spec = filter_spec;
this.map__28310 = map__28310;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__28309 = map__28309;
this.from = from;
this.meta28313 = meta28313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28312.cljs$lang$type = true;
clustermap.components.table.t28312.cljs$lang$ctorStr = "clustermap.components.table/t28312";
clustermap.components.table.t28312.cljs$lang$ctorPrWriter = ((function (map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28312");
});})(map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28312.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28312.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28315,p__28316){var self__ = this;
var map__28317 = p__28315;var map__28317__$1 = ((cljs.core.seq_QMARK_.call(null,map__28317))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);var next_props = map__28317__$1;var map__28318 = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28318__$1 = ((cljs.core.seq_QMARK_.call(null,map__28318))?cljs.core.apply.call(null,cljs.core.hash_map,map__28318):map__28318);var next_table_state = map__28318__$1;var next_table_data = cljs.core.get.call(null,map__28318__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28319 = cljs.core.get.call(null,map__28318__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28319__$1 = ((cljs.core.seq_QMARK_.call(null,map__28319))?cljs.core.apply.call(null,cljs.core.hash_map,map__28319):map__28319);var next_controls = map__28319__$1;var next_index = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28320 = p__28316;var map__28320__$1 = ((cljs.core.seq_QMARK_.call(null,map__28320))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);var fetch_table_data_fn = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28317,map__28317__$1,next_props,map__28318,map__28318__$1,next_table_state,next_table_data,map__28319,map__28319__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28320,map__28320__$1,fetch_table_data_fn,map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28317,map__28317__$1,next_props,map__28318,map__28318__$1,next_table_state,next_table_data,map__28319,map__28319__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28320,map__28320__$1,fetch_table_data_fn,map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28333){var state_val_28334 = (state_28333[(1)]);if((state_val_28334 === (5)))
{var inst_28331 = (state_28333[(2)]);var state_28333__$1 = state_28333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28333__$1,inst_28331);
} else
{if((state_val_28334 === (4)))
{var state_28333__$1 = state_28333;var statearr_28335_28347 = state_28333__$1;(statearr_28335_28347[(2)] = null);
(statearr_28335_28347[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28334 === (3)))
{var inst_28323 = (state_28333[(7)]);var inst_28325 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28326 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28327 = (new cljs.core.PersistentVector(null,1,(5),inst_28325,inst_28326,null));var inst_28328 = om.core.update_BANG_.call(null,self__.table_state,inst_28327,inst_28323);var state_28333__$1 = state_28333;var statearr_28336_28348 = state_28333__$1;(statearr_28336_28348[(2)] = inst_28328);
(statearr_28336_28348[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28334 === (2)))
{var inst_28323 = (state_28333[(7)]);var inst_28323__$1 = (state_28333[(2)]);var state_28333__$1 = (function (){var statearr_28337 = state_28333;(statearr_28337[(7)] = inst_28323__$1);
return statearr_28337;
})();if(cljs.core.truth_(inst_28323__$1))
{var statearr_28338_28349 = state_28333__$1;(statearr_28338_28349[(1)] = (3));
} else
{var statearr_28339_28350 = state_28333__$1;(statearr_28339_28350[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28334 === (1)))
{var inst_28321 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28333__$1 = state_28333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28333__$1,(2),inst_28321);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28317,map__28317__$1,next_props,map__28318,map__28318__$1,next_table_state,next_table_data,map__28319,map__28319__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28320,map__28320__$1,fetch_table_data_fn,map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28317,map__28317__$1,next_props,map__28318,map__28318__$1,next_table_state,next_table_data,map__28319,map__28319__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28320,map__28320__$1,fetch_table_data_fn,map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28343 = [null,null,null,null,null,null,null,null];(statearr_28343[(0)] = state_machine__9111__auto__);
(statearr_28343[(1)] = (1));
return statearr_28343;
});
var state_machine__9111__auto____1 = (function (state_28333){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28333);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28344){if((e28344 instanceof Object))
{var ex__9114__auto__ = e28344;var statearr_28345_28351 = state_28333;(statearr_28345_28351[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28333);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28344;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28352 = state_28333;
state_28333 = G__28352;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28333){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28317,map__28317__$1,next_props,map__28318,map__28318__$1,next_table_state,next_table_data,map__28319,map__28319__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28320,map__28320__$1,fetch_table_data_fn,map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28346 = f__9126__auto__.call(null);(statearr_28346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28317,map__28317__$1,next_props,map__28318,map__28318__$1,next_table_state,next_table_data,map__28319,map__28319__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28320,map__28320__$1,fetch_table_data_fn,map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28312.prototype.om$core$IRender$ = true;
clustermap.components.table.t28312.prototype.om$core$IRender$render$arity$1 = ((function (map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28312.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28312.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28314){var self__ = this;
var _28314__$1 = this;return self__.meta28313;
});})(map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28314,meta28313__$1){var self__ = this;
var _28314__$1 = this;return (new clustermap.components.table.t28312(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.map__28311,self__.table_data,self__.index,self__.p__28270,self__.filter_spec,self__.map__28310,self__.columns,self__.table_state,self__.controls,self__.size,self__.map__28309,self__.from,meta28313__$1));
});})(map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28312 = ((function (map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28312(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28311__$2,table_data__$1,index__$1,p__28270__$1,filter_spec__$1,map__28310__$2,columns__$1,table_state__$1,controls__$1,size__$1,map__28309__$2,from__$1,meta28313){return (new clustermap.components.table.t28312(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28311__$2,table_data__$1,index__$1,p__28270__$1,filter_spec__$1,map__28310__$2,columns__$1,table_state__$1,controls__$1,size__$1,map__28309__$2,from__$1,meta28313));
});})(map__28309,map__28309__$1,props,map__28310,map__28310__$1,table_state,table_data,map__28311,map__28311__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28312(sort_spec,table_component,owner,props,map__28311__$1,table_data,index,p__28270,filter_spec,map__28310__$1,columns,table_state,controls,size,map__28309__$1,from,null));
});
