// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__28474){var vec__28476 = p__28474;var irreg = cljs.core.nth.call(null,vec__28476,(0),null);if((n === (1)))
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
var p__28474 = null;if (arguments.length > 2) {
  p__28474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__28474);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__28477){
var n = cljs.core.first(arglist__28477);
arglist__28477 = cljs.core.next(arglist__28477);
var word = cljs.core.first(arglist__28477);
var p__28474 = cljs.core.rest(arglist__28477);
return pluralize__delegate(n,word,p__28474);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
