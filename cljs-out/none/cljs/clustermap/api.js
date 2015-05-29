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
var AJAX__delegate = function (url,p__26704){var map__26708 = p__26704;var map__26708__$1 = ((cljs.core.seq_QMARK_.call(null,map__26708))?cljs.core.apply.call(null,cljs.core.hash_map,map__26708):map__26708);var opts = map__26708__$1;var content = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__26708,map__26708__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__26708,map__26708__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__26708,map__26708__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__26708,map__26708__$1,opts,content,method,raw))
,(function (){var or__11514__auto__ = (function (){var G__26710 = method;var G__26710__$1 = (((G__26710 == null))?null:cljs.core.name.call(null,G__26710));var G__26710__$2 = (((G__26710__$1 == null))?null:clojure.string.upper_case.call(null,G__26710__$1));return G__26710__$2;
})();if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__26704 = null;if (arguments.length > 1) {
  p__26704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__26704);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__26711){
var url = cljs.core.first(arglist__26711);
var p__26704 = cljs.core.rest(arglist__26711);
return AJAX__delegate(url,p__26704);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__26712){var map__26714 = p__26712;var map__26714__$1 = ((cljs.core.seq_QMARK_.call(null,map__26714))?cljs.core.apply.call(null,cljs.core.hash_map,map__26714):map__26714);var opts = map__26714__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__26712 = null;if (arguments.length > 1) {
  p__26712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__26712);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__26715){
var url = cljs.core.first(arglist__26715);
var p__26712 = cljs.core.rest(arglist__26715);
return GET__delegate(url,p__26712);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__26716){var map__26718 = p__26716;var map__26718__$1 = ((cljs.core.seq_QMARK_.call(null,map__26718))?cljs.core.apply.call(null,cljs.core.hash_map,map__26718):map__26718);var opts = map__26718__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__26716 = null;if (arguments.length > 2) {
  p__26716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__26716);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__26719){
var url = cljs.core.first(arglist__26719);
arglist__26719 = cljs.core.next(arglist__26719);
var content = cljs.core.first(arglist__26719);
var p__26716 = cljs.core.rest(arglist__26719);
return POST__delegate(url,content,p__26716);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__26720){var map__26722 = p__26720;var map__26722__$1 = ((cljs.core.seq_QMARK_.call(null,map__26722))?cljs.core.apply.call(null,cljs.core.hash_map,map__26722):map__26722);var opts = map__26722__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__26720 = null;if (arguments.length > 2) {
  p__26720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__26720);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__26723){
var url = cljs.core.first(arglist__26723);
arglist__26723 = cljs.core.next(arglist__26723);
var content = cljs.core.first(arglist__26723);
var p__26720 = cljs.core.rest(arglist__26723);
return PUT__delegate(url,content,p__26720);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_26858){var state_val_26859 = (state_26858[(1)]);if((state_val_26859 === (7)))
{var inst_26815 = (state_26858[(7)]);var inst_26814 = (state_26858[(2)]);var inst_26815__$1 = cljs.core.nth.call(null,inst_26814,(0),null);var inst_26816 = cljs.core.nth.call(null,inst_26814,(1),null);var inst_26817 = cljs.core.sequential_QMARK_.call(null,inst_26815__$1);var state_26858__$1 = (function (){var statearr_26860 = state_26858;(statearr_26860[(7)] = inst_26815__$1);
(statearr_26860[(8)] = inst_26816);
return statearr_26860;
})();if(inst_26817)
{var statearr_26861_26896 = state_26858__$1;(statearr_26861_26896[(1)] = (8));
} else
{var statearr_26862_26897 = state_26858__$1;(statearr_26862_26897[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (20)))
{var inst_26815 = (state_26858[(7)]);var state_26858__$1 = state_26858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26858__$1,(23),inst_26815);
} else
{if((state_val_26859 === (1)))
{var state_26858__$1 = state_26858;var statearr_26863_26898 = state_26858__$1;(statearr_26863_26898[(2)] = null);
(statearr_26863_26898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (4)))
{var state_26858__$1 = state_26858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26858__$1,(7),ocomm);
} else
{if((state_val_26859 === (15)))
{var inst_26838 = (state_26858[(2)]);var state_26858__$1 = state_26858;var statearr_26864_26899 = state_26858__$1;(statearr_26864_26899[(2)] = inst_26838);
(statearr_26864_26899[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (21)))
{var state_26858__$1 = state_26858;var statearr_26865_26900 = state_26858__$1;(statearr_26865_26900[(2)] = null);
(statearr_26865_26900[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (13)))
{var inst_26821 = (state_26858[(9)]);var state_26858__$1 = state_26858;var statearr_26866_26901 = state_26858__$1;(statearr_26866_26901[(2)] = inst_26821);
(statearr_26866_26901[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (22)))
{var inst_26847 = (state_26858[(2)]);var state_26858__$1 = state_26858;var statearr_26867_26902 = state_26858__$1;(statearr_26867_26902[(2)] = inst_26847);
(statearr_26867_26902[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (6)))
{var inst_26854 = (state_26858[(2)]);var state_26858__$1 = state_26858;var statearr_26868_26903 = state_26858__$1;(statearr_26868_26903[(2)] = inst_26854);
(statearr_26868_26903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (17)))
{var state_26858__$1 = state_26858;var statearr_26869_26904 = state_26858__$1;(statearr_26869_26904[(2)] = null);
(statearr_26869_26904[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (3)))
{var inst_26856 = (state_26858[(2)]);var state_26858__$1 = state_26858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26858__$1,inst_26856);
} else
{if((state_val_26859 === (12)))
{var inst_26840 = (state_26858[(2)]);var state_26858__$1 = state_26858;var statearr_26870_26905 = state_26858__$1;(statearr_26870_26905[(2)] = inst_26840);
(statearr_26870_26905[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (2)))
{var state_26858__$1 = state_26858;var statearr_26871_26906 = state_26858__$1;(statearr_26871_26906[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (23)))
{var inst_26844 = (state_26858[(2)]);var state_26858__$1 = state_26858;var statearr_26873_26907 = state_26858__$1;(statearr_26873_26907[(2)] = inst_26844);
(statearr_26873_26907[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (19)))
{var inst_26831 = (state_26858[(2)]);var state_26858__$1 = state_26858;var statearr_26874_26908 = state_26858__$1;(statearr_26874_26908[(2)] = inst_26831);
(statearr_26874_26908[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (11)))
{var inst_26820 = (state_26858[(10)]);var inst_26823 = cljs.core.empty_QMARK_.call(null,inst_26820);var state_26858__$1 = state_26858;if(inst_26823)
{var statearr_26875_26909 = state_26858__$1;(statearr_26875_26909[(1)] = (13));
} else
{var statearr_26876_26910 = state_26858__$1;(statearr_26876_26910[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (9)))
{var inst_26815 = (state_26858[(7)]);var state_26858__$1 = state_26858;if(cljs.core.truth_(inst_26815))
{var statearr_26877_26911 = state_26858__$1;(statearr_26877_26911[(1)] = (20));
} else
{var statearr_26878_26912 = state_26858__$1;(statearr_26878_26912[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (5)))
{var state_26858__$1 = state_26858;var statearr_26879_26913 = state_26858__$1;(statearr_26879_26913[(2)] = null);
(statearr_26879_26913[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (14)))
{var inst_26820 = (state_26858[(10)]);var inst_26826 = cljs.core.rest.call(null,inst_26820);var inst_26827 = cljs.core.first.call(null,inst_26820);var state_26858__$1 = (function (){var statearr_26880 = state_26858;(statearr_26880[(11)] = inst_26826);
return statearr_26880;
})();if(cljs.core.truth_(inst_26827))
{var statearr_26881_26914 = state_26858__$1;(statearr_26881_26914[(1)] = (16));
} else
{var statearr_26882_26915 = state_26858__$1;(statearr_26882_26915[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (16)))
{var inst_26820 = (state_26858[(10)]);var inst_26829 = cljs.core.first.call(null,inst_26820);var state_26858__$1 = state_26858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26858__$1,(19),inst_26829);
} else
{if((state_val_26859 === (10)))
{var inst_26816 = (state_26858[(8)]);var inst_26849 = (state_26858[(2)]);var inst_26850 = cljs.core.apply.call(null,handler,inst_26849,inst_26816);var state_26858__$1 = (function (){var statearr_26883 = state_26858;(statearr_26883[(12)] = inst_26850);
return statearr_26883;
})();var statearr_26884_26916 = state_26858__$1;(statearr_26884_26916[(2)] = null);
(statearr_26884_26916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (18)))
{var inst_26826 = (state_26858[(11)]);var inst_26821 = (state_26858[(9)]);var inst_26834 = (state_26858[(2)]);var inst_26835 = cljs.core.conj.call(null,inst_26821,inst_26834);var inst_26820 = inst_26826;var inst_26821__$1 = inst_26835;var state_26858__$1 = (function (){var statearr_26885 = state_26858;(statearr_26885[(9)] = inst_26821__$1);
(statearr_26885[(10)] = inst_26820);
return statearr_26885;
})();var statearr_26886_26917 = state_26858__$1;(statearr_26886_26917[(2)] = null);
(statearr_26886_26917[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26859 === (8)))
{var inst_26815 = (state_26858[(7)]);var inst_26819 = cljs.core.PersistentVector.EMPTY;var inst_26820 = inst_26815;var inst_26821 = inst_26819;var state_26858__$1 = (function (){var statearr_26887 = state_26858;(statearr_26887[(9)] = inst_26821);
(statearr_26887[(10)] = inst_26820);
return statearr_26887;
})();var statearr_26888_26918 = state_26858__$1;(statearr_26888_26918[(2)] = null);
(statearr_26888_26918[(1)] = (11));
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
});})(c__18867__auto__))
;return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_26892 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26892[(0)] = state_machine__18812__auto__);
(statearr_26892[(1)] = (1));
return statearr_26892;
});
var state_machine__18812__auto____1 = (function (state_26858){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_26858);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e26893){if((e26893 instanceof Object))
{var ex__18815__auto__ = e26893;var statearr_26894_26919 = state_26858;(statearr_26894_26919[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26920 = state_26858;
state_26858 = G__26920;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_26858){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_26858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();var state__18869__auto__ = (function (){var statearr_26895 = f__18868__auto__.call(null);(statearr_26895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_26895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);
return c__18867__auto__;
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
var G__26923__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__26922 = rseq;var rcomm = cljs.core.nth.call(null,vec__26922,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__26922,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__26923 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26923__delegate.call(this,req_args);};
G__26923.cljs$lang$maxFixedArity = 0;
G__26923.cljs$lang$applyTo = (function (arglist__26924){
var req_args = cljs.core.seq(arglist__26924);
return G__26923__delegate(req_args);
});
G__26923.cljs$core$IFn$_invoke$arity$variadic = G__26923__delegate;
return G__26923;
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
var c__18867__auto___26995 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___26995,rx){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___26995,rx){
return (function (state_26976){var state_val_26977 = (state_26976[(1)]);if((state_val_26977 === (8)))
{var inst_26972 = (state_26976[(2)]);var inst_26973 = cljs.core.async.close_BANG_.call(null,valch);var inst_26974 = cljs.core.async.close_BANG_.call(null,rx);var state_26976__$1 = (function (){var statearr_26978 = state_26976;(statearr_26978[(7)] = inst_26973);
(statearr_26978[(8)] = inst_26972);
return statearr_26978;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26976__$1,inst_26974);
} else
{if((state_val_26977 === (7)))
{var state_26976__$1 = state_26976;var statearr_26979_26996 = state_26976__$1;(statearr_26979_26996[(2)] = null);
(statearr_26979_26996[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26977 === (6)))
{var inst_26961 = (state_26976[(9)]);var inst_26969 = cljs.core.async.put_BANG_.call(null,rx,inst_26961);var state_26976__$1 = state_26976;var statearr_26980_26997 = state_26976__$1;(statearr_26980_26997[(2)] = inst_26969);
(statearr_26980_26997[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26977 === (5)))
{var inst_26967 = (state_26976[(2)]);var state_26976__$1 = state_26976;if(cljs.core.truth_(inst_26967))
{var statearr_26981_26998 = state_26976__$1;(statearr_26981_26998[(1)] = (6));
} else
{var statearr_26982_26999 = state_26976__$1;(statearr_26982_26999[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26977 === (4)))
{var inst_26961 = (state_26976[(9)]);var state_26976__$1 = state_26976;var statearr_26983_27000 = state_26976__$1;(statearr_26983_27000[(2)] = inst_26961);
(statearr_26983_27000[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26977 === (3)))
{var inst_26963 = cljs.core.deref.call(null,in_flight_atom);var inst_26964 = cljs.core._EQ_.call(null,inst_26963,valch);var state_26976__$1 = state_26976;var statearr_26984_27001 = state_26976__$1;(statearr_26984_27001[(2)] = inst_26964);
(statearr_26984_27001[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26977 === (2)))
{var inst_26961 = (state_26976[(9)]);var inst_26961__$1 = (state_26976[(2)]);var state_26976__$1 = (function (){var statearr_26985 = state_26976;(statearr_26985[(9)] = inst_26961__$1);
return statearr_26985;
})();if(cljs.core.truth_(inst_26961__$1))
{var statearr_26986_27002 = state_26976__$1;(statearr_26986_27002[(1)] = (3));
} else
{var statearr_26987_27003 = state_26976__$1;(statearr_26987_27003[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26977 === (1)))
{var state_26976__$1 = state_26976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26976__$1,(2),valch);
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
});})(c__18867__auto___26995,rx))
;return ((function (switch__18811__auto__,c__18867__auto___26995,rx){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_26991 = [null,null,null,null,null,null,null,null,null,null];(statearr_26991[(0)] = state_machine__18812__auto__);
(statearr_26991[(1)] = (1));
return statearr_26991;
});
var state_machine__18812__auto____1 = (function (state_26976){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_26976);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e26992){if((e26992 instanceof Object))
{var ex__18815__auto__ = e26992;var statearr_26993_27004 = state_26976;(statearr_26993_27004[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26992;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27005 = state_26976;
state_26976 = G__27005;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_26976){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_26976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___26995,rx))
})();var state__18869__auto__ = (function (){var statearr_26994 = f__18868__auto__.call(null);(statearr_26994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___26995);
return statearr_26994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___26995,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,ch){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,ch){
return (function (state_27023){var state_val_27024 = (state_27023[(1)]);if((state_val_27024 === (2)))
{var inst_27020 = (state_27023[(2)]);var inst_27021 = console.log(inst_27020);var state_27023__$1 = state_27023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else
{if((state_val_27024 === (1)))
{var state_27023__$1 = state_27023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(2),ch);
} else
{return null;
}
}
});})(c__18867__auto__,ch))
;return ((function (switch__18811__auto__,c__18867__auto__,ch){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27028 = [null,null,null,null,null,null,null];(statearr_27028[(0)] = state_machine__18812__auto__);
(statearr_27028[(1)] = (1));
return statearr_27028;
});
var state_machine__18812__auto____1 = (function (state_27023){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27023);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27029){if((e27029 instanceof Object))
{var ex__18815__auto__ = e27029;var statearr_27030_27032 = state_27023;(statearr_27030_27032[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27033 = state_27023;
state_27023 = G__27033;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,ch))
})();var state__18869__auto__ = (function (){var statearr_27031 = f__18868__auto__.call(null);(statearr_27031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_27031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,ch))
);
return c__18867__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__27034){
var f = cljs.core.first(arglist__27034);
var args = cljs.core.rest(arglist__27034);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27037){var vec__27038 = p__27037;var k = cljs.core.nth.call(null,vec__27038,(0),null);var v = cljs.core.nth.call(null,vec__27038,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__18867__auto___27065 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto___27065,r){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto___27065,r){
return (function (state_27056){var state_val_27057 = (state_27056[(1)]);if((state_val_27057 === (2)))
{var inst_27053 = (state_27056[(2)]);var inst_27054 = cljs.core.reset_BANG_.call(null,r,inst_27053);var state_27056__$1 = state_27056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27056__$1,inst_27054);
} else
{if((state_val_27057 === (1)))
{var state_27056__$1 = state_27056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27056__$1,(2),comm);
} else
{return null;
}
}
});})(c__18867__auto___27065,r))
;return ((function (switch__18811__auto__,c__18867__auto___27065,r){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27061 = [null,null,null,null,null,null,null];(statearr_27061[(0)] = state_machine__18812__auto__);
(statearr_27061[(1)] = (1));
return statearr_27061;
});
var state_machine__18812__auto____1 = (function (state_27056){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27056);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27062){if((e27062 instanceof Object))
{var ex__18815__auto__ = e27062;var statearr_27063_27066 = state_27056;(statearr_27063_27066[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27062;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27067 = state_27056;
state_27056 = G__27067;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27056){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto___27065,r))
})();var state__18869__auto__ = (function (){var statearr_27064 = f__18868__auto__.call(null);(statearr_27064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto___27065);
return statearr_27064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto___27065,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27068){
var id = cljs.core.first(arglist__27068);
arglist__27068 = cljs.core.next(arglist__27068);
var tolerance = cljs.core.first(arglist__27068);
var opts = cljs.core.rest(arglist__27068);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27069){
var id = cljs.core.first(arglist__27069);
var opts = cljs.core.rest(arglist__27069);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27070){
var ids = cljs.core.first(arglist__27070);
arglist__27070 = cljs.core.next(arglist__27070);
var tolerance = cljs.core.first(arglist__27070);
var opts = cljs.core.rest(arglist__27070);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27071){var map__27073 = p__27071;var map__27073__$1 = ((cljs.core.seq_QMARK_.call(null,map__27073))?cljs.core.apply.call(null,cljs.core.hash_map,map__27073):map__27073);var opts = map__27073__$1;var boundaryline_ids = cljs.core.get.call(null,map__27073__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27071 = null;if (arguments.length > 3) {
  p__27071 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27071);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27074){
var collection_id = cljs.core.first(arglist__27074);
arglist__27074 = cljs.core.next(arglist__27074);
var tolerance = cljs.core.first(arglist__27074);
arglist__27074 = cljs.core.next(arglist__27074);
var bounds = cljs.core.first(arglist__27074);
var p__27071 = cljs.core.rest(arglist__27074);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27071);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27075){var vec__27077 = p__27075;var type_ids = cljs.core.nth.call(null,vec__27077,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27075 = null;if (arguments.length > 8) {
  p__27075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27075);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__27078){
var index = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var type = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var blcoll = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var attr = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var filter = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var bounds = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var scale_attr = cljs.core.first(arglist__27078);
arglist__27078 = cljs.core.next(arglist__27078);
var post_scale_factor = cljs.core.first(arglist__27078);
var p__27075 = cljs.core.rest(arglist__27078);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27075);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__27079){var map__27081 = p__27079;var map__27081__$1 = ((cljs.core.seq_QMARK_.call(null,map__27081))?cljs.core.apply.call(null,cljs.core.hash_map,map__27081):map__27081);var q = map__27081__$1;var stats_attr = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__27082){var vec__27084 = p__27082;var type_ids = cljs.core.nth.call(null,vec__27084,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__27082 = null;if (arguments.length > 5) {
  p__27082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__27082);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__27085){
var index = cljs.core.first(arglist__27085);
arglist__27085 = cljs.core.next(arglist__27085);
var type = cljs.core.first(arglist__27085);
arglist__27085 = cljs.core.next(arglist__27085);
var statsattrs = cljs.core.first(arglist__27085);
arglist__27085 = cljs.core.next(arglist__27085);
var filter = cljs.core.first(arglist__27085);
arglist__27085 = cljs.core.next(arglist__27085);
var bounds = cljs.core.first(arglist__27085);
var p__27082 = cljs.core.rest(arglist__27085);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__27082);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27086){var vec__27088 = p__27086;var type_ids = cljs.core.nth.call(null,vec__27088,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27086 = null;if (arguments.length > 7) {
  p__27086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27086);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__27089){
var index = cljs.core.first(arglist__27089);
arglist__27089 = cljs.core.next(arglist__27089);
var type = cljs.core.first(arglist__27089);
arglist__27089 = cljs.core.next(arglist__27089);
var location_attr = cljs.core.first(arglist__27089);
arglist__27089 = cljs.core.next(arglist__27089);
var attrs = cljs.core.first(arglist__27089);
arglist__27089 = cljs.core.next(arglist__27089);
var max_count = cljs.core.first(arglist__27089);
arglist__27089 = cljs.core.next(arglist__27089);
var filter = cljs.core.first(arglist__27089);
arglist__27089 = cljs.core.next(arglist__27089);
var bounds = cljs.core.first(arglist__27089);
var p__27086 = cljs.core.rest(arglist__27089);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27086);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27090){var vec__27092 = p__27090;var type_ids = cljs.core.nth.call(null,vec__27092,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27090 = null;if (arguments.length > 7) {
  p__27090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27090);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__27093){
var index = cljs.core.first(arglist__27093);
arglist__27093 = cljs.core.next(arglist__27093);
var type = cljs.core.first(arglist__27093);
arglist__27093 = cljs.core.next(arglist__27093);
var filter_spec = cljs.core.first(arglist__27093);
arglist__27093 = cljs.core.next(arglist__27093);
var bounds = cljs.core.first(arglist__27093);
arglist__27093 = cljs.core.next(arglist__27093);
var sort_spec = cljs.core.first(arglist__27093);
arglist__27093 = cljs.core.next(arglist__27093);
var from = cljs.core.first(arglist__27093);
arglist__27093 = cljs.core.next(arglist__27093);
var size = cljs.core.first(arglist__27093);
var p__27090 = cljs.core.rest(arglist__27093);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27090);
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
var in_flight_atom__11324__auto___27094 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__11324__auto___27094){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__11325__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__11325__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__11324__auto___27094,emptych__11325__auto__);
});
var company_search__1 = (function (query){var valch__11326__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__11324__auto___27094,valch__11326__auto__);
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
;})(in_flight_atom__11324__auto___27094))
;

//# sourceMappingURL=api.js.map