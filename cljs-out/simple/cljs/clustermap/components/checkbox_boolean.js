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
clustermap.components.checkbox_boolean.checkbox_boolean_component = (function checkbox_boolean_component(key,p__28972){var map__28977 = p__28972;var map__28977__$1 = ((cljs.core.seq_QMARK_.call(null,map__28977))?cljs.core.apply.call(null,cljs.core.hash_map,map__28977):map__28977);var cursor = map__28977__$1;if(typeof clustermap.components.checkbox_boolean.t28978 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.checkbox_boolean.t28978 = (function (cursor,map__28977,p__28972,key,checkbox_boolean_component,meta28979){
this.cursor = cursor;
this.map__28977 = map__28977;
this.p__28972 = p__28972;
this.key = key;
this.checkbox_boolean_component = checkbox_boolean_component;
this.meta28979 = meta28979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.checkbox_boolean.t28978.cljs$lang$type = true;
clustermap.components.checkbox_boolean.t28978.cljs$lang$ctorStr = "clustermap.components.checkbox-boolean/t28978";
clustermap.components.checkbox_boolean.t28978.cljs$lang$ctorPrWriter = ((function (map__28977,map__28977__$1,cursor){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.checkbox-boolean/t28978");
});})(map__28977,map__28977__$1,cursor))
;
clustermap.components.checkbox_boolean.t28978.prototype.om$core$IRender$ = true;
clustermap.components.checkbox_boolean.t28978.prototype.om$core$IRender$render$arity$1 = ((function (map__28977,map__28977__$1,cursor){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.input.call(null,{"type": "checkbox", "name": cljs.core.gensym.call(null,"checkbox-boolean-component"), "value": "true", "checked": cljs.core.get.call(null,self__.cursor,self__.key), "onChange": ((function (this__7096__auto____$1,map__28977,map__28977__$1,cursor){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,self__.cursor,self__.key,cljs.core.boolean$.call(null,val));
});})(this__7096__auto____$1,map__28977,map__28977__$1,cursor))
});
});})(map__28977,map__28977__$1,cursor))
;
clustermap.components.checkbox_boolean.t28978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28977,map__28977__$1,cursor){
return (function (_28980){var self__ = this;
var _28980__$1 = this;return self__.meta28979;
});})(map__28977,map__28977__$1,cursor))
;
clustermap.components.checkbox_boolean.t28978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28977,map__28977__$1,cursor){
return (function (_28980,meta28979__$1){var self__ = this;
var _28980__$1 = this;return (new clustermap.components.checkbox_boolean.t28978(self__.cursor,self__.map__28977,self__.p__28972,self__.key,self__.checkbox_boolean_component,meta28979__$1));
});})(map__28977,map__28977__$1,cursor))
;
clustermap.components.checkbox_boolean.__GT_t28978 = ((function (map__28977,map__28977__$1,cursor){
return (function __GT_t28978(cursor__$1,map__28977__$2,p__28972__$1,key__$1,checkbox_boolean_component__$1,meta28979){return (new clustermap.components.checkbox_boolean.t28978(cursor__$1,map__28977__$2,p__28972__$1,key__$1,checkbox_boolean_component__$1,meta28979));
});})(map__28977,map__28977__$1,cursor))
;
}
return (new clustermap.components.checkbox_boolean.t28978(cursor,map__28977__$1,p__28972,key,checkbox_boolean_component,null));
});
