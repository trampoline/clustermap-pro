// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__30299,owner){var map__30313 = p__30299;var map__30313__$1 = ((cljs.core.seq_QMARK_.call(null,map__30313))?cljs.core.apply.call(null,cljs.core.hash_map,map__30313):map__30313);var cursor = map__30313__$1;if(typeof clustermap.components.select_chooser.t30314 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t30314 = (function (cursor,map__30313,owner,p__30299,value_descriptions,key,title,select_chooser_component,meta30315){
this.cursor = cursor;
this.map__30313 = map__30313;
this.owner = owner;
this.p__30299 = p__30299;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta30315 = meta30315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t30314.cljs$lang$type = true;
clustermap.components.select_chooser.t30314.cljs$lang$ctorStr = "clustermap.components.select-chooser/t30314";
clustermap.components.select_chooser.t30314.cljs$lang$ctorPrWriter = ((function (map__30313,map__30313__$1,cursor){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.select-chooser/t30314");
});})(map__30313,map__30313__$1,cursor))
;
clustermap.components.select_chooser.t30314.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t30314.prototype.om$core$IRender$render$arity$1 = ((function (map__30313,map__30313__$1,cursor){
return (function (this__14971__auto__){var self__ = this;
var this__14971__auto____$1 = this;var current_val = (function (){var G__30317 = self__.cursor;var G__30317__$1 = (((G__30317 == null))?null:cljs.core.get_in.call(null,G__30317,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null)));var G__30317__$2 = (((G__30317__$1 == null))?null:cljs.core.name.call(null,G__30317__$1));return G__30317__$2;
})();return React.DOM.select({"onChange": ((function (current_val,this__14971__auto____$1,map__30313,map__30313__$1,cursor){
return (function (e){var val = cljs.core.not_empty.call(null,e.target.value);console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(current_val,this__14971__auto____$1,map__30313,map__30313__$1,cursor))
, "value": current_val},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (current_val,this__14971__auto____$1,map__30313,map__30313__$1,cursor){
return (function iter__30318(s__30319){return (new cljs.core.LazySeq(null,((function (current_val,this__14971__auto____$1,map__30313,map__30313__$1,cursor){
return (function (){var s__30319__$1 = s__30319;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30319__$1);if(temp__4126__auto__)
{var s__30319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30319__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30319__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30321 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30320 = (0);while(true){
if((i__30320 < size__12251__auto__))
{var vec__30324 = cljs.core._nth.call(null,c__12250__auto__,i__30320);var value = cljs.core.nth.call(null,vec__30324,(0),null);var description = cljs.core.nth.call(null,vec__30324,(1),null);cljs.core.chunk_append.call(null,b__30321,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)));
{
var G__30326 = (i__30320 + (1));
i__30320 = G__30326;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30321),iter__30318.call(null,cljs.core.chunk_rest.call(null,s__30319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30321),null);
}
} else
{var vec__30325 = cljs.core.first.call(null,s__30319__$2);var value = cljs.core.nth.call(null,vec__30325,(0),null);var description = cljs.core.nth.call(null,vec__30325,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)),iter__30318.call(null,cljs.core.rest.call(null,s__30319__$2)));
}
} else
{return null;
}
break;
}
});})(current_val,this__14971__auto____$1,map__30313,map__30313__$1,cursor))
,null,null));
});})(current_val,this__14971__auto____$1,map__30313,map__30313__$1,cursor))
;return iter__12252__auto__.call(null,self__.value_descriptions);
})()));
});})(map__30313,map__30313__$1,cursor))
;
clustermap.components.select_chooser.t30314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30313,map__30313__$1,cursor){
return (function (_30316){var self__ = this;
var _30316__$1 = this;return self__.meta30315;
});})(map__30313,map__30313__$1,cursor))
;
clustermap.components.select_chooser.t30314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30313,map__30313__$1,cursor){
return (function (_30316,meta30315__$1){var self__ = this;
var _30316__$1 = this;return (new clustermap.components.select_chooser.t30314(self__.cursor,self__.map__30313,self__.owner,self__.p__30299,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta30315__$1));
});})(map__30313,map__30313__$1,cursor))
;
clustermap.components.select_chooser.__GT_t30314 = ((function (map__30313,map__30313__$1,cursor){
return (function __GT_t30314(cursor__$1,map__30313__$2,owner__$1,p__30299__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta30315){return (new clustermap.components.select_chooser.t30314(cursor__$1,map__30313__$2,owner__$1,p__30299__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta30315));
});})(map__30313,map__30313__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t30314(cursor,map__30313__$1,owner,p__30299,value_descriptions,key,title,select_chooser_component,null));
});

//# sourceMappingURL=select_chooser.js.map