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
clustermap.formats.url.parse_token = (function parse_token(t){var vec__28178 = clojure.string.split.call(null,t,/\?/,(2));var path = cljs.core.nth.call(null,vec__28178,(0),null);var param_str = cljs.core.nth.call(null,vec__28178,(1),null);var param_value_strs = clojure.string.split.call(null,param_str,/&/);var param_values = cljs.core.map.call(null,((function (vec__28178,path,param_str,param_value_strs){
return (function (p1__28172_SHARP_){return clojure.string.split.call(null,p1__28172_SHARP_,/=/);
});})(vec__28178,path,param_str,param_value_strs))
,param_value_strs);var keyw_values = cljs.core.map.call(null,((function (vec__28178,path,param_str,param_value_strs,param_values){
return (function (p1__28174_SHARP_){return cljs.core.assoc.call(null,p1__28174_SHARP_,(1),(function (){var or__3639__auto__ = (function (){var G__28180 = p1__28174_SHARP_;var G__28180__$1 = (((G__28180 == null))?null:cljs.core.get.call(null,G__28180,(1)));var G__28180__$2 = (((G__28180__$1 == null))?null:decodeURIComponent(G__28180__$1));return G__28180__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return true;
}
})());
});})(vec__28178,path,param_str,param_value_strs,param_values))
,cljs.core.map.call(null,((function (vec__28178,path,param_str,param_value_strs,param_values){
return (function (p1__28173_SHARP_){return cljs.core.assoc.call(null,p1__28173_SHARP_,(0),cljs.core.keyword.call(null,cljs.core.get.call(null,p1__28173_SHARP_,(0))));
});})(vec__28178,path,param_str,param_value_strs,param_values))
,param_values));var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,keyw_values);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params], null);
});
/**
* encode a path and params into a token
*/
clustermap.formats.url.set_token = (function set_token(path,params){var params_str = (function (){var G__28187 = params;var G__28187__$1 = (((G__28187 == null))?null:cljs.core.filter.call(null,((function (G__28187){
return (function (p__28188){var vec__28189 = p__28188;var k = cljs.core.nth.call(null,vec__28189,(0),null);var v = cljs.core.nth.call(null,vec__28189,(1),null);return v;
});})(G__28187))
,G__28187));var G__28187__$2 = (((G__28187__$1 == null))?null:cljs.core.map.call(null,((function (G__28187,G__28187__$1){
return (function (p__28190){var vec__28191 = p__28190;var k = cljs.core.nth.call(null,vec__28191,(0),null);var v = cljs.core.nth.call(null,vec__28191,(1),null);if(cljs.core._EQ_.call(null,true,v))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),encodeURIComponent(v)], null);
}
});})(G__28187,G__28187__$1))
,G__28187__$1));var G__28187__$3 = (((G__28187__$2 == null))?null:cljs.core.map.call(null,((function (G__28187,G__28187__$1,G__28187__$2){
return (function (p1__28181_SHARP_){return clojure.string.join.call(null,"=",p1__28181_SHARP_);
});})(G__28187,G__28187__$1,G__28187__$2))
,G__28187__$2));var G__28187__$4 = (((G__28187__$3 == null))?null:clojure.string.join.call(null,"&",G__28187__$3));var G__28187__$5 = (((G__28187__$4 == null))?null:cljs.core.not_empty.call(null,G__28187__$4));return G__28187__$5;
})();return clojure.string.join.call(null,"?",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params_str], null)));
});
/**
* remove a param from the token
*/
clustermap.formats.url.remove_param_from_token = (function remove_param_from_token(t,param){var vec__28193 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__28193,(0),null);var params = cljs.core.nth.call(null,vec__28193,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.dissoc.call(null,params,param));
});
/**
* add a param to the token
*/
clustermap.formats.url.add_param_to_token = (function add_param_to_token(t,param,value){var vec__28195 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__28195,(0),null);var params = cljs.core.nth.call(null,vec__28195,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.assoc.call(null,params,param,value));
});
/**
* change the token path, preserving params
*/
clustermap.formats.url.change_token_path = (function change_token_path(t,new_path){var vec__28197 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__28197,(0),null);var params = cljs.core.nth.call(null,vec__28197,(1),null);return clustermap.formats.url.set_token.call(null,new_path,params);
});
