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
clustermap.components.checkbox_boolean.checkbox_boolean_component = (function checkbox_boolean_component(key,p__28932){var map__28937 = p__28932;var map__28937__$1 = ((cljs.core.seq_QMARK_.call(null,map__28937))?cljs.core.apply.call(null,cljs.core.hash_map,map__28937):map__28937);var cursor = map__28937__$1;if(typeof clustermap.components.checkbox_boolean.t28938 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.checkbox_boolean.t28938 = (function (cursor,map__28937,p__28932,key,checkbox_boolean_component,meta28939){
this.cursor = cursor;
this.map__28937 = map__28937;
this.p__28932 = p__28932;
this.key = key;
this.checkbox_boolean_component = checkbox_boolean_component;
this.meta28939 = meta28939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.checkbox_boolean.t28938.cljs$lang$type = true;
clustermap.components.checkbox_boolean.t28938.cljs$lang$ctorStr = "clustermap.components.checkbox-boolean/t28938";
clustermap.components.checkbox_boolean.t28938.cljs$lang$ctorPrWriter = ((function (map__28937,map__28937__$1,cursor){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.checkbox-boolean/t28938");
});})(map__28937,map__28937__$1,cursor))
;
clustermap.components.checkbox_boolean.t28938.prototype.om$core$IRender$ = true;
clustermap.components.checkbox_boolean.t28938.prototype.om$core$IRender$render$arity$1 = ((function (map__28937,map__28937__$1,cursor){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.input.call(null,{"type": "checkbox", "name": cljs.core.gensym.call(null,"checkbox-boolean-component"), "value": "true", "checked": cljs.core.get.call(null,self__.cursor,self__.key), "onChange": ((function (this__7096__auto____$1,map__28937,map__28937__$1,cursor){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,self__.cursor,self__.key,cljs.core.boolean$.call(null,val));
});})(this__7096__auto____$1,map__28937,map__28937__$1,cursor))
});
});})(map__28937,map__28937__$1,cursor))
;
clustermap.components.checkbox_boolean.t28938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28937,map__28937__$1,cursor){
return (function (_28940){var self__ = this;
var _28940__$1 = this;return self__.meta28939;
});})(map__28937,map__28937__$1,cursor))
;
clustermap.components.checkbox_boolean.t28938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28937,map__28937__$1,cursor){
return (function (_28940,meta28939__$1){var self__ = this;
var _28940__$1 = this;return (new clustermap.components.checkbox_boolean.t28938(self__.cursor,self__.map__28937,self__.p__28932,self__.key,self__.checkbox_boolean_component,meta28939__$1));
});})(map__28937,map__28937__$1,cursor))
;
clustermap.components.checkbox_boolean.__GT_t28938 = ((function (map__28937,map__28937__$1,cursor){
return (function __GT_t28938(cursor__$1,map__28937__$2,p__28932__$1,key__$1,checkbox_boolean_component__$1,meta28939){return (new clustermap.components.checkbox_boolean.t28938(cursor__$1,map__28937__$2,p__28932__$1,key__$1,checkbox_boolean_component__$1,meta28939));
});})(map__28937,map__28937__$1,cursor))
;
}
return (new clustermap.components.checkbox_boolean.t28938(cursor,map__28937__$1,p__28932,key,checkbox_boolean_component,null));
});
