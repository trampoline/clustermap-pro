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
var AJAX__delegate = function (url,p__23697){var map__23701 = p__23697;var map__23701__$1 = ((cljs.core.seq_QMARK_.call(null,map__23701))?cljs.core.apply.call(null,cljs.core.hash_map,map__23701):map__23701);var opts = map__23701__$1;var content = cljs.core.get.call(null,map__23701__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23701__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23701__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23701,map__23701__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23701,map__23701__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23701,map__23701__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23701,map__23701__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__23703 = method;var G__23703__$1 = (((G__23703 == null))?null:cljs.core.name.call(null,G__23703));var G__23703__$2 = (((G__23703__$1 == null))?null:clojure.string.upper_case.call(null,G__23703__$1));return G__23703__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23697 = null;if (arguments.length > 1) {
  p__23697 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23697);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23704){
var url = cljs.core.first(arglist__23704);
var p__23697 = cljs.core.rest(arglist__23704);
return AJAX__delegate(url,p__23697);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23705){var map__23707 = p__23705;var map__23707__$1 = ((cljs.core.seq_QMARK_.call(null,map__23707))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);var opts = map__23707__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23705 = null;if (arguments.length > 1) {
  p__23705 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23705);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23708){
var url = cljs.core.first(arglist__23708);
var p__23705 = cljs.core.rest(arglist__23708);
return GET__delegate(url,p__23705);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23709){var map__23711 = p__23709;var map__23711__$1 = ((cljs.core.seq_QMARK_.call(null,map__23711))?cljs.core.apply.call(null,cljs.core.hash_map,map__23711):map__23711);var opts = map__23711__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23709 = null;if (arguments.length > 2) {
  p__23709 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23709);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23712){
var url = cljs.core.first(arglist__23712);
arglist__23712 = cljs.core.next(arglist__23712);
var content = cljs.core.first(arglist__23712);
var p__23709 = cljs.core.rest(arglist__23712);
return POST__delegate(url,content,p__23709);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23713){var map__23715 = p__23713;var map__23715__$1 = ((cljs.core.seq_QMARK_.call(null,map__23715))?cljs.core.apply.call(null,cljs.core.hash_map,map__23715):map__23715);var opts = map__23715__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23713 = null;if (arguments.length > 2) {
  p__23713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23713);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23716){
var url = cljs.core.first(arglist__23716);
arglist__23716 = cljs.core.next(arglist__23716);
var content = cljs.core.first(arglist__23716);
var p__23713 = cljs.core.rest(arglist__23716);
return PUT__delegate(url,content,p__23713);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_23851){var state_val_23852 = (state_23851[(1)]);if((state_val_23852 === (7)))
{var inst_23808 = (state_23851[(7)]);var inst_23807 = (state_23851[(2)]);var inst_23808__$1 = cljs.core.nth.call(null,inst_23807,(0),null);var inst_23809 = cljs.core.nth.call(null,inst_23807,(1),null);var inst_23810 = cljs.core.sequential_QMARK_.call(null,inst_23808__$1);var state_23851__$1 = (function (){var statearr_23853 = state_23851;(statearr_23853[(7)] = inst_23808__$1);
(statearr_23853[(8)] = inst_23809);
return statearr_23853;
})();if(inst_23810)
{var statearr_23854_23889 = state_23851__$1;(statearr_23854_23889[(1)] = (8));
} else
{var statearr_23855_23890 = state_23851__$1;(statearr_23855_23890[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (20)))
{var inst_23808 = (state_23851[(7)]);var state_23851__$1 = state_23851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23851__$1,(23),inst_23808);
} else
{if((state_val_23852 === (1)))
{var state_23851__$1 = state_23851;var statearr_23856_23891 = state_23851__$1;(statearr_23856_23891[(2)] = null);
(statearr_23856_23891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (4)))
{var state_23851__$1 = state_23851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23851__$1,(7),ocomm);
} else
{if((state_val_23852 === (15)))
{var inst_23831 = (state_23851[(2)]);var state_23851__$1 = state_23851;var statearr_23857_23892 = state_23851__$1;(statearr_23857_23892[(2)] = inst_23831);
(statearr_23857_23892[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (21)))
{var state_23851__$1 = state_23851;var statearr_23858_23893 = state_23851__$1;(statearr_23858_23893[(2)] = null);
(statearr_23858_23893[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (13)))
{var inst_23814 = (state_23851[(9)]);var state_23851__$1 = state_23851;var statearr_23859_23894 = state_23851__$1;(statearr_23859_23894[(2)] = inst_23814);
(statearr_23859_23894[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (22)))
{var inst_23840 = (state_23851[(2)]);var state_23851__$1 = state_23851;var statearr_23860_23895 = state_23851__$1;(statearr_23860_23895[(2)] = inst_23840);
(statearr_23860_23895[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (6)))
{var inst_23847 = (state_23851[(2)]);var state_23851__$1 = state_23851;var statearr_23861_23896 = state_23851__$1;(statearr_23861_23896[(2)] = inst_23847);
(statearr_23861_23896[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (17)))
{var state_23851__$1 = state_23851;var statearr_23862_23897 = state_23851__$1;(statearr_23862_23897[(2)] = null);
(statearr_23862_23897[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (3)))
{var inst_23849 = (state_23851[(2)]);var state_23851__$1 = state_23851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23851__$1,inst_23849);
} else
{if((state_val_23852 === (12)))
{var inst_23833 = (state_23851[(2)]);var state_23851__$1 = state_23851;var statearr_23863_23898 = state_23851__$1;(statearr_23863_23898[(2)] = inst_23833);
(statearr_23863_23898[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (2)))
{var state_23851__$1 = state_23851;var statearr_23864_23899 = state_23851__$1;(statearr_23864_23899[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (23)))
{var inst_23837 = (state_23851[(2)]);var state_23851__$1 = state_23851;var statearr_23866_23900 = state_23851__$1;(statearr_23866_23900[(2)] = inst_23837);
(statearr_23866_23900[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (19)))
{var inst_23824 = (state_23851[(2)]);var state_23851__$1 = state_23851;var statearr_23867_23901 = state_23851__$1;(statearr_23867_23901[(2)] = inst_23824);
(statearr_23867_23901[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (11)))
{var inst_23813 = (state_23851[(10)]);var inst_23816 = cljs.core.empty_QMARK_.call(null,inst_23813);var state_23851__$1 = state_23851;if(inst_23816)
{var statearr_23868_23902 = state_23851__$1;(statearr_23868_23902[(1)] = (13));
} else
{var statearr_23869_23903 = state_23851__$1;(statearr_23869_23903[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (9)))
{var inst_23808 = (state_23851[(7)]);var state_23851__$1 = state_23851;if(cljs.core.truth_(inst_23808))
{var statearr_23870_23904 = state_23851__$1;(statearr_23870_23904[(1)] = (20));
} else
{var statearr_23871_23905 = state_23851__$1;(statearr_23871_23905[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (5)))
{var state_23851__$1 = state_23851;var statearr_23872_23906 = state_23851__$1;(statearr_23872_23906[(2)] = null);
(statearr_23872_23906[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (14)))
{var inst_23813 = (state_23851[(10)]);var inst_23819 = cljs.core.rest.call(null,inst_23813);var inst_23820 = cljs.core.first.call(null,inst_23813);var state_23851__$1 = (function (){var statearr_23873 = state_23851;(statearr_23873[(11)] = inst_23819);
return statearr_23873;
})();if(cljs.core.truth_(inst_23820))
{var statearr_23874_23907 = state_23851__$1;(statearr_23874_23907[(1)] = (16));
} else
{var statearr_23875_23908 = state_23851__$1;(statearr_23875_23908[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (16)))
{var inst_23813 = (state_23851[(10)]);var inst_23822 = cljs.core.first.call(null,inst_23813);var state_23851__$1 = state_23851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23851__$1,(19),inst_23822);
} else
{if((state_val_23852 === (10)))
{var inst_23809 = (state_23851[(8)]);var inst_23842 = (state_23851[(2)]);var inst_23843 = cljs.core.apply.call(null,handler,inst_23842,inst_23809);var state_23851__$1 = (function (){var statearr_23876 = state_23851;(statearr_23876[(12)] = inst_23843);
return statearr_23876;
})();var statearr_23877_23909 = state_23851__$1;(statearr_23877_23909[(2)] = null);
(statearr_23877_23909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (18)))
{var inst_23814 = (state_23851[(9)]);var inst_23819 = (state_23851[(11)]);var inst_23827 = (state_23851[(2)]);var inst_23828 = cljs.core.conj.call(null,inst_23814,inst_23827);var inst_23813 = inst_23819;var inst_23814__$1 = inst_23828;var state_23851__$1 = (function (){var statearr_23878 = state_23851;(statearr_23878[(10)] = inst_23813);
(statearr_23878[(9)] = inst_23814__$1);
return statearr_23878;
})();var statearr_23879_23910 = state_23851__$1;(statearr_23879_23910[(2)] = null);
(statearr_23879_23910[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23852 === (8)))
{var inst_23808 = (state_23851[(7)]);var inst_23812 = cljs.core.PersistentVector.EMPTY;var inst_23813 = inst_23808;var inst_23814 = inst_23812;var state_23851__$1 = (function (){var statearr_23880 = state_23851;(statearr_23880[(10)] = inst_23813);
(statearr_23880[(9)] = inst_23814);
return statearr_23880;
})();var statearr_23881_23911 = state_23851__$1;(statearr_23881_23911[(2)] = null);
(statearr_23881_23911[(1)] = (11));
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
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_23885 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23885[(0)] = state_machine__11099__auto__);
(statearr_23885[(1)] = (1));
return statearr_23885;
});
var state_machine__11099__auto____1 = (function (state_23851){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_23851);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e23886){if((e23886 instanceof Object))
{var ex__11102__auto__ = e23886;var statearr_23887_23912 = state_23851;(statearr_23887_23912[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23886;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23913 = state_23851;
state_23851 = G__23913;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_23851){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_23851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_23888 = f__11155__auto__.call(null);(statearr_23888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_23888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
var G__23916__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__23915 = rseq;var rcomm = cljs.core.nth.call(null,vec__23915,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__23915,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__23916 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23916__delegate.call(this,req_args);};
G__23916.cljs$lang$maxFixedArity = 0;
G__23916.cljs$lang$applyTo = (function (arglist__23917){
var req_args = cljs.core.seq(arglist__23917);
return G__23916__delegate(req_args);
});
G__23916.cljs$core$IFn$_invoke$arity$variadic = G__23916__delegate;
return G__23916;
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
var c__11154__auto___23988 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___23988,rx){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___23988,rx){
return (function (state_23969){var state_val_23970 = (state_23969[(1)]);if((state_val_23970 === (8)))
{var inst_23965 = (state_23969[(2)]);var inst_23966 = cljs.core.async.close_BANG_.call(null,valch);var inst_23967 = cljs.core.async.close_BANG_.call(null,rx);var state_23969__$1 = (function (){var statearr_23971 = state_23969;(statearr_23971[(7)] = inst_23965);
(statearr_23971[(8)] = inst_23966);
return statearr_23971;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23969__$1,inst_23967);
} else
{if((state_val_23970 === (7)))
{var state_23969__$1 = state_23969;var statearr_23972_23989 = state_23969__$1;(statearr_23972_23989[(2)] = null);
(statearr_23972_23989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23970 === (6)))
{var inst_23954 = (state_23969[(9)]);var inst_23962 = cljs.core.async.put_BANG_.call(null,rx,inst_23954);var state_23969__$1 = state_23969;var statearr_23973_23990 = state_23969__$1;(statearr_23973_23990[(2)] = inst_23962);
(statearr_23973_23990[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23970 === (5)))
{var inst_23960 = (state_23969[(2)]);var state_23969__$1 = state_23969;if(cljs.core.truth_(inst_23960))
{var statearr_23974_23991 = state_23969__$1;(statearr_23974_23991[(1)] = (6));
} else
{var statearr_23975_23992 = state_23969__$1;(statearr_23975_23992[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23970 === (4)))
{var inst_23954 = (state_23969[(9)]);var state_23969__$1 = state_23969;var statearr_23976_23993 = state_23969__$1;(statearr_23976_23993[(2)] = inst_23954);
(statearr_23976_23993[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23970 === (3)))
{var inst_23956 = cljs.core.deref.call(null,in_flight_atom);var inst_23957 = cljs.core._EQ_.call(null,inst_23956,valch);var state_23969__$1 = state_23969;var statearr_23977_23994 = state_23969__$1;(statearr_23977_23994[(2)] = inst_23957);
(statearr_23977_23994[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23970 === (2)))
{var inst_23954 = (state_23969[(9)]);var inst_23954__$1 = (state_23969[(2)]);var state_23969__$1 = (function (){var statearr_23978 = state_23969;(statearr_23978[(9)] = inst_23954__$1);
return statearr_23978;
})();if(cljs.core.truth_(inst_23954__$1))
{var statearr_23979_23995 = state_23969__$1;(statearr_23979_23995[(1)] = (3));
} else
{var statearr_23980_23996 = state_23969__$1;(statearr_23980_23996[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23970 === (1)))
{var state_23969__$1 = state_23969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23969__$1,(2),valch);
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
});})(c__11154__auto___23988,rx))
;return ((function (switch__11098__auto__,c__11154__auto___23988,rx){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_23984 = [null,null,null,null,null,null,null,null,null,null];(statearr_23984[(0)] = state_machine__11099__auto__);
(statearr_23984[(1)] = (1));
return statearr_23984;
});
var state_machine__11099__auto____1 = (function (state_23969){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_23969);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e23985){if((e23985 instanceof Object))
{var ex__11102__auto__ = e23985;var statearr_23986_23997 = state_23969;(statearr_23986_23997[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23985;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23998 = state_23969;
state_23969 = G__23998;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_23969){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_23969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___23988,rx))
})();var state__11156__auto__ = (function (){var statearr_23987 = f__11155__auto__.call(null);(statearr_23987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___23988);
return statearr_23987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___23988,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,ch){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,ch){
return (function (state_24016){var state_val_24017 = (state_24016[(1)]);if((state_val_24017 === (2)))
{var inst_24013 = (state_24016[(2)]);var inst_24014 = console.log(inst_24013);var state_24016__$1 = state_24016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24016__$1,inst_24014);
} else
{if((state_val_24017 === (1)))
{var state_24016__$1 = state_24016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24016__$1,(2),ch);
} else
{return null;
}
}
});})(c__11154__auto__,ch))
;return ((function (switch__11098__auto__,c__11154__auto__,ch){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24021 = [null,null,null,null,null,null,null];(statearr_24021[(0)] = state_machine__11099__auto__);
(statearr_24021[(1)] = (1));
return statearr_24021;
});
var state_machine__11099__auto____1 = (function (state_24016){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24016);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24022){if((e24022 instanceof Object))
{var ex__11102__auto__ = e24022;var statearr_24023_24025 = state_24016;(statearr_24023_24025[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24022;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24026 = state_24016;
state_24016 = G__24026;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24016){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,ch))
})();var state__11156__auto__ = (function (){var statearr_24024 = f__11155__auto__.call(null);(statearr_24024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,ch))
);
return c__11154__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__24027){
var f = cljs.core.first(arglist__24027);
var args = cljs.core.rest(arglist__24027);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__24030){var vec__24031 = p__24030;var k = cljs.core.nth.call(null,vec__24031,(0),null);var v = cljs.core.nth.call(null,vec__24031,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11154__auto___24058 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___24058,r){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___24058,r){
return (function (state_24049){var state_val_24050 = (state_24049[(1)]);if((state_val_24050 === (2)))
{var inst_24046 = (state_24049[(2)]);var inst_24047 = cljs.core.reset_BANG_.call(null,r,inst_24046);var state_24049__$1 = state_24049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24049__$1,inst_24047);
} else
{if((state_val_24050 === (1)))
{var state_24049__$1 = state_24049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24049__$1,(2),comm);
} else
{return null;
}
}
});})(c__11154__auto___24058,r))
;return ((function (switch__11098__auto__,c__11154__auto___24058,r){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24054 = [null,null,null,null,null,null,null];(statearr_24054[(0)] = state_machine__11099__auto__);
(statearr_24054[(1)] = (1));
return statearr_24054;
});
var state_machine__11099__auto____1 = (function (state_24049){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24049);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24055){if((e24055 instanceof Object))
{var ex__11102__auto__ = e24055;var statearr_24056_24059 = state_24049;(statearr_24056_24059[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24049);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24055;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24060 = state_24049;
state_24049 = G__24060;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24049){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___24058,r))
})();var state__11156__auto__ = (function (){var statearr_24057 = f__11155__auto__.call(null);(statearr_24057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___24058);
return statearr_24057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___24058,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__24061){
var id = cljs.core.first(arglist__24061);
arglist__24061 = cljs.core.next(arglist__24061);
var tolerance = cljs.core.first(arglist__24061);
var opts = cljs.core.rest(arglist__24061);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__24062){
var id = cljs.core.first(arglist__24062);
var opts = cljs.core.rest(arglist__24062);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__24063){
var ids = cljs.core.first(arglist__24063);
arglist__24063 = cljs.core.next(arglist__24063);
var tolerance = cljs.core.first(arglist__24063);
var opts = cljs.core.rest(arglist__24063);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__24064){var map__24066 = p__24064;var map__24066__$1 = ((cljs.core.seq_QMARK_.call(null,map__24066))?cljs.core.apply.call(null,cljs.core.hash_map,map__24066):map__24066);var opts = map__24066__$1;var boundaryline_ids = cljs.core.get.call(null,map__24066__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__24064 = null;if (arguments.length > 3) {
  p__24064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__24064);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__24067){
var collection_id = cljs.core.first(arglist__24067);
arglist__24067 = cljs.core.next(arglist__24067);
var tolerance = cljs.core.first(arglist__24067);
arglist__24067 = cljs.core.next(arglist__24067);
var bounds = cljs.core.first(arglist__24067);
var p__24064 = cljs.core.rest(arglist__24067);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__24064);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__24068){var vec__24070 = p__24068;var type_ids = cljs.core.nth.call(null,vec__24070,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__24068 = null;if (arguments.length > 8) {
  p__24068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__24068);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__24071){
var index = cljs.core.first(arglist__24071);
arglist__24071 = cljs.core.next(arglist__24071);
var type = cljs.core.first(arglist__24071);
arglist__24071 = cljs.core.next(arglist__24071);
var blcoll = cljs.core.first(arglist__24071);
arglist__24071 = cljs.core.next(arglist__24071);
var attr = cljs.core.first(arglist__24071);
arglist__24071 = cljs.core.next(arglist__24071);
var filter = cljs.core.first(arglist__24071);
arglist__24071 = cljs.core.next(arglist__24071);
var bounds = cljs.core.first(arglist__24071);
arglist__24071 = cljs.core.next(arglist__24071);
var scale_attr = cljs.core.first(arglist__24071);
arglist__24071 = cljs.core.next(arglist__24071);
var post_scale_factor = cljs.core.first(arglist__24071);
var p__24068 = cljs.core.rest(arglist__24071);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__24068);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__24072){var map__24074 = p__24072;var map__24074__$1 = ((cljs.core.seq_QMARK_.call(null,map__24074))?cljs.core.apply.call(null,cljs.core.hash_map,map__24074):map__24074);var q = map__24074__$1;var stats_attr = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__24074__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__24075){var vec__24077 = p__24075;var type_ids = cljs.core.nth.call(null,vec__24077,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__24075 = null;if (arguments.length > 5) {
  p__24075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__24075);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__24078){
var index = cljs.core.first(arglist__24078);
arglist__24078 = cljs.core.next(arglist__24078);
var type = cljs.core.first(arglist__24078);
arglist__24078 = cljs.core.next(arglist__24078);
var statsattrs = cljs.core.first(arglist__24078);
arglist__24078 = cljs.core.next(arglist__24078);
var filter = cljs.core.first(arglist__24078);
arglist__24078 = cljs.core.next(arglist__24078);
var bounds = cljs.core.first(arglist__24078);
var p__24075 = cljs.core.rest(arglist__24078);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__24075);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__24079){var vec__24081 = p__24079;var type_ids = cljs.core.nth.call(null,vec__24081,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__24079 = null;if (arguments.length > 7) {
  p__24079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__24079);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__24082){
var index = cljs.core.first(arglist__24082);
arglist__24082 = cljs.core.next(arglist__24082);
var type = cljs.core.first(arglist__24082);
arglist__24082 = cljs.core.next(arglist__24082);
var location_attr = cljs.core.first(arglist__24082);
arglist__24082 = cljs.core.next(arglist__24082);
var attrs = cljs.core.first(arglist__24082);
arglist__24082 = cljs.core.next(arglist__24082);
var max_count = cljs.core.first(arglist__24082);
arglist__24082 = cljs.core.next(arglist__24082);
var filter = cljs.core.first(arglist__24082);
arglist__24082 = cljs.core.next(arglist__24082);
var bounds = cljs.core.first(arglist__24082);
var p__24079 = cljs.core.rest(arglist__24082);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__24079);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__24083){var vec__24085 = p__24083;var type_ids = cljs.core.nth.call(null,vec__24085,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__24083 = null;if (arguments.length > 7) {
  p__24083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__24083);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__24086){
var index = cljs.core.first(arglist__24086);
arglist__24086 = cljs.core.next(arglist__24086);
var type = cljs.core.first(arglist__24086);
arglist__24086 = cljs.core.next(arglist__24086);
var filter_spec = cljs.core.first(arglist__24086);
arglist__24086 = cljs.core.next(arglist__24086);
var bounds = cljs.core.first(arglist__24086);
arglist__24086 = cljs.core.next(arglist__24086);
var sort_spec = cljs.core.first(arglist__24086);
arglist__24086 = cljs.core.next(arglist__24086);
var from = cljs.core.first(arglist__24086);
arglist__24086 = cljs.core.next(arglist__24086);
var size = cljs.core.first(arglist__24086);
var p__24083 = cljs.core.rest(arglist__24086);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__24083);
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
var in_flight_atom__14458__auto___24087 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14458__auto___24087){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto___24087,emptych__14459__auto__);
});
var company_search__1 = (function (query){var valch__14460__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto___24087,valch__14460__auto__);
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
;})(in_flight_atom__14458__auto___24087))
;
