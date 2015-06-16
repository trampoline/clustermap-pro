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
var c__9125__auto___27881 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27881,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27881,rx){
return (function (state_27862){var state_val_27863 = (state_27862[(1)]);if((state_val_27863 === (8)))
{var inst_27858 = (state_27862[(2)]);var inst_27859 = cljs.core.async.close_BANG_.call(null,valch);var inst_27860 = cljs.core.async.close_BANG_.call(null,rx);var state_27862__$1 = (function (){var statearr_27864 = state_27862;(statearr_27864[(7)] = inst_27858);
(statearr_27864[(8)] = inst_27859);
return statearr_27864;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27862__$1,inst_27860);
} else
{if((state_val_27863 === (7)))
{var state_27862__$1 = state_27862;var statearr_27865_27882 = state_27862__$1;(statearr_27865_27882[(2)] = null);
(statearr_27865_27882[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27863 === (6)))
{var inst_27847 = (state_27862[(9)]);var inst_27855 = cljs.core.async.put_BANG_.call(null,rx,inst_27847);var state_27862__$1 = state_27862;var statearr_27866_27883 = state_27862__$1;(statearr_27866_27883[(2)] = inst_27855);
(statearr_27866_27883[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27863 === (5)))
{var inst_27853 = (state_27862[(2)]);var state_27862__$1 = state_27862;if(cljs.core.truth_(inst_27853))
{var statearr_27867_27884 = state_27862__$1;(statearr_27867_27884[(1)] = (6));
} else
{var statearr_27868_27885 = state_27862__$1;(statearr_27868_27885[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27863 === (4)))
{var inst_27847 = (state_27862[(9)]);var state_27862__$1 = state_27862;var statearr_27869_27886 = state_27862__$1;(statearr_27869_27886[(2)] = inst_27847);
(statearr_27869_27886[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27863 === (3)))
{var inst_27849 = cljs.core.deref.call(null,in_flight_atom);var inst_27850 = cljs.core._EQ_.call(null,inst_27849,valch);var state_27862__$1 = state_27862;var statearr_27870_27887 = state_27862__$1;(statearr_27870_27887[(2)] = inst_27850);
(statearr_27870_27887[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27863 === (2)))
{var inst_27847 = (state_27862[(9)]);var inst_27847__$1 = (state_27862[(2)]);var state_27862__$1 = (function (){var statearr_27871 = state_27862;(statearr_27871[(9)] = inst_27847__$1);
return statearr_27871;
})();if(cljs.core.truth_(inst_27847__$1))
{var statearr_27872_27888 = state_27862__$1;(statearr_27872_27888[(1)] = (3));
} else
{var statearr_27873_27889 = state_27862__$1;(statearr_27873_27889[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27863 === (1)))
{var state_27862__$1 = state_27862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27862__$1,(2),valch);
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
});})(c__9125__auto___27881,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27881,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27877 = [null,null,null,null,null,null,null,null,null,null];(statearr_27877[(0)] = state_machine__9111__auto__);
(statearr_27877[(1)] = (1));
return statearr_27877;
});
var state_machine__9111__auto____1 = (function (state_27862){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27862);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27878){if((e27878 instanceof Object))
{var ex__9114__auto__ = e27878;var statearr_27879_27890 = state_27862;(statearr_27879_27890[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27878;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27891 = state_27862;
state_27862 = G__27891;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27862){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27881,rx))
})();var state__9127__auto__ = (function (){var statearr_27880 = f__9126__auto__.call(null);(statearr_27880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27881);
return statearr_27880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27881,rx))
);
return rx;
});
