// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj22393 = {};return obj22393;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11517__auto___22422 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___22422,rq_ticket,this$__$1){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___22422,rq_ticket,this$__$1){
return (function (state_22408){var state_val_22409 = (state_22408[(1)]);if((state_val_22409 === (6)))
{var inst_22400 = (state_22408[(2)]);var state_22408__$1 = state_22408;var statearr_22410_22423 = state_22408__$1;(statearr_22410_22423[(2)] = inst_22400);
(statearr_22410_22423[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22409 === (5)))
{var inst_22406 = (state_22408[(2)]);var state_22408__$1 = state_22408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22408__$1,inst_22406);
} else
{if((state_val_22409 === (4)))
{var inst_22402 = cljs.core.deref.call(null,self__.ticket);var inst_22403 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22402));var inst_22404 = console.log(inst_22403);var state_22408__$1 = state_22408;var statearr_22411_22424 = state_22408__$1;(statearr_22411_22424[(2)] = inst_22404);
(statearr_22411_22424[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22409 === (3)))
{var inst_22395 = (state_22408[(7)]);var state_22408__$1 = state_22408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22408__$1,(6),self__.response_chan,inst_22395);
} else
{if((state_val_22409 === (2)))
{var inst_22395 = (state_22408[(2)]);var inst_22396 = cljs.core.deref.call(null,self__.ticket);var inst_22397 = cljs.core._EQ_.call(null,rq_ticket,inst_22396);var state_22408__$1 = (function (){var statearr_22412 = state_22408;(statearr_22412[(7)] = inst_22395);
return statearr_22412;
})();if(inst_22397)
{var statearr_22413_22425 = state_22408__$1;(statearr_22413_22425[(1)] = (3));
} else
{var statearr_22414_22426 = state_22408__$1;(statearr_22414_22426[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22409 === (1)))
{var state_22408__$1 = state_22408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22408__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto___22422,rq_ticket,this$__$1))
;return ((function (switch__11461__auto__,c__11517__auto___22422,rq_ticket,this$__$1){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_22418 = [null,null,null,null,null,null,null,null];(statearr_22418[(0)] = state_machine__11462__auto__);
(statearr_22418[(1)] = (1));
return statearr_22418;
});
var state_machine__11462__auto____1 = (function (state_22408){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22408);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22419){if((e22419 instanceof Object))
{var ex__11465__auto__ = e22419;var statearr_22420_22427 = state_22408;(statearr_22420_22427[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22419;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22428 = state_22408;
state_22408 = G__22428;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22408){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___22422,rq_ticket,this$__$1))
})();var state__11519__auto__ = (function (){var statearr_22421 = f__11518__auto__.call(null);(statearr_22421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___22422);
return statearr_22421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___22422,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__22429){
var ordered_resource = cljs.core.first(arglist__22429);
arglist__22429 = cljs.core.next(arglist__22429);
var api_fn = cljs.core.first(arglist__22429);
var args = cljs.core.rest(arglist__22429);
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
return (function (state_22485){var state_val_22486 = (state_22485[(1)]);if((state_val_22486 === (7)))
{var inst_22476 = (state_22485[(2)]);var state_22485__$1 = state_22485;if(cljs.core.truth_(inst_22476))
{var statearr_22487_22506 = state_22485__$1;(statearr_22487_22506[(1)] = (8));
} else
{var statearr_22488_22507 = state_22485__$1;(statearr_22488_22507[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22486 === (1)))
{var state_22485__$1 = state_22485;var statearr_22489_22508 = state_22485__$1;(statearr_22489_22508[(2)] = null);
(statearr_22489_22508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22486 === (4)))
{var inst_22471 = (state_22485[(7)]);var inst_22471__$1 = (state_22485[(2)]);var state_22485__$1 = (function (){var statearr_22490 = state_22485;(statearr_22490[(7)] = inst_22471__$1);
return statearr_22490;
})();if(cljs.core.truth_(inst_22471__$1))
{var statearr_22491_22509 = state_22485__$1;(statearr_22491_22509[(1)] = (5));
} else
{var statearr_22492_22510 = state_22485__$1;(statearr_22492_22510[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22486 === (6)))
{var state_22485__$1 = state_22485;var statearr_22493_22511 = state_22485__$1;(statearr_22493_22511[(2)] = null);
(statearr_22493_22511[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22486 === (3)))
{var inst_22483 = (state_22485[(2)]);var state_22485__$1 = state_22485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22485__$1,inst_22483);
} else
{if((state_val_22486 === (2)))
{var inst_22469 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_22485__$1 = state_22485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22485__$1,(4),inst_22469);
} else
{if((state_val_22486 === (9)))
{var state_22485__$1 = state_22485;var statearr_22494_22512 = state_22485__$1;(statearr_22494_22512[(2)] = null);
(statearr_22494_22512[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22486 === (5)))
{var inst_22471 = (state_22485[(7)]);var inst_22473 = f.call(null,inst_22471);var state_22485__$1 = (function (){var statearr_22495 = state_22485;(statearr_22495[(8)] = inst_22473);
return statearr_22495;
})();var statearr_22496_22513 = state_22485__$1;(statearr_22496_22513[(2)] = true);
(statearr_22496_22513[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22486 === (10)))
{var inst_22481 = (state_22485[(2)]);var state_22485__$1 = state_22485;var statearr_22497_22514 = state_22485__$1;(statearr_22497_22514[(2)] = inst_22481);
(statearr_22497_22514[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22486 === (8)))
{var state_22485__$1 = state_22485;var statearr_22498_22515 = state_22485__$1;(statearr_22498_22515[(2)] = null);
(statearr_22498_22515[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_22502 = [null,null,null,null,null,null,null,null,null];(statearr_22502[(0)] = state_machine__11462__auto__);
(statearr_22502[(1)] = (1));
return statearr_22502;
});
var state_machine__11462__auto____1 = (function (state_22485){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22485);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22503){if((e22503 instanceof Object))
{var ex__11465__auto__ = e22503;var statearr_22504_22516 = state_22485;(statearr_22504_22516[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22503;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22517 = state_22485;
state_22485 = G__22517;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22485){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_22505 = f__11518__auto__.call(null);(statearr_22505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_22505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
