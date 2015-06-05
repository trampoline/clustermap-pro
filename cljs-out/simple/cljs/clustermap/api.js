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
var AJAX__delegate = function (url,p__23611){var map__23615 = p__23611;var map__23615__$1 = ((cljs.core.seq_QMARK_.call(null,map__23615))?cljs.core.apply.call(null,cljs.core.hash_map,map__23615):map__23615);var opts = map__23615__$1;var content = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23615,map__23615__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23615,map__23615__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23615,map__23615__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23615,map__23615__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__23617 = method;var G__23617__$1 = (((G__23617 == null))?null:cljs.core.name.call(null,G__23617));var G__23617__$2 = (((G__23617__$1 == null))?null:clojure.string.upper_case.call(null,G__23617__$1));return G__23617__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23611 = null;if (arguments.length > 1) {
  p__23611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23611);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23618){
var url = cljs.core.first(arglist__23618);
var p__23611 = cljs.core.rest(arglist__23618);
return AJAX__delegate(url,p__23611);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23619){var map__23621 = p__23619;var map__23621__$1 = ((cljs.core.seq_QMARK_.call(null,map__23621))?cljs.core.apply.call(null,cljs.core.hash_map,map__23621):map__23621);var opts = map__23621__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23619 = null;if (arguments.length > 1) {
  p__23619 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23619);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23622){
var url = cljs.core.first(arglist__23622);
var p__23619 = cljs.core.rest(arglist__23622);
return GET__delegate(url,p__23619);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23623){var map__23625 = p__23623;var map__23625__$1 = ((cljs.core.seq_QMARK_.call(null,map__23625))?cljs.core.apply.call(null,cljs.core.hash_map,map__23625):map__23625);var opts = map__23625__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23623 = null;if (arguments.length > 2) {
  p__23623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23623);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23626){
var url = cljs.core.first(arglist__23626);
arglist__23626 = cljs.core.next(arglist__23626);
var content = cljs.core.first(arglist__23626);
var p__23623 = cljs.core.rest(arglist__23626);
return POST__delegate(url,content,p__23623);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23627){var map__23629 = p__23627;var map__23629__$1 = ((cljs.core.seq_QMARK_.call(null,map__23629))?cljs.core.apply.call(null,cljs.core.hash_map,map__23629):map__23629);var opts = map__23629__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23627 = null;if (arguments.length > 2) {
  p__23627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23627);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23630){
var url = cljs.core.first(arglist__23630);
arglist__23630 = cljs.core.next(arglist__23630);
var content = cljs.core.first(arglist__23630);
var p__23627 = cljs.core.rest(arglist__23630);
return PUT__delegate(url,content,p__23627);
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
return (function (state_23765){var state_val_23766 = (state_23765[(1)]);if((state_val_23766 === (7)))
{var inst_23722 = (state_23765[(7)]);var inst_23721 = (state_23765[(2)]);var inst_23722__$1 = cljs.core.nth.call(null,inst_23721,(0),null);var inst_23723 = cljs.core.nth.call(null,inst_23721,(1),null);var inst_23724 = cljs.core.sequential_QMARK_.call(null,inst_23722__$1);var state_23765__$1 = (function (){var statearr_23767 = state_23765;(statearr_23767[(7)] = inst_23722__$1);
(statearr_23767[(8)] = inst_23723);
return statearr_23767;
})();if(inst_23724)
{var statearr_23768_23803 = state_23765__$1;(statearr_23768_23803[(1)] = (8));
} else
{var statearr_23769_23804 = state_23765__$1;(statearr_23769_23804[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (20)))
{var inst_23722 = (state_23765[(7)]);var state_23765__$1 = state_23765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23765__$1,(23),inst_23722);
} else
{if((state_val_23766 === (1)))
{var state_23765__$1 = state_23765;var statearr_23770_23805 = state_23765__$1;(statearr_23770_23805[(2)] = null);
(statearr_23770_23805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (4)))
{var state_23765__$1 = state_23765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23765__$1,(7),ocomm);
} else
{if((state_val_23766 === (15)))
{var inst_23745 = (state_23765[(2)]);var state_23765__$1 = state_23765;var statearr_23771_23806 = state_23765__$1;(statearr_23771_23806[(2)] = inst_23745);
(statearr_23771_23806[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (21)))
{var state_23765__$1 = state_23765;var statearr_23772_23807 = state_23765__$1;(statearr_23772_23807[(2)] = null);
(statearr_23772_23807[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (13)))
{var inst_23728 = (state_23765[(9)]);var state_23765__$1 = state_23765;var statearr_23773_23808 = state_23765__$1;(statearr_23773_23808[(2)] = inst_23728);
(statearr_23773_23808[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (22)))
{var inst_23754 = (state_23765[(2)]);var state_23765__$1 = state_23765;var statearr_23774_23809 = state_23765__$1;(statearr_23774_23809[(2)] = inst_23754);
(statearr_23774_23809[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (6)))
{var inst_23761 = (state_23765[(2)]);var state_23765__$1 = state_23765;var statearr_23775_23810 = state_23765__$1;(statearr_23775_23810[(2)] = inst_23761);
(statearr_23775_23810[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (17)))
{var state_23765__$1 = state_23765;var statearr_23776_23811 = state_23765__$1;(statearr_23776_23811[(2)] = null);
(statearr_23776_23811[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (3)))
{var inst_23763 = (state_23765[(2)]);var state_23765__$1 = state_23765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23765__$1,inst_23763);
} else
{if((state_val_23766 === (12)))
{var inst_23747 = (state_23765[(2)]);var state_23765__$1 = state_23765;var statearr_23777_23812 = state_23765__$1;(statearr_23777_23812[(2)] = inst_23747);
(statearr_23777_23812[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (2)))
{var state_23765__$1 = state_23765;var statearr_23778_23813 = state_23765__$1;(statearr_23778_23813[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (23)))
{var inst_23751 = (state_23765[(2)]);var state_23765__$1 = state_23765;var statearr_23780_23814 = state_23765__$1;(statearr_23780_23814[(2)] = inst_23751);
(statearr_23780_23814[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (19)))
{var inst_23738 = (state_23765[(2)]);var state_23765__$1 = state_23765;var statearr_23781_23815 = state_23765__$1;(statearr_23781_23815[(2)] = inst_23738);
(statearr_23781_23815[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (11)))
{var inst_23727 = (state_23765[(10)]);var inst_23730 = cljs.core.empty_QMARK_.call(null,inst_23727);var state_23765__$1 = state_23765;if(inst_23730)
{var statearr_23782_23816 = state_23765__$1;(statearr_23782_23816[(1)] = (13));
} else
{var statearr_23783_23817 = state_23765__$1;(statearr_23783_23817[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (9)))
{var inst_23722 = (state_23765[(7)]);var state_23765__$1 = state_23765;if(cljs.core.truth_(inst_23722))
{var statearr_23784_23818 = state_23765__$1;(statearr_23784_23818[(1)] = (20));
} else
{var statearr_23785_23819 = state_23765__$1;(statearr_23785_23819[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (5)))
{var state_23765__$1 = state_23765;var statearr_23786_23820 = state_23765__$1;(statearr_23786_23820[(2)] = null);
(statearr_23786_23820[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (14)))
{var inst_23727 = (state_23765[(10)]);var inst_23733 = cljs.core.rest.call(null,inst_23727);var inst_23734 = cljs.core.first.call(null,inst_23727);var state_23765__$1 = (function (){var statearr_23787 = state_23765;(statearr_23787[(11)] = inst_23733);
return statearr_23787;
})();if(cljs.core.truth_(inst_23734))
{var statearr_23788_23821 = state_23765__$1;(statearr_23788_23821[(1)] = (16));
} else
{var statearr_23789_23822 = state_23765__$1;(statearr_23789_23822[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (16)))
{var inst_23727 = (state_23765[(10)]);var inst_23736 = cljs.core.first.call(null,inst_23727);var state_23765__$1 = state_23765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23765__$1,(19),inst_23736);
} else
{if((state_val_23766 === (10)))
{var inst_23723 = (state_23765[(8)]);var inst_23756 = (state_23765[(2)]);var inst_23757 = cljs.core.apply.call(null,handler,inst_23756,inst_23723);var state_23765__$1 = (function (){var statearr_23790 = state_23765;(statearr_23790[(12)] = inst_23757);
return statearr_23790;
})();var statearr_23791_23823 = state_23765__$1;(statearr_23791_23823[(2)] = null);
(statearr_23791_23823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (18)))
{var inst_23733 = (state_23765[(11)]);var inst_23728 = (state_23765[(9)]);var inst_23741 = (state_23765[(2)]);var inst_23742 = cljs.core.conj.call(null,inst_23728,inst_23741);var inst_23727 = inst_23733;var inst_23728__$1 = inst_23742;var state_23765__$1 = (function (){var statearr_23792 = state_23765;(statearr_23792[(10)] = inst_23727);
(statearr_23792[(9)] = inst_23728__$1);
return statearr_23792;
})();var statearr_23793_23824 = state_23765__$1;(statearr_23793_23824[(2)] = null);
(statearr_23793_23824[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23766 === (8)))
{var inst_23722 = (state_23765[(7)]);var inst_23726 = cljs.core.PersistentVector.EMPTY;var inst_23727 = inst_23722;var inst_23728 = inst_23726;var state_23765__$1 = (function (){var statearr_23794 = state_23765;(statearr_23794[(10)] = inst_23727);
(statearr_23794[(9)] = inst_23728);
return statearr_23794;
})();var statearr_23795_23825 = state_23765__$1;(statearr_23795_23825[(2)] = null);
(statearr_23795_23825[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_23799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23799[(0)] = state_machine__11462__auto__);
(statearr_23799[(1)] = (1));
return statearr_23799;
});
var state_machine__11462__auto____1 = (function (state_23765){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23765);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23800){if((e23800 instanceof Object))
{var ex__11465__auto__ = e23800;var statearr_23801_23826 = state_23765;(statearr_23801_23826[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23800;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23827 = state_23765;
state_23765 = G__23827;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23765){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_23802 = f__11518__auto__.call(null);(statearr_23802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23802;
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
var G__23830__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23829 = rseq;var rcomm = cljs.core.nth.call(null,vec__23829,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23829,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23830 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23830__delegate.call(this,req_args);};
G__23830.cljs$lang$maxFixedArity = 0;
G__23830.cljs$lang$applyTo = (function (arglist__23831){
var req_args = cljs.core.seq(arglist__23831);
return G__23830__delegate(req_args);
});
G__23830.cljs$core$IFn$_invoke$arity$variadic = G__23830__delegate;
return G__23830;
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
var c__11517__auto___23902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23902,rx){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23902,rx){
return (function (state_23883){var state_val_23884 = (state_23883[(1)]);if((state_val_23884 === (8)))
{var inst_23879 = (state_23883[(2)]);var inst_23880 = cljs.core.async.close_BANG_.call(null,valch);var inst_23881 = cljs.core.async.close_BANG_.call(null,rx);var state_23883__$1 = (function (){var statearr_23885 = state_23883;(statearr_23885[(7)] = inst_23879);
(statearr_23885[(8)] = inst_23880);
return statearr_23885;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23883__$1,inst_23881);
} else
{if((state_val_23884 === (7)))
{var state_23883__$1 = state_23883;var statearr_23886_23903 = state_23883__$1;(statearr_23886_23903[(2)] = null);
(statearr_23886_23903[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (6)))
{var inst_23868 = (state_23883[(9)]);var inst_23876 = cljs.core.async.put_BANG_.call(null,rx,inst_23868);var state_23883__$1 = state_23883;var statearr_23887_23904 = state_23883__$1;(statearr_23887_23904[(2)] = inst_23876);
(statearr_23887_23904[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (5)))
{var inst_23874 = (state_23883[(2)]);var state_23883__$1 = state_23883;if(cljs.core.truth_(inst_23874))
{var statearr_23888_23905 = state_23883__$1;(statearr_23888_23905[(1)] = (6));
} else
{var statearr_23889_23906 = state_23883__$1;(statearr_23889_23906[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (4)))
{var inst_23868 = (state_23883[(9)]);var state_23883__$1 = state_23883;var statearr_23890_23907 = state_23883__$1;(statearr_23890_23907[(2)] = inst_23868);
(statearr_23890_23907[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (3)))
{var inst_23870 = cljs.core.deref.call(null,in_flight_atom);var inst_23871 = cljs.core._EQ_.call(null,inst_23870,valch);var state_23883__$1 = state_23883;var statearr_23891_23908 = state_23883__$1;(statearr_23891_23908[(2)] = inst_23871);
(statearr_23891_23908[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (2)))
{var inst_23868 = (state_23883[(9)]);var inst_23868__$1 = (state_23883[(2)]);var state_23883__$1 = (function (){var statearr_23892 = state_23883;(statearr_23892[(9)] = inst_23868__$1);
return statearr_23892;
})();if(cljs.core.truth_(inst_23868__$1))
{var statearr_23893_23909 = state_23883__$1;(statearr_23893_23909[(1)] = (3));
} else
{var statearr_23894_23910 = state_23883__$1;(statearr_23894_23910[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (1)))
{var state_23883__$1 = state_23883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23883__$1,(2),valch);
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
});})(c__11517__auto___23902,rx))
;return ((function (switch__11461__auto__,c__11517__auto___23902,rx){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23898 = [null,null,null,null,null,null,null,null,null,null];(statearr_23898[(0)] = state_machine__11462__auto__);
(statearr_23898[(1)] = (1));
return statearr_23898;
});
var state_machine__11462__auto____1 = (function (state_23883){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23883);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23899){if((e23899 instanceof Object))
{var ex__11465__auto__ = e23899;var statearr_23900_23911 = state_23883;(statearr_23900_23911[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23912 = state_23883;
state_23883 = G__23912;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23883){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23902,rx))
})();var state__11519__auto__ = (function (){var statearr_23901 = f__11518__auto__.call(null);(statearr_23901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23902);
return statearr_23901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23902,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,ch){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,ch){
return (function (state_23930){var state_val_23931 = (state_23930[(1)]);if((state_val_23931 === (2)))
{var inst_23927 = (state_23930[(2)]);var inst_23928 = console.log(inst_23927);var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23930__$1,inst_23928);
} else
{if((state_val_23931 === (1)))
{var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23930__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__,ch))
;return ((function (switch__11461__auto__,c__11517__auto__,ch){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23935 = [null,null,null,null,null,null,null];(statearr_23935[(0)] = state_machine__11462__auto__);
(statearr_23935[(1)] = (1));
return statearr_23935;
});
var state_machine__11462__auto____1 = (function (state_23930){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23930);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23936){if((e23936 instanceof Object))
{var ex__11465__auto__ = e23936;var statearr_23937_23939 = state_23930;(statearr_23937_23939[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23930);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23940 = state_23930;
state_23930 = G__23940;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23930){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,ch))
})();var state__11519__auto__ = (function (){var statearr_23938 = f__11518__auto__.call(null);(statearr_23938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23938;
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
log_api.cljs$lang$applyTo = (function (arglist__23941){
var f = cljs.core.first(arglist__23941);
var args = cljs.core.rest(arglist__23941);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23944){var vec__23945 = p__23944;var k = cljs.core.nth.call(null,vec__23945,(0),null);var v = cljs.core.nth.call(null,vec__23945,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11517__auto___23972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23972,r){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23972,r){
return (function (state_23963){var state_val_23964 = (state_23963[(1)]);if((state_val_23964 === (2)))
{var inst_23960 = (state_23963[(2)]);var inst_23961 = cljs.core.reset_BANG_.call(null,r,inst_23960);var state_23963__$1 = state_23963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23963__$1,inst_23961);
} else
{if((state_val_23964 === (1)))
{var state_23963__$1 = state_23963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23963__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto___23972,r))
;return ((function (switch__11461__auto__,c__11517__auto___23972,r){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23968 = [null,null,null,null,null,null,null];(statearr_23968[(0)] = state_machine__11462__auto__);
(statearr_23968[(1)] = (1));
return statearr_23968;
});
var state_machine__11462__auto____1 = (function (state_23963){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23963);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23969){if((e23969 instanceof Object))
{var ex__11465__auto__ = e23969;var statearr_23970_23973 = state_23963;(statearr_23970_23973[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23974 = state_23963;
state_23963 = G__23974;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23963){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23972,r))
})();var state__11519__auto__ = (function (){var statearr_23971 = f__11518__auto__.call(null);(statearr_23971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23972);
return statearr_23971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23972,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__23975){
var id = cljs.core.first(arglist__23975);
arglist__23975 = cljs.core.next(arglist__23975);
var tolerance = cljs.core.first(arglist__23975);
var opts = cljs.core.rest(arglist__23975);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__23976){
var id = cljs.core.first(arglist__23976);
var opts = cljs.core.rest(arglist__23976);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__23977){
var ids = cljs.core.first(arglist__23977);
arglist__23977 = cljs.core.next(arglist__23977);
var tolerance = cljs.core.first(arglist__23977);
var opts = cljs.core.rest(arglist__23977);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__23978){var map__23980 = p__23978;var map__23980__$1 = ((cljs.core.seq_QMARK_.call(null,map__23980))?cljs.core.apply.call(null,cljs.core.hash_map,map__23980):map__23980);var opts = map__23980__$1;var boundaryline_ids = cljs.core.get.call(null,map__23980__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__23978 = null;if (arguments.length > 3) {
  p__23978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__23978);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__23981){
var collection_id = cljs.core.first(arglist__23981);
arglist__23981 = cljs.core.next(arglist__23981);
var tolerance = cljs.core.first(arglist__23981);
arglist__23981 = cljs.core.next(arglist__23981);
var bounds = cljs.core.first(arglist__23981);
var p__23978 = cljs.core.rest(arglist__23981);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__23978);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23982){var vec__23984 = p__23982;var type_ids = cljs.core.nth.call(null,vec__23984,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__23982 = null;if (arguments.length > 8) {
  p__23982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23982);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__23985){
var index = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var type = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var blcoll = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var attr = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var filter = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var bounds = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var scale_attr = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var post_scale_factor = cljs.core.first(arglist__23985);
var p__23982 = cljs.core.rest(arglist__23985);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23982);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__23986){var map__23988 = p__23986;var map__23988__$1 = ((cljs.core.seq_QMARK_.call(null,map__23988))?cljs.core.apply.call(null,cljs.core.hash_map,map__23988):map__23988);var q = map__23988__$1;var stats_attr = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__23988__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
var in_flight_atom__14564__auto___23992 = cljs.core.atom.call(null,null);/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = ((function (in_flight_atom__14564__auto___23992){
return (function() {
var summary_stats = null;
var summary_stats__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23992,emptych__14565__auto__);
});
var summary_stats__6 = (function() { 
var G__23993__delegate = function (index,type,statsattrs,filter,bounds,p__23989){var vec__23991 = p__23989;var type_ids = cljs.core.nth.call(null,vec__23991,(0),null);var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23992,valch__14566__auto__);
};
var G__23993 = function (index,type,statsattrs,filter,bounds,var_args){
var p__23989 = null;if (arguments.length > 5) {
  p__23989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23993__delegate.call(this,index,type,statsattrs,filter,bounds,p__23989);};
G__23993.cljs$lang$maxFixedArity = 5;
G__23993.cljs$lang$applyTo = (function (arglist__23994){
var index = cljs.core.first(arglist__23994);
arglist__23994 = cljs.core.next(arglist__23994);
var type = cljs.core.first(arglist__23994);
arglist__23994 = cljs.core.next(arglist__23994);
var statsattrs = cljs.core.first(arglist__23994);
arglist__23994 = cljs.core.next(arglist__23994);
var filter = cljs.core.first(arglist__23994);
arglist__23994 = cljs.core.next(arglist__23994);
var bounds = cljs.core.first(arglist__23994);
var p__23989 = cljs.core.rest(arglist__23994);
return G__23993__delegate(index,type,statsattrs,filter,bounds,p__23989);
});
G__23993.cljs$core$IFn$_invoke$arity$variadic = G__23993__delegate;
return G__23993;
})()
;
summary_stats = function(index,type,statsattrs,filter,bounds,var_args){
var p__23989 = var_args;
switch(arguments.length){
case 0:
return summary_stats__0.call(this);
default:
return summary_stats__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = summary_stats__6.cljs$lang$applyTo;
summary_stats.cljs$core$IFn$_invoke$arity$0 = summary_stats__0;
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats;
})()
;})(in_flight_atom__14564__auto___23992))
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__23995){var vec__23997 = p__23995;var type_ids = cljs.core.nth.call(null,vec__23997,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__23995 = null;if (arguments.length > 7) {
  p__23995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__23995);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__23998){
var index = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var type = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var location_attr = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var attrs = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var max_count = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var filter = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var bounds = cljs.core.first(arglist__23998);
var p__23995 = cljs.core.rest(arglist__23998);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__23995);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__23999){var vec__24001 = p__23999;var type_ids = cljs.core.nth.call(null,vec__24001,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__23999 = null;if (arguments.length > 7) {
  p__23999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__23999);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__24002){
var index = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var type = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var filter_spec = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var bounds = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var sort_spec = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var from = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var size = cljs.core.first(arglist__24002);
var p__23999 = cljs.core.rest(arglist__24002);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__23999);
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
var in_flight_atom__14564__auto___24003 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14564__auto___24003){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___24003,emptych__14565__auto__);
});
var company_search__1 = (function (query){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___24003,valch__14566__auto__);
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
;})(in_flight_atom__14564__auto___24003))
;
