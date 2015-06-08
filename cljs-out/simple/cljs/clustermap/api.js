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
var AJAX__delegate = function (url,p__27666){var map__27670 = p__27666;var map__27670__$1 = ((cljs.core.seq_QMARK_.call(null,map__27670))?cljs.core.apply.call(null,cljs.core.hash_map,map__27670):map__27670);var opts = map__27670__$1;var content = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27670,map__27670__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27670,map__27670__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27670,map__27670__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27670,map__27670__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27672 = method;var G__27672__$1 = (((G__27672 == null))?null:cljs.core.name.call(null,G__27672));var G__27672__$2 = (((G__27672__$1 == null))?null:clojure.string.upper_case.call(null,G__27672__$1));return G__27672__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27666 = null;if (arguments.length > 1) {
  p__27666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27666);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27673){
var url = cljs.core.first(arglist__27673);
var p__27666 = cljs.core.rest(arglist__27673);
return AJAX__delegate(url,p__27666);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27674){var map__27676 = p__27674;var map__27676__$1 = ((cljs.core.seq_QMARK_.call(null,map__27676))?cljs.core.apply.call(null,cljs.core.hash_map,map__27676):map__27676);var opts = map__27676__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27674 = null;if (arguments.length > 1) {
  p__27674 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27674);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27677){
var url = cljs.core.first(arglist__27677);
var p__27674 = cljs.core.rest(arglist__27677);
return GET__delegate(url,p__27674);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27678){var map__27680 = p__27678;var map__27680__$1 = ((cljs.core.seq_QMARK_.call(null,map__27680))?cljs.core.apply.call(null,cljs.core.hash_map,map__27680):map__27680);var opts = map__27680__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27678 = null;if (arguments.length > 2) {
  p__27678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27678);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27681){
var url = cljs.core.first(arglist__27681);
arglist__27681 = cljs.core.next(arglist__27681);
var content = cljs.core.first(arglist__27681);
var p__27678 = cljs.core.rest(arglist__27681);
return POST__delegate(url,content,p__27678);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27682){var map__27684 = p__27682;var map__27684__$1 = ((cljs.core.seq_QMARK_.call(null,map__27684))?cljs.core.apply.call(null,cljs.core.hash_map,map__27684):map__27684);var opts = map__27684__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27682 = null;if (arguments.length > 2) {
  p__27682 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27682);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27685){
var url = cljs.core.first(arglist__27685);
arglist__27685 = cljs.core.next(arglist__27685);
var content = cljs.core.first(arglist__27685);
var p__27682 = cljs.core.rest(arglist__27685);
return PUT__delegate(url,content,p__27682);
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
return (function (state_27703){var state_val_27704 = (state_27703[(1)]);if((state_val_27704 === (2)))
{var inst_27700 = (state_27703[(2)]);var inst_27701 = console.log(inst_27700);var state_27703__$1 = state_27703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27703__$1,inst_27701);
} else
{if((state_val_27704 === (1)))
{var state_27703__$1 = state_27703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27703__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27708 = [null,null,null,null,null,null,null];(statearr_27708[(0)] = state_machine__9111__auto__);
(statearr_27708[(1)] = (1));
return statearr_27708;
});
var state_machine__9111__auto____1 = (function (state_27703){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27703);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27709){if((e27709 instanceof Object))
{var ex__9114__auto__ = e27709;var statearr_27710_27712 = state_27703;(statearr_27710_27712[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27713 = state_27703;
state_27703 = G__27713;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27703){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27711 = f__9126__auto__.call(null);(statearr_27711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27711;
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
log_api.cljs$lang$applyTo = (function (arglist__27714){
var f = cljs.core.first(arglist__27714);
var args = cljs.core.rest(arglist__27714);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27717){var vec__27718 = p__27717;var k = cljs.core.nth.call(null,vec__27718,(0),null);var v = cljs.core.nth.call(null,vec__27718,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27745,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27745,r){
return (function (state_27736){var state_val_27737 = (state_27736[(1)]);if((state_val_27737 === (2)))
{var inst_27733 = (state_27736[(2)]);var inst_27734 = cljs.core.reset_BANG_.call(null,r,inst_27733);var state_27736__$1 = state_27736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27736__$1,inst_27734);
} else
{if((state_val_27737 === (1)))
{var state_27736__$1 = state_27736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27736__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27745,r))
;return ((function (switch__9110__auto__,c__9125__auto___27745,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27741 = [null,null,null,null,null,null,null];(statearr_27741[(0)] = state_machine__9111__auto__);
(statearr_27741[(1)] = (1));
return statearr_27741;
});
var state_machine__9111__auto____1 = (function (state_27736){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27736);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object))
{var ex__9114__auto__ = e27742;var statearr_27743_27746 = state_27736;(statearr_27743_27746[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27742;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27747 = state_27736;
state_27736 = G__27747;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27736){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27745,r))
})();var state__9127__auto__ = (function (){var statearr_27744 = f__9126__auto__.call(null);(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27745);
return statearr_27744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27745,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27748){
var id = cljs.core.first(arglist__27748);
arglist__27748 = cljs.core.next(arglist__27748);
var tolerance = cljs.core.first(arglist__27748);
var opts = cljs.core.rest(arglist__27748);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27749){
var id = cljs.core.first(arglist__27749);
var opts = cljs.core.rest(arglist__27749);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27750){
var ids = cljs.core.first(arglist__27750);
arglist__27750 = cljs.core.next(arglist__27750);
var tolerance = cljs.core.first(arglist__27750);
var opts = cljs.core.rest(arglist__27750);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27751){var map__27753 = p__27751;var map__27753__$1 = ((cljs.core.seq_QMARK_.call(null,map__27753))?cljs.core.apply.call(null,cljs.core.hash_map,map__27753):map__27753);var opts = map__27753__$1;var boundaryline_ids = cljs.core.get.call(null,map__27753__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27751 = null;if (arguments.length > 3) {
  p__27751 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27751);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27754){
var collection_id = cljs.core.first(arglist__27754);
arglist__27754 = cljs.core.next(arglist__27754);
var tolerance = cljs.core.first(arglist__27754);
arglist__27754 = cljs.core.next(arglist__27754);
var bounds = cljs.core.first(arglist__27754);
var p__27751 = cljs.core.rest(arglist__27754);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27751);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var boundaryline_aggregation_factory27755 = null;
var boundaryline_aggregation_factory27755__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var boundaryline_aggregation_factory27755__9 = (function() { 
var G__27762__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27759){var vec__27761 = p__27759;var type_ids = cljs.core.nth.call(null,vec__27761,(0),null);var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
};
var G__27762 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27759 = null;if (arguments.length > 8) {
  p__27759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27762__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27759);};
G__27762.cljs$lang$maxFixedArity = 8;
G__27762.cljs$lang$applyTo = (function (arglist__27763){
var index = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var type = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var blcoll = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var attr = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var filter = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var bounds = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var scale_attr = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var post_scale_factor = cljs.core.first(arglist__27763);
var p__27759 = cljs.core.rest(arglist__27763);
return G__27762__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27759);
});
G__27762.cljs$core$IFn$_invoke$arity$variadic = G__27762__delegate;
return G__27762;
})()
;
boundaryline_aggregation_factory27755 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27759 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27755__0.call(this);
default:
return boundaryline_aggregation_factory27755__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27755.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27755.cljs$lang$applyTo = boundaryline_aggregation_factory27755__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27755.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27755__0;
boundaryline_aggregation_factory27755.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27755__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27755;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var nested_aggregation_factory27764 = null;
var nested_aggregation_factory27764__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var nested_aggregation_factory27764__1 = (function (p__27768){var map__27770 = p__27768;var map__27770__$1 = ((cljs.core.seq_QMARK_.call(null,map__27770))?cljs.core.apply.call(null,cljs.core.hash_map,map__27770):map__27770);var q = map__27770__$1;var stats_attr = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
nested_aggregation_factory27764 = function(p__27768){
switch(arguments.length){
case 0:
return nested_aggregation_factory27764__0.call(this);
case 1:
return nested_aggregation_factory27764__1.call(this,p__27768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27764.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27764__0;
nested_aggregation_factory27764.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27764__1;
return nested_aggregation_factory27764;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var summary_stats_factory27771 = null;
var summary_stats_factory27771__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var summary_stats_factory27771__6 = (function() { 
var G__27778__delegate = function (index,type,statsattrs,filter,bounds,p__27775){var vec__27777 = p__27775;var type_ids = cljs.core.nth.call(null,vec__27777,(0),null);var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
};
var G__27778 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27775 = null;if (arguments.length > 5) {
  p__27775 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27778__delegate.call(this,index,type,statsattrs,filter,bounds,p__27775);};
G__27778.cljs$lang$maxFixedArity = 5;
G__27778.cljs$lang$applyTo = (function (arglist__27779){
var index = cljs.core.first(arglist__27779);
arglist__27779 = cljs.core.next(arglist__27779);
var type = cljs.core.first(arglist__27779);
arglist__27779 = cljs.core.next(arglist__27779);
var statsattrs = cljs.core.first(arglist__27779);
arglist__27779 = cljs.core.next(arglist__27779);
var filter = cljs.core.first(arglist__27779);
arglist__27779 = cljs.core.next(arglist__27779);
var bounds = cljs.core.first(arglist__27779);
var p__27775 = cljs.core.rest(arglist__27779);
return G__27778__delegate(index,type,statsattrs,filter,bounds,p__27775);
});
G__27778.cljs$core$IFn$_invoke$arity$variadic = G__27778__delegate;
return G__27778;
})()
;
summary_stats_factory27771 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27775 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27771__0.call(this);
default:
return summary_stats_factory27771__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27771.cljs$lang$maxFixedArity = 5;
summary_stats_factory27771.cljs$lang$applyTo = summary_stats_factory27771__6.cljs$lang$applyTo;
summary_stats_factory27771.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27771__0;
summary_stats_factory27771.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27771__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27771;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var location_lists_factory27780 = null;
var location_lists_factory27780__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var location_lists_factory27780__8 = (function() { 
var G__27787__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27784){var vec__27786 = p__27784;var type_ids = cljs.core.nth.call(null,vec__27786,(0),null);var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
};
var G__27787 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27784 = null;if (arguments.length > 7) {
  p__27784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27787__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27784);};
G__27787.cljs$lang$maxFixedArity = 7;
G__27787.cljs$lang$applyTo = (function (arglist__27788){
var index = cljs.core.first(arglist__27788);
arglist__27788 = cljs.core.next(arglist__27788);
var type = cljs.core.first(arglist__27788);
arglist__27788 = cljs.core.next(arglist__27788);
var location_attr = cljs.core.first(arglist__27788);
arglist__27788 = cljs.core.next(arglist__27788);
var attrs = cljs.core.first(arglist__27788);
arglist__27788 = cljs.core.next(arglist__27788);
var max_count = cljs.core.first(arglist__27788);
arglist__27788 = cljs.core.next(arglist__27788);
var filter = cljs.core.first(arglist__27788);
arglist__27788 = cljs.core.next(arglist__27788);
var bounds = cljs.core.first(arglist__27788);
var p__27784 = cljs.core.rest(arglist__27788);
return G__27787__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27784);
});
G__27787.cljs$core$IFn$_invoke$arity$variadic = G__27787__delegate;
return G__27787;
})()
;
location_lists_factory27780 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27784 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27780__0.call(this);
default:
return location_lists_factory27780__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27780.cljs$lang$maxFixedArity = 7;
location_lists_factory27780.cljs$lang$applyTo = location_lists_factory27780__8.cljs$lang$applyTo;
location_lists_factory27780.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27780__0;
location_lists_factory27780.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27780__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27780;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var simple_table_factory27789 = null;
var simple_table_factory27789__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var simple_table_factory27789__8 = (function() { 
var G__27796__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27793){var vec__27795 = p__27793;var type_ids = cljs.core.nth.call(null,vec__27795,(0),null);var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
};
var G__27796 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27793 = null;if (arguments.length > 7) {
  p__27793 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27796__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27793);};
G__27796.cljs$lang$maxFixedArity = 7;
G__27796.cljs$lang$applyTo = (function (arglist__27797){
var index = cljs.core.first(arglist__27797);
arglist__27797 = cljs.core.next(arglist__27797);
var type = cljs.core.first(arglist__27797);
arglist__27797 = cljs.core.next(arglist__27797);
var filter_spec = cljs.core.first(arglist__27797);
arglist__27797 = cljs.core.next(arglist__27797);
var bounds = cljs.core.first(arglist__27797);
arglist__27797 = cljs.core.next(arglist__27797);
var sort_spec = cljs.core.first(arglist__27797);
arglist__27797 = cljs.core.next(arglist__27797);
var from = cljs.core.first(arglist__27797);
arglist__27797 = cljs.core.next(arglist__27797);
var size = cljs.core.first(arglist__27797);
var p__27793 = cljs.core.rest(arglist__27797);
return G__27796__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27793);
});
G__27796.cljs$core$IFn$_invoke$arity$variadic = G__27796__delegate;
return G__27796;
})()
;
simple_table_factory27789 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27793 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory27789__0.call(this);
default:
return simple_table_factory27789__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory27789.cljs$lang$maxFixedArity = 7;
simple_table_factory27789.cljs$lang$applyTo = simple_table_factory27789__8.cljs$lang$applyTo;
simple_table_factory27789.cljs$core$IFn$_invoke$arity$0 = simple_table_factory27789__0;
simple_table_factory27789.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory27789__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory27789;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var timeline_factory27798 = null;
var timeline_factory27798__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var timeline_factory27798__2 = (function (query,filter_spec){var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
timeline_factory27798 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory27798__0.call(this);
case 2:
return timeline_factory27798__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory27798.cljs$core$IFn$_invoke$arity$0 = timeline_factory27798__0;
timeline_factory27798.cljs$core$IFn$_invoke$arity$2 = timeline_factory27798__2;
return timeline_factory27798;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var geo_sponsors_factory27799 = null;
var geo_sponsors_factory27799__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var geo_sponsors_factory27799__1 = (function (bounds){var valch__14530__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
geo_sponsors_factory27799 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory27799__0.call(this);
case 1:
return geo_sponsors_factory27799__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory27799.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory27799__0;
geo_sponsors_factory27799.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory27799__1;
return geo_sponsors_factory27799;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var rankings_factory27800 = null;
var rankings_factory27800__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var rankings_factory27800__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
rankings_factory27800 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory27800__0.call(this);
case 9:
return rankings_factory27800__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory27800.cljs$core$IFn$_invoke$arity$0 = rankings_factory27800__0;
rankings_factory27800.cljs$core$IFn$_invoke$arity$9 = rankings_factory27800__9;
return rankings_factory27800;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var ranges_factory27801 = null;
var ranges_factory27801__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var ranges_factory27801__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
ranges_factory27801 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory27801__0.call(this);
case 9:
return ranges_factory27801__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory27801.cljs$core$IFn$_invoke$arity$0 = ranges_factory27801__0;
ranges_factory27801.cljs$core$IFn$_invoke$arity$9 = ranges_factory27801__9;
return ranges_factory27801;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var count_matching_factory27802 = null;
var count_matching_factory27802__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var count_matching_factory27802__3 = (function (index,index_type,filter_spec){var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
count_matching_factory27802 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory27802__0.call(this);
case 3:
return count_matching_factory27802__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory27802.cljs$core$IFn$_invoke$arity$0 = count_matching_factory27802__0;
count_matching_factory27802.cljs$core$IFn$_invoke$arity$3 = count_matching_factory27802__3;
return count_matching_factory27802;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var records_factory27803 = null;
var records_factory27803__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var records_factory27803__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14530__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
records_factory27803 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory27803__0.call(this);
case 5:
return records_factory27803__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory27803.cljs$core$IFn$_invoke$arity$0 = records_factory27803__0;
records_factory27803.cljs$core$IFn$_invoke$arity$5 = records_factory27803__5;
return records_factory27803;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var tags_of_type_factory27804 = null;
var tags_of_type_factory27804__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var tags_of_type_factory27804__1 = (function (tag_type){var valch__14530__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
tags_of_type_factory27804 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory27804__0.call(this);
case 1:
return tags_of_type_factory27804__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory27804.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory27804__0;
tags_of_type_factory27804.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory27804__1;
return tags_of_type_factory27804;
})()
;})(in_flight_atom__14528__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14528__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14528__auto__){
return (function() {
var geotags_of_type_factory27805 = null;
var geotags_of_type_factory27805__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,emptych__14529__auto__);
});
var geotags_of_type_factory27805__1 = (function (tag_type){var valch__14530__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto__,valch__14530__auto__);
});
geotags_of_type_factory27805 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory27805__0.call(this);
case 1:
return geotags_of_type_factory27805__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory27805.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory27805__0;
geotags_of_type_factory27805.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory27805__1;
return geotags_of_type_factory27805;
})()
;})(in_flight_atom__14528__auto__))
});
var in_flight_atom__14528__auto___27806 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14528__auto___27806){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14529__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14529__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto___27806,emptych__14529__auto__);
});
var company_search__1 = (function (query){var valch__14530__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14528__auto___27806,valch__14530__auto__);
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
;})(in_flight_atom__14528__auto___27806))
;
