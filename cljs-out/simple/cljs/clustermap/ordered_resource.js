// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj22899 = {};return obj22899;
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
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__11154__auto___22928 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___22928,rq_ticket,this$__$1){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___22928,rq_ticket,this$__$1){
return (function (state_22914){var state_val_22915 = (state_22914[(1)]);if((state_val_22915 === (6)))
{var inst_22906 = (state_22914[(2)]);var state_22914__$1 = state_22914;var statearr_22916_22929 = state_22914__$1;(statearr_22916_22929[(2)] = inst_22906);
(statearr_22916_22929[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (5)))
{var inst_22912 = (state_22914[(2)]);var state_22914__$1 = state_22914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22914__$1,inst_22912);
} else
{if((state_val_22915 === (4)))
{var inst_22908 = cljs.core.deref.call(null,self__.ticket);var inst_22909 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22908));var inst_22910 = console.log(inst_22909);var state_22914__$1 = state_22914;var statearr_22917_22930 = state_22914__$1;(statearr_22917_22930[(2)] = inst_22910);
(statearr_22917_22930[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (3)))
{var inst_22901 = (state_22914[(7)]);var state_22914__$1 = state_22914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22914__$1,(6),self__.response_chan,inst_22901);
} else
{if((state_val_22915 === (2)))
{var inst_22901 = (state_22914[(2)]);var inst_22902 = cljs.core.deref.call(null,self__.ticket);var inst_22903 = cljs.core._EQ_.call(null,rq_ticket,inst_22902);var state_22914__$1 = (function (){var statearr_22918 = state_22914;(statearr_22918[(7)] = inst_22901);
return statearr_22918;
})();if(inst_22903)
{var statearr_22919_22931 = state_22914__$1;(statearr_22919_22931[(1)] = (3));
} else
{var statearr_22920_22932 = state_22914__$1;(statearr_22920_22932[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22915 === (1)))
{var state_22914__$1 = state_22914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22914__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__11154__auto___22928,rq_ticket,this$__$1))
;return ((function (switch__11098__auto__,c__11154__auto___22928,rq_ticket,this$__$1){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_22924 = [null,null,null,null,null,null,null,null];(statearr_22924[(0)] = state_machine__11099__auto__);
(statearr_22924[(1)] = (1));
return statearr_22924;
});
var state_machine__11099__auto____1 = (function (state_22914){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22914);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e22925){if((e22925 instanceof Object))
{var ex__11102__auto__ = e22925;var statearr_22926_22933 = state_22914;(statearr_22926_22933[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22914);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22925;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22934 = state_22914;
state_22914 = G__22934;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22914){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___22928,rq_ticket,this$__$1))
})();var state__11156__auto__ = (function (){var statearr_22927 = f__11155__auto__.call(null);(statearr_22927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___22928);
return statearr_22927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___22928,rq_ticket,this$__$1))
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
api_call.cljs$lang$applyTo = (function (arglist__22935){
var ordered_resource = cljs.core.first(arglist__22935);
arglist__22935 = cljs.core.next(arglist__22935);
var api_fn = cljs.core.first(arglist__22935);
var args = cljs.core.rest(arglist__22935);
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
return (function (state_22991){var state_val_22992 = (state_22991[(1)]);if((state_val_22992 === (7)))
{var inst_22982 = (state_22991[(2)]);var state_22991__$1 = state_22991;if(cljs.core.truth_(inst_22982))
{var statearr_22993_23012 = state_22991__$1;(statearr_22993_23012[(1)] = (8));
} else
{var statearr_22994_23013 = state_22991__$1;(statearr_22994_23013[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22992 === (1)))
{var state_22991__$1 = state_22991;var statearr_22995_23014 = state_22991__$1;(statearr_22995_23014[(2)] = null);
(statearr_22995_23014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22992 === (4)))
{var inst_22977 = (state_22991[(7)]);var inst_22977__$1 = (state_22991[(2)]);var state_22991__$1 = (function (){var statearr_22996 = state_22991;(statearr_22996[(7)] = inst_22977__$1);
return statearr_22996;
})();if(cljs.core.truth_(inst_22977__$1))
{var statearr_22997_23015 = state_22991__$1;(statearr_22997_23015[(1)] = (5));
} else
{var statearr_22998_23016 = state_22991__$1;(statearr_22998_23016[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22992 === (6)))
{var state_22991__$1 = state_22991;var statearr_22999_23017 = state_22991__$1;(statearr_22999_23017[(2)] = null);
(statearr_22999_23017[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22992 === (3)))
{var inst_22989 = (state_22991[(2)]);var state_22991__$1 = state_22991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22991__$1,inst_22989);
} else
{if((state_val_22992 === (2)))
{var inst_22975 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_22991__$1 = state_22991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22991__$1,(4),inst_22975);
} else
{if((state_val_22992 === (9)))
{var state_22991__$1 = state_22991;var statearr_23000_23018 = state_22991__$1;(statearr_23000_23018[(2)] = null);
(statearr_23000_23018[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22992 === (5)))
{var inst_22977 = (state_22991[(7)]);var inst_22979 = f.call(null,inst_22977);var state_22991__$1 = (function (){var statearr_23001 = state_22991;(statearr_23001[(8)] = inst_22979);
return statearr_23001;
})();var statearr_23002_23019 = state_22991__$1;(statearr_23002_23019[(2)] = true);
(statearr_23002_23019[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22992 === (10)))
{var inst_22987 = (state_22991[(2)]);var state_22991__$1 = state_22991;var statearr_23003_23020 = state_22991__$1;(statearr_23003_23020[(2)] = inst_22987);
(statearr_23003_23020[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22992 === (8)))
{var state_22991__$1 = state_22991;var statearr_23004_23021 = state_22991__$1;(statearr_23004_23021[(2)] = null);
(statearr_23004_23021[(1)] = (2));
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
var state_machine__11099__auto____0 = (function (){var statearr_23008 = [null,null,null,null,null,null,null,null,null];(statearr_23008[(0)] = state_machine__11099__auto__);
(statearr_23008[(1)] = (1));
return statearr_23008;
});
var state_machine__11099__auto____1 = (function (state_22991){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_22991);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e23009){if((e23009 instanceof Object))
{var ex__11102__auto__ = e23009;var statearr_23010_23022 = state_22991;(statearr_23010_23022[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23009;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23023 = state_22991;
state_22991 = G__23023;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_22991){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_22991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_23011 = f__11155__auto__.call(null);(statearr_23011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_23011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
});
