// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj31047 = {};return obj31047;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.ordered_resource.add_request[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.ordered_resource.get_response_chan[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (clustermap.ordered_resource.close[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.close",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
clustermap.ordered_resource.DiscardStaleResource = (function (name,ticket,response_chan){
this.name = name;
this.ticket = ticket;
this.response_chan = response_chan;
})
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$type = true;
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorStr = "clustermap.ordered-resource/DiscardStaleResource";
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__18867__auto___31076 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___31076,rq_ticket,this$__$1){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___31076,rq_ticket,this$__$1){
return (function (state_31062){var state_val_31063 = (state_31062[(1)]);if((state_val_31063 === (6)))
{var inst_31054 = (state_31062[(2)]);var state_31062__$1 = state_31062;var statearr_31064_31077 = state_31062__$1;(statearr_31064_31077[(2)] = inst_31054);
(statearr_31064_31077[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31063 === (5)))
{var inst_31060 = (state_31062[(2)]);var state_31062__$1 = state_31062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31062__$1,inst_31060);
} else
{if((state_val_31063 === (4)))
{var inst_31056 = cljs.core.deref.call(null,self__.ticket);var inst_31057 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31056));var inst_31058 = console.log(inst_31057);var state_31062__$1 = state_31062;var statearr_31065_31078 = state_31062__$1;(statearr_31065_31078[(2)] = inst_31058);
(statearr_31065_31078[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31063 === (3)))
{var inst_31049 = (state_31062[(7)]);var state_31062__$1 = state_31062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31062__$1,(6),self__.response_chan,inst_31049);
} else
{if((state_val_31063 === (2)))
{var inst_31049 = (state_31062[(2)]);var inst_31050 = cljs.core.deref.call(null,self__.ticket);var inst_31051 = cljs.core._EQ_.call(null,rq_ticket,inst_31050);var state_31062__$1 = (function (){var statearr_31066 = state_31062;(statearr_31066[(7)] = inst_31049);
return statearr_31066;
})();if(inst_31051)
{var statearr_31067_31079 = state_31062__$1;(statearr_31067_31079[(1)] = (3));
} else
{var statearr_31068_31080 = state_31062__$1;(statearr_31068_31080[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31063 === (1)))
{var state_31062__$1 = state_31062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31062__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__18867__auto___31076,rq_ticket,this$__$1))
;return ((function (switch__18811__auto__,c__18867__auto___31076,rq_ticket,this$__$1){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_31072 = [null,null,null,null,null,null,null,null];(statearr_31072[(0)] = state_machine__18812__auto__);
(statearr_31072[(1)] = (1));
return statearr_31072;
});
var state_machine__18812__auto____1 = (function (state_31062){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_31062);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object))
{var ex__18815__auto__ = e31073;var statearr_31074_31081 = state_31062;(statearr_31074_31081[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31073;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31082 = state_31062;
state_31062 = G__31082;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___31076,rq_ticket,this$__$1))
})();var state__18869__auto__ = (function (){var statearr_31075 = f__18868__auto__.call(null);(statearr_31075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___31076);
return statearr_31075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___31076,rq_ticket,this$__$1))
);
return null;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.response_chan;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$close$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.async.close_BANG_.call(null,self__.response_chan);
});
clustermap.ordered_resource.__GT_DiscardStaleResource = (function __GT_DiscardStaleResource(name,ticket,response_chan){return (new clustermap.ordered_resource.DiscardStaleResource(name,ticket,response_chan));
});
/**
* creates an ordered-resource which will discard a response if
* a response to a later request has already been received
*/
clustermap.ordered_resource.make_discard_stale_resource = (function make_discard_stale_resource(name){return (new clustermap.ordered_resource.DiscardStaleResource(name,cljs.core.atom.call(null,(0)),cljs.core.async.chan.call(null)));
});
/**
* make an api call and put the result channel into an ordered-resource
* - ordered-resource : the ordered resources
* - api-fn : makes an api-call and returns a channel of a single result value
* - args : to be passed to the api-fn
* @param {...*} var_args
*/
clustermap.ordered_resource.api_call = (function() { 
var api_call__delegate = function (ordered_resource,api_fn,args){return clustermap.ordered_resource.add_request.call(null,ordered_resource,cljs.core.apply.call(null,api_fn,args));
};
var api_call = function (ordered_resource,api_fn,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return api_call__delegate.call(this,ordered_resource,api_fn,args);};
api_call.cljs$lang$maxFixedArity = 2;
api_call.cljs$lang$applyTo = (function (arglist__31083){
var ordered_resource = cljs.core.first(arglist__31083);
arglist__31083 = cljs.core.next(arglist__31083);
var api_fn = cljs.core.first(arglist__31083);
var args = cljs.core.rest(arglist__31083);
return api_call__delegate(ordered_resource,api_fn,args);
});
api_call.cljs$core$IFn$_invoke$arity$variadic = api_call__delegate;
return api_call;
})()
;
/**
* loop reading responses from the ordered-resource response channel
* and calling f with the response, for side-effects. stop when the
* response channel is closed
*/
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_31139){var state_val_31140 = (state_31139[(1)]);if((state_val_31140 === (7)))
{var inst_31130 = (state_31139[(2)]);var state_31139__$1 = state_31139;if(cljs.core.truth_(inst_31130))
{var statearr_31141_31160 = state_31139__$1;(statearr_31141_31160[(1)] = (8));
} else
{var statearr_31142_31161 = state_31139__$1;(statearr_31142_31161[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31140 === (1)))
{var state_31139__$1 = state_31139;var statearr_31143_31162 = state_31139__$1;(statearr_31143_31162[(2)] = null);
(statearr_31143_31162[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31140 === (4)))
{var inst_31125 = (state_31139[(7)]);var inst_31125__$1 = (state_31139[(2)]);var state_31139__$1 = (function (){var statearr_31144 = state_31139;(statearr_31144[(7)] = inst_31125__$1);
return statearr_31144;
})();if(cljs.core.truth_(inst_31125__$1))
{var statearr_31145_31163 = state_31139__$1;(statearr_31145_31163[(1)] = (5));
} else
{var statearr_31146_31164 = state_31139__$1;(statearr_31146_31164[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31140 === (6)))
{var state_31139__$1 = state_31139;var statearr_31147_31165 = state_31139__$1;(statearr_31147_31165[(2)] = null);
(statearr_31147_31165[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31140 === (3)))
{var inst_31137 = (state_31139[(2)]);var state_31139__$1 = state_31139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31139__$1,inst_31137);
} else
{if((state_val_31140 === (2)))
{var inst_31123 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_31139__$1 = state_31139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31139__$1,(4),inst_31123);
} else
{if((state_val_31140 === (9)))
{var state_31139__$1 = state_31139;var statearr_31148_31166 = state_31139__$1;(statearr_31148_31166[(2)] = null);
(statearr_31148_31166[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31140 === (5)))
{var inst_31125 = (state_31139[(7)]);var inst_31127 = f.call(null,inst_31125);var state_31139__$1 = (function (){var statearr_31149 = state_31139;(statearr_31149[(8)] = inst_31127);
return statearr_31149;
})();var statearr_31150_31167 = state_31139__$1;(statearr_31150_31167[(2)] = true);
(statearr_31150_31167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31140 === (10)))
{var inst_31135 = (state_31139[(2)]);var state_31139__$1 = state_31139;var statearr_31151_31168 = state_31139__$1;(statearr_31151_31168[(2)] = inst_31135);
(statearr_31151_31168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31140 === (8)))
{var state_31139__$1 = state_31139;var statearr_31152_31169 = state_31139__$1;(statearr_31152_31169[(2)] = null);
(statearr_31152_31169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__18867__auto__))
;return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_31156 = [null,null,null,null,null,null,null,null,null];(statearr_31156[(0)] = state_machine__18812__auto__);
(statearr_31156[(1)] = (1));
return statearr_31156;
});
var state_machine__18812__auto____1 = (function (state_31139){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_31139);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e31157){if((e31157 instanceof Object))
{var ex__18815__auto__ = e31157;var statearr_31158_31170 = state_31139;(statearr_31158_31170[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31139);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31157;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31171 = state_31139;
state_31139 = G__31171;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_31139){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_31139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();var state__18869__auto__ = (function (){var statearr_31159 = f__18868__auto__.call(null);(statearr_31159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_31159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);
return c__18867__auto__;
});

//# sourceMappingURL=ordered_resource.js.map