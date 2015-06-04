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
var AJAX__delegate = function (url,p__23423){var map__23427 = p__23423;var map__23427__$1 = ((cljs.core.seq_QMARK_.call(null,map__23427))?cljs.core.apply.call(null,cljs.core.hash_map,map__23427):map__23427);var opts = map__23427__$1;var content = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23427,map__23427__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23427,map__23427__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23427,map__23427__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23427,map__23427__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__23429 = method;var G__23429__$1 = (((G__23429 == null))?null:cljs.core.name.call(null,G__23429));var G__23429__$2 = (((G__23429__$1 == null))?null:clojure.string.upper_case.call(null,G__23429__$1));return G__23429__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23423 = null;if (arguments.length > 1) {
  p__23423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23423);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23430){
var url = cljs.core.first(arglist__23430);
var p__23423 = cljs.core.rest(arglist__23430);
return AJAX__delegate(url,p__23423);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23431){var map__23433 = p__23431;var map__23433__$1 = ((cljs.core.seq_QMARK_.call(null,map__23433))?cljs.core.apply.call(null,cljs.core.hash_map,map__23433):map__23433);var opts = map__23433__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23431 = null;if (arguments.length > 1) {
  p__23431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23431);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23434){
var url = cljs.core.first(arglist__23434);
var p__23431 = cljs.core.rest(arglist__23434);
return GET__delegate(url,p__23431);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23435){var map__23437 = p__23435;var map__23437__$1 = ((cljs.core.seq_QMARK_.call(null,map__23437))?cljs.core.apply.call(null,cljs.core.hash_map,map__23437):map__23437);var opts = map__23437__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23435 = null;if (arguments.length > 2) {
  p__23435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23435);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23438){
var url = cljs.core.first(arglist__23438);
arglist__23438 = cljs.core.next(arglist__23438);
var content = cljs.core.first(arglist__23438);
var p__23435 = cljs.core.rest(arglist__23438);
return POST__delegate(url,content,p__23435);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23439){var map__23441 = p__23439;var map__23441__$1 = ((cljs.core.seq_QMARK_.call(null,map__23441))?cljs.core.apply.call(null,cljs.core.hash_map,map__23441):map__23441);var opts = map__23441__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23439 = null;if (arguments.length > 2) {
  p__23439 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23439);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23442){
var url = cljs.core.first(arglist__23442);
arglist__23442 = cljs.core.next(arglist__23442);
var content = cljs.core.first(arglist__23442);
var p__23439 = cljs.core.rest(arglist__23442);
return PUT__delegate(url,content,p__23439);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_23577){var state_val_23578 = (state_23577[(1)]);if((state_val_23578 === (7)))
{var inst_23534 = (state_23577[(7)]);var inst_23533 = (state_23577[(2)]);var inst_23534__$1 = cljs.core.nth.call(null,inst_23533,(0),null);var inst_23535 = cljs.core.nth.call(null,inst_23533,(1),null);var inst_23536 = cljs.core.sequential_QMARK_.call(null,inst_23534__$1);var state_23577__$1 = (function (){var statearr_23579 = state_23577;(statearr_23579[(8)] = inst_23535);
(statearr_23579[(7)] = inst_23534__$1);
return statearr_23579;
})();if(inst_23536)
{var statearr_23580_23615 = state_23577__$1;(statearr_23580_23615[(1)] = (8));
} else
{var statearr_23581_23616 = state_23577__$1;(statearr_23581_23616[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (20)))
{var inst_23534 = (state_23577[(7)]);var state_23577__$1 = state_23577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23577__$1,(23),inst_23534);
} else
{if((state_val_23578 === (1)))
{var state_23577__$1 = state_23577;var statearr_23582_23617 = state_23577__$1;(statearr_23582_23617[(2)] = null);
(statearr_23582_23617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (4)))
{var state_23577__$1 = state_23577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23577__$1,(7),ocomm);
} else
{if((state_val_23578 === (15)))
{var inst_23557 = (state_23577[(2)]);var state_23577__$1 = state_23577;var statearr_23583_23618 = state_23577__$1;(statearr_23583_23618[(2)] = inst_23557);
(statearr_23583_23618[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (21)))
{var state_23577__$1 = state_23577;var statearr_23584_23619 = state_23577__$1;(statearr_23584_23619[(2)] = null);
(statearr_23584_23619[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (13)))
{var inst_23540 = (state_23577[(9)]);var state_23577__$1 = state_23577;var statearr_23585_23620 = state_23577__$1;(statearr_23585_23620[(2)] = inst_23540);
(statearr_23585_23620[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (22)))
{var inst_23566 = (state_23577[(2)]);var state_23577__$1 = state_23577;var statearr_23586_23621 = state_23577__$1;(statearr_23586_23621[(2)] = inst_23566);
(statearr_23586_23621[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (6)))
{var inst_23573 = (state_23577[(2)]);var state_23577__$1 = state_23577;var statearr_23587_23622 = state_23577__$1;(statearr_23587_23622[(2)] = inst_23573);
(statearr_23587_23622[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (17)))
{var state_23577__$1 = state_23577;var statearr_23588_23623 = state_23577__$1;(statearr_23588_23623[(2)] = null);
(statearr_23588_23623[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (3)))
{var inst_23575 = (state_23577[(2)]);var state_23577__$1 = state_23577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23577__$1,inst_23575);
} else
{if((state_val_23578 === (12)))
{var inst_23559 = (state_23577[(2)]);var state_23577__$1 = state_23577;var statearr_23589_23624 = state_23577__$1;(statearr_23589_23624[(2)] = inst_23559);
(statearr_23589_23624[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (2)))
{var state_23577__$1 = state_23577;var statearr_23590_23625 = state_23577__$1;(statearr_23590_23625[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (23)))
{var inst_23563 = (state_23577[(2)]);var state_23577__$1 = state_23577;var statearr_23592_23626 = state_23577__$1;(statearr_23592_23626[(2)] = inst_23563);
(statearr_23592_23626[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (19)))
{var inst_23550 = (state_23577[(2)]);var state_23577__$1 = state_23577;var statearr_23593_23627 = state_23577__$1;(statearr_23593_23627[(2)] = inst_23550);
(statearr_23593_23627[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (11)))
{var inst_23539 = (state_23577[(10)]);var inst_23542 = cljs.core.empty_QMARK_.call(null,inst_23539);var state_23577__$1 = state_23577;if(inst_23542)
{var statearr_23594_23628 = state_23577__$1;(statearr_23594_23628[(1)] = (13));
} else
{var statearr_23595_23629 = state_23577__$1;(statearr_23595_23629[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (9)))
{var inst_23534 = (state_23577[(7)]);var state_23577__$1 = state_23577;if(cljs.core.truth_(inst_23534))
{var statearr_23596_23630 = state_23577__$1;(statearr_23596_23630[(1)] = (20));
} else
{var statearr_23597_23631 = state_23577__$1;(statearr_23597_23631[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (5)))
{var state_23577__$1 = state_23577;var statearr_23598_23632 = state_23577__$1;(statearr_23598_23632[(2)] = null);
(statearr_23598_23632[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (14)))
{var inst_23539 = (state_23577[(10)]);var inst_23545 = cljs.core.rest.call(null,inst_23539);var inst_23546 = cljs.core.first.call(null,inst_23539);var state_23577__$1 = (function (){var statearr_23599 = state_23577;(statearr_23599[(11)] = inst_23545);
return statearr_23599;
})();if(cljs.core.truth_(inst_23546))
{var statearr_23600_23633 = state_23577__$1;(statearr_23600_23633[(1)] = (16));
} else
{var statearr_23601_23634 = state_23577__$1;(statearr_23601_23634[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (16)))
{var inst_23539 = (state_23577[(10)]);var inst_23548 = cljs.core.first.call(null,inst_23539);var state_23577__$1 = state_23577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23577__$1,(19),inst_23548);
} else
{if((state_val_23578 === (10)))
{var inst_23535 = (state_23577[(8)]);var inst_23568 = (state_23577[(2)]);var inst_23569 = cljs.core.apply.call(null,handler,inst_23568,inst_23535);var state_23577__$1 = (function (){var statearr_23602 = state_23577;(statearr_23602[(12)] = inst_23569);
return statearr_23602;
})();var statearr_23603_23635 = state_23577__$1;(statearr_23603_23635[(2)] = null);
(statearr_23603_23635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (18)))
{var inst_23540 = (state_23577[(9)]);var inst_23545 = (state_23577[(11)]);var inst_23553 = (state_23577[(2)]);var inst_23554 = cljs.core.conj.call(null,inst_23540,inst_23553);var inst_23539 = inst_23545;var inst_23540__$1 = inst_23554;var state_23577__$1 = (function (){var statearr_23604 = state_23577;(statearr_23604[(9)] = inst_23540__$1);
(statearr_23604[(10)] = inst_23539);
return statearr_23604;
})();var statearr_23605_23636 = state_23577__$1;(statearr_23605_23636[(2)] = null);
(statearr_23605_23636[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23578 === (8)))
{var inst_23534 = (state_23577[(7)]);var inst_23538 = cljs.core.PersistentVector.EMPTY;var inst_23539 = inst_23534;var inst_23540 = inst_23538;var state_23577__$1 = (function (){var statearr_23606 = state_23577;(statearr_23606[(9)] = inst_23540);
(statearr_23606[(10)] = inst_23539);
return statearr_23606;
})();var statearr_23607_23637 = state_23577__$1;(statearr_23607_23637[(2)] = null);
(statearr_23607_23637[(1)] = (11));
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
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23611 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23611[(0)] = state_machine__11462__auto__);
(statearr_23611[(1)] = (1));
return statearr_23611;
});
var state_machine__11462__auto____1 = (function (state_23577){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23577);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23612){if((e23612 instanceof Object))
{var ex__11465__auto__ = e23612;var statearr_23613_23638 = state_23577;(statearr_23613_23638[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23639 = state_23577;
state_23577 = G__23639;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23577){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_23614 = f__11518__auto__.call(null);(statearr_23614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
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
var G__23642__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23641 = rseq;var rcomm = cljs.core.nth.call(null,vec__23641,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23641,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23642 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23642__delegate.call(this,req_args);};
G__23642.cljs$lang$maxFixedArity = 0;
G__23642.cljs$lang$applyTo = (function (arglist__23643){
var req_args = cljs.core.seq(arglist__23643);
return G__23642__delegate(req_args);
});
G__23642.cljs$core$IFn$_invoke$arity$variadic = G__23642__delegate;
return G__23642;
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
var c__11517__auto___23714 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23714,rx){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23714,rx){
return (function (state_23695){var state_val_23696 = (state_23695[(1)]);if((state_val_23696 === (8)))
{var inst_23691 = (state_23695[(2)]);var inst_23692 = cljs.core.async.close_BANG_.call(null,valch);var inst_23693 = cljs.core.async.close_BANG_.call(null,rx);var state_23695__$1 = (function (){var statearr_23697 = state_23695;(statearr_23697[(7)] = inst_23691);
(statearr_23697[(8)] = inst_23692);
return statearr_23697;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23695__$1,inst_23693);
} else
{if((state_val_23696 === (7)))
{var state_23695__$1 = state_23695;var statearr_23698_23715 = state_23695__$1;(statearr_23698_23715[(2)] = null);
(statearr_23698_23715[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23696 === (6)))
{var inst_23680 = (state_23695[(9)]);var inst_23688 = cljs.core.async.put_BANG_.call(null,rx,inst_23680);var state_23695__$1 = state_23695;var statearr_23699_23716 = state_23695__$1;(statearr_23699_23716[(2)] = inst_23688);
(statearr_23699_23716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23696 === (5)))
{var inst_23686 = (state_23695[(2)]);var state_23695__$1 = state_23695;if(cljs.core.truth_(inst_23686))
{var statearr_23700_23717 = state_23695__$1;(statearr_23700_23717[(1)] = (6));
} else
{var statearr_23701_23718 = state_23695__$1;(statearr_23701_23718[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23696 === (4)))
{var inst_23680 = (state_23695[(9)]);var state_23695__$1 = state_23695;var statearr_23702_23719 = state_23695__$1;(statearr_23702_23719[(2)] = inst_23680);
(statearr_23702_23719[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23696 === (3)))
{var inst_23682 = cljs.core.deref.call(null,in_flight_atom);var inst_23683 = cljs.core._EQ_.call(null,inst_23682,valch);var state_23695__$1 = state_23695;var statearr_23703_23720 = state_23695__$1;(statearr_23703_23720[(2)] = inst_23683);
(statearr_23703_23720[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23696 === (2)))
{var inst_23680 = (state_23695[(9)]);var inst_23680__$1 = (state_23695[(2)]);var state_23695__$1 = (function (){var statearr_23704 = state_23695;(statearr_23704[(9)] = inst_23680__$1);
return statearr_23704;
})();if(cljs.core.truth_(inst_23680__$1))
{var statearr_23705_23721 = state_23695__$1;(statearr_23705_23721[(1)] = (3));
} else
{var statearr_23706_23722 = state_23695__$1;(statearr_23706_23722[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23696 === (1)))
{var state_23695__$1 = state_23695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23695__$1,(2),valch);
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
});})(c__11517__auto___23714,rx))
;return ((function (switch__11461__auto__,c__11517__auto___23714,rx){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23710 = [null,null,null,null,null,null,null,null,null,null];(statearr_23710[(0)] = state_machine__11462__auto__);
(statearr_23710[(1)] = (1));
return statearr_23710;
});
var state_machine__11462__auto____1 = (function (state_23695){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23695);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23711){if((e23711 instanceof Object))
{var ex__11465__auto__ = e23711;var statearr_23712_23723 = state_23695;(statearr_23712_23723[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23711;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23724 = state_23695;
state_23695 = G__23724;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23714,rx))
})();var state__11519__auto__ = (function (){var statearr_23713 = f__11518__auto__.call(null);(statearr_23713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23714);
return statearr_23713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23714,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,ch){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,ch){
return (function (state_23742){var state_val_23743 = (state_23742[(1)]);if((state_val_23743 === (2)))
{var inst_23739 = (state_23742[(2)]);var inst_23740 = console.log(inst_23739);var state_23742__$1 = state_23742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23742__$1,inst_23740);
} else
{if((state_val_23743 === (1)))
{var state_23742__$1 = state_23742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23742__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__,ch))
;return ((function (switch__11461__auto__,c__11517__auto__,ch){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23747 = [null,null,null,null,null,null,null];(statearr_23747[(0)] = state_machine__11462__auto__);
(statearr_23747[(1)] = (1));
return statearr_23747;
});
var state_machine__11462__auto____1 = (function (state_23742){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23742);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23748){if((e23748 instanceof Object))
{var ex__11465__auto__ = e23748;var statearr_23749_23751 = state_23742;(statearr_23749_23751[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23742);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23748;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23752 = state_23742;
state_23742 = G__23752;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23742){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,ch))
})();var state__11519__auto__ = (function (){var statearr_23750 = f__11518__auto__.call(null);(statearr_23750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,ch))
);
return c__11517__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__23753){
var f = cljs.core.first(arglist__23753);
var args = cljs.core.rest(arglist__23753);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23756){var vec__23757 = p__23756;var k = cljs.core.nth.call(null,vec__23757,(0),null);var v = cljs.core.nth.call(null,vec__23757,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11517__auto___23784 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23784,r){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23784,r){
return (function (state_23775){var state_val_23776 = (state_23775[(1)]);if((state_val_23776 === (2)))
{var inst_23772 = (state_23775[(2)]);var inst_23773 = cljs.core.reset_BANG_.call(null,r,inst_23772);var state_23775__$1 = state_23775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23775__$1,inst_23773);
} else
{if((state_val_23776 === (1)))
{var state_23775__$1 = state_23775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23775__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto___23784,r))
;return ((function (switch__11461__auto__,c__11517__auto___23784,r){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23780 = [null,null,null,null,null,null,null];(statearr_23780[(0)] = state_machine__11462__auto__);
(statearr_23780[(1)] = (1));
return statearr_23780;
});
var state_machine__11462__auto____1 = (function (state_23775){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23775);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23781){if((e23781 instanceof Object))
{var ex__11465__auto__ = e23781;var statearr_23782_23785 = state_23775;(statearr_23782_23785[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23781;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23786 = state_23775;
state_23775 = G__23786;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23775){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23784,r))
})();var state__11519__auto__ = (function (){var statearr_23783 = f__11518__auto__.call(null);(statearr_23783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23784);
return statearr_23783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23784,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__23787){
var id = cljs.core.first(arglist__23787);
arglist__23787 = cljs.core.next(arglist__23787);
var tolerance = cljs.core.first(arglist__23787);
var opts = cljs.core.rest(arglist__23787);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__23788){
var id = cljs.core.first(arglist__23788);
var opts = cljs.core.rest(arglist__23788);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__23789){
var ids = cljs.core.first(arglist__23789);
arglist__23789 = cljs.core.next(arglist__23789);
var tolerance = cljs.core.first(arglist__23789);
var opts = cljs.core.rest(arglist__23789);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__23790){var map__23792 = p__23790;var map__23792__$1 = ((cljs.core.seq_QMARK_.call(null,map__23792))?cljs.core.apply.call(null,cljs.core.hash_map,map__23792):map__23792);var opts = map__23792__$1;var boundaryline_ids = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__23790 = null;if (arguments.length > 3) {
  p__23790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__23790);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__23793){
var collection_id = cljs.core.first(arglist__23793);
arglist__23793 = cljs.core.next(arglist__23793);
var tolerance = cljs.core.first(arglist__23793);
arglist__23793 = cljs.core.next(arglist__23793);
var bounds = cljs.core.first(arglist__23793);
var p__23790 = cljs.core.rest(arglist__23793);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__23790);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23794){var vec__23796 = p__23794;var type_ids = cljs.core.nth.call(null,vec__23796,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__23794 = null;if (arguments.length > 8) {
  p__23794 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23794);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__23797){
var index = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var type = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var blcoll = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var attr = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var filter = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var bounds = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var scale_attr = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var post_scale_factor = cljs.core.first(arglist__23797);
var p__23794 = cljs.core.rest(arglist__23797);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23794);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__23798){var map__23800 = p__23798;var map__23800__$1 = ((cljs.core.seq_QMARK_.call(null,map__23800))?cljs.core.apply.call(null,cljs.core.hash_map,map__23800):map__23800);var q = map__23800__$1;var stats_attr = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__23801){var vec__23803 = p__23801;var type_ids = cljs.core.nth.call(null,vec__23803,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__23801 = null;if (arguments.length > 5) {
  p__23801 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__23801);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__23804){
var index = cljs.core.first(arglist__23804);
arglist__23804 = cljs.core.next(arglist__23804);
var type = cljs.core.first(arglist__23804);
arglist__23804 = cljs.core.next(arglist__23804);
var statsattrs = cljs.core.first(arglist__23804);
arglist__23804 = cljs.core.next(arglist__23804);
var filter = cljs.core.first(arglist__23804);
arglist__23804 = cljs.core.next(arglist__23804);
var bounds = cljs.core.first(arglist__23804);
var p__23801 = cljs.core.rest(arglist__23804);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__23801);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__23805){var vec__23807 = p__23805;var type_ids = cljs.core.nth.call(null,vec__23807,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__23805 = null;if (arguments.length > 7) {
  p__23805 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__23805);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__23808){
var index = cljs.core.first(arglist__23808);
arglist__23808 = cljs.core.next(arglist__23808);
var type = cljs.core.first(arglist__23808);
arglist__23808 = cljs.core.next(arglist__23808);
var location_attr = cljs.core.first(arglist__23808);
arglist__23808 = cljs.core.next(arglist__23808);
var attrs = cljs.core.first(arglist__23808);
arglist__23808 = cljs.core.next(arglist__23808);
var max_count = cljs.core.first(arglist__23808);
arglist__23808 = cljs.core.next(arglist__23808);
var filter = cljs.core.first(arglist__23808);
arglist__23808 = cljs.core.next(arglist__23808);
var bounds = cljs.core.first(arglist__23808);
var p__23805 = cljs.core.rest(arglist__23808);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__23805);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__23809){var vec__23811 = p__23809;var type_ids = cljs.core.nth.call(null,vec__23811,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__23809 = null;if (arguments.length > 7) {
  p__23809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__23809);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__23812){
var index = cljs.core.first(arglist__23812);
arglist__23812 = cljs.core.next(arglist__23812);
var type = cljs.core.first(arglist__23812);
arglist__23812 = cljs.core.next(arglist__23812);
var filter_spec = cljs.core.first(arglist__23812);
arglist__23812 = cljs.core.next(arglist__23812);
var bounds = cljs.core.first(arglist__23812);
arglist__23812 = cljs.core.next(arglist__23812);
var sort_spec = cljs.core.first(arglist__23812);
arglist__23812 = cljs.core.next(arglist__23812);
var from = cljs.core.first(arglist__23812);
arglist__23812 = cljs.core.next(arglist__23812);
var size = cljs.core.first(arglist__23812);
var p__23809 = cljs.core.rest(arglist__23812);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__23809);
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
var in_flight_atom__14564__auto___23813 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14564__auto___23813){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23813,emptych__14565__auto__);
});
var company_search__1 = (function (query){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23813,valch__14566__auto__);
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
;})(in_flight_atom__14564__auto___23813))
;
