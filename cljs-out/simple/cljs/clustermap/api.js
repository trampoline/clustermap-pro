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
var AJAX__delegate = function (url,p__27701){var map__27705 = p__27701;var map__27705__$1 = ((cljs.core.seq_QMARK_.call(null,map__27705))?cljs.core.apply.call(null,cljs.core.hash_map,map__27705):map__27705);var opts = map__27705__$1;var content = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27705,map__27705__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27705,map__27705__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27705,map__27705__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27705,map__27705__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27707 = method;var G__27707__$1 = (((G__27707 == null))?null:cljs.core.name.call(null,G__27707));var G__27707__$2 = (((G__27707__$1 == null))?null:clojure.string.upper_case.call(null,G__27707__$1));return G__27707__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27701 = null;if (arguments.length > 1) {
  p__27701 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27701);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27708){
var url = cljs.core.first(arglist__27708);
var p__27701 = cljs.core.rest(arglist__27708);
return AJAX__delegate(url,p__27701);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27709){var map__27711 = p__27709;var map__27711__$1 = ((cljs.core.seq_QMARK_.call(null,map__27711))?cljs.core.apply.call(null,cljs.core.hash_map,map__27711):map__27711);var opts = map__27711__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27709 = null;if (arguments.length > 1) {
  p__27709 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27709);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27712){
var url = cljs.core.first(arglist__27712);
var p__27709 = cljs.core.rest(arglist__27712);
return GET__delegate(url,p__27709);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27713){var map__27715 = p__27713;var map__27715__$1 = ((cljs.core.seq_QMARK_.call(null,map__27715))?cljs.core.apply.call(null,cljs.core.hash_map,map__27715):map__27715);var opts = map__27715__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27713 = null;if (arguments.length > 2) {
  p__27713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27713);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27716){
var url = cljs.core.first(arglist__27716);
arglist__27716 = cljs.core.next(arglist__27716);
var content = cljs.core.first(arglist__27716);
var p__27713 = cljs.core.rest(arglist__27716);
return POST__delegate(url,content,p__27713);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27717){var map__27719 = p__27717;var map__27719__$1 = ((cljs.core.seq_QMARK_.call(null,map__27719))?cljs.core.apply.call(null,cljs.core.hash_map,map__27719):map__27719);var opts = map__27719__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27717 = null;if (arguments.length > 2) {
  p__27717 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27717);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27720){
var url = cljs.core.first(arglist__27720);
arglist__27720 = cljs.core.next(arglist__27720);
var content = cljs.core.first(arglist__27720);
var p__27717 = cljs.core.rest(arglist__27720);
return PUT__delegate(url,content,p__27717);
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
return (function (state_27738){var state_val_27739 = (state_27738[(1)]);if((state_val_27739 === (2)))
{var inst_27735 = (state_27738[(2)]);var inst_27736 = console.log(inst_27735);var state_27738__$1 = state_27738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27738__$1,inst_27736);
} else
{if((state_val_27739 === (1)))
{var state_27738__$1 = state_27738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27738__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27743 = [null,null,null,null,null,null,null];(statearr_27743[(0)] = state_machine__9111__auto__);
(statearr_27743[(1)] = (1));
return statearr_27743;
});
var state_machine__9111__auto____1 = (function (state_27738){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27738);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27744){if((e27744 instanceof Object))
{var ex__9114__auto__ = e27744;var statearr_27745_27747 = state_27738;(statearr_27745_27747[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27738);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27744;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27748 = state_27738;
state_27738 = G__27748;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27738){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27746 = f__9126__auto__.call(null);(statearr_27746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27746;
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
log_api.cljs$lang$applyTo = (function (arglist__27749){
var f = cljs.core.first(arglist__27749);
var args = cljs.core.rest(arglist__27749);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27752){var vec__27753 = p__27752;var k = cljs.core.nth.call(null,vec__27753,(0),null);var v = cljs.core.nth.call(null,vec__27753,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27780 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27780,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27780,r){
return (function (state_27771){var state_val_27772 = (state_27771[(1)]);if((state_val_27772 === (2)))
{var inst_27768 = (state_27771[(2)]);var inst_27769 = cljs.core.reset_BANG_.call(null,r,inst_27768);var state_27771__$1 = state_27771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27771__$1,inst_27769);
} else
{if((state_val_27772 === (1)))
{var state_27771__$1 = state_27771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27771__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27780,r))
;return ((function (switch__9110__auto__,c__9125__auto___27780,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27776 = [null,null,null,null,null,null,null];(statearr_27776[(0)] = state_machine__9111__auto__);
(statearr_27776[(1)] = (1));
return statearr_27776;
});
var state_machine__9111__auto____1 = (function (state_27771){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27771);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27777){if((e27777 instanceof Object))
{var ex__9114__auto__ = e27777;var statearr_27778_27781 = state_27771;(statearr_27778_27781[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27771);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27782 = state_27771;
state_27771 = G__27782;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27771){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27780,r))
})();var state__9127__auto__ = (function (){var statearr_27779 = f__9126__auto__.call(null);(statearr_27779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27780);
return statearr_27779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27780,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27783){
var id = cljs.core.first(arglist__27783);
arglist__27783 = cljs.core.next(arglist__27783);
var tolerance = cljs.core.first(arglist__27783);
var opts = cljs.core.rest(arglist__27783);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27784){
var id = cljs.core.first(arglist__27784);
var opts = cljs.core.rest(arglist__27784);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27785){
var ids = cljs.core.first(arglist__27785);
arglist__27785 = cljs.core.next(arglist__27785);
var tolerance = cljs.core.first(arglist__27785);
var opts = cljs.core.rest(arglist__27785);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27786){var map__27788 = p__27786;var map__27788__$1 = ((cljs.core.seq_QMARK_.call(null,map__27788))?cljs.core.apply.call(null,cljs.core.hash_map,map__27788):map__27788);var opts = map__27788__$1;var boundaryline_ids = cljs.core.get.call(null,map__27788__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27786 = null;if (arguments.length > 3) {
  p__27786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27786);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27789){
var collection_id = cljs.core.first(arglist__27789);
arglist__27789 = cljs.core.next(arglist__27789);
var tolerance = cljs.core.first(arglist__27789);
arglist__27789 = cljs.core.next(arglist__27789);
var bounds = cljs.core.first(arglist__27789);
var p__27786 = cljs.core.rest(arglist__27789);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27786);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var boundaryline_aggregation_factory27790 = null;
var boundaryline_aggregation_factory27790__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var boundaryline_aggregation_factory27790__9 = (function() { 
var G__27797__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27794){var vec__27796 = p__27794;var type_ids = cljs.core.nth.call(null,vec__27796,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27797 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27794 = null;if (arguments.length > 8) {
  p__27794 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27797__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27794);};
G__27797.cljs$lang$maxFixedArity = 8;
G__27797.cljs$lang$applyTo = (function (arglist__27798){
var index = cljs.core.first(arglist__27798);
arglist__27798 = cljs.core.next(arglist__27798);
var type = cljs.core.first(arglist__27798);
arglist__27798 = cljs.core.next(arglist__27798);
var blcoll = cljs.core.first(arglist__27798);
arglist__27798 = cljs.core.next(arglist__27798);
var attr = cljs.core.first(arglist__27798);
arglist__27798 = cljs.core.next(arglist__27798);
var filter = cljs.core.first(arglist__27798);
arglist__27798 = cljs.core.next(arglist__27798);
var bounds = cljs.core.first(arglist__27798);
arglist__27798 = cljs.core.next(arglist__27798);
var scale_attr = cljs.core.first(arglist__27798);
arglist__27798 = cljs.core.next(arglist__27798);
var post_scale_factor = cljs.core.first(arglist__27798);
var p__27794 = cljs.core.rest(arglist__27798);
return G__27797__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27794);
});
G__27797.cljs$core$IFn$_invoke$arity$variadic = G__27797__delegate;
return G__27797;
})()
;
boundaryline_aggregation_factory27790 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27794 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27790__0.call(this);
default:
return boundaryline_aggregation_factory27790__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27790.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27790.cljs$lang$applyTo = boundaryline_aggregation_factory27790__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27790.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27790__0;
boundaryline_aggregation_factory27790.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27790__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27790;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var nested_aggregation_factory27799 = null;
var nested_aggregation_factory27799__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var nested_aggregation_factory27799__1 = (function (p__27803){var map__27805 = p__27803;var map__27805__$1 = ((cljs.core.seq_QMARK_.call(null,map__27805))?cljs.core.apply.call(null,cljs.core.hash_map,map__27805):map__27805);var q = map__27805__$1;var stats_attr = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27805__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
nested_aggregation_factory27799 = function(p__27803){
switch(arguments.length){
case 0:
return nested_aggregation_factory27799__0.call(this);
case 1:
return nested_aggregation_factory27799__1.call(this,p__27803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27799.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27799__0;
nested_aggregation_factory27799.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27799__1;
return nested_aggregation_factory27799;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var summary_stats_factory27806 = null;
var summary_stats_factory27806__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var summary_stats_factory27806__6 = (function() { 
var G__27813__delegate = function (index,type,statsattrs,filter,bounds,p__27810){var vec__27812 = p__27810;var type_ids = cljs.core.nth.call(null,vec__27812,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27813 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27810 = null;if (arguments.length > 5) {
  p__27810 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27813__delegate.call(this,index,type,statsattrs,filter,bounds,p__27810);};
G__27813.cljs$lang$maxFixedArity = 5;
G__27813.cljs$lang$applyTo = (function (arglist__27814){
var index = cljs.core.first(arglist__27814);
arglist__27814 = cljs.core.next(arglist__27814);
var type = cljs.core.first(arglist__27814);
arglist__27814 = cljs.core.next(arglist__27814);
var statsattrs = cljs.core.first(arglist__27814);
arglist__27814 = cljs.core.next(arglist__27814);
var filter = cljs.core.first(arglist__27814);
arglist__27814 = cljs.core.next(arglist__27814);
var bounds = cljs.core.first(arglist__27814);
var p__27810 = cljs.core.rest(arglist__27814);
return G__27813__delegate(index,type,statsattrs,filter,bounds,p__27810);
});
G__27813.cljs$core$IFn$_invoke$arity$variadic = G__27813__delegate;
return G__27813;
})()
;
summary_stats_factory27806 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27810 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27806__0.call(this);
default:
return summary_stats_factory27806__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27806.cljs$lang$maxFixedArity = 5;
summary_stats_factory27806.cljs$lang$applyTo = summary_stats_factory27806__6.cljs$lang$applyTo;
summary_stats_factory27806.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27806__0;
summary_stats_factory27806.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27806__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27806;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var location_lists_factory27815 = null;
var location_lists_factory27815__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var location_lists_factory27815__8 = (function() { 
var G__27822__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27819){var vec__27821 = p__27819;var type_ids = cljs.core.nth.call(null,vec__27821,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27822 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27819 = null;if (arguments.length > 7) {
  p__27819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27822__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27819);};
G__27822.cljs$lang$maxFixedArity = 7;
G__27822.cljs$lang$applyTo = (function (arglist__27823){
var index = cljs.core.first(arglist__27823);
arglist__27823 = cljs.core.next(arglist__27823);
var type = cljs.core.first(arglist__27823);
arglist__27823 = cljs.core.next(arglist__27823);
var location_attr = cljs.core.first(arglist__27823);
arglist__27823 = cljs.core.next(arglist__27823);
var attrs = cljs.core.first(arglist__27823);
arglist__27823 = cljs.core.next(arglist__27823);
var max_count = cljs.core.first(arglist__27823);
arglist__27823 = cljs.core.next(arglist__27823);
var filter = cljs.core.first(arglist__27823);
arglist__27823 = cljs.core.next(arglist__27823);
var bounds = cljs.core.first(arglist__27823);
var p__27819 = cljs.core.rest(arglist__27823);
return G__27822__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27819);
});
G__27822.cljs$core$IFn$_invoke$arity$variadic = G__27822__delegate;
return G__27822;
})()
;
location_lists_factory27815 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27819 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27815__0.call(this);
default:
return location_lists_factory27815__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27815.cljs$lang$maxFixedArity = 7;
location_lists_factory27815.cljs$lang$applyTo = location_lists_factory27815__8.cljs$lang$applyTo;
location_lists_factory27815.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27815__0;
location_lists_factory27815.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27815__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27815;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var simple_table_factory27824 = null;
var simple_table_factory27824__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var simple_table_factory27824__8 = (function() { 
var G__27831__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27828){var vec__27830 = p__27828;var type_ids = cljs.core.nth.call(null,vec__27830,(0),null);var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
};
var G__27831 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27828 = null;if (arguments.length > 7) {
  p__27828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27831__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27828);};
G__27831.cljs$lang$maxFixedArity = 7;
G__27831.cljs$lang$applyTo = (function (arglist__27832){
var index = cljs.core.first(arglist__27832);
arglist__27832 = cljs.core.next(arglist__27832);
var type = cljs.core.first(arglist__27832);
arglist__27832 = cljs.core.next(arglist__27832);
var filter_spec = cljs.core.first(arglist__27832);
arglist__27832 = cljs.core.next(arglist__27832);
var bounds = cljs.core.first(arglist__27832);
arglist__27832 = cljs.core.next(arglist__27832);
var sort_spec = cljs.core.first(arglist__27832);
arglist__27832 = cljs.core.next(arglist__27832);
var from = cljs.core.first(arglist__27832);
arglist__27832 = cljs.core.next(arglist__27832);
var size = cljs.core.first(arglist__27832);
var p__27828 = cljs.core.rest(arglist__27832);
return G__27831__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27828);
});
G__27831.cljs$core$IFn$_invoke$arity$variadic = G__27831__delegate;
return G__27831;
})()
;
simple_table_factory27824 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27828 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory27824__0.call(this);
default:
return simple_table_factory27824__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory27824.cljs$lang$maxFixedArity = 7;
simple_table_factory27824.cljs$lang$applyTo = simple_table_factory27824__8.cljs$lang$applyTo;
simple_table_factory27824.cljs$core$IFn$_invoke$arity$0 = simple_table_factory27824__0;
simple_table_factory27824.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory27824__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory27824;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var timeline_factory27833 = null;
var timeline_factory27833__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var timeline_factory27833__2 = (function (query,filter_spec){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
timeline_factory27833 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory27833__0.call(this);
case 2:
return timeline_factory27833__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory27833.cljs$core$IFn$_invoke$arity$0 = timeline_factory27833__0;
timeline_factory27833.cljs$core$IFn$_invoke$arity$2 = timeline_factory27833__2;
return timeline_factory27833;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var geo_sponsors_factory27834 = null;
var geo_sponsors_factory27834__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var geo_sponsors_factory27834__1 = (function (bounds){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
geo_sponsors_factory27834 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory27834__0.call(this);
case 1:
return geo_sponsors_factory27834__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory27834.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory27834__0;
geo_sponsors_factory27834.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory27834__1;
return geo_sponsors_factory27834;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var rankings_factory27835 = null;
var rankings_factory27835__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var rankings_factory27835__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
rankings_factory27835 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory27835__0.call(this);
case 9:
return rankings_factory27835__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory27835.cljs$core$IFn$_invoke$arity$0 = rankings_factory27835__0;
rankings_factory27835.cljs$core$IFn$_invoke$arity$9 = rankings_factory27835__9;
return rankings_factory27835;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var ranges_factory27836 = null;
var ranges_factory27836__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var ranges_factory27836__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
ranges_factory27836 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory27836__0.call(this);
case 9:
return ranges_factory27836__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory27836.cljs$core$IFn$_invoke$arity$0 = ranges_factory27836__0;
ranges_factory27836.cljs$core$IFn$_invoke$arity$9 = ranges_factory27836__9;
return ranges_factory27836;
})()
;})(in_flight_atom__14555__auto__))
});
/**
* LOOK AT ME : this is the way to do it, with defnk... check out the server-side too
* clustermap.datasets.companies.web-geohash
*/
clustermap.api.geohash_grid_factory = (function geohash_grid_factory(){var in_flight_atom__14561__auto__ = cljs.core.atom.call(null,null);var f__14562__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27845 = schema.core.Any;var input_schema27846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"precision","precision",-1175707478),schema.core.Any,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),schema.core.Any,new cljs.core.Keyword(null,"index-type","index-type",500383962),schema.core.Any,new cljs.core.Keyword(null,"index-name","index-name",-297122515),schema.core.Any], true, false),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker27847 = schema.core.checker.call(null,input_schema27846);var output_checker27848 = schema.core.checker.call(null,output_schema27845);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27845,input_schema27846,input_checker27847,output_checker27848,in_flight_atom__14561__auto__){
return (function fnk27844(G__27849){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27849], null);var temp__4126__auto___27851 = input_checker27847.call(null,args__6035__auto___27850);if(cljs.core.truth_(temp__4126__auto___27851))
{var error__6036__auto___27852 = temp__4126__auto___27851;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27844","fnk27844",881180467,null),cljs.core.pr_str.call(null,error__6036__auto___27852)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27852,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27850,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27846,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__27849;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.PersistentVector.EMPTY);var geo_point_field = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),cljs.core.PersistentVector.EMPTY);var precision = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"precision","precision",-1175707478),cljs.core.PersistentVector.EMPTY);var valch__14563__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geohash-grid"),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14561__auto__,valch__14563__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27853 = output_checker27848.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27853))
{var error__6036__auto___27854 = temp__4126__auto___27853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27844","fnk27844",881180467,null),cljs.core.pr_str.call(null,error__6036__auto___27854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27854,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27845,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27845,input_schema27846,input_checker27847,output_checker27848,in_flight_atom__14561__auto__))
,schema.core.make_fn_schema.call(null,output_schema27845,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27846], null)));
})();return ((function (in_flight_atom__14561__auto__,f__14562__auto__){
return (function() {
var geohash_grid_factory27837 = null;
var geohash_grid_factory27837__0 = (function (){var emptych__14564__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14564__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14561__auto__,emptych__14564__auto__);
});
var geohash_grid_factory27837__1 = (function() { 
var G__27855__delegate = function (p__14565__auto__){return cljs.core.apply.call(null,f__14562__auto__,p__14565__auto__);
};
var G__27855 = function (var_args){
var p__14565__auto__ = null;if (arguments.length > 0) {
  p__14565__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27855__delegate.call(this,p__14565__auto__);};
G__27855.cljs$lang$maxFixedArity = 0;
G__27855.cljs$lang$applyTo = (function (arglist__27856){
var p__14565__auto__ = cljs.core.seq(arglist__27856);
return G__27855__delegate(p__14565__auto__);
});
G__27855.cljs$core$IFn$_invoke$arity$variadic = G__27855__delegate;
return G__27855;
})()
;
geohash_grid_factory27837 = function(var_args){
var p__14565__auto__ = var_args;
switch(arguments.length){
case 0:
return geohash_grid_factory27837__0.call(this);
default:
return geohash_grid_factory27837__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geohash_grid_factory27837.cljs$lang$maxFixedArity = 0;
geohash_grid_factory27837.cljs$lang$applyTo = geohash_grid_factory27837__1.cljs$lang$applyTo;
geohash_grid_factory27837.cljs$core$IFn$_invoke$arity$0 = geohash_grid_factory27837__0;
geohash_grid_factory27837.cljs$core$IFn$_invoke$arity$variadic = geohash_grid_factory27837__1.cljs$core$IFn$_invoke$arity$variadic;
return geohash_grid_factory27837;
})()
;})(in_flight_atom__14561__auto__,f__14562__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var count_matching_factory27857 = null;
var count_matching_factory27857__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var count_matching_factory27857__3 = (function (index,index_type,filter_spec){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
count_matching_factory27857 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory27857__0.call(this);
case 3:
return count_matching_factory27857__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory27857.cljs$core$IFn$_invoke$arity$0 = count_matching_factory27857__0;
count_matching_factory27857.cljs$core$IFn$_invoke$arity$3 = count_matching_factory27857__3;
return count_matching_factory27857;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var records_factory27858 = null;
var records_factory27858__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var records_factory27858__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14557__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
records_factory27858 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory27858__0.call(this);
case 5:
return records_factory27858__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory27858.cljs$core$IFn$_invoke$arity$0 = records_factory27858__0;
records_factory27858.cljs$core$IFn$_invoke$arity$5 = records_factory27858__5;
return records_factory27858;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var tags_of_type_factory27859 = null;
var tags_of_type_factory27859__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var tags_of_type_factory27859__1 = (function (tag_type){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
tags_of_type_factory27859 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory27859__0.call(this);
case 1:
return tags_of_type_factory27859__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory27859.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory27859__0;
tags_of_type_factory27859.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory27859__1;
return tags_of_type_factory27859;
})()
;})(in_flight_atom__14555__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14555__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14555__auto__){
return (function() {
var geotags_of_type_factory27860 = null;
var geotags_of_type_factory27860__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,emptych__14556__auto__);
});
var geotags_of_type_factory27860__1 = (function (tag_type){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto__,valch__14557__auto__);
});
geotags_of_type_factory27860 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory27860__0.call(this);
case 1:
return geotags_of_type_factory27860__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory27860.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory27860__0;
geotags_of_type_factory27860.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory27860__1;
return geotags_of_type_factory27860;
})()
;})(in_flight_atom__14555__auto__))
});
var in_flight_atom__14555__auto___27861 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14555__auto___27861){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14556__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14556__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto___27861,emptych__14556__auto__);
});
var company_search__1 = (function (query){var valch__14557__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14555__auto___27861,valch__14557__auto__);
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
;})(in_flight_atom__14555__auto___27861))
;
