// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.url');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* parse a token into [path params] where
* - path : a path of the form /a/b/c
* - params : a map of params
*/
clustermap.formats.url.parse_token = (function parse_token(t){var vec__33381 = clojure.string.split.call(null,t,/\?/,(2));var path = cljs.core.nth.call(null,vec__33381,(0),null);var param_str = cljs.core.nth.call(null,vec__33381,(1),null);var param_value_strs = clojure.string.split.call(null,param_str,/&/);var param_values = cljs.core.map.call(null,((function (vec__33381,path,param_str,param_value_strs){
return (function (p1__33375_SHARP_){return clojure.string.split.call(null,p1__33375_SHARP_,/=/);
});})(vec__33381,path,param_str,param_value_strs))
,param_value_strs);var keyw_values = cljs.core.map.call(null,((function (vec__33381,path,param_str,param_value_strs,param_values){
return (function (p1__33377_SHARP_){return cljs.core.assoc.call(null,p1__33377_SHARP_,(1),(function (){var or__11552__auto__ = (function (){var G__33383 = p1__33377_SHARP_;var G__33383__$1 = (((G__33383 == null))?null:cljs.core.get.call(null,G__33383,(1)));var G__33383__$2 = (((G__33383__$1 == null))?null:decodeURIComponent(G__33383__$1));return G__33383__$2;
})();if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return true;
}
})());
});})(vec__33381,path,param_str,param_value_strs,param_values))
,cljs.core.map.call(null,((function (vec__33381,path,param_str,param_value_strs,param_values){
return (function (p1__33376_SHARP_){return cljs.core.assoc.call(null,p1__33376_SHARP_,(0),cljs.core.keyword.call(null,cljs.core.get.call(null,p1__33376_SHARP_,(0))));
});})(vec__33381,path,param_str,param_value_strs,param_values))
,param_values));var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,keyw_values);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params], null);
});
/**
* encode a path and params into a token
*/
clustermap.formats.url.set_token = (function set_token(path,params){var params_str = (function (){var G__33390 = params;var G__33390__$1 = (((G__33390 == null))?null:cljs.core.filter.call(null,((function (G__33390){
return (function (p__33391){var vec__33392 = p__33391;var k = cljs.core.nth.call(null,vec__33392,(0),null);var v = cljs.core.nth.call(null,vec__33392,(1),null);return v;
});})(G__33390))
,G__33390));var G__33390__$2 = (((G__33390__$1 == null))?null:cljs.core.map.call(null,((function (G__33390,G__33390__$1){
return (function (p__33393){var vec__33394 = p__33393;var k = cljs.core.nth.call(null,vec__33394,(0),null);var v = cljs.core.nth.call(null,vec__33394,(1),null);if(cljs.core._EQ_.call(null,true,v))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),encodeURIComponent(v)], null);
}
});})(G__33390,G__33390__$1))
,G__33390__$1));var G__33390__$3 = (((G__33390__$2 == null))?null:cljs.core.map.call(null,((function (G__33390,G__33390__$1,G__33390__$2){
return (function (p1__33384_SHARP_){return clojure.string.join.call(null,"=",p1__33384_SHARP_);
});})(G__33390,G__33390__$1,G__33390__$2))
,G__33390__$2));var G__33390__$4 = (((G__33390__$3 == null))?null:clojure.string.join.call(null,"&",G__33390__$3));var G__33390__$5 = (((G__33390__$4 == null))?null:cljs.core.not_empty.call(null,G__33390__$4));return G__33390__$5;
})();return clojure.string.join.call(null,"?",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params_str], null)));
});
/**
* remove a param from the token
*/
clustermap.formats.url.remove_param_from_token = (function remove_param_from_token(t,param){var vec__33396 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__33396,(0),null);var params = cljs.core.nth.call(null,vec__33396,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.dissoc.call(null,params,param));
});
/**
* add a param to the token
*/
clustermap.formats.url.add_param_to_token = (function add_param_to_token(t,param,value){var vec__33398 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__33398,(0),null);var params = cljs.core.nth.call(null,vec__33398,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.assoc.call(null,params,param,value));
});
/**
* change the token path, preserving params
*/
clustermap.formats.url.change_token_path = (function change_token_path(t,new_path){var vec__33400 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__33400,(0),null);var params = cljs.core.nth.call(null,vec__33400,(1),null);return clustermap.formats.url.set_token.call(null,new_path,params);
});

//# sourceMappingURL=url.js.map