// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__33367){var vec__33369 = p__33367;var irreg = cljs.core.nth.call(null,vec__33369,(0),null);if((n === (1)))
{return word;
} else
{var or__11552__auto__ = irreg;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__33367 = null;if (arguments.length > 2) {
  p__33367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__33367);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__33370){
var n = cljs.core.first(arglist__33370);
arglist__33370 = cljs.core.next(arglist__33370);
var word = cljs.core.first(arglist__33370);
var p__33367 = cljs.core.rest(arglist__33370);
return pluralize__delegate(n,word,p__33367);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;

//# sourceMappingURL=string.js.map