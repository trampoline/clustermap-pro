// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__22478){var map__22482 = p__22478;var map__22482__$1 = ((cljs.core.seq_QMARK_.call(null,map__22482))?cljs.core.apply.call(null,cljs.core.hash_map,map__22482):map__22482);var opts = map__22482__$1;var content = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22482,map__22482__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22482,map__22482__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22482,map__22482__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22482,map__22482__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__22484 = method;var G__22484__$1 = (((G__22484 == null))?null:cljs.core.name.call(null,G__22484));var G__22484__$2 = (((G__22484__$1 == null))?null:clojure.string.upper_case.call(null,G__22484__$1));return G__22484__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22478 = null;if (arguments.length > 1) {
  p__22478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22478);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22485){
var url = cljs.core.first(arglist__22485);
var p__22478 = cljs.core.rest(arglist__22485);
return AJAX__delegate(url,p__22478);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22486){var map__22488 = p__22486;var map__22488__$1 = ((cljs.core.seq_QMARK_.call(null,map__22488))?cljs.core.apply.call(null,cljs.core.hash_map,map__22488):map__22488);var opts = map__22488__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22486 = null;if (arguments.length > 1) {
  p__22486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22486);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22489){
var url = cljs.core.first(arglist__22489);
var p__22486 = cljs.core.rest(arglist__22489);
return GET__delegate(url,p__22486);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22490){var map__22492 = p__22490;var map__22492__$1 = ((cljs.core.seq_QMARK_.call(null,map__22492))?cljs.core.apply.call(null,cljs.core.hash_map,map__22492):map__22492);var opts = map__22492__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22490 = null;if (arguments.length > 2) {
  p__22490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22490);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22493){
var url = cljs.core.first(arglist__22493);
arglist__22493 = cljs.core.next(arglist__22493);
var content = cljs.core.first(arglist__22493);
var p__22490 = cljs.core.rest(arglist__22493);
return POST__delegate(url,content,p__22490);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22494){var map__22496 = p__22494;var map__22496__$1 = ((cljs.core.seq_QMARK_.call(null,map__22496))?cljs.core.apply.call(null,cljs.core.hash_map,map__22496):map__22496);var opts = map__22496__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22494 = null;if (arguments.length > 2) {
  p__22494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22494);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22497){
var url = cljs.core.first(arglist__22497);
arglist__22497 = cljs.core.next(arglist__22497);
var content = cljs.core.first(arglist__22497);
var p__22494 = cljs.core.rest(arglist__22497);
return PUT__delegate(url,content,p__22494);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_22632){var state_val_22633 = (state_22632[(1)]);if((state_val_22633 === (7)))
{var inst_22589 = (state_22632[(7)]);var inst_22588 = (state_22632[(2)]);var inst_22589__$1 = cljs.core.nth.call(null,inst_22588,(0),null);var inst_22590 = cljs.core.nth.call(null,inst_22588,(1),null);var inst_22591 = cljs.core.sequential_QMARK_.call(null,inst_22589__$1);var state_22632__$1 = (function (){var statearr_22634 = state_22632;(statearr_22634[(8)] = inst_22590);
(statearr_22634[(7)] = inst_22589__$1);
return statearr_22634;
})();if(inst_22591)
{var statearr_22635_22670 = state_22632__$1;(statearr_22635_22670[(1)] = (8));
} else
{var statearr_22636_22671 = state_22632__$1;(statearr_22636_22671[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (20)))
{var inst_22589 = (state_22632[(7)]);var state_22632__$1 = state_22632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22632__$1,(23),inst_22589);
} else
{if((state_val_22633 === (1)))
{var state_22632__$1 = state_22632;var statearr_22637_22672 = state_22632__$1;(statearr_22637_22672[(2)] = null);
(statearr_22637_22672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (4)))
{var state_22632__$1 = state_22632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22632__$1,(7),ocomm);
} else
{if((state_val_22633 === (15)))
{var inst_22612 = (state_22632[(2)]);var state_22632__$1 = state_22632;var statearr_22638_22673 = state_22632__$1;(statearr_22638_22673[(2)] = inst_22612);
(statearr_22638_22673[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (21)))
{var state_22632__$1 = state_22632;var statearr_22639_22674 = state_22632__$1;(statearr_22639_22674[(2)] = null);
(statearr_22639_22674[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (13)))
{var inst_22595 = (state_22632[(9)]);var state_22632__$1 = state_22632;var statearr_22640_22675 = state_22632__$1;(statearr_22640_22675[(2)] = inst_22595);
(statearr_22640_22675[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (22)))
{var inst_22621 = (state_22632[(2)]);var state_22632__$1 = state_22632;var statearr_22641_22676 = state_22632__$1;(statearr_22641_22676[(2)] = inst_22621);
(statearr_22641_22676[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (6)))
{var inst_22628 = (state_22632[(2)]);var state_22632__$1 = state_22632;var statearr_22642_22677 = state_22632__$1;(statearr_22642_22677[(2)] = inst_22628);
(statearr_22642_22677[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (17)))
{var state_22632__$1 = state_22632;var statearr_22643_22678 = state_22632__$1;(statearr_22643_22678[(2)] = null);
(statearr_22643_22678[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (3)))
{var inst_22630 = (state_22632[(2)]);var state_22632__$1 = state_22632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22632__$1,inst_22630);
} else
{if((state_val_22633 === (12)))
{var inst_22614 = (state_22632[(2)]);var state_22632__$1 = state_22632;var statearr_22644_22679 = state_22632__$1;(statearr_22644_22679[(2)] = inst_22614);
(statearr_22644_22679[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (2)))
{var state_22632__$1 = state_22632;var statearr_22645_22680 = state_22632__$1;(statearr_22645_22680[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (23)))
{var inst_22618 = (state_22632[(2)]);var state_22632__$1 = state_22632;var statearr_22647_22681 = state_22632__$1;(statearr_22647_22681[(2)] = inst_22618);
(statearr_22647_22681[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (19)))
{var inst_22605 = (state_22632[(2)]);var state_22632__$1 = state_22632;var statearr_22648_22682 = state_22632__$1;(statearr_22648_22682[(2)] = inst_22605);
(statearr_22648_22682[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (11)))
{var inst_22594 = (state_22632[(10)]);var inst_22597 = cljs.core.empty_QMARK_.call(null,inst_22594);var state_22632__$1 = state_22632;if(inst_22597)
{var statearr_22649_22683 = state_22632__$1;(statearr_22649_22683[(1)] = (13));
} else
{var statearr_22650_22684 = state_22632__$1;(statearr_22650_22684[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (9)))
{var inst_22589 = (state_22632[(7)]);var state_22632__$1 = state_22632;if(cljs.core.truth_(inst_22589))
{var statearr_22651_22685 = state_22632__$1;(statearr_22651_22685[(1)] = (20));
} else
{var statearr_22652_22686 = state_22632__$1;(statearr_22652_22686[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (5)))
{var state_22632__$1 = state_22632;var statearr_22653_22687 = state_22632__$1;(statearr_22653_22687[(2)] = null);
(statearr_22653_22687[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (14)))
{var inst_22594 = (state_22632[(10)]);var inst_22600 = cljs.core.rest.call(null,inst_22594);var inst_22601 = cljs.core.first.call(null,inst_22594);var state_22632__$1 = (function (){var statearr_22654 = state_22632;(statearr_22654[(11)] = inst_22600);
return statearr_22654;
})();if(cljs.core.truth_(inst_22601))
{var statearr_22655_22688 = state_22632__$1;(statearr_22655_22688[(1)] = (16));
} else
{var statearr_22656_22689 = state_22632__$1;(statearr_22656_22689[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (16)))
{var inst_22594 = (state_22632[(10)]);var inst_22603 = cljs.core.first.call(null,inst_22594);var state_22632__$1 = state_22632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22632__$1,(19),inst_22603);
} else
{if((state_val_22633 === (10)))
{var inst_22590 = (state_22632[(8)]);var inst_22623 = (state_22632[(2)]);var inst_22624 = cljs.core.apply.call(null,handler,inst_22623,inst_22590);var state_22632__$1 = (function (){var statearr_22657 = state_22632;(statearr_22657[(12)] = inst_22624);
return statearr_22657;
})();var statearr_22658_22690 = state_22632__$1;(statearr_22658_22690[(2)] = null);
(statearr_22658_22690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (18)))
{var inst_22595 = (state_22632[(9)]);var inst_22600 = (state_22632[(11)]);var inst_22608 = (state_22632[(2)]);var inst_22609 = cljs.core.conj.call(null,inst_22595,inst_22608);var inst_22594 = inst_22600;var inst_22595__$1 = inst_22609;var state_22632__$1 = (function (){var statearr_22659 = state_22632;(statearr_22659[(9)] = inst_22595__$1);
(statearr_22659[(10)] = inst_22594);
return statearr_22659;
})();var statearr_22660_22691 = state_22632__$1;(statearr_22660_22691[(2)] = null);
(statearr_22660_22691[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22633 === (8)))
{var inst_22589 = (state_22632[(7)]);var inst_22593 = cljs.core.PersistentVector.EMPTY;var inst_22594 = inst_22589;var inst_22595 = inst_22593;var state_22632__$1 = (function (){var statearr_22661 = state_22632;(statearr_22661[(9)] = inst_22595);
(statearr_22661[(10)] = inst_22594);
return statearr_22661;
})();var statearr_22662_22692 = state_22632__$1;(statearr_22662_22692[(2)] = null);
(statearr_22662_22692[(1)] = (11));
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
}
}
}
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22666 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22666[(0)] = state_machine__11242__auto__);
(statearr_22666[(1)] = (1));
return statearr_22666;
});
var state_machine__11242__auto____1 = (function (state_22632){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22632);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22667){if((e22667 instanceof Object))
{var ex__11245__auto__ = e22667;var statearr_22668_22693 = state_22632;(statearr_22668_22693[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22632);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22667;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22694 = state_22632;
state_22632 = G__22694;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22632){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_22669 = f__11298__auto__.call(null);(statearr_22669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__22697__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22696 = rseq;var rcomm = cljs.core.nth.call(null,vec__22696,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22696,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22697 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22697__delegate.call(this,req_args);};
G__22697.cljs$lang$maxFixedArity = 0;
G__22697.cljs$lang$applyTo = (function (arglist__22698){
var req_args = cljs.core.seq(arglist__22698);
return G__22697__delegate(req_args);
});
G__22697.cljs$core$IFn$_invoke$arity$variadic = G__22697__delegate;
return G__22697;
})()
;
;})(ocomm,_))
});
/**
* implements last-call-wins aync api-call semantics, discarding results from
* any earlier api calls
* - in-flight-atom : an atom used to match received results to calls
* - valch : a single-value channel eventually containing one api-call result
*/
clustermap.api.lastcall_method_impl = (function lastcall_method_impl(in_flight_atom,valch){var rx = cljs.core.async.chan.call(null);cljs.core.reset_BANG_.call(null,in_flight_atom,valch);
var c__11297__auto___22769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___22769,rx){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___22769,rx){
return (function (state_22750){var state_val_22751 = (state_22750[(1)]);if((state_val_22751 === (8)))
{var inst_22746 = (state_22750[(2)]);var inst_22747 = cljs.core.async.close_BANG_.call(null,valch);var inst_22748 = cljs.core.async.close_BANG_.call(null,rx);var state_22750__$1 = (function (){var statearr_22752 = state_22750;(statearr_22752[(7)] = inst_22747);
(statearr_22752[(8)] = inst_22746);
return statearr_22752;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22750__$1,inst_22748);
} else
{if((state_val_22751 === (7)))
{var state_22750__$1 = state_22750;var statearr_22753_22770 = state_22750__$1;(statearr_22753_22770[(2)] = null);
(statearr_22753_22770[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22751 === (6)))
{var inst_22735 = (state_22750[(9)]);var inst_22743 = cljs.core.async.put_BANG_.call(null,rx,inst_22735);var state_22750__$1 = state_22750;var statearr_22754_22771 = state_22750__$1;(statearr_22754_22771[(2)] = inst_22743);
(statearr_22754_22771[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22751 === (5)))
{var inst_22741 = (state_22750[(2)]);var state_22750__$1 = state_22750;if(cljs.core.truth_(inst_22741))
{var statearr_22755_22772 = state_22750__$1;(statearr_22755_22772[(1)] = (6));
} else
{var statearr_22756_22773 = state_22750__$1;(statearr_22756_22773[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22751 === (4)))
{var inst_22735 = (state_22750[(9)]);var state_22750__$1 = state_22750;var statearr_22757_22774 = state_22750__$1;(statearr_22757_22774[(2)] = inst_22735);
(statearr_22757_22774[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22751 === (3)))
{var inst_22737 = cljs.core.deref.call(null,in_flight_atom);var inst_22738 = cljs.core._EQ_.call(null,inst_22737,valch);var state_22750__$1 = state_22750;var statearr_22758_22775 = state_22750__$1;(statearr_22758_22775[(2)] = inst_22738);
(statearr_22758_22775[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22751 === (2)))
{var inst_22735 = (state_22750[(9)]);var inst_22735__$1 = (state_22750[(2)]);var state_22750__$1 = (function (){var statearr_22759 = state_22750;(statearr_22759[(9)] = inst_22735__$1);
return statearr_22759;
})();if(cljs.core.truth_(inst_22735__$1))
{var statearr_22760_22776 = state_22750__$1;(statearr_22760_22776[(1)] = (3));
} else
{var statearr_22761_22777 = state_22750__$1;(statearr_22761_22777[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22751 === (1)))
{var state_22750__$1 = state_22750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22750__$1,(2),valch);
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
});})(c__11297__auto___22769,rx))
;return ((function (switch__11241__auto__,c__11297__auto___22769,rx){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22765 = [null,null,null,null,null,null,null,null,null,null];(statearr_22765[(0)] = state_machine__11242__auto__);
(statearr_22765[(1)] = (1));
return statearr_22765;
});
var state_machine__11242__auto____1 = (function (state_22750){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22750);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22766){if((e22766 instanceof Object))
{var ex__11245__auto__ = e22766;var statearr_22767_22778 = state_22750;(statearr_22767_22778[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22766;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22779 = state_22750;
state_22750 = G__22779;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22750){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___22769,rx))
})();var state__11299__auto__ = (function (){var statearr_22768 = f__11298__auto__.call(null);(statearr_22768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___22769);
return statearr_22768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___22769,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,ch){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,ch){
return (function (state_22797){var state_val_22798 = (state_22797[(1)]);if((state_val_22798 === (2)))
{var inst_22794 = (state_22797[(2)]);var inst_22795 = console.log(inst_22794);var state_22797__$1 = state_22797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22797__$1,inst_22795);
} else
{if((state_val_22798 === (1)))
{var state_22797__$1 = state_22797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22797__$1,(2),ch);
} else
{return null;
}
}
});})(c__11297__auto__,ch))
;return ((function (switch__11241__auto__,c__11297__auto__,ch){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22802 = [null,null,null,null,null,null,null];(statearr_22802[(0)] = state_machine__11242__auto__);
(statearr_22802[(1)] = (1));
return statearr_22802;
});
var state_machine__11242__auto____1 = (function (state_22797){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22797);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22803){if((e22803 instanceof Object))
{var ex__11245__auto__ = e22803;var statearr_22804_22806 = state_22797;(statearr_22804_22806[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22803;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22807 = state_22797;
state_22797 = G__22807;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22797){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,ch))
})();var state__11299__auto__ = (function (){var statearr_22805 = f__11298__auto__.call(null);(statearr_22805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,ch))
);
return c__11297__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__22808){
var f = cljs.core.first(arglist__22808);
var args = cljs.core.rest(arglist__22808);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22811){var vec__22812 = p__22811;var k = cljs.core.nth.call(null,vec__22812,(0),null);var v = cljs.core.nth.call(null,vec__22812,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11297__auto___22839 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___22839,r){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___22839,r){
return (function (state_22830){var state_val_22831 = (state_22830[(1)]);if((state_val_22831 === (2)))
{var inst_22827 = (state_22830[(2)]);var inst_22828 = cljs.core.reset_BANG_.call(null,r,inst_22827);var state_22830__$1 = state_22830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22830__$1,inst_22828);
} else
{if((state_val_22831 === (1)))
{var state_22830__$1 = state_22830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22830__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto___22839,r))
;return ((function (switch__11241__auto__,c__11297__auto___22839,r){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22835 = [null,null,null,null,null,null,null];(statearr_22835[(0)] = state_machine__11242__auto__);
(statearr_22835[(1)] = (1));
return statearr_22835;
});
var state_machine__11242__auto____1 = (function (state_22830){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22830);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22836){if((e22836 instanceof Object))
{var ex__11245__auto__ = e22836;var statearr_22837_22840 = state_22830;(statearr_22837_22840[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22830);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22836;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22841 = state_22830;
state_22830 = G__22841;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22830){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___22839,r))
})();var state__11299__auto__ = (function (){var statearr_22838 = f__11298__auto__.call(null);(statearr_22838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___22839);
return statearr_22838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___22839,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__22842){
var id = cljs.core.first(arglist__22842);
arglist__22842 = cljs.core.next(arglist__22842);
var tolerance = cljs.core.first(arglist__22842);
var opts = cljs.core.rest(arglist__22842);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22843){
var id = cljs.core.first(arglist__22843);
var opts = cljs.core.rest(arglist__22843);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__22844){
var ids = cljs.core.first(arglist__22844);
arglist__22844 = cljs.core.next(arglist__22844);
var tolerance = cljs.core.first(arglist__22844);
var opts = cljs.core.rest(arglist__22844);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__22845){var map__22847 = p__22845;var map__22847__$1 = ((cljs.core.seq_QMARK_.call(null,map__22847))?cljs.core.apply.call(null,cljs.core.hash_map,map__22847):map__22847);var opts = map__22847__$1;var boundaryline_ids = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__22845 = null;if (arguments.length > 3) {
  p__22845 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__22845);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__22848){
var collection_id = cljs.core.first(arglist__22848);
arglist__22848 = cljs.core.next(arglist__22848);
var tolerance = cljs.core.first(arglist__22848);
arglist__22848 = cljs.core.next(arglist__22848);
var bounds = cljs.core.first(arglist__22848);
var p__22845 = cljs.core.rest(arglist__22848);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__22845);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__22849){var vec__22851 = p__22849;var type_ids = cljs.core.nth.call(null,vec__22851,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__22849 = null;if (arguments.length > 8) {
  p__22849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__22849);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22852){
var index = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var type = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var blcoll = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var attr = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var filter = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var bounds = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var scale_attr = cljs.core.first(arglist__22852);
arglist__22852 = cljs.core.next(arglist__22852);
var post_scale_factor = cljs.core.first(arglist__22852);
var p__22849 = cljs.core.rest(arglist__22852);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__22849);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__22853){var map__22855 = p__22853;var map__22855__$1 = ((cljs.core.seq_QMARK_.call(null,map__22855))?cljs.core.apply.call(null,cljs.core.hash_map,map__22855):map__22855);var q = map__22855__$1;var stats_attr = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__22855__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__22856){var vec__22858 = p__22856;var type_ids = cljs.core.nth.call(null,vec__22858,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__22856 = null;if (arguments.length > 5) {
  p__22856 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__22856);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__22859){
var index = cljs.core.first(arglist__22859);
arglist__22859 = cljs.core.next(arglist__22859);
var type = cljs.core.first(arglist__22859);
arglist__22859 = cljs.core.next(arglist__22859);
var statsattrs = cljs.core.first(arglist__22859);
arglist__22859 = cljs.core.next(arglist__22859);
var filter = cljs.core.first(arglist__22859);
arglist__22859 = cljs.core.next(arglist__22859);
var bounds = cljs.core.first(arglist__22859);
var p__22856 = cljs.core.rest(arglist__22859);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__22856);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__22860){var vec__22862 = p__22860;var type_ids = cljs.core.nth.call(null,vec__22862,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__22860 = null;if (arguments.length > 7) {
  p__22860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__22860);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__22863){
var index = cljs.core.first(arglist__22863);
arglist__22863 = cljs.core.next(arglist__22863);
var type = cljs.core.first(arglist__22863);
arglist__22863 = cljs.core.next(arglist__22863);
var location_attr = cljs.core.first(arglist__22863);
arglist__22863 = cljs.core.next(arglist__22863);
var attrs = cljs.core.first(arglist__22863);
arglist__22863 = cljs.core.next(arglist__22863);
var max_count = cljs.core.first(arglist__22863);
arglist__22863 = cljs.core.next(arglist__22863);
var filter = cljs.core.first(arglist__22863);
arglist__22863 = cljs.core.next(arglist__22863);
var bounds = cljs.core.first(arglist__22863);
var p__22860 = cljs.core.rest(arglist__22863);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__22860);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__22864){var vec__22866 = p__22864;var type_ids = cljs.core.nth.call(null,vec__22866,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__22864 = null;if (arguments.length > 7) {
  p__22864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__22864);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__22867){
var index = cljs.core.first(arglist__22867);
arglist__22867 = cljs.core.next(arglist__22867);
var type = cljs.core.first(arglist__22867);
arglist__22867 = cljs.core.next(arglist__22867);
var filter_spec = cljs.core.first(arglist__22867);
arglist__22867 = cljs.core.next(arglist__22867);
var bounds = cljs.core.first(arglist__22867);
arglist__22867 = cljs.core.next(arglist__22867);
var sort_spec = cljs.core.first(arglist__22867);
arglist__22867 = cljs.core.next(arglist__22867);
var from = cljs.core.first(arglist__22867);
arglist__22867 = cljs.core.next(arglist__22867);
var size = cljs.core.first(arglist__22867);
var p__22864 = cljs.core.rest(arglist__22867);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__22864);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(query,filter_spec){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));
});
clustermap.api.geo_sponsors = (function geo_sponsors(bounds){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));
});
clustermap.api.rankings = (function rankings(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));
});
clustermap.api.ranges = (function ranges(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));
});
clustermap.api.count_matching = (function count_matching(index,index_type,filter_spec){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));
});
clustermap.api.records = (function records(index,index_type,filter_spec,sort_spec,size){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
});
clustermap.api.tags_of_type = (function tags_of_type(tag_type){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));
});
clustermap.api.geotags_of_type = (function geotags_of_type(tag_type){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));
});
var in_flight_atom__14530__auto___22868 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14530__auto___22868){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14531__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14531__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14530__auto___22868,emptych__14531__auto__);
});
var company_search__1 = (function (query){var valch__14532__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14530__auto___22868,valch__14532__auto__);
});
company_search = function(query){
switch(arguments.length){
case 0:
return company_search__0.call(this);
case 1:
return company_search__1.call(this,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
company_search.cljs$core$IFn$_invoke$arity$0 = company_search__0;
company_search.cljs$core$IFn$_invoke$arity$1 = company_search__1;
return company_search;
})()
;})(in_flight_atom__14530__auto___22868))
;
