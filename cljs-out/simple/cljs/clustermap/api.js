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
var AJAX__delegate = function (url,p__27811){var map__27815 = p__27811;var map__27815__$1 = ((cljs.core.seq_QMARK_.call(null,map__27815))?cljs.core.apply.call(null,cljs.core.hash_map,map__27815):map__27815);var opts = map__27815__$1;var content = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27815,map__27815__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27815,map__27815__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27815,map__27815__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27815,map__27815__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27817 = method;var G__27817__$1 = (((G__27817 == null))?null:cljs.core.name.call(null,G__27817));var G__27817__$2 = (((G__27817__$1 == null))?null:clojure.string.upper_case.call(null,G__27817__$1));return G__27817__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27811 = null;if (arguments.length > 1) {
  p__27811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27811);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27818){
var url = cljs.core.first(arglist__27818);
var p__27811 = cljs.core.rest(arglist__27818);
return AJAX__delegate(url,p__27811);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27819){var map__27821 = p__27819;var map__27821__$1 = ((cljs.core.seq_QMARK_.call(null,map__27821))?cljs.core.apply.call(null,cljs.core.hash_map,map__27821):map__27821);var opts = map__27821__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27819 = null;if (arguments.length > 1) {
  p__27819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27819);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27822){
var url = cljs.core.first(arglist__27822);
var p__27819 = cljs.core.rest(arglist__27822);
return GET__delegate(url,p__27819);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27823){var map__27825 = p__27823;var map__27825__$1 = ((cljs.core.seq_QMARK_.call(null,map__27825))?cljs.core.apply.call(null,cljs.core.hash_map,map__27825):map__27825);var opts = map__27825__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27823 = null;if (arguments.length > 2) {
  p__27823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27823);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27826){
var url = cljs.core.first(arglist__27826);
arglist__27826 = cljs.core.next(arglist__27826);
var content = cljs.core.first(arglist__27826);
var p__27823 = cljs.core.rest(arglist__27826);
return POST__delegate(url,content,p__27823);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27827){var map__27829 = p__27827;var map__27829__$1 = ((cljs.core.seq_QMARK_.call(null,map__27829))?cljs.core.apply.call(null,cljs.core.hash_map,map__27829):map__27829);var opts = map__27829__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27827 = null;if (arguments.length > 2) {
  p__27827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27827);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27830){
var url = cljs.core.first(arglist__27830);
arglist__27830 = cljs.core.next(arglist__27830);
var content = cljs.core.first(arglist__27830);
var p__27827 = cljs.core.rest(arglist__27830);
return PUT__delegate(url,content,p__27827);
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
return (function (state_27848){var state_val_27849 = (state_27848[(1)]);if((state_val_27849 === (2)))
{var inst_27845 = (state_27848[(2)]);var inst_27846 = console.log(inst_27845);var state_27848__$1 = state_27848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27848__$1,inst_27846);
} else
{if((state_val_27849 === (1)))
{var state_27848__$1 = state_27848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27848__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27853 = [null,null,null,null,null,null,null];(statearr_27853[(0)] = state_machine__9111__auto__);
(statearr_27853[(1)] = (1));
return statearr_27853;
});
var state_machine__9111__auto____1 = (function (state_27848){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27848);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27854){if((e27854 instanceof Object))
{var ex__9114__auto__ = e27854;var statearr_27855_27857 = state_27848;(statearr_27855_27857[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27854;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27858 = state_27848;
state_27848 = G__27858;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27848){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27856 = f__9126__auto__.call(null);(statearr_27856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27856;
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
log_api.cljs$lang$applyTo = (function (arglist__27859){
var f = cljs.core.first(arglist__27859);
var args = cljs.core.rest(arglist__27859);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27862){var vec__27863 = p__27862;var k = cljs.core.nth.call(null,vec__27863,(0),null);var v = cljs.core.nth.call(null,vec__27863,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27890 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27890,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27890,r){
return (function (state_27881){var state_val_27882 = (state_27881[(1)]);if((state_val_27882 === (2)))
{var inst_27878 = (state_27881[(2)]);var inst_27879 = cljs.core.reset_BANG_.call(null,r,inst_27878);var state_27881__$1 = state_27881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27881__$1,inst_27879);
} else
{if((state_val_27882 === (1)))
{var state_27881__$1 = state_27881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27890,r))
;return ((function (switch__9110__auto__,c__9125__auto___27890,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27886 = [null,null,null,null,null,null,null];(statearr_27886[(0)] = state_machine__9111__auto__);
(statearr_27886[(1)] = (1));
return statearr_27886;
});
var state_machine__9111__auto____1 = (function (state_27881){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27881);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27887){if((e27887 instanceof Object))
{var ex__9114__auto__ = e27887;var statearr_27888_27891 = state_27881;(statearr_27888_27891[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27892 = state_27881;
state_27881 = G__27892;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27881){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27890,r))
})();var state__9127__auto__ = (function (){var statearr_27889 = f__9126__auto__.call(null);(statearr_27889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27890);
return statearr_27889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27890,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27893){
var id = cljs.core.first(arglist__27893);
arglist__27893 = cljs.core.next(arglist__27893);
var tolerance = cljs.core.first(arglist__27893);
var opts = cljs.core.rest(arglist__27893);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27894){
var id = cljs.core.first(arglist__27894);
var opts = cljs.core.rest(arglist__27894);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27895){
var ids = cljs.core.first(arglist__27895);
arglist__27895 = cljs.core.next(arglist__27895);
var tolerance = cljs.core.first(arglist__27895);
var opts = cljs.core.rest(arglist__27895);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27896){var map__27898 = p__27896;var map__27898__$1 = ((cljs.core.seq_QMARK_.call(null,map__27898))?cljs.core.apply.call(null,cljs.core.hash_map,map__27898):map__27898);var opts = map__27898__$1;var boundaryline_ids = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27896 = null;if (arguments.length > 3) {
  p__27896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27896);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27899){
var collection_id = cljs.core.first(arglist__27899);
arglist__27899 = cljs.core.next(arglist__27899);
var tolerance = cljs.core.first(arglist__27899);
arglist__27899 = cljs.core.next(arglist__27899);
var bounds = cljs.core.first(arglist__27899);
var p__27896 = cljs.core.rest(arglist__27899);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27896);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var boundaryline_aggregation_factory27900 = null;
var boundaryline_aggregation_factory27900__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var boundaryline_aggregation_factory27900__9 = (function() { 
var G__27907__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27904){var vec__27906 = p__27904;var type_ids = cljs.core.nth.call(null,vec__27906,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27907 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27904 = null;if (arguments.length > 8) {
  p__27904 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27907__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27904);};
G__27907.cljs$lang$maxFixedArity = 8;
G__27907.cljs$lang$applyTo = (function (arglist__27908){
var index = cljs.core.first(arglist__27908);
arglist__27908 = cljs.core.next(arglist__27908);
var type = cljs.core.first(arglist__27908);
arglist__27908 = cljs.core.next(arglist__27908);
var blcoll = cljs.core.first(arglist__27908);
arglist__27908 = cljs.core.next(arglist__27908);
var attr = cljs.core.first(arglist__27908);
arglist__27908 = cljs.core.next(arglist__27908);
var filter = cljs.core.first(arglist__27908);
arglist__27908 = cljs.core.next(arglist__27908);
var bounds = cljs.core.first(arglist__27908);
arglist__27908 = cljs.core.next(arglist__27908);
var scale_attr = cljs.core.first(arglist__27908);
arglist__27908 = cljs.core.next(arglist__27908);
var post_scale_factor = cljs.core.first(arglist__27908);
var p__27904 = cljs.core.rest(arglist__27908);
return G__27907__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27904);
});
G__27907.cljs$core$IFn$_invoke$arity$variadic = G__27907__delegate;
return G__27907;
})()
;
boundaryline_aggregation_factory27900 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27904 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27900__0.call(this);
default:
return boundaryline_aggregation_factory27900__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27900.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27900.cljs$lang$applyTo = boundaryline_aggregation_factory27900__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27900.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27900__0;
boundaryline_aggregation_factory27900.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27900__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27900;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var nested_aggregation_factory27909 = null;
var nested_aggregation_factory27909__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var nested_aggregation_factory27909__1 = (function (p__27913){var map__27915 = p__27913;var map__27915__$1 = ((cljs.core.seq_QMARK_.call(null,map__27915))?cljs.core.apply.call(null,cljs.core.hash_map,map__27915):map__27915);var q = map__27915__$1;var stats_attr = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
nested_aggregation_factory27909 = function(p__27913){
switch(arguments.length){
case 0:
return nested_aggregation_factory27909__0.call(this);
case 1:
return nested_aggregation_factory27909__1.call(this,p__27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27909.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27909__0;
nested_aggregation_factory27909.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27909__1;
return nested_aggregation_factory27909;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var summary_stats_factory27916 = null;
var summary_stats_factory27916__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var summary_stats_factory27916__6 = (function() { 
var G__27923__delegate = function (index,type,statsattrs,filter,bounds,p__27920){var vec__27922 = p__27920;var type_ids = cljs.core.nth.call(null,vec__27922,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27923 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27920 = null;if (arguments.length > 5) {
  p__27920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27923__delegate.call(this,index,type,statsattrs,filter,bounds,p__27920);};
G__27923.cljs$lang$maxFixedArity = 5;
G__27923.cljs$lang$applyTo = (function (arglist__27924){
var index = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var type = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var statsattrs = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var filter = cljs.core.first(arglist__27924);
arglist__27924 = cljs.core.next(arglist__27924);
var bounds = cljs.core.first(arglist__27924);
var p__27920 = cljs.core.rest(arglist__27924);
return G__27923__delegate(index,type,statsattrs,filter,bounds,p__27920);
});
G__27923.cljs$core$IFn$_invoke$arity$variadic = G__27923__delegate;
return G__27923;
})()
;
summary_stats_factory27916 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27920 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27916__0.call(this);
default:
return summary_stats_factory27916__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27916.cljs$lang$maxFixedArity = 5;
summary_stats_factory27916.cljs$lang$applyTo = summary_stats_factory27916__6.cljs$lang$applyTo;
summary_stats_factory27916.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27916__0;
summary_stats_factory27916.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27916__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27916;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var location_lists_factory27925 = null;
var location_lists_factory27925__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var location_lists_factory27925__8 = (function() { 
var G__27932__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27929){var vec__27931 = p__27929;var type_ids = cljs.core.nth.call(null,vec__27931,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27932 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27929 = null;if (arguments.length > 7) {
  p__27929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27932__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27929);};
G__27932.cljs$lang$maxFixedArity = 7;
G__27932.cljs$lang$applyTo = (function (arglist__27933){
var index = cljs.core.first(arglist__27933);
arglist__27933 = cljs.core.next(arglist__27933);
var type = cljs.core.first(arglist__27933);
arglist__27933 = cljs.core.next(arglist__27933);
var location_attr = cljs.core.first(arglist__27933);
arglist__27933 = cljs.core.next(arglist__27933);
var attrs = cljs.core.first(arglist__27933);
arglist__27933 = cljs.core.next(arglist__27933);
var max_count = cljs.core.first(arglist__27933);
arglist__27933 = cljs.core.next(arglist__27933);
var filter = cljs.core.first(arglist__27933);
arglist__27933 = cljs.core.next(arglist__27933);
var bounds = cljs.core.first(arglist__27933);
var p__27929 = cljs.core.rest(arglist__27933);
return G__27932__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27929);
});
G__27932.cljs$core$IFn$_invoke$arity$variadic = G__27932__delegate;
return G__27932;
})()
;
location_lists_factory27925 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27929 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27925__0.call(this);
default:
return location_lists_factory27925__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27925.cljs$lang$maxFixedArity = 7;
location_lists_factory27925.cljs$lang$applyTo = location_lists_factory27925__8.cljs$lang$applyTo;
location_lists_factory27925.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27925__0;
location_lists_factory27925.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27925__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27925;
})()
;})(in_flight_atom__14555__auto__))
});
/**
* saner version
*/
clustermap.api.location_lists_2_factory = (function location_lists_2_factory(){var in_flight_atom__14561__auto__ = cljs.core.atom.call(null,null);var f__14562__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27942 = schema.core.Any;var input_schema27943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.Keyword,new cljs.core.Keyword(null,"max-count","max-count",1539185305),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"index-name","index-name",-297122515)],[schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any]),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker27944 = schema.core.checker.call(null,input_schema27943);var output_checker27945 = schema.core.checker.call(null,output_schema27942);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27942,input_schema27943,input_checker27944,output_checker27945,in_flight_atom__14561__auto__){
return (function fnk27941(G__27946){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27946], null);var temp__4126__auto___27948 = input_checker27944.call(null,args__6035__auto___27947);if(cljs.core.truth_(temp__4126__auto___27948))
{var error__6036__auto___27949 = temp__4126__auto___27948;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27941","fnk27941",1726966444,null),cljs.core.pr_str.call(null,error__6036__auto___27949)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27949,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27947,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27943,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__27946;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.PersistentVector.EMPTY);var location_attr = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),cljs.core.PersistentVector.EMPTY);var attrs = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY);var sort_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),cljs.core.PersistentVector.EMPTY);var max_count = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"max-count","max-count",1539185305),cljs.core.PersistentVector.EMPTY);var valch__14563__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_name)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14561__auto__,valch__14563__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27950 = output_checker27945.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27950))
{var error__6036__auto___27951 = temp__4126__auto___27950;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27941","fnk27941",1726966444,null),cljs.core.pr_str.call(null,error__6036__auto___27951)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27951,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27942,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27942,input_schema27943,input_checker27944,output_checker27945,in_flight_atom__14561__auto__))
,schema.core.make_fn_schema.call(null,output_schema27942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27943], null)));
})();return ((function (in_flight_atom__14561__auto__,f__14562__auto__){
return (function() {
var location_lists_2_factory27934 = null;
var location_lists_2_factory27934__0 = (function (){var emptych__14564__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14564__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14561__auto__,emptych__14564__auto__);
});
var location_lists_2_factory27934__1 = (function() { 
var G__27952__delegate = function (p__14565__auto__){return cljs.core.apply.call(null,f__14562__auto__,p__14565__auto__);
};
var G__27952 = function (var_args){
var p__14565__auto__ = null;if (arguments.length > 0) {
  p__14565__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27952__delegate.call(this,p__14565__auto__);};
G__27952.cljs$lang$maxFixedArity = 0;
G__27952.cljs$lang$applyTo = (function (arglist__27953){
var p__14565__auto__ = cljs.core.seq(arglist__27953);
return G__27952__delegate(p__14565__auto__);
});
G__27952.cljs$core$IFn$_invoke$arity$variadic = G__27952__delegate;
return G__27952;
})()
;
location_lists_2_factory27934 = function(var_args){
var p__14565__auto__ = var_args;
switch(arguments.length){
case 0:
return location_lists_2_factory27934__0.call(this);
default:
return location_lists_2_factory27934__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_2_factory27934.cljs$lang$maxFixedArity = 0;
location_lists_2_factory27934.cljs$lang$applyTo = location_lists_2_factory27934__1.cljs$lang$applyTo;
location_lists_2_factory27934.cljs$core$IFn$_invoke$arity$0 = location_lists_2_factory27934__0;
location_lists_2_factory27934.cljs$core$IFn$_invoke$arity$variadic = location_lists_2_factory27934__1.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_2_factory27934;
})()
;})(in_flight_atom__14561__auto__,f__14562__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var simple_table_factory27954 = null;
var simple_table_factory27954__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var simple_table_factory27954__8 = (function() { 
var G__27961__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27958){var vec__27960 = p__27958;var type_ids = cljs.core.nth.call(null,vec__27960,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27961 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27958 = null;if (arguments.length > 7) {
  p__27958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27961__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27958);};
G__27961.cljs$lang$maxFixedArity = 7;
G__27961.cljs$lang$applyTo = (function (arglist__27962){
var index = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var type = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var filter_spec = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var bounds = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var sort_spec = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var from = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var size = cljs.core.first(arglist__27962);
var p__27958 = cljs.core.rest(arglist__27962);
return G__27961__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27958);
});
G__27961.cljs$core$IFn$_invoke$arity$variadic = G__27961__delegate;
return G__27961;
})()
;
simple_table_factory27954 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27958 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory27954__0.call(this);
default:
return simple_table_factory27954__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory27954.cljs$lang$maxFixedArity = 7;
simple_table_factory27954.cljs$lang$applyTo = simple_table_factory27954__8.cljs$lang$applyTo;
simple_table_factory27954.cljs$core$IFn$_invoke$arity$0 = simple_table_factory27954__0;
simple_table_factory27954.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory27954__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory27954;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var timeline_factory27963 = null;
var timeline_factory27963__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var timeline_factory27963__2 = (function (query,filter_spec){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
timeline_factory27963 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory27963__0.call(this);
case 2:
return timeline_factory27963__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory27963.cljs$core$IFn$_invoke$arity$0 = timeline_factory27963__0;
timeline_factory27963.cljs$core$IFn$_invoke$arity$2 = timeline_factory27963__2;
return timeline_factory27963;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var geo_sponsors_factory27964 = null;
var geo_sponsors_factory27964__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var geo_sponsors_factory27964__1 = (function (bounds){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
geo_sponsors_factory27964 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory27964__0.call(this);
case 1:
return geo_sponsors_factory27964__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory27964.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory27964__0;
geo_sponsors_factory27964.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory27964__1;
return geo_sponsors_factory27964;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var rankings_factory27965 = null;
var rankings_factory27965__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var rankings_factory27965__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
rankings_factory27965 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory27965__0.call(this);
case 9:
return rankings_factory27965__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory27965.cljs$core$IFn$_invoke$arity$0 = rankings_factory27965__0;
rankings_factory27965.cljs$core$IFn$_invoke$arity$9 = rankings_factory27965__9;
return rankings_factory27965;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var ranges_factory27966 = null;
var ranges_factory27966__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var ranges_factory27966__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
ranges_factory27966 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory27966__0.call(this);
case 9:
return ranges_factory27966__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory27966.cljs$core$IFn$_invoke$arity$0 = ranges_factory27966__0;
ranges_factory27966.cljs$core$IFn$_invoke$arity$9 = ranges_factory27966__9;
return ranges_factory27966;
})()
;})(in_flight_atom__14555__auto__))
});
/**
* LOOK AT ME : this is the way to do it, with defnk... check out the server-side too
* clustermap.datasets.companies.web-geohash
*/
clustermap.api.geohash_grid_factory = (function geohash_grid_factory(){var in_flight_atom__14561__auto__ = cljs.core.atom.call(null,null);var f__14562__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27975 = schema.core.Any;var input_schema27976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"precision","precision",-1175707478),schema.core.Any,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),schema.core.Any,new cljs.core.Keyword(null,"index-type","index-type",500383962),schema.core.Any,new cljs.core.Keyword(null,"index-name","index-name",-297122515),schema.core.Any], true, false),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker27977 = schema.core.checker.call(null,input_schema27976);var output_checker27978 = schema.core.checker.call(null,output_schema27975);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27975,input_schema27976,input_checker27977,output_checker27978,in_flight_atom__14561__auto__){
return (function fnk27974(G__27979){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27979], null);var temp__4126__auto___27981 = input_checker27977.call(null,args__6035__auto___27980);if(cljs.core.truth_(temp__4126__auto___27981))
{var error__6036__auto___27982 = temp__4126__auto___27981;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27974","fnk27974",1012235491,null),cljs.core.pr_str.call(null,error__6036__auto___27982)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27982,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27980,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27976,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__27979;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.PersistentVector.EMPTY);var geo_point_field = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),cljs.core.PersistentVector.EMPTY);var precision = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"precision","precision",-1175707478),cljs.core.PersistentVector.EMPTY);var valch__14563__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geohash-grid"),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14561__auto__,valch__14563__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27983 = output_checker27978.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27983))
{var error__6036__auto___27984 = temp__4126__auto___27983;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27974","fnk27974",1012235491,null),cljs.core.pr_str.call(null,error__6036__auto___27984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27984,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27975,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27975,input_schema27976,input_checker27977,output_checker27978,in_flight_atom__14561__auto__))
,schema.core.make_fn_schema.call(null,output_schema27975,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27976], null)));
})();return ((function (in_flight_atom__14561__auto__,f__14562__auto__){
return (function() {
var geohash_grid_factory27967 = null;
var geohash_grid_factory27967__0 = (function (){var emptych__14564__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14564__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14561__auto__,emptych__14564__auto__);
});
var geohash_grid_factory27967__1 = (function() { 
var G__27985__delegate = function (p__14565__auto__){return cljs.core.apply.call(null,f__14562__auto__,p__14565__auto__);
};
var G__27985 = function (var_args){
var p__14565__auto__ = null;if (arguments.length > 0) {
  p__14565__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27985__delegate.call(this,p__14565__auto__);};
G__27985.cljs$lang$maxFixedArity = 0;
G__27985.cljs$lang$applyTo = (function (arglist__27986){
var p__14565__auto__ = cljs.core.seq(arglist__27986);
return G__27985__delegate(p__14565__auto__);
});
G__27985.cljs$core$IFn$_invoke$arity$variadic = G__27985__delegate;
return G__27985;
})()
;
geohash_grid_factory27967 = function(var_args){
var p__14565__auto__ = var_args;
switch(arguments.length){
case 0:
return geohash_grid_factory27967__0.call(this);
default:
return geohash_grid_factory27967__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geohash_grid_factory27967.cljs$lang$maxFixedArity = 0;
geohash_grid_factory27967.cljs$lang$applyTo = geohash_grid_factory27967__1.cljs$lang$applyTo;
geohash_grid_factory27967.cljs$core$IFn$_invoke$arity$0 = geohash_grid_factory27967__0;
geohash_grid_factory27967.cljs$core$IFn$_invoke$arity$variadic = geohash_grid_factory27967__1.cljs$core$IFn$_invoke$arity$variadic;
return geohash_grid_factory27967;
})()
;})(in_flight_atom__14561__auto__,f__14562__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var count_matching_factory27987 = null;
var count_matching_factory27987__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var count_matching_factory27987__3 = (function (index,index_type,filter_spec){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
count_matching_factory27987 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory27987__0.call(this);
case 3:
return count_matching_factory27987__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory27987.cljs$core$IFn$_invoke$arity$0 = count_matching_factory27987__0;
count_matching_factory27987.cljs$core$IFn$_invoke$arity$3 = count_matching_factory27987__3;
return count_matching_factory27987;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var records_factory27988 = null;
var records_factory27988__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var records_factory27988__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
records_factory27988 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory27988__0.call(this);
case 5:
return records_factory27988__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory27988.cljs$core$IFn$_invoke$arity$0 = records_factory27988__0;
records_factory27988.cljs$core$IFn$_invoke$arity$5 = records_factory27988__5;
return records_factory27988;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var tags_of_type_factory27989 = null;
var tags_of_type_factory27989__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var tags_of_type_factory27989__1 = (function (tag_type){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
tags_of_type_factory27989 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory27989__0.call(this);
case 1:
return tags_of_type_factory27989__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory27989.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory27989__0;
tags_of_type_factory27989.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory27989__1;
return tags_of_type_factory27989;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var geotags_of_type_factory27990 = null;
var geotags_of_type_factory27990__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var geotags_of_type_factory27990__1 = (function (tag_type){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
geotags_of_type_factory27990 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory27990__0.call(this);
case 1:
return geotags_of_type_factory27990__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory27990.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory27990__0;
geotags_of_type_factory27990.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory27990__1;
return geotags_of_type_factory27990;
})()
;})(in_flight_atom__14555__auto__))
});
var in_flight_atom__14555__auto___27991 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14555__auto___27991){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto___27991,emptych__14556__auto__);
});
var company_search__1 = (function (query){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto___27991,valch__14557__auto__);
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
;})(in_flight_atom__14555__auto___27991))
;
