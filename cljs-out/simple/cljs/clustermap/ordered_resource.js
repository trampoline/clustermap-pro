// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj22314 = {};return obj22314;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11517__auto___22343 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___22343,rq_ticket,this$__$1){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___22343,rq_ticket,this$__$1){
return (function (state_22329){var state_val_22330 = (state_22329[(1)]);if((state_val_22330 === (6)))
{var inst_22321 = (state_22329[(2)]);var state_22329__$1 = state_22329;var statearr_22331_22344 = state_22329__$1;(statearr_22331_22344[(2)] = inst_22321);
(statearr_22331_22344[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22330 === (5)))
{var inst_22327 = (state_22329[(2)]);var state_22329__$1 = state_22329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22329__$1,inst_22327);
} else
{if((state_val_22330 === (4)))
{var inst_22323 = cljs.core.deref.call(null,self__.ticket);var inst_22324 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22323));var inst_22325 = console.log(inst_22324);var state_22329__$1 = state_22329;var statearr_22332_22345 = state_22329__$1;(statearr_22332_22345[(2)] = inst_22325);
(statearr_22332_22345[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22330 === (3)))
{var inst_22316 = (state_22329[(7)]);var state_22329__$1 = state_22329;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22329__$1,(6),self__.response_chan,inst_22316);
} else
{if((state_val_22330 === (2)))
{var inst_22316 = (state_22329[(2)]);var inst_22317 = cljs.core.deref.call(null,self__.ticket);var inst_22318 = cljs.core._EQ_.call(null,rq_ticket,inst_22317);var state_22329__$1 = (function (){var statearr_22333 = state_22329;(statearr_22333[(7)] = inst_22316);
return statearr_22333;
})();if(inst_22318)
{var statearr_22334_22346 = state_22329__$1;(statearr_22334_22346[(1)] = (3));
} else
{var statearr_22335_22347 = state_22329__$1;(statearr_22335_22347[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22330 === (1)))
{var state_22329__$1 = state_22329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22329__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto___22343,rq_ticket,this$__$1))
;return ((function (switch__11461__auto__,c__11517__auto___22343,rq_ticket,this$__$1){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_22339 = [null,null,null,null,null,null,null,null];(statearr_22339[(0)] = state_machine__11462__auto__);
(statearr_22339[(1)] = (1));
return statearr_22339;
});
var state_machine__11462__auto____1 = (function (state_22329){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22329);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22340){if((e22340 instanceof Object))
{var ex__11465__auto__ = e22340;var statearr_22341_22348 = state_22329;(statearr_22341_22348[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22340;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22349 = state_22329;
state_22329 = G__22349;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22329){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___22343,rq_ticket,this$__$1))
})();var state__11519__auto__ = (function (){var statearr_22342 = f__11518__auto__.call(null);(statearr_22342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___22343);
return statearr_22342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___22343,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__22350){
var ordered_resource = cljs.core.first(arglist__22350);
arglist__22350 = cljs.core.next(arglist__22350);
var api_fn = cljs.core.first(arglist__22350);
var args = cljs.core.rest(arglist__22350);
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
return (function (state_22406){var state_val_22407 = (state_22406[(1)]);if((state_val_22407 === (7)))
{var inst_22397 = (state_22406[(2)]);var state_22406__$1 = state_22406;if(cljs.core.truth_(inst_22397))
{var statearr_22408_22427 = state_22406__$1;(statearr_22408_22427[(1)] = (8));
} else
{var statearr_22409_22428 = state_22406__$1;(statearr_22409_22428[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22407 === (1)))
{var state_22406__$1 = state_22406;var statearr_22410_22429 = state_22406__$1;(statearr_22410_22429[(2)] = null);
(statearr_22410_22429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22407 === (4)))
{var inst_22392 = (state_22406[(7)]);var inst_22392__$1 = (state_22406[(2)]);var state_22406__$1 = (function (){var statearr_22411 = state_22406;(statearr_22411[(7)] = inst_22392__$1);
return statearr_22411;
})();if(cljs.core.truth_(inst_22392__$1))
{var statearr_22412_22430 = state_22406__$1;(statearr_22412_22430[(1)] = (5));
} else
{var statearr_22413_22431 = state_22406__$1;(statearr_22413_22431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22407 === (6)))
{var state_22406__$1 = state_22406;var statearr_22414_22432 = state_22406__$1;(statearr_22414_22432[(2)] = null);
(statearr_22414_22432[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22407 === (3)))
{var inst_22404 = (state_22406[(2)]);var state_22406__$1 = state_22406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22406__$1,inst_22404);
} else
{if((state_val_22407 === (2)))
{var inst_22390 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_22406__$1 = state_22406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22406__$1,(4),inst_22390);
} else
{if((state_val_22407 === (9)))
{var state_22406__$1 = state_22406;var statearr_22415_22433 = state_22406__$1;(statearr_22415_22433[(2)] = null);
(statearr_22415_22433[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22407 === (5)))
{var inst_22392 = (state_22406[(7)]);var inst_22394 = f.call(null,inst_22392);var state_22406__$1 = (function (){var statearr_22416 = state_22406;(statearr_22416[(8)] = inst_22394);
return statearr_22416;
})();var statearr_22417_22434 = state_22406__$1;(statearr_22417_22434[(2)] = true);
(statearr_22417_22434[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22407 === (10)))
{var inst_22402 = (state_22406[(2)]);var state_22406__$1 = state_22406;var statearr_22418_22435 = state_22406__$1;(statearr_22418_22435[(2)] = inst_22402);
(statearr_22418_22435[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22407 === (8)))
{var state_22406__$1 = state_22406;var statearr_22419_22436 = state_22406__$1;(statearr_22419_22436[(2)] = null);
(statearr_22419_22436[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_22423 = [null,null,null,null,null,null,null,null,null];(statearr_22423[(0)] = state_machine__11462__auto__);
(statearr_22423[(1)] = (1));
return statearr_22423;
});
var state_machine__11462__auto____1 = (function (state_22406){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22406);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22424){if((e22424 instanceof Object))
{var ex__11465__auto__ = e22424;var statearr_22425_22437 = state_22406;(statearr_22425_22437[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22406);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22438 = state_22406;
state_22406 = G__22438;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22406){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_22426 = f__11518__auto__.call(null);(statearr_22426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_22426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
