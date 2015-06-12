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
var c__9125__auto___27814 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27814,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27814,rx){
return (function (state_27795){var state_val_27796 = (state_27795[(1)]);if((state_val_27796 === (8)))
{var inst_27791 = (state_27795[(2)]);var inst_27792 = cljs.core.async.close_BANG_.call(null,valch);var inst_27793 = cljs.core.async.close_BANG_.call(null,rx);var state_27795__$1 = (function (){var statearr_27797 = state_27795;(statearr_27797[(7)] = inst_27792);
(statearr_27797[(8)] = inst_27791);
return statearr_27797;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27795__$1,inst_27793);
} else
{if((state_val_27796 === (7)))
{var state_27795__$1 = state_27795;var statearr_27798_27815 = state_27795__$1;(statearr_27798_27815[(2)] = null);
(statearr_27798_27815[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27796 === (6)))
{var inst_27780 = (state_27795[(9)]);var inst_27788 = cljs.core.async.put_BANG_.call(null,rx,inst_27780);var state_27795__$1 = state_27795;var statearr_27799_27816 = state_27795__$1;(statearr_27799_27816[(2)] = inst_27788);
(statearr_27799_27816[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27796 === (5)))
{var inst_27786 = (state_27795[(2)]);var state_27795__$1 = state_27795;if(cljs.core.truth_(inst_27786))
{var statearr_27800_27817 = state_27795__$1;(statearr_27800_27817[(1)] = (6));
} else
{var statearr_27801_27818 = state_27795__$1;(statearr_27801_27818[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27796 === (4)))
{var inst_27780 = (state_27795[(9)]);var state_27795__$1 = state_27795;var statearr_27802_27819 = state_27795__$1;(statearr_27802_27819[(2)] = inst_27780);
(statearr_27802_27819[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27796 === (3)))
{var inst_27782 = cljs.core.deref.call(null,in_flight_atom);var inst_27783 = cljs.core._EQ_.call(null,inst_27782,valch);var state_27795__$1 = state_27795;var statearr_27803_27820 = state_27795__$1;(statearr_27803_27820[(2)] = inst_27783);
(statearr_27803_27820[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27796 === (2)))
{var inst_27780 = (state_27795[(9)]);var inst_27780__$1 = (state_27795[(2)]);var state_27795__$1 = (function (){var statearr_27804 = state_27795;(statearr_27804[(9)] = inst_27780__$1);
return statearr_27804;
})();if(cljs.core.truth_(inst_27780__$1))
{var statearr_27805_27821 = state_27795__$1;(statearr_27805_27821[(1)] = (3));
} else
{var statearr_27806_27822 = state_27795__$1;(statearr_27806_27822[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27796 === (1)))
{var state_27795__$1 = state_27795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27795__$1,(2),valch);
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
});})(c__9125__auto___27814,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27814,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27810 = [null,null,null,null,null,null,null,null,null,null];(statearr_27810[(0)] = state_machine__9111__auto__);
(statearr_27810[(1)] = (1));
return statearr_27810;
});
var state_machine__9111__auto____1 = (function (state_27795){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27795);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27811){if((e27811 instanceof Object))
{var ex__9114__auto__ = e27811;var statearr_27812_27823 = state_27795;(statearr_27812_27823[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27824 = state_27795;
state_27795 = G__27824;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27814,rx))
})();var state__9127__auto__ = (function (){var statearr_27813 = f__9126__auto__.call(null);(statearr_27813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27814);
return statearr_27813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27814,rx))
);
return rx;
});
