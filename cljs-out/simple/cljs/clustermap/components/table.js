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
clustermap.components.table.order_col = (function order_col(controls,p__28261,p__28262){var map__28276 = p__28261;var map__28276__$1 = ((cljs.core.seq_QMARK_.call(null,map__28276))?cljs.core.apply.call(null,cljs.core.hash_map,map__28276):map__28276);var table_data = map__28276__$1;var current_sort_spec = cljs.core.get.call(null,map__28276__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28277 = p__28262;var map__28277__$1 = ((cljs.core.seq_QMARK_.call(null,map__28277))?cljs.core.apply.call(null,cljs.core.hash_map,map__28277):map__28277);var col = map__28277__$1;var render_fn = cljs.core.get.call(null,map__28277__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28277__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28277__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28277__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28278 = current_sort_spec__$1;var G__28278__$1 = (((G__28278 == null))?null:cljs.core.keys.call(null,G__28278));var G__28278__$2 = (((G__28278__$1 == null))?null:cljs.core.first.call(null,G__28278__$1));return G__28278__$2;
})();var current_sort_dir = (function (){var G__28279 = current_sort_spec__$1;var G__28279__$1 = (((G__28279 == null))?null:current_sort_key.call(null,G__28279));var G__28279__$2 = (((G__28279__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28279__$1));return G__28279__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28280 = cljs.core._EQ_;var expr__28281 = current_sort_dir;if(cljs.core.truth_(pred__28280.call(null,"asc",expr__28281)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28276,map__28276__$1,table_data,current_sort_spec,map__28277,map__28277__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28286 = cljs.core._EQ_;var expr__28287 = current_sort_dir;if(cljs.core.truth_(pred__28286.call(null,"asc",expr__28287)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28286.call(null,"desc",expr__28287)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28276,map__28276__$1,table_data,current_sort_spec,map__28277,map__28277__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28285 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28285))?sablono.interpreter.attributes.call(null,attrs28285):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28285))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28285)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28289,owner,opts){var map__28298 = p__28289;var map__28298__$1 = ((cljs.core.seq_QMARK_.call(null,map__28298))?cljs.core.apply.call(null,cljs.core.hash_map,map__28298):map__28298);var controls = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28299 = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28299__$1 = ((cljs.core.seq_QMARK_.call(null,map__28299))?cljs.core.apply.call(null,cljs.core.hash_map,map__28299):map__28299);var table_data = map__28299__$1;var count = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28300 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28300 = (function (owner,p__28289,paginate,map__28298,table_data,map__28299,controls,size,from,count,opts,meta28301){
this.owner = owner;
this.p__28289 = p__28289;
this.paginate = paginate;
this.map__28298 = map__28298;
this.table_data = table_data;
this.map__28299 = map__28299;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28301 = meta28301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28300.cljs$lang$type = true;
clustermap.components.table.t28300.cljs$lang$ctorStr = "clustermap.components.table/t28300";
clustermap.components.table.t28300.cljs$lang$ctorPrWriter = ((function (map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28300");
});})(map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
;
clustermap.components.table.t28300.prototype.om$core$IRender$ = true;
clustermap.components.table.t28300.prototype.om$core$IRender$render$arity$1 = ((function (map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28303 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28303))?sablono.interpreter.attributes.call(null,attrs28303):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28303))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28303)], null))));
})()," to ",(function (){var attrs28304 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28304))?sablono.interpreter.attributes.call(null,attrs28304):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28304))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28304)], null))));
})()," of ",(function (){var attrs28305 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28305))?sablono.interpreter.attributes.call(null,attrs28305):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28305))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28305)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
},"Last")));
});})(map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
;
clustermap.components.table.t28300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (_28302){var self__ = this;
var _28302__$1 = this;return self__.meta28301;
});})(map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
;
clustermap.components.table.t28300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function (_28302,meta28301__$1){var self__ = this;
var _28302__$1 = this;return (new clustermap.components.table.t28300(self__.owner,self__.p__28289,self__.paginate,self__.map__28298,self__.table_data,self__.map__28299,self__.controls,self__.size,self__.from,self__.count,self__.opts,meta28301__$1));
});})(map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28300 = ((function (map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size){
return (function __GT_t28300(owner__$1,p__28289__$1,paginate__$1,map__28298__$2,table_data__$1,map__28299__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta28301){return (new clustermap.components.table.t28300(owner__$1,p__28289__$1,paginate__$1,map__28298__$2,table_data__$1,map__28299__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta28301));
});})(map__28298,map__28298__$1,controls,map__28299,map__28299__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28300(owner,p__28289,paginate,map__28298__$1,table_data,map__28299__$1,controls,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28306){var map__28319 = p__28306;var map__28319__$1 = ((cljs.core.seq_QMARK_.call(null,map__28319))?cljs.core.apply.call(null,cljs.core.hash_map,map__28319):map__28319);var record = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28319__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28320 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28320 = (function (columns,record,map__28319,p__28306,render_table_row,meta28321){
this.columns = columns;
this.record = record;
this.map__28319 = map__28319;
this.p__28306 = p__28306;
this.render_table_row = render_table_row;
this.meta28321 = meta28321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28320.cljs$lang$type = true;
clustermap.components.table.t28320.cljs$lang$ctorStr = "clustermap.components.table/t28320";
clustermap.components.table.t28320.cljs$lang$ctorPrWriter = ((function (map__28319,map__28319__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28320");
});})(map__28319,map__28319__$1,record,columns))
;
clustermap.components.table.t28320.prototype.om$core$IRender$ = true;
clustermap.components.table.t28320.prototype.om$core$IRender$render$arity$1 = ((function (map__28319,map__28319__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28319,map__28319__$1,record,columns){
return (function iter__28323(s__28324){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28319,map__28319__$1,record,columns){
return (function (){var s__28324__$1 = s__28324;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28324__$1);if(temp__4126__auto__)
{var s__28324__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28324__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28324__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28326 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28325 = (0);while(true){
if((i__28325 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28325);cljs.core.chunk_append.call(null,b__28326,(function (){var map__28329 = col;var map__28329__$1 = ((cljs.core.seq_QMARK_.call(null,map__28329))?cljs.core.apply.call(null,cljs.core.hash_map,map__28329):map__28329);var render_fn = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
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
{var col = cljs.core.first.call(null,s__28324__$2);return cljs.core.cons.call(null,(function (){var map__28330 = col;var map__28330__$1 = ((cljs.core.seq_QMARK_.call(null,map__28330))?cljs.core.apply.call(null,cljs.core.hash_map,map__28330):map__28330);var render_fn = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28323.call(null,cljs.core.rest.call(null,s__28324__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28319,map__28319__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28319,map__28319__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28319,map__28319__$1,record,columns))
;
clustermap.components.table.t28320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28319,map__28319__$1,record,columns){
return (function (_28322){var self__ = this;
var _28322__$1 = this;return self__.meta28321;
});})(map__28319,map__28319__$1,record,columns))
;
clustermap.components.table.t28320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28319,map__28319__$1,record,columns){
return (function (_28322,meta28321__$1){var self__ = this;
var _28322__$1 = this;return (new clustermap.components.table.t28320(self__.columns,self__.record,self__.map__28319,self__.p__28306,self__.render_table_row,meta28321__$1));
});})(map__28319,map__28319__$1,record,columns))
;
clustermap.components.table.__GT_t28320 = ((function (map__28319,map__28319__$1,record,columns){
return (function __GT_t28320(columns__$1,record__$1,map__28319__$2,p__28306__$1,render_table_row__$1,meta28321){return (new clustermap.components.table.t28320(columns__$1,record__$1,map__28319__$2,p__28306__$1,render_table_row__$1,meta28321));
});})(map__28319,map__28319__$1,record,columns))
;
}
return (new clustermap.components.table.t28320(columns,record,map__28319__$1,p__28306,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28332,owner,opts){var map__28348 = p__28332;var map__28348__$1 = ((cljs.core.seq_QMARK_.call(null,map__28348))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);var props = map__28348__$1;var table_data = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28349 = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28349__$1 = ((cljs.core.seq_QMARK_.call(null,map__28349))?cljs.core.apply.call(null,cljs.core.hash_map,map__28349):map__28349);var controls = map__28349__$1;var columns = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28350 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28350))?sablono.interpreter.attributes.call(null,attrs28350):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28350))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28351 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view){
return (function iter__28355(s__28356){return (new cljs.core.LazySeq(null,((function (attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view){
return (function (){var s__28356__$1 = s__28356;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28356__$1);if(temp__4126__auto__)
{var s__28356__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28356__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28356__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28358 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28357 = (0);while(true){
if((i__28357 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28357);cljs.core.chunk_append.call(null,b__28358,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28363 = (i__28357 + (1));
i__28357 = G__28363;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28358),iter__28355.call(null,cljs.core.chunk_rest.call(null,s__28356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28358),null);
}
} else
{var col = cljs.core.first.call(null,s__28356__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28355.call(null,cljs.core.rest.call(null,s__28356__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28351))?sablono.interpreter.attributes.call(null,attrs28351):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28351))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28351)], null))));
})(),(function (){var attrs28352 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28352))?sablono.interpreter.attributes.call(null,attrs28352):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28352))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28352)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28350),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28353 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view){
return (function iter__28359(s__28360){return (new cljs.core.LazySeq(null,((function (attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view){
return (function (){var s__28360__$1 = s__28360;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28360__$1);if(temp__4126__auto__)
{var s__28360__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28360__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28360__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28362 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28361 = (0);while(true){
if((i__28361 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28361);cljs.core.chunk_append.call(null,b__28362,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28364 = (i__28361 + (1));
i__28361 = G__28364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28362),iter__28359.call(null,cljs.core.chunk_rest.call(null,s__28360__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28362),null);
}
} else
{var col = cljs.core.first.call(null,s__28360__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28359.call(null,cljs.core.rest.call(null,s__28360__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28353))?sablono.interpreter.attributes.call(null,attrs28353):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28353))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28353)], null))));
})(),(function (){var attrs28354 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28350,map__28348,map__28348__$1,props,table_data,map__28349,map__28349__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28354))?sablono.interpreter.attributes.call(null,attrs28354):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28354))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28354)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28365,owner){var map__28404 = p__28365;var map__28404__$1 = ((cljs.core.seq_QMARK_.call(null,map__28404))?cljs.core.apply.call(null,cljs.core.hash_map,map__28404):map__28404);var props = map__28404__$1;var map__28405 = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28405__$1 = ((cljs.core.seq_QMARK_.call(null,map__28405))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);var table_state = map__28405__$1;var table_data = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28406 = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28406__$1 = ((cljs.core.seq_QMARK_.call(null,map__28406))?cljs.core.apply.call(null,cljs.core.hash_map,map__28406):map__28406);var controls = map__28406__$1;var index = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28407 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28407 = (function (sort_spec,table_component,owner,props,p__28365,table_data,map__28404,index,filter_spec,columns,table_state,controls,size,map__28405,map__28406,from,meta28408){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.p__28365 = p__28365;
this.table_data = table_data;
this.map__28404 = map__28404;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__28405 = map__28405;
this.map__28406 = map__28406;
this.from = from;
this.meta28408 = meta28408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28407.cljs$lang$type = true;
clustermap.components.table.t28407.cljs$lang$ctorStr = "clustermap.components.table/t28407";
clustermap.components.table.t28407.cljs$lang$ctorPrWriter = ((function (map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28407");
});})(map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28407.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28407.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28410,p__28411){var self__ = this;
var map__28412 = p__28410;var map__28412__$1 = ((cljs.core.seq_QMARK_.call(null,map__28412))?cljs.core.apply.call(null,cljs.core.hash_map,map__28412):map__28412);var next_props = map__28412__$1;var map__28413 = cljs.core.get.call(null,map__28412__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28413__$1 = ((cljs.core.seq_QMARK_.call(null,map__28413))?cljs.core.apply.call(null,cljs.core.hash_map,map__28413):map__28413);var next_table_state = map__28413__$1;var next_table_data = cljs.core.get.call(null,map__28413__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28414 = cljs.core.get.call(null,map__28413__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28414__$1 = ((cljs.core.seq_QMARK_.call(null,map__28414))?cljs.core.apply.call(null,cljs.core.hash_map,map__28414):map__28414);var next_controls = map__28414__$1;var next_index = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28412__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28415 = p__28411;var map__28415__$1 = ((cljs.core.seq_QMARK_.call(null,map__28415))?cljs.core.apply.call(null,cljs.core.hash_map,map__28415):map__28415);var fetch_table_data_fn = cljs.core.get.call(null,map__28415__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28412,map__28412__$1,next_props,map__28413,map__28413__$1,next_table_state,next_table_data,map__28414,map__28414__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28415,map__28415__$1,fetch_table_data_fn,map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28412,map__28412__$1,next_props,map__28413,map__28413__$1,next_table_state,next_table_data,map__28414,map__28414__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28415,map__28415__$1,fetch_table_data_fn,map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28428){var state_val_28429 = (state_28428[(1)]);if((state_val_28429 === (5)))
{var inst_28426 = (state_28428[(2)]);var state_28428__$1 = state_28428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28428__$1,inst_28426);
} else
{if((state_val_28429 === (4)))
{var state_28428__$1 = state_28428;var statearr_28430_28442 = state_28428__$1;(statearr_28430_28442[(2)] = null);
(statearr_28430_28442[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28429 === (3)))
{var inst_28418 = (state_28428[(7)]);var inst_28420 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28421 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28422 = (new cljs.core.PersistentVector(null,1,(5),inst_28420,inst_28421,null));var inst_28423 = om.core.update_BANG_.call(null,self__.table_state,inst_28422,inst_28418);var state_28428__$1 = state_28428;var statearr_28431_28443 = state_28428__$1;(statearr_28431_28443[(2)] = inst_28423);
(statearr_28431_28443[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28429 === (2)))
{var inst_28418 = (state_28428[(7)]);var inst_28418__$1 = (state_28428[(2)]);var state_28428__$1 = (function (){var statearr_28432 = state_28428;(statearr_28432[(7)] = inst_28418__$1);
return statearr_28432;
})();if(cljs.core.truth_(inst_28418__$1))
{var statearr_28433_28444 = state_28428__$1;(statearr_28433_28444[(1)] = (3));
} else
{var statearr_28434_28445 = state_28428__$1;(statearr_28434_28445[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28429 === (1)))
{var inst_28416 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28428__$1 = state_28428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(2),inst_28416);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28412,map__28412__$1,next_props,map__28413,map__28413__$1,next_table_state,next_table_data,map__28414,map__28414__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28415,map__28415__$1,fetch_table_data_fn,map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28412,map__28412__$1,next_props,map__28413,map__28413__$1,next_table_state,next_table_data,map__28414,map__28414__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28415,map__28415__$1,fetch_table_data_fn,map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28438 = [null,null,null,null,null,null,null,null];(statearr_28438[(0)] = state_machine__9111__auto__);
(statearr_28438[(1)] = (1));
return statearr_28438;
});
var state_machine__9111__auto____1 = (function (state_28428){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28428);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28439){if((e28439 instanceof Object))
{var ex__9114__auto__ = e28439;var statearr_28440_28446 = state_28428;(statearr_28440_28446[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28439;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28447 = state_28428;
state_28428 = G__28447;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28428){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28412,map__28412__$1,next_props,map__28413,map__28413__$1,next_table_state,next_table_data,map__28414,map__28414__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28415,map__28415__$1,fetch_table_data_fn,map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28441 = f__9126__auto__.call(null);(statearr_28441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28412,map__28412__$1,next_props,map__28413,map__28413__$1,next_table_state,next_table_data,map__28414,map__28414__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28415,map__28415__$1,fetch_table_data_fn,map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28407.prototype.om$core$IRender$ = true;
clustermap.components.table.t28407.prototype.om$core$IRender$render$arity$1 = ((function (map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28407.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28407.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28409){var self__ = this;
var _28409__$1 = this;return self__.meta28408;
});})(map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28409,meta28408__$1){var self__ = this;
var _28409__$1 = this;return (new clustermap.components.table.t28407(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.p__28365,self__.table_data,self__.map__28404,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.map__28405,self__.map__28406,self__.from,meta28408__$1));
});})(map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28407 = ((function (map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28407(sort_spec__$1,table_component__$1,owner__$1,props__$1,p__28365__$1,table_data__$1,map__28404__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28405__$2,map__28406__$2,from__$1,meta28408){return (new clustermap.components.table.t28407(sort_spec__$1,table_component__$1,owner__$1,props__$1,p__28365__$1,table_data__$1,map__28404__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28405__$2,map__28406__$2,from__$1,meta28408));
});})(map__28404,map__28404__$1,props,map__28405,map__28405__$1,table_state,table_data,map__28406,map__28406__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28407(sort_spec,table_component,owner,props,p__28365,table_data,map__28404__$1,index,filter_spec,columns,table_state,controls,size,map__28405__$1,map__28406__$1,from,null));
});
