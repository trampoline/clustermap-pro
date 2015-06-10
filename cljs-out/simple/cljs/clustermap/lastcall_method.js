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
var c__9125__auto___27661 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27661,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27661,rx){
return (function (state_27642){var state_val_27643 = (state_27642[(1)]);if((state_val_27643 === (8)))
{var inst_27638 = (state_27642[(2)]);var inst_27639 = cljs.core.async.close_BANG_.call(null,valch);var inst_27640 = cljs.core.async.close_BANG_.call(null,rx);var state_27642__$1 = (function (){var statearr_27644 = state_27642;(statearr_27644[(7)] = inst_27639);
(statearr_27644[(8)] = inst_27638);
return statearr_27644;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27642__$1,inst_27640);
} else
{if((state_val_27643 === (7)))
{var state_27642__$1 = state_27642;var statearr_27645_27662 = state_27642__$1;(statearr_27645_27662[(2)] = null);
(statearr_27645_27662[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27643 === (6)))
{var inst_27627 = (state_27642[(9)]);var inst_27635 = cljs.core.async.put_BANG_.call(null,rx,inst_27627);var state_27642__$1 = state_27642;var statearr_27646_27663 = state_27642__$1;(statearr_27646_27663[(2)] = inst_27635);
(statearr_27646_27663[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27643 === (5)))
{var inst_27633 = (state_27642[(2)]);var state_27642__$1 = state_27642;if(cljs.core.truth_(inst_27633))
{var statearr_27647_27664 = state_27642__$1;(statearr_27647_27664[(1)] = (6));
} else
{var statearr_27648_27665 = state_27642__$1;(statearr_27648_27665[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27643 === (4)))
{var inst_27627 = (state_27642[(9)]);var state_27642__$1 = state_27642;var statearr_27649_27666 = state_27642__$1;(statearr_27649_27666[(2)] = inst_27627);
(statearr_27649_27666[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27643 === (3)))
{var inst_27629 = cljs.core.deref.call(null,in_flight_atom);var inst_27630 = cljs.core._EQ_.call(null,inst_27629,valch);var state_27642__$1 = state_27642;var statearr_27650_27667 = state_27642__$1;(statearr_27650_27667[(2)] = inst_27630);
(statearr_27650_27667[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27643 === (2)))
{var inst_27627 = (state_27642[(9)]);var inst_27627__$1 = (state_27642[(2)]);var state_27642__$1 = (function (){var statearr_27651 = state_27642;(statearr_27651[(9)] = inst_27627__$1);
return statearr_27651;
})();if(cljs.core.truth_(inst_27627__$1))
{var statearr_27652_27668 = state_27642__$1;(statearr_27652_27668[(1)] = (3));
} else
{var statearr_27653_27669 = state_27642__$1;(statearr_27653_27669[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27643 === (1)))
{var state_27642__$1 = state_27642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27642__$1,(2),valch);
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
});})(c__9125__auto___27661,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27661,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27657 = [null,null,null,null,null,null,null,null,null,null];(statearr_27657[(0)] = state_machine__9111__auto__);
(statearr_27657[(1)] = (1));
return statearr_27657;
});
var state_machine__9111__auto____1 = (function (state_27642){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27642);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27658){if((e27658 instanceof Object))
{var ex__9114__auto__ = e27658;var statearr_27659_27670 = state_27642;(statearr_27659_27670[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27658;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27671 = state_27642;
state_27642 = G__27671;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27642){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27661,rx))
})();var state__9127__auto__ = (function (){var statearr_27660 = f__9126__auto__.call(null);(statearr_27660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27661);
return statearr_27660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27661,rx))
);
return rx;
});
