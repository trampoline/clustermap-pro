// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__31003 = window;var G__31003__$1 = (((G__31003 == null))?null:G__31003.config);var G__31003__$2 = (((G__31003__$1 == null))?null:G__31003__$1.ua);var G__31003__$3 = (((G__31003__$2 == null))?null:G__31003__$2.code);return G__31003__$3;
})();if(cljs.core.truth_((function (){var and__11502__auto__ = window.ga;if(cljs.core.truth_(and__11502__auto__))
{return ua_code;
} else
{return and__11502__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});

//# sourceMappingURL=ganalytics.js.map