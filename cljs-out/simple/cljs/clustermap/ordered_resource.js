// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj21400 = {};return obj21400;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11297__auto___21429 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___21429,rq_ticket,this$__$1){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___21429,rq_ticket,this$__$1){
return (function (state_21415){var state_val_21416 = (state_21415[(1)]);if((state_val_21416 === (6)))
{var inst_21407 = (state_21415[(2)]);var state_21415__$1 = state_21415;var statearr_21417_21430 = state_21415__$1;(statearr_21417_21430[(2)] = inst_21407);
(statearr_21417_21430[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21416 === (5)))
{var inst_21413 = (state_21415[(2)]);var state_21415__$1 = state_21415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21415__$1,inst_21413);
} else
{if((state_val_21416 === (4)))
{var inst_21409 = cljs.core.deref.call(null,self__.ticket);var inst_21410 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21409));var inst_21411 = console.log(inst_21410);var state_21415__$1 = state_21415;var statearr_21418_21431 = state_21415__$1;(statearr_21418_21431[(2)] = inst_21411);
(statearr_21418_21431[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21416 === (3)))
{var inst_21402 = (state_21415[(7)]);var state_21415__$1 = state_21415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21415__$1,(6),self__.response_chan,inst_21402);
} else
{if((state_val_21416 === (2)))
{var inst_21402 = (state_21415[(2)]);var inst_21403 = cljs.core.deref.call(null,self__.ticket);var inst_21404 = cljs.core._EQ_.call(null,rq_ticket,inst_21403);var state_21415__$1 = (function (){var statearr_21419 = state_21415;(statearr_21419[(7)] = inst_21402);
return statearr_21419;
})();if(inst_21404)
{var statearr_21420_21432 = state_21415__$1;(statearr_21420_21432[(1)] = (3));
} else
{var statearr_21421_21433 = state_21415__$1;(statearr_21421_21433[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21416 === (1)))
{var state_21415__$1 = state_21415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21415__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11297__auto___21429,rq_ticket,this$__$1))
;return ((function (switch__11241__auto__,c__11297__auto___21429,rq_ticket,this$__$1){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_21425 = [null,null,null,null,null,null,null,null];(statearr_21425[(0)] = state_machine__11242__auto__);
(statearr_21425[(1)] = (1));
return statearr_21425;
});
var state_machine__11242__auto____1 = (function (state_21415){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_21415);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e21426){if((e21426 instanceof Object))
{var ex__11245__auto__ = e21426;var statearr_21427_21434 = state_21415;(statearr_21427_21434[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21426;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21435 = state_21415;
state_21415 = G__21435;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_21415){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_21415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___21429,rq_ticket,this$__$1))
})();var state__11299__auto__ = (function (){var statearr_21428 = f__11298__auto__.call(null);(statearr_21428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___21429);
return statearr_21428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___21429,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__21436){
var ordered_resource = cljs.core.first(arglist__21436);
arglist__21436 = cljs.core.next(arglist__21436);
var api_fn = cljs.core.first(arglist__21436);
var args = cljs.core.rest(arglist__21436);
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
return (function (state_21492){var state_val_21493 = (state_21492[(1)]);if((state_val_21493 === (7)))
{var inst_21483 = (state_21492[(2)]);var state_21492__$1 = state_21492;if(cljs.core.truth_(inst_21483))
{var statearr_21494_21513 = state_21492__$1;(statearr_21494_21513[(1)] = (8));
} else
{var statearr_21495_21514 = state_21492__$1;(statearr_21495_21514[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (1)))
{var state_21492__$1 = state_21492;var statearr_21496_21515 = state_21492__$1;(statearr_21496_21515[(2)] = null);
(statearr_21496_21515[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (4)))
{var inst_21478 = (state_21492[(7)]);var inst_21478__$1 = (state_21492[(2)]);var state_21492__$1 = (function (){var statearr_21497 = state_21492;(statearr_21497[(7)] = inst_21478__$1);
return statearr_21497;
})();if(cljs.core.truth_(inst_21478__$1))
{var statearr_21498_21516 = state_21492__$1;(statearr_21498_21516[(1)] = (5));
} else
{var statearr_21499_21517 = state_21492__$1;(statearr_21499_21517[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (6)))
{var state_21492__$1 = state_21492;var statearr_21500_21518 = state_21492__$1;(statearr_21500_21518[(2)] = null);
(statearr_21500_21518[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (3)))
{var inst_21490 = (state_21492[(2)]);var state_21492__$1 = state_21492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21492__$1,inst_21490);
} else
{if((state_val_21493 === (2)))
{var inst_21476 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_21492__$1 = state_21492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21492__$1,(4),inst_21476);
} else
{if((state_val_21493 === (9)))
{var state_21492__$1 = state_21492;var statearr_21501_21519 = state_21492__$1;(statearr_21501_21519[(2)] = null);
(statearr_21501_21519[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (5)))
{var inst_21478 = (state_21492[(7)]);var inst_21480 = f.call(null,inst_21478);var state_21492__$1 = (function (){var statearr_21502 = state_21492;(statearr_21502[(8)] = inst_21480);
return statearr_21502;
})();var statearr_21503_21520 = state_21492__$1;(statearr_21503_21520[(2)] = true);
(statearr_21503_21520[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (10)))
{var inst_21488 = (state_21492[(2)]);var state_21492__$1 = state_21492;var statearr_21504_21521 = state_21492__$1;(statearr_21504_21521[(2)] = inst_21488);
(statearr_21504_21521[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21493 === (8)))
{var state_21492__$1 = state_21492;var statearr_21505_21522 = state_21492__$1;(statearr_21505_21522[(2)] = null);
(statearr_21505_21522[(1)] = (2));
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
var state_machine__11242__auto____0 = (function (){var statearr_21509 = [null,null,null,null,null,null,null,null,null];(statearr_21509[(0)] = state_machine__11242__auto__);
(statearr_21509[(1)] = (1));
return statearr_21509;
});
var state_machine__11242__auto____1 = (function (state_21492){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_21492);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e21510){if((e21510 instanceof Object))
{var ex__11245__auto__ = e21510;var statearr_21511_21523 = state_21492;(statearr_21511_21523[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21510;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21524 = state_21492;
state_21492 = G__21524;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_21492){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_21492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_21512 = f__11298__auto__.call(null);(statearr_21512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_21512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
});
