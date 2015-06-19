// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__32393,owner){var map__32407 = p__32393;var map__32407__$1 = ((cljs.core.seq_QMARK_.call(null,map__32407))?cljs.core.apply.call(null,cljs.core.hash_map,map__32407):map__32407);var cursor = map__32407__$1;if(typeof clustermap.components.select_chooser.t32408 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t32408 = (function (cursor,map__32407,owner,p__32393,value_descriptions,key,title,select_chooser_component,meta32409){
this.cursor = cursor;
this.map__32407 = map__32407;
this.owner = owner;
this.p__32393 = p__32393;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta32409 = meta32409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t32408.cljs$lang$type = true;
clustermap.components.select_chooser.t32408.cljs$lang$ctorStr = "clustermap.components.select-chooser/t32408";
clustermap.components.select_chooser.t32408.cljs$lang$ctorPrWriter = ((function (map__32407,map__32407__$1,cursor){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.select-chooser/t32408");
});})(map__32407,map__32407__$1,cursor))
;
clustermap.components.select_chooser.t32408.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t32408.prototype.om$core$IRender$render$arity$1 = ((function (map__32407,map__32407__$1,cursor){
return (function (this__15009__auto__){var self__ = this;
var this__15009__auto____$1 = this;var current_val = (function (){var G__32411 = self__.cursor;var G__32411__$1 = (((G__32411 == null))?null:cljs.core.get_in.call(null,G__32411,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null)));var G__32411__$2 = (((G__32411__$1 == null))?null:cljs.core.name.call(null,G__32411__$1));return G__32411__$2;
})();return React.DOM.select({"onChange": ((function (current_val,this__15009__auto____$1,map__32407,map__32407__$1,cursor){
return (function (e){var val = cljs.core.not_empty.call(null,e.target.value);console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(current_val,this__15009__auto____$1,map__32407,map__32407__$1,cursor))
, "value": current_val},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (current_val,this__15009__auto____$1,map__32407,map__32407__$1,cursor){
return (function iter__32412(s__32413){return (new cljs.core.LazySeq(null,((function (current_val,this__15009__auto____$1,map__32407,map__32407__$1,cursor){
return (function (){var s__32413__$1 = s__32413;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32413__$1);if(temp__4126__auto__)
{var s__32413__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32413__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32413__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32415 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32414 = (0);while(true){
if((i__32414 < size__12289__auto__))
{var vec__32418 = cljs.core._nth.call(null,c__12288__auto__,i__32414);var value = cljs.core.nth.call(null,vec__32418,(0),null);var description = cljs.core.nth.call(null,vec__32418,(1),null);cljs.core.chunk_append.call(null,b__32415,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)));
{
var G__32420 = (i__32414 + (1));
i__32414 = G__32420;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32415),iter__32412.call(null,cljs.core.chunk_rest.call(null,s__32413__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32415),null);
}
} else
{var vec__32419 = cljs.core.first.call(null,s__32413__$2);var value = cljs.core.nth.call(null,vec__32419,(0),null);var description = cljs.core.nth.call(null,vec__32419,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": cljs.core.name.call(null,value)},sablono.interpreter.interpret.call(null,description)),iter__32412.call(null,cljs.core.rest.call(null,s__32413__$2)));
}
} else
{return null;
}
break;
}
});})(current_val,this__15009__auto____$1,map__32407,map__32407__$1,cursor))
,null,null));
});})(current_val,this__15009__auto____$1,map__32407,map__32407__$1,cursor))
;return iter__12290__auto__.call(null,self__.value_descriptions);
})()));
});})(map__32407,map__32407__$1,cursor))
;
clustermap.components.select_chooser.t32408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32407,map__32407__$1,cursor){
return (function (_32410){var self__ = this;
var _32410__$1 = this;return self__.meta32409;
});})(map__32407,map__32407__$1,cursor))
;
clustermap.components.select_chooser.t32408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32407,map__32407__$1,cursor){
return (function (_32410,meta32409__$1){var self__ = this;
var _32410__$1 = this;return (new clustermap.components.select_chooser.t32408(self__.cursor,self__.map__32407,self__.owner,self__.p__32393,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta32409__$1));
});})(map__32407,map__32407__$1,cursor))
;
clustermap.components.select_chooser.__GT_t32408 = ((function (map__32407,map__32407__$1,cursor){
return (function __GT_t32408(cursor__$1,map__32407__$2,owner__$1,p__32393__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta32409){return (new clustermap.components.select_chooser.t32408(cursor__$1,map__32407__$2,owner__$1,p__32393__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta32409));
});})(map__32407,map__32407__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t32408(cursor,map__32407__$1,owner,p__32393,value_descriptions,key,title,select_chooser_component,null));
});

//# sourceMappingURL=select_chooser.js.map