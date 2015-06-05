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
var AJAX__delegate = function (url,p__23615){var map__23619 = p__23615;var map__23619__$1 = ((cljs.core.seq_QMARK_.call(null,map__23619))?cljs.core.apply.call(null,cljs.core.hash_map,map__23619):map__23619);var opts = map__23619__$1;var content = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23619,map__23619__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23619,map__23619__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23619,map__23619__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23619,map__23619__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__23621 = method;var G__23621__$1 = (((G__23621 == null))?null:cljs.core.name.call(null,G__23621));var G__23621__$2 = (((G__23621__$1 == null))?null:clojure.string.upper_case.call(null,G__23621__$1));return G__23621__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23615 = null;if (arguments.length > 1) {
  p__23615 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23615);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23622){
var url = cljs.core.first(arglist__23622);
var p__23615 = cljs.core.rest(arglist__23622);
return AJAX__delegate(url,p__23615);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23623){var map__23625 = p__23623;var map__23625__$1 = ((cljs.core.seq_QMARK_.call(null,map__23625))?cljs.core.apply.call(null,cljs.core.hash_map,map__23625):map__23625);var opts = map__23625__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23623 = null;if (arguments.length > 1) {
  p__23623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23623);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23626){
var url = cljs.core.first(arglist__23626);
var p__23623 = cljs.core.rest(arglist__23626);
return GET__delegate(url,p__23623);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23627){var map__23629 = p__23627;var map__23629__$1 = ((cljs.core.seq_QMARK_.call(null,map__23629))?cljs.core.apply.call(null,cljs.core.hash_map,map__23629):map__23629);var opts = map__23629__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23627 = null;if (arguments.length > 2) {
  p__23627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23627);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23630){
var url = cljs.core.first(arglist__23630);
arglist__23630 = cljs.core.next(arglist__23630);
var content = cljs.core.first(arglist__23630);
var p__23627 = cljs.core.rest(arglist__23630);
return POST__delegate(url,content,p__23627);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23631){var map__23633 = p__23631;var map__23633__$1 = ((cljs.core.seq_QMARK_.call(null,map__23633))?cljs.core.apply.call(null,cljs.core.hash_map,map__23633):map__23633);var opts = map__23633__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23631 = null;if (arguments.length > 2) {
  p__23631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23631);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23634){
var url = cljs.core.first(arglist__23634);
arglist__23634 = cljs.core.next(arglist__23634);
var content = cljs.core.first(arglist__23634);
var p__23631 = cljs.core.rest(arglist__23634);
return PUT__delegate(url,content,p__23631);
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
return (function (state_23769){var state_val_23770 = (state_23769[(1)]);if((state_val_23770 === (7)))
{var inst_23726 = (state_23769[(7)]);var inst_23725 = (state_23769[(2)]);var inst_23726__$1 = cljs.core.nth.call(null,inst_23725,(0),null);var inst_23727 = cljs.core.nth.call(null,inst_23725,(1),null);var inst_23728 = cljs.core.sequential_QMARK_.call(null,inst_23726__$1);var state_23769__$1 = (function (){var statearr_23771 = state_23769;(statearr_23771[(7)] = inst_23726__$1);
(statearr_23771[(8)] = inst_23727);
return statearr_23771;
})();if(inst_23728)
{var statearr_23772_23807 = state_23769__$1;(statearr_23772_23807[(1)] = (8));
} else
{var statearr_23773_23808 = state_23769__$1;(statearr_23773_23808[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (20)))
{var inst_23726 = (state_23769[(7)]);var state_23769__$1 = state_23769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23769__$1,(23),inst_23726);
} else
{if((state_val_23770 === (1)))
{var state_23769__$1 = state_23769;var statearr_23774_23809 = state_23769__$1;(statearr_23774_23809[(2)] = null);
(statearr_23774_23809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (4)))
{var state_23769__$1 = state_23769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23769__$1,(7),ocomm);
} else
{if((state_val_23770 === (15)))
{var inst_23749 = (state_23769[(2)]);var state_23769__$1 = state_23769;var statearr_23775_23810 = state_23769__$1;(statearr_23775_23810[(2)] = inst_23749);
(statearr_23775_23810[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (21)))
{var state_23769__$1 = state_23769;var statearr_23776_23811 = state_23769__$1;(statearr_23776_23811[(2)] = null);
(statearr_23776_23811[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (13)))
{var inst_23732 = (state_23769[(9)]);var state_23769__$1 = state_23769;var statearr_23777_23812 = state_23769__$1;(statearr_23777_23812[(2)] = inst_23732);
(statearr_23777_23812[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (22)))
{var inst_23758 = (state_23769[(2)]);var state_23769__$1 = state_23769;var statearr_23778_23813 = state_23769__$1;(statearr_23778_23813[(2)] = inst_23758);
(statearr_23778_23813[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (6)))
{var inst_23765 = (state_23769[(2)]);var state_23769__$1 = state_23769;var statearr_23779_23814 = state_23769__$1;(statearr_23779_23814[(2)] = inst_23765);
(statearr_23779_23814[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (17)))
{var state_23769__$1 = state_23769;var statearr_23780_23815 = state_23769__$1;(statearr_23780_23815[(2)] = null);
(statearr_23780_23815[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (3)))
{var inst_23767 = (state_23769[(2)]);var state_23769__$1 = state_23769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23769__$1,inst_23767);
} else
{if((state_val_23770 === (12)))
{var inst_23751 = (state_23769[(2)]);var state_23769__$1 = state_23769;var statearr_23781_23816 = state_23769__$1;(statearr_23781_23816[(2)] = inst_23751);
(statearr_23781_23816[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (2)))
{var state_23769__$1 = state_23769;var statearr_23782_23817 = state_23769__$1;(statearr_23782_23817[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (23)))
{var inst_23755 = (state_23769[(2)]);var state_23769__$1 = state_23769;var statearr_23784_23818 = state_23769__$1;(statearr_23784_23818[(2)] = inst_23755);
(statearr_23784_23818[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (19)))
{var inst_23742 = (state_23769[(2)]);var state_23769__$1 = state_23769;var statearr_23785_23819 = state_23769__$1;(statearr_23785_23819[(2)] = inst_23742);
(statearr_23785_23819[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (11)))
{var inst_23731 = (state_23769[(10)]);var inst_23734 = cljs.core.empty_QMARK_.call(null,inst_23731);var state_23769__$1 = state_23769;if(inst_23734)
{var statearr_23786_23820 = state_23769__$1;(statearr_23786_23820[(1)] = (13));
} else
{var statearr_23787_23821 = state_23769__$1;(statearr_23787_23821[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (9)))
{var inst_23726 = (state_23769[(7)]);var state_23769__$1 = state_23769;if(cljs.core.truth_(inst_23726))
{var statearr_23788_23822 = state_23769__$1;(statearr_23788_23822[(1)] = (20));
} else
{var statearr_23789_23823 = state_23769__$1;(statearr_23789_23823[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (5)))
{var state_23769__$1 = state_23769;var statearr_23790_23824 = state_23769__$1;(statearr_23790_23824[(2)] = null);
(statearr_23790_23824[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (14)))
{var inst_23731 = (state_23769[(10)]);var inst_23737 = cljs.core.rest.call(null,inst_23731);var inst_23738 = cljs.core.first.call(null,inst_23731);var state_23769__$1 = (function (){var statearr_23791 = state_23769;(statearr_23791[(11)] = inst_23737);
return statearr_23791;
})();if(cljs.core.truth_(inst_23738))
{var statearr_23792_23825 = state_23769__$1;(statearr_23792_23825[(1)] = (16));
} else
{var statearr_23793_23826 = state_23769__$1;(statearr_23793_23826[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (16)))
{var inst_23731 = (state_23769[(10)]);var inst_23740 = cljs.core.first.call(null,inst_23731);var state_23769__$1 = state_23769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23769__$1,(19),inst_23740);
} else
{if((state_val_23770 === (10)))
{var inst_23727 = (state_23769[(8)]);var inst_23760 = (state_23769[(2)]);var inst_23761 = cljs.core.apply.call(null,handler,inst_23760,inst_23727);var state_23769__$1 = (function (){var statearr_23794 = state_23769;(statearr_23794[(12)] = inst_23761);
return statearr_23794;
})();var statearr_23795_23827 = state_23769__$1;(statearr_23795_23827[(2)] = null);
(statearr_23795_23827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (18)))
{var inst_23732 = (state_23769[(9)]);var inst_23737 = (state_23769[(11)]);var inst_23745 = (state_23769[(2)]);var inst_23746 = cljs.core.conj.call(null,inst_23732,inst_23745);var inst_23731 = inst_23737;var inst_23732__$1 = inst_23746;var state_23769__$1 = (function (){var statearr_23796 = state_23769;(statearr_23796[(9)] = inst_23732__$1);
(statearr_23796[(10)] = inst_23731);
return statearr_23796;
})();var statearr_23797_23828 = state_23769__$1;(statearr_23797_23828[(2)] = null);
(statearr_23797_23828[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23770 === (8)))
{var inst_23726 = (state_23769[(7)]);var inst_23730 = cljs.core.PersistentVector.EMPTY;var inst_23731 = inst_23726;var inst_23732 = inst_23730;var state_23769__$1 = (function (){var statearr_23798 = state_23769;(statearr_23798[(9)] = inst_23732);
(statearr_23798[(10)] = inst_23731);
return statearr_23798;
})();var statearr_23799_23829 = state_23769__$1;(statearr_23799_23829[(2)] = null);
(statearr_23799_23829[(1)] = (11));
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
var state_machine__11462__auto____0 = (function (){var statearr_23803 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23803[(0)] = state_machine__11462__auto__);
(statearr_23803[(1)] = (1));
return statearr_23803;
});
var state_machine__11462__auto____1 = (function (state_23769){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23769);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23804){if((e23804 instanceof Object))
{var ex__11465__auto__ = e23804;var statearr_23805_23830 = state_23769;(statearr_23805_23830[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23804;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23831 = state_23769;
state_23769 = G__23831;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23769){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_23806 = f__11518__auto__.call(null);(statearr_23806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23806;
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
var G__23834__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23833 = rseq;var rcomm = cljs.core.nth.call(null,vec__23833,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23833,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23834 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23834__delegate.call(this,req_args);};
G__23834.cljs$lang$maxFixedArity = 0;
G__23834.cljs$lang$applyTo = (function (arglist__23835){
var req_args = cljs.core.seq(arglist__23835);
return G__23834__delegate(req_args);
});
G__23834.cljs$core$IFn$_invoke$arity$variadic = G__23834__delegate;
return G__23834;
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
var c__11517__auto___23906 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23906,rx){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23906,rx){
return (function (state_23887){var state_val_23888 = (state_23887[(1)]);if((state_val_23888 === (8)))
{var inst_23883 = (state_23887[(2)]);var inst_23884 = cljs.core.async.close_BANG_.call(null,valch);var inst_23885 = cljs.core.async.close_BANG_.call(null,rx);var state_23887__$1 = (function (){var statearr_23889 = state_23887;(statearr_23889[(7)] = inst_23883);
(statearr_23889[(8)] = inst_23884);
return statearr_23889;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else
{if((state_val_23888 === (7)))
{var state_23887__$1 = state_23887;var statearr_23890_23907 = state_23887__$1;(statearr_23890_23907[(2)] = null);
(statearr_23890_23907[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (6)))
{var inst_23872 = (state_23887[(9)]);var inst_23880 = cljs.core.async.put_BANG_.call(null,rx,inst_23872);var state_23887__$1 = state_23887;var statearr_23891_23908 = state_23887__$1;(statearr_23891_23908[(2)] = inst_23880);
(statearr_23891_23908[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (5)))
{var inst_23878 = (state_23887[(2)]);var state_23887__$1 = state_23887;if(cljs.core.truth_(inst_23878))
{var statearr_23892_23909 = state_23887__$1;(statearr_23892_23909[(1)] = (6));
} else
{var statearr_23893_23910 = state_23887__$1;(statearr_23893_23910[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (4)))
{var inst_23872 = (state_23887[(9)]);var state_23887__$1 = state_23887;var statearr_23894_23911 = state_23887__$1;(statearr_23894_23911[(2)] = inst_23872);
(statearr_23894_23911[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (3)))
{var inst_23874 = cljs.core.deref.call(null,in_flight_atom);var inst_23875 = cljs.core._EQ_.call(null,inst_23874,valch);var state_23887__$1 = state_23887;var statearr_23895_23912 = state_23887__$1;(statearr_23895_23912[(2)] = inst_23875);
(statearr_23895_23912[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (2)))
{var inst_23872 = (state_23887[(9)]);var inst_23872__$1 = (state_23887[(2)]);var state_23887__$1 = (function (){var statearr_23896 = state_23887;(statearr_23896[(9)] = inst_23872__$1);
return statearr_23896;
})();if(cljs.core.truth_(inst_23872__$1))
{var statearr_23897_23913 = state_23887__$1;(statearr_23897_23913[(1)] = (3));
} else
{var statearr_23898_23914 = state_23887__$1;(statearr_23898_23914[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (1)))
{var state_23887__$1 = state_23887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(2),valch);
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
});})(c__11517__auto___23906,rx))
;return ((function (switch__11461__auto__,c__11517__auto___23906,rx){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23902 = [null,null,null,null,null,null,null,null,null,null];(statearr_23902[(0)] = state_machine__11462__auto__);
(statearr_23902[(1)] = (1));
return statearr_23902;
});
var state_machine__11462__auto____1 = (function (state_23887){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23887);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23903){if((e23903 instanceof Object))
{var ex__11465__auto__ = e23903;var statearr_23904_23915 = state_23887;(statearr_23904_23915[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23903;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23916 = state_23887;
state_23887 = G__23916;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23906,rx))
})();var state__11519__auto__ = (function (){var statearr_23905 = f__11518__auto__.call(null);(statearr_23905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23906);
return statearr_23905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23906,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,ch){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,ch){
return (function (state_23934){var state_val_23935 = (state_23934[(1)]);if((state_val_23935 === (2)))
{var inst_23931 = (state_23934[(2)]);var inst_23932 = console.log(inst_23931);var state_23934__$1 = state_23934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23934__$1,inst_23932);
} else
{if((state_val_23935 === (1)))
{var state_23934__$1 = state_23934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23934__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__,ch))
;return ((function (switch__11461__auto__,c__11517__auto__,ch){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23939 = [null,null,null,null,null,null,null];(statearr_23939[(0)] = state_machine__11462__auto__);
(statearr_23939[(1)] = (1));
return statearr_23939;
});
var state_machine__11462__auto____1 = (function (state_23934){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23934);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23940){if((e23940 instanceof Object))
{var ex__11465__auto__ = e23940;var statearr_23941_23943 = state_23934;(statearr_23941_23943[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23940;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23944 = state_23934;
state_23934 = G__23944;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23934){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,ch))
})();var state__11519__auto__ = (function (){var statearr_23942 = f__11518__auto__.call(null);(statearr_23942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23942;
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
log_api.cljs$lang$applyTo = (function (arglist__23945){
var f = cljs.core.first(arglist__23945);
var args = cljs.core.rest(arglist__23945);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23948){var vec__23949 = p__23948;var k = cljs.core.nth.call(null,vec__23949,(0),null);var v = cljs.core.nth.call(null,vec__23949,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11517__auto___23976 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto___23976,r){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto___23976,r){
return (function (state_23967){var state_val_23968 = (state_23967[(1)]);if((state_val_23968 === (2)))
{var inst_23964 = (state_23967[(2)]);var inst_23965 = cljs.core.reset_BANG_.call(null,r,inst_23964);var state_23967__$1 = state_23967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23967__$1,inst_23965);
} else
{if((state_val_23968 === (1)))
{var state_23967__$1 = state_23967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23967__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto___23976,r))
;return ((function (switch__11461__auto__,c__11517__auto___23976,r){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23972 = [null,null,null,null,null,null,null];(statearr_23972[(0)] = state_machine__11462__auto__);
(statearr_23972[(1)] = (1));
return statearr_23972;
});
var state_machine__11462__auto____1 = (function (state_23967){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23967);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23973){if((e23973 instanceof Object))
{var ex__11465__auto__ = e23973;var statearr_23974_23977 = state_23967;(statearr_23974_23977[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23973;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23978 = state_23967;
state_23967 = G__23978;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23967){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto___23976,r))
})();var state__11519__auto__ = (function (){var statearr_23975 = f__11518__auto__.call(null);(statearr_23975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto___23976);
return statearr_23975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto___23976,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__23979){
var id = cljs.core.first(arglist__23979);
arglist__23979 = cljs.core.next(arglist__23979);
var tolerance = cljs.core.first(arglist__23979);
var opts = cljs.core.rest(arglist__23979);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__23980){
var id = cljs.core.first(arglist__23980);
var opts = cljs.core.rest(arglist__23980);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__23981){
var ids = cljs.core.first(arglist__23981);
arglist__23981 = cljs.core.next(arglist__23981);
var tolerance = cljs.core.first(arglist__23981);
var opts = cljs.core.rest(arglist__23981);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__23982){var map__23984 = p__23982;var map__23984__$1 = ((cljs.core.seq_QMARK_.call(null,map__23984))?cljs.core.apply.call(null,cljs.core.hash_map,map__23984):map__23984);var opts = map__23984__$1;var boundaryline_ids = cljs.core.get.call(null,map__23984__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__23982 = null;if (arguments.length > 3) {
  p__23982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__23982);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__23985){
var collection_id = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var tolerance = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var bounds = cljs.core.first(arglist__23985);
var p__23982 = cljs.core.rest(arglist__23985);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__23982);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23986){var vec__23988 = p__23986;var type_ids = cljs.core.nth.call(null,vec__23988,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__23986 = null;if (arguments.length > 8) {
  p__23986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23986);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__23989){
var index = cljs.core.first(arglist__23989);
arglist__23989 = cljs.core.next(arglist__23989);
var type = cljs.core.first(arglist__23989);
arglist__23989 = cljs.core.next(arglist__23989);
var blcoll = cljs.core.first(arglist__23989);
arglist__23989 = cljs.core.next(arglist__23989);
var attr = cljs.core.first(arglist__23989);
arglist__23989 = cljs.core.next(arglist__23989);
var filter = cljs.core.first(arglist__23989);
arglist__23989 = cljs.core.next(arglist__23989);
var bounds = cljs.core.first(arglist__23989);
arglist__23989 = cljs.core.next(arglist__23989);
var scale_attr = cljs.core.first(arglist__23989);
arglist__23989 = cljs.core.next(arglist__23989);
var post_scale_factor = cljs.core.first(arglist__23989);
var p__23986 = cljs.core.rest(arglist__23989);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__23986);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__23990){var map__23992 = p__23990;var map__23992__$1 = ((cljs.core.seq_QMARK_.call(null,map__23992))?cljs.core.apply.call(null,cljs.core.hash_map,map__23992):map__23992);var q = map__23992__$1;var stats_attr = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
var in_flight_atom__14564__auto___23996 = cljs.core.atom.call(null,null);/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = ((function (in_flight_atom__14564__auto___23996){
return (function() {
var summary_stats = null;
var summary_stats__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23996,emptych__14565__auto__);
});
var summary_stats__6 = (function() { 
var G__23997__delegate = function (index,type,statsattrs,filter,bounds,p__23993){var vec__23995 = p__23993;var type_ids = cljs.core.nth.call(null,vec__23995,(0),null);var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___23996,valch__14566__auto__);
};
var G__23997 = function (index,type,statsattrs,filter,bounds,var_args){
var p__23993 = null;if (arguments.length > 5) {
  p__23993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23997__delegate.call(this,index,type,statsattrs,filter,bounds,p__23993);};
G__23997.cljs$lang$maxFixedArity = 5;
G__23997.cljs$lang$applyTo = (function (arglist__23998){
var index = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var type = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var statsattrs = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var filter = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var bounds = cljs.core.first(arglist__23998);
var p__23993 = cljs.core.rest(arglist__23998);
return G__23997__delegate(index,type,statsattrs,filter,bounds,p__23993);
});
G__23997.cljs$core$IFn$_invoke$arity$variadic = G__23997__delegate;
return G__23997;
})()
;
summary_stats = function(index,type,statsattrs,filter,bounds,var_args){
var p__23993 = var_args;
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
;})(in_flight_atom__14564__auto___23996))
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__23999){var vec__24001 = p__23999;var type_ids = cljs.core.nth.call(null,vec__24001,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__23999 = null;if (arguments.length > 7) {
  p__23999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__23999);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__24002){
var index = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var type = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var location_attr = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var attrs = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var max_count = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var filter = cljs.core.first(arglist__24002);
arglist__24002 = cljs.core.next(arglist__24002);
var bounds = cljs.core.first(arglist__24002);
var p__23999 = cljs.core.rest(arglist__24002);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__23999);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__24003){var vec__24005 = p__24003;var type_ids = cljs.core.nth.call(null,vec__24005,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__24003 = null;if (arguments.length > 7) {
  p__24003 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__24003);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__24006){
var index = cljs.core.first(arglist__24006);
arglist__24006 = cljs.core.next(arglist__24006);
var type = cljs.core.first(arglist__24006);
arglist__24006 = cljs.core.next(arglist__24006);
var filter_spec = cljs.core.first(arglist__24006);
arglist__24006 = cljs.core.next(arglist__24006);
var bounds = cljs.core.first(arglist__24006);
arglist__24006 = cljs.core.next(arglist__24006);
var sort_spec = cljs.core.first(arglist__24006);
arglist__24006 = cljs.core.next(arglist__24006);
var from = cljs.core.first(arglist__24006);
arglist__24006 = cljs.core.next(arglist__24006);
var size = cljs.core.first(arglist__24006);
var p__24003 = cljs.core.rest(arglist__24006);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__24003);
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
var in_flight_atom__14564__auto___24007 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14564__auto___24007){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___24007,emptych__14565__auto__);
});
var company_search__1 = (function (query){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14564__auto___24007,valch__14566__auto__);
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
;})(in_flight_atom__14564__auto___24007))
;
