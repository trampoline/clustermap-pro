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
var c__9125__auto___27909 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27909,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27909,rx){
return (function (state_27890){var state_val_27891 = (state_27890[(1)]);if((state_val_27891 === (8)))
{var inst_27886 = (state_27890[(2)]);var inst_27887 = cljs.core.async.close_BANG_.call(null,valch);var inst_27888 = cljs.core.async.close_BANG_.call(null,rx);var state_27890__$1 = (function (){var statearr_27892 = state_27890;(statearr_27892[(7)] = inst_27886);
(statearr_27892[(8)] = inst_27887);
return statearr_27892;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27890__$1,inst_27888);
} else
{if((state_val_27891 === (7)))
{var state_27890__$1 = state_27890;var statearr_27893_27910 = state_27890__$1;(statearr_27893_27910[(2)] = null);
(statearr_27893_27910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27891 === (6)))
{var inst_27875 = (state_27890[(9)]);var inst_27883 = cljs.core.async.put_BANG_.call(null,rx,inst_27875);var state_27890__$1 = state_27890;var statearr_27894_27911 = state_27890__$1;(statearr_27894_27911[(2)] = inst_27883);
(statearr_27894_27911[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27891 === (5)))
{var inst_27881 = (state_27890[(2)]);var state_27890__$1 = state_27890;if(cljs.core.truth_(inst_27881))
{var statearr_27895_27912 = state_27890__$1;(statearr_27895_27912[(1)] = (6));
} else
{var statearr_27896_27913 = state_27890__$1;(statearr_27896_27913[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27891 === (4)))
{var inst_27875 = (state_27890[(9)]);var state_27890__$1 = state_27890;var statearr_27897_27914 = state_27890__$1;(statearr_27897_27914[(2)] = inst_27875);
(statearr_27897_27914[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27891 === (3)))
{var inst_27877 = cljs.core.deref.call(null,in_flight_atom);var inst_27878 = cljs.core._EQ_.call(null,inst_27877,valch);var state_27890__$1 = state_27890;var statearr_27898_27915 = state_27890__$1;(statearr_27898_27915[(2)] = inst_27878);
(statearr_27898_27915[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27891 === (2)))
{var inst_27875 = (state_27890[(9)]);var inst_27875__$1 = (state_27890[(2)]);var state_27890__$1 = (function (){var statearr_27899 = state_27890;(statearr_27899[(9)] = inst_27875__$1);
return statearr_27899;
})();if(cljs.core.truth_(inst_27875__$1))
{var statearr_27900_27916 = state_27890__$1;(statearr_27900_27916[(1)] = (3));
} else
{var statearr_27901_27917 = state_27890__$1;(statearr_27901_27917[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27891 === (1)))
{var state_27890__$1 = state_27890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27890__$1,(2),valch);
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
});})(c__9125__auto___27909,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27909,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27905 = [null,null,null,null,null,null,null,null,null,null];(statearr_27905[(0)] = state_machine__9111__auto__);
(statearr_27905[(1)] = (1));
return statearr_27905;
});
var state_machine__9111__auto____1 = (function (state_27890){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27890);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27906){if((e27906 instanceof Object))
{var ex__9114__auto__ = e27906;var statearr_27907_27918 = state_27890;(statearr_27907_27918[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27906;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27919 = state_27890;
state_27890 = G__27919;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27890){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27909,rx))
})();var state__9127__auto__ = (function (){var statearr_27908 = f__9126__auto__.call(null);(statearr_27908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27909);
return statearr_27908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27909,rx))
);
return rx;
});
