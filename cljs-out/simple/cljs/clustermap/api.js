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
var AJAX__delegate = function (url,p__23977){var map__23981 = p__23977;var map__23981__$1 = ((cljs.core.seq_QMARK_.call(null,map__23981))?cljs.core.apply.call(null,cljs.core.hash_map,map__23981):map__23981);var opts = map__23981__$1;var content = cljs.core.get.call(null,map__23981__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__23981__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__23981__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__23981,map__23981__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__23981,map__23981__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__23981,map__23981__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__23981,map__23981__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__23983 = method;var G__23983__$1 = (((G__23983 == null))?null:cljs.core.name.call(null,G__23983));var G__23983__$2 = (((G__23983__$1 == null))?null:clojure.string.upper_case.call(null,G__23983__$1));return G__23983__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__23977 = null;if (arguments.length > 1) {
  p__23977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__23977);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__23984){
var url = cljs.core.first(arglist__23984);
var p__23977 = cljs.core.rest(arglist__23984);
return AJAX__delegate(url,p__23977);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__23985){var map__23987 = p__23985;var map__23987__$1 = ((cljs.core.seq_QMARK_.call(null,map__23987))?cljs.core.apply.call(null,cljs.core.hash_map,map__23987):map__23987);var opts = map__23987__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__23985 = null;if (arguments.length > 1) {
  p__23985 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__23985);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23988){
var url = cljs.core.first(arglist__23988);
var p__23985 = cljs.core.rest(arglist__23988);
return GET__delegate(url,p__23985);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__23989){var map__23991 = p__23989;var map__23991__$1 = ((cljs.core.seq_QMARK_.call(null,map__23991))?cljs.core.apply.call(null,cljs.core.hash_map,map__23991):map__23991);var opts = map__23991__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__23989 = null;if (arguments.length > 2) {
  p__23989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__23989);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__23992){
var url = cljs.core.first(arglist__23992);
arglist__23992 = cljs.core.next(arglist__23992);
var content = cljs.core.first(arglist__23992);
var p__23989 = cljs.core.rest(arglist__23992);
return POST__delegate(url,content,p__23989);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__23993){var map__23995 = p__23993;var map__23995__$1 = ((cljs.core.seq_QMARK_.call(null,map__23995))?cljs.core.apply.call(null,cljs.core.hash_map,map__23995):map__23995);var opts = map__23995__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__23993 = null;if (arguments.length > 2) {
  p__23993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__23993);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__23996){
var url = cljs.core.first(arglist__23996);
arglist__23996 = cljs.core.next(arglist__23996);
var content = cljs.core.first(arglist__23996);
var p__23993 = cljs.core.rest(arglist__23996);
return PUT__delegate(url,content,p__23993);
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
return (function (state_24131){var state_val_24132 = (state_24131[(1)]);if((state_val_24132 === (7)))
{var inst_24088 = (state_24131[(7)]);var inst_24087 = (state_24131[(2)]);var inst_24088__$1 = cljs.core.nth.call(null,inst_24087,(0),null);var inst_24089 = cljs.core.nth.call(null,inst_24087,(1),null);var inst_24090 = cljs.core.sequential_QMARK_.call(null,inst_24088__$1);var state_24131__$1 = (function (){var statearr_24133 = state_24131;(statearr_24133[(8)] = inst_24089);
(statearr_24133[(7)] = inst_24088__$1);
return statearr_24133;
})();if(inst_24090)
{var statearr_24134_24169 = state_24131__$1;(statearr_24134_24169[(1)] = (8));
} else
{var statearr_24135_24170 = state_24131__$1;(statearr_24135_24170[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (20)))
{var inst_24088 = (state_24131[(7)]);var state_24131__$1 = state_24131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24131__$1,(23),inst_24088);
} else
{if((state_val_24132 === (1)))
{var state_24131__$1 = state_24131;var statearr_24136_24171 = state_24131__$1;(statearr_24136_24171[(2)] = null);
(statearr_24136_24171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (4)))
{var state_24131__$1 = state_24131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24131__$1,(7),ocomm);
} else
{if((state_val_24132 === (15)))
{var inst_24111 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24137_24172 = state_24131__$1;(statearr_24137_24172[(2)] = inst_24111);
(statearr_24137_24172[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (21)))
{var state_24131__$1 = state_24131;var statearr_24138_24173 = state_24131__$1;(statearr_24138_24173[(2)] = null);
(statearr_24138_24173[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (13)))
{var inst_24094 = (state_24131[(9)]);var state_24131__$1 = state_24131;var statearr_24139_24174 = state_24131__$1;(statearr_24139_24174[(2)] = inst_24094);
(statearr_24139_24174[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (22)))
{var inst_24120 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24140_24175 = state_24131__$1;(statearr_24140_24175[(2)] = inst_24120);
(statearr_24140_24175[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (6)))
{var inst_24127 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24141_24176 = state_24131__$1;(statearr_24141_24176[(2)] = inst_24127);
(statearr_24141_24176[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (17)))
{var state_24131__$1 = state_24131;var statearr_24142_24177 = state_24131__$1;(statearr_24142_24177[(2)] = null);
(statearr_24142_24177[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (3)))
{var inst_24129 = (state_24131[(2)]);var state_24131__$1 = state_24131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24131__$1,inst_24129);
} else
{if((state_val_24132 === (12)))
{var inst_24113 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24143_24178 = state_24131__$1;(statearr_24143_24178[(2)] = inst_24113);
(statearr_24143_24178[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (2)))
{var state_24131__$1 = state_24131;var statearr_24144_24179 = state_24131__$1;(statearr_24144_24179[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (23)))
{var inst_24117 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24146_24180 = state_24131__$1;(statearr_24146_24180[(2)] = inst_24117);
(statearr_24146_24180[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (19)))
{var inst_24104 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24147_24181 = state_24131__$1;(statearr_24147_24181[(2)] = inst_24104);
(statearr_24147_24181[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (11)))
{var inst_24093 = (state_24131[(10)]);var inst_24096 = cljs.core.empty_QMARK_.call(null,inst_24093);var state_24131__$1 = state_24131;if(inst_24096)
{var statearr_24148_24182 = state_24131__$1;(statearr_24148_24182[(1)] = (13));
} else
{var statearr_24149_24183 = state_24131__$1;(statearr_24149_24183[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (9)))
{var inst_24088 = (state_24131[(7)]);var state_24131__$1 = state_24131;if(cljs.core.truth_(inst_24088))
{var statearr_24150_24184 = state_24131__$1;(statearr_24150_24184[(1)] = (20));
} else
{var statearr_24151_24185 = state_24131__$1;(statearr_24151_24185[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (5)))
{var state_24131__$1 = state_24131;var statearr_24152_24186 = state_24131__$1;(statearr_24152_24186[(2)] = null);
(statearr_24152_24186[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (14)))
{var inst_24093 = (state_24131[(10)]);var inst_24099 = cljs.core.rest.call(null,inst_24093);var inst_24100 = cljs.core.first.call(null,inst_24093);var state_24131__$1 = (function (){var statearr_24153 = state_24131;(statearr_24153[(11)] = inst_24099);
return statearr_24153;
})();if(cljs.core.truth_(inst_24100))
{var statearr_24154_24187 = state_24131__$1;(statearr_24154_24187[(1)] = (16));
} else
{var statearr_24155_24188 = state_24131__$1;(statearr_24155_24188[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (16)))
{var inst_24093 = (state_24131[(10)]);var inst_24102 = cljs.core.first.call(null,inst_24093);var state_24131__$1 = state_24131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24131__$1,(19),inst_24102);
} else
{if((state_val_24132 === (10)))
{var inst_24089 = (state_24131[(8)]);var inst_24122 = (state_24131[(2)]);var inst_24123 = cljs.core.apply.call(null,handler,inst_24122,inst_24089);var state_24131__$1 = (function (){var statearr_24156 = state_24131;(statearr_24156[(12)] = inst_24123);
return statearr_24156;
})();var statearr_24157_24189 = state_24131__$1;(statearr_24157_24189[(2)] = null);
(statearr_24157_24189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (18)))
{var inst_24094 = (state_24131[(9)]);var inst_24099 = (state_24131[(11)]);var inst_24107 = (state_24131[(2)]);var inst_24108 = cljs.core.conj.call(null,inst_24094,inst_24107);var inst_24093 = inst_24099;var inst_24094__$1 = inst_24108;var state_24131__$1 = (function (){var statearr_24158 = state_24131;(statearr_24158[(10)] = inst_24093);
(statearr_24158[(9)] = inst_24094__$1);
return statearr_24158;
})();var statearr_24159_24190 = state_24131__$1;(statearr_24159_24190[(2)] = null);
(statearr_24159_24190[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (8)))
{var inst_24088 = (state_24131[(7)]);var inst_24092 = cljs.core.PersistentVector.EMPTY;var inst_24093 = inst_24088;var inst_24094 = inst_24092;var state_24131__$1 = (function (){var statearr_24160 = state_24131;(statearr_24160[(10)] = inst_24093);
(statearr_24160[(9)] = inst_24094);
return statearr_24160;
})();var statearr_24161_24191 = state_24131__$1;(statearr_24161_24191[(2)] = null);
(statearr_24161_24191[(1)] = (11));
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
var state_machine__11099__auto____0 = (function (){var statearr_24165 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24165[(0)] = state_machine__11099__auto__);
(statearr_24165[(1)] = (1));
return statearr_24165;
});
var state_machine__11099__auto____1 = (function (state_24131){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24131);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24166){if((e24166 instanceof Object))
{var ex__11102__auto__ = e24166;var statearr_24167_24192 = state_24131;(statearr_24167_24192[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24131);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24166;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24193 = state_24131;
state_24131 = G__24193;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24131){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_24168 = f__11155__auto__.call(null);(statearr_24168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24168;
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
var G__24196__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__24195 = rseq;var rcomm = cljs.core.nth.call(null,vec__24195,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__24195,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__24196 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24196__delegate.call(this,req_args);};
G__24196.cljs$lang$maxFixedArity = 0;
G__24196.cljs$lang$applyTo = (function (arglist__24197){
var req_args = cljs.core.seq(arglist__24197);
return G__24196__delegate(req_args);
});
G__24196.cljs$core$IFn$_invoke$arity$variadic = G__24196__delegate;
return G__24196;
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
var c__11154__auto___24268 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___24268,rx){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___24268,rx){
return (function (state_24249){var state_val_24250 = (state_24249[(1)]);if((state_val_24250 === (8)))
{var inst_24245 = (state_24249[(2)]);var inst_24246 = cljs.core.async.close_BANG_.call(null,valch);var inst_24247 = cljs.core.async.close_BANG_.call(null,rx);var state_24249__$1 = (function (){var statearr_24251 = state_24249;(statearr_24251[(7)] = inst_24245);
(statearr_24251[(8)] = inst_24246);
return statearr_24251;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24249__$1,inst_24247);
} else
{if((state_val_24250 === (7)))
{var state_24249__$1 = state_24249;var statearr_24252_24269 = state_24249__$1;(statearr_24252_24269[(2)] = null);
(statearr_24252_24269[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24250 === (6)))
{var inst_24234 = (state_24249[(9)]);var inst_24242 = cljs.core.async.put_BANG_.call(null,rx,inst_24234);var state_24249__$1 = state_24249;var statearr_24253_24270 = state_24249__$1;(statearr_24253_24270[(2)] = inst_24242);
(statearr_24253_24270[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24250 === (5)))
{var inst_24240 = (state_24249[(2)]);var state_24249__$1 = state_24249;if(cljs.core.truth_(inst_24240))
{var statearr_24254_24271 = state_24249__$1;(statearr_24254_24271[(1)] = (6));
} else
{var statearr_24255_24272 = state_24249__$1;(statearr_24255_24272[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24250 === (4)))
{var inst_24234 = (state_24249[(9)]);var state_24249__$1 = state_24249;var statearr_24256_24273 = state_24249__$1;(statearr_24256_24273[(2)] = inst_24234);
(statearr_24256_24273[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24250 === (3)))
{var inst_24236 = cljs.core.deref.call(null,in_flight_atom);var inst_24237 = cljs.core._EQ_.call(null,inst_24236,valch);var state_24249__$1 = state_24249;var statearr_24257_24274 = state_24249__$1;(statearr_24257_24274[(2)] = inst_24237);
(statearr_24257_24274[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24250 === (2)))
{var inst_24234 = (state_24249[(9)]);var inst_24234__$1 = (state_24249[(2)]);var state_24249__$1 = (function (){var statearr_24258 = state_24249;(statearr_24258[(9)] = inst_24234__$1);
return statearr_24258;
})();if(cljs.core.truth_(inst_24234__$1))
{var statearr_24259_24275 = state_24249__$1;(statearr_24259_24275[(1)] = (3));
} else
{var statearr_24260_24276 = state_24249__$1;(statearr_24260_24276[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24250 === (1)))
{var state_24249__$1 = state_24249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24249__$1,(2),valch);
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
});})(c__11154__auto___24268,rx))
;return ((function (switch__11098__auto__,c__11154__auto___24268,rx){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24264 = [null,null,null,null,null,null,null,null,null,null];(statearr_24264[(0)] = state_machine__11099__auto__);
(statearr_24264[(1)] = (1));
return statearr_24264;
});
var state_machine__11099__auto____1 = (function (state_24249){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24249);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24265){if((e24265 instanceof Object))
{var ex__11102__auto__ = e24265;var statearr_24266_24277 = state_24249;(statearr_24266_24277[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24249);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24278 = state_24249;
state_24249 = G__24278;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24249){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___24268,rx))
})();var state__11156__auto__ = (function (){var statearr_24267 = f__11155__auto__.call(null);(statearr_24267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___24268);
return statearr_24267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___24268,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,ch){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,ch){
return (function (state_24296){var state_val_24297 = (state_24296[(1)]);if((state_val_24297 === (2)))
{var inst_24293 = (state_24296[(2)]);var inst_24294 = console.log(inst_24293);var state_24296__$1 = state_24296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24296__$1,inst_24294);
} else
{if((state_val_24297 === (1)))
{var state_24296__$1 = state_24296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24296__$1,(2),ch);
} else
{return null;
}
}
});})(c__11154__auto__,ch))
;return ((function (switch__11098__auto__,c__11154__auto__,ch){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24301 = [null,null,null,null,null,null,null];(statearr_24301[(0)] = state_machine__11099__auto__);
(statearr_24301[(1)] = (1));
return statearr_24301;
});
var state_machine__11099__auto____1 = (function (state_24296){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24296);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24302){if((e24302 instanceof Object))
{var ex__11102__auto__ = e24302;var statearr_24303_24305 = state_24296;(statearr_24303_24305[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24296);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24302;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24306 = state_24296;
state_24296 = G__24306;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24296){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,ch))
})();var state__11156__auto__ = (function (){var statearr_24304 = f__11155__auto__.call(null);(statearr_24304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24304;
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
log_api.cljs$lang$applyTo = (function (arglist__24307){
var f = cljs.core.first(arglist__24307);
var args = cljs.core.rest(arglist__24307);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__24310){var vec__24311 = p__24310;var k = cljs.core.nth.call(null,vec__24311,(0),null);var v = cljs.core.nth.call(null,vec__24311,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11154__auto___24338 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto___24338,r){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto___24338,r){
return (function (state_24329){var state_val_24330 = (state_24329[(1)]);if((state_val_24330 === (2)))
{var inst_24326 = (state_24329[(2)]);var inst_24327 = cljs.core.reset_BANG_.call(null,r,inst_24326);var state_24329__$1 = state_24329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24329__$1,inst_24327);
} else
{if((state_val_24330 === (1)))
{var state_24329__$1 = state_24329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24329__$1,(2),comm);
} else
{return null;
}
}
});})(c__11154__auto___24338,r))
;return ((function (switch__11098__auto__,c__11154__auto___24338,r){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24334 = [null,null,null,null,null,null,null];(statearr_24334[(0)] = state_machine__11099__auto__);
(statearr_24334[(1)] = (1));
return statearr_24334;
});
var state_machine__11099__auto____1 = (function (state_24329){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24329);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24335){if((e24335 instanceof Object))
{var ex__11102__auto__ = e24335;var statearr_24336_24339 = state_24329;(statearr_24336_24339[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24335;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24340 = state_24329;
state_24329 = G__24340;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24329){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto___24338,r))
})();var state__11156__auto__ = (function (){var statearr_24337 = f__11155__auto__.call(null);(statearr_24337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto___24338);
return statearr_24337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto___24338,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__24341){
var id = cljs.core.first(arglist__24341);
arglist__24341 = cljs.core.next(arglist__24341);
var tolerance = cljs.core.first(arglist__24341);
var opts = cljs.core.rest(arglist__24341);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__24342){
var id = cljs.core.first(arglist__24342);
var opts = cljs.core.rest(arglist__24342);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__24343){
var ids = cljs.core.first(arglist__24343);
arglist__24343 = cljs.core.next(arglist__24343);
var tolerance = cljs.core.first(arglist__24343);
var opts = cljs.core.rest(arglist__24343);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__24344){var map__24346 = p__24344;var map__24346__$1 = ((cljs.core.seq_QMARK_.call(null,map__24346))?cljs.core.apply.call(null,cljs.core.hash_map,map__24346):map__24346);var opts = map__24346__$1;var boundaryline_ids = cljs.core.get.call(null,map__24346__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__24344 = null;if (arguments.length > 3) {
  p__24344 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__24344);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__24347){
var collection_id = cljs.core.first(arglist__24347);
arglist__24347 = cljs.core.next(arglist__24347);
var tolerance = cljs.core.first(arglist__24347);
arglist__24347 = cljs.core.next(arglist__24347);
var bounds = cljs.core.first(arglist__24347);
var p__24344 = cljs.core.rest(arglist__24347);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__24344);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__24348){var vec__24350 = p__24348;var type_ids = cljs.core.nth.call(null,vec__24350,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__24348 = null;if (arguments.length > 8) {
  p__24348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__24348);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__24351){
var index = cljs.core.first(arglist__24351);
arglist__24351 = cljs.core.next(arglist__24351);
var type = cljs.core.first(arglist__24351);
arglist__24351 = cljs.core.next(arglist__24351);
var blcoll = cljs.core.first(arglist__24351);
arglist__24351 = cljs.core.next(arglist__24351);
var attr = cljs.core.first(arglist__24351);
arglist__24351 = cljs.core.next(arglist__24351);
var filter = cljs.core.first(arglist__24351);
arglist__24351 = cljs.core.next(arglist__24351);
var bounds = cljs.core.first(arglist__24351);
arglist__24351 = cljs.core.next(arglist__24351);
var scale_attr = cljs.core.first(arglist__24351);
arglist__24351 = cljs.core.next(arglist__24351);
var post_scale_factor = cljs.core.first(arglist__24351);
var p__24348 = cljs.core.rest(arglist__24351);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__24348);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var nested_aggregation_factory24352 = null;
var nested_aggregation_factory24352__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var nested_aggregation_factory24352__1 = (function (p__24356){var map__24358 = p__24356;var map__24358__$1 = ((cljs.core.seq_QMARK_.call(null,map__24358))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358):map__24358);var q = map__24358__$1;var stats_attr = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
nested_aggregation_factory24352 = function(p__24356){
switch(arguments.length){
case 0:
return nested_aggregation_factory24352__0.call(this);
case 1:
return nested_aggregation_factory24352__1.call(this,p__24356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory24352.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory24352__0;
nested_aggregation_factory24352.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory24352__1;
return nested_aggregation_factory24352;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var summary_stats_factory24359 = null;
var summary_stats_factory24359__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var summary_stats_factory24359__6 = (function() { 
var G__24366__delegate = function (index,type,statsattrs,filter,bounds,p__24363){var vec__24365 = p__24363;var type_ids = cljs.core.nth.call(null,vec__24365,(0),null);var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
};
var G__24366 = function (index,type,statsattrs,filter,bounds,var_args){
var p__24363 = null;if (arguments.length > 5) {
  p__24363 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__24366__delegate.call(this,index,type,statsattrs,filter,bounds,p__24363);};
G__24366.cljs$lang$maxFixedArity = 5;
G__24366.cljs$lang$applyTo = (function (arglist__24367){
var index = cljs.core.first(arglist__24367);
arglist__24367 = cljs.core.next(arglist__24367);
var type = cljs.core.first(arglist__24367);
arglist__24367 = cljs.core.next(arglist__24367);
var statsattrs = cljs.core.first(arglist__24367);
arglist__24367 = cljs.core.next(arglist__24367);
var filter = cljs.core.first(arglist__24367);
arglist__24367 = cljs.core.next(arglist__24367);
var bounds = cljs.core.first(arglist__24367);
var p__24363 = cljs.core.rest(arglist__24367);
return G__24366__delegate(index,type,statsattrs,filter,bounds,p__24363);
});
G__24366.cljs$core$IFn$_invoke$arity$variadic = G__24366__delegate;
return G__24366;
})()
;
summary_stats_factory24359 = function(index,type,statsattrs,filter,bounds,var_args){
var p__24363 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory24359__0.call(this);
default:
return summary_stats_factory24359__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory24359.cljs$lang$maxFixedArity = 5;
summary_stats_factory24359.cljs$lang$applyTo = summary_stats_factory24359__6.cljs$lang$applyTo;
summary_stats_factory24359.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory24359__0;
summary_stats_factory24359.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory24359__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory24359;
})()
;})(in_flight_atom__14458__auto__))
});
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__24368){var vec__24370 = p__24368;var type_ids = cljs.core.nth.call(null,vec__24370,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__24368 = null;if (arguments.length > 7) {
  p__24368 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__24368);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__24371){
var index = cljs.core.first(arglist__24371);
arglist__24371 = cljs.core.next(arglist__24371);
var type = cljs.core.first(arglist__24371);
arglist__24371 = cljs.core.next(arglist__24371);
var location_attr = cljs.core.first(arglist__24371);
arglist__24371 = cljs.core.next(arglist__24371);
var attrs = cljs.core.first(arglist__24371);
arglist__24371 = cljs.core.next(arglist__24371);
var max_count = cljs.core.first(arglist__24371);
arglist__24371 = cljs.core.next(arglist__24371);
var filter = cljs.core.first(arglist__24371);
arglist__24371 = cljs.core.next(arglist__24371);
var bounds = cljs.core.first(arglist__24371);
var p__24368 = cljs.core.rest(arglist__24371);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__24368);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__24372){var vec__24374 = p__24372;var type_ids = cljs.core.nth.call(null,vec__24374,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__24372 = null;if (arguments.length > 7) {
  p__24372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__24372);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__24375){
var index = cljs.core.first(arglist__24375);
arglist__24375 = cljs.core.next(arglist__24375);
var type = cljs.core.first(arglist__24375);
arglist__24375 = cljs.core.next(arglist__24375);
var filter_spec = cljs.core.first(arglist__24375);
arglist__24375 = cljs.core.next(arglist__24375);
var bounds = cljs.core.first(arglist__24375);
arglist__24375 = cljs.core.next(arglist__24375);
var sort_spec = cljs.core.first(arglist__24375);
arglist__24375 = cljs.core.next(arglist__24375);
var from = cljs.core.first(arglist__24375);
arglist__24375 = cljs.core.next(arglist__24375);
var size = cljs.core.first(arglist__24375);
var p__24372 = cljs.core.rest(arglist__24375);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__24372);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var timeline_factory24376 = null;
var timeline_factory24376__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var timeline_factory24376__2 = (function (query,filter_spec){var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
timeline_factory24376 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory24376__0.call(this);
case 2:
return timeline_factory24376__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory24376.cljs$core$IFn$_invoke$arity$0 = timeline_factory24376__0;
timeline_factory24376.cljs$core$IFn$_invoke$arity$2 = timeline_factory24376__2;
return timeline_factory24376;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.geo_sponsors = (function geo_sponsors(bounds){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));
});
clustermap.api.rankings = (function rankings(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var ranges_factory24377 = null;
var ranges_factory24377__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var ranges_factory24377__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
ranges_factory24377 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory24377__0.call(this);
case 9:
return ranges_factory24377__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory24377.cljs$core$IFn$_invoke$arity$0 = ranges_factory24377__0;
ranges_factory24377.cljs$core$IFn$_invoke$arity$9 = ranges_factory24377__9;
return ranges_factory24377;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.count_matching = (function count_matching(index,index_type,filter_spec){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));
});
clustermap.api.records = (function records(index,index_type,filter_spec,sort_spec,size){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var tags_of_type_factory24378 = null;
var tags_of_type_factory24378__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var tags_of_type_factory24378__1 = (function (tag_type){var valch__14460__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
tags_of_type_factory24378 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory24378__0.call(this);
case 1:
return tags_of_type_factory24378__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory24378.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory24378__0;
tags_of_type_factory24378.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory24378__1;
return tags_of_type_factory24378;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.geotags_of_type = (function geotags_of_type(tag_type){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));
});
var in_flight_atom__14458__auto___24379 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14458__auto___24379){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto___24379,emptych__14459__auto__);
});
var company_search__1 = (function (query){var valch__14460__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto___24379,valch__14460__auto__);
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
;})(in_flight_atom__14458__auto___24379))
;
