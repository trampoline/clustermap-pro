// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.lastcall_method');
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
var AJAX__delegate = function (url,p__27449){var map__27453 = p__27449;var map__27453__$1 = ((cljs.core.seq_QMARK_.call(null,map__27453))?cljs.core.apply.call(null,cljs.core.hash_map,map__27453):map__27453);var opts = map__27453__$1;var content = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27453,map__27453__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27453,map__27453__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27453,map__27453__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27453,map__27453__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27455 = method;var G__27455__$1 = (((G__27455 == null))?null:cljs.core.name.call(null,G__27455));var G__27455__$2 = (((G__27455__$1 == null))?null:clojure.string.upper_case.call(null,G__27455__$1));return G__27455__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27449 = null;if (arguments.length > 1) {
  p__27449 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27449);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27456){
var url = cljs.core.first(arglist__27456);
var p__27449 = cljs.core.rest(arglist__27456);
return AJAX__delegate(url,p__27449);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27457){var map__27459 = p__27457;var map__27459__$1 = ((cljs.core.seq_QMARK_.call(null,map__27459))?cljs.core.apply.call(null,cljs.core.hash_map,map__27459):map__27459);var opts = map__27459__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27457 = null;if (arguments.length > 1) {
  p__27457 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27457);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27460){
var url = cljs.core.first(arglist__27460);
var p__27457 = cljs.core.rest(arglist__27460);
return GET__delegate(url,p__27457);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27461){var map__27463 = p__27461;var map__27463__$1 = ((cljs.core.seq_QMARK_.call(null,map__27463))?cljs.core.apply.call(null,cljs.core.hash_map,map__27463):map__27463);var opts = map__27463__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27461 = null;if (arguments.length > 2) {
  p__27461 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27461);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27464){
var url = cljs.core.first(arglist__27464);
arglist__27464 = cljs.core.next(arglist__27464);
var content = cljs.core.first(arglist__27464);
var p__27461 = cljs.core.rest(arglist__27464);
return POST__delegate(url,content,p__27461);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27465){var map__27467 = p__27465;var map__27467__$1 = ((cljs.core.seq_QMARK_.call(null,map__27467))?cljs.core.apply.call(null,cljs.core.hash_map,map__27467):map__27467);var opts = map__27467__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27465 = null;if (arguments.length > 2) {
  p__27465 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27465);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27468){
var url = cljs.core.first(arglist__27468);
arglist__27468 = cljs.core.next(arglist__27468);
var content = cljs.core.first(arglist__27468);
var p__27465 = cljs.core.rest(arglist__27468);
return PUT__delegate(url,content,p__27465);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,ch){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,ch){
return (function (state_27486){var state_val_27487 = (state_27486[(1)]);if((state_val_27487 === (2)))
{var inst_27483 = (state_27486[(2)]);var inst_27484 = console.log(inst_27483);var state_27486__$1 = state_27486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27486__$1,inst_27484);
} else
{if((state_val_27487 === (1)))
{var state_27486__$1 = state_27486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27486__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27491 = [null,null,null,null,null,null,null];(statearr_27491[(0)] = state_machine__9111__auto__);
(statearr_27491[(1)] = (1));
return statearr_27491;
});
var state_machine__9111__auto____1 = (function (state_27486){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27486);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27492){if((e27492 instanceof Object))
{var ex__9114__auto__ = e27492;var statearr_27493_27495 = state_27486;(statearr_27493_27495[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27496 = state_27486;
state_27486 = G__27496;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27486){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27494 = f__9126__auto__.call(null);(statearr_27494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27494;
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
log_api.cljs$lang$applyTo = (function (arglist__27497){
var f = cljs.core.first(arglist__27497);
var args = cljs.core.rest(arglist__27497);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27500){var vec__27501 = p__27500;var k = cljs.core.nth.call(null,vec__27501,(0),null);var v = cljs.core.nth.call(null,vec__27501,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27528 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27528,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27528,r){
return (function (state_27519){var state_val_27520 = (state_27519[(1)]);if((state_val_27520 === (2)))
{var inst_27516 = (state_27519[(2)]);var inst_27517 = cljs.core.reset_BANG_.call(null,r,inst_27516);var state_27519__$1 = state_27519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27519__$1,inst_27517);
} else
{if((state_val_27520 === (1)))
{var state_27519__$1 = state_27519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27519__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27528,r))
;return ((function (switch__9110__auto__,c__9125__auto___27528,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27524 = [null,null,null,null,null,null,null];(statearr_27524[(0)] = state_machine__9111__auto__);
(statearr_27524[(1)] = (1));
return statearr_27524;
});
var state_machine__9111__auto____1 = (function (state_27519){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27519);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27525){if((e27525 instanceof Object))
{var ex__9114__auto__ = e27525;var statearr_27526_27529 = state_27519;(statearr_27526_27529[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27525;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27530 = state_27519;
state_27519 = G__27530;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27519){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27528,r))
})();var state__9127__auto__ = (function (){var statearr_27527 = f__9126__auto__.call(null);(statearr_27527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27528);
return statearr_27527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27528,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27531){
var id = cljs.core.first(arglist__27531);
arglist__27531 = cljs.core.next(arglist__27531);
var tolerance = cljs.core.first(arglist__27531);
var opts = cljs.core.rest(arglist__27531);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27532){
var id = cljs.core.first(arglist__27532);
var opts = cljs.core.rest(arglist__27532);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27533){
var ids = cljs.core.first(arglist__27533);
arglist__27533 = cljs.core.next(arglist__27533);
var tolerance = cljs.core.first(arglist__27533);
var opts = cljs.core.rest(arglist__27533);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27534){var map__27536 = p__27534;var map__27536__$1 = ((cljs.core.seq_QMARK_.call(null,map__27536))?cljs.core.apply.call(null,cljs.core.hash_map,map__27536):map__27536);var opts = map__27536__$1;var boundaryline_ids = cljs.core.get.call(null,map__27536__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27534 = null;if (arguments.length > 3) {
  p__27534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27534);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27537){
var collection_id = cljs.core.first(arglist__27537);
arglist__27537 = cljs.core.next(arglist__27537);
var tolerance = cljs.core.first(arglist__27537);
arglist__27537 = cljs.core.next(arglist__27537);
var bounds = cljs.core.first(arglist__27537);
var p__27534 = cljs.core.rest(arglist__27537);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27534);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var boundaryline_aggregation_factory27538 = null;
var boundaryline_aggregation_factory27538__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var boundaryline_aggregation_factory27538__9 = (function() { 
var G__27545__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27542){var vec__27544 = p__27542;var type_ids = cljs.core.nth.call(null,vec__27544,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27545 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27542 = null;if (arguments.length > 8) {
  p__27542 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27545__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27542);};
G__27545.cljs$lang$maxFixedArity = 8;
G__27545.cljs$lang$applyTo = (function (arglist__27546){
var index = cljs.core.first(arglist__27546);
arglist__27546 = cljs.core.next(arglist__27546);
var type = cljs.core.first(arglist__27546);
arglist__27546 = cljs.core.next(arglist__27546);
var blcoll = cljs.core.first(arglist__27546);
arglist__27546 = cljs.core.next(arglist__27546);
var attr = cljs.core.first(arglist__27546);
arglist__27546 = cljs.core.next(arglist__27546);
var filter = cljs.core.first(arglist__27546);
arglist__27546 = cljs.core.next(arglist__27546);
var bounds = cljs.core.first(arglist__27546);
arglist__27546 = cljs.core.next(arglist__27546);
var scale_attr = cljs.core.first(arglist__27546);
arglist__27546 = cljs.core.next(arglist__27546);
var post_scale_factor = cljs.core.first(arglist__27546);
var p__27542 = cljs.core.rest(arglist__27546);
return G__27545__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27542);
});
G__27545.cljs$core$IFn$_invoke$arity$variadic = G__27545__delegate;
return G__27545;
})()
;
boundaryline_aggregation_factory27538 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27542 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27538__0.call(this);
default:
return boundaryline_aggregation_factory27538__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27538.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27538.cljs$lang$applyTo = boundaryline_aggregation_factory27538__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27538.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27538__0;
boundaryline_aggregation_factory27538.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27538__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27538;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var nested_aggregation_factory27547 = null;
var nested_aggregation_factory27547__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var nested_aggregation_factory27547__1 = (function (p__27551){var map__27553 = p__27551;var map__27553__$1 = ((cljs.core.seq_QMARK_.call(null,map__27553))?cljs.core.apply.call(null,cljs.core.hash_map,map__27553):map__27553);var q = map__27553__$1;var stats_attr = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
nested_aggregation_factory27547 = function(p__27551){
switch(arguments.length){
case 0:
return nested_aggregation_factory27547__0.call(this);
case 1:
return nested_aggregation_factory27547__1.call(this,p__27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27547.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27547__0;
nested_aggregation_factory27547.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27547__1;
return nested_aggregation_factory27547;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var summary_stats_factory27554 = null;
var summary_stats_factory27554__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var summary_stats_factory27554__6 = (function() { 
var G__27561__delegate = function (index,type,statsattrs,filter,bounds,p__27558){var vec__27560 = p__27558;var type_ids = cljs.core.nth.call(null,vec__27560,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27561 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27558 = null;if (arguments.length > 5) {
  p__27558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27561__delegate.call(this,index,type,statsattrs,filter,bounds,p__27558);};
G__27561.cljs$lang$maxFixedArity = 5;
G__27561.cljs$lang$applyTo = (function (arglist__27562){
var index = cljs.core.first(arglist__27562);
arglist__27562 = cljs.core.next(arglist__27562);
var type = cljs.core.first(arglist__27562);
arglist__27562 = cljs.core.next(arglist__27562);
var statsattrs = cljs.core.first(arglist__27562);
arglist__27562 = cljs.core.next(arglist__27562);
var filter = cljs.core.first(arglist__27562);
arglist__27562 = cljs.core.next(arglist__27562);
var bounds = cljs.core.first(arglist__27562);
var p__27558 = cljs.core.rest(arglist__27562);
return G__27561__delegate(index,type,statsattrs,filter,bounds,p__27558);
});
G__27561.cljs$core$IFn$_invoke$arity$variadic = G__27561__delegate;
return G__27561;
})()
;
summary_stats_factory27554 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27558 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27554__0.call(this);
default:
return summary_stats_factory27554__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27554.cljs$lang$maxFixedArity = 5;
summary_stats_factory27554.cljs$lang$applyTo = summary_stats_factory27554__6.cljs$lang$applyTo;
summary_stats_factory27554.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27554__0;
summary_stats_factory27554.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27554__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27554;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var location_lists_factory27563 = null;
var location_lists_factory27563__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var location_lists_factory27563__8 = (function() { 
var G__27570__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27567){var vec__27569 = p__27567;var type_ids = cljs.core.nth.call(null,vec__27569,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27570 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27567 = null;if (arguments.length > 7) {
  p__27567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27570__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27567);};
G__27570.cljs$lang$maxFixedArity = 7;
G__27570.cljs$lang$applyTo = (function (arglist__27571){
var index = cljs.core.first(arglist__27571);
arglist__27571 = cljs.core.next(arglist__27571);
var type = cljs.core.first(arglist__27571);
arglist__27571 = cljs.core.next(arglist__27571);
var location_attr = cljs.core.first(arglist__27571);
arglist__27571 = cljs.core.next(arglist__27571);
var attrs = cljs.core.first(arglist__27571);
arglist__27571 = cljs.core.next(arglist__27571);
var max_count = cljs.core.first(arglist__27571);
arglist__27571 = cljs.core.next(arglist__27571);
var filter = cljs.core.first(arglist__27571);
arglist__27571 = cljs.core.next(arglist__27571);
var bounds = cljs.core.first(arglist__27571);
var p__27567 = cljs.core.rest(arglist__27571);
return G__27570__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27567);
});
G__27570.cljs$core$IFn$_invoke$arity$variadic = G__27570__delegate;
return G__27570;
})()
;
location_lists_factory27563 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27567 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27563__0.call(this);
default:
return location_lists_factory27563__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27563.cljs$lang$maxFixedArity = 7;
location_lists_factory27563.cljs$lang$applyTo = location_lists_factory27563__8.cljs$lang$applyTo;
location_lists_factory27563.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27563__0;
location_lists_factory27563.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27563__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27563;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var simple_table_factory27572 = null;
var simple_table_factory27572__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var simple_table_factory27572__8 = (function() { 
var G__27579__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27576){var vec__27578 = p__27576;var type_ids = cljs.core.nth.call(null,vec__27578,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27579 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27576 = null;if (arguments.length > 7) {
  p__27576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27579__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27576);};
G__27579.cljs$lang$maxFixedArity = 7;
G__27579.cljs$lang$applyTo = (function (arglist__27580){
var index = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var type = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var filter_spec = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var bounds = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var sort_spec = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var from = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var size = cljs.core.first(arglist__27580);
var p__27576 = cljs.core.rest(arglist__27580);
return G__27579__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27576);
});
G__27579.cljs$core$IFn$_invoke$arity$variadic = G__27579__delegate;
return G__27579;
})()
;
simple_table_factory27572 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27576 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory27572__0.call(this);
default:
return simple_table_factory27572__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory27572.cljs$lang$maxFixedArity = 7;
simple_table_factory27572.cljs$lang$applyTo = simple_table_factory27572__8.cljs$lang$applyTo;
simple_table_factory27572.cljs$core$IFn$_invoke$arity$0 = simple_table_factory27572__0;
simple_table_factory27572.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory27572__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory27572;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var timeline_factory27581 = null;
var timeline_factory27581__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var timeline_factory27581__2 = (function (query,filter_spec){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
timeline_factory27581 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory27581__0.call(this);
case 2:
return timeline_factory27581__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory27581.cljs$core$IFn$_invoke$arity$0 = timeline_factory27581__0;
timeline_factory27581.cljs$core$IFn$_invoke$arity$2 = timeline_factory27581__2;
return timeline_factory27581;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var geo_sponsors_factory27582 = null;
var geo_sponsors_factory27582__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var geo_sponsors_factory27582__1 = (function (bounds){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
geo_sponsors_factory27582 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory27582__0.call(this);
case 1:
return geo_sponsors_factory27582__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory27582.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory27582__0;
geo_sponsors_factory27582.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory27582__1;
return geo_sponsors_factory27582;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var rankings_factory27583 = null;
var rankings_factory27583__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var rankings_factory27583__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
rankings_factory27583 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory27583__0.call(this);
case 9:
return rankings_factory27583__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory27583.cljs$core$IFn$_invoke$arity$0 = rankings_factory27583__0;
rankings_factory27583.cljs$core$IFn$_invoke$arity$9 = rankings_factory27583__9;
return rankings_factory27583;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var ranges_factory27584 = null;
var ranges_factory27584__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var ranges_factory27584__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
ranges_factory27584 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory27584__0.call(this);
case 9:
return ranges_factory27584__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory27584.cljs$core$IFn$_invoke$arity$0 = ranges_factory27584__0;
ranges_factory27584.cljs$core$IFn$_invoke$arity$9 = ranges_factory27584__9;
return ranges_factory27584;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.geohash_grid_factory = (function geohash_grid_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var geohash_grid_factory27585 = null;
var geohash_grid_factory27585__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var geohash_grid_factory27585__4 = (function (index_name,index_type,filter_spec,bounds){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geohash-grid"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index_name,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
geohash_grid_factory27585 = function(index_name,index_type,filter_spec,bounds){
switch(arguments.length){
case 0:
return geohash_grid_factory27585__0.call(this);
case 4:
return geohash_grid_factory27585__4.call(this,index_name,index_type,filter_spec,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geohash_grid_factory27585.cljs$core$IFn$_invoke$arity$0 = geohash_grid_factory27585__0;
geohash_grid_factory27585.cljs$core$IFn$_invoke$arity$4 = geohash_grid_factory27585__4;
return geohash_grid_factory27585;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var count_matching_factory27586 = null;
var count_matching_factory27586__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var count_matching_factory27586__3 = (function (index,index_type,filter_spec){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
count_matching_factory27586 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory27586__0.call(this);
case 3:
return count_matching_factory27586__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory27586.cljs$core$IFn$_invoke$arity$0 = count_matching_factory27586__0;
count_matching_factory27586.cljs$core$IFn$_invoke$arity$3 = count_matching_factory27586__3;
return count_matching_factory27586;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var records_factory27587 = null;
var records_factory27587__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var records_factory27587__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
records_factory27587 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory27587__0.call(this);
case 5:
return records_factory27587__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory27587.cljs$core$IFn$_invoke$arity$0 = records_factory27587__0;
records_factory27587.cljs$core$IFn$_invoke$arity$5 = records_factory27587__5;
return records_factory27587;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var tags_of_type_factory27588 = null;
var tags_of_type_factory27588__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var tags_of_type_factory27588__1 = (function (tag_type){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
tags_of_type_factory27588 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory27588__0.call(this);
case 1:
return tags_of_type_factory27588__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory27588.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory27588__0;
tags_of_type_factory27588.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory27588__1;
return tags_of_type_factory27588;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var geotags_of_type_factory27589 = null;
var geotags_of_type_factory27589__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var geotags_of_type_factory27589__1 = (function (tag_type){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
geotags_of_type_factory27589 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory27589__0.call(this);
case 1:
return geotags_of_type_factory27589__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory27589.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory27589__0;
geotags_of_type_factory27589.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory27589__1;
return geotags_of_type_factory27589;
})()
;})(in_flight_atom__14536__auto__))
});
var in_flight_atom__14536__auto___27590 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14536__auto___27590){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto___27590,emptych__14537__auto__);
});
var company_search__1 = (function (query){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto___27590,valch__14538__auto__);
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
;})(in_flight_atom__14536__auto___27590))
;
