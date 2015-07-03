// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
/**
* update a cursor with values from a [[val label]+] seq
* - title : title
* - value-labels a seq of {:value v :label l} records
* - read-update-fn : dual-arity fn, called with [cursor] to read the value, or [cursor value-label-record] to update
*/
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,value_labels,read_update_fn,cursor,owner){if(typeof clustermap.components.select_chooser.t29053 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t29053 = (function (owner,cursor,read_update_fn,value_labels,title,select_chooser_component,meta29054){
this.owner = owner;
this.cursor = cursor;
this.read_update_fn = read_update_fn;
this.value_labels = value_labels;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta29054 = meta29054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t29053.cljs$lang$type = true;
clustermap.components.select_chooser.t29053.cljs$lang$ctorStr = "clustermap.components.select-chooser/t29053";
clustermap.components.select_chooser.t29053.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.select-chooser/t29053");
});
clustermap.components.select_chooser.t29053.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t29053.prototype.om$core$IRender$render$arity$1 = (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;var current_value = (function (){var G__29056 = self__.read_update_fn.call(null,self__.cursor);var G__29056__$1 = (((G__29056 == null))?null:cljs.core.name.call(null,G__29056));return G__29056__$1;
})();var value_labels_by_val = cljs.core.reduce.call(null,((function (current_value,this__7096__auto____$1){
return (function (m,p__29057){var map__29058 = p__29057;var map__29058__$1 = ((cljs.core.seq_QMARK_.call(null,map__29058))?cljs.core.apply.call(null,cljs.core.hash_map,map__29058):map__29058);var value_label = map__29058__$1;var label = cljs.core.get.call(null,map__29058__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29058__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.assoc.call(null,m,cljs.core.name.call(null,value),value_label);
});})(current_value,this__7096__auto____$1))
,cljs.core.PersistentArrayMap.EMPTY,self__.value_labels);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHOOSER",value_labels_by_val], null)));
return React.DOM.select({"onChange": ((function (current_value,value_labels_by_val,this__7096__auto____$1){
return (function (e){var val = cljs.core.not_empty.call(null,e.target.value);console.log(val);
return self__.read_update_fn.call(null,self__.cursor,cljs.core.get.call(null,value_labels_by_val,val));
});})(current_value,value_labels_by_val,this__7096__auto____$1))
, "value": current_value},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (current_value,value_labels_by_val,this__7096__auto____$1){
return (function iter__29059(s__29060){return (new cljs.core.LazySeq(null,((function (current_value,value_labels_by_val,this__7096__auto____$1){
return (function (){var s__29060__$1 = s__29060;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29060__$1);if(temp__4126__auto__)
{var s__29060__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29060__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29060__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29062 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29061 = (0);while(true){
if((i__29061 < size__4376__auto__))
{var map__29065 = cljs.core._nth.call(null,c__4375__auto__,i__29061);var map__29065__$1 = ((cljs.core.seq_QMARK_.call(null,map__29065))?cljs.core.apply.call(null,cljs.core.hash_map,map__29065):map__29065);var label = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29062,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,label)));
{
var G__29067 = (i__29061 + (1));
i__29061 = G__29067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29062),iter__29059.call(null,cljs.core.chunk_rest.call(null,s__29060__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29062),null);
}
} else
{var map__29066 = cljs.core.first.call(null,s__29060__$2);var map__29066__$1 = ((cljs.core.seq_QMARK_.call(null,map__29066))?cljs.core.apply.call(null,cljs.core.hash_map,map__29066):map__29066);var label = cljs.core.get.call(null,map__29066__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29066__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,label)),iter__29059.call(null,cljs.core.rest.call(null,s__29060__$2)));
}
} else
{return null;
}
break;
}
});})(current_value,value_labels_by_val,this__7096__auto____$1))
,null,null));
});})(current_value,value_labels_by_val,this__7096__auto____$1))
;return iter__4377__auto__.call(null,self__.value_labels);
})()));
});
clustermap.components.select_chooser.t29053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29055){var self__ = this;
var _29055__$1 = this;return self__.meta29054;
});
clustermap.components.select_chooser.t29053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29055,meta29054__$1){var self__ = this;
var _29055__$1 = this;return (new clustermap.components.select_chooser.t29053(self__.owner,self__.cursor,self__.read_update_fn,self__.value_labels,self__.title,self__.select_chooser_component,meta29054__$1));
});
clustermap.components.select_chooser.__GT_t29053 = (function __GT_t29053(owner__$1,cursor__$1,read_update_fn__$1,value_labels__$1,title__$1,select_chooser_component__$1,meta29054){return (new clustermap.components.select_chooser.t29053(owner__$1,cursor__$1,read_update_fn__$1,value_labels__$1,title__$1,select_chooser_component__$1,meta29054));
});
}
return (new clustermap.components.select_chooser.t29053(owner,cursor,read_update_fn,value_labels,title,select_chooser_component,null));
});
