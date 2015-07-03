// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.money');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
clustermap.formats.money.money_suffixes = new cljs.core.PersistentArrayMap(null, 5, [(0),"",(3),"k",(6),"m",(9),"bn",(12),"tn"], null);
/**
* take an exponent and return a suffix
*/
clustermap.formats.money.money_suffix = (function money_suffix(exp){var or__3639__auto__ = clustermap.formats.money.money_suffixes.call(null,exp);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return ("x10^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp));
}
});
/**
* format human readable money amount
* :sf - number of significant figures
* :curr - currency symbol
* :plus? - use a plus prefix for +ve amounts
* :default - default result when (nil? n)
* @param {...*} var_args
*/
clustermap.formats.money.readable = (function() { 
var readable__delegate = function (n,p__27805){var map__27808 = p__27805;var map__27808__$1 = ((cljs.core.seq_QMARK_.call(null,map__27808))?cljs.core.apply.call(null,cljs.core.hash_map,map__27808):map__27808);var default$ = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"default","default",-1987822328));var plus_QMARK_ = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"plus?","plus?",-3051327));var curr = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3");var sf = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"sf","sf",-1949491738));if((typeof n === 'number') && (cljs.core.not.call(null,isNaN(n))))
{var vec__27809 = clustermap.formats.number.eng_notation.call(null,n,new cljs.core.Keyword(null,"sf","sf",-1949491738),sf);var sig = cljs.core.nth.call(null,vec__27809,(0),null);var exp = cljs.core.nth.call(null,vec__27809,(1),null);var abs_sig = Math.abs(sig);var suffix = clustermap.formats.money.money_suffix.call(null,exp);if((exp >= (0)))
{return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3627__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3627__auto__))
{return (sig > (0));
} else
{return and__3627__auto__;
}
})())?"+":(((sig < (0)))?"-":null)),curr,abs_sig,suffix], null)));
} else
{return (0);
}
} else
{return default$;
}
};
var readable = function (n,var_args){
var p__27805 = null;if (arguments.length > 1) {
  p__27805 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__27805);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__27810){
var n = cljs.core.first(arglist__27810);
var p__27805 = cljs.core.rest(arglist__27810);
return readable__delegate(n,p__27805);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;
clustermap.formats.money.fmoney = clustermap.formats.money.readable;
