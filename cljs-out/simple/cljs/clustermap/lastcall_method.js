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
var c__9125__auto___27828 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27828,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27828,rx){
return (function (state_27809){var state_val_27810 = (state_27809[(1)]);if((state_val_27810 === (8)))
{var inst_27805 = (state_27809[(2)]);var inst_27806 = cljs.core.async.close_BANG_.call(null,valch);var inst_27807 = cljs.core.async.close_BANG_.call(null,rx);var state_27809__$1 = (function (){var statearr_27811 = state_27809;(statearr_27811[(7)] = inst_27805);
(statearr_27811[(8)] = inst_27806);
return statearr_27811;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27809__$1,inst_27807);
} else
{if((state_val_27810 === (7)))
{var state_27809__$1 = state_27809;var statearr_27812_27829 = state_27809__$1;(statearr_27812_27829[(2)] = null);
(statearr_27812_27829[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27810 === (6)))
{var inst_27794 = (state_27809[(9)]);var inst_27802 = cljs.core.async.put_BANG_.call(null,rx,inst_27794);var state_27809__$1 = state_27809;var statearr_27813_27830 = state_27809__$1;(statearr_27813_27830[(2)] = inst_27802);
(statearr_27813_27830[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27810 === (5)))
{var inst_27800 = (state_27809[(2)]);var state_27809__$1 = state_27809;if(cljs.core.truth_(inst_27800))
{var statearr_27814_27831 = state_27809__$1;(statearr_27814_27831[(1)] = (6));
} else
{var statearr_27815_27832 = state_27809__$1;(statearr_27815_27832[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27810 === (4)))
{var inst_27794 = (state_27809[(9)]);var state_27809__$1 = state_27809;var statearr_27816_27833 = state_27809__$1;(statearr_27816_27833[(2)] = inst_27794);
(statearr_27816_27833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27810 === (3)))
{var inst_27796 = cljs.core.deref.call(null,in_flight_atom);var inst_27797 = cljs.core._EQ_.call(null,inst_27796,valch);var state_27809__$1 = state_27809;var statearr_27817_27834 = state_27809__$1;(statearr_27817_27834[(2)] = inst_27797);
(statearr_27817_27834[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27810 === (2)))
{var inst_27794 = (state_27809[(9)]);var inst_27794__$1 = (state_27809[(2)]);var state_27809__$1 = (function (){var statearr_27818 = state_27809;(statearr_27818[(9)] = inst_27794__$1);
return statearr_27818;
})();if(cljs.core.truth_(inst_27794__$1))
{var statearr_27819_27835 = state_27809__$1;(statearr_27819_27835[(1)] = (3));
} else
{var statearr_27820_27836 = state_27809__$1;(statearr_27820_27836[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27810 === (1)))
{var state_27809__$1 = state_27809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27809__$1,(2),valch);
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
});})(c__9125__auto___27828,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27828,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27824 = [null,null,null,null,null,null,null,null,null,null];(statearr_27824[(0)] = state_machine__9111__auto__);
(statearr_27824[(1)] = (1));
return statearr_27824;
});
var state_machine__9111__auto____1 = (function (state_27809){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27809);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27825){if((e27825 instanceof Object))
{var ex__9114__auto__ = e27825;var statearr_27826_27837 = state_27809;(statearr_27826_27837[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27809);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27825;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27838 = state_27809;
state_27809 = G__27838;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27809){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27828,rx))
})();var state__9127__auto__ = (function (){var statearr_27827 = f__9126__auto__.call(null);(statearr_27827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27828);
return statearr_27827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27828,rx))
);
return rx;
});
