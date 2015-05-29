// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj21469 = {};return obj21469;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11297__auto___21498 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___21498,rq_ticket,this$__$1){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___21498,rq_ticket,this$__$1){
return (function (state_21484){var state_val_21485 = (state_21484[(1)]);if((state_val_21485 === (6)))
{var inst_21476 = (state_21484[(2)]);var state_21484__$1 = state_21484;var statearr_21486_21499 = state_21484__$1;(statearr_21486_21499[(2)] = inst_21476);
(statearr_21486_21499[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (5)))
{var inst_21482 = (state_21484[(2)]);var state_21484__$1 = state_21484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21484__$1,inst_21482);
} else
{if((state_val_21485 === (4)))
{var inst_21478 = cljs.core.deref.call(null,self__.ticket);var inst_21479 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21478));var inst_21480 = console.log(inst_21479);var state_21484__$1 = state_21484;var statearr_21487_21500 = state_21484__$1;(statearr_21487_21500[(2)] = inst_21480);
(statearr_21487_21500[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (3)))
{var inst_21471 = (state_21484[(7)]);var state_21484__$1 = state_21484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21484__$1,(6),self__.response_chan,inst_21471);
} else
{if((state_val_21485 === (2)))
{var inst_21471 = (state_21484[(2)]);var inst_21472 = cljs.core.deref.call(null,self__.ticket);var inst_21473 = cljs.core._EQ_.call(null,rq_ticket,inst_21472);var state_21484__$1 = (function (){var statearr_21488 = state_21484;(statearr_21488[(7)] = inst_21471);
return statearr_21488;
})();if(inst_21473)
{var statearr_21489_21501 = state_21484__$1;(statearr_21489_21501[(1)] = (3));
} else
{var statearr_21490_21502 = state_21484__$1;(statearr_21490_21502[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21485 === (1)))
{var state_21484__$1 = state_21484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21484__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11297__auto___21498,rq_ticket,this$__$1))
;return ((function (switch__11241__auto__,c__11297__auto___21498,rq_ticket,this$__$1){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_21494 = [null,null,null,null,null,null,null,null];(statearr_21494[(0)] = state_machine__11242__auto__);
(statearr_21494[(1)] = (1));
return statearr_21494;
});
var state_machine__11242__auto____1 = (function (state_21484){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_21484);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e21495){if((e21495 instanceof Object))
{var ex__11245__auto__ = e21495;var statearr_21496_21503 = state_21484;(statearr_21496_21503[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21495;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21504 = state_21484;
state_21484 = G__21504;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_21484){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_21484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___21498,rq_ticket,this$__$1))
})();var state__11299__auto__ = (function (){var statearr_21497 = f__11298__auto__.call(null);(statearr_21497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___21498);
return statearr_21497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___21498,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__21505){
var ordered_resource = cljs.core.first(arglist__21505);
arglist__21505 = cljs.core.next(arglist__21505);
var api_fn = cljs.core.first(arglist__21505);
var args = cljs.core.rest(arglist__21505);
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
return (function (state_21561){var state_val_21562 = (state_21561[(1)]);if((state_val_21562 === (7)))
{var inst_21552 = (state_21561[(2)]);var state_21561__$1 = state_21561;if(cljs.core.truth_(inst_21552))
{var statearr_21563_21582 = state_21561__$1;(statearr_21563_21582[(1)] = (8));
} else
{var statearr_21564_21583 = state_21561__$1;(statearr_21564_21583[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (1)))
{var state_21561__$1 = state_21561;var statearr_21565_21584 = state_21561__$1;(statearr_21565_21584[(2)] = null);
(statearr_21565_21584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (4)))
{var inst_21547 = (state_21561[(7)]);var inst_21547__$1 = (state_21561[(2)]);var state_21561__$1 = (function (){var statearr_21566 = state_21561;(statearr_21566[(7)] = inst_21547__$1);
return statearr_21566;
})();if(cljs.core.truth_(inst_21547__$1))
{var statearr_21567_21585 = state_21561__$1;(statearr_21567_21585[(1)] = (5));
} else
{var statearr_21568_21586 = state_21561__$1;(statearr_21568_21586[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (6)))
{var state_21561__$1 = state_21561;var statearr_21569_21587 = state_21561__$1;(statearr_21569_21587[(2)] = null);
(statearr_21569_21587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (3)))
{var inst_21559 = (state_21561[(2)]);var state_21561__$1 = state_21561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21561__$1,inst_21559);
} else
{if((state_val_21562 === (2)))
{var inst_21545 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_21561__$1 = state_21561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21561__$1,(4),inst_21545);
} else
{if((state_val_21562 === (9)))
{var state_21561__$1 = state_21561;var statearr_21570_21588 = state_21561__$1;(statearr_21570_21588[(2)] = null);
(statearr_21570_21588[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (5)))
{var inst_21547 = (state_21561[(7)]);var inst_21549 = f.call(null,inst_21547);var state_21561__$1 = (function (){var statearr_21571 = state_21561;(statearr_21571[(8)] = inst_21549);
return statearr_21571;
})();var statearr_21572_21589 = state_21561__$1;(statearr_21572_21589[(2)] = true);
(statearr_21572_21589[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (10)))
{var inst_21557 = (state_21561[(2)]);var state_21561__$1 = state_21561;var statearr_21573_21590 = state_21561__$1;(statearr_21573_21590[(2)] = inst_21557);
(statearr_21573_21590[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (8)))
{var state_21561__$1 = state_21561;var statearr_21574_21591 = state_21561__$1;(statearr_21574_21591[(2)] = null);
(statearr_21574_21591[(1)] = (2));
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
var state_machine__11242__auto____0 = (function (){var statearr_21578 = [null,null,null,null,null,null,null,null,null];(statearr_21578[(0)] = state_machine__11242__auto__);
(statearr_21578[(1)] = (1));
return statearr_21578;
});
var state_machine__11242__auto____1 = (function (state_21561){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_21561);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e21579){if((e21579 instanceof Object))
{var ex__11245__auto__ = e21579;var statearr_21580_21592 = state_21561;(statearr_21580_21592[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21579;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21593 = state_21561;
state_21561 = G__21593;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_21561){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_21561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_21581 = f__11298__auto__.call(null);(statearr_21581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_21581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
});
