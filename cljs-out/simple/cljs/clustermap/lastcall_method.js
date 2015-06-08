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
var c__9125__auto___27877 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27877,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27877,rx){
return (function (state_27858){var state_val_27859 = (state_27858[(1)]);if((state_val_27859 === (8)))
{var inst_27854 = (state_27858[(2)]);var inst_27855 = cljs.core.async.close_BANG_.call(null,valch);var inst_27856 = cljs.core.async.close_BANG_.call(null,rx);var state_27858__$1 = (function (){var statearr_27860 = state_27858;(statearr_27860[(7)] = inst_27854);
(statearr_27860[(8)] = inst_27855);
return statearr_27860;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27858__$1,inst_27856);
} else
{if((state_val_27859 === (7)))
{var state_27858__$1 = state_27858;var statearr_27861_27878 = state_27858__$1;(statearr_27861_27878[(2)] = null);
(statearr_27861_27878[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27859 === (6)))
{var inst_27843 = (state_27858[(9)]);var inst_27851 = cljs.core.async.put_BANG_.call(null,rx,inst_27843);var state_27858__$1 = state_27858;var statearr_27862_27879 = state_27858__$1;(statearr_27862_27879[(2)] = inst_27851);
(statearr_27862_27879[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27859 === (5)))
{var inst_27849 = (state_27858[(2)]);var state_27858__$1 = state_27858;if(cljs.core.truth_(inst_27849))
{var statearr_27863_27880 = state_27858__$1;(statearr_27863_27880[(1)] = (6));
} else
{var statearr_27864_27881 = state_27858__$1;(statearr_27864_27881[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27859 === (4)))
{var inst_27843 = (state_27858[(9)]);var state_27858__$1 = state_27858;var statearr_27865_27882 = state_27858__$1;(statearr_27865_27882[(2)] = inst_27843);
(statearr_27865_27882[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27859 === (3)))
{var inst_27845 = cljs.core.deref.call(null,in_flight_atom);var inst_27846 = cljs.core._EQ_.call(null,inst_27845,valch);var state_27858__$1 = state_27858;var statearr_27866_27883 = state_27858__$1;(statearr_27866_27883[(2)] = inst_27846);
(statearr_27866_27883[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27859 === (2)))
{var inst_27843 = (state_27858[(9)]);var inst_27843__$1 = (state_27858[(2)]);var state_27858__$1 = (function (){var statearr_27867 = state_27858;(statearr_27867[(9)] = inst_27843__$1);
return statearr_27867;
})();if(cljs.core.truth_(inst_27843__$1))
{var statearr_27868_27884 = state_27858__$1;(statearr_27868_27884[(1)] = (3));
} else
{var statearr_27869_27885 = state_27858__$1;(statearr_27869_27885[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27859 === (1)))
{var state_27858__$1 = state_27858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27858__$1,(2),valch);
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
});})(c__9125__auto___27877,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27877,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27873 = [null,null,null,null,null,null,null,null,null,null];(statearr_27873[(0)] = state_machine__9111__auto__);
(statearr_27873[(1)] = (1));
return statearr_27873;
});
var state_machine__9111__auto____1 = (function (state_27858){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27858);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27874){if((e27874 instanceof Object))
{var ex__9114__auto__ = e27874;var statearr_27875_27886 = state_27858;(statearr_27875_27886[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27874;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27887 = state_27858;
state_27858 = G__27887;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27858){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27877,rx))
})();var state__9127__auto__ = (function (){var statearr_27876 = f__9126__auto__.call(null);(statearr_27876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27877);
return statearr_27876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27877,rx))
);
return rx;
});
