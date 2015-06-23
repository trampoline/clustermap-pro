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
var c__9125__auto___27937 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27937,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27937,rx){
return (function (state_27918){var state_val_27919 = (state_27918[(1)]);if((state_val_27919 === (8)))
{var inst_27914 = (state_27918[(2)]);var inst_27915 = cljs.core.async.close_BANG_.call(null,valch);var inst_27916 = cljs.core.async.close_BANG_.call(null,rx);var state_27918__$1 = (function (){var statearr_27920 = state_27918;(statearr_27920[(7)] = inst_27914);
(statearr_27920[(8)] = inst_27915);
return statearr_27920;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27918__$1,inst_27916);
} else
{if((state_val_27919 === (7)))
{var state_27918__$1 = state_27918;var statearr_27921_27938 = state_27918__$1;(statearr_27921_27938[(2)] = null);
(statearr_27921_27938[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27919 === (6)))
{var inst_27903 = (state_27918[(9)]);var inst_27911 = cljs.core.async.put_BANG_.call(null,rx,inst_27903);var state_27918__$1 = state_27918;var statearr_27922_27939 = state_27918__$1;(statearr_27922_27939[(2)] = inst_27911);
(statearr_27922_27939[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27919 === (5)))
{var inst_27909 = (state_27918[(2)]);var state_27918__$1 = state_27918;if(cljs.core.truth_(inst_27909))
{var statearr_27923_27940 = state_27918__$1;(statearr_27923_27940[(1)] = (6));
} else
{var statearr_27924_27941 = state_27918__$1;(statearr_27924_27941[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27919 === (4)))
{var inst_27903 = (state_27918[(9)]);var state_27918__$1 = state_27918;var statearr_27925_27942 = state_27918__$1;(statearr_27925_27942[(2)] = inst_27903);
(statearr_27925_27942[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27919 === (3)))
{var inst_27905 = cljs.core.deref.call(null,in_flight_atom);var inst_27906 = cljs.core._EQ_.call(null,inst_27905,valch);var state_27918__$1 = state_27918;var statearr_27926_27943 = state_27918__$1;(statearr_27926_27943[(2)] = inst_27906);
(statearr_27926_27943[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27919 === (2)))
{var inst_27903 = (state_27918[(9)]);var inst_27903__$1 = (state_27918[(2)]);var state_27918__$1 = (function (){var statearr_27927 = state_27918;(statearr_27927[(9)] = inst_27903__$1);
return statearr_27927;
})();if(cljs.core.truth_(inst_27903__$1))
{var statearr_27928_27944 = state_27918__$1;(statearr_27928_27944[(1)] = (3));
} else
{var statearr_27929_27945 = state_27918__$1;(statearr_27929_27945[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27919 === (1)))
{var state_27918__$1 = state_27918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27918__$1,(2),valch);
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
});})(c__9125__auto___27937,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27937,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27933 = [null,null,null,null,null,null,null,null,null,null];(statearr_27933[(0)] = state_machine__9111__auto__);
(statearr_27933[(1)] = (1));
return statearr_27933;
});
var state_machine__9111__auto____1 = (function (state_27918){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27918);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27934){if((e27934 instanceof Object))
{var ex__9114__auto__ = e27934;var statearr_27935_27946 = state_27918;(statearr_27935_27946[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27947 = state_27918;
state_27918 = G__27947;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27918){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27937,rx))
})();var state__9127__auto__ = (function (){var statearr_27936 = f__9126__auto__.call(null);(statearr_27936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27937);
return statearr_27936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27937,rx))
);
return rx;
});
