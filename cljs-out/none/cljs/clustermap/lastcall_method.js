// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.lastcall_method');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* implements last-call-wins aync api-call semantics, discarding results from
* any earlier api calls
* - in-flight-atom : an atom used to match received results to calls
* - valch : a single-value channel eventually containing one api-call result
*/
clustermap.lastcall_method.lastcall_method_impl = (function lastcall_method_impl(in_flight_atom,valch){var rx = cljs.core.async.chan.call(null);cljs.core.reset_BANG_.call(null,in_flight_atom,valch);
var c__16733__auto___33473 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto___33473,rx){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto___33473,rx){
return (function (state_33454){var state_val_33455 = (state_33454[(1)]);if((state_val_33455 === (8)))
{var inst_33450 = (state_33454[(2)]);var inst_33451 = cljs.core.async.close_BANG_.call(null,valch);var inst_33452 = cljs.core.async.close_BANG_.call(null,rx);var state_33454__$1 = (function (){var statearr_33456 = state_33454;(statearr_33456[(7)] = inst_33451);
(statearr_33456[(8)] = inst_33450);
return statearr_33456;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33454__$1,inst_33452);
} else
{if((state_val_33455 === (7)))
{var state_33454__$1 = state_33454;var statearr_33457_33474 = state_33454__$1;(statearr_33457_33474[(2)] = null);
(statearr_33457_33474[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33455 === (6)))
{var inst_33439 = (state_33454[(9)]);var inst_33447 = cljs.core.async.put_BANG_.call(null,rx,inst_33439);var state_33454__$1 = state_33454;var statearr_33458_33475 = state_33454__$1;(statearr_33458_33475[(2)] = inst_33447);
(statearr_33458_33475[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33455 === (5)))
{var inst_33445 = (state_33454[(2)]);var state_33454__$1 = state_33454;if(cljs.core.truth_(inst_33445))
{var statearr_33459_33476 = state_33454__$1;(statearr_33459_33476[(1)] = (6));
} else
{var statearr_33460_33477 = state_33454__$1;(statearr_33460_33477[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33455 === (4)))
{var inst_33439 = (state_33454[(9)]);var state_33454__$1 = state_33454;var statearr_33461_33478 = state_33454__$1;(statearr_33461_33478[(2)] = inst_33439);
(statearr_33461_33478[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33455 === (3)))
{var inst_33441 = cljs.core.deref.call(null,in_flight_atom);var inst_33442 = cljs.core._EQ_.call(null,inst_33441,valch);var state_33454__$1 = state_33454;var statearr_33462_33479 = state_33454__$1;(statearr_33462_33479[(2)] = inst_33442);
(statearr_33462_33479[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33455 === (2)))
{var inst_33439 = (state_33454[(9)]);var inst_33439__$1 = (state_33454[(2)]);var state_33454__$1 = (function (){var statearr_33463 = state_33454;(statearr_33463[(9)] = inst_33439__$1);
return statearr_33463;
})();if(cljs.core.truth_(inst_33439__$1))
{var statearr_33464_33480 = state_33454__$1;(statearr_33464_33480[(1)] = (3));
} else
{var statearr_33465_33481 = state_33454__$1;(statearr_33465_33481[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33455 === (1)))
{var state_33454__$1 = state_33454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33454__$1,(2),valch);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__16733__auto___33473,rx))
;return ((function (switch__16718__auto__,c__16733__auto___33473,rx){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_33469 = [null,null,null,null,null,null,null,null,null,null];(statearr_33469[(0)] = state_machine__16719__auto__);
(statearr_33469[(1)] = (1));
return statearr_33469;
});
var state_machine__16719__auto____1 = (function (state_33454){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_33454);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e33470){if((e33470 instanceof Object))
{var ex__16722__auto__ = e33470;var statearr_33471_33482 = state_33454;(statearr_33471_33482[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33470;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33483 = state_33454;
state_33454 = G__33483;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_33454){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_33454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto___33473,rx))
})();var state__16735__auto__ = (function (){var statearr_33472 = f__16734__auto__.call(null);(statearr_33472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto___33473);
return statearr_33472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto___33473,rx))
);
return rx;
});

//# sourceMappingURL=lastcall_method.js.map