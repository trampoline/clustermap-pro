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
var AJAX__delegate = function (url,p__23471){var map__23475 = p__23471;var map__23475__$1 = ((cljs.core.seq_QMARK_.call(null,map__23475))?cljs.core.apply.call(null,cljs.core.hash_map,map__23475):map__23475);var opts = map__23475__$1;var content = cljs.core.get.call(null,map__23475__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23475__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23475__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23475,map__23475__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23475,map__23475__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23475,map__23475__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23475,map__23475__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__23477 = method;var G__23477__$1 = (((G__23477 == null))?null:cljs.core.name.call(null,G__23477));var G__23477__$2 = (((G__23477__$1 == null))?null:clojure.string.upper_case.call(null,G__23477__$1));return G__23477__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23471 = null;if (arguments.length > 1) {
  p__23471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23471);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23478){
var url = cljs.core.first(arglist__23478);
var p__23471 = cljs.core.rest(arglist__23478);
return AJAX__delegate(url,p__23471);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23479){var map__23481 = p__23479;var map__23481__$1 = ((cljs.core.seq_QMARK_.call(null,map__23481))?cljs.core.apply.call(null,cljs.core.hash_map,map__23481):map__23481);var opts = map__23481__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23479 = null;if (arguments.length > 1) {
  p__23479 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23479);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23482){
var url = cljs.core.first(arglist__23482);
var p__23479 = cljs.core.rest(arglist__23482);
return GET__delegate(url,p__23479);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23483){var map__23485 = p__23483;var map__23485__$1 = ((cljs.core.seq_QMARK_.call(null,map__23485))?cljs.core.apply.call(null,cljs.core.hash_map,map__23485):map__23485);var opts = map__23485__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23483 = null;if (arguments.length > 2) {
  p__23483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23483);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23486){
var url = cljs.core.first(arglist__23486);
arglist__23486 = cljs.core.next(arglist__23486);
var content = cljs.core.first(arglist__23486);
var p__23483 = cljs.core.rest(arglist__23486);
return POST__delegate(url,content,p__23483);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23487){var map__23489 = p__23487;var map__23489__$1 = ((cljs.core.seq_QMARK_.call(null,map__23489))?cljs.core.apply.call(null,cljs.core.hash_map,map__23489):map__23489);var opts = map__23489__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23487 = null;if (arguments.length > 2) {
  p__23487 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23487);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23490){
var url = cljs.core.first(arglist__23490);
arglist__23490 = cljs.core.next(arglist__23490);
var content = cljs.core.first(arglist__23490);
var p__23487 = cljs.core.rest(arglist__23490);
return PUT__delegate(url,content,p__23487);
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
return (function (state_23625){var state_val_23626 = (state_23625[(1)]);if((state_val_23626 === (7)))
{var inst_23582 = (state_23625[(7)]);var inst_23581 = (state_23625[(2)]);var inst_23582__$1 = cljs.core.nth.call(null,inst_23581,(0),null);var inst_23583 = cljs.core.nth.call(null,inst_23581,(1),null);var inst_23584 = cljs.core.sequential_QMARK_.call(null,inst_23582__$1);var state_23625__$1 = (function (){var statearr_23627 = state_23625;(statearr_23627[(7)] = inst_23582__$1);
(statearr_23627[(8)] = inst_23583);
return statearr_23627;
})();if(inst_23584)
{var statearr_23628_23663 = state_23625__$1;(statearr_23628_23663[(1)] = (8));
} else
{var statearr_23629_23664 = state_23625__$1;(statearr_23629_23664[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (20)))
{var inst_23582 = (state_23625[(7)]);var state_23625__$1 = state_23625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23625__$1,(23),inst_23582);
} else
{if((state_val_23626 === (1)))
{var state_23625__$1 = state_23625;var statearr_23630_23665 = state_23625__$1;(statearr_23630_23665[(2)] = null);
(statearr_23630_23665[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (4)))
{var state_23625__$1 = state_23625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23625__$1,(7),ocomm);
} else
{if((state_val_23626 === (15)))
{var inst_23605 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23631_23666 = state_23625__$1;(statearr_23631_23666[(2)] = inst_23605);
(statearr_23631_23666[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (21)))
{var state_23625__$1 = state_23625;var statearr_23632_23667 = state_23625__$1;(statearr_23632_23667[(2)] = null);
(statearr_23632_23667[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (13)))
{var inst_23588 = (state_23625[(9)]);var state_23625__$1 = state_23625;var statearr_23633_23668 = state_23625__$1;(statearr_23633_23668[(2)] = inst_23588);
(statearr_23633_23668[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (22)))
{var inst_23614 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23634_23669 = state_23625__$1;(statearr_23634_23669[(2)] = inst_23614);
(statearr_23634_23669[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (6)))
{var inst_23621 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23635_23670 = state_23625__$1;(statearr_23635_23670[(2)] = inst_23621);
(statearr_23635_23670[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (17)))
{var state_23625__$1 = state_23625;var statearr_23636_23671 = state_23625__$1;(statearr_23636_23671[(2)] = null);
(statearr_23636_23671[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (3)))
{var inst_23623 = (state_23625[(2)]);var state_23625__$1 = state_23625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23625__$1,inst_23623);
} else
{if((state_val_23626 === (12)))
{var inst_23607 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23637_23672 = state_23625__$1;(statearr_23637_23672[(2)] = inst_23607);
(statearr_23637_23672[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (2)))
{var state_23625__$1 = state_23625;var statearr_23638_23673 = state_23625__$1;(statearr_23638_23673[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (23)))
{var inst_23611 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23640_23674 = state_23625__$1;(statearr_23640_23674[(2)] = inst_23611);
(statearr_23640_23674[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (19)))
{var inst_23598 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23641_23675 = state_23625__$1;(statearr_23641_23675[(2)] = inst_23598);
(statearr_23641_23675[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (11)))
{var inst_23587 = (state_23625[(10)]);var inst_23590 = cljs.core.empty_QMARK_.call(null,inst_23587);var state_23625__$1 = state_23625;if(inst_23590)
{var statearr_23642_23676 = state_23625__$1;(statearr_23642_23676[(1)] = (13));
} else
{var statearr_23643_23677 = state_23625__$1;(statearr_23643_23677[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (9)))
{var inst_23582 = (state_23625[(7)]);var state_23625__$1 = state_23625;if(cljs.core.truth_(inst_23582))
{var statearr_23644_23678 = state_23625__$1;(statearr_23644_23678[(1)] = (20));
} else
{var statearr_23645_23679 = state_23625__$1;(statearr_23645_23679[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (5)))
{var state_23625__$1 = state_23625;var statearr_23646_23680 = state_23625__$1;(statearr_23646_23680[(2)] = null);
(statearr_23646_23680[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (14)))
{var inst_23587 = (state_23625[(10)]);var inst_23593 = cljs.core.rest.call(null,inst_23587);var inst_23594 = cljs.core.first.call(null,inst_23587);var state_23625__$1 = (function (){var statearr_23647 = state_23625;(statearr_23647[(11)] = inst_23593);
return statearr_23647;
})();if(cljs.core.truth_(inst_23594))
{var statearr_23648_23681 = state_23625__$1;(statearr_23648_23681[(1)] = (16));
} else
{var statearr_23649_23682 = state_23625__$1;(statearr_23649_23682[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (16)))
{var inst_23587 = (state_23625[(10)]);var inst_23596 = cljs.core.first.call(null,inst_23587);var state_23625__$1 = state_23625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23625__$1,(19),inst_23596);
} else
{if((state_val_23626 === (10)))
{var inst_23583 = (state_23625[(8)]);var inst_23616 = (state_23625[(2)]);var inst_23617 = cljs.core.apply.call(null,handler,inst_23616,inst_23583);var state_23625__$1 = (function (){var statearr_23650 = state_23625;(statearr_23650[(12)] = inst_23617);
return statearr_23650;
})();var statearr_23651_23683 = state_23625__$1;(statearr_23651_23683[(2)] = null);
(statearr_23651_23683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (18)))
{var inst_23588 = (state_23625[(9)]);var inst_23593 = (state_23625[(11)]);var inst_23601 = (state_23625[(2)]);var inst_23602 = cljs.core.conj.call(null,inst_23588,inst_23601);var inst_23587 = inst_23593;var inst_23588__$1 = inst_23602;var state_23625__$1 = (function (){var statearr_23652 = state_23625;(statearr_23652[(9)] = inst_23588__$1);
(statearr_23652[(10)] = inst_23587);
return statearr_23652;
})();var statearr_23653_23684 = state_23625__$1;(statearr_23653_23684[(2)] = null);
(statearr_23653_23684[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (8)))
{var inst_23582 = (state_23625[(7)]);var inst_23586 = cljs.core.PersistentVector.EMPTY;var inst_23587 = inst_23582;var inst_23588 = inst_23586;var state_23625__$1 = (function (){var statearr_23654 = state_23625;(statearr_23654[(9)] = inst_23588);
(statearr_23654[(10)] = inst_23587);
return statearr_23654;
})();var statearr_23655_23685 = state_23625__$1;(statearr_23655_23685[(2)] = null);
(statearr_23655_23685[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_23659 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23659[(0)] = state_machine__11462__auto__);
(statearr_23659[(1)] = (1));
return statearr_23659;
});
var state_machine__11462__auto____1 = (function (state_23625){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23625);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23660){if((e23660 instanceof Object))
{var ex__11465__auto__ = e23660;var statearr_23661_23686 = state_23625;(statearr_23661_23686[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23660;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23687 = state_23625;
state_23625 = G__23687;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23625){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_23662 = f__11518__auto__.call(null);(statearr_23662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23662;
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
var G__23690__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23689 = rseq;var rcomm = cljs.core.nth.call(null,vec__23689,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23689,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23690 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23690__delegate.call(this,req_args);};
G__23690.cljs$lang$maxFixedArity = 0;
G__23690.cljs$lang$applyTo = (function (arglist__23691){
var req_args = cljs.core.seq(arglist__23691);
return G__23690__delegate(req_args);
});
G__23690.cljs$core$IFn$_invoke$arity$variadic = G__23690__delegate;
return G__23690;
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
var c__11517__auto___23762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23762,rx){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23762,rx){
return (function (state_23743){var state_val_23744 = (state_23743[(1)]);if((state_val_23744 === (8)))
{var inst_23739 = (state_23743[(2)]);var inst_23740 = cljs.core.async.close_BANG_.call(null,valch);var inst_23741 = cljs.core.async.close_BANG_.call(null,rx);var state_23743__$1 = (function (){var statearr_23745 = state_23743;(statearr_23745[(7)] = inst_23739);
(statearr_23745[(8)] = inst_23740);
return statearr_23745;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23743__$1,inst_23741);
} else
{if((state_val_23744 === (7)))
{var state_23743__$1 = state_23743;var statearr_23746_23763 = state_23743__$1;(statearr_23746_23763[(2)] = null);
(statearr_23746_23763[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (6)))
{var inst_23728 = (state_23743[(9)]);var inst_23736 = cljs.core.async.put_BANG_.call(null,rx,inst_23728);var state_23743__$1 = state_23743;var statearr_23747_23764 = state_23743__$1;(statearr_23747_23764[(2)] = inst_23736);
(statearr_23747_23764[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (5)))
{var inst_23734 = (state_23743[(2)]);var state_23743__$1 = state_23743;if(cljs.core.truth_(inst_23734))
{var statearr_23748_23765 = state_23743__$1;(statearr_23748_23765[(1)] = (6));
} else
{var statearr_23749_23766 = state_23743__$1;(statearr_23749_23766[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (4)))
{var inst_23728 = (state_23743[(9)]);var state_23743__$1 = state_23743;var statearr_23750_23767 = state_23743__$1;(statearr_23750_23767[(2)] = inst_23728);
(statearr_23750_23767[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (3)))
{var inst_23730 = cljs.core.deref.call(null,in_flight_atom);var inst_23731 = cljs.core._EQ_.call(null,inst_23730,valch);var state_23743__$1 = state_23743;var statearr_23751_23768 = state_23743__$1;(statearr_23751_23768[(2)] = inst_23731);
(statearr_23751_23768[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (2)))
{var inst_23728 = (state_23743[(9)]);var inst_23728__$1 = (state_23743[(2)]);var state_23743__$1 = (function (){var statearr_23752 = state_23743;(statearr_23752[(9)] = inst_23728__$1);
return statearr_23752;
})();if(cljs.core.truth_(inst_23728__$1))
{var statearr_23753_23769 = state_23743__$1;(statearr_23753_23769[(1)] = (3));
} else
{var statearr_23754_23770 = state_23743__$1;(statearr_23754_23770[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23744 === (1)))
{var state_23743__$1 = state_23743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23743__$1,(2),valch);
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
});})(c__11517__auto___23762,rx))
;return ((function (switch__11461__auto__,c__11517__auto___23762,rx){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23758 = [null,null,null,null,null,null,null,null,null,null];(statearr_23758[(0)] = state_machine__11462__auto__);
(statearr_23758[(1)] = (1));
return statearr_23758;
});
var state_machine__11462__auto____1 = (function (state_23743){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23743);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23759){if((e23759 instanceof Object))
{var ex__11465__auto__ = e23759;var statearr_23760_23771 = state_23743;(statearr_23760_23771[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23772 = state_23743;
state_23743 = G__23772;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23743){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23762,rx))
})();var state__11519__auto__ = (function (){var statearr_23761 = f__11518__auto__.call(null);(statearr_23761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23762);
return statearr_23761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23762,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,ch){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,ch){
return (function (state_23790){var state_val_23791 = (state_23790[(1)]);if((state_val_23791 === (2)))
{var inst_23787 = (state_23790[(2)]);var inst_23788 = console.log(inst_23787);var state_23790__$1 = state_23790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23790__$1,inst_23788);
} else
{if((state_val_23791 === (1)))
{var state_23790__$1 = state_23790;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23790__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__,ch))
;return ((function (switch__11461__auto__,c__11517__auto__,ch){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23795 = [null,null,null,null,null,null,null];(statearr_23795[(0)] = state_machine__11462__auto__);
(statearr_23795[(1)] = (1));
return statearr_23795;
});
var state_machine__11462__auto____1 = (function (state_23790){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23790);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23796){if((e23796 instanceof Object))
{var ex__11465__auto__ = e23796;var statearr_23797_23799 = state_23790;(statearr_23797_23799[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23790);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23796;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23800 = state_23790;
state_23790 = G__23800;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23790){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,ch))
})();var state__11519__auto__ = (function (){var statearr_23798 = f__11518__auto__.call(null);(statearr_23798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23798;
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
log_api.cljs$lang$applyTo = (function (arglist__23801){
var f = cljs.core.first(arglist__23801);
var args = cljs.core.rest(arglist__23801);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23804){var vec__23805 = p__23804;var k = cljs.core.nth.call(null,vec__23805,(0),null);var v = cljs.core.nth.call(null,vec__23805,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11517__auto___23832 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23832,r){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23832,r){
return (function (state_23823){var state_val_23824 = (state_23823[(1)]);if((state_val_23824 === (2)))
{var inst_23820 = (state_23823[(2)]);var inst_23821 = cljs.core.reset_BANG_.call(null,r,inst_23820);var state_23823__$1 = state_23823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23823__$1,inst_23821);
} else
{if((state_val_23824 === (1)))
{var state_23823__$1 = state_23823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23823__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto___23832,r))
;return ((function (switch__11461__auto__,c__11517__auto___23832,r){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23828 = [null,null,null,null,null,null,null];(statearr_23828[(0)] = state_machine__11462__auto__);
(statearr_23828[(1)] = (1));
return statearr_23828;
});
var state_machine__11462__auto____1 = (function (state_23823){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23823);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23829){if((e23829 instanceof Object))
{var ex__11465__auto__ = e23829;var statearr_23830_23833 = state_23823;(statearr_23830_23833[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23834 = state_23823;
state_23823 = G__23834;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23823){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23832,r))
})();var state__11519__auto__ = (function (){var statearr_23831 = f__11518__auto__.call(null);(statearr_23831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23832);
return statearr_23831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23832,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__23835){
var id = cljs.core.first(arglist__23835);
arglist__23835 = cljs.core.next(arglist__23835);
var tolerance = cljs.core.first(arglist__23835);
var opts = cljs.core.rest(arglist__23835);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__23836){
var id = cljs.core.first(arglist__23836);
var opts = cljs.core.rest(arglist__23836);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__23837){
var ids = cljs.core.first(arglist__23837);
arglist__23837 = cljs.core.next(arglist__23837);
var tolerance = cljs.core.first(arglist__23837);
var opts = cljs.core.rest(arglist__23837);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__23838){var map__23840 = p__23838;var map__23840__$1 = ((cljs.core.seq_QMARK_.call(null,map__23840))?cljs.core.apply.call(null,cljs.core.hash_map,map__23840):map__23840);var opts = map__23840__$1;var boundaryline_ids = cljs.core.get.call(null,map__23840__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__23838 = null;if (arguments.length > 3) {
  p__23838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__23838);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__23841){
var collection_id = cljs.core.first(arglist__23841);
arglist__23841 = cljs.core.next(arglist__23841);
var tolerance = cljs.core.first(arglist__23841);
arglist__23841 = cljs.core.next(arglist__23841);
var bounds = cljs.core.first(arglist__23841);
var p__23838 = cljs.core.rest(arglist__23841);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__23838);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23842){var vec__23844 = p__23842;var type_ids = cljs.core.nth.call(null,vec__23844,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__23842 = null;if (arguments.length > 8) {
  p__23842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23842);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__23845){
var index = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var type = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var blcoll = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var attr = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var filter = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var bounds = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var scale_attr = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var post_scale_factor = cljs.core.first(arglist__23845);
var p__23842 = cljs.core.rest(arglist__23845);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23842);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__23846){var map__23848 = p__23846;var map__23848__$1 = ((cljs.core.seq_QMARK_.call(null,map__23848))?cljs.core.apply.call(null,cljs.core.hash_map,map__23848):map__23848);var q = map__23848__$1;var stats_attr = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__23849){var vec__23851 = p__23849;var type_ids = cljs.core.nth.call(null,vec__23851,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__23849 = null;if (arguments.length > 5) {
  p__23849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__23849);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__23852){
var index = cljs.core.first(arglist__23852);
arglist__23852 = cljs.core.next(arglist__23852);
var type = cljs.core.first(arglist__23852);
arglist__23852 = cljs.core.next(arglist__23852);
var statsattrs = cljs.core.first(arglist__23852);
arglist__23852 = cljs.core.next(arglist__23852);
var filter = cljs.core.first(arglist__23852);
arglist__23852 = cljs.core.next(arglist__23852);
var bounds = cljs.core.first(arglist__23852);
var p__23849 = cljs.core.rest(arglist__23852);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__23849);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__23853){var vec__23855 = p__23853;var type_ids = cljs.core.nth.call(null,vec__23855,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__23853 = null;if (arguments.length > 7) {
  p__23853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__23853);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__23856){
var index = cljs.core.first(arglist__23856);
arglist__23856 = cljs.core.next(arglist__23856);
var type = cljs.core.first(arglist__23856);
arglist__23856 = cljs.core.next(arglist__23856);
var location_attr = cljs.core.first(arglist__23856);
arglist__23856 = cljs.core.next(arglist__23856);
var attrs = cljs.core.first(arglist__23856);
arglist__23856 = cljs.core.next(arglist__23856);
var max_count = cljs.core.first(arglist__23856);
arglist__23856 = cljs.core.next(arglist__23856);
var filter = cljs.core.first(arglist__23856);
arglist__23856 = cljs.core.next(arglist__23856);
var bounds = cljs.core.first(arglist__23856);
var p__23853 = cljs.core.rest(arglist__23856);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__23853);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__23857){var vec__23859 = p__23857;var type_ids = cljs.core.nth.call(null,vec__23859,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__23857 = null;if (arguments.length > 7) {
  p__23857 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__23857);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__23860){
var index = cljs.core.first(arglist__23860);
arglist__23860 = cljs.core.next(arglist__23860);
var type = cljs.core.first(arglist__23860);
arglist__23860 = cljs.core.next(arglist__23860);
var filter_spec = cljs.core.first(arglist__23860);
arglist__23860 = cljs.core.next(arglist__23860);
var bounds = cljs.core.first(arglist__23860);
arglist__23860 = cljs.core.next(arglist__23860);
var sort_spec = cljs.core.first(arglist__23860);
arglist__23860 = cljs.core.next(arglist__23860);
var from = cljs.core.first(arglist__23860);
arglist__23860 = cljs.core.next(arglist__23860);
var size = cljs.core.first(arglist__23860);
var p__23857 = cljs.core.rest(arglist__23860);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__23857);
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
var in_flight_atom__14564__auto___23861 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14564__auto___23861){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23861,emptych__14565__auto__);
});
var company_search__1 = (function (query){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23861,valch__14566__auto__);
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
;})(in_flight_atom__14564__auto___23861))
;
