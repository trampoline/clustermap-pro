// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.checkbox_boolean');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.checkbox_boolean.checkbox_boolean_component = (function checkbox_boolean_component(key,p__28478){var map__28483 = p__28478;var map__28483__$1 = ((cljs.core.seq_QMARK_.call(null,map__28483))?cljs.core.apply.call(null,cljs.core.hash_map,map__28483):map__28483);var cursor = map__28483__$1;if(typeof clustermap.components.checkbox_boolean.t28484 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.checkbox_boolean.t28484 = (function (cursor,map__28483,p__28478,key,checkbox_boolean_component,meta28485){
this.cursor = cursor;
this.map__28483 = map__28483;
this.p__28478 = p__28478;
this.key = key;
this.checkbox_boolean_component = checkbox_boolean_component;
this.meta28485 = meta28485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.checkbox_boolean.t28484.cljs$lang$type = true;
clustermap.components.checkbox_boolean.t28484.cljs$lang$ctorStr = "clustermap.components.checkbox-boolean/t28484";
clustermap.components.checkbox_boolean.t28484.cljs$lang$ctorPrWriter = ((function (map__28483,map__28483__$1,cursor){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.checkbox-boolean/t28484");
});})(map__28483,map__28483__$1,cursor))
;
clustermap.components.checkbox_boolean.t28484.prototype.om$core$IRender$ = true;
clustermap.components.checkbox_boolean.t28484.prototype.om$core$IRender$render$arity$1 = ((function (map__28483,map__28483__$1,cursor){
return (function (this__15009__auto__){var self__ = this;
var this__15009__auto____$1 = this;return sablono.interpreter.input.call(null,{"type": "checkbox", "name": cljs.core.gensym.call(null,"checkbox-boolean-component"), "value": "true", "checked": cljs.core.get.call(null,self__.cursor,self__.key), "onChange": ((function (this__15009__auto____$1,map__28483,map__28483__$1,cursor){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,self__.cursor,self__.key,cljs.core.boolean$.call(null,val));
});})(this__15009__auto____$1,map__28483,map__28483__$1,cursor))
});
});})(map__28483,map__28483__$1,cursor))
;
clustermap.components.checkbox_boolean.t28484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28483,map__28483__$1,cursor){
return (function (_28486){var self__ = this;
var _28486__$1 = this;return self__.meta28485;
});})(map__28483,map__28483__$1,cursor))
;
clustermap.components.checkbox_boolean.t28484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28483,map__28483__$1,cursor){
return (function (_28486,meta28485__$1){var self__ = this;
var _28486__$1 = this;return (new clustermap.components.checkbox_boolean.t28484(self__.cursor,self__.map__28483,self__.p__28478,self__.key,self__.checkbox_boolean_component,meta28485__$1));
});})(map__28483,map__28483__$1,cursor))
;
clustermap.components.checkbox_boolean.__GT_t28484 = ((function (map__28483,map__28483__$1,cursor){
return (function __GT_t28484(cursor__$1,map__28483__$2,p__28478__$1,key__$1,checkbox_boolean_component__$1,meta28485){return (new clustermap.components.checkbox_boolean.t28484(cursor__$1,map__28483__$2,p__28478__$1,key__$1,checkbox_boolean_component__$1,meta28485));
});})(map__28483,map__28483__$1,cursor))
;
}
return (new clustermap.components.checkbox_boolean.t28484(cursor,map__28483__$1,p__28478,key,checkbox_boolean_component,null));
});

//# sourceMappingURL=checkbox_boolean.js.map