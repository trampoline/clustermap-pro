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
var AJAX__delegate = function (url,p__27217){var map__27221 = p__27217;var map__27221__$1 = ((cljs.core.seq_QMARK_.call(null,map__27221))?cljs.core.apply.call(null,cljs.core.hash_map,map__27221):map__27221);var opts = map__27221__$1;var content = cljs.core.get.call(null,map__27221__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27221__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27221__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27221,map__27221__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27221,map__27221__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27221,map__27221__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27221,map__27221__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27223 = method;var G__27223__$1 = (((G__27223 == null))?null:cljs.core.name.call(null,G__27223));var G__27223__$2 = (((G__27223__$1 == null))?null:clojure.string.upper_case.call(null,G__27223__$1));return G__27223__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27217 = null;if (arguments.length > 1) {
  p__27217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27217);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27224){
var url = cljs.core.first(arglist__27224);
var p__27217 = cljs.core.rest(arglist__27224);
return AJAX__delegate(url,p__27217);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27225){var map__27227 = p__27225;var map__27227__$1 = ((cljs.core.seq_QMARK_.call(null,map__27227))?cljs.core.apply.call(null,cljs.core.hash_map,map__27227):map__27227);var opts = map__27227__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27225 = null;if (arguments.length > 1) {
  p__27225 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27225);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27228){
var url = cljs.core.first(arglist__27228);
var p__27225 = cljs.core.rest(arglist__27228);
return GET__delegate(url,p__27225);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27229){var map__27231 = p__27229;var map__27231__$1 = ((cljs.core.seq_QMARK_.call(null,map__27231))?cljs.core.apply.call(null,cljs.core.hash_map,map__27231):map__27231);var opts = map__27231__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27229 = null;if (arguments.length > 2) {
  p__27229 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27229);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27232){
var url = cljs.core.first(arglist__27232);
arglist__27232 = cljs.core.next(arglist__27232);
var content = cljs.core.first(arglist__27232);
var p__27229 = cljs.core.rest(arglist__27232);
return POST__delegate(url,content,p__27229);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27233){var map__27235 = p__27233;var map__27235__$1 = ((cljs.core.seq_QMARK_.call(null,map__27235))?cljs.core.apply.call(null,cljs.core.hash_map,map__27235):map__27235);var opts = map__27235__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27233 = null;if (arguments.length > 2) {
  p__27233 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27233);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27236){
var url = cljs.core.first(arglist__27236);
arglist__27236 = cljs.core.next(arglist__27236);
var content = cljs.core.first(arglist__27236);
var p__27233 = cljs.core.rest(arglist__27236);
return PUT__delegate(url,content,p__27233);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* implements last-call-wins aync api-call semantics, discarding results from
* any earlier api calls
* - in-flight-atom : an atom used to match received results to calls
* - valch : a single-value channel eventually containing one api-call result
*/
clustermap.api.lastcall_method_impl = (function lastcall_method_impl(in_flight_atom,valch){var rx = cljs.core.async.chan.call(null);cljs.core.reset_BANG_.call(null,in_flight_atom,valch);
var c__9125__auto___27307 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27307,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27307,rx){
return (function (state_27288){var state_val_27289 = (state_27288[(1)]);if((state_val_27289 === (8)))
{var inst_27284 = (state_27288[(2)]);var inst_27285 = cljs.core.async.close_BANG_.call(null,valch);var inst_27286 = cljs.core.async.close_BANG_.call(null,rx);var state_27288__$1 = (function (){var statearr_27290 = state_27288;(statearr_27290[(7)] = inst_27285);
(statearr_27290[(8)] = inst_27284);
return statearr_27290;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27288__$1,inst_27286);
} else
{if((state_val_27289 === (7)))
{var state_27288__$1 = state_27288;var statearr_27291_27308 = state_27288__$1;(statearr_27291_27308[(2)] = null);
(statearr_27291_27308[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (6)))
{var inst_27273 = (state_27288[(9)]);var inst_27281 = cljs.core.async.put_BANG_.call(null,rx,inst_27273);var state_27288__$1 = state_27288;var statearr_27292_27309 = state_27288__$1;(statearr_27292_27309[(2)] = inst_27281);
(statearr_27292_27309[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (5)))
{var inst_27279 = (state_27288[(2)]);var state_27288__$1 = state_27288;if(cljs.core.truth_(inst_27279))
{var statearr_27293_27310 = state_27288__$1;(statearr_27293_27310[(1)] = (6));
} else
{var statearr_27294_27311 = state_27288__$1;(statearr_27294_27311[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (4)))
{var inst_27273 = (state_27288[(9)]);var state_27288__$1 = state_27288;var statearr_27295_27312 = state_27288__$1;(statearr_27295_27312[(2)] = inst_27273);
(statearr_27295_27312[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (3)))
{var inst_27275 = cljs.core.deref.call(null,in_flight_atom);var inst_27276 = cljs.core._EQ_.call(null,inst_27275,valch);var state_27288__$1 = state_27288;var statearr_27296_27313 = state_27288__$1;(statearr_27296_27313[(2)] = inst_27276);
(statearr_27296_27313[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (2)))
{var inst_27273 = (state_27288[(9)]);var inst_27273__$1 = (state_27288[(2)]);var state_27288__$1 = (function (){var statearr_27297 = state_27288;(statearr_27297[(9)] = inst_27273__$1);
return statearr_27297;
})();if(cljs.core.truth_(inst_27273__$1))
{var statearr_27298_27314 = state_27288__$1;(statearr_27298_27314[(1)] = (3));
} else
{var statearr_27299_27315 = state_27288__$1;(statearr_27299_27315[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27289 === (1)))
{var state_27288__$1 = state_27288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27288__$1,(2),valch);
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
});})(c__9125__auto___27307,rx))
;return ((function (switch__9110__auto__,c__9125__auto___27307,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27303 = [null,null,null,null,null,null,null,null,null,null];(statearr_27303[(0)] = state_machine__9111__auto__);
(statearr_27303[(1)] = (1));
return statearr_27303;
});
var state_machine__9111__auto____1 = (function (state_27288){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27288);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27304){if((e27304 instanceof Object))
{var ex__9114__auto__ = e27304;var statearr_27305_27316 = state_27288;(statearr_27305_27316[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27304;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27317 = state_27288;
state_27288 = G__27317;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27288){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27307,rx))
})();var state__9127__auto__ = (function (){var statearr_27306 = f__9126__auto__.call(null);(statearr_27306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27307);
return statearr_27306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27307,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,ch){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,ch){
return (function (state_27335){var state_val_27336 = (state_27335[(1)]);if((state_val_27336 === (2)))
{var inst_27332 = (state_27335[(2)]);var inst_27333 = console.log(inst_27332);var state_27335__$1 = state_27335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27335__$1,inst_27333);
} else
{if((state_val_27336 === (1)))
{var state_27335__$1 = state_27335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27335__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27340 = [null,null,null,null,null,null,null];(statearr_27340[(0)] = state_machine__9111__auto__);
(statearr_27340[(1)] = (1));
return statearr_27340;
});
var state_machine__9111__auto____1 = (function (state_27335){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27335);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27341){if((e27341 instanceof Object))
{var ex__9114__auto__ = e27341;var statearr_27342_27344 = state_27335;(statearr_27342_27344[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27341;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27345 = state_27335;
state_27335 = G__27345;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27335){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27343 = f__9126__auto__.call(null);(statearr_27343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,ch))
);
return c__9125__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__27346){
var f = cljs.core.first(arglist__27346);
var args = cljs.core.rest(arglist__27346);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27349){var vec__27350 = p__27349;var k = cljs.core.nth.call(null,vec__27350,(0),null);var v = cljs.core.nth.call(null,vec__27350,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27377,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27377,r){
return (function (state_27368){var state_val_27369 = (state_27368[(1)]);if((state_val_27369 === (2)))
{var inst_27365 = (state_27368[(2)]);var inst_27366 = cljs.core.reset_BANG_.call(null,r,inst_27365);var state_27368__$1 = state_27368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27368__$1,inst_27366);
} else
{if((state_val_27369 === (1)))
{var state_27368__$1 = state_27368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27368__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27377,r))
;return ((function (switch__9110__auto__,c__9125__auto___27377,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27373 = [null,null,null,null,null,null,null];(statearr_27373[(0)] = state_machine__9111__auto__);
(statearr_27373[(1)] = (1));
return statearr_27373;
});
var state_machine__9111__auto____1 = (function (state_27368){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27368);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27374){if((e27374 instanceof Object))
{var ex__9114__auto__ = e27374;var statearr_27375_27378 = state_27368;(statearr_27375_27378[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27368);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27374;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27379 = state_27368;
state_27368 = G__27379;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27368){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27377,r))
})();var state__9127__auto__ = (function (){var statearr_27376 = f__9126__auto__.call(null);(statearr_27376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27377);
return statearr_27376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27377,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27380){
var id = cljs.core.first(arglist__27380);
arglist__27380 = cljs.core.next(arglist__27380);
var tolerance = cljs.core.first(arglist__27380);
var opts = cljs.core.rest(arglist__27380);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27381){
var id = cljs.core.first(arglist__27381);
var opts = cljs.core.rest(arglist__27381);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27382){
var ids = cljs.core.first(arglist__27382);
arglist__27382 = cljs.core.next(arglist__27382);
var tolerance = cljs.core.first(arglist__27382);
var opts = cljs.core.rest(arglist__27382);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27383){var map__27385 = p__27383;var map__27385__$1 = ((cljs.core.seq_QMARK_.call(null,map__27385))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);var opts = map__27385__$1;var boundaryline_ids = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27383 = null;if (arguments.length > 3) {
  p__27383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27383);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27386){
var collection_id = cljs.core.first(arglist__27386);
arglist__27386 = cljs.core.next(arglist__27386);
var tolerance = cljs.core.first(arglist__27386);
arglist__27386 = cljs.core.next(arglist__27386);
var bounds = cljs.core.first(arglist__27386);
var p__27383 = cljs.core.rest(arglist__27386);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27383);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var boundaryline_aggregation_factory27387 = null;
var boundaryline_aggregation_factory27387__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var boundaryline_aggregation_factory27387__9 = (function() { 
var G__27394__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27391){var vec__27393 = p__27391;var type_ids = cljs.core.nth.call(null,vec__27393,(0),null);var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
};
var G__27394 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27391 = null;if (arguments.length > 8) {
  p__27391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27394__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27391);};
G__27394.cljs$lang$maxFixedArity = 8;
G__27394.cljs$lang$applyTo = (function (arglist__27395){
var index = cljs.core.first(arglist__27395);
arglist__27395 = cljs.core.next(arglist__27395);
var type = cljs.core.first(arglist__27395);
arglist__27395 = cljs.core.next(arglist__27395);
var blcoll = cljs.core.first(arglist__27395);
arglist__27395 = cljs.core.next(arglist__27395);
var attr = cljs.core.first(arglist__27395);
arglist__27395 = cljs.core.next(arglist__27395);
var filter = cljs.core.first(arglist__27395);
arglist__27395 = cljs.core.next(arglist__27395);
var bounds = cljs.core.first(arglist__27395);
arglist__27395 = cljs.core.next(arglist__27395);
var scale_attr = cljs.core.first(arglist__27395);
arglist__27395 = cljs.core.next(arglist__27395);
var post_scale_factor = cljs.core.first(arglist__27395);
var p__27391 = cljs.core.rest(arglist__27395);
return G__27394__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27391);
});
G__27394.cljs$core$IFn$_invoke$arity$variadic = G__27394__delegate;
return G__27394;
})()
;
boundaryline_aggregation_factory27387 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27391 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27387__0.call(this);
default:
return boundaryline_aggregation_factory27387__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27387.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27387.cljs$lang$applyTo = boundaryline_aggregation_factory27387__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27387.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27387__0;
boundaryline_aggregation_factory27387.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27387__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27387;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var nested_aggregation_factory27396 = null;
var nested_aggregation_factory27396__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var nested_aggregation_factory27396__1 = (function (p__27400){var map__27402 = p__27400;var map__27402__$1 = ((cljs.core.seq_QMARK_.call(null,map__27402))?cljs.core.apply.call(null,cljs.core.hash_map,map__27402):map__27402);var q = map__27402__$1;var stats_attr = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
nested_aggregation_factory27396 = function(p__27400){
switch(arguments.length){
case 0:
return nested_aggregation_factory27396__0.call(this);
case 1:
return nested_aggregation_factory27396__1.call(this,p__27400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27396.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27396__0;
nested_aggregation_factory27396.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27396__1;
return nested_aggregation_factory27396;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var summary_stats_factory27403 = null;
var summary_stats_factory27403__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var summary_stats_factory27403__6 = (function() { 
var G__27410__delegate = function (index,type,statsattrs,filter,bounds,p__27407){var vec__27409 = p__27407;var type_ids = cljs.core.nth.call(null,vec__27409,(0),null);var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
};
var G__27410 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27407 = null;if (arguments.length > 5) {
  p__27407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27410__delegate.call(this,index,type,statsattrs,filter,bounds,p__27407);};
G__27410.cljs$lang$maxFixedArity = 5;
G__27410.cljs$lang$applyTo = (function (arglist__27411){
var index = cljs.core.first(arglist__27411);
arglist__27411 = cljs.core.next(arglist__27411);
var type = cljs.core.first(arglist__27411);
arglist__27411 = cljs.core.next(arglist__27411);
var statsattrs = cljs.core.first(arglist__27411);
arglist__27411 = cljs.core.next(arglist__27411);
var filter = cljs.core.first(arglist__27411);
arglist__27411 = cljs.core.next(arglist__27411);
var bounds = cljs.core.first(arglist__27411);
var p__27407 = cljs.core.rest(arglist__27411);
return G__27410__delegate(index,type,statsattrs,filter,bounds,p__27407);
});
G__27410.cljs$core$IFn$_invoke$arity$variadic = G__27410__delegate;
return G__27410;
})()
;
summary_stats_factory27403 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27407 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27403__0.call(this);
default:
return summary_stats_factory27403__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27403.cljs$lang$maxFixedArity = 5;
summary_stats_factory27403.cljs$lang$applyTo = summary_stats_factory27403__6.cljs$lang$applyTo;
summary_stats_factory27403.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27403__0;
summary_stats_factory27403.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27403__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27403;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var location_lists_factory27412 = null;
var location_lists_factory27412__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var location_lists_factory27412__8 = (function() { 
var G__27419__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27416){var vec__27418 = p__27416;var type_ids = cljs.core.nth.call(null,vec__27418,(0),null);var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
};
var G__27419 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27416 = null;if (arguments.length > 7) {
  p__27416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27419__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27416);};
G__27419.cljs$lang$maxFixedArity = 7;
G__27419.cljs$lang$applyTo = (function (arglist__27420){
var index = cljs.core.first(arglist__27420);
arglist__27420 = cljs.core.next(arglist__27420);
var type = cljs.core.first(arglist__27420);
arglist__27420 = cljs.core.next(arglist__27420);
var location_attr = cljs.core.first(arglist__27420);
arglist__27420 = cljs.core.next(arglist__27420);
var attrs = cljs.core.first(arglist__27420);
arglist__27420 = cljs.core.next(arglist__27420);
var max_count = cljs.core.first(arglist__27420);
arglist__27420 = cljs.core.next(arglist__27420);
var filter = cljs.core.first(arglist__27420);
arglist__27420 = cljs.core.next(arglist__27420);
var bounds = cljs.core.first(arglist__27420);
var p__27416 = cljs.core.rest(arglist__27420);
return G__27419__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27416);
});
G__27419.cljs$core$IFn$_invoke$arity$variadic = G__27419__delegate;
return G__27419;
})()
;
location_lists_factory27412 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27416 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27412__0.call(this);
default:
return location_lists_factory27412__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27412.cljs$lang$maxFixedArity = 7;
location_lists_factory27412.cljs$lang$applyTo = location_lists_factory27412__8.cljs$lang$applyTo;
location_lists_factory27412.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27412__0;
location_lists_factory27412.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27412__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27412;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var simple_table_factory27421 = null;
var simple_table_factory27421__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var simple_table_factory27421__8 = (function() { 
var G__27428__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27425){var vec__27427 = p__27425;var type_ids = cljs.core.nth.call(null,vec__27427,(0),null);var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
};
var G__27428 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27425 = null;if (arguments.length > 7) {
  p__27425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27428__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27425);};
G__27428.cljs$lang$maxFixedArity = 7;
G__27428.cljs$lang$applyTo = (function (arglist__27429){
var index = cljs.core.first(arglist__27429);
arglist__27429 = cljs.core.next(arglist__27429);
var type = cljs.core.first(arglist__27429);
arglist__27429 = cljs.core.next(arglist__27429);
var filter_spec = cljs.core.first(arglist__27429);
arglist__27429 = cljs.core.next(arglist__27429);
var bounds = cljs.core.first(arglist__27429);
arglist__27429 = cljs.core.next(arglist__27429);
var sort_spec = cljs.core.first(arglist__27429);
arglist__27429 = cljs.core.next(arglist__27429);
var from = cljs.core.first(arglist__27429);
arglist__27429 = cljs.core.next(arglist__27429);
var size = cljs.core.first(arglist__27429);
var p__27425 = cljs.core.rest(arglist__27429);
return G__27428__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27425);
});
G__27428.cljs$core$IFn$_invoke$arity$variadic = G__27428__delegate;
return G__27428;
})()
;
simple_table_factory27421 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27425 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory27421__0.call(this);
default:
return simple_table_factory27421__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory27421.cljs$lang$maxFixedArity = 7;
simple_table_factory27421.cljs$lang$applyTo = simple_table_factory27421__8.cljs$lang$applyTo;
simple_table_factory27421.cljs$core$IFn$_invoke$arity$0 = simple_table_factory27421__0;
simple_table_factory27421.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory27421__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory27421;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var timeline_factory27430 = null;
var timeline_factory27430__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var timeline_factory27430__2 = (function (query,filter_spec){var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
timeline_factory27430 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory27430__0.call(this);
case 2:
return timeline_factory27430__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory27430.cljs$core$IFn$_invoke$arity$0 = timeline_factory27430__0;
timeline_factory27430.cljs$core$IFn$_invoke$arity$2 = timeline_factory27430__2;
return timeline_factory27430;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var geo_sponsors_factory27431 = null;
var geo_sponsors_factory27431__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var geo_sponsors_factory27431__1 = (function (bounds){var valch__14460__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
geo_sponsors_factory27431 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory27431__0.call(this);
case 1:
return geo_sponsors_factory27431__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory27431.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory27431__0;
geo_sponsors_factory27431.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory27431__1;
return geo_sponsors_factory27431;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var rankings_factory27432 = null;
var rankings_factory27432__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var rankings_factory27432__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
rankings_factory27432 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory27432__0.call(this);
case 9:
return rankings_factory27432__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory27432.cljs$core$IFn$_invoke$arity$0 = rankings_factory27432__0;
rankings_factory27432.cljs$core$IFn$_invoke$arity$9 = rankings_factory27432__9;
return rankings_factory27432;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var ranges_factory27433 = null;
var ranges_factory27433__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var ranges_factory27433__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
ranges_factory27433 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory27433__0.call(this);
case 9:
return ranges_factory27433__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory27433.cljs$core$IFn$_invoke$arity$0 = ranges_factory27433__0;
ranges_factory27433.cljs$core$IFn$_invoke$arity$9 = ranges_factory27433__9;
return ranges_factory27433;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var count_matching_factory27434 = null;
var count_matching_factory27434__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var count_matching_factory27434__3 = (function (index,index_type,filter_spec){var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
count_matching_factory27434 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory27434__0.call(this);
case 3:
return count_matching_factory27434__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory27434.cljs$core$IFn$_invoke$arity$0 = count_matching_factory27434__0;
count_matching_factory27434.cljs$core$IFn$_invoke$arity$3 = count_matching_factory27434__3;
return count_matching_factory27434;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var records_factory27435 = null;
var records_factory27435__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var records_factory27435__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14460__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
records_factory27435 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory27435__0.call(this);
case 5:
return records_factory27435__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory27435.cljs$core$IFn$_invoke$arity$0 = records_factory27435__0;
records_factory27435.cljs$core$IFn$_invoke$arity$5 = records_factory27435__5;
return records_factory27435;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var tags_of_type_factory27436 = null;
var tags_of_type_factory27436__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var tags_of_type_factory27436__1 = (function (tag_type){var valch__14460__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
tags_of_type_factory27436 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory27436__0.call(this);
case 1:
return tags_of_type_factory27436__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory27436.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory27436__0;
tags_of_type_factory27436.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory27436__1;
return tags_of_type_factory27436;
})()
;})(in_flight_atom__14458__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14458__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14458__auto__){
return (function() {
var geotags_of_type_factory27437 = null;
var geotags_of_type_factory27437__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,emptych__14459__auto__);
});
var geotags_of_type_factory27437__1 = (function (tag_type){var valch__14460__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto__,valch__14460__auto__);
});
geotags_of_type_factory27437 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory27437__0.call(this);
case 1:
return geotags_of_type_factory27437__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory27437.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory27437__0;
geotags_of_type_factory27437.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory27437__1;
return geotags_of_type_factory27437;
})()
;})(in_flight_atom__14458__auto__))
});
var in_flight_atom__14458__auto___27438 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14458__auto___27438){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14459__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14459__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto___27438,emptych__14459__auto__);
});
var company_search__1 = (function (query){var valch__14460__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14458__auto___27438,valch__14460__auto__);
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
;})(in_flight_atom__14458__auto___27438))
;
