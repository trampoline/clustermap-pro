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
var c__9125__auto___27932 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27932,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27932,rx){
return (function (state_27913){var state_val_27914 = (state_27913[(1)]);if((state_val_27914 === (8)))
{var inst_27909 = (state_27913[(2)]);var inst_27910 = cljs.core.async.close_BANG_.call(null,valch);var inst_27911 = cljs.core.async.close_BANG_.call(null,rx);var state_27913__$1 = (function (){var statearr_27915 = state_27913;(statearr_27915[(7)] = inst_27910);
(statearr_27915[(8)] = inst_27909);
return statearr_27915;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27913__$1,inst_27911);
} else
{if((state_val_27914 === (7)))
{var state_27913__$1 = state_27913;var statearr_27916_27933 = state_27913__$1;(statearr_27916_27933[(2)] = null);
(statearr_27916_27933[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (6)))
{var inst_27898 = (state_27913[(9)]);var inst_27906 = cljs.core.async.put_BANG_.call(null,rx,inst_27898);var state_27913__$1 = state_27913;var statearr_27917_27934 = state_27913__$1;(statearr_27917_27934[(2)] = inst_27906);
(statearr_27917_27934[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (5)))
{var inst_27904 = (state_27913[(2)]);var state_27913__$1 = state_27913;if(cljs.core.truth_(inst_27904))
{var statearr_27918_27935 = state_27913__$1;(statearr_27918_27935[(1)] = (6));
} else
{var statearr_27919_27936 = state_27913__$1;(statearr_27919_27936[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (4)))
{var inst_27898 = (state_27913[(9)]);var state_27913__$1 = state_27913;var statearr_27920_27937 = state_27913__$1;(statearr_27920_27937[(2)] = inst_27898);
(statearr_27920_27937[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (3)))
{var inst_27900 = cljs.core.deref.call(null,in_flight_atom);var inst_27901 = cljs.core._EQ_.call(null,inst_27900,valch);var state_27913__$1 = state_27913;var statearr_27921_27938 = state_27913__$1;(statearr_27921_27938[(2)] = inst_27901);
(statearr_27921_27938[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (2)))
{var inst_27898 = (state_27913[(9)]);var inst_27898__$1 = (state_27913[(2)]);var state_27913__$1 = (function (){var statearr_27922 = state_27913;(statearr_27922[(9)] = inst_27898__$1);
return statearr_27922;
})();if(cljs.core.truth_(inst_27898__$1))
{var statearr_27923_27939 = state_27913__$1;(statearr_27923_27939[(1)] = (3));
} else
{var statearr_27924_27940 = state_27913__$1;(statearr_27924_27940[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27914 === (1)))
{var state_27913__$1 = state_27913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(2),valch);
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
});})(c__9125__auto___27932,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27932,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27928 = [null,null,null,null,null,null,null,null,null,null];(statearr_27928[(0)] = state_machine__9111__auto__);
(statearr_27928[(1)] = (1));
return statearr_27928;
});
var state_machine__9111__auto____1 = (function (state_27913){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27913);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27929){if((e27929 instanceof Object))
{var ex__9114__auto__ = e27929;var statearr_27930_27941 = state_27913;(statearr_27930_27941[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27929;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27942 = state_27913;
state_27913 = G__27942;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27913){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27932,rx))
})();var state__9127__auto__ = (function (){var statearr_27931 = f__9126__auto__.call(null);(statearr_27931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27932);
return statearr_27931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27932,rx))
);
return rx;
});
