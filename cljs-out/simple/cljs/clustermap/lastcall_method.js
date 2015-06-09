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
var c__9125__auto___27646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27646,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27646,rx){
return (function (state_27627){var state_val_27628 = (state_27627[(1)]);if((state_val_27628 === (8)))
{var inst_27623 = (state_27627[(2)]);var inst_27624 = cljs.core.async.close_BANG_.call(null,valch);var inst_27625 = cljs.core.async.close_BANG_.call(null,rx);var state_27627__$1 = (function (){var statearr_27629 = state_27627;(statearr_27629[(7)] = inst_27624);
(statearr_27629[(8)] = inst_27623);
return statearr_27629;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27627__$1,inst_27625);
} else
{if((state_val_27628 === (7)))
{var state_27627__$1 = state_27627;var statearr_27630_27647 = state_27627__$1;(statearr_27630_27647[(2)] = null);
(statearr_27630_27647[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27628 === (6)))
{var inst_27612 = (state_27627[(9)]);var inst_27620 = cljs.core.async.put_BANG_.call(null,rx,inst_27612);var state_27627__$1 = state_27627;var statearr_27631_27648 = state_27627__$1;(statearr_27631_27648[(2)] = inst_27620);
(statearr_27631_27648[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27628 === (5)))
{var inst_27618 = (state_27627[(2)]);var state_27627__$1 = state_27627;if(cljs.core.truth_(inst_27618))
{var statearr_27632_27649 = state_27627__$1;(statearr_27632_27649[(1)] = (6));
} else
{var statearr_27633_27650 = state_27627__$1;(statearr_27633_27650[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27628 === (4)))
{var inst_27612 = (state_27627[(9)]);var state_27627__$1 = state_27627;var statearr_27634_27651 = state_27627__$1;(statearr_27634_27651[(2)] = inst_27612);
(statearr_27634_27651[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27628 === (3)))
{var inst_27614 = cljs.core.deref.call(null,in_flight_atom);var inst_27615 = cljs.core._EQ_.call(null,inst_27614,valch);var state_27627__$1 = state_27627;var statearr_27635_27652 = state_27627__$1;(statearr_27635_27652[(2)] = inst_27615);
(statearr_27635_27652[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27628 === (2)))
{var inst_27612 = (state_27627[(9)]);var inst_27612__$1 = (state_27627[(2)]);var state_27627__$1 = (function (){var statearr_27636 = state_27627;(statearr_27636[(9)] = inst_27612__$1);
return statearr_27636;
})();if(cljs.core.truth_(inst_27612__$1))
{var statearr_27637_27653 = state_27627__$1;(statearr_27637_27653[(1)] = (3));
} else
{var statearr_27638_27654 = state_27627__$1;(statearr_27638_27654[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27628 === (1)))
{var state_27627__$1 = state_27627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(2),valch);
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
});})(c__9125__auto___27646,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27646,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27642 = [null,null,null,null,null,null,null,null,null,null];(statearr_27642[(0)] = state_machine__9111__auto__);
(statearr_27642[(1)] = (1));
return statearr_27642;
});
var state_machine__9111__auto____1 = (function (state_27627){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27627);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27643){if((e27643 instanceof Object))
{var ex__9114__auto__ = e27643;var statearr_27644_27655 = state_27627;(statearr_27644_27655[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27627);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27643;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27656 = state_27627;
state_27627 = G__27656;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27627){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27646,rx))
})();var state__9127__auto__ = (function (){var statearr_27645 = f__9126__auto__.call(null);(statearr_27645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27646);
return statearr_27645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27646,rx))
);
return rx;
});
