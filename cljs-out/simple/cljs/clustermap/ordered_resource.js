// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj22619 = {};return obj22619;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11154__auto___22648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___22648,rq_ticket,this$__$1){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___22648,rq_ticket,this$__$1){
return (function (state_22634){var state_val_22635 = (state_22634[(1)]);if((state_val_22635 === (6)))
{var inst_22626 = (state_22634[(2)]);var state_22634__$1 = state_22634;var statearr_22636_22649 = state_22634__$1;(statearr_22636_22649[(2)] = inst_22626);
(statearr_22636_22649[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22635 === (5)))
{var inst_22632 = (state_22634[(2)]);var state_22634__$1 = state_22634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22634__$1,inst_22632);
} else
{if((state_val_22635 === (4)))
{var inst_22628 = cljs.core.deref.call(null,self__.ticket);var inst_22629 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22628));var inst_22630 = console.log(inst_22629);var state_22634__$1 = state_22634;var statearr_22637_22650 = state_22634__$1;(statearr_22637_22650[(2)] = inst_22630);
(statearr_22637_22650[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22635 === (3)))
{var inst_22621 = (state_22634[(7)]);var state_22634__$1 = state_22634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22634__$1,(6),self__.response_chan,inst_22621);
} else
{if((state_val_22635 === (2)))
{var inst_22621 = (state_22634[(2)]);var inst_22622 = cljs.core.deref.call(null,self__.ticket);var inst_22623 = cljs.core._EQ_.call(null,rq_ticket,inst_22622);var state_22634__$1 = (function (){var statearr_22638 = state_22634;(statearr_22638[(7)] = inst_22621);
return statearr_22638;
})();if(inst_22623)
{var statearr_22639_22651 = state_22634__$1;(statearr_22639_22651[(1)] = (3));
} else
{var statearr_22640_22652 = state_22634__$1;(statearr_22640_22652[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22635 === (1)))
{var state_22634__$1 = state_22634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22634__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11154__auto___22648,rq_ticket,this$__$1))
;return ((function (switch__11098__auto__,c__11154__auto___22648,rq_ticket,this$__$1){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_22644 = [null,null,null,null,null,null,null,null];(statearr_22644[(0)] = state_machine__11099__auto__);
(statearr_22644[(1)] = (1));
return statearr_22644;
});
var state_machine__11099__auto____1 = (function (state_22634){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22634);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e22645){if((e22645 instanceof Object))
{var ex__11102__auto__ = e22645;var statearr_22646_22653 = state_22634;(statearr_22646_22653[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22634);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22654 = state_22634;
state_22634 = G__22654;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22634){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___22648,rq_ticket,this$__$1))
})();var state__11156__auto__ = (function (){var statearr_22647 = f__11155__auto__.call(null);(statearr_22647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___22648);
return statearr_22647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___22648,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__22655){
var ordered_resource = cljs.core.first(arglist__22655);
arglist__22655 = cljs.core.next(arglist__22655);
var api_fn = cljs.core.first(arglist__22655);
var args = cljs.core.rest(arglist__22655);
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
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_22711){var state_val_22712 = (state_22711[(1)]);if((state_val_22712 === (7)))
{var inst_22702 = (state_22711[(2)]);var state_22711__$1 = state_22711;if(cljs.core.truth_(inst_22702))
{var statearr_22713_22732 = state_22711__$1;(statearr_22713_22732[(1)] = (8));
} else
{var statearr_22714_22733 = state_22711__$1;(statearr_22714_22733[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22712 === (1)))
{var state_22711__$1 = state_22711;var statearr_22715_22734 = state_22711__$1;(statearr_22715_22734[(2)] = null);
(statearr_22715_22734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22712 === (4)))
{var inst_22697 = (state_22711[(7)]);var inst_22697__$1 = (state_22711[(2)]);var state_22711__$1 = (function (){var statearr_22716 = state_22711;(statearr_22716[(7)] = inst_22697__$1);
return statearr_22716;
})();if(cljs.core.truth_(inst_22697__$1))
{var statearr_22717_22735 = state_22711__$1;(statearr_22717_22735[(1)] = (5));
} else
{var statearr_22718_22736 = state_22711__$1;(statearr_22718_22736[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22712 === (6)))
{var state_22711__$1 = state_22711;var statearr_22719_22737 = state_22711__$1;(statearr_22719_22737[(2)] = null);
(statearr_22719_22737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22712 === (3)))
{var inst_22709 = (state_22711[(2)]);var state_22711__$1 = state_22711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22711__$1,inst_22709);
} else
{if((state_val_22712 === (2)))
{var inst_22695 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_22711__$1 = state_22711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22711__$1,(4),inst_22695);
} else
{if((state_val_22712 === (9)))
{var state_22711__$1 = state_22711;var statearr_22720_22738 = state_22711__$1;(statearr_22720_22738[(2)] = null);
(statearr_22720_22738[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22712 === (5)))
{var inst_22697 = (state_22711[(7)]);var inst_22699 = f.call(null,inst_22697);var state_22711__$1 = (function (){var statearr_22721 = state_22711;(statearr_22721[(8)] = inst_22699);
return statearr_22721;
})();var statearr_22722_22739 = state_22711__$1;(statearr_22722_22739[(2)] = true);
(statearr_22722_22739[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22712 === (10)))
{var inst_22707 = (state_22711[(2)]);var state_22711__$1 = state_22711;var statearr_22723_22740 = state_22711__$1;(statearr_22723_22740[(2)] = inst_22707);
(statearr_22723_22740[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22712 === (8)))
{var state_22711__$1 = state_22711;var statearr_22724_22741 = state_22711__$1;(statearr_22724_22741[(2)] = null);
(statearr_22724_22741[(1)] = (2));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_22728 = [null,null,null,null,null,null,null,null,null];(statearr_22728[(0)] = state_machine__11099__auto__);
(statearr_22728[(1)] = (1));
return statearr_22728;
});
var state_machine__11099__auto____1 = (function (state_22711){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22711);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e22729){if((e22729 instanceof Object))
{var ex__11102__auto__ = e22729;var statearr_22730_22742 = state_22711;(statearr_22730_22742[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22743 = state_22711;
state_22711 = G__22743;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22711){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_22731 = f__11155__auto__.call(null);(statearr_22731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_22731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
});
