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
var AJAX__delegate = function (url,p__27583){var map__27587 = p__27583;var map__27587__$1 = ((cljs.core.seq_QMARK_.call(null,map__27587))?cljs.core.apply.call(null,cljs.core.hash_map,map__27587):map__27587);var opts = map__27587__$1;var content = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27587,map__27587__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27587,map__27587__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27587,map__27587__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27587,map__27587__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27589 = method;var G__27589__$1 = (((G__27589 == null))?null:cljs.core.name.call(null,G__27589));var G__27589__$2 = (((G__27589__$1 == null))?null:clojure.string.upper_case.call(null,G__27589__$1));return G__27589__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27583 = null;if (arguments.length > 1) {
  p__27583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27583);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27590){
var url = cljs.core.first(arglist__27590);
var p__27583 = cljs.core.rest(arglist__27590);
return AJAX__delegate(url,p__27583);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27591){var map__27593 = p__27591;var map__27593__$1 = ((cljs.core.seq_QMARK_.call(null,map__27593))?cljs.core.apply.call(null,cljs.core.hash_map,map__27593):map__27593);var opts = map__27593__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27591 = null;if (arguments.length > 1) {
  p__27591 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27591);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27594){
var url = cljs.core.first(arglist__27594);
var p__27591 = cljs.core.rest(arglist__27594);
return GET__delegate(url,p__27591);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27595){var map__27597 = p__27595;var map__27597__$1 = ((cljs.core.seq_QMARK_.call(null,map__27597))?cljs.core.apply.call(null,cljs.core.hash_map,map__27597):map__27597);var opts = map__27597__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27595 = null;if (arguments.length > 2) {
  p__27595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27595);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27598){
var url = cljs.core.first(arglist__27598);
arglist__27598 = cljs.core.next(arglist__27598);
var content = cljs.core.first(arglist__27598);
var p__27595 = cljs.core.rest(arglist__27598);
return POST__delegate(url,content,p__27595);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27599){var map__27601 = p__27599;var map__27601__$1 = ((cljs.core.seq_QMARK_.call(null,map__27601))?cljs.core.apply.call(null,cljs.core.hash_map,map__27601):map__27601);var opts = map__27601__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27599 = null;if (arguments.length > 2) {
  p__27599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27599);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27602){
var url = cljs.core.first(arglist__27602);
arglist__27602 = cljs.core.next(arglist__27602);
var content = cljs.core.first(arglist__27602);
var p__27599 = cljs.core.rest(arglist__27602);
return PUT__delegate(url,content,p__27599);
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
return (function (state_27620){var state_val_27621 = (state_27620[(1)]);if((state_val_27621 === (2)))
{var inst_27617 = (state_27620[(2)]);var inst_27618 = console.log(inst_27617);var state_27620__$1 = state_27620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27620__$1,inst_27618);
} else
{if((state_val_27621 === (1)))
{var state_27620__$1 = state_27620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27625 = [null,null,null,null,null,null,null];(statearr_27625[(0)] = state_machine__9111__auto__);
(statearr_27625[(1)] = (1));
return statearr_27625;
});
var state_machine__9111__auto____1 = (function (state_27620){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27620);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27626){if((e27626 instanceof Object))
{var ex__9114__auto__ = e27626;var statearr_27627_27629 = state_27620;(statearr_27627_27629[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27620);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27630 = state_27620;
state_27620 = G__27630;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27620){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27628 = f__9126__auto__.call(null);(statearr_27628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27628;
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
log_api.cljs$lang$applyTo = (function (arglist__27631){
var f = cljs.core.first(arglist__27631);
var args = cljs.core.rest(arglist__27631);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27634){var vec__27635 = p__27634;var k = cljs.core.nth.call(null,vec__27635,(0),null);var v = cljs.core.nth.call(null,vec__27635,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27662 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27662,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27662,r){
return (function (state_27653){var state_val_27654 = (state_27653[(1)]);if((state_val_27654 === (2)))
{var inst_27650 = (state_27653[(2)]);var inst_27651 = cljs.core.reset_BANG_.call(null,r,inst_27650);var state_27653__$1 = state_27653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27653__$1,inst_27651);
} else
{if((state_val_27654 === (1)))
{var state_27653__$1 = state_27653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27662,r))
;return ((function (switch__9110__auto__,c__9125__auto___27662,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27658 = [null,null,null,null,null,null,null];(statearr_27658[(0)] = state_machine__9111__auto__);
(statearr_27658[(1)] = (1));
return statearr_27658;
});
var state_machine__9111__auto____1 = (function (state_27653){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27653);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27659){if((e27659 instanceof Object))
{var ex__9114__auto__ = e27659;var statearr_27660_27663 = state_27653;(statearr_27660_27663[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27659;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27664 = state_27653;
state_27653 = G__27664;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27653){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27662,r))
})();var state__9127__auto__ = (function (){var statearr_27661 = f__9126__auto__.call(null);(statearr_27661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27662);
return statearr_27661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27662,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27665){
var id = cljs.core.first(arglist__27665);
arglist__27665 = cljs.core.next(arglist__27665);
var tolerance = cljs.core.first(arglist__27665);
var opts = cljs.core.rest(arglist__27665);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27666){
var id = cljs.core.first(arglist__27666);
var opts = cljs.core.rest(arglist__27666);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27667){
var ids = cljs.core.first(arglist__27667);
arglist__27667 = cljs.core.next(arglist__27667);
var tolerance = cljs.core.first(arglist__27667);
var opts = cljs.core.rest(arglist__27667);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27668){var map__27670 = p__27668;var map__27670__$1 = ((cljs.core.seq_QMARK_.call(null,map__27670))?cljs.core.apply.call(null,cljs.core.hash_map,map__27670):map__27670);var opts = map__27670__$1;var boundaryline_ids = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27668 = null;if (arguments.length > 3) {
  p__27668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27668);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27671){
var collection_id = cljs.core.first(arglist__27671);
arglist__27671 = cljs.core.next(arglist__27671);
var tolerance = cljs.core.first(arglist__27671);
arglist__27671 = cljs.core.next(arglist__27671);
var bounds = cljs.core.first(arglist__27671);
var p__27668 = cljs.core.rest(arglist__27671);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27668);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var boundaryline_aggregation_factory27672 = null;
var boundaryline_aggregation_factory27672__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var boundaryline_aggregation_factory27672__9 = (function() { 
var G__27679__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27676){var vec__27678 = p__27676;var type_ids = cljs.core.nth.call(null,vec__27678,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27679 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27676 = null;if (arguments.length > 8) {
  p__27676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27679__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27676);};
G__27679.cljs$lang$maxFixedArity = 8;
G__27679.cljs$lang$applyTo = (function (arglist__27680){
var index = cljs.core.first(arglist__27680);
arglist__27680 = cljs.core.next(arglist__27680);
var type = cljs.core.first(arglist__27680);
arglist__27680 = cljs.core.next(arglist__27680);
var blcoll = cljs.core.first(arglist__27680);
arglist__27680 = cljs.core.next(arglist__27680);
var attr = cljs.core.first(arglist__27680);
arglist__27680 = cljs.core.next(arglist__27680);
var filter = cljs.core.first(arglist__27680);
arglist__27680 = cljs.core.next(arglist__27680);
var bounds = cljs.core.first(arglist__27680);
arglist__27680 = cljs.core.next(arglist__27680);
var scale_attr = cljs.core.first(arglist__27680);
arglist__27680 = cljs.core.next(arglist__27680);
var post_scale_factor = cljs.core.first(arglist__27680);
var p__27676 = cljs.core.rest(arglist__27680);
return G__27679__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27676);
});
G__27679.cljs$core$IFn$_invoke$arity$variadic = G__27679__delegate;
return G__27679;
})()
;
boundaryline_aggregation_factory27672 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27676 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27672__0.call(this);
default:
return boundaryline_aggregation_factory27672__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27672.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27672.cljs$lang$applyTo = boundaryline_aggregation_factory27672__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27672.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27672__0;
boundaryline_aggregation_factory27672.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27672__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27672;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var nested_aggregation_factory27681 = null;
var nested_aggregation_factory27681__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var nested_aggregation_factory27681__1 = (function (p__27685){var map__27687 = p__27685;var map__27687__$1 = ((cljs.core.seq_QMARK_.call(null,map__27687))?cljs.core.apply.call(null,cljs.core.hash_map,map__27687):map__27687);var q = map__27687__$1;var stats_attr = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27687__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
nested_aggregation_factory27681 = function(p__27685){
switch(arguments.length){
case 0:
return nested_aggregation_factory27681__0.call(this);
case 1:
return nested_aggregation_factory27681__1.call(this,p__27685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27681.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27681__0;
nested_aggregation_factory27681.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27681__1;
return nested_aggregation_factory27681;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var summary_stats_factory27688 = null;
var summary_stats_factory27688__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var summary_stats_factory27688__6 = (function() { 
var G__27695__delegate = function (index,type,statsattrs,filter,bounds,p__27692){var vec__27694 = p__27692;var type_ids = cljs.core.nth.call(null,vec__27694,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27695 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27692 = null;if (arguments.length > 5) {
  p__27692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27695__delegate.call(this,index,type,statsattrs,filter,bounds,p__27692);};
G__27695.cljs$lang$maxFixedArity = 5;
G__27695.cljs$lang$applyTo = (function (arglist__27696){
var index = cljs.core.first(arglist__27696);
arglist__27696 = cljs.core.next(arglist__27696);
var type = cljs.core.first(arglist__27696);
arglist__27696 = cljs.core.next(arglist__27696);
var statsattrs = cljs.core.first(arglist__27696);
arglist__27696 = cljs.core.next(arglist__27696);
var filter = cljs.core.first(arglist__27696);
arglist__27696 = cljs.core.next(arglist__27696);
var bounds = cljs.core.first(arglist__27696);
var p__27692 = cljs.core.rest(arglist__27696);
return G__27695__delegate(index,type,statsattrs,filter,bounds,p__27692);
});
G__27695.cljs$core$IFn$_invoke$arity$variadic = G__27695__delegate;
return G__27695;
})()
;
summary_stats_factory27688 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27692 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27688__0.call(this);
default:
return summary_stats_factory27688__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27688.cljs$lang$maxFixedArity = 5;
summary_stats_factory27688.cljs$lang$applyTo = summary_stats_factory27688__6.cljs$lang$applyTo;
summary_stats_factory27688.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27688__0;
summary_stats_factory27688.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27688__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27688;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var location_lists_factory27697 = null;
var location_lists_factory27697__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var location_lists_factory27697__8 = (function() { 
var G__27704__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27701){var vec__27703 = p__27701;var type_ids = cljs.core.nth.call(null,vec__27703,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27704 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27701 = null;if (arguments.length > 7) {
  p__27701 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27704__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27701);};
G__27704.cljs$lang$maxFixedArity = 7;
G__27704.cljs$lang$applyTo = (function (arglist__27705){
var index = cljs.core.first(arglist__27705);
arglist__27705 = cljs.core.next(arglist__27705);
var type = cljs.core.first(arglist__27705);
arglist__27705 = cljs.core.next(arglist__27705);
var location_attr = cljs.core.first(arglist__27705);
arglist__27705 = cljs.core.next(arglist__27705);
var attrs = cljs.core.first(arglist__27705);
arglist__27705 = cljs.core.next(arglist__27705);
var max_count = cljs.core.first(arglist__27705);
arglist__27705 = cljs.core.next(arglist__27705);
var filter = cljs.core.first(arglist__27705);
arglist__27705 = cljs.core.next(arglist__27705);
var bounds = cljs.core.first(arglist__27705);
var p__27701 = cljs.core.rest(arglist__27705);
return G__27704__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27701);
});
G__27704.cljs$core$IFn$_invoke$arity$variadic = G__27704__delegate;
return G__27704;
})()
;
location_lists_factory27697 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27701 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27697__0.call(this);
default:
return location_lists_factory27697__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27697.cljs$lang$maxFixedArity = 7;
location_lists_factory27697.cljs$lang$applyTo = location_lists_factory27697__8.cljs$lang$applyTo;
location_lists_factory27697.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27697__0;
location_lists_factory27697.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27697__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27697;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var simple_table_factory27706 = null;
var simple_table_factory27706__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var simple_table_factory27706__8 = (function() { 
var G__27713__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27710){var vec__27712 = p__27710;var type_ids = cljs.core.nth.call(null,vec__27712,(0),null);var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
};
var G__27713 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27710 = null;if (arguments.length > 7) {
  p__27710 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27713__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27710);};
G__27713.cljs$lang$maxFixedArity = 7;
G__27713.cljs$lang$applyTo = (function (arglist__27714){
var index = cljs.core.first(arglist__27714);
arglist__27714 = cljs.core.next(arglist__27714);
var type = cljs.core.first(arglist__27714);
arglist__27714 = cljs.core.next(arglist__27714);
var filter_spec = cljs.core.first(arglist__27714);
arglist__27714 = cljs.core.next(arglist__27714);
var bounds = cljs.core.first(arglist__27714);
arglist__27714 = cljs.core.next(arglist__27714);
var sort_spec = cljs.core.first(arglist__27714);
arglist__27714 = cljs.core.next(arglist__27714);
var from = cljs.core.first(arglist__27714);
arglist__27714 = cljs.core.next(arglist__27714);
var size = cljs.core.first(arglist__27714);
var p__27710 = cljs.core.rest(arglist__27714);
return G__27713__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27710);
});
G__27713.cljs$core$IFn$_invoke$arity$variadic = G__27713__delegate;
return G__27713;
})()
;
simple_table_factory27706 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27710 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory27706__0.call(this);
default:
return simple_table_factory27706__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory27706.cljs$lang$maxFixedArity = 7;
simple_table_factory27706.cljs$lang$applyTo = simple_table_factory27706__8.cljs$lang$applyTo;
simple_table_factory27706.cljs$core$IFn$_invoke$arity$0 = simple_table_factory27706__0;
simple_table_factory27706.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory27706__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory27706;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var timeline_factory27715 = null;
var timeline_factory27715__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var timeline_factory27715__2 = (function (query,filter_spec){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
timeline_factory27715 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory27715__0.call(this);
case 2:
return timeline_factory27715__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory27715.cljs$core$IFn$_invoke$arity$0 = timeline_factory27715__0;
timeline_factory27715.cljs$core$IFn$_invoke$arity$2 = timeline_factory27715__2;
return timeline_factory27715;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var geo_sponsors_factory27716 = null;
var geo_sponsors_factory27716__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var geo_sponsors_factory27716__1 = (function (bounds){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
geo_sponsors_factory27716 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory27716__0.call(this);
case 1:
return geo_sponsors_factory27716__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory27716.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory27716__0;
geo_sponsors_factory27716.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory27716__1;
return geo_sponsors_factory27716;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var rankings_factory27717 = null;
var rankings_factory27717__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var rankings_factory27717__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
rankings_factory27717 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory27717__0.call(this);
case 9:
return rankings_factory27717__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory27717.cljs$core$IFn$_invoke$arity$0 = rankings_factory27717__0;
rankings_factory27717.cljs$core$IFn$_invoke$arity$9 = rankings_factory27717__9;
return rankings_factory27717;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var ranges_factory27718 = null;
var ranges_factory27718__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var ranges_factory27718__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
ranges_factory27718 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory27718__0.call(this);
case 9:
return ranges_factory27718__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory27718.cljs$core$IFn$_invoke$arity$0 = ranges_factory27718__0;
ranges_factory27718.cljs$core$IFn$_invoke$arity$9 = ranges_factory27718__9;
return ranges_factory27718;
})()
;})(in_flight_atom__14536__auto__))
});
/**
* LOOK AT ME : this is the way to do it, with defnk... check out the server-side too
* clustermap.datasets.companies.web-geohash
*/
clustermap.api.geohash_grid_factory = (function geohash_grid_factory(){var in_flight_atom__14542__auto__ = cljs.core.atom.call(null,null);var f__14543__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27727 = schema.core.Any;var input_schema27728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"precision","precision",-1175707478),schema.core.Any,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),schema.core.Any,new cljs.core.Keyword(null,"index-type","index-type",500383962),schema.core.Any,new cljs.core.Keyword(null,"index-name","index-name",-297122515),schema.core.Any], true, false),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker27729 = schema.core.checker.call(null,input_schema27728);var output_checker27730 = schema.core.checker.call(null,output_schema27727);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27727,input_schema27728,input_checker27729,output_checker27730,in_flight_atom__14542__auto__){
return (function fnk27726(G__27731){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27731], null);var temp__4126__auto___27733 = input_checker27729.call(null,args__6035__auto___27732);if(cljs.core.truth_(temp__4126__auto___27733))
{var error__6036__auto___27734 = temp__4126__auto___27733;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27726","fnk27726",-550103510,null),cljs.core.pr_str.call(null,error__6036__auto___27734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27734,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27732,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27728,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__27731;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.PersistentVector.EMPTY);var geo_point_field = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),cljs.core.PersistentVector.EMPTY);var precision = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"precision","precision",-1175707478),cljs.core.PersistentVector.EMPTY);var valch__14544__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geohash-grid"),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14542__auto__,valch__14544__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27735 = output_checker27730.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27735))
{var error__6036__auto___27736 = temp__4126__auto___27735;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27726","fnk27726",-550103510,null),cljs.core.pr_str.call(null,error__6036__auto___27736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27736,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27727,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27727,input_schema27728,input_checker27729,output_checker27730,in_flight_atom__14542__auto__))
,schema.core.make_fn_schema.call(null,output_schema27727,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27728], null)));
})();return ((function (in_flight_atom__14542__auto__,f__14543__auto__){
return (function() {
var geohash_grid_factory27719 = null;
var geohash_grid_factory27719__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14542__auto__,emptych__14545__auto__);
});
var geohash_grid_factory27719__1 = (function() { 
var G__27737__delegate = function (p__14546__auto__){return cljs.core.apply.call(null,f__14543__auto__,p__14546__auto__);
};
var G__27737 = function (var_args){
var p__14546__auto__ = null;if (arguments.length > 0) {
  p__14546__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27737__delegate.call(this,p__14546__auto__);};
G__27737.cljs$lang$maxFixedArity = 0;
G__27737.cljs$lang$applyTo = (function (arglist__27738){
var p__14546__auto__ = cljs.core.seq(arglist__27738);
return G__27737__delegate(p__14546__auto__);
});
G__27737.cljs$core$IFn$_invoke$arity$variadic = G__27737__delegate;
return G__27737;
})()
;
geohash_grid_factory27719 = function(var_args){
var p__14546__auto__ = var_args;
switch(arguments.length){
case 0:
return geohash_grid_factory27719__0.call(this);
default:
return geohash_grid_factory27719__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geohash_grid_factory27719.cljs$lang$maxFixedArity = 0;
geohash_grid_factory27719.cljs$lang$applyTo = geohash_grid_factory27719__1.cljs$lang$applyTo;
geohash_grid_factory27719.cljs$core$IFn$_invoke$arity$0 = geohash_grid_factory27719__0;
geohash_grid_factory27719.cljs$core$IFn$_invoke$arity$variadic = geohash_grid_factory27719__1.cljs$core$IFn$_invoke$arity$variadic;
return geohash_grid_factory27719;
})()
;})(in_flight_atom__14542__auto__,f__14543__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var count_matching_factory27739 = null;
var count_matching_factory27739__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var count_matching_factory27739__3 = (function (index,index_type,filter_spec){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
count_matching_factory27739 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory27739__0.call(this);
case 3:
return count_matching_factory27739__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory27739.cljs$core$IFn$_invoke$arity$0 = count_matching_factory27739__0;
count_matching_factory27739.cljs$core$IFn$_invoke$arity$3 = count_matching_factory27739__3;
return count_matching_factory27739;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var records_factory27740 = null;
var records_factory27740__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var records_factory27740__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14538__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
records_factory27740 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory27740__0.call(this);
case 5:
return records_factory27740__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory27740.cljs$core$IFn$_invoke$arity$0 = records_factory27740__0;
records_factory27740.cljs$core$IFn$_invoke$arity$5 = records_factory27740__5;
return records_factory27740;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var tags_of_type_factory27741 = null;
var tags_of_type_factory27741__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var tags_of_type_factory27741__1 = (function (tag_type){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
tags_of_type_factory27741 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory27741__0.call(this);
case 1:
return tags_of_type_factory27741__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory27741.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory27741__0;
tags_of_type_factory27741.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory27741__1;
return tags_of_type_factory27741;
})()
;})(in_flight_atom__14536__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14536__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14536__auto__){
return (function() {
var geotags_of_type_factory27742 = null;
var geotags_of_type_factory27742__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,emptych__14537__auto__);
});
var geotags_of_type_factory27742__1 = (function (tag_type){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto__,valch__14538__auto__);
});
geotags_of_type_factory27742 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory27742__0.call(this);
case 1:
return geotags_of_type_factory27742__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory27742.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory27742__0;
geotags_of_type_factory27742.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory27742__1;
return geotags_of_type_factory27742;
})()
;})(in_flight_atom__14536__auto__))
});
var in_flight_atom__14536__auto___27743 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14536__auto___27743){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14537__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14537__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto___27743,emptych__14537__auto__);
});
var company_search__1 = (function (query){var valch__14538__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14536__auto___27743,valch__14538__auto__);
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
;})(in_flight_atom__14536__auto___27743))
;
