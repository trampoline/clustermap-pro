// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__28761,owner){var map__28775 = p__28761;var map__28775__$1 = ((cljs.core.seq_QMARK_.call(null,map__28775))?cljs.core.apply.call(null,cljs.core.hash_map,map__28775):map__28775);var cursor = map__28775__$1;if(typeof clustermap.components.select_chooser.t28776 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t28776 = (function (cursor,map__28775,owner,p__28761,value_descriptions,key,title,select_chooser_component,meta28777){
this.cursor = cursor;
this.map__28775 = map__28775;
this.owner = owner;
this.p__28761 = p__28761;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta28777 = meta28777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t28776.cljs$lang$type = true;
clustermap.components.select_chooser.t28776.cljs$lang$ctorStr = "clustermap.components.select-chooser/t28776";
clustermap.components.select_chooser.t28776.cljs$lang$ctorPrWriter = ((function (map__28775,map__28775__$1,cursor){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.select-chooser/t28776");
});})(map__28775,map__28775__$1,cursor))
;
clustermap.components.select_chooser.t28776.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t28776.prototype.om$core$IRender$render$arity$1 = ((function (map__28775,map__28775__$1,cursor){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;var current_val = (function (){var G__28779 = self__.cursor;var G__28779__$1 = (((G__28779 == null))?null:cljs.core.get_in.call(null,G__28779,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null)));var G__28779__$2 = (((G__28779__$1 == null))?null:cljs.core.name.call(null,G__28779__$1));return G__28779__$2;
})();return React.DOM.select({"onChange": ((function (current_val,this__7096__auto____$1,map__28775,map__28775__$1,cursor){
return (function (e){var val = cljs.core.not_empty.call(null,e.target.value);console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(current_val,this__7096__auto____$1,map__28775,map__28775__$1,cursor))
, "value": current_val},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (current_val,this__7096__auto____$1,map__28775,map__28775__$1,cursor){
return (function iter__28780(s__28781){return (new cljs.core.LazySeq(null,((function (current_val,this__7096__auto____$1,map__28775,map__28775__$1,cursor){
return (function (){var s__28781__$1 = s__28781;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28781__$1);if(temp__4126__auto__)
{var s__28781__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28781__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28781__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28783 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28782 = (0);while(true){
if((i__28782 < size__4376__auto__))
{var vec__28786 = cljs.core._nth.call(null,c__4375__auto__,i__28782);var value = cljs.core.nth.call(null,vec__28786,(0),null);var description = cljs.core.nth.call(null,vec__28786,(1),null);cljs.core.chunk_append.call(null,b__28783,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)));
{
var G__28788 = (i__28782 + (1));
i__28782 = G__28788;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28783),iter__28780.call(null,cljs.core.chunk_rest.call(null,s__28781__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28783),null);
}
} else
{var vec__28787 = cljs.core.first.call(null,s__28781__$2);var value = cljs.core.nth.call(null,vec__28787,(0),null);var description = cljs.core.nth.call(null,vec__28787,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)),iter__28780.call(null,cljs.core.rest.call(null,s__28781__$2)));
}
} else
{return null;
}
break;
}
});})(current_val,this__7096__auto____$1,map__28775,map__28775__$1,cursor))
,null,null));
});})(current_val,this__7096__auto____$1,map__28775,map__28775__$1,cursor))
;return iter__4377__auto__.call(null,self__.value_descriptions);
})()));
});})(map__28775,map__28775__$1,cursor))
;
clustermap.components.select_chooser.t28776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28775,map__28775__$1,cursor){
return (function (_28778){var self__ = this;
var _28778__$1 = this;return self__.meta28777;
});})(map__28775,map__28775__$1,cursor))
;
clustermap.components.select_chooser.t28776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28775,map__28775__$1,cursor){
return (function (_28778,meta28777__$1){var self__ = this;
var _28778__$1 = this;return (new clustermap.components.select_chooser.t28776(self__.cursor,self__.map__28775,self__.owner,self__.p__28761,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta28777__$1));
});})(map__28775,map__28775__$1,cursor))
;
clustermap.components.select_chooser.__GT_t28776 = ((function (map__28775,map__28775__$1,cursor){
return (function __GT_t28776(cursor__$1,map__28775__$2,owner__$1,p__28761__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28777){return (new clustermap.components.select_chooser.t28776(cursor__$1,map__28775__$2,owner__$1,p__28761__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta28777));
});})(map__28775,map__28775__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t28776(cursor,map__28775__$1,owner,p__28761,value_descriptions,key,title,select_chooser_component,null));
});
