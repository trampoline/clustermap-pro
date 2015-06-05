// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj22533 = {};return obj22533;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11517__auto___22562 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___22562,rq_ticket,this$__$1){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___22562,rq_ticket,this$__$1){
return (function (state_22548){var state_val_22549 = (state_22548[(1)]);if((state_val_22549 === (6)))
{var inst_22540 = (state_22548[(2)]);var state_22548__$1 = state_22548;var statearr_22550_22563 = state_22548__$1;(statearr_22550_22563[(2)] = inst_22540);
(statearr_22550_22563[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22549 === (5)))
{var inst_22546 = (state_22548[(2)]);var state_22548__$1 = state_22548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22548__$1,inst_22546);
} else
{if((state_val_22549 === (4)))
{var inst_22542 = cljs.core.deref.call(null,self__.ticket);var inst_22543 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22542));var inst_22544 = console.log(inst_22543);var state_22548__$1 = state_22548;var statearr_22551_22564 = state_22548__$1;(statearr_22551_22564[(2)] = inst_22544);
(statearr_22551_22564[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22549 === (3)))
{var inst_22535 = (state_22548[(7)]);var state_22548__$1 = state_22548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22548__$1,(6),self__.response_chan,inst_22535);
} else
{if((state_val_22549 === (2)))
{var inst_22535 = (state_22548[(2)]);var inst_22536 = cljs.core.deref.call(null,self__.ticket);var inst_22537 = cljs.core._EQ_.call(null,rq_ticket,inst_22536);var state_22548__$1 = (function (){var statearr_22552 = state_22548;(statearr_22552[(7)] = inst_22535);
return statearr_22552;
})();if(inst_22537)
{var statearr_22553_22565 = state_22548__$1;(statearr_22553_22565[(1)] = (3));
} else
{var statearr_22554_22566 = state_22548__$1;(statearr_22554_22566[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22549 === (1)))
{var state_22548__$1 = state_22548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22548__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto___22562,rq_ticket,this$__$1))
;return ((function (switch__11461__auto__,c__11517__auto___22562,rq_ticket,this$__$1){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_22558 = [null,null,null,null,null,null,null,null];(statearr_22558[(0)] = state_machine__11462__auto__);
(statearr_22558[(1)] = (1));
return statearr_22558;
});
var state_machine__11462__auto____1 = (function (state_22548){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22548);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22559){if((e22559 instanceof Object))
{var ex__11465__auto__ = e22559;var statearr_22560_22567 = state_22548;(statearr_22560_22567[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22568 = state_22548;
state_22548 = G__22568;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22548){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___22562,rq_ticket,this$__$1))
})();var state__11519__auto__ = (function (){var statearr_22561 = f__11518__auto__.call(null);(statearr_22561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___22562);
return statearr_22561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___22562,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__22569){
var ordered_resource = cljs.core.first(arglist__22569);
arglist__22569 = cljs.core.next(arglist__22569);
var api_fn = cljs.core.first(arglist__22569);
var args = cljs.core.rest(arglist__22569);
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
return (function (state_22625){var state_val_22626 = (state_22625[(1)]);if((state_val_22626 === (7)))
{var inst_22616 = (state_22625[(2)]);var state_22625__$1 = state_22625;if(cljs.core.truth_(inst_22616))
{var statearr_22627_22646 = state_22625__$1;(statearr_22627_22646[(1)] = (8));
} else
{var statearr_22628_22647 = state_22625__$1;(statearr_22628_22647[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22626 === (1)))
{var state_22625__$1 = state_22625;var statearr_22629_22648 = state_22625__$1;(statearr_22629_22648[(2)] = null);
(statearr_22629_22648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22626 === (4)))
{var inst_22611 = (state_22625[(7)]);var inst_22611__$1 = (state_22625[(2)]);var state_22625__$1 = (function (){var statearr_22630 = state_22625;(statearr_22630[(7)] = inst_22611__$1);
return statearr_22630;
})();if(cljs.core.truth_(inst_22611__$1))
{var statearr_22631_22649 = state_22625__$1;(statearr_22631_22649[(1)] = (5));
} else
{var statearr_22632_22650 = state_22625__$1;(statearr_22632_22650[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22626 === (6)))
{var state_22625__$1 = state_22625;var statearr_22633_22651 = state_22625__$1;(statearr_22633_22651[(2)] = null);
(statearr_22633_22651[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22626 === (3)))
{var inst_22623 = (state_22625[(2)]);var state_22625__$1 = state_22625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22625__$1,inst_22623);
} else
{if((state_val_22626 === (2)))
{var inst_22609 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_22625__$1 = state_22625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22625__$1,(4),inst_22609);
} else
{if((state_val_22626 === (9)))
{var state_22625__$1 = state_22625;var statearr_22634_22652 = state_22625__$1;(statearr_22634_22652[(2)] = null);
(statearr_22634_22652[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22626 === (5)))
{var inst_22611 = (state_22625[(7)]);var inst_22613 = f.call(null,inst_22611);var state_22625__$1 = (function (){var statearr_22635 = state_22625;(statearr_22635[(8)] = inst_22613);
return statearr_22635;
})();var statearr_22636_22653 = state_22625__$1;(statearr_22636_22653[(2)] = true);
(statearr_22636_22653[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22626 === (10)))
{var inst_22621 = (state_22625[(2)]);var state_22625__$1 = state_22625;var statearr_22637_22654 = state_22625__$1;(statearr_22637_22654[(2)] = inst_22621);
(statearr_22637_22654[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22626 === (8)))
{var state_22625__$1 = state_22625;var statearr_22638_22655 = state_22625__$1;(statearr_22638_22655[(2)] = null);
(statearr_22638_22655[(1)] = (2));
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
var state_machine__11462__auto____0 = (function (){var statearr_22642 = [null,null,null,null,null,null,null,null,null];(statearr_22642[(0)] = state_machine__11462__auto__);
(statearr_22642[(1)] = (1));
return statearr_22642;
});
var state_machine__11462__auto____1 = (function (state_22625){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_22625);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e22643){if((e22643 instanceof Object))
{var ex__11465__auto__ = e22643;var statearr_22644_22656 = state_22625;(statearr_22644_22656[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22643;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22657 = state_22625;
state_22625 = G__22657;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_22625){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_22625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_22645 = f__11518__auto__.call(null);(statearr_22645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_22645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
