// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj21467 = {};return obj21467;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.ordered_resource.add_request[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.ordered_resource.get_response_chan[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.ordered_resource.close[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
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
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11297__auto___21496 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___21496,rq_ticket,this$__$1){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___21496,rq_ticket,this$__$1){
return (function (state_21482){var state_val_21483 = (state_21482[(1)]);if((state_val_21483 === (6)))
{var inst_21474 = (state_21482[(2)]);var state_21482__$1 = state_21482;var statearr_21484_21497 = state_21482__$1;(statearr_21484_21497[(2)] = inst_21474);
(statearr_21484_21497[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (5)))
{var inst_21480 = (state_21482[(2)]);var state_21482__$1 = state_21482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21482__$1,inst_21480);
} else
{if((state_val_21483 === (4)))
{var inst_21476 = cljs.core.deref.call(null,self__.ticket);var inst_21477 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21476));var inst_21478 = console.log(inst_21477);var state_21482__$1 = state_21482;var statearr_21485_21498 = state_21482__$1;(statearr_21485_21498[(2)] = inst_21478);
(statearr_21485_21498[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (3)))
{var inst_21469 = (state_21482[(7)]);var state_21482__$1 = state_21482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21482__$1,(6),self__.response_chan,inst_21469);
} else
{if((state_val_21483 === (2)))
{var inst_21469 = (state_21482[(2)]);var inst_21470 = cljs.core.deref.call(null,self__.ticket);var inst_21471 = cljs.core._EQ_.call(null,rq_ticket,inst_21470);var state_21482__$1 = (function (){var statearr_21486 = state_21482;(statearr_21486[(7)] = inst_21469);
return statearr_21486;
})();if(inst_21471)
{var statearr_21487_21499 = state_21482__$1;(statearr_21487_21499[(1)] = (3));
} else
{var statearr_21488_21500 = state_21482__$1;(statearr_21488_21500[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (1)))
{var state_21482__$1 = state_21482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21482__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11297__auto___21496,rq_ticket,this$__$1))
;return ((function (switch__11241__auto__,c__11297__auto___21496,rq_ticket,this$__$1){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_21492 = [null,null,null,null,null,null,null,null];(statearr_21492[(0)] = state_machine__11242__auto__);
(statearr_21492[(1)] = (1));
return statearr_21492;
});
var state_machine__11242__auto____1 = (function (state_21482){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_21482);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e21493){if((e21493 instanceof Object))
{var ex__11245__auto__ = e21493;var statearr_21494_21501 = state_21482;(statearr_21494_21501[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21493;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21502 = state_21482;
state_21482 = G__21502;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_21482){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_21482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___21496,rq_ticket,this$__$1))
})();var state__11299__auto__ = (function (){var statearr_21495 = f__11298__auto__.call(null);(statearr_21495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___21496);
return statearr_21495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___21496,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__21503){
var ordered_resource = cljs.core.first(arglist__21503);
arglist__21503 = cljs.core.next(arglist__21503);
var api_fn = cljs.core.first(arglist__21503);
var args = cljs.core.rest(arglist__21503);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_21559){var state_val_21560 = (state_21559[(1)]);if((state_val_21560 === (7)))
{var inst_21550 = (state_21559[(2)]);var state_21559__$1 = state_21559;if(cljs.core.truth_(inst_21550))
{var statearr_21561_21580 = state_21559__$1;(statearr_21561_21580[(1)] = (8));
} else
{var statearr_21562_21581 = state_21559__$1;(statearr_21562_21581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21560 === (1)))
{var state_21559__$1 = state_21559;var statearr_21563_21582 = state_21559__$1;(statearr_21563_21582[(2)] = null);
(statearr_21563_21582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21560 === (4)))
{var inst_21545 = (state_21559[(7)]);var inst_21545__$1 = (state_21559[(2)]);var state_21559__$1 = (function (){var statearr_21564 = state_21559;(statearr_21564[(7)] = inst_21545__$1);
return statearr_21564;
})();if(cljs.core.truth_(inst_21545__$1))
{var statearr_21565_21583 = state_21559__$1;(statearr_21565_21583[(1)] = (5));
} else
{var statearr_21566_21584 = state_21559__$1;(statearr_21566_21584[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21560 === (6)))
{var state_21559__$1 = state_21559;var statearr_21567_21585 = state_21559__$1;(statearr_21567_21585[(2)] = null);
(statearr_21567_21585[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21560 === (3)))
{var inst_21557 = (state_21559[(2)]);var state_21559__$1 = state_21559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21559__$1,inst_21557);
} else
{if((state_val_21560 === (2)))
{var inst_21543 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_21559__$1 = state_21559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21559__$1,(4),inst_21543);
} else
{if((state_val_21560 === (9)))
{var state_21559__$1 = state_21559;var statearr_21568_21586 = state_21559__$1;(statearr_21568_21586[(2)] = null);
(statearr_21568_21586[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21560 === (5)))
{var inst_21545 = (state_21559[(7)]);var inst_21547 = f.call(null,inst_21545);var state_21559__$1 = (function (){var statearr_21569 = state_21559;(statearr_21569[(8)] = inst_21547);
return statearr_21569;
})();var statearr_21570_21587 = state_21559__$1;(statearr_21570_21587[(2)] = true);
(statearr_21570_21587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21560 === (10)))
{var inst_21555 = (state_21559[(2)]);var state_21559__$1 = state_21559;var statearr_21571_21588 = state_21559__$1;(statearr_21571_21588[(2)] = inst_21555);
(statearr_21571_21588[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21560 === (8)))
{var state_21559__$1 = state_21559;var statearr_21572_21589 = state_21559__$1;(statearr_21572_21589[(2)] = null);
(statearr_21572_21589[(1)] = (2));
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
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_21576 = [null,null,null,null,null,null,null,null,null];(statearr_21576[(0)] = state_machine__11242__auto__);
(statearr_21576[(1)] = (1));
return statearr_21576;
});
var state_machine__11242__auto____1 = (function (state_21559){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_21559);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e21577){if((e21577 instanceof Object))
{var ex__11245__auto__ = e21577;var statearr_21578_21590 = state_21559;(statearr_21578_21590[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21559);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21577;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21591 = state_21559;
state_21559 = G__21591;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_21559){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_21559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_21579 = f__11298__auto__.call(null);(statearr_21579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_21579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
});
