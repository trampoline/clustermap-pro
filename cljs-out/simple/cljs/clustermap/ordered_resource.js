// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj22345 = {};return obj22345;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11517__auto___22374 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___22374,rq_ticket,this$__$1){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___22374,rq_ticket,this$__$1){
return (function (state_22360){var state_val_22361 = (state_22360[(1)]);if((state_val_22361 === (6)))
{var inst_22352 = (state_22360[(2)]);var state_22360__$1 = state_22360;var statearr_22362_22375 = state_22360__$1;(statearr_22362_22375[(2)] = inst_22352);
(statearr_22362_22375[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22361 === (5)))
{var inst_22358 = (state_22360[(2)]);var state_22360__$1 = state_22360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22360__$1,inst_22358);
} else
{if((state_val_22361 === (4)))
{var inst_22354 = cljs.core.deref.call(null,self__.ticket);var inst_22355 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22354));var inst_22356 = console.log(inst_22355);var state_22360__$1 = state_22360;var statearr_22363_22376 = state_22360__$1;(statearr_22363_22376[(2)] = inst_22356);
(statearr_22363_22376[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22361 === (3)))
{var inst_22347 = (state_22360[(7)]);var state_22360__$1 = state_22360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22360__$1,(6),self__.response_chan,inst_22347);
} else
{if((state_val_22361 === (2)))
{var inst_22347 = (state_22360[(2)]);var inst_22348 = cljs.core.deref.call(null,self__.ticket);var inst_22349 = cljs.core._EQ_.call(null,rq_ticket,inst_22348);var state_22360__$1 = (function (){var statearr_22364 = state_22360;(statearr_22364[(7)] = inst_22347);
return statearr_22364;
})();if(inst_22349)
{var statearr_22365_22377 = state_22360__$1;(statearr_22365_22377[(1)] = (3));
} else
{var statearr_22366_22378 = state_22360__$1;(statearr_22366_22378[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22361 === (1)))
{var state_22360__$1 = state_22360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22360__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto___22374,rq_ticket,this$__$1))
;return ((function (switch__11461__auto__,c__11517__auto___22374,rq_ticket,this$__$1){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_22370 = [null,null,null,null,null,null,null,null];(statearr_22370[(0)] = state_machine__11462__auto__);
(statearr_22370[(1)] = (1));
return statearr_22370;
});
var state_machine__11462__auto____1 = (function (state_22360){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22360);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22371){if((e22371 instanceof Object))
{var ex__11465__auto__ = e22371;var statearr_22372_22379 = state_22360;(statearr_22372_22379[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22371;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22380 = state_22360;
state_22360 = G__22380;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22360){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___22374,rq_ticket,this$__$1))
})();var state__11519__auto__ = (function (){var statearr_22373 = f__11518__auto__.call(null);(statearr_22373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___22374);
return statearr_22373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___22374,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__22381){
var ordered_resource = cljs.core.first(arglist__22381);
arglist__22381 = cljs.core.next(arglist__22381);
var api_fn = cljs.core.first(arglist__22381);
var args = cljs.core.rest(arglist__22381);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_22437){var state_val_22438 = (state_22437[(1)]);if((state_val_22438 === (7)))
{var inst_22428 = (state_22437[(2)]);var state_22437__$1 = state_22437;if(cljs.core.truth_(inst_22428))
{var statearr_22439_22458 = state_22437__$1;(statearr_22439_22458[(1)] = (8));
} else
{var statearr_22440_22459 = state_22437__$1;(statearr_22440_22459[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22438 === (1)))
{var state_22437__$1 = state_22437;var statearr_22441_22460 = state_22437__$1;(statearr_22441_22460[(2)] = null);
(statearr_22441_22460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22438 === (4)))
{var inst_22423 = (state_22437[(7)]);var inst_22423__$1 = (state_22437[(2)]);var state_22437__$1 = (function (){var statearr_22442 = state_22437;(statearr_22442[(7)] = inst_22423__$1);
return statearr_22442;
})();if(cljs.core.truth_(inst_22423__$1))
{var statearr_22443_22461 = state_22437__$1;(statearr_22443_22461[(1)] = (5));
} else
{var statearr_22444_22462 = state_22437__$1;(statearr_22444_22462[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22438 === (6)))
{var state_22437__$1 = state_22437;var statearr_22445_22463 = state_22437__$1;(statearr_22445_22463[(2)] = null);
(statearr_22445_22463[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22438 === (3)))
{var inst_22435 = (state_22437[(2)]);var state_22437__$1 = state_22437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22437__$1,inst_22435);
} else
{if((state_val_22438 === (2)))
{var inst_22421 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_22437__$1 = state_22437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22437__$1,(4),inst_22421);
} else
{if((state_val_22438 === (9)))
{var state_22437__$1 = state_22437;var statearr_22446_22464 = state_22437__$1;(statearr_22446_22464[(2)] = null);
(statearr_22446_22464[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22438 === (5)))
{var inst_22423 = (state_22437[(7)]);var inst_22425 = f.call(null,inst_22423);var state_22437__$1 = (function (){var statearr_22447 = state_22437;(statearr_22447[(8)] = inst_22425);
return statearr_22447;
})();var statearr_22448_22465 = state_22437__$1;(statearr_22448_22465[(2)] = true);
(statearr_22448_22465[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22438 === (10)))
{var inst_22433 = (state_22437[(2)]);var state_22437__$1 = state_22437;var statearr_22449_22466 = state_22437__$1;(statearr_22449_22466[(2)] = inst_22433);
(statearr_22449_22466[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22438 === (8)))
{var state_22437__$1 = state_22437;var statearr_22450_22467 = state_22437__$1;(statearr_22450_22467[(2)] = null);
(statearr_22450_22467[(1)] = (2));
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
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_22454 = [null,null,null,null,null,null,null,null,null];(statearr_22454[(0)] = state_machine__11462__auto__);
(statearr_22454[(1)] = (1));
return statearr_22454;
});
var state_machine__11462__auto____1 = (function (state_22437){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22437);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22455){if((e22455 instanceof Object))
{var ex__11465__auto__ = e22455;var statearr_22456_22468 = state_22437;(statearr_22456_22468[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22437);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22455;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22469 = state_22437;
state_22437 = G__22469;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22437){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_22457 = f__11518__auto__.call(null);(statearr_22457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_22457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
