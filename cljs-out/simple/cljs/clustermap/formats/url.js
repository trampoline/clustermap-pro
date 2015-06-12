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
clustermap.formats.url.parse_token = (function parse_token(t){var vec__29148 = clojure.string.split.call(null,t,/\?/,(2));var path = cljs.core.nth.call(null,vec__29148,(0),null);var param_str = cljs.core.nth.call(null,vec__29148,(1),null);var param_value_strs = clojure.string.split.call(null,param_str,/&/);var param_values = cljs.core.map.call(null,((function (vec__29148,path,param_str,param_value_strs){
return (function (p1__29142_SHARP_){return clojure.string.split.call(null,p1__29142_SHARP_,/=/);
});})(vec__29148,path,param_str,param_value_strs))
,param_value_strs);var keyw_values = cljs.core.map.call(null,((function (vec__29148,path,param_str,param_value_strs,param_values){
return (function (p1__29144_SHARP_){return cljs.core.assoc.call(null,p1__29144_SHARP_,(1),(function (){var or__3639__auto__ = (function (){var G__29150 = p1__29144_SHARP_;var G__29150__$1 = (((G__29150 == null))?null:cljs.core.get.call(null,G__29150,(1)));var G__29150__$2 = (((G__29150__$1 == null))?null:decodeURIComponent(G__29150__$1));return G__29150__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return true;
}
})());
});})(vec__29148,path,param_str,param_value_strs,param_values))
,cljs.core.map.call(null,((function (vec__29148,path,param_str,param_value_strs,param_values){
return (function (p1__29143_SHARP_){return cljs.core.assoc.call(null,p1__29143_SHARP_,(0),cljs.core.keyword.call(null,cljs.core.get.call(null,p1__29143_SHARP_,(0))));
});})(vec__29148,path,param_str,param_value_strs,param_values))
,param_values));var params = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,keyw_values);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params], null);
});
/**
* encode a path and params into a token
*/
clustermap.formats.url.set_token = (function set_token(path,params){var params_str = (function (){var G__29157 = params;var G__29157__$1 = (((G__29157 == null))?null:cljs.core.filter.call(null,((function (G__29157){
return (function (p__29158){var vec__29159 = p__29158;var k = cljs.core.nth.call(null,vec__29159,(0),null);var v = cljs.core.nth.call(null,vec__29159,(1),null);return v;
});})(G__29157))
,G__29157));var G__29157__$2 = (((G__29157__$1 == null))?null:cljs.core.map.call(null,((function (G__29157,G__29157__$1){
return (function (p__29160){var vec__29161 = p__29160;var k = cljs.core.nth.call(null,vec__29161,(0),null);var v = cljs.core.nth.call(null,vec__29161,(1),null);if(cljs.core._EQ_.call(null,true,v))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),encodeURIComponent(v)], null);
}
});})(G__29157,G__29157__$1))
,G__29157__$1));var G__29157__$3 = (((G__29157__$2 == null))?null:cljs.core.map.call(null,((function (G__29157,G__29157__$1,G__29157__$2){
return (function (p1__29151_SHARP_){return clojure.string.join.call(null,"=",p1__29151_SHARP_);
});})(G__29157,G__29157__$1,G__29157__$2))
,G__29157__$2));var G__29157__$4 = (((G__29157__$3 == null))?null:clojure.string.join.call(null,"&",G__29157__$3));var G__29157__$5 = (((G__29157__$4 == null))?null:cljs.core.not_empty.call(null,G__29157__$4));return G__29157__$5;
})();return clojure.string.join.call(null,"?",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,params_str], null)));
});
/**
* remove a param from the token
*/
clustermap.formats.url.remove_param_from_token = (function remove_param_from_token(t,param){var vec__29163 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__29163,(0),null);var params = cljs.core.nth.call(null,vec__29163,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.dissoc.call(null,params,param));
});
/**
* add a param to the token
*/
clustermap.formats.url.add_param_to_token = (function add_param_to_token(t,param,value){var vec__29165 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__29165,(0),null);var params = cljs.core.nth.call(null,vec__29165,(1),null);return clustermap.formats.url.set_token.call(null,path,cljs.core.assoc.call(null,params,param,value));
});
/**
* change the token path, preserving params
*/
clustermap.formats.url.change_token_path = (function change_token_path(t,new_path){var vec__29167 = clustermap.formats.url.parse_token.call(null,t);var path = cljs.core.nth.call(null,vec__29167,(0),null);var params = cljs.core.nth.call(null,vec__29167,(1),null);return clustermap.formats.url.set_token.call(null,new_path,params);
});
