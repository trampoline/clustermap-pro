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
var c__9125__auto___27935 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27935,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27935,rx){
return (function (state_27916){var state_val_27917 = (state_27916[(1)]);if((state_val_27917 === (8)))
{var inst_27912 = (state_27916[(2)]);var inst_27913 = cljs.core.async.close_BANG_.call(null,valch);var inst_27914 = cljs.core.async.close_BANG_.call(null,rx);var state_27916__$1 = (function (){var statearr_27918 = state_27916;(statearr_27918[(7)] = inst_27912);
(statearr_27918[(8)] = inst_27913);
return statearr_27918;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27916__$1,inst_27914);
} else
{if((state_val_27917 === (7)))
{var state_27916__$1 = state_27916;var statearr_27919_27936 = state_27916__$1;(statearr_27919_27936[(2)] = null);
(statearr_27919_27936[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27917 === (6)))
{var inst_27901 = (state_27916[(9)]);var inst_27909 = cljs.core.async.put_BANG_.call(null,rx,inst_27901);var state_27916__$1 = state_27916;var statearr_27920_27937 = state_27916__$1;(statearr_27920_27937[(2)] = inst_27909);
(statearr_27920_27937[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27917 === (5)))
{var inst_27907 = (state_27916[(2)]);var state_27916__$1 = state_27916;if(cljs.core.truth_(inst_27907))
{var statearr_27921_27938 = state_27916__$1;(statearr_27921_27938[(1)] = (6));
} else
{var statearr_27922_27939 = state_27916__$1;(statearr_27922_27939[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27917 === (4)))
{var inst_27901 = (state_27916[(9)]);var state_27916__$1 = state_27916;var statearr_27923_27940 = state_27916__$1;(statearr_27923_27940[(2)] = inst_27901);
(statearr_27923_27940[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27917 === (3)))
{var inst_27903 = cljs.core.deref.call(null,in_flight_atom);var inst_27904 = cljs.core._EQ_.call(null,inst_27903,valch);var state_27916__$1 = state_27916;var statearr_27924_27941 = state_27916__$1;(statearr_27924_27941[(2)] = inst_27904);
(statearr_27924_27941[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27917 === (2)))
{var inst_27901 = (state_27916[(9)]);var inst_27901__$1 = (state_27916[(2)]);var state_27916__$1 = (function (){var statearr_27925 = state_27916;(statearr_27925[(9)] = inst_27901__$1);
return statearr_27925;
})();if(cljs.core.truth_(inst_27901__$1))
{var statearr_27926_27942 = state_27916__$1;(statearr_27926_27942[(1)] = (3));
} else
{var statearr_27927_27943 = state_27916__$1;(statearr_27927_27943[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27917 === (1)))
{var state_27916__$1 = state_27916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27916__$1,(2),valch);
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
});})(c__9125__auto___27935,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27935,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27931 = [null,null,null,null,null,null,null,null,null,null];(statearr_27931[(0)] = state_machine__9111__auto__);
(statearr_27931[(1)] = (1));
return statearr_27931;
});
var state_machine__9111__auto____1 = (function (state_27916){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27916);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27932){if((e27932 instanceof Object))
{var ex__9114__auto__ = e27932;var statearr_27933_27944 = state_27916;(statearr_27933_27944[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27932;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27945 = state_27916;
state_27916 = G__27945;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27916){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27935,rx))
})();var state__9127__auto__ = (function (){var statearr_27934 = f__9126__auto__.call(null);(statearr_27934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27935);
return statearr_27934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27935,rx))
);
return rx;
});
