// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__28457,owner){var map__28471 = p__28457;var map__28471__$1 = ((cljs.core.seq_QMARK_.call(null,map__28471))?cljs.core.apply.call(null,cljs.core.hash_map,map__28471):map__28471);var cursor = map__28471__$1;if(typeof clustermap.components.select_chooser.t28472 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t28472 = (function (cursor,map__28471,owner,p__28457,value_descriptions,key,title,select_chooser_component,meta28473){
this.cursor = cursor;
this.map__28471 = map__28471;
this.owner = owner;
this.p__28457 = p__28457;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta28473 = meta28473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t28472.cljs$lang$type = true;
clustermap.components.select_chooser.t28472.cljs$lang$ctorStr = "clustermap.components.select-chooser/t28472";
clustermap.components.select_chooser.t28472.cljs$lang$ctorPrWriter = ((function (map__28471,map__28471__$1,cursor){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.select-chooser/t28472");
});})(map__28471,map__28471__$1,cursor))
;
clustermap.components.select_chooser.t28472.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t28472.prototype.om$core$IRender$render$arity$1 = ((function (map__28471,map__28471__$1,cursor){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;var current_val = (function (){var G__28475 = self__.cursor;var G__28475__$1 = (((G__28475 == null))?null:cljs.core.get_in.call(null,G__28475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null)));var G__28475__$2 = (((G__28475__$1 == null))?null:cljs.core.name.call(null,G__28475__$1));return G__28475__$2;
})();return React.DOM.select({"onChange": ((function (current_val,this__7096__auto____$1,map__28471,map__28471__$1,cursor){
return (function (e){var val = cljs.core.not_empty.call(null,e.target.value);console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(current_val,this__7096__auto____$1,map__28471,map__28471__$1,cursor))
, "value": current_val},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (current_val,this__7096__auto____$1,map__28471,map__28471__$1,cursor){
return (function iter__28476(s__28477){return (new cljs.core.LazySeq(null,((function (current_val,this__7096__auto____$1,map__28471,map__28471__$1,cursor){
return (function (){var s__28477__$1 = s__28477;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28477__$1);if(temp__4126__auto__)
{var s__28477__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28477__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28477__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28479 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28478 = (0);while(true){
if((i__28478 < size__4376__auto__))
{var vec__28482 = cljs.core._nth.call(null,c__4375__auto__,i__28478);var value = cljs.core.nth.call(null,vec__28482,(0),null);var description = cljs.core.nth.call(null,vec__28482,(1),null);cljs.core.chunk_append.call(null,b__28479,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)));
{
var G__28484 = (i__28478 + (1));
i__28478 = G__28484;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28479),iter__28476.call(null,cljs.core.chunk_rest.call(null,s__28477__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28479),null);
}
} else
{var vec__28483 = cljs.core.first.call(null,s__28477__$2);var value = cljs.core.nth.call(null,vec__28483,(0),null);var description = cljs.core.nth.call(null,vec__28483,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)),iter__28476.call(null,cljs.core.rest.call(null,s__28477__$2)));
}
} else
{return null;
}
break;
}
});})(current_val,this__7096__auto____$1,map__28471,map__28471__$1,cursor))
,null,null));
});})(current_val,this__7096__auto____$1,map__28471,map__28471__$1,cursor))
;return iter__4377__auto__.call(null,self__.value_descriptions);
})()));
});})(map__28471,map__28471__$1,cursor))
;
clustermap.components.select_chooser.t28472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28471,map__28471__$1,cursor){
return (function (_28474){var self__ = this;
var _28474__$1 = this;return self__.meta28473;
});})(map__28471,map__28471__$1,cursor))
;
clustermap.components.select_chooser.t28472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28471,map__28471__$1,cursor){
return (function (_28474,meta28473__$1){var self__ = this;
var _28474__$1 = this;return (new clustermap.components.select_chooser.t28472(self__.cursor,self__.map__28471,self__.owner,self__.p__28457,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta28473__$1));
});})(map__28471,map__28471__$1,cursor))
;
clustermap.components.select_chooser.__GT_t28472 = ((function (map__28471,map__28471__$1,cursor){
return (function __GT_t28472(cursor__$1,map__28471__$2,owner__$1,p__28457__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28473){return (new clustermap.components.select_chooser.t28472(cursor__$1,map__28471__$2,owner__$1,p__28457__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28473));
});})(map__28471,map__28471__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t28472(cursor,map__28471__$1,owner,p__28457,value_descriptions,key,title,select_chooser_component,null));
});
