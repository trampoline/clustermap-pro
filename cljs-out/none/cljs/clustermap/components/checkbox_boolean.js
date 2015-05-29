// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.checkbox_boolean');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.checkbox_boolean.checkbox_boolean_component = (function checkbox_boolean_component(key,p__27583){var map__27588 = p__27583;var map__27588__$1 = ((cljs.core.seq_QMARK_.call(null,map__27588))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);var cursor = map__27588__$1;if(typeof clustermap.components.checkbox_boolean.t27589 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.checkbox_boolean.t27589 = (function (cursor,map__27588,p__27583,key,checkbox_boolean_component,meta27590){
this.cursor = cursor;
this.map__27588 = map__27588;
this.p__27583 = p__27583;
this.key = key;
this.checkbox_boolean_component = checkbox_boolean_component;
this.meta27590 = meta27590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.checkbox_boolean.t27589.cljs$lang$type = true;
clustermap.components.checkbox_boolean.t27589.cljs$lang$ctorStr = "clustermap.components.checkbox-boolean/t27589";
clustermap.components.checkbox_boolean.t27589.cljs$lang$ctorPrWriter = ((function (map__27588,map__27588__$1,cursor){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.checkbox-boolean/t27589");
});})(map__27588,map__27588__$1,cursor))
;
clustermap.components.checkbox_boolean.t27589.prototype.om$core$IRender$ = true;
clustermap.components.checkbox_boolean.t27589.prototype.om$core$IRender$render$arity$1 = ((function (map__27588,map__27588__$1,cursor){
return (function (this__14971__auto__){var self__ = this;
var this__14971__auto____$1 = this;return sablono.interpreter.input.call(null,{"type": "checkbox", "checked": cljs.core.get.call(null,self__.cursor,self__.key), "onChange": ((function (this__14971__auto____$1,map__27588,map__27588__$1,cursor){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__14971__auto____$1,map__27588,map__27588__$1,cursor))
});
});})(map__27588,map__27588__$1,cursor))
;
clustermap.components.checkbox_boolean.t27589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27588,map__27588__$1,cursor){
return (function (_27591){var self__ = this;
var _27591__$1 = this;return self__.meta27590;
});})(map__27588,map__27588__$1,cursor))
;
clustermap.components.checkbox_boolean.t27589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27588,map__27588__$1,cursor){
return (function (_27591,meta27590__$1){var self__ = this;
var _27591__$1 = this;return (new clustermap.components.checkbox_boolean.t27589(self__.cursor,self__.map__27588,self__.p__27583,self__.key,self__.checkbox_boolean_component,meta27590__$1));
});})(map__27588,map__27588__$1,cursor))
;
clustermap.components.checkbox_boolean.__GT_t27589 = ((function (map__27588,map__27588__$1,cursor){
return (function __GT_t27589(cursor__$1,map__27588__$2,p__27583__$1,key__$1,checkbox_boolean_component__$1,meta27590){return (new clustermap.components.checkbox_boolean.t27589(cursor__$1,map__27588__$2,p__27583__$1,key__$1,checkbox_boolean_component__$1,meta27590));
});})(map__27588,map__27588__$1,cursor))
;
}
return (new clustermap.components.checkbox_boolean.t27589(cursor,map__27588__$1,p__27583,key,checkbox_boolean_component,null));
});

//# sourceMappingURL=checkbox_boolean.js.map