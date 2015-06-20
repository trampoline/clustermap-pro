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
var c__9125__auto___27897 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27897,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27897,rx){
return (function (state_27878){var state_val_27879 = (state_27878[(1)]);if((state_val_27879 === (8)))
{var inst_27874 = (state_27878[(2)]);var inst_27875 = cljs.core.async.close_BANG_.call(null,valch);var inst_27876 = cljs.core.async.close_BANG_.call(null,rx);var state_27878__$1 = (function (){var statearr_27880 = state_27878;(statearr_27880[(7)] = inst_27874);
(statearr_27880[(8)] = inst_27875);
return statearr_27880;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27878__$1,inst_27876);
} else
{if((state_val_27879 === (7)))
{var state_27878__$1 = state_27878;var statearr_27881_27898 = state_27878__$1;(statearr_27881_27898[(2)] = null);
(statearr_27881_27898[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27879 === (6)))
{var inst_27863 = (state_27878[(9)]);var inst_27871 = cljs.core.async.put_BANG_.call(null,rx,inst_27863);var state_27878__$1 = state_27878;var statearr_27882_27899 = state_27878__$1;(statearr_27882_27899[(2)] = inst_27871);
(statearr_27882_27899[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27879 === (5)))
{var inst_27869 = (state_27878[(2)]);var state_27878__$1 = state_27878;if(cljs.core.truth_(inst_27869))
{var statearr_27883_27900 = state_27878__$1;(statearr_27883_27900[(1)] = (6));
} else
{var statearr_27884_27901 = state_27878__$1;(statearr_27884_27901[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27879 === (4)))
{var inst_27863 = (state_27878[(9)]);var state_27878__$1 = state_27878;var statearr_27885_27902 = state_27878__$1;(statearr_27885_27902[(2)] = inst_27863);
(statearr_27885_27902[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27879 === (3)))
{var inst_27865 = cljs.core.deref.call(null,in_flight_atom);var inst_27866 = cljs.core._EQ_.call(null,inst_27865,valch);var state_27878__$1 = state_27878;var statearr_27886_27903 = state_27878__$1;(statearr_27886_27903[(2)] = inst_27866);
(statearr_27886_27903[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27879 === (2)))
{var inst_27863 = (state_27878[(9)]);var inst_27863__$1 = (state_27878[(2)]);var state_27878__$1 = (function (){var statearr_27887 = state_27878;(statearr_27887[(9)] = inst_27863__$1);
return statearr_27887;
})();if(cljs.core.truth_(inst_27863__$1))
{var statearr_27888_27904 = state_27878__$1;(statearr_27888_27904[(1)] = (3));
} else
{var statearr_27889_27905 = state_27878__$1;(statearr_27889_27905[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27879 === (1)))
{var state_27878__$1 = state_27878;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27878__$1,(2),valch);
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
});})(c__9125__auto___27897,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27897,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27893 = [null,null,null,null,null,null,null,null,null,null];(statearr_27893[(0)] = state_machine__9111__auto__);
(statearr_27893[(1)] = (1));
return statearr_27893;
});
var state_machine__9111__auto____1 = (function (state_27878){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27878);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27894){if((e27894 instanceof Object))
{var ex__9114__auto__ = e27894;var statearr_27895_27906 = state_27878;(statearr_27895_27906[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27878);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27894;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27907 = state_27878;
state_27878 = G__27907;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27878){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27897,rx))
})();var state__9127__auto__ = (function (){var statearr_27896 = f__9126__auto__.call(null);(statearr_27896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27897);
return statearr_27896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27897,rx))
);
return rx;
});
