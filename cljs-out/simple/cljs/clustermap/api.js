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
var AJAX__delegate = function (url,p__23392){var map__23396 = p__23392;var map__23396__$1 = ((cljs.core.seq_QMARK_.call(null,map__23396))?cljs.core.apply.call(null,cljs.core.hash_map,map__23396):map__23396);var opts = map__23396__$1;var content = cljs.core.get.call(null,map__23396__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23396__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23396__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23396,map__23396__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23396,map__23396__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23396,map__23396__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23396,map__23396__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__23398 = method;var G__23398__$1 = (((G__23398 == null))?null:cljs.core.name.call(null,G__23398));var G__23398__$2 = (((G__23398__$1 == null))?null:clojure.string.upper_case.call(null,G__23398__$1));return G__23398__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23392 = null;if (arguments.length > 1) {
  p__23392 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23392);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23399){
var url = cljs.core.first(arglist__23399);
var p__23392 = cljs.core.rest(arglist__23399);
return AJAX__delegate(url,p__23392);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23400){var map__23402 = p__23400;var map__23402__$1 = ((cljs.core.seq_QMARK_.call(null,map__23402))?cljs.core.apply.call(null,cljs.core.hash_map,map__23402):map__23402);var opts = map__23402__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23400 = null;if (arguments.length > 1) {
  p__23400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23400);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23403){
var url = cljs.core.first(arglist__23403);
var p__23400 = cljs.core.rest(arglist__23403);
return GET__delegate(url,p__23400);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23404){var map__23406 = p__23404;var map__23406__$1 = ((cljs.core.seq_QMARK_.call(null,map__23406))?cljs.core.apply.call(null,cljs.core.hash_map,map__23406):map__23406);var opts = map__23406__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23404 = null;if (arguments.length > 2) {
  p__23404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23404);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23407){
var url = cljs.core.first(arglist__23407);
arglist__23407 = cljs.core.next(arglist__23407);
var content = cljs.core.first(arglist__23407);
var p__23404 = cljs.core.rest(arglist__23407);
return POST__delegate(url,content,p__23404);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23408){var map__23410 = p__23408;var map__23410__$1 = ((cljs.core.seq_QMARK_.call(null,map__23410))?cljs.core.apply.call(null,cljs.core.hash_map,map__23410):map__23410);var opts = map__23410__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23408 = null;if (arguments.length > 2) {
  p__23408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23408);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23411){
var url = cljs.core.first(arglist__23411);
arglist__23411 = cljs.core.next(arglist__23411);
var content = cljs.core.first(arglist__23411);
var p__23408 = cljs.core.rest(arglist__23411);
return PUT__delegate(url,content,p__23408);
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
return (function (state_23546){var state_val_23547 = (state_23546[(1)]);if((state_val_23547 === (7)))
{var inst_23503 = (state_23546[(7)]);var inst_23502 = (state_23546[(2)]);var inst_23503__$1 = cljs.core.nth.call(null,inst_23502,(0),null);var inst_23504 = cljs.core.nth.call(null,inst_23502,(1),null);var inst_23505 = cljs.core.sequential_QMARK_.call(null,inst_23503__$1);var state_23546__$1 = (function (){var statearr_23548 = state_23546;(statearr_23548[(7)] = inst_23503__$1);
(statearr_23548[(8)] = inst_23504);
return statearr_23548;
})();if(inst_23505)
{var statearr_23549_23584 = state_23546__$1;(statearr_23549_23584[(1)] = (8));
} else
{var statearr_23550_23585 = state_23546__$1;(statearr_23550_23585[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (20)))
{var inst_23503 = (state_23546[(7)]);var state_23546__$1 = state_23546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23546__$1,(23),inst_23503);
} else
{if((state_val_23547 === (1)))
{var state_23546__$1 = state_23546;var statearr_23551_23586 = state_23546__$1;(statearr_23551_23586[(2)] = null);
(statearr_23551_23586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (4)))
{var state_23546__$1 = state_23546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23546__$1,(7),ocomm);
} else
{if((state_val_23547 === (15)))
{var inst_23526 = (state_23546[(2)]);var state_23546__$1 = state_23546;var statearr_23552_23587 = state_23546__$1;(statearr_23552_23587[(2)] = inst_23526);
(statearr_23552_23587[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (21)))
{var state_23546__$1 = state_23546;var statearr_23553_23588 = state_23546__$1;(statearr_23553_23588[(2)] = null);
(statearr_23553_23588[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (13)))
{var inst_23509 = (state_23546[(9)]);var state_23546__$1 = state_23546;var statearr_23554_23589 = state_23546__$1;(statearr_23554_23589[(2)] = inst_23509);
(statearr_23554_23589[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (22)))
{var inst_23535 = (state_23546[(2)]);var state_23546__$1 = state_23546;var statearr_23555_23590 = state_23546__$1;(statearr_23555_23590[(2)] = inst_23535);
(statearr_23555_23590[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (6)))
{var inst_23542 = (state_23546[(2)]);var state_23546__$1 = state_23546;var statearr_23556_23591 = state_23546__$1;(statearr_23556_23591[(2)] = inst_23542);
(statearr_23556_23591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (17)))
{var state_23546__$1 = state_23546;var statearr_23557_23592 = state_23546__$1;(statearr_23557_23592[(2)] = null);
(statearr_23557_23592[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (3)))
{var inst_23544 = (state_23546[(2)]);var state_23546__$1 = state_23546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23546__$1,inst_23544);
} else
{if((state_val_23547 === (12)))
{var inst_23528 = (state_23546[(2)]);var state_23546__$1 = state_23546;var statearr_23558_23593 = state_23546__$1;(statearr_23558_23593[(2)] = inst_23528);
(statearr_23558_23593[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (2)))
{var state_23546__$1 = state_23546;var statearr_23559_23594 = state_23546__$1;(statearr_23559_23594[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (23)))
{var inst_23532 = (state_23546[(2)]);var state_23546__$1 = state_23546;var statearr_23561_23595 = state_23546__$1;(statearr_23561_23595[(2)] = inst_23532);
(statearr_23561_23595[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (19)))
{var inst_23519 = (state_23546[(2)]);var state_23546__$1 = state_23546;var statearr_23562_23596 = state_23546__$1;(statearr_23562_23596[(2)] = inst_23519);
(statearr_23562_23596[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (11)))
{var inst_23508 = (state_23546[(10)]);var inst_23511 = cljs.core.empty_QMARK_.call(null,inst_23508);var state_23546__$1 = state_23546;if(inst_23511)
{var statearr_23563_23597 = state_23546__$1;(statearr_23563_23597[(1)] = (13));
} else
{var statearr_23564_23598 = state_23546__$1;(statearr_23564_23598[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (9)))
{var inst_23503 = (state_23546[(7)]);var state_23546__$1 = state_23546;if(cljs.core.truth_(inst_23503))
{var statearr_23565_23599 = state_23546__$1;(statearr_23565_23599[(1)] = (20));
} else
{var statearr_23566_23600 = state_23546__$1;(statearr_23566_23600[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (5)))
{var state_23546__$1 = state_23546;var statearr_23567_23601 = state_23546__$1;(statearr_23567_23601[(2)] = null);
(statearr_23567_23601[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (14)))
{var inst_23508 = (state_23546[(10)]);var inst_23514 = cljs.core.rest.call(null,inst_23508);var inst_23515 = cljs.core.first.call(null,inst_23508);var state_23546__$1 = (function (){var statearr_23568 = state_23546;(statearr_23568[(11)] = inst_23514);
return statearr_23568;
})();if(cljs.core.truth_(inst_23515))
{var statearr_23569_23602 = state_23546__$1;(statearr_23569_23602[(1)] = (16));
} else
{var statearr_23570_23603 = state_23546__$1;(statearr_23570_23603[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (16)))
{var inst_23508 = (state_23546[(10)]);var inst_23517 = cljs.core.first.call(null,inst_23508);var state_23546__$1 = state_23546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23546__$1,(19),inst_23517);
} else
{if((state_val_23547 === (10)))
{var inst_23504 = (state_23546[(8)]);var inst_23537 = (state_23546[(2)]);var inst_23538 = cljs.core.apply.call(null,handler,inst_23537,inst_23504);var state_23546__$1 = (function (){var statearr_23571 = state_23546;(statearr_23571[(12)] = inst_23538);
return statearr_23571;
})();var statearr_23572_23604 = state_23546__$1;(statearr_23572_23604[(2)] = null);
(statearr_23572_23604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (18)))
{var inst_23514 = (state_23546[(11)]);var inst_23509 = (state_23546[(9)]);var inst_23522 = (state_23546[(2)]);var inst_23523 = cljs.core.conj.call(null,inst_23509,inst_23522);var inst_23508 = inst_23514;var inst_23509__$1 = inst_23523;var state_23546__$1 = (function (){var statearr_23573 = state_23546;(statearr_23573[(9)] = inst_23509__$1);
(statearr_23573[(10)] = inst_23508);
return statearr_23573;
})();var statearr_23574_23605 = state_23546__$1;(statearr_23574_23605[(2)] = null);
(statearr_23574_23605[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23547 === (8)))
{var inst_23503 = (state_23546[(7)]);var inst_23507 = cljs.core.PersistentVector.EMPTY;var inst_23508 = inst_23503;var inst_23509 = inst_23507;var state_23546__$1 = (function (){var statearr_23575 = state_23546;(statearr_23575[(9)] = inst_23509);
(statearr_23575[(10)] = inst_23508);
return statearr_23575;
})();var statearr_23576_23606 = state_23546__$1;(statearr_23576_23606[(2)] = null);
(statearr_23576_23606[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_23580 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23580[(0)] = state_machine__11462__auto__);
(statearr_23580[(1)] = (1));
return statearr_23580;
});
var state_machine__11462__auto____1 = (function (state_23546){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23546);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23581){if((e23581 instanceof Object))
{var ex__11465__auto__ = e23581;var statearr_23582_23607 = state_23546;(statearr_23582_23607[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23581;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23608 = state_23546;
state_23546 = G__23608;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23546){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_23583 = f__11518__auto__.call(null);(statearr_23583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23583;
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
var G__23611__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23610 = rseq;var rcomm = cljs.core.nth.call(null,vec__23610,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23610,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23611 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23611__delegate.call(this,req_args);};
G__23611.cljs$lang$maxFixedArity = 0;
G__23611.cljs$lang$applyTo = (function (arglist__23612){
var req_args = cljs.core.seq(arglist__23612);
return G__23611__delegate(req_args);
});
G__23611.cljs$core$IFn$_invoke$arity$variadic = G__23611__delegate;
return G__23611;
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
var c__11517__auto___23683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23683,rx){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23683,rx){
return (function (state_23664){var state_val_23665 = (state_23664[(1)]);if((state_val_23665 === (8)))
{var inst_23660 = (state_23664[(2)]);var inst_23661 = cljs.core.async.close_BANG_.call(null,valch);var inst_23662 = cljs.core.async.close_BANG_.call(null,rx);var state_23664__$1 = (function (){var statearr_23666 = state_23664;(statearr_23666[(7)] = inst_23661);
(statearr_23666[(8)] = inst_23660);
return statearr_23666;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23664__$1,inst_23662);
} else
{if((state_val_23665 === (7)))
{var state_23664__$1 = state_23664;var statearr_23667_23684 = state_23664__$1;(statearr_23667_23684[(2)] = null);
(statearr_23667_23684[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23665 === (6)))
{var inst_23649 = (state_23664[(9)]);var inst_23657 = cljs.core.async.put_BANG_.call(null,rx,inst_23649);var state_23664__$1 = state_23664;var statearr_23668_23685 = state_23664__$1;(statearr_23668_23685[(2)] = inst_23657);
(statearr_23668_23685[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23665 === (5)))
{var inst_23655 = (state_23664[(2)]);var state_23664__$1 = state_23664;if(cljs.core.truth_(inst_23655))
{var statearr_23669_23686 = state_23664__$1;(statearr_23669_23686[(1)] = (6));
} else
{var statearr_23670_23687 = state_23664__$1;(statearr_23670_23687[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23665 === (4)))
{var inst_23649 = (state_23664[(9)]);var state_23664__$1 = state_23664;var statearr_23671_23688 = state_23664__$1;(statearr_23671_23688[(2)] = inst_23649);
(statearr_23671_23688[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23665 === (3)))
{var inst_23651 = cljs.core.deref.call(null,in_flight_atom);var inst_23652 = cljs.core._EQ_.call(null,inst_23651,valch);var state_23664__$1 = state_23664;var statearr_23672_23689 = state_23664__$1;(statearr_23672_23689[(2)] = inst_23652);
(statearr_23672_23689[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23665 === (2)))
{var inst_23649 = (state_23664[(9)]);var inst_23649__$1 = (state_23664[(2)]);var state_23664__$1 = (function (){var statearr_23673 = state_23664;(statearr_23673[(9)] = inst_23649__$1);
return statearr_23673;
})();if(cljs.core.truth_(inst_23649__$1))
{var statearr_23674_23690 = state_23664__$1;(statearr_23674_23690[(1)] = (3));
} else
{var statearr_23675_23691 = state_23664__$1;(statearr_23675_23691[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23665 === (1)))
{var state_23664__$1 = state_23664;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23664__$1,(2),valch);
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
});})(c__11517__auto___23683,rx))
;return ((function (switch__11461__auto__,c__11517__auto___23683,rx){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23679 = [null,null,null,null,null,null,null,null,null,null];(statearr_23679[(0)] = state_machine__11462__auto__);
(statearr_23679[(1)] = (1));
return statearr_23679;
});
var state_machine__11462__auto____1 = (function (state_23664){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23664);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23680){if((e23680 instanceof Object))
{var ex__11465__auto__ = e23680;var statearr_23681_23692 = state_23664;(statearr_23681_23692[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23664);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23693 = state_23664;
state_23664 = G__23693;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23664){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23683,rx))
})();var state__11519__auto__ = (function (){var statearr_23682 = f__11518__auto__.call(null);(statearr_23682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23683);
return statearr_23682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23683,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,ch){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,ch){
return (function (state_23711){var state_val_23712 = (state_23711[(1)]);if((state_val_23712 === (2)))
{var inst_23708 = (state_23711[(2)]);var inst_23709 = console.log(inst_23708);var state_23711__$1 = state_23711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23711__$1,inst_23709);
} else
{if((state_val_23712 === (1)))
{var state_23711__$1 = state_23711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23711__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__,ch))
;return ((function (switch__11461__auto__,c__11517__auto__,ch){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23716 = [null,null,null,null,null,null,null];(statearr_23716[(0)] = state_machine__11462__auto__);
(statearr_23716[(1)] = (1));
return statearr_23716;
});
var state_machine__11462__auto____1 = (function (state_23711){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23711);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23717){if((e23717 instanceof Object))
{var ex__11465__auto__ = e23717;var statearr_23718_23720 = state_23711;(statearr_23718_23720[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23717;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23721 = state_23711;
state_23711 = G__23721;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23711){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,ch))
})();var state__11519__auto__ = (function (){var statearr_23719 = f__11518__auto__.call(null);(statearr_23719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23719;
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
log_api.cljs$lang$applyTo = (function (arglist__23722){
var f = cljs.core.first(arglist__23722);
var args = cljs.core.rest(arglist__23722);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23725){var vec__23726 = p__23725;var k = cljs.core.nth.call(null,vec__23726,(0),null);var v = cljs.core.nth.call(null,vec__23726,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11517__auto___23753 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23753,r){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23753,r){
return (function (state_23744){var state_val_23745 = (state_23744[(1)]);if((state_val_23745 === (2)))
{var inst_23741 = (state_23744[(2)]);var inst_23742 = cljs.core.reset_BANG_.call(null,r,inst_23741);var state_23744__$1 = state_23744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23744__$1,inst_23742);
} else
{if((state_val_23745 === (1)))
{var state_23744__$1 = state_23744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23744__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto___23753,r))
;return ((function (switch__11461__auto__,c__11517__auto___23753,r){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23749 = [null,null,null,null,null,null,null];(statearr_23749[(0)] = state_machine__11462__auto__);
(statearr_23749[(1)] = (1));
return statearr_23749;
});
var state_machine__11462__auto____1 = (function (state_23744){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23744);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23750){if((e23750 instanceof Object))
{var ex__11465__auto__ = e23750;var statearr_23751_23754 = state_23744;(statearr_23751_23754[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23750;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23755 = state_23744;
state_23744 = G__23755;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23744){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23753,r))
})();var state__11519__auto__ = (function (){var statearr_23752 = f__11518__auto__.call(null);(statearr_23752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23753);
return statearr_23752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23753,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__23756){
var id = cljs.core.first(arglist__23756);
arglist__23756 = cljs.core.next(arglist__23756);
var tolerance = cljs.core.first(arglist__23756);
var opts = cljs.core.rest(arglist__23756);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__23757){
var id = cljs.core.first(arglist__23757);
var opts = cljs.core.rest(arglist__23757);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__23758){
var ids = cljs.core.first(arglist__23758);
arglist__23758 = cljs.core.next(arglist__23758);
var tolerance = cljs.core.first(arglist__23758);
var opts = cljs.core.rest(arglist__23758);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__23759){var map__23761 = p__23759;var map__23761__$1 = ((cljs.core.seq_QMARK_.call(null,map__23761))?cljs.core.apply.call(null,cljs.core.hash_map,map__23761):map__23761);var opts = map__23761__$1;var boundaryline_ids = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__23759 = null;if (arguments.length > 3) {
  p__23759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__23759);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__23762){
var collection_id = cljs.core.first(arglist__23762);
arglist__23762 = cljs.core.next(arglist__23762);
var tolerance = cljs.core.first(arglist__23762);
arglist__23762 = cljs.core.next(arglist__23762);
var bounds = cljs.core.first(arglist__23762);
var p__23759 = cljs.core.rest(arglist__23762);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__23759);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23763){var vec__23765 = p__23763;var type_ids = cljs.core.nth.call(null,vec__23765,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__23763 = null;if (arguments.length > 8) {
  p__23763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23763);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__23766){
var index = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var type = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var blcoll = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var attr = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var filter = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var bounds = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var scale_attr = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var post_scale_factor = cljs.core.first(arglist__23766);
var p__23763 = cljs.core.rest(arglist__23766);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23763);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__23767){var map__23769 = p__23767;var map__23769__$1 = ((cljs.core.seq_QMARK_.call(null,map__23769))?cljs.core.apply.call(null,cljs.core.hash_map,map__23769):map__23769);var q = map__23769__$1;var stats_attr = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__23770){var vec__23772 = p__23770;var type_ids = cljs.core.nth.call(null,vec__23772,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__23770 = null;if (arguments.length > 5) {
  p__23770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__23770);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__23773){
var index = cljs.core.first(arglist__23773);
arglist__23773 = cljs.core.next(arglist__23773);
var type = cljs.core.first(arglist__23773);
arglist__23773 = cljs.core.next(arglist__23773);
var statsattrs = cljs.core.first(arglist__23773);
arglist__23773 = cljs.core.next(arglist__23773);
var filter = cljs.core.first(arglist__23773);
arglist__23773 = cljs.core.next(arglist__23773);
var bounds = cljs.core.first(arglist__23773);
var p__23770 = cljs.core.rest(arglist__23773);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__23770);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__23774){var vec__23776 = p__23774;var type_ids = cljs.core.nth.call(null,vec__23776,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__23774 = null;if (arguments.length > 7) {
  p__23774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__23774);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__23777){
var index = cljs.core.first(arglist__23777);
arglist__23777 = cljs.core.next(arglist__23777);
var type = cljs.core.first(arglist__23777);
arglist__23777 = cljs.core.next(arglist__23777);
var location_attr = cljs.core.first(arglist__23777);
arglist__23777 = cljs.core.next(arglist__23777);
var attrs = cljs.core.first(arglist__23777);
arglist__23777 = cljs.core.next(arglist__23777);
var max_count = cljs.core.first(arglist__23777);
arglist__23777 = cljs.core.next(arglist__23777);
var filter = cljs.core.first(arglist__23777);
arglist__23777 = cljs.core.next(arglist__23777);
var bounds = cljs.core.first(arglist__23777);
var p__23774 = cljs.core.rest(arglist__23777);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__23774);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__23778){var vec__23780 = p__23778;var type_ids = cljs.core.nth.call(null,vec__23780,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__23778 = null;if (arguments.length > 7) {
  p__23778 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__23778);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__23781){
var index = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var type = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var filter_spec = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var bounds = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var sort_spec = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var from = cljs.core.first(arglist__23781);
arglist__23781 = cljs.core.next(arglist__23781);
var size = cljs.core.first(arglist__23781);
var p__23778 = cljs.core.rest(arglist__23781);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__23778);
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
var in_flight_atom__14564__auto___23782 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14564__auto___23782){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23782,emptych__14565__auto__);
});
var company_search__1 = (function (query){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23782,valch__14566__auto__);
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
;})(in_flight_atom__14564__auto___23782))
;
