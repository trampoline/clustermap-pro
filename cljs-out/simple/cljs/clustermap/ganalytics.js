// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__28413 = window;var G__28413__$1 = (((G__28413 == null))?null:G__28413.config);var G__28413__$2 = (((G__28413__$1 == null))?null:G__28413__$1.ua);var G__28413__$3 = (((G__28413__$2 == null))?null:G__28413__$2.code);return G__28413__$3;
})();if(cljs.core.truth_((function (){var and__3627__auto__ = window.ga;if(cljs.core.truth_(and__3627__auto__))
{return ua_code;
} else
{return and__3627__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});
