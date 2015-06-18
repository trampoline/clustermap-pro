// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__29874){var vec__29876 = p__29874;var irreg = cljs.core.nth.call(null,vec__29876,(0),null);if((n === (1)))
{return word;
} else
{var or__3639__auto__ = irreg;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__29874 = null;if (arguments.length > 2) {
  p__29874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__29874);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__29877){
var n = cljs.core.first(arglist__29877);
arglist__29877 = cljs.core.next(arglist__29877);
var word = cljs.core.first(arglist__29877);
var p__29874 = cljs.core.rest(arglist__29877);
return pluralize__delegate(n,word,p__29874);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
